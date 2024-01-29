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
                            <button class="btn btn-primary btn-add-to-cart">Agregar al carrito</button>
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
                            <p class="mb-0">Cámara:</p>
                            <p class="">${product.camara}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
  } else {
    console.error("Producto no encontrado");
  }

  // Obtener el botón "Agregar al carrito"
  const addToCartButton = document.querySelector(".btn-add-to-cart");

  // Añadir un evento de clic al botón
  addToCartButton.addEventListener("click", function () {
    // Llamar a la función addToCart con la información del producto
    addToCart(product);
  });
});

// Función para agregar productos al carrito
function addToCart(product) {
  // Agrega la lógica para agregar el producto al carrito aquí
  // Puedes usar localStorage o cualquier otra estructura de datos para almacenar los productos en el carrito
  // Por ahora, mostraremos un mensaje de alerta
  alert(
    `Producto "${product.modelo}" agregado al carrito. ¡Listo para comprar!`
  );
}
document.addEventListener("DOMContentLoaded", function () {
  // Obtener el parámetro de identificación del producto desde la URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  // Obtener el producto correspondiente según el ID
  const producto = obtenerProductoPorId(productId);

  // Mostrar detalles del producto en la página
  mostrarDetallesDelProducto(producto);

  // Obtener el botón "Agregar al Carrito"
  const btnAgregarAlCarrito = document.getElementById("btnAgregarAlCarrito");

  // Añadir un evento de clic al botón "Agregar al Carrito"
  btnAgregarAlCarrito.addEventListener("click", function () {
    // Lógica para agregar el producto al carrito (puedes usar una función existente en cart.js)
    agregarAlCarrito(producto);
  });
});

// Función para obtener el producto por ID (puedes implementar esta función según tu estructura de datos)
function obtenerProductoPorId(productId) {
  // Lógica para obtener el producto por ID (por ejemplo, buscar en tu array de productos)
  // Retorna el objeto del producto correspondiente
  // ...

  // Ejemplo:
  return {
    id: 1,
    nombre: "Producto 1",
    descripcion: "Descripción del Producto 1",
    precio: 100.0,
    // Otros detalles del producto
  };
}

// Función para mostrar detalles del producto en la página
function mostrarDetallesDelProducto(producto) {
  // Lógica para mostrar los detalles del producto en la página (nombre, descripción, precio, etc.)
  const detallesProducto = document.getElementById("detallesProducto");
  detallesProducto.innerHTML = `
        <h2>${producto.nombre}</h2>
        <p>${producto.descripcion}</p>
        <p>Precio: $${producto.precio.toFixed(2)}</p>
        <!-- Otros detalles del producto -->
      `;
}

// Función para agregar un producto al carrito (puedes implementar esta función en cart.js)
function agregarAlCarrito(producto) {
  // Lógica para agregar el producto al carrito
  // ...
}
