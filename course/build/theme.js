// ============================================================
// LA PARFUM SIMPLIFIE — visual design system
// ============================================================
const PptxGenJS = require("pptxgenjs");

// ---------- palette ----------
const C = {
  ink: "0E0D0B",        // near-black background
  ink2: "17150F",       // secondary dark panel
  paper: "FAF6EC",      // warm white / cream-white background
  cream: "EFE6D2",      // cream panel
  stone: "CFC5AE",      // muted stone
  taupe: "8C8272",      // muted taupe (secondary text on light)
  taupeDk: "5C5646",    // darker taupe (body text on light)
  line: "D8CFB9",       // hairline on light
  lineDk: "35322A",     // hairline on dark
  gold: "C9A354",       // amber / raw material gold
  goldDk: "9C7A34",
  rust: "B5652D",       // resin / amber liquid
  olive: "6E7A50",      // green / herbal
  berry: "8C3B49",      // floral / fruity
  plum: "5B3A52",       // dusky floral
  sand: "D9C9A3",
  smoke: "3B382F",
  white: "FFFFFF",
  black: "0E0D0B",
};

// Family-linked accent palettes — softened, illustrated-storybook saturation
// (not neon), used by the circular icon system and mood boards.
const FAM = {
  citrus:   { a: "F2C348", b: "9EC24C", ink: "8A6A1E", bg: "FBF0CE" },
  floral:   { a: "EFB0C8", b: "C79BD9", ink: "8A4A66", bg: "FAECF2" },
  green:    { a: "8FBF6B", b: "5C8A45", ink: "3E5C2E", bg: "EBF3E1" },
  woody:    { a: "BE9A66", b: "8A6339", ink: "5C4326", bg: "F1E7D6" },
  amber:    { a: "E7AC55", b: "C1752F", ink: "7A4A1E", bg: "FBEBD4" },
  marine:   { a: "8AC6E0", b: "4090AF", ink: "2A5266", bg: "E4F3F8" },
  gourmand: { a: "D9A05B", b: "8A5A2E", ink: "5C3A1E", bg: "F3E4CC" },
  musk:     { a: "E8E2DC", b: "AFA495", ink: "6B6255", bg: "F0EBE3" },
  fruity:   { a: "EC8F72", b: "C9503E", ink: "8A2E22", bg: "FBE4DB" },
  leather:  { a: "AD8862", b: "5C4230", ink: "3A281C", bg: "EFE2D0" },
  spicy:    { a: "E07A46", b: "A6402A", ink: "6B2A1A", bg: "F9DFCF" },
  aromatic: { a: "9BAE84", b: "63754A", ink: "3E4C2E", bg: "EBF0E2" },
};

const FONT_HEAD = "Cambria";      // safe-list serif, premium educational feel
const FONT_BODY = "Calibri";      // safe-list sans

const PAGE_W = 13.333;
const PAGE_H = 7.5;
const MARGIN = 0.6;

function newDeck() {
  const p = new PptxGenJS();
  p.defineLayout({ name: "YEV169", width: PAGE_W, height: PAGE_H });
  p.layout = "YEV169";
  return p;
}

// ---------- low-level chrome ----------
function bg(slide, color) {
  slide.background = { color };
}

function kicker(slide, text, opts = {}) {
  slide.addText(text.toUpperCase(), {
    x: opts.x ?? MARGIN, y: opts.y ?? 0.42, w: opts.w ?? 8, h: 0.35,
    fontFace: FONT_BODY, fontSize: 12, bold: true, color: opts.color ?? C.gold,
    charSpacing: 3, align: "left", isTextBox: true, margin: 0,
  });
}

function pageNum(slide, n, opts = {}) {
  slide.addText(String(n).padStart(2, "0"), {
    x: PAGE_W - 0.9, y: PAGE_H - 0.5, w: 0.6, h: 0.3,
    fontFace: FONT_BODY, fontSize: 10, color: opts.color ?? C.taupe,
    align: "right", isTextBox: true, margin: 0,
  });
}

const BRAND_NAME = "LA PARFUM SIMPLIFIE";

// Small, quiet wordmark — sits immediately left of the page number, bottom-right,
// the one corner already proven clear of content across the whole deck.
// Deliberately subtle: this is a footer, not a logo.
function brandFooter(slide, opts = {}) {
  slide.addText(BRAND_NAME, {
    x: PAGE_W - 4.7, y: PAGE_H - 0.5, w: 3.6, h: 0.3,
    fontFace: FONT_BODY, fontSize: 8.5, bold: true, color: opts.color ?? C.taupe,
    charSpacing: 2.2, align: "right", isTextBox: true, margin: 0,
  });
}

function moduleTag(slide, text, opts = {}) {
  slide.addText(text.toUpperCase(), {
    x: PAGE_W - 3.6, y: opts.y ?? 0.42, w: 3.0, h: 0.35,
    fontFace: FONT_BODY, fontSize: 10.5, bold: true, color: opts.color ?? C.taupe,
    charSpacing: 2, align: "right", isTextBox: true, margin: 0,
  });
}

function title(slide, text, opts = {}) {
  slide.addText(text, {
    x: opts.x ?? MARGIN, y: opts.y ?? 0.72, w: opts.w ?? 8.6, h: opts.h ?? 1.0,
    fontFace: FONT_HEAD, fontSize: opts.size ?? 34, bold: true,
    color: opts.color ?? C.ink, align: "left", isTextBox: true, margin: 0,
    lineSpacingMultiple: 1.02,
  });
}

function note(slide, text) {
  slide.addNotes(text);
}

// ---------- motif: droplet / cap ring frame ----------
// A recurring circular ring frame used everywhere in place of photography —
// the deck's consistent motif (a stylised bottle-cap / scent-drop view).
function ringFrame(slide, cx, cy, r, color, opts = {}) {
  const thickness = opts.thickness ?? 0.05;
  slide.addShape("ellipse", {
    x: cx - r, y: cy - r, w: r * 2, h: r * 2,
    fill: { type: "none" },
    line: { color, width: thickness * 72, ...(opts.transparency != null ? { transparency: opts.transparency } : {}) },
    ...(opts.objectName ? { objectName: opts.objectName } : {}),
  });
  if (opts.dot) {
    const dr = r * 0.06;
    slide.addShape("ellipse", {
      x: cx - dr, y: cy - r - dr * 0.2, w: dr * 2, h: dr * 2,
      fill: { color: opts.dotColor ?? color }, line: { type: "none" },
    });
  }
}

function filledCircle(slide, cx, cy, r, color, opts = {}) {
  slide.addShape("ellipse", {
    x: cx - r, y: cy - r, w: r * 2, h: r * 2,
    fill: { color, transparency: opts.transparency ?? 0 },
    line: opts.line ?? { type: "none" },
    ...(opts.objectName ? { objectName: opts.objectName } : {}),
  });
}

