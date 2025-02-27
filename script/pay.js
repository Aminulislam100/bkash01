document.getElementById('p').addEventListener('click', function() {
    let Enter = document.getElementById('Enter').value;
    let amount = document.getElementById('amount').value;
    let pin = document.getElementById('pin').value;

    if (Enter.length !== 11 || isNaN(Enter)) {
        alert('Please enter a valid 11-digit number');
    }

    if(amount === ""){
        alert('Please add an amount')
    }
    if(pin === ""){
        alert('Please enter a valid 4-digit number')
    }
});
