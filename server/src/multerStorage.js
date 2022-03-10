import multer from 'multer';
const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)


const imageFilter = function (req, file, cb) {
  // Accept images only
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    req.fileValidationError = 'Only image files are allowed!';
    return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, fn) => {
    fn(null, __dirname + '/public/videos/')
  },
  filename: (req, file, fn) => {
    fn(null, uniqueSuffix + '--' + file.originalname)
  }
})

export const upload = multer({ storage: fileStorageEngine, limits: { fieldSize: 25 * 1024 * 1024 } })


