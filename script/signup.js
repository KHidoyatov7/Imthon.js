const $form = document.querySelector("#form");
const $emailInput = document.querySelector("#email");
const $passwordInput = document.querySelector("#password");
const $nameInput = document.querySelector("#name");
const $avatarInput = document.querySelector("#avatar");
const $new = document.querySelector("#new")
$form.addEventListener("submit", signUp,);
function signUp(e) {
  e.preventDefault();
  if (
    $emailInput.value.trim().length > 0 && $passwordInput.value.trim().length > 0 && $nameInput.value.trim().length > 0 && $avatarInput.value.trim().length > 0
  ) {
    fetch("https://api.escuelajs.co/api/v1/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json", 
      },
      body: JSON.stringify({
        name: $nameInput.value, email: $emailInput.value, password: $passwordInput.value, avatar: $avatarInput.value,
      }),
    })
    //       .then((response) => response.json())
//       .then((user) => console.log(user))
//   }
// }
      .then((response) => response.json())
      .then((user) => {
        if (user) {
          window.location.replace(window.origin + '/index.html')
          console.log(user)
        }
      }); 
  }
}

