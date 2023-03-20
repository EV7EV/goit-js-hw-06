const categories = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${categories.length}`);

// categories.forEach((el) => {
//   const title = el.firstElementChild.textContent;
//   console.log(`Category: ${title}`);

//   const listWithElements = el.lastElementChild;
//   console.log(`Elements: ${listWithElements.childElementCount}`);
// });

// categories.forEach((el) => {
//   console.log("");
//   console.log(`Category: ${el.firstElementChild.textContent}`);
//   console.log(`Elements: ${el.lastElementChild.querySelectorAll("li").length}`);
// });

categories.forEach((el) => {
  const title = el.querySelector(`h2`).textContent;
  console.log(`Category: ${title}`);

  const listWithElements = el.querySelectorAll(`li`).length;
  console.log(`Elements: ${listWithElements}`);
});
