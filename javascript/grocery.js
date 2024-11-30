let cart = [];
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const itemName = button.getAttribute('data-name');
        const itemPrice = parseFloat(button.getAttribute('data-price'));
        cart.push({ name: itemName, price: itemPrice });
        document.getElementById('cart-count').textContent = cart.length;
    });
});