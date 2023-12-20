// Dates in Javascript Is painful and Ecma script people are working on Temporal Which will be released Soon

let mydate = new Date();
//console.log(mydate);

console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toTimeString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleTimeString());
console.log(mydate.toISOString());
console.log(typeof mydate);

//* Defining Our Own Date in JavaScript
let createdDate = new Date(2023, 0, 23);
//? In Js Month is Started from 0 not 1
console.log(createdDate.toDateString());

let createdDate2 = new Date(2020, 12, 33, 11, 30, 30); //!See This CareFully
console.log(createdDate2.toString());

let createdDate3 = new Date("01-01-2022");
console.log(createdDate3.toDateString());

let now_date = Date.now();
console.log(now_date);