// A large, soft, off-corner wash — a quiet backdrop, not a decorative accent.
// Sits behind everything, mostly bleeds off the slide edge, never touches text.
function cornerWash(slide, opts = {}) {
  const corner = opts.corner ?? "br";
  const size = opts.size ?? 6.4;
  const color = opts.color ?? C.stone;
  const cx = corner.includes("r") ? PAGE_W + size * 0.32 : -size * 0.32;
  const cy = corner.includes("b") ? PAGE_H + size * 0.32 : -size * 0.32;
  filledCircle(slide, cx, cy, size, color, { transparency: opts.transparency ?? 88 });
  filledCircle(slide, cx, cy, size * 0.62, color, { transparency: (opts.transparency ?? 88) - 6 });
}

// A small rounded pill label — used to flag a card or slide as
// NATURAL / SYNTHETIC / BASE / ACCORD at a glance, consistently across
// the accords & bases module.
function badge(slide, x, y, text, opts = {}) {
  const color = opts.color ?? C.gold;
  const w = opts.w ?? Math.max(0.62, text.length * 0.072 + 0.3);
  const h = opts.h ?? 0.26;
  slide.addShape("roundRect", {
    x, y, w, h, rectRadius: h / 2,
    fill: { color, transparency: opts.fillTransparency ?? 88 },
    line: { color, width: 1 },
    ...(opts.objectName ? { objectName: opts.objectName } : {}),
  });
  slide.addText(text.toUpperCase(), {
    x, y, w, h, align: "center", valign: "middle",
    fontFace: FONT_BODY, fontSize: 8.5, bold: true, color,
    charSpacing: 1.2, isTextBox: true, margin: 0,
  });
}

// ---------- illustrative "hero" graphics (vector, not photographic) ----------

// Perfume bottle silhouette — rounded body + neck + cap, built from shapes.
function drawBottle(slide, x, y, w, h, opts = {}) {
  const liquid = opts.liquid ?? C.gold;
  const glass = opts.glass ?? C.stone;
  const capColor = opts.cap ?? C.ink;
  const neckW = w * 0.28;
  const neckH = h * 0.16;
  const capH = h * 0.1;
  // cap
  slide.addShape("roundRect", {
    x: x + (w - neckW * 1.15) / 2, y, w: neckW * 1.15, h: capH,
    rectRadius: 0.04, fill: { color: capColor }, line: { type: "none" },
  });
  // neck
  slide.addShape("rect", {
    x: x + (w - neckW) / 2, y: y + capH, w: neckW, h: neckH,
    fill: { color: glass, transparency: 25 }, line: { color: glass, width: 1 },
  });
  // body
  const bodyY = y + capH + neckH;
  const bodyH = h - capH - neckH;
  slide.addShape("roundRect", {
    x, y: bodyY, w, h: bodyH,
    rectRadius: 0.12, fill: { color: glass, transparency: 55 },
    line: { color: glass, width: 1.25 },
  });
  // liquid fill (lower portion)
  const liqH = bodyH * (opts.fillLevel ?? 0.55);
  slide.addShape("roundRect", {
    x: x + 0.04, y: bodyY + bodyH - liqH, w: w - 0.08, h: liqH - 0.04,
    rectRadius: 0.1, fill: { color: liquid, transparency: 10 }, line: { type: "none" },
  });
  if (opts.label) {
    slide.addShape("roundRect", {
      x: x + w * 0.14, y: bodyY + bodyH * 0.34, w: w * 0.72, h: bodyH * 0.26,
      rectRadius: 0.03, fill: { color: C.paper, transparency: 8 }, line: { color: glass, width: 0.75 },
    });
  }
}

// Radial flower — petals genuinely arranged around (cx, cy). pptxgenjs rotates
// a shape about its OWN center, so each petal's center must be pre-placed by
// rotating its resting offset around (cx, cy) before the shape's own spin is applied.
function drawFlower(slide, cx, cy, r, color, opts = {}) {
  // shape presets: "round" (rose/peony), "star" (jasmine/hedione — narrow, pointed),
  // "small" (violet — many tiny delicate petals)
  const shape = opts.shape ?? "round";
  const presets = {
    round: { petals: 5, lenR: 1.05, wR: 0.5, distR: 0.46, kind: "ellipse" },
    star: { petals: 6, lenR: 1.0, wR: 0.28, distR: 0.5, kind: "teardrop" },
    small: { petals: 8, lenR: 0.72, wR: 0.3, distR: 0.42, kind: "ellipse" },
  };
  const p = presets[shape] ?? presets.round;
  const petals = opts.petals ?? p.petals;
  const petalLen = r * p.lenR;
  const petalW = r * p.wR;
  const dist = petalLen * p.distR;
  for (let i = 0; i < petals; i++) {
    const angle = (360 / petals) * i + (opts.rotationOffset ?? 0);
    const rad = (angle * Math.PI) / 180;
    const dx = dist * Math.sin(rad);
    const dy = -dist * Math.cos(rad);
    slide.addShape(p.kind, {
      x: cx + dx - petalW / 2, y: cy + dy - petalLen / 2, w: petalW, h: petalLen,
      fill: { color, transparency: opts.transparency ?? 6 },
      line: { type: "none" },
      rotate: (angle + (p.kind === "teardrop" ? 180 : 0)) % 360,
    });
  }
  filledCircle(slide, cx, cy, r * (shape === "small" ? 0.16 : 0.24), opts.center ?? C.gold);
}

// Citrus cross-section: outer ring + segmented wedges
function drawCitrus(slide, cx, cy, r, color, opts = {}) {
  filledCircle(slide, cx, cy, r, opts.rind ?? color, { transparency: 8 });
  filledCircle(slide, cx, cy, r * 0.86, opts.pith ?? C.paper, { transparency: 0 });
  const seg = opts.segments ?? 8;
  for (let i = 0; i < seg; i++) {
    const a = (360 / seg) * i;
    slide.addShape("ellipse", {
      x: cx - r * 0.05, y: cy - r * 0.8, w: r * 0.1, h: r * 0.78,
      fill: { color, transparency: 18 }, line: { type: "none" }, rotate: a,
    });
  }
  filledCircle(slide, cx, cy, r * 0.1, C.paper);
}

