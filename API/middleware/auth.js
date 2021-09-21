const jwt = require('jsonwebtoken');
const { use } = require('../routes/user');
const JWT_SIGN_SECRET = "OPENCLASSROOMS_P7_ROM";

require('dotenv').config();

exports.verifyAuth = (req, res)=> {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.DB_TokenKey);
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request !')
    });
  }
};

// /**
//  * Création d'un token
//  * @param {OBJECT} user
//  * @returns STRING
//  */
 exports.generateTokenForUser = (user) => {
  console.log("user jwt" + user.id + " " + user.pseudo + " " + user.isAdmin);
  return jwt.sign(
    {
      userId: user.id,
      pseudo: user.pseudo,
      admin: user.isAdmin,
    },
    JWT_SIGN_SECRET,
    { expiresIn: "24h" }
  );
};