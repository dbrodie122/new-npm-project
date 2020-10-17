const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello root!');
});
app.get('/x', (req, res) => {
  res.send('Hello X!');
});
app.get('/y', (req, res) => {
  res.send('Hello Y!');
});
app.get('/z', (req, res) => {
  res.send('Hello Z!');
});

app.post('/wow', function(req, res) {
  res.type('application/json');
  res.send(JSON.stringify('This is the post request'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
