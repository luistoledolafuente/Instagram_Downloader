# 📸 Instagram Downloader – 100% Docker

Este proyecto es un **Instagram Downloader en Node.js**, totalmente **dockerizado**.

✅ NO necesitas instalar:
- Node.js
- npm
- yt-dlp
- ffmpeg

👉 **Solo necesitas Docker**.

---

## 🔧 Requisito único

- Docker instalado
  https://www.docker.com/

Verifica:
```bash
docker --version
```

## 📂 Estructura del proyecto
instagram-downloader/
│
├── Dockerfile
├── Dockerfile.optimizado
├── Dockerfile.multistage
├── package.json
├── package-lock.json
├── index.js
├── cookies.txt
├── downloads/
└── README.md

## ▶️ Cómo usar el proyecto (PASOS SIMPLES)

1️⃣ Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/instagram-downloader.git
cd instagram-downloader
```

2️⃣ Construir la imagen Docker
```bash
docker build -t instagram-downloader .
```

3️⃣ Ejecutar el contenedor
```bash
docker run --rm -p 3000:3000 -v "${PWD}/downloads:/app/downloads" -v "${PWD}/cookies.txt:/app/cookies.txt:ro" instagram-downloader
```

📌 Este comando:

- Construye la imagen (paso anterior)
- Instala dependencias
- Ejecuta Node.js
- Levanta el servidor automáticamente

## 🧩 Elegir el Dockerfile que quieras usar

Puedes ejecutar el proyecto con cualquiera de estos archivos:

- `Dockerfile`
- `Dockerfile.optimizado`
- `Dockerfile.multistage`

### Usar `Dockerfile.optimizado`
```bash
docker build -f Dockerfile.optimizado -t instagram-downloader .
```

### Usar `Dockerfile.multistage`
```bash
docker build -f Dockerfile.multistage -t instagram-downloader .
```

4️⃣ Ejecutar el contenedor con la imagen creada
```bash
docker run --rm -p 3000:3000 -v "${PWD}/downloads:/app/downloads" -v "${PWD}/cookies.txt:/app/cookies.txt:ro" instagram-downloader
```

> En Windows PowerShell:
> ```powershell
> docker build -f Dockerfile.optimizado -t instagram-downloader .
> docker run --rm -p 3000:3000 -v "${PWD}/downloads:/app/downloads" -v "${PWD}/cookies.txt:/app/cookies.txt:ro" instagram-downloader
> ```

> En Windows cmd:
> ```cmd
> docker build -f Dockerfile.optimizado -t instagram-downloader .
> docker run --rm -p 3000:3000 -v "%cd%/downloads:/app/downloads" -v "%cd%/cookies.txt:/app/cookies.txt:ro" instagram-downloader
> ```

### Detener el contenedor

Presiona `Ctrl+C` en la terminal donde se ejecuta.

> Si necesitas detenerlo desde otra terminal:
> ```bash
> docker ps
> docker stop <container_id>
> ```

5️⃣ Abrir la aplicación

En el navegador:

http://localhost:3000

## 📥 Descargas

Los archivos descargados se guardan en:

`/instagram-downloader/downloads`

Aunque apagues Docker, los archivos no se pierden.

## 🧼 Limpiar imágenes y contenedores

Si quieres eliminar la imagen local después de usarla:

```bash
docker image rm instagram-downloader
```

Para liberar espacio de Docker:

```bash
docker system prune -a --volumes
```
