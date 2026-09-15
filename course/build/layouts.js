const T = require("./theme");
const { C, FAM, FONT_HEAD, FONT_BODY, PAGE_W, PAGE_H, MARGIN } = T;

let PAGE_COUNTER = 0;
function nextPage() { PAGE_COUNTER += 1; return PAGE_COUNTER; }
function resetPager() { PAGE_COUNTER = 0; }

const HERO_PALETTE = [C.gold, C.rust, C.olive, C.berry, C.plum, C.taupeDk];
function heroFor(seed) {
  const idx = Math.abs(hashStr(seed)) % HERO_PALETTE.length;
  return HERO_PALETTE[idx];
}
function hashStr(s) { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return h; }

// Tags a shape/text object so add_click_reveals.py can find it and group it
// into click-group N — group N appears on the Nth advance within this slide,
// instead of the deck simply cutting to the next slide.
let BLD_UID = 0;
function bld(n) { return { objectName: `bld${n}_${BLD_UID++}` }; }

// Tags a slide with its intended click-to-advance transition style, read by
// add_transitions.py in post-processing. A tiny, offscreen, invisible marker
// shape — never rendered, never seen in QA screenshots.
let TRANS_UID = 0;
function transitionTag(slide, kind) {
  slide.addText(" ", {
    x: -1, y: -1, w: 0.1, h: 0.1, fontSize: 1, color: "FFFFFF",
    isTextBox: true, margin: 0, objectName: `trans_${kind}_${TRANS_UID++}`,
  });
}

// decorative corner ring — the recurring motif, used at low opacity so it never competes with content
function motifCorner(slide, opts = {}) {
  const color = opts.color ?? C.stone;
  T.ringFrame(slide, opts.cx ?? PAGE_W - 0.6, opts.cy ?? 0.55, opts.r ?? 0.9, color, { thickness: 0.018 });
}

// A confident, on-brand illustration used to fill leftover space on sparser
// slides — bigger and more present than the corner wash, but still clearly
// backdrop (soft tone, tucked bottom-right, never under text).
const FILLER_KINDS = ["citrus", "flower", "molecule", "drop", "wood", "rings"];
function fillerGraphic(slide, x, y, w, h, seed, opts = {}) {
  if (h < 1.0) return;
  const kind = opts.kind ?? FILLER_KINDS[Math.abs(hashStr(seed)) % FILLER_KINDS.length];
  const color = opts.color ?? heroFor(seed);
  const r = Math.min(h, w * 0.5) * 0.62;
  const cx = x + w - r * 0.92;
  // keep clear of the page-number / brand-footer strip at the very bottom
  const cy = Math.min(y + h / 2, PAGE_H - 0.65 - r);
  T.titleGraphic(slide, cx, cy, r, kind, color, { nodeRing: opts.dark ? C.ink2 : C.paper });
}

// ============================================================
// 1. CINEMATIC TITLE / MODULE OPENER (dark)
// ============================================================
function titleSlide(pres, { eyebrow, titleText, subtitle, presenter, tag, accent, big, graphic, points, note: notes, noBrandMark }) {
  const s = pres.addSlide();
  T.bg(s, C.ink);
  const a = accent ?? C.gold;
  T.cornerWash(s, { corner: "tr", color: a, transparency: 90, size: 7.5 });

  // large decorative motif graphic — varies by module, right side
  T.titleGraphic(s, 10.9, 3.75, 2.35, graphic ?? "molecule", a, { nodeRing: C.ink });

  if (tag) {
    s.addText(tag.toUpperCase(), {
      x: MARGIN, y: 0.55, w: 8, h: 0.4, fontFace: FONT_BODY, fontSize: 13, bold: true,
      color: a, charSpacing: 3, isTextBox: true, margin: 0,
    });
  }
  s.addText(eyebrow ? eyebrow.toUpperCase() : "", {
    x: MARGIN, y: tag ? 1.05 : 0.75, w: 9.5, h: 0.45, fontFace: FONT_BODY, fontSize: 13.5, bold: true,
    color: C.stone, charSpacing: 2.5, isTextBox: true, margin: 0,
  });
  s.addText(titleText, {
    x: MARGIN, y: tag ? 1.55 : 1.3, w: 9.3, h: big ? 3.0 : 2.2,
    fontFace: FONT_HEAD, fontSize: big ? 60 : 46, bold: true, color: C.paper,
    isTextBox: true, margin: 0, lineSpacingMultiple: 1.0,
  });
  if (subtitle) {
    s.addText(subtitle, {
      x: MARGIN, y: tag ? 3.75 : 3.55, w: 8.0, h: 1.1, fontFace: FONT_BODY, fontSize: 16,
      color: C.stone, isTextBox: true, margin: 0, lineSpacingMultiple: 1.25,
    });
  }
  // fills the gap between the subtitle and the presenter credit with a
  // quick video-friendly preview of what the module covers, instead of
  // leaving that band of the slide empty
  if (points && points.length) {
    const pointsY = tag ? 4.95 : 4.75;
    points.forEach((p, i) => {
      const py = pointsY + i * 0.46;
      T.filledCircle(s, MARGIN + 0.07, py + 0.13, 0.045, a);
      s.addText(p, {
        x: MARGIN + 0.26, y: py - 0.03, w: 7.5, h: 0.4, fontFace: FONT_BODY, fontSize: 13,
        color: C.paper, isTextBox: true, margin: 0, lineSpacingMultiple: 1.15,
      });
    });
  }
  if (presenter) {
    T.filledCircle(s, MARGIN + 0.08, 6.72, 0.06, a);
    s.addText(presenter.toUpperCase(), {
      x: MARGIN + 0.28, y: 6.55, w: 9, h: 0.4, fontFace: FONT_BODY, fontSize: 12.5, bold: true,
      color: C.paper, charSpacing: 2, isTextBox: true, margin: 0,
    });
  }
  if (!noBrandMark) {
    s.addText(T.BRAND_NAME, {
      x: PAGE_W - 4.1, y: 6.9, w: 3.5, h: 0.3, align: "right",
      fontFace: FONT_BODY, fontSize: 9, bold: true, color: C.taupe, charSpacing: 2.2,
      isTextBox: true, margin: 0,
    });
  }
  if (notes) T.note(s, notes);
  transitionTag(s, "fade");
  return s;
}

