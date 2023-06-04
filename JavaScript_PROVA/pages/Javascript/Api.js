function createCard(data) {
    const card = document.createElement('div');
    card.className = 'card';
  
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';
    card.appendChild(cardContent);
  
    const button = document.createElement('button');
    button.className = 'button';
    button.textContent = '+';
    cardContent.appendChild(button);
    
    button.addEventListener('click', function() {
      const productId = data.id;
    
      window.location.href = `Detail?id=${productId}`;
    });
      
    const cardImage = document.createElement('div');
    cardImage.className = 'card-image';
    cardContent.appendChild(cardImage);
  
    const figure = document.createElement('figure');
    figure.className = 'image is-4by3';
    cardImage.appendChild(figure);
  
    const image = document.createElement('img');
    image.src = data.imagem;
    image.alt = 'Imagem do card';
    figure.appendChild(image);
  
    const cardContentDiv = document.createElement('div');
    cardContentDiv.className = 'content';
    cardContent.appendChild(cardContentDiv);
  
    const subtitle = document.createElement('p');
    subtitle.className = 'subtitle';
    subtitle.textContent = data.title;
    cardContentDiv.appendChild(subtitle);
  
    const description = document.createElement('p');
    description.textContent = data.descricao;
    cardContentDiv.appendChild(description);
  
    return card;
  }
  
  function getProduct(id) {
    const url = `https://62d0e2051cc14f8c088fc83d.mockapi.io/produto/${id}`;
  
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        const cardsContainer = document.getElementById('cards-container');
        const card = createCard(data);
        cardsContainer.appendChild(card);
        return data;
      });
  }
  
  for (let id = 125; id <= 132; id++) {
    getProduct(id);
  }
  