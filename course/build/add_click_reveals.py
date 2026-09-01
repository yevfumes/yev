#!/usr/bin/env python3
"""
Post-process a pptxgenjs-built .pptx to add PowerPoint click-triggered
"Appear" animations, driven by objectName tags of the form "bldN_..."
that were set on shapes/text at generation time.

For each slide, shapes whose cNvPr name matches ^bld(\\d+)_ are grouped by N
and revealed together in ascending N order, one group per mouse click.
Untagged shapes are unaffected and remain visible immediately.

Usage: python3 add_click_reveals.py input.pptx output.pptx
"""
import re
import shutil
import sys
import tempfile
import zipfile
from pathlib import Path

BLD_RE = re.compile(r'<p:cNvPr id="(\d+)" name="bld(\d+)_[^"]*"')


def build_timing_xml(groups):
    """groups: list of lists of shape ids, in click order. Returns the
    <p:timing>...</p:timing> string, or '' if there are no groups."""
    if not groups:
        return ""

    _id = [2]  # cTn ids must be unique positive ints across the tree; start at 2 (root uses 1)

    def next_id():
        _id[0] += 1
        return _id[0]

    par_blocks = []
    for group_ids in groups:
        effect_pars = []
        for spid in group_ids:
            effect_pars.append(
                f'<p:par><p:cTn id="{next_id()}" fill="hold" nodeType="clickEffect">'
                f'<p:stCondLst><p:cond delay="0"/></p:stCondLst>'
                f'<p:childTnLst>'
                f'<p:set>'
                f'<p:cBhvr>'
                f'<p:cTn id="{next_id()}" dur="1" fill="hold"><p:stCondLst><p:cond delay="0"/></p:stCondLst></p:cTn>'
                f'<p:tgtEl><p:spTgt spid="{spid}"/></p:tgtEl>'
                f'<p:attrNameLst><p:attrName>style.visibility</p:attrName></p:attrNameLst>'
                f'</p:cBhvr>'
                f'<p:to><p:strVal val="visible"/></p:to>'
                f'</p:set>'
                f'</p:childTnLst>'
                f'</p:cTn></p:par>'
            )
        par_blocks.append(
            f'<p:par><p:cTn id="{next_id()}" fill="hold">'
            f'<p:stCondLst><p:cond delay="indefinite"/></p:stCondLst>'
            f'<p:childTnLst>'
            f'<p:par><p:cTn id="{next_id()}" fill="hold">'
            f'<p:stCondLst><p:cond delay="0"/></p:stCondLst>'
            f'<p:childTnLst>' + "".join(effect_pars) + '</p:childTnLst>'
            f'</p:cTn></p:par>'
            f'</p:childTnLst>'
            f'</p:cTn></p:par>'
        )

    build_p_list = "".join(
        f'<p:bldP spid="{spid}" grpId="0"/>' for group_ids in groups for spid in group_ids
    )

    return (
        '<p:timing>'
        '<p:tnLst>'
        '<p:par><p:cTn id="1" dur="indefinite" restart="never" nodeType="tmRoot">'
        '<p:childTnLst>'
        '<p:seq concurrent="1" nextAc="seek">'
        f'<p:cTn id="{next_id()}" dur="indefinite" nodeType="mainSeq">'
        '<p:childTnLst>' + "".join(par_blocks) + '</p:childTnLst>'
        '</p:cTn>'
        '</p:seq>'
        '</p:childTnLst>'
        '</p:cTn></p:par>'
        '</p:tnLst>'
        f'<p:bldLst>{build_p_list}</p:bldLst>'
        '</p:timing>'
    )


def process_slide_xml(xml_text):
    groups = {}
    for m in BLD_RE.finditer(xml_text):
        spid, grp = m.group(1), int(m.group(2))
        groups.setdefault(grp, []).append(spid)
    if not groups:
        return xml_text, 0
    ordered_groups = [groups[k] for k in sorted(groups.keys())]
    timing_xml = build_timing_xml(ordered_groups)
    if "</p:sld>" not in xml_text:
        raise ValueError("slide xml missing </p:sld>")
    new_xml = xml_text.replace("</p:sld>", timing_xml + "</p:sld>")
    return new_xml, len(ordered_groups)


def main(src, dst):
    src, dst = Path(src), Path(dst)
    with tempfile.TemporaryDirectory() as td:
        td = Path(td)
        with zipfile.ZipFile(src) as zin:
            zin.extractall(td)

        slides_dir = td / "ppt" / "slides"
        total_animated = 0
        for slide_file in sorted(slides_dir.glob("slide*.xml")):
            text = slide_file.read_text(encoding="utf-8")
            new_text, n_groups = process_slide_xml(text)
            if n_groups:
                slide_file.write_text(new_text, encoding="utf-8")
                total_animated += 1
                print(f"  {slide_file.name}: {n_groups} click groups")

        if dst.exists():
            dst.unlink()
        with zipfile.ZipFile(dst, "w", zipfile.ZIP_DEFLATED) as zout:
            for f in sorted(td.rglob("*")):
                if f.is_file():
                    zout.write(f, f.relative_to(td))

        print(f"Animated {total_animated} slide(s). Wrote {dst}")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: add_click_reveals.py input.pptx output.pptx")
        sys.exit(1)
    main(sys.argv[1], sys.argv[2])
