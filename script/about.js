const userid = new URLSearchParams(window.location.search).get("id")
const $about = document.querySelector(".about")
// console.log(userid)


function renderData() {
    fetch(`https://api.escuelajs.co/api/v1/products/${userid}`)
      .then((response) => response.json())
      .then((data) => {
          console.log(data);
          const createSingleProduct = document.createElement("div")
          const createElement = document.createElement("div")
          createSingleProduct.innerHTML = `
          <img src="${data.images}">
          `
          $about.append(createSingleProduct);
          createElement.innerHTML = `
          <h2>${data.title}</h2> <hr>
          <p><strong>Description :</strong> <br/>${data.description}</p> <br/>
          <span>US $${data.price} <br> <strong>Last One / 86 sold</strong></span>
          <br>
         <p>Category:: ${data.category.name}</p>
          `
          $about.append(createElement)
      });
  }
  renderData();

