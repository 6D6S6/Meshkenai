console.log ('test if it works');
let a = true;
let b = false;
console.log (a, typeof a);
console.log (b, typeof b);
let c = a + b;
console.log ('true yra ir gali buti visos teigiamos ir neigiamos reikshmes, o false yra 0')
console.log (c, typeof c);
console.log ('trys viska nusakantys kintamieji: NOT AND OR');
console.log (' apie NOT, jis zhymimas !'); 
let d = !a;
console.log (d, typeof d);
console.log ('kintamasis OR, zhymimas ||');
let e = true;
let f = false;
console.log ('e || e', e || e);
console.log ('e || f', e || f);
console.log ('f || f', f || f);
console.log ('kintamasis AND, zhymimas &&');
console.log ('e && e', e && e);
console.log ('e && f', e && f);
console.log ('f && f', f && f);

let bever = 'Coca-Cola';
console.log (!bever);
console.log ('veiksmuose arba funkcijose OR / || ima pirma TRUE value, su AND / && bus atvirkshchiai, o NOT / ! tiesiog pakeichia value');
let x = 5;
let y = 10;
let z = 0;
console.log (x || y || z);
console.log (x && y && z);
console.log (x || y && z);
console.log (x && y || z);
console.log (!x || !y || z);

