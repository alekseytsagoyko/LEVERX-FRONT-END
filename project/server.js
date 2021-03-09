const fs = require('fs');
const http = require('http');

http.createServer((request, response) => {

    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Max-Age": 2592000, //30days
        "Content-Type": "application/json; charset=utf-8"
    }

    if(request.url == "/employees") {
        getEmployeesHandler(response, headers);
    }

    if(request.url.includes("/employees/sort")) {

        if(request.url.includes("/full")) {
            getSortedEmployeesHandler(response, headers, sortByFullName);
        }

        if(request.url.includes("/native")) {
            getSortedEmployeesHandler(response, headers, sortByNativeName);
        }

    }

}).listen(3000);



//Functions
function getEmployeesHandler(response, headers) {
    fs.readFile("data.json", (error, data) => {
        if(error) {
            response.statusCode = 404;
            response.end("Employees not found");
        } else {
            response.writeHead(200, headers);
            response.end(data);
        }
    });
}

function getSortedEmployeesHandler(response, headers, sortFunc) {
    fs.readFile("data.json", (error, data) => {
        if(error) {
            response.statusCode = 404;
            response.end("Employees not found");
        } else {
            var employees = data.toString().trim();
            var employees = JSON.parse(employees);
            employees.sort(sortFunc)
            response.writeHead(200, headers);
            response.end(JSON.stringify(employees));
        }
    });
}

function sortByFullName(e1, e2) {
    if(e1.fullName > e2.fullName) return 1;
    if(e1.fullName == e2.fullName) return 0;
    if(e1.fullName < e2.fullName) return -1;
}

function sortByNativeName(e1, e2) {
    if(e1.nativeName > e2.nativeName) return 1;
    if(e1.nativeName == e2.nativeName) return 0;
    if(e1.nativeName < e2.nativeName) return -1;
} 