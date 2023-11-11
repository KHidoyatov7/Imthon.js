const $form = document.querySelector("#form");
const $emailInput = document.querySelector("#email");
const $passwordInput = document.querySelector("#password");
const $nameInput = document.querySelector("#name");
const $avatarInput = document.querySelector("#avatar");
const $new = document.querySelector("#new")
$form.addEventListener("submit", signUp);

function signUp(e) {
  e.preventDefault();
  if (
    $emailInput.value.trim().length > 0 &&
    $passwordInput.value.trim().length > 0 
  ) {
    fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: $emailInput.value,
        password: $passwordInput.value,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user) {
            window.location.replace(window.origin + '/index.html')
          }
      }); 
  }
}


