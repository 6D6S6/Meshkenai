let pirmas = rand(0, 5) || "Zero";
console.log(pirmas);

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let antras = rand(0, 1) ? "True" : "False";
console.log(antras);

console.log(" L O O P S ");
console.log("Sveiki Racoon city");
console.log("Sveiki Racoon city");
console.log("Sveiki Racoon city");
console.log("Sveiki Racoon city");
console.log("Sveiki Racoon city");

for (let i = 0; i < 5; i++) {
  console.log("Sveiki Racoon city", i);
}

for (let i = 0; i < 5; i += 2) {
  console.log("Sveiki Racoon city", i);
}
for (let i = rand(1, 20); i < 20; i++) {
  console.log("testas", i);
}
do {
  var coin = rand(0, 1) ? "herbas" : "skaichius";
  console.log(coin);
} while (coin != "herbas");

do {
  var skait1 = rand(1, 20);
  var skait2 = rand(1, 20);
  console.log(skait1, skait2);
} while (skait1 <= 10 || skait2 <= 10);

do {
  var coin2 = rand(0, 1) ? "herbas" : "skaichius";
  console.log(`tekstas ${coin2} tekstas`);
} while (coin2 != "herbas");

let coin1;
do {
  coin1 = rand(0, 1) ? "herbas" : "skaichius";
  console.log(`tekstas ${coin} tekstas`);
} while (coin1 != "herbas");

// let fiodor = 0;
// let grandpa = rand(0, 500);
// fiodor += grandpa;
// console.log(`fiodor po gymshes turi ${fiodor} bapkiu`);
// while (fiodor <= 300) {
//   let pinigai = rand(50, 200);
// }
// fiodor += pinigai;
// console.log(`fiodoras turi ${fiodor} bapkiu`);
