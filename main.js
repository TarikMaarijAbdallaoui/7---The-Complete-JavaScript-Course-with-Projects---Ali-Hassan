
const buy = document.getElementsByClassName("btn")[0]
const biggerContainer = document.querySelector(".bigger-container")
const buy1 = document.getElementsByClassName("btn")[1]
const message = document.getElementById("message")
const visa = document.getElementById("visa")

buy.addEventListener("click", (eo) => { 
  biggerContainer.classList.add("active")
  eo.preventDefault()

  message.style.display = "none"
})


buy1.addEventListener("click", (eo) => { 
  // biggerContainer.classList.remove("active")
  message.style.display = "block"
  visa.style.display = "none"

  setTimeout(() => { biggerContainer.classList.remove("active")}, 3000)
 })

 