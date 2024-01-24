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
            <div class="container">
                <h5 class="my-4">${product.marca}</h5>
            </div>
            <hr class="container">
            <div class="container">
                <div class="row">
                    <div class="col-6 ">
                        <img class="img-fluid" src="${product.urlImg}" alt="celular">
                    </div>
                    <div class="col-6 px-4">
                        <h5 class="text-center my-2">${product.modelo}</h5>
                        <div class="">
                            <p>${product.descripcion}</p>
                        </div>
                        <hr>
                        <div class="d-flex justify-content-around">
                            <p>Precio: ${product.precio}</p>
                            <p>Stock:  ${product.stock}</p>
                        </div>
                        <div class="d-flex justify-content-center">
                            <button class="btn btn-primary">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="container">
            <div class="container">
            <p class="h4">Características técnicas</p>
            <div class="row">
                <div class="col-6">
                    <div class="d-flex align-items-center">
                        <i class="fas fa-mobile-screen fa-3x me-3"></i>
                        <div>
                            <p class="mb-0 h6">Tamaño de pantalla:</p>
                            <p class="h6">${product.pantalla}</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <i class="fa-solid fa-microchip fa-3x me-3"></i>
                        <div>
                            <p class="mb-0 h6">Memoria:</p>
                            <p class="h6">${product.memoria}</p>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex align-items-center">
                        <i class="fas fa-hdd fa-3x me-3"></i>
                        <div>
                            <p class="mb-0 h6">Almacenamiento:</p>
                            <p class="h6">${product.almacenamiento}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    } else {
        console.error("Producto no encontrado");
    }
});