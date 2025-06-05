
document.addEventListener("DOMContentLoaded", function() {
    // Recipes list with ingredients and instructions
    const recipes = [
        {
            name: "Chicken Adobo",
            image: "adebayor.jpg",
            description: "Chicken cooked in soy sauce, vinegar, garlic, and spices.",
            ingredients: ["1 kg chicken", "2 tbsp vegetable oil", " 1 onion, chopped", "7 cloves garlic, minced", "3 bay leaves", "1 tsp peppercorn", " ¾ cup vinegar", "- ¼ cup soy sauce"],
            instructions: "For a super simple Chicken Adobo, just marinate chicken in soy sauce, vinegar, garlic, bay leaves, and peppercorns. Cook it in a pan until tender, then let the sauce thicken"
        },
            {
        "name": "Sinigang na Baboy",
        "image": "Sinigang.jpg",
        "description": "Pork in a sour tamarind broth with vegetables.",
        "ingredients": [
            "1 lb pork ribs or belly",
            "6 cups water",
            "1 medium onion, quartered",
            "2 medium tomatoes, quartered",
            "1 packet tamarind soup mix (or fresh tamarind)",
            "1 cup radish, sliced",
            "1 cup eggplant, sliced",
            "1 cup string beans",
            "1 cup kangkong (water spinach)",
            "Salt and pepper to taste"
        ],
        "instructions": "Boil pork in water with onions and tomatoes until tender. Add tamarind mix and stir well. Add radish, eggplant, and string beans. Simmer for 5 minutes. Add kangkong and season with salt and pepper. Serve hot with rice."
    },
    {
        "name": "Chicken Afritada",
        "image": "afritada.jpg",
        "description": "Chicken stew with tomato sauce, potatoes, and bell peppers.",
        "ingredients": [
            "1 lb chicken, cut into pieces",
            "2 tbsp oil",
            "1 medium onion, chopped",
            "3 cloves garlic, minced",
            "1 cup tomato sauce",
            "1 cup water",
            "1 medium potato, cubed",
            "1 medium carrot, cubed",
            "1 red bell pepper, sliced",
            "Salt and pepper to taste"
        ],
        "instructions": "Heat oil in a pan and sauté onion and garlic. Add chicken and cook until lightly browned. Pour in tomato sauce and water. Simmer for 20 minutes. Add potatoes, carrots, and bell pepper. Cook until vegetables are tender. Season with salt and pepper. Serve hot."
    },
    {
        "name": "Tortang Talong",
        "image": "torta.jpg",
        "description": "Grilled eggplant dipped in eggs and fried.",
        "ingredients": [
            "2 medium-sized eggplants",
            " 2 eggs",
            "1 teaspoon salt",
            " ¼ teaspoon black pepper",
            " ¼ cup cooking oil",
        ],
        "instructions": "Grill or boil the eggplants until soft, then peel off the skin. Flatten them with a fork and dip into beaten eggs with salt and pepper. Fry in hot oil until golden brown. Serve with rice and banana ketchup."
    },
    {
        "name": "Ginisang Ampalaya",
        "image": "ampa.jpg",
        "description": " Stir-fried bitter melon with eggs, garlic, and onions.",
        "ingredients": [
            "2 medium-sized ampalaya (bitter melon), sliced",
            "2 eggs, beaten",
            " 1 tomato, chopped",
            " 1 onion, sliced",
            " 3 cloves garlic, minced",
            " 1 tablespoon salt (for soaking)",
            "½ teaspoon ground black pepper",
            "2 tablespoons cooking oil",
        ],
        "instructions": "Slice the ampalaya, remove the seeds, and soak in salted water. Rinse and drain. Sauté garlic, onion, and tomato in oil. Add ampalaya and stir-fry. Pour in beaten eggs and mix until cooked. Season with salt and pepper. Serve and enjoy!"
    },
     {
        "name": "Chop Suey",
        "image": "chap.webp",
        "description": " Mixed vegetables stir-fried with meat and seafood.",
        "ingredients": [
    "7 pieces shrimp",
    "3 ounces pork, sliced",
    "3 ounces boneless chicken breast, sliced",
    "1.5 cups cauliflower",
    "1 carrot, sliced",
    "15 pieces snow peas",
    "8 pieces baby corn",
    "1 red bell pepper, sliced",
    "1 green bell pepper, sliced",
    "1.5 cups cabbage",
    "12 boiled quail eggs",
    "1 onion, sliced",
    "4 cloves garlic, minced",
    "¼ cup soy sauce",
    "1.5 tablespoons oyster sauce",
    "¾ cup water",
    "1 tablespoon cornstarch",
    "¼ teaspoon black pepper",
    "3 tablespoons oil"
  ],
        "instructions": "Sauté garlic and onion in oil. Add pork and chicken, then stir-fry. Pour in soy sauce, oyster sauce, and water, then simmer. Add vegetables and cook for a few minutes. Return shrimp, season with black pepper, and add quail eggs. Stir in cornstarch mixture until sauce thickens. Serve and enjoy!"
    },
     {
        "name": "Pork Sisig",
        "image": "sisig.jpg",
        "description": "Chopped grilled pork with onions, chilies, and seasoning.",
        "ingredients": [
    "½ kg pork face (or pork belly)",
    "1 red onion, chopped",
    "1 red bell pepper, chopped",
    "1 green chili, chopped",
    "1 red chili, chopped",
    "1 tablespoon mayonnaise",
    "1 egg",
    "2 tablespoons Knorr seasoning liquid",
    "1 tablespoon butter",
    "2 calamansi, sliced",
    "Salt and pepper to taste"
  ],
        "instructions": "Boil the pork until tender, then grill and chop it. Sauté onion and bell pepper in butter, then add the pork. Season with Knorr seasoning and mix in chilies. Top with red onion, a raw egg, mayonnaise, and calamansi. Serve and enjoy! "
    },
     {
        "name": "Bicol Express",
        "image": "bicol.jpg",
        "description": " Spicy pork cooked in coconut milk with chilies.",
        "ingredients": [
    "½ kg pork belly, sliced",
    "2 cups coconut milk",
    "1 cup coconut cream",
    "2 tablespoons shrimp paste (bagoong)",
    "6 pieces green chili, sliced",
    "4 pieces red chili, chopped",
    "1 onion, chopped",
    "4 cloves garlic, minced",
    "1 tablespoon ginger, minced",
    "Salt and pepper to taste",
    "2 tablespoons cooking oil"
  ],
        "instructions": "Sauté garlic, onion, and ginger in oil. Add pork and cook until browned. Stir in shrimp paste, then pour in coconut milk and simmer. Add chili peppers and cook until the sauce thickens. Pour in coconut cream, season with salt and pepper, and simmer a bit more. Serve and enjoy! "
    },
    {
        "name": "Menudo",
        "image": "menu.jpg",
        "description": "Pork stew with tomato sauce, liver, potatoes, and carrots.",
        ingredients: [
    "½ kg pork, diced",
    "¼ kg pork liver, diced",
    "1 onion, chopped",
    "3 cloves garlic, minced",
    "1 cup tomato sauce",
    "1 cup water",
    "2 tablespoons soy sauce",
    "1 teaspoon sugar",
    "2 potatoes, diced",
    "1 carrot, diced",
    "1 red bell pepper, chopped",
    "1 green bell pepper, chopped",
    "1 bay leaf",
    "Salt and pepper to taste",
    "2 tablespoons cooking oil"
  ],
        "instructions": "Sauté garlic and onion in oil. Add pork and cook until browned. Pour in soy sauce, tomato sauce, and water, then simmer. Add liver and cook for a few minutes. Stir in potatoes, carrots, and bell peppers. Season with salt, pepper, and sugar. Cook until vegetables are tender. Serve and enjoy!  "
    },
    {
        "name": "Pork Afritada",
        "image": "afri.jpg",
        "description": "Pork stew with tomato sauce, liver, potatoes, and carrots.",
        "ingredients": [
    "½ kg pork, cubed",
    "2 potatoes, diced",
    "1 carrot, diced",
    "1 red bell pepper, chopped",
    "1 green bell pepper, chopped",
    "1 cup tomato sauce",
    "1 cup water",
    "2 tablespoons soy sauce",
    "1 onion, chopped",
    "3 cloves garlic, minced",
    "1 bay leaf",
    "Salt and pepper to taste",
    "2 tablespoons cooking oil"
  ],
        "instructions": "Sauté garlic and onion in oil. Add pork and cook until browned. Pour in soy sauce, tomato sauce, and water, then simmer. Add potatoes, carrots, and bell peppers. Season with salt and pepper. Cook until vegetables are soft. Serve and enjoy!   "
    },
    {
        "name": "Caldereta",
        "image": "calde.jpg",
        "description": "Pork stew with tomato sauce, liver, potatoes, and carrots.",
        "ingredients": [
    "½ kg beef or pork, cubed",
    "2 potatoes, diced",
    "1 carrot, diced",
    "1 red bell pepper, chopped",
    "1 green bell pepper, chopped",
    "1 cup tomato sauce",
    "1 cup water",
    "2 tablespoons soy sauce",
    "¼ cup liver spread",
    "1 onion, chopped",
    "3 cloves garlic, minced",
    "1 bay leaf",
    "Salt and pepper to taste",
    "2 tablespoons cooking oil"
  ],
        "instructions": "Sauté garlic and onion in oil. Add meat and cook until browned. Pour in soy sauce, tomato sauce, and water, then simmer. Stir in liver spread and mix well. Add potatoes, carrots, and bell peppers. Season with salt and pepper. Cook until vegetables are soft. Serve and enjoy  "
    },
    {
        "name": "Kare-kare",
        "image": "kare.jpg",
        "description": "Kare-Kare is a Filipino stew made with tender meat, vegetables, and a rich peanut sauce.",
        "ingredients": [
    "½ kg oxtail or beef",
    "1 cup peanut butter",
    "½ cup ground peanuts",
    "¼ cup toasted rice flour",
    "1 onion, chopped",
    "3 cloves garlic, minced",
    "1 bundle string beans",
    "2 eggplants, sliced",
    "1 bundle bok choy",
    "1 tablespoon annatto powder",
    "2 tablespoons fish sauce",
    "4 cups water",
    "Salt and pepper to taste",
    "2 tablespoons cooking oil"
  ],
        "instructions": "Sauté garlic and onion in oil. Add meat and cook until tender. Pour in peanut butter, ground peanuts, and annatto powder, then mix well. Add toasted rice flour and stir. Toss in string beans, eggplants, and bok choy, then cook for a few minutes. Season with fish sauce, salt, and pepper. Serve with shrimp paste and enjoy!  "
    },
    {
        "name": "Escaveche",
        "image": "esca.jpg",
        "description": "Escabeche is a Filipino dish featuring crispy fried fish topped with a sweet and tangy sauce made from vinegar, sugar, and bell peppers.",
        "ingredients": [
    "1 whole fish (tilapia, lapu-lapu, or red snapper)",
    "1 tablespoon salt",
    "½ cup cooking oil",
    "1 cup vinegar",
    "¼ cup sugar",
    "1 medium red bell pepper, sliced",
    "1 onion, sliced",
    "3 cloves garlic, minced",
    "1 tablespoon ginger, julienned",
    "2 tablespoons soy sauce",
    "2 tablespoons cornstarch (dissolved in 3 tablespoons water)",
    "1 cup water"
  ]
,
        "instructions": "Season the fish with salt and fry until crispy. Sauté garlic, ginger, onion, and bell pepper in a pan. Pour in vinegar, sugar, soy sauce, and water, then simmer. Add cornstarch mixture to thicken the sauce. Place the fried fish on a plate and pour the sauce over it. Serve and enjoy!   "
    },
    ];
    
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
}
    const recipeList = document.getElementById("recipe-list");

    if (recipeList) {
        recipes.forEach((recipe, index) => {
            let div = document.createElement("div");
            div.className = "recipe";
            div.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}" class="recipe-img" data-index="${index}">
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
                <div class="recipe-details">
                    <h4>Ingredients:</h4>
                    <ul>${recipe.ingredients.map(item => `<li>${item}</li>`).join('')}</ul>
                    <h4>Instructions:</h4>
                    <p>${recipe.instructions}</p>
                </div>
            `;
            recipeList.appendChild(div);
        });

        
        document.querySelectorAll(".recipe-img").forEach(img => {
            img.addEventListener("click", function() {
                const parentRecipe = this.closest(".recipe");
                parentRecipe.classList.toggle("expanded");
            });
        });
        
    }
});


// about page
const aboutData = {
    title: "About Us",
    description: "Welcome to Delicious Bites, your go-to destination for authentic Filipino recipes and delicacies!",
    content: "Our passion is bringing the rich flavors of the Philippines to your kitchen, whether you're craving comforting home-cooked viands, delectable street food, or traditional delicacies that celebrate Filipino heritage.",
    mission: "We strive to make cooking easy and enjoyable with simple, well-crafted recipes that highlight the best ingredients and techniques in Filipino cuisine.",
    vision: "Whether you're a seasoned cook or just starting your culinary journey, you'll find inspiration here to recreate the vibrant tastes of the Philippines.",
    callToAction: "Let’s cook, share, and celebrate Filipino food together!"
};

function displayAboutSection() {
    const aboutSection = document.getElementById("about-section");
    aboutSection.innerHTML = `
        <h2>${aboutData.title}</h2>
        <p>${aboutData.description}</p>
        <p>${aboutData.content}</p>
        <h3>Our Mission</h3>
        <p>${aboutData.mission}</p>
        <h3>Our Vision</h3>
        <p>${aboutData.vision}</p>
        <strong>${aboutData.callToAction}</strong>
    `;
}

displayAboutSection();

