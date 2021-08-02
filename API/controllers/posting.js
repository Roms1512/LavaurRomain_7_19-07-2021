const User = require('../models/Post');

exports.createPost = (req, res, next) => {
  delete req.body._id;
  const user = new User({
    ...req.body
  });
  user.save()
    .then(() => res.status(201).json({ message: 'Utilisateur Créer !'}))
    .catch( error => res.status(400).json ({ error }));
};

exports.modifyPost = (req, res, next) => {
  User.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Utilisateur modifié !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.deletePost = (req, res, next) => {
  User.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Utilisateur supprimé !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.findPost = (req, res, next) => {
  User.findOne({ _id: req.params.id })
    .then(user => res.status(200).json(thing))
    .catch(error => res.status(404).json({ error }));
};

exports.allPost = (req, res, next) => {
  User.find()
        .then(users => res.status(200).json(users))
        .catch( error => res.status(400).json({ error }));
};