// Arreglo original
const colorLoto = ['3BL', '4BL', '6BL', '6AM', '7AM', '3NG', '6NG', '2RJ', '1VD', '3AZ', '4AZ', '7AZ'];
// const baLoto = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42','43'];
// const colorLoto = ['1BL', '2BL', '3BL', '4BL', '5BL', '6BL', '3AM', '5AM', '6AM', '7AM','6NG', '7NG', '1RJ', '2RJ', '3RJ', '4RJ', '5RJ', '6RJ', '7RJ', '1VD', '2VD', '5VD', '6VD', '7VD', '3AZ', '4AZ', '5AZ', '7AZ'];
const baLoto = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42','43','44','45','46','47','48','49'];
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
    arregloCompleto = eval(nombreArreglo).slice(); // crear el respaldo del arreglo original
    for (let i = 0; i < numeroApostar; i++) {
        const elementoSeleccionado = seleccionarAleatorio(eval(arregloCompleto));
        resultados.push(elementoSeleccionado);
      }
      document.querySelector('.input-1').value=resultados;
 }
