var express = require('express');
var router = express.Router();
const multer = require('multer');
// const formidable = require('formidable');
// const { IncomingForm } = require('formidable');
var BannerController = require('../contro/bencontro');

// image multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {

      console.log(file)
      // const form = new IncomingForm(formidable);
    
        if (file.mimetype === 'video/mp4') {
            console.log(file,'ddd');  
            cb(null, './upload/banner_video/')
          } else if (file.mimetype === ('image/jpeg' || 'image/png' || 'image/jpg')) {
            cb(null, './upload/image/')
          } else {
            cb(null, './upload/image/')
          }

    },
    filename: (req, file, callBack) => {
        callBack(null, Date.now() + '-' + file.originalname)
    }
})


var upload = multer({
    storage: storage,
})


router.get('/', function (req, res, next) {
  res.render('benner', { title: 'Wel come to benner.js' });
});


//video api start
router.get('/vifinddata',BannerController.vifind_data);
router.get('/vifinddata/:id',BannerController.vifind_data_Id);
router.post('/viInsertBanner', upload.any(), BannerController.viinsert_data);
router.post('/viUpdateBanner',  upload.any(), BannerController.viUpdate_data);
router.delete('/viDeleteBanner/:id',  upload.any(), BannerController.viDelete_data);
//video api end 


module.exports = router;