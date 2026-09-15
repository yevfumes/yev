const T = require("../theme");
const L = require("../layouts");
const { C } = T;

module.exports = function build(pres) {
  L.titleSlide(pres, {
    tag: "Module 03.1 · Raw Materials",
    graphic: "flower",
    titleText: "Naturals & How\nMaterials Behave",
    subtitle: "Before you shop, you need a framework — how perfumers actually think about a raw material.",
    accent: C.olive,
    points: [
      "The vocabulary: volatility, diffusion, tenacity, role",
      "Four natural material families, in real depth",
      "Real named materials — not just categories",
    ],
    note: "This module is about vocabulary and behaviour, applied specifically to natural materials. Synthetics get their own module next.",
  });

  L.cardGrid(pres, {
    eyebrow: "The Map",
    titleText: "Twelve olfactory groups, revisited",
    tag: "03.1 · Naturals",
    cols: 4,
    cards: [
      { title: "Citrus", sub: "Bright, volatile top notes", icon: "bergamot", color: T.FAM.citrus.b },
      { title: "Floral", sub: "The heart of most formulas", icon: "rose", color: T.FAM.floral.b },
      { title: "Green", sub: "Sharp, leafy, unripe", icon: "grass", color: T.FAM.green.b },
      { title: "Fruity", sub: "Juicy, sweet, often synthetic-assisted", icon: "apple", color: T.FAM.fruity.b },
      { title: "Woody", sub: "Dry, warm structural base", icon: "cedarwood", color: T.FAM.woody.b },
      { title: "Amber", sub: "Resinous, warm, enveloping", icon: "amber", color: T.FAM.amber.b },
      { title: "Musk", sub: "Skin-like, radiant, soft", icon: "musk", color: T.FAM.musk.ink },
      { title: "Gourmand", sub: "Edible, sweet, comforting", icon: "vanilla", color: T.FAM.gourmand.b },
      { title: "Spicy", sub: "Warm, sharp, piquant", icon: "pepper", color: T.FAM.spicy.b },
      { title: "Aromatic", sub: "Herbal, medicinal, fresh", icon: "lavender", color: T.FAM.aromatic.b },
      { title: "Leather", sub: "Smoky, animalic, dry", icon: "leather", color: T.FAM.leather.b },
      { title: "Marine / fresh", sub: "Ozonic, clean, airy", icon: "marine", color: T.FAM.marine.b },
    ],
    note: "Same twelve families from module 01, now framed as a sorting tool you'll use to classify every material you smell. Today we go deep on four of them, natural-side.",
  });

  L.timelineSlide(pres, {
    eyebrow: "Behaviour Over Time",
    titleText: "Longevity — how long a material lasts",
    tag: "03.1 · Naturals",
    points: [
      { t: "Short-lived", label: "Citrus, light greens — gone in under 2 hours" },
      { t: "Medium-lived", label: "Most florals, spices — present for several hours" },
      { t: "Long-lasting", label: "Woods, resins, musks — detectable a day or more later" },
    ],
    caption: "Longevity is a spectrum, not three fixed boxes — most materials sit between these markers.",
    note: "Longevity is one of the first properties students should log for every material — connect directly to module 05's evaluation habit.",
  });

  L.cardGrid(pres, {
    eyebrow: "Behaviour, Precisely",
    titleText: "Diffusion is not the same as tenacity",
    tag: "03.1 · Naturals",
    cols: 4,
    cards: [
      { title: "Strong up close", sub: "Detectable only right at the skin or strip — low projection, an \"intimate\" material.", color: C.gold },
      { title: "Projection", sub: "How far a material's smell carries into the surrounding space beyond the skin.", color: C.rust },
      { title: "Diffusion", sub: "How easily and quickly a smell spreads and fills a room from a small amount.", color: C.olive },
      { title: "Tenacity", sub: "How long the material remains detectable at all, regardless of how strong it is.", color: C.plum },
    ],
    note: "These four terms get confused constantly — a material can have huge projection but low tenacity, or the reverse. Use concrete examples: bergamot projects instantly but fades fast; sandalwood projects little but lasts for days.",
  });

  L.splitSlide(pres, {
    eyebrow: "One Piece Of The Puzzle",
    titleText: "Molecular weight and volatility",
    tag: "03.1 · Naturals",
    rows: [
      { h: "Lighter molecules tend to evaporate faster", d: "Small, light molecules generally move into the air more readily — this is part of why citrus notes read first.", color: C.gold },
      { h: "But it's not the only factor", d: "Polarity, vapour pressure, and how a material binds to skin or fabric all matter just as much.", color: C.olive },
      { h: "Use it as a rough guide, not a rule", d: "Some heavier molecules are surprisingly diffusive; some light ones are surprisingly tenacious. Always confirm by smelling.", color: C.rust },
    ],
    drawVisual: (s, x, y, w, h) => { T.drawMolecule(s, x + w / 2, y + h / 2, w * 0.26, C.olive, { nodeColor: C.gold, bondColor: C.stone }); },
    visualCaption: "A molecule diagram tells you a starting hypothesis — your nose confirms it.",
    note: "Keep this simple and honest — don't present molecular weight as a deterministic rule, the prompt is explicit about avoiding that oversimplification.",
  });

  L.cardGrid(pres, {
    eyebrow: "Natural Extraction Methods",
    titleText: "Not all naturals are made the same way",
    tag: "03.1 · Naturals",
    cols: 5,
    cards: [
      { title: "Essential oils", sub: "Steam-distilled or cold-expressed — direct, classic extraction.", icon: "essential oil", color: T.FAM.green.b },
      { title: "Absolutes", sub: "Solvent-extracted — richer, truer to the living flower, more expensive.", icon: "absolute", color: T.FAM.floral.b },
      { title: "CO2 extracts", sub: "Extracted under pressure — very clean, often closest to the raw material.", icon: "co2", color: T.FAM.marine.b },
      { title: "Resinoids", sub: "Extracted from gums and resins — deep, warm, amber-adjacent.", icon: "resinoid", color: T.FAM.amber.b },
      { title: "Tinctures", sub: "Materials steeped directly in alcohol — simple, traditional, variable.", icon: "tincture", color: T.FAM.amber.ink },
    ],
    note: "Different extraction methods of the same plant can smell meaningfully different — e.g. rose absolute vs. rose otto.",
  });

  // ============================================================
  // NATURAL CITRUS
  // ============================================================
  L.familyMoodboard(pres, {
    eyebrow: "Natural Materials · Family 1 of 4",
    titleText: "Natural Citrus",
    tag: "03.1 · Naturals",
    familyName: "Citrus",
    famKey: "citrus",
    items: [
      { name: "Bergamot", icon: "bergamot" },
      { name: "Lemon", icon: "lemon" },
      { name: "Lime", icon: "lime" },
      { name: "Sweet Orange", icon: "sweet orange" },
      { name: "Mandarin", icon: "mandarin" },
      { name: "Grapefruit", icon: "grapefruit" },
    ],
    note: "Bright, inviting, easy to remember — this moodboard format repeats for every family across the course.",
  });

  L.cardGrid(pres, {
    eyebrow: "Natural Citrus, In Depth",
    titleText: "Eight citrus oils — not one smell",
    tag: "03.1 · Naturals",
    cols: 4,
    cards: [
      { title: "Bergamot", sub: "Fresh, elegant, floral-citrus, slightly bitter. Very fast top note, gone in under 2 hours.", icon: "bergamot", color: T.FAM.citrus.b },
      { title: "Lemon", sub: "Bright, sharp, sparkling and immediately recognisable. A fleeting, classic freshness lift.", icon: "lemon", color: T.FAM.citrus.b },
      { title: "Lime", sub: "Sharper, greener and more tart than lemon. Zesty and short-lived.", icon: "lime", color: T.FAM.green.a },
      { title: "Sweet Orange", sub: "Softer, sweeter, rounder and more juicy than lemon or lime. A warm, candy-like top note.", icon: "sweet orange", color: T.FAM.citrus.a },
      { title: "Mandarin", sub: "Soft, sweet, gentle citrus — a smoother, less acidic alternative to orange.", icon: "mandarin", color: T.FAM.citrus.b },
      { title: "Grapefruit", sub: "Bitter, fresh, slightly sulphurous depending on quality — reads further into the heart than most citrus.", icon: "grapefruit", color: T.FAM.fruity.a },
      { title: "Bitter Orange", sub: "Drier and more tart than sweet orange, with a slightly green, peel-like edge.", icon: "bitter orange", color: T.FAM.citrus.a },
      { title: "Petitgrain", sub: "Green, bitter, twiggy — distilled from leaves and twigs, not fruit. Longer-lived than the peel oils.", icon: "petitgrain", color: T.FAM.green.b },
    ],
    note: "Encourage side-by-side smelling — citrus oils are the easiest family to tell apart when compared directly, and the hardest to tell apart from memory alone.",
  });

  L.materialCard(pres, {
    eyebrow: "Materials To Know",
    titleText: "Three citrus oils to learn cold",
    tag: "03.1 · Naturals",
    materials: [
      { name: "Bergamot", icon: "bergamot", profile: "Fresh, elegant, floral-citrus, slightly bitter", effect: "The classic fresh opening lift", role: "Top note · fleeting · diffusive", color: T.FAM.citrus.b },
      { name: "Grapefruit", icon: "grapefruit", profile: "Bitter, fresh, radiant", effect: "Modern, sparkling brightness", role: "Top note · short · diffusive", color: T.FAM.fruity.a },
      { name: "Petitgrain", icon: "petitgrain", profile: "Green, bitter, woody-twiggy", effect: "Bridges citrus into the heart", role: "Top-heart · medium · intimate", color: T.FAM.green.b },
    ],
    note: "These three show the range within one family — bergamot for lift, grapefruit for sparkle, petitgrain for structure.",
  });

  // ============================================================
  // NATURAL WOODS
  // ============================================================
  L.familyMoodboard(pres, {
    eyebrow: "Natural Materials · Family 2 of 4",
    titleText: "Natural Woods",
    tag: "03.1 · Naturals",
    familyName: "Woods",
    famKey: "woody",
    items: [
      { name: "Sandalwood", icon: "sandalwood" },
      { name: "Cedarwood", icon: "cedarwood" },
      { name: "Vetiver", icon: "vetiver" },
      { name: "Patchouli", icon: "patchouli" },
      { name: "Guaiacwood", icon: "guaiacwood" },
      { name: "Amyris", icon: "amyris" },
    ],
    note: "Wood-ring icons for the cross-section woods, a root icon for vetiver, a single leaf for patchouli.",
  });

  L.cardGrid(pres, {
    eyebrow: "Natural Woods, In Depth",
    titleText: "The structural base of the formula",
    tag: "03.1 · Naturals",
    cols: 3,
    cards: [
      { title: "Sandalwood", sub: "Creamy, smooth, warm, soft wood. Base note, very long — the gold standard for smooth woods.", icon: "sandalwood", color: T.FAM.woody.b },
      { title: "Cedarwood", sub: "Dry, pencil-like, structured woodiness — character shifts with origin. Base note, long.", icon: "cedarwood", color: T.FAM.woody.b },
      { title: "Vetiver", sub: "Rooty, earthy, dry, smoky, grassy. Base note, very long, grounding and textured.", icon: "vetiver", color: T.FAM.woody.ink },
      { title: "Patchouli", sub: "Earthy, woody, damp, camphoraceous or clean depending on quality. Base note, extremely long.", icon: "patchouli", color: T.FAM.woody.ink },
      { title: "Guaiacwood", sub: "Smoky, sweet, woody, slightly rosy. Base note, long — an underused, characterful wood.", icon: "guaiacwood", color: T.FAM.woody.a },
      { title: "Amyris", sub: "Soft, slightly oily, budget-friendly sandalwood-adjacent. Base note, long, inexpensive.", icon: "amyris", color: T.FAM.woody.a },
    ],
    note: "Woods are the load-bearing walls of a formula — almost every finished perfume rests on one or two of these at the base.",
  });

  L.materialCard(pres, {
    eyebrow: "Materials To Know",
    titleText: "Four woods to learn cold",
    tag: "03.1 · Naturals",
    materials: [
      { name: "Sandalwood", icon: "sandalwood", profile: "Creamy, smooth, warm, soft wood", effect: "Smoothness, comfort", role: "Base · very long · intimate", color: T.FAM.woody.b },
      { name: "Vetiver", icon: "vetiver", profile: "Rooty, earthy, dry, smoky", effect: "Grounding, texture", role: "Base · very long · moderate", color: T.FAM.woody.ink },
      { name: "Patchouli", icon: "patchouli", profile: "Earthy, woody, damp", effect: "Depth and grip", role: "Base · extremely long", color: T.FAM.woody.ink },
      { name: "Cedarwood", icon: "cedarwood", profile: "Dry, pencil-like woodiness", effect: "Softness, structure", role: "Base · long · quiet", color: T.FAM.woody.b },
    ],
    note: "These four naturals are the backbone naturals used across almost every genre, from fresh to oriental.",
  });

  // ============================================================
  // NATURAL FLORALS
  // ============================================================
  L.familyMoodboard(pres, {
    eyebrow: "Natural Materials · Family 3 of 4",
    titleText: "Natural Florals",
    tag: "03.1 · Naturals",
    familyName: "Florals",
    famKey: "floral",
    items: [
      { name: "Rose", icon: "rose" },
      { name: "Jasmine", icon: "jasmine" },
      { name: "Neroli", icon: "neroli" },
      { name: "Ylang-Ylang", icon: "ylang-ylang" },
      { name: "Geranium", icon: "geranium" },
      { name: "Osmanthus", icon: "osmanthus" },
    ],
    note: "Notice how the flower icon shape itself changes — round for rose, star for jasmine, small for softer florals — a visual cue for character.",
  });

  L.cardGrid(pres, {
    eyebrow: "Natural Florals, In Depth",
    titleText: "The heart of nearly every formula",
    tag: "03.1 · Naturals",
    cols: 4,
    cards: [
      { title: "Rose", sub: "Honeyed, green, slightly spicy. Heart note, medium-long, moderately diffusive — the archetypal floral.", icon: "rose", color: T.FAM.floral.b },
      { title: "Jasmine", sub: "Indolic, heady, intensely floral with an animalic edge. Heart note, long-lasting, very diffusive in tiny amounts.", icon: "jasmine", color: T.FAM.floral.b },
      { title: "Ylang-Ylang", sub: "Creamy, banana-custard, exotic and heavy. Heart note, long, very diffusive — easy to overdose.", icon: "ylang-ylang", color: T.FAM.floral.b },
      { title: "Neroli", sub: "Fresh, bitter-orange-blossom, faintly green. Top-heart note — lighter and fresher than orange blossom absolute.", icon: "neroli", color: T.FAM.citrus.a },
      { title: "Orange Blossom", sub: "Richer and more indolic than neroli, from the same flower via solvent extraction. Heart note, warm and lush.", icon: "orange blossom", color: T.FAM.floral.a },
      { title: "Lavender", sub: "Herbal-floral, camphoraceous, clean. Top-heart, medium tenacity — the bridge between aromatic and floral.", icon: "lavender", color: T.FAM.aromatic.b },
      { title: "Geranium", sub: "Rosy but sharper and greener than rose itself, minty-metallic edge. Heart note, medium — a common rose extender.", icon: "geranium", color: T.FAM.floral.a },
      { title: "Osmanthus", sub: "Apricot-suede, tea-like, unusual. Heart note, medium-long — a distinctive, less common floral.", icon: "osmanthus", color: T.FAM.floral.a },
    ],
    note: "Florals are where naturals matter most — synthetics can approximate a rose, but rarely replace it entirely. This is the most expensive category to shop for.",
  });

  L.materialCard(pres, {
    eyebrow: "Materials To Know",
    titleText: "Four florals to learn cold",
    tag: "03.1 · Naturals",
    materials: [
      { name: "Rose", icon: "rose", profile: "Honeyed, green, slightly spicy", effect: "Warmth and romance", role: "Heart · medium-long · moderate", color: T.FAM.floral.b },
      { name: "Jasmine", icon: "jasmine", profile: "Indolic, heady, sensual", effect: "Radiance, depth", role: "Heart · long · very diffusive", color: T.FAM.floral.b },
      { name: "Neroli", icon: "neroli", profile: "Fresh bitter-orange blossom", effect: "Lifts and lightens a floral heart", role: "Top-heart · medium · diffusive", color: T.FAM.citrus.a },
      { name: "Ylang-Ylang", icon: "ylang-ylang", profile: "Creamy, exotic, banana-custard", effect: "Lushness, tropical warmth", role: "Heart · long · very diffusive", color: T.FAM.floral.b },
    ],
    note: "Have students smell all four side by side — the differences between rose, jasmine, neroli and ylang-ylang are the clearest floral lesson in the course.",
  });

  // ============================================================
  // NATURAL RESINS / BALSAMS
  // ============================================================
  L.familyMoodboard(pres, {
    eyebrow: "Natural Materials · Family 4 of 4",
    titleText: "Natural Resins & Balsams",
    tag: "03.1 · Naturals",
    familyName: "Resins & Balsams",
    famKey: "amber",
    items: [
      { name: "Labdanum", icon: "labdanum" },
      { name: "Benzoin", icon: "benzoin" },
      { name: "Frankincense", icon: "frankincense" },
      { name: "Myrrh", icon: "myrrh" },
      { name: "Peru Balsam", icon: "peru balsam" },
      { name: "Tolu Balsam", icon: "tolu balsam" },
    ],
    note: "Resins are the warm, sticky, ancient heart of perfumery — most predate synthetic chemistry by thousands of years.",
  });

  L.cardGrid(pres, {
    eyebrow: "Natural Resins & Balsams, In Depth",
    titleText: "How they differ: sweetness, darkness, smoke",
    tag: "03.1 · Naturals",
    cols: 3,
    cards: [
      { title: "Labdanum", sub: "Amber-resinous, leathery, honeyed. Base note, very long, richly diffusive — the backbone of most amber accords.", icon: "labdanum", color: T.FAM.amber.b },
      { title: "Benzoin", sub: "Sweet, vanilla-like, balsamic. Base note, long, warm and softly diffusive — a natural sweetener and fixative.", icon: "benzoin", color: T.FAM.amber.a },
      { title: "Frankincense", sub: "Resinous, citrusy-piney, faintly smoky. Base-heart, long — cooler and fresher than most resins.", icon: "frankincense", color: T.FAM.amber.ink },
      { title: "Myrrh", sub: "Bitter, medicinal, dark-resinous. Base note, very long, low diffusion — the darkest and most brooding of the resins.", icon: "myrrh", color: T.FAM.amber.ink },
      { title: "Peru Balsam", sub: "Sweet, cinnamon-vanilla, slightly spicy. Base note, long — closer to gourmand than most resins.", icon: "peru balsam", color: T.FAM.amber.a },
      { title: "Tolu Balsam", sub: "Sweet, floral-balsamic, softer than Peru balsam. Base note, long, gentle sweetness and fixation.", icon: "tolu balsam", color: T.FAM.amber.a },
    ],
    note: "Every resin is a natural fixative — this is exactly why they anchor base notes and slow the evaporation of everything above them.",
  });

  L.materialCard(pres, {
    eyebrow: "Materials To Know",
    titleText: "Three resins to learn cold",
    tag: "03.1 · Naturals",
    materials: [
      { name: "Labdanum", icon: "labdanum", profile: "Amber-resinous, leathery, honeyed", effect: "Warmth, fixation", role: "Base · very long · diffusive", color: T.FAM.amber.b },
      { name: "Benzoin", icon: "benzoin", profile: "Sweet, vanilla-balsamic", effect: "Softness and sweetness", role: "Base · long · gentle", color: T.FAM.amber.a },
      { name: "Frankincense", icon: "frankincense", profile: "Resinous, citrusy-piney, smoky", effect: "Coolness within warmth", role: "Base-heart · long", color: T.FAM.amber.ink },
    ],
    note: "Labdanum, benzoin and frankincense together roughly define the natural \"amber\" space long before Ambroxan existed.",
  });

  // ============================================================
  // MINTS
  // ============================================================
  L.cardGrid(pres, {
    eyebrow: "A Fifth, Smaller Family",
    titleText: "Minty naturals",
    tag: "03.1 · Naturals",
    cols: 2,
    cards: [
      { title: "Spearmint", sub: "Sweet, rounded, slightly fruity mint — softer and less medicinal than peppermint. Top note, short-medium.", icon: "spearmint", color: T.FAM.green.b },
      { title: "Peppermint", sub: "Sharp, cool, camphoraceous mint with real bite. Top note, short — reads instantly, fades fast.", icon: "peppermint", color: T.FAM.green.ink },
    ],
    note: "Mints are a small but useful family on their own — sharp, cooling top notes that show up in fresh and gourmand-fresh formulas alike.",
  });

  L.splitSlide(pres, {
    eyebrow: "An Important Caveat",
    titleText: "\"Natural\" does not mean unrestricted",
    tag: "03.1 · Naturals",
    rows: [
      { h: "Naturals carry real allergens", d: "Citrus oils, for example, naturally contain limonene and linalool — the same allergens declared on synthetic materials that contain them.", color: C.rust },
      { h: "IFRA restricts naturals too", d: "Materials like oakmoss, treemoss and certain citrus oils carry genuine IFRA usage limits — being natural doesn't exempt a material from Standards.", color: C.olive },
      { h: "Check documentation the same way", d: "Every natural still deserves an SDS and IFRA check before it goes into a formula — Module 11 covers exactly how.", color: C.plum },
    ],
    drawVisual: (s, x, y, w, h) => { T.iconChip(s, x + w / 2, y + h * 0.46, w * 0.32, "bergamot", { fam: "citrus" }); },
    visualCaption: "A beautiful natural material is still a material — treat it with the same regulatory diligence as a synthetic.",
    note: "This is a common beginner misconception worth stating plainly — 'natural' is not a safety claim, it's a source description.",
  });

  L.checklistSlide(pres, {
    eyebrow: "Worth Exploring Later",
    titleText: "More naturals to consider, by family",
    tag: "03.1 · Naturals",
    groups: [
      { title: "More Citrus", color: C.gold, items: ["Yuzu", "Litsea Cubeba", "Tangerine", "Clementine"] },
      { title: "More Florals & Green", color: C.berry, items: ["Tuberose", "Mimosa", "Violet Leaf", "Galbanum", "Carnation"] },
      { title: "Spice & Herb", color: C.rust, items: ["Black Pepper", "Clove", "Cardamom", "Clary Sage", "Basil"] },
      { title: "More Resins", color: C.plum, items: ["Opoponax", "Elemi", "Copaiba Balsam"] },
    ],
    note: "This is a shopping horizon, not a requirement — the core families already covered are genuinely enough to start. Add from this list once you've worked through the essentials.",
  });

  L.heroSlide(pres, {
    eyebrow: "The Honest Truth About Naturals",
    titleText: "No two harvests smell identical",
    tag: "03.1 · Naturals",
    drawVisual: (s, x, y, w, h) => {
      const n = 3;
      for (let i = 0; i < n; i++) {
        T.drawFlower(s, x + w * (0.22 + i * 0.28), y + h * 0.48, w * 0.12, L.heroFor("f" + i), { transparency: 8 + i * 6 });
      }
    },
    caption: "Climate, soil, harvest timing and extraction batch all shift the smell of a natural — plan for variation, don't fight it.",
    note: "Explain practically: always re-evaluate a new batch of a natural material before trusting an existing formula built on the old one.",
  });

  L.rememberSlide(pres, {
    tag: "End of Module 03.1",
    text: "Naturals bring soul and complexity —\nand they demand respect for their variability.",
    note: "Close the module. Bridge to next: 'now let's look at the other half of the palette — synthetics.'",
  });
};
