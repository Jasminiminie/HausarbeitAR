//Festlegen von Express als Server
const express = require('express');
const app = express();
const path = require('path');

//Lädt die für die Ansicht benötigten Module
app.set('"/"', "html");
app.set('view engine', 'pug');

//Bereitstellen von statischen Dateien, path.join baut den Pfad der Dateien aus den Argumenten zusammen, __dirname gibt den aktuellen absoluten Pfad an
app.use(express.static(path.join(__dirname, "/")));

//Call Back Funktion mit den Parametern 'request' und 'response', läd die Datei index.html in den Express Server
app.get('/', (req, res) => {
    res.render('index');  
});

//Definieren des Ports für Localhost, auf dem der Server ereichbar sein wird.
app.listen(3000, () => {
    console.log("Listening on http://localhost:3000");
});