document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const correo = document.getElementById('correo').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    // Validación usando utileria.js (ejemplo de funciones estándar)
    const correoValido = typeof validarCorreo === 'function' ? validarCorreo(correo) : correo.includes('@');
    const passValido = typeof validarPassword === 'function' ? validarPassword(password) : password.length >= 6;

    if (correoValido && passValido) {
        // Guardar sesión simulada
        localStorage.setItem('usuarioActivo', correo);
        window.location.href = 'index.html';
    } else {
        errorMsg.textContent = 'Correo inválido o contraseña muy corta (mínimo 6 caracteres).';
        errorMsg.classList.remove('d-none');
    }
});