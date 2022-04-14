var express = require('express');
var router = express.Router();
const multer = require('multer');
var BannerController = require('../contro/bencontro');

// image multer

var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './upload/image/')
    },
    filename: (req, file, callBack) => {
        callBack(null, Date.now() + '-' + file.originalname)
    }
})

var upload = multer({
    storage: storage,
})

// router.get('/', function (req, res, next) {
//     res.render('benner', { title: 'Wel come to benner.js' });
// });
// router.get('/findcatagery',BannerController.find_category);
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('my-app/build'))
// }   

router.get('/finddata',BannerController.find_data);
router.get('/finddata/:id',BannerController.find_data_Id);
router.post('/InsertBanner', upload.single('image'), BannerController.insert_data);
router.post('/UpdateBanner', upload.single('image'), BannerController.Update_data);
router.delete('/DeleteBanner/:id', upload.single('image'), BannerController.Delete_data);


// mukunj api start

router.post('./mlogin', BannerController.mlogin)

router.get('/Mfinddata',BannerController.Mfind_data);
// router.get('/Mfindonedata',BannerController.Mfindone_data);
router.get('/Mfinddata/:id',BannerController.Mfind_data_Id);
router.post('/MInsertBanner', upload.single('image'), BannerController.Minsert_data);
router.post('/MUpdateBanner', upload.single('image'), BannerController.MUpdate_data);
router.delete('/MDeleteBanner/:id', upload.single('image'), BannerController.MDelete_data);


// mukunj api end

//vikas api start
router.get('/vfinddata',BannerController.vfind_data);
router.get('/vfinddata/:id',BannerController.vfind_data_Id);
router.post('/vInsertBanner', upload.single('image'), BannerController.vinsert_data);
router.post('/vUpdateBanner', upload.single('image'), BannerController.vUpdate_data);
router.delete('/vDeleteBanner/:id', upload.single('image'), BannerController.vDelete_data);

//vikas api end 



//video api start
// router.get('/vifinddata',BannerController.vifind_data);
// router.get('/vifinddata/:id',BannerController.vifind_data_Id);
// router.post('/viInsertBanner', upload.any(), BannerController.viinsert_data);
// router.post('/viInsertBanner', upload1.single('banner_video'), BannerController.viinsert_data);
// router.post('/viUpdateBanner', upload.single('image'), BannerController.viUpdate_data);
// router.delete('/viDeleteBanner/:id', upload.single('image'), BannerController.viDelete_data);
//video api end 



//keyur api start
router.get('/kfinddata',BannerController.kfind_data);
router.get('/kfindonedata',BannerController.kfindone_data);
router.get('/kfinddata/:id',BannerController.kfind_data_Id);
router.post('/kInsertBanner', upload.single('image'), BannerController.kinsert_data);
router.post('/kUpdateBanner', upload.single('image'), BannerController.kUpdate_data);
router.delete('/kDeleteBanner/:id', upload.single('image'), BannerController.kDelete_data);
//keyur api end
module.exports = router;