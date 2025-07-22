const File = require('../models/file');
const cloudinary = require('../utils/cloudinary');

const uploadFile = async (req, res, next) => {
  try {
    if(!req.file){
      res.code = 400;
      throw new Error("File is not selected");
    }

    const file = new File({
      public_id: req.file.filename,      // Same as public_id from Cloudinary
      url: req.file.path,                // Cloudinary secure URL
      format: req.file.format,
      resource_type: req.file.resource_type,
      bytes: req.file.size,
      createdBy: req.user._id
    });

    await file.save();
    res.status(201).json({message : "File Uploaded succesfully..."});
  } catch (error) {
      next(error);
  }
};

const getFile = async (req, res, next) => {
    try{
         const {public_id} = req.query;
         if (!public_id) {
          return res.status(400).json({ message: "Missing public_id" });
        }
         const newFile = await File.findOne({public_id});
   
         if(!newFile){
            res.code = 400;
            throw new Error("File Not found");
         }

         const {url} = newFile;
         res.status(200).json({
              message : "File Url received succesfully...",
              "Requested File Url" : url,
          });

        } catch(error) {
       next(error);
    }
}

const deleteFile = async (req, res, next) => {
   try{
       const {public_id} = req.query;
      console.log(public_id);
       if (!public_id) {
        return res.status(400).json({ message: "Missing public_id" });
      }

       //deletion from cloudinary
       await cloudinary.uploader.destroy(public_id);

       //deletion from mongo
       await File.findOneAndDelete({public_id});

       res.status(201).json({message : "File Deleted from mongo and cloud succesfully..."});

   }catch(error){
      next(error);
   }
};

module.exports = {
   uploadFile,
   getFile,
   deleteFile
}