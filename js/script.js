const loginForm = document.getElementById('login-form');
const loginContainer = document.getElementById('login-container');
const mainMenu = document.getElementById('main-menu');
const errorMessage = document.getElementById('error-message');

// Credenciales simuladas
const validUser = 'admin';
const validPassword = '1234';

// Manejar el envío del formulario
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUser && password === validPassword) {
        // Mostrar menú principal
        loginContainer.classList.add('hidden');
        mainMenu.classList.remove('hidden');
    } else {
        // Mostrar mensaje de error
        errorMessage.classList.remove('hidden');
    }
});