module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
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
  console.log(Post === sequelize.models.Post); 
  return Post;
}