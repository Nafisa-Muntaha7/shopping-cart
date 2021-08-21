document.getElementById('case-plus').addEventListener('click', function () {
    const casePlusInput = document.getElementById('case-number');
    const casePlusNumber = casePlusInput.value;
    casePlusInput.value = parseInt(casePlusNumber) + 1;
    //----------
    const casePlusPrice1 = document.getElementById('case-price');
    const casePlusPrice2 = casePlusPrice1.innerText;
    const casePLusTotal = parseInt(casePlusPrice2);
    casePlusPrice.innerText = casePlusNumber * casePLusTotal;
});


document.getElementById('case-minus').addEventListener('click', function () {
    const caseMinusInput = document.getElementById('case-number');
    const caseMinusNumber = caseMinusInput.value;
    caseMinusInput.value = parseInt(caseMinusNumber) - 1;
});
