var express = require('express');
var router = express.Router();
var multer  = require('multer');
var Gallery = require('../models/Gallery.js');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '.././src/assets/uploadedimages');
    },
    filename: (req, file, cb) => {
      console.log(file);
      var filetype = '';
      if(file.mimetype === 'image/gif') {
        filetype = 'gif';
      }
      if(file.mimetype === 'image/png') {
        filetype = 'png';
      }
      if(file.mimetype === 'image/jpeg') {
        filetype = 'jpg';
      }
      cb(null, 'image-' + Date.now() + '.' + filetype);
    }
});

var upload = multer({storage: storage});
//post data
router.post('/', upload.single('file'), function(req, res, next) {
    if(!req.file) {
        return res.status(500).send({ message: 'Upload fail'});
    } else {
        req.body.imageUrl = 'assets/uploadedimages/' + req.file.filename;
        Gallery.create(req.body, function (err, gallery) {
            if (err) {
                console.log(err);
                return next(err);
            }
            res.json(gallery);
        });
    }
});

// Get All Gallery
router.route('/').get((req, res) => { 
  Gallery.find((error, data) => { 
    if (error) { 
      return next(error) 
    } else { 
      res.json(data) 
    } 
  }) 
}) 

//get data by id
router.get('/:id',function(req,res,next){
  Gallery.findById(req.params.id,function(err,gallery){
    if(err) return next(err);
    res.json(gallery);
  })
})

// Delete employee 
router.route('/delete/:id').delete((req, res, next) => { 
  Gallery.findOneAndRemove(req.params.id, (error, data) => { 
    if (error) { 
      return next(error); 
    } else { 
      res.status(200).json({ 
        msg: data 
      }) 
    } 
  }) 
}) 

module.exports = router;