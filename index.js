const express = require('express');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Servir CSS
app.use(express.static(path.join(__dirname, 'public')));

// EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Ruta raíz
app.get('/', (req, res) => {
  res.render('index', { message: null, success: true });
});

// Descargar
app.post('/download', (req, res) => {
  const { url } = req.body;

  if (!url || !url.includes('instagram.com')) {
    return res.render('index', {
      message: 'URL de Instagram inválida ❌',
      success: false
    });
  }

  // Asegurar carpeta downloads
  const downloadsDir = path.join(__dirname, 'downloads');
  if (!fs.existsSync(downloadsDir)) {
    fs.mkdirSync(downloadsDir);
  }

  // Cookies
  const cookiesPath = path.join(__dirname, 'cookies.txt');
  if (!fs.existsSync(cookiesPath)) {
    return res.render('index', {
      message: 'Falta el archivo cookies.txt ❌',
      success: false
    });
  }

  // yt-dlp
  const ytdlp = spawn('yt-dlp', [
    '--cookies', cookiesPath,
    '-f', 'mp4',
    url,
    '-o', path.join(downloadsDir, '%(id)s.%(ext)s')
  ]);

  ytdlp.stdout.on('data', (data) => {
    console.log(`yt-dlp info: ${data}`);
  });

  ytdlp.stderr.on('data', (data) => {
    console.error(`yt-dlp error: ${data}`);
  });

  ytdlp.on('close', (code) => {
    if (code !== 0) {
      return res.render('index', {
        message: 'Error al descargar el video ❌',
        success: false
      });
    }

    res.render('index', {
      message: 'Video descargado correctamente ✅',
      success: true
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});