const T = require("../theme");
const L = require("../layouts");
const { C } = T;

module.exports = function build(pres) {
  L.titleSlide(pres, {
    tag: "Module 07 · Formula Construction",
    graphic: "wood",
    titleText: "From Accords\nTo A Full Formula",
    subtitle: "How individual materials and accords come together into a complete, structured perfume.",
    points: [
      "Every formula's anatomy, from idea to base",
      "The eight-step process for building a full perfume",
      "Two full worked formulas, plus a professional-style deep dive",
    ],
    accent: C.plum,
    note: "This is the module where everything so far converges — terminology, materials, dilution, accords. Frame it as the culmination.",
  });

  L.cardGrid(pres, {
    eyebrow: "Formula Architecture",
    titleText: "Every formula has the same basic anatomy",
    tag: "07 · Formula",
    cols: 3,
    cards: [
      { title: "Main idea", sub: "The single concept the whole formula serves.", color: C.gold },
      { title: "Supporting accord", sub: "The structure that carries the main idea.", color: C.rust },
      { title: "Modifiers", sub: "Small adjustments that shape character.", color: C.olive },
      { title: "Diffusion materials", sub: "What makes the formula project and spread.", color: C.berry },
      { title: "Base structure", sub: "The foundation that anchors the drydown.", color: C.plum },
      { title: "Trace materials", sub: "Tiny doses with outsized influence.", color: C.goldDk },
    ],
    note: "This is a mental checklist students should run through for every formula they build from now on.",
  });

  L.splitSlide(pres, {
    eyebrow: "Starting Point",
    titleText: "Every formula starts as a sentence",
    tag: "07 · Formula",
    rows: [
      { h: "\"Cold mineral citrus with smoky woods\"", d: "A real starting idea — vivid, specific, and evocative rather than technical." },
      { h: "Break it into olfactory components", d: "Cold / mineral. Citrus. Smoky. Woods. Four distinct pieces to build separately." },
      { h: "Each piece becomes its own accord", d: "You'll construct a small accord for each component, then combine them." },
    ],
    drawVisual: (s, x, y, w, h) => { T.drawCitrus(s, x + w / 2, y + h * 0.42, w * 0.24, C.gold); },
    visualCaption: "A single sentence, broken into buildable pieces.",
    note: "Encourage students to write their own one-sentence idea before building — this becomes the north star for the whole project.",
  });

  L.flowSlide(pres, {
    eyebrow: "Assembling The Idea",
    titleText: "Accords combine into a fragrance",
    tag: "07 · Formula",
    steps: [
      { label: "Citrus accord", desc: "The cold, bright opening." },
      { label: "Mineral accord", desc: "The cool, stony transparency." },
      { label: "Woody base", desc: "The dry, structural foundation." },
      { label: "Musk structure", desc: "The skin-like glue holding it together." },
    ],
    note: "Walk through how these four pieces, each built with the Jean Carles method from module 06, come together into one composition.",
  });

  L.splitSlide(pres, {
    eyebrow: "Same Method, Bigger Scale",
    titleText: "Jean Carles at the formula level",
    tag: "07 · Formula",
    rows: [
      { h: "Test accord-to-accord ratios", d: "Once each accord exists individually, blend pairs of them systematically, just like material A:B testing." },
      { h: "Find the right balance point", d: "Too much citrus and the woods disappear; too much wood and the opening feels dull." },
      { h: "Build up, don't dump in", d: "Add one accord at a time, evaluating after each addition — never combine everything at once." },
    ],
    drawVisual: (s, x, y, w, h) => {
      const cx = x + w / 2, cy = y + h * 0.42;
      [C.gold, C.olive, C.rust, C.plum].forEach((c, i) => T.filledCircle(s, cx + (i - 1.5) * w * 0.09, cy, w * 0.05, c));
    },
    visualCaption: "The same systematic ratio testing, scaled from materials to full accords.",
    note: "This is the direct bridge from module 06 — reassure students the method they just learned scales up cleanly.",
  });

  L.splitSlide(pres, {
    eyebrow: "The Math",
    titleText: "Every formula must total 100%",
    tag: "07 · Formula",
    rows: [
      { h: "Every material gets a percentage", d: "Of the total concentrate, before dilution — every material's share must be tracked." },
      { h: "The percentages always sum to 100", d: "This isn't optional — it's how you know your formula sheet is complete and correct." },
      { h: "Software makes this effortless", d: "A simple spreadsheet with a running total column catches errors instantly." },
    ],
    drawVisual: (s, x, y, w, h) => {
      const cx = x + w / 2, cy = y + h * 0.42;
      T.ringFrame(s, cx, cy, w * 0.24, C.gold, { thickness: 0.03 });
      s.addText("100%", { x: cx - w * 0.24, y: cy - 0.22, w: w * 0.48, h: 0.44, align: "center", valign: "middle",
        fontFace: T.FONT_HEAD, fontSize: 22, bold: true, color: C.gold, isTextBox: true, margin: 0 });
    },
    visualCaption: "The percentages of every formula always sum to 100%.",
    note: "The four example formulas that follow will each demonstrate this explicitly.",
  });

  L.splitSlide(pres, {
    eyebrow: "The Craft",
    titleText: "Balancing a formula",
    tag: "07 · Formula",
    rows: [
      { h: "Contrast, not sameness", d: "Pair opposing textures — a bright citrus against heavy woods, a sharp green against a soft musk. Contrast is what keeps a formula interesting." },
      { h: "Match volume to intention", d: "A loud, diffusive material earns a small percentage; a quiet fixative can carry a much larger share without overwhelming anything." },
      { h: "Use diffusive and fixative roles deliberately", d: "Diffusive materials (Hedione, citrus) carry the formula outward; fixatives (musks, resins, heavy woods) slow evaporation and anchor the base. Every formula needs both." },
      { h: "Build around one central idea", d: "Every material should serve the one-sentence idea from the previous slide — if it doesn't, it's a candidate for removal." },
    ],
    drawVisual: (s, x, y, w, h) => {
      const cx = x + w / 2, cy = y + h * 0.42;
      T.filledCircle(s, cx - w * 0.14, cy, w * 0.09, C.gold);
      T.filledCircle(s, cx + w * 0.14, cy, w * 0.14, C.plum);
    },
    visualCaption: "A small, loud material balanced against a larger, quiet one — not equal size, equal impact.",
    note: "This slide is the conceptual bridge between the architecture checklist and the four worked examples that follow — point back to it while walking through each one.",
  });

  L.equationSlide(pres, {
    eyebrow: "What A Formula Is Made Of",
    titleText: "Everything you've learned, in one equation",
    tag: "07 · Formula",
    terms: [
      { label: "Raw materials", icon: "molecule", fam: "woody", operator: "+" },
      { label: "Accords", icon: "rose", fam: "floral", operator: "+" },
      { label: "Bases", icon: "beaker", fam: "green", operator: "+" },
      { label: "Modifiers", icon: "drop", fam: "amber", operator: "=" },
      { label: "Perfume", icon: "bottle", fam: "amber", result: true },
    ],
    note: "A formula can mix all four freely — individual synthetics, naturals, your own accords, and commercial bases like Rose Givco, all in one formula sheet.",
  });

  L.rememberSlide(pres, {
    tag: "A Major Lesson",
    text: "A base is a starting point, not a finished formula.\nUsing Rose Givco doesn't mean the work is done.",
    accent: C.plum,
    note: "This is the single most important idea about bases — students who skip this step end up with unfinished, generic-smelling formulas.",
  });

  L.circleProcessFlow(pres, {
    eyebrow: "Watch A Base Get Built On",
    titleText: "One rose base, four different directions",
    tag: "07 · Formula",
    steps: [
      { label: "ROSE BASE", icon: "rose", fam: "floral" },
      { label: "ADD GREEN", icon: "cis-3-hexenol", fam: "green" },
      { label: "GREEN ROSE", icon: "rose", fam: "floral" },
      { label: "ADD MUSK + HEDIONE", icon: "musk", fam: "musk" },
      { label: "CLEAN MODERN ROSE", icon: "rose", fam: "floral" },
      { label: "ADD PATCHOULI + WOODS", icon: "patchouli", fam: "woody" },
      { label: "DARK WOODY ROSE", icon: "rose", fam: "floral" },
    ],
    note: "Same starting base, three completely different final characters — the base only decided the starting point, not the destination.",
  });

  L.splitSlide(pres, {
    eyebrow: "Working Efficiently",
    titleText: "Build a personal base library",
    tag: "07 · Formula",
    rows: [
      { h: "Keep your own reusable accords", d: "Rose, amber, musk, sandalwood, citrus, leather, vanilla — build each once, then reach for it in any formula.", color: C.gold },
      { h: "Combine with commercial bases", d: "Your own accords sit alongside bases like Rose Givco in the same formula sheet — there's no rule against mixing them.", color: C.olive },
      { h: "Formulas get faster, not lazier", d: "A base library speeds up construction — it doesn't replace the judgement of balancing and modifying each formula.", color: C.rust },
    ],
    drawVisual: (s, x, y, w, h) => {
      const cx = x + w / 2, cy = y + h * 0.42;
      T.ringFrame(s, cx, cy, w * 0.3, C.gold, { thickness: 0.03 });
      T.filledCircle(s, cx, cy, w * 0.08, C.plum);
    },
    visualCaption: "A small shelf of reliable accords, ready whenever a new idea needs one.",
    note: "Keep this brief — it's a working habit to mention, not a new module. The four worked examples that follow are the real payoff.",
  });

  L.flowSlide(pres, {
    eyebrow: "The Full Process · Part 1",
    titleText: "How To Build A Perfume",
    tag: "07 · Formula",
    steps: [
      { label: "Brief", desc: "The direction: who it's for, the mood, the occasion, the one thing it needs to do." },
      { label: "Idea", desc: "One vivid sentence and a rough palette — the same starting move as building any accord." },
      { label: "Material selection", desc: "Choose specific materials for each part of the idea, not just families." },
      { label: "Accords", desc: "Build the load-bearing accords separately, tested and balanced, before combining anything." },
    ],
    note: "This eight-step process is the spine of the whole module — everything before this slide was preparation, everything after it is the examples that prove it works.",
  });

  L.flowSlide(pres, {
    eyebrow: "The Full Process · Part 2",
    titleText: "How To Build A Perfume",
    tag: "07 · Formula",
    steps: [
      { label: "First formula", desc: "Combine the accords with top, heart and base roles in mind — a guide, not a rigid pyramid." },
      { label: "Evaluation", desc: "Smell it properly: diffusion, longevity, sweetness, freshness, balance, and where it turns muddy." },
      { label: "Modification", desc: "Change one thing at a time — tame powerful materials, boost what's missing, fix what's cloudy." },
      { label: "Final formula", desc: "Lock it in once evaluation stops turning up new problems — then keep the formula sheet as your record." },
    ],
    note: "Module 08 goes deep on the evaluation step specifically — this is the overview of where it sits in the whole process.",
  });

  L.splitSlide(pres, {
    eyebrow: "A Mental Model, Not A Rulebook",
    titleText: "Top, heart and base — a guide, not a rulebook",
    tag: "07 · Formula",
    rows: [
      { h: "It describes evaporation, not layers", d: "Materials don't literally stack in three floors — they evaporate at different rates, and the pyramid is a way of talking about that." },
      { h: "Useful for planning, not a rigid recipe", d: "Sketch a rough top/heart/base balance while choosing your palette — but real formulas blend across all three constantly." },
      { h: "Modern perfumery blends across all three", d: "Many contemporary formulas mix fast and slow materials throughout, aiming for one unified character rather than three sequential acts." },
    ],
    drawVisual: (s, x, y, w, h) => {
      const cx = x + w / 2;
      [0.2, 0.42, 0.64].forEach((f, i) => T.filledCircle(s, cx, y + h * f, w * (0.16 - i * 0.02), [C.gold, C.olive, C.plum][i]));
    },
    visualCaption: "Three overlapping stages, not three separate rooms.",
    note: "Beginners often over-plan the pyramid and under-plan the actual character — remind them the idea from the brief always outranks the structure.",
  });

  L.formulaSlide(pres, {
    eyebrow: "Example Formula 1",
    titleText: "A floral fragrance",
    tag: "07 · Formula",
    idea: "\"A luminous rose and jasmine heart, on a soft musk base.\"",
    rows: [
      { name: "Rose absolute (10%)", pct: 8, color: C.berry, role: "Natural rose truth" },
      { name: "Jasmine absolute (10%)", pct: 6, color: C.berry, role: "Heady floral depth" },
      { name: "Hedione", pct: 20, color: C.olive, role: "Diffusion & radiance" },
      { name: "Linalool", pct: 10, color: C.olive, role: "Soft floral-woody lift" },
      { name: "Bergamot", pct: 12, color: C.gold, role: "Bright opening" },
      { name: "Iso E Super", pct: 18, color: C.goldDk, role: "Transparent support" },
      { name: "Galaxolide", pct: 18, color: C.stone, role: "Clean musk fixation" },
      { name: "Vanillin", pct: 8, color: C.gold, role: "Soft warmth in the base" },
    ],
    note: "Note the small vanillin at the base — a common technique to add warmth without turning a floral into a gourmand.",
  });

  L.splitSlide(pres, {
    eyebrow: "Construction Logic",
    titleText: "Reading the floral formula",
    tag: "07 · Formula",
    rows: [
      { h: "Two naturals do the emotional work", d: "Rose and jasmine absolute sit at just 8% and 6% (already at 10% dilution) — a tiny true contribution that still defines the whole character." },
      { h: "Hedione and linalool carry it outward", d: "Neither smells strongly \"floral\" alone — together they diffuse and soften the naturals rather than competing with them." },
      { h: "Iso E Super and Galaxolide are silent structure", d: "36% of the formula between them, and barely noticeable individually — they add volume and lasting power without their own smell on top." },
      { h: "Vanillin closes the base, not the top", d: "A small 8% at the very end keeps this floral from reading cold or sharp." },
    ],
    drawVisual: (s, x, y, w, h) => { T.iconChip(s, x + w / 2, y + h * 0.46, w * 0.32, "rose", { fam: "floral" }); },
    visualCaption: "The loud materials carry it; the quiet ones hold it together.",
    note: "This is the pattern worth repeating for every formula students analyse: find the loud materials, then ask what the quiet ones are actually doing.",
  });

  L.formulaSlide(pres, {
    eyebrow: "Example Formula 2",
    titleText: "A gourmand fragrance",
    tag: "07 · Formula",
    idea: "\"Warm vanilla and caramel, softened with musk.\"",
    rows: [
      { name: "Ethyl Maltol", pct: 6, color: C.rust, role: "Sugary sweetness" },
      { name: "Vanillin", pct: 15, color: C.gold, role: "Core vanilla warmth" },
      { name: "Coumarin", pct: 12, color: C.goldDk, role: "Sweet hay depth" },
      { name: "Hedione", pct: 10, color: C.olive, role: "Softens the sweetness" },
      { name: "Cashmeran", pct: 12, color: C.plum, role: "Spiced, musky wood" },
      { name: "Galaxolide", pct: 20, color: C.stone, role: "Clean musk body" },
      { name: "Bergamot", pct: 10, color: C.gold, role: "Cuts the sweetness at opening" },
      { name: "Patchouli", pct: 15, color: C.rust, role: "Grounding earthy base" },
    ],
    note: "Highlight how bergamot's job here is purely structural — preventing the gourmand from feeling flat and cloying.",
  });

  L.splitSlide(pres, {
    eyebrow: "Construction Logic",
    titleText: "Reading the gourmand formula",
    tag: "07 · Formula",
    rows: [
      { h: "Bergamot is doing defensive work", d: "Just 10%, but its whole job is stopping the sweetness turning flat — remove it and the formula goes cloying fast." },
      { h: "Two sweeteners, two jobs", d: "Ethyl Maltol (small, sharp sugar-candy top) and Vanillin (larger, warm, longer-lasting) layer the sweetness instead of relying on one material for everything." },
      { h: "Patchouli anchors 15% of the base", d: "Earthy contrast stops an all-sweet formula from feeling one-dimensional." },
      { h: "Cashmeran bridges sweet and woody", d: "A spiced, musky wood that keeps the transition from heart to base smooth rather than abrupt." },
    ],
    drawVisual: (s, x, y, w, h) => { T.iconChip(s, x + w / 2, y + h * 0.46, w * 0.32, "vanillin", { fam: "gourmand" }); },
    visualCaption: "Every sweet note here is balanced by something structural.",
    note: "Same exercise as the floral formula — students should be able to do this unprompted by the end of the module.",
  });

  L.splitSlide(pres, {
    eyebrow: "A Professional-Style Formula",
    titleText: "Reverse-engineering a famous structure",
    tag: "07 · Formula",
    rows: [
      { h: "\"Type\" formulas are educational reconstructions", d: "Perfumer communities publish approximate recreations of famous fragrances for teaching — not the brand's actual proprietary formula." },
      { h: "Built around three named accords", d: "Maison Francis Kurkdjian has publicly described Baccarat Rouge 540 as built from a mineral accord, a \"fire and heat\" accord and a savoir-faire accord — a genuinely useful structure to study." },
      { h: "The figures ahead are illustrative", d: "Sourced from published educational analysis, not the brand's confidential formula — treat the proportions as a teaching tool, not a guarantee of what's actually inside the bottle." },
    ],
    drawVisual: (s, x, y, w, h) => { T.iconChip(s, x + w / 2, y + h * 0.46, w * 0.32, "amber", { fam: "amber" }); },
    visualCaption: "One real fragrance, studied as a structure — not copied as a secret.",
    note: "Be explicit with students: this is a widely-circulated educational approximation, not a leak of MFK's real formula — the goal is to learn how a professional formula is put together, not to clone a product.",
  });

  L.formulaSlide(pres, {
    eyebrow: "Case Study — An Educational Reconstruction",
    titleText: "A Baccarat Rouge 540-style structure",
    tag: "07 · Formula",
    idea: "\"Radiant, mineral-clean amber-musk with a warm saffron-jasmine heart.\" (Educational approximation — not the original formula.)",
    rows: [
      { name: "Hedione", pct: 35, color: C.olive, role: "Radiance & diffusion — the single largest material" },
      { name: "DPG (carrier)", pct: 27, color: C.stone, role: "Dilutes the compound — not part of the scent itself" },
      { name: "Ambroxan-family", pct: 18, color: C.gold, role: "Amber-musk skin-warmth & lasting power" },
      { name: "Supporting complexity", pct: 18, color: C.plum, role: "Jasmine, saffron, fir balsam, woods & musks — the mineral/fire/savoir-faire facets" },
      { name: "Ethyl Maltol", pct: 2, color: C.rust, role: "A whisper of sugared warmth" },
    ],
    note: "Point out that DPG appearing inside the formula sheet itself means this compound is already a working dilution, not a neat concentrate — a direct callback to module 04.",
  });

  L.splitSlide(pres, {
    eyebrow: "Analysing The Structure",
    titleText: "Why this formula works",
    tag: "07 · Formula",
    rows: [
      { h: "One material carries the diffusion", d: "At around a third of the formula, Hedione does the job usually split across several transparent florals — one very safe, very diffusive material, used boldly." },
      { h: "The \"fixative\" is nearly a fifth of the formula", d: "Ambroxan-family materials are usually a supporting player at a few percent — here it's promoted to a lead role, which is exactly what gives the signature skin-radiating effect." },
      { h: "A tiny dose does real emotional work", d: "Around 2% ethyl maltol reads as warm and gourmand-adjacent without tipping the whole thing into dessert territory." },
      { h: "Naturals earn their keep in a small space", d: "The remaining ~18% carries jasmine, saffron, fir balsam and supporting musks — proof that complexity doesn't need a large percentage, just the right materials." },
    ],
    note: "This is the payoff of the whole module — students should leave this slide understanding that a famous formula's genius is usually in the proportions, not in secret ingredients.",
  });

  L.splitSlide(pres, {
    eyebrow: "A Transferable Skill",
    titleText: "How to read any professional formula",
    tag: "07 · Formula",
    rows: [
      { h: "Find the largest percentage first", d: "That's usually the material doing the load-bearing work — start analysis there, not with the exotic-sounding trace materials." },
      { h: "Ask what role, not just what name", d: "For every material: diffusion, fixation, structure or accent? The percentage usually tells you which." },
      { h: "Notice what's surprisingly small", d: "A famous accord is often built from a tiny amount of an expensive natural, supported by cheap synthetics doing the heavy lifting." },
      { h: "Treat published reconstructions as teaching tools", d: "Useful for learning structure and proportion logic — not a guarantee of the original, confidential formula." },
    ],
    note: "Encourage students to apply this same four-question checklist to any formula they encounter from now on, published or their own.",
  });

  L.rememberSlide(pres, {
    tag: "End of Module 07",
    text: "Every material earns its place. If you can\nremove it and nothing changes, remove it.",
    note: "Close on the principle of restraint — the best formulas are edited, not just assembled.",
  });
};
