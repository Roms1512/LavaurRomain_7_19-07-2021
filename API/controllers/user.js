const fs = require('fs');
const db = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const buffer = require('buffer/').Buffer; // chaine binaire et peut ensuite les remettres sur une base 64bit
const passwordRegexp = require('password-regexp');

require('dotenv').config();

const User = require('../models/User');

const password = passwordRegexp({
  min: 8,
  max: 30,
  numeric: true,
  uppercase: true,
  symbols: true, // an option for symbols: ! @ # $ % ^ &
});

exports.signup = async(req, res) => {
  const pseudo = req.body.pseudo;
  const email = req.body.email;
  const pass = req.body.password;
  // const avatar = req.body.avatar;
  // const admin = req.body.admin;

  console.log(pseudo);
  console.log(email);
  console.log(pass);

  if(!password.test(pass)) {
    // bcrypt.hash(pass, 10)
      const user = db.User.create({
        pseudo: pseudo,
        email: email,
        password: pass
      })
      .then((user) => res.status(201).json({ message : 'Utilisateur créer !'}))
      .catch(error => res.status(400).json({ error }));
  } else {
    res.status(401).json({ error: 'Le mots de passe doit faire min 8 carractère, doit comprendre au moins 1 carractère majuscule, 1 carractère minuscule, 1 carractère numerique et au moins 1 symbole' })
  }
}

exports.login = async(req, res) => {
  const buf = new Buffer.from(req.body.email);
  const pass = req.body.password;

  console.log(buf);
  console.log(pass);

  db.User.findOne({ email: buf.toString(process.env.DB_Buffer) }) // email masqué base64
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !'});
      }
      if (!password){
        return res.status(402).json({ error: 'Mots de passe incorect !'});
      }
      bcrypt.compare(pass, user.pass)
        .then(valid => {
          if (!valid) {
            return res.status(403).json({ error: 'Mots de passe incorrect !'})
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.generateTokenForUser(user)
          });
        })
        .catch(error => res.status(501).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
}