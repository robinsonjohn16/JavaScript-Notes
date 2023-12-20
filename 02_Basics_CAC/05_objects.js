//* Destructuring
const course = {
  courseName: "Full Stack Dev",
  price: 3500,
  company: "Physics Wallah",
};

console.log(course.courseName);

//* This is destructuring or Shorthand method
const { courseName: cN } = course;
console.log(cN);
console.log(price); //!Error

const { price } = course;
console.log(price);
