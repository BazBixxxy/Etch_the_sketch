const container = document.querySelector(".container");

const divArray = [];

function addDivs(number) {
  for (let i = 1; i <= number; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    divArray.push(div);
  }
  divArray.forEach((value) => container.append(value));
}

let color;
function randomColor() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 6) {
    color = `background-color: lightblue;`;
  } else if (randomNumber >= 1 / 6 && randomNumber < 2 / 6) {
    color = `background-color: lightpink;`;
  } else if (randomNumber >= 2 / 6 && randomNumber < 3 / 6) {
    color = `background-color: lightcoral;`;
  } else if (randomNumber >= 3 / 6 && randomNumber < 4 / 6) {
    color = `background-color: lightyellow;`;
  } else if (randomNumber >= 4 / 6 && randomNumber < 5 / 6) {
    color = `background-color: lightgreen;`;
  } else {
    color = `background-color: lightsalmon;`;
  }
  return color;
}

function hoverEffect() {
  divArray.forEach((value) => {
    value.addEventListener("mouseover", () => {
      value.style = randomColor();
    });
  });
  divArray.forEach((value) => {
    value.addEventListener("mouseout", () => {
      value.style = `background-color: white;`;
    });
  });
}

const number = +prompt(`How many boxes do you want: `, 200);
addDivs(number);
hoverEffect();

// addDivs(300);
// randomColor();
// console.log(color);
// console.log(divArray);
