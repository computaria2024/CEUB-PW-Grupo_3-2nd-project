// Função para buscar usuários armazenados no localStorage
function getUsers() {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
}

// Função para salvar usuários no localStorage
function saveUser(user) {
  const users = getUsers();
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
}

// Função de cadastro
function signup(name, email, password) {
  if (!name || !email || !password) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Verificando se o usuário já existe
  const users = getUsers();
  const userExists = users.some(user => user.email === email);

  if (userExists) {
    alert('Este email já está cadastrado.');
  } else {
    // Salvando novo usuário
    saveUser({ name, email, password });
    alert('Cadastro realizado com sucesso! Faça login para continuar.');
    window.location.href = "signin.html"; // Redireciona para a página de login
  }
}

// Função de login
function login(email, password) {
  if (!email || !password) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Obtendo usuários armazenados
  const users = getUsers();

  // Validando credenciais
  const validUser = users.find(user => user.email === email && user.password === password);

  if (validUser) {
    localStorage.setItem('isAuthenticated', true);
    localStorage.setItem('userEmail', email);

    alert('Login bem-sucedido!');
    window.location.href = "home.html"; // Redireciona para a página inicial
  } else {
    alert('Email ou senha incorretos.');
  }
}
