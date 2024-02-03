let arrayProductos = JSON.parse(localStorage.getItem("productos")) || [];
let detailbody = document.getElementById("main-detail");

document.addEventListener("DOMContentLoaded", function () {
    // Obtener el código del producto de la URL
    const params = new URLSearchParams(window.location.search);
    const productCodigo = params.get("codigo");

    // Obtener el producto específico según el código
    let product = arrayProductos.find((p) => p.codigo === productCodigo);

    // Mostrar los detalles del producto
    if (product) {
        detailbody.innerHTML = `
            <div class="container mt-5 pt-5">
                <h2 class="my-4 title-brand fw-bold">${product.marca}</h2>
            </div>
            <hr class="container">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <img class="img-fluid" src="${product.urlImg}" alt="celular">
                    </div>
                    <div class="col-12 col-lg-6 px-4">
                        <h3 class="text-center mt-2 mb-5 title-product fw-bold">${product.modelo}</h3>
                        <div class="py-4">
                            <p class='fs-5 text-product'>${product.descripcion}</p>
                        </div>
                        <hr>
                        <div class="d-flex justify-content-around py-3 fs-5">
                            <p class='number-product fs-5 fw-bold'><span class="fw-bold text-product">Precio: </span>${product.precio}</p>
                            <p class='number-product fs-5 fw-bold'><span class="fw-bold text-product">Stock: </span>${product.stock}</p>
                        </div>
                        <div class="d-flex justify-content-center mb-3 mb-lg-0">
                            <button id="btn-add-cart" class="btn btn-custom-add fw-bold fs-4">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="container">
            <div class="container pb-5">
                <p class="fs-3 mb-5 text-product fw-bold">Características técnicas</p>
                <div class="row">
                    <div class="col-6 col-lg-4 mx-auto d-flex flex-column justify-content-between">
                        <div class="d-flex align-items-center">
                            <div class="col-3 col-lg-2 text-center">
                                <i class="fas fa-mobile-screen fa-2x icon-product"></i>
                            </div>
                            <div>
                                <p class="mb-0 fs-6 fw-bold">Tamaño de pantalla:</p>
                                <p class="fs-5">${product.pantalla}</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="col-3 col-lg-2 text-center">
                                <i class="fa-solid fa-microchip fa-2x icon-product"></i>
                            </div>
                            <div>
                                <p class="mb-0 fs-6 fw-bold">Memoria:</p>
                                <p class="fs-5">${product.memoria}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-4 mx-auto d-flex flex-column justify-content-between">
                        <div class="d-flex align-items-center">
                            <div class="col-3 col-lg-2 text-center">
                                <i class="fas fa-hdd fa-2x icon-product"></i>
                            </div>
                            <div>
                                <p class="mb-0 fs-6 fw-bold">Almacenamiento:</p>
                                <p class="fs-5">${product.almacenamiento}</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="col-3 col-lg-2 text-center">
                                <i class="fas fa-camera fa-2x icon-product"></i>
                            </div>
                            <div>
                                <p class="mb-0 fs-6 fw-bold">Cámara:</p>
                                <p class="fs-5">${product.camara}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

        const addToCartButton = document.getElementById("btn-add-cart");

        // Añadir un evento de clic al botón
        addToCartButton.addEventListener("click", function () {
            addToCart(product);
        });
    } else {
        console.error("Producto no encontrado");
    }
});

// Función para agregar productos al carrito
function addToCart(product) {
    // Obtener el carrito del localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Agregar el producto al carrito
    cart.push(product);

    // Guardar el carrito actualizado en el localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    Swal.fire({
        position: "top-center",
        color: "#212121",
        icon: "success",
        title: `Se agrego al carrito!`,
        showConfirmButton: false,
        timer: 1500,
});
}


