const express = require("express");
const path = require("path");
const data = require("./data.js");

const server = express();
const PORT = 3000;
const HOST = "127.0.0.1";

const coches = data.obtenerCoches();
const views = path.join(__dirname, "views/pages/");

// Configuración del motor de plantillas
server.set('view engine', 'ejs');

// Servir un recurso de forma estática (imagenes, PDFs, etc.)
server.use('/public', express.static(path.join(__dirname, 'public')));

// Configuración de rutas
server.get('/coche', (req, res) => {
    const coche = coches[2];
    res.status(200).render(path.join(views, "coche"), { coche });
});

server.get('/coches', (req, res) => {
    res.status(200).render(path.join(views, "coches"), { coches });
});

server.listen(PORT, HOST, () => console.log(`Ejecutandose en http://${HOST}:${PORT}`));