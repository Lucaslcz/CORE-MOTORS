document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const nomeCarro = params.get('nome');

    if (!nomeCarro) {
        window.location.href = "explorar.html";
        return;
    }

    fetch('ficha.json')
        .then(response => response.json())
        .then(dados => {
            const carro = dados.find(c => c.NOME.toLowerCase().trim() === nomeCarro.toLowerCase().trim());

            if (carro) {
                renderizarDados(carro);
            } else {
                document.getElementById('carro-nome').innerText = "Dados não encontrados";
            }
        })
        .catch(error => console.error("Erro ao carregar ficha.json:", error));
});

function renderizarDados(carro) {
    document.title = `CoreMotors - ${carro.NOME}`;
    document.getElementById('carro-nome').innerText = carro.NOME;

    const tabela = document.getElementById('tabela-dados');
    const specs = [
        ["Modelo", carro.NOME],
        ["Ano", carro.ANO],
        ["Motor", carro.MOTOR],
        ["Tipo", carro["M/E"]],
        ["Potência", carro.POTENCIA],
        ["Torque", carro.TORQUE],
        ["0-100 km/h", carro["0_A_100"]],
        ["Câmbio", carro.CAMBIO],
        ["Tração", carro.TRACAO],
        ["Peso", carro.PESO],
        ["Preço", carro.PRECO]
    ];

    tabela.innerHTML = specs.map(spec => `
        <tr>
            <td class="in-informacoes">${spec[0]}</td>
            <td class="out-informacoes">${spec[1]}</td>
        </tr>
    `).join('');

    const btnFav = document.getElementById('btn-favorito');
    btnFav.onclick = () => {
        let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        if (!favoritos.some(c => c.nome === carro.NOME)) {
            favoritos.push({ 
                nome: carro.NOME, 
                foto: `Carrosimg/${carro.Id}.png`, 
                link: `ficha.html?nome=${encodeURIComponent(carro.NOME)}` 
            });
            localStorage.setItem('favoritos', JSON.stringify(favoritos));
        }
        btnFav.innerHTML = "VER NOS FAVORITOS";
        btnFav.style.backgroundColor = "#F5921D";
        setTimeout(() => { window.location.href = "favorito.html"; }, 800);
    };
}