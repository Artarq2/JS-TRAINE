let num = [1, 20, 35, 4, 5];
console.log(num);

//Outra forma

let num1 = [1, 21, 34, 45, 5];
console.log(`O vetor num1 tem os valores ${num1}`);
// Ele imprime o vetor num1, mas usando uma string para mostrar os valores.

num1[5] = 6;
console.log(`O vetor num1 tem os valores ${num1}`);
// Ele adiciona o valor 6 na posição 5 do vetor num1 e imprime o vetor atualizado.

/* também é possivel usar o metodo push para adicionar
ao final do vetor, sem precisar se preocupar com a posição.
num1.push(valor);
*/

num1.push(7);
console.log(`O vetor num1 tem os valores ${num1}`);
// Ele adiciona o valor 7 ao final do vetor num1 e imprime o vetor atualizado
// Além de criar a nova chave com o valor.

num1.length;
console.log(`O vetor num1 tem ${num1.length} elementos!`);
// Ele retorna o tamanho do vetor num1, ou seja, a quantidade de elementos que ele possui. No caso, o resultado seria 7, pois o vetor tem os valores [1, 2, 3, 4, 5, 6, 7].

num1.sort();
// Ele ordena os elementos do vetor num1 em ordem crescente.
console.log(num1);

//Caso queira saber a posição de um elemento específico
console.log(num1[3]);

/* Para fazer ele falar todos os elementos do vetor, podemos usar um laço de repetição for

for (let pos = 0; pos < num1.length; pos++) {
  console.log(`A posição ${pos} do vetor num1 tem o valor ${num1[pos]}`);
}

*/

// Para usar mais facilmente podemos utilizar o for in, que é uma estrutura de repetição específica para vetores e objetos.
for (let pos in num1) {
  console.log(`A chave ${pos} do vetor num1 tem o valor ${num1[pos]}`);
}

// Para saber se tem um valor específico dentro do vetor, podemos usar o método indexOf, que retorna a posição do elemento no vetor ou -1 se ele não for encontrado.
let chave = num1.indexOf(5);
console.log(chave);
console.log(num1.indexOf(34));
console.log(num1.indexOf(100));
// Ele retorna a posição do valor 5 no vetor num1, que é 4. Se o valor não fosse encontrado, ele retornaria -1.