// Molecule diagram — nodes and bonds, on a soft halo so it reads as one
// deliberate object rather than loose dots scattered on bare background.
function drawMolecule(slide, cx, cy, scale, color, opts = {}) {
  const nodes = opts.nodes ?? [
    [0, 0], [0.9, -0.4], [1.8, 0.1], [0.9, 0.9], [-0.6, 0.9], [-1.1, -0.5],
  ];
  const bonds = opts.bonds ?? [[0,1],[1,2],[2,3],[3,4],[4,0],[0,5]];
  if (!opts.noHalo) {
    filledCircle(slide, cx, cy, scale * 1.9, opts.haloColor ?? color, { transparency: opts.haloTransparency ?? 90 });
  }
  bonds.forEach(([a, b]) => {
    const [x1, y1] = nodes[a]; const [x2, y2] = nodes[b];
    const px1 = cx + x1 * scale, py1 = cy + y1 * scale;
    const px2 = cx + x2 * scale, py2 = cy + y2 * scale;
    const goesDownRight = (px1 <= px2 && py1 <= py2) || (px1 >= px2 && py1 >= py2);
    slide.addShape("line", {
      x: Math.min(px1, px2), y: Math.min(py1, py2),
      w: Math.abs(px2 - px1) || 0.01, h: Math.abs(py2 - py1) || 0.01,
      line: { color: opts.bondColor ?? color, width: 2 },
      flipV: !goesDownRight,
    });
  });
  nodes.forEach(([nx, ny], i) => {
    const r = i === 0 ? scale * 0.16 : scale * 0.115;
    const nc = cx + nx * scale, ny2 = cy + ny * scale;
    filledCircle(slide, nc, ny2, r, opts.nodeColor ?? color, {
      line: { color: opts.ringColor ?? C.paper, width: 1.5 },
    });
  });
}

// Pipette illustration
function drawPipette(slide, x, y, h, color) {
  const bulbR = h * 0.11;
  slide.addShape("ellipse", {
    x: x - bulbR, y, w: bulbR * 2, h: bulbR * 2.1,
    fill: { color, transparency: 15 }, line: { color, width: 1 },
  });
  slide.addShape("line", {
    x: x - 0.012, y: y + bulbR * 2, w: 0.001, h: h * 0.62,
    line: { color, width: 2.25 },
  });
  slide.addShape("triangle", {
    x: x - h * 0.03, y: y + bulbR * 2 + h * 0.62, w: h * 0.06, h: h * 0.16,
    fill: { color, transparency: 20 }, line: { type: "none" }, rotate: 180,
  });
}

// Lab flask
function drawFlask(slide, x, y, w, h, liquidColor, opts = {}) {
  const neckW = w * 0.22;
  slide.addShape("rect", {
    x: x + (w - neckW) / 2, y, w: neckW, h: h * 0.28,
    fill: { color: C.stone, transparency: 45 }, line: { color: C.stone, width: 1 },
  });
  slide.addShape("triangle", {
    x, y: y + h * 0.2, w, h: h * 0.8,
    fill: { color: C.stone, transparency: 55 }, line: { color: C.stone, width: 1.25 },
  });
  slide.addShape("triangle", {
    x: x + w * 0.16, y: y + h * 0.52, w: w * 0.68, h: h * 0.46,
    fill: { color: liquidColor, transparency: 10 }, line: { type: "none" },
  });
}

// Scale / balance
function drawScale(slide, x, y, w, h, color) {
  slide.addShape("roundRect", { x, y: y + h * 0.7, w, h: h * 0.3, rectRadius: 0.06,
    fill: { color, transparency: 20 }, line: { color, width: 1 } });
  slide.addShape("roundRect", { x: x + w * 0.28, y: y + h * 0.15, w: w * 0.44, h: h * 0.58,
    rectRadius: 0.03, fill: { color: C.paper }, line: { color, width: 1 } });
  slide.addShape("line", { x: x + w * 0.5 - 0.005, y, w: 0.001, h: h * 0.16, line: { color, width: 2 } });
}

// Wood grain texture block
function drawWood(slide, x, y, w, h, color) {
  slide.addShape("rect", { x, y, w, h, fill: { color, transparency: 30 }, line: { type: "none" } });
  const lines = 6;
  for (let i = 0; i < lines; i++) {
    const yy = y + (h / (lines + 1)) * (i + 1) + (i % 2 === 0 ? 0.03 : -0.03);
    slide.addShape("line", { x, y: yy, w, h: 0.001, line: { color: C.ink, width: 0.75, transparency: 60 } });
  }
}

// A single liquid drop — perfume, resin, dew. Uses the native "teardrop" preset.
function drawDrop(slide, cx, cy, r, color, opts = {}) {
  slide.addShape("teardrop", {
    x: cx - r, y: cy - r, w: r * 2, h: r * 2,
    fill: { color, transparency: opts.transparency ?? 8 },
    line: opts.line ?? { type: "none" },
    rotate: opts.rotate ?? 135,
    ...(opts.objectName ? { objectName: opts.objectName } : {}),
  });
}

// ---------- cartoony circular material-icon system ----------

// Fan of simple leaf blades from a base point — grass, greens, patchouli-adjacent.
function drawLeafCluster(slide, cx, cy, r, color, opts = {}) {
  const n = opts.count ?? 5;
  const spread = opts.spread ?? 150;
  const len = r * 1.05, w = r * 0.34;
  for (let i = 0; i < n; i++) {
    const angle = -spread / 2 + (spread / (n - 1)) * i;
    const rad = (angle * Math.PI) / 180;
    const dist = len * 0.5;
    const dx = dist * Math.sin(rad), dy = dist * Math.cos(rad);
    slide.addShape("teardrop", {
      x: cx + dx - w / 2, y: cy + dy - len / 2, w, h: len,
      fill: { color, transparency: opts.transparency ?? 8 }, line: { type: "none" },
      rotate: (180 - angle) % 360,
    });
  }
}

// One big single leaf — patchouli.
function drawBigLeaf(slide, cx, cy, r, color, opts = {}) {
  slide.addShape("teardrop", {
    x: cx - r * 0.62, y: cy - r * 0.9, w: r * 1.24, h: r * 1.8,
    fill: { color, transparency: opts.transparency ?? 6 }, line: { type: "none" }, rotate: 315,
  });
  slide.addShape("line", { x: cx - 0.006, y: cy - r * 0.6, w: 0.001, h: r * 1.1,
    line: { color: opts.veinColor ?? C.paper, width: 1.25, transparency: 35 } });
}

// Concentric growth rings — wood cross-section (cedarwood, sandalwood).
function drawWoodRing(slide, cx, cy, r, color, opts = {}) {
  const rings = opts.rings ?? 3;
  for (let i = rings; i >= 1; i--) {
    const rr = (r * i) / rings;
    slide.addShape("donut", {
      x: cx - rr, y: cy - rr, w: rr * 2, h: rr * 2,
      fill: { color: i % 2 === 0 ? (opts.alt ?? C.paper) : color, transparency: i % 2 === 0 ? 0 : 10 },
      line: { type: "none" },
    });
  }
  filledCircle(slide, cx, cy, r * 0.12, opts.core ?? color);
}

