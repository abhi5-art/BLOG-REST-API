const express = require('express');
const router = express.Router();
const AllController = require('../controllers');
const isAuth = require('../middlewares/isAuth');
// const upload = require('../middlewares/upload');
const upload = require("../middlewares/upload");


router.post(
    "/upload",
    isAuth,
    // upload.single("image"),uploads single file to local storage
    upload.single("image"),//2nd para is no of files at a time allowed to upload to local storage
    AllController.fileController.uploadFile
);

router.get(
   "/getFile",
   isAuth,
   AllController.fileController.getFile,
);

router.delete(
  "/deleteFile",
  isAuth,
  AllController.fileController.deleteFile,
);



module.exports = router;