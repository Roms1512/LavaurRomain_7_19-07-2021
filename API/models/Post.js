const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

class User extends Model {}

User.init({
  

}, {
  sequelize,
  modelName: 'Post'
});

console.log(User === sequelize.models.User);