// Thin root strands fanning downward — vetiver.
function drawRoot(slide, cx, cy, r, color, opts = {}) {
  const topY = cy - r * 0.72;
  filledCircle(slide, cx, topY, r * 0.22, color, { transparency: 4 });
  const n = opts.count ?? 7;
  for (let i = 0; i < n; i++) {
    const angle = -34 + (68 / (n - 1)) * i;
    const rad = (angle * Math.PI) / 180;
    const len = r * (1.35 + 0.12 * (i % 2));
    const x2 = cx + len * Math.sin(rad), y2 = topY + len * Math.cos(rad);
    slide.addShape("line", {
      x: Math.min(cx, x2), y: Math.min(topY, y2),
      w: Math.abs(x2 - cx) || 0.01, h: Math.abs(y2 - topY) || 0.01,
      line: { color, width: 1.75, transparency: 10 },
      flipV: x2 < cx,
    });
  }
}

// Overlapping resin/amber droplets — labdanum, amber, ambroxan.
function drawResinCluster(slide, cx, cy, r, color, opts = {}) {
  const spots = [[0.08, 0.12, 0.58, 150], [-0.4, -0.22, 0.36, 100], [0.36, -0.4, 0.3, 190]];
  spots.forEach(([dx, dy, rr, rot], i) => {
    drawDrop(slide, cx + dx * r, cy + dy * r, rr * r, opts.tones ? opts.tones[i % opts.tones.length] : color, {
      transparency: 6, rotate: rot,
    });
  });
}

// A long, gently curved vanilla pod with a seam line and tiny visible seeds.
function drawPod(slide, cx, cy, r, color, opts = {}) {
  slide.addShape("roundRect", {
    x: cx - r * 0.24, y: cy - r * 0.95, w: r * 0.48, h: r * 1.9,
    rectRadius: r * 0.24, fill: { color, transparency: opts.transparency ?? 6 }, line: { type: "none" },
    rotate: 14,
  });
  slide.addShape("line", { x: cx - 0.006, y: cy - r * 0.72, w: 0.001, h: r * 1.44,
    line: { color: opts.seamColor ?? C.paper, width: 1.25, transparency: 35 }, rotate: 14 });
  const seeds = opts.seeds ?? 6;
  for (let i = 0; i < seeds; i++) {
    const t = i / (seeds - 1);
    filledCircle(slide, cx - r * 0.18 + r * 0.36 * t, cy - r * 0.62 + r * 1.24 * t, r * 0.045, opts.seedColor ?? C.ink);
  }
}

// Soft concentric swirl — caramel, chocolate, coffee.
function drawSwirl(slide, cx, cy, r, color, opts = {}) {
  filledCircle(slide, cx, cy, r, opts.outer ?? color, { transparency: 4 });
  slide.addShape("donut", { x: cx - r * 0.72, y: cy - r * 0.72, w: r * 1.44, h: r * 1.44,
    fill: { color: opts.mid ?? C.paper, transparency: 55 }, line: { type: "none" } });
  filledCircle(slide, cx, cy, r * 0.32, opts.mid ?? color, { transparency: 10 });
  if (opts.steam) {
    for (let i = -1; i <= 1; i++) {
      slide.addShape("line", { x: cx + i * r * 0.28 - 0.006, y: cy - r * 1.25, w: 0.001, h: r * 0.45,
        line: { color: opts.steamColor ?? C.stone, width: 1.25, transparency: 30 } });
    }
  }
}

// Gentle horizontal water — marine, aquatic, calone.
function drawWave(slide, cx, cy, r, color, opts = {}) {
  filledCircle(slide, cx, cy, r, opts.water ?? color, { transparency: 62 });
  const rows = [0.15, -0.1, -0.38];
  rows.forEach((dy, i) => {
    slide.addShape("wave", {
      x: cx - r * 0.78, y: cy + dy * r - r * 0.16, w: r * 1.56, h: r * 0.3,
      fill: { color, transparency: 18 + i * 12 }, line: { type: "none" },
    });
  });
}

// Thin curling wisps — smoke, leather-adjacent birch tar.
function drawWisp(slide, cx, cy, r, color, opts = {}) {
  const n = 3;
  for (let i = 0; i < n; i++) {
    const dx = (i - 1) * r * 0.42;
    slide.addShape("wave", {
      x: cx + dx - r * 0.22, y: cy - r * 0.7 + i * r * 0.15, w: r * 0.44, h: r * 1.3,
      fill: { color, transparency: 22 + i * 12 }, line: { type: "none" }, rotate: 90,
    });
  }
}

// A clean puff cloud — musk, "soft white radiant" materials.
function drawCloud(slide, cx, cy, r, color, opts = {}) {
  slide.addShape("cloud", {
    x: cx - r * 0.92, y: cy - r * 0.62, w: r * 1.84, h: r * 1.24,
    fill: { color: opts.fill ?? color, transparency: opts.transparency ?? 3 },
    line: { color: opts.line ?? C.taupe, width: 1.5 },
  });
}

// Round fruit with a stem + tiny leaf — apple, fruity materials.
function drawFruit(slide, cx, cy, r, color, opts = {}) {
  filledCircle(slide, cx, cy + r * 0.08, r * 0.82, color, { transparency: 4 });
  slide.addShape("line", { x: cx - 0.006, y: cy - r * 0.78, w: 0.001, h: r * 0.28,
    line: { color: opts.stem ?? C.smoke, width: 2 } });
  slide.addShape("teardrop", { x: cx + 0.02, y: cy - r * 0.86, w: r * 0.38, h: r * 0.26,
    fill: { color: opts.leaf ?? FAM.green.b, transparency: 6 }, line: { type: "none" }, rotate: 200 });
}

// Fine crosshatch stitching — leather.
function drawLeatherTexture(slide, cx, cy, r, color, opts = {}) {
  filledCircle(slide, cx, cy, r, color, { transparency: 4 });
  const n = 4;
  for (let i = 0; i < n; i++) {
    const yy = cy - r * 0.5 + (r / (n - 1)) * i;
    const half = Math.sqrt(Math.max(r * r - (yy - cy) * (yy - cy), 0)) * 0.86;
    slide.addShape("line", { x: cx - half, y: yy, w: half * 2, h: 0.001,
      line: { color: opts.stitch ?? C.paper, width: 1, transparency: 45, dashType: "dash" } });
  }
}

