import { useEffect, useState } from 'react'
import { Nav, Pie } from './componentes.jsx'
import Inicio from './paginas/Inicio.jsx'
import Servicios from './paginas/Servicios.jsx'
import Equipo from './paginas/Equipo.jsx'
import Planes from './paginas/Planes.jsx'
import Contacto from './paginas/Contacto.jsx'

const paginas = {
  '/': [Inicio, 'Wellpet Center GT | Hospital veterinario en zona 10, emergencias 24/7'],
  '/servicios': [Servicios, 'Servicios | Wellpet Center GT'],
  '/equipo': [Equipo, 'Equipo médico | Wellpet Center GT'],
  '/planes': [Planes, 'Planes de salud | Wellpet Center GT'],
  '/contacto': [Contacto, 'Contacto y horarios | Wellpet Center GT'],
}

const rutaActual = () => {
  const r = window.location.hash.replace(/^#/, '') || '/'
  return paginas[r] ? r : '/'
}

export default function App() {
  const [ruta, setRuta] = useState(rutaActual)
  useEffect(() => {
    const f = () => { setRuta(rutaActual()); window.scrollTo(0, 0) }
    window.addEventListener('hashchange', f)
    return () => window.removeEventListener('hashchange', f)
  }, [])
  const [Pagina, titulo] = paginas[ruta]
  useEffect(() => {
    document.title = titulo
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { threshold: 0.12 })
    const t = setTimeout(() => document.querySelectorAll('.r:not(.in)').forEach(el => io.observe(el)), 30)
    return () => { clearTimeout(t); io.disconnect() }
  }, [ruta, titulo])
  return (
    <>
      <Nav ruta={ruta} />
      <main key={ruta}><Pagina /></main>
      <Pie />
    </>
  )
}
