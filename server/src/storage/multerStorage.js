import multer from 'multer';
import path from 'path'
const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)


const imageFilter = function (req, file, cb) {
  // Accept images only
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    req.fileValidationError = 'Only image files are allowed!';
    return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};


const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, '/')
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

let handleUploadFile = async (req, res) => {
  let upload = multer({ storage: storage, fileFilter: imageFilter }).single('profile_pic');

  upload(req, res, function (err) {

    if (req.fileValidationError) {
      return res.send(req.fileValidationError);
    }
    else if (!req.file) {
      return res.send('Please select an image to upload');
    }
    else if (err instanceof multer.MulterError) {
      return res.send(err);
    }
    else if (err) {
      return res.send(err);
    }

    res.send(`You have uploaded this image: <hr/><img src="${req.file.path}" width="500"><hr /><a href="./">Upload another image</a>`);
  });
}


