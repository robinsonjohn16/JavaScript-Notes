//* Adding To Array element using Push Method
const array1 = [1, 3, 5, 7, 8];
const array2 = [100, 200, 300];

//array1.push(array2);
//console.log(array1); //! Array inside Array is Comming So this is WRONG

//* Using Concat Method
const arr3 = array1.concat(array2);
console.log(arr3); //? This Works But we Use Another Easy Syntax to Add two Arrays

//* Using Spread Operator
const newArray = [...array1, ...array2];
console.log(newArray); //* Used a Lot

//*  Flatening the Array element
const unflattenarray = [1, 3, 4, 6, [5, 7, 8], 9, 0, [[3, [5, 6], 6], 7], 0];
let finalArray = unflattenarray.flat(Infinity);
console.log(finalArray);

// *Checking if it is Array
console.log(Array.isArray("Hitesh"));
console.log(Array.from({ name: "Robinson" })); //? this Codes Not work
console.log(Array.from("Hitesh"));

//* Sets
const set1 = new Set([1, 4, 6, 7, 8]); //? Object
console.log(typeof set1);
console.log(set1);
console.log(Array.from(set1));

let x = 1;
let y = 2;
let z = 3;
const res = Array.of(x, y, z);
console.log(res);
