const express = require('express');
const router = express.Router();
let {getUser} = require('../controllers/user.controller')

/* GET users listing. */
router.get('/getUser', getUser);

module.exports = router;
