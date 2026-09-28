"""Build docs/perfumery-compliance-guide.pdf from the Markdown source.

Requires: pip install markdown beautifulsoup4 playwright
Uses the system Chromium at /opt/pw-browsers/chromium (override with CHROMIUM_PATH).
"""
import os
import re
from pathlib import Path

import markdown
from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright

HERE = Path(__file__).parent
SRC = HERE / "perfumery-compliance-guide.md"
OUT = HERE / "perfumery-compliance-guide.pdf"
CHROMIUM = os.environ.get("CHROMIUM_PATH", "/opt/pw-browsers/chromium")


def github_slug(value, separator="-"):
    """Match GitHub's heading anchors so the Markdown's internal links keep working."""
    value = value.strip().lower()
    value = re.sub(r"[^\w\- ]", "", value)
    return value.replace(" ", separator)


CALLOUTS = [
    ("DISCLAIMER", "disclaimer", "Disclaimer"),
    ("READ FIRST", "important", "Read first"),
    ("Important", "important", "Important"),
    ("Common Mistake", "mistake", "Common mistake"),
    ("Mistake", "mistake", "Common mistake"),
    ("Example", "example", "Example"),
    ("FICTIONAL", "example", "Example"),
    ("Good Practice", "good", "Good practice"),
]

CSS = """
@page { size: A4; margin: 20mm 17mm 20mm 17mm; }
:root {
  --ink: #1f2328; --muted: #57606a; --rule: #d0d7de; --accent: #6b3fa0;
  --imp-bg: #fff8e5; --imp-bd: #d4a72c;
  --mis-bg: #ffefef; --mis-bd: #cf222e;
  --ex-bg:  #eef5ff; --ex-bd:  #0969da;
  --good-bg:#eafaef; --good-bd:#1a7f37;
}
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { font-family: "DejaVu Sans", "Liberation Sans", sans-serif; color: var(--ink);
       font-size: 9.6pt; line-height: 1.45; margin: 0; background: #fff; }
h1, h2, h3, h4 { font-family: "DejaVu Serif", "Liberation Serif", serif; color: #2b1646;
                 page-break-after: avoid; break-after: avoid; }
h1 { font-size: 22pt; margin: 0 0 6pt; }
h2 { font-size: 16pt; border-bottom: 2px solid var(--accent); padding-bottom: 4pt;
     margin: 0 0 10pt; break-before: page; }
h3 { font-size: 12pt; margin: 14pt 0 6pt; color: var(--accent); }
p { margin: 5pt 0; }
a { color: #0550ae; text-decoration: none; }
ul, ol { margin: 4pt 0 6pt; padding-left: 18pt; }
li { margin: 2pt 0; }
hr { border: 0; border-top: 1px solid var(--rule); margin: 10pt 0; }
code { font-family: "DejaVu Sans Mono", monospace; font-size: 8.4pt; background: #f3f0f7;
       padding: 0 2pt; border-radius: 2pt; }
pre { background: #f6f4fa; border: 1px solid #e0d8ec; border-radius: 4pt; padding: 7pt 9pt;
      white-space: pre-wrap; word-break: break-word; break-inside: avoid; font-size: 8.2pt; }
pre code { background: none; padding: 0; font-size: inherit; }
table { border-collapse: collapse; width: 100%; margin: 6pt 0 9pt; font-size: 8.3pt; }
th, td { border: 1px solid var(--rule); padding: 3.5pt 5pt; vertical-align: top; text-align: left; }
th { background: #efe9f6; }
tr { break-inside: avoid; }
thead { display: table-header-group; }
blockquote { margin: 8pt 0; padding: 6pt 10pt; border-left: 4px solid var(--rule);
             background: #f6f8fa; border-radius: 0 4pt 4pt 0; break-inside: avoid; }
blockquote table { background: #fff; }
.callout-label { display: block; font-weight: bold; font-size: 7.6pt; letter-spacing: .08em;
                 text-transform: uppercase; margin-bottom: 2pt; }
.important, .disclaimer { background: var(--imp-bg); border-left-color: var(--imp-bd); }
.important .callout-label, .disclaimer .callout-label { color: #7d4e00; }
.mistake { background: var(--mis-bg); border-left-color: var(--mis-bd); }
.mistake .callout-label { color: #a40e26; }
.example { background: var(--ex-bg); border-left-color: var(--ex-bd); }
.example .callout-label { color: #0a3069; }
.good { background: var(--good-bg); border-left-color: var(--good-bd); }
.good .callout-label { color: #116329; }
.disclaimer { font-size: 10.5pt; border: 1px solid var(--imp-bd); border-left-width: 5px; }
/* Long worked examples may need to split across pages. */
blockquote.long { break-inside: auto; }

.cover { height: 250mm; display: flex; flex-direction: column; justify-content: center; }
.cover .kicker { color: var(--accent); letter-spacing: .15em; text-transform: uppercase; font-size: 10pt; }
.cover h1 { font-size: 32pt; line-height: 1.15; margin: 8pt 0 12pt; border: 0; }
.cover .sub { font-size: 13pt; color: var(--muted); margin-bottom: 26pt; }
.cover .meta { font-size: 9.5pt; color: var(--muted); border-top: 2px solid var(--accent); padding-top: 10pt; }

.cheatsheet { break-before: page; font-size: 8pt; line-height: 1.3; }
.cheatsheet h1 { font-size: 16pt; border-bottom: 2px solid var(--accent); padding-bottom: 3pt; margin-bottom: 2pt; }
.cheatsheet h3 { font-size: 9.5pt; margin: 6pt 0 2pt; }
.cheatsheet .cols { column-count: 2; column-gap: 12pt; }
.cheatsheet .cols > * { break-inside: avoid; }
.cheatsheet pre { font-size: 7.6pt; padding: 4pt 6pt; margin: 3pt 0 6pt; }
.cheatsheet .cols > h3:first-child, .cheatsheet .cols > pre:first-of-type { column-span: all; }
.cheatsheet ul, .cheatsheet ol { margin: 2pt 0; padding-left: 13pt; }
.cheatsheet li { margin: 0.5pt 0; }
.cheatsheet p { margin: 2pt 0; }
.cheatsheet .tagline { color: var(--muted); font-style: italic; margin-bottom: 4pt; }
.endnote { font-size: 8pt; color: var(--muted); margin-top: 8pt; border-top: 1px solid var(--rule); padding-top: 4pt; }
"""


