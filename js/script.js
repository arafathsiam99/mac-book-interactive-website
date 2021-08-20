document.getElementById('memory-8').addEventListener('click', function () {
    const extraMemoryCost = document.getElementById('memory-cost');
    extraMemoryCost.innerText = 0;

});

document.getElementById('memory-16').addEventListener('click', function () {
    const extraMemoryCost = document.getElementById('memory-cost');
    extraMemoryCost.innerText = 180;
});

document.getElementById('storage-256').addEventListener('click', function () {
    const extraStorageCost = document.getElementById('storage-cost');
    extraStorageCost.innerText = 0;

});
document.getElementById('storage-512').addEventListener('click', function () {
    const extraStorageCost = document.getElementById('storage-cost');
    extraStorageCost.innerText = 100;


});
document.getElementById('storage-1000').addEventListener('click', function () {
    const extraStorageCost = document.getElementById('storage-cost');
    extraStorageCost.innerText = 180;
});

document.getElementById('free-delivery').addEventListener('click', function () {
    const deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = 0;
});
document.getElementById('pay-delivery').addEventListener('click', function () {
    const deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = 20;
});