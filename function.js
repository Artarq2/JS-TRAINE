function parouimp(num) {
  if (num % 2 == 0) {
    console.log(`O número ${num} é par!`);
    return;
  }
  if (num % 2 != 0) {
    console.log(`O número ${num} é ímpar!`);
    return;
  }
}

parouimp(4);
parouimp(7);
parouimp(0);
parouimp(571);
parouimp(-2);

// Também é possível usar o operador ternário para simplificar a função, tornando-a mais concisa:

function parouimp1(num1) {
  const resultado = num1 % 2 === 0 ? "par" : "ímpar";
  console.log(`O número ${num1} é ${resultado}!`);
}

parouimp1(9);
parouimp1(16);

// Também é possível usar o operador ternário diretamente na string de template, sem precisar criar uma variável intermediária:

function parouimp2(num2) {
  console.log(`O número ${num2} é ${num2 % 2 === 0 ? "par" : "ímpar"}!`);
}

parouimp2(12);
parouimp2(15);

// Como também.

function parouimp3(num3) {
  if (num3 % 2 === 0) {
    return `O número ${num3} é par!`;
  } else {
    return `O número ${num3} é ímpar!`;
  }
}

console.log(parouimp3(8));
console.log(parouimp3(11));

// como também

function parouimp4(num4) {
  return `O número ${num4} é ${num4 % 2 === 0 ? "par" : "ímpar"}!`;
}

console.log(parouimp4(27));
console.log(parouimp4(30));

//Como também

function parouimp5(num5) {
  if (num5 % 2 === 0) {
    return `O número ${num5} é par!`;
  }
  return `O número ${num5} é ímpar!`;
}

console.log(parouimp5(14));
console.log(parouimp5(19));

//Como também

function parouimp6(num6) {
  if (num6 % 2 === 0) {
    return `O número ${num6} é par!`;
  }
  if (num6 % 2 != 0) {
    return `O número ${num6} é ímpar!`;
  }
}

console.log(parouimp6(22));
console.log(parouimp6(33));

// Existem várias formas de escrever a mesma função.
