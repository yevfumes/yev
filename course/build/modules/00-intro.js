const T = require("../theme");
const L = require("../layouts");
const { C } = T;

module.exports = function build(pres) {
  L.titleSlide(pres, {
    tag: "Module 00 · Introduction",
    graphic: "rings",
    eyebrow: "The Art & Science of Perfumery",
    titleText: `${T.BRAND_NAME.slice(0, 8)}\n${T.BRAND_NAME.slice(8)}`,
    subtitle: "A hands-on, beginner-to-intermediate perfumery education — built to be watched, smelled, and practiced alongside every lesson.",
    points: [
      "How this deck, the videos and Discord fit together",
      "Why this course is hands-on, not passive",
      "Your roadmap through all 13 modules",
    ],
    big: true,
    noBrandMark: true,
    note: "Warm cold open. Set the tone: this is not a corporate course, it's a creative lab. Introduce the energy of the whole program before naming a single ingredient.",
  });

  L.splitSlide(pres, {
    eyebrow: "Welcome",
    titleText: "This deck is not the lesson.\nIt's your lab notebook.",
    tag: "00 · Introduction",
    rows: [
      { h: "Built for video, not for reading", d: "Every slide is a visual anchor for what's being explained out loud — not a script. Watch, listen, and use the slide to stay oriented." },
      { h: "Beginner to intermediate", d: "We start with zero assumptions and build to full formula construction, evaluation, compliance and brand launch." },
      { h: "Made to be practiced", d: "Every module pairs with real smelling, real dilution, and real formula work — not passive watching." },
    ],
    drawVisual: (s, x, y, w, h) => {
      T.drawBottle(s, x + w * 0.32, y + h * 0.12, w * 0.36, h * 0.76, { liquid: C.gold, fillLevel: 0.6, label: true });
    },
    visualCaption: "Your course companion — one bottle, one page, one idea at a time.",
    note: "Explain the philosophy: slides support the video, they never replace it. Encourage students to keep a physical notebook too.",
  });

  L.cardGrid(pres, {
    eyebrow: "By The End Of This Course",
    titleText: "What you will actually be able to do",
    tag: "00 · Introduction",
    cols: 3,
    cards: [
      { title: "Read a material", sub: "Identify family, longevity and role from a single scent strip.", color: C.gold },
      { title: "Dilute with precision", sub: "Prepare accurate working dilutions for any raw material.", color: C.rust },
      { title: "Build an accord", sub: "Construct a recognisable smell from individual materials.", color: C.olive },
      { title: "Construct a formula", sub: "Turn an idea into a structured, balanced composition.", color: C.berry },
      { title: "Evaluate rigorously", sub: "Judge a formula on scent strip over 48 hours, not by instinct alone.", color: C.plum },
      { title: "Launch responsibly", sub: "Navigate IFRA, SDS, compounding and the first steps of a brand.", color: C.goldDk },
    ],
    note: "Frame these as outcomes, not topics — this is what changes for the student, not just what they'll hear about.",
  });

  L.roadmapSlide(pres, {
    eyebrow: "The Full Course",
    titleText: "Your roadmap through 13 modules",
    modules: [
      { num: "00", title: "Introduction" },
      { num: "01", title: "Perfumery Basics" },
      { num: "02", title: "Equipment" },
      { num: "03.1", title: "Raw Materials — Naturals" },
      { num: "03.2", title: "Raw Materials — Synthetics" },
      { num: "03", title: "What To Order" },
      { num: "04", title: "How To Dilute" },
      { num: "05", title: "Training Your Nose" },
      { num: "06", title: "Building Accords" },
      { num: "07", title: "Formula Construction" },
      { num: "08", title: "Evaluating & Developing" },
      { num: "09", title: "Alcohol & Compounding" },
      { num: "10", title: "Maturation & Maceration" },
      { num: "11", title: "Compliance" },
      { num: "12", title: "Starting A Brand" },
    ],
    note: "Walk through the roadmap top to bottom. Give students a sense of pacing — this is a real curriculum, not a random collection of videos.",
  });

  L.splitSlide(pres, {
    eyebrow: "How The Course Works",
    titleText: "One Discord, one rhythm",
    tag: "00 · Introduction",
    rows: [
      { h: "Video + slide, every lesson", d: "Watch the video with this deck open — the slide tells you where you are, the video does the teaching." },
      { h: "Practice alongside every module", d: "Physically smell and log the materials each module covers, at your own pace — this is where the learning actually happens." },
      { h: "Community threads", d: "Post your evaluations, accords and formulas in Discord for feedback from the group." },
      { h: "Office hours", d: "Live Q&A sessions to troubleshoot formulas and answer anything the videos didn't cover." },
    ],
    drawVisual: (s, x, y, w, h) => {
      const cx = x + w / 2, cy = y + h * 0.42;
      T.ringFrame(s, cx, cy, w * 0.32, C.gold, { thickness: 0.03 });
      T.ringFrame(s, cx, cy, w * 0.22, C.olive, { thickness: 0.02 });
      T.filledCircle(s, cx, cy, w * 0.06, C.rust);
    },
    visualCaption: "A closed community built around one shared curriculum.",
    note: "Explain Discord mechanics concretely: channel names, threads, how office hours are scheduled.",
  });

  L.checklistSlide(pres, {
    eyebrow: "Your Community",
    titleText: "How the Discord is organised",
    tag: "00 · Introduction",
    groups: [
      { title: "Reference & Library", color: C.gold, items: [
        "Course & software page",
        "Formula page",
        "Accord library",
        "Course updates",
      ] },
      { title: "Discuss & Grow", color: C.olive, items: [
        "Raw material discussions",
        "Student questions",
        "Live classes & resources",
        "Office hours schedule",
      ] },
    ],
    note: "This is structured like a reference library with discussion channels attached, not an unstructured chatroom — walk through the actual channel list on screen if possible.",
  });

  L.cardGrid(pres, {
    eyebrow: "How To Learn Perfumery",
    titleText: "The mindset that actually works",
    tag: "00 · Introduction",
    cols: 3,
    cards: [
      { title: "Smell it yourself", sub: "No description replaces putting a strip under your nose. Reading about rose is not smelling rose.", color: C.berry },
      { title: "Experiment fearlessly", sub: "Cheap mistakes on a scent strip are how you learn. Perfect formulas don't come first — reps do.", color: C.gold },
      { title: "Keep records", sub: "An un-logged smell is a lost lesson. Write it down every single time.", color: C.olive },
      { title: "Revisit often", sub: "Materials change on your skin, on a strip, over hours. Smell things more than once.", color: C.rust },
      { title: "Think, don't copy", sub: "A formula you copy teaches you nothing. A formula you build teaches you everything.", color: C.plum },
      { title: "Be patient with your nose", sub: "Olfactory memory is trained like any other skill — daily, gradually, over months.", color: C.goldDk },
    ],
    note: "This is the philosophical core of the whole course — spend real time here. This is what separates hobbyists who plateau from ones who keep improving.",
  });

  L.heroSlide(pres, {
    eyebrow: "Non-Negotiable",
    titleText: "You cannot learn to smell from a screen",
    tag: "00 · Introduction",
    dark: true,
    drawVisual: (s, x, y, w, h) => {
      const n = 5;
      const gap = w / (n + 1);
      for (let i = 0; i < n; i++) {
        T.drawStrip(s, x + gap * (i + 1) - 0.09, y + h * 0.16, h * 0.62, L.heroFor("strip" + i));
      }
    },
    caption: "Every module pairs with physical scent strips. Order your materials before you start.",
    note: "Stress this hard — the single biggest predictor of student success is whether they actually smell the materials, not whether they watch closely.",
  });

  L.splitSlide(pres, {
    eyebrow: "Getting Organised",
    titleText: "The four systems every perfumer keeps",
    tag: "00 · Introduction",
    panelColor: C.ink2,
    rows: [
      { h: "Raw material library", d: "Every material logged with supplier, dilution, family and notes — your personal reference.", color: C.gold },
      { h: "Accord library", d: "Reusable building blocks — a rose accord, a woody base — you can drop into future formulas.", color: C.olive },
      { h: "Formula sheets", d: "Every version of every formula, with dates, percentages and change notes.", color: C.rust },
      { h: "Scent-strip evaluation log", d: "Dated, timestamped notes on how a material or formula evolves over 48 hours.", color: C.plum },
    ],
    drawVisual: (s, x, y, w, h) => {
      const cx = x + w / 2, cy = y + h / 2;
      T.drawMolecule(s, cx, cy, w * 0.24, C.stone, { nodeColor: C.gold, bondColor: C.stone });
    },
    visualCaption: "We'll show the exact software setup used throughout this course.",
    note: "Introduce the specific software/spreadsheet system you use. Show a live example if possible during the video.",
  });

  L.rememberSlide(pres, {
    tag: "End of Module 00",
    text: "We are not teaching you to copy formulas.\nWe are teaching you to think like a perfumer.",
    note: "Close the module on this note. Let it land — it's the thesis statement for the entire course.",
  });
};
