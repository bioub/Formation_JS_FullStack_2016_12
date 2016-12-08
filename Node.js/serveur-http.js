const http = require('http');

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h2>Accueil</h2>');
            break;
        case '/toto':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h2>Toto</h2>');
            break;
        case '/redirectToHome':
            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end();
            break;
        default:
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h2>404 Not Found</h2>');
    }
});

server.listen(8080, () => {
   console.log('Server started : http://localhost:8080');
});
