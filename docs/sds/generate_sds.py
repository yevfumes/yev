"""
Generate GHS / GCC (GSO) format Safety Data Sheets for the Nasser Summer and
Nasser Winter fragrance concentrates.

Classification uses the GHS mixture calculation method (additivity, ATEmix,
summation for aquatic hazards) applied to typical raw-material classifications
taken from supplier SDSs / ECHA C&L. Run:  python3 docs/sds/generate_sds.py
"""
from datetime import date
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (Flowable, KeepTogether, Paragraph, SimpleDocTemplate,
                                Spacer, Table, TableStyle)

OUT = Path(__file__).parent
ISSUE = date.today().isoformat()

SUPPLIER = {
    "name": "Yevfumes",
    "address": "[Street address, City, State/Province, Postcode, Country]",
    "phone": "[Company phone]",
    "email": "yevfumes@gmail.com",
    "emergency": "[24-hour emergency number, e.g. CHEMTREC / Chemtel contract number]",
}

# --------------------------------------------------------------------------
# Raw-material hazard data
#   codes: GHS hazard classes relevant to mixture calculation
#     SI2 skin irrit 2 | EI2 eye irrit 2 | SS1 skin sens 1/1B | AT1 asp tox 1
#     AA1 aquatic acute 1 | AC1/AC2/AC3 aquatic chronic | FL3 flam liq 3
#   ate: oral LD50 (mg/kg) where acute tox 4 applies
# --------------------------------------------------------------------------
RM = {
    "Aldehyde C-11": dict(cas="112-31-2 *", codes=["SI2", "EI2", "AC2"]),
    "Aldehyde C-8 (Octanal)": dict(cas="124-13-0", codes=["FL3", "SI2", "EI2", "AC3"]),
    "Allyl Amyl Glycolate": dict(cas="67634-00-8", codes=["SS1", "AC2"], ate=1000),
    "Benzoin Siam resinoid": dict(cas="9000-72-0", codes=["SS1"]),
    "Bergamot oil FCF": dict(cas="89957-91-5", codes=["FL3", "AT1", "SI2", "EI2", "SS1", "AC2"]),
    "Beta Ionone": dict(cas="79-77-6", codes=["AC2"]),
    "Blood Orange oil": dict(cas="8028-48-6", codes=["FL3", "AT1", "SI2", "SS1", "AA1", "AC1"]),
    "Coumarin": dict(cas="91-64-5", codes=["SS1", "AC3"], ate=293),
    "Dihydromyrcenol": dict(cas="18479-58-8", codes=["SI2", "EI2"]),
    "Ethyl Maltol": dict(cas="4940-11-8", codes=[], ate=1150),
    "Ethyl Vanillin": dict(cas="121-32-4", codes=["EI2"]),
    "Galaxolide (HHCB)": dict(cas="1222-05-5", codes=["AA1", "AC1"]),
    "Guaiacol": dict(cas="90-05-1", codes=["SI2", "EI2"], ate=520),
    "Habanolide": dict(cas="34902-57-3", codes=["AC2"]),
    "Hydroxycitronellal": dict(cas="107-75-5", codes=["EI2", "SS1"]),
    "Iso E Super (OTNE)": dict(cas="54464-57-2", codes=["SI2", "SS1", "AA1", "AC1"]),
    "Lemon oil": dict(cas="84929-31-7", codes=["FL3", "AT1", "SI2", "SS1", "AA1", "AC1"]),
    "Linalool": dict(cas="78-70-6", codes=["SI2", "EI2", "SS1"]),
    "Linalyl Acetate": dict(cas="115-95-7", codes=["SI2", "EI2", "SS1"]),
    "Mandarin oil (green)": dict(cas="84929-38-4", codes=["FL3", "AT1", "SI2", "SS1", "AA1", "AC1"]),
    "Methyl Pamplemousse": dict(cas="67674-46-8", codes=["SI2", "AC2"]),
    "Phenyl Ethyl Alcohol": dict(cas="60-12-8", codes=["EI2"], ate=1609),
    "Sweet Orange oil": dict(cas="8008-57-9", codes=["FL3", "AT1", "SI2", "SS1", "AA1", "AC1"]),
    "Tonalide (AHTN)": dict(cas="1506-02-1", codes=["AA1", "AC1"], ate=570),
    "Vanillin": dict(cas="121-33-5", codes=["EI2"]),
    "Verdox": dict(cas="88-41-5", codes=["AC2"]),
    "Ambrettolide HC": dict(cas="28645-51-4", codes=["AC2"]),
    "Ambroxan": dict(cas="6790-58-5", codes=["AA1", "AC1"]),
    "Amyris oil": dict(cas="8015-65-4", codes=["AT1", "SS1", "AC2"]),
    "Bacdanol": dict(cas="28219-61-6", codes=["SI2", "EI2", "AC2"]),
    "Cedarwood oil Virginia": dict(cas="8000-27-9", codes=["AT1", "AA1", "AC1"]),
    "Ethylene Brassylate": dict(cas="105-95-3", codes=["AC3"]),
    "Heliotropix (base)": dict(cas="proprietary", codes=["SS1"]),
    "Indolarome": dict(cas="18096-62-3", codes=["AC2"], ate=1000),
    "Kephalis": dict(cas="36306-87-3", codes=["AC2"]),
    "Labdanum absolute": dict(cas="8016-26-0", codes=["SS1", "AC2"]),
    "Patchouli oil (coeur)": dict(cas="8014-09-3", codes=["AA1", "AC1"]),
    "Peru Balsam": dict(cas="8007-00-9", codes=["SS1"]),
    "Tobacco Furanone": dict(cas="n/a", codes=[]),
    "Vetiver oil": dict(cas="8016-96-4", codes=["AC2"]),
    "Diluent (from pre-dilutions)": dict(cas="see note", codes=[]),
}

