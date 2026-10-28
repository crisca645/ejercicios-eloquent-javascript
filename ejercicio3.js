function crearControladorIntentos(maximoIntentos, accionNombre) {
  let contador = 0; // privado: solo la función retornada lo puede ver

  return function (reiniciar = false) {
    if (reiniciar === true) {
      contador = 0;
      return "Contador reiniciado";
    }

    contador++;

    if (contador <= maximoIntentos) {
      return `Ejecutando ${accionNombre} - Intento ${contador} de ${maximoIntentos}`;
    }

    return `Bloqueado: Se superó el límite de ${maximoIntentos} intentos para ${accionNombre}`;
  };
}

// Pruebas
const intentarLogin = crearControladorIntentos(3, "login");

console.log(intentarLogin()); // Ejecutando login - Intento 1 de 3
console.log(intentarLogin()); // Ejecutando login - Intento 2 de 3
console.log(intentarLogin()); // Ejecutando login - Intento 3 de 3
console.log(intentarLogin()); // Bloqueado: Se superó el límite de 3 intentos para login
console.log(intentarLogin(true)); // Contador reiniciado
console.log(intentarLogin()); // Ejecutando login - Intento 1 de 3

// Cada controlador tiene su propio contador
const enviarFormulario = crearControladorIntentos(1, "enviar formulario");
console.log(enviarFormulario()); // Ejecutando enviar formulario - Intento 1 de 1
console.log(enviarFormulario()); // Bloqueado: Se superó el límite de 1 intentos para enviar formulario