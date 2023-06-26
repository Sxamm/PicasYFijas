console.log('Bienvenido a Picas y Fijas debes obtener un numero de 3 digitos el cual los numeros no se repitan, buena suerte')

// Generar número secreto
function generarNumeroSecreto() {
  let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let secretNumber = '';

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    secretNumber += digits[randomIndex];
    digits.splice(randomIndex, 1);
  }

  return secretNumber;
}

// Comparar números y contar Picas y Fijas
function compararNumeros(numeroSecreto, numeroIngresado) {
  let picas = 0;
  let fijas = 0;

  for (let i = 0; i < 3; i++) {
    if (numeroIngresado[i] === numeroSecreto[i]) {
      fijas++;
    } else if (numeroSecreto.includes(numeroIngresado[i])) {
      picas++;
    }
  }

  console.log(`${picas} Picas y ${fijas} Fijas`);
  return fijas === 3; // Si todas las cifras son fijas, se ha adivinado el número secreto
}

// Juego principal
function jugarPicasYFijas() {
  const numeroSecreto = generarNumeroSecreto();
  let intentos = 0;
  let adivinado = false;

  while (!adivinado && intentos < 10) {
    const numeroIngresado = prompt('Ingresa un número de 3 dígitos:');
    
    if (numeroIngresado.length !== 3 || isNaN(numeroIngresado)) {
      console.log('Ingresa un número válido de 3 dígitos.');
      continue;
    }

    intentos++;
    adivinado = compararNumeros(numeroSecreto, numeroIngresado);
  }

  if (adivinado) {
    console.log('¡Felicidades! Has adivinado el número secreto.');
  } else {
    console.log(`Agotaste tus intentos. El número secreto era: ${numeroSecreto}`);
  }
}

// Ejecutar el juego
jugarPicasYFijas();