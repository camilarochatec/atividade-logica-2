// passo 1: obter as notas passo 2: calcular média passo 3: mostrar a mensagem

function calcularMedia (event){
    event.preventDefault();
 let nota1 = parseInt (document.getElementById('nota1').value);
 let nota2 = parseInt (document.getElementById('nota1').value);
 let nota3 = parseInt (document.getElementById('nota1').value);
 let display = document.getElementById('display');

 let media = (nota1 + nota2 + nota3) / 3;
 media = media.toFixed(2);
 
 let mensagem = '';

 if (media >= 7){
    mensagem = 'aprovado';
 } else if (media >= 5 && media < 7){
    mensagem = 'você ficou de recuperação';
 }else{
    mensagem = 'você foi reprovado';
 }
 display.innerHTML =`A sua média foi ${media}. ${mensagem}`;
}