// ============================================================
// 2. REMEMBER THIS — full-bleed key takeaway (dark)
// ============================================================
function rememberSlide(pres, { text, tag, accent, note: notes }) {
  const s = pres.addSlide();
  T.bg(s, C.ink);
  const a = accent ?? heroFor(text);
  T.cornerWash(s, { corner: "bl", color: a, transparency: 91, size: 6.5 });
  T.ringFrame(s, PAGE_W / 2, PAGE_H / 2, 3.05, C.smoke, { thickness: 0.016 });
  T.ringFrame(s, PAGE_W / 2, PAGE_H / 2, 2.55, a, { thickness: 0.01 });
  s.addText("REMEMBER THIS", {
    x: 0, y: 1.5, w: PAGE_W, h: 0.45, align: "center", fontFace: FONT_BODY, fontSize: 13,
    bold: true, color: C.gold, charSpacing: 4, isTextBox: true, margin: 0,
  });
  s.addText(text, {
    x: 1.6, y: 2.2, w: PAGE_W - 3.2, h: 2.8, align: "center", valign: "middle",
    fontFace: FONT_HEAD, fontSize: 34, bold: true, color: C.paper, isTextBox: true, margin: 0,
    lineSpacingMultiple: 1.12,
  });
  if (tag) {
    s.addText(tag.toUpperCase(), {
      x: 0, y: 6.55, w: PAGE_W, h: 0.35, align: "center", fontFace: FONT_BODY, fontSize: 11,
      bold: true, color: C.taupe, charSpacing: 2.5, isTextBox: true, margin: 0,
    });
  }
  if (notes) T.note(s, notes);
  transitionTag(s, "fade");
  pageNumFor(s);
  return s;
}

function pageNumFor(s) { T.pageNum(s, nextPage(), { color: C.taupe }); T.brandFooter(s); }

// ============================================================
// header used by all light content slides
// ============================================================
function header(s, { eyebrow, titleText, tag, dark, titleW, washCorner, washColor, noWash }) {
  if (!noWash) {
    T.cornerWash(s, {
      corner: washCorner ?? "br",
      color: washColor ?? heroFor(titleText || eyebrow || "x"),
      transparency: dark ? 92 : 90,
    });
  }
  T.kicker(s, eyebrow ?? "", { color: dark ? C.gold : C.goldDk });
  if (tag) T.moduleTag(s, tag, { color: dark ? C.stone : C.taupe });
  T.title(s, titleText, { color: dark ? C.paper : C.ink, size: 32, y: 0.85, w: titleW ?? 8.9 });
}

// ============================================================
// 3. SPLIT SLIDE — text rows left, illustrated panel right
// ============================================================
function splitSlide(pres, { eyebrow, titleText, tag, rows, drawVisual, visualCaption, note: notes, panelColor, panelAccent, noAnchor }) {
  const s = pres.addSlide();
  T.bg(s, C.paper);
  const panelX = 8.15, panelY = 0.6, panelW = PAGE_W - panelX - MARGIN, panelH = PAGE_H - 1.2;
  s.addShape("roundRect", {
    x: panelX, y: panelY, w: panelW, h: panelH, rectRadius: 0.14,
    fill: { color: panelColor ?? C.cream }, line: { type: "none" },
    shadow: { type: "outer", color: "000000", opacity: 0.18, blur: 14, offset: 4, angle: 90 },
  });
  header(s, { eyebrow, titleText, tag, titleW: panelX - MARGIN - 0.35, washCorner: "bl" });
  // automatic visual anchor — soft concentric rings sit behind whatever
  // drawVisual renders, so a single small icon never reads as dead space
  // inside the panel; callers with their own full-panel composition can opt out
  if (!noAnchor) {
    const capReserve = visualCaption ? 0.62 : 0.18;
    const panelCx = panelX + panelW / 2;
    const panelCy = panelY + (panelH - capReserve) / 2;
    const anchor = panelAccent ?? heroFor(titleText);
    const ringMax = Math.min(panelW, panelH - capReserve) * 0.47;
    T.ringFrame(s, panelCx, panelCy, ringMax, anchor, { thickness: 0.02, transparency: 80 });
    T.ringFrame(s, panelCx, panelCy, ringMax * 0.68, anchor, { thickness: 0.015, transparency: 72 });
  }
  if (drawVisual) drawVisual(s, panelX, panelY, panelW, panelH);
  if (visualCaption) {
    s.addText(visualCaption, {
      x: panelX + 0.25, y: panelY + panelH - 0.55, w: panelW - 0.5, h: 0.4,
      fontFace: FONT_BODY, fontSize: 10.5, italic: true, color: C.taupeDk,
      align: "center", isTextBox: true, margin: 0,
    });
  }

  const rowsX = MARGIN, rowsY = 1.95, rowW = 7.15;
  const rowH = (PAGE_H - rowsY - 0.55) / rows.length;
  rows.forEach((r, i) => {
    const ry = rowsY + i * rowH;
    const g = i + 1;
    T.filledCircle(s, rowsX + 0.16, ry + 0.16, 0.16, r.color ?? heroFor(r.h), bld(g));
    s.addText(r.h, {
      x: rowsX + 0.5, y: ry - 0.03, w: rowW - 0.5, h: 0.34,
      fontFace: FONT_HEAD, fontSize: 16.5, bold: true, color: C.ink, isTextBox: true, margin: 0,
      ...bld(g),
    });
    s.addText(r.d, {
      x: rowsX + 0.5, y: ry + 0.32, w: rowW - 0.5, h: rowH - 0.4,
      fontFace: FONT_BODY, fontSize: 12.5, color: C.taupeDk, isTextBox: true, margin: 0,
      lineSpacingMultiple: 1.15,
      ...bld(g),
    });
  });

  if (notes) T.note(s, notes);
  transitionTag(s, "fade");
  pageNumFor(s);
  return s;
}

