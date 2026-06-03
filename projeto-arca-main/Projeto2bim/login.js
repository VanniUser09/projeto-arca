const formulario = document.querySelector('form');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('password');
const mensagemErro = document.getElementById('mensagem-erro');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault(); 

const emailDigitado = inputEmail.value.trim();
    const senhaDigitada = inputSenha.value.trim();

    mensagemErro.style.display = 'none';

if (emailDigitado === "tutor@arca.com" && senhaDigitada === "123456") { 
        window.location.href = "home.html"; 
        return; 
    }
    else if (emailDigitado === "candidato@arca.com" && senhaDigitada === "cand!098") { 
        window.location.href = "home.html"; 
        return;
    }
    else if (emailDigitado === "Ong@arca.com" && senhaDigitada === "ong$-135") { 
        window.location.href = "home.html"; 
        return;
    }
    else if (emailDigitado === "prefeitura@arca.com" && senhaDigitada === "pref@456") { 
        window.location.href = "home.html"; 
        return;
    }

const bancoDeUsuarios = JSON.parse(localStorage.getItem('bancoUsuarios')) || [];

const usuarioEncontrado = bancoDeUsuarios.find(function(usuario) {
        return usuario.email === emailDigitado && usuario.senha === senhaDigitada;
    });

    if (usuarioEncontrado) {
        
        console.log("Login autorizado para o novo usuário:", usuarioEncontrado.nome);
        window.location.href = "home.html"; 
    } else {
        
        mensagemErro.style.display = 'block';
    }
});