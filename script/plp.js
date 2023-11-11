const userid = new URLSearchParams(window.location.search).get("id")
const $categories = document.querySelector(".categories")
console.log(userid)
      

// function renderDataThird() {
//   fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${userid}`)
//   .then(response => response.json)
//   .then(data => {
//    console.log(data)
//    const thirdFragment = document.createDocumentFragment();
//    let rendering = data.map((category) => {
//     const $userCard = document.createElement("a");
//     $userCard.innerHTML = `
//     <img src="${category.image}">
// <p>${category.name}</p>
// `;
//     thirdFragmentFragment.append($userCard);
//   });
//   $categories.append(thirdFragmentFragment);
// });
// }
// renderDataThird();


function renderData() {
  fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${userid}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
      const userFragment = document.createDocumentFragment();
      data.map((user) => {
        const $userCard = document.createElement("a");
        $userCard.href = `/pages/about.html?id=${user.id}`
        $userCard.innerHTML = `
        <img src="${user.images}">
    <p>${user.title}</p> <br>
    <span>Jordan 1 Low OG SP x <br> Travis Scott Black <br> Phantom</span>
    `;
        userFragment.append($userCard);
      });
      $categories.append(userFragment);
    });
}
renderData();