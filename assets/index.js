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
