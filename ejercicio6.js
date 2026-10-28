const inventario = [
  { id: 1, nombre: "Teclado Mecánico", precio: 100, stock: 5 },
  { id: 2, nombre: "Monitor 27", precio: 300, stock: 2 },
  { id: 3, nombre: "Mouse Gamer", precio: 50, stock: 0 },
];

function aplicarDescuentoTemporada(listaProductos, porcentajeDescuento) {
  const resultado = [];

  for (const producto of listaProductos) {
    if (producto.stock > 0) {
      // Copia superficial: nuevo objeto con las mismas propiedades
      const copia = Object.assign({}, producto);

      copia.precio = producto.precio - (producto.precio * porcentajeDescuento) / 100;
      copia.enOferta = true;

      resultado.push(copia);
    }
  }

  return resultado;
}

// Pruebas
const nuevoInventario = aplicarDescuentoTemporada(inventario, 10);

console.log(nuevoInventario);
// [
//   { id: 1, nombre: 'Teclado Mecánico', precio: 90, stock: 5, enOferta: true },
//   { id: 2, nombre: 'Monitor 27', precio: 270, stock: 2, enOferta: true }
// ]

console.log(inventario[0].precio === 100);        // true (el original no cambió)
console.log(inventario[0] == nuevoInventario[0]); // false (son objetos distintos)
console.log(inventario[0].enOferta);              // undefined (el original no tiene la propiedad)
console.log(inventario.length);                   // 3 (el original sigue completo)