let checkoutItemsDiv = document.getElementById('checkoutItems');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

cart.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `${item.title} (x${item.count})`;
    checkoutItemsDiv.appendChild(div);
});

document.getElementById('checkoutForm').onsubmit = function(event) {
    event.preventDefault();
    document.getElementById('paymentPopup').style.display = "block";
};
