//* Creating a Object using Singleton Method

const obj1 = new Object();
console.log(obj1);
obj1.id = 1;
obj1.name = "pokemon";
obj1.type = "fire";

console.log(obj1);

//* Creating a multilevel Object
let obj2 = {
  email: "robinson@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Robinson",
      lastName: "John",
    },
  },
};

console.log(obj2.fullName);
console.log(obj2.fullName.userFullName);
console.log(obj2.fullName.userFullName.firstName);
console.log(obj2.fullName.userFullName.lastName);

//* Combining Two 2 Object
const ob1 = {
  a: "a",
  b: "b",
};

const ob2 = {
  c: "c",
  d: "d",
};
// const ob3 = { ob1, ob2 }; //? Does NOT work Properly
// console.log(ob3);

// const ob3 = Object.assign({}, ob1, ob2); //? (target, source)
// console.log(ob3);

// *Spreed Operator
// const ob3 = { ...ob1, ...ob2 };
// console.log(ob3);

//* Finding keys and values of Objects
console.log(Object.keys(ob2));
console.log(Object.values(ob2));
console.log(Object.entries(ob2));

//* Checking the Properties of the Object
console.log(obj2.hasOwnProperty("email"));
