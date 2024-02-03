document.addEventListener("DOMContentLoaded", function () {
  // Cargar productos en el carrito al inicio
  displayCart();

  // Obtener el botón "Pagar"
  const payButton = document.querySelector(".btn-pay");

  // Añadir un evento de clic al botón "Pagar"
  payButton.addEventListener("click", function () {
      // Llamar a la función pay para simular el pago
      pay();
  });
});

// Función para mostrar los productos en el carrito
function displayCart() {
  // Limpiar el contenido actual del carrito
  const cartContainer = document.getElementById("cart");
  cartContainer.innerHTML = "";

  // Obtener los productos del carrito almacenados en localStorage
  let cartProducts = JSON.parse(localStorage.getItem("cart")) || [];

  // Verificar si hay productos en el carrito
  if (cartProducts.length === 0) {
      // Mostrar mensaje de carrito vacío
      cartContainer.innerHTML = "<h3>No hay productos en el carrito. ¡Seguí comprando!</h3>";
  } else {
      // Mostrar los productos en el carrito
      cartProducts.forEach(function (product) {
          let cartItem = document.createElement("div");
          cartItem.classList.add("col-md-4");

          cartItem.innerHTML = `
              <div class="card">
                  <img src="${product.urlImg}" class="card-img-top" alt="${product.modelo}">
                  <div class="card-body">
                      <h5 class="card-title">${product.modelo}</h5>
                      <p class="card-text">${product.descripcion}</p>
                      <p class="card-price">Precio: $${product.precio}</p>
                      <button class="btn btn-danger btn-remove" data-product-id="${product.codigo}">Eliminar</button>
                  </div>
              </div>
          `;

          // Añadir evento de clic para el botón de eliminación
          let removeButton = cartItem.querySelector(".btn-remove");
          removeButton.addEventListener("click", function () {
              removeFromCart(product.codigo);
          });

          cartContainer.appendChild(cartItem);
      });

      // Actualizar el total del carrito
      updateCartTotal(cartProducts);
  }
}

// Función para eliminar un producto del carrito
function removeFromCart(productCode) {
  // Obtener los productos del carrito almacenados en localStorage
  let cartProducts = JSON.parse(localStorage.getItem("cart")) || [];

  // Filtrar el producto a eliminar
  cartProducts = cartProducts.filter((product) => product.codigo !== productCode);

  // Guardar los productos actualizados en localStorage
  localStorage.setItem("cart", JSON.stringify(cartProducts));

  // Volver a mostrar los productos en el carrito
  displayCart();
}

// Función para actualizar el total del carrito
function updateCartTotal(cartProducts) {
  let total = cartProducts.reduce((acc, product) => acc + parseFloat(product.precio), 0);
  document.getElementById("cart-total").textContent = total.toFixed(2);
}

// Función para simular el pago
function pay() {
  // Puedes añadir aquí la lógica necesaria para procesar el pago
  alert("Su compra se realizó exitosamente. ¡Gracias!");
}
