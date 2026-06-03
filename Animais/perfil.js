let botaoAdotar = document.querySelector('.btn-adotar');

botaoAdotar.addEventListener('click', function() {
  alert('Você será direcionado para o formulário de adoção.');
});

function abrirMenuUsuario() {
  let menu = document.getElementById("menuUsuario");
  menu.classList.toggle("ativo");
}