const btnAbrir = document.getElementById('openMenu');
const btnFechar = document.getElementById('closeMenu');
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay-menu');

btnAbrir.addEventListener('click', () => {
    drawer.classList.add('active');
    overlay.classList.add('active');
});

const fecharMenu = () => {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
};

btnFechar.addEventListener('click', fecharMenu);
overlay.addEventListener('click', fecharMenu);