import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  filefilter: (req, file, callback) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return callback(new multer.MulterError('Arquivo precisa ser PNG ou JPG'));
    }

    return callback(null, true);
  },

  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },

    filename: (req, file, callback) => {
      callback(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
