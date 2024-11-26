document.addEventListener("DOMContentLoaded", () => {
    const restaurants = [
      {
        name: "Geleia",
        cuisine: "lanches",
        priceRange: "medio",
        hungerLevel: "alto",
        logo: "../media/logogeleia.png",
        image: "../media/geleia.png",
        description: "Hambúrgueres artesanais com combos incríveis.",
      },
      {
        name: "Brasil Cacau",
        cuisine: "doces",
        priceRange: "medio",
        hungerLevel: "baixo",
        logo: "../media/logoBrasilCacau.png",
        image: "../media/brasilcacau.png",
        description: "Trufas, bombons e chocolates deliciosos.",
      },
      {
        name: "Tabom",
        cuisine: "refeicoes",
        priceRange: "baixo",
        hungerLevel: "medio",
        logo: "../media/logoTabom.png",
        image: "../media/tabom.png",
        description: "Refeições caseiras saborosas com um toque especial.",
      },
      // Adicione mais restaurantes aqui
    ];
  
    const form = document.getElementById("recommendation-form");
    const resultsContainer = document.getElementById("results-list");
    const recommendationResults = document.getElementById("recommendation-results");
  
    document.getElementById("get-recommendation").addEventListener("click", () => {
      // Capturar valores do formulário
      const cuisine = form.cuisine.value;
      const priceRange = form["price-range"].value;
      const hungerLevel = form["hunger-level"].value;
  
      // Filtrar restaurantes com base nos critérios
      let filteredRestaurants = restaurants.filter(
        (restaurant) =>
          restaurant.cuisine === cuisine &&
          restaurant.priceRange === priceRange &&
          restaurant.hungerLevel === hungerLevel
      );
  
      // Se não houver correspondências exatas, buscar correspondências mais próximas
      if (filteredRestaurants.length === 0) {
        filteredRestaurants = restaurants.filter(
          (restaurant) =>
            restaurant.cuisine === cuisine ||
            restaurant.priceRange === priceRange ||
            restaurant.hungerLevel === hungerLevel
        );
      }
  
      // Limpar resultados anteriores
      resultsContainer.innerHTML = "";
  
      // Renderizar os resultados como cards estilizados
      filteredRestaurants.forEach((restaurant) => {
        const card = document.createElement("div");
        card.className = "card";
  
        card.innerHTML = `
          <img src="${restaurant.logo}" loading="lazy" alt="Logo ${restaurant.name}" class="card-logo">
          <img src="${restaurant.image}" loading="lazy" alt="${restaurant.name}" class="card-image">
          <div class="card-info">
            <p class="culinaria">${restaurant.description}</p>
            <p class="nome"><strong>${restaurant.name}</strong></p>
          </div>
          <div class="overlay-rest">
            <p>${restaurant.description}</p>
            <button class="info-button" onclick="showInfo('${restaurant.name.toLowerCase()}')">Mais informações</button>
          </div>
        `;
        resultsContainer.appendChild(card);
      });
  
      // Tornar o contêiner de resultados visível
      recommendationResults.classList.remove("hidden");
    });
  });
  