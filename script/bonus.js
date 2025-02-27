document.getElementById('bon').addEventListener('click', function() {
    let Enter = document.getElementById('Enterr').value;
    let amount = document.getElementById('amountr').value;
    let pin = document.getElementById('pinn').value;

    if (Enterr.length !== 11 || isNaN(Enter)) {
        alert('Please enter a valid 11-digit number');
    }
});