CODE_TEXT = {
    "FL3": "Flam. Liq. 3 (H226)", "AT1": "Asp. Tox. 1 (H304)", "SI2": "Skin Irrit. 2 (H315)",
    "EI2": "Eye Irrit. 2 (H319)", "SS1": "Skin Sens. 1 (H317)", "AA1": "Aquatic Acute 1 (H400)",
    "AC1": "Aquatic Chronic 1 (H410)", "AC2": "Aquatic Chronic 2 (H411)",
    "AC3": "Aquatic Chronic 3 (H412)",
}

# Pure (absolute) % of each material in the concentrate, from the Formulair sheets.
SUMMER = [
    ("Galaxolide (HHCB)", 20.00), ("Iso E Super (OTNE)", 13.00), ("Methyl Pamplemousse", 8.25),
    ("Tonalide (AHTN)", 6.30), ("Dihydromyrcenol", 6.00), ("Hydroxycitronellal", 5.00),
    ("Vanillin", 5.00), ("Bergamot oil FCF", 4.50), ("Habanolide", 4.50), ("Linalool", 4.50),
    ("Ethyl Vanillin", 3.50), ("Lemon oil", 3.00), ("Linalyl Acetate", 3.00),
    ("Sweet Orange oil", 3.00), ("Coumarin", 2.20), ("Verdox", 2.00),
    ("Mandarin oil (green)", 1.80), ("Ethyl Maltol", 1.60), ("Diluent (from pre-dilutions)", 1.17),
    ("Blood Orange oil", 0.75), ("Beta Ionone", 0.45), ("Benzoin Siam resinoid", 0.20),
    ("Phenyl Ethyl Alcohol", 0.20), ("Allyl Amyl Glycolate", 0.0525),
    ("Aldehyde C-11", 0.012), ("Aldehyde C-8 (Octanal)", 0.0105), ("Guaiacol", 0.003),
]
WINTER = [
    ("Ethylene Brassylate", 30.52), ("Vanillin", 12.40), ("Bacdanol", 10.10),
    ("Bergamot oil FCF", 10.10), ("Patchouli oil (coeur)", 6.80), ("Ambrettolide HC", 4.50),
    ("Peru Balsam", 4.50), ("Benzoin Siam resinoid", 3.40), ("Vetiver oil", 2.60),
    ("Heliotropix (base)", 2.30), ("Labdanum absolute", 2.30), ("Linalool", 2.30),
    ("Coumarin", 2.20), ("Ambroxan", 2.00), ("Amyris oil", 1.20), ("Kephalis", 1.20),
    ("Cedarwood oil Virginia", 1.10), ("Phenyl Ethyl Alcohol", 0.30), ("Indolarome", 0.10),
    ("Tobacco Furanone", 0.008), ("Diluent (from pre-dilutions)", 0.07),
]


