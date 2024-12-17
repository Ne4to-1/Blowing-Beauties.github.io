const images = document.querySelectorAll(".myImage");
    images.forEach((img) => {
        img.addEventListener("mouseover", function() {
            img.style.transform = "scale(1.2)";
        });

        img.addEventListener("mouseout", function() {
            img.style.transform = "scale(1)"; 
        });
});

function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    
    alert(`${productName} добавлен в корзину!`);
}







