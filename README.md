# Portafolio en Next.js

Portafolio personal implementado con Next.js + TypeScript.

## Requisitos

- Node.js 20+

## Uso

1. Instalar dependencias:

```bash
npm install
```

2. Levantar en desarrollo:

```bash
npm run dev
```

3. Compilar para producción:

```bash
npm run build
npm start
```

## Rutas

- `/` Home
- `/about` About me
- `/works` Works
- `/contact` Contact

## Deploy en GitHub Pages

Ya está configurado el workflow en [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml).

Solo debes:

1. Subir cambios a la rama `main`.
2. En GitHub, ir a **Settings → Pages**.
3. En **Source**, seleccionar **GitHub Actions**.

Con cada push a `main`, se publicará automáticamente.
