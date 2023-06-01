const express = require("express");
const path = require("path");

const server = express();
const PORT = 3000;
const HOST = "localhost";

// En este método si importa el lugar en el que se ha declarado.
// Se debe colocar arriba de todas las rutas. Lo podes probar en
// tu navegador: http://localhost:3000/img/argentina_programa_4.png
server.use('/public', express.static(path.join(__dirname, 'public')));

server.get('/', (request, response) => {
    response.status(200).send("Hola Mundo");
});

server.get('/materia', (request, response) => {
    response.status(200).send("Esta materia es Programación Backend");
});

// En este método si importa el lugar en el que se ha declarado.
// Se debe colocar debajo de todas las rutas.
server.get('*', (request, response) => {
    response.status(404).send("Lo siento, la página que buscas no existe.");
});

server.listen(PORT, HOST, () => console.log(`Ejecutandose en http://${HOST}:${PORT}`));