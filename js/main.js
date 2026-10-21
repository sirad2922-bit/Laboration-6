"use strict";
/*
 * Laboration 6 - Receptsökaren
 * Namn: Sirad Ahmed
 */
//Hämtar  element från HTML
const Form = document.querySelector("form");
const searchInput = document.querySelector("#search");
const searchButton = document.querySelector("#error");
const recipeList = document.querySelector("#recipe");

//Lägger till eventlistener på formuläret
Form.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value.trim();
  //stoppar om sökfältet är tomt
  if (searchTerm === "") {
    alert("Vänligen ange ett sökord.");
    return;
  }
  

