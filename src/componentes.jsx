import { useEffect, useState } from 'react'
import { negocio, fotos } from './contenido.js'

export const rutas = [
  ['#/servicios', 'Servicios'],
  ['#/equipo', 'Equipo'],
  ['#/planes', 'Planes de salud'],
  ['#/contacto', 'Contacto'],
]

export const tel = `${negocio.telefono.slice(0, 4)}-${negocio.telefono.slice(4)}`
export const wa = (m = negocio.mensajeWA) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(m)}`

export function BotonWA({ children = 'Escríbenos por WhatsApp', mensaje, amarillo, oscuro }) {
  return (
    <a className={`boton${amarillo ? ' amarillo' : ''}${oscuro ? ' oscuro' : ''}`} href={wa(mensaje)} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export function Foto({ id, className = '', eager }) {
  const f = fotos[id]
  return (
    <img className={className} src={`./${f.src}`} alt={f.alt} width={f.w} height={f.h}
      style={{ objectPosition: f.pos }} loading={eager ? 'eager' : 'lazy'} />
  )
}

export function estadoAhora(fecha = new Date()) {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat('en-US', { timeZone: 'America/Guatemala', weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' })
      .formatToParts(fecha).map(x => [x.type, x.value]),
  )
  const min = Number(p.hour) * 60 + Number(p.minute)
  const cierre = p.weekday === 'Sat' ? 720 : p.weekday === 'Sun' ? 0 : 1020
  const abierto = cierre > 0 && min >= 480 && min < cierre
  return abierto
    ? `Abierto ahora: consulta general hasta las ${cierre === 720 ? '12:00' : '17:00'}. Emergencias 24/7.`
    : 'Consulta general cerrada ahora. Emergencias abiertas las 24 horas.'
}

export function Estado({ oscuro }) {
  const [t, setT] = useState(() => estadoAhora())
  useEffect(() => {
    const i = setInterval(() => setT(estadoAhora()), 60000)
    return () => clearInterval(i)
  }, [])
  return (
    <p className={`estado${oscuro ? ' oscuro' : ''}`} aria-live="polite">
      <span className="punto" aria-hidden="true" />{t}
    </p>
  )
}

export function Nav({ ruta }) {
  const [abierto, setAbierto] = useState(false)
  useEffect(() => setAbierto(false), [ruta])
  return (
    <header className="nav">
      <a className="marca" href="#/" aria-label="Wellpet Center, inicio">
        <img src="./logo.png" alt="" width="44" height="44" />
        <span>Wellpet Center</span>
      </a>
      <button className="menu-btn" aria-expanded={abierto} aria-controls="menu" onClick={() => setAbierto(!abierto)}>
        {abierto ? 'Cerrar' : 'Menú'}
      </button>
      <nav id="menu" className={abierto ? 'abierto' : ''} aria-label="Principal">
        {rutas.map(([h, t]) => (
          <a key={h} href={h} aria-current={ruta === h.slice(1) ? 'page' : undefined}>{t}</a>
        ))}
        <a className="boton amarillo chico" href={wa(negocio.mensajeEmergencia)} target="_blank" rel="noopener noreferrer">Emergencias 24/7</a>
      </nav>
    </header>
  )
}

export function Pie() {
  return (
    <footer className="pie">
      <div className="pie-notas">
        <p>{negocio.direccion}</p>
        <p>Lunes a viernes 8:00 - 17:00. Sábados 8:00 - 12:00. Domingos solo emergencias.</p>
        <p><a href={negocio.instagram} target="_blank" rel="noopener noreferrer">@wellpetcentergt</a></p>
        <a href="#/" onClick={() => window.scrollTo(0, 0)}>Volver arriba</a>
      </div>
      <a className="pie-tel r" href={`tel:+502${negocio.telefono}`}>{tel}</a>
      <p className="pie-ayuda">Llámanos o escribe por WhatsApp al 3928-9502. Atendemos emergencias las 24 horas.</p>
    </footer>
  )
}