// ============================================================
// 4. CARD GRID — definitions / materials / concepts
// ============================================================
function cardGrid(pres, { eyebrow, titleText, tag, cards, cols, note: notes, dark, noReveal }) {
  const s = pres.addSlide();
  T.bg(s, dark ? C.ink : C.paper);
  header(s, { eyebrow, titleText, tag, dark });

  const c = cols ?? (cards.length > 6 ? 4 : 3);
  const gap = 0.28;
  const gridX = MARGIN, gridY = 1.9, gridW = PAGE_W - MARGIN * 2;
  const rowsN = Math.ceil(cards.length / c);
  const cardW = (gridW - gap * (c - 1)) / c;
  const availH = PAGE_H - gridY - 0.5;
  const iconBonus = cards.some((c2) => c2.icon) ? 0.35 : 0;
  const capH = (rowsN === 1 ? 2.15 : rowsN === 2 ? 1.95 : 1.85) + iconBonus;
  const cardH = Math.min(capH, (availH - gap * (rowsN - 1)) / rowsN);
  const gridH = rowsN * cardH + gap * (rowsN - 1);
  const gridYActual = gridY + Math.max(0, (availH - gridH) * 0.22);
  const leftoverY = gridYActual + gridH + 0.35;
  const leftoverH = PAGE_H - 0.5 - leftoverY;
  if (leftoverH > 1.1) {
    fillerGraphic(s, gridX, leftoverY, gridW, leftoverH, titleText, { dark });
  }

  const hasIcons = cards.some((c) => c.icon);
  const iconCap = rowsN >= 2 ? 0.34 : 0.4;
  const iconR = hasIcons ? Math.min(iconCap, cardW * 0.22, cardH * 0.26) : 0;

  cards.forEach((card, i) => {
    const col = i % c, row = Math.floor(i / c);
    const x = gridX + col * (cardW + gap);
    const y = gridYActual + row * (cardH + gap);
    const cardColor = card.color ?? heroFor(card.title);
    const g = i + 1;
    s.addShape("roundRect", {
      x, y, w: cardW, h: cardH, rectRadius: 0.1,
      fill: { color: dark ? C.ink2 : C.white },
      line: { color: dark ? C.lineDk : C.line, width: 1 },
      shadow: dark ? undefined : { type: "outer", color: "000000", opacity: 0.08, blur: 8, offset: 2, angle: 90 },
      ...(noReveal ? {} : bld(g)),
    });
    let titleY = y + 0.5, subY = y + 0.86;
    if (card.icon) {
      const iconCy = y + 0.14 + iconR;
      T.iconChip(s, x + cardW / 2, iconCy, iconR, card.icon, { ringColor: cardColor, ...(noReveal ? {} : bld(g)) });
      titleY = iconCy + iconR + 0.1;
      // generous gap — guarantees clearance even if a two-word title wraps
      // to two lines before the (often multi-line) description begins
      subY = titleY + (rowsN >= 2 ? 0.5 : 0.34);
    } else {
      T.filledCircle(s, x + 0.32, y + 0.32, 0.13, cardColor, noReveal ? {} : bld(g));
    }
    s.addText(card.title, {
      x: x + 0.2, y: titleY, w: cardW - 0.4, h: card.icon && rowsN >= 2 ? 0.46 : 0.4, align: card.icon ? "center" : "left",
      valign: "top",
      fontFace: FONT_HEAD, fontSize: 14.5, bold: true, color: dark ? C.paper : C.ink,
      isTextBox: true, margin: 0,
      ...(noReveal ? {} : bld(g)),
    });
    s.addText(card.sub ?? "", {
      x: x + 0.2, y: subY, w: cardW - 0.4, h: cardH - (subY - y) - 0.12, align: card.icon ? "center" : "left",
      valign: "top",
      fontFace: FONT_BODY, fontSize: 10.8, color: dark ? C.stone : C.taupeDk,
      isTextBox: true, margin: 0, lineSpacingMultiple: 1.15,
      ...(noReveal ? {} : bld(g)),
    });
  });

  if (notes) T.note(s, notes);
  transitionTag(s, "fade");
  pageNumFor(s);
  return s;
}

// ============================================================
// 5. TIMELINE
// ============================================================
function timelineSlide(pres, { eyebrow, titleText, tag, points, caption, note: notes }) {
  const s = pres.addSlide();
  T.bg(s, C.paper);
  header(s, { eyebrow, titleText, tag });

  const lineY = 4.0, x0 = MARGIN + 0.3, x1 = PAGE_W - MARGIN - 0.3;
  s.addShape("line", { x: x0, y: lineY, w: x1 - x0, h: 0.001, line: { color: C.stone, width: 2 } });
  const n = points.length;
  points.forEach((p, i) => {
    const cx = x0 + (x1 - x0) * (n === 1 ? 0.5 : i / (n - 1));
    const col = heroFor(p.label + i);
    const g = i + 1;
    T.filledCircle(s, cx, lineY, 0.09, col, bld(g));
    T.ringFrame(s, cx, lineY, 0.18, col, { thickness: 0.014, ...bld(g) });
    const up = i % 2 === 0;
    s.addText(p.t, {
      x: cx - 0.85, y: up ? lineY - 1.05 : lineY + 0.3, w: 1.7, h: 0.35,
      align: "center", fontFace: FONT_BODY, fontSize: 12, bold: true, color: col,
      isTextBox: true, margin: 0,
      ...bld(g),
    });
    s.addText(p.label, {
      x: cx - 0.85, y: up ? lineY - 0.68 : lineY + 0.66, w: 1.7, h: 0.9,
      align: "center", fontFace: FONT_BODY, fontSize: 10.5, color: C.taupeDk,
      isTextBox: true, margin: 0, lineSpacingMultiple: 1.1,
      ...bld(g),
    });
  });
  if (caption) {
    s.addText(caption, {
      x: MARGIN, y: PAGE_H - 0.95, w: PAGE_W - MARGIN * 2, h: 0.5,
      fontFace: FONT_BODY, fontSize: 12.5, italic: true, color: C.taupeDk,
      align: "center", isTextBox: true, margin: 0,
    });
  }
  if (notes) T.note(s, notes);
  transitionTag(s, "push_l");
  pageNumFor(s);
  return s;
}

// ============================================================
// 6. FRAGRANCE PYRAMID
// ============================================================
function pyramidSlide(pres, { eyebrow, titleText, tag, bands, footnote, note: notes }) {
  const s = pres.addSlide();
  T.bg(s, C.paper);
  header(s, { eyebrow, titleText, tag });

  const cx = 4.35, baseY = 6.55, apexY = 1.85, baseW = 5.6;
  const n = bands.length;
  for (let i = 0; i < n; i++) {
    const t0 = i / n, t1 = (i + 1) / n;
    const y0 = apexY + (baseY - apexY) * t0;
    const y1 = apexY + (baseY - apexY) * t1;
    const w0 = baseW * t0, w1 = baseW * t1;
    const band = bands[i];
    const g = i + 1;
    // trapezoid approximated with a freeform-like stack of a rect (use custom shape via 'trapezoid' not native) -> use rectangle scaled per row via multiple thin rects
    const rows = 18;
    for (let r = 0; r < rows; r++) {
      const rt0 = r / rows, rt1 = (r + 1) / rows;
      const yy0 = y0 + (y1 - y0) * rt0;
      const ww = w0 + (w1 - w0) * ((rt0 + rt1) / 2);
      s.addShape("rect", {
        x: cx - ww / 2, y: yy0, w: ww, h: (y1 - y0) / rows + 0.004,
        fill: { color: band.color, transparency: 6 }, line: { type: "none" },
        ...bld(g),
      });
    }
    s.addText(band.name.toUpperCase(), {
      x: cx - baseW / 2 - 2.1, y: (y0 + y1) / 2 - 0.32, w: 2.0, h: 0.64,
      align: "right", valign: "middle", fontFace: FONT_BODY, fontSize: 13, bold: true,
      color: band.color, charSpacing: 1.5, isTextBox: true, margin: 0,
      ...bld(g),
    });
    s.addText(band.examples, {
      x: cx + baseW / 2 + 0.15, y: (y0 + y1) / 2 - 0.32, w: 3.7, h: 0.7,
      valign: "middle", fontFace: FONT_BODY, fontSize: 11, color: C.taupeDk,
      isTextBox: true, margin: 0, lineSpacingMultiple: 1.1,
      ...bld(g),
    });
  }
  if (footnote) {
    s.addText(footnote, {
      x: MARGIN, y: PAGE_H - 0.75, w: PAGE_W - MARGIN * 2, h: 0.5,
      fontFace: FONT_BODY, fontSize: 11.5, italic: true, color: C.taupeDk,
      align: "center", isTextBox: true, margin: 0,
    });
  }
  if (notes) T.note(s, notes);
  transitionTag(s, "fade");
  pageNumFor(s);
  return s;
}

