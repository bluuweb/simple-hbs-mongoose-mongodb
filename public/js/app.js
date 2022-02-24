const resultadoCarrito = document.getElementById("resultadoCarrito");
const carritoFruta = [];

document.addEventListener("click", (e) => {
    // console.log(e.target.dataset.bsTarget === "#exampleModal");
    if (e.target.dataset.bsTarget === "#exampleModal") {
        carritoFruta.push(e.target.dataset.fruta);
        e.target.classList.add("disabled");
        // console.log(carritoFruta);
        pintarCarrito();
    }
});

const pintarCarrito = () => {
    resultadoCarrito.innerHTML = "";
    carritoFruta.forEach((fruta) => {
        resultadoCarrito.innerHTML += `
        <li>${fruta}</li>
        `;
    });
};
