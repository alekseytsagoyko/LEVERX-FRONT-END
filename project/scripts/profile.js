var _main = document.querySelector("#main");
var profileBackBtns;
addItemListeners();

function onItemClick(event) {

    _main.children[0].style.display = "none";
    let dataID = event.currentTarget.getAttribute("data-id");
    let index = _employees.findIndex(e => e.id == dataID);
    renderTemplate(_employees[index], _main, profileTemplate);
    
    document.querySelectorAll("#profileBackBtn").forEach((b) => {
        b.addEventListener("click", () => {
            _main.children[1].remove();
            _main.children[0].style.display = "block";
        });
    });

}

function addItemListeners() {
    
    let items = document.querySelectorAll("#item");
    items.forEach(item => {
        item.addEventListener("click", onItemClick);
    });

}