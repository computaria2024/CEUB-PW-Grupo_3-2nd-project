document.addEventListener("DOMContentLoaded", () => {
    const restaurants = [
      {
        name: "Geleia",
        cuisine: ["lanches"],
        priceRange: "medio",
        hungerLevel: "alto",
        logo: "../media/logogeleia.png",
        image: "../media/geleia.png",
        description: "Hambúrgueres artesanais com combos incríveis.",
      },
      {
        name: "Brasil Cacau",
        cuisine: ["doces"],
        priceRange: "medio",
        hungerLevel: "baixo",
        logo: "../media/logoBrasilCacau.png",
        image: "../media/brasilcacau.png",
        description: "Trufas, bombons e chocolates deliciosos.",
      },
      {
        name: "Tabom",
        cuisine: ["refeicoes", "bebidas"],
        priceRange: "baixo",
        hungerLevel: "medio",
        logo: "../media/logoTabom.png",
        image: "../media/tabom.png",
        description: "Refeições caseiras saborosas com um toque especial.",
      },
      {
        name: "Dr. Pizza",
        cuisine: ["lanches", "bebidas", "doces"],
        priceRange: "medio",
        hungerLevel: "alto",
        logo: "../media/logoDrPizza.png",
        image: "../media/drpizza.png",
        description: "Pizzas artesanais, churros feitos na hora e bebidas Bubble.",
      },
      {
        name: "Happy Harry",
        cuisine: ["doces"],
        priceRange: "alto",
        hungerLevel: "baixo",
        logo: "../media/logoHappyHarry.png",
        image: "../media/happyharry.png",
        description: "Sorvetes artesanais com sabores incríveis e únicos.",
      },
      {
        name: "Suco & Tal",
        cuisine: ["bebidas", "lanches"],
        priceRange: "baixo",
        hungerLevel: "baixo",
        logo: "../media/LogoSuco&Tal.png",
        image: "../media/sucoetal.png",
        description: "Sucos naturais e lanches saudáveis para todas as ocasiões.",
      },
      {
        name: "Creperia Pica-Pau",
        cuisine: ["lanches"],
        priceRange: "medio",
        hungerLevel: "medio",
        logo: "../media/logoCreperiapicaPau.png",
        image: "../media/creperiaPicaPau1.png",
        description: "Deliciosos crepes doces e salgados, feitos na hora.",
      },
      {
        name: "Aprovados",
        cuisine: ["lanches", "bebidas"],
        priceRange: "baixo",
        hungerLevel: ["medio","baixo"],
        logo: "../media/logo-aprovados.png",
        image: "../media/aprovados.png",
        description: "Lanches rápidos e saborosos com um atendimento acolhedor.",
      },
      {
        name: "Kmart",
        cuisine: ["lanches"],
        priceRange: "medio",
        hungerLevel: ["medio", "baixo"],
        logo: "../media/logokmart.png",
        image: "../media/kmart.png",
        description: "Lanches e cafés deliciosos, preparados com qualidade.",
      },
      {
        name: "Fast Grill",
        cuisine: ["refeicoes"],
        priceRange: "medio",
        hungerLevel: "medio",
        logo: "../media/logoFastgrill.png",
        image: "../media/fastgrill.png",
        description: "Refeições completas e saborosas para almoço e jantar.",
      },
      {
        name: "Apetit's",
        cuisine: ["lanches", "refeicoes"],
        priceRange: "baixo",
        hungerLevel: ["alto", "baixo"],
        logo: "../media/logoApetits.png",
        image: "../media/apetits.png",
        description: "Hambúrgueres de frango e refeições deliciosas.",
      },
      {
        name: "Ricardo Sushi",
        cuisine: ["lanches"],
        priceRange: "alto",
        hungerLevel: ["medio", "alto"],
        logo: "../media/logoRicardoSushi.png",
        image: "../media/ricardoSushi.png",
        description: "Autêntica culinária japonesa, com sushis e combinados incríveis.",
      },
      {
        name: "John's Cookies",
        cuisine: ["doces"],
        priceRange: "medio",
        hungerLevel: "baixo",
        logo: "../media/logoJohnsCookies.png",
        image: "../media/johnsCookies.png",
        description: "Cookies e sobremesas artesanais de alta qualidade.",
      },
      {
        name: "The Coffee",
        cuisine: ["bebidas"],
        priceRange: "alto",
        hungerLevel: "baixo",
        logo: "../media/logothecoffee.png",
        image: "../media/theCoffee.jpg",
        description: "Cafés especiais e lanches artesanais.",
      },
    ];
  
    const form = document.getElementById("recommendation-form");
    const resultsContainer = document.getElementById("results-list");
    const recommendationResults = document.getElementById("recommendation-results");
  
    document.getElementById("get-recommendation").addEventListener("click", () => {
      // Capturar valores do formulário
      const cuisine = form.cuisine.value;
      const priceRange = form["price-range"].value;
      const hungerLevel = form["hunger-level"].value;
  
      // Filtrar restaurantes pela prioridade de cuisine
      let filteredRestaurants = restaurants.filter((restaurant) =>
        restaurant.cuisine.includes(cuisine)
      );
  
      // Refinar com base nos outros critérios
      if (filteredRestaurants.length > 0) {
        filteredRestaurants = filteredRestaurants.filter(
          (restaurant) =>
            restaurant.priceRange === priceRange &&
            restaurant.hungerLevel === hungerLevel
        );
      }
  
      // Se nenhum restaurante corresponder, recomendar algo próximo
      if (filteredRestaurants.length === 0) {
        filteredRestaurants = restaurants.filter((restaurant) =>
          restaurant.cuisine.includes(cuisine)
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
  