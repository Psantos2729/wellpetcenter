import { BotonWA } from '../componentes.jsx'
import SpotlightCard from '../reactbits/SpotlightCard/SpotlightCard.jsx'
import { equipo } from '../contenido.js'

export default function Equipo() {
  return (
    <>
      <section className="cabecera">
        <h1 className="r">Especialistas de confianza</h1>
        <p className="lead r" style={{ '--d': 1 }}>
          Dos médicos con posgrados en neurología, cardiología, anestesia y cuidados intensivos.
        </p>
      </section>
      {equipo.map((d, i) => (
        <section key={d.nombre} className={`doctor ${i % 2 ? 'oscuro' : 'claro'}`}>
          <h2 className="r">{d.nombre}</h2>
          <div className="doctor-cuerpo">
            {d.areas.map(([t, x], k) => (
              <div className="r" style={{ '--d': k }} key={t}>
                <SpotlightCard className="area" theme={i % 2 ? 'dark' : 'light'} spotlightColor={i % 2 ? '#f7dd16' : '#0b1f44'}
                  style={{ '--spotlight-card-surface': i % 2 ? '#14306b' : '#ffffff', '--spotlight-card-border': 'transparent', '--spotlight-card-shadow': 'none', borderRadius: 14 }}>
                  <h3>{t}</h3>
                  <p>{x}</p>
                </SpotlightCard>
              </div>
            ))}
            <p className="doctor-nota r">{d.texto}</p>
            <div className="r"><BotonWA amarillo={i % 2 === 1} mensaje={`Hola Wellpet Center, quiero agendar una cita con el ${d.nombre}.`}>Agendar con el {d.nombre}</BotonWA></div>
          </div>
        </section>
      ))}
    </>
  )
}