def md_to_html(text):
    return markdown.markdown(
        text,
        extensions=["tables", "fenced_code", "sane_lists", "toc"],
        extension_configs={"toc": {"slugify": github_slug}},
    )


EMOJI_CLASS = {"\u26a0": "important", "\u274c": "mistake", "\U0001F4D8": "example", "\u2705": "good"}
LABELS = {"important": "Important", "mistake": "Common mistake", "example": "Example",
          "good": "Good practice", "disclaimer": "Disclaimer"}
EMOJI_RE = re.compile(r"^[\s\u2600-\u27BF\U0001F300-\U0001FAFF\uFE0F\u2014]+")


def strip_leading_emoji(p_tag):
    for node in list(p_tag.contents):
        if isinstance(node, str):
            cleaned = EMOJI_RE.sub("", node)
            node.replace_with(cleaned)
            if cleaned.strip():
                return
        else:
            return


def style_callouts(soup):
    for bq in soup.find_all("blockquote"):
        first = bq.find("p")
        if first is None:
            continue
        text = first.get_text(strip=True)
        strong = first.find("strong")
        lead_is_strong = strong is not None and first.get_text(strip=True).lstrip(
            "".join(EMOJI_CLASS) + "\ufe0f\U0001F4D8 ").startswith(strong.get_text(strip=True)[:10])
        cls, label, title = None, None, None
        if lead_is_strong:
            st = strong.get_text().strip()
            for key, c, lab in CALLOUTS:
                m = re.match(rf"^{re.escape(key)}\b\s*(.*)$", st, re.I)
                if m or key.lower() in st.lower():
                    cls, label = c, lab
                    rest = m.group(1) if m else st
                    if key in ("FICTIONAL", "Mistake"):
                        rest = st
                    num = re.match(r"^(\d+[A-Z]?)\b\s*(.*)$", rest)
                    if num and key == "Example":
                        label = f"{lab} {num.group(1)}"
                        rest = num.group(2)
                    title = re.sub(r"^[\s\u2014\u2013-]+", "", rest).strip()
                    break
        if cls is None:
            for emo, c in EMOJI_CLASS.items():
                if text.startswith(emo):
                    cls, label = c, LABELS[c]
                    break
        if cls is None:
            continue
        bq["class"] = [cls] + (["long"] if len(bq.get_text()) > 1400 else [])
        if lead_is_strong:
            strong.decompose()
        strip_leading_emoji(first)
        span = soup.new_tag("span", attrs={"class": "callout-label"})
        span.string = label
        if title and cls != "disclaimer":
            t = soup.new_tag("strong")
            t.string = title
            first.insert(0, t)
        if first.get_text(strip=True):
            first.insert(0, span)
        else:
            nxt = first.find_next_sibling()
            first.decompose()
            if nxt is not None and nxt.name == "p":
                nxt.insert(0, span)
            else:
                bq.insert(0, span)
    return soup


