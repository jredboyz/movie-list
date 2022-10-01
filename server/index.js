const express = require('express');
const model = require('./db/model.js')
// const db = require('./db/dbms.js');
const app = express();
const PORT = 3000 || process.env.PORT;


app.use(express.static('client/dist'));


app.get('/movies', (req, res) => {
  model.getAll((err, results) => {
    if (err) {
      console.log('could not get movies', err);
      res.status(404);
      res.send();
    } else {
      res.status(200);
      res.send(results);
    }
  })
})

app.post('/movies', (req, res) => {
  res.send('hello world')
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
