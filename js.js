// Pilih elemen yang ingin dijadikan sticky
const stickySection = document.querySelector('.lg-home__capsule-section');

// Fungsi untuk menambah atau menghapus kelas berdasarkan posisi scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) { // Ubah nilai ini jika ingin sticky aktif di posisi berbeda
        stickySection.classList.add('sticky-active');
    } else {
        stickySection.classList.remove('sticky-active');
    }
});
