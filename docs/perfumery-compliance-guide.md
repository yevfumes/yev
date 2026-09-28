# Perfumery Compliance: A Practical Guide for Independent Perfumers

*A training handbook for aspiring perfumers and small independent fragrance brands*

**Written:** September 2026 · **IFRA Standards in force at time of writing:** 51st Amendment (52nd Amendment expected to be notified late 2026 — see [Section 2](#2-understanding-ifra))

---

> ⚠️ **DISCLAIMER**
>
> **This guide is for educational purposes only and is not legal, regulatory or toxicological advice. Regulations and IFRA Standards change over time. Always verify requirements against current official guidance, supplier documentation, and where appropriate a qualified cosmetic safety assessor.**
>
> This guide covers the UK, EU and US. **Laws differ between countries and regions — you must do your own research into the rules for your country, your local area, and every market you sell or ship to.**

---

## How to use this guide

- **Complete beginners:** read Sections 1–7 in order, then jump to the [Cheat Sheet](#perfumery-compliance-cheat-sheet) at the end.
- **Making your first product for sale:** read everything, and pay special attention to Sections 12–17 (CPSR, PIF, UK, EU, US, transport).
- **Already selling:** use Sections 18–22 (mistakes, worked example, workflow, spreadsheet, research method) as an audit checklist.
- **Outside the UK, EU or US?** Read [Section 1.4](#14-this-guide-covers-the-uk-eu-and-us--check-the-laws-where-you-are) first — you must research your own country's laws.

### Where to find the IFRA calculation examples

This guide teaches IFRA maths through step-by-step worked examples, each showing the full calculation:

| What you want to calculate | Worked examples |
|---|---|
| A material's % in the **finished perfume** | [Examples 1 and 2](#53-example-1) (Sections 5.3–5.4) |
| The **most** of a restricted material you can put in a concentrate at 10%, 15%, 20%, 25% and 30% dosage | [Example 3](#55-example-3--working-backwards-from-a-limit) (Section 5.5) |
| Correcting for dosing **by volume** instead of weight | [Section 5.6](#56-volume-vs-weight--a-practical-trap) |
| The **maximum dosage** of a whole concentrate, and finding the **limiting material** | [Examples 6A–6D](#62-worked-examples) (Section 6) |
| Materials used as **dilutions** (10%, 1%, 50%) | [Section 7.3](#73-worked-examples) |
| A restricted **constituent inside an essential oil** | [Example 8A](#83-simplified-educational-example) (Section 8.3) |
| **Allergen** labelling (leave-on vs rinse-off, trace amounts) | [Examples 11A–11C](#114-how-to-calculate-allergen--in-the-finished-product) (Section 11.4) |
| A **full compliance review** of a 13-material perfume | [Section 19](#19-worked-compliance-example) |
| Doing it all in **Excel / Google Sheets** | [Section 21](#21-compliance-spreadsheet-structure) |

### About the numbers in this guide

This guide **never invents real IFRA limits**. Wherever a limit is used in a calculation, it is either:

- clearly marked **HYPOTHETICAL** (an educational number chosen to make the maths easy), **or**
- described without a number, with instructions on where to find the real value.

Do **not** copy any hypothetical number from this guide into a real formula or document. Always read the current Standard in the [IFRA Standards Library](https://ifrafragrance.org/standards-library).

Fixed legal thresholds that come from law (for example the EU/UK allergen labelling thresholds of 0.001% and 0.01%) are real and are cited to their sources.

### Callout boxes used in this guide

> ⚠️ **Important** — something that can cause a real compliance problem.

<!-- -->

> ❌ **Common Mistake** — an error that beginners (and some professionals) make.

<!-- -->

> 📘 **Example** — a worked or practical example.

<!-- -->

> ✅ **Good Practice** — a habit that makes compliance easier.

---

## Table of Contents

1. [What Does "Compliance" Mean in Perfumery?](#1-what-does-compliance-mean-in-perfumery)
2. [Understanding IFRA](#2-understanding-ifra)
3. [Understanding IFRA Categories](#3-understanding-ifra-categories)
4. [How to Read an IFRA Standard](#4-how-to-read-an-ifra-standard)
5. [How to Calculate IFRA Compliance](#5-how-to-calculate-ifra-compliance)
6. [Calculating Maximum Fragrance Dosage](#6-calculating-maximum-fragrance-dosage)
7. [Raw Materials vs Dilutions](#7-raw-materials-vs-dilutions)
8. [Natural Materials and Restricted Constituents](#8-natural-materials-and-restricted-constituents)
9. [How to Navigate Supplier Documents](#9-how-to-navigate-supplier-documents)
10. [IFRA Certificates for Finished Fragrance Compounds](#10-ifra-certificates-for-finished-fragrance-compounds)
11. [Fragrance Allergens](#11-fragrance-allergens)
12. [CPSR — Cosmetic Product Safety Report](#12-cpsr--cosmetic-product-safety-report)
13. [Product Information File (PIF)](#13-product-information-file-pif)
14. [UK Cosmetic Compliance](#14-uk-cosmetic-compliance)
15. [EU Cosmetic Compliance](#15-eu-cosmetic-compliance)
16. [United States Overview](#16-united-states-overview)
17. [SDS, CLP and Transport](#17-sds-clp-and-transport)
18. [Common IFRA Mistakes](#18-common-ifra-mistakes)
19. [Worked Compliance Example](#19-worked-compliance-example)
20. [Compliance Workflow for a Perfumer (Printable Checklist)](#20-compliance-workflow-for-a-perfumer)
21. [Compliance Spreadsheet Structure](#21-compliance-spreadsheet-structure)
22. [How to Research an Ingredient Properly](#22-how-to-research-an-ingredient-properly)
23. [Glossary](#23-glossary)
24. [Useful Official Resources](#24-useful-official-resources)
25. [Perfumery Compliance Cheat Sheet](#perfumery-compliance-cheat-sheet)

---

## 1. What Does "Compliance" Mean in Perfumery?

"Compliance" is not one thing. It is a collection of **separate systems**, each answering a different question. A perfume can pass one and fail another.

### 1.1 The building blocks

| Term | What it is | The question it answers | Legally required? |
|---|---|---|---|
| **IFRA compliance** | Meeting the fragrance industry's own safety Standards, published by the International Fragrance Association | "Is each fragrance ingredient used at or below the level IFRA considers safe for this type of product?" | IFRA Standards are a **voluntary industry self-regulation** system. They are compulsory for IFRA members and widely demanded by customers and safety assessors — but they are not, in themselves, UK/EU/US law. |
| **Cosmetic safety assessment** | A scientific assessment of the *whole finished product* by a qualified person | "Is this finished product safe for human health under normal and reasonably foreseeable use?" | **Yes** in the UK and EU (Article 10 of the Cosmetics Regulation). The US has a different "safety substantiation" duty (Section 16). |
| **CPSR** | Cosmetic Product Safety Report — the written output of the safety assessment | "Where is the documented evidence that the product is safe?" | **Yes** in the UK and EU. |
| **PIF** | Product Information File — the complete technical dossier for a cosmetic | "Can the Responsible Person show an inspector everything about this product?" | **Yes** in the UK and EU. |
| **SDS** | Safety Data Sheet — hazard communication for *chemicals and mixtures* | "What are the hazards of handling this raw material/concentrate, and how should it be stored, handled, transported and disposed of?" | Required for hazardous substances/mixtures supplied to professional users under REACH/UK REACH. Finished cosmetics for consumers are exempt. |
| **CLP** | Classification, Labelling and Packaging of chemicals (EU Regulation (EC) No 1272/2008; GB CLP in Great Britain) | "Is this chemical/mixture hazardous, and how must its container be labelled?" | **Yes** for raw materials and fragrance concentrates. Finished cosmetic products in the hands of the consumer are exempt from CLP labelling. |
| **Allergen declarations** | Supplier statements listing regulated fragrance allergens present in a material | "Which labelled allergens are present, and at what %?" | The supplier document is a commercial tool; the **labelling of allergens on the finished cosmetic** is a legal requirement in the UK/EU. |
| **Ingredient documentation** | Specifications, COAs, TDSs, GC/MS, INCI names, origin, etc. | "Exactly what is this material, and is it the same every batch?" | Needed to build the CPSR and PIF. |
| **Product notification** | Registering the product with the authority before sale (SCPN in GB, CPNP in the EU, registration & listing in the US) | "Does the regulator know this product is on the market, and who is responsible?" | **Yes**, in all three (with some US small-business exemptions). |
| **Labelling** | The information on the pack | "Does the consumer get legally required information (ingredients, warnings, Responsible Person, batch, quantity, etc.)?" | **Yes**. |
| **Stability/compatibility testing** | Testing that the product stays safe and acceptable over time and in its packaging | "Will this perfume still be safe and as-described after months on a shelf, in this bottle, with this pump?" | Stability information is a required part of the CPSR (Annex I, Part A) in the UK/EU. |
| **GMP** | Good Manufacturing Practice — organised, hygienic, traceable manufacturing (ISO 22716 is the reference standard) | "Was this made in a controlled, traceable, repeatable way?" | **Yes** in UK/EU (Article 8). US GMP regulations are being developed under MoCRA. |

### 1.2 Why "IFRA compliant" does NOT mean "legal to sell"

An IFRA Certificate tells you only that the **fragrance concentrate**, used at or below a stated level in a stated product category, meets the **IFRA Standards**. It says nothing about:

- whether the **finished product** has been safety-assessed (CPSR);
- whether a **Responsible Person** exists;
- whether the product has been **notified** (SCPN/CPNP);
- whether the **label** is correct (allergens, ingredients, warnings, address, batch code);
- whether the product was made under **GMP**;
- whether the product complies with **legal bans and restrictions** that are separate from IFRA (e.g. Annexes II and III of the UK/EU Cosmetics Regulation);
- whether the **packaging** is compatible and the product is **stable**;
- whether the product can legally be **shipped**.

> ⚠️ **Important**
>
> IFRA compliance is **one input** into the safety assessment. It is necessary in practice, but it is never sufficient on its own.

<!-- -->

> ❌ **Common Mistake**
>
> "My supplier gave me an IFRA Certificate, so my perfume is compliant."
>
> **Reality:** the certificate covers the concentrate against the IFRA Standards only. You still need everything else in this section before selling a finished cosmetic in the UK or EU.

### 1.3 Three different roles — and how responsibility changes

| Situation | What you are legally doing | Main obligations (UK/EU view) | You are usually **not** responsible for… |
|---|---|---|---|
| **1. A perfumer creating a fragrance concentrate** (for their own use, testing, or as a creative service) | Formulating a chemical **mixture** | Knowing your raw materials; keeping formula records; calculating IFRA limits; managing lab safety (SDSs for your raw materials). If you *supply* the concentrate to anyone, see row 2. | The finished cosmetic's CPSR/notification — unless you also put it on the market (row 3). |
| **2. A fragrance house supplying concentrate to another business** | Supplying a chemical **mixture** to a professional user | **Chemical law:** hazard classification and CLP labelling of the concentrate; SDS (REACH/UK REACH Article 31) where the mixture is hazardous; poison-centre notification (UFI) where applicable in the EU. **Commercial/IFRA:** IFRA Certificate of Conformity, allergen declaration, and information the customer's safety assessor needs (often under confidentiality). | The customer's CPSR, notification and cosmetic labelling — those belong to the brand's Responsible Person. You must give them accurate information to do it. |
| **3. A brand placing a finished alcoholic perfume on the market** | Placing a **cosmetic product** on the market | **Cosmetics law:** Responsible Person, safety assessment/CPSR, PIF, GMP, notification (SCPN/CPNP), cosmetic labelling (including allergens), adverse-effect handling. Plus transport rules when shipping. | Chemical CLP labelling on the *consumer* bottle (cosmetics are exempt in their finished state), but CLP/SDS obligations still apply to the concentrate and alcohol you store and handle. |

> 📘 **Example — one person, several roles**
>
> Sam formulates a concentrate (Role 1), bulks it in ethanol, bottles it, and sells it under their own brand (Role 3). Sam also sells the same concentrate to a candle maker (Role 2).
>
> - For the perfume, Sam needs a CPSR, PIF, Responsible Person, notification and compliant labels.
> - For the concentrate sold to the candle maker, Sam needs CLP classification and labelling, an SDS if hazardous, and an IFRA Certificate covering **Category 12** (candles) — plus, if the candle maker sells in the UK/EU, the candle itself has its own **CLP** obligations (candles are not cosmetics).

<!-- -->

> ⚠️ **Important — "perfume oil" sold to consumers**
>
> A concentrate sold to consumers **to put on their skin** (e.g. a roll-on perfume oil) is a **cosmetic product**. A concentrate sold to consumers **for DIY blending** is a **chemical mixture** and falls under CLP (and you should not market it for skin application without meeting cosmetics law). The intended use you communicate determines which rules apply.

### 1.4 This guide covers the UK, EU and US — check the laws where you are

The legal sections of this guide (Sections 11–17) cover **Great Britain, the European Union and the United States** only. The IFRA calculation methods apply everywhere, because IFRA Standards are international, but **the laws that decide whether you can sell a perfume are national (and sometimes regional or local)**.

> ⚠️ **Important — do your own research for your country and local laws**
>
> If you live, manufacture, or sell anywhere else — or ship to customers in another country — you must research the requirements that apply **there**. For example:
> - **Canada** has its own Cosmetic Regulations under Health Canada, including a Cosmetic Notification Form and fragrance allergen disclosure requirements phased in from 2026 to 2028.
> - **Australia, New Zealand, Japan, China, South Korea, the Gulf states, India, Brazil** and many other countries each have their own cosmetic, chemical, labelling, import and customs rules — some very different from the UK/EU model.
> - **Within a country**, there may be extra **state, provincial or local** rules (for example, US states such as California have their own cosmetic ingredient laws), as well as rules on alcohol, business registration, consumer protection and taxation.
> - **When you ship abroad**, the importing country's rules usually apply to the product your customer receives, not just the rules where you are based.
>
> **How to research:** start with your national **cosmetics regulator** or health/consumer-product-safety authority, read the official legislation and guidance, and — before selling — confirm with a qualified local regulatory consultant, safety assessor, or trade association. Treat blogs, forums and marketplace advice as starting points only.

---

## 2. Understanding IFRA

### 2.1 What is IFRA?

The **International Fragrance Association (IFRA)** is the global representative body of the fragrance industry. Its members (fragrance houses and national associations) cover a large majority of global fragrance production. IFRA runs a **self-regulatory** safety programme for fragrance ingredients.
Source: [IFRA — IFRA Standards](https://ifrafragrance.org/initiatives-positions/safe-use-fragrance-science/ifra-standards)

### 2.2 What are the IFRA Standards?

The **IFRA Standards** are documents that **ban, limit, or set purity criteria** for certain fragrance ingredients. Each Standard gives the maximum acceptable concentration **in the finished consumer product** for each product category.

They are based on safety assessments performed by the **Research Institute for Fragrance Materials (RIFM)** and reviewed by an independent **Expert Panel for Fragrance Safety**. Common reasons for a Standard include:

- **dermal sensitisation** (causing skin allergy) — assessed with a Quantitative Risk Assessment (QRA) approach, which is why limits differ by category;
- **systemic toxicity**;
- **phototoxicity** (reaction on sun-exposed skin — e.g. furocoumarins in some citrus oils);
- **impurities or oxidation products**.

Sources: [IFRA — Understanding the Standards](https://ifrafragrance.org/understanding-standards), [IFRA — Using the Standards](https://ifrafragrance.org/using-the-standards)

### 2.3 What is the IFRA Code of Practice?

The **IFRA Code of Practice** is the industry's overall commitment to safe use of fragrance. The IFRA Standards are a major part of it. It also covers good manufacturing and handling of fragrance ingredients and mixtures. Compliance is compulsory for IFRA members.
Source: [IFRA Code of Practice](https://ifrafragrance.org/initiatives-positions/safe-use-fragrance-science/ifra-standards/ifra-code-of-practice)

### 2.4 How IFRA Standards are updated — "Amendments"

IFRA publishes changes in batches called **Amendments** (e.g. "49th Amendment", "51st Amendment"). Each Amendment:

1. goes through a **consultation** period;
2. is formally **notified** (published);
3. has **implementation dates** — usually separate dates for **new creations** and **existing creations**, and sometimes different dates for prohibitions versus restrictions/specifications.

**Status at the time of writing (September 2026):**

| Amendment | Status | Key dates (verify on IFRA's site) |
|---|---|---|
| **51st Amendment** | In force. Notified 30 June 2023. | Reported implementation dates: *prohibitions* — new creations 30 Aug 2023, existing creations 30 July 2024; *restrictions & specifications* — new creations 30 March 2024, existing creations 30 Oct 2025. ([IFRA notification](https://ifrafragrance.org/latest-updates/press-releases/notification-of-the-51st-amendment-to-the-ifra-standards); summary in [UL Solutions](https://www.ul.com/news/ifra-notifies-51st-amendment-ifra-standards)) |
| **52nd Amendment** | Consultation ran 12 Dec 2025 – 12 June 2026. Formal notification expected **around late November 2026**. | Reported to propose ~51 new and ~18 revised Standards, removal of several outdated Standards, and a revised **furocoumarin** approach (a cumulative limit covering several phototoxic substances found in citrus oils). ([IFRA — 52nd Amendment consultation](https://ifrafragrance.org/latest-updates/ifra-news/ifra-standards---52nd-amendment-consultation); [IFRA — consultation closed](https://ifrafragrance.org/latest-updates/ifra-news/ifra-52nd-amendment-consultation-closed)) |

> ⚠️ **Important**
>
> IFRA implementation dates relate to the date the **fragrance mixture** is placed on the market (i.e. supplied by the fragrance supplier), **not** the date a finished consumer product reaches a shop shelf. Read the "Guidance for the use of IFRA Standards" for the exact definitions of *new* and *existing* creations.

<!-- -->

> ⚠️ **Important — the 52nd Amendment**
>
> If you are reading this after late 2026, the 52nd Amendment has probably been notified. **Check every restricted material in your formulas against the new Standards**, especially citrus oils (furocoumarins) and any material that gains a new Standard. Your supplier's certificates will need to be reissued against the new Amendment.

### 2.5 Why restrictions change

- **New safety data** (new studies, clinical reports, better exposure data).
- **Better methods** (e.g. updated sensitisation risk assessment).
- **Updated consumer exposure data** (how much of a product people actually use).
- **New materials** entering common use.
- **Regulatory developments** (e.g. a substance classified as CMR under chemicals law).

Limits can go **down, up, or be removed**, and materials can move from restricted to prohibited.

### 2.6 Why supplier documents must match the current Amendment

A supplier's IFRA Certificate states which Amendment it was calculated against. A certificate issued under the **49th** Amendment tells you nothing reliable about the **51st** (or the upcoming 52nd).

> ✅ **Good Practice**
>
> Record the **Amendment number** and **issue date** of every IFRA document in your records. When a new Amendment is notified, request updated certificates from every supplier.

### 2.7 The four kinds of material

| Type | Meaning | What you do |
|---|---|---|
| **Prohibited** | Must not be used as a fragrance ingredient (in any category). | Do not use. Check naturals and bases for it as a *constituent* too. |
| **Restricted** | May be used, but only up to a maximum level per product category. | Calculate finished-product levels (Sections 5–6). |
| **Subject to specification** | May be used only if it meets a purity/quality criterion (e.g. limits on an impurity, an oxidation measure such as peroxide value, or a particular botanical source/processing). Some Standards combine a specification **and** a restriction. | Get supplier confirmation (spec/COA/IFRA statement) that the material meets the specification. |
| **Unrestricted (no IFRA Standard)** | IFRA has not issued a Standard for it. | Use responsibly — see below. |

### 2.8 "No IFRA restriction" ≠ "unlimited use"

A material with **no IFRA Standard** can still be limited by:

- **Law:** UK/EU Cosmetics Regulation **Annex II** (prohibited substances) and **Annex III** (restricted substances, including allergen labelling). Some substances are banned by law for other reasons (e.g. classification as carcinogenic, mutagenic or toxic for reproduction — "CMR").
- **The safety assessor:** the CPSR assessor may set a lower level based on toxicology, irritation, or the specific product.
- **Hazard classification:** a material may be a skin sensitiser or irritant under CLP even without an IFRA Standard.
- **Supplier recommendations:** usage advice based on odour strength, stability, discolouration, or safety data.
- **Practical factors:** discolouration, instability, reactivity with other materials.

> 📘 **Example**
>
> Several materials were banned in EU cosmetics by law (e.g. **butylphenyl methylpropional**, "Lilial", banned in the EU from March 2022 due to reproductive toxicity classification; **HICC**/"Lyral", **atranol** and **chloroatranol** banned in EU cosmetics under Regulation (EU) 2017/1410). Legal bans can arrive through chemical classification routes, independent of IFRA's timetable. Always check the current Annex II of the relevant cosmetics regulation.  
> Sources: [EU CosIng database](https://single-market-economy.ec.europa.eu/sectors/cosmetics/cosmetic-ingredient-database_en)

---

## 3. Understanding IFRA Categories

### 3.1 Why categories exist

Skin exposure is very different for a lipstick, a perfume, a shower gel and a candle. IFRA groups products into **categories** based on how much of the product reaches the skin (or mouth, eyes, etc.) and for how long. **Each IFRA Standard gives a separate limit for each category.**

Since the 49th Amendment there are **12 main categories**, several with sub-categories (e.g. 5A–5D, 7A–7B, 10A–10B, 11A–11B).

### 3.2 IFRA Category 4 — Fine Fragrance

**Category 4** covers products related to **fine fragrance** — the category most independent perfumers work in. Products commonly assigned to Category 4 include:

- Eau de Parfum, Eau de Toilette, Parfum/Extrait, Eau de Cologne (hydroalcoholic fine fragrances);
- non-hydroalcoholic fine fragrances such as perfume oils and solid perfumes;
- certain other fragranced products that IFRA's categorisation guidance places here.

> ⚠️ **Important — borderline products**
>
> Body mists, hair mists, aftershaves, scented body oils, fragranced deodorant sprays and similar products may **not** be Category 4, or may be placed in Category 4 only under specific descriptions. **Always look up your exact product type** in IFRA's official product-category guidance (in the *Guidance for the use of IFRA Standards*, available from the [IFRA Standards documentation page](https://ifrafragrance.org/initiatives-positions/safe-use-fragrance-science/ifra-standards/ifra-standards-documentation)). Do not guess.

### 3.3 Commonly encountered categories

| IFRA Category | Plain-English description | Typical examples |
|---|---|---|
| **1** | Products applied to the lips | Lipstick, lip balm |
| **2** | Products applied to the underarms (axillae) | Deodorants, antiperspirants |
| **3** | Products applied to the face/body using fingertips | Certain eye-area and facial products (see IFRA guidance) |
| **4** | Fine fragrance | EDP, EDT, parfum, cologne, perfume oils |
| **5A** | Body lotions applied with the hands (leave-on) | Body lotion, body cream |
| **5B** | Face moisturisers | Face cream |
| **5C** | Hand creams | Hand cream |
| **5D** | Baby creams, oils, talcs | Baby lotion |
| **6** | Products with oral and lip exposure | Toothpaste, mouthwash |
| **7A** | Rinse-off hair products | Shampoo, rinse-off conditioner |
| **7B** | Leave-on hair products | Hair sprays, styling products |
| **8** | Products with significant anogenital exposure | Intimate wipes and similar |
| **9** | Rinse-off body products | Bar soap, shower gel |
| **10A / 10B** | Household care (non-spray / spray) | Detergents, surface cleaners / household aerosols |
| **11A / 11B** | Products with intended skin contact but minimal transfer from an inert substrate (without / with UV exposure) | Certain fragranced articles (see IFRA guidance) |
| **12** | Products not intended for skin contact, minimal/insignificant transfer | Candles, reed diffusers, plug-in air fresheners |

*Table simplified for teaching. The official category definitions and full example lists are in IFRA's Guidance document — use that, not this table, for final decisions.*

### 3.4 Same formula, different limits

Because each category has its own limit, **the same concentrate** can have different maximum use levels:

> 📘 **Example — one concentrate, many products (HYPOTHETICAL numbers)**
>
> A supplier's IFRA Certificate for "Rose Accord 123" might state something like:
>
> | Category | Product | Max use of the concentrate in finished product |
> |---|---|---|
> | 4 | Fine fragrance | 12.5% |
> | 5A | Body lotion | 2.1% |
> | 9 | Soap / shower gel | 9.8% |
> | 12 | Candle | 100% |
>
> *All numbers are HYPOTHETICAL.* The pattern is the lesson: a concentrate may be allowed at a higher dosage in a candle than in a lotion, because exposure is completely different. The limiting ingredient can also be **different** in each category.

<!-- -->

> ❌ **Common Mistake**
>
> Using the Category 4 figure for a body lotion or body mist "because it's the same scent". The category follows the **finished product**, not the fragrance.

---

## 4. How to Read an IFRA Standard

### 4.1 The structure of a Standard

Every IFRA Standard is a separate document (PDF) in the [IFRA Standards Library](https://ifrafragrance.org/standards-library). The library is searchable by name and CAS number. A typical Standard includes:

| Section | What to look for |
|---|---|
| **Name** | The material name IFRA uses. |
| **CAS number(s)** | One or more CAS Registry Numbers covered. |
| **Synonyms** | Other names, including common trade names and chemical names. |
| **Amendment / publication / implementation dates** | Which Amendment the version belongs to and when it applies. |
| **Type of Standard** | Prohibition, Restriction, Specification (or combination). |
| **Intrinsic property driving risk management** | E.g. dermal sensitisation, systemic toxicity, phototoxicity. |
| **Limits by category** | A table with the maximum concentration **in the finished product** for each IFRA category. |
| **Specification details** | Purity criteria, impurity limits, etc., if any. |
| **Contributions from other sources** | Whether the limit includes amounts coming from natural materials or other ingredients. |
| **Notes / footnotes** | Exceptions, special conditions, combined limits. |
| **Expert Panel rationale / references** | The scientific basis (RIFM assessment). |

### 4.2 A walk-through with a FICTIONAL Standard

The following mock-up is **invented for teaching**. It does not represent any real material.

> 📘 **FICTIONAL IFRA Standard (teaching mock-up — not real)**
>
> **Name:** Exampleol  
> **CAS No.:** 00000-00-0 *(fictional)*  
> **Synonyms:** 2-Example-3-teachanol; "Teachal"  
> **Amendment:** 51st · **Type:** RESTRICTION  
> **Intrinsic property driving risk management:** Dermal sensitisation
>
> | Category | Max concentration in finished product |
> |---|---|
> | 1 | 0.0X% |
> | 2 | 0.0X% |
> | 3 | 0.X% |
> | **4** | **0.60%** *(HYPOTHETICAL)* |
> | 5A | 0.1X% |
> | … | … |
> | 12 | No restriction |
>
> **Contributions from other sources:** Exampleol can be present in some essential oils. The limits apply to the **total** concentration from all sources.  
> **Notes:** Material must meet the purity specification in the Specification section.

**How to read it:**

1. **Material name, CAS, synonyms** — confirm that *your* material is the same substance. Check your supplier's SDS/specification CAS and name match.
2. **Restriction type** — here it's a *restriction*, so there's a maximum level.
3. **Category 4 limit** — 0.60% (hypothetical) of the **finished product**, i.e. of the finished perfume including alcohol, not of the concentrate.
4. **Raw material or constituent?** — the "contributions from other sources" note tells you the limit applies to the **substance wherever it comes from**, including naturals that contain it. You must add up every source.
5. **Specification** — you need confirmation from your supplier that the material meets the stated purity criteria.
6. **Notes/footnotes** — read every one. They often contain the exception that matters to you.

### 4.3 Why CAS numbers matter — and why not to use them blindly

A **CAS number** is a unique identifier for a chemical substance, assigned by the Chemical Abstracts Service. It is the best quick way to match a material to a Standard, **but**:

- **One material can have several CAS numbers** (e.g. different isomer mixtures, racemic vs single isomer, older and newer numbers).
- **Natural materials** often have more than one CAS number (e.g. a botanical-species number, a generic "oil" number, a number for an extract made a different way), and the numbers sometimes don't distinguish between an oil and an absolute.
- **Trade names** (e.g. a supplier's branded material) may be mixtures of several CAS-numbered substances.
- **Typographical errors** on documents happen.
- A Standard may list only some CAS numbers, yet the **definition** or **synonyms** make clear it applies to related forms.

> ✅ **Good Practice**
>
> Identify a material using **all** of: CAS number, chemical/INCI name, botanical name (for naturals), supplier trade name, and supplier documents. If the IFRA Library search by CAS finds nothing, also search by **name and synonyms** before concluding "no Standard".

### 4.4 Natural materials containing restricted constituents

Essential oils and other naturals are **mixtures** of many chemicals. Some of those chemicals are individually subject to IFRA Standards and/or are regulated allergens. Examples of constituents commonly found in naturals:

| Constituent | Commonly found in (examples — levels vary widely) | Why it matters (verify current status) |
|---|---|---|
| **Limonene** | Citrus peel oils (orange, lemon, bergamot, mandarin) | UK/EU labelled allergen; IFRA has a Standard relating to oxidation (specification). |
| **Linalool** | Lavender, bergamot, coriander, bois de rose | UK/EU labelled allergen; IFRA has a Standard relating to oxidation (specification). |
| **Citral** (geranial + neral) | Lemongrass, litsea cubeba, lemon, melissa | UK/EU labelled allergen; IFRA Standard (restriction). |
| **Eugenol** | Clove, cinnamon leaf, pimento, bay | UK/EU labelled allergen; IFRA Standard (restriction). |
| **Coumarin** | Tonka bean absolute, cassia, some hay-type materials | UK/EU labelled allergen; IFRA Standard (restriction). |
| **Methyl eugenol** | Basil, laurel leaf, rose, some others | IFRA Standard (restriction), including limits that apply to naturals; also regulated in EU cosmetics law. |
| **Geraniol / Citronellol** | Rose, geranium, palmarosa, citronella | UK/EU labelled allergens; IFRA Standards may apply — check. |
| **Furocoumarins** (e.g. bergapten) | Cold-pressed citrus oils, esp. bergamot, lime, grapefruit | Phototoxicity — IFRA Standard; proposed changes in 52nd Amendment. |

*Always check the current Standard for each of these. Whether a material is restricted, specified, or both — and the actual limits — must come from the IFRA Standards Library.*

> ⚠️ **Important**
>
> A formula may contain **no** material named "citral" and still contain a significant amount of citral from lemongrass or litsea. **Restrictions can arise from constituents, not just raw material names.** IFRA also publishes an **Annex on "Contributions from Other Sources"** giving typical levels of certain restricted substances in natural materials — useful when you have no better data, but supplier batch data should come first where available.

---

## 5. How to Calculate IFRA Compliance

This is the core skill. Take it slowly.

### 5.1 Three percentages you must never mix up

| # | Percentage | Plain English | Example |
|---|---|---|---|
| **1** | **Material % in concentrate** | How much of the fragrance oil is this material? | "Material X is 2% of my concentrate." |
| **2** | **Concentrate % in finished product** (the *dosage*) | How much of the finished perfume is fragrance oil? | "My EDP is 20% concentrate, 80% alcohol/water." |
| **3** | **Material % in finished product** | How much of the bottle the customer sprays is this material? | "Material X is 0.4% of the finished perfume." |

**IFRA limits are expressed as #3 — the % in the finished product.**

> ⚠️ **Important — weight, not volume**
>
> IFRA percentages are **by weight (w/w)**. If you dose by volume, convert using density (see Section 5.6).

### 5.2 The core formula

```
Finished-product material concentration (as a fraction)
    = (material % in concentrate ÷ 100) × (concentrate % in finished product ÷ 100)

Finished-product material concentration (%)
    = that fraction × 100
```

A shortcut that gives the same answer in one step:

```
Material % in finished product = (material % in concentrate × concentrate % in finished product) ÷ 100
```

### 5.3 Example 1

> 📘 **Example 1**
>
> A raw material is used at **2%** of the fragrance concentrate. The perfume contains **20%** fragrance concentrate.
>
> **Step 1 — Convert percentages to fractions**  
> 2% ÷ 100 = 0.02  
> 20% ÷ 100 = 0.20
>
> **Step 2 — Multiply**  
> 0.02 × 0.20 = 0.004
>
> **Step 3 — Convert back to a percentage**  
> 0.004 × 100 = **0.4%**
>
> **Check with the shortcut:** (2 × 20) ÷ 100 = 40 ÷ 100 = 0.4% ✔
>
> **Result:** the material is present at **0.4% of the finished perfume**.
>
> **Sanity check in grams:** in 100 g of perfume there are 20 g of concentrate. 2% of 20 g = 0.02 × 20 g = 0.4 g. 0.4 g in 100 g = 0.4%. ✔

### 5.4 Example 2

> 📘 **Example 2**
>
> A material is used at **5%** of the concentrate. Finished perfume concentration = **25%**.
>
> **Step 1:** 5% ÷ 100 = 0.05; 25% ÷ 100 = 0.25  
> **Step 2:** 0.05 × 0.25 = 0.0125  
> **Step 3:** 0.0125 × 100 = **1.25%**
>
> **Shortcut:** (5 × 25) ÷ 100 = 125 ÷ 100 = 1.25% ✔
>
> **Grams check:** 100 g perfume → 25 g concentrate → 5% of 25 g = 1.25 g → 1.25%. ✔
>
> **Result:** the material is **1.25% of the finished perfume**. You would compare **1.25%** (not 5%) to the Category 4 limit.

### 5.5 Example 3 — working backwards from a limit

Now the reverse question: *"If the limit is X, how much can I put in my concentrate?"*

```
Maximum material % in concentrate
    = IFRA finished-product limit (%) ÷ (concentrate % in finished product ÷ 100)

or equivalently:

Maximum material % in concentrate
    = (IFRA finished-product limit (%) × 100) ÷ concentrate % in finished product
```

> ⚠️ Units: divide the limit by the dosage **as a fraction** (e.g. 0.20, not 20). If you divide by 20 you'll get an answer 100 times too small.

<!-- -->

> 📘 **Example 3 (HYPOTHETICAL limit)**
>
> A material has a Category 4 IFRA maximum of **0.60%** in the finished product *(HYPOTHETICAL — for teaching only)*. What is the most you could use in a concentrate dosed at 10%, 15%, 20%, 25% and 30%?
>
> | Perfume dosage | Dosage as fraction | Calculation | Max % in concentrate |
> |---|---|---|---|
> | 10% | 0.10 | 0.60 ÷ 0.10 | **6.00%** |
> | 15% | 0.15 | 0.60 ÷ 0.15 | **4.00%** |
> | 20% | 0.20 | 0.60 ÷ 0.20 | **3.00%** |
> | 25% | 0.25 | 0.60 ÷ 0.25 | **2.40%** |
> | 30% | 0.30 | 0.60 ÷ 0.30 | **2.00%** |
>
> **Check one of them:** at 25% dosage with 2.40% in the concentrate → (2.40 × 25) ÷ 100 = 60 ÷ 100 = 0.60% ✔ exactly at the limit.
>
> **Pattern:** the stronger the perfume (higher dosage), the **less** of the restricted material you can put in the concentrate.

<!-- -->

> ⚠️ **Important — this is a theoretical maximum**
>
> The result must still account for:
> - **other sources** of the same substance (naturals, bases, other materials — Section 8);
> - **other restricted materials** in the formula (Section 6 — the lowest one wins);
> - **specifications** (purity/oxidation) that must also be met;
> - **legal limits** (e.g. Annex III of the Cosmetics Regulation) that might be stricter;
> - **supplier recommendations** and **the safety assessor's conclusions**;
> - a sensible **safety margin** for batch variation and weighing tolerance.
>
> Formulating *exactly* at the limit leaves no room for weighing errors or natural variation.

### 5.6 Volume vs weight — a practical trap

Many hobbyists measure in **millilitres**. IFRA works in **weight %**.

> 📘 **Example — "20% by volume" is not "20% by weight"**
>
> You mix **20 ml** of concentrate with **80 ml** of perfumer's alcohol.  
> Assume concentrate density = 0.98 g/ml and perfumer's alcohol (≈96% ethanol) density ≈ 0.81 g/ml (use your actual supplier values).
>
> Concentrate mass = 20 ml × 0.98 g/ml = **19.6 g**  
> Alcohol mass = 80 ml × 0.81 g/ml = **64.8 g**  
> Total mass = 19.6 + 64.8 = **84.4 g**
>
> Concentrate % by weight = 19.6 ÷ 84.4 = 0.2322 → × 100 = **23.2% w/w**
>
> So your "20%" perfume is actually **~23.2% w/w** for IFRA purposes. If your certificate allowed 20% max, you'd be over the limit.
>
> **Solution:** weigh everything on a calibrated scale, and express formulas in grams / % w/w.

---

## 6. Calculating Maximum Fragrance Dosage

### 6.1 The formula

This asks: *"What is the highest % at which I can use this whole concentrate before this one restricted material exceeds its limit?"*

```
Maximum fragrance usage (as a fraction)
    = IFRA limit for restricted material (%)
      ÷ concentration of that restricted material in the concentrate (%)

Maximum fragrance usage (%) = that fraction × 100
```

If the answer is **above 100%**, that material does **not** limit the concentrate in that category (the concentrate could even be used neat as far as that material is concerned — but see the warnings below).

### 6.2 Worked examples

> 📘 **Example 6A (HYPOTHETICAL limit)**
>
> Material A is **3.0%** of the concentrate. Its Category 4 limit is **0.60%** *(hypothetical)*.
>
> 0.60 ÷ 3.0 = 0.20 → 0.20 × 100 = **20%**
>
> The concentrate can be used at up to **20%** in fine fragrance (as far as Material A is concerned).
>
> **Check:** at 20% dosage: (3.0 × 20) ÷ 100 = 0.60% ✔

<!-- -->

> 📘 **Example 6B (HYPOTHETICAL limit)**
>
> Material B is **0.50%** of the concentrate. Its Category 4 limit is **0.05%** *(hypothetical)*.
>
> 0.05 ÷ 0.50 = 0.10 → **10%**
>
> **Check:** (0.50 × 10) ÷ 100 = 0.05% ✔

<!-- -->

> 📘 **Example 6C (HYPOTHETICAL limit)**
>
> Material C is **2.0%** of the concentrate. Its Category 4 limit is **2.5%** *(hypothetical)*.
>
> 2.5 ÷ 2.0 = 1.25 → **125%**
>
> That's more than 100%, so Material C **cannot** exceed its limit at any dosage. It is not a limiting material in this category.

### 6.3 The limiting material

When a formula contains **several** restricted materials, calculate the maximum dosage for **each**. The one giving the **lowest** result is the **limiting material**, and that result is the maximum dosage for the whole concentrate.

> 📘 **Example 6D — a formula with several restricted materials (ALL LIMITS HYPOTHETICAL)**
>
> | Material | % in concentrate | Cat 4 limit (HYPOTHETICAL) | Calculation | Maximum fragrance dosage |
> |---|---|---|---|---|
> | Material A | 3.00% | 0.60% | 0.60 ÷ 3.00 = 0.200 | **20.0%** |
> | Material B | 0.50% | 0.05% | 0.05 ÷ 0.50 = 0.100 | **10.0%** ← lowest |
> | Material C | 2.00% | 2.50% | 2.50 ÷ 2.00 = 1.250 | 125% (not limiting) |
> | Material D (constituent from an essential oil) | 0.12% | 0.02% | 0.02 ÷ 0.12 = 0.167 | 16.7% |
>
> **Limiting material: Material B.** The concentrate may be used at **no more than 10%** in Category 4.
>
> If you want to make a 20% EDP, you must reduce Material B. Using the Section 5.5 formula:  
> Max Material B in concentrate at 20% = 0.05 ÷ 0.20 = **0.25%**.  
> But now also check Material D at 20%: 0.12 × 20 ÷ 100 = 0.024% > 0.02% ✘ — so Material D **also** needs reducing (to ≤ 0.02 ÷ 0.20 = 0.10% in the concentrate).
>
> **Lesson:** fixing the limiting material often reveals the *next* limiting material. Recalculate everything after every change.

### 6.4 Maximum IFRA dosage ≠ recommended perfume concentration

The maximum IFRA dosage is a **ceiling**, not a target. Your actual dosage also depends on:

- the **olfactory** result (more isn't always better);
- **cost**;
- **stability**, solubility and clarity in alcohol;
- **safety assessor** conclusions;
- **legal** limits and allergen labelling;
- a sensible **safety margin** below the ceiling.

> 📘 **Example**
>
> A concentrate's IFRA certificate allows 18.2% in Category 4. The brand chooses **15%** for its EDP: it smells balanced, stays clear at low temperatures, and leaves a margin for batch-to-batch variation in the natural materials.

---

## 7. Raw Materials vs Dilutions

Perfumers constantly use **dilutions** (e.g. "10% in DPG", "1% in ethanol") for accurate weighing of strong materials. IFRA limits apply to the **active material**, not the solution.

### 7.1 Three numbers to keep separate

| Term | Meaning |
|---|---|
| **Formula %** | How much of the *solution* is in the formula. |
| **Dilution %** | How much of the solution is *active material* (e.g. 10% = 10 g active in 100 g solution). |
| **Active %** | How much *actual material* ends up in the formula. |

### 7.2 Reusable formulas

```
Active % in concentrate = Formula % of solution × (Dilution % ÷ 100)

Solvent % contributed   = Formula % of solution − Active % in concentrate

Active % in finished product = Active % in concentrate × (Concentrate dosage % ÷ 100)

Solution % needed for a target active % = Target active % ÷ (Dilution % ÷ 100)
```

### 7.3 Worked examples

> 📘 **10% dilution**
>
> Formula contains **5%** of a **10%** solution of a material in DPG.  
> Active % = 5 × (10 ÷ 100) = 5 × 0.10 = **0.5%**  
> Solvent (DPG) from this line = 5 − 0.5 = **4.5%**
>
> So the formula contains only **0.5%** of the actual material. Use 0.5%, **not** 5%, in IFRA calculations.

<!-- -->

> 📘 **1% dilution**
>
> Formula contains **3%** of a **1%** solution.  
> Active % = 3 × (1 ÷ 100) = 3 × 0.01 = **0.03%**  
> Solvent = 3 − 0.03 = **2.97%**
>
> In a 20% perfume, the finished-product level = 0.03 × 0.20 = **0.006%**.

<!-- -->

> 📘 **50% dilution**
>
> Formula contains **8%** of a **50%** solution (e.g. a crystalline material pre-dissolved at 50%).  
> Active % = 8 × (50 ÷ 100) = 8 × 0.50 = **4.0%**  
> Solvent = 8 − 4 = **4.0%**

<!-- -->

> 📘 **Working backwards**
>
> You want **0.2%** active of a material and have it as a **10%** dilution.  
> Solution needed = 0.2 ÷ 0.10 = **2.0%** of the 10% solution.

<!-- -->

> ⚠️ **Important — "dilutions" that arrive from suppliers**
>
> Some materials are **sold** pre-diluted (e.g. "10% in DPG", "50% in IPM", or naturally occurring as solutions with carriers). Read the specification — the supplier's IFRA certificate may already account for dilution, or may refer to the pure material. Check which one before calculating.

<!-- -->

> ⚠️ **Important — solvents are ingredients too**
>
> DPG, IPM, benzyl benzoate, triethyl citrate and ethanol are ingredients that must appear in your formula records, your CPSR data and (for the finished product) your ingredient list. **Benzyl benzoate** is itself a UK/EU labelled fragrance allergen, so using it as a diluent affects your allergen calculations.

---

## 8. Natural Materials and Restricted Constituents

### 8.1 Why naturals are harder

A synthetic aroma chemical is usually one substance (or a defined isomer mix). A natural is a **complex, variable mixture** of dozens to hundreds of substances. Its composition depends on species, chemotype, origin, harvest, extraction method, and age.

| Natural type | What it is | Compliance challenge |
|---|---|---|
| **Essential oils** | Volatile oils obtained by steam distillation, or expression (citrus) | Contain many allergens and restricted constituents; cold-pressed citrus oils may contain phototoxic furocoumarins. |
| **Absolutes** | Solvent-extracted from concretes, then alcohol-washed | Rich, complex; may contain restricted constituents and trace solvent residues. |
| **Resinoids** | Solvent extracts of resins/balsams (e.g. benzoin, labdanum) | Often supplied diluted; may contain allergens such as benzyl benzoate, benzyl cinnamate, cinnamyl alcohol. |
| **Balsams** | Natural resinous exudates (e.g. Peru, tolu) | Some have their own IFRA Standards, specifications, or legal restrictions — check carefully. |
| **Extracts (CO₂, tinctures, etc.)** | Various extraction methods | Composition differs from the oil of the same plant; do not reuse an essential oil's data for a CO₂ extract. |

### 8.2 What documentation you need for a natural

- **IFRA Certificate/statement** from the supplier for that exact material;
- **Allergen declaration** (ideally batch-based or typical-composition-based);
- **Specification** (botanical name, part, origin, extraction method, physico-chemical data);
- **GC/MS or composition data** where restricted constituents may matter;
- **SDS**;
- **COA** for the batch you're using.

### 8.3 Simplified educational example

> 📘 **Example 8A — constituent contribution (HYPOTHETICAL numbers)**
>
> Your concentrate contains **8%** of "Essential Oil E". Your **supplier's** documentation states that Oil E contains **1.5%** of a restricted constituent, "Constituent K". Constituent K has a Category 4 limit of **0.05%** *(HYPOTHETICAL)*.
>
> **Step 1 — Constituent K in the concentrate**  
> 8% × (1.5 ÷ 100) = 8 × 0.015 = **0.12%** of the concentrate
>
> **Step 2 — Add other sources**  
> Your formula also contains 0.03% of Constituent K as a pure material.  
> Total = 0.12 + 0.03 = **0.15%** of the concentrate
>
> **Step 3 — Finished-product level at 20% dosage**  
> 0.15 × 0.20 = **0.03%** of the finished perfume → below 0.05% ✔
>
> **Step 4 — Maximum dosage from Constituent K**  
> 0.05 ÷ 0.15 = 0.333 → **33.3%**

<!-- -->

> ⚠️ **Important**
>
> Constituent percentages **must come from reliable supplier documentation** (allergen declaration, GC/MS, specification or IFRA statement for the specific material), or — where there is no better data — from recognised reference data such as IFRA's annex on contributions from other sources. **Do not** use a random percentage from a website or a different supplier's oil. Where data is given as a *range*, a conservative approach is to use the **upper** value and discuss it with your safety assessor.

<!-- -->

> ❌ **Common Mistake**
>
> "It's a natural essential oil, so IFRA doesn't apply." Many of the most heavily restricted substances are found **in naturals**. Some naturals themselves have Standards (e.g. some citrus oils via furocoumarin Standards, oakmoss/treemoss extracts via specifications).

---

## 9. How to Navigate Supplier Documents

### 9.1 SDS — Safety Data Sheet

**What it is:** a standard 16-section document describing the **hazards** of a substance or mixture and how to handle it safely. In the EU and GB its format is set by REACH/UK REACH Annex II.

**What an SDS tells you:**

| SDS Section | Useful information for perfumers |
|---|---|
| 1 | Identification of product and supplier |
| 2 | **Hazard classification** (CLP/GB CLP) — e.g. Skin Sens. 1, Flam. Liq. 3, Aquatic Chronic 2 — and label elements (pictograms, hazard and precautionary statements) |
| 3 | **Composition** — hazardous components above certain thresholds, with CAS/EC numbers (not necessarily the full composition) |
| 7 | **Handling and storage** |
| 8 | Exposure controls / PPE |
| 9 | Physical properties — including **flash point**, appearance, density |
| 14 | **Transport** information — UN number, class, packing group |
| 15 | Regulatory information |

**What an SDS does NOT tell you:**

- the maximum level for **cosmetic** use;
- **IFRA** compliance or the Category 4 limit;
- whether an ingredient is permitted in cosmetics (it's a chemical-safety document, not a cosmetic one);
- a full allergen breakdown (Section 3 lists **hazardous** components above thresholds, not every labelled allergen);
- whether your finished product is safe.

> ❌ **Common Mistake**
>
> Treating an SDS as proof of cosmetic safety or IFRA compliance. An SDS is **not** an IFRA Certificate and **not** a CPSR.

### 9.2 IFRA Certificate / IFRA Conformity Document

**What it is:** a supplier's declaration that the material or fragrance mixture complies with the IFRA Standards **when used at or below stated levels** in stated **product categories**.

**What to check:**

- **Product name and code** match what you bought;
- **Amendment** stated (e.g. "51st Amendment") — is it current?;
- **Date** of issue;
- **Table of categories** with maximum use levels (% of the concentrate/material in the finished product);
- any **specification** statements (e.g. "complies with the specification for …");
- signature/issuer details.

> ⚠️ **Important — read the numbers correctly**
>
> On an IFRA Certificate for a **raw material or fragrance compound**, the numbers per category are usually the **maximum % of that material/compound in the finished product** — i.e. already a *maximum dosage* — **not** the % of a restricted substance. Read the document's wording.

### 9.3 Allergen Declaration

**What it is:** a list of regulated fragrance allergens present in the material, with their concentrations (usually as % in the material).

**What it contains (typically):**

- the regulatory list it refers to (e.g. the original 26 allergens, and/or the expanded EU list under Regulation (EU) 2023/1545);
- the concentration of each allergen in the material;
- sometimes a statement of basis (typical composition vs batch analysis).

> ✅ **Good Practice**
>
> Since the EU list expanded, ask suppliers for declarations that cover the **expanded EU list** (and state which list the document covers). A declaration covering only the old 26 allergens is not enough for new EU products placed on the market from 31 July 2026.

### 9.4 Technical Data Sheet (TDS) / Specification

**What it is:** a description of what the material **should** be, used to check identity and quality.

**Typical information:**

- appearance (e.g. "colourless to pale yellow liquid");
- odour description;
- purity/assay (e.g. "≥ 98% by GC");
- **density / specific gravity**;
- **refractive index**;
- optical rotation (for chiral materials and many naturals);
- flash point;
- solubility;
- botanical source, part used, extraction method, origin (naturals);
- recommended storage conditions and shelf life;
- sometimes typical use levels and stability notes.

### 9.5 Certificate of Analysis (COA)

**What it is:** a **batch-specific** document showing the test results for the **exact lot** you received, compared against the specification.

**Why it matters:** proves *this batch* matches the specification; supports traceability (batch number → your production batch) under GMP.

### 9.6 Comparison table

| Document | Answers | Specific to… | Used for | Is it an IFRA/cosmetic compliance proof? |
|---|---|---|---|---|
| **SDS** | Hazards, handling, storage, transport | Product (not batch) | Lab safety, CLP labelling, storage, shipping | ❌ No |
| **IFRA Certificate** | Max use level per IFRA category | Product + Amendment | IFRA calculations; supplying assessor | ✅ IFRA only (not a CPSR) |
| **Allergen Declaration** | Which allergens and how much | Product (sometimes batch) | Label ingredient lists; CPSR data | Partial — input to labelling |
| **TDS / Specification** | What the material should be | Product | Identity, quality, density for conversions | ❌ No |
| **COA** | What this batch actually is | **Batch** | Traceability, GMP, quality check | ❌ No |
| **GC/MS / Composition data** | What's inside a natural | Batch or typical | Constituent calculations | Supporting data |
| **CPSR** | Is the finished product safe? | Finished product | Legal requirement UK/EU | ✅ Safety assessment |

---

## 10. IFRA Certificates for Finished Fragrance Compounds

### 10.1 How a fragrance house creates one (conceptually)

1. **Break the formula down** to active materials (removing solvent effects from dilutions).
2. **Explode** complex ingredients (bases, accords, naturals) into their relevant constituents using supplier data.
3. For **every** substance with an IFRA Standard — whether added directly or present as a constituent — **sum** all contributions.
4. Check **prohibitions** — none may be present (other than any trace levels specifically allowed).
5. Check **specifications** — each relevant material must meet them.
6. For each IFRA **category**, calculate the maximum dosage for each restricted substance:
   `Max dosage (%) = (Category limit ÷ total % of substance in compound) × 100`
7. The **lowest** value in each category is the **maximum use level** of the compound in that category.
8. Issue the certificate stating the Amendment, date, and maximum levels.

### 10.2 What an IFRA Conformity Certificate should normally show

- Supplier name and address;
- Customer name (often);
- **Fragrance name and code**;
- **IFRA Amendment** used for the evaluation;
- **Date** of issue;
- A statement that the compound complies with the IFRA Standards when used within the stated limits;
- **Table of IFRA categories** with maximum concentration of the compound in the finished product for each;
- Statement regarding specifications and/or prohibited materials;
- Signature / authorised person;
- Often a statement that the limits reflect IFRA Standards only and that the customer remains responsible for overall product safety.

> ⚠️ **Important — a PDF is not proof**
>
> Anyone can type numbers into a certificate template. A certificate is only as good as the **formula data, supplier data, constituent data and calculations** behind it. If you create certificates for your own compounds:
> - keep the full calculation records;
> - keep every supplier document you relied on (with dates and versions);
> - use data for the **specific** raw materials you bought;
> - re-issue when anything changes;
> - consider having your calculations checked by an experienced regulatory professional or using recognised software — and still check its data sources.
>
> If you are not an IFRA member, you can still calculate IFRA compliance for your own formulas — but be transparent on the document about who produced it, which Amendment was used, and how it was calculated.

---

## 11. Fragrance Allergens

### 11.1 IFRA restrictions vs allergen labelling — two different systems

| | IFRA restrictions | Allergen labelling (UK/EU) |
|---|---|---|
| **Source** | Industry self-regulation (IFRA Standards) | **Law** — Cosmetics Regulation Annex III |
| **Purpose** | Keep exposure below levels judged safe | **Inform consumers** who are already sensitised so they can avoid the substance |
| **Output** | Maximum concentration per category | Name must appear in the **ingredient list** above a threshold |
| **Threshold** | Varies per material and category | Fixed: **> 0.001%** (leave-on) / **> 0.01%** (rinse-off) |

An ingredient can therefore be **legally required on the label** even though it is used far below any IFRA limit — or even though it has **no** IFRA restriction at all. The labelling duty is triggered simply by its presence above the threshold.

> 📘 **Example**
>
> Linalool may be used without reaching any quantitative IFRA restriction (IFRA's Standard for linalool is about oxidation quality), but at 0.5% in a finished EDP it is far above 0.001% and **must** be listed as "Linalool" in the UK/EU ingredient list.

### 11.2 The thresholds

Under the UK and EU Cosmetics Regulations, a listed fragrance allergen must be named in the ingredient list when its concentration in the **finished product** exceeds:

- **0.001%** (10 ppm) in **leave-on** products (e.g. perfume, lotion);
- **0.01%** (100 ppm) in **rinse-off** products (e.g. shower gel, shampoo).

The allergen is counted from **all sources** (added directly, from naturals, from bases, from solvents such as benzyl benzoate).

### 11.3 UK vs EU — the allergen lists

| | **EU** | **Great Britain (UK)** |
|---|---|---|
| **Law** | Regulation (EC) No 1223/2009, Annex III, as amended by **Commission Regulation (EU) 2023/1545** | Retained Regulation (EC) No 1223/2009 as it applies in GB ("UK Cosmetics Regulation") |
| **List** | Expanded list: the original allergens (minus those since banned) plus **56 new entries** (individual chemicals and certain natural extracts) — around 80 entries in total | At the time of writing, GB still uses the **original list** (the "26 allergens", minus substances since banned). OPSS has been expected to consult on alignment — **check the current position**. |
| **Transition** | Products **placed on the market from 31 July 2026** must comply. Products placed on the market before that date may continue to be **made available until 31 July 2028**. | Check current OPSS guidance. |
| **Northern Ireland** | EU cosmetics rules generally apply in NI under the Windsor Framework — check current guidance. | — |

Sources: [Regulation (EU) 2023/1545 on EUR-Lex](https://eur-lex.europa.eu/eli/reg/2023/1545/oj); [European Commission — Cosmetics legislation](https://single-market-economy.ec.europa.eu/sectors/cosmetics/legislation_en); [GOV.UK — Making cosmetic products available to consumers in Great Britain](https://www.gov.uk/guidance/making-cosmetic-products-available-to-consumers-in-great-britain)

> ⚠️ **Important**
>
> Transitional dates and the exact contents of the lists **must be checked from official sources**. The EU amendment also changed how some allergens are **named** on labels (and allows certain naming conventions for groups/isomers). Use the INCI names given in the current Annex III.

<!-- -->

> ✅ **Good Practice — label to the stricter list**
>
> Many brands selling in both markets simply label according to the **EU expanded list**, since listing extra allergens is generally permitted and one label can then serve both markets. Confirm with your Responsible Person/assessor.

### 11.4 How to calculate allergen % in the finished product

```
Allergen % in concentrate = Σ [ material % in concentrate × (allergen % in that material ÷ 100) ]

Allergen % in finished product = Allergen % in concentrate × (concentrate dosage % ÷ 100)

Label it if:  leave-on → finished % > 0.001     rinse-off → finished % > 0.01
```

> 📘 **Example 11A — leave-on EDP**
>
> A concentrate contains:
> - Linalool (pure material): **3.0%**
> - Lavender oil at **10%**, whose supplier allergen declaration shows **30%** linalool
>
> **Step 1 — linalool from lavender:** 10 × (30 ÷ 100) = 10 × 0.30 = **3.0%**  
> **Step 2 — total linalool in concentrate:** 3.0 + 3.0 = **6.0%**  
> **Step 3 — finished EDP at 18%:** 6.0 × (18 ÷ 100) = 6.0 × 0.18 = **1.08%**  
> **Step 4 — compare:** 1.08% > 0.001% → **Linalool must be labelled.**
>
> *(Real lavender linalool content varies — the 30% here is illustrative; use your supplier's declaration.)*

<!-- -->

> 📘 **Example 11B — same allergen, leave-on vs rinse-off**
>
> A concentrate contains **0.40%** of an allergen (from all sources).
>
> **Body lotion (leave-on) at 0.5% fragrance:**  
> 0.40 × (0.5 ÷ 100) = 0.40 × 0.005 = **0.002%** → > 0.001% → **Label.**
>
> **Shower gel (rinse-off) at 1.5% fragrance:**  
> 0.40 × (1.5 ÷ 100) = 0.40 × 0.015 = **0.006%** → < 0.01% → **Not required** on the label.
>
> Same concentrate, different outcomes — because thresholds depend on product type.

<!-- -->

> 📘 **Example 11C — trace amount**
>
> A woody base is 12% of your concentrate; the supplier declares **0.005%** of a listed allergen in it.  
> In concentrate: 12 × (0.005 ÷ 100) = 12 × 0.00005 = **0.0006%**  
> In EDP at 20%: 0.0006 × 0.20 = **0.00012%** → below 0.001% → not required on the label (but record it and give the data to your assessor).

### 11.5 How allergens appear on a label

In the UK/EU, allergens above the threshold are listed **by their INCI name** in the ingredient list, typically after "Parfum" (or "Aroma"). For example:

> *Alcohol Denat., Parfum (Fragrance), Aqua (Water), Limonene, Linalool, Coumarin, Citral.*

*(Order and exact content depend on your product. Ingredients are listed in descending order of weight at the time they are added; ingredients in concentrations of less than 1% may be listed in any order after those above 1%. An allergen present above 1% — possible in a perfume — must therefore take its correct place in the descending order.)*

---

## 12. CPSR — Cosmetic Product Safety Report

### 12.1 What it is

The **CPSR** is the documented safety assessment of a **finished cosmetic product**, required under **Article 10 and Annex I** of the Cosmetics Regulation (UK and EU). It must be completed **before** the product is placed on the market.

### 12.2 Part A and Part B

| Part | Name | Contents (summary of Annex I) |
|---|---|---|
| **Part A** | Cosmetic product safety **information** | 1. Quantitative and qualitative composition · 2. Physical/chemical characteristics and **stability** · 3. Microbiological quality · 4. Impurities, traces, information about the **packaging material** · 5. Normal and reasonably foreseeable use · 6. **Exposure** to the product · 7. Exposure to the substances · 8. **Toxicological profile** of the substances · 9. Undesirable effects and serious undesirable effects · 10. Information on the product |
| **Part B** | Cosmetic product safety **assessment** | 1. Assessment conclusion · 2. Labelled warnings and instructions of use · 3. Reasoning · 4. Assessor's credentials and approval of Part B |

### 12.3 The safety assessor

The assessor must hold a qualification (diploma or equivalent) in **pharmacy, toxicology, medicine, or a similar discipline** (Article 10(2)). The assessor:

- reviews all Part A data;
- evaluates every ingredient (including the fragrance, often using IFRA certificates **plus** allergen and composition data);
- considers exposure, target users (adults? children?), and area of application;
- concludes whether the product is safe, and specifies required **warnings**.

### 12.4 Documents a perfumer/brand may need to provide

| Document/information | Why the assessor needs it |
|---|---|
| **Full formula** of the finished product (% w/w), including alcohol, water, denaturant, UV filters, colourants, antioxidants | Part A1 composition |
| Fragrance concentrate **composition** or a confidential disclosure to the assessor (if the fragrance supplier won't reveal the formula to you, they may send it directly to the assessor) | Toxicological evaluation |
| **INCI names** for all ingredients | Labelling and identification |
| **Allergen declaration** for the concentrate | Labelling and sensitisation risk |
| **SDS** for the concentrate and raw materials | Hazard data |
| **IFRA documentation** (current Amendment) | Evidence of compliance with industry standards |
| **Specifications/COAs** (e.g. alcohol/denaturant specs) | Purity, impurities |
| **Stability and compatibility** data | Part A2 & A4 |
| **Packaging** information (material, pump/closure) | Part A4 |
| **Intended use** and target consumer, amount applied, frequency | Exposure calculation |
| **Manufacturing** information (process, GMP) | Quality, impurities |
| **Microbiological** information (if relevant — hydroalcoholic perfumes with high alcohol are generally low-risk, but the assessor decides) | Part A3 |
| **Label artwork** | Part B2 warnings; checking claims |

### 12.5 An IFRA Certificate does NOT replace a CPSR

| IFRA Certificate | CPSR |
|---|---|
| Covers the **fragrance concentrate** only | Covers the **whole finished product** |
| Checks against **IFRA Standards** | Checks against **law + toxicology + exposure** |
| Issued by the fragrance supplier | Signed by a **qualified safety assessor** |
| Industry self-regulation | **Legal requirement** (UK/EU) |

---

## 13. Product Information File (PIF)

### 13.1 What it is

The **PIF** is the complete technical file for a cosmetic product, required under **Article 11** of the Cosmetics Regulation (UK/EU). It must be kept readily accessible to the competent authority (e.g. Trading Standards in GB; national authorities in EU Member States) at the address of the Responsible Person given on the label.

### 13.2 Who is responsible

The **Responsible Person** maintains the PIF.

### 13.3 What it contains (Article 11(2))

1. A **description** of the cosmetic product (enabling the PIF to be clearly linked to the product);
2. The **CPSR**;
3. A description of the **method of manufacturing** and a statement of compliance with **GMP**;
4. **Proof of the effect claimed**, where justified by the nature or effect of the product (e.g. "lasts 12 hours");
5. Data on any **animal testing** performed by the manufacturer, its agents or suppliers relating to the development or safety assessment of the product or its ingredients.

In practice, a PIF also holds supporting files: raw-material documents, IFRA certificates, allergen declarations, stability data, label artwork, batch records, etc.

### 13.4 How long must it be kept?

In the UK and EU: **10 years** following the date on which the **last batch** of the product was placed on the market.

### 13.5 CPSR vs PIF

The **CPSR is one part of the PIF**. Think of the PIF as the binder; the CPSR is the most important chapter.

---

## 14. UK Cosmetic Compliance

This section covers **Great Britain (England, Scotland, Wales)**. **Northern Ireland** generally follows the EU Cosmetics Regulation under the Windsor Framework — check current guidance if you sell there.

**Key law:** Regulation (EC) No 1223/2009 as it applies in Great Britain (the "UK Cosmetics Regulation"), enforced under the Cosmetic Products Enforcement Regulations 2013. The regulator is the **Office for Product Safety and Standards (OPSS)**; enforcement is by **Trading Standards**.

Primary guidance: [GOV.UK — Making cosmetic products available to consumers in Great Britain](https://www.gov.uk/guidance/making-cosmetic-products-available-to-consumers-in-great-britain)

### 14.1 Overview checklist

| Requirement | What it means for a perfume brand |
|---|---|
| **Responsible Person (RP)** | Every cosmetic product needs a **UK-established** RP (a business or an individual, including a sole trader). Mail-forwarding or PO box addresses do not count. The RP is legally responsible for compliance. This can be you if you are UK-based. |
| **SCPN notification** | Before the product is made available in GB, the RP must notify it through the **Submit Cosmetic Product Notifications** service. ([GOV.UK — Submit a cosmetic product notification](https://www.gov.uk/guidance/submit-a-cosmetic-product-notification); [SCPN service](https://submit.cosmetic-product-notifications.service.gov.uk/)) |
| **CPSR** | Required before sale (Section 12). |
| **PIF** | Kept at the RP's UK address for 10 years after the last batch (Section 13). |
| **GMP** | Manufacture must comply with GMP; ISO 22716 is the recognised standard. |
| **Ingredient restrictions** | Check the GB Annexes (II prohibited, III restricted, IV colourants, V preservatives, VI UV filters). GB and EU Annexes can **diverge** over time. |
| **Serious undesirable effects** | Must be reported to OPSS. |

### 14.2 Labelling (Article 19) — what goes on the pack

| Label element | Notes for perfume |
|---|---|
| **Name and address of the Responsible Person** | UK address for GB. May be abbreviated if the RP can still be identified. |
| **Country of origin** | For imported products. |
| **Nominal content** (quantity) | By weight or volume (perfume is normally in ml), at time of packaging. Very small packs (e.g. < 5 ml/5 g samples, free samples) have exemptions — check. |
| **Date of minimum durability** OR **Period After Opening (PAO)** | A "best before end" date is required if the product's durability is **30 months or less**. If durability exceeds 30 months, a **PAO** symbol (open jar) may be required — but PAO is not required where there is no risk of deterioration after opening. Whether an alcohol-based perfume needs a PAO is a judgement to confirm with your safety assessor. |
| **Precautions / warnings** | Any warnings identified in the CPSR or required by Annexes (e.g. flammability wording, "avoid contact with eyes", "keep away from sunlight" where relevant). |
| **Batch number** | Or reference allowing identification of the batch. |
| **Function** of the product | Unless clear from presentation ("Eau de Parfum" usually suffices). |
| **Ingredient list** | Preceded by "Ingredients". INCI names; descending order of weight for ingredients > 1%; fragrance listed as "Parfum"; labelled allergens above threshold listed by name. |

Where space is too small (e.g. mini samples), some information may be given on an enclosed leaflet, label, tag, or card — with a reference symbol on the pack. Check exact rules.

> ⚠️ **Important — changes in GB law**
>
> GB is updating its Annexes independently of the EU (for example, the draft Cosmetic Products (Restriction of Chemical Substances) Regulations 2026 notified to the WTO in late 2025 adds substances to GB Annex II). Check GOV.UK and OPSS for the current position rather than assuming the EU and GB are identical.

---

## 15. EU Cosmetic Compliance

**Key law:** [Regulation (EC) No 1223/2009 on cosmetic products](https://eur-lex.europa.eu/eli/reg/2009/1223/oj) (the "EU Cosmetics Regulation"), directly applicable in all EU Member States (and relevant to Northern Ireland under the Windsor Framework).
Primary guidance: [European Commission — Cosmetics](https://single-market-economy.ec.europa.eu/sectors/cosmetics_en)

> ⚠️ **Important — UK and EU are separate**
>
> Selling in **both** GB and the EU requires **two** Responsible Persons (one UK-established, one EU-established — which can be two different companies), **two** notifications (SCPN and CPNP), and labels that show the correct RP address(es) for each market. An EU RP cannot act as the GB RP, and vice versa.

### 15.1 Overview checklist

| Requirement | EU details |
|---|---|
| **EU Responsible Person** | Must be **established in the EU** (Article 4). For products manufactured outside the EU, the importer is RP unless they designate someone else in writing. UK brands typically appoint a paid EU RP service. |
| **CPNP notification** | Before placing on the market, the RP notifies the product via the **Cosmetic Products Notification Portal** (Article 13). One notification covers the whole EU. ([CPNP information](https://single-market-economy.ec.europa.eu/sectors/cosmetics/cosmetic-product-notification-portal_en); [CPNP portal](https://webgate.ec.europa.eu/cpnp/)) |
| **Safety assessment / CPSR** | Article 10 & Annex I. ([Commission guidelines on Annex I](https://single-market-economy.ec.europa.eu/sectors/cosmetics/legislation_en)) |
| **PIF** | Article 11; kept at the EU RP's address, in a language easily understood by the competent authority of that Member State; retained 10 years after last batch. |
| **GMP** | Article 8; compliance with **EN ISO 22716** gives a presumption of conformity. |
| **Ingredient Annexes** | Annex II (prohibited), III (restricted incl. allergen labelling), IV–VI (colourants, preservatives, UV filters). Use [CosIng](https://single-market-economy.ec.europa.eu/sectors/cosmetics/cosmetic-ingredient-database_en) for reference but always check the legal text (CosIng is informative, not legally binding). |
| **Labelling** | Article 19 — similar elements to the UK list above, plus **language requirements**: the labelling language is set by each Member State where the product is sold. |
| **Allergens** | Expanded list under Regulation (EU) 2023/1545 — see Section 11. |
| **Claims** | Must comply with the common criteria (Regulation (EU) No 655/2013). |
| **Serious undesirable effects** | Must be notified to the competent authority. |

> ⚠️ **Important — keep watching EU law**
>
> The EU regularly amends the Annexes (e.g. banning substances classified as CMR under CLP). Changes can apply quickly. Check the consolidated text of Regulation 1223/2009 on EUR-Lex and the Commission's cosmetics pages regularly.

---

## 16. United States Overview

The US system is **structurally different** from the UK/EU. This is a high-level overview — if you sell into the US, consult current FDA resources or a US regulatory professional.

### 16.1 Legal framework

- **Federal Food, Drug, and Cosmetic Act (FD&C Act)** — cosmetics must not be **adulterated** or **misbranded**.
- **Fair Packaging and Labeling Act (FPLA)** — labelling of consumer products, e.g. identity, net quantity, name and place of business.
- **Modernization of Cosmetics Regulation Act of 2022 (MoCRA)** — the biggest change to US cosmetic law since 1938. ([FDA — MoCRA](https://www.fda.gov/cosmetics/cosmetics-laws-regulations/modernization-cosmetics-regulation-act-2022-mocra))
- Federal ingredient labelling rules (21 CFR 701.3) — historically allow fragrance to be declared simply as **"Fragrance"**.
- **Cosmetic vs drug**: claims matter. A product claiming to treat or prevent disease, or affect body structure/function, may be regulated as a **drug**.
- **State laws** also apply (for example, California has fragrance-ingredient disclosure/reporting requirements and ingredient bans). These are outside the scope of this guide — check the relevant state.

### 16.2 Key MoCRA obligations (as of writing — verify on FDA's site)

| Obligation | Summary |
|---|---|
| **Facility registration** | Facilities that manufacture or process cosmetics for US distribution must register with FDA. |
| **Product listing** | The "responsible person" (manufacturer, packer or distributor named on the label) must list each product, including ingredients. ([FDA — Registration & Listing](https://www.fda.gov/cosmetics/registration-listing-cosmetic-product-facilities-and-products)) |
| **Small business exemption** | Certain small businesses (MoCRA sets a gross-sales threshold) are exempt from registration/listing — **but not** for certain higher-risk product types, and not from other obligations such as adverse event reporting and safety substantiation. See the [FDA Small Businesses & Homemade Cosmetics fact sheet](https://www.fda.gov/cosmetics/resources-industry-cosmetics/small-businesses-homemade-cosmetics-fact-sheet). |
| **Safety substantiation** | The responsible person must ensure and maintain records supporting **adequate substantiation of safety**. |
| **Adverse event reporting** | **Serious** adverse events must be reported to FDA (within 15 business days of receiving the information); records of adverse events must be kept. |
| **Label contact information** | Labels must include domestic contact information (address, phone number or electronic contact) through which adverse events can be reported. |
| **GMP** | FDA is required to establish cosmetic GMP regulations; check current status. |
| **Fragrance allergen labelling** | MoCRA requires FDA to issue a rule on **fragrance allergen labelling**. The statutory deadline for the proposed rule (June 2024) was missed; FDA's regulatory agenda has indicated a proposed rule during 2026. **At the time of writing, check FDA's site for whether a proposed or final rule has been published.** ([reginfo.gov entry](https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202410&RIN=0910-AI90)) |
| **Recalls** | FDA has mandatory recall authority under MoCRA. |

### 16.3 Where IFRA fits in the US

**IFRA Standards are not US federal law.** However, they are widely used by the fragrance industry, are expected by customers and retailers, and are commonly used as part of **safety substantiation**. Most fragrance suppliers will issue IFRA Certificates regardless of market.

> ❌ **Common Mistake**
>
> "The US has no rules for cosmetics, so I don't need anything." Since MoCRA, obligations have expanded significantly, and the underlying adulteration/misbranding law has always applied.

<!-- -->

> ⚠️ **Important — other countries**
>
> Selling outside the UK, EU and US? This guide does not cover your country's rules. See [Section 1.4](#14-this-guide-covers-the-uk-eu-and-us--check-the-laws-where-you-are) and research your own national, regional and local requirements.

---

## 17. SDS, CLP and Transport

### 17.1 Three separate systems

| System | Governs | Legal basis (examples) | Applies to perfumers when… |
|---|---|---|---|
| **Cosmetic compliance** | Safety, labelling and notification of **finished cosmetics** | UK/EU Cosmetics Regulation; FD&C Act/MoCRA | You place a perfume on the market for consumers. |
| **Chemical hazard classification** | Hazard communication for **substances and mixtures** (raw materials, concentrates) | EU CLP Regulation (EC) No 1272/2008; GB CLP; REACH/UK REACH (SDS); US OSHA HazCom for workplaces | You buy, store, handle, or **supply** raw materials or fragrance concentrates. |
| **Transport of dangerous goods** | How hazardous goods may be **moved** by road, air, sea, post | UN Model Regulations; **ADR** (road, Europe/GB); **IATA DGR / ICAO TI** (air); **IMDG Code** (sea); US **49 CFR** (HMR); postal operators' own rules | You **ship** anything flammable or otherwise hazardous — including finished perfume. |

These systems have **different purposes**, so the same product can be exempt from one and fully regulated by another.

> 📘 **Example**
>
> A finished EDP in a 50 ml bottle:
> - **Cosmetics law:** fully applies (CPSR, labelling, etc.).
> - **CLP labelling:** does **not** apply to the finished cosmetic (cosmetics in their finished state intended for the end user are exempt from CLP labelling).
> - **Transport:** it **is** a flammable liquid — typically **UN 1266, Perfumery products with flammable solvents, Class 3** — and transport rules apply when it's shipped.

<!-- -->

> 📘 **Example**
>
> A 1 kg bottle of fragrance concentrate supplied to another business:
> - **Cosmetics law:** it is not a finished cosmetic.
> - **CLP:** applies — hazard classification and label (pictograms, signal word, hazard and precautionary statements, UFI where required in the EU).
> - **SDS:** required if the mixture is classified as hazardous (or meets other REACH Article 31 criteria).
> - **Transport:** depends on its flash point and other hazards (many concentrates are also classified as environmentally hazardous).

<!-- -->

> ⚠️ **Important — CLP is changing**
>
> The EU revised CLP in 2024 (Regulation (EU) 2024/2865, in force since 10 December 2024). Some of its new rules — including label formatting, advertising and distance-selling provisions — were later postponed to **1 January 2028** by Regulation (EU) 2025/2439. GB CLP is separate and does not automatically follow EU changes. If you supply concentrates, keep your classification and labels up to date and check the current application dates.

### 17.2 Alcoholic perfume — the concepts

- **Flammability:** perfumer's alcohol (ethanol) is highly flammable. Finished perfumes with a high alcohol content are flammable liquids.
- **Flash point:** the lowest temperature at which vapours can ignite in air. Ethanol-based perfumes have low flash points — that's why they are dangerous goods.
- **Dangerous goods classification:** alcoholic perfumes are typically shipped as **UN 1266 "Perfumery products with flammable solvents", Class 3 (flammable liquids)**, with a **packing group** (II or III) that depends on flash point and boiling point.
- **Transport restrictions:** each mode (road, air, sea, post) has its own rules on packaging, quantities, marking, labelling, documentation and staff **training**. Air transport is the strictest. Some carriers and postal services restrict or refuse flammable liquids or only accept them under specific conditions. Provisions such as **limited quantities** exist in the regulations, but they come with their own conditions and training requirements.

> ⚠️ **Important**
>
> Shipping fragrance internationally may require **different documentation** from selling it as a cosmetic — for example dangerous goods declarations, proper packaging, marks and labels, the SDS transport section, and carrier approval. **Always follow the dangerous-goods rules.** Never mis-declare perfume or concentrates as non-hazardous goods — it is illegal and creates a genuine fire risk for transport workers and aircraft. If unsure, talk to your carrier's dangerous-goods team or a qualified Dangerous Goods Safety Adviser (DGSA).

---

## 18. Common IFRA Mistakes

> ❌ **Mistake 1 — Comparing concentrate % directly with a finished-product IFRA limit**
>
> "Material X is 3% of my concentrate; the Category 4 limit is 0.6%, so I'm over." — Not necessarily. IFRA limits apply to the **finished product**.  
> **Avoid it:** always calculate `material % in concentrate × dosage ÷ 100` before comparing (Section 5).

<!-- -->

> ❌ **Mistake 2 — Forgetting to account for perfume dilution the other way round**
>
> "My concentrate is compliant, so any dosage is fine." — The concentrate is only compliant **up to** its maximum dosage.  
> **Avoid it:** always record the maximum Category 4 dosage and never exceed it in the finished product.

<!-- -->

> ❌ **Mistake 3 — Forgetting raw-material dilutions**
>
> Counting 5% of a 10% solution as 5% active (overestimating), or forgetting that a supplier material was already diluted (under- or over-estimating).  
> **Avoid it:** have a **dilution %** column and calculate **active %** for every line (Section 7).

<!-- -->

> ❌ **Mistake 4 — Using outdated IFRA certificates**
>
> A 48th- or 49th-Amendment certificate is not evidence of 51st-Amendment compliance.  
> **Avoid it:** record the Amendment on every document; request updates when a new Amendment is notified (the 52nd is expected late 2026).

<!-- -->

> ❌ **Mistake 5 — Relying only on CAS numbers**
>
> A search by one CAS number returns nothing, so the material is assumed unrestricted.  
> **Avoid it:** search by **name, synonyms, and all CAS numbers**; check constituents for mixtures and naturals (Section 4.3).

<!-- -->

> ❌ **Mistake 6 — Assuming "natural" means unrestricted**
>
> **Avoid it:** naturals can be restricted themselves and contain restricted and allergenic constituents (Section 8).

<!-- -->

> ❌ **Mistake 7 — Forgetting restricted constituents inside naturals**
>
> Methyl eugenol from basil or rose, citral from lemongrass, furocoumarins from bergamot, eugenol from clove…  
> **Avoid it:** use supplier composition data and **sum all sources** of each restricted substance.

<!-- -->

> ❌ **Mistake 8 — Confusing allergens with IFRA restrictions**
>
> "Linalool isn't IFRA-limited, so I don't need to label it." Allergen labelling is a separate **legal** requirement.  
> **Avoid it:** calculate allergens separately against 0.001% / 0.01% thresholds (Section 11).

<!-- -->

> ❌ **Mistake 9 — Assuming an SDS proves cosmetic compliance**
>
> **Avoid it:** an SDS is a chemical-hazard document. Use it for handling, CLP and transport — not as cosmetic or IFRA evidence.

<!-- -->

> ❌ **Mistake 10 — Assuming an IFRA certificate equals a CPSR**
>
> **Avoid it:** the CPSR is a legal requirement for the whole product, signed by a qualified assessor (Section 12).

<!-- -->

> ❌ **Mistake 11 — Using supplier usage recommendations as if they were legal limits**
>
> "Up to 5% in concentrate" on a TDS may be an odour/performance suggestion, not an IFRA or legal limit — and it could be higher or lower than the actual restriction.  
> **Avoid it:** use the **IFRA Standard** and **law** for limits; treat supplier recommendations as advice.

<!-- -->

> ❌ **Mistake 12 — Forgetting that Category 4 limits apply to finished-product exposure**
>
> Using the Category 4 limit as a % of the concentrate, or applying it to a lotion or body mist.  
> **Avoid it:** Category limits = % in the **finished product**, for **that product type** only.

<!-- -->

> ❌ **Mistake 13 — Treating parts by weight as percentages**
>
> A formula written as "Iso-style woody 150 parts, musk 300 parts … total 870 parts" — reading "150" as 15% is wrong: 150 ÷ 870 × 100 = **17.24%**.  
> **Avoid it:** always convert parts to % with `part ÷ total parts × 100` before any IFRA calculation.

<!-- -->

> ❌ **Mistake 14 — Failing to renormalise formulas properly**
>
> You add 20 parts of a new material to a 1000-part formula and keep the old percentages. Every percentage has changed: the total is now 1020 parts, so a material at 50 parts drops from 50 ÷ 1000 × 100 = 5.00% to 50 ÷ 1020 × 100 = **4.90%**, and the new material is 20 ÷ 1020 × 100 = **1.96%**.  
> **Avoid it:** let a spreadsheet recalculate % from parts automatically; check the % column sums to 100.00.

<!-- -->

> ❌ **Mistake 15 — Ignoring purity or active concentration**
>
> A material sold as "~50% active in a carrier", or a natural isolate of limited purity.  
> **Avoid it:** read the specification; adjust the active % accordingly.

<!-- -->

> ❌ **Mistake 16 — Mixing documentation from different versions of the same raw material**
>
> Using supplier A's allergen declaration with supplier B's oil, or last year's spec with this year's re-formulated base.  
> **Avoid it:** file documents by **supplier + product code + date**; when you change supplier, get a full new set of documents.

<!-- -->

> ❌ **Mistake 17 — Measuring by volume and calculating by weight**
>
> **Avoid it:** weigh everything (Section 5.6).

<!-- -->

> ❌ **Mistake 18 — Formulating exactly at the limit**
>
> **Avoid it:** leave a margin for weighing tolerance and natural batch variation.

---

## 19. Worked Compliance Example

> ⚠️ **READ FIRST**
>
> Everything in this example is **fictional**. Material names are invented; **all IFRA limits and constituent percentages are HYPOTHETICAL educational numbers** and must **not** be used in real formulas. Only the allergen labelling thresholds (0.001% / 0.01%) and the allergen status of limonene and linalool are real.

### 19.1 The brief

A small brand wants an **Eau de Parfum** (IFRA **Category 4**, leave-on) at **20% w/w** concentrate in perfumer's alcohol.

### 19.2 Step 1 — The formula (in parts by weight)

| # | Material | Type | Parts | Formula % | Dilution % | Active % |
|---|---|---|---|---|---|---|
| 1 | "Musk M" | Synthetic musk | 235 | 23.50 | 100 | 23.50 |
| 2 | "Woody W" | Synthetic woody | 150 | 15.00 | 100 | 15.00 |
| 3 | "Floral F" | Synthetic floral | 200 | 20.00 | 100 | 20.00 |
| 4 | Linalool | Aroma chemical (real allergen) | 40 | 4.00 | 100 | 4.00 |
| 5 | "Citrus Oil C" | **Essential oil** (fictional) | 120 | 12.00 | 100 | 12.00 |
| 6 | "Restricted R1" | **Restricted** material | 20 | 2.00 | 100 | 2.00 |
| 7 | "Restricted R2" 10% in DPG | **Restricted**, **diluted** | 50 | 5.00 | 10 | 0.50 |
| 8 | "Aldehyde A" 1% in DPG | Diluted | 30 | 3.00 | 1 | 0.03 |
| 9 | "Vanillic V" 50% in DPG | Diluted | 40 | 4.00 | 50 | 2.00 |
| 10 | "Amber X" | Synthetic amber | 60 | 6.00 | 100 | 6.00 |
| 11 | "Green G" 10% in DPG | Diluted | 20 | 2.00 | 10 | 0.20 |
| 12 | "Fruity E" | Synthetic fruity | 15 | 1.50 | 100 | 1.50 |
| 13 | DPG | Solvent | 20 | 2.00 | — | (solvent) |
| | **Total** | | **1000** | **100.00** | | |

### 19.3 Step 2 — Normalise and calculate active %

**Normalising:** Formula % = parts ÷ total parts × 100. Total = 1000 parts, e.g. Musk M = 235 ÷ 1000 × 100 = **23.50%**.

Sum check: 23.5 + 15 + 20 + 4 + 12 + 2 + 5 + 3 + 4 + 6 + 2 + 1.5 + 2 = **100.00** ✔

**Active % for diluted lines:**
- R2: 5.00 × (10 ÷ 100) = **0.50%** (DPG = 5.00 − 0.50 = 4.50%)
- Aldehyde A: 3.00 × (1 ÷ 100) = **0.03%** (DPG = 2.97%)
- Vanillic V: 4.00 × (50 ÷ 100) = **2.00%** (DPG = 2.00%)
- Green G: 2.00 × (10 ÷ 100) = **0.20%** (DPG = 1.80%)

**Total DPG in the concentrate** = 4.50 + 2.97 + 2.00 + 1.80 + 2.00 (neat) = **13.27%**

### 19.4 Step 3 — Identify restricted materials and constituents

From supplier documents (fictional) and the IFRA Standards Library (hypothetical limits):

| Substance | Sources in formula | Supplier data (HYPOTHETICAL) | Cat 4 limit (HYPOTHETICAL) |
|---|---|---|---|
| **R1** | Line 6 (neat) | — | **0.50%** |
| **R2** | Line 7 (10% dilution) | — | **0.12%** |
| **Constituent K** | Citrus Oil C (line 5) **and** Floral F (line 3) | Oil C contains **0.40%** K; Floral F contains **0.05%** K | **0.015%** |
| Limonene | Citrus Oil C | Oil C contains **35%** limonene | Allergen (label > 0.001%); IFRA oxidation specification — confirm supplier compliance |
| Linalool | Line 4 + Citrus Oil C | Oil C contains **15%** linalool | Allergen (label > 0.001%); IFRA oxidation specification — confirm supplier compliance |
| "Allergen Y" (placeholder for any listed allergen) | Woody W | Woody W contains **0.02%** Y | Allergen threshold only |

All other materials: the (fictional) suppliers' IFRA documents state no Standards apply. *(In real life you would verify each one yourself — Section 22.)*

### 19.5 Step 4 — Calculate each restricted substance in the concentrate

- **R1:** 2.00% (neat) → **2.00%**
- **R2:** active = **0.50%**
- **Constituent K:**
    - from Citrus Oil C: 12.00 × (0.40 ÷ 100) = 12 × 0.004 = **0.048%**
    - from Floral F: 20.00 × (0.05 ÷ 100) = 20 × 0.0005 = **0.010%**
    - **Total K** = 0.048 + 0.010 = **0.058%**

### 19.6 Step 5 — Finished-product exposure at 20% dosage

| Substance | % in concentrate | × dosage fraction | % in finished EDP | Hypothetical limit | Result |
|---|---|---|---|---|---|
| R1 | 2.00 | × 0.20 | **0.400%** | 0.50% | ✔ Pass |
| R2 | 0.50 | × 0.20 | **0.100%** | 0.12% | ✔ Pass |
| K | 0.058 | × 0.20 | **0.0116%** | 0.015% | ✔ Pass |

### 19.7 Step 6 — Maximum fragrance dosage per substance

| Material | % in concentrate | Cat 4 limit (HYPOTHETICAL) | Calculation | Maximum fragrance dosage |
|---|---|---|---|---|
| R1 | 2.00% | 0.50% | 0.50 ÷ 2.00 = 0.2500 | **25.0%** |
| R2 | 0.50% | 0.12% | 0.12 ÷ 0.50 = 0.2400 | **24.0%** ← lowest |
| Constituent K | 0.058% | 0.015% | 0.015 ÷ 0.058 = 0.2586 | **25.9%** |

### 19.8 Step 7 — The limiting material

**R2 is the limiting material.** Maximum Category 4 dosage of this concentrate = **24.0%**.

- The planned **20% EDP** is below 24.0% → ✔ compliant with the (hypothetical) IFRA limits.
- If the brand later wanted a **25% Extrait**: R2 would be 0.50 × 0.25 = **0.125%** > 0.12% ✘. They would need to reduce R2 to ≤ 0.12 ÷ 0.25 = **0.48%** active (i.e. ≤ 4.80% of the 10% dilution), and then re-check R1 (2.00 × 0.25 = 0.50% — exactly at its limit, with no safety margin) and K (0.058 × 0.25 = 0.0145% — just under). In practice they would reformulate with more headroom.

### 19.9 Step 8 — Allergen calculation (leave-on, threshold 0.001%)

| Allergen | Sources | Calculation in concentrate | % in concentrate | In EDP at 20% | Label? |
|---|---|---|---|---|---|
| **Linalool** | Line 4 + Oil C | 4.00 + (12.00 × 15 ÷ 100) = 4.00 + 1.80 | **5.80%** | 5.80 × 0.20 = **1.16%** | ✔ Yes (> 0.001%) |
| **Limonene** | Oil C | 12.00 × 35 ÷ 100 | **4.20%** | 4.20 × 0.20 = **0.84%** | ✔ Yes |
| **Allergen Y** | Woody W | 15.00 × 0.02 ÷ 100 = 15 × 0.0002 | **0.003%** | 0.003 × 0.20 = **0.0006%** | ✘ No (below 0.001%) — record it anyway |

**Resulting ingredient list (simplified, EU/UK style):**
*Alcohol Denat., Parfum (Fragrance), Aqua (Water) [if used], Linalool, Limonene* — plus any other allergens that the full declarations reveal above threshold, and any other ingredients (e.g. denaturants, UV filters, antioxidants, colourants).

Note: linalool (1.16%) is above 1%, so it must sit in its correct descending-order position; limonene (0.84%) is below 1% and may follow in any order. This list assumes any water present is above 1.16%.

### 19.10 Step 9 — Documents to obtain and file

| For… | Documents |
|---|---|
| **Every raw material (13 lines)** | SDS · IFRA document (current Amendment) · allergen declaration (expanded EU list) · specification/TDS · COA per batch |
| **Citrus Oil C** | Also GC/MS or composition data; confirmation of specification compliance (e.g. phototoxicity-related Standards for citrus oils — check the relevant Standard, especially after the 52nd Amendment) |
| **Linalool, Limonene-containing materials** | Confirmation of compliance with IFRA oxidation specifications (e.g. antioxidant use / peroxide value) |
| **The concentrate** | Formula records with calculations · IFRA conformity document · allergen declaration · SDS & CLP label (if supplied as a mixture) |
| **Finished EDP** | Full formula incl. alcohol & denaturant specs · stability/compatibility data · packaging specs · label artwork · CPSR · GMP/batch records · notification (SCPN/CPNP) · PIF |

---

## 20. Compliance Workflow for a Perfumer

**Printable checklist** — tick each box for every new product or formula change.

```
PERFUMERY COMPLIANCE WORKFLOW                    Product: ______________________
                                                 Formula version: ______________
                                                 Date: _________________________

[ ] STEP 1  Obtain documentation for every raw material
            [ ] SDS   [ ] IFRA document   [ ] Allergen declaration
            [ ] Specification/TDS   [ ] COA for batch used

[ ] STEP 2  Record for each material:
            [ ] Trade name   [ ] Supplier   [ ] Product code
            [ ] CAS / botanical name   [ ] Dilution %   [ ] Document dates

[ ] STEP 3  Build the fragrance formula (by WEIGHT)

[ ] STEP 4  Normalise the formula to 100%
            [ ] % column sums to 100.00
            [ ] Active % calculated for every diluted material

[ ] STEP 5  Identify restricted materials AND constituents
            [ ] Direct materials   [ ] Constituents of naturals and bases
            [ ] Prohibited materials absent   [ ] Specifications met

[ ] STEP 6  Check the CURRENT IFRA Standards
            Amendment used: ________   Date checked: ________

[ ] STEP 7  Calculate maximum usage for the relevant IFRA category
            Category: ____   Limiting material: ____________
            Max dosage: ____%   Planned dosage: ____%   Margin OK? [ ]

[ ] STEP 8  Calculate allergens (all sources)
            Market list used: [ ] EU expanded   [ ] GB   [ ] other
            Leave-on (0.001%) / Rinse-off (0.01%)   Allergens to label: ________

[ ] STEP 9  Create fragrance documentation
            [ ] IFRA conformity doc   [ ] Allergen declaration
            [ ] SDS & CLP label (if supplying the concentrate)

[ ] STEP 10 Submit information to safety assessor / Responsible Person
            [ ] Full formula   [ ] Supporting documents   [ ] Stability data
            [ ] Packaging info   [ ] Label artwork

[ ] STEP 11 Complete finished-product regulatory steps
            [ ] CPSR signed   [ ] PIF complete   [ ] GMP records
            [ ] Notification: [ ] SCPN (GB)  [ ] CPNP (EU)  [ ] FDA listing (US, if applicable)
            [ ] Label checked   [ ] Transport/DG arrangements for shipping

[ ] STEP 12 Re-check compliance whenever:
            [ ] Formula changes   [ ] Supplier or raw-material grade changes
            [ ] New IFRA Amendment   [ ] Regulation changes (GB/EU/US)
            [ ] New supplier documents issued
            Next scheduled review date: ________
```

> ✅ **Good Practice**
>
> Set a calendar reminder to review all live products at least **once a year**, and immediately after any IFRA Amendment notification or relevant change in law.

---

## 21. Compliance Spreadsheet Structure

A well-built spreadsheet turns compliance into a routine task. Below is a suggested layout for Excel or Google Sheets.

### 21.1 Suggested columns

Put the **finished-product dosage** (e.g. 20) in a fixed cell, say **`$B$1`**, and the table header in row 3, data from row 4.

| Col | Header | Content / formula (row 4) |
|---|---|---|
| A | Material name | Text |
| B | Supplier | Text |
| C | Supplier product code | Text |
| D | CAS | Text (format column as Text so leading zeros/dashes aren't lost) |
| E | Parts (weight) | Number you weigh |
| F | Formula % | `=E4/SUM($E$4:$E$50)*100` |
| G | Dilution % | Number (100 for neat) |
| H | Active % | `=F4*G4/100` |
| I | Finished product % | `=H4*$B$1/100` |
| J | IFRA restricted? | Yes / No / Spec only |
| K | IFRA restriction type | Prohibition / Restriction / Specification |
| L | Category 4 maximum (%) | From the current IFRA Standard |
| M | Maximum fragrance dosage (%) | `=IF(AND(ISNUMBER(L4),H4>0),L4/H4*100,"")` |
| N | Pass at planned dosage? | `=IF(ISNUMBER(L4),IF(I4<=L4,"OK","EXCEEDS"),"")` |
| O | Allergens present | Text (from allergen declaration) |
| P | Allergen % in material | Number |
| Q | Allergen % contributed to concentrate | `=H4*P4/100` (uses **active** %, so diluted materials are counted correctly) |
| R | SDS available? | Y/N |
| S | IFRA document available? | Y/N |
| T | Allergen declaration available? | Y/N |
| U | Specification available? | Y/N |
| V | Date documents checked | Date |
| W | IFRA Amendment/version | e.g. "51st" |

> Note: M uses the active % from column H. For substances coming from several sources (constituents), use a **separate constituents table** (below) rather than a single row.

### 21.2 Summary cells

```
Total formula %                  =SUM(F4:F50)                → should equal 100
Limiting maximum dosage (%)      =MIN(M4:M50)
Limiting material                =INDEX(A4:A50, MATCH(MIN(M4:M50), M4:M50, 0))
Planned dosage OK?               =IF($B$1<=MIN(M4:M50),"OK","REDUCE DOSAGE OR REFORMULATE")
Any failures?                    =COUNTIF(N4:N50,"EXCEEDS")
Missing documents                =COUNTIF(R4:U50,"N")
```

### 21.3 Constituents and allergens table (recommended)

Because allergens and restricted constituents come from several materials, use a **matrix** on a separate tab: one row per material, one column per substance, cells = % of that substance in the **neat** material (from supplier documents). Column B holds each material's **active %** (not formula %), so diluted materials are counted correctly.

| Material | Active % | Linalool % in material | Limonene % in material | Constituent K % in material | … |
|---|---|---|---|---|---|
| Linalool | 4.00 | 100 | 0 | 0 | |
| Citrus Oil C | 12.00 | 15 | 35 | 0.40 | |
| Floral F | 20.00 | 0 | 0 | 0.05 | |

Totals row (for each substance column, e.g. Linalool in column C, active % in column B, rows 4–50; the dosage cell lives on the main tab, here called `Main`):

```
% in concentrate      =SUMPRODUCT($B$4:$B$50, C4:C50)/100
% in finished product =[cell above]*Main!$B$1/100
Label? (leave-on)     =IF([finished cell]>0.001,"LABEL","")
Label? (rinse-off)    =IF([finished cell]>0.01,"LABEL","")
Max dosage (restricted substance) =IFERROR([limit]/[% in concentrate]*100,"")
```

> ✅ **Good Practice**
>
> - Lock formula columns to avoid accidental overwrites.
> - Keep one tab per formula **version**; never overwrite an old version that has been sold.
> - Keep a "Sources" tab listing every document, its version, date and where it's stored.
> - Use conditional formatting to highlight "EXCEEDS", "LABEL" and missing documents.

---

## 22. How to Research an Ingredient Properly

A repeatable process for every new raw material:

| Step | Action | Record |
|---|---|---|
| **1** | **Check supplier IFRA documentation** for the exact product code. Note the Amendment and date. | Amendment, date, max levels per category |
| **2** | **Check the supplier SDS** — identity (Section 1, 3), hazards (Section 2), flash point (Section 9), transport (Section 14). | Hazard classes, CAS/EC numbers |
| **3** | **Check the supplier allergen declaration** — which list it covers (26 vs expanded EU list) and the %. | Allergens and % |
| **4** | **Search the official [IFRA Standards Library](https://ifrafragrance.org/standards-library)** by name, synonyms and each CAS number. | Standard found? Type? Cat 4 limit? Notes? |
| **5** | **Confirm identity** — CAS, synonym, INCI name, and for naturals the **botanical name**, plant part, extraction method. Compare with the specification. | Confirmed identity |
| **6** | **Check constituent-based restrictions** — for naturals and bases, check composition data for restricted constituents and the IFRA annex on contributions from other sources. | Constituents and % |
| **7** | **Check the law** for your markets — EU Annex II/III (via EUR-Lex and CosIng), GB Annexes, any US requirements. | Legal status |
| **8** | **Record the source and date checked** for every fact. | Source + date |

> ⚠️ **Important — hierarchy of sources**
>
> 1. **Official texts** (IFRA Standards, EUR-Lex, legislation.gov.uk, GOV.UK, FDA) and **your supplier's documents for the exact material you bought**;
> 2. Recognised reference sources (e.g. IFRA's annexes, the Commission's CosIng database — which is informative, not legally binding);
> 3. Third-party websites, forums, blogs, and unofficial databases.
>
> Random online databases can be **out of date or simply wrong**. They should **not** override primary supplier documentation or official regulatory sources. Use them, at most, as a prompt to go and check the official source.

---

## 23. Glossary

| Term | Definition |
|---|---|
| **Active material** | The actual aromatic substance present, excluding any solvent or carrier it's diluted in. |
| **Allergen** | In this guide, a fragrance substance listed in the Cosmetics Regulation (Annex III) that must be named on the label above a threshold, because it can cause allergic contact dermatitis in sensitised people. |
| **CAS (CAS number)** | A unique identifier assigned to a chemical substance by the Chemical Abstracts Service (e.g. format 00000-00-0). |
| **CLP** | EU Regulation (EC) No 1272/2008 on Classification, Labelling and Packaging of substances and mixtures (GB has its own "GB CLP"). |
| **COA** | Certificate of Analysis — batch-specific test results against the specification. |
| **Concentrate** | The fragrance oil / compound before dilution into the finished product (also "fragrance compound", "juice" concentrate). |
| **CPNP** | Cosmetic Products Notification Portal — the EU's online system for notifying cosmetic products. |
| **CPSR** | Cosmetic Product Safety Report — the legally required safety assessment of a finished cosmetic (UK/EU), Parts A and B. |
| **Dilution** | A solution of a material in a solvent (e.g. 10% in DPG). The dilution % states how much active material is in the solution. |
| **Finished product** | The product as sold to and used by the consumer (e.g. the EDP including alcohol). IFRA limits apply here. |
| **Flash point** | The lowest temperature at which a liquid gives off enough vapour to ignite in air. Key to flammability and transport classification. |
| **GC/MS** | Gas Chromatography–Mass Spectrometry — the lab technique used to identify and quantify components of a mixture, especially naturals. |
| **GMP** | Good Manufacturing Practice — controlled, hygienic, documented, traceable manufacture (ISO 22716 for cosmetics). |
| **IFRA** | International Fragrance Association — the global fragrance industry body that publishes the IFRA Standards. |
| **IFRA Amendment** | A numbered update to the IFRA Standards (e.g. 51st, 52nd), with notification and implementation dates. |
| **IFRA Category** | One of IFRA's product types (1–12, with sub-categories) that determine which limit applies. Category 4 = fine fragrance. |
| **INCI** | International Nomenclature of Cosmetic Ingredients — standard names used on cosmetic ingredient lists (e.g. "Parfum", "Linalool", "Alcohol Denat."). |
| **PIF** | Product Information File — the complete technical dossier for a cosmetic, kept by the Responsible Person for 10 years after the last batch (UK/EU). |
| **Prohibition** | An IFRA Standard (or legal provision) stating that a material must not be used. |
| **Responsible Person (RP)** | The legal or natural person (UK- or EU-established as appropriate) responsible for a cosmetic's compliance. In the US, MoCRA also uses "responsible person" for the manufacturer, packer or distributor named on the label. |
| **Restriction** | An IFRA Standard (or legal provision) limiting the maximum concentration of a material in the finished product. |
| **SCPN** | Submit Cosmetic Product Notifications — the GB (UK) notification service run by OPSS. |
| **SDS** | Safety Data Sheet — 16-section hazard communication document for substances/mixtures. |
| **Specification** | (1) An IFRA Standard type setting purity/quality criteria; (2) a supplier document describing what a material should be (appearance, purity, density etc.). |
| **TDS** | Technical Data Sheet — supplier document describing a material's properties and often usage information. |

Additional useful terms: **Annex II / III** (lists of prohibited / restricted cosmetic ingredients), **DGSA** (Dangerous Goods Safety Adviser), **MoCRA** (US Modernization of Cosmetics Regulation Act 2022), **OPSS** (UK Office for Product Safety and Standards), **PAO** (Period After Opening), **QRA** (Quantitative Risk Assessment, used by IFRA/RIFM for sensitisers), **RIFM** (Research Institute for Fragrance Materials), **UFI** (Unique Formula Identifier for EU poison-centre notifications), **UN 1266** (transport entry for perfumery products with flammable solvents).

---

## 24. Useful Official Resources

| Resource | Use it for… |
|---|---|
| [IFRA Standards Library](https://ifrafragrance.org/standards-library) | Searching the current IFRA Standard for any material by name or CAS. |
| [IFRA Standards overview](https://ifrafragrance.org/initiatives-positions/safe-use-fragrance-science/ifra-standards) | Understanding what the Standards are and finding current Amendment news. |
| [IFRA Standards documentation](https://ifrafragrance.org/initiatives-positions/safe-use-fragrance-science/ifra-standards/ifra-standards-documentation) | Downloading the Guidance for the use of IFRA Standards (including the product-category definitions) and related annexes. |
| [IFRA Code of Practice](https://ifrafragrance.org/initiatives-positions/safe-use-fragrance-science/ifra-standards/ifra-code-of-practice) | Reading the framework the IFRA Standards sit within. |
| [IFRA — Understanding the Standards](https://ifrafragrance.org/understanding-standards) / [Using the Standards](https://ifrafragrance.org/using-the-standards) | Plain-language explanations of how Standards are made and applied. |
| [IFRA — 52nd Amendment consultation](https://ifrafragrance.org/latest-updates/ifra-news/ifra-standards---52nd-amendment-consultation) | Tracking the upcoming Amendment and its notification. |
| [GOV.UK — Making cosmetic products available to consumers in Great Britain](https://www.gov.uk/guidance/making-cosmetic-products-available-to-consumers-in-great-britain) | The main UK guidance on Responsible Persons, safety, labelling and notification. |
| [GOV.UK — Submit a cosmetic product notification](https://www.gov.uk/guidance/submit-a-cosmetic-product-notification) | Learning how GB notification works and what information is needed. |
| [SCPN service](https://submit.cosmetic-product-notifications.service.gov.uk/) | Actually submitting GB cosmetic product notifications. |
| [GOV.UK — Consumer products: cosmetics](https://www.gov.uk/guidance/consumer-products-cosmetics) | Broader UK product-safety context for cosmetics. |
| [European Commission — Cosmetics](https://single-market-economy.ec.europa.eu/sectors/cosmetics_en) | The EU's hub for cosmetics policy, guidance and news. |
| [European Commission — Cosmetics legislation](https://single-market-economy.ec.europa.eu/sectors/cosmetics/legislation_en) | Finding the Cosmetics Regulation, amendments and official guidelines (e.g. Annex I/CPSR guidelines). |
| [EU CPNP information](https://single-market-economy.ec.europa.eu/sectors/cosmetics/cosmetic-product-notification-portal_en) / [CPNP portal](https://webgate.ec.europa.eu/cpnp/) | Understanding and completing EU product notification. |
| [Regulation (EC) No 1223/2009 on EUR-Lex](https://eur-lex.europa.eu/eli/reg/2009/1223/oj) | Reading the legally binding EU Cosmetics Regulation (use the "consolidated version" for the latest Annexes). |
| [Regulation (EU) 2023/1545 on EUR-Lex](https://eur-lex.europa.eu/eli/reg/2023/1545/oj) | Reading the official expanded EU fragrance allergen labelling rules and transition dates. |
| [EU CosIng database](https://single-market-economy.ec.europa.eu/sectors/cosmetics/cosmetic-ingredient-database_en) | Quickly checking an ingredient's INCI name and EU regulatory status (informative, not legally binding). |
| [FDA — MoCRA](https://www.fda.gov/cosmetics/cosmetics-laws-regulations/modernization-cosmetics-regulation-act-2022-mocra) | Understanding current US cosmetic obligations and FDA implementation updates (including fragrance allergen rulemaking). |
| [FDA — Registration & Listing](https://www.fda.gov/cosmetics/registration-listing-cosmetic-product-facilities-and-products) | Registering facilities and listing products in the US. |
| [FDA — Small Businesses & Homemade Cosmetics fact sheet](https://www.fda.gov/cosmetics/resources-industry-cosmetics/small-businesses-homemade-cosmetics-fact-sheet) | Checking which US obligations apply to small businesses. |
| [ECHA — CLP](https://echa.europa.eu/regulations/clp/understanding-clp) | Understanding EU chemical hazard classification and labelling for raw materials and concentrates. |
| [HSE — GB CLP](https://www.hse.gov.uk/chemical-classification/index.htm) | Understanding GB chemical classification and labelling rules. |
| [Health Canada — Cosmetics](https://www.canada.ca/en/health-canada/services/consumer-product-safety/cosmetics.html) | Checking Canadian cosmetic rules, notification and fragrance allergen requirements. |
| **Your own country's cosmetics regulator** | Finding the laws that apply where you live, manufacture or sell — essential if you are outside the UK, EU or US (see Section 1.4). |

---

# Perfumery Compliance Cheat Sheet

*One page. Print it. Pin it above your scale.*

### 🔢 Key IFRA formulas (all % by WEIGHT)

```
NORMALISE      formula % = parts ÷ total parts × 100
ACTIVE         active % = formula % × dilution % ÷ 100
FINISHED       finished % = active % × dosage % ÷ 100
MAX IN CONC.   max active % = IFRA limit % ÷ (dosage % ÷ 100)
MAX DOSAGE     max dosage % = IFRA limit % ÷ active % × 100
LIMITING       lowest max dosage of all restricted
               substances = max dosage of the formula
ALLERGEN       conc. % = Σ(active % × allergen % ÷ 100)
               finished % = conc. % × dosage % ÷ 100
```

### 🧴 Category 4 basics
- Category 4 = **fine fragrance** (EDP, EDT, parfum, cologne, perfume oils…).
- Limits are **% of the finished product**, not of the concentrate.
- Other product types (lotion, soap, candle, body mist) have **other categories and limits** — look them up in IFRA's guidance.

### 🌿 Allergen basics (UK/EU)
- Label by name if the finished product contains **> 0.001% (leave-on)** or **> 0.01% (rinse-off)**.
- Count **all sources**, including naturals and benzyl benzoate.
- **EU:** expanded list (Reg. 2023/1545) for products placed on the market from **31 July 2026**. **GB:** check current OPSS position.

### 📁 Documents to collect for every raw material
SDS · IFRA document (current Amendment) · Allergen declaration · Specification/TDS · COA · (GC/MS for naturals)

### 📑 CPSR vs PIF
- **CPSR** = safety report for the finished product (Part A data + Part B assessor conclusion). Legal requirement UK/EU.
- **PIF** = the whole dossier (product description + CPSR + manufacturing/GMP + claims proof + animal-testing data). Keep 10 years after last batch.
- **IFRA certificate ≠ CPSR. SDS ≠ cosmetic compliance.**

### 🔁 The workflow
1 Docs → 2 Record → 3 Build → 4 Normalise → 5 Identify restricted → 6 Check current IFRA → 7 Max dosage → 8 Allergens → 9 Fragrance docs → 10 Assessor/RP → 11 CPSR, PIF, notify, label → 12 Re-check on any change

### 🌍 Market basics
- **GB:** UK RP · SCPN · CPSR · PIF · GMP · label.
- **EU:** EU RP · CPNP · CPSR · PIF · GMP · label (local languages).
- **US:** FD&C Act + MoCRA (registration/listing, safety substantiation, adverse events, label contact info); IFRA is industry practice, not federal law.
- **Shipping alcoholic perfume:** dangerous goods (typically **UN 1266, Class 3**) — follow carrier and DG rules.
- **Anywhere else:** do your own research into **your country's and local laws** (and those of every country you ship to).

### ⚠️ Top mistakes to avoid
1. Comparing concentrate % to a finished-product limit.
2. Forgetting dilutions (5% of a 10% solution = 0.5% active).
3. Outdated IFRA certificates (check the Amendment — 52nd expected late 2026).
4. Searching by CAS only.
5. "Natural = unrestricted."
6. Missing constituents in naturals.
7. Confusing allergen labelling with IFRA limits.
8. Treating an SDS or IFRA certificate as a CPSR.
9. Treating supplier suggestions as legal limits.
10. Parts ≠ percent; renormalise after every change.
11. Measuring by volume, calculating by weight.
12. Formulating right at the limit with no margin.

---

*This guide is for educational purposes only and is not legal, regulatory or toxicological advice. Regulations and IFRA Standards change over time. Always verify requirements against current official guidance, supplier documentation, and where appropriate a qualified cosmetic safety assessor. Laws differ between countries and regions: do your own research into the requirements for your country, your local area, and every market you sell or ship to.*

*Written September 2026. Found an error or an out-of-date reference? Please flag it to the community moderators so the guide can be updated.*
