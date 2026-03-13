// ==============================
// FITUR 1: DARK MODE TOGGLE
// ==============================

const darkToggleBtn = document.querySelector('#dark-toggle');
const body = document.body;

darkToggleBtn.addEventListener('click', function() {
  // Toggle class dark-mode di body
  body.classList.toggle('dark-mode');

  // Cek apakah dark mode sekarang aktif
  const isDarkMode = body.classList.contains('dark-mode');

  // Update teks tombol
  if (isDarkMode) {
    darkToggleBtn.textContent = '☀️ Light Mode';
  } else {
    darkToggleBtn.textContent = '🌙 Dark Mode';
  }
});

// ==============================
// FITUR 3: VALIDASI FORM
// ==============================

const btnKirim = document.querySelector('#btn-kirim');
const inputNama = document.querySelector('#input-nama');
const inputEmail = document.querySelector('#input-email');
const inputPesan = document.querySelector('#input-pesan');
const formFeedback = document.querySelector('#form-feedback');

function tampilkanPesan(teks, tipe) {
  formFeedback.textContent = teks;
  formFeedback.className = 'feedback ' + tipe; // set class
}

function isEmailValid(email) {
  // Regex sederhana untuk cek format email
  return email.includes('@') && email.includes('.');
}

btnKirim.addEventListener('click', function() {
  const nama = inputNama.value.trim();
  const email = inputEmail.value.trim();
  const pesan = inputPesan.value.trim();

  // Validasi: field kosong
  if (nama === '' || email === '' || pesan === '') {
    tampilkanPesan('⚠️ Semua field harus diisi!', 'error');
    return; // stop eksekusi di sini
  }

  // Validasi: format email
  if (!isEmailValid(email)) {
    tampilkanPesan('⚠️ Format email tidak valid! Contoh: nama@email.com', 'error');
    return;
  }

  // Jika semua valid
  tampilkanPesan('✅ Pesan berhasil dikirim! Terima kasih, ' + nama + '!', 'success');

  // Kosongkan form setelah berhasil
  inputNama.value = '';
  inputEmail.value = '';
  inputPesan.value = '';
});
