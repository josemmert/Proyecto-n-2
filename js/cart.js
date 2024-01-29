// cart.js

let arrayProductos = JSON.parse(localStorage.getItem("productos")) || [];
let cartContainer = document.getElementById("cart");
let cartTotalElement = document.getElementById("cart-total");

document.addEventListener("DOMContentLoaded", function () {
  // Cargar productos en el carrito al inicio
  displayCart();

  // Obtener el botón "Pagar"
  const payButton = document.querySelector(".btn-primary");

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

// Función para eliminar un producto del carrito
function removeFromCart(productId) {
  // Obtener los productos del carrito almacenados en localStorage
  let cartProducts = JSON.parse(localStorage.getItem("cart")) || [];

  // Filtrar el product a eliminar
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

// Función para agregar un product al carrito desde pag-detail.html
window.agregarAlCarritoDesdeDetalle = function (product) {
  // Obtener los productos del carrito almacenados en localStorage
  let cartProducts = JSON.parse(localStorage.getItem("cart")) || [];

  // Verificar si el product ya está en el carrito
  const existingProduct = cartProducts.find((p) => p.id === product.id);

  if (existingProduct) {
    // Si el product ya está en el carrito, incrementar la cantidad
    existingProduct.cantidad++;
  } else {
    // Si el product no está en el carrito, agregarlo
    const newProduct = {
      id: product.id,
      nombre: product.nombre,
      precio: product.precio,
      cantidad: 1,
    };
    cartProducts.push(newProduct);
  }

  // Guardar los productos actualizados en localStorage
  localStorage.setItem("cart", JSON.stringify(cartProducts));

  // Mostrar los productos actualizados en el carrito
  displayCart();
};
