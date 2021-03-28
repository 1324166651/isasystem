var express = require('express');
var router = express.Router();
var User = require('../controllers/userController')
/* GET users listing. */
router.post('/sendCode', User.sendCode);
router.post('/codePhoneLogin',User.codePhoneLogin);
module.exports = router;
