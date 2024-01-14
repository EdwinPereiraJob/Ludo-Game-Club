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



document.addEventListener('DOMContentLoaded', function() {
    // Asegúrate de que el DOM esté completamente cargado antes de adjuntar los eventos.

    document.getElementById('open-button').addEventListener('click', function(event) {
        event.preventDefault(); // Evita que el enlace cause una recarga de la página.
        document.getElementById('modal').style.display = 'block';
    });

    document.getElementById('cerrarModal').addEventListener('click', function() {
        document.getElementById('modal').style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == document.getElementById('modal')) {
            document.getElementById('modal').style.display = 'none';
        }
    });
});

