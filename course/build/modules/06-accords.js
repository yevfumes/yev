const T = require("../theme");
const L = require("../layouts");
const { C } = T;

module.exports = function build(pres) {
  L.titleSlide(pres, {
    tag: "Module 06 · Building Accords",
    graphic: "drop",
    eyebrow: "Presented by Kristan",
    titleText: "From Materials\nTo Accords",
    subtitle: "This is where perfumery gets creative — combining individual materials into one recognisable smell.",
    points: [
      "Breaking apple, amber and leather into facets",
      "The Jean Carles method, step by step",
      "Iterating an accord until it reads true",
    ],
    presenter: "Kristan",
    accent: C.berry,
    note: "This is a hands-on, practical module. Encourage students to have a few materials on hand to build alongside.",
  });

  L.splitSlide(pres, {
    eyebrow: "The Core Idea",
    titleText: "What is an accord?",
    tag: "06 · Accords",
    rows: [
      { h: "A deliberate blend, not a mixture", d: "An accord is materials chosen and balanced on purpose so they merge into one new, coherent impression — not several smells layered on top of each other." },
      { h: "Different from randomly combining materials", d: "Throwing materials together usually produces mud. An accord works because each material is given a specific role, so the result reads as intentional." },
      { h: "It can smell like something no single material does", d: "A convincing rose or leather accord is built from materials that individually smell nothing like the target — the character only emerges once they're combined correctly." },
      { h: "A building block for bigger perfumes", d: "A finished perfume is really a composition of several accords working together, not one long list of raw materials." },
    ],
    drawVisual: (s, x, y, w, h) => {
      const cx = x + w / 2, cy = y + h * 0.4;
      T.drawFlower(s, cx, cy, w * 0.24, C.berry);
    },
    visualCaption: "Three or four materials → one unmistakable rose, none of which smell like rose alone.",
    note: "Use a live example if possible — build a two-material accord on camera and let it click for viewers.",
  });

  L.flowSlide(pres, {
    eyebrow: "How To Build An Accord · Part 1",
    titleText: "Start with a target, then build outward",
    tag: "06 · Accords",
    steps: [
      { label: "Set the target", desc: "Decide exactly what you're building — e.g. \"a bright, honeyed rose.\"" },
      { label: "Choose the lead material", desc: "One material carries the core identity — e.g. Phenylethyl Alcohol for rose." },
      { label: "Add supporting materials", desc: "Round out the character — e.g. citronellol and geraniol extend the rose body." },
      { label: "Add contrast", desc: "A facet that isn't already there — e.g. a green or spicy edge against the sweetness." },
    ],
    note: "This is the general recipe behind every accord in this module — Rose is used here as the running example, but the steps apply to any target.",
  });

  L.flowSlide(pres, {
    eyebrow: "How To Build An Accord · Part 2",
    titleText: "Give it volume, then refine it",
    tag: "06 · Accords",
    steps: [
      { label: "Add volume & diffusion", desc: "Make it carry — e.g. Hedione opens space around the rose." },
      { label: "Add fixative / base support", desc: "Anchor it so it lasts — e.g. a soft musk underneath." },
      { label: "Evaluate", desc: "Smell it on a fresh strip, honestly, against the original target." },
      { label: "Modify proportions", desc: "Adjust one material or ratio based on what's missing or dominating." },
      { label: "Repeat", desc: "Keep cycling evaluate → modify until it reads true." },
    ],
    note: "This loop is exactly the Jean Carles method and the development loop later in this module — the same discipline at every scale.",
  });

  L.cardGrid(pres, {
    eyebrow: "Familiar Targets",
    titleText: "Accords you already know",
    tag: "06 · Accords",
    cols: 3,
    cards: [
      { title: "Apple", sub: "Juicy, green, slightly sweet.", icon: "apple", color: T.FAM.fruity.b },
      { title: "Rose", sub: "Honeyed, green, floral.", icon: "rose", color: T.FAM.floral.b },
      { title: "Amber", sub: "Warm, resinous, enveloping.", icon: "amber", color: T.FAM.amber.b },
      { title: "Leather", sub: "Smoky, dry, animalic.", icon: "leather", color: T.FAM.leather.b },
      { title: "Vanilla", sub: "Sweet, warm, gourmand.", icon: "vanilla", color: T.FAM.gourmand.b },
      { title: "Fresh-cut grass", sub: "Sharp, green, sappy.", icon: "grass", color: T.FAM.green.b },
    ],
    note: "Ask viewers to guess how many materials might build each of these before revealing the apple breakdown next.",
  });

  L.accordDiagram(pres, {
    eyebrow: "Case Study 1 — Rose",
    titleText: "Breaking rose into its facets",
    tag: "06 · Accords",
    centerName: "Rose",
    centerIcon: "rose",
    centerFam: "floral",
    satellites: [
      { label: "Rose body", icon: "rose", fam: "floral" },
      { label: "Fresh floral lift", icon: "citronellol", fam: "floral" },
      { label: "Citrus / geranium facet", icon: "geranium", fam: "floral" },
      { label: "Green stem", icon: "cis-3-hexenol", fam: "green" },
      { label: "Spice", icon: "clove", fam: "spicy" },
      { label: "Diffusion & musk support", icon: "musk", fam: "musk" },
    ],
    note: "Rose is the clearest teaching example for facet-mapping — every viewer already knows what real rose smells like.",
  });

  L.splitSlide(pres, {
    eyebrow: "Rose, In Depth",
    titleText: "Rose accord — structure and how to modify it",
    tag: "06 · Accords",
    rows: [
      { h: "Approximate roles, not fixed percentages", d: "Phenylethyl alcohol carries most of the weight as the rose body; fresh floral lift, citrus/geranium facet, green stem, spice and diffusion/musk support sit around it in smaller amounts." },
      { h: "Increase the rose body → simpler, more linear", d: "Push phenylethyl alcohol higher and the accord reads more like a single-note soliflore — less complex, more direct." },
      { h: "Increase green stem or spice → sharper, less sweet", d: "More cis-3-hexenol or a clove-type facet cuts the honeyed sweetness and adds edge." },
      { h: "Increase diffusion & musk support → softer, more wearable", d: "More Hedione or musk makes the rose read further and smoother, at the cost of some precision." },
    ],
    drawVisual: (s, x, y, w, h) => { T.drawFlower(s, x + w / 2, y + h * 0.44, w * 0.24, C.berry); },
    visualCaption: "Every increase is a trade — nothing improves for free.",
    note: "This is the whole point of the modification exercise — let students predict the effect before you confirm it on a strip.",
  });

  L.comparisonSlide(pres, {
    eyebrow: "Two Ways In",
    titleText: "Building with materials vs. starting with a base",
    tag: "06 · Accords",
    left: {
      title: "Individual materials", color: C.rust, tint: "F0E4DA",
      items: [
        "Phenylethyl alcohol, citronellol, geraniol and rose oxide, balanced by hand",
        "Full control over every facet from the very first drop",
        "Slower — each facet is tuned material by material",
      ],
    },
    right: {
      title: "A commercial rose base", color: C.plum, tint: "EFE4EC",
      items: [
        "A base like Rose Givco arrives with the rose body already built",
        "Faster starting point — you modify it, rather than construct from zero",
        "Still needs shaping with modifiers before it reads as a finished accord",
      ],
    },
    note: "Both are legitimate approaches. Module 03.2 introduces commercial bases; module 07 shows how to extend one into a finished accord.",
  });

  L.accordDiagram(pres, {
    eyebrow: "Case Study 2 — Sandalwood",
    titleText: "Creamy, milky, woody — one facet at a time",
    tag: "06 · Accords",
    centerName: "Sandalwood",
    centerIcon: "sandalwood",
    centerFam: "woody",
    satellites: [
      { label: "Creamy body", icon: "sandalwood", fam: "woody" },
      { label: "Milky softness", icon: "musk", fam: "musk" },
      { label: "Woody structure", icon: "cedarwood", fam: "woody" },
      { label: "Warmth", icon: "vanillin", fam: "gourmand" },
    ],
    note: "Contrast sandalwood naturals (soft, milky, genuinely creamy) against sandalwood aroma chemicals like Javanol or Sandalore (sharper, more radiant, more linear) — both belong in this accord, in different proportions.",
  });

  L.splitSlide(pres, {
    eyebrow: "Sandalwood, In Depth",
    titleText: "Sandalwood — structure and how to modify it",
    tag: "06 · Accords",
    rows: [
      { h: "Approximate roles, not fixed percentages", d: "Creamy body (natural sandalwood or Javanol) is the anchor; milky softness, woody structure and warmth sit around it in smaller amounts." },
      { h: "Increase the creamy body → richer, more indulgent", d: "More Javanol or natural sandalwood makes the accord thicker and more luxurious — but can start to feel heavy." },
      { h: "Increase woody structure → drier, sharper", d: "More cedarwood cuts the creaminess and gives the accord a drier, more structured edge." },
      { h: "Increase warmth → sweeter, cosier", d: "More vanillin pulls the whole accord toward gourmand territory." },
    ],
    drawVisual: (s, x, y, w, h) => { T.iconChip(s, x + w / 2, y + h * 0.46, w * 0.3, "sandalwood", { fam: "woody" }); },
    visualCaption: "Same four facets, four different directions depending on what you push.",
    note: "Have students predict the effect of each increase before confirming on a strip — same exercise as the rose slide, different material.",
  });

  L.splitSlide(pres, {
    eyebrow: "Commercial Bases & Specialities",
    titleText: "Bases you buy vs. accords you build",
    tag: "06 · Accords",
    rows: [
      { h: "A base is pre-composed by a supplier", d: "A commercial base or speciality is bought ready-made and used like a single complex raw material — you don't build it yourself." },
      { h: "Speed and consistency, less control", d: "A base saves real time and always reads the same batch to batch — but you have less say over each individual facet than building an accord from scratch." },
      { h: "Worth knowing by name", d: "Black Agar (oud-style, smoky-woody-animalic complexity), Cassis Base (tart, blackcurrant-bud character) and Suederal (soft, napped-suede texture) are all real commercial specialities used as single ingredients inside larger perfumes." },
    ],
    drawVisual: (s, x, y, w, h) => {
      const cx = x + w / 2;
      T.iconChip(s, cx - w * 0.19, y + h * 0.4, w * 0.16, "oud", { fam: "woody" });
      T.iconChip(s, cx + w * 0.19, y + h * 0.4, w * 0.16, "blackcurrant", { fam: "fruity" });
    },
    visualCaption: "Module 03.2 covers commercial bases like Rose Givco in full — this is the same idea, different names.",
    note: "Keep this brief — the deep commercial-bases lesson already lives in module 03.2. This slide just names a few more real examples in accord-building context.",
  });

  L.cardGrid(pres, {
    eyebrow: "More To Try At Home",
    titleText: "Five more accords worth building",
    tag: "06 · Accords",
    cols: 5,
    cards: [
      { title: "Musk", sub: "Galaxolide as the clean base, softened with ethylene brassylate for skin-warmth.", icon: "musk", color: T.FAM.musk.b },
      { title: "Vanilla", sub: "Vanillin as the core, softened with coumarin, rounded with a trace of benzoin.", icon: "vanilla", color: T.FAM.gourmand.b },
      { title: "Woods", sub: "Iso E Super for volume, sandalwood for cream, cedarwood for dry structure.", icon: "cedarwood", color: T.FAM.woody.b },
      { title: "Fresh-cut grass", sub: "Cis-3-hexenol for the cut-leaf bite, stemone for green freshness.", icon: "grass", color: T.FAM.green.b },
      { title: "Fruity", sub: "Gamma undecalactone for peach, ethyl butyrate for a sharp juicy top.", icon: "peach", color: T.FAM.fruity.b },
    ],
    note: "Assign one of these five as homework, or check the Discord accord library for more worked examples — building even a rough version from the facet list teaches the method faster than watching another demo.",
  });

  L.rememberSlide(pres, {
    tag: "Important Distinction",
    text: "Accord formulas are starting structures\nto build upon — not finished perfumes.",
    note: "Prevent a common mistake: students treating a good accord as a complete, sellable fragrance.",
  });

  L.splitSlide(pres, {
    eyebrow: "A Systematic Method",
    titleText: "The Jean Carles method",
    tag: "06 · Accords",
    rows: [
      { h: "Pick two materials, A and B", d: "Start with just two — nothing more — so you can see their interaction clearly." },
      { h: "Test ratios methodically", d: "Blend them at different proportions and evaluate each one on its own strip." },
      { h: "Learn how they behave together", d: "You're mapping the relationship between A and B before adding any complexity." },
    ],
    drawVisual: (s, x, y, w, h) => {
      const cx = x + w / 2, cy = y + h * 0.42;
      T.filledCircle(s, cx - w * 0.1, cy, w * 0.1, C.gold);
      T.filledCircle(s, cx + w * 0.1, cy, w * 0.1, C.olive);
    },
    visualCaption: "A systematic, repeatable way to explore a relationship between materials.",
    note: "Jean Carles' method is one of the most influential teaching frameworks in perfumery history — worth a short story about him if time allows.",
  });

  L.cardGrid(pres, {
    eyebrow: "Ratio Experiments",
    titleText: "A : B, explored step by step",
    tag: "06 · Accords",
    cols: 5,
    cards: [
      { title: "90 : 10", sub: "Almost entirely A", color: C.gold },
      { title: "80 : 20", sub: "Strong A lean", color: C.gold },
      { title: "70 : 30", sub: "A dominant", color: C.olive },
      { title: "60 : 40", sub: "Balancing", color: C.olive },
      { title: "50 : 50", sub: "True midpoint", color: C.rust },
    ],
    note: "Once these five ratios are smelled and logged, introduce material C and repeat the process against the best A:B blend.",
  });

  L.flowSlide(pres, {
    eyebrow: "Iterating An Accord",
    titleText: "The accord development loop",
    tag: "06 · Accords",
    steps: [
      { label: "Version 1", desc: "Build your first pass at the accord." },
      { label: "Smell it", desc: "Evaluate on a fresh scent strip." },
      { label: "Identify the problem", desc: "What's missing, dominant, or off?" },
      { label: "Change one variable", desc: "Adjust a single material or ratio." },
      { label: "Smell again", desc: "Repeat until the accord reads true." },
    ],
    note: "This loop repeats throughout the entire course — module 08 revisits it at the full-formula level.",
  });

  L.rememberSlide(pres, {
    tag: "End of Module 06",
    text: "Change one variable at a time. Change three,\nand you'll never know which one mattered.",
    note: "Close the module — this single discipline is what separates methodical perfumers from ones who guess and hope.",
  });
};
