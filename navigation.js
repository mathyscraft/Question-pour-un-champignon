const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", function() {
    menu.hidden = !menu.hidden
    overlay.hidden =  ! overlay.hidden
})

function addList(button, source) {
    button.addEventListener("click", function() {
        let dataFile = document.createElement("script")
        dataFile.setAttribute("src", source)
        dataFile.onload = function() {
            getQuestion()
            hamburger.click()
            progressBar.style.borderColor = "rgb(41, 41, 41)"
            points = 0
        }
        document.getElementsByTagName("head")[0].appendChild(dataFile)
    })
}

addList(document.getElementById("apollinaire"), "data_apollinaire.js")
addList(document.getElementById("H234"), "data_H234.js")
// addList(document.getElementById("H1C1"), "data_H1C1.js")
// addList(document.getElementById("H1C2"), "data_H1C2.js")
// addList(document.getElementById("H2C1"), "data_H2C1.js")
// addList(document.getElementById("H2C2"), "data_H2C2.js")
// addList(document.getElementById("H2C3"), "data_H2C3.js")
// addList(document.getElementById("H3C1"), "data_H3C1.js")
