//* Checking if forEach Loop returns Some Values

let nums = [1, 2, 4, 5, 6, 7, 8, 9, 0];

const returnedNum = nums.forEach((item) => {
  return item;
});
console.log(returnedNum);

//* To return Something from the loop we use Filter

const rNum = nums.filter(
  (item) => item > 5 //? Here Return is not required

  //   {return item > 5;}
);

console.log(rNum);

//* Maps => Checks all the values not like filter

const mapreturn = nums.map((item) => {
  return item > 5;
});
console.log(mapreturn);

// * Chaining => Using one or more Operation at a same time

const finalReturn = nums
  .map((item) => {
    return item * 10;
  })
  .map((item) => item + 1)
  .filter((i) => {
    return i > 40;
  });

console.log(finalReturn);

const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, initialValue);

console.log(sumWithInitial);
