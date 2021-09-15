// ------ JavaScript Start ------


// Memory Price

document.getElementById('first-memory-price').addEventListener('click', function() {
    let setFirstMemoryPrice = document.getElementById('memory-cost');
    setFirstMemoryPrice.innerText = 0;
    totalCost();
    grandCost();

})
document.getElementById('second-memory-price').addEventListener('click', function() {
    let setSecondMemoryPrice = document.getElementById('memory-cost');
    setSecondMemoryPrice.innerText = 180;

    totalCost();
    grandCost();
})

// Storage Price

document.getElementById('first-storage').addEventListener('click', function() {
    let setFirstStoragePrice = document.getElementById('storage-cost')
    setFirstStoragePrice.innerText = 0;
    totalCost();
    grandCost();

})
document.getElementById('second-storage').addEventListener('click', function() {
    let setSecondStoragePrice = document.getElementById('storage-cost')
    setSecondStoragePrice.innerText = 100;
    totalCost();
    grandCost();
})

document.getElementById('third-storage').addEventListener('click', function() {
    let setThirdStoragePrice = document.getElementById('storage-cost')
    setThirdStoragePrice.innerText = 180;
    totalCost();
    grandCost();

})

//Delivery Price

document.getElementById('first-delivery-method').addEventListener('click', function() {
    let setFirstDeliveryPrice = document.getElementById('delivery-cost')
    setFirstDeliveryPrice.innerText = 0;
    totalCost();
    grandCost();

})
document.getElementById('second-delivery-method').addEventListener('click', function() {
    let setSecondDeliveryPrice = document.getElementById('delivery-cost')
    setSecondDeliveryPrice.innerText = 20;
    totalCost();
    grandCost();
})


//Total Price calculation


function totalCost() {

    let bestCost = document.getElementById('best-cost');
    let getBestCost = parseInt(bestCost.innerText);
    let memoryCost = document.getElementById('memory-cost');
    let getMemoryCost = parseInt(memoryCost.innerText);
    let storageCost = document.getElementById('storage-cost');
    let getStorageCost = parseInt(storageCost.innerText);
    let deliveryCost = document.getElementById('delivery-cost');
    let getDeliveryCost = parseInt(deliveryCost.innerText);
    let totalCost = getBestCost + getMemoryCost + getStorageCost + getDeliveryCost;
    let totalPrice = document.getElementById('total-price');
    totalPrice.innerText = totalCost;

}

// Main Total Price + Discount Calculation 


document.getElementById('input-btn-id').addEventListener('click', function() {
    let inputData = document.getElementById('input-id').value;

    if (inputData == 'stevekaku') {
        let previousCost = document.getElementById('total-price').innerText;
        let sum = previousCost * 0.20; // 20% = 0.20 //
        let mainCost = document.getElementById('main-total');
        mainCost.innerText = parseFloat(previousCost - sum);

    } else {

        let previousCost = document.getElementById('total-price').innerText;
        let grandcost = document.getElementById('main-total');
        grandcost.innerText = parseFloat(previousCost);


    }


})

// Grand Total Calculation

function grandCost() {

    let bestCost = document.getElementById('best-cost');
    let getBestCost = parseInt(bestCost.innerText);
    let memoryCost = document.getElementById('memory-cost');
    let getMemoryCost = parseInt(memoryCost.innerText);
    let storageCost = document.getElementById('storage-cost');
    let getStorageCost = parseInt(storageCost.innerText);
    let deliveryCost = document.getElementById('delivery-cost');
    let getDeliveryCost = parseInt(deliveryCost.innerText);
    let grandCost = getBestCost + getMemoryCost + getStorageCost + getDeliveryCost;
    let totalPrice = document.getElementById('main-total');
    totalPrice.innerText = grandCost;

}


// ------- JavaScript END -------