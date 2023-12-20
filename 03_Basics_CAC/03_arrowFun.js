//* Arrow Function and This keyword
//? this keyword refers to current context

const userdetails = {
  userName: "Robinson",
  age: 19,
  print: function () {
    console.log(`UserName is ${this.userName} and Age is ${this.age}`);
  },
};

userdetails.print();

//Changing the userName and age
userdetails.age = 23;
userdetails.userName = "john";
userdetails.print();

console.log(this); //TODO This refers to the Current Contxt of Node environment which gives the output "{}" Empty
//*  There is no Context in the global
//* In browser we get Windows Object => Global Object of Browser is Window

const res = function () {
  const num = 1;
  // console.log(this);
  // console.log(this.num);
};

res();

//*Arrow Function
const res1 = () => {
  let name = "Robinson";
  console.log(this.name);
  console.log(this);
};

res1();

//* Implicit Return
const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(1, 3));

//? If we Use {} we have to write the result keyword

//*Returing the Object using Arrow Keyword
const objReturn = () => ({
  number1: "Robinson",
});

console.log(objReturn());
