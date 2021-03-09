const _url = 'http://localhost:3000/';

var _employees = requestEmployees(_url, "employees");

function asyncRequestEmployees(url, handlerName) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url + handlerName, true);
    xhr.onreadystatechange = function() {
        if(xhr.readyState != 4) return;

        if(xhr.status == 200) {
            return JSON.parse(xhr.responseText);
        }
    }
    xhr.send();
}

function requestEmployees(url, handlerName) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url + handlerName, false);
    xhr.send();
    return JSON.parse(xhr.responseText);
}


