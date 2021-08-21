function updateProductCost(product, price) {
    const productInput = document.getElementById(product + '-cost');
    const productCost = productInput.innerText;
    productInput.innerText = parseFloat(productCost);
    productInput.innerText = price;
    calculateTotal();
}
// handle best price 

const bestPriceInput = document.getElementById('best-price');
const bestPriceTotal = bestPriceInput.innerText;
const bestPrice = parseFloat(bestPriceTotal);
bestPriceInput.innerText = bestPrice;

// handle memory cost event
document.getElementById('memory-8').addEventListener('click', function () {
    updateProductCost('memory', 0);
});
document.getElementById('memory-16').addEventListener('click', function () {
    updateProductCost('memory', 180);
});

// handle delivery cost event
document.getElementById('free-delivery').addEventListener('click', function () {
    updateProductCost('delivery', 0);
});
document.getElementById('pay-delivery').addEventListener('click', function () {
    updateProductCost('delivery', 20);
});

// handle storage cost event
document.getElementById('storage-256').addEventListener('click', function () {
    updateProductCost('storage', 0);

});
document.getElementById('storage-512').addEventListener('click', function () {
    updateProductCost('storage', 100);

});
document.getElementById('storage-1000').addEventListener('click', function () {
    updateProductCost('storage', 180);

});
// handle total event

function getInputValue(product) {
    const productInput = document.getElementById(product + '-cost');
    const productCost = parseFloat(productInput.innerText);
    return productCost;
}
function calculateTotal() {
    const memoryCostTotal = getInputValue('memory');
    const deliveryCostTotal = getInputValue('delivery');
    const storageCostTotal = getInputValue('storage');
    const total = storageCostTotal + bestPrice + memoryCostTotal + deliveryCostTotal;
    document.getElementById('total-price').innerText = total;
    // cupon total 
    document.getElementById('cupon-total').innerText = total;
    return total;
}
document.getElementById('cupon-apply').addEventListener('click', function () {
    const cuponInput = document.getElementById('cupon-code');
    const previousTotal = calculateTotal();
    if (cuponInput.value.toLowerCase() == 'stevekaku') {
        const finalTotal = document.getElementById('cupon-total');
        finalTotal.innerText = previousTotal - (previousTotal * 0.2);
    }

});

