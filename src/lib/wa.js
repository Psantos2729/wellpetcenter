import { negocio } from '../contenido.js';
export const waUrl = (texto) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto || negocio.mensajeWA)}`;
export const mapsUrl = () => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${negocio.direccion}, ${negocio.ciudad}`)}`;
