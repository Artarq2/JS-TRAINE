let x = 50;
function teste() {
  while (x > 0) {
    console.log(`O valor de x é ${x}`);
    x++;
  }
}
teste();

// O código acima tem um loop infinito, pois a variável x está sendo incrementada dentro do loop, o que faz com que a condição x > 0 seja sempre verdadeira. Para corrigir isso, você pode alterar a condição para x < 50 ou decrementar x dentro do loop.
// Estrutura de repetição com teste lógico no início

let y = 25;
do {
  console.log(`O valor de y é ${y}`);
} while (y > 0);

// Estrutura de repetição com teste logico no final

for (let i = 12; i >= 0; i--) {
  console.log(`O valor de i é ${i}`);
}

// Estrutura de repetição com teste lógico no início
