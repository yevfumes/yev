const T = require("../theme");
const L = require("../layouts");
const { C } = T;

module.exports = function build(pres) {
  L.titleSlide(pres, {
    tag: "Module 11 · Compliance",
    graphic: "rings",
    eyebrow: "Presented by Yev",
    titleText: "Compliance,\nSimply Explained",
    subtitle: "An introduction to keeping your formulas safe and legal to sell — not a substitute for professional guidance.",
    points: [
      "What IFRA is, and how to use the Standards Library",
      "IFRA limits, worked through two real calculations",
      "What an SDS and allergen declaration actually cover",
    ],
    presenter: "Yev",
    accent: C.taupeDk,
    note: "Deliver this module calmly and clearly — compliance overwhelms beginners fast. Keep the visual language simple throughout.",
  });

  L.rememberSlide(pres, {
    tag: "Please Read This First",
    text: "This module is an introduction.\nYou are still responsible for the regulations\nthat apply to your country and product.",
    note: "State this disclaimer clearly on camera as well — it protects both students and the course.",
  });

  L.splitSlide(pres, {
    eyebrow: "The Global Standard",
    titleText: "What is IFRA, and why does it matter?",
    tag: "11 · Compliance",
    rows: [
      { h: "An industry self-regulatory body", d: "The International Fragrance Association sets science-based usage standards for fragrance materials, developed with independent safety experts." },
      { h: "Prevents real safety issues", d: "Standards exist to prevent skin sensitisation, allergic reactions and other genuine safety concerns — not to make perfumery difficult." },
      { h: "Followed by every reputable supplier and brand", d: "Selling a fragrance product without checking IFRA compliance is a real legal and safety risk, not just a technicality." },
    ],
    drawVisual: (s, x, y, w, h) => { T.iconChip(s, x + w / 2, y + h * 0.46, w * 0.32, "ifra", { fam: "leather" }); },
    visualCaption: "A safety framework, not a bureaucratic obstacle.",
    note: "Set the tone for the whole module here — IFRA exists to protect real people, not to create paperwork for its own sake.",
  });

  L.cardGrid(pres, {
    eyebrow: "The Framework, In Four Parts",
    titleText: "IFRA — the industry's safety framework",
    tag: "11 · Compliance",
    cols: 4,
    cards: [
      { title: "IFRA Standards", sub: "Science-based usage limits for fragrance materials.", icon: "ifra", color: T.FAM.leather.b },
      { title: "Restricted materials", sub: "Allowed, but only up to a defined maximum %.", icon: "sparkle", color: T.FAM.spicy.b },
      { title: "Prohibited materials", sub: "Not permitted in fragrance at all.", icon: "sparkle", color: C.smoke },
      { title: "Category limits", sub: "Limits vary by how a product is used on the body.", icon: "regulatory", color: T.FAM.woody.b },
    ],
    note: "IFRA categories cover everything from fine fragrance to household products — explain that the limit depends on end use.",
  });

  L.cardGrid(pres, {
    eyebrow: "Not All Products Are Equal",
    titleText: "Categories, and why Category 4 matters here",
    tag: "11 · Compliance",
    cols: 3,
    cards: [
      { title: "Categories track exposure", sub: "A rinse-off soap, a leave-on lotion and a fine fragrance carry different safety margins — each gets its own limit.", color: C.gold },
      { title: "Category 4 = fine fragrance", sub: "Perfumes, EDPs and extraits fall under Category 4 — the category this course's formulas are built for.", color: C.rust },
      { title: "Category limits can change", sub: "IFRA updates its Standards in numbered amendments — always confirm you're reading the current version.", color: C.olive },
    ],
    note: "Don't memorise category numbers or definitions from any single source, including this course — always confirm the current category structure directly from IFRA's own published Standards.",
  });

  L.splitSlide(pres, {
    eyebrow: "Worked Example 1",
    titleText: "Checking a material against its limit",
    tag: "11 · Compliance",
    rows: [
      { h: "Material X, Category 4 (fine fragrance)", d: "Suppose its IFRA limit in Category 4 is 0.5% of the finished product — an illustrative figure, not a real one." },
      { h: "Used at 2% of the concentrate", d: "Your formula sheet lists Material X at 2% of the perfume concentrate." },
      { h: "The concentrate is diluted to 20%", d: "In the finished spray, Material X becomes 2% × 20% = 0.4% of the total product." },
      { h: "0.4% is under the 0.5% limit — compliant", d: "Always calculate the material's share of the finished product, not just the concentrate." },
    ],
    drawVisual: (s, x, y, w, h) => {
      const cx = x + w / 2, cy = y + h * 0.42;
      T.ringFrame(s, cx, cy, w * 0.24, C.olive, { thickness: 0.03 });
      s.addText("0.4%", { x: cx - w * 0.24, y: cy - 0.22, w: w * 0.48, h: 0.44, align: "center", valign: "middle",
        fontFace: T.FONT_HEAD, fontSize: 20, bold: true, color: C.olive, isTextBox: true, margin: 0 });
    },
    visualCaption: "Concentrate % × dilution % = final product %. Always check against the finished product.",
    note: "This calculation trips up almost every beginner — walk through it slowly and repeat it for a second material if time allows.",
  });

  L.splitSlide(pres, {
    eyebrow: "Worked Example 2",
    titleText: "Calculating the maximum permitted amount",
    tag: "11 · Compliance",
    rows: [
      { h: "Start from the finished-product limit", d: "Material X still has an illustrative Category 4 limit of 0.5% of the finished product." },
      { h: "Know your dilution", d: "Your concentrate is used at 20% in the finished spray — a typical EDP strength." },
      { h: "Divide the limit by the dilution", d: "Maximum concentrate % = 0.5% ÷ 20% = 2.5%. That's the most you could ever use of Material X in your concentrate." },
      { h: "This is a ceiling, not a target", d: "Staying comfortably under 2.5% leaves room for reformulation and for other materials that might share the same restriction." },
    ],
    drawVisual: (s, x, y, w, h) => {
      const cx = x + w / 2, cy = y + h * 0.42;
      T.ringFrame(s, cx, cy, w * 0.24, C.rust, { thickness: 0.03 });
      s.addText("2.5%", { x: cx - w * 0.24, y: cy - 0.22, w: w * 0.48, h: 0.44, align: "center", valign: "middle",
        fontFace: T.FONT_HEAD, fontSize: 20, bold: true, color: C.rust, isTextBox: true, margin: 0 });
    },
    visualCaption: "The same calculation run in reverse — from finished-product limit back to concentrate ceiling.",
    note: "This is the calculation students actually need before writing a formula, not just after — run it for every restricted material before finalising percentages.",
  });

  L.cardGrid(pres, {
    eyebrow: "Don't Confuse These",
    titleText: "Three percentages, three different things",
    tag: "11 · Compliance",
    cols: 3,
    cards: [
      { title: "Raw material %", sub: "How much of the material is in your pure fragrance oil, before any dilution — e.g. 2% of the concentrate.", color: C.gold },
      { title: "Concentrate %", sub: "How much of your bottle is fragrance oil versus alcohol — e.g. a 20% EDP dilution.", color: C.olive },
      { title: "Final %", sub: "What the customer's skin is actually exposed to — the number an IFRA limit actually applies to.", color: C.rust },
    ],
    note: "This is the single most common beginner compliance mistake — an IFRA limit always refers to the third number, never the first.",
  });

  L.splitSlide(pres, {
    eyebrow: "Where To Check",
    titleText: "Using the IFRA Standards Library",
    tag: "11 · Compliance",
    rows: [
      { h: "Search by material name or CAS number", d: "The free IFRA Standards Library lets you look up any regulated material directly." },
      { h: "Check the category that matches your product", d: "A material's limit can differ hugely between categories — read the one that matches fine fragrance (Category 4) for this course's work." },
      { h: "Note the amendment number", d: "Standards are updated periodically — always confirm you're reading the current amendment, not an archived one." },
      { h: "No listing doesn't mean no documentation needed", d: "An unrestricted material still needs supplier paperwork — absence from the library isn't a free pass to skip checking." },
    ],
    drawVisual: (s, x, y, w, h) => { T.iconChip(s, x + w / 2, y + h * 0.46, w * 0.32, "regulatory", { fam: "woody" }); },
    visualCaption: "One search, one confirmed answer — always from the current Standards, never memorised.",
    note: "Encourage students to bookmark the Standards Library and check it as a habit, not just when something feels risky.",
  });

  L.cardGrid(pres, {
    eyebrow: "Know Your Materials",
    titleText: "What an SDS actually tells you",
    tag: "11 · Compliance",
    cols: 4,
    cards: [
      { title: "Section 1 — Identification", sub: "What the material is, and who supplies it.", icon: "sds", color: T.FAM.leather.b },
      { title: "Section 2 — Hazards", sub: "Its hazard classification and key risks.", icon: "hazard", color: T.FAM.spicy.b },
      { title: "Section 3 — Composition", sub: "What it's made of, including listed impurities.", icon: "molecule", color: T.FAM.woody.b },
      { title: "Section 7 — Handling & Storage", sub: "How to store and work with it safely.", icon: "amber bottle", color: T.FAM.amber.b },
      { title: "Section 8 — Exposure Controls", sub: "What protective equipment (PPE) to use.", icon: "gloves", color: T.FAM.musk.ink },
      { title: "Section 9 — Physical Properties", sub: "Flashpoint, solubility, appearance and more.", icon: "co2", color: T.FAM.marine.b },
      { title: "Section 14 — Transport Info", sub: "How the material is classified for shipping.", icon: "regulatory", color: C.smoke },
    ],
    note: "An SDS has 16 standardised sections in total — these seven are the ones a perfumer actually uses day to day. Every raw material supplier should provide one; if they don't, that's a red flag about the supplier.",
  });

  L.splitSlide(pres, {
    eyebrow: "Two Different Documents",
    titleText: "An SDS is not an IFRA certificate",
    tag: "11 · Compliance",
    rows: [
      { h: "An SDS covers safety and handling", d: "Hazards, storage, PPE, transport — chemical safety information, not fragrance-industry usage limits." },
      { h: "An IFRA certificate covers usage limits", d: "Confirms a material's IFRA status and any restricted maximum percentage — a completely different purpose." },
      { h: "You need both, from every supplier", d: "Request an SDS and, where relevant, an IFRA certificate or conformity statement for every material you buy." },
    ],
    drawVisual: (s, x, y, w, h) => { T.iconChip(s, x + w / 2, y + h * 0.46, w * 0.32, "sds", { fam: "leather" }); },
    visualCaption: "Two documents, two different jobs — both essential, neither a substitute for the other.",
    note: "This correction genuinely matters — many beginners assume one document covers everything, and it doesn't.",
  });

  L.splitSlide(pres, {
    eyebrow: "Consumer Right To Know",
    titleText: "Allergen declarations",
    tag: "11 · Compliance",
    rows: [
      { h: "Certain materials must be declared", d: "A defined list of fragrance allergens must be listed on packaging above a set concentration threshold." },
      { h: "This applies even to natural materials", d: "Many essential oils contain declarable allergens naturally — linalool and limonene among the most common." },
      { h: "Check every material's allergen content", d: "Your supplier's documentation should state the relevant allergen composition of each raw material." },
    ],
    drawVisual: (s, x, y, w, h) => { T.drawFlower(s, x + w / 2, y + h * 0.42, w * 0.22, C.berry); },
    visualCaption: "Even a beautiful rose absolute may carry declarable allergens.",
    note: "Reassure students this isn't a reason to fear naturals — it's simply a labelling requirement to plan for.",
  });

  L.cardGrid(pres, {
    eyebrow: "Labelling Hazards",
    titleText: "CLP — how hazards get communicated",
    tag: "11 · Compliance",
    cols: 5,
    cards: [
      { title: "Classification", sub: "The formal category a product falls into.", icon: "hazard", color: T.FAM.spicy.b },
      { title: "Pictograms", sub: "Standard symbols shown on packaging.", icon: "pictogram", color: T.FAM.spicy.ink },
      { title: "Signal words", sub: "\"Warning\" or \"Danger,\" indicating severity.", icon: "sparkle", color: C.smoke },
      { title: "Hazard phrases", sub: "Standard phrases describing the specific risk.", icon: "label", color: T.FAM.leather.b },
      { title: "Precautions", sub: "What a user should do to stay safe.", icon: "gloves", color: T.FAM.musk.ink },
    ],
    note: "CLP determines what actually has to appear on your finished product's label, based on your formula's hazard profile.",
  });

  L.mythSlide(pres, {
    eyebrow: "A Useful Tool, Not An Authority",
    titleText: "The Good Scents Company",
    tag: "11 · Compliance",
    myth: "If a material is listed on The Good Scents Company, it's approved and safe to use as I like.",
    fact: "Good Scents is a fantastic research and reference tool for material properties — but it is not a regulatory authority. Always confirm safety and legal usage limits through your supplier's documentation, IFRA, the SDS, and official regulatory databases.",
    note: "Many self-taught beginners lean on Good Scents for compliance decisions — this correction genuinely matters.",
  });

  L.checklistSlide(pres, {
    eyebrow: "Build The Habit",
    titleText: "Documentation to request from every supplier",
    tag: "11 · Compliance",
    groups: [
      { title: "Safety & Composition", color: C.gold, items: [
        "Safety Data Sheet (SDS)",
        "Specification sheet / technical data",
        "Composition & impurity information",
      ] },
      { title: "Regulatory Status", color: C.rust, items: [
        "IFRA Certificate or conformity statement",
        "Allergen declaration",
        "Other regulatory documentation for your market",
      ] },
    ],
    note: "Make requesting this paperwork part of your ordering routine — most established suppliers provide it automatically or on request, and hesitation to provide it is itself a warning sign.",
  });

  L.splitSlide(pres, {
    eyebrow: "One More Variable",
    titleText: "Regulations vary by region and product type",
    tag: "11 · Compliance",
    rows: [
      { h: "IFRA is global, but law is local", d: "Different countries and regions layer their own cosmetic and chemical regulations on top of IFRA — always check what applies where you sell." },
      { h: "Product type changes the rules too", d: "A fine fragrance, a candle and a soap can face different regulatory requirements even when built from the same materials." },
      { h: "When in doubt, get local advice", d: "For anything beyond a hobby batch, a professional regulatory assessor for your specific market is worth the cost." },
    ],
    drawVisual: (s, x, y, w, h) => { T.iconChip(s, x + w / 2, y + h * 0.46, w * 0.32, "regulatory", { fam: "woody" }); },
    visualCaption: "One global standard, many local rules — check both before you sell anything.",
    note: "This is the honest caveat to close the technical content on — nothing in this module replaces checking the specific rules for your own market.",
  });

  L.circleProcessFlow(pres, {
    eyebrow: "The Compliance Path",
    titleText: "From formula to sellable label",
    tag: "11 · Compliance",
    steps: [
      { label: "Formula", icon: "formula", fam: "woody", desc: "Finalised composition" },
      { label: "IFRA check", icon: "ifra", fam: "leather", desc: "Confirm limits met" },
      { label: "Safety data", icon: "sds", fam: "leather", desc: "Review each SDS" },
      { label: "Allergen info", icon: "allergen", fam: "floral", desc: "Declare as required" },
      { label: "Local assessment", icon: "assessor", fam: "amber", desc: "Meet your market's rules" },
      { label: "Label", icon: "label", fam: "leather", desc: "Print, compliant & ready" },
    ],
    note: "This flow is the practical checklist to run through before any formula is offered for sale.",
  });

  L.rememberSlide(pres, {
    tag: "End of Module 11",
    text: "Compliance isn't optional paperwork —\nit's the difference between a hobby\nand a business you can legally sell.",
    note: "Close firmly but not scarily — this is manageable with the right habits, not a reason to avoid launching a brand.",
  });
};
