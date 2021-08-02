const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');


const PostRoutes = require('./routes/posting.js');
const UserRoutes = require('./routes/user.js')


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

const app = express();

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

app.use('/post', PostRoutes)
app.use('/auth', UserRoutes)

module.exports = app;