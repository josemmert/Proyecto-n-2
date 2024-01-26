document.addEventListener("DOMContentLoaded", function () {
  let addToCartButton = document.getElementById("add-to-cart-btn");
  if (addToCartButton) {
    addToCartButton.addEventListener("click", function () {
      let product = {
        id: 1,
        name: "Ejemplo de Producto",
        price: 19.99,
      };

      addToCart(product);
    });
  }

  $("#cartModal").on("show.bs.modal", function (e) {
    updateCartModal();
  });
});

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartModal();
}

function updateCartModal() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartElement = document.getElementById("cart");
  cartElement.innerHTML = "";

  if (cart.length === 0) {
    cartElement.innerHTML = "<p>No hay productos en el carrito.</p>";
  } else {
    cart.forEach((product) => {
      let productElement = document.createElement("div");
      productElement.innerHTML = `
                <div>${product.name}</div>
                <div>Cantidad: ${product.quantity}</div>
                <div>Precio: $${product.price.toFixed(2)}</div>
                <hr>
            `;
      cartElement.appendChild(productElement);
    });
  }

  let totalElement = document.getElementById("cart-total");
  let total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  totalElement.innerText = total.toFixed(2);
}
