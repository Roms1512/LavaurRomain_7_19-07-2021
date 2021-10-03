const fs = require('fs');
const db = require('../models');
const bcrypt = require('bcrypt');
const buffer = require('buffer/').Buffer; // chaine binaire et peut ensuite les remettres sur une base 64bit
const passwordRegexp = require('password-regexp');

const jwt = require("../middleware/auth")

require('dotenv').config();

const User = require('../models/User');

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/;

exports.signup = async(req, res) => {
  const pseudo = req.body.pseudo;
  const email = req.body.email;
  const pass = req.body.password;
  // const avatar = req.body.avatar;
  // const admin = req.body.admin;

  console.log(pseudo);
  console.log(email);
  console.log(pass);

  if (!PASSWORD_REGEX.test(pass)) {
    return res.status(401).json({ error: "Mot de passe non sécurisé" });
  }
    const hpass = await bcrypt.hash(pass, 5);

    const user = await db.User.create({
      pseudo: pseudo,
      email: email,
      password: hpass
    })
    .then((user) => res.status(201).json({ message : 'Utilisateur créer !'}))
    .catch(error => res.status(400).json({ error }));
}

exports.login = async(req, res) => {
  const buf = req.body.email;
  const pass = req.body.password;

  console.log(buf);
  console.log(pass);

  db.User.findOne({ where: {email: buf} }) // email masqué base64
  .then(user => {

    console.log("étape 1");
    if (!user) {
      console.log("étape 2");
      return res.status(401).json({ error: 'Utilisateur non trouvé !'});
    }
    const valid = bcrypt.compare(pass, user.pass);
      if (!valid) {
        return res.status(403).json({ error: 'Mots de passe incorrect !'})
      }kh
      console.log("étape 3" + user.id);

      res.status(200).json({
        userId: user.id,
        token: jwt.generateTokenForUser(user)
      });
  })
  .catch(error => res.status(500).json({ error }));
}