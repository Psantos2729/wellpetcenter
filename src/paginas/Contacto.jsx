import { BotonWA, Estado, Foto, tel, telHref } from '../componentes.jsx'
import { negocio } from '../contenido.js'

export default function Contacto() {
  return (
    <>
      <section className="cabecera">
        <h1 className="r">Estamos en la zona 10</h1>
        <p className="lead r" style={{ '--d': 1 }}>{negocio.direccion}, {negocio.ciudad}</p>
        <div className="r" style={{ '--d': 2 }}><Estado /></div>
      </section>
      <section className="contacto">
        <div className="r">
          <h2>Horarios</h2>
          <table className="horario">
            <tbody>
              {negocio.horarioFilas.map(([d, h]) => <tr key={d}><th scope="row">{d}</th><td>{h}</td></tr>)}
              <tr><th scope="row">Emergencias</th><td>24/7</td></tr>
            </tbody>
          </table>
        </div>
        <div className="r" style={{ '--d': 1 }}>
          <h2>Cómo contactarnos</h2>
          <p className="lead">Llama al <a href={telHref}>{tel}</a> o escribe por WhatsApp al {negocio.whatsappTexto}.</p>
          <div className="acciones">
            <BotonWA amarillo mensaje={negocio.mensajeEmergencia}>Emergencias 24/7</BotonWA>
            <BotonWA oscuro>Agendar consulta</BotonWA>
            <a className="boton" href={negocio.mapa} target="_blank" rel="noopener noreferrer">Cómo llegar en Waze</a>
          </div>
        </div>
        <Foto id="padre" className="contacto-foto r" />
      </section>
    </>
  )
}
