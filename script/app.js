const $first = document.querySelector('#first');
const $result = document.querySelector('#result-3');
const $form = document.querySelector(`#form`)
const $input = document.querySelector("#input")


function renderData() {
  fetch("https://api.escuelajs.co/api/v1/categories")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
      const userFragment = document.createDocumentFragment();
      data.map((user) => {
        const $userCard = document.createElement("a");
        $userCard.href = `/pages/plp.html?id=${user.id}`
        $userCard.innerHTML = `
        <img src="${user.image}">
    <p>${user.name}</p> <br>
    `;
        userFragment.append($userCard);
      });
      $first.append(userFragment);
    });
}
renderData();

function renderDataThird() {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
          console.log(data)
        const userFragment = document.createDocumentFragment();
        data.forEach((user) => {
          const $userCard = document.createElement("a");
          $userCard.href = `/pages/about.html?id=${user.id}`
          $userCard.innerHTML = `
          <img src="${user.images}">
      <p>${user.title}</p>
      <span>$89.99 · 81% OFF</span> <br>
      <span>$18.99</span>
      `;
          userFragment.append($userCard);
        });
        $result.append(userFragment);
      });
  }
  renderDataThird();
