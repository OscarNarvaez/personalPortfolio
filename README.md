# Portafolio migrado a Next.js

Este proyecto fue migrado para usar:

- Frontend: Next.js + TypeScript + Tailwind CSS
- Backend: API Routes de Next.js
- Base de datos: PostgreSQL con Prisma ORM

## Requisitos

- Node.js 20+
- PostgreSQL activo

## Configuración

1. Instalar dependencias:

```bash
npm install
```

2. Crear archivo de entorno:

```bash
cp .env.example .env
```

3. Ajustar `DATABASE_URL` en `.env`.

4. Generar cliente y migrar base de datos:

```bash
npm run prisma:generate
npm run prisma:migrate -- --name init
```

5. (Opcional) Cargar proyectos iniciales:

```bash
npm run prisma:seed
```

6. Levantar en desarrollo:

```bash
npm run dev
```

## Rutas

- `/` Home
- `/about` Sobre mí
- `/works` Proyectos
- `/contact` Contacto

## Endpoints

- `GET /api/projects`
- `POST /api/contact`
