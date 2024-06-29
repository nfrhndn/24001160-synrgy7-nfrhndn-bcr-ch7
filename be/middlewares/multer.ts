import { Request } from 'express';
import multer, { FileFilterCallback } from 'multer';

//Validasi format Image
const validateFileType = (allowedMimeTypes: string[]) => {
  return (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      const err = new Error(`Only accepted file with type ${allowedMimeTypes.toString()}`) as any;
      cb(err, false);
    }
  };
};

//Maximal Size Foto 5 MB
const UploadImage = multer({
  storage: multer.memoryStorage(),
  fileFilter: validateFileType(['image/bmp', 'image/jpeg', 'image/x-png', 'image/png', 'image/gif']),
  limits: { fileSize: 5000000 },
});

export default UploadImage;
