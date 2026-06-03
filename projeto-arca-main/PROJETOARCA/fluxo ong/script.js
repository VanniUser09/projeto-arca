const dadosPorMes = {
    Janeiro:   [40, 15, 35, 70, 45, 55],
    Fevereiro: [55, 20, 40, 80, 50, 65],
    Março:     [30, 25, 50, 60, 35, 40],
    Abril:     [65, 10, 45, 75, 60, 70],
    Maio:      [50, 30, 55, 65, 40, 50],
    Junho:     [70, 20, 60, 85, 55, 75],
    Julho:     [45, 15, 40, 70, 45, 60],
    Agosto:    [60, 25, 50, 80, 50, 65],
    Setembro:  [35, 20, 45, 65, 40, 55],
    Outubro:   [55, 30, 55, 75, 60, 70],
    Novembro:  [40, 15, 35, 60, 35, 50],
    Dezembro:  [75, 35, 65, 90, 65, 80],
};

function atualizarGrafico(mes) {
    const barras = document.querySelectorAll('#barrasGrafico .barra');
    const valores = dadosPorMes[mes] || dadosPorMes['Fevereiro'];
    barras.forEach((barra, i) => {
        barra.style.height = valores[i] + '%';
    });
}

function abrirMenu() {
    document.getElementById('barraLateral').classList.add('aberto');
    document.getElementById('sobreposicao').classList.add('visivel');
}

function fecharMenu() {
    document.getElementById('barraLateral').classList.remove('aberto');
    document.getElementById('sobreposicao').classList.remove('visivel');
}

document.getElementById('botaoMenu').addEventListener('click', fecharMenu);
document.getElementById('botaoMenuMobile').addEventListener('click', abrirMenu);
document.getElementById('sobreposicao').addEventListener('click', fecharMenu);

document.getElementById('selecaoMes').addEventListener('change', function () {
    atualizarGrafico(this.value);
});

document.querySelector('.botao-gerar').addEventListener('click', function () {
    const mes = document.getElementById('selecaoMes').value;
    alert('Relatório de ' + mes + ' gerado com sucesso!');
});
