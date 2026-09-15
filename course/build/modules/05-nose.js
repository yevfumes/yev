const T = require("../theme");
const L = require("../layouts");
const { C } = T;

module.exports = function build(pres) {
  L.titleSlide(pres, {
    tag: "Module 05 · Nose Training",
    graphic: "strip",
    titleText: "Training Your Nose\nLike A Perfumer",
    subtitle: "The nose is a muscle. This module is how professionals actually train it.",
    points: [
      "Evaluating a strip across 48 real hours",
      "What to record, every single time",
      "How to actually build lasting scent memory",
    ],
    accent: C.olive,
    note: "Set the tone: this is a discipline, not a talent. Anyone who does this consistently improves.",
  });

  L.timelineSlide(pres, {
    eyebrow: "The Core Habit",
    titleText: "Evaluate on a strip, across real time",
    tag: "05 · Nose Training",
    points: [
      { t: "0 min", label: "First impression" },
      { t: "15 min", label: "Top note settling" },
      { t: "1 hour", label: "Heart emerging" },
      { t: "4 hours", label: "Character maturing" },
      { t: "24 hours", label: "Drydown forming" },
      { t: "48 hours", label: "Final, true character" },
    ],
    caption: "A material you only smelled at 0 minutes is a material you don't actually know yet.",
    note: "This timeline should feel familiar — it echoes module 02's scent strip introduction, now turned into a discipline.",
  });

  L.checklistSlide(pres, {
    eyebrow: "Consistent Evaluation, Every Time",
    titleText: "Questions to ask when evaluating a material",
    tag: "05 · Nose Training",
    groups: [
      { title: "About The Material", color: C.gold, items: [
        "What is the first impression?",
        "What olfactory family does it belong to?",
        "How strong is it?",
        "How diffusive is it?",
      ] },
      { title: "About Its Use", color: C.olive, items: [
        "How does it change over 15 min, 1 hour, several hours?",
        "Does it remind you of another material?",
        "What materials might it pair well with?",
        "Top, heart, base — or several stages at once?",
        "What effect could it create in a formula?",
      ] },
    ],
    note: "Encourage a template built from these nine questions, answered every single evaluation — patterns become visible over months.",
  });

  L.splitSlide(pres, {
    eyebrow: "A Common Mistake",
    titleText: "Neat alone can mislead you",
    tag: "05 · Nose Training",
    rows: [
      { h: "Powerful materials overwhelm at 100%", d: "Some materials are so potent neat that your nose can't parse their real character." },
      { h: "Formulas rarely use materials neat", d: "You'll almost always work with the material diluted — so evaluate it the way you'll actually use it." },
      { h: "Smell across the dilution ladder", d: "Compare a material at 100%, 10% and 1% to understand how its character shifts with concentration." },
    ],
    drawVisual: (s, x, y, w, h) => {
      const n = 3;
      const gap = w / (n + 1);
      for (let i = 0; i < n; i++) T.drawStrip(s, x + gap * (i + 1) - 0.09, y + h * 0.14, h * 0.66, L.heroFor("d" + i), { dip: 0.25 + i * 0.2 });
    },
    visualCaption: "Same material, three strengths — three different lessons.",
    note: "Connects directly back to module 04's dilution ladder — reinforce the link between the two modules.",
  });

  L.cardGrid(pres, {
    eyebrow: "Going Digital",
    titleText: "What your material log should track",
    tag: "05 · Nose Training",
    cols: 4,
    cards: [
      { title: "Material", sub: "Exact name and CAS if known.", color: C.gold },
      { title: "Supplier", sub: "Where it was sourced.", color: C.rust },
      { title: "Dilution", sub: "Strength and solvent used.", color: C.olive },
      { title: "Description", sub: "Your written evaluation.", color: C.plum },
      { title: "Longevity", sub: "How long it lasted on strip.", color: C.berry },
      { title: "Family", sub: "Which olfactory group it belongs to.", color: C.goldDk },
      { title: "Formula usage", sub: "Which formulas it's appeared in.", color: C.gold },
    ],
    note: "This is the exact schema we'll show in the sample card next — recommend a spreadsheet or simple database, whichever software you use.",
  });

  L.cardGrid(pres, {
    eyebrow: "The Long Game",
    titleText: "How to actually build scent memory",
    tag: "05 · Nose Training",
    cols: 4,
    cards: [
      { title: "Compare relatives", sub: "Smell close relatives side by side — Ambroxan against Cetalox, or Galaxolide against Ambrettolide — the differences teach far more than either smelled alone.", color: C.gold },
      { title: "Revisit monthly", sub: "Re-smell materials you \"know\" every few weeks. Memory fades faster than confidence does.", color: C.rust },
      { title: "Pair opposites", sub: "Smell two contrasting materials back to back — a sharp citrus against a soft musk sharpens perception of both.", color: C.olive },
      { title: "Use associations", sub: "Link a smell to a vivid image or memory of your own — invented associations stick better than technical descriptions.", color: C.plum },
    ],
    note: "This is the difference between a hobbyist who plateaus and a nose that keeps improving for years — treat it as a daily habit, not a one-time lesson.",
  });

  L.cardGrid(pres, {
    eyebrow: "Keep A Record",
    titleText: "How to actually log your evaluations",
    tag: "05 · Nose Training",
    cols: 3,
    cards: [
      { title: "Course software", sub: "The dedicated perfumery software used throughout this course — built for exactly this.", color: C.gold },
      { title: "Excel or Google Sheets", sub: "A simple spreadsheet works perfectly well — searchable, backed up, and free.", color: C.olive },
      { title: "A physical notebook", sub: "Fast and tactile. The trade-off is no easy search — fine if you're consistent about it.", color: C.rust },
    ],
    note: "The method matters far less than the consistency — pick one of these three and actually use it every time.",
  });

  L.heroSlide(pres, {
    eyebrow: "A Sample Record",
    titleText: "What one material evaluation looks like",
    tag: "05 · Nose Training",
    drawVisual: (s, x, y, w, h) => {
      const cardX = x + w * 0.08, cardY = y + h * 0.1, cardW = w * 0.84, cardH = h * 0.8;
      s.addShape("roundRect", { x: cardX, y: cardY, w: cardW, h: cardH, rectRadius: 0.12,
        fill: { color: C.white }, line: { color: C.line, width: 1 } });
      T.filledCircle(s, cardX + 0.4, cardY + 0.4, 0.14, C.berry);
      s.addText("Rose Absolute — Bulgarian", { x: cardX + 0.7, y: cardY + 0.24, w: cardW - 1.0, h: 0.35,
        fontFace: T.FONT_HEAD, fontSize: 17, bold: true, color: C.ink, isTextBox: true, margin: 0 });
      const fields = [
        ["Family", "Floral"], ["Dilution", "10% in DPG"], ["Longevity", "Medium–long (8h+)"],
        ["Character", "Honeyed, green, slightly spiced"], ["Drydown", "Soft, powdery, lightly sweet"],
        ["Possible use", "Heart of a floral formula, rounds out fruity accords"],
      ];
      fields.forEach((f, i) => {
        const col = i % 2, row = Math.floor(i / 2);
        const fx = cardX + 0.4 + col * (cardW / 2 - 0.4);
        const fy = cardY + 0.85 + row * 0.62;
        s.addText(f[0].toUpperCase(), { x: fx, y: fy, w: cardW / 2 - 0.6, h: 0.24,
          fontFace: T.FONT_BODY, fontSize: 9.5, bold: true, color: C.goldDk, charSpacing: 1.5, isTextBox: true, margin: 0 });
        s.addText(f[1], { x: fx, y: fy + 0.24, w: cardW / 2 - 0.6, h: 0.32,
          fontFace: T.FONT_BODY, fontSize: 11.5, color: C.taupeDk, isTextBox: true, margin: 0 });
      });
    },
    caption: "This is the exact shape of a good digital material card — recreate it for every material you own.",
    note: "Show your actual software on screen here if possible — this slide is a mock-up standing in for a live demo.",
  });

  L.rememberSlide(pres, {
    tag: "End of Module 05",
    text: "Your nose is a muscle. Train it daily,\nin writing — not just in passing sniffs.",
    note: "Close the module by reinforcing the daily habit — consistency over intensity.",
  });
};
