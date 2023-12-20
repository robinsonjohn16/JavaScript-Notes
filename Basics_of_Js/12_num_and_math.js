const score = 120; // Number
console.log(score);
console.log(typeof score);

const number = new Number(100.89449448404); //Object
console.log(number);
console.log(typeof number);

//* Presion Value
console.log(number.toFixed(3)); //? Counting Digits After Decimal
console.log(number.toPrecision(5)); //? Total Digit will be same as parameter

const longNum = 1878383993;
console.log(longNum.toLocaleString("en"));
console.log(longNum.toLocaleString("en-IN"));

//* round(), ceil(), floor(), min(1, 4, 6,78 ,8), max(8, 4, 6,8 ,3)
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));

// *Important Formula

const minNum = 100;
const maxNum = 200;

console.log(Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
