function filtrarAnimais(tipo) {
  let cards = document.querySelectorAll('.card-animal');

  cards.forEach(function(card) {
    if (tipo === 'todos') {
      card.style.display = 'block';
    } else if (card.classList.contains(tipo)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function abrirMenuUsuario() {
  let menu = document.getElementById("menuUsuario");
  menu.classList.toggle("ativo");
}