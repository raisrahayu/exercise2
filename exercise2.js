
console.log("Rais Rahayu")

// Konversi Celsius ke Fahrenheit
const nilaiCelsius = 40;
let fahrenheit = (nilaiCelsius * 9 / 5) + 32;
console.log(`${nilaiCelsius} celsius = ${fahrenheit} fahrenheit`)

// Cek angka genap atau ganjil

let angka = 402;
let angka1 = angka % 2;
if (angka1 === 0) {
    console.log(`${angka} adalah angka genap`)
} else {
    console.log(`${angka} adalah angka ganjil`)
}

// Cek angka prima atau bukan

let testPrimeNum = 49;

if (testPrimeNum === 3 || testPrimeNum === 2) {
  console.log(`${testPrimeNum} Bilangan Prima`)
} else if (testPrimeNum % 3 == 0 || testPrimeNum % 2 == 0) {
  console.log(`${testPrimeNum} Bukan bilangan prima`)
} else {
  console.log(`${testPrimeNum} Bilangan Prima`)
}

//  Code to find the sum of the numbers 1 to N.
let nNumber = 4;
let n = 0;
for (let i = 0; i <= nNumber; i++) {
    n = n + i
}
console.log(`Penjumlahan dari 1 ke ${nNumber} adalah ${n}`)

// Cek Faktorial
let factNumber = 5;
let nFact = 1;
for (let i = 1; i <= factNumber; i++) {
    nFact *= i
}
console.log(`faktorial dari ${factNumber} adalah ${nFact}`)


// Code to print the first N fibonacci numbers.
// fibonacci 0 1 1 2 3 5 8 13 21 34 55
//           0 1 2 3 4 5 6 7  8  9  10 

const N = 10;

let first = 0;
let second = 1;

console.log(`Angka fibonacci ke 1 sampai ke ${N} adalah:`);
console.log(first);

for (let i = 2; i <= N; i++) {
  const next = first + second;
  console.log(next);
  first = second;
  second = next;
}
