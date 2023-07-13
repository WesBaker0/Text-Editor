const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, 'client')));

app.get('*', (req, res) => {
    app.use(express.static(path.join(__dirname, '..', 'client', 'index.html')));
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
