//* Immediately Invoked Function Expresssions(IIFE)

(function one() {
  //? named IIFE
  console.log(`DB Connected`);
})();

((name) => {
  console.log(`DB Connected ${name}`);
})("Robinson");
