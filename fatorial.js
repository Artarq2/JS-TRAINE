function fatorial(x) {
  for (let c = x - 1; c > 1; c--) {
    // C comneça em n-1 e vai até 2, decrementando, ja q  c x 1 é igual a c, ou seja, não altera o resultado.
    x *= c;
  }
  return x;
}

console.log(fatorial(4));

// RECURSIVIDADE - CHAMAR UMA FUNÇÃO DENTRO DE SI MESMA.

function fatorial1(n) {
  if (n == 1) {
    return 1; //  Retorna o valor para a função, ou seja, o resultado da função. No caso, quando n for igual a 1, a função retorna 1, que é o valor do fatorial de 1.
  }
  if (n > 1) {
    return n * fatorial1(n - 1); //  Retorna o valor de n multiplicado pelo resultado da função fatorial1 chamada com o argumento n-1.
  }
}

console.log(fatorial1(5)); // 120
// eu tinha feito a função usando console.log dentro da função, ai quando chamava a função, ela imprimia o resultado, mas não retornava nada, ou seja, o valor da função era undefined.

// Outra forma de fazer.

function fatorial2(n) {
  return n <= 1 ? 1 : n * fatorial2(n - 1);
}

console.log(fatorial2(6)); // 720
