const carros = [
    { nome: "NISSAN | GT-R R35", ano: 2022, cv: 565, peso: 1750, foto: "Carrosimg/gtr-r35.png", link: "Fichas/gt-r-r35.html" },
    { nome: "TOYOTA | Corolla", ano: 2023, cv: 177, peso: 1405, foto: "Carrosimg/corolla.png", link: "Fichas/corolla.html" },
    { nome: "BUGATTI | Chiron", ano: 2021, cv: 1500, peso: 1995, foto: "Carrosimg/bugatti-chiron.png", link: "Fichas/chiron.html" },
    { nome: "CHEVROLET | Zafira", ano: 2012, cv: 140, peso: 1460, foto: "Carrosimg/zafira.png", link: "Fichas/zafira2012.html" },
    { nome: "NISSAN | Skyline GT-R R34", ano: 1999, cv: 280, peso: 1560, foto: "Carrosimg/skyline-gt-r-r34.png", link: "Fichas/skyline.html" },
    { nome: "FORD | Fusion", ano: 2018, cv: 248, peso: 1627, foto: "Carrosimg/ford-fusion.png", link: "Fichas/fusion.html" },
    { nome: "HYUNDAI | HB20", ano: 2023, cv: 120, peso: 1062, foto: "Carrosimg/hb20.png", link: "Fichas/hb20.html" },
    { nome: "FIAT | Uno", ano: 2010, cv: 75, peso: 925, foto: "Carrosimg/uno2010.png", link: "Fichas/uno2010.html" },
    { nome: "SUBARU | WRX STI", ano: 2021, cv: 310, peso: 1535, foto: "Carrosimg/subaru.png", link: "Fichas/subaru.html" },
    { nome: "FIAT | Cronos", ano: 2023, cv: 107, peso: 1139, foto: "Carrosimg/cronos.png", link: "Fichas/cronos.html" },
    { nome: "FERRARI | Enzo", ano: 2002, cv: 660, peso: 1255, foto: "Carrosimg/enzo.png", link: "Fichas/enzo.html" },
    { nome: "LAMBORGHINI | Huracán", ano: 2022, cv: 640, peso: 1379, foto: "Carrosimg/huracan.png", link: "Fichas/huracan.html" },
    { nome: "MITSUBISHI | Lancer Evo X", ano: 2015, cv: 295, peso: 1590, foto: "Carrosimg/mitsubishi.png", link: "Fichas/mitsubishi.html" },
    { nome: "DODGE | Ram 2500", ano: 2023, cv: 365, peso: 3448, foto: "Carrosimg/ram.png", link: "Fichas/ram.html" },
    { nome: "NISSAN | 370Z Nismo", ano: 2020, cv: 355, peso: 1535, foto: "Carrosimg/370z-nismo.png", link: "Fichas/370z-nismo.html" },
    { nome: "BMW | Z4 LCI E89", ano: 2014, cv: 184, peso: 1495, foto: "Carrosimg/z4-lci.png", link: "Fichas/z4-lci.html" },
    { nome: "FIAT | Palio G5", ano: 2015, cv: 88, peso: 1007, foto: "Carrosimg/palio2012-2017.png", link: "Fichas/palio2012-2017.html" },
    { nome: "CHEVROLET | Camaro SS", ano: 2023, cv: 461, peso: 1709, foto: "Carrosimg/camaro-ss.png", link: "Fichas/camaro-ss.html" },
    { nome: "NISSAN | LEAF NISMO RC", ano: 2020, cv: 326, peso: 1220, foto: "Carrosimg/leaf-nismo-rc.png", link: "Fichas/leaf-nismo-rc.html" },
    { nome: "HONDA | Civic Type R", ano: 2024, cv: 297, peso: 1429, foto: "Carrosimg/civic.png", link: "Fichas/civic.html" },
    { nome: "FIAT | Palio 2010", ano: 2010, cv: 75, peso: 940, foto: "Carrosimg/palio2010.png", link: "Fichas/palio2010.html" },
    { nome: "KTM | X-Bow GTX", ano: 2021, cv: 530, peso: 1048, foto: "Carrosimg/x-bow-gtx.png", link: "Fichas/x-bow-gtx.html" },
    { nome: "VW | XL Sport Concept", ano: 2014, cv: 197, peso: 890, foto: "Carrosimg/xl-sport.png", link: "Fichas/xl-sport.html" },
    { nome: "DS | E-TENSE Concept", ano: 2016, cv: 402, peso: 1800, foto: "Carrosimg/e-tense.png", link: "Fichas/e-tense.html" },
    { nome: "Dodge | Challenger 392", ano: 2023, cv: 485, peso: 1920, foto: "Carrosimg/challenger-392.png", link: "Fichas/challenger-392.html" },
    { nome: "Renault | DeZir", ano: 2010, cv: 150, peso: 830, foto: "Carrosimg/dezir.png", link: "Fichas/dezir.html" },
    { nome: "Italdesign | DaVinci", ano: 2019, cv: 400, peso: 1900, foto: "Carrosimg/davinci.png", link: "Fichas/davinci.html" },
    { nome: "BMW | i8 Roadster", ano: 2020, cv: 374, peso: 1595, foto: "Carrosimg/i8.png", link: "Fichas/i8.html" },
    { nome: "PEUGEOT | SR1 Concept", ano: 2010, cv: 313, peso: 1525, foto: "Carrosimg/sr1.png", link: "Fichas/sr1.html" },
    { nome: "CHEVROLET | Opala Coupé", ano: 1980, cv: 171, peso: 1150, foto: "Carrosimg/opala-coupe.png", link: "Fichas/opala-coupe.html" },
    { nome: "PORSCHE | 911 Carrera RS 3.8", ano: 1993, cv: 300, peso: 1210, foto: "Carrosimg/911-carreira-rs-3.8.png", link: "Fichas/911-carreira-rs-3.8.html" },
    { nome: "PEUGEOT | 206 Presence", ano: 2008, cv: 82, peso: 980, foto: "Carrosimg/206-presence.png", link: "Fichas/206-presence.html" },
    { nome: "PORSCHE | 718 Cayman", ano: 2024, cv: 300, peso: 1335, foto: "Carrosimg/718-cayman.png", link: "Fichas/718-cayman.html" },
    { nome: "CHEVROLET | Impala 1967", ano: 1967, cv: 275, peso: 1750, foto: "Carrosimg/impala67.png", link: "Fichas/impala67.html" },
    { nome: "INFINITI | Project Black S", ano: 2017, cv: 571, peso: 1775, foto: "Carrosimg/project-black-s.png", link: "Fichas/project-black-s.html" },
    { nome: "LOTUS | Elise Sprint 220", ano: 2017, cv: 220, peso: 798, foto: "Carrosimg/elise-sprint.png", link: "Fichas/elise-sprint.html" },
    { nome: "LOTUS | Emeya", ano: 2024, cv: 905, peso: 2450, foto: "Carrosimg/emeya.png", link: "Fichas/emeya.html" },
    { nome: "TOYOTA | GR Supra", ano: 2023, cv: 387, peso: 1542, foto: "Carrosimg/gr-supra.png", link: "Fichas/gr-supra.html" },
    { nome: "LAMBORGHINI | Countach 25th", ano: 1988, cv: 455, peso: 1590, foto: "Carrosimg/countach.png", link: "Fichas/countach.html" },

];

