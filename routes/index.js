var express = require('express');
var router = express.Router();
var cate = require('../controllers/cateController')
var idiom = require('../controllers/idiomController')
/* GET home page. */
router.get('/', cate.getCate);
router.get('/getPostCate', cate.getPostCate);
router.get('/getidiom', idiom.getidiom);
router.get('/getidiomtype/:type/:page', idiom.getidiomtype);
router.get('/getdetail', idiom.getdetail);
router.get('/getsearch', idiom.getsearch);
router.get('/getanswer', idiom.getanswer);
module.exports = router;
