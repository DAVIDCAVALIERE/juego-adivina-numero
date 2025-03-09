let numerosSorteados = [];
let numeroMaximo = 3;
let intentos = 0;
let numeroSecreto = generarNumero();

function asignarTexto(elemento, texto) {
  let elementoHtml = document.querySelector(elemento);
  elementoHtml.textContent = texto;
  return;
}

function generarNumero() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(numerosSorteados);
  if (numerosSorteados.length == numeroMaximo) {
    asignarTexto("p", `¡Ya se sortearon todos los numeros posibles!`);
    return;
  }
  if (numerosSorteados.includes(numeroGenerado)) {
    return generarNumero();
  }
  numerosSorteados.push(numeroGenerado);
  return numeroGenerado;
}

function limpiarCampo() {
  return (document.getElementById("valorUsuario").value = "");
}

function verificarIntento() {
  let numeroIngresado = parseInt(document.getElementById("valorUsuario").value);
  intentos++;
  if (numeroIngresado === numeroSecreto) {
    asignarTexto(
      "p",
      `¡Felicidades! Encontraste el numero secreto en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      }.`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
    return;
  }
  if (numeroIngresado < numeroSecreto) {
    asignarTexto("p", `¡El numero secreto es mayor!`);
  } else {
    asignarTexto("p", `¡El numero secreto es menor!`);
  }
  limpiarCampo();
}

function reiniciarJuego() {
  limpiarCampo();
  intentos = 0;
  asignarTexto("p", `¡Ingresa un numero del 1 al ${numeroMaximo}!`);
  document.getElementById("reiniciar").setAttribute("disabled", "true");
  numeroSecreto = generarNumero();
}

asignarTexto("h1", "Juego del numero secreto");
asignarTexto("p", `¡Ingresa un numero del 1 al ${numeroMaximo}!`);
