import { useEffect, useState } from 'react';
/* Lee una variable CSS del tema (por ejemplo --oscuro) para pasarla a componentes que la piden como prop. */
export function useVarCss(nombre, respaldo = '#000000') {
  const [v, setV] = useState(respaldo);
  useEffect(() => { const x = getComputedStyle(document.documentElement).getPropertyValue(nombre).trim(); if (x) setV(x); }, [nombre]);
  return v;
}
