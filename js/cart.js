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
    cartContainer.innerHTML = "<h3 class='title-product fw-bold'>No hay productos en el carrito. ¡Seguí comprando!</h3>";
    // Ajustar la altura mínima del carrito para evitar cambios en la página
    cartContainer.style.minHeight = "200px"; // Puedes ajustar el valor según tus necesidades
  } else {
    // Mostrar los productos en el carrito
    cartProducts.forEach(function (product, index) {
      let cartItem = document.createElement("div");
      cartItem.classList.add("col-md-4");

      cartItem.innerHTML = `
        <div class="card">
          <img src="${product.urlImg}" class="card-img-top mx-auto" alt="${product.modelo}" style="width: 200px; height: 200px; object-fit: cover;">
          <div class="card-body">
            <h5 class="card-title title-product fw-bold">${product.modelo}</h5>
            <p class="card-price fw-bold text-product">Precio: $${product.precio}</p>
            <button class="btn btn-danger btn-remove" data-product-id="${index}">Eliminar</button>
          </div>
        </div>
      `;

      // Añadir evento de clic para el botón de eliminación
      let removeButton = cartItem.querySelector(".btn-remove");
      removeButton.addEventListener("click", function () {
        removeFromCart(index);
      });

      cartContainer.appendChild(cartItem);
    });

    // Actualizar el total del carrito
    updateCartTotal(cartProducts);
  }
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
  // Obtener los productos del carrito almacenados en localStorage
  let cartProducts = JSON.parse(localStorage.getItem("cart")) || [];

  // Eliminar el producto según el índice
  cartProducts.splice(index, 1);

  // Guardar los productos actualizados en localStorage
  localStorage.setItem("cart", JSON.stringify(cartProducts));

  // Volver a mostrar los productos en el carrito
  displayCart();
}

function parsePrecio(precioString) {
  // Eliminar puntos y reemplazar la coma por un punto
  const cleanedPrecio = precioString.replace(/\./g, '').replace(',', '.');

  // Convertir a un número de punto flotante
  const parsedPrecio = parseFloat(cleanedPrecio);

  return parsedPrecio;
}

// Función para actualizar el total del carrito
function updateCartTotal(cartProducts) {
  let total = cartProducts.reduce(
    (acc, product) => acc + parsePrecio(product.precio),
    0
  );
  document.getElementById("cart-total").textContent = total.toFixed(2);
}

// Función para simular el pago
function pay() {
  // Obtener la lista de productos en el carrito desde el localStorage
  let cartProducts = JSON.parse(localStorage.getItem("cart")) || [];

  // Verificar si el carrito está vacío
  if (cartProducts.length === 0) {
    Swal.fire({
      position: "top-center",
      color: "#212121",
      icon: "warning",
      title: `No hay nada en el carrito, ¿quiere ir a la tienda?`,
      showConfirmButton: true,
      confirmButtonText: "Sí, ir a la tienda",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirigir al usuario a la tienda
        window.location.href = "/"; // Cambia esta ruta según tu estructura de URL
      }
    });
    return;
  }

  // Limpiar la lista del carrito en el localStorage
  localStorage.removeItem("cart");

  // Volver a mostrar los productos en el carrito (ahora estará vacío)
  displayCart();

  // Actualizar el total del carrito
  updateCartTotal([]);

  // Mostrar la alerta de compra exitosa
  Swal.fire({
    position: "top-center",
    color: "#212121",
    icon: "success",
    title: `Se realizó la compra!`,
    showConfirmButton: false,
    timer: 1500,
  });
}
