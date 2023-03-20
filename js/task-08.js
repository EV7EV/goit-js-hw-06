const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const formData = { email, password };
  if (!formData["email"] || !formData["password"]) {
    alert(`Заповніть всі поля`);
    return;
  }
  console.log(formData);
  form.reset();
});
