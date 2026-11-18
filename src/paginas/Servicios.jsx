import { BotonWA, Foto } from '../componentes.jsx'
import { servicios } from '../contenido.js'

const fotoPor = ['sintoma', 'sangre', 'senior', 'dolor']

export default function Servicios() {
  return (
    <>
      <section className="cabecera">
        <h1 className="r">Todo lo que tu mascota necesita</h1>
        <p className="lead r" style={{ '--d': 1 }}>
          Consulta, hospital, diagnóstico y bienestar en un solo lugar, con emergencias las 24 horas.
        </p>
      </section>
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
