const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

class User extends Model {}

User.init({
  // Les Attributs des Models sont définie ici
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull est par default TRUE
  }
}, {
  // D'autres options de modèle vont ici
  sequelize, // Nous devons passer l'instance de connexion
  modelName: 'User' // Nous devons choisir le nom du modèle
});

// le modèle défini est la classe elle-même
console.log(User === sequelize.models.User); // true