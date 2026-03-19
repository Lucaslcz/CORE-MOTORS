        function salvarERedirecionar(nome, foto, link) {
            let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
            const botao = document.getElementById('btn-favorito');
            
            if (!favoritos.some(c => c.nome === nome)) {
                favoritos.push({ nome, foto, link });
                localStorage.setItem('favoritos', JSON.stringify(favoritos));
            }

            botao.innerHTML = "VER NOS FAVORITOS";
            botao.style.backgroundColor = "#F5921D";
            botao.style.color = "white";
            botao.style.borderColor = "#F5921D";

            setTimeout(() => {
                window.location.href = "../favorito.html";
            }, 800);
        }