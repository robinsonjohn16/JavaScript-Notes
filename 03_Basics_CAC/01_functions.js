//* Functions in Javascript

function addTwoNumber(num1, num2) {
  // ? here we are supposed to check the datatype of the parameter so nothing wrong datatype somes
  console.log(num1 + num2);
}
addTwoNumber(3, 5);

// Example

function loggedIn(userName) {
  if (!userName) {
    return "Please Enter proper Name";
  }
  return `${userName} logged in Successfully`;
}

console.log(loggedIn(0));
console.log(loggedIn(undefined));
console.log(loggedIn("Robinson"));
console.log(loggedIn(false));
// TODO Check the truthy and flasy values from Youtube


//* Shopping Cart Problem
// * When We dont know how many Arguments are going to come as a parameter
//? We use Rest Operator => This thing Looks like the Spread operator

function calculateCartPrice(val1, ...num1) {
  return `Value1 is ${val1} and the Rest of the Parameters are ${num1}`;
}
console.log(calculateCartPrice(10, 20, 40, 70, 79, 79, 79));
console.log(calculateCartPrice(79, 79, 79));
