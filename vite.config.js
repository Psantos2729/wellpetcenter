import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { negocio } from './src/contenido.js';

/* Rellena el <head> (SEO, JSON-LD) desde src/contenido.js: una sola fuente de verdad. */
const seo = () => ({
  name: 'seo-desde-contenido',
  transformIndexHtml(html) {
    const n = negocio;
    const titulo = `${n.nombre} | ${n.tipo} en ${n.zona}, ${n.ciudad}`;
    const og = `${n.url}/${n.ogImagen}`;
    const dias = { 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday', 0: 'Sunday' };
    const horas = Object.entries(n.horario).filter(([, h]) => h).map(([d, h]) => ({
      '@type': 'OpeningHoursSpecification', dayOfWeek: dias[d], opens: h[0].padStart(5, '0'), closes: h[1].padStart(5, '0')
    }));
    const ld = {
      '@context': 'https://schema.org', '@type': n.tipoSchema, name: n.nombre, url: n.url + '/', image: og,
      telephone: '+' + n.whatsapp, address: { '@type': 'PostalAddress', streetAddress: n.direccion, addressLocality: n.ciudad, addressCountry: 'GT' },
      openingHoursSpecification: horas
    };
    return html
      .replaceAll('__TITULO__', titulo).replaceAll('__DESCRIPCION__', n.descripcion)
      .replaceAll('__URL__', n.url).replaceAll('__OG__', og).replaceAll('__NOMBRE__', n.nombre)
      .replace('__JSONLD__', JSON.stringify(ld, null, 2));
  }
});

// base './' = funciona en GitHub Pages (subcarpeta) y en cualquier hosting
export default defineConfig({ base: './', plugins: [react(), seo()] });
