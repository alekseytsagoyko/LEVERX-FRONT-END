const fullSortButton = document.querySelector("#fullSortBtn");
const nativeSortButton = document.querySelector("#nativeSortBtn");

fullSortButton.addEventListener("click", () => sort("full"));
nativeSortButton.addEventListener("click", () => sort("native"));

async function sort(type) {
    _employees = requestEmployees(_url, "employees/sort/" + type);
    renderEmployees(_employees, _container, _counter);
    addItemListeners();
}

