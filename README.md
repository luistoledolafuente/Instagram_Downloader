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
├── docker-compose.yml
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

2️⃣ Ejecutar TODO con Docker (usa el `Dockerfile` por defecto)
```bash
docker compose up --build
```

📌 Este comando:

- Construye la imagen
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
DOCKERFILE=Dockerfile.optimizado docker compose up --build
```

### Usar `Dockerfile.multistage`
```bash
DOCKERFILE=Dockerfile.multistage docker compose up --build
```

> En Windows PowerShell:
> ```powershell
> $env:DOCKERFILE = 'Dockerfile.optimizado'
> docker compose up --build
> ```

> En Windows cmd:
> ```cmd
> set DOCKERFILE=Dockerfile.optimizado&& docker compose up --build
> ```

3️⃣ Abrir la aplicación

En el navegador:

http://localhost:3000

## 📥 Descargas

Los archivos descargados se guardan en:

`/instagram-downloader/downloads`

Aunque apagues Docker, los archivos no se pierden.

## ⛔ Detener el proyecto

```bash
docker compose down
```

## 🧼 (Opcional) Limpiar todo Docker

```bash
docker compose down --rmi all -v
```
