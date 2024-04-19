function inverteString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  let string = prompt("Informe uma string: ");
  let stringInvertida = inverteString(string);
  console.log("String invertida:", stringInvertida);