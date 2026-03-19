        function carregarFavoritos() {
            const lista = document.getElementById('lista-favoritos');
            const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

            if (favoritos.length === 0) {
                lista.innerHTML = '<p class="vazio-msg">Você ainda não salvou nenhuma ficha técnica.</p>';
                return;
            }

            lista.innerHTML = favoritos.map((carro, index) => `
                <div class="card-carro">
                    <img src="${carro.foto}" alt="${carro.nome}">
                    <h3>${carro.nome}</h3>
                    <a class="btn-ver-ficha" href="${carro.link}">VER FICHA TÉCNICA</a>
                    <button onclick="removerFavorito(${index})" class="btn-remover">Remover da lista</button>
                </div>
            `).join('');
        }

        function removerFavorito(index) {
            let favoritos = JSON.parse(localStorage.getItem('favoritos'));
            favoritos.splice(index, 1);
            localStorage.setItem('favoritos', JSON.stringify(favoritos));
            carregarFavoritos();
        }

        carregarFavoritos();