// ============================================================
// 7. COMPARISON (two columns)
// ============================================================
function comparisonSlide(pres, { eyebrow, titleText, tag, left, right, note: notes }) {
  const s = pres.addSlide();
  T.bg(s, C.paper);
  header(s, { eyebrow, titleText, tag });

  const colW = (PAGE_W - MARGIN * 2 - 0.4) / 2;
  [ [left, MARGIN], [right, MARGIN + colW + 0.4] ].forEach(([col, x], colIdx) => {
    const y = 1.95, h = PAGE_H - y - 0.5;
    const g = colIdx + 1;
    s.addShape("roundRect", {
      x, y, w: colW, h, rectRadius: 0.12,
      fill: { color: col.tint ?? C.cream }, line: { type: "none" },
      ...bld(g),
    });
    T.filledCircle(s, x + 0.4, y + 0.4, 0.15, col.color ?? C.gold, bld(g));
    s.addText(col.title, {
      x: x + 0.7, y: y + 0.24, w: colW - 1.0, h: 0.45,
      fontFace: FONT_HEAD, fontSize: 18, bold: true, color: C.ink, isTextBox: true, margin: 0,
      ...bld(g),
    });
    const items = col.items.map((it, idx) => ({
      text: it, options: { bullet: { code: "2022", indent: 14 }, color: C.taupeDk,
        fontFace: FONT_BODY, fontSize: 13, breakLine: idx !== col.items.length - 1, paraSpaceAfter: 10 },
    }));
    s.addText(items, { x: x + 0.4, y: y + 0.85, w: colW - 0.8, h: h - 1.1, isTextBox: true, margin: 0, valign: "top", ...bld(g) });
    T.ringFrame(s, x + colW - 0.55, y + h - 0.55, 0.34, col.color ?? C.gold, { thickness: 0.014, ...bld(g) });
    T.drawDrop(s, x + colW - 0.55, y + h - 0.55, 0.13, col.color ?? C.gold, bld(g));
  });
  if (notes) T.note(s, notes);
  transitionTag(s, "wipe_l");
  pageNumFor(s);
  return s;
}

// ============================================================
// 8. FORMULA BAR — proportional stacked bar + legend
// ============================================================
function formulaSlide(pres, { eyebrow, titleText, tag, idea, rows, note: notes }) {
  const s = pres.addSlide();
  T.bg(s, C.paper);
  header(s, { eyebrow, titleText, tag });

  if (idea) {
    s.addText(idea, {
      x: MARGIN, y: 1.85, w: PAGE_W - MARGIN * 2, h: 0.5,
      fontFace: FONT_BODY, fontSize: 14, italic: true, color: C.taupeDk, isTextBox: true, margin: 0,
    });
  }
  const legendRowsN = Math.ceil(rows.length / 2);
  const blockH = 0.62 + 0.45 + legendRowsN * 0.62;
  const bandTop = idea ? 2.5 : 2.0;
  const availH = PAGE_H - 0.6 - bandTop;
  const barY = bandTop + Math.max(0, (availH - blockH) * 0.42);
  const barX = MARGIN, barW = PAGE_W - MARGIN * 2, barH = 0.62;
  let cursor = barX;
  const total = rows.reduce((a, r) => a + r.pct, 0);
  rows.forEach((r) => {
    const w = (barW * r.pct) / total;
    s.addShape("rect", { x: cursor, y: barY, w, h: barH, fill: { color: r.color, transparency: 4 }, line: { color: C.paper, width: 1.5 } });
    if (w > 0.55) {
      s.addText(`${r.pct}%`, {
        x: cursor, y: barY, w, h: barH, align: "center", valign: "middle",
        fontFace: FONT_BODY, fontSize: 11, bold: true, color: C.white, isTextBox: true, margin: 0,
      });
    }
    cursor += w;
  });

  const legendY = barY + barH + 0.45;
  const cols = 2;
  const legW = (barW - 0.4) / cols;
  rows.forEach((r, i) => {
    const col = i % cols, row = Math.floor(i / cols);
    const x = barX + col * (legW + 0.4);
    const y = legendY + row * 0.62;
    const g = i + 1;
    T.filledCircle(s, x + 0.11, y + 0.16, 0.09, r.color, bld(g));
    s.addText(`${r.name}  —  ${r.pct}%`, {
      x: x + 0.32, y: y - 0.02, w: legW - 1.3, h: 0.34,
      fontFace: FONT_BODY, fontSize: 12.5, bold: true, color: C.ink, isTextBox: true, margin: 0,
      ...bld(g),
    });
    s.addText(r.role ?? "", {
      x: x + 0.32, y: y + 0.28, w: legW - 0.4, h: 0.3,
      fontFace: FONT_BODY, fontSize: 10, color: C.taupeDk, isTextBox: true, margin: 0,
      ...bld(g),
    });
  });

  s.addText(`TOTAL = ${total}%`, {
    x: PAGE_W - MARGIN - 2.2, y: barY - 0.42, w: 2.2, h: 0.35, align: "right",
    fontFace: FONT_BODY, fontSize: 11, bold: true, color: C.taupe, charSpacing: 1.5,
    isTextBox: true, margin: 0,
  });

  if (notes) T.note(s, notes);
  transitionTag(s, "push_l");
  pageNumFor(s);
  return s;
}

// ============================================================
// 9. FLOW / PROCESS
// ============================================================
function flowSlide(pres, { eyebrow, titleText, tag, steps, note: notes, vertical, dark }) {
  const s = pres.addSlide();
  T.bg(s, dark ? C.ink : C.paper);
  header(s, { eyebrow, titleText, tag, dark });

  const n = steps.length;
  if (!vertical) {
    const h = 2.35;
    const y = 1.9 + (PAGE_H - 0.55 - 1.9 - h) * 0.48;
    const gap = 0.35;
    const w = (PAGE_W - MARGIN * 2 - gap * (n - 1)) / n;
    steps.forEach((st, i) => {
      const x = MARGIN + i * (w + gap);
      const col = heroFor(st.label + i);
      const g = i + 1;
      s.addShape("roundRect", {
        x, y, w, h, rectRadius: 0.1,
        fill: { color: dark ? C.ink2 : C.white }, line: { color: col, width: 1.5 },
        shadow: dark ? undefined : { type: "outer", color: "000000", opacity: 0.08, blur: 6, offset: 2, angle: 90 },
        ...bld(g),
      });
      s.addText(String(i + 1).padStart(2, "0"), {
        x: x + 0.18, y: y + 0.12, w: 1.0, h: 0.4, fontFace: FONT_HEAD, fontSize: 15, bold: true,
        color: col, isTextBox: true, margin: 0,
        ...bld(g),
      });
      s.addText(st.label, {
        x: x + 0.18, y: y + 0.58, w: w - 0.36, h: 0.55, fontFace: FONT_HEAD, fontSize: 14.5, bold: true,
        color: dark ? C.paper : C.ink, isTextBox: true, margin: 0,
        ...bld(g),
      });
      s.addText(st.desc ?? "", {
        x: x + 0.18, y: y + 1.12, w: w - 0.36, h: h - 1.25, fontFace: FONT_BODY, fontSize: 10,
        color: dark ? C.stone : C.taupeDk, isTextBox: true, margin: 0, lineSpacingMultiple: 1.1,
        ...bld(g),
      });
      if (i < n - 1) {
        s.addText("→", {
          x: x + w, y: y + h / 2 - 0.25, w: gap, h: 0.5, align: "center", valign: "middle",
          fontFace: FONT_BODY, fontSize: 18, color: dark ? C.stone : C.taupe, isTextBox: true, margin: 0,
          ...bld(g),
        });
      }
    });
  }
  if (notes) T.note(s, notes);
  transitionTag(s, "push_l");
  pageNumFor(s);
  return s;
}

