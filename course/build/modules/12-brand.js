const T = require("../theme");
const L = require("../layouts");
const { C } = T;

module.exports = function build(pres) {
  L.titleSlide(pres, {
    tag: "Module 12 · Starting A Brand",
    graphic: "bottle",
    eyebrow: "Presented by Yev + Kristan",
    titleText: "From Formula\nTo Brand",
    subtitle: "Everything you've learned, now aimed at building something the world can actually buy.",
    points: [
      "Bottles, labels and packaging that actually work",
      "Finding your lane and telling a real story",
      "Where fragrance brands actually sell",
    ],
    presenter: "Yev + Kristan",
    accent: C.gold,
    big: true,
    note: "This is the closing, exciting module — bring both presenters' energy together for the finale.",
  });

  L.cardGrid(pres, {
    eyebrow: "The Foundation",
    titleText: "The fragrance comes first",
    tag: "12 · Starting A Brand",
    cols: 3,
    cards: [
      { title: "Concept", sub: "The idea the fragrance is built around.", icon: "sparkle", color: T.FAM.floral.b },
      { title: "Formula", sub: "The composition itself, fully developed.", icon: "formula", color: T.FAM.woody.b },
      { title: "Testing", sub: "Real-world wear testing, not just strips.", icon: "strip", color: T.FAM.leather.b },
      { title: "Stability", sub: "Confirmed clarity and consistency over time.", icon: "co2", color: T.FAM.marine.b },
      { title: "Compliance", sub: "IFRA, SDS, allergens — all checked.", icon: "ifra", color: T.FAM.leather.ink },
      { title: "Production", sub: "Ready to compound and bottle at scale.", icon: "bottle", color: T.FAM.amber.b },
    ],
    note: "Everything above this line has been covered in modules 01–11 — this slide is a checkpoint before moving to brand-building.",
  });

  L.splitSlide(pres, {
    eyebrow: "The Vessel",
    titleText: "Choosing your bottle",
    tag: "12 · Starting A Brand",
    rows: [
      { h: "Stock vs. custom bottles", d: "Stock bottles are fast and cheap to start; custom moulds are expensive but build real brand identity." },
      { h: "Minimum order quantities", d: "Custom glass often requires large MOQs — budget and plan inventory accordingly." },
      { h: "Pumps, collars & caps", d: "These small components define the feel of a bottle as much as the glass itself." },
    ],
    drawVisual: (s, x, y, w, h) => { T.iconChip(s, x + w / 2, y + h * 0.46, w * 0.36, "bottle", { fam: "amber", color: C.gold }); },
    visualCaption: "The bottle is the first thing a customer touches — it earns real design attention.",
    note: "Encourage students to start with stock bottles for their first run — custom tooling is a later-stage investment.",
  });

  L.cardGrid(pres, {
    eyebrow: "What Goes On The Bottle",
    titleText: "Labels — more technical than they look",
    tag: "12 · Starting A Brand",
    cols: 5,
    cards: [
      { title: "Material", sub: "Paper, vinyl or foil — each behaves differently.", icon: "label", color: T.FAM.leather.b },
      { title: "Printing", sub: "Digital vs. letterpress vs. foil stamping.", icon: "sparkle", color: T.FAM.spicy.b },
      { title: "Adhesion", sub: "Must bond securely to glass long-term.", icon: "amber bottle", color: T.FAM.amber.b },
      { title: "Oil / alcohol resistance", sub: "Must survive spills without smearing or lifting.", icon: "co2", color: T.FAM.marine.b },
      { title: "Regulatory info", sub: "Ingredients, allergens, volume, batch code.", icon: "regulatory", color: T.FAM.woody.ink },
    ],
    note: "A beautiful label that dissolves the first time it touches spilled perfume is a real, common beginner mistake.",
  });

  L.cardGrid(pres, {
    eyebrow: "The Full Presentation",
    titleText: "Packaging tells the story too",
    tag: "12 · Starting A Brand",
    cols: 4,
    cards: [
      { title: "Boxes", sub: "Protection and unboxing experience.", icon: "packaging", color: T.FAM.woody.b },
      { title: "Labels", sub: "Information and brand identity.", icon: "label", color: T.FAM.leather.b },
      { title: "Bottle presentation", sub: "How it looks and feels in hand.", icon: "bottle", color: T.FAM.amber.b },
      { title: "Samples", sub: "Low-cost trial for new customers.", icon: "sample vial", color: T.FAM.amber.ink },
    ],
    note: "Packaging is often the deciding factor in a first impression, before a customer has smelled anything at all.",
  });

  L.splitSlide(pres, {
    eyebrow: "Beyond The Logo",
    titleText: "A brand is not just a logo",
    tag: "12 · Starting A Brand",
    rows: [
      { h: "Story", d: "Why this fragrance, why now, why you." },
      { h: "Identity", d: "A consistent point of view across everything you make." },
      { h: "Customer", d: "A specific person you're speaking to, not \"everyone.\"" },
      { h: "Visual language, positioning & tone", d: "How it looks, where it sits in the market, and how it talks to people." },
    ],
    drawVisual: (s, x, y, w, h) => {
      const cx = x + w / 2, cy = y + h * 0.42;
      T.ringFrame(s, cx, cy, w * 0.26, C.gold, { thickness: 0.03 });
      T.ringFrame(s, cx, cy, w * 0.17, C.olive, { thickness: 0.02 });
    },
    visualCaption: "A logo is one layer. A brand is every layer together.",
    note: "This slide sets up the positioning and storytelling slides that follow — it's the conceptual heart of the module.",
  });

  L.cardGrid(pres, {
    eyebrow: "Find Your Lane",
    titleText: "Market positioning — pick a lane",
    tag: "12 · Starting A Brand",
    cols: 4,
    cards: [
      { title: "Luxury", sub: "Premium pricing, premium everything.", icon: "sparkle", color: T.FAM.amber.b },
      { title: "Niche", sub: "Distinctive, less mainstream, expressive.", icon: "jasmine", color: T.FAM.floral.b },
      { title: "Affordable niche", sub: "Niche character, accessible pricing.", icon: "violet", color: T.FAM.floral.a },
      { title: "Mass market", sub: "Broad appeal, widest distribution.", icon: "bottle", color: T.FAM.marine.b },
      { title: "Experimental", sub: "Boundary-pushing, art-forward.", icon: "molecule", color: T.FAM.woody.b },
      { title: "Middle Eastern inspired", sub: "Rich, oud- and amber-forward.", icon: "labdanum", color: T.FAM.amber.ink },
      { title: "Minimalist", sub: "Clean, restrained, understated.", icon: "musk", color: T.FAM.musk.ink },
      { title: "Natural-focused", sub: "Naturals-led, ingredient transparency.", icon: "grass", color: T.FAM.green.b },
    ],
    note: "There's no wrong lane — the mistake is trying to occupy several at once. Encourage students to commit to one.",
  });

  L.cardGrid(pres, {
    eyebrow: "Reaching Customers",
    titleText: "Where perfume brands actually sell",
    tag: "12 · Starting A Brand",
    cols: 4,
    cards: [
      { title: "Own website", sub: "Full control, full margin.", icon: "website", color: T.FAM.marine.b },
      { title: "TikTok", sub: "Discovery and storytelling at scale.", icon: "social", color: T.FAM.floral.b },
      { title: "Instagram", sub: "Visual brand-building and community.", icon: "social", color: T.FAM.floral.a },
      { title: "Pop-ups", sub: "Real-world sampling and connection.", icon: "sample vial", color: T.FAM.amber.b },
      { title: "Markets", sub: "Low-cost, direct customer feedback.", icon: "story", color: T.FAM.gourmand.b },
      { title: "Retail", sub: "Third-party shelf presence.", icon: "retail", color: T.FAM.amber.ink },
      { title: "Wholesale", sub: "Volume through other retailers.", icon: "packaging", color: T.FAM.woody.b },
      { title: "Influencers & sampling", sub: "Trusted voices driving discovery.", icon: "influencer", color: T.FAM.fruity.b },
    ],
    note: "Most successful independent brands start with 2–3 of these channels, not all nine at once.",
  });

  L.splitSlide(pres, {
    eyebrow: "What Actually Sells",
    titleText: "Sell the story, not the note list",
    tag: "12 · Starting A Brand",
    rows: [
      { h: "Emotion", d: "How does it make someone feel, not just what's inside it." },
      { h: "World-building", d: "A whole aesthetic universe around the fragrance." },
      { h: "Identity", d: "Who does this make the wearer feel like?" },
      { h: "Experience", d: "The unboxing, the sampling, the ritual — not just the liquid." },
    ],
    drawVisual: (s, x, y, w, h) => { T.drawFlower(s, x + w / 2, y + h * 0.42, w * 0.24, C.berry); },
    visualCaption: "\"Rose, amber, musk\" is a list. A story is what makes someone actually buy.",
    note: "Contrast a note list against a genuine brand story live — the difference is usually obvious once pointed out.",
  });

  const journey = pres.addSlide();
  T.bg(journey, C.ink);
  journey.addText("THE FINAL ROADMAP", {
    x: T.MARGIN, y: 0.5, w: 8, h: 0.35, fontFace: T.FONT_BODY, fontSize: 12.5, bold: true,
    color: C.gold, charSpacing: 3, isTextBox: true, margin: 0,
  });
  journey.addText("Idea to growth", {
    x: T.MARGIN, y: 0.9, w: 9.5, h: 0.7, fontFace: T.FONT_HEAD, fontSize: 30, bold: true,
    color: C.paper, isTextBox: true, margin: 0,
  });
  {
    const steps = ["IDEA", "FORMULA", "TESTING", "COMPLIANCE", "BRAND", "PACKAGING", "CONTENT", "SALES", "GROWTH"];
    const y = 4.0, x0 = T.MARGIN + 0.2, x1 = T.PAGE_W - T.MARGIN - 0.2;
    journey.addShape("line", { x: x0, y, w: x1 - x0, h: 0.001, line: { color: C.smoke, width: 2 } });
    steps.forEach((label, i) => {
      const cx = x0 + (x1 - x0) * (i / (steps.length - 1));
      const col = L.heroFor(label + i);
      T.filledCircle(journey, cx, y, 0.08, col);
      T.ringFrame(journey, cx, y, 0.16, col, { thickness: 0.014 });
      const up = i % 2 === 0;
      journey.addText(label, {
        x: cx - 0.65, y: up ? y - 0.55 : y + 0.22, w: 1.3, h: 0.32, align: "center",
        fontFace: T.FONT_BODY, fontSize: 11, bold: true, color: C.paper, isTextBox: true, margin: 0,
      });
    });
    journey.addText("Every module in this course lives somewhere on this line. Now go build.", {
      x: T.MARGIN, y: T.PAGE_H - 1.0, w: T.PAGE_W - T.MARGIN * 2, h: 0.5, align: "center",
      fontFace: T.FONT_BODY, fontSize: 13, italic: true, color: C.stone, isTextBox: true, margin: 0,
    });
    T.note(journey, "Close the entire course on this slide — it's a map of everything taught across all thirteen modules, end to end.");
    L.motifCorner(journey, { color: C.gold });
    T.pageNum(journey, L.nextPage(), { color: C.taupe });
    T.brandFooter(journey);
  }

  L.rememberSlide(pres, {
    tag: `${T.BRAND_NAME} · End of Course`,
    text: "A great perfume deserves a story\nworth remembering. Build both\nwith the same care.",
    note: "The final slide of the entire course — let this close with warmth. Thank the community and point them back to Discord for their next step.",
  });
};
