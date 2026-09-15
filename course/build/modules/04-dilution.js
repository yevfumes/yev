const T = require("../theme");
const L = require("../layouts");
const { C } = T;

module.exports = function build(pres) {
  L.titleSlide(pres, {
    tag: "Module 04 · Dilution",
    graphic: "flask",
    eyebrow: "Presented by Yev",
    titleText: "How To Dilute\nWith Confidence",
    subtitle: "Dilution is the skill that makes every other skill in this course possible.",
    points: [
      "Worked examples at 10%, 1% and 0.1%",
      "Diluting liquids vs. solids, step by step",
      "How to label a dilution so it's never a mystery",
    ],
    presenter: "Yev",
    accent: C.gold,
    note: "This is one of the most practical, hands-on modules — encourage students to have their scale out while watching.",
  });

  L.cardGrid(pres, {
    eyebrow: "Why We Dilute",
    titleText: "Six reasons every perfumer dilutes",
    tag: "04 · Dilution",
    cols: 3,
    cards: [
      { title: "Accuracy", sub: "Weighing 0.05g of pure material is unreliable — weighing it diluted is precise.", color: C.gold },
      { title: "Easier evaluation", sub: "A diluted material is safer and clearer to smell on a strip.", color: C.rust },
      { title: "Easier dosing", sub: "Small, controlled doses become achievable at any strength.", color: C.olive },
      { title: "Understanding potency", sub: "Powerful materials reveal their true character only once tamed.", color: C.plum },
      { title: "Working with solids", sub: "Solid materials become usable liquids once dissolved.", color: C.goldDk },
      { title: "Formula development", sub: "Diluted stocks let you iterate a formula quickly and repeatably.", color: C.berry },
    ],
    note: "Frame dilution as a superpower, not a hurdle — it's what turns raw, unusable materials into a working palette.",
  });

  L.cardGrid(pres, {
    eyebrow: "The Dilution Ladder",
    titleText: "Common working strengths",
    tag: "04 · Dilution",
    cols: 5,
    cards: [
      { title: "100%", sub: "Neat material — undiluted", color: C.rust },
      { title: "50%", sub: "Half strength — strong materials", color: C.gold },
      { title: "10%", sub: "The most common working dilution", color: C.olive },
      { title: "1%", sub: "For very potent materials", color: C.plum },
      { title: "0.1%", sub: "For the most powerful trace materials", color: C.berry },
    ],
    note: "This ladder will come up repeatedly — most working stocks in this course live at 10% or 1%.",
  });

  L.splitSlide(pres, {
    eyebrow: "A Common Question",
    titleText: "What does \"Eau de Parfum\" actually mean?",
    tag: "04 · Dilution",
    rows: [
      { h: "~20% is commonly associated with EDP", d: "As a rough, widely-used reference point, Eau de Parfum concentrate sits around 20% of the finished bottle.", color: C.gold },
      { h: "But there's no single fixed rule", d: "Concentration terminology (EDT, EDP, extrait, and so on) is not governed by one universal, legally fixed percentage — usage varies by brand and region.", color: C.olive },
      { h: "The strength is what matters, not the label", d: "Focus on the actual concentrate percentage in your formula rather than chasing a specific category name.", color: C.rust },
    ],
    drawVisual: (s, x, y, w, h) => { T.iconChip(s, x + w / 2, y + h * 0.46, w * 0.32, "bottle", { fam: "amber" }); },
    visualCaption: "\"EDP\" is a useful shorthand, not a precise specification.",
    note: "Beginners often treat EDT/EDP/extrait as strict legal categories — correct that gently here before it becomes a bad habit.",
  });

  L.circleProcessFlow(pres, {
    eyebrow: "The Big Picture",
    titleText: "From raw material to labelled bottle",
    tag: "04 · Dilution",
    steps: [
      { label: "Raw material", icon: "bergamot", fam: "citrus", desc: "The material you're diluting" },
      { label: "Solvent", icon: "solvent", fam: "marine", desc: "Ethanol, DPG or similar" },
      { label: "Mixed dilution", icon: "mixture", fam: "amber", desc: "Weighed, combined, stirred" },
      { label: "Labelled bottle", icon: "bottle", fam: "amber", desc: "Material, %, solvent (date optional)" },
    ],
    note: "This is the whole process at a glance — every worked example on the next few slides fills in one of these four circles.",
  });

  L.splitSlide(pres, {
    eyebrow: "Worked Example",
    titleText: "Diluting a liquid material",
    tag: "04 · Dilution",
    rows: [
      { h: "Step 1 — weigh the material", d: "Place your bottle on the scale, tare, and weigh out exactly 1g of material.", color: C.gold },
      { h: "Step 2 — add solvent", d: "Add 9g of your chosen solvent (often ethanol or DPG) to the same bottle.", color: C.olive },
      { h: "Step 3 — you now have 10%", d: "1g material + 9g solvent = 10g total, and the material is 10% of that total.", color: C.rust },
    ],
    drawVisual: (s, x, y, w, h) => {
      T.iconChip(s, x + w / 2, y + h * 0.46, w * 0.34, "flask", { fam: "amber", color: C.gold });
    },
    visualCaption: "1g material + 9g solvent = 10% dilution.",
    note: "Do this live on camera if possible — watching the actual weighing is far more valuable than hearing the ratio described.",
  });

  L.splitSlide(pres, {
    eyebrow: "Worked Example",
    titleText: "Getting down to 1% and 0.1%",
    tag: "04 · Dilution",
    rows: [
      { h: "1%, straight from raw material", d: "0.1g material + 9.9g solvent = 10g total, and the material is 1% of that total.", color: C.gold },
      { h: "1%, the easier way — from a 10% stock", d: "1g of your existing 10% stock + 9g solvent = 10g at 1%. No need to weigh a tiny 0.1g amount twice.", color: C.olive },
      { h: "0.1%, the same trick again", d: "1g of your 1% stock + 9g solvent = 10g at 0.1%. Each stock becomes the starting point for the next.", color: C.rust },
    ],
    drawVisual: (s, x, y, w, h) => {
      const cx = x + w / 2, cy = y + h * 0.42;
      [0.3, 0.2, 0.1].forEach((r, i) => T.ringFrame(s, cx, cy, w * r, [C.gold, C.olive, C.rust][i], { thickness: 0.02 }));
    },
    visualCaption: "Each dilution is built from the one before it — a chain, not three separate weighings.",
    note: "This \"stock of a stock\" technique is the single most useful trick in this module — it turns an impossible 0.1g weighing into two easy 1g ones.",
  });

  L.cardGrid(pres, {
    eyebrow: "Choosing How Low To Go",
    titleText: "Why some materials need lower dilutions",
    tag: "04 · Dilution",
    cols: 3,
    cards: [
      { title: "Raw potency", sub: "Some materials are so powerful that even 10% overwhelms a scent strip — 1% or lower reveals their real character.", color: C.gold },
      { title: "Accurate dosing in a formula", sub: "A material used at 0.05% of a formula needs a dilute stock — otherwise you simply can't weigh a small enough amount of the neat material.", color: C.olive },
      { title: "Safety and usage limits", sub: "IFRA and other guidelines cap some materials at very low percentages — a pre-made low dilution keeps you safely under the limit by default.", color: C.rust },
    ],
    note: "This connects directly to module 11's IFRA discussion — a well-chosen low dilution is a compliance tool as much as a workflow one.",
  });

  L.circleProcessFlow(pres, {
    eyebrow: "Worked Example",
    titleText: "Diluting a solid material",
    tag: "04 · Dilution",
    steps: [
      { label: "Weigh", icon: "scale", fam: "leather", desc: "In a beaker or weighing vessel/paper" },
      { label: "Add solvent", icon: "solvent", fam: "marine", desc: "The calculated weight" },
      { label: "Warm gently", icon: "swirl", fam: "gourmand", desc: "Only if needed" },
      { label: "Mix", icon: "glass rod", fam: "marine", desc: "Until fully dissolved" },
      { label: "Label", icon: "label", fam: "leather", desc: "Material, %, solvent (date optional)" },
    ],
    note: "Warn against overheating — gentle warming only, many materials degrade or evaporate unwanted fractions under heat.",
  });

  L.cardGrid(pres, {
    eyebrow: "Choosing Strength",
    titleText: "Dilution depends on potency and purpose",
    tag: "04 · Dilution",
    cols: 3,
    cards: [
      { title: "Often evaluated at 100%", sub: "Gentle, low-impact materials — many light woods and musks.", color: C.stone },
      { title: "Often evaluated at 10%", sub: "The default for most working materials in a formula.", color: C.olive },
      { title: "Often evaluated at 1%", sub: "Powerful trace materials — strong musks, some florals, superpower synthetics.", color: C.rust },
    ],
    note: "Emphasise this is a starting guideline — always confirm the right dilution by smelling, not just by category.",
  });

  L.heroSlide(pres, {
    eyebrow: "Do This Every Time",
    titleText: "The ideal dilution label",
    tag: "04 · Dilution",
    drawVisual: (s, x, y, w, h) => {
      const bw = w * 0.34, bh = h * 0.72;
      const bx = x + w * 0.12, by = y + h * 0.14;
      T.drawBottle(s, bx, by, bw, bh, { liquid: C.gold, fillLevel: 0.55, label: true });
      const fields = ["Material:  Hedione", "Dilution:  10% in DPG", "Solvent:  DPG", "Date:  optional"];
      fields.forEach((f, i) => {
        s.addText(f, { x: x + w * 0.52, y: y + h * (0.22 + i * 0.13), w: w * 0.42, h: 0.35,
          fontFace: T.FONT_BODY, fontSize: 14, bold: i === 0, color: i === 3 ? C.taupe : C.ink, italic: i === 3, isTextBox: true, margin: 0 });
      });
    },
    caption: "Material, dilution and solvent — every single bottle, no exceptions. Date is a nice-to-have, not a requirement.",
    note: "This habit prevents the single most common lab disaster: an unlabelled bottle of unknown strength.",
  });

  L.rememberSlide(pres, {
    tag: "End of Module 04",
    text: "When in doubt, dilute. You can always\nsmell stronger — you can't un-smell overload.",
    note: "Close with a practical safety reminder as well as a philosophical one.",
  });
};
