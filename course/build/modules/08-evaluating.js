const T = require("../theme");
const L = require("../layouts");
const { C } = T;

module.exports = function build(pres) {
  L.titleSlide(pres, {
    tag: "Module 08 · Evaluating & Developing",
    graphic: "strip",
    eyebrow: "Presented by Kristan",
    titleText: "After Version 1:\nEvaluate & Develop",
    subtitle: "Making the formula was the easy part. Now the real work of perfumery begins.",
    points: [
      "Judging a formula across a real 48-hour timeline",
      "A structured framework — opening, heart, drydown, diffusion, balance and more",
      "A troubleshooting guide — symptom to fix",
    ],
    presenter: "Kristan",
    accent: C.olive,
    note: "Set expectations: version 1 is never the finished formula. This module is about the iteration that follows.",
  });

  L.splitSlide(pres, {
    eyebrow: "The First Rule",
    titleText: "Always evaluate on scent strips",
    tag: "08 · Evaluating",
    rows: [
      { h: "Immediate smell ≠ finished evaluation", d: "What you smell in the first five minutes is only the opening — never the whole story." },
      { h: "One strip, dated and labelled", d: "Every version of a formula gets its own dedicated, clearly marked strip." },
      { h: "Compare strips side by side", d: "Keep previous versions to compare directly against the new one at each checkpoint." },
    ],
    drawVisual: (s, x, y, w, h) => {
      const n = 3;
      const gap = w / (n + 1);
      for (let i = 0; i < n; i++) T.drawStrip(s, x + gap * (i + 1) - 0.09, y + h * 0.14, h * 0.66, L.heroFor("e" + i));
    },
    visualCaption: "Version 1, version 2, version 3 — evaluated side by side, not in isolation.",
    note: "This reinforces the habit from module 05, now applied specifically to full formulas rather than single materials.",
  });

  L.timelineSlide(pres, {
    eyebrow: "The Evaluation Timeline",
    titleText: "Judge a formula across 48 hours",
    tag: "08 · Evaluating",
    points: [
      { t: "0 min", label: "Opening impression" },
      { t: "30 min", label: "Top notes settling" },
      { t: "2 hours", label: "Heart taking shape" },
      { t: "6 hours", label: "Structure becoming clear" },
      { t: "24 hours", label: "Drydown forming" },
      { t: "48 hours", label: "Final verdict" },
    ],
    caption: "A formula judged only at 0 minutes has not really been evaluated at all.",
    note: "Same timeline discipline as module 05, scaled up to the whole formula.",
  });

  L.checklistSlide(pres, {
    eyebrow: "Better Questions",
    titleText: "Evaluating an accord or formula, not \"do I like it?\"",
    tag: "08 · Evaluating",
    groups: [
      { title: "Structure & Stages", color: C.gold, items: [
        "Opening — strong enough, or does it vanish?",
        "Heart — does it hold attention once the top fades?",
        "Drydown — does the ending still serve the idea?",
        "Diffusion — does it project, or stay too close to the skin?",
      ] },
      { title: "Character & Performance", color: C.olive, items: [
        "Balance — sweet, dry, green or heavy: is anything overdone?",
        "Freshness — does it feel bright, or does it read stale?",
        "Texture — smooth or rough at each stage?",
        "Strength & longevity — how loud is it, and how long does it actually last?",
      ] },
      { title: "Diagnosis & Direction", color: C.rust, items: [
        "What's dominating the formula?",
        "What's missing from it?",
        "What would you increase or decrease first?",
        "Does it still match the original brief?",
      ] },
    ],
    note: "\"Do I like it?\" is an emotional question with no next action. This twelve-question framework applies to a single accord or a full formula alike — each answer points to a fix on the troubleshooting slide that follows.",
  });

  L.cardGrid(pres, {
    eyebrow: "Symptom → Fix",
    titleText: "Troubleshooting a rough formula",
    tag: "08 · Evaluating",
    cols: 3,
    cards: [
      { title: "Feels flat or boring", sub: "Add a diffusive material — Hedione or a fresh citrus top — to open the formula up and give it lift.", color: C.gold },
      { title: "Too sweet or cloying", sub: "Lower the gourmand materials, or add a dry, bitter contrast like vetiver or bergamot to cut through it.", color: C.rust },
      { title: "Doesn't last", sub: "Add a fixative or base material — a musk, a resin, a heavier wood — to anchor the drydown.", color: C.olive },
      { title: "One material dominates", sub: "Lower that material's percentage in small increments, re-evaluating on a fresh strip after each change.", color: C.plum },
      { title: "Feels harsh or rough", sub: "Smooth the edges with a diffusive floral or a soft musk — they round out sharp, isolated materials.", color: C.berry },
      { title: "Opening is weak", sub: "Increase the top-note percentage, or add a lift material like an aldehyde or citrus booster.", color: C.goldDk },
    ],
    note: "This is the practical companion to the six questions on the previous slide — every \"yes, this is a problem\" answer points here for the actual fix.",
  });

  L.flowSlide(pres, {
    eyebrow: "The Loop",
    titleText: "The development cycle",
    tag: "08 · Evaluating",
    steps: [
      { label: "Formula", desc: "Your current version." },
      { label: "Compound", desc: "Mix and dilute it." },
      { label: "Evaluate", desc: "Judge it across 48 hours." },
      { label: "Identify issue", desc: "Name the specific problem." },
      { label: "Modify", desc: "Change one thing." },
      { label: "Repeat", desc: "Compound the next version." },
    ],
    note: "This mirrors module 06's accord loop exactly — reinforce that it's the same discipline at every scale of the work.",
  });

  L.mythSlide(pres, {
    eyebrow: "Discipline, Not Guesswork",
    titleText: "Changing formulas the right way",
    tag: "08 · Evaluating",
    myth: "If something feels off, just add a bit of everything and see if it improves.",
    fact: "Random, simultaneous changes destroy your ability to learn anything — if three things change and the formula improves, you'll never know which one mattered. Identify the specific issue, change exactly one variable, and re-evaluate before touching anything else.",
    note: "This directly connects to the Jean Carles \"change one variable\" principle from module 06 — repeat it here at the formula level.",
  });

  L.rememberSlide(pres, {
    tag: "End of Module 08",
    text: "One version is a data point, not a verdict.\nEvaluate across 48 hours before you judge.",
    note: "Close the module with patience as the core message — most formulas are abandoned too early, before their drydown is even understood.",
  });
};
