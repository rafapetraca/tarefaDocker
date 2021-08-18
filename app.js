const express = require('express');

const app = express();
app.get('/', function (_req, res) {
    res.send(`<img src="http://http.cat/${200}" />`);
});

app.listen(3000, () => {
    console.log('Servidor na porta 3000!');
});
