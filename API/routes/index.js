const express = require('express');
const router = express.Router();

const usersRouter = require('./user.route');
/* GET home page. */
router.use('/user',usersRouter );

module.exports = router;
