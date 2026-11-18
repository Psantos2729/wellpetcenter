// Única fuente de contenido. Datos tomados del Instagram (bio y destacadas Horarios/Servicios).
// Confirmar con el cliente antes de publicar.
export const negocio = {
  nombre: 'Wellpet Center GT',
  tipo: 'Hospital Veterinario',
  eslogan: 'Expertos en cardiología, neurología, ortopedia, cuidados intensivos y anestesia.',
  zona: 'Zona 10, Ciudad de Guatemala',
  whatsapp: '50239289502',
  telefono: '23552600', // confirmado por Paolo
  horario: [
    ['Lunes a viernes', '8:00 - 17:00'],
    ['Sábados', '8:00 - 12:00'],
    ['Domingos', 'Solo emergencias'],
  ],
  emergencias: 'Emergencias 24/7',
  direccion: '6ta Calle 3-06 zona 10, Ciudad de Guatemala',
  mapa: 'https://waze.com/ul/h9fxeh75p8',
  instagram: 'https://www.instagram.com/wellpetcentergt/',
  mensajeWA: 'Hola Wellpet Center, quiero información.',
  mensajeEmergencia: 'Hola Wellpet Center, tengo una emergencia con mi mascota.',
  url: '',
}
export const servicios = [
  { titulo: 'Consulta y prevención', items: ['Consulta médica', 'Consulta cardiológica', 'Consulta neurológica', 'Farmacia', 'Vacunas', 'Desparasitaciones'] },
  { titulo: 'Hospital', items: ['Emergencias 24/7', 'Hospitalización', 'Hospitalización felina', 'Cuidados intensivos', 'Cirugía', 'Anestesia balanceada'] },
  { titulo: 'Diagnóstico', items: ['Laboratorios', 'Rayos X', 'Ultrasonido'] },
  { titulo: 'Bienestar', items: ['Hospedaje', 'Grooming', 'Tienda'] },
]
export const fotos = [ // publicaciones del Instagram, usadas con permiso del cliente (demo)
  { archivo: 'sintoma.webp', alt: 'Perro de pelo blanco durante una consulta en Wellpet' },
  { archivo: 'senior.webp', alt: 'Perro adulto sentado frente a una pared azul' },
  { archivo: 'sangre.webp', alt: 'Perro labrador café descansando junto a un transportador' },
  { archivo: 'dolor.webp', alt: 'Perro con la cabeza recostada sobre una cobija' },
  { archivo: 'padre.webp', alt: 'Hombre sosteniendo a su perro yorkshire' },
]
