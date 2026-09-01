#!/usr/bin/env python3
"""
Post-process a pptxgenjs-built .pptx to add native PowerPoint slide
transitions, driven by a per-slide marker shape of the form
"trans_<kind>_<uid>" set on an invisible, offscreen text box at
generation time (see transitionTag() in layouts.js).

Must run BEFORE add_click_reveals.py: this script inserts <p:transition>
right before </p:sld>. When add_click_reveals.py runs afterwards, it
also inserts before </p:sld>, so the result is
  ...<p:transition/>... <p:timing>...</p:timing></p:sld>
which is the order required by the OOXML CT_Slide schema
(cSld, clrMapOvr?, transition?, timing?, extLst?).

Usage: python3 add_transitions.py input.pptx output.pptx
"""
import re
import sys
import tempfile
import zipfile
from pathlib import Path

MARKER_RE = re.compile(r'name="trans_([a-z_]+)_\d+"')

# Each entry is the raw <p:transition>...</p:transition> XML to insert.
# spd="med" keeps every transition quick and subtle rather than slow and
# showy — appropriate for a lecture deck that needs to keep moving.
TRANSITIONS = {
    "fade": '<p:transition spd="med"><p:fade/></p:transition>',
    "push_l": '<p:transition spd="med"><p:push dir="l"/></p:transition>',
    "wipe_l": '<p:transition spd="med"><p:wipe dir="l"/></p:transition>',
}
DEFAULT_KIND = "fade"


def process_slide_xml(xml_text):
    m = MARKER_RE.search(xml_text)
    kind = m.group(1) if m else DEFAULT_KIND
    transition_xml = TRANSITIONS.get(kind, TRANSITIONS[DEFAULT_KIND])
    if "</p:sld>" not in xml_text:
        raise ValueError("slide xml missing </p:sld>")
    new_xml = xml_text.replace("</p:sld>", transition_xml + "</p:sld>")
    return new_xml, kind


def main(src, dst):
    src, dst = Path(src), Path(dst)
    with tempfile.TemporaryDirectory() as td:
        td = Path(td)
        with zipfile.ZipFile(src) as zin:
            zin.extractall(td)

        slides_dir = td / "ppt" / "slides"
        total = 0
        for slide_file in sorted(slides_dir.glob("slide*.xml")):
            text = slide_file.read_text(encoding="utf-8")
            new_text, kind = process_slide_xml(text)
            slide_file.write_text(new_text, encoding="utf-8")
            total += 1
            print(f"  {slide_file.name}: {kind}")

        if dst.exists():
            dst.unlink()
        with zipfile.ZipFile(dst, "w", zipfile.ZIP_DEFLATED) as zout:
            for f in sorted(td.rglob("*")):
                if f.is_file():
                    zout.write(f, f.relative_to(td))

        print(f"Added transitions to {total} slide(s). Wrote {dst}")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: add_transitions.py input.pptx output.pptx")
        sys.exit(1)
    main(sys.argv[1], sys.argv[2])