const perguntas = [
    {
        pergunta: "O que você prefere no seu carro?",
        opcoes: [
            { texto: "Clássicos Antigos", filtro: (c) => c.ano <= 1999 },
            { texto: "Tecnologia Atual", filtro: (c) => c.ano >= 2000 }
        ]
    },
    {
        pergunta: "Qual o seu foco principal?",
        opcoes: [
            { texto: "Economia e dia a dia", filtro: (c) => c.cv <= 180 },
            { texto: "Velocidade e Performance", filtro: (c) => c.cv >= 181 }
        ]
    },
    {
        pergunta: "Como você prefere o porte do carro?",
        opcoes: [
            { texto: "Carro Leve", filtro: (c) => c.peso <= 1200 },
            { texto: "Carro Pesado", filtro: (c) => c.peso >= 1201 }
        ]
    }
];

let indexPergunta = 0;
let carrosFiltrados = [...carros];

function iniciarQuestionario() {
    const conteudo = document.getElementById('conteudo');
    conteudo.classList.add('fade-out');
    setTimeout(() => {
        conteudo.classList.remove('fade-out');
        mostrarPergunta();
    }, 500);
}

function mostrarPergunta() {
    const conteudo = document.getElementById('conteudo');
    const item = perguntas[indexPergunta];

    if (item) {
        conteudo.innerHTML = `
            <h2 class="fade-in">${item.pergunta}</h2>
            <div class="opcoes-container fade-in">
                <button class="btn-laranja" onclick="responder(0)">${item.opcoes[0].texto}</button>
                <button class="btn-laranja" onclick="responder(1)">${item.opcoes[1].texto}</button>
            </div>
        `;
    } else {
        exibirResultados();
    }
}

function responder(opcaoIndex) {
    const filtroEscolhido = perguntas[indexPergunta].opcoes[opcaoIndex].filtro;
    carrosFiltrados = carrosFiltrados.filter(filtroEscolhido);
    indexPergunta++;
    const conteudo = document.getElementById('conteudo');
    conteudo.classList.add('fade-out');
    setTimeout(() => {
        conteudo.classList.remove('fade-out');
        mostrarPergunta();
    }, 500);
}

function exibirResultados() {
    const conteudo = document.getElementById('conteudo');
    conteudo.innerHTML = `<h2 class="fade-in">Buscando os carros ideais...</h2>`;

    setTimeout(() => {
        if (carrosFiltrados.length > 0) {
            let htmlResultados = `<h2 class="fade-in">Encontramos estes para você:</h2><div class="vitrine-resultados fade-in">`;
            carrosFiltrados.forEach(carro => {
                htmlResultados += `
                    <div class="card-resultado">
                        <img src="${carro.foto}">
                        <h3>${carro.nome}</h3>
                        <a href="${carro.link}" class="btn-laranja" style="width: 150px; font-size:14px; padding:10px 0;">Ver Ficha</a>
                    </div>`;
            });
            htmlResultados += `</div>`;
            htmlResultados += `<div class="opcoes-container">
                                <button class="btn-laranja" onclick="location.reload()" style="margin-top:20px">Refazer Filtro</button>
                                <a href="index.html" class="btn-laranja" style="margin-top:10px">Voltar ao Menu Principal</a>
                               </div>`;
            conteudo.innerHTML = htmlResultados;
        } else {
            conteudo.innerHTML = `
                <h2 class="fade-in">Nenhum carro corresponde a todos os filtros selecionados.</h2>
                <div class="opcoes-container">
                    <button class="btn-laranja" onclick="location.reload()">Tentar Novamente</button>
                    <a href="index.html" class="btn-laranja" style="margin-top:10px">Voltar ao Menu Principal</a>
                </div>
            `;
        }
    }, 1500);
}