def build():
    src = SRC.read_text(encoding="utf-8")
    main_md, cheat_md = src.split("\n# Perfumery Compliance Cheat Sheet\n", 1)

    # Replace the Markdown title block with a designed cover page.
    main_md = main_md.split("\n---\n", 1)[1]
    main_html = md_to_html(main_md)

    cheat_body, endnote = cheat_md.rsplit("\n---\n", 1)
    tagline, cheat_rest = cheat_body.strip().split("\n", 1)
    cheat_html = (
        '<section class="cheatsheet" id="perfumery-compliance-cheat-sheet">'
        "<h1>Perfumery Compliance Cheat Sheet</h1>"
        f'<p class="tagline">{tagline.strip("*")}</p>'
        f'<div class="cols">{md_to_html(cheat_rest)}</div>'
        f'<div class="endnote">{md_to_html(endnote)}</div>'
        "</section>"
    )

    cover = """
<section class="cover">
  <div class="kicker">Training handbook</div>
  <h1>Perfumery Compliance:<br>A Practical Guide for Independent Perfumers</h1>
  <div class="sub">IFRA calculations, supplier documents, allergens, CPSR/PIF and market requirements
  for the UK, EU and US, explained for beginners.</div>
  <div class="meta">Written September 2026 · IFRA Standards in force: 51st Amendment
  (52nd Amendment expected to be notified late 2026)<br>
  Educational material only. Not legal, regulatory or toxicological advice.</div>
</section>"""

    html = f"""<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>Perfumery Compliance: A Practical Guide for Independent Perfumers</title>
<style>{CSS}</style></head><body>{cover}<main>{main_html}</main>{cheat_html}</body></html>"""

    soup = style_callouts(BeautifulSoup(html, "html.parser"))
    # The disclaimer and "How to use" section follow the cover; keep them off a forced break.
    first_h2 = soup.find("main").find("h2")
    if first_h2 is not None:
        first_h2["style"] = "break-before: auto;"
    html = str(soup)
    (HERE / "_build.html").write_text(html, encoding="utf-8")

    footer = (
        '<div style="font-size:7pt;color:#57606a;width:100%;padding:0 17mm;'
        'font-family:DejaVu Sans,sans-serif;display:flex;justify-content:space-between;">'
        "<span>Perfumery Compliance: A Practical Guide for Independent Perfumers</span>"
        '<span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span></div>'
    )
    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path=CHROMIUM)
        page = browser.new_page()
        page.set_content(html, wait_until="load")
        page.pdf(
            path=str(OUT),
            format="A4",
            print_background=True,
            display_header_footer=True,
            header_template="<span></span>",
            footer_template=footer,
            margin={"top": "18mm", "bottom": "18mm", "left": "17mm", "right": "17mm"},
            prefer_css_page_size=False,
        )
        browser.close()
    (HERE / "_build.html").unlink()
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    build()
