function configurarPaginacion(pagina, limite, mostrarOcultos) {
  const paginaFinal = Number(pagina) || 1;
  const limiteFinal = limite ?? 10;
  const ocultos = mostrarOcultos === "true" || mostrarOcultos === true;

  return `Página: ${paginaFinal} | Límite: ${limiteFinal} | Ocultos: ${ocultos}`;
}

// Pruebas
console.log(configurarPaginacion("", 0, "true"));
// Página: 1 | Límite: 0 | Ocultos: true

console.log(configurarPaginacion("3", undefined, false));
// Página: 3 | Límite: 10 | Ocultos: false

console.log(configurarPaginacion(null, 5, true));
// Página: 1 | Límite: 5 | Ocultos: true

console.log(configurarPaginacion(2, null, "false"));
// Página: 2 | Límite: 10 | Ocultos: false