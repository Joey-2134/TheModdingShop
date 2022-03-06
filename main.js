let cartIcon = document.getElementById("cart-icon");
let closeCart = document.getElementById("close-cart");
let cart = document.getElementById("cartdiv");

function displayCart(){
   cart.style.visibility="visible"
}
function closeCartfunc(){
    cart.style.visibility="hidden"
}

closeCart.addEventListener("click",closeCartfunc);
cartIcon.addEventListener("click",displayCart);