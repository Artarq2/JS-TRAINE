let agora = new Date();
let hora = agora.getHours();
console.log(`Agora são exatamente ${hora} horas.`);
if (6 <= hora && hora < 12) {
  console.log("Bom dia!");
} else if (hora >= 12 && hora < 18) {
  console.log("Boa tarde!");
} else if (hora >= 18 && hora < 24) {
  console.log("Boa noite!");
} else {
  console.log("Boa madrugada!");
}

// Otimização de código, evitando aninhamento de estruturas condicionais
let agora = new Date();
let hora = agora.getHours();
console.log(`Agora são exatamente ${hora} horas.`);

function saudacao(hora) {
  if (hora < 6) return "Boa madrugada!";
  if (hora < 12) return "Bom dia!";
  if (hora < 18) return "Boa tarde!";
  return "Boa noite!";
}

console.log(saudacao(hora));
