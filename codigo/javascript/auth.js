const validCredentials = {
    email: "valdemir@ceubao.com",
    password: "senha123"
  };
  
  function validateLogin(event) {
    event.preventDefault();
    const emailInput = document.querySelector('input[type="email"]').value;
    const passwordInput = document.querySelector('input[type="password"]').value;
  
    if (emailInput === validCredentials.email && passwordInput === validCredentials.password) {
      // Armazena informações de login no localStorage
      localStorage.setItem('isAuthenticated', true);
      localStorage.setItem('userEmail', emailInput);
  
      alert("Login bem-sucedido!");
      window.location.href = "home.html"; // Redireciona para home.html
    } else {
      alert("Email ou senha incorretos.");
    }
  }
  
  document.querySelector('form').addEventListener('submit', validateLogin);
  