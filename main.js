const btnCart = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const btnClose = document.querySelector(".close")

btnCart.addEventListener('click', () => {
    alert("hello")
    cart.classList.add('cart-active');
})