// ============================================================
// 10. MYTH vs FACT
// ============================================================
function mythSlide(pres, { eyebrow, titleText, tag, myth, fact, note: notes }) {
  const s = pres.addSlide();
  T.bg(s, C.paper);
  header(s, { eyebrow, titleText, tag });

  const y = 2.1, h = PAGE_H - y - 0.6, colW = (PAGE_W - MARGIN * 2 - 0.4) / 2;
  s.addShape("roundRect", { x: MARGIN, y, w: colW, h, rectRadius: 0.12, fill: { color: C.ink }, line: { type: "none" } });
  s.addText("MYTH", { x: MARGIN + 0.35, y: y + 0.3, w: colW - 0.7, h: 0.4, fontFace: FONT_BODY, fontSize: 13,
    bold: true, color: C.rust, charSpacing: 3, isTextBox: true, margin: 0 });
  s.addText(`"${myth}"`, { x: MARGIN + 0.35, y: y + 0.8, w: colW - 0.7, h: h - 1.1, fontFace: FONT_HEAD, fontSize: 21,
    italic: true, bold: true, color: C.paper, isTextBox: true, margin: 0, lineSpacingMultiple: 1.15 });

  const x2 = MARGIN + colW + 0.4;
  s.addShape("roundRect", { x: x2, y, w: colW, h, rectRadius: 0.12, fill: { color: C.cream }, line: { type: "none" }, ...bld(1) });
  s.addText("FACT", { x: x2 + 0.35, y: y + 0.3, w: colW - 0.7, h: 0.4, fontFace: FONT_BODY, fontSize: 13,
    bold: true, color: C.goldDk, charSpacing: 3, isTextBox: true, margin: 0, ...bld(1) });
  s.addText(fact, { x: x2 + 0.35, y: y + 0.8, w: colW - 0.7, h: h - 1.1, fontFace: FONT_BODY, fontSize: 14.5,
    color: C.ink, isTextBox: true, margin: 0, lineSpacingMultiple: 1.25, ...bld(1) });

  if (notes) T.note(s, notes);
  transitionTag(s, "wipe_l");
  pageNumFor(s);
  return s;
}

// ============================================================
// 10b. MYTH GRID — several quick myth/fact busts on one slide
// ============================================================
function mythGrid(pres, { eyebrow, titleText, tag, myths, note: notes }) {
  const s = pres.addSlide();
  T.bg(s, C.paper);
  header(s, { eyebrow, titleText, tag });

  const cols = myths.length > 4 ? 3 : 2;
  const gap = 0.28;
  const gridX = MARGIN, gridY = 1.9, gridW = PAGE_W - MARGIN * 2;
  const rowsN = Math.ceil(myths.length / cols);
  const cardW = (gridW - gap * (cols - 1)) / cols;
  const cardH = (PAGE_H - gridY - 0.5 - gap * (rowsN - 1)) / rowsN;

  myths.forEach((m, i) => {
    const col = i % cols, row = Math.floor(i / cols);
    const x = gridX + col * (cardW + gap);
    const y = gridY + row * (cardH + gap);
    const g = i + 1;
    s.addShape("roundRect", { x, y, w: cardW, h: cardH, rectRadius: 0.1,
      fill: { color: C.white }, line: { color: C.line, width: 1 },
      shadow: { type: "outer", color: "000000", opacity: 0.08, blur: 8, offset: 2, angle: 90 }, ...bld(g) });
    s.addText("MYTH", { x: x + 0.22, y: y + 0.15, w: cardW - 0.4, h: 0.28,
      fontFace: FONT_BODY, fontSize: 10, bold: true, color: C.rust, charSpacing: 2, isTextBox: true, margin: 0, ...bld(g) });
    s.addText(m.myth, { x: x + 0.22, y: y + 0.44, w: cardW - 0.44, h: cardH * 0.4,
      fontFace: FONT_HEAD, fontSize: 13.5, italic: true, bold: true, color: C.ink, isTextBox: true, margin: 0,
      lineSpacingMultiple: 1.08, ...bld(g) });
    s.addText("FACT", { x: x + 0.22, y: y + cardH * 0.54, w: cardW - 0.4, h: 0.28,
      fontFace: FONT_BODY, fontSize: 10, bold: true, color: C.goldDk, charSpacing: 2, isTextBox: true, margin: 0, ...bld(g) });
    s.addText(m.fact, { x: x + 0.22, y: y + cardH * 0.54 + 0.28, w: cardW - 0.44, h: cardH * 0.42 - 0.28,
      fontFace: FONT_BODY, fontSize: 10.8, color: C.taupeDk, isTextBox: true, margin: 0, lineSpacingMultiple: 1.12, ...bld(g) });
  });

  if (notes) T.note(s, notes);
  transitionTag(s, "fade");
  pageNumFor(s);
  return s;
}

// ============================================================
// 11. HERO GRAPHIC — one big illustration dominates
// ============================================================
function heroSlide(pres, { eyebrow, titleText, tag, drawVisual, caption, note: notes, dark }) {
  const s = pres.addSlide();
  T.bg(s, dark ? C.ink : C.paper);
  const panelX = MARGIN, panelY = 1.75, panelW = PAGE_W - MARGIN * 2, panelH = PAGE_H - panelY - 0.55;
  s.addShape("roundRect", {
    x: panelX, y: panelY, w: panelW, h: panelH, rectRadius: 0.16,
    fill: { color: dark ? C.ink2 : C.cream }, line: { type: "none" },
  });
  header(s, { eyebrow, titleText, tag, dark });
  if (drawVisual) drawVisual(s, panelX, panelY, panelW, panelH);
  if (caption) {
    s.addText(caption, {
      x: panelX + 0.4, y: panelY + panelH - 0.6, w: panelW - 0.8, h: 0.45,
      fontFace: FONT_BODY, fontSize: 12, italic: true, color: dark ? C.stone : C.taupeDk,
      align: "center", isTextBox: true, margin: 0,
    });
  }
  if (notes) T.note(s, notes);
  transitionTag(s, "fade");
  pageNumFor(s);
  return s;
}

