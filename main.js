
const buy = document.getElementsByClassName("btn")[0]
const biggerContainer = document.querySelector(".bigger-container")

buy.addEventListener("click", (eo) => { 
  biggerContainer.classList.add("active")
  eo.preventDefault()
})

const buy1 = document.getElementsByClassName("btn")[1]

buy1.addEventListener("click", (eo) => { 
  biggerContainer.classList.remove("active")
 })