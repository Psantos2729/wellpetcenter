# Temas listos (pega el bloque en `styles.css` sección 1, y cambia el <link> de fuentes)

Sacados de proyectos propios y de referencias. Son punto de partida: ajusta el color de marca del cliente.
Los tokens nuevos: `--oscuro` (campos oscuros y pie), `--sobre-oscuro`, `--sobre-acento`.

## A. Barbería / oficio clásico (de Santos Barbería) — oscuro, tipografía condensada
```css
--fondo:#111111; --papel:#1A1A1A; --tinta:#F2E9DC; --nota:#9B958C;
--accion:#D8C3A5; --accion-tinta:#111111; --acento:#A88B5A; --sobre-acento:#111111;
--oscuro:#24211D; --sobre-oscuro:#F2E9DC;
--serif:'Bebas Neue','Oswald','Arial Narrow',Impact,sans-serif;   /* titulares en MAYÚSCULAS */
--sans:'Inter',system-ui,sans-serif;  --radio:0px;
```
Fuentes: `family=Bebas+Neue&family=Inter:wght@400;500;600`. Titulares `text-transform:uppercase; line-height:.9`.
Etiqueta pequeña (eyebrow) en Oswald, tracking .28em, color acento. Dorado para detalles, vino `#7A2A22` para un campo.

## B. Spa / bienestar (de Zen) — verde bosque, crema, serif elegante
```css
--fondo:#FFFDF8; --papel:#F7F2E8; --tinta:#18241F; --nota:#617068;
--accion:#123B2E; --accion-tinta:#F7F2E8; --acento:#C9A665; --sobre-acento:#08261E;
--oscuro:#123B2E; --sobre-oscuro:#F7F2E8;
--serif:'Playfair Display',Georgia,serif; --sans:'DM Sans',Arial,sans-serif; --radio:6px;
```
Fuentes: `family=Playfair+Display:wght@500;600&family=DM+Sans:wght@400;500;600`.
Titular de portada: dos líneas, la segunda en cursiva ("Suelta la tensión. <em>Vuelve a ti.</em>"), tracking -0.045em.
Portada: foto real del local con velo verde oscuro, botón claro + enlace secundario con flecha ↗.

## C. Tecnología / agencia (de WebYa) — casi negro, azul eléctrico
```css
--fondo:#08090D; --papel:#101218; --tinta:#D7DAE2; --nota:#898D9A;
--accion:#4169FF; --accion-tinta:#FFFFFF; --acento:#69A5FF; --sobre-acento:#08090D;
--oscuro:#101218; --sobre-oscuro:#FFFFFF;
--serif:'Sora','Segoe UI',system-ui,sans-serif; --sans:'Inter','Segoe UI',system-ui,sans-serif; --radio:14px;
```
Fuentes: `family=Sora:wght@600;700&family=Inter:wght@400;500`. Titulares tracking -0.04em. Un resplandor azul suave
detrás del hero (círculo con `filter` NO; usa un `radial-gradient` solo en este tema, es decisión de estilo).

## D. Óptica / editorial minimal (de OKIO) — foto a pantalla completa, letra ligera
```css
--fondo:#F2F2F2; --papel:#FFFFFF; --tinta:#181A1B; --nota:#5C5F61;
--accion:#181A1B; --accion-tinta:#F2F2F2; --acento:#5B9A3F; --sobre-acento:#FFFFFF;
--oscuro:#181A1B; --sobre-oscuro:#F2F2F2;
--serif:'Roboto',system-ui,sans-serif; --sans:'Roboto',system-ui,sans-serif; --radio:0px;
```
Fuentes: `family=Roboto:wght@100;300;400`. Titulares en peso 300, subtítulos con tracking 2px. La portada es UNA foto
grande a pantalla completa con texto mínimo encima (marca y una línea). Marcas/productos como mosaico de logos.

## E. Cálido artesanal (de Labella) — papel marfil, vino
```css
--fondo:#E9DDC8; --papel:#F6EFE3; --tinta:#2B211A; --nota:#5E5246;
--accion:#6F5839; --accion-tinta:#F6EFE3; --acento:#7B2D4E; --sobre-acento:#F6EFE3;
--oscuro:#2B211A; --sobre-oscuro:#F6EFE3;
--serif:'Cormorant Garamond',Georgia,serif; --sans:'Jost',system-ui,sans-serif; --radio:0px;
```
Fuentes: `family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Jost:wght@400;500`.

## Cómo elegir
| Negocio | Tema |
| --- | --- |
| Barbería, taller, oficio, bar | A |
| Spa, clínica, bienestar, hotel | B |
| Agencia, software, servicios digitales | C |
| Óptica, joyería, moda, marca con buena fotografía | D |
| Salón de belleza, panadería, tienda artesanal | E |
