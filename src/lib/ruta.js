/* Rutas de /public que funcionan en cualquier subcarpeta (GitHub Pages). */
export const ruta = (p) => (import.meta.env.BASE_URL || './') + p.replace(/^\//, '');
