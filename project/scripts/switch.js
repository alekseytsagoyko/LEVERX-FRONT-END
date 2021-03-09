const cardButton = document.querySelector("#cardButton");
const tableButton = document.querySelector("#tableButton");
const container = document.querySelector("#container");

//Classes for two types of styling
const tableClass = "table-container";
const cardClass = "card-container";

//Add events to click on the switch button
cardButton.addEventListener("click", () => {
    container.classList.remove(tableClass);
    container.classList.add(cardClass);
});

tableButton.addEventListener("click", () => {
    container.classList.remove(cardClass);
    container.classList.add(tableClass);
});