const sharp = require('sharp');
const path = require('path');
const { detectAnomaly } = require('./utils/detector');

async function processImage(imagePath) {
  const resizedPath = imagePath + '-resized.jpg';

  await sharp(imagePath)
    .resize(300, 300)
    .toFile(resizedPath);

  const { data, info } = await sharp(resizedPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const analysis = detectAnomaly(data, info);
  return { resizedPath, analysis };
}

module.exports = { processImage };
