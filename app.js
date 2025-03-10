let numerosSorteados = [];
let numeroMaximo = 3;
let intentos = 0;
let numeroSecreto = generarNumero();

function asignarTexto(elemento, texto) {
  document.querySelector(elemento).textContent = texto;
}

function generarNumero() {
  if (numerosSorteados.length === numeroMaximo) {
    asignarTexto("p", "¡Ya se sortearon todos los números posibles!");
    document.getElementById("reiniciar").setAttribute("disabled", "true");
    return null;
  }

  let numeroGenerado;
  do {
    numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  } while (numerosSorteados.includes(numeroGenerado));

  numerosSorteados.push(numeroGenerado);
  return numeroGenerado;
}

function limpiarCampo() {
  document.getElementById("valorUsuario").value = "";
}

function verificarIntento() {
  if (numeroSecreto === null) return;

  let numeroIngresado = parseInt(document.getElementById("valorUsuario").value);
  intentos++;

  numeroIngresado === numeroSecreto
    ? (asignarTexto(
        "p",
        `¡Felicidades! Encontraste el número secreto en ${intentos} ${
          intentos === 1 ? "intento" : "intentos"
        }.`
      ),
      document.getElementById("reiniciar").removeAttribute("disabled"))
    : asignarTexto(
        "p",
        `¡El número secreto es ${
          numeroIngresado < numeroSecreto ? "mayor" : "menor"
        }!`
      );

  limpiarCampo();
}

function reiniciarJuego() {
  limpiarCampo();
  // numerosSorteados = [];
  intentos = 0;
  asignarTexto("p", `¡Ingresa un número del 1 al ${numeroMaximo}! recuerde que el numero sorteado anterior ya no es valido`);
  document.getElementById("reiniciar").setAttribute("disabled", "true");
  numeroSecreto = generarNumero();
}

asignarTexto("h1", "Juego del número secreto");
asignarTexto("p", `¡Ingresa un número del 1 al ${numeroMaximo}!`);
