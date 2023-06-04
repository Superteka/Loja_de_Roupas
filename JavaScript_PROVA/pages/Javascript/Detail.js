function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
  }
  
  function displayProductDetails(product) {
    const detailsContainer = document.getElementById('product-details');
  
    const section = document.createElement('section');
    section.className = 'section';
    detailsContainer.appendChild(section);
  
    const container = document.createElement('div');
    container.className = 'container';
    section.appendChild(container);
  
    const columns = document.createElement('div');
    columns.className = 'columns is-centered';
    container.appendChild(columns);
  
    const column = document.createElement('div');
    column.className = 'column is-two-thirds';
    columns.appendChild(column);
  
    const card = document.createElement('div');
    card.className = 'card';
    column.appendChild(card);
  
    const cardImage = document.createElement('div');
    cardImage.className = 'card-image';
    card.appendChild(cardImage);
  
    const figure = document.createElement('figure');
    figure.className = 'image is-4by3';
    cardImage.appendChild(figure);
  
    const image = document.createElement('img');
    image.src = product.imagem;
    image.alt = 'Product Image';
    figure.appendChild(image);
  
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content has-text-centered';
    card.appendChild(cardContent);
  
    const title = document.createElement('p');
    title.className = 'title is-4';
    title.textContent = product.title;
    cardContent.appendChild(title);
  
    const subtitle = document.createElement('p');
    subtitle.className = 'subtitle is-6';
    subtitle.textContent = product.descricao;
    cardContent.appendChild(subtitle);
  }
  
  function loadProductDetails() {
    const productId = getProductIdFromUrl();
  console.log(productId)
    if (productId) {
      const url = `https://62d0e2051cc14f8c088fc83d.mockapi.io/produto/${productId}`;
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          displayProductDetails(data);
        })
        .catch(error => {
          console.error('Erro ao carregar os detalhes do produto:', error);
        });
    } else {
      console.error('ID de produto inválido');
    }
  }
  
  document.addEventListener('DOMContentLoaded', loadProductDetails);
  