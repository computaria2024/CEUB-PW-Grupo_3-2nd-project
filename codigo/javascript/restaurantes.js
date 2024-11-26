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
        priceRange: ["medio", "baixo"],
        hungerLevel: "baixo",
        logo: "../media/logoBrasilCacau.png",
        image: "../media/brasilcacau.png",
        description: "Trufas, bombons e chocolates deliciosos.",
      },
      {
        name: "Tabom",
        cuisine: ["refeicoes", "bebidas"],
        priceRange: ["baixo", "medio"],
        hungerLevel: ["medio", "baixo"],
        logo: "../media/logoTabom.png",
        image: "../media/tabom.png",
        description: "Refeições caseiras saborosas com um toque especial.",
      },
      {
        name: "Dr. Pizza",
        cuisine: ["lanches", "bebidas", "doces"],
        priceRange: "medio",
        hungerLevel: ["alto", "baixo"],
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
        hungerLevel: ["baixo", "medio"],
        logo: "../media/LogoSuco&Tal.png",
        image: "../media/sucoetal.png",
        description: "Sucos naturais e lanches saudáveis para todas as ocasiões.",
      },
      {
        name: "Creperia Pica-Pau - Unidade 1",
        cuisine: ["lanches"],
        priceRange: "medio",
        hungerLevel: "medio",
        logo: "../media/logoCreperiapicaPau.png",
        image: "../media/creperiaPicaPau1.png",
        description: "Deliciosos crepes doces e salgados, feitos na hora.",
      },
      {
        name: "Lanchonete Aprovados",
        cuisine: ["lanches", "bebidas"],
        priceRange: "baixo",
        hungerLevel: ["medio", "baixo"],
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
        priceRange: ["baixo", "medio"],
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
        const cuisine = form.cuisine.value;
        const priceRange = form["price-range"].value;
        const hungerLevel = form["hunger-level"].value;

        let filteredRestaurants = restaurants.filter(restaurant =>
            restaurant.cuisine.includes(cuisine) &&
            (Array.isArray(restaurant.priceRange)
                ? restaurant.priceRange.includes(priceRange)
                : restaurant.priceRange === priceRange) &&
            (Array.isArray(restaurant.hungerLevel)
                ? restaurant.hungerLevel.includes(hungerLevel)
                : restaurant.hungerLevel === hungerLevel)
        );

        if (filteredRestaurants.length === 0) {
            filteredRestaurants = restaurants.filter(restaurant =>
                restaurant.cuisine.includes(cuisine)
            );
        }

        resultsContainer.innerHTML = "";

        const cardsContainer = document.createElement("div");
        cardsContainer.className = "cards-container";

        filteredRestaurants.forEach((restaurant) => {
            const card = document.createElement("div");
            card.className = "card";

            const sanitizedId = restaurant.name
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/&/g, "e")
                .replace(/[^\w-]/g, "");

            card.innerHTML = `
                <img src="${restaurant.logo}" loading="lazy" alt="Logo ${restaurant.name}" class="card-logo">
                <img src="${restaurant.image}" loading="lazy" alt="${restaurant.name}" class="card-image">
                <div class="card-info">
                    <p class="culinaria">${restaurant.description}</p>
                    <p class="nome"><strong>${restaurant.name}</strong></p>
                </div>
                <div class="overlay-rest">
                    <p>${restaurant.description}</p>
                    <button class="info-button" onclick="showInfo('${sanitizedId}')">Mais informações</button>
                </div>
            `;

            cardsContainer.appendChild(card);
        });

        resultsContainer.appendChild(cardsContainer);
        recommendationResults.classList.remove("hidden");
    });
  });
  