def classify(formula):
    s = lambda code: sum(p for n, p in formula if code in RM[n]["codes"])
    si, ei, ss_max, at = s("SI2"), s("EI2"), max(
        [p for n, p in formula if "SS1" in RM[n]["codes"]] or [0]), s("AT1")
    aa1, ac1, ac2, ac3 = s("AA1"), s("AC1"), s("AC2"), s("AC3")
    inv = sum(p / RM[n]["ate"] for n, p in formula if RM[n].get("ate"))
    ate = 100 / inv if inv else None
    r = dict(sums=dict(skin_irrit=si, eye_irrit=ei, max_sens=ss_max, asp_tox=at, aq_acute1=aa1,
                       aq_chronic1=ac1, aq_chronic2=ac2, aq_chronic3=ac3, ate_oral=ate))
    h = []
    if at >= 10: h.append("AT1")
    if si >= 10: h.append("SI2")
    if ss_max >= 1: h.append("SS1")
    if ei >= 10: h.append("EI2")
    if ac1 >= 25: h.append("AC1")
    elif 10 * ac1 + ac2 >= 25: h.append("AC2")
    elif 100 * ac1 + 10 * ac2 + ac3 >= 25: h.append("AC3")
    r["acute1"] = aa1 >= 25
    r["hazards"] = h
    return r


H_TEXT = {
    "H227": "H227 Combustible liquid (GHS Cat. 4 – estimated flash point 60–93 °C).",
    "H304": "H304 May be fatal if swallowed and enters airways.",
    "H315": "H315 Causes skin irritation.",
    "H317": "H317 May cause an allergic skin reaction.",
    "H319": "H319 Causes serious eye irritation.",
    "H400": "H400 Very toxic to aquatic life.",
    "H410": "H410 Very toxic to aquatic life with long lasting effects.",
    "H411": "H411 Toxic to aquatic life with long lasting effects.",
}
P_TEXT = [
    "P210 Keep away from heat, hot surfaces, sparks, open flames and other ignition sources. No smoking.",
    "P261 Avoid breathing mist/vapours.",
    "P264 Wash hands thoroughly after handling.",
    "P272 Contaminated work clothing should not be allowed out of the workplace.",
    "P273 Avoid release to the environment.",
    "P280 Wear protective gloves/eye protection.",
    "P301+P310 IF SWALLOWED: Immediately call a POISON CENTRE/doctor.",
    "P331 Do NOT induce vomiting.",
    "P302+P352 IF ON SKIN: Wash with plenty of soap and water.",
    "P305+P351+P338 IF IN EYES: Rinse cautiously with water for several minutes. Remove contact "
    "lenses, if present and easy to do. Continue rinsing.",
    "P333+P313 If skin irritation or rash occurs: Get medical advice/attention.",
    "P337+P313 If eye irritation persists: Get medical advice/attention.",
    "P362+P364 Take off contaminated clothing and wash it before reuse.",
    "P391 Collect spillage.",
    "P403+P235 Store in a well-ventilated place. Keep cool.",
    "P405 Store locked up.",
    "P501 Dispose of contents/container in accordance with local/national regulations.",
]

PRODUCTS = {
    "Nasser_Summer": dict(
        title="NASSER SUMMER", code="YEV-NS-001", formula=SUMMER,
        appearance="Clear liquid, pale yellow (estimated)", odour="Citrus, aromatic, musky, sweet",
        density="approx. 0.97–1.00 g/cm³ at 20 °C (estimated)",
        technical="Hexamethylindanopyran (Galaxolide), Acetyl hexamethyl tetralin (Tonalide)",
        colour_note="Not dyed.",
    ),
    "Nasser_Winter": dict(
        title="NASSER WINTER", code="YEV-NW-001", formula=WINTER,
        appearance="Liquid, yellow to amber (estimated)", odour="Warm, balsamic, woody, vanillic",
        density="approx. 1.00–1.04 g/cm³ at 20 °C (estimated)",
        technical="Patchouli oil, Ambroxan",
        colour_note="Colour may darken with age (vanillin, balsams) – not a quality defect.",
    ),
}

# --------------------------------------------------------------------------
# PDF rendering
# --------------------------------------------------------------------------
ss = getSampleStyleSheet()
BODY = ParagraphStyle("b", parent=ss["BodyText"], fontName="Helvetica", fontSize=8.6, leading=11)
SMALL = ParagraphStyle("s", parent=BODY, fontSize=7.4, leading=9.2)
BOLD = ParagraphStyle("bb", parent=BODY, fontName="Helvetica-Bold")
H1 = ParagraphStyle("h1", parent=BODY, fontName="Helvetica-Bold", fontSize=15, leading=18,
                    alignment=TA_CENTER)
SEC = ParagraphStyle("sec", parent=BODY, fontName="Helvetica-Bold", fontSize=9.6,
                     textColor=colors.white, leading=12)
NAVY = colors.HexColor("#1f3a5f")


