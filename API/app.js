const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyparser.json());

app.post('/setting', (req, res, next) => {
  console.log(req.body); 
  res.status(201).json({ message: 'Objet Créer !'}) 
});

app.use('/publich', (req, res, next) => {
  const stuff = [
    {
      _id: 'dcudusqc',
      title: 'Mon premier Objet',
      description: ' les infos de mon premier objet',
      imageUrl: '',
      price: 4900,
      userId: 'uhcuscusecibsqc',
    },
    {
      _id: 'dcudusqc',
      title: 'Mon premier Objet',
      description: ' les infos de mon premier objet',
      imageUrl: '',
      price: 4900,
      userId: 'uhcuscusecibsqc',
    },
  ];
  res.status(200).json(stuff);
});

module.exports = app;