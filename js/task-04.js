let counterValue = 0;
const refs = {
  decrementButton: document.querySelector('[data-action="decrement"]'),
  incrementButton: document.querySelector('[data-action="increment"]'),
  counter: document.querySelector("#value"),
};

refs.decrementButton.addEventListener("click", decrement);
refs.incrementButton.addEventListener("click", increment);

function decrement() {
  counterValue -= 1;
  refs.counter.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  refs.counter.textContent = counterValue;
}

// refs.decrementButton.addEventListener("click", () => {
//   counterValue -= 1;
//   refs.counter.textContent = counterValue;
// });
