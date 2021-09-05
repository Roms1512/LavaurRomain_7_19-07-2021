module.exports = (sequelize, DataTypes) => {  
  const User = sequelize.define('User',{  
      id:{
          type:DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      pseudo: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      avatar: {
          type: DataTypes.STRING,
          allowNull: true
      },
      admin:{
          type:DataTypes.INTEGER,
          allowNull: true
      },
  
  });
//   User.associate = (models) => {
//       User.hasMany(models.Comment);
//       User.hasMany(models.Post);
//       /*Comment.hasMany(models.RateComment, {
//         foreignKey: {
//           allowNull: true,
//         },
//         onDelete: "CASCADE",
//         onUpdate: "CASCADE",
//       });*/
//   };
  console.log(User === sequelize.models.User); 
  return User;
}