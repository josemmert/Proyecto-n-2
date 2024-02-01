let cartContainer = document.getElementById("cart");
let cartTotalElement = document.getElementById("cart-total");

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
      cartItem.classList.add("cart-item");

      cartItem.innerHTML = `
        <div class="product-name">${product.nombre}</div>
        <div class="product-quantity">Cantidad: ${product.cantidad}</div>
        <div class="product-price">Precio: $${product.precio.toFixed(2)}</div>
        <button class="btn btn-danger btn-remove" data-product-id="${product.id}">Eliminar</button>
      `;

      // Añadir evento de clic para el botón de eliminación
      let removeButton = cartItem.querySelector(".btn-remove");
      removeButton.addEventListener("click", function () {
        removeFromCart(product.id);
      });

      cartContainer.appendChild(cartItem);
    });

    // Actualizar el total del carrito
    updateCartTotal(cartProducts);
  }
}

// Función para eliminar un producto del carrito
function removeFromCart(productId) {
  // Obtener los productos del carrito almacenados en localStorage
  let cartProducts = JSON.parse(localStorage.getItem("cart")) || [];

  // Filtrar el producto a eliminar
  cartProducts = cartProducts.filter((product) => product.id !== productId);

  // Guardar los productos actualizados en localStorage
  localStorage.setItem("cart", JSON.stringify(cartProducts));

  // Volver a mostrar los productos en el carrito
  displayCart();
}

// Función para actualizar el total del carrito
function updateCartTotal(cartProducts) {
  let total = cartProducts.reduce((acc, product) => acc + product.precio * product.cantidad, 0);
  cartTotalElement.textContent = total.toFixed(2);
}

// Función para simular el pago
function pay() {
  // Puedes añadir aquí la lógica necesaria para procesar el pago
  alert("Su compra se realizó exitosamente. ¡Gracias!");
}
