function productUpdate(product, price, isPlus) {
    //----- Increase and decrease cart handle
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isPlus == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    //------Increase price when clicking 'plus' and decrease when clicking 'minus'
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    //------Calculate subtotal of phone and case price together
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subtotal = phoneTotal + caseTotal;
    const tax = subtotal / 10;
    const grandTotal = subtotal + tax;
    //-------Update subtotal, tax and grand total
    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('grand-total').innerText = grandTotal;
}

//-------Phone plus handle event
document.getElementById('phone-plus').addEventListener('click', function () {
    productUpdate('phone', 1219, true);
});

//-------Phone minus handle event
document.getElementById('phone-minus').addEventListener('click', function () {
    productUpdate('phone', 1219, false);
});

//-------Case plus handle event
document.getElementById('case-plus').addEventListener('click', function () {
    productUpdate('case', 59, true);
});

//-------Case minus handle event
document.getElementById('case-minus').addEventListener('click', function () {
    productUpdate('case', 59, false);
});
