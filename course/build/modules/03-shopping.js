const T = require("../theme");
const L = require("../layouts");
const { C } = T;

module.exports = function build(pres) {
  L.titleSlide(pres, {
    tag: "Module 03 · What To Order",
    graphic: "citrus",
    titleText: "Building Your\nFirst Palette",
    subtitle: "What do you actually order first? A practical, no-nonsense shopping module.",
    points: [
      "The first 30 materials, then the next 30",
      "Shopping by family, not by impulse",
      "Your starter-perfumer checklist",
    ],
    accent: C.olive,
    note: "This module bridges materials theory to a real purchase order — the most actionable module so far.",
  });

  L.rememberSlide(pres, {
    tag: "Read This Before You Shop",
    text: "Do not buy three hundred materials.\nBuild a balanced palette, not a chemical hoard.",
    note: "Open with this warning — it's the single most common beginner mistake and it kills momentum fast.",
  });

  L.cardGrid(pres, {
    eyebrow: "Phase 1 · Woods, Amber & Musk",
    titleText: "The first 30 — part 1",
    tag: "03 · Shopping",
    cols: 5,
    cards: [
      { title: "Iso E Super", sub: "Woody. Nearly impossible to overdose — the safest material to practice with.", icon: "iso e super", color: T.FAM.woody.b },
      { title: "Cedarwood", sub: "Woody. An affordable natural that teaches real wood character early.", icon: "cedarwood", color: T.FAM.woody.b },
      { title: "Sandalwood", sub: "Woody. The reference point for creamy, smooth wood.", icon: "sandalwood", color: T.FAM.woody.ink },
      { title: "Ambroxan", sub: "Amber. Huge effect at a tiny dose — the single most important modern base material.", icon: "ambroxan", color: T.FAM.amber.b },
      { title: "Labdanum", sub: "Amber. The natural amber backbone — teaches fixation and warmth.", icon: "labdanum", color: T.FAM.amber.a },
      { title: "Galaxolide", sub: "Musk. The cheapest way to learn what a clean base musk actually does.", icon: "galaxolide", color: T.FAM.musk.ink },
      { title: "Habanolide", sub: "Musk. A modern, more metallic musk to compare directly against Galaxolide.", icon: "habanolide", color: T.FAM.musk.ink },
    ],
    note: "Woods, amber and musk together form the load-bearing base of almost every formula — this is where a beginner's budget is best spent first.",
  });

  L.cardGrid(pres, {
    eyebrow: "Phase 1 · Floral, Citrus, Green & Gourmand",
    titleText: "The first 30 — part 2",
    tag: "03 · Shopping",
    cols: 4,
    cards: [
      { title: "Hedione", sub: "Floral. Teaches diffusion and radiance — a genuinely formula-changing material.", icon: "hedione", color: T.FAM.floral.b },
      { title: "Linalool", sub: "Floral. Gentle, forgiving, very hard to overdose — a safe floral-fresh starting point.", icon: "linalool", color: T.FAM.floral.a },
      { title: "Bergamot", sub: "Citrus. The classic opening lift — every beginner formula needs a citrus reference.", icon: "bergamot", color: T.FAM.citrus.b },
      { title: "Dihydromyrcenol", sub: "Fresh. Explosive citrus-aromatic lift — teaches what \"fresh\" synthetics do.", icon: "dihydromyrcenol", color: T.FAM.citrus.a },
      { title: "cis-3-Hexenol", sub: "Green. The exact smell of cut grass — dose tiny, it teaches restraint fast.", icon: "cis-3-hexenol", color: T.FAM.green.b },
      { title: "Vanillin", sub: "Gourmand. Warm, cheap and endlessly useful — the most-used gourmand material.", icon: "vanillin", color: T.FAM.gourmand.b },
      { title: "Ethyl Maltol", sub: "Gourmand. Instant candy-sweet lift — teaches how little you actually need.", icon: "ethyl maltol", color: T.FAM.gourmand.ink },
      { title: "Coumarin", sub: "Gourmand. Sweet hay warmth — a fougère and gourmand cornerstone.", icon: "coumarin", color: T.FAM.gourmand.a },
    ],
    note: "Floral, citrus, green and gourmand round out the first 30 — by the end of this list, every major family has at least one representative.",
  });

  L.checklistSlide(pres, {
    eyebrow: "Quick Reference",
    titleText: "The first 30, A to Z",
    tag: "03 · Shopping",
    groups: [
      { title: "A – F", color: C.goldDk, items: ["Ambroxan", "Bergamot", "Cedarwood", "cis-3-Hexenol", "Coumarin", "Dihydromyrcenol", "Ethyl Maltol"] },
      { title: "G – L", color: C.olive, items: ["Galaxolide", "Habanolide", "Hedione", "Iso E Super", "Labdanum", "Linalool"] },
      { title: "S – V", color: C.rust, items: ["Sandalwood", "Vanillin"] },
    ],
    note: "Same 15 materials, alphabetised — useful once you're actually placing an order and working from a supplier's own listing.",
  });

  L.checklistSlide(pres, {
    eyebrow: "Phase 2",
    titleText: "The next 30 — expanding possibilities",
    tag: "03 · Shopping",
    groups: [
      { title: "Woods & Amber", color: C.goldDk, items: ["Cashmeran", "Vetiver", "Norlimbanol"] },
      { title: "Musks", color: C.stone, items: ["Ambrettolide"] },
      { title: "Florals", color: C.berry, items: ["Rose absolute", "Jasmine absolute"] },
      { title: "Fruity & Green", color: C.olive, items: ["Allyl amyl glycolate", "Galbanum", "Prunolide"] },
      { title: "Gourmand & Fresh", color: C.rust, items: ["Calone", "Heliotropin", "Patchouli"] },
    ],
    note: "This second wave dramatically expands what's possible — but only makes sense once the first 30 are familiar.",
  });

  L.cardGrid(pres, {
    eyebrow: "Shop By Family, Not By Impulse",
    titleText: "Organise every purchase around the palette",
    tag: "03 · Shopping",
    cols: 5,
    cards: [
      { title: "Woods", sub: "Structural base", icon: "cedarwood", color: T.FAM.woody.b },
      { title: "Musks", sub: "Body & fixation", icon: "musk", color: T.FAM.musk.ink },
      { title: "Ambers", sub: "Warmth", icon: "amber", color: T.FAM.amber.b },
      { title: "Florals", sub: "Heart", icon: "rose", color: T.FAM.floral.b },
      { title: "Citrus", sub: "Opening lift", icon: "bergamot", color: T.FAM.citrus.b },
      { title: "Fruity", sub: "Juiciness", icon: "apple", color: T.FAM.fruity.b },
      { title: "Green", sub: "Freshness", icon: "grass", color: T.FAM.green.b },
      { title: "Fresh / Aquatic", sub: "Airiness", icon: "marine", color: T.FAM.marine.b },
      { title: "Gourmand", sub: "Sweetness", icon: "vanilla", color: T.FAM.gourmand.b },
      { title: "Naturals", sub: "Depth & soul", icon: "labdanum", color: T.FAM.woody.ink },
    ],
    note: "Ten shopping categories — encourage students to buy at least one or two materials from every category before doubling up.",
  });

  L.splitSlide(pres, {
    eyebrow: "The Discipline",
    titleText: "Balance beats curiosity",
    tag: "03 · Shopping",
    rows: [
      { h: "Cover every family first", d: "One material from each of the ten categories teaches you more than ten materials from one category." },
      { h: "Resist the rare and expensive", d: "That exotic captive material is exciting — but useless without the fundamentals to build around it." },
      { h: "Depth comes later", d: "Once your first 60 materials are familiar, specialise into what you actually love working with." },
    ],
    drawVisual: (s, x, y, w, h) => {
      const cx = x + w / 2, cy = y + h / 2;
      const cols = [C.gold, C.rust, C.olive, C.berry, C.plum];
      cols.forEach((c, i) => T.filledCircle(s, cx + (i - 2) * (w * 0.11), cy, w * 0.06, c));
    },
    visualCaption: "A balanced palette, not a random hoard.",
    note: "This connects back to the mindset module — buying random \"interesting\" materials is the equivalent of copying formulas without understanding.",
  });

  L.checklistSlide(pres, {
    eyebrow: "Ready To Order",
    titleText: "Your starter-perfumer checklist",
    tag: "03 · Shopping",
    groups: [
      { title: "Materials", color: C.gold, items: ["First 30 list complete", "One material per family minimum", "Naturals + synthetics both represented"] },
      { title: "Equipment", color: C.rust, items: ["0.001g scale", "Disposable pipettes", "Amber bottles + scent strips"] },
      { title: "Organisation", color: C.olive, items: ["Material log started", "Storage boxes labelled", "Dilution bottles ready"] },
    ],
    note: "This is the practical wrap-up before module 04 — a student who checks every box here is genuinely ready to begin diluting.",
  });

  L.rememberSlide(pres, {
    tag: "End of Module 03",
    text: "Depth beats width. Thirty materials you know\nintimately beat three hundred you've\nnever really smelled.",
    note: "Close by reinforcing patience — this module often produces the most excitement and the most temptation to overbuy.",
  });
};
