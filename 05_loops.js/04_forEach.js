let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//? forEach and Map are Buy default injected in the array DataStructure

arr1.forEach(function (iteam) {
  // console.log(iteam);
}); //* CallBack Function does not have function Name

//? Some Topics

function printFunc(item) {
  //   console.log(item);
}
arr1.forEach(printFunc); //? We just have to give the reference We should not execute the function inside forEach

arr1.forEach((item, index, array) => {
  //   console.log(item, index, array);
});

// * Working With Object inside Array

let codingLang = [
  {
    langName: "JavaScript",
    langFileName: "js",
  },
  {
    langName: "python",
    langFileName: "py",
  },
  {
    langName: "Java",
    langFileName: "java",
  },
];

codingLang.forEach((item) => {
  console.log(item.langName);
  console.log(item.langFileName);
});
