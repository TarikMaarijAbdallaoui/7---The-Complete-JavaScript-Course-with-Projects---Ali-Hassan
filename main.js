const myheader = document.querySelector(".myheader");

// myheader.remove()

const title = document.createElement("h1");
const section = document.getElementById("sec");
const main = document.getElementById("main");
const div = document.getElementById("mydiv");

div.prepend(title);

title.classList.add("mb", "bc")
title.classList.remove("bc")
title.innerText = "Ali Hassan"
