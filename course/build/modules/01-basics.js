const T = require("../theme");
const L = require("../layouts");
const { C } = T;

module.exports = function build(pres) {
  L.titleSlide(pres, {
    tag: "Module 01 · Perfumery Basics",
    graphic: "molecule",
    titleText: "The Vocabulary\nof Perfumery",
    subtitle: "Before you can build a formula, you need the words perfumers actually use to describe one.",
    points: [
      "Twelve key terms, with real-world examples",
      "The fragrance pyramid and concentration tiers",
      "Naturals vs. synthetics, and the myths around both",
    ],
    note: "Set expectations: this module is foundational vocabulary and concepts. Nothing hands-on yet, but everything after this depends on it.",
  });

  L.cardGrid(pres, {
    eyebrow: "Key Terminology · Part 1",
    titleText: "Six words you'll hear constantly",
    tag: "01 · Basics",
    cards: [
      { title: "Concentrate", sub: "The undiluted blend of raw materials before alcohol or solvent is added.", color: C.gold },
      { title: "Compound", sub: "The finished, mixed formula — naturals and synthetics combined into one liquid.", color: C.rust },
      { title: "Dilution", sub: "A material or formula reduced in strength with a solvent, expressed as a %.", color: C.olive },
      { title: "Accord", sub: "Two or more materials blended so they read as one new, unified smell.", color: C.berry },
      { title: "Base", sub: "A pre-built accord used as a foundation — e.g. a musk base or an amber base.", color: C.plum },
      { title: "Modifier", sub: "A material added in small amounts to shift the character of an accord.", color: C.goldDk },
    ],
    note: "Go slow here — these six words will recur in every future module. Use a quick real-world example for each if time allows.",
  });

  L.cardGrid(pres, {
    eyebrow: "Key Terminology · Part 2",
    titleText: "Six more, about how a scent behaves",
    tag: "01 · Basics",
    cards: [
      { title: "Solvent", sub: "The liquid used to carry and dilute materials — ethanol, DPG, TEC and others.", color: C.gold },
      { title: "Fixative", sub: "A material that slows evaporation of lighter notes and extends overall wear.", color: C.rust },
      { title: "Diffusion", sub: "How far and how easily a scent spreads into the surrounding air.", color: C.olive },
      { title: "Tenacity", sub: "How long a material or formula remains detectable over time.", color: C.berry },
      { title: "Impact", sub: "How strongly a material registers, even at very low doses.", color: C.plum },
      { title: "Drydown", sub: "What remains hours in — the final character once top notes have faded.", color: C.goldDk },
    ],
    note: "Diffusion, tenacity and impact get confused constantly — spend extra time distinguishing them, you'll reuse this in module 03.1.",
  });

  L.cardGrid(pres, {
    eyebrow: "The Same Six Words, With Real Examples",
    titleText: "What an accord, base and modifier actually look like",
    tag: "01 · Basics",
    cols: 3,
    cards: [
      { title: "An accord, in practice", sub: "Rose absolute + geranium + a trace of clove — three materials that read as one unmistakable flower, not three chemicals.", color: C.berry },
      { title: "A base, in practice", sub: "A pre-blended \"musk base\" bought ready-made and dropped straight into a formula for instant skin-like depth.", color: C.plum },
      { title: "A modifier, in practice", sub: "A whisper of black pepper added to a vanilla accord — the vanilla is still the star, but it now reads spiced, not flat.", color: C.goldDk },
    ],
    note: "Concrete examples make these words stick far better than definitions alone — pair each with a live smell if possible.",
  });

  L.cardGrid(pres, {
    eyebrow: "Fragrance Concentrations",
    titleText: "Extrait, EDP, EDT, EDC",
    tag: "01 · Basics",
    cols: 4,
    cards: [
      { title: "Extrait", sub: "≈ 20–30% concentrate. The richest, most expensive tier — closest to skin, longest wear.", color: C.rust },
      { title: "Eau de Parfum", sub: "≈ 15–20% concentrate. The modern default for most fine fragrance releases.", color: C.gold },
      { title: "Eau de Toilette", sub: "≈ 5–15% concentrate. Lighter, fresher, common for everyday and citrus formulas.", color: C.olive },
      { title: "Eau de Cologne", sub: "≈ 2–5% concentrate. Very light, classic citrus-led, applied liberally.", color: C.plum },
    ],
    note: "These percentage ranges are industry conventions, not fixed law — brands vary widely. The next point is more important than these numbers.",
  });

  L.mythSlide(pres, {
    eyebrow: "A Critical Distinction",
    titleText: "Concentration is not performance",
    tag: "01 · Basics",
    myth: "A higher concentration percentage always means a stronger, longer-lasting fragrance.",
    fact: "Performance comes from which materials are used — their diffusion, tenacity and fixative structure — far more than from the raw % of concentrate. A well-built 10% EDT can outlast a poorly built 25% extrait. Concentration is a starting ratio, not a guarantee.",
    note: "This is one of the most important corrections in the whole basics module — students constantly conflate concentration % with strength.",
  });

  L.pyramidSlide(pres, {
    eyebrow: "The Classic Model",
    titleText: "The fragrance pyramid",
    tag: "01 · Basics",
    bands: [
      { name: "Top", color: C.gold, examples: "Citrus, light fruits, aldehydes, aromatic herbs — the first impression, 0–30 minutes." },
      { name: "Heart", color: C.olive, examples: "Florals, spices, greens — the main character, emerging 30 minutes to a few hours in." },
      { name: "Base", color: C.plum, examples: "Woods, musks, ambers, resins — the lasting foundation, hours into the drydown." },
    ],
    footnote: "Useful as a teaching and marketing model — but real formulas overlap top, heart and base heavily. Few materials sit in only one layer.",
    note: "Emphasise: this pyramid is a simplification. Almost every real material has some presence across multiple layers — don't let students take it too literally.",
  });

  L.cardGrid(pres, {
    eyebrow: "Solvents",
    titleText: "What carries a formula",
    tag: "01 · Basics",
    cols: 4,
    cards: [
      { title: "Ethanol", sub: "Perfumer's alcohol. The standard solvent for finished fine-fragrance sprays.", color: C.gold },
      { title: "DPG", sub: "Dipropylene glycol. Odourless, non-flammable — common for oils and roll-ons.", color: C.olive },
      { title: "TEC", sub: "Triethyl citrate. A gentler, skin-friendly solvent often used in oil-based formats.", color: C.rust },
      { title: "IPM", sub: "Isopropyl myristate. A light, fast-absorbing carrier used where appropriate.", color: C.plum },
    ],
    note: "Explain why solvents matter: they let you work at safe, evaluable concentrations and match the final product format (spray vs oil vs roll-on).",
  });

  L.formulaSlide(pres, {
    eyebrow: "What Actually Goes Into A Bottle",
    titleText: "Anatomy of a finished perfume",
    tag: "01 · Basics",
    idea: "A finished spray perfume is mostly solvent — not concentrate.",
    rows: [
      { name: "Perfume concentrate", pct: 20, color: C.gold, role: "The formula itself" },
      { name: "Alcohol", pct: 78, color: C.stone, role: "The carrier" },
      { name: "Water", pct: 1, color: C.olive, role: "Optional, softens alcohol bite" },
      { name: "Antioxidants / stabilisers", pct: 0.5, color: C.rust, role: "Where required" },
      { name: "Colour", pct: 0.5, color: C.plum, role: "Where appropriate" },
    ],
    note: "Use round numbers, not a fixed rule — the point is proportion, not precision. This is a teaching example, not a formula to copy.",
  });

  L.comparisonSlide(pres, {
    eyebrow: "Two Sources, One Palette",
    titleText: "Naturals vs. synthetics",
    tag: "01 · Basics",
    left: {
      title: "Naturals", color: C.olive, tint: "E9EDE0",
      items: [
        "Essential oils — steam or expression distilled",
        "Absolutes — solvent extracted, richer and truer",
        "CO2 extracts — extracted under pressure, very clean",
        "Resinoids — extracted from gums and resins",
        "Complex, variable, often expensive",
      ],
    },
    right: {
      title: "Synthetics", color: C.rust, tint: "F0E4DA",
      items: [
        "Aroma chemicals — single, isolated molecules",
        "Captives / speciality materials — proprietary, exclusive",
        "Bases — pre-blended synthetic accords",
        "Precise, consistent, batch after batch",
        "Enable effects naturals simply cannot achieve",
      ],
    },
    note: "Set up the myth-busting that continues in module 03.2 — synthetic does not mean lesser. Both are professional tools.",
  });

  L.cardGrid(pres, {
    eyebrow: "Olfactory Families",
    titleText: "The twelve families you'll learn to recognise",
    tag: "01 · Basics",
    cols: 4,
    cards: [
      { title: "Citrus", sub: "Bergamot, lemon, mandarin", icon: "bergamot", color: T.FAM.citrus.b },
      { title: "Floral", sub: "Rose, jasmine, muguet", icon: "rose", color: T.FAM.floral.b },
      { title: "Fruity", sub: "Peach, apple, blackcurrant", icon: "apple", color: T.FAM.fruity.b },
      { title: "Green", sub: "Cut grass, galbanum, leaves", icon: "grass", color: T.FAM.green.b },
      { title: "Aromatic", sub: "Lavender, rosemary, herbs", icon: "lavender", color: T.FAM.aromatic.b },
      { title: "Woody", sub: "Cedar, sandalwood, vetiver", icon: "cedarwood", color: T.FAM.woody.b },
      { title: "Amber", sub: "Labdanum, resins, warmth", icon: "amber", color: T.FAM.amber.b },
      { title: "Musk", sub: "Clean skin, soft, radiant", icon: "musk", color: T.FAM.musk.ink },
      { title: "Gourmand", sub: "Vanilla, caramel, sugar", icon: "vanilla", color: T.FAM.gourmand.b },
      { title: "Leather", sub: "Suede, birch tar, smoke", icon: "leather", color: T.FAM.leather.b },
      { title: "Aquatic", sub: "Sea air, ozone, melon", icon: "marine", color: T.FAM.marine.b },
      { title: "Spicy", sub: "Pepper, clove, cinnamon", icon: "pepper", color: T.FAM.spicy.b },
    ],
    note: "Don't over-explain each one here — this is a map, not a lesson. Families get their real depth in module 03.1.",
  });

  L.mythGrid(pres, {
    eyebrow: "Playtime",
    titleText: "Common perfumery myths, busted",
    tag: "01 · Basics",
    myths: [
      { myth: "Natural is always better", fact: "Naturals bring soul; synthetics bring precision, safety and effects naturals can't. Great perfumery uses both." },
      { myth: "More oil means stronger", fact: "Material choice, not raw %, drives strength. A well-built low-concentrate formula can outperform a poorly built rich one." },
      { myth: "Synthetic means fake", fact: "Many synthetics smell nothing like an approximation — they're original, beautiful materials with no natural equivalent." },
      { myth: "Expensive material = better perfume", fact: "Price reflects rarity and extraction cost, not olfactory value. Cheap materials can be the hero of a formula." },
      { myth: "Top / heart / base must separate perfectly", fact: "Real materials span multiple layers at once — the pyramid is a teaching model, not a physical law." },
      { myth: "More materials = more complexity", fact: "Complexity comes from how materials interact, not how many are in the beaker. Restraint is a skill." },
    ],
    note: "Have fun with this slide — deliver it with energy, it's meant to be memorable and a little provocative.",
  });

  L.rememberSlide(pres, {
    tag: "End of Module 01",
    text: "The pyramid, the percentages, the categories\nare maps — not the territory. Learn them,\nthen learn when real formulas break them.",
    note: "Close module 01 by reinforcing that everything just taught is a simplified model. Real perfumery is messier and more interesting.",
  });
};
