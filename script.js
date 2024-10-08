// Função para calcular a diferença entre renda e despesas
document.getElementById('calcularBtn').addEventListener('click', () => {
    const renda = parseFloat(document.getElementById('renda').value);
    const despesasTotais = parseFloat(document.getElementById('despesasTotais').value);
    const poupanca = renda - despesasTotais;

    const resultadoText = poupanca >= 0 
        ? `Você tem uma poupança de R$ ${poupanca.toFixed(2)} este mês!`
        : `Você está com um déficit de R$ ${Math.abs(poupanca).toFixed(2)} este mês!`;

    document.getElementById('resultado').textContent = resultadoText;
});

// Dados iniciais de gastos
let categorias = ['Alimentação', 'Transporte', 'Educação', 'Lazer', 'Saúde'];
let valores = [500, 300, 200, 150, 100];

// Função para adicionar gastos ao gráfico
document.getElementById('addGastoBtn').addEventListener('click', () => {
    const categoria = document.getElementById('categoria').value;
    const valor = parseFloat(document.getElementById('valor').value);
    
    if (categoria && valor) {
        categorias.push(categoria);
        valores.push(valor);
        updateChart();
    }
});

// Gráfico de Pizza para mostrar gastos por categoria
const ctx = document.getElementById('pieChart').getContext('2d');
let pieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: categorias,
        datasets: [{
            data: valores,
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)'
            ]
        }]
    },
    options: {
        responsive: true
    }
});

// Função para atualizar o gráfico
function updateChart() {
    pieChart.data.labels = categorias;
    pieChart.data.datasets[0].data = valores;
    pieChart.update();
}
