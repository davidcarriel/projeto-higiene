const express = require('express');
const path = require('path');
const uploadRoute = require('./routes/upload');

const app = express();
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

app.use('/api', uploadRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
