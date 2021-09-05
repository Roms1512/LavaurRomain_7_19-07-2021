const express = require('express');
const Sequelize = require('sequelize');

// const PostRoutes = require('./routes/post');
const UserRoutes = require('./routes/user');

require('dotenv').config();

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
    
app.use(express.json());

app.use('/api/signup', UserRoutes)

// app.use('/api/post', PostRoutes)

module.exports = app;