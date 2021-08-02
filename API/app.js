const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const User = require('./models/User');

const app = express();

require('dotenv').config();

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_Name}:${process.env.DB_Password}.mongodb.net/${process.env.DB_DataBase}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true 
    }
  )
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyparser.json());

app.post('/signup', (req, res, next) => {
  delete req.body._id;
  const user = new User({
    ...req.body
  });
  user.save()
    .then(() => res.status(201).json({ message: 'Utilisateur Créer !'}))
    .catch( error => res.status(400).json ({ error }));
});

app.use('/signup', (req, res, next) => {
  User.find()
        .then(users => res.status(200).json(users))
        .catch( error => res.status(400).json({ error }));
});

module.exports = app;