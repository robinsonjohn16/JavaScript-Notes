//* let and const is BLOCK Scoped
//* var is Global Scoped

function one() {
  const userName = "Robinson";
  function two() {
    const anotherName = "John";
    console.log(userName); //*Global Scoped variables are accessible in the function blocks
  }
  //   console.log(anotherName); //* This is not accessible
  two();
}
one();
