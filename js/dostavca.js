function updateCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');

    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    cart.forEach((item, index) => {
        totalPrice += item.price;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.textContent = `${item.name} - ${item.price} руб.`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Удалить';
        removeButton.onclick = () => {
            removeFromCart(index);
        };

        div.appendChild(removeButton);
        cartItemsContainer.appendChild(div);
    });

    totalPriceElement.textContent = totalPrice;
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

updateCart();