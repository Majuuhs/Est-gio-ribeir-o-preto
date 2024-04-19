//questão 2
function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;
  
    while (b < numero) {
      let temp = a;
      a = b;
      b = temp + b;
    }
  
    return b === numero;
  }
  
  let numero = parseInt(prompt("Informe um número: "));
  if (verificaFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
  