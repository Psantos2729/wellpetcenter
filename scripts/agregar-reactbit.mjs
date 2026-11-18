#!/usr/bin/env node
/* Agrega CUALQUIER componente de React Bits al proyecto con un comando.
   Uso:   npm run reactbit -- <Nombre> [Variante]
   Ej.:   npm run reactbit -- BlurText            (variante JS-CSS por defecto: JavaScript + CSS, sin Tailwind)
          npm run reactbit -- Aurora JS-CSS
   Variantes: JS-CSS (recomendada aquí), JS-TW, TS-CSS, TS-TW. Los nombres están en https://reactbits.dev
   Qué hace: baja el componente del registro público de React Bits, lo guarda en src/reactbits/<Nombre>/,
   instala sus dependencias (gsap, motion, three, ogl...) y te dice cómo importarlo. Solo Node 18+, sin librerías.
   Licencia: MIT + Commons Clause. Úsalo en las webs de tus clientes; no revendas ni repartas los componentes. */
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join } from 'node:path';

const [nombre, variante = 'JS-CSS'] = process.argv.slice(2);
if (!nombre) { console.error('Falta el nombre. Ej.: npm run reactbit -- BlurText'); process.exit(1); }
if (!/^[A-Za-z0-9]+$/.test(nombre) || !/^(JS|TS)-(CSS|TW)$/.test(variante)) {
  console.error('Nombre o variante inválidos (variantes: JS-CSS, JS-TW, TS-CSS, TS-TW).'); process.exit(1);
}
const archivo = `${nombre}-${variante}.json`;
const fuentes = [
  `https://reactbits.dev/r/${archivo}`,
  `https://raw.githubusercontent.com/DavidHDev/react-bits/main/public/r/${archivo}`
];

let reg, usada;
for (const url of fuentes) {
  try { const r = await fetch(url); if (r.ok) { reg = await r.json(); usada = url; break; } } catch { /* siguiente fuente */ }
}
if (!reg) { console.error(`No encontré ${archivo}. Revisa el nombre exacto en reactbits.dev (respeta mayúsculas).`); process.exit(1); }

const destino = join('src', 'reactbits', nombre);
mkdirSync(destino, { recursive: true });
for (const f of reg.files ?? []) {
  const base = f.path.split('/').pop();
  writeFileSync(join(destino, base), f.content, 'utf8');
  console.log('  +', join(destino, base));
}

const deps = reg.dependencies ?? [];
if (deps.length) {
  const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
  const faltan = deps.filter((d) => !(pkg.dependencies?.[d.split('@')[0]] || pkg.devDependencies?.[d.split('@')[0]]));
  if (faltan.length) { console.log('Instalando dependencias:', faltan.join(' ')); execSync(`npm install ${faltan.join(' ')}`, { stdio: 'inherit' }); }
}
if ((reg.registryDependencies ?? []).length) {
  console.log('\nOJO: este componente pide otras piezas del registro:', reg.registryDependencies.join(', '));
  console.log('Agrégalas con el mismo comando si son de React Bits; si son de shadcn, usa la variante JS-CSS.');
}
const principal = (reg.files ?? []).find((f) => /\.(jsx|tsx)$/.test(f.path))?.path.split('/').pop() ?? `${nombre}.jsx`;
console.log(`\nListo (${usada}).\nImpórtalo así:\n  import ${nombre} from '../reactbits/${nombre}/${principal}';`);
console.log('Revisa las props en https://reactbits.dev/ (pestaña del componente) y respeta la licencia (LICENSE-react-bits.md).');
