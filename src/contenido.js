// Única fuente de contenido. Datos tomados del Instagram (bio y destacadas Horarios, Servicios, Drs., Planes de salud).
export const negocio = {
  nombre: 'Wellpet Center GT',
  tipo: 'Hospital veterinario',
  zona: 'Zona 10, Ciudad de Guatemala',
  whatsapp: '50239289502',
  telefono: '23552600',
  horario: [
    ['Lunes a viernes', '8:00 - 17:00'],
    ['Sábados', '8:00 - 12:00'],
    ['Domingos', 'Solo emergencias'],
  ],
  direccion: '6ta Calle 3-06 zona 10, Ciudad de Guatemala',
  mapa: 'https://waze.com/ul/h9fxeh75p8',
  instagram: 'https://www.instagram.com/wellpetcentergt/',
  mensajeWA: 'Hola Wellpet Center, quiero información.',
  mensajeEmergencia: 'Hola Wellpet Center, tengo una emergencia con mi mascota.',
  url: 'https://psantos2729.github.io/wellpetcenter/',
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

// Publicaciones del Instagram, usadas con permiso del cliente (demo).
export const fotos = {
  sintoma: { src: 'fotos/sintoma.webp', alt: 'Perro de pelo blanco durante una consulta en Wellpet', pos: '50% 30%', w: 1093, h: 1341 },
  senior: { src: 'fotos/senior.webp', alt: 'Perro adulto sentado frente a una pared azul', pos: '50% 28%', w: 1054, h: 1396 },
  sangre: { src: 'fotos/sangre.webp', alt: 'Perro labrador café descansando junto a un transportador', pos: '50% 88%', w: 1081, h: 1386 },
  dolor: { src: 'fotos/dolor.webp', alt: 'Perro con la cabeza recostada sobre una cobija', pos: '50% 52%', w: 1062, h: 1336 },
  padre: { src: 'fotos/padre.webp', alt: 'Hombre sosteniendo a su perro yorkshire', pos: '50% 62%', w: 1081, h: 1354 },
}
