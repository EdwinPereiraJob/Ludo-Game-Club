document.addEventListener("DOMContentLoaded", function() {
    let menu = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    if (menu && navbar) {
        menu.addEventListener("click", function() {
            menu.classList.toggle("bx-x");
            navbar.classList.toggle("menu-open");
        });
    }
});


const windowBackground = document.getElementById("window-background"),
      windowContainer = document.getElementById("window-container"),
      openButton = document.getElementById("open-button"),
      closeButton = document.getElementById("close-button")

openButton.addEventListener("click", ()=>windowBackground.style.display="flex")

const  closeWindow =  () => {
    windowContainer.classList.add("close")
    setTimeout(()=> {
        windowContainer.classList.remove("clase")
        windowBackground.style.display="none"
    }, 1000);
}
closeButton.addEventListener("click", ()=>closeWindow())