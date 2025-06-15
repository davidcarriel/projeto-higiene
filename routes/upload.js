const express = require('express');
const multer = require('multer');
const { processImage } = require('../imageProcessor');
const router = express.Router();

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ storage });

router.post('/upload', upload.single('image'), async (req, res) => {
  if (!req.file) return res.status(400).send('Imagem não enviada.');
  const result = await processImage(req.file.path);
  res.json(result);
});

module.exports = router;
