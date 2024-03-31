// exercicio com if e else calculando media escolar
const nota1 = 10;
const nota2 = 5;
const nota3 = 7;

const NotaMedia = (nota1 + nota2 + nota3) / 3;

if (NotaMedia < 5) {
    console.log('Reprovado!')
} 
else if (NotaMedia >= 5 && NotaMedia <= 7) {
    console.log('Está de recuperação!')
} 
else {
    console.log('Aprovado!')
}