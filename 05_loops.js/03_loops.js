//* 01 and 02 both are skipped because Robinson Knows it :)

let array1 = [1, 3, 5, 7, 8];
for (const iterator of array1) {
  //   console.log(iterator);
}

//? Will Work on Strings Too
let str1 = "Hello Robinson";
for (const char of str1) {
  //   console.log(char);
}

//* Maps => Stores Key Value Paires and In the Order it is Stored and Has Unique Values, Since in the Objects the Order is not maintained

const map1 = new Map();
map1.set("1", "a");
map1.set("2", "b");
map1.set("3", "c");
console.log(map1);

for (const [key, val] of map1) {
  console.log(`key is ${key} and value is ${val}`);
}

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};
// for (const [key, val] of obj1) {
//   console.log(`key is ${key} and value is ${val}`); //!This Gives an Error, Object is not Iterable using Forof
// }

//? forin Loop for Objects Iteration

for (const key in obj1) {
  console.log(`Key is ${key} and the Object is ${obj1[key]}`); //! ForIn Returnes the Index
}

for (const index in array1) {
  console.log(array1[index]);
}
