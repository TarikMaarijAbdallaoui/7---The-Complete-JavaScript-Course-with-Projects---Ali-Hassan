const youtube = document.getElementById("you");

const biggerContainer = document.querySelector(".bigger-contaier");

const kahyaan = document.getElementById("kahyaan");
const visa = document.getElementById("visa");

// Afecta sólo a los productos iniciales pero no a los que añade el usuario
/*const buy = document.querySelectorAll(".js-buy");
buy.forEach(item => {
  
   })*/

const aywaa = document.querySelectorAll(".aywaa");
aywaa.forEach((item) => {
  item.addEventListener("click", (eo) => {
    kahyaan.style.display = "block";
    visa.style.display = "none";

    setTimeout(() => {
      kahyaan.style.display = "none";
      biggerContainer.classList.remove("active");
    }, 1000);
  });
});

youtube.addEventListener("click", (eo) => {
  eo.preventDefault();
});

const dark = document.getElementById("dark");
const body = document.getElementById("body");

dark.addEventListener("click", (eo) => {
  body.classList.toggle("dark");
});

const addProduct = document.querySelector("#add-pro");
const procontainer = document.querySelector("#pro-container");
//procontainer.style.border = "5px solid red";

addProduct.addEventListener("click", (eo) => {
  const newProduct = `
  <div class="card mycard" style="width: 18rem;">
          <img style="border-radius: 5px;" src="pexels-cottonbro-3826678.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">My Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a id="buy" href="#" class="js-buy btn btn-primary">buy</a>

          </div>
        </div>
  `;
  procontainer.innerHTML += newProduct;
});

procontainer.addEventListener("click", (eo) => {
  if (eo.target.className == "js-buy btn btn-primary") {
    //item.addEventListener("click", (eo) => {
      biggerContainer.classList.add("active");
      eo.preventDefault();

      kahyaan.style.display = "none";

      visa.style.display = "block";
    };
});