// ============================================================
// 12. CHECKLIST
// ============================================================
function checklistSlide(pres, { eyebrow, titleText, tag, groups, note: notes }) {
  const s = pres.addSlide();
  T.bg(s, C.paper);
  header(s, { eyebrow, titleText, tag });

  const cols = groups.length;
  const gap = 0.35;
  const colW = (PAGE_W - MARGIN * 2 - gap * (cols - 1)) / cols;
  const maxItems = Math.max(...groups.map((g) => g.items.length));
  const availH = PAGE_H - 1.95 - 0.5;
  const usedH = 0.5 + maxItems * 0.5;
  const yTop = 1.95 + Math.max(0, (availH - usedH) * 0.4);
  groups.forEach((grp, gi) => {
    const x = MARGIN + gi * (colW + gap);
    const y = yTop;
    const gg = gi + 1;
    s.addText(grp.title.toUpperCase(), {
      x, y, w: colW, h: 0.35, fontFace: FONT_BODY, fontSize: 12.5, bold: true,
      color: grp.color ?? C.goldDk, charSpacing: 1.5, isTextBox: true, margin: 0,
      ...bld(gg),
    });
    grp.items.forEach((it, ii) => {
      const iy = y + 0.5 + ii * 0.5;
      s.addShape("roundRect", { x, y: iy, w: 0.2, h: 0.2, rectRadius: 0.03,
        fill: { type: "none" }, line: { color: grp.color ?? C.gold, width: 1.5 }, ...bld(gg) });
      s.addText(it, {
        x: x + 0.32, y: iy - 0.07, w: colW - 0.35, h: 0.36, fontFace: FONT_BODY, fontSize: 12,
        color: C.ink, isTextBox: true, margin: 0,
        ...bld(gg),
      });
    });
  });
  if (notes) T.note(s, notes);
  transitionTag(s, "fade");
  pageNumFor(s);
  return s;
}

// ============================================================
// 13. ROADMAP — vertical numbered path of all modules
// ============================================================
function roadmapSlide(pres, { eyebrow, titleText, modules, note: notes }) {
  const s = pres.addSlide();
  T.bg(s, C.ink);
  s.addText((eyebrow ?? "").toUpperCase(), {
    x: MARGIN, y: 0.5, w: 8, h: 0.35, fontFace: FONT_BODY, fontSize: 12.5, bold: true,
    color: C.gold, charSpacing: 3, isTextBox: true, margin: 0,
  });
  s.addText(titleText, {
    x: MARGIN, y: 0.9, w: 9.5, h: 0.7, fontFace: FONT_HEAD, fontSize: 30, bold: true,
    color: C.paper, isTextBox: true, margin: 0,
  });

  const cols = 2;
  const rows = Math.ceil(modules.length / cols);
  const gridX = MARGIN, gridY = 1.85, gridW = PAGE_W - MARGIN * 2;
  const colW = gridW / cols;
  const rowH = (PAGE_H - gridY - 0.4) / rows;
  modules.forEach((m, i) => {
    const col = i % cols, row = Math.floor(i / cols);
    const x = gridX + col * colW;
    const y = gridY + row * rowH;
    const c = heroFor(m.title + i);
    T.ringFrame(s, x + 0.32, y + rowH / 2 - 0.05, 0.24, c, { thickness: 0.016 });
    s.addText(m.num, {
      x: x + 0.08, y: y + rowH / 2 - 0.05 - 0.17, w: 0.5, h: 0.34, align: "center", valign: "middle",
      fontFace: FONT_BODY, fontSize: 11, bold: true, color: c, isTextBox: true, margin: 0,
    });
    s.addText(m.title, {
      x: x + 0.72, y: y + rowH / 2 - 0.42, w: colW - 1.0, h: 0.4,
      fontFace: FONT_HEAD, fontSize: 14.5, bold: true, color: C.paper, isTextBox: true, margin: 0,
    });
    s.addText(m.presenter ?? "", {
      x: x + 0.72, y: y + rowH / 2 - 0.02, w: colW - 1.0, h: 0.32,
      fontFace: FONT_BODY, fontSize: 10.5, color: C.stone, charSpacing: 1, isTextBox: true, margin: 0,
    });
  });
  if (notes) T.note(s, notes);
  transitionTag(s, "push_l");
  pageNumFor(s);
  return s;
}

// ============================================================
// 14. BIO SLIDE — presenters
// ============================================================
function bioSlide(pres, { eyebrow, titleText, tag, people, note: notes }) {
  const s = pres.addSlide();
  T.bg(s, C.paper);
  header(s, { eyebrow, titleText, tag });

  const n = people.length;
  const gap = 0.5;
  const colW = (PAGE_W - MARGIN * 2 - gap * (n - 1)) / n;
  const y = 1.95, h = PAGE_H - y - 0.5;
  people.forEach((p, i) => {
    const x = MARGIN + i * (colW + gap);
    const g = i + 1;
    s.addShape("roundRect", { x, y, w: colW, h, rectRadius: 0.14, fill: { color: C.cream }, line: { type: "none" }, ...bld(g) });
    T.ringFrame(s, x + colW / 2, y + 1.05, 0.68, p.color ?? C.gold, { thickness: 0.02, ...bld(g) });
    s.addText(p.initials, {
      x: x + colW / 2 - 0.68, y: y + 1.05 - 0.68, w: 1.36, h: 1.36, align: "center", valign: "middle",
      fontFace: FONT_HEAD, fontSize: 30, bold: true, color: p.color ?? C.gold, isTextBox: true, margin: 0,
      ...bld(g),
    });
    s.addText(p.name, {
      x: x + 0.25, y: y + 2.0, w: colW - 0.5, h: 0.4, align: "center",
      fontFace: FONT_HEAD, fontSize: 19, bold: true, color: C.ink, isTextBox: true, margin: 0,
      ...bld(g),
    });
    s.addText(p.role, {
      x: x + 0.25, y: y + 2.38, w: colW - 0.5, h: 0.32, align: "center",
      fontFace: FONT_BODY, fontSize: 11.5, bold: true, color: p.color ?? C.goldDk, charSpacing: 1.5,
      isTextBox: true, margin: 0,
      ...bld(g),
    });
    s.addText(p.bio, {
      x: x + 0.35, y: y + 2.85, w: colW - 0.7, h: h - 3.1, align: "center",
      fontFace: FONT_BODY, fontSize: 11.5, color: C.taupeDk, isTextBox: true, margin: 0, lineSpacingMultiple: 1.2,
      ...bld(g),
    });
  });
  if (notes) T.note(s, notes);
  transitionTag(s, "fade");
  pageNumFor(s);
  return s;
}

