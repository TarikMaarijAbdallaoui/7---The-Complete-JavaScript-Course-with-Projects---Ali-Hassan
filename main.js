/* const myheader = document.querySelector(".myheader");

// myheader.remove()

const title = document.createElement("h1");
const section = document.getElementById("sec");
const main = document.getElementById("main");
const div = document.getElementById("mydiv");

div.prepend(title);

title.classList.add("mb", "bc")
title.classList.remove("bc")
title.innerText = "Ali Hassan" */

const myheader = document.querySelector(".myheader");
const section = document.getElementById("sec");
const main = document.getElementById("main");
const mudiv = document.getElementById("mudiv");

const title = document.createElement("h1");

function eldawlya (){
        mudiv.append(title);

        title.classList.add("mb");
        
        title.innerText = "الدولية للتجارة العالمية";
}

setTimeout( eldawlya , 4000)

