//* falsy values
//? false, 0, -0, BigInt 0n, null, undefined, NaN

//* Truthy Values -> Some Special Cases
//? "0", "false", " ", [], {}, function(){}

//*Since Empty Arrays and Objects are True we have to write the logic to check it
//* For Arrays
let arr = [];
if (arr.length === 0) {
  console.log("Array is Empty");
}

let obj1 = {};
if (Object.keys(obj1).length === 0) {
  console.log("Object is Empty");
}

//*Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10;
val1 = null ?? 23;
val1 = undefined ?? 50;
val1 = null ?? undefined ?? 12;

console.log(val1);

//* Terniary Operator
//? Condition ? true : false