// ============================================================
// 15. MATERIAL CARD — 1-4 large circular ingredient cards
// (Profile / Effect / Role), the core "raw material" slide unit
// ============================================================
function materialCard(pres, { eyebrow, titleText, tag, materials, note: notes }) {
  const s = pres.addSlide();
  T.bg(s, C.paper);
  header(s, { eyebrow, titleText, tag });

  const n = materials.length;
  const gap = 0.5;
  const colW = (PAGE_W - MARGIN * 2 - gap * (n - 1)) / n;
  const r = Math.min(1.15, colW * 0.4);
  const cy = 2.75;
  materials.forEach((m, i) => {
    const cx = MARGIN + colW * i + colW / 2;
    const g = i + 1;
    const fam = T.iconChip(s, cx, cy, r, m.icon ?? m.name, { ringColor: m.color, sparkle: m.sparkle, ...bld(g) });
    s.addText(m.name, {
      x: cx - colW / 2 + 0.15, y: cy + r + 0.2, w: colW - 0.3, h: 0.4, align: "center",
      fontFace: FONT_HEAD, fontSize: 18, bold: true, color: C.ink, isTextBox: true, margin: 0,
      ...bld(g),
    });
    const lines = [
      m.profile ? { label: "Profile", val: m.profile } : null,
      m.effect ? { label: "Effect", val: m.effect } : null,
      m.role ? { label: "Role", val: m.role } : null,
    ].filter(Boolean);
    lines.forEach((ln, li) => {
      const ly = cy + r + 0.68 + li * 0.62;
      s.addText(ln.label.toUpperCase(), {
        x: MARGIN + colW * i + 0.12, y: ly, w: colW - 0.24, h: 0.24,
        fontFace: FONT_BODY, fontSize: 9.5, bold: true, color: fam.b, charSpacing: 1.5,
        align: "center", isTextBox: true, margin: 0, ...bld(g),
      });
      s.addText(ln.val, {
        x: MARGIN + colW * i + 0.12, y: ly + 0.24, w: colW - 0.24, h: 0.36,
        fontFace: FONT_BODY, fontSize: 11, color: C.taupeDk, align: "center",
        isTextBox: true, margin: 0, lineSpacingMultiple: 1.05, ...bld(g),
      });
    });
  });
  if (notes) T.note(s, notes);
  transitionTag(s, "fade");
  pageNumFor(s);
  return s;
}

// ============================================================
// 16. FAMILY MOODBOARD — a cluster of circular illustrated
// materials under one olfactory family, bright and clustered
// rather than gridded
// ============================================================
function familyMoodboard(pres, { eyebrow, titleText, tag, familyName, famKey, items, note: notes }) {
  const s = pres.addSlide();
  T.bg(s, C.paper);
  header(s, { eyebrow, titleText, tag });

  const fam = FAM[famKey] ?? FAM.amber;
  const panelX = MARGIN, panelY = 1.85, panelW = PAGE_W - MARGIN * 2, panelH = PAGE_H - panelY - 0.5;
  s.addShape("roundRect", { x: panelX, y: panelY, w: panelW, h: panelH, rectRadius: 0.16,
    fill: { color: fam.bg }, line: { type: "none" } });
  s.addText((familyName ?? "").toUpperCase(), {
    x: panelX + 0.35, y: panelY + 0.28, w: panelW - 0.7, h: 0.4,
    fontFace: FONT_BODY, fontSize: 14, bold: true, color: fam.ink, charSpacing: 3,
    isTextBox: true, margin: 0,
  });

  const n = items.length;
  const usableW = panelW - 0.7;
  const colW = usableW / n;
  const baseR = Math.min(0.95, colW * 0.42);
  items.forEach((it, i) => {
    const g = i + 1;
    const cx = panelX + 0.35 + colW * i + colW / 2;
    const bob = i % 2 === 0 ? -0.12 : 0.14;
    const r = baseR * (i % 3 === 1 ? 1.08 : 0.94);
    const cy = panelY + panelH * 0.52 + bob * panelH * 0.22;
    T.iconChip(s, cx, cy, r, it.icon ?? it.name, { ...bld(g) });
    s.addText(it.name, {
      x: cx - colW / 2 + 0.05, y: cy + r + 0.16, w: colW - 0.1, h: 0.5, align: "center",
      fontFace: FONT_HEAD, fontSize: 13.5, bold: true, color: fam.ink, isTextBox: true, margin: 0,
      lineSpacingMultiple: 1.0, ...bld(g),
    });
  });

  if (notes) T.note(s, notes);
  transitionTag(s, "fade");
  pageNumFor(s);
  return s;
}

// ============================================================
// 17. ACCORD DIAGRAM — one big central circle (the target smell)
// with smaller connected satellite circles (the facets/materials
// that build it)
// ============================================================
function accordDiagram(pres, { eyebrow, titleText, tag, centerName, centerIcon, centerFam, satellites, note: notes }) {
  const s = pres.addSlide();
  T.bg(s, C.paper);
  header(s, { eyebrow, titleText, tag });

  const cx = 3.9, cy = 4.5, cr = 1.35;
  const centerFamPalette = FAM[centerFam] ?? FAM.fruity;
  T.iconChip(s, cx, cy, cr, centerIcon ?? centerName, { fam: centerFam, ringW: 0.04 });
  s.addText(centerName.toUpperCase(), {
    x: cx - 1.6, y: cy + cr + 0.18, w: 3.2, h: 0.4, align: "center",
    fontFace: FONT_BODY, fontSize: 13.5, bold: true, color: centerFamPalette.ink, charSpacing: 2,
    isTextBox: true, margin: 0,
  });

  const n = satellites.length;
  const satX = 8.85;
  const topY = 2.35, botY = 6.85;
  const spacing = n === 1 ? 0 : (botY - topY) / (n - 1);
  const sr = n === 1 ? 0.62 : Math.min(0.62, (spacing - 0.16) / 2);
  satellites.forEach((sat, i) => {
    const g = i + 1;
    const sy = n === 1 ? (topY + botY) / 2 : topY + spacing * i;
    connectLine(s, cx + cr * 0.86, cy, satX - sr * 0.86, sy, sat.color ?? FAM[sat.fam ?? "amber"].b, g);
    T.iconChip(s, satX, sy, sr, sat.icon ?? sat.label, { fam: sat.fam, ...bld(g) });
    s.addText(sat.label, {
      x: satX + sr + 0.15, y: sy - 0.19, w: PAGE_W - MARGIN - (satX + sr + 0.15), h: 0.38,
      valign: "middle", fontFace: FONT_HEAD, fontSize: 13.5, bold: true, color: C.ink,
      isTextBox: true, margin: 0, ...bld(g),
    });
  });

  if (notes) T.note(s, notes);
  transitionTag(s, "push_l");
  pageNumFor(s);
  return s;
}
function connectLine(s, x1, y1, x2, y2, color, g) {
  s.addShape("line", {
    x: Math.min(x1, x2), y: Math.min(y1, y2),
    w: Math.abs(x2 - x1) || 0.01, h: Math.abs(y2 - y1) || 0.01,
    line: { color, width: 1.5, transparency: 25, dashType: "sysDot" },
    flipV: !((x1 <= x2 && y1 <= y2) || (x1 >= x2 && y1 >= y2)),
    ...bld(g),
  });
}

