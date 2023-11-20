console.log("Pirmas uzhd");
let digit1 = rand(0, 4);
let digit2 = rand(0, 4);

console.log("jei salyga yra", digit1, digit2, "tai gaunasi");
let digit3 = digit1 / digit2 || digit2 / digit1;
if (digit1 > digit2 / digit2);
else if (digit2 > digit1 / digit1);

console.log("rezultatas", digit3);

console.log("Antras uzhd");
let x1 = rand(0, 25);
let x2 = rand(0, 25);
let x3 = rand(0, 25);
console.log(
  "jei atsitiktiniai trys skaichiai nuo 0 iki 25 yra",
  x1,
  x2,
  x3,
  "tai vidurinis bus"
);
if ((x1 > x2 && x1 < x3) || (x1 > x3 && x1 < x2)) {
  console.log(x1);
} else if ((x2 > x1 && x2 < x3) || (x2 > x3 && x2 < x1)) {
  console.log(x2);
} else if ((x3 > x1 && x3 < x2) || (x3 > x2 && x3 < x1)) {
  console.log(x3);
}
console.log("Trechias uzhd");
let a = rand(1, 10);
let b = rand(1, 10);
let c = rand(1, 10);
console.log(
  "Jeigu trikampio krashtiniu ilgiai yra",
  a,
  b,
  c,
  "tuomet trikampis bus"
);
if (a + b > c && a + c > b && b + c > a) {
  console.log("leidzhiamas");
} else {
  console.log("neleidzhiamas");
}

console.log("Ketvirtas uzhd");
let kint1 = rand(0, 2);
let kint2 = rand(0, 2);
let kint3 = rand(0, 2);
let kint4 = rand(0, 2);
console.log("duoti skaichiai yra", kint1, kint2, kint3, kint4);
let kinta = 0;
let kintb = 0;
let kintc = 0;
if (kint1 === 0) {
  kinta++;
}
if (kint2 === 0) {
  kinta++;
}
if (kint3 === 0) {
  kinta++;
}
if (kint4 === 0) {
  kinta++;
}
if (kint1 === 1) {
  kintb++;
}
if (kint2 === 1) {
  kintb++;
}
if (kint3 === 1) {
  kintb++;
}
if (kint4 === 1) {
  kintb++;
}
if (kint1 === 2) {
  kintc++;
}
if (kint2 === 2) {
  kintc++;
}
if (kint3 === 2) {
  kintc++;
}
if (kint4 === 2) {
  kintc++;
}

console.log(
  "nuliu ish viso",
  kinta,
  "vienetu ish viso",
  kintb,
  "dvejetu ish viso",
  kintc
);

let x = rand(-10, 10);
let y = rand(-10, 10);
let z = rand(-10, 10);

console.log("Penktas uzhd");
console.log("duoti trys skaichiai intervale -10~10 yra", x, y, z);
if (x < 0) {
  console.log("+", x, "+");
}
if (x === 0) {
  console.log("", x, "");
}
if (x > 0) {
  console.log("-", x, "-");
}
if (y < 0) {
  console.log("+", y, "+");
}
if (y === 0) {
  console.log("", y, "");
}
if (y > 0) {
  console.log("-", y, "-");
}
if (z < 0) {
  console.log("+", z, "+");
}
if (z === 0) {
  console.log("", z, "");
}
if (z > 0) {
  console.log("-", z, "-");
}

console.log("Sheshtas uzhd");
let zhvakeskaina = rand(1, 3000);
let zhvakes = zhvakeskaina;
console.log("jei bus perkamos", zhvakes);
if (zhvakeskaina > 2000) {
  console.log("zhvakes kainuos su 4% nuolaida", zhvakeskaina * 0.96);
} else if (zhvakeskaina > 1000) {
  console.log("zhvakes kainuos su 3% nuolaida", zhvakeskaina * 0.97);
}

/* true = ((a + b > c) && (a + c > b) && (b + c > a)) */
/* false = ((a + b <= c) && (a + c <= b) && (b + c <= a)) */

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
