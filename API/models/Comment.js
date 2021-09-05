module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    id:{
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    like: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dislike: {
      type: DataTypes.INTEGER,
      allowNull: true
    }

  });
  console.log(Comment === sequelize.models.Comment); 
  return Comment;
}