document.getElementById('beliPulsa').addEventListener('click', function() {
    var pulsa = document.getElementById('pulsa').value;
    
    // Kirim data pulsa ke server
    fetch('proses_beli.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'jenis=pulsa&nominal=' + pulsa
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Menampilkan pesan dari server
    });
});

document.getElementById('beliSaldo').addEventListener('click', function() {
    var saldo = document.getElementById('saldo').value;
    
    // Kirim data saldo ke server
    fetch('proses_beli.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'jenis=saldo&nominal=' + saldo
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Menampilkan pesan dari server
    });
});
