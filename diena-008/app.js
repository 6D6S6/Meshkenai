console.log ('test if it works');
let box1 = 'Green Apple';
let box2 = 'Red Apple';
let box3 = '5';
let box4 = 6;
let bigbox2 = box3 + box3;
let bigbox1 = box4 + box4;
console.log ('My boxes', box1, box2, box3, box4);
console.log ('My big box', bigbox1, bigbox2);
console.log (typeof box1, box1);
console.log (typeof box4, box4);
console.log (typeof box3,'padauginta ish', typeof box4,', kai', typeof box3, 'yra skaichius kabutese');
console.log (box3 * box4);

let appleCount = 8;
let orangeCount = 6;
let milkCount = 2;

let applePrice = 0.99;
let orangePrice = 1.29;
let milkPrice = 2.99;

let appleName = 'Apple';
let orangeName = 'Orange';
let milkName = 'Milk';

let appleTotal = appleCount * applePrice;
let orangeTotal = orangeCount * orangePrice;
let milkTotal = milkCount * milkPrice;

let payTotal = appleTotal + orangeTotal + milkTotal;

console.log ('Your total price is: $', payTotal);

let whatIsThis = 100 / 0;
console.log (whatIsThis, typeof whatIsThis);
let whatIsThis2 = 0 / 0;
console.log (whatIsThis2, typeof whatIsThis2);
let whatIsThis3 = 0 / 100;
console.log (whatIsThis3, typeof whatIsThis3);
let whatIsThis4 = 0.1 + 0.2;
console.log (whatIsThis4, typeof whatIsThis4);

let A;
let B = A + 5;
console.log (A, typeof A);
console.log (B, typeof B);

let c = 25;
let d = 4; 
let e = c + d;
console.log (e, typeof e);
e = c - d;
console.log (e, typeof e);
e = c % d;
console.log (e, typeof e, 'c padalinta ish d ir visko likusi liekana');

c++;
c--;
console.log ('c:', c, 'padidinimas ir sumazhinimas VIENETU');

