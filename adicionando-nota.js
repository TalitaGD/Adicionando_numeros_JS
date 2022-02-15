//IMAGINE QUE UM PROFESSOR CALCULOU A MÉDIA DE 4 ALUNOS, PORÉM, ERAM PRA 
//SER 5 ALUNOS...COMO ADICIONAR ESSA MÉDIA FALTANTE?

const notas = [10, 6, 8];
notas.push(2, 3);
console.log (notas);

let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length;
console.log (media)