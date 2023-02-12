// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { HomePage, Login, WarrantyTable } = require('./template');
const Warranty = require('./model/warranty');

require('./db.js');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(HomePage(req.query.id));
});

app.post('/', (req, res) => {
  console.log('Form submitted:', req.body);
  const newWarranty = new Warranty(req.body);

  newWarranty.save((error) => {
    if (error) {
      console.error(error);
    } else {
      res.send('Form submitted successfully!');
    }
  });
});

app.get('/login', (req, res) => {
  res.send(Login());
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (email === 'test@example.com' && password === 'password123') {
    res.redirect('/warranty-table');
  } else {
    res.send('Incorrect email or password');
  }
});

app.get('/warranty-table', (req, res) => {
  Warranty.find({}, (error, warranties) => {
    if (error) {
      console.log(error);
    } else {
      console.log(warranties);
      res.send(WarrantyTable(warranties));
      //   res.render('warranty-table', { warranties });
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