// Small sparkle accent — radiance / diffusion, tucked beside a superpower material.
function drawSparkle(slide, cx, cy, r, color, opts = {}) {
  slide.addShape("star5", {
    x: cx - r, y: cy - r, w: r * 2, h: r * 2,
    fill: { color, transparency: opts.transparency ?? 10 }, line: { type: "none" },
  });
}

// The core visual unit of the redesign: a soft family-tinted circular "chip"
// with a small illustration inside — the deck's circular ingredient-card look.
const MATERIAL_ICONS = {
  bergamot:   { kind: "citrus", fam: "citrus", segTone: FAM.citrus.b },
  lemon:      { kind: "citrus", fam: "citrus" },
  lime:       { kind: "citrus", fam: "green", segTone: FAM.green.a },
  grapefruit: { kind: "citrus", fam: "fruity", segTone: FAM.fruity.a },
  mandarin:   { kind: "citrus", fam: "citrus" },
  "dihydromyrcenol": { kind: "citrus", fam: "green" },

  rose:            { kind: "flower", fam: "floral", shape: "round" },
  jasmine:         { kind: "flower", fam: "floral", shape: "star" },
  hedione:         { kind: "flower", fam: "floral", shape: "star" },
  violet:          { kind: "flower", fam: "floral", shape: "small" },
  "orange blossom":{ kind: "flower", fam: "floral", shape: "round", center: C.paper },
  linalool:        { kind: "flower", fam: "floral", shape: "small" },
  "linalyl acetate": { kind: "flower", fam: "floral", shape: "small" },
  muguet:          { kind: "flower", fam: "floral", shape: "small" },

  cedarwood:  { kind: "woodRing", fam: "woody" },
  sandalwood: { kind: "woodRing", fam: "woody", rings: 2 },
  cashmeran:  { kind: "woodRing", fam: "woody", rings: 4 },
  "iso e super": { kind: "woodRing", fam: "woody", rings: 5 },
  vetiver:    { kind: "root", fam: "woody" },
  patchouli:  { kind: "bigLeaf", fam: "woody" },

  vanilla:    { kind: "pod", fam: "gourmand" },
  vanillin:   { kind: "pod", fam: "gourmand" },
  caramel:    { kind: "swirl", fam: "gourmand" },
  chocolate:  { kind: "swirl", fam: "gourmand", dark: true },
  coffee:     { kind: "swirl", fam: "gourmand", dark: true, steam: true },
  "ethyl maltol": { kind: "swirl", fam: "gourmand" },
  coumarin:   { kind: "swirl", fam: "gourmand" },
  maltol:     { kind: "swirl", fam: "gourmand" },

  labdanum:   { kind: "resinCluster", fam: "amber" },
  amber:      { kind: "resinCluster", fam: "amber" },
  ambroxan:   { kind: "resinCluster", fam: "amber" },
  ambrofix:   { kind: "resinCluster", fam: "amber" },

  leather:    { kind: "leatherTexture", fam: "leather" },

  musk:            { kind: "cloud", fam: "musk" },
  galaxolide:      { kind: "cloud", fam: "musk" },
  habanolide:      { kind: "cloud", fam: "musk" },
  ambrettolide:    { kind: "cloud", fam: "musk" },

  marine:  { kind: "wave", fam: "marine" },
  aquatic: { kind: "wave", fam: "marine" },
  calone:  { kind: "wave", fam: "marine" },

  smoke:   { kind: "wisp", fam: "leather" },

  grass:        { kind: "leafCluster", fam: "green" },
  "cut grass":  { kind: "leafCluster", fam: "green" },
  green:        { kind: "leafCluster", fam: "green" },
  galbanum:     { kind: "leafCluster", fam: "green" },

  apple:        { kind: "fruit", fam: "fruity" },
  peach:        { kind: "fruit", fam: "fruity", flesh: "E8A85E" },
  blackcurrant: { kind: "fruit", fam: "fruity", flesh: FAM.floral.b },

  spice: { kind: "resinCluster", fam: "spicy" },
  pepper: { kind: "resinCluster", fam: "spicy" },
  lavender:  { kind: "flower", fam: "aromatic", shape: "small" },
  aromatic:  { kind: "flower", fam: "aromatic", shape: "small" },
  rosemary:  { kind: "leafCluster", fam: "aromatic" },
  absolute:  { kind: "flower", fam: "floral", shape: "round" },
  "essential oil": { kind: "drop", fam: "green" },
  resinoid:  { kind: "resinCluster", fam: "amber" },
  tincture:  { kind: "bottle", fam: "amber" },
  co2:       { kind: "wave", fam: "marine" },

  // process / equipment / generic concept icons — not raw materials, but
  // reused across dilution, equipment, compliance and brand slides
  bottle:      { kind: "bottle", fam: "amber" },
  "amber bottle": { kind: "bottle", fam: "amber" },
  vial:        { kind: "bottle", fam: "amber" },
  solvent:     { kind: "wave", fam: "marine" },
  water:       { kind: "wave", fam: "marine" },
  alcohol:     { kind: "wave", fam: "marine" },
  mixture:     { kind: "swirl", fam: "amber" },
  dilution:    { kind: "swirl", fam: "amber" },
  formula:     { kind: "molecule", fam: "woody" },
  scale:       { kind: "molecule", fam: "leather" },
  label:       { kind: "leatherTexture", fam: "leather" },
  document:    { kind: "leatherTexture", fam: "leather" },
  sds:         { kind: "leatherTexture", fam: "leather" },
  compliance:  { kind: "leatherTexture", fam: "leather" },
  gloves:      { kind: "cloud", fam: "musk" },
  packaging:   { kind: "bottle", fam: "amber" },
  brand:       { kind: "drop", fam: "amber" },
  molecule:    { kind: "molecule", fam: "woody" },
  "amber glass bottle": { kind: "bottle", fam: "amber" },
  "amber glass bottles": { kind: "bottle", fam: "amber" },
  "sample vial": { kind: "bottle", fam: "amber" },
  "dilution bottle": { kind: "bottle", fam: "amber" },
  "formula storage": { kind: "bottle", fam: "amber" },
  scent_strip: { kind: "strip", fam: "leather" },
  strip:       { kind: "strip", fam: "leather" },
  pipette:     { kind: "pipette", fam: "marine" },
  funnel:      { kind: "flask", fam: "marine" },
  beaker:      { kind: "flask", fam: "green" },
  "glass rod": { kind: "drop", fam: "marine" },
  "weighing boat": { kind: "leatherTexture", fam: "leather" },
  spatula:     { kind: "drop", fam: "woody" },
  "storage box": { kind: "leatherTexture", fam: "woody" },
  "cleaning alcohol": { kind: "wave", fam: "marine" },
  "labels & markers": { kind: "leatherTexture", fam: "leather" },
  ifra:        { kind: "leatherTexture", fam: "leather" },
  allergen:    { kind: "flower", fam: "floral", shape: "small" },
  clp:         { kind: "sparkle", fam: "spicy" },
  pictogram:   { kind: "sparkle", fam: "spicy" },
  sparkle:     { kind: "sparkle", fam: "spicy" },
  hazard:      { kind: "sparkle", fam: "spicy" },
  regulatory:  { kind: "leatherTexture", fam: "woody" },
  assessor:    { kind: "leatherTexture", fam: "woody" },
  social:      { kind: "sparkle", fam: "floral" },
  retail:      { kind: "bottle", fam: "amber" },
  story:       { kind: "swirl", fam: "gourmand" },
  website:     { kind: "wave", fam: "marine" },
  influencer:  { kind: "sparkle", fam: "fruity" },

  // ---------------- NATURAL CITRUS ----------------
  "sweet orange":  { kind: "citrus", fam: "citrus" },
  "bitter orange": { kind: "citrus", fam: "citrus" },
  "blood orange":  { kind: "citrus", fam: "citrus", segTone: FAM.floral.b },
  orange:          { kind: "citrus", fam: "citrus" },
  petitgrain:      { kind: "citrus", fam: "green", segTone: FAM.green.a },
  yuzu:            { kind: "citrus", fam: "citrus" },

  // ---------------- NATURAL FLORALS ----------------
  neroli:          { kind: "flower", fam: "floral", shape: "round", center: C.paper },
  "ylang-ylang":   { kind: "flower", fam: "floral", shape: "star" },
  "ylang ylang":   { kind: "flower", fam: "floral", shape: "star" },
  geranium:        { kind: "flower", fam: "floral", shape: "small" },
  "violet leaf":   { kind: "leafCluster", fam: "green" },
  osmanthus:       { kind: "flower", fam: "floral", shape: "small", center: FAM.gourmand.b },

  // ---------------- NATURAL WOODS ----------------
  amyris:      { kind: "woodRing", fam: "woody", rings: 2 },
  guaiacwood:  { kind: "woodRing", fam: "woody", rings: 3 },
  "ho wood":   { kind: "woodRing", fam: "aromatic", rings: 2 },

  // ---------------- NATURAL RESINS / AMBERS ----------------
  benzoin:         { kind: "resinCluster", fam: "amber" },
  "peru balsam":   { kind: "resinCluster", fam: "amber" },
  "tolu balsam":   { kind: "resinCluster", fam: "amber" },
  frankincense:    { kind: "resinCluster", fam: "amber" },
  myrrh:           { kind: "resinCluster", fam: "amber" },
  opoponax:        { kind: "resinCluster", fam: "amber" },

  // ---------------- NATURAL SPICES ----------------
  "black pepper":  { kind: "resinCluster", fam: "spicy" },
  cardamom:        { kind: "resinCluster", fam: "spicy" },
  clove:           { kind: "resinCluster", fam: "spicy" },
  nutmeg:          { kind: "resinCluster", fam: "spicy" },
  cinnamon:        { kind: "resinCluster", fam: "spicy" },
  ginger:          { kind: "root", fam: "spicy" },
  saffron:         { kind: "resinCluster", fam: "spicy" },

  // ---------------- NATURAL HERBAL / AROMATIC ----------------
  "clary sage":    { kind: "flower", fam: "aromatic", shape: "small" },
  thyme:           { kind: "leafCluster", fam: "aromatic" },
  basil:           { kind: "leafCluster", fam: "aromatic" },
  eucalyptus:      { kind: "leafCluster", fam: "aromatic" },
  artemisia:       { kind: "leafCluster", fam: "aromatic" },
  spearmint:       { kind: "leafCluster", fam: "green" },
  peppermint:      { kind: "leafCluster", fam: "green" },
  mint:            { kind: "leafCluster", fam: "green" },
  "juniper berry": { kind: "fruit", fam: "aromatic", flesh: FAM.green.b },

  // ---------------- NATURAL GOURMAND / SWEET-LEANING ----------------
  cocoa:  { kind: "swirl", fam: "gourmand", dark: true },
  tonka:  { kind: "pod", fam: "gourmand" },

  // ---------------- SYNTHETIC MUSKS ----------------
  helvetolide:              { kind: "cloud", fam: "musk" },
  "ethylene brassylate":    { kind: "cloud", fam: "musk" },
  exaltolide:               { kind: "cloud", fam: "musk" },
  muscenone:                { kind: "cloud", fam: "musk" },
  tonalide:                 { kind: "cloud", fam: "musk" },
  romandolide:              { kind: "cloud", fam: "musk" },
  "musk ketone":            { kind: "cloud", fam: "musk" },
  "musk xylene":            { kind: "cloud", fam: "musk" },

  // ---------------- SYNTHETIC AMBER / AMBROX / RADIANT ----------------
  cetalox:        { kind: "resinCluster", fam: "amber" },
  cedramber:      { kind: "resinCluster", fam: "amber" },
  "amber xtreme": { kind: "resinCluster", fam: "amber" },
  orcanox:        { kind: "resinCluster", fam: "amber" },

  // ---------------- SYNTHETIC WOODY ----------------
  timbersilk: { kind: "woodRing", fam: "woody", rings: 4 },
  javanol:    { kind: "woodRing", fam: "woody", rings: 2 },
  ebanol:     { kind: "woodRing", fam: "woody", rings: 3 },
  sandalore:  { kind: "woodRing", fam: "woody", rings: 2 },
  bacdanol:   { kind: "woodRing", fam: "woody", rings: 2 },
  polysantol: { kind: "woodRing", fam: "woody", rings: 3 },
  kephalis:   { kind: "woodRing", fam: "woody", rings: 5 },
  norlimbanol:{ kind: "woodRing", fam: "woody", rings: 5 },

  // ---------------- SYNTHETIC FLORAL ----------------
  hydroxycitronellal:     { kind: "flower", fam: "floral", shape: "small" },
  "phenylethyl alcohol":  { kind: "flower", fam: "floral", shape: "round" },
  "benzyl acetate":       { kind: "flower", fam: "floral", shape: "star" },
  citronellol:            { kind: "flower", fam: "floral", shape: "small" },
  geraniol:               { kind: "flower", fam: "floral", shape: "small" },
  "alpha ionone":         { kind: "flower", fam: "floral", shape: "small" },
  "beta ionone":          { kind: "flower", fam: "floral", shape: "small" },
  "methyl ionone":        { kind: "flower", fam: "floral", shape: "small" },
  "rose oxide":           { kind: "flower", fam: "floral", shape: "round" },

  // ---------------- SYNTHETIC FRESH / CITRUS / AROMATIC ----------------
  citral:       { kind: "citrus", fam: "citrus" },
  aldehyde:     { kind: "sparkle", fam: "citrus" },
  undecavertol: { kind: "flower", fam: "floral", shape: "small" },
  "cis-3-hexenol": { kind: "leafCluster", fam: "green" },
  "leaf alcohol":  { kind: "leafCluster", fam: "green" },
  stemone:      { kind: "leafCluster", fam: "green" },

  // ---------------- SYNTHETIC FRUITY ----------------
  "ethyl butyrate":         { kind: "fruit", fam: "fruity" },
  fructone:                 { kind: "fruit", fam: "fruity" },
  "gamma undecalactone":    { kind: "fruit", fam: "fruity", flesh: "E8A85E" },
  "gamma nonalactone":      { kind: "fruit", fam: "fruity" },
  "allyl amyl glycolate":   { kind: "fruit", fam: "fruity" },
  "cis-3-hexenyl acetate":  { kind: "leafCluster", fam: "green" },
  pear:                     { kind: "fruit", fam: "fruity" },
  tropical:                 { kind: "fruit", fam: "fruity" },

  // ---------------- GREEN MATERIALS ----------------
  triplal: { kind: "leafCluster", fam: "green" },

  // ---------------- SYNTHETIC GOURMAND ----------------
  "ethyl vanillin": { kind: "pod", fam: "gourmand" },
  heliotropin:      { kind: "swirl", fam: "gourmand" },
  piperonal:        { kind: "swirl", fam: "gourmand" },
  furaneol:         { kind: "swirl", fam: "gourmand" },

  // ---------------- AQUATIC / MARINE ----------------
  melonal:     { kind: "fruit", fam: "marine", flesh: FAM.marine.b },
  helional:    { kind: "wave", fam: "marine" },
  floralozone: { kind: "wave", fam: "marine" },

  // ---------------- LEATHER / SMOKY / ANIMALIC / TEXTURAL ----------------
  "birch tar":            { kind: "wisp", fam: "leather" },
  safraleine:             { kind: "leatherTexture", fam: "leather" },
  "isobutyl quinoline":   { kind: "leatherTexture", fam: "leather" },
  guaiacol:               { kind: "wisp", fam: "leather" },
  castoreum:              { kind: "leatherTexture", fam: "leather" },
  suederal:                { kind: "leatherTexture", fam: "leather" },

  // ---------------- ACCORDS & BASES MODULE ----------------
  "rose givco":     { kind: "flower", fam: "floral", shape: "round" },
  gardenia:         { kind: "flower", fam: "floral", shape: "round", center: "FAF6EC" },
  lilac:            { kind: "flower", fam: "floral", shape: "star" },
  orris:            { kind: "root", fam: "floral" },
  "hedione hc":     { kind: "flower", fam: "floral", shape: "star" },
  base:             { kind: "swirl", fam: "amber" },
  speciality:       { kind: "swirl", fam: "amber" },
  pear:             { kind: "fruit", fam: "fruity" },
  cherry:           { kind: "fruit", fam: "fruity", flesh: FAM.floral.b },
  praline:          { kind: "swirl", fam: "gourmand" },
  oud:              { kind: "woodRing", fam: "woody", rings: 4 },
  suede:            { kind: "leatherTexture", fam: "leather" },
};

