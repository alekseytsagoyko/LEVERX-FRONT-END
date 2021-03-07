/*ENTRY*/

//Frist employees render on the page
const _container = document.querySelector("#container");
const searchButton = document.querySelector("#searchBtn");
const searchInput = document.querySelector("#searchInput");
const _counter = document.querySelector("#counter");

renderEmployees(_employees, _container, _counter);

searchButton.addEventListener("click", onSearch);
searchInput.addEventListener("keydown", (e) => {
    if(e.keyCode === 13) {
        onSearch();
    }
});

//Functions
function onSearch() {
    let searchedEmployees = searchEmployee(_employees, searchInput.value);
    renderEmployees(searchedEmployees, _container, _counter);
}

function renderEmployees(employees, container, counter) {

    container.innerHTML = "";

    if(counter != undefined) {
        counter.innerHTML = employees.length + " employees displayed";
    }

    Array.from(employees).map(employee => {
        //Function from render.js
        renderTemplate(employee, container, itemTemplate);
    });

}