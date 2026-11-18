import { BotonWA } from '../componentes.jsx'
import SpotlightCard from '../reactbits/SpotlightCard/SpotlightCard.jsx'
import { planes } from '../contenido.js'

export default function Planes() {
  return (
    <>
      <section className="cabecera">
        <h1 className="r">Planes de salud para cada etapa</h1>
        <p className="lead r" style={{ '--d': 1 }}>
          Vacunas, desparasitaciones, consultas y exámenes incluidos. El precio de cada plan se confirma por WhatsApp.
        </p>
      </section>
      {planes.map((p, i) => (
        <section key={p.nombre} className={`plan campo${i % 3}`}>
          <h2 className="r">Plan {p.nombre}</h2>
          <div className="r" style={{ '--d': 1 }}>
            <SpotlightCard className="area" theme={i % 3 === 0 ? 'dark' : 'light'} spotlightColor={i % 3 === 0 ? '#f7dd16' : '#0b1f44'}
              style={{ '--spotlight-card-surface': i % 3 === 0 ? '#14306b' : '#ffffff', '--spotlight-card-border': 'transparent', '--spotlight-card-shadow': 'none', borderRadius: 14 }}>
            <ul className="lista-plan">{p.items.map(it => <li key={it}>{it}</li>)}</ul>
            <BotonWA amarillo={i % 3 === 2} oscuro={i % 3 !== 2} mensaje={`Hola Wellpet Center, quiero información del plan ${p.nombre}.`}>
              Preguntar por este plan
            </BotonWA>
            </SpotlightCard>
          </div>
        </section>
      ))}
    </>
  )
}
