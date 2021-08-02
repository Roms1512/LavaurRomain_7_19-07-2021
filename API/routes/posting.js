const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/posting');

//***** Route Utilisateur *****// 

// Signup
router.post('/', postCtrl.createPost);
router.put('/:id', postCtrl.modifyPost);
router.delete('/:id', postCtrl.deletePost);
router.get('/:id', postCtrl.findPost);
router.get('/', postCtrl.allPost);

module.exports = router;