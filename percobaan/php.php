<?php
// Mengambil data dari POST request
$jenis = $_POST['jenis'];  // jenis pembelian (pulsa/saldo)
$nominal = $_POST['nominal'];  // nominal yang dipilih

// Koneksi ke database
$host = 'localhost';
$db = 'nama_database';
$user = 'username';
$pass = 'password';
$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Simpan transaksi pembelian
$sql = "INSERT INTO transaksi (jenis, nominal) VALUES ('$jenis', '$nominal')";
if ($conn->query($sql) === TRUE) {
    echo "Pembelian berhasil! Anda membeli " . $jenis . " sebesar Rp " . number_format($nominal);
} else {
    echo "Terjadi kesalahan: " . $conn->error;
}

$conn->close();
?>
