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