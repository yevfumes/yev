const T = require("../theme");
const L = require("../layouts");
const { C } = T;

module.exports = function build(pres) {
  L.titleSlide(pres, {
    tag: "Module 10 · Maturation & Maceration",
    graphic: "bottle",
    titleText: "Why Perfume Needs\nTime To Rest",
    subtitle: "What actually happens to a compound after it's bottled — and what doesn't.",
    points: [
      "Why maceration changes a formula's character",
      "How long to wait, and how to tell it's ready",
      "Storage conditions that protect — or ruin — a batch",
    ],
    accent: C.plum,
    note: "This module often gets skipped by impatient beginners — make the case for why patience pays off here.",
  });

  L.cardGrid(pres, {
    eyebrow: "What Changes Over Time",
    titleText: "Eight real effects of maceration",
    tag: "10 · Maturation",
    cols: 4,
    cards: [
      { title: "Integration", sub: "Materials blend and round together.", color: C.gold },
      { title: "Softer alcohol", sub: "The sharp alcohol bite fades.", color: C.rust },
      { title: "Perceived smoothing", sub: "Rough edges settle down.", color: C.olive },
      { title: "Top-note shift", sub: "Opening notes can shift slightly.", color: C.berry },
      { title: "Solubility", sub: "Materials fully dissolve into solution.", color: C.plum },
      { title: "Colour changes", sub: "Some formulas darken with age.", color: C.goldDk },
      { title: "Oxidation", sub: "Slow chemical change, for better or worse.", color: C.smoke },
      { title: "Precipitation", sub: "Anything insoluble can settle out.", color: C.stone },
    ],
    note: "These are real, observable effects — ground the module in what's actually measurable, not folklore.",
  });

  L.splitSlide(pres, {
    eyebrow: "The Science, Briefly",
    titleText: "Why the same liquid smells different later",
    tag: "10 · Maturation",
    rows: [
      { h: "Molecules keep interacting", d: "Materials continue to associate and rearrange in solution long after mixing." },
      { h: "Alcohol needs time to settle", d: "Fresh alcohol reads sharp and hot — that fades measurably within days." },
      { h: "Nothing mysterious is happening", d: "It's slow, ordinary physical chemistry — not magic, and it's predictable enough to plan around." },
    ],
    drawVisual: (s, x, y, w, h) => { T.drawMolecule(s, x + w / 2, y + h / 2, w * 0.26, C.plum, { nodeColor: C.gold, bondColor: C.stone }); },
    visualCaption: "A slow, ordinary process — not an unpredictable transformation.",
    note: "Keep the science accessible — the goal is confidence, not a chemistry lecture.",
  });

  L.timelineSlide(pres, {
    eyebrow: "What To Expect",
    titleText: "How the smell shifts, over weeks",
    tag: "10 · Maturation",
    points: [
      { t: "Immediately", label: "Sharp and hot" },
      { t: "24 hours", label: "Alcohol bite softening" },
      { t: "1 week", label: "Noticeably smoother" },
      { t: "2 weeks", label: "Well integrated" },
      { t: "4 weeks", label: "Fully matured character" },
    ],
    caption: "Judge a fresh compound gently — it hasn't finished becoming itself yet.",
    note: "Set realistic expectations for how long students should wait before final-judging a compound.",
  });

  L.mythSlide(pres, {
    eyebrow: "Manage Expectations",
    titleText: "What maceration cannot do",
    tag: "10 · Maturation",
    myth: "Given enough time, maceration will fix a broken or unbalanced formula.",
    fact: "Maturation refines what's already structurally sound — it softens, integrates and rounds. It cannot rescue a formula with the wrong materials, wrong ratios, or a fundamentally broken idea. Fix the structure first; let time do the polishing, not the repairing.",
    note: "This myth causes real wasted time — some students let a broken formula sit for months hoping it will \"come together.\"",
  });

  L.checklistSlide(pres, {
    eyebrow: "Practical Protocol",
    titleText: "A simple maceration routine",
    tag: "10 · Maturation",
    groups: [
      { title: "Concentrate stage", color: C.gold, items: ["Rest the raw concentrate 24–48 hours", "Check for clarity before diluting"] },
      { title: "Diluted stage", color: C.rust, items: ["Macerate 1–4 weeks in a cool, dark place", "Shake gently every few days"] },
      { title: "Before bottling", color: C.olive, items: ["Re-evaluate on a fresh strip", "Filter if any haze or sediment appears"] },
    ],
    note: "A concrete, repeatable routine students can follow for every formula going forward.",
  });

  L.rememberSlide(pres, {
    tag: "End of Module 10",
    text: "Maturation refines what's already good.\nIt cannot rescue a broken structure.",
    note: "Close with the module's core lesson — patience matters, but it isn't a substitute for good formula construction.",
  });
};
