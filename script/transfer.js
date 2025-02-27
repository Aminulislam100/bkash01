document.getElementById('Transferr').addEventListener('click', function() {
    let Enter = document.getElementById('Enterr').value;
    let amount = document.getElementById('amountr').value;
    let pin = document.getElementById('pinn').value;

    if (Enterr.length !== 11 || isNaN(Enter)) {
        alert('Please enter a valid 11-digit number');
    }

    if(amountt === ""){
        alert('Please add an amount')
    }
    if(pinn === ""){
        alert('Please enter a valid 4-digit number')
    }
});
