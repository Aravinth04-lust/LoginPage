let cart = [];
let totalPrice = 0;

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.parentElement;
    const name = product.getAttribute("data-name");
    const price = parseFloat(product.getAttribute("data-price"));

    cart.push({ name, price });
    totalPrice += price;

    updateCart();
  });
});

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const totalPriceElement = document.getElementById("total-price");

  cartItems.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });

  cartCount.textContent = cart.length;
  totalPriceElement.textContent = `Total: $${totalPrice}`;
}
