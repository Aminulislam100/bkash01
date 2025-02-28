document.getElementById('wid').addEventListener('click', function(event) {
    event.preventDefault();
    let pin = document.getElementById('pinn').value;

    const convertedPin = parseInt(pin);
    const amount = document.getElementById('amountr').value;
    const convertedAmount = parseInt(amount);
    const main = document.getElementById('main').innerText
    const conMain = parseFloat(main);


    if (amount) {
        if (pin.length === 4) {
            const sub = conMain - convertedAmount
            document.getElementById('main').innerText=sub
        } else {
            alert('Enter valid pin');
        }
    } else {
        alert('Enter amount');
    }
});
