const express = require('express');
// const https = require('https');
// const fs = require('fs');
// const path = require('path');
// const bodyParser = require('body-parser');

// Define the app
const app = express();
const port = 3000;

// // Indiquer à Express où trouver vos fichiers statiques (si vous en avez)
// app.use(express.static(path.join(__dirname, 'public')));

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// // parse application/json
// app.use(bodyParser.json());

// // Importez vos routes
// const routes = require('./routes/routes');

// // Utilisez vos routes
// app.use('/', routes);

// // Utilisation de ejs
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));


// // Lisez les fichiers de certificats
// const privateKey = fs.readFileSync('/etc/letsencrypt/live/fansquare.live/privkey.pem', 'utf8');
// const certificate = fs.readFileSync('/etc/letsencrypt/live/fansquare.live/fullchain.pem', 'utf8');

// const credentials = {
//     key: privateKey,
//     cert: certificate
// };

// // Créez un serveur HTTPS avec votre application Express et les certificats
// const httpsServer = https.createServer(credentials, app);

// // Écoutez sur le port 443 (port par défaut pour HTTPS)
// httpsServer.listen(443, () => {
//     console.log('Serveur HTTPS démarré le port 443');
// });

// Importez le routeur
const router = require('./app/routes');

// Utilisez le routeur avec votre application
app.use('/', router);

// Écoutez sur le port spécifié
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});