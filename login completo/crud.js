
const formulario = document.getElementById('form-cadastro');
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputIdade = document.getElementById('idade');
const inputSenha = document.getElementById('password');

const popupSucesso = document.getElementById('popup-sucesso');
const btnIrLogin = document.getElementById('btn-ir-login');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault(); 

const nome = inputNome.value.trim();
    const email = inputEmail.value.trim();
    const idade = inputIdade.value.trim();
    const senha = inputSenha.value.trim();

const idUnico = "USR-" + Date.now();

const novoUsuario = {
        id: idUnico,
        nome: nome,
        email: email,
        idade: idade,
        senha: senha
    };

let bancoDeUsuarios = JSON.parse(localStorage.getItem('bancoUsuarios')) || [];

bancoDeUsuarios.push(novoUsuario);

localStorage.setItem('bancoUsuarios', JSON.stringify(bancoDeUsuarios));

console.log("✅ Usuário CADASTRADO com sucesso!");
    console.log("Dados do novo usuário:", novoUsuario);
    console.log("Banco de Dados Completo:", bancoDeUsuarios);

popupSucesso.style.display = 'flex';
});

btnIrLogin.addEventListener('click', function () {
    window.location.href = "index.html";
});