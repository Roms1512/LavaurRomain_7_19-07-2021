'use strict'; //optimisation et sécurité corrige les erreurs JS 

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;

sequelize = new Sequelize('Groupomania', 'Roms', 'root',{
  host: '192.168.64.2',
  port: 3306,
  dialect: 'mysql'
});

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
      const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
    
    /*//console.log(__dirname);
    //console.log(file);
    let myPassFile = path.join(__dirname,file);
    console.log(myPassFile);
    const model = require(myPassFile);//(sequelize, Sequelize.DataTypes);
    db[model.name] = model;*/
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;