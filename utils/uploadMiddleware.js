const multer = require('multer');
const Upload = multer({
  limits: {
    fileSize: 4 * 1024 * 1024,
  }
});

module.exports = Upload