class Pictogram(Flowable):
    """Red-bordered GHS diamond with a symbol label."""

    def __init__(self, code, label, size=20 * mm):
        super().__init__()
        self.code, self.label, self.size = code, label, size
        self.width, self.height = size, size + 7 * mm

    def draw(self):
        c, s = self.canv, self.size
        c.saveState()
        c.translate(s / 2, 7 * mm + s / 2)
        c.rotate(45)
        d = s / 1.45
        c.setStrokeColor(colors.red); c.setLineWidth(2.2); c.setFillColor(colors.white)
        c.rect(-d / 2, -d / 2, d, d, fill=1)
        c.restoreState()
        c.setFillColor(colors.black)
        glyph = {"GHS07": "!", "GHS08": "✱", "GHS09": "≈"}[self.code]
        c.setFont("Helvetica-Bold", 20 if glyph == "!" else 16)
        c.drawCentredString(s / 2, 7 * mm + s / 2 - 6, glyph)
        c.setFont("Helvetica-Bold", 6.5)
        c.drawCentredString(s / 2, 3.5 * mm, self.code)
        c.setFont("Helvetica", 5.8)
        c.drawCentredString(s / 2, 0.5 * mm, self.label)


def section(num, title, rows):
    head = Table([[Paragraph(f"SECTION {num}: {title.upper()}", SEC)]], colWidths=[180 * mm])
    head.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), NAVY),
                              ("TOPPADDING", (0, 0), (-1, -1), 3),
                              ("BOTTOMPADDING", (0, 0), (-1, -1), 3)]))
    out = [Spacer(1, 3 * mm), head, Spacer(1, 1.5 * mm)]
    kv = [r for r in rows if isinstance(r, tuple)]
    for r in rows:
        if isinstance(r, tuple):
            t = Table([[Paragraph(r[0], BOLD), Paragraph(r[1], BODY)]],
                      colWidths=[52 * mm, 128 * mm])
            t.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"),
                                   ("LINEBELOW", (0, 0), (-1, -1), 0.25, colors.lightgrey),
                                   ("TOPPADDING", (0, 0), (-1, -1), 1.5),
                                   ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5)]))
            out.append(t)
        elif isinstance(r, str):
            out.append(Paragraph(r, BODY))
        else:
            out.append(r)
    del kv
    return out


def grid(data, widths, header=True, style=SMALL):
    rows = [[Paragraph(str(c), BOLD if (header and i == 0) else style) for c in row]
            for i, row in enumerate(data)]
    t = Table(rows, colWidths=widths, repeatRows=1 if header else 0)
    st = [("GRID", (0, 0), (-1, -1), 0.3, colors.grey), ("VALIGN", (0, 0), (-1, -1), "TOP"),
          ("TOPPADDING", (0, 0), (-1, -1), 1.5), ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5)]
    if header:
        st.append(("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#e6ecf3")))
    t.setStyle(TableStyle(st))
    return t


