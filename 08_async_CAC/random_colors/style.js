const generateColors = () => {
  const codes = "0123456789ABCDEF";
  let color = "#";
  for (let index = 0; index < 6; index++) {
    color = color + codes[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
document.querySelector("#start").addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(changeBack, 500);
  }
});
document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null; // deferencing
});

function changeBack() {
  let color = generateColors();
  document.querySelector("body").style.backgroundColor = color;
}
