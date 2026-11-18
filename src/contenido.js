/* ==========================================================================
   Única fuente de contenido (y del SEO/JSON-LD del <head>, vía vite.config.js).
   Datos tomados del Instagram del cliente (bio y destacadas Horarios, Servicios, Drs., Planes de salud).
   No se inventan precios, reseñas ni cifras: se confirman por WhatsApp.
   ========================================================================== */

export const negocio = {
  nombre: 'Wellpet Center GT',
  tipo: 'Hospital veterinario',
  tipoSchema: 'VeterinaryCare',
  zona: 'zona 10',
  ciudad: 'Ciudad de Guatemala',
  direccion: '6ta Calle 3-06 zona 10',
  telefono: '2355-2600',
  whatsapp: '50239289502',
  whatsappTexto: '3928-9502',
  mensajeWA: 'Hola Wellpet Center, quiero información.',
  mensajeEmergencia: 'Hola Wellpet Center, tengo una emergencia con mi mascota.',
  url: 'https://psantos2729.github.io/wellpetcenter',
  descripcion: 'Hospital veterinario en zona 10, Ciudad de Guatemala. Emergencias 24/7, cardiología, neurología, cirugía, cuidados intensivos y planes de salud.',
  logo: 'logo.webp',
  ogImagen: 'fotos/sintoma.webp',
  mapa: 'https://waze.com/ul/h9fxeh75p8',
  instagram: 'https://www.instagram.com/wellpetcentergt/',
  // Horario de consulta (hora de Guatemala). 0 = domingo. Emergencias: 24/7.
  horario: { 0: null, 1: ['8:00', '17:00'], 2: ['8:00', '17:00'], 3: ['8:00', '17:00'], 4: ['8:00', '17:00'], 5: ['8:00', '17:00'], 6: ['8:00', '12:00'] },
  horarioFilas: [
    ['Lunes a viernes', '8:00 - 17:00'],
    ['Sábados', '8:00 - 12:00'],
    ['Domingos', 'Solo emergencias'],
  ],
}

export const servicios = [
  { titulo: 'Consulta y prevención', items: ['Consulta médica', 'Consulta cardiológica', 'Consulta neurológica', 'Farmacia', 'Vacunas', 'Desparasitaciones'] },
  { titulo: 'Hospital', items: ['Emergencias 24/7', 'Hospitalización', 'Hospitalización felina', 'Cuidados intensivos', 'Cirugía', 'Anestesia balanceada'] },
  { titulo: 'Diagnóstico', items: ['Laboratorios', 'Rayos X', 'Ultrasonido'] },
  { titulo: 'Bienestar', items: ['Hospedaje', 'Grooming', 'Tienda'] },
]

export const equipo = [
  {
    nombre: 'Dr. Dieter Wohlers',
    areas: [
      ['Neurología veterinaria', 'Diagnóstico y tratamiento de trastornos neurológicos.'],
      ['Anestesia veterinaria', 'Seguridad y ausencia de dolor en cada procedimiento.'],
      ['Clínica general', 'Atención integral y personalizada para la salud y bienestar de cada paciente.'],
    ],
    texto: 'Cuenta con múltiples posgrados en neurología, avalados por universidades extranjeras como la Universidad de Murcia y la Universidad Autónoma de Barcelona.',
  },
  {
    nombre: 'Dr. Andrés Papahiu',
    areas: [
      ['Cardiología veterinaria', 'Cuidando el corazón de tu mascota.'],
      ['Medicina interna', 'Diagnóstico y tratamiento integral.'],
      ['Nefrología', 'Experto en la salud renal de tu mascota.'],
    ],
    texto: 'Cuenta con múltiples posgrados en áreas como anestesia y analgesia, así como en emergencias y cuidados intensivos.',
  },
]

export const planes = [
  { nombre: 'Gato cachorro', items: ['10% de descuento en servicios veterinarios', '6 desparasitaciones', '3 vacunas triple felina', '2 vacunas contra la rabia', '2 vacunas contra leucemia', '1 consulta anual'] },
  { nombre: 'Perro adulto', items: ['10% de descuento en servicios veterinarios', '4 desparasitaciones', '1 vacuna múltiple', '1 vacuna contra la rabia', '1 vacuna contra la tos de perrera', '10% de descuento en grooming', '1 consulta anual'] },
  { nombre: 'Perro adulto premium', items: ['10% de descuento en servicios veterinarios', '4 desparasitaciones', '1 vacuna múltiple', '1 vacuna contra la rabia', '1 vacuna contra la tos de perrera', '10% de descuento en grooming', '1 consulta anual', '1 hemograma', '1 examen de orina', '1 examen de heces'] },
  { nombre: 'Perro geriátrico', items: ['10% de descuento en servicios veterinarios', '4 desparasitaciones', '1 vacuna múltiple', '1 vacuna contra la rabia', '1 vacuna contra la tos de perrera', 'Panel 6 bioquímicas', '2 consultas anuales', '1 hemograma', '1 examen de orina', '1 ultrasonido abdominal', '1 ultrasonido cardíaco'] },
]

// Publicaciones del Instagram, usadas con permiso del cliente (demo). Cambiar por fotos limpias del cliente.
export const fotos = {
  sintoma: { src: 'fotos/sintoma.webp', alt: 'Perro de pelo blanco durante una consulta en Wellpet', pos: '50% 30%', w: 1093, h: 1341 },
  senior: { src: 'fotos/senior.webp', alt: 'Perro adulto sentado frente a una pared azul', pos: '50% 28%', w: 1054, h: 1396 },
  sangre: { src: 'fotos/sangre.webp', alt: 'Perro labrador café descansando junto a un transportador', pos: '50% 88%', w: 1081, h: 1386 },
  dolor: { src: 'fotos/dolor.webp', alt: 'Perro con la cabeza recostada sobre una cobija', pos: '50% 52%', w: 1062, h: 1336 },
  padre: { src: 'fotos/padre.webp', alt: 'Hombre sosteniendo a su perro yorkshire', pos: '50% 62%', w: 1081, h: 1354 },
}

// Carrusel 3D de React Bits (CircularCarousel). Con menos de 3 fotos se muestra una cuadrícula.
export const galeria = {
  titulo: 'Cuidamos a toda la familia',
  preset: 'cylinder',
  ancho: 260,
  proporcion: 0.78,
  fotos: [
    { src: 'fotos/padre.webp', alt: fotos.padre.alt, titulo: 'Cada mascota, una familia', subtitulo: '' },
    { src: 'fotos/senior.webp', alt: fotos.senior.alt, titulo: 'Años por vivir juntos', subtitulo: '' },
    { src: 'fotos/sangre.webp', alt: fotos.sangre.alt, titulo: 'Emergencias 24/7', subtitulo: '' },
    { src: 'fotos/dolor.webp', alt: fotos.dolor.alt, titulo: 'Diagnóstico a tiempo', subtitulo: '' },
    { src: 'fotos/sintoma.webp', alt: fotos.sintoma.alt, titulo: 'Atención integral', subtitulo: '' },
  ],
}
