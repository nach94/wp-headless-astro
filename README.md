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
    - `blog/index.astro`: Listado de artículos con soporte para paginación y filtrado por categoría.
    - `blog/[slug].astro`: Generación dinámica de páginas para cada artículo individual.
    - `sitemap.xml.ts`: Generador de sitemap para SEO.
- `src/layouts/Layout.astro`: Layout principal que envuelve todas las páginas.

## ✨ Características

- **Generación Estática:** Los artículos se generan en tiempo de compilación para un rendimiento óptimo.
- **Paginación:** Sistema básico de navegación entre páginas de artículos.
- **Filtrado:** Navegación por categorías de WordPress.
- **SEO Ready:** Soporte básico para metadatos y compatibilidad con Yoast SEO (vía REST API).
- **Imágenes Optimizadas:** Soporte para imágenes destacadas de WordPress.

## ⌨️ Comandos

| Comando | Acción |
| :--- | :--- |
| `npm install` | Instala las dependencias. |
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:4321`. |
| `npm run build` | Compila el proyecto para producción. |
| `npm run preview` | Previsualiza la compilación localmente. |