function normalizeIconName(name) {
  return String(name || "").toLowerCase().replace(/[().]/g, "").replace(/\s+/g, " ").trim();
}

function iconEntry(name) {
  const key = normalizeIconName(name);
  if (MATERIAL_ICONS[key]) return MATERIAL_ICONS[key];
  for (const k of Object.keys(MATERIAL_ICONS)) {
    if (key.includes(k)) return MATERIAL_ICONS[k];
  }
  return null;
}

// Draws just the inner illustration (no chip backdrop) for a given material
// name/kind at circle center (cx, cy) with radius r.
function drawIcon(slide, cx, cy, r, name, opts = {}) {
  const entry = iconEntry(name) ?? { kind: opts.kind ?? "drop", fam: opts.fam ?? "amber" };
  const fam = FAM[entry.fam] ?? FAM.amber;
  const tone = opts.color ?? fam.b;
  switch (entry.kind) {
    case "citrus": drawCitrus(slide, cx, cy, r, entry.segTone ?? tone, { rind: tone, segments: 10 }); break;
    case "flower": drawFlower(slide, cx, cy, r, tone, { shape: entry.shape, center: entry.center ?? fam.a }); break;
    case "woodRing": drawWoodRing(slide, cx, cy, r, tone, { rings: entry.rings ?? 3, alt: fam.a }); break;
    case "root": drawRoot(slide, cx, cy, r, tone); break;
    case "bigLeaf": drawBigLeaf(slide, cx, cy, r, tone); break;
    case "pod": drawPod(slide, cx, cy, r, tone, { seedColor: fam.ink }); break;
    case "swirl": drawSwirl(slide, cx, cy, r, entry.dark ? fam.ink : tone, { mid: fam.a, steam: entry.steam }); break;
    case "resinCluster": drawResinCluster(slide, cx, cy, r, tone, { tones: [tone, fam.a, fam.ink] }); break;
    case "leatherTexture": drawLeatherTexture(slide, cx, cy, r, tone); break;
    case "cloud": drawCloud(slide, cx, cy, r, fam.a, { line: fam.ink }); break;
    case "wave": drawWave(slide, cx, cy, r, tone, { water: fam.a }); break;
    case "wisp": drawWisp(slide, cx, cy, r, tone); break;
    case "leafCluster": drawLeafCluster(slide, cx, cy, r, tone); break;
    case "fruit": drawFruit(slide, cx, cy, r, entry.flesh ?? tone); break;
    case "molecule": drawMolecule(slide, cx, cy, r * 0.55, tone, { nodeColor: tone, bondColor: fam.ink, ringColor: fam.bg, noHalo: true }); break;
    case "bottle": drawBottle(slide, cx - r * 0.32, cy - r * 0.82, r * 0.64, r * 1.64, { liquid: tone, glass: fam.a }); break;
    case "flask": drawFlask(slide, cx - r * 0.4, cy - r * 0.7, r * 0.8, r * 1.4, tone); break;
    case "strip": drawStrip(slide, cx - r * 0.07, cy - r * 0.68, r * 1.36, tone, { dip: 0.32 }); break;
    case "pipette": drawPipette(slide, cx, cy - r * 0.78, r * 1.5, tone); break;
    case "scale": drawScale(slide, cx - r * 0.5, cy - r * 0.5, r, r, tone); break;
    case "sparkle": drawSparkle(slide, cx, cy, r * 0.7, tone); break;
    case "drop":
    default: drawDrop(slide, cx, cy, r * 0.5, tone); break;
  }
  return fam;
}

