const formulario = document.querySelector('form');
const popup = document.getElementById('popup-sucesso');
const botaoIrlogin = document.getElementById('btn-ir-login');

formulario.addEventListener('submit', function(evento){ evento.preventDefault(); popup.style.display = 'flex'; });

botaoIrlogin.addEventListener('click', function() {window.location.href = "index.html";})