const express = require('express');

const app = express();

// Sirve contenido estatico
app.use('/static', express.static(__dirname + '/static/files'));

app.get('/', (req, res) => {
  res.send("Hi, I'm node root");
});

app.get('/err', function (req, res) {
  res.json(500, {err: 'You failed!'});
});

// Simula una llamada a una base de datos con un sleep de un tiempo random de hasta 4 segundos
app.get('/db', (req,res) => {
  setTimeout(() => {
    res.send('DB says hi');
  }, Math.random() * 5000);
});

// Recibe por parametro un entero y genera un ciclo de ese tamaño
app.get('/calc', (req,res) => {
  for (let index = 0; index < 10000000; index++) {
  }
  res.send('OK');
});

// Start server
app.listen(3000, () => {
  console.log('listening on port 3000!');
});