// The circular "chip": soft family-tinted disc + ring + the icon itself.
// This is the deck's core visual unit — used for material cards, family
// mood boards, accord satellites and upgraded card grids alike.
function iconChip(slide, cx, cy, r, name, opts = {}) {
  const entry = iconEntry(name) ?? { fam: opts.fam ?? "amber" };
  const fam = FAM[entry.fam] ?? FAM.amber;
  filledCircle(slide, cx, cy, r, opts.bg ?? fam.bg);
  drawIcon(slide, cx, cy, r * 0.78, name, { kind: opts.kind, fam: opts.fam, color: opts.color });
  if (opts.ring !== false) {
    slide.addShape("ellipse", {
      x: cx - r, y: cy - r, w: r * 2, h: r * 2,
      fill: { type: "none" }, line: { color: opts.ringColor ?? fam.b, width: (opts.ringW ?? 0.028) * 72 },
    });
  }
  if (opts.sparkle) drawSparkle(slide, cx + r * 0.72, cy - r * 0.72, r * 0.16, opts.sparkleColor ?? fam.a);
  return fam;
}

// ---------- composed title/corner graphics — varies the deck's signature motif ----------
function titleGraphic(slide, cx, cy, r, kind, accent, opts = {}) {
  const ring2 = opts.ringColor ?? C.smoke;
  switch (kind) {
    case "flower":
      ringFrame(slide, cx, cy, r, accent, { thickness: 0.02 });
      drawFlower(slide, cx, cy, r * 0.62, accent, { transparency: 4 });
      break;
    case "citrus":
      ringFrame(slide, cx, cy, r, accent, { thickness: 0.02 });
      drawCitrus(slide, cx, cy, r * 0.66, accent, { segments: 10 });
      break;
    case "bottle":
      ringFrame(slide, cx, cy, r, accent, { thickness: 0.02 });
      drawBottle(slide, cx - r * 0.26, cy - r * 0.68, r * 0.52, r * 1.36, { liquid: accent, glass: C.stone, fillLevel: 0.6 });
      break;
    case "flask":
      ringFrame(slide, cx, cy, r, accent, { thickness: 0.02 });
      drawFlask(slide, cx - r * 0.34, cy - r * 0.62, r * 0.68, r * 1.24, accent);
      break;
    case "scale":
      ringFrame(slide, cx, cy, r, accent, { thickness: 0.02 });
      drawScale(slide, cx - r * 0.42, cy - r * 0.46, r * 0.84, r * 0.92, accent);
      break;
    case "drop":
      ringFrame(slide, cx, cy, r, accent, { thickness: 0.02 });
      ringFrame(slide, cx, cy, r * 0.7, ring2, { thickness: 0.014 });
      drawDrop(slide, cx, cy, r * 0.32, accent);
      break;
    case "strip":
      ringFrame(slide, cx, cy, r, accent, { thickness: 0.02 });
      drawStrip(slide, cx - r * 0.11, cy - r * 0.58, r * 1.16, accent, { dip: 0.34 });
      break;
    case "wood":
      ringFrame(slide, cx, cy, r, accent, { thickness: 0.02 });
      filledCircle(slide, cx, cy, r * 0.64, accent, { transparency: 78 });
      for (let i = -2; i <= 2; i++) {
        ringFrame(slide, cx, cy, r * (0.14 + Math.abs(i) * 0.12), accent, { thickness: 0.012 });
      }
      break;
    case "rings":
      ringFrame(slide, cx, cy, r, accent, { thickness: 0.02 });
      ringFrame(slide, cx, cy, r * 0.68, ring2, { thickness: 0.014 });
      filledCircle(slide, cx, cy, r * 0.1, accent);
      break;
    case "leaf":
      ringFrame(slide, cx, cy, r, accent, { thickness: 0.02 });
      drawLeafCluster(slide, cx, cy + r * 0.1, r * 0.66, accent);
      break;
    case "wave":
      ringFrame(slide, cx, cy, r, accent, { thickness: 0.02 });
      drawWave(slide, cx, cy, r * 0.7, accent, { water: opts.waterColor ?? accent });
      break;
    case "cloud":
      ringFrame(slide, cx, cy, r, accent, { thickness: 0.02 });
      drawCloud(slide, cx, cy, r * 0.62, accent, { line: opts.nodeRing ?? C.ink });
      break;
    case "swirl":
      ringFrame(slide, cx, cy, r, accent, { thickness: 0.02 });
      drawSwirl(slide, cx, cy, r * 0.66, accent, { mid: ring2 });
      break;
    case "resin":
      ringFrame(slide, cx, cy, r, accent, { thickness: 0.02 });
      drawResinCluster(slide, cx, cy, r * 0.62, accent);
      break;
    case "molecule":
    default:
      ringFrame(slide, cx, cy, r, accent, { thickness: 0.02 });
      ringFrame(slide, cx, cy, r * 0.72, ring2, { thickness: 0.014 });
      drawMolecule(slide, cx, cy, r * 0.42, accent, { nodeColor: accent, bondColor: C.stone, ringColor: opts.nodeRing ?? C.ink, noHalo: true });
      break;
  }
}

