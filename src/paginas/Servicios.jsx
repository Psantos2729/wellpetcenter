import { BotonWA, Foto } from '../componentes.jsx'
import ScrollExpand from '../reactbits/ScrollExpand/ScrollExpand.jsx'
import { ruta } from '../lib/ruta.js'
import { fotos } from '../contenido.js'
import { servicios } from '../contenido.js'

const fotoPor = ['sintoma', 'sangre', 'senior', 'dolor']

export default function Servicios() {
  return (
    <>
      <div className="expande">
        <ScrollExpand
          useWindowScroll
          src={ruta(fotos.dolor.src)}
          alt={fotos.dolor.alt}
          title={<h1>Todo lo que tu mascota necesita</h1>}
          scrollHint="Desliza para ver los servicios"
          startWidth={38}
          startHeight={52}
          startRadius={14}
          overlayScrim={0.35}
          scrollDistance={1}
          holdDistance={0.2}
        >
          <p className="lead">Consulta, hospital, diagnóstico y bienestar en un solo lugar, con emergencias las 24 horas.</p>
          <div className="acciones"><BotonWA amarillo>Escríbenos por WhatsApp</BotonWA></div>
        </ScrollExpand>
      </div>
      {servicios.map((s, i) => (
        <section key={s.titulo} className={`grupo ${i % 2 ? 'invierte' : ''}`}>
          <div className="grupo-texto">
            <h2 className="r">{s.titulo}</h2>
            <ul className="lista-grande">
              {s.items.map((it, k) => <li className="r" style={{ '--d': k % 4 }} key={it}>{it}</li>)}
            </ul>
          </div>
          <Foto id={fotoPor[i]} className="grupo-foto r" />
        </section>
      ))}
      <section className="urgencia">
        <h2 className="r">¿Dudas sobre un servicio?</h2>
        <div className="r" style={{ '--d': 1 }}>
          <p className="lead">Escríbenos y te respondemos por WhatsApp.</p>
          <div className="acciones"><BotonWA oscuro>Escríbenos por WhatsApp</BotonWA></div>
        </div>
      </section>
    </>
  )
}
