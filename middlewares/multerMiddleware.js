const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req,file,cb) => 
    { let folder = path.join('.public/images/avatars')
        cb(null, folder);
    },
    filename: (req,file,cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
})

const upload = multer({ storage: storage });

module.exports = upload