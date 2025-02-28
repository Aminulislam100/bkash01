document.getElementById('log').addEventListener('click', function(event) {
    event.preventDefault();
    let pin = document.getElementById('pin').value;

    const convertedPin = parseInt(pin);
    const amount = document.getElementById('amount').value;
    const convertedAmount = parseInt(amount);
    const main = document.getElementById('main').innerText
    const conMain = parseFloat(main);


    if (amount) {
        if (pin.length === 4) {
            const sum = conMain + convertedAmount
            document.getElementById('main').innerText=sum
        } else {
            alert('Enter valid pin');
        }
    } else {
        alert('Enter amount');
    }
});
