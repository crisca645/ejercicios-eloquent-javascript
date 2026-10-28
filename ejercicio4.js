function encontrarRutaAcceso(nivelObjetivo, nivelBloqueado) {
  function buscar(actual, historial) {
    if (actual === nivelBloqueado) return null; // cae en el nivel bloqueado
    if (actual > nivelObjetivo) return null;    // se pasó del objetivo
    if (actual === nivelObjetivo) return historial; // llegó

    return (
      buscar(actual * 2, `(${historial} * 2)`) ??
      buscar(actual + 3, `(${historial} + 3)`)
    );
  }

  return buscar(1, "1");
}

// Pruebas
console.log(encontrarRutaAcceso(13, 99));
// (((1 + 3) * 2) + 3)

console.log(encontrarRutaAcceso(8, 99));
// ((1 + 3) + 3) no llega a 8; busca otra rama

console.log(encontrarRutaAcceso(13, 8));
// la ruta anterior pasa por 8, así que debe buscar otra o dar null

console.log(encontrarRutaAcceso(2, 99));
// (1 * 2)

console.log(encontrarRutaAcceso(5, 4));
// null si no hay ruta sin pasar por 4