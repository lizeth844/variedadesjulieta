/* =========================
   EFECTO PARALLAX
========================= */


window.addEventListener("scroll", function () {

    const parallax = document.querySelectorAll(".parallax");

    parallax.forEach(function (element) {

        const scrollPosition = window.pageYOffset;

        element.style.backgroundPositionY =
            (scrollPosition * 0.35) + "px";

    });

});


/* =========================
   CARRITO
========================= */

let carrito = [];


function agregarCarrito(producto) {

    carrito.push(producto);

    alert(
        producto +
        " fue añadido al carrito."
    );

    console.log(
        "Productos en carrito:",
        carrito
    );

}


/* =========================
   FORMULARIO
========================= */

const formulario =
    document.getElementById("contactForm");


if (formulario) {

    formulario.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const nombre =
                formulario.elements["nombre"].value;

            alert(
                "¡Gracias, " +
                nombre +
                "! Tu mensaje fue enviado correctamente."
            );

            formulario.reset();

        }
    );

}


/* =========================
   ANIMACIÓN AL APARECER
========================= */

const elementos =
    document.querySelectorAll(
        ".info-card, .service-card, .product-card"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


elementos.forEach(function (elemento) {

    elemento.style.opacity = "0";

    elemento.style.transform =
        "translateY(30px)";

    elemento.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(elemento);

});