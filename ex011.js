let idade = 15;
console.log(`voce tem ${idade} anos!`);
if (idade >= 18 && idade <= 65) {
  console.log("Voce é obrigado a votar!");
} else {
  if ((idade >= 16 && idade < 18) || idade > 65) {
    console.log("Voce pode escolher votar ou não!");
  } else {
    console.log("Voce não tem idade para votar!");
  }
}
// early return -- Otimização de código, evitando aninhamento de estruturas condicionais

let idade = 15;
console.log(`Você tem ${idade} anos!`);

function verificarVoto(idade) {
  if (idade < 16) {
    console.log("Você não tem idade para votar!");
    return;
  }

  if ((idade >= 16 && idade < 18) || idade > 65) {
    console.log("Você pode escolher votar ou não!");
    return;
  }

  console.log("Você é obrigado a votar!");
}

verificarVoto(idade);
