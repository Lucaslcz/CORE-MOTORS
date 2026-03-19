      function searchCar() {
          let input = document.getElementById('searchInput').value.toLowerCase();
          let cards = document.getElementsByClassName('card-carro');
      
          for (let i = 0; i < cards.length; i++) {
              let h3Elements = cards[i].getElementsByTagName('h3');
              let title = "";
              
              for (let h3 of h3Elements) {
                  if (h3.innerText.trim() !== "") {
                      title = h3.innerText.toLowerCase();
                      break;
                  }
              }
              
              if (title.includes(input)) {
                  cards[i].style.display = "";
              } else {
                  cards[i].style.display = "none";
              }
          }
      }