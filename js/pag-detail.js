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
                <h3 class="my-4">${product.marca}</h3>
            </div>
            <hr class="container">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <img class="img-fluid" src="${product.urlImg}" alt="celular">
                    </div>
                    <div class="col-12 col-lg-6 px-4">
                        <h4 class="text-center mt-2 mb-5">${product.modelo}</h4>
                        <div class="py-4">
                            <p>${product.descripcion}</p>
                        </div>
                        <hr>
                        <div class="d-flex justify-content-around py-3">
                            <p><span class="fw-bold">Precio: </span>${product.precio}</p>
                            <p><span class="fw-bold">Stock: </span>${product.stock}</p>
                        </div>
                        <div class="d-flex justify-content-center mb-3 mb-lg-0">
                            <button class="btn btn-primary">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="container">
            <div class="container mb-5">
            <p class="h4 mb-5">Características técnicas</p>
            <div class="row">
                <div class="col-6 col-lg-4 mx-auto d-flex flex-column justify-content-between">
                    <div class="d-flex align-items-center">
                        <div class="col-3 col-lg-2 text-center">
                            <i class="fas fa-mobile-screen fa-2x"></i>
                        </div>
                        <div>
                            <p class="mb-0">Tamaño de pantalla:</p>
                            <p class="">${product.pantalla}</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="col-3 col-lg-2 text-center">
                            <i class="fa-solid fa-microchip fa-2x"></i>
                        </div>
                        <div>
                            <p class="mb-0">Memoria:</p>
                            <p class="">${product.memoria}</p>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-lg-4 mx-auto d-flex flex-column justify-content-between">
                    <div class="d-flex align-items-center">
                        <div class="col-3 col-lg-2 text-center">
                            <i class="fas fa-hdd fa-2x"></i>
                        </div>
                        <div>
                            <p class="mb-0">Almacenamiento:</p>
                            <p class="">${product.almacenamiento}</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="col-3 col-lg-2 text-center">
                            <i class="fas fa-camera fa-2x"></i>
                        </div>
                        <div>
                            <p class="mb-0">Camara:</p>
                            <p class="">${product.camara}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    } else {
        console.error("Producto no encontrado");
    }
});