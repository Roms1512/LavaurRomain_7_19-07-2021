const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('requête recue !');
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({message: 'Votre Requette a bien été recue !'});
  next();
});

app.use((req, res, next) => {
  console.log('Réponse envoyer avec succées');
});

module.exports = app;