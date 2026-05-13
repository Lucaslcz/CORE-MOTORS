let allCars = [];
let selectedBrand = "";

async function loadCars() {
    try {
        const response = await fetch('/static/explorar.json');
        if (!response.ok) throw new Error("Erro ao carregar explorar.json");
        allCars = await response.json();
        renderBrandFilters();
        const initialDisplay = shuffleArray([...allCars]).slice(0, 200);
        renderTable(initialDisplay);
    } catch (error) {
        console.error(error);
    }
}

function renderBrandFilters() {
    const grid = document.getElementById('marcasGrid');
    if (!grid) return;
    const uniqueBrands = [...new Set(allCars.map(car => car.Marca))].sort();
    let gridHTML = `<div class="marca-item" onclick="setBrandFilter('')"><span>Todos</span></div>`;
    uniqueBrands.forEach(brand => {
        gridHTML += `<div class="marca-item" onclick="setBrandFilter('${brand}')"><span>${brand}</span></div>`;
    });
    grid.innerHTML = gridHTML;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function renderTable(data) {
    const tbody = document.getElementById('tableBody');
    if (!tbody) return;
    tbody.innerHTML = "";
    data.forEach(car => {
        const row = `
            <tr>
                <td style="color: #009CDE; font-weight: bold;">${car.Id}</td>
                <td>${car.Marca}</td>
                <td>${car.Nome}</td>
                <td><a href="/ficha?nome=${encodeURIComponent(car.Nome)}" class="btn-saiba-mais">Saiba mais</a></td>
            </tr>`;
        tbody.innerHTML += row;
    });
}

function filterCars() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const filtered = allCars.filter(car => {
        const matchesText = car.Nome.toLowerCase().includes(input) || 
                            car.Marca.toLowerCase().includes(input) || 
                            car.Id.toLowerCase().includes(input);
        const matchesBrand = selectedBrand === "" || car.Marca === selectedBrand;
        return matchesText && matchesBrand;
    });
    renderTable(input === "" && selectedBrand === "" ? shuffleArray([...allCars]).slice(0, 200) : filtered);
}

function setBrandFilter(brand) {
    selectedBrand = brand;
    filterCars();
}

window.onload = loadCars;