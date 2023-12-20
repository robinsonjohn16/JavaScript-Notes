//* Js Arrays are Resizeable and can Contain Mix of diffrent data types
// * JavaScript Arrays Copy Makes the Copy Shallow Copies rather than Deep copies
// ?Shallow Means the Copy and the Original has a Same reference point

let arr1 = new Array(1, 2, 4, 6, 8); //? OBJECT
console.log(arr1);
console.log(arr1[4]);
// console.log(typeof arr1);

// * Array Methods

let newarr = [1, 4, 7, 9, 0]; //? OBJECT
console.log(newarr);
// console.log("typeof", typeof newarr);

newarr.push(199);
console.log(newarr);

newarr.unshift(-11);
console.log(newarr);

newarr.shift();
console.log(newarr);

//* Questions Type Methods in JS
console.log(newarr.includes(11));
console.log(newarr.indexOf(1));

//* Convertes all the array elements to String
const newArray = newarr.join();
console.log(newArray);
console.log(typeof newArray);

//* Slice and Splice
let arr_1 = [1, 3, 6, 7, 5, 3];
let arr_2 = [9, 4, 6, 7, 9];

console.log(arr_1.slice(1, 4));
console.log(arr_1);

console.log(arr_2.splice(0, 4)); // Includes the final number
console.log(arr_2); // It removes Directly from the array
