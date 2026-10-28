function generarVentana(ancho, alto) {
  let resultado = "";

  for (let fila = 0; fila < alto; fila++) {
    for (let col = 0; col < ancho; col++) {
      const esBordeVertical = fila === 0 || fila === alto - 1;
      const esBordeHorizontal = col === 0 || col === ancho - 1;

      if (esBordeVertical && esBordeHorizontal) {
        resultado += "+";
      } else if (esBordeVertical) {
        resultado += "-";
      } else if (esBordeHorizontal) {
        resultado += "|";
      } else if (fila === 1) {
        resultado += "=";
      } else {
        resultado += " ";
      }
    }

    if (fila < alto - 1) {
      resultado += "\n";
    }
  }

  return resultado;
}

// Un único console.log al final
console.log(generarVentana(6, 5));