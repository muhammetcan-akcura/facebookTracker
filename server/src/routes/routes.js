const express = require('express');
const router = express.Router();
const facebookController = require('../controllers/facebook.controllers');

router.post('/follower-count', facebookController.getFollowerCount);

module.exports = router;
