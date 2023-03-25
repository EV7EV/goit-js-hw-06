function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const controls = document.querySelector("#controls");
// const createBtn = controls.querySelector("[data-create]");
// const destroyBtn = controls.querySelector("[data-destroy]");
// const boxes = document.querySelector("#boxes");

// createBtn.addEventListener("click", onCreateBtnClick);
// destroyBtn.addEventListener("click", onDestroyBtnClick);

// function onCreateBtnClick() {
//   const amount = Number(controls.querySelector("input").value);
//   createBoxes(amount);
// }

// function onDestroyBtnClick() {
//   destroyBoxes();
// }

// function createBoxes(amount) {
//   let size = 30;
//   for (let i = 0; i < amount; i++) {
//     const box = document.createElement("div");
//     box.style.width = `${size}px`;
//     box.style.height = `${size}px`;
//     box.style.backgroundColor = getRandomHexColor();
//     boxes.appendChild(box);
//     size += 10;
//   }
// }

// function destroyBoxes() {
//   boxes.innerHTML = "";
// }

// ------------------------------------------------------------------------------//

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const array = [];
  let sizeBox = 30;
  for (let i = 1; i <= input.value; i++) {
    console.log(input.value);
    const color = getRandomHexColor();
    sizeBox = i > 1 ? sizeBox + 10 : sizeBox;
    array.push(
      `<div style="width:${sizeBox}px; height:${sizeBox}px; background-color:${color}"></div>`
    );
  }
  console.log(array);
  const listBox = array.join("");
  return boxes.insertAdjacentHTML("beforeend", listBox);
}

function destroyBoxes() {
  return (boxes.innerHTML = "");
}