// ============================================================
// 18. CIRCLE PROCESS FLOW — circular steps joined by arrows,
// the redesign's process-diagram idiom (replaces boxy flowSlide
// for ingredient/dilution/compliance pipelines)
// ============================================================
function circleProcessFlow(pres, { eyebrow, titleText, tag, steps, note: notes, dark }) {
  const s = pres.addSlide();
  T.bg(s, dark ? C.ink : C.paper);
  header(s, { eyebrow, titleText, tag, dark });

  const n = steps.length;
  const y = 4.15;
  const usable = PAGE_W - MARGIN * 2 - 1.4;
  const spacing = usable / (n - 1 || 1);
  const r = Math.min(0.95, (spacing - 0.35) / 2, 1.05);
  const labelW = Math.min(2.1, spacing - 0.1);
  const x0 = MARGIN + 0.7 + (n === 1 ? usable / 2 : 0);
  steps.forEach((st, i) => {
    const cx = x0 + spacing * i;
    const g = i + 1;
    if (i < n - 1) {
      s.addText("→", {
        x: cx + r + 0.06, y: y - 0.28, w: spacing - r * 2 - 0.12, h: 0.56,
        align: "center", valign: "middle", fontFace: FONT_BODY, fontSize: 20,
        color: dark ? C.stone : C.taupe, isTextBox: true, margin: 0, ...bld(g),
      });
    }
    T.iconChip(s, cx, y, r, st.icon ?? st.label, { fam: st.fam, ...bld(g) });
    s.addText(st.label, {
      x: cx - labelW / 2, y: y + r + 0.18, w: labelW, h: 0.38, align: "center",
      fontFace: FONT_HEAD, fontSize: 14, bold: true, color: dark ? C.paper : C.ink,
      isTextBox: true, margin: 0, ...bld(g),
    });
    if (st.desc) {
      s.addText(st.desc, {
        x: cx - labelW / 2, y: y + r + 0.56, w: labelW, h: 0.5, align: "center",
        fontFace: FONT_BODY, fontSize: 10.5, color: dark ? C.stone : C.taupeDk,
        isTextBox: true, margin: 0, lineSpacingMultiple: 1.1, ...bld(g),
      });
    }
  });

  if (notes) T.note(s, notes);
  transitionTag(s, "push_l");
  pageNumFor(s);
  return s;
}

// ============================================================
// 19. BEFORE / AFTER — two panels, each with its own illustration,
// for a direct visual contrast (dense vs. airy, small dose vs. large
// dose, and similar structural-effect teaching moments)
// ============================================================
function beforeAfterSlide(pres, { eyebrow, titleText, tag, leftLabel, rightLabel, drawLeft, drawRight, leftColor, rightColor, caption, note: notes }) {
  const s = pres.addSlide();
  T.bg(s, C.paper);
  header(s, { eyebrow, titleText, tag });

  const y = 2.05, h = PAGE_H - y - (caption ? 1.05 : 0.55);
  const gap = 0.4, colW = (PAGE_W - MARGIN * 2 - gap) / 2;
  [
    [leftLabel, drawLeft, MARGIN, leftColor ?? C.taupeDk, 1],
    [rightLabel, drawRight, MARGIN + colW + gap, rightColor ?? C.goldDk, 2],
  ].forEach(([label, draw, x, color, g]) => {
    s.addShape("roundRect", {
      x, y, w: colW, h, rectRadius: 0.14,
      fill: { color: C.cream }, line: { type: "none" },
      shadow: { type: "outer", color: "000000", opacity: 0.08, blur: 8, offset: 2, angle: 90 },
      ...bld(g),
    });
    s.addText(label.toUpperCase(), {
      x: x + 0.32, y: y + 0.24, w: colW - 0.64, h: 0.35, align: "center",
      fontFace: FONT_BODY, fontSize: 12.5, bold: true, color, charSpacing: 1.5,
      isTextBox: true, margin: 0, ...bld(g),
    });
    if (draw) draw(s, x, y + 0.75, colW, h - 0.95);
  });
  if (caption) {
    s.addText(caption, {
      x: MARGIN, y: PAGE_H - 0.9, w: PAGE_W - MARGIN * 2, h: 0.5,
      fontFace: FONT_BODY, fontSize: 12.5, italic: true, color: C.taupeDk,
      align: "center", isTextBox: true, margin: 0,
    });
  }
  if (notes) T.note(s, notes);
  transitionTag(s, "wipe_l");
  pageNumFor(s);
  return s;
}

// ============================================================
// 20. EQUATION — a row of circular terms joined by + / = / → ,
// for "materials combine into an accord" and "base + modifiers +
// materials + idea = perfume" style teaching slides
// ============================================================
function equationSlide(pres, { eyebrow, titleText, tag, terms, note: notes, dark }) {
  const s = pres.addSlide();
  T.bg(s, dark ? C.ink : C.paper);
  header(s, { eyebrow, titleText, tag, dark });

  const n = terms.length;
  const y = 4.05;
  const usable = PAGE_W - MARGIN * 2 - 1.3;
  const spacing = usable / (n - 1 || 1);
  const r = Math.min(0.82, (spacing - 0.55) / 2, 0.92);
  const x0 = MARGIN + 0.65 + (n === 1 ? usable / 2 : 0);
  terms.forEach((t, i) => {
    const cx = x0 + spacing * i;
    const g = i + 1;
    if (i > 0) {
      s.addText(terms[i - 1].operator ?? "+", {
        x: cx - spacing + r + 0.05, y: y - 0.32, w: spacing - r * 2 - 0.1, h: 0.64,
        align: "center", valign: "middle", fontFace: FONT_HEAD, fontSize: 26, bold: true,
        color: dark ? C.gold : C.goldDk, isTextBox: true, margin: 0, ...bld(g),
      });
    }
    T.iconChip(s, cx, y, r, t.icon ?? t.label, { fam: t.fam, ringW: t.result ? 0.045 : 0.028, ...bld(g) });
    s.addText(t.label, {
      x: cx - spacing * 0.46, y: y + r + 0.16, w: spacing * 0.92, h: 0.55, align: "center",
      fontFace: FONT_HEAD, fontSize: t.result ? 15 : 12.5, bold: true, color: dark ? C.paper : C.ink,
      isTextBox: true, margin: 0, lineSpacingMultiple: 1.05, ...bld(g),
    });
  });

  if (notes) T.note(s, notes);
  transitionTag(s, "push_l");
  pageNumFor(s);
  return s;
}

module.exports = {
  resetPager, heroFor, motifCorner, nextPage, bld, transitionTag,
  materialCard, familyMoodboard, accordDiagram, circleProcessFlow,
  titleSlide, rememberSlide, splitSlide, cardGrid, timelineSlide, pyramidSlide,
  comparisonSlide, formulaSlide, flowSlide, mythSlide, mythGrid, heroSlide, checklistSlide,
  roadmapSlide, bioSlide, beforeAfterSlide, equationSlide,
};
