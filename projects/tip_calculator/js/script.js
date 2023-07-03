function updateTipPercentage() {
    var tipPercentage = document.getElementById('tip-percentage').value;
    document.getElementById('tip-percentage-value').textContent = tipPercentage + '%';
}

function updateNumPeople() {
    var numPeople = document.getElementById('num-people').value;
    document.getElementById('num-people-value').textContent = numPeople;
}

function calculateTip() {
    var billAmount = parseFloat(document.getElementById('bill-amount').value);
    var tipPercentage = parseFloat(document.getElementById('tip-percentage').value) / 100;
    var numPeople = parseInt(document.getElementById('num-people').value);

    if (isNaN(billAmount) || billAmount <= 0) {
        alert("Invalid bill amount!");
        return;
    }

    var tipAmount = billAmount * tipPercentage;
    var totalAmount = billAmount + tipAmount;
    var amountPerPerson = totalAmount / numPeople;

    var resultElement = document.getElementById('result');
    resultElement.innerHTML = "<hr>" + "Tip Amount: &#8356; " + tipAmount.toFixed(2) + "<br>" +
        "Total Amount: &#8356; " + totalAmount.toFixed(2) + "<br>" +
        "Amount per Person: &#8356; " + amountPerPerson.toFixed(2);
}