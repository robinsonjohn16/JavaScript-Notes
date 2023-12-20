//* Singleton => When the Object is created using Constructor the Singleton is CREATED.
Object.create;

// *Object Literals
const user = {
  name: "Robinson",
  fullName: "Nadar Robinson John Selvaraj",
  rollNo: "TIT2324042",
  subject: ["IDS", "DM", "CL", "EH", "PGIS"],
  isMale: true,
};

// * Accessing The values
console.log(user.name);
console.log(user["name"]);
console.log(user.fullName);

// * Symbol
const mySymbol = Symbol("Robinson");
const obj1 = {
  name: "John",
  [mySymbol]: "Robinson John",
};

console.log(obj1.mySymbol); //! here if we check the datatype it is String not SYMBOL
console.log(obj1[mySymbol]); //? This is Correct Syntax

// *Changing the Value
console.log(user["name"]);
user.name = "Robin";
console.log(user["name"]);

// * Freezing the Object
// Object.freeze(user); //?This will Freeze the Object no other operation can be performed
// user.name = "Shravan"; //? This will not be Reflected
console.log(user);

//* Adding keys and values after making the Object
user.email = "robinsonnadar16@gmail.com";
console.log(user);

//* Adding a Function as value of greeting key
user.greeting = function () {
  console.log("Hello From Greeting Function");
};

console.log(user);

//*Execting the Function
console.log(user.greeting()); //? Only dot operator will work
