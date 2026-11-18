import { galeria } from '../contenido.js'
import { ruta } from '../lib/ruta.js'
import { useVarCss } from '../hooks/useVarCss.js'
import CircularCarousel from '../reactbits/CircularCarousel/CircularCarousel.jsx'

/* Anillo 3D (Circular Carousel de React Bits). Con menos de 3 fotos se muestra una cuadrícula. */
export default function Galeria3D() {
  const fondo = useVarCss('--oscuro', '#0B1F44')
  const items = galeria.fotos.map(f => ({ src: ruta(f.src), alt: f.alt, title: f.titulo, subtitle: f.subtitulo }))
  return (
    <section id="galeria" className="galeria3d" aria-labelledby="titulo-galeria">
      <h2 id="titulo-galeria" className="r">{galeria.titulo}</h2>
      {items.length >= 3 ? (
        <div className="carrusel3d">
          <CircularCarousel items={items} preset={galeria.preset} cardWidth={galeria.ancho} aspectRatio={galeria.proporcion}
            autoplay="drift" speed={10} captions fadeColor={fondo} cornerRadius={14} intro="rise" />
        </div>
      ) : (
        <div className="rejilla-fotos">{items.map(f => <img key={f.src} src={f.src} alt={f.alt} loading="lazy" />)}</div>
      )}
    </section>
  )
}
