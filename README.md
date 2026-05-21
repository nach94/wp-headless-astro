# WordPress Headless con Astro.js

Este proyecto es una implementación de un sitio web **Headless WordPress** utilizando **Astro.js**. Permite consumir el contenido de WordPress a través de su REST API y renderizarlo de forma estática o dinámica utilizando el framework Astro.

## 🚀 Tecnologías

- **Framework:** [Astro.js](https://astro.build/) (v6.3.3)
- **CMS:** [WordPress](https://wordpress.org/) (como backend headless)
- **Estilos:** CSS Global
- **Lenguaje:** JavaScript / TypeScript

## 🛠️ Configuración

Para que el proyecto funcione correctamente, es necesario configurar las variables de entorno.

1. Crea un archivo `.env` en la raíz del proyecto.
2. Añade la URL de tu API de WordPress:

```env
WORDPRESS_API_URL=https://tu-sitio-wordpress.com
```

## 📦 Estructura del Proyecto

- `src/lib/wordpress.js`: Contiene las funciones para interactuar con la REST API de WordPress (obtener posts, categorías, etc.).
- `src/pages/`:
    - `index.astro`: Página de inicio.
    - `[slug].astro`: Generación dinámica de **páginas** de WordPress en la raíz (`/mi-pagina`).
    - `blog/index.astro`: Listado de artículos del blog (`/blog`).
    - `blog/[slug].astro`: Artículos individuales del blog (`/blog/mi-post`).
    - `sitemap.xml.ts`: Generador de sitemap para SEO.
- `src/layouts/Layout.astro`: Layout principal que envuelve todas las páginas.

## 📝 Manejo de Post Types

El proyecto utiliza una lógica genérica para manejar diferentes tipos de contenido de WordPress (Posts, Pages y Custom Post Types).

### 1. Funciones Genéricas
En `src/lib/wordpress.js` se encuentran las funciones base:
- `getCollection(postType, params)`: Obtiene una lista paginada de cualquier post type.
- `getSingleBySlug(postType, slug)`: Obtiene un contenido único por su slug.
- `getAllForPaths(postType)`: Obtiene todos los slugs para la generación de rutas estáticas.

### 2. Estructura de URLs
- **Páginas Independientes:** Se gestionan en la raíz `src/pages/[slug].astro`. Esto permite URLs limpias como `dominio.com/quienes-somos`.
- **Colecciones (Blog/CPTs):** Se gestionan en subcarpetas (ej: `src/pages/blog/`). Esto permite URLs estructuradas como `dominio.com/blog/mi-articulo`.

### 3. Cómo añadir un Custom Post Type (CPT)
Para añadir un nuevo CPT (ejemplo: `servicios`):
1. Crea la carpeta `src/pages/servicios/`.
2. Crea `index.astro` dentro para el listado, llamando a `getCollection('servicios')`.
3. Crea `[slug].astro` dentro para la vista individual, llamando a `getSingleBySlug('servicios', slug)`.

## ✨ Características

- **Generación Estática:** Los artículos se generan en tiempo de compilación para un rendimiento óptimo.
- **Paginación:** Sistema básico de navegación entre páginas de artículos.
- **Filtrado:** Navegación por categorías de WordPress.
- **SEO & Social Media:** Sistema de metadatos nativo que utiliza el título y extracto de WordPress para generar etiquetas `<title>`, `<meta description>` y OpenGraph (Facebook/Twitter) automáticamente.
- **Imágenes Optimizadas:** Soporte para imágenes destacadas de WordPress en todas las vistas.

## ⌨️ Comandos

| Comando | Acción |
| :--- | :--- |
| `npm install` | Instala las dependencias. |
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:4321`. |
| `npm run build` | Compila el proyecto para producción. |
| `npm run preview` | Previsualiza la compilación localmente. |
