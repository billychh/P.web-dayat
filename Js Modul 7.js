// Simulasi data username dan password yang benar
const validUsername = "Dayatlbs";
const validPassword = "12345";

function login() {
    // Ambil nilai input dari form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Periksa kondisi input kosong
    if (username === "" || password === "") {
        message.textContent = "Input tidak lengkap. Silakan isi semua field.";
        message.style.color = "orange";
        return;
    }

    // Periksa kondisi login sukses atau gagal
    if (username === validUsername && password === validPassword) {
        message.textContent = "Login sukses!";
        message.style.color = "green";
    } else {
        message.textContent = "Login gagal. ID atau Password salah.";
        message.style.color = "red";
    }
}