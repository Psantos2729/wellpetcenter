import { BotonWA, Estado, Foto, telHref } from '../componentes.jsx'
import { negocio } from '../contenido.js'
import Galeria3D from '../componentes/Galeria3D.jsx'

export default function Inicio() {
  return (
    <>
      <section className="hero">
        <h1 className="hero-h1">
          <span className="r" style={{ '--d': 0 }}>Tu mascota en</span>{' '}
          <span className="tira" aria-hidden="true"><Foto id="sintoma" eager /></span>
          <span className="r" style={{ '--d': 1 }}>mejores manos</span>
        </h1>
        <figure className="tira-movil" aria-hidden="true"><Foto id="sintoma" eager /></figure>
        <div className="hero-pie">
          <p className="lead r" style={{ '--d': 2 }}>
            Hospital veterinario en zona 10 con cardiología, neurología, cirugía y cuidados intensivos.
          </p>
          <div className="r" style={{ '--d': 3 }}>
            <div className="acciones">
              <BotonWA amarillo mensaje={negocio.mensajeEmergencia}>Emergencias 24/7</BotonWA>
              <BotonWA oscuro>Agendar consulta</BotonWA>
            </div>
            <Estado />
          </div>
        </div>
      </section>

      <section className="parrafo">
        <p className="r">
          Cardiología que cuida el corazón de tu mascota<Foto id="dolor" className="inline" />,
          neurología para los diagnósticos difíciles<Foto id="senior" className="inline" /> y cirugía con
          anestesia balanceada y cuidados intensivos<Foto id="sangre" className="inline" />, todo bajo un mismo techo.
        </p>
        <a className="enlace r" href="#/servicios">Ver todos los servicios</a>
      </section>

      <section className="urgencia">
        <h2 className="r">Si es una emergencia, no esperes</h2>
        <div className="r" style={{ '--d': 1 }}>
          <p className="lead">Atendemos las 24 horas, todos los días. Escríbenos o llámanos y te decimos cómo llegar.</p>
          <div className="acciones">
            <BotonWA oscuro mensaje={negocio.mensajeEmergencia}>Escribir por WhatsApp</BotonWA>
            <a className="boton" href={telHref}>Llamar {negocio.telefono}</a>
          </div>
        </div>
      </section>

      <section className="dos">
        <a className="bloque r" href="#/equipo">
          <h2>Dos especialistas al frente</h2>
          <p>Neurología, anestesia, cardiología, medicina interna y nefrología.</p>
          <span className="enlace">Conoce al equipo</span>
        </a>
        <a className="bloque campo r" href="#/planes" style={{ '--d': 1 }}>
          <h2>Planes de salud para cada etapa</h2>
          <p>Para gatos cachorros, perros adultos y perros geriátricos.</p>
          <span className="enlace">Ver los planes</span>
        </a>
      </section>

      <Galeria3D />
    </>
  )
}
