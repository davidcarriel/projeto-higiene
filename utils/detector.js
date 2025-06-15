function detectAnomaly(data, info) {
  const { width, height, channels } = info;
  let moldLikePixels = 0;

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const isMoldGreen = g > 80 && g < 160 && r < 100 && b < 100;
    const isGrayish = Math.abs(r - g) < 15 && Math.abs(g - b) < 15 && r > 80 && r < 180;
    const isBlueMold = b > 120 && r < 100 && g < 100;

    if (isMoldGreen || isGrayish || isBlueMold) {
      moldLikePixels++;
    }
  }

  const totalPixels = width * height;
  const ratio = moldLikePixels / totalPixels;
  const threshold = 0.01;

  return {
    flagged: ratio > threshold,
    suspiciousRatio: ratio.toFixed(4),
    message: ratio > threshold
      ? 'Anomalia detectada: possível mofo ou contaminação.'
      : 'Imagem aparentemente limpa.',
  };
}

module.exports = { detectAnomaly };
