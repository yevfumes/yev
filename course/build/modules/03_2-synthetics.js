const T = require("../theme");
const L = require("../layouts");
const { C } = T;

module.exports = function build(pres) {
  L.titleSlide(pres, {
    tag: "Module 03.2 · Raw Materials",
    graphic: "molecule",
    eyebrow: "Presented by Yev",
    titleText: "Synthetics —\nThe Modern Palette",
    subtitle: "Modern perfumery is built on synthetic molecules. This module will change how you see them, for good.",
    presenter: "Yev",
    accent: C.gold,
    points: [
      "Seven synthetic families, in real depth",
      "Commercial bases — and why using one isn't cheating",
      "Busting the naturals-vs-synthetics myths for good",
    ],
    note: "Bring energy here — this is meant to be one of the most exciting modules. Set up the myth-busting early.",
  });

  L.splitSlide(pres, {
    eyebrow: "Why It Matters",
    titleText: "Modern perfumery runs on synthetics",
    tag: "03.2 · Synthetics",
    rows: [
      { h: "Consistency, batch after batch", d: "A synthetic molecule smells identical this year and next — naturals simply can't promise that." },
      { h: "Effects that don't exist in nature", d: "Ozonic, radiant, transparent-woody — entire categories of smell with no natural equivalent." },
      { h: "Safety and sustainability", d: "Reduces pressure on endangered species and rare harvests — sandalwood and musk deer among them." },
      { h: "Affordability at scale", d: "Makes beautiful perfumery accessible far beyond luxury-only pricing." },
    ],
    drawVisual: (s, x, y, w, h) => { T.drawMolecule(s, x + w / 2, y + h / 2, w * 0.28, C.gold, { nodeColor: C.rust, bondColor: C.stone }); },
    visualCaption: "A single molecule, isolated and perfected — the synthetic advantage.",
    note: "Frame synthetics as an achievement, not a compromise. This sets the tone for the whole module.",
  });

  L.cardGrid(pres, {
    eyebrow: "The Categories",
    titleText: "Seven major synthetic families",
    tag: "03.2 · Synthetics",
    cols: 4,
    cards: [
      { title: "Musks", sub: "Skin-like radiance and fixation", icon: "musk", color: T.FAM.musk.ink },
      { title: "Amber / Ambrox", sub: "Warm, radiant, modern amber effect", icon: "amber", color: T.FAM.amber.b },
      { title: "Woody", sub: "Transparent, voluminous woodiness", icon: "cedarwood", color: T.FAM.woody.b },
      { title: "Floral", sub: "Isolated, hyper-true floral facets", icon: "rose", color: T.FAM.floral.b },
      { title: "Fresh / green", sub: "Citrus, green, metallic and aldehydic lift", icon: "bergamot", color: T.FAM.citrus.b },
      { title: "Fruity", sub: "Juicy, vivid fruit facets", icon: "apple", color: T.FAM.fruity.b },
      { title: "Gourmand", sub: "Sweet, edible, comforting facets", icon: "vanilla", color: T.FAM.gourmand.b },
    ],
    note: "Move briskly — this is a map for the deep-dive sections that follow.",
  });

  L.materialCard(pres, {
    eyebrow: "Famous Materials · Part 1",
    titleText: "Molecules every perfumer knows by name",
    tag: "03.2 · Synthetics",
    materials: [
      { name: "Iso E Super", icon: "iso e super", profile: "Velvety, transparent woody volume", effect: "Volume without weight", role: "Used almost everywhere, any dose", color: T.FAM.woody.b },
      { name: "Hedione", icon: "hedione", profile: "Airy, jasmine-adjacent radiance", effect: "Opens up space in a formula", role: "The diffusion superpower", color: T.FAM.floral.b, sparkle: true },
      { name: "Ambroxan", icon: "ambroxan", profile: "Dry, radiant amber-musk", effect: "Warmth that carries far", role: "Modern perfumery's signature", color: T.FAM.amber.b },
      { name: "Vanillin", icon: "vanillin", profile: "The essence of vanilla, isolated", effect: "Warm, sweet, endlessly useful", role: "Gourmand and base workhorse", color: T.FAM.gourmand.b },
    ],
    note: "Give one sentence of context per material live, if time allows. These are the highest-value to memorise first.",
  });

  L.mythGrid(pres, {
    eyebrow: "Playtime",
    titleText: "Synthetic myths, busted",
    tag: "03.2 · Synthetics",
    myths: [
      { myth: "Synthetics are less safe than naturals", fact: "Synthetics are among the most rigorously tested materials in consumer goods — many naturals contain far more allergens and irritants." },
      { myth: "Synthetic means cheap", fact: "Some captive synthetic molecules cost more per kilo than gold-standard naturals — exclusivity and R&D drive price, not \"natural vs. synthetic.\"" },
      { myth: "Synthetics smell inherently 'chemical'", fact: "A poorly built formula smells chemical — with any material. Iso E Super and Hedione are beloved precisely because they don't." },
      { myth: "Naturals are automatically more sophisticated", fact: "Some of history's most acclaimed perfumes lean heavily synthetic. Sophistication is about composition, not ingredient origin." },
      { myth: "Real perfumers avoid synthetics", fact: "Every major fine fragrance house uses synthetics extensively — they are the industry standard, not a shortcut." },
    ],
    note: "Deliver playfully but firmly — these myths do real damage to beginners who avoid a huge, useful part of the palette out of misplaced guilt.",
  });

  // ============================================================
  // SYNTHETIC MUSKS
  // ============================================================
  L.familyMoodboard(pres, {
    eyebrow: "Synthetic Materials · Family 1 of 7",
    titleText: "Musks",
    tag: "03.2 · Synthetics",
    familyName: "Musks",
    famKey: "musk",
    items: [
      { name: "Galaxolide", icon: "galaxolide" },
      { name: "Habanolide", icon: "habanolide" },
      { name: "Ambrettolide", icon: "ambrettolide" },
      { name: "Helvetolide", icon: "helvetolide" },
      { name: "Ethylene Brassylate", icon: "ethylene brassylate" },
      { name: "Exaltolide", icon: "exaltolide" },
    ],
    note: "Musks are the skin of a formula — they don't announce themselves, but everything else leans on them. Not one smell — teach the differences deliberately.",
  });

  L.cardGrid(pres, {
    eyebrow: "Musk Chemistry",
    titleText: "Four musk families, four different textures",
    tag: "03.2 · Synthetics",
    cols: 4,
    cards: [
      { title: "Macrocyclic", sub: "Large-ring molecules, closest in character to real natural musk. Soft, warm, skin-like.", color: T.FAM.musk.b },
      { title: "Polycyclic", sub: "The dominant modern class. Clean, \"fresh laundry\" character, extremely widely used.", color: T.FAM.musk.ink },
      { title: "Alicyclic", sub: "A newer generation of ester musks. Very clean and quiet, whisper-soft diffusion.", color: T.FAM.musk.a },
      { title: "Nitro", sub: "The oldest musk class historically. Largely phased out — covered for context, not active use.", color: C.taupe },
    ],
    note: "Do not teach 'musk' as one generic smell — these four chemical families genuinely read differently on a strip, and choosing between them changes the whole texture of a formula.",
  });

  L.cardGrid(pres, {
    eyebrow: "Musks, In Depth · Macrocyclic",
    titleText: "Macrocyclic musks — the soft, skin-like family",
    tag: "03.2 · Synthetics",
    cols: 4,
    cards: [
      { title: "Ambrettolide", sub: "Soft, elegant, skin-like, slightly fruity ambrette character. Base note, long — closer to real skin than a lab-clean musk.", icon: "ambrettolide", color: T.FAM.musk.b },
      { title: "Habanolide", sub: "Cleaner and more metallic than Ambrettolide, still macrocyclic in feel. Base note, very long — real diffusion and body.", icon: "habanolide", color: T.FAM.musk.ink },
      { title: "Ethylene Brassylate", sub: "Soft, rounded, economical macrocyclic lactone. Base note, long — a dependable, affordable background musk.", icon: "ethylene brassylate", color: T.FAM.musk.ink },
      { title: "Exaltolide", sub: "Gentle, naturalistic, very soft diffusion. Base note, long — one of the oldest macrocyclic musks still in use.", icon: "exaltolide", color: T.FAM.musk.b },
    ],
    note: "Macrocyclic musks are where perfumers reach for a warm, intimate, 'skin' effect — think of them as the family closest to how real musk deer secretion actually smells.",
  });

  L.cardGrid(pres, {
    eyebrow: "Musks, In Depth · Polycyclic & Alicyclic",
    titleText: "The clean, modern generations",
    tag: "03.2 · Synthetics",
    cols: 4,
    cards: [
      { title: "Galaxolide", sub: "Clean, laundry-like, soft. Base note, very long, radiant at low % — the polycyclic musk everyone already knows.", icon: "galaxolide", color: T.FAM.musk.ink },
      { title: "Tonalide", sub: "A second major polycyclic musk, slightly fruitier and warmer than Galaxolide. Base note, very long.", icon: "tonalide", color: T.FAM.musk.ink },
      { title: "Helvetolide", sub: "Fruity, pear-like alicyclic musk. Base note, medium-long, intimate — a gentle, near-invisible effect.", icon: "helvetolide", color: T.FAM.musk.a },
      { title: "Romandolide", sub: "A newer alicyclic musk ester valued for its very clean, quiet radiance. Base note, long, understated.", icon: "romandolide", color: T.FAM.musk.a },
    ],
    note: "Polycyclic musks (Galaxolide, Tonalide) are the workhorse 'clean' layer in most modern formulas. Alicyclic musks (Helvetolide, Romandolide) are newer, even more transparent — useful when you want musk presence without any obvious musk note.",
  });

  L.splitSlide(pres, {
    eyebrow: "Musks, In Depth · Nitro",
    titleText: "Nitro musks — a brief history",
    tag: "03.2 · Synthetics",
    rows: [
      { h: "The original musk class", d: "Materials like Musk Ketone and Musk Xylene were the earliest synthetic musks, discovered well over a century ago." },
      { h: "Largely phased out today", d: "Environmental and safety concerns have led to heavy restriction or discontinuation of most nitro musks across the industry." },
      { h: "Context, not a recommendation", d: "Know the name and the history — but always check current regulatory status before considering any nitro musk for real use." },
    ],
    drawVisual: (s, x, y, w, h) => { T.iconChip(s, x + w / 2, y + h * 0.46, w * 0.32, "musk ketone", { fam: "musk" }); },
    visualCaption: "The musk family tree starts here — but modern perfumery has largely moved on.",
    note: "This is a historical-literacy slide, not a shopping recommendation — nitro musks are here so students recognise the term, not so they go source it.",
  });

  L.materialCard(pres, {
    eyebrow: "Materials To Know",
    titleText: "Three musks to learn cold",
    tag: "03.2 · Synthetics",
    materials: [
      { name: "Galaxolide", icon: "galaxolide", profile: "Clean, laundry-like musk", effect: "The \"fresh clean\" signature", role: "Base · very long · radiant", color: T.FAM.musk.ink },
      { name: "Habanolide", icon: "habanolide", profile: "Cleaner, metallic, modern", effect: "Real diffusion and body", role: "Base · very long · diffusive", color: T.FAM.musk.ink },
      { name: "Ambrettolide", icon: "ambrettolide", profile: "Soft, elegant, skin-like", effect: "Natural, skin-like feel", role: "Base · long · moderate", color: T.FAM.musk.b },
    ],
    note: "These three define the modern musk palette — clean, voluminous, and natural-feeling, respectively.",
  });

  // ============================================================
  // AMBER / AMBROX / RADIANT
  // ============================================================
  L.familyMoodboard(pres, {
    eyebrow: "Synthetic Materials · Family 2 of 7",
    titleText: "Amber, Ambrox & Radiant Materials",
    tag: "03.2 · Synthetics",
    familyName: "Amber & Ambrox",
    famKey: "amber",
    items: [
      { name: "Ambroxan", icon: "ambroxan" },
      { name: "Ambrofix", icon: "ambrofix" },
      { name: "Cetalox", icon: "cetalox" },
      { name: "Cedramber", icon: "cedramber" },
    ],
    note: "This family single-handedly defines the last twenty-five years of mainstream perfumery.",
  });

  L.cardGrid(pres, {
    eyebrow: "Amber, Ambrox & Radiant Materials, In Depth",
    titleText: "Similar, but not identical",
    tag: "03.2 · Synthetics",
    cols: 4,
    cards: [
      { title: "Ambroxan", sub: "Dry, radiant amber-musk with real skin-warmth. The generic name for the whole effect — the genre-defining reference point.", icon: "ambroxan", color: T.FAM.amber.b },
      { title: "Ambrofix", sub: "Givaudan's version of the Ambroxan effect — cleaner and more consistent batch to batch. Base note, very long.", icon: "ambrofix", color: T.FAM.amber.b },
      { title: "Cetalox", sub: "Firmenich's version — softer, rounder, more ambery-woody and less sharp or dry than pure Ambroxan. Base note, long.", icon: "cetalox", color: T.FAM.amber.a },
      { title: "Cedramber", sub: "A distinct woody-amber crossover material, not an Ambroxan variant — bridges the woody and amber families in its own way. Base note, long.", icon: "cedramber", color: T.FAM.amber.ink },
    ],
    note: "Don't teach these as interchangeable — 'Ambroxan' names the effect, while Ambrofix and Cetalox are specific supplier grades of it, each with its own dryness, warmth and radiance. Cedramber is a related but genuinely different material, not another Ambroxan grade — always confirm on a fresh strip.",
  });

  L.materialCard(pres, {
    eyebrow: "Materials To Know",
    titleText: "Three amber-radiants to learn cold",
    tag: "03.2 · Synthetics",
    materials: [
      { name: "Ambroxan", icon: "ambroxan", profile: "Dry, radiant amber-musk", effect: "Warmth that carries far", role: "Base · very long · extreme", color: T.FAM.amber.b },
      { name: "Cetalox", icon: "cetalox", profile: "Soft, ambery-woody, musky", effect: "A gentler radiant glow", role: "Base · long · moderate", color: T.FAM.amber.a },
      { name: "Cedramber", icon: "cedramber", profile: "Woody-amber crossover", effect: "Bridges wood and amber", role: "Base · long · diffusive", color: T.FAM.amber.ink },
    ],
    note: "Ask students to dose Ambroxan at 0.1% and then 3% in two strips — the difference is a genuinely eye-opening lesson.",
  });

  // ============================================================
  // WOODY SYNTHETICS
  // ============================================================
  L.familyMoodboard(pres, {
    eyebrow: "Synthetic Materials · Family 3 of 7",
    titleText: "Woody Synthetics",
    tag: "03.2 · Synthetics",
    familyName: "Woody",
    famKey: "woody",
    items: [
      { name: "Iso E Super", icon: "iso e super" },
      { name: "Cashmeran", icon: "cashmeran" },
      { name: "Javanol", icon: "javanol" },
      { name: "Sandalore", icon: "sandalore" },
      { name: "Ebanol", icon: "ebanol" },
      { name: "Polysantol", icon: "polysantol" },
    ],
    note: "The largest and most-used synthetic family — almost every modern base note leans on one of these.",
  });

  L.cardGrid(pres, {
    eyebrow: "Woody Synthetics, In Depth",
    titleText: "Dry, creamy, transparent, and textured woods",
    tag: "03.2 · Synthetics",
    cols: 4,
    cards: [
      { title: "Iso E Super", sub: "Velvety, transparent, huge volume. Base note, very long — the single most-used woody synthetic in the world. Softens transitions between materials.", icon: "iso e super", color: T.FAM.woody.b },
      { title: "Cashmeran", sub: "Soft, musky, spiced woodiness. Base note, very long, cosy — a comfort-wood texture unlike any natural.", icon: "cashmeran", color: T.FAM.woody.ink },
      { title: "Javanol", sub: "Extremely creamy, true-to-life sandalwood. Base note, long, intense at tiny doses — a modern sandalwood benchmark.", icon: "javanol", color: T.FAM.woody.b },
      { title: "Ebanol", sub: "Creamy sandalwood with a drier edge than Javanol. Base note, long — a versatile, affordable sandalwood substitute.", icon: "ebanol", color: T.FAM.woody.a },
      { title: "Sandalore", sub: "Soft, milky, gentle sandalwood effect. Base note, medium-long — the mildest of the sandalwood synthetics.", icon: "sandalore", color: T.FAM.woody.a },
      { title: "Bacdanol", sub: "Warm, woody-balsamic sandalwood facet. Base note, long — adds roundness alongside sharper woods.", icon: "bacdanol", color: T.FAM.woody.b },
      { title: "Polysantol", sub: "Intense, creamy-sweet sandalwood character. Base note, long, potent — used in very small amounts.", icon: "polysantol", color: T.FAM.woody.b },
      { title: "Kephalis", sub: "Dry, vetiver-cedar textured woodiness. Base note, long — adds grain and structure rather than smoothness.", icon: "kephalis", color: T.FAM.woody.ink },
    ],
    note: "Iso E Super, Javanol and Cashmeran alone can define three completely different \"woody\" moods — transparent, creamy, and cosy. Each earns its place by what it contributes to a formula's structure, not just its note.",
  });

  L.materialCard(pres, {
    eyebrow: "Materials To Know",
    titleText: "Four woody synthetics to learn cold",
    tag: "03.2 · Synthetics",
    materials: [
      { name: "Iso E Super", icon: "iso e super", profile: "Velvety, transparent, huge volume", effect: "Volume without weight", role: "Base · very long · any dose", color: T.FAM.woody.b },
      { name: "Cashmeran", icon: "cashmeran", profile: "Soft, musky, spiced woodiness", effect: "Cosy, enveloping warmth", role: "Base · very long", color: T.FAM.woody.ink },
      { name: "Javanol", icon: "javanol", profile: "Extremely creamy sandalwood", effect: "True-to-life sandalwood, intense", role: "Base · long · tiny dose", color: T.FAM.woody.b },
      { name: "Sandalore", icon: "sandalore", profile: "Soft, milky sandalwood", effect: "The mildest sandalwood effect", role: "Base · medium-long", color: T.FAM.woody.a },
    ],
    note: "Comparing Javanol against Sandalore against natural sandalwood on three strips is one of the best exercises in the whole course.",
  });

  // ============================================================
  // FLORAL SYNTHETICS
  // ============================================================
  L.familyMoodboard(pres, {
    eyebrow: "Synthetic Materials · Family 4 of 7",
    titleText: "Floral Synthetics",
    tag: "03.2 · Synthetics",
    familyName: "Florals",
    famKey: "floral",
    items: [
      { name: "Hedione", icon: "hedione" },
      { name: "Phenylethyl Alcohol", icon: "phenylethyl alcohol" },
      { name: "Benzyl Acetate", icon: "benzyl acetate" },
      { name: "Alpha Ionone", icon: "alpha ionone" },
      { name: "Rose Oxide", icon: "rose oxide" },
    ],
    note: "Isolated floral facets — each one is a single true note pulled out of a whole flower's complexity.",
  });

  L.cardGrid(pres, {
    eyebrow: "Floral Synthetics, In Depth",
    titleText: "Isolated, hyper-true floral facets",
    tag: "03.2 · Synthetics",
    cols: 5,
    cards: [
      { title: "Hedione", sub: "Transparent, jasmine-like material valued for space, diffusion and radiance — not simply \"jasmine.\"", icon: "hedione", color: T.FAM.floral.b },
      { title: "Hydroxycitronellal", sub: "Soft, muguet (lily-of-the-valley) floral. Heart note, medium — a clean, slightly waxy floral lift.", icon: "hydroxycitronellal", color: T.FAM.floral.a },
      { title: "Phenylethyl Alcohol", sub: "Soft, rosy, slightly honeyed. Heart note, medium — the single most-used rose material in the world.", icon: "phenylethyl alcohol", color: T.FAM.floral.b },
      { title: "Benzyl Acetate", sub: "Sweet, fruity-jasmine, pear-like. Top-heart, medium — a bright lift inside a jasmine accord.", icon: "benzyl acetate", color: T.FAM.floral.a },
      { title: "Linalool", sub: "Floral-woody freshness, occurs naturally too. Top-heart, medium — a foundational, near-invisible freshener.", icon: "linalool", color: T.FAM.floral.b },
      { title: "Linalyl Acetate", sub: "Soft, pear-like, lavender-adjacent. Top note, medium — rounds out linalool with a fruity edge.", icon: "linalyl acetate", color: T.FAM.floral.a },
      { title: "Citronellol", sub: "Light, rosy-citrus freshness. Top-heart, medium — a common rose extender and freshener.", icon: "citronellol", color: T.FAM.floral.b },
      { title: "Geraniol", sub: "Rosy, slightly sweet, geranium-adjacent. Heart note, medium — pairs naturally with citronellol.", icon: "geraniol", color: T.FAM.floral.a },
      { title: "Ionones", sub: "Alpha, beta & methyl ionone — powdery violet-woody-suede. Heart-base, medium-long — the entire \"violet\" effect comes from this trio.", icon: "alpha ionone", color: T.FAM.floral.a },
      { title: "Rose Oxide", sub: "Sharp, green, metallic-rosy top facet. Top note, short — a tiny dose gives rose an unmistakable natural sparkle.", icon: "rose oxide", color: T.FAM.floral.b },
    ],
    note: "This is the biggest synthetic family in raw material count — most \"natural-smelling\" florals are actually built from several of these stacked together. Visual association + proper explanation, every time: Hedione shown with jasmine, but explained through space and diffusion, not just a note match.",
  });

  L.splitSlide(pres, {
    eyebrow: "A Useful Distinction",
    titleText: "Hedione vs. Hedione HC",
    tag: "03.2 · Synthetics",
    rows: [
      { h: "Related, not identical", d: "Hedione HC is a distinct material with its own character — a relative of Hedione, not an interchangeable substitute." },
      { h: "Hedione reads bright and citrus-dewy", d: "The classic material — airy, radiant, with a fresh green-citrus edge to its jasmine transparency." },
      { h: "Hedione HC reads smoother and rounder", d: "Generally softer and more discreet, with different diffusion behaviour worth evaluating on its own strip." },
    ],
    drawVisual: (s, x, y, w, h) => {
      const cx = x + w / 2, cy = y + h * 0.42;
      T.iconChip(s, cx - w * 0.14, cy, w * 0.16, "hedione");
      T.iconChip(s, cx + w * 0.14, cy, w * 0.16, "hedione hc");
    },
    visualCaption: "Smell them side by side rather than assuming one simply replaces the other.",
    note: "The point isn't precise technical specification — it's teaching students not to treat named variants as interchangeable without smelling them.",
  });

  L.materialCard(pres, {
    eyebrow: "Materials To Know",
    titleText: "Four floral synthetics to learn cold",
    tag: "03.2 · Synthetics",
    materials: [
      { name: "Hedione", icon: "hedione", profile: "Airy, jasmine-adjacent radiance", effect: "Opens space in a formula", role: "Heart · medium-long · diffusive", color: T.FAM.floral.b, sparkle: true },
      { name: "Phenylethyl Alcohol", icon: "phenylethyl alcohol", profile: "Soft, rosy, honeyed", effect: "The world's most-used rose note", role: "Heart · medium", color: T.FAM.floral.b },
      { name: "Ionones", icon: "alpha ionone", profile: "Powdery violet-woody-suede", effect: "Defines the \"violet\" effect", role: "Heart-base · medium-long", color: T.FAM.floral.a },
      { name: "Rose Oxide", icon: "rose oxide", profile: "Sharp, green, metallic-rosy", effect: "Natural sparkle at a tiny dose", role: "Top · short · potent", color: T.FAM.floral.b },
    ],
    note: "Have students build a five-second \"rose\" from phenylethyl alcohol, citronellol, geraniol and a trace of rose oxide — it's a genuinely convincing exercise.",
  });

  // ============================================================
  // FRESH / GREEN SYNTHETICS
  // ============================================================
  L.familyMoodboard(pres, {
    eyebrow: "Synthetic Materials · Family 5 of 7",
    titleText: "Fresh & Green Synthetics",
    tag: "03.2 · Synthetics",
    familyName: "Fresh & Green",
    famKey: "green",
    items: [
      { name: "Dihydromyrcenol", icon: "dihydromyrcenol" },
      { name: "cis-3-Hexenol", icon: "cis-3-hexenol" },
      { name: "cis-3-Hexenyl Acetate", icon: "cis-3-hexenyl acetate" },
      { name: "Stemone", icon: "stemone" },
      { name: "Triplal", icon: "triplal" },
      { name: "Aldehydes", icon: "aldehyde" },
    ],
    note: "Freshness is not one effect — citrus, green, metallic, aldehydic and watery freshness all feel completely different.",
  });

  L.cardGrid(pres, {
    eyebrow: "Fresh & Green Synthetics, In Depth",
    titleText: "Five kinds of \"fresh\"",
    tag: "03.2 · Synthetics",
    cols: 3,
    cards: [
      { title: "Dihydromyrcenol", sub: "Citrus freshness. Explosive, citrus-aromatic and clean. Top note, medium — the backbone of the 1990s \"fresh\" trend.", icon: "dihydromyrcenol", color: T.FAM.citrus.b },
      { title: "cis-3-Hexenol", sub: "Green freshness. Sharp, cut-grass green — the exact smell of a freshly mown lawn. Top note, short, dosed carefully.", icon: "cis-3-hexenol", color: T.FAM.green.b },
      { title: "cis-3-Hexenyl Acetate", sub: "Softer green freshness. Green-fruity, pear-skin quality — gentler than raw leaf alcohol. Top note, short.", icon: "cis-3-hexenyl acetate", color: T.FAM.green.a },
      { title: "Stemone", sub: "Watery, metallic freshness. Green, faintly melon-stem. Top note, short-medium — an unusual, modern accent.", icon: "stemone", color: T.FAM.green.a },
      { title: "Triplal", sub: "Green, floral-leafy freshness. Top note, medium — more versatile and less bitter than galbanum.", icon: "triplal", color: T.FAM.green.b },
      { title: "Aldehydes (C8–C10–C11–C12 MNA)", sub: "Aldehydic sparkle. Soapy, waxy, metallic lift. Top note, medium — the classic \"aldehydic\" perfume effect.", icon: "aldehyde", color: T.FAM.musk.ink },
    ],
    note: "Walk through this slide by naming the exact type of freshness each material delivers — citrus, green, metallic, aldehydic, watery — so students stop treating \"fresh\" as one idea.",
  });

  L.materialCard(pres, {
    eyebrow: "Materials To Know",
    titleText: "Three fresh synthetics to learn cold",
    tag: "03.2 · Synthetics",
    materials: [
      { name: "Dihydromyrcenol", icon: "dihydromyrcenol", profile: "Explosive citrus-fresh lift", effect: "Extends citrus far past 2 hours", role: "Top · medium · diffusive", color: T.FAM.citrus.b },
      { name: "Aldehydes", icon: "aldehyde", profile: "Sparkling, soapy, waxy", effect: "The classic \"aldehydic\" lift", role: "Top · medium", color: T.FAM.musk.ink },
      { name: "cis-3-Hexenol", icon: "cis-3-hexenol", profile: "Sharp, cut-grass green", effect: "Instant freshly-mown-lawn effect", role: "Top · short · intimate", color: T.FAM.green.b },
    ],
    note: "Dose cis-3-hexenol extremely lightly first — at full strength it reads as more \"lawnmower\" than most students expect.",
  });

  // ============================================================
  // FRUITY SYNTHETICS
  // ============================================================
  L.familyMoodboard(pres, {
    eyebrow: "Synthetic Materials · Family 6 of 7",
    titleText: "Fruity Synthetics",
    tag: "03.2 · Synthetics",
    familyName: "Fruity",
    famKey: "fruity",
    items: [
      { name: "Ethyl Butyrate", icon: "ethyl butyrate" },
      { name: "Fructone", icon: "fructone" },
      { name: "Gamma Undecalactone", icon: "gamma undecalactone" },
      { name: "Gamma Nonalactone", icon: "gamma nonalactone" },
      { name: "Allyl Amyl Glycolate", icon: "allyl amyl glycolate" },
    ],
    note: "The line between \"juicy and realistic\" and \"candy\" is entirely a question of dose — this family teaches restraint fast.",
  });

  L.cardGrid(pres, {
    eyebrow: "Fruity Synthetics, In Depth",
    titleText: "Juicy realism versus candy effect",
    tag: "03.2 · Synthetics",
    cols: 3,
    cards: [
      { title: "Ethyl Butyrate", sub: "Juicy, pear-apple, sharp-fruity. Top note, short — instantly recognisable, easily tips into \"candy\" if overdosed.", icon: "ethyl butyrate", color: T.FAM.fruity.b },
      { title: "Fructone", sub: "Soft, apple-like, gentle fruitiness. Top-heart, medium — a rounder, less sharp fruity effect than most esters.", icon: "fructone", color: T.FAM.fruity.a },
      { title: "Gamma Undecalactone", sub: "Ripe, creamy peach — the definitive lactonic peach material. Heart note, medium-long.", icon: "gamma undecalactone", color: T.FAM.fruity.a },
      { title: "Gamma Nonalactone", sub: "Creamy coconut-peach, milkier than undecalactone. Heart note, medium-long — softer, more gourmand-adjacent.", icon: "gamma nonalactone", color: T.FAM.gourmand.a },
      { title: "Allyl Amyl Glycolate", sub: "Sharp, pineapple-tropical. Top note, medium — a distinctive tropical-fruit accent used in small amounts.", icon: "allyl amyl glycolate", color: T.FAM.fruity.b },
      { title: "Pear & apple esters", sub: "The broad family of fruity esters behind most crisp pear and apple effects. Top note, short — juicy realism, dose-dependent.", icon: "pear", color: T.FAM.fruity.a },
    ],
    note: "The realism-versus-candy line is entirely about dose — the same material that reads as \"ripe peach\" at 0.5% reads as \"bubblegum\" at 3%.",
  });

  L.materialCard(pres, {
    eyebrow: "Materials To Know",
    titleText: "Three fruity synthetics to learn cold",
    tag: "03.2 · Synthetics",
    materials: [
      { name: "Gamma Undecalactone", icon: "gamma undecalactone", profile: "Ripe, creamy peach", effect: "The definitive peach note", role: "Heart · medium-long", color: T.FAM.fruity.a },
      { name: "Ethyl Butyrate", icon: "ethyl butyrate", profile: "Juicy, pear-apple, sharp", effect: "Instant fruity recognition", role: "Top · short · potent", color: T.FAM.fruity.b },
      { name: "Allyl Amyl Glycolate", icon: "allyl amyl glycolate", profile: "Sharp, pineapple-tropical", effect: "A distinctive tropical accent", role: "Top · medium", color: T.FAM.fruity.b },
    ],
    note: "Smell gamma undecalactone at three different dilutions side by side — realism versus candy is the whole lesson in one strip set.",
  });

  // ============================================================
  // GOURMAND SYNTHETICS
  // ============================================================
  L.familyMoodboard(pres, {
    eyebrow: "Synthetic Materials · Family 7 of 7",
    titleText: "Gourmand Synthetics",
    tag: "03.2 · Synthetics",
    familyName: "Gourmand",
    famKey: "gourmand",
    items: [
      { name: "Vanillin", icon: "vanillin" },
      { name: "Ethyl Vanillin", icon: "ethyl vanillin" },
      { name: "Coumarin", icon: "coumarin" },
      { name: "Maltol", icon: "maltol" },
      { name: "Heliotropin", icon: "heliotropin" },
    ],
    note: "This is the family that built an entire modern genre — without it, the last decade of gourmand perfumery doesn't exist.",
  });

  L.cardGrid(pres, {
    eyebrow: "Gourmand Synthetics, In Depth",
    titleText: "Vanilla, tonka, caramel, candy, powder, almond",
    tag: "03.2 · Synthetics",
    cols: 4,
    cards: [
      { title: "Vanillin", sub: "The essence of vanilla, isolated. Base note, very long, richly diffusive — the single most-used gourmand material.", icon: "vanillin", color: T.FAM.gourmand.b },
      { title: "Ethyl Vanillin", sub: "Sharper, several times stronger than vanillin, less \"round.\" Base note, very long — used in tiny amounts for extra lift.", icon: "ethyl vanillin", color: T.FAM.gourmand.b },
      { title: "Coumarin", sub: "The tonka effect: sweet hay, tonka-like warmth. Base note, long — a fougère and gourmand cornerstone, softly powdery.", icon: "coumarin", color: T.FAM.gourmand.b },
      { title: "Ethyl Maltol", sub: "The candy effect: cotton-candy sweetness. Top-heart, medium-long, very diffusive — the defining \"sugar trend\" material.", icon: "ethyl maltol", color: T.FAM.gourmand.ink },
      { title: "Maltol", sub: "The caramel effect: softer, breadier sweetness than ethyl maltol. Heart note, medium — a gentler caramelised-sugar effect.", icon: "maltol", color: T.FAM.gourmand.a },
      { title: "Heliotropin", sub: "Also called Piperonal — the powder / almond effect. Powdery, sweet almond, faintly floral. Heart-base, medium-long.", icon: "heliotropin", color: T.FAM.gourmand.a },
      { title: "Furaneol", sub: "Caramelised, strawberry-like sweetness. Heart note, medium — an unusual, jammy gourmand accent.", icon: "furaneol", color: T.FAM.gourmand.ink },
      { title: "Guaiacol", sub: "Smoky, phenolic, tarry — not a vanilla material. A faint sweet nuance can show in context.", icon: "guaiacol", color: T.FAM.leather.b },
    ],
    note: "Heliotropin and Piperonal are the same material under two names — flag that explicitly, it trips up a lot of self-taught beginners. Guaiacol is easy to mis-file as 'vanilla' because it turns up in vanilla and whisky-barrel accords — but its own character is smoke and phenol, not sweetness.",
  });

  L.materialCard(pres, {
    eyebrow: "Materials To Know",
    titleText: "Four gourmand synthetics to learn cold",
    tag: "03.2 · Synthetics",
    materials: [
      { name: "Vanillin", icon: "vanillin", profile: "The essence of vanilla, isolated", effect: "Warm, sweet, endlessly useful", role: "Base · very long · diffusive", color: T.FAM.gourmand.b },
      { name: "Coumarin", icon: "coumarin", profile: "Sweet hay, tonka-like warmth", effect: "Rounds and sweetens", role: "Base · long · powdery", color: T.FAM.gourmand.b },
      { name: "Ethyl Maltol", icon: "ethyl maltol", profile: "Cotton-candy sweetness", effect: "Instant gourmand lift", role: "Top-heart · medium-long", color: T.FAM.gourmand.ink },
      { name: "Heliotropin", icon: "heliotropin", profile: "Powdery, sweet almond", effect: "A soft, cosmetic-powder facet", role: "Heart-base · medium-long", color: T.FAM.gourmand.a },
    ],
    note: "This family rewards restraint more than almost any other — a little goes further here than beginners expect.",
  });

  // ============================================================
  // COMMERCIAL BASES & SPECIALITIES
  // ============================================================
  L.rememberSlide(pres, {
    tag: "Beyond Single Materials",
    text: "A base is a formula\ninside your formula.",
    note: "Land this firmly before introducing Rose Givco — it reframes everything that follows as professional practice, not a shortcut.",
  });

  L.splitSlide(pres, {
    eyebrow: "Commercial Bases & Specialities",
    titleText: "What a base actually is",
    tag: "03.2 · Synthetics",
    rows: [
      { h: "A pre-composed mixture that acts like a raw material", d: "A base is built in advance to deliver a floral, woody, amber, musk or other effect — and can be dropped into a formula and treated much like one complex ingredient." },
      { h: "Why perfumers reach for one", d: "Speed, consistency, complexity, structure and polish — plus reconstructing notes that are genuinely difficult to build from single materials alone." },
      { h: "Not a finished perfume", d: "Using a base doesn't mean the work is finished — it's a highly capable starting point, extended and modified like any other material." },
    ],
    drawVisual: (s, x, y, w, h) => { T.iconChip(s, x + w / 2, y + h * 0.44, w * 0.3, "base", { fam: "amber" }); },
    visualCaption: "Focus on character and use — never confidential internal compositions.",
    note: "Keep this honest: we teach how to recognise and use a base, not exact proprietary recipes.",
  });

  {
    const s = pres.addSlide();
    T.bg(s, C.paper);
    T.cornerWash(s, { corner: "br", color: L.heroFor("Rose Givco"), transparency: 90 });
    T.kicker(s, "Rose Bases · A Named Example", { color: C.goldDk });
    T.moduleTag(s, "03.2 · Synthetics", { color: C.taupe });
    T.title(s, "Rose Givco", { color: C.ink, size: 32, y: 0.85, w: 8.9 });
    const cx = 3.4, cy = 4.0, r = 1.45;
    T.iconChip(s, cx, cy, r, "rose givco", { ringW: 0.045 });
    T.badge(s, cx - 0.7, cy + r + 0.25, "Commercial Base", { color: C.berry, w: 1.4 });
    const rx = 5.9, rw = T.PAGE_W - T.MARGIN - rx;
    const rows = [
      ["What it is", "A commercial rose base / speciality — a ready-built rosy floral character, more complex than any single rose chemical used alone."],
      ["Useful for", "Constructing rose effects quickly, and as part of a larger floral structure — not a finished perfume by itself."],
      ["Typical role", "Can support or replace parts of a hand-built rose accord, depending on how much of the formula's rose character it's asked to carry."],
      ["Worth remembering", "Using Rose Givco does not automatically make the final fragrance a finished rose perfume — it's a starting body, not the destination."],
    ];
    let ry = 1.95;
    rows.forEach(([lbl, val], i) => {
      const g = i + 1;
      s.addText(lbl.toUpperCase(), { x: rx, y: ry, w: rw, h: 0.24, fontFace: T.FONT_BODY, fontSize: 10, bold: true, color: C.berry, charSpacing: 1.5, isTextBox: true, margin: 0, ...L.bld(g) });
      s.addText(val, { x: rx, y: ry + 0.24, w: rw, h: 0.7, fontFace: T.FONT_BODY, fontSize: 12, color: C.ink, isTextBox: true, margin: 0, lineSpacingMultiple: 1.15, ...L.bld(g) });
      ry += 0.24 + 0.7 + 0.1;
    });
    T.note(s, "Present Rose Givco as one well-known example of a category — the modification slide that follows is the more universally useful lesson.");
    L.transitionTag(s, "fade");
    T.pageNum(s, L.nextPage(), { color: C.taupe });
    T.brandFooter(s);
  }

  L.equationSlide(pres, {
    eyebrow: "A Practical Skill",
    titleText: "How a rose base could be modified",
    tag: "03.2 · Synthetics",
    terms: [
      { label: "Rose Givco", icon: "rose givco", fam: "floral" },
      { label: "+ Hedione → more airy / diffusive", icon: "hedione", fam: "floral", operator: "+" },
      { label: "+ green materials → greener rose", icon: "violet leaf", fam: "green", operator: "+" },
      { label: "+ patchouli → darker rose", icon: "patchouli", fam: "woody", operator: "+" },
      { label: "+ musks → cleaner, modern rose", icon: "galaxolide", fam: "musk", operator: "+" },
    ],
    note: "State clearly on camera: these are educational examples of direction, not fixed formulas — the same four moves work on almost any floral base.",
  });

  L.cardGrid(pres, {
    eyebrow: "Beyond Rose",
    titleText: "Other base types worth knowing",
    tag: "03.2 · Synthetics",
    cols: 5,
    cards: [
      { title: "Jasmine bases", sub: "Rich, indolic, heady florals — major houses each keep proprietary jasmine specialities.", icon: "jasmine", color: T.FAM.floral.b },
      { title: "Muguet bases", sub: "Lily-of-the-valley — always synthetic, since muguet yields no usable natural extract.", icon: "hydroxycitronellal", color: T.FAM.floral.a },
      { title: "Orris / violet bases", sub: "Powdery, cool, carroty-woody — built around one of perfumery's costliest naturals.", icon: "orris", color: T.FAM.floral.a },
      { title: "Sandalwood bases", sub: "Creamy, milky wood, blended from naturals and woody synthetics.", icon: "sandalwood", color: T.FAM.woody.b },
      { title: "Amber bases", sub: "Classic labdanum-led warmth, or a modern woody-amber build.", icon: "labdanum", color: T.FAM.amber.b },
      { title: "Musk bases", sub: "The skin-layer of a formula — clean, soft or animalic depending on the blend.", icon: "galaxolide", color: T.FAM.musk.ink },
      { title: "Leather bases", sub: "Suede, clean, or smoky leather texture — built for effect, not literal realism.", icon: "leather", color: T.FAM.leather.b },
      { title: "Fruit bases", sub: "Convincing tropical or stone-fruit character, built from stacked fruity esters and lactones.", icon: "apple", color: T.FAM.fruity.b },
      { title: "Proprietary", sub: "Givaudan, Firmenich, IFF, Symrise and Robertet each maintain their own bases across these categories.", icon: "base", color: T.FAM.amber.ink },
    ],
    note: "Where an exact commercial product name isn't certain, describe the category honestly rather than guessing at a name — that's a deliberate choice.",
  });

  L.heroSlide(pres, {
    eyebrow: "Now For The Fun Part",
    titleText: "Superpower materials",
    tag: "03.2 · Synthetics",
    dark: true,
    drawVisual: (s, x, y, w, h) => {
      const cx = x + w / 2, cy = y + h / 2;
      T.ringFrame(s, cx, cy, w * 0.22, C.gold, { thickness: 0.03, dot: true, dotColor: C.gold });
      T.ringFrame(s, cx, cy, w * 0.32, C.rust, { thickness: 0.018 });
      T.drawMolecule(s, cx, cy, w * 0.12, C.olive, { nodeColor: C.gold, bondColor: C.stone });
    },
    caption: "A handful of materials that can transform a formula at less than 1% of the concentrate.",
    note: "Build anticipation for the card grid that follows — this is where students realise how disproportionate a material's impact can be.",
  });

  L.cardGrid(pres, {
    eyebrow: "The Transformers",
    titleText: "Small doses, massive effect",
    tag: "03.2 · Synthetics",
    dark: true,
    cols: 3,
    cards: [
      { title: "Hedione", sub: "Opens space and diffusion — makes an entire formula feel airier.", icon: "hedione", color: T.FAM.floral.a },
      { title: "Iso E Super", sub: "Adds volume and a transparent woody glow around everything else.", icon: "iso e super", color: T.FAM.woody.a },
      { title: "Ambrox materials", sub: "Radiance and persistence — extends how far and how long a formula reads.", icon: "ambroxan", color: T.FAM.amber.a },
      { title: "Musks", sub: "Body, texture and fixation — the skin-like glue that holds a formula together.", icon: "musk", color: T.FAM.musk.a },
      { title: "Dihydromyrcenol", sub: "An explosive, fresh lift — instantly brightens an opening.", icon: "dihydromyrcenol", color: T.FAM.citrus.a },
      { title: "Ethyl Maltol", sub: "Sweetness and gourmand impact — can flip a formula's whole character.", icon: "ethyl maltol", color: T.FAM.gourmand.a },
    ],
    note: "The takeaway: percentage and impact are not linear. A 0.3% dose of the right material can outweigh 5% of something else.",
  });

  L.rememberSlide(pres, {
    tag: "End of Module 03.2",
    text: "A fraction of a percent can change everything.\nSynthetics are precision instruments,\nnot shortcuts.",
    note: "Close with confidence — students should leave excited to experiment with synthetics, not intimidated by them.",
  });
};
