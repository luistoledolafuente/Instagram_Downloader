FROM node:20

WORKDIR /app

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y yt-dlp ffmpeg

# Instalar dependencias de Node.js
COPY package*.json ./
RUN npm install

# Copiar código fuente
COPY . .

# Cookies de Instagram
COPY cookies.txt /app/cookies.txt

# Crear carpeta de descargas
RUN mkdir -p /app/downloads

EXPOSE 3000

CMD ["node", "index.js"]