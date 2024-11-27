// Arreglo original
const colorLoto = ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'N1', 'N2', 'N3', 'N4', 'N5', 'N6', 'N7', 'R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'Z1', 'Z2', 'Z3', 'Z4', 'Z5', 'Z6', 'Z7'];
const baLoto = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42','43'];
const miLoto = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39'];
const superBalota = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
// Arreglo para almacenar los resultados
let resultados = [];
let arregloCompleto = [];
// Función para seleccionar y eliminar un elemento aleatorio
function seleccionarAleatorio(array) {
  const indiceAleatorio = Math.floor(Math.random() * array.length);
  const elementoSeleccionado = array[indiceAleatorio];
  array.splice(indiceAleatorio, 1); // Elimina el elemento del arreglo
  return elementoSeleccionado;
}

function mezclar(nombreArreglo, numeroApostar){
    resultados = [];
    arregloCompleto = eval(nombreArreglo).slice();
    for (let i = 0; i < numeroApostar; i++) {
        const elementoSeleccionado = seleccionarAleatorio(eval(nombreArreglo));
        resultados.push(elementoSeleccionado);
      }
      eval(nombreArreglo) = arregloCompleto.slice();  
      document.querySelector('.input-1').value=resultados;
 }