def build(key, p):
    cls = classify(p["formula"])
    hz, sums = cls["hazards"], cls["sums"]
    aq_h = "H410" if "AC1" in hz else "H411" if "AC2" in hz else "H412"
    aq_cat = {"H410": "Aquatic Chronic 1", "H411": "Aquatic Chronic 2",
              "H412": "Aquatic Chronic 3"}[aq_h]
    h_codes = ["H227", "H304", "H315", "H317", "H319", aq_h]
    class_lines = [
        "Flammable Liquid Cat. 4 (GHS; H227) – based on estimated flash point, see Section 9",
        "Aspiration Hazard Cat. 1 (H304)", "Skin Irritation Cat. 2 (H315)",
        "Skin Sensitisation Cat. 1 (H317)", "Eye Irritation Cat. 2 (H319)",
    ]
    if cls["acute1"]:
        class_lines.append("Hazardous to the aquatic environment – Acute Cat. 1 (H400)")
    class_lines.append(f"Hazardous to the aquatic environment – {aq_cat.replace('Aquatic ', '')} ({aq_h})")
    for code, needed in (("AT1", "H304"), ("SI2", "H315"), ("SS1", "H317"), ("EI2", "H319")):
        assert code in hz, (key, code)

    doc = SimpleDocTemplate(str(OUT / f"SDS_{key}.pdf"), pagesize=A4,
                            leftMargin=15 * mm, rightMargin=15 * mm,
                            topMargin=16 * mm, bottomMargin=16 * mm,
                            title=f"SDS – {p['title']}", author=SUPPLIER["name"])

    def frame(c, d):
        c.saveState()
        c.setFont("Helvetica", 7)
        c.setFillColor(colors.grey)
        c.drawString(15 * mm, 9 * mm, f"{p['title']} ({p['code']})  |  SDS according to GHS Rev. 10 "
                                      f"and GSO GHS requirements  |  Issue {ISSUE}  |  Version 1.0")
        c.drawRightString(195 * mm, 9 * mm, f"Page {d.page}")
        c.restoreState()

    f = []
    f += [Paragraph("SAFETY DATA SHEET", H1),
          Paragraph(f"<b>{p['title']}</b> – Fragrance concentrate (perfume compound)",
                    ParagraphStyle("c", parent=BODY, alignment=TA_CENTER, fontSize=10)),
          Paragraph("Prepared in accordance with the UN GHS (Rev. 10) and GCC Standardization "
                    "Organization GHS labelling requirements, for use in the State of Kuwait",
                    ParagraphStyle("c2", parent=SMALL, alignment=TA_CENTER))]

    f += section(1, "Identification of the substance/mixture and of the company", [
        ("Product name", p["title"]), ("Product code", p["code"]),
        ("Product type", "Mixture – fragrance concentrate (perfume compound), undiluted"),
        ("Recommended use", "Fragrance ingredient for the manufacture of fine fragrance and "
                            "cosmetic products. Industrial/professional use."),
        ("Uses advised against", "Direct application to skin undiluted. Not for ingestion."),
        ("Supplier", f"{SUPPLIER['name']}<br/>{SUPPLIER['address']}<br/>Tel: {SUPPLIER['phone']}"
                     f"<br/>E-mail: {SUPPLIER['email']}"),
        ("Emergency telephone", SUPPLIER["emergency"] +
         "<br/>Kuwait emergency services: 112. Kuwait Poison Control Centre (Ministry of Health)."),
    ])

    picto = Table([[Pictogram("GHS07", "Exclamation mark"), Pictogram("GHS08", "Health hazard"),
                    Pictogram("GHS09", "Environment")]], colWidths=[28 * mm] * 3, hAlign="LEFT")
    f += section(2, "Hazards identification", [
        ("Classification of the mixture", "<br/>".join(class_lines)),
        ("Signal word", "<b>DANGER</b>"),
        ("Hazard pictograms", "GHS07, GHS08, GHS09"),
        picto,
        ("Hazard statements", "<br/>".join(H_TEXT[h] for h in h_codes)),
        ("Precautionary statements", "<br/>".join(P_TEXT)),
        ("Contains (sensitisers)", ", ".join(
            n for n, pct in p["formula"] if "SS1" in RM[n]["codes"] and pct >= 0.1)),
        ("Other hazards", "Not expected to meet PBT/vPvB criteria as a mixture. Contains "
                          "natural essential oils; may cause photosensitivity in rare cases "
                          "(Bergamot FCF is furocoumarin-reduced)."),
    ])

    rows = [["Component", "CAS No.", "% w/w", "GHS classification (component)"]]
    for n, pct in p["formula"]:
        if pct < 0.1:
            continue
        rows.append([n, RM[n]["cas"], f"{pct:.2f}",
                     "; ".join(CODE_TEXT[c] for c in RM[n]["codes"]) +
                     (f"; Acute Tox. 4 oral (H302), ATE {RM[n]['ate']} mg/kg" if RM[n].get("ate")
                      and RM[n]["ate"] <= 2000 else "") or "Not classified"])
    minor = [(n, pct) for n, pct in p["formula"] if pct < 0.1]
    if minor:
        rows.append(["Other components, each &lt;0.1%: " + ", ".join(n for n, _ in minor), "various",
                     f"{sum(x for _, x in minor):.2f}", "Minor contribution; considered in "
                                                        "classification"])
    notes = ("Remaining ingredients are fragrance materials. Diluent from pre-dilutions in the "
             "formula: assumed Dipropylene Glycol (DPG, CAS 25265-71-8, not classified) – "
             "update this section if ethanol or another solvent was used.")
    if key == "Nasser_Summer":
        notes += (" <b>* CAS check:</b> the formula lists Aldehyde C-11 with CAS 112-31-2, which "
                  "is Decanal (Aldehyde C-10). Aldehyde C-11 undecylenic is 112-45-8; C-11 "
                  "undecanal is 112-44-7. Confirm against the supplier label (present at 0.012% – "
                  "no effect on classification).")
    f += section(3, "Composition / information on ingredients", [
        ("Chemical nature", "Mixture of fragrance materials (aroma chemicals, essential oils, "
                            "resinoids)."),
        grid(rows, [52 * mm, 25 * mm, 14 * mm, 89 * mm]), Spacer(1, 1 * mm),
        Paragraph(notes, SMALL)])

    f += section(4, "First-aid measures", [
        ("Inhalation", "Move to fresh air. If symptoms persist, get medical advice."),
        ("Skin contact", "Remove contaminated clothing. Wash skin with plenty of soap and water. "
                         "If irritation or rash develops, get medical advice."),
        ("Eye contact", "Rinse cautiously with water for at least 15 minutes, holding eyelids "
                        "open. Remove contact lenses if easy to do. If irritation persists, get "
                        "medical attention."),
        ("Ingestion", "Do NOT induce vomiting (aspiration hazard). Rinse mouth with water. Call a "
                      "poison centre or doctor immediately. Show this SDS."),
        ("Most important symptoms", "Skin redness/irritation; allergic skin reaction in "
                                    "sensitised persons; eye irritation; aspiration into lungs "
                                    "if swallowed may cause chemical pneumonitis."),
        ("Note to physician", "Treat symptomatically."),
    ])
    f += section(5, "Fire-fighting measures", [
        ("Suitable extinguishing media", "Alcohol-resistant foam, carbon dioxide, dry chemical "
                                         "powder, water spray (fog)."),
        ("Unsuitable media", "Direct high-volume water jet (may spread burning liquid)."),
        ("Specific hazards", "Combustible liquid. Combustion produces carbon monoxide, carbon "
                             "dioxide and irritating smoke."),
        ("Advice for fire-fighters", "Wear self-contained breathing apparatus and full protective "
                                     "clothing. Cool closed containers with water spray. Prevent "
                                     "fire-fighting water from entering drains or waterways."),
    ])
    f += section(6, "Accidental release measures", [
        ("Personal precautions", "Remove ignition sources. Ventilate the area. Wear gloves and "
                                 "eye protection. Avoid contact with skin and eyes."),
        ("Environmental precautions", "Do not allow to enter drains, sewers or watercourses. "
                                      "Inform authorities if released to the environment."),
        ("Clean-up", "Absorb with inert material (sand, vermiculite, diatomaceous earth). Collect "
                     "into closed, labelled containers for disposal. Wash the area with "
                     "detergent and water; collect washings."),
    ])
    f += section(7, "Handling and storage", [
        ("Safe handling", "Use in a well-ventilated area. Avoid contact with skin and eyes. Keep "
                          "away from heat and ignition sources. Do not eat, drink or smoke when "
                          "handling. Wash hands after use."),
        ("Storage", "Store in tightly closed original containers (glass, aluminium, or lacquered/"
                    "lined steel) in a cool, dry, dark, well-ventilated place, ideally 10–25 °C. "
                    "Protect from direct sunlight and heat – important in Kuwait summer "
                    "conditions (do not leave in vehicles or unshaded outdoor storage). Minimise "
                    "headspace or blanket with nitrogen to limit oxidation."),
        ("Incompatible materials", "Strong oxidising agents, strong acids and bases."),
    ])
    f += section(8, "Exposure controls / personal protection", [
        ("Occupational exposure limits", "No component has a Kuwait or ACGIH occupational "
                                         "exposure limit at the concentration present."),
        ("Engineering controls", "General or local exhaust ventilation."),
        ("Eye/face protection", "Safety glasses with side shields (EN 166 / ANSI Z87.1)."),
        ("Hand protection", "Nitrile rubber gloves (≥0.4 mm, EN 374). Replace if contaminated."),
        ("Skin/body protection", "Lab coat or protective clothing."),
        ("Respiratory protection", "Not normally required with adequate ventilation. For "
                                   "aerosols or large spills, organic-vapour filter (type A)."),
    ])
    f += section(9, "Physical and chemical properties", [
        ("Physical state / appearance", p["appearance"]), ("Odour", p["odour"]),
        ("Flash point (closed cup)", "<b>Estimated &gt;60 °C (typically 65–90 °C for this type of "
                                     "composition). MUST be confirmed by laboratory test "
                                     "(ISO 2719 / ASTM D93 or ISO 3679 / ASTM D3828) before "
                                     "shipment</b> – the result determines the transport "
                                     "classification in Section 14."),
        ("Relative density", p["density"]),
        ("Solubility", "Insoluble in water; soluble in ethanol and fragrance oils."),
        ("Boiling point", "&gt;150 °C (mixture, estimated)"),
        ("Auto-ignition temperature", "&gt;200 °C (estimated)"),
        ("Explosive / oxidising properties", "Not explosive. Not oxidising."),
        ("Kinematic viscosity", "Not determined. If measured &gt;20.5 mm²/s at 40 °C, the H304 "
                                "classification may be removed."),
        ("Other", p["colour_note"]),
    ])
    f += section(10, "Stability and reactivity", [
        ("Reactivity / stability", "Stable under recommended storage conditions."),
        ("Conditions to avoid", "Heat, flames, sparks, direct sunlight, prolonged air exposure."),
        ("Incompatible materials", "Strong oxidising agents, strong acids and bases."),
        ("Hazardous decomposition", "None under normal use. Combustion: CO, CO₂."),
        ("Hazardous polymerisation", "Will not occur."),
    ])
    ate = sums["ate_oral"]
    f += section(11, "Toxicological information", [
        ("Acute oral toxicity", f"ATEmix (calculated) ≈ {ate:,.0f} mg/kg bw – not classified "
                                "(&gt;2000 mg/kg)."),
        ("Acute dermal / inhalation", "Not classified based on available component data."),
        ("Skin corrosion/irritation", f"Causes skin irritation (Cat. 2; sum of Cat. 2 components "
                                      f"= {sums['skin_irrit']:.1f}% ≥ 10%)."),
        ("Serious eye damage/irritation", f"Causes serious eye irritation (Cat. 2; sum of Cat. 2 "
                                          f"components = {sums['eye_irrit']:.1f}% ≥ 10%)."),
        ("Skin sensitisation", "May cause an allergic skin reaction (contains Cat. 1 sensitisers "
                               "at ≥1%)."),
        ("Respiratory sensitisation", "Not classified."),
        ("Germ cell mutagenicity / Carcinogenicity / Reproductive toxicity",
         "Not classified. No component present at ≥0.1% is classified CMR."),
        ("STOT single / repeated exposure", "Not classified."),
        ("Aspiration hazard", f"Asp. Tox. 1 – contains {sums['asp_tox']:.1f}% of Cat. 1 "
                              "components (hydrocarbon-rich essential oils); viscosity not "
                              "measured."),
    ])
    aq_line = (f"Sum of Aquatic Chronic 1 components = {sums['aq_chronic1']:.1f}% "
               f"(M-factor 1); Chronic 2 = {sums['aq_chronic2']:.1f}%. "
               f"Mixture classified <b>{aq_cat} ({aq_h})</b>"
               + (" and Aquatic Acute 1 (H400)." if cls["acute1"] else "."))
    f += section(12, "Ecological information", [
        ("Toxicity", aq_line),
        ("Persistence / degradability", "Contains components that are not readily biodegradable "
                                        "(e.g. polycyclic / macrocyclic musks)."),
        ("Bioaccumulation", "Some components have log Kow &gt; 4 and potential to bioaccumulate."),
        ("Mobility in soil", "Low water solubility; expected to adsorb to soil/sediment."),
        ("PBT / vPvB", "Mixture not assessed as PBT/vPvB."),
        ("Other adverse effects", "Avoid release to drains and the environment."),
    ])
    f += section(13, "Disposal considerations", [
        ("Product", "Dispose of as hazardous chemical waste through a licensed contractor, in "
                    "accordance with Kuwait Environment Public Authority (KEPA) regulations and "
                    "local rules. Do not pour into drains."),
        ("Packaging", "Empty containers retain residue; handle as the product. Recycle only when "
                      "fully cleaned."),
    ])

    tech = p["technical"]
    un_rows = [
        ["Regulation", "UN No.", "Proper shipping name", "Class", "PG", "Env. hazard"],
        ["IATA-DGR (air)", "UN3082",
         f"Environmentally hazardous substance, liquid, n.o.s. ({tech})", "9", "III", "Yes"],
        ["IMDG (sea)", "UN3082",
         f"ENVIRONMENTALLY HAZARDOUS SUBSTANCE, LIQUID, N.O.S. ({tech})", "9", "III",
         "Yes – MARINE POLLUTANT"],
        ["ADR (road)", "UN3082",
         f"ENVIRONMENTALLY HAZARDOUS SUBSTANCE, LIQUID, N.O.S. ({tech})", "9", "III", "Yes"],
    ]
    f += section(14, "Transport information", [
        Paragraph("<b>Classification below applies if the tested flash point is &gt;60 °C</b> "
                  "(expected for this composition):", BODY), Spacer(1, 1 * mm),
        grid(un_rows, [22 * mm, 16 * mm, 76 * mm, 13 * mm, 10 * mm, 43 * mm]), Spacer(1, 2 * mm),
        ("Small-quantity exemption",
         "Single or inner packagings containing <b>≤5 L</b> net (liquid) of UN3082 are "
         "<b>not subject to dangerous-goods regulations</b> under IATA Special Provision A197, "
         "IMDG Code 2.10.2.7 and ADR Special Provision 375. Shipments in bottles/containers of "
         "5 L or less may therefore be sent as non-dangerous goods. Recommended wording on the air "
         "waybill / commercial invoice: <i>\"Not restricted as per IATA Special Provision A197\"</i>."),
        ("If flash point ≤60 °C", "<b>UN1266, PERFUMERY PRODUCTS, Class 3, PG III</b> (IATA/IMDG/"
                                  "ADR). Limited Quantity (Y344 air, up to 10 L per inner "
                                  "packaging) and Excepted Quantity (E1) provisions apply. The "
                                  "A197 exemption does NOT apply to Class 3."),
        ("Transport in bulk", "Not intended."),
        ("Special precautions", "Keep upright, cushioned and sealed. Protect from heat during "
                                "transit and customs holding in Kuwait."),
    ])
    f += section(15, "Regulatory information", [
        ("GCC / Kuwait", "SDS and labelling prepared per GSO GHS requirements (GCC Standardization "
                         "Organization) and the UN GHS as used in the State of Kuwait. Importers "
                         "may be asked for this SDS by Kuwait General Administration of "
                         "Customs, the Public Authority for Industry and KEPA. An Arabic "
                         "translation of the label/SDS may be requested for commercial imports."),
        ("IFRA", "Fragrance compounds are expected to comply with the current IFRA Standards "
                 "(51st Amendment) at the intended use level. An IFRA Certificate of Conformity "
                 "should accompany the product."),
    ] + ([("Regulatory note – Peru Balsam",
           "<b>Crude Peru balsam (Myroxylon pereirae) is prohibited as a fragrance ingredient</b> "
           "under IFRA and in cosmetics under EU Regulation 1223/2009 Annex II, which GSO 1943 "
           "(GCC cosmetic safety requirements) follows. Only IFRA-compliant extracts/distillates "
           "are allowed, restricted to 0.4% in the finished product. At 4.5% in this "
           "concentrate, the finished perfume must use no more than ~8.9% of this concentrate, "
           "and the grade used must be an extract/distillate. Confirm the grade with your "
           "supplier before import of finished cosmetics.")] if key == "Nasser_Winter" else []))

    f += section(16, "Other information", [
        ("Full text of H-statements (Section 3)",
         "H226 Flammable liquid and vapour. H302 Harmful if swallowed. H304 May be fatal if "
         "swallowed and enters airways. H315 Causes skin irritation. H317 May cause an allergic "
         "skin reaction. H319 Causes serious eye irritation. H400 Very toxic to aquatic life. "
         "H410 Very toxic to aquatic life with long lasting effects. H411 Toxic to aquatic life "
         "with long lasting effects. H412 Harmful to aquatic life with long lasting effects."),
        ("Classification method", "Calculation method per GHS Rev. 10 Parts 3–4 (additivity, "
                                  "ATEmix, summation method for aquatic hazards) using component "
                                  "classifications from raw-material supplier SDSs / ECHA C&amp;L "
                                  "inventory. Flash point and viscosity are estimated."),
        ("Abbreviations", "ATE: Acute Toxicity Estimate. GHS: Globally Harmonized System. GSO: "
                          "GCC Standardization Organization. IATA: International Air Transport "
                          "Association. IMDG: International Maritime Dangerous Goods Code. PG: "
                          "Packing Group. PBT: Persistent, Bioaccumulative, Toxic."),
        ("Issue date / version", f"{ISSUE} / 1.0"),
        ("Disclaimer", "The information in this SDS is based on our present knowledge and on data "
                       "from raw-material suppliers. It describes the product only in terms of "
                       "safety requirements and is not a product specification. Users must "
                       "ensure the product is suitable for their use and comply with applicable "
                       "laws."),
    ])
    doc.build(f, onFirstPage=frame, onLaterPages=frame)
    return cls


if __name__ == "__main__":
    for k, prod in PRODUCTS.items():
        c = classify(prod["formula"])
        print(k, "total %:", round(sum(x for _, x in prod["formula"]), 2), c["hazards"],
              "Acute1:", c["acute1"], {a: round(b, 1) if b else b for a, b in c["sums"].items()})
        build(k, prod)
        print("  ->", OUT / f"SDS_{k}.pdf")
