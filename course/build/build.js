const T = require("./theme");
const L = require("./layouts");

const pres = T.newDeck();
pres.author = T.BRAND_NAME;
pres.title = `${T.BRAND_NAME} — The Art & Science of Perfumery`;
pres.subject = "Beginner-to-intermediate perfumery course companion deck";

L.resetPager();

const modules = [
  "./modules/00-intro",
  "./modules/01-basics",
  "./modules/02-equipment",
  "./modules/03_1-naturals",
  "./modules/03_2-synthetics",
  "./modules/03-shopping",
  "./modules/04-dilution",
  "./modules/05-nose",
  "./modules/06-accords",
  "./modules/07-formula",
  "./modules/08-evaluating",
  "./modules/09-alcohol",
  "./modules/10-maturation",
  "./modules/11-compliance",
  "./modules/12-brand",
];

for (const m of modules) {
  require(m)(pres);
}

const outPath = process.argv[2] || "./LEPARFUMSIMPLIFIE.pptx";
pres.writeFile({ fileName: outPath }).then(() => {
  console.log("Wrote", outPath);
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
