const historialServidor = [];

function registrarSesion(historial, modulos, huboCaida) {
  // Notación abreviada: la variable se llama igual que la propiedad
  const ModulosCargados = modulos;
  const caidaSistema = huboCaida;

  historial.push({ ModulosCargados, caidaSistema });
}

function obtenerModulosUnicos(historial) {
  const unicos = [];

  for (const sesion of historial) {
    for (const modulo of sesion.ModulosCargados) {
      if (!unicos.includes(modulo)) {
        unicos.push(modulo);
      }
    }
  }

  return unicos;
}

function diagnosticarModulo(historial, nombreModulo) {
  const resultado = {
    sinModuloSinCaida: 0,
    conModuloSinCaida: 0,
    sinModuloConCaida: 0,
    conModuloConCaida: 0,
  };

  for (const sesion of historial) {
    const tieneModulo = sesion.ModulosCargados.includes(nombreModulo);
    const cayo = sesion["caidaSistema"];

    if (!tieneModulo && !cayo) resultado.sinModuloSinCaida++;
    else if (tieneModulo && !cayo) resultado.conModuloSinCaida++;
    else if (!tieneModulo && cayo) resultado.sinModuloConCaida++;
    else resultado.conModuloConCaida++;
  }

  return resultado;
}

// Pruebas
registrarSesion(historialServidor, ["auth", "pagos", "perfil"], false);
registrarSesion(historialServidor, ["auth", "pagos"], true);
registrarSesion(historialServidor, ["auth", "reportes"], false);
registrarSesion(historialServidor, ["pagos", "perfil"], true);
registrarSesion(historialServidor, ["auth"], false);

console.log(historialServidor);

console.log(obtenerModulosUnicos(historialServidor));
// [ 'auth', 'pagos', 'perfil', 'reportes' ]

console.log(diagnosticarModulo(historialServidor, "pagos"));
// {
//   sinModuloSinCaida: 2,
//   conModuloSinCaida: 1,
//   sinModuloConCaida: 0,
//   conModuloConCaida: 2
// }