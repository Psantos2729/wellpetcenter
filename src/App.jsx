import { negocio, servicios, fotos } from './contenido.js'

function BotonWA({ children = 'Escríbenos por WhatsApp', mensaje = negocio.mensajeWA, urgente }) {
  const href = `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`
  return (
    <a className={urgente ? 'boton urgente' : 'boton'} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export default function App() {
  return (
    <>
      <header className="hero">
        <img className="logo" src="./logo.png" alt="Logo de Wellpet Center" width="72" height="72" />
        <p className="kicker">{negocio.tipo} · {negocio.zona}</p>
        <h1>{negocio.nombre}</h1>
        <p className="lead">{negocio.eslogan}</p>
        <div className="acciones">
          <BotonWA urgente mensaje={negocio.mensajeEmergencia}>{negocio.emergencias}</BotonWA>
          <BotonWA>Agendar consulta</BotonWA>
        </div>
      </header>
      <main>
        <section id="servicios">
          <h2>Servicios</h2>
          <div className="grid">
            {servicios.map(s => (
              <article key={s.titulo}>
                <h3>{s.titulo}</h3>
                <ul>{s.items.map(i => <li key={i}>{i}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>
        {fotos.length > 0 && (
          <section id="galeria">
            <h2>Galería</h2>
            <div className="grid fotos">
              {fotos.map(f => <img key={f.archivo} src={`./fotos/${f.archivo}`} alt={f.alt} loading="lazy" />)}
            </div>
          </section>
        )}
        <section id="contacto" className="contacto">
          <div>
            <h2>Horarios</h2>
            <dl>
              {negocio.horario.map(([d, h]) => (
                <div key={d}><dt>{d}</dt><dd>{h}</dd></div>
              ))}
            </dl>
            <p><strong>{negocio.emergencias}</strong></p>
          </div>
          <div>
            <h2>Visítanos</h2>
            <p>{negocio.direccion}</p>
            <p><a href={`tel:+502${negocio.telefono}`}>Tel. {negocio.telefono.replace(/(\d{4})(\d{4})/, '$1-$2')}</a></p>
            <p><a href={negocio.mapa} target="_blank" rel="noopener noreferrer">Cómo llegar (Waze)</a></p>
          </div>
        </section>
      </main>
      <footer><a href={negocio.instagram} target="_blank" rel="noopener noreferrer">@wellpetcentergt</a></footer>
    </>
  )
}
