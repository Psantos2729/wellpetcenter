# Base React para webs de negocios pequeños

Vite + React + componentes de React Bits. Una sola fuente de contenido, un tema por cliente, componentes fijos.
Se publica como sitio estático (GitHub Pages u otro hosting).

## Qué cambia por cliente (y nada más)

| Dónde | Qué |
| --- | --- |
| `src/contenido.js` | Nombre, WhatsApp, horario, textos, fotos, orden de secciones. También genera el SEO y el JSON-LD del `<head>`. |
| `src/main.jsx` (una línea) | Tema: `neutro`, `barberia`, `spa`, `tech`, `optica`, `calido`. Cada uno trae colores, fuentes y esquinas. |
| `src/temas/<tema>.css` | Ajusta el color de acento al del cliente, o crea un tema nuevo copiando uno. |
| `public/` | `logo.webp` y `fotos/` (.webp, máx. 1200px de ancho). |

## Cliente nuevo en 8 pasos

1. Copia esta carpeta (sin `node_modules` ni `dist`) y renómbrala.
2. `npm install`
3. `src/contenido.js`: rellena todo. Busca lo pendiente con `grep -rn "{{" src` (en Windows: busca `{{` en VS Code).
4. `src/main.jsx`: elige el tema.
5. Fotos: `python scripts/preparar_fotos.py CARPETA --salida public/fotos` (necesita `pip install pillow`). Revisa
   `public/fotos/analisis.json`: te da paleta, proporción (`galeria.proporcion`) y tema sugerido.
6. `npm run dev` y revisa a 390, 768 y 1440px.
7. `npm run build` genera `dist/`. Sube el contenido de `dist/` a GitHub Pages o al hosting.
8. Actualiza `negocio.url` en `contenido.js` con la URL final y vuelve a hacer build.

## Agregar cualquier componente de React Bits

```
npm run reactbit -- BlurText
npm run reactbit -- Aurora
```
Baja el componente (variante JavaScript + CSS, sin Tailwind), lo guarda en `src/reactbits/<Nombre>/`, instala sus
dependencias (gsap, motion, three, ogl...) y te dice cómo importarlo. Las props están en reactbits.dev. Ya viene
incluido `CircularCarousel` (galería 3D, sección `galeria`).

Ideas rápidas: títulos con `BlurText` o `SplitText`; fondos con `Aurora` o `Silk`; tarjetas con `SpotlightCard`.
Úsalos con moderación: uno o dos por página, y respeta `prefers-reduced-motion`.

## Agregar o quitar secciones

Las secciones se activan y ordenan en `secciones` de `contenido.js`. Para una nueva: crea `src/componentes/X.jsx`,
agrégala al `mapa` de `src/App.jsx` y a `secciones`.

## Reglas que ya trae (no las rompas)

- Un solo `h1`; titulares en dos líneas o menos (el componente `Titulo` recibe un arreglo de líneas).
- Cinco tamaños de letra; `:hover` solo en dispositivos con puntero; movimiento con `transform` y `opacity`.
- Texto en español de Guatemala, de tú. No inventes precios, reseñas ni cifras: "se confirma por WhatsApp".
- Todo enlace de reserva usa `BotonWA` (número y mensaje salen de `contenido.js`).

## Lo que esta base NO hace por sí sola

- Es una página que se dibuja en el navegador (React). Para negocios locales funciona bien: el `<head>` (título,
  descripción, JSON-LD) sí sale en el HTML estático. Si algún cliente depende mucho de Google, se puede pasar a
  Astro con islas de React o prerenderizar, y los componentes de esta carpeta se reutilizan.
- Una sola página con anclas. Para varias páginas agrega `react-router-dom` con `HashRouter` (funciona en GitHub Pages).

## Licencia

React Bits usa MIT + Commons Clause (`LICENSE-react-bits.md`): puedes usarlo en webs de clientes, incluso cobrando
por la web, pero no vender ni repartir los componentes en sí (por ejemplo, esta carpeta como plantilla).
