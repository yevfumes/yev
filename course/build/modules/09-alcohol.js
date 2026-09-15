const T = require("../theme");
const L = require("../layouts");
const { C } = T;

module.exports = function build(pres) {
  L.titleSlide(pres, {
    tag: "Module 09 · Alcohol & Compounding",
    graphic: "flask",
    eyebrow: "Presented by Yev",
    titleText: "Alcohol, Scaling\n& Compounding",
    subtitle: "Turning a finished concentrate into a real, wearable perfume.",
    points: [
      "Perfumer's alcohol vs. everyday alcohol",
      "Scaling a formula up from a small test batch",
      "Compounding, bottling and labelling basics",
    ],
    presenter: "Yev",
    accent: C.rust,
    note: "This module bridges formula work to an actual finished bottle — a satisfying, tangible module.",
  });

  L.cardGrid(pres, {
    eyebrow: "Scaling A Formula",
    titleText: "The same percentages, at any batch size",
    tag: "09 · Alcohol",
    cols: 3,
    cards: [
      { title: "10g batch", sub: "Fast, cheap testing size — ideal for early versions.", color: C.gold },
      { title: "100g batch", sub: "A comfortable size for refined, near-final formulas.", color: C.rust },
      { title: "1kg batch", sub: "Production scale — once the formula is truly locked.", color: C.olive },
    ],
    note: "Emphasise: the percentages never change with scale — only the total weight does. This is why percentage-based formula sheets matter.",
  });

  L.formulaSlide(pres, {
    eyebrow: "Adding Alcohol",
    titleText: "Concentrate + perfumer's alcohol",
    tag: "09 · Alcohol",
    idea: "A typical Eau de Parfum ratio, expressed simply.",
    rows: [
      { name: "Perfume concentrate", pct: 20, color: C.gold, role: "Your finished formula" },
      { name: "Perfumer's alcohol", pct: 80, color: C.stone, role: "The carrier" },
    ],
    note: "Keep this simple and visual — students already saw a more detailed breakdown in module 01, this is the practical compounding version.",
  });

  L.splitSlide(pres, {
    eyebrow: "Handle With Care",
    titleText: "Water is optional, not required",
    tag: "09 · Alcohol",
    rows: [
      { h: "Most fine fragrances skip it entirely", d: "Many alcohol-based EDPs and extraits work perfectly well as concentrate and alcohol alone, with no water added at all." },
      { h: "Used only for a specific reason", d: "A small amount can soften alcohol's harshness or adjust the final feel — add it deliberately, never as a default step." },
      { h: "If you do use it, use purified water", d: "Purified, distilled or deionised water only — tap water's minerals and impurities can cloud a compound or shorten its shelf life." },
      { h: "Cloudiness is a warning sign", d: "A cloudy or hazy compound usually means something — often added water — has pushed a material out of solution." },
    ],
    drawVisual: (s, x, y, w, h) => { T.drawFlask(s, x + w * 0.32, y + h * 0.14, w * 0.36, h * 0.72, C.stone); },
    visualCaption: "Clarity is a signal — always check your finished compound in good light.",
    note: "Correct a common beginner assumption here: water is not a required ingredient in a formula — many students add it out of habit rather than need. This sets up module 10's discussion of maceration and solubility.",
  });

  L.splitSlide(pres, {
    eyebrow: "Protecting The Formula",
    titleText: "Antioxidants — used thoughtfully",
    tag: "09 · Alcohol",
    rows: [
      { h: "Why oxidation happens", d: "Light, air and time can degrade certain materials, shifting or dulling their smell." },
      { h: "Which materials are sensitive", d: "Citrus oils and many naturals rich in terpenes oxidise fastest." },
      { h: "BHT and similar antioxidants", d: "Small doses can meaningfully slow this degradation in vulnerable formulas." },
      { h: "Never add it blindly", d: "Not every formula needs an antioxidant — add it deliberately, for a specific material at risk, not as a default habit." },
    ],
    drawVisual: (s, x, y, w, h) => { T.drawMolecule(s, x + w / 2, y + h / 2, w * 0.24, C.rust, { nodeColor: C.gold, bondColor: C.stone }); },
    visualCaption: "A targeted tool for specific oxidation-sensitive materials — not a blanket additive.",
    note: "This is an easy default to overuse — stress the 'not blindly' point, it's explicitly called out for a reason.",
  });

  L.flowSlide(pres, {
    eyebrow: "The Professional Workflow",
    titleText: "The compounding process",
    tag: "09 · Alcohol",
    steps: [
      { label: "Weigh", desc: "Per the formula sheet." },
      { label: "Mix", desc: "Combine gently." },
      { label: "Rest", desc: "Let it settle." },
      { label: "Dilute", desc: "Add alcohol." },
      { label: "Macerate", desc: "Mature over time." },
      { label: "Filter", desc: "If needed." },
      { label: "Bottle", desc: "Label & date." },
    ],
    note: "This seven-step flow is the professional standard — module 10 goes deep on the maceration step specifically.",
  });

  L.rememberSlide(pres, {
    tag: "End of Module 09",
    text: "Alcohol isn't filler — treat its ratio, its\nrest, and its grade with the same care\nas the concentrate.",
    note: "Close on respect for the process — beginners often rush the alcohol and maceration steps.",
  });
};
