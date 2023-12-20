//* History => Before Promises we used the BlueBird library. But Javascript added it to the engine only later so now we dont use it.

const promiseOne = new Promise(function (resolve, reject) {
  // Async tasks
  // DB calls, crypography
  setTimeout(() => {
    console.log("Async task 1 is completed");
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  console.log("Async 1 resolved");
});

new Promise(function (res, rej) {
  setTimeout(() => {
    console.log("Async task 2 is completed");
    res();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task 3 is completed");
    resolve({ name: "Robinson", age: 19 });
  }, 1000);
});
promiseThree.then((parameter) => {
  console.log(parameter);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      console.log("Async task 4 is completed");
      resolve({ name: "Robinson", age: 19 });
    } else {
      reject("Error! ");
    }
  }, 1000);
});
promiseFour
  .then((parameter) => {
    return parameter.name;
  })
  .then((name) => {
    //? return value above is the parameter for this
    console.log(name);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("DONE");
  });

//* Handing With async await function
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      console.log("Async task 5 is completed");
      resolve({ name: "John", age: 21 });
    } else {
      reject("Error! ");
    }
  }, 1000);
});

async function consumedPromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumedPromiseFive();

// * Use of Fetch
async function getValues() {
  try {
    const res = await fetch("https://api.github.com/users/hiteshchoudhary");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getValues();

// Another way for fetch

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
