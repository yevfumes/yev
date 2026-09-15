const T = require("../theme");
const L = require("../layouts");
const { C } = T;

module.exports = function build(pres) {
  L.titleSlide(pres, {
    tag: "Module 02 · Equipment",
    graphic: "scale",
    eyebrow: "Presented by Yev",
    titleText: "Building Your\nHome Bench",
    subtitle: "You don't need a professional lab to start — you need the right small set of tools, chosen for accuracy, and you need to know exactly what each one is for.",
    points: [
      "Why a 0.001g scale is non-negotiable",
      "Every tool on the bench, one at a time",
      "Your starter checklist, and what to skip",
    ],
    presenter: "Yev",
    accent: C.rust,
    note: "Set expectations: this is a lean, practical kit, not an expensive lab buildout. Everything shown is realistic for a beginner budget. This module now runs long — take it one topic per take.",
  });

  L.cardGrid(pres, {
    eyebrow: "The Overview · Part 1",
    titleText: "What do you actually need?",
    tag: "02 · Equipment",
    cols: 4,
    cards: [
      { title: "Scale", sub: "0.001g precision — your single most important tool.", icon: "scale", color: T.FAM.leather.b },
      { title: "Magnetic stirrer", sub: "Even mixing for dilutions and bases.", icon: "beaker", color: T.FAM.marine.ink },
      { title: "Pipettes", sub: "Disposable, one per material.", icon: "pipette", color: T.FAM.green.b },
      { title: "Amber bottles", sub: "Storage that keeps light out.", icon: "amber glass bottles", color: T.FAM.amber.b },
      { title: "Dilution bottles", sub: "One per material, clearly labelled.", icon: "dilution bottle", color: T.FAM.marine.b },
      { title: "Scent strips", sub: "Your primary evaluation instrument.", icon: "strip", color: T.FAM.leather.ink },
      { title: "Weighing vessels", sub: "Boats and small cups for solids.", icon: "weighing boat", color: T.FAM.leather.a },
    ],
    note: "This is the first half of the whole kit at a glance. Reveal one card at a time as you name each tool — every one of these gets its own proper explanation over the next slides.",
  });

  L.cardGrid(pres, {
    eyebrow: "The Overview · Part 2",
    titleText: "...and the rest of the bench",
    tag: "02 · Equipment",
    cols: 3,
    cards: [
      { title: "Beakers", sub: "For larger trial batches.", icon: "beaker", color: T.FAM.green.b },
      { title: "Funnels", sub: "Clean, spill-free transfers.", icon: "funnel", color: T.FAM.marine.b },
      { title: "Spatulas", sub: "For solids and crystalline materials.", icon: "spatula", color: T.FAM.woody.b },
      { title: "Gloves", sub: "Nitrile, for clean handling.", icon: "gloves", color: T.FAM.musk.ink },
      { title: "Labels & marker", sub: "Alcohol-resistant, always.", icon: "labels & markers", color: T.FAM.leather.b },
      { title: "Storage", sub: "Organised, dark, consistent.", icon: "storage box", color: T.FAM.woody.ink },
    ],
    note: "Second half of the kit. Same treatment — one card at a time.",
  });

  // ---------------------------------------------------------------
  // THE SCALE
  // ---------------------------------------------------------------
  L.splitSlide(pres, {
    eyebrow: "Tool 01 · The Non-Negotiable",
    titleText: "Your scale is your accuracy",
    tag: "02 · Equipment",
    rows: [
      { h: "0.001g readability, ~200g capacity", d: "This is the sweet spot for perfumery — precise enough for trace materials, large enough for real batches.", color: C.rust },
      { h: "Why 0.001g matters", d: "Say you're making a 10g concentrate. 0.01g is 0.1% of the whole formula — with powerful materials, that's already too coarse to develop precisely. A 0.001g scale lets you make adjustments ten times smaller.", color: C.gold },
      { h: "Repeatability over price", d: "A cheap scale that gives a different reading each time is worse than useless — it teaches you the wrong lesson.", color: C.olive },
      { h: "Calibration & max capacity", d: "Calibrate regularly with a reference weight, and respect the scale's stated capacity — overloading degrades accuracy.", color: C.plum },
    ],
    drawVisual: (s, x, y, w, h) => { T.iconChip(s, x + w / 2, y + h * 0.46, w * 0.36, "scale", { fam: "leather", ringColor: C.rust }); },
    visualCaption: "A 0.01g kitchen scale cannot see a 0.05g dose. Don't guess where you can measure.",
    note: "Focus on the specification (0.001g / ~200g), not a specific brand or model — any scale meeting that spec works. Walk through the 10g / 0.1% math slowly — this is the single idea that justifies the whole module.",
  });

  L.beforeAfterSlide(pres, {
    eyebrow: "See The Difference",
    titleText: "0.01g scale vs. 0.001g scale",
    tag: "02 · Equipment",
    leftLabel: "0.01g Scale",
    rightLabel: "0.001g Scale",
    leftColor: C.taupeDk,
    rightColor: C.rust,
    drawLeft: (s, x, y, w, h) => {
      T.iconChip(s, x + w / 2, y + 1.3, 0.78, "scale", { fam: "leather", ringColor: C.taupe });
      s.addText("Good for larger, rough measurements", {
        x: x + 0.25, y: y + 2.35, w: w - 0.5, h: 0.75, align: "center", valign: "top",
        fontFace: T.FONT_BODY, fontSize: 12.5, color: C.taupeDk, isTextBox: true, margin: 0, lineSpacingMultiple: 1.15,
      });
    },
    drawRight: (s, x, y, w, h) => {
      T.iconChip(s, x + w / 2, y + 1.3, 0.78, "scale", { fam: "leather", ringColor: C.rust });
      s.addText("Recommended for formula development", {
        x: x + 0.25, y: y + 2.35, w: w - 0.5, h: 0.75, align: "center", valign: "top",
        fontFace: T.FONT_BODY, fontSize: 12.5, bold: true, color: C.rust, isTextBox: true, margin: 0, lineSpacingMultiple: 1.15,
      });
    },
    caption: "Both are real scales. Only one of them can see the doses you'll actually be working with.",
    note: "Hold up two real scales here if you have them — this is a great physical demonstration moment.",
  });

  L.checklistSlide(pres, {
    eyebrow: "Buying One",
    titleText: "What to look for in a scale",
    tag: "02 · Equipment",
    groups: [
      { title: "Specifications", color: C.rust, items: [
        "0.001g readability",
        "~100–300g maximum capacity",
        "Calibration function",
        "Calibration weight included",
        "Stable weighing platform",
        "Tare function",
        "Clear display",
        "Repeatable readings",
      ] },
      { title: "Where To Put It", color: C.olive, items: [
        "A solid, stable surface",
        "Away from vibration",
        "Away from fans",
        "Away from open windows",
        "Away from strong airflow",
      ] },
    ],
    note: "Airflow is the beginner mistake nobody warns you about — a scale near an open window or a fan will drift and never settle.",
  });

  // ---------------------------------------------------------------
  // PIPETTES & WEIGHING
  // ---------------------------------------------------------------
  L.splitSlide(pres, {
    eyebrow: "Tool 02",
    titleText: "Disposable pipettes",
    tag: "02 · Equipment",
    rows: [
      { h: "Cheap, fast, zero cleanup", d: "A box of disposable plastic pipettes is all you need to transfer materials and add them gradually while you weigh.", color: C.gold },
      { h: "One pipette per material", d: "Avoid reusing the same pipette across unrelated materials — even a trace of cross-contamination ruins a reading.", color: C.olive },
      { h: "Throw it away, don't rinse it", d: "Rinsing costs more time and solvent than a fresh pipette costs — that's the entire point of disposables.", color: C.rust },
    ],
    drawVisual: (s, x, y, w, h) => { T.iconChip(s, x + w / 2, y + h * 0.46, w * 0.3, "pipette", { fam: "green", color: C.olive }); },
    visualCaption: "Simple, cheap, and it solves the one problem that actually matters: no cross-contamination.",
    note: "Keep this simple — disposables are genuinely all a beginner needs. Only plastic transfer pipettes, never glass, in this kit.",
  });

  L.flowSlide(pres, {
    eyebrow: "The Actual Workflow",
    titleText: "From bottle to weighing vessel",
    tag: "02 · Equipment",
    steps: [
      { label: "Raw material bottle", desc: "Where the material lives, capped and labelled." },
      { label: "Pipette", desc: "Transfers the material — nothing more." },
      { label: "Weighing vessel", desc: "Sits on the scale, where the real measurement happens." },
    ],
    note: "This is the whole chain. Make sure students see that the pipette never does the measuring — only the transferring.",
  });

  L.rememberSlide(pres, {
    tag: "This Is Important",
    text: "A drop is not a unit.\nThe scale decides the amount —\nthe pipette is only the transfer tool.",
    accent: C.olive,
    note: "This single misconception derails more beginner formulas than almost anything else — never assume one drop always weighs the same.",
  });

  L.splitSlide(pres, {
    eyebrow: "Tool 06",
    titleText: "Handling solids",
    tag: "02 · Equipment",
    rows: [
      { h: "Weighing boats & small disposable cups", d: "For weighing solids, sticky materials and small experiments — disposable, so nothing carries over between uses.", color: C.gold },
      { h: "Match the vessel to the material", d: "Some materials attack certain plastics — check that the weighing container is actually compatible with what you're handling.", color: C.olive },
      { h: "Spatulas for solids", d: "Vanillin, ethyl maltol, coumarin, crystalline materials, and thicker resins all need a spatula, not a pipette.", color: C.rust },
      { h: "One spatula, one material", d: "Just like pipettes — never carry a contaminated spatula from one material into another.", color: C.plum },
    ],
    drawVisual: (s, x, y, w, h) => {
      const cx = x + w / 2;
      T.iconChip(s, cx - w * 0.19, y + h * 0.4, w * 0.16, "weighing boat", { fam: "leather" });
      T.iconChip(s, cx + w * 0.19, y + h * 0.4, w * 0.16, "spatula", { fam: "woody" });
    },
    visualCaption: "A disposable boat for the material, a dedicated spatula for the scoop.",
    note: "Frame this as the solids counterpart to the liquids workflow — same discipline, different tools.",
  });

  L.splitSlide(pres, {
    eyebrow: "Tools 07 & 08",
    titleText: "Small beakers & funnels",
    tag: "02 · Equipment",
    rows: [
      { h: "Beakers for larger batches", d: "Useful for combining trial batches, mixing a finished concentrate, or scaling up a formula. A few sizes are enough — try 25ml, 50ml, 100ml and 250ml.", color: C.gold },
      { h: "The scale still measures by mass", d: "Beaker markings are for rough volume, not precision — always weigh, never eyeball a fill line as a formula measurement.", color: C.olive },
      { h: "Funnels keep transfers clean", d: "For moving concentrate or alcohol into a narrow-neck bottle without spilling. Keep this simple — a couple of small funnels is plenty.", color: C.rust },
    ],
    drawVisual: (s, x, y, w, h) => {
      const cx = x + w / 2;
      T.iconChip(s, cx - w * 0.19, y + h * 0.4, w * 0.16, "beaker", { fam: "green" });
      T.iconChip(s, cx + w * 0.19, y + h * 0.4, w * 0.16, "funnel", { fam: "marine" });
    },
    visualCaption: "You do not need a shelf of laboratory glassware — a handful of sizes covers everything.",
    note: "Keep this slide brisk — beakers and funnels are the least conceptually demanding items in the whole kit.",
  });

  L.splitSlide(pres, {
    eyebrow: "Tool 09",
    titleText: "Magnetic stirrer",
    tag: "02 · Equipment",
    rows: [
      { h: "Even, consistent mixing", d: "A stir bar spinning inside the beaker blends a dilution or a base far more evenly than hand-shaking, especially once volumes grow past a few grams.", color: C.gold },
      { h: "Where it actually matters", d: "Bases, larger batches, and any mix that needs to be genuinely homogeneous before you evaluate or bottle it.", color: C.olive },
      { h: "A basic stirrer is enough to start", d: "You don't need the heated version yet — that's a nice-to-have for materials that benefit from gentle warming to dissolve fully.", color: C.rust },
    ],
    drawVisual: (s, x, y, w, h) => { T.iconChip(s, x + w / 2, y + h * 0.46, w * 0.32, "beaker", { fam: "marine", color: C.rust }); },
    visualCaption: "A stir bar does the mixing so your hand doesn't have to.",
    note: "Show one running on camera if possible — watching a stir bar spin makes the point instantly, far better than describing it.",
  });

  // ---------------------------------------------------------------
  // BOTTLES & LABELS
  // ---------------------------------------------------------------
  L.splitSlide(pres, {
    eyebrow: "Tool 03",
    titleText: "Amber glass bottles",
    tag: "02 · Equipment",
    rows: [
      { h: "Why amber matters", d: "Amber glass reduces light exposure — useful for storing raw materials, dilutions, accords and formula trials alike.", color: C.gold },
      { h: "Smaller sizes — 5ml & 10ml", d: "Ideal for dilutions, trials and expensive materials you're only using in small amounts.", color: C.olive },
      { h: "Larger sizes — 30ml, 50ml & 100ml", d: "Better for frequently used materials, larger bases, alcohol, and dilutions you reach for often.", color: C.rust },
      { h: "You don't need every size at once", d: "Buy into sizes as your library actually grows — a handful of each is plenty to begin.", color: C.plum },
    ],
    drawVisual: (s, x, y, w, h) => {
      const sizes = [0.14, 0.19, 0.24, 0.3];
      const gap = w / (sizes.length + 1);
      sizes.forEach((sc, i) => {
        T.drawBottle(s, x + gap * (i + 1) - w * sc * 0.5, y + h * 0.75 - h * sc * 2.1, w * sc, h * sc * 2.1, { liquid: C.gold, fillLevel: 0.6 });
      });
    },
    visualCaption: "5ml → 10ml → 30ml → 100ml — small for trials, large for daily use.",
    note: "Amber glass isn't optional for long-term storage — UV light degrades many raw materials over time.",
  });

  L.splitSlide(pres, {
    eyebrow: "Tool 04",
    titleText: "Label every dilution bottle",
    tag: "02 · Equipment",
    rows: [
      { h: "Three things, every time", d: "Material name, dilution percentage, and solvent — with no exceptions. Add the date too if you find it useful, but it's optional.", color: C.rust },
      { h: "Poor labelling is the #1 workspace problem", d: "It happens fast: a bottle without this information becomes a mystery liquid within weeks, and mystery liquids get thrown away.", color: C.olive },
      { h: "Label before you fill, not after", d: "Write it on the bottle first — it takes ten seconds and it never gets forgotten.", color: C.plum },
    ],
    drawVisual: (s, x, y, w, h) => {
      T.drawBottle(s, x + w * 0.06, y + h * 0.1, w * 0.26, h * 0.78, { liquid: C.gold, fillLevel: 0.55, label: true });
      const lx = x + w * 0.42, ly = y + h * 0.14, lw = w * 0.5, lh = h * 0.68;
      s.addShape("roundRect", {
        x: lx, y: ly, w: lw, h: lh, rectRadius: 0.1,
        fill: { color: C.paper }, line: { color: C.gold, width: 1.5 },
        shadow: { type: "outer", color: "000000", opacity: 0.12, blur: 6, offset: 2, angle: 90 },
      });
      const lines = [
        ["HEDIONE", 17, true, C.ink],
        ["10%", 14, false, C.taupeDk],
        ["ETHANOL", 14, false, C.taupeDk],
        ["02/09/26 (optional)", 11, false, C.taupe],
      ];
      let ty = ly + 0.22;
      lines.forEach(([txt, size, bold, color]) => {
        s.addText(txt, {
          x: lx + 0.2, y: ty, w: lw - 0.4, h: 0.4, align: "center",
          fontFace: bold ? T.FONT_HEAD : T.FONT_BODY, fontSize: size, bold, color,
          isTextBox: true, margin: 0,
        });
        ty += lh / lines.length;
      });
    },
    visualCaption: "Material, percentage, solvent — the date is a nice-to-have, not a requirement.",
    note: "This example label format should become second nature — use it consistently across every dilution bottle in frame.",
  });

  // ---------------------------------------------------------------
  // SCENT STRIPS
  // ---------------------------------------------------------------
  L.splitSlide(pres, {
    eyebrow: "Tool 05",
    titleText: "Scent strips — your primary instrument",
    tag: "02 · Equipment",
    rows: [
      { h: "Why blotters matter", d: "Skin varies too much between evaluations — a blotter is a consistent, repeatable surface for judging a material, an accord or a finished formula.", color: C.gold },
      { h: "Proper labelling", d: "Write the material name and the time before you dip it — for example: \"HEDIONE 10%\", \"14:30\". Add the date too if it's useful for longer evaluations.", color: C.rust },
      { h: "The bottle alone isn't enough", d: "Smelling straight from the bottle tells you almost nothing about how a material actually behaves over time on skin or paper.", color: C.olive },
    ],
    drawVisual: (s, x, y, w, h) => {
      const n = 4;
      const gap = w / (n + 1);
      for (let i = 0; i < n; i++) {
        const cx = x + gap * (i + 1), cy = y + h * 0.46;
        T.iconChip(s, cx, cy, w * 0.19, "strip", { fam: "leather", color: L.heroFor("s" + i) });
      }
    },
    visualCaption: "One strip, one material, one label — every time.",
    note: "This directly sets up module 05 (training your nose) — evaluation habits start here with the physical object.",
  });

  L.circleProcessFlow(pres, {
    eyebrow: "Evaluate Over Time",
    titleText: "How a strip actually evolves",
    tag: "02 · Equipment",
    steps: [
      { label: "JUST DIPPED", icon: "strip", fam: "leather", desc: "First impression" },
      { label: "15 MIN", icon: "strip", fam: "leather", desc: "Top notes settle" },
      { label: "1 HOUR", icon: "strip", fam: "leather", desc: "Heart emerges" },
      { label: "4 HOURS", icon: "strip", fam: "leather", desc: "Drydown begins" },
      { label: "24 HOURS", icon: "strip", fam: "leather", desc: "True base" },
    ],
    note: "Keep the same labelled strip and revisit it at each stage — this single habit teaches drydown faster than anything else in the course.",
  });

  L.cardGrid(pres, {
    eyebrow: "Two Small But Essential Tools",
    titleText: "Gloves & a permanent marker",
    tag: "02 · Equipment",
    cols: 2,
    cards: [
      { title: "Gloves", sub: "Nitrile disposables reduce skin contact, prevent staining, and help with irritating materials. They don't replace correct handling or SDS awareness — just good practice.", icon: "gloves", color: T.FAM.musk.ink },
      { title: "Permanent marker", sub: "For scent strips, bottle labels, and quick version identification. Alcohol-resistant ink only — standard ink smears the moment it touches a dilution.", icon: "labels & markers", color: T.FAM.leather.b },
    ],
    note: "Keep this short — both items are simple and don't need much explanation.",
  });

  // ---------------------------------------------------------------
  // LABELS & ORGANISATION
  // ---------------------------------------------------------------
  L.splitSlide(pres, {
    eyebrow: "Tool 11 · Organisation Matters",
    titleText: "Your labelling system",
    tag: "02 · Equipment",
    rows: [
      { h: "Raw materials", d: "Material name, supplier if useful, and the date received or opened if you want to track it.", color: C.gold },
      { h: "Dilutions", d: "Material, percentage and solvent — the same fields from the dilution bottle slide. Date is optional, add it if it helps you.", color: C.olive },
      { h: "Formula trials", d: "Formula name, version, and date — for example: \"APPLE BASE, V03, 02/09/26\".", color: C.rust },
    ],
    drawVisual: (s, x, y, w, h) => {
      const lx = x + w * 0.2, ly = y + h * 0.16, lw = w * 0.6, lh = h * 0.62;
      s.addShape("roundRect", {
        x: lx, y: ly, w: lw, h: lh, rectRadius: 0.1,
        fill: { color: C.paper }, line: { color: C.rust, width: 1.5 },
        shadow: { type: "outer", color: "000000", opacity: 0.12, blur: 6, offset: 2, angle: 90 },
      });
      const lines = [["APPLE BASE", 17, true, C.ink], ["V03", 14, false, C.taupeDk], ["02/09/26", 12, false, C.taupe]];
      let ty = ly + 0.26;
      lines.forEach(([txt, size, bold, color]) => {
        s.addText(txt, {
          x: lx + 0.2, y: ty, w: lw - 0.4, h: 0.42, align: "center",
          fontFace: bold ? T.FONT_HEAD : T.FONT_BODY, fontSize: size, bold, color,
          isTextBox: true, margin: 0,
        });
        ty += lh / lines.length;
      });
    },
    visualCaption: "Raw materials, dilutions, accords, bases, experiments — everything gets one of these three formats.",
    note: "Organisation is the quiet skill that determines whether a growing material library stays useful or turns into chaos.",
  });

  L.comparisonSlide(pres, {
    eyebrow: "Tool 13 · Storage",
    titleText: "Organise so you can actually find things",
    tag: "02 · Equipment",
    left: {
      title: "By olfactory family", color: C.berry, tint: "F3E3E8",
      items: ["Citrus", "Floral", "Green", "Fruity", "Woody", "Amber", "Musk", "Gourmand"],
    },
    right: {
      title: "Alphabetically", color: C.olive, tint: "E9EDE0",
      items: ["Simple and searchable", "No family judgement calls needed", "Works well once your library gets large"],
    },
    note: "Either system is genuinely fine — the only rule is to pick one and stay consistent with it.",
  });

  L.cardGrid(pres, {
    eyebrow: "The Basics",
    titleText: "Storage care, in five habits",
    tag: "02 · Equipment",
    cols: 5,
    cards: [
      { title: "Upright", sub: "Always, no exceptions.", color: C.gold },
      { title: "Caps tight", sub: "Every time, not just eventually.", color: C.rust },
      { title: "Out of sunlight", sub: "Direct light degrades materials fast.", color: C.olive },
      { title: "Away from heat", sub: "Heat accelerates degradation.", color: C.plum },
      { title: "Never left open", sub: "Evaporation starts immediately.", color: C.goldDk },
    ],
    note: "Five short habits, easy to state quickly on camera — don't over-explain any single one.",
  });

  L.splitSlide(pres, {
    eyebrow: "Tool 14",
    titleText: "Notebook or software",
    tag: "02 · Equipment",
    rows: [
      { h: "What you need to record", d: "Formulas, dilutions, material evaluations, accord versions, formula versions, supplier information, and general notes.", color: C.gold },
      { h: "A physical notebook works", d: "Fast, tactile, and always available — the tradeoff is no easy search or backup.", color: C.olive },
      { h: "So does software", d: "A spreadsheet or dedicated app makes searching, calculating and backing up far easier.", color: C.rust },
      { h: "Consistency beats the method", d: "Pick one system and stick with it — a half-used notebook and a half-used spreadsheet both fail the same way.", color: C.plum },
    ],
    drawVisual: (s, x, y, w, h) => {
      const cx = x + w / 2, cy = y + h * 0.42;
      const bw = w * 0.22, bh = h * 0.34;
      // notebook
      const nx = cx - w * 0.2 - bw / 2, ny = cy - bh / 2;
      s.addShape("roundRect", { x: nx, y: ny, w: bw, h: bh, rectRadius: 0.05, fill: { color: T.FAM.woody.bg }, line: { color: T.FAM.woody.b, width: 1.5 } });
      for (let i = 0; i < 3; i++) {
        s.addShape("line", { x: nx + bw * 0.18, y: ny + bh * (0.32 + i * 0.2), w: bw * 0.64, h: 0.001, line: { color: T.FAM.woody.b, width: 1 } });
      }
      s.addText("NOTEBOOK", { x: nx - 0.15, y: ny + bh + 0.1, w: bw + 0.3, h: 0.3, align: "center", fontFace: T.FONT_BODY, fontSize: 10.5, bold: true, color: T.FAM.woody.ink, isTextBox: true, margin: 0 });
      // software
      const sx = cx + w * 0.2 - bw / 2, sy = cy - bh / 2;
      s.addShape("roundRect", { x: sx, y: sy, w: bw, h: bh * 0.78, rectRadius: 0.04, fill: { color: T.FAM.marine.bg }, line: { color: T.FAM.marine.b, width: 1.5 } });
      for (let i = 0; i < 2; i++) {
        s.addShape("line", { x: sx + bw * 0.15, y: sy + bh * (0.22 + i * 0.28), w: bw * 0.7, h: 0.001, line: { color: T.FAM.marine.b, width: 1 } });
      }
      s.addShape("rect", { x: cx - bw * 0.14, y: sy + bh * 0.78, w: bw * 0.28, h: bh * 0.08, fill: { color: T.FAM.marine.b }, line: { type: "none" } });
      s.addText("SOFTWARE", { x: sx - 0.15, y: ny + bh + 0.1, w: bw + 0.3, h: 0.3, align: "center", fontFace: T.FONT_BODY, fontSize: 10.5, bold: true, color: T.FAM.marine.ink, isTextBox: true, margin: 0 });
      s.addText("VS", { x: cx - 0.3, y: cy - 0.18, w: 0.6, h: 0.36, align: "center", valign: "middle", fontFace: T.FONT_HEAD, fontSize: 14, bold: true, color: C.taupe, isTextBox: true, margin: 0 });
    },
    visualCaption: "We'll show the exact software setup used throughout this course.",
    note: "Introduce whichever specific tool you personally use here, live on camera if possible.",
  });

  // ---------------------------------------------------------------
  // CONSUMABLES
  // ---------------------------------------------------------------
  L.splitSlide(pres, {
    eyebrow: "Tool 15",
    titleText: "Perfumer's alcohol",
    tag: "02 · Equipment",
    rows: [
      { h: "Your main dilution carrier", d: "Used to make working dilutions of raw materials so they can be measured and evaluated accurately.", color: C.gold },
      { h: "Also your evaluation medium", d: "Diluted materials on a scent strip are usually cut with perfumer's alcohol first.", color: C.olive },
      { h: "The base of a finished perfume", d: "Alcohol-based fragrance is simply concentrate diluted into perfumer's alcohol — module 09 covers this in full.", color: C.rust },
    ],
    drawVisual: (s, x, y, w, h) => { T.drawBottle(s, x + w * 0.32, y + h * 0.12, w * 0.36, h * 0.76, { liquid: C.stone, fillLevel: 0.65, label: true }); },
    visualCaption: "An essential consumable — the deeper compounding process belongs to Module 09.",
    note: "Keep this introductory — don't go deep into compounding ratios here, that's the entire subject of module 09.",
  });

  L.cardGrid(pres, {
    eyebrow: "Tool 16",
    titleText: "Solvents you'll encounter",
    tag: "02 · Equipment",
    cols: 3,
    cards: [
      { title: "Ethanol", sub: "The standard perfumer's alcohol carrier for dilutions and finished fragrance.", icon: "solvent", color: T.FAM.marine.b },
      { title: "DPG", sub: "A low-odour carrier often used for oil-based or alcohol-free formats.", icon: "solvent", color: T.FAM.marine.ink },
      { title: "TEC", sub: "Another common carrier, chosen for specific solubility or format needs.", icon: "solvent", color: T.FAM.marine.a },
    ],
    note: "Which solvent to choose depends on the material, the purpose, solubility, and how you plan to evaluate it — deeper solvent theory belongs in later modules, keep this a simple introduction.",
  });

  // ---------------------------------------------------------------
  // CHECKLIST, WHAT TO SKIP, WORKSPACE
  // ---------------------------------------------------------------
  L.checklistSlide(pres, {
    eyebrow: "Start Here",
    titleText: "Your equipment checklist",
    tag: "02 · Equipment",
    groups: [
      { title: "Essential", color: C.rust, items: [
        "0.001g scale",
        "Magnetic stirrer",
        "Disposable plastic pipettes",
        "Scent strips",
        "Spatulas",
        "Beakers",
        "Labels",
        "Amber bottles",
        "Gloves",
      ] },
      { title: "Nice To Have", color: C.olive, items: [
        "Label printer",
        "Heated magnetic stirrer",
        "Speciality label stock",
        "Coloured labels",
        "Fridge",
      ] },
    ],
    note: "Everything in the essential column is genuinely enough to begin every remaining module. Nothing on the nice-to-have list is required to start.",
  });

  L.cardGrid(pres, {
    eyebrow: "Save Your Money",
    titleText: "What not to waste money on",
    tag: "02 · Equipment",
    cols: 5,
    dark: true,
    cards: [
      { title: "A huge lab", sub: "You don't need one.", color: C.gold },
      { title: "Bulk bottles", sub: "Not immediately.", color: C.rust },
      { title: "Automation", sub: "Expensive, unnecessary.", color: C.olive },
      { title: "All the glass", sub: "A few sizes is plenty.", color: C.plum },
      { title: "Machinery", sub: "It won't teach you anything.", color: C.goldDk },
    ],
    note: "Keep this light and reassuring, not preachy — the goal is permission to start small, not shame about wanting nice equipment eventually.",
  });

  L.equationSlide(pres, {
    eyebrow: "The Real Investment",
    titleText: "What actually moves you forward",
    tag: "02 · Equipment",
    terms: [
      { label: "Good raw materials", icon: "molecule", fam: "woody", operator: "+" },
      { label: "An accurate scale", icon: "scale", fam: "leather", operator: "+" },
      { label: "Consistent training", icon: "strip", fam: "leather", operator: "=" },
      { label: "Real progress", icon: "bottle", fam: "amber", result: true },
    ],
    note: "This is the single memorable line to close the equipment conversation on — everything else in this module supports one of these three things.",
  });

  L.accordDiagram(pres, {
    eyebrow: "Put It Together",
    titleText: "Your beginner workspace",
    tag: "02 · Equipment",
    centerName: "Your Bench",
    centerIcon: "scale",
    centerFam: "leather",
    satellites: [
      { label: "Raw materials, organised behind", icon: "amber glass bottles", fam: "amber" },
      { label: "Disposable pipettes", icon: "pipette", fam: "green" },
      { label: "Labelled dilution bottles", icon: "dilution bottle", fam: "marine" },
      { label: "Scent strips", icon: "strip", fam: "leather" },
      { label: "Weighing vessel", icon: "weighing boat", fam: "leather" },
      { label: "Notebook or laptop", icon: "storage box", fam: "woody" },
      { label: "A clear waste area", icon: "funnel", fam: "marine" },
    ],
    note: "Keep the scale as the physical and visual centre of the bench — everything else is arranged around it, always within reach.",
  });

  L.rememberSlide(pres, {
    tag: "End of Module 02",
    text: "A precise scale and a stack of scent strips\nwill teach you more than any expensive\nlab ever will.",
    accent: C.rust,
    note: "Close on reassurance — equipment anxiety stops beginners before they start. Two tools are genuinely enough.",
  });
};
