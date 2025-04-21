const http = require('http');
const hostname = '127.0.0.1';
const port = 8000
const server = http.createServer(( req, res) => {
    if ( req.url === '/') {
        res.statusCode= 200
        res.setHeader = ('Content-Type', 'text/plain');
        res.end("Hell Ice tea?")
    } else if (req.url === 'ice-tea') {
        res.statusCode= 200
        res.setHeader = ('Content-Type', 'text/plain');
        res.end("Thanks Its really hot buddy")
        
    } else {
        res.statusCode= 200
        res.setHeader = ('Content-Type', 'text/plain');
        res.end("404 Not Found")
    }
})

server.listen(port, hostname, () => {
console.log(`server is listening http://${hostname}:${port}`);
})
