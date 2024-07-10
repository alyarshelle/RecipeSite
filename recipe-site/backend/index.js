const express = require('express');
const routes = require('./routes.js');
const app = express();
const port = 3002;

// Serve static files from the build directory
app.use(express.static('../recipe-site/build'));

// Use routes defined in routes.js
app.use('/', routes.router);

app.get('/', (req, res) => {
    res.redirect('/recipes');
});

app.post('/', (req, res) => {
    res.redirect('/recipes');
});

// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

module.exports = { app };