// Scent strip / blotter
function drawStrip(slide, x, y, h, color, opts = {}) {
  const w = h * 0.11;
  slide.addShape("roundRect", { x, y, w, h, rectRadius: 0.02,
    fill: { color: C.paper }, line: { color: C.stone, width: 1 } });
  const dipH = h * (opts.dip ?? 0.3);
  slide.addShape("roundRect", { x: x + 0.015, y: y + h - dipH, w: w - 0.03, h: dipH - 0.02, rectRadius: 0.015,
    fill: { color, transparency: 25 }, line: { type: "none" } });
}

module.exports = {
  PptxGenJS, C, FAM, FONT_HEAD, FONT_BODY, PAGE_W, PAGE_H, MARGIN, BRAND_NAME,
  newDeck, bg, kicker, pageNum, moduleTag, title, note, brandFooter,
  ringFrame, filledCircle, cornerWash, badge, drawBottle, drawFlower, drawCitrus, drawMolecule,
  drawPipette, drawFlask, drawScale, drawWood, drawStrip, drawDrop, titleGraphic,
  drawLeafCluster, drawBigLeaf, drawWoodRing, drawRoot, drawResinCluster, drawPod,
  drawSwirl, drawWave, drawWisp, drawCloud, drawFruit, drawLeatherTexture, drawSparkle,
  drawIcon, iconChip, iconEntry, normalizeIconName, MATERIAL_ICONS,
};
