let http = require('http');

// Student Name
let studentName = "Emilee Hatch";

// Name of Person I know
let name = "Daniel Torres"

// Host Name
let hostname = 'localhost';

// Port Number
let port = 3000;

// Incomming Requests will be handled here.
const requestListener = function (req, res) {
    // response.setHeader(name,value)
    //res.setHeader
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(`{"message": "This is a JSON response"}`);
};

let server = http.createServer((requestListener));

server.listen(port, hostname, ()=> {
    //console.log(`Server is running on http://${hostname}:${port}`);
    //console.log(`My name is ${studentName}`);
    console.log(`${name}`);
});