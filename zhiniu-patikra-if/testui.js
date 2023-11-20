function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log("pirmas uzhdavinys");
let kauliukas1 = rand(1, 6);
let kauliukas2 = rand(1, 6);
console.log("pirmas kauliukas", kauliukas1, "antras kauliukas", kauliukas2);
if (kauliukas1 + kauliukas2 >= 8) {
  console.log("laimejote");
} else if (kauliukas1 + kauliukas2 < 8) {
  console.log("praloshete");
}
console.log("antras uzhdavinys");
let pilkis = rand(3, 6);
let murklys = rand(3, 6);
console.log("Pilkis sveria", pilkis, "kg, o Murklys sveria", murklys, "kg");
if (pilkis < murklys) {
  console.log("Pilkis yra lengvesnis");
} else if (pilkis > murklys) {
  console.log("Murklys yra lengvesnis");
} else console.log("katinukai sveria vienodai");
console.log("trechias uzhdavinys");
let katinukai = rand(0, 30);
let karves = rand(0, 30);
console.log("atejo", katinukai, "katinukai ir", karves, "karves");
if (katinukai > 15) console.log("katinukai netelpa");
else {
  console.log("katinukai telpa");
}
if (karves > 15) console.log("karves netelpa");
else {
  console.log("karves telpa");
}
if (katinukai > 15 || karves > 15) console.log("viskas netelpa");
else {
  console.log("viskas telpa");
}
console.log('ketvirtas uzhdavinys');
let anteskaulas = rand(1, 6);
console.log('Antanas rideno kauliuka ir ishrideno', anteskaulas, 'taigi pirks')
if (anteskaulas = 1 || anteskaulas = 5) console.log('Antanas pirks telika')
if (anteskaulas = 3 || anteskaulas = 4) console.log('Antanas pirks skalbenke')
if (anteskaulas = 2 || anteskaulas = 6) console.log('Antanas pirks shaldytuva')
