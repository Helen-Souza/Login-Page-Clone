document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "senha123") {
        alert("Login bem-sucedido!");
    } else {
        document.getElementById('error-message').innerText = "Usuário ou senha incorretos.";
    }
});
