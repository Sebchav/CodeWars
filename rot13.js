/*

ROT13 es un cifrado de sustitución de letras simple que reemplaza una letra
con la letra 13 después de ella en el alfabeto. ROT13 es un ejemplo del cifrado
César.

Cree una función que tome una cadena y devuelva la cadena cifrada con Rot13. Si
hay números o caracteres especiales incluidos en la cadena, deben devolverse tal
como están. Solo se deben cambiar las letras del alfabeto latino/inglés, como en
la "implementación" original de Rot13.


*/

function rot13(message) {
    const letrasOriginales = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const letrasCifradas = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
    
    let result = '';
  
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      const index = letrasOriginales.indexOf(char);
  
      if (index !== -1) {
        result += letrasCifradas[index];
      } else {
        result += char;
      }
    }
  
    return result;
  }
  
console.log(rot13("Hola!"));