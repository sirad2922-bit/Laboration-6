"use strict";
/*
 * Laboration 6 - Receptsökaren
 * Namn: Sirad Ahmed
 */
//Hämtar  element från HTML
const form = document.querySelector("form");
const searchInput = document.querySelector("#search");
const errorEl = document.querySelector("#error");
const recipeList = document.querySelector("#recipe");
const messageEl = document.querySelector("#message");

//Lägger till eventlistener på formuläret
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();
    //stoppar om sökfältet är tomt
    if (validateInput(searchTerm)) {
        searchRecipes(searchTerm);
    }
});

//kontrollerar om sökfältet är tomt
function validateInput(input) {
    if (input === "") {
        displayError("Sökfältet får inte vara tomt!");
        return false;
    }
    displayError("");
    return true;
}

//skickar ett felmeddelande om sökfältet är tomt
function displayError(message) {
    errorEl.textContent = message;
}
//skickar en sökförfrågan till API:et
async function searchRecipes(searchTerm) {
    recipeList.innerHTML = "";
    messageEl.textContent = "Söker efter recept...";
    const apiUrl = `https://dummyjson.com/recipes/search?q=${encodeURIComponent(searchTerm)}`;

    try {
        const response = await fetch(apiUrl);

        //kontrollera att allt ligger ok 
        if (!response.ok) {
            messageEl.textContent = "Något gick fel. Försök igen senare.";
            return;
        }

        const data = await response.json();

        if (data.recipes.length > 0) {
            messageEl.textContent = "";
            displayRecipe(data.recipes[0]);
        } else {
            messageEl.textContent = "Inga recept hittades. Prova en annan sökfras.";
        }

    } catch (error) {
        //om anropet misslyckades
        console.log(error);
        recipeList.innerHTML = "";
        messageEl.textContent = "Något gick fel. Försök igen senare.";
    }
}
//Visar receptet
function displayRecipe(recipe) {
    const article = document.createElement("article");
    // Namn av reciepts
    const heading = document.createElement("h2");
    heading.textContent = recipe.name;
    article.appendChild(heading);
    //bild av receptet
    const image = document.createElement ("img");
    image.src = recipe.image;
    image.alt = recipe.name;
    article.appendChild(image);
