/*
//1= Declarando variáveis:
let idadeUsuario
let idadeBestamigo
let diferençaIdade
let idadeMaior
let diferençaConsole

//2= Recebendo valores:

idadeUsuario =  Number(prompt("Qual sua idade"))
idadeBestamigo = Number(prompt("Qual idade do seu melhor amigo(a)?"))

//3- Calculando valores:
diferençaIdade = idadeUsuario - idadeBestamigo
idadeMaior = idadeUsuario > idadeBestamigo
diferençaConsole = idadeUsuario - idadeBestamigo


//4- Resultado web:
alert(diferençaIdade)
alert(idadeMaior)
alert(diferençaConsole)

//5- Resultado console:
console.log(diferençaIdade)
console.log(idadeMaior)
console.log(diferençaConsole)

*/

//Exercício 2:
/*
//1-Declarando variáveis:
let numeroPar

//2-Recebendo valores:

//3- Calculando valores
numeroPar = prompt("Digite um número par!")

//4- Resultado web:
alert(numeroPar)

//5- Resultado concole:
console.log((numeroPar%2)==0)
//c) Você notou um padrão?  Sim, o resultado somente positivo e true.
//d) O que acontece se o usuário inserir um número ímpar? Exibe false no console.


//Exercício 3:


//1- Declaração de variáveis:
let idadeAnos
let idadeMeses
let idadeDias
let idadeHoras

//2- Recebendo Valores:
idadeAnos = prompt("Digite sua idade em anos!")

//3- Calcule Valores:
idadeMeses = idadeAnos * 12
idadeDias = idadeAnos * 365
idadeHoras = idadeAnos * (365*24)

//4- Mostra resultado web.
alert(idadeAnos)
alert(idadeMeses)
alert(idadeDias)
alert(idadeHoras)
/*

<<<<<<< HEAD
  
=======
//1- Declaração de variáveis:
>>>>>>> 0c1d4a25871eda04c749efac3f0bd91d5b7a3a5c
let numeroUm
let numeroDois
let numMaior
let igual
let divisível

//2- Recebendo valores:
numeroUm = Number(prompt("Digite número1"))
numeroDois = Number(prompt("Digite número2"))

//3- Calculando valores:
numMaior = numeroUm > numeroDois
igual = numeroUm == numeroDois

//4- Resultado no console:
console.log(numeroUm)
console.log(numeroDois)
console.log((numeroUm%numeroDois)==0)
console.log((numeroDois%numeroUm)==0)
<<<<<<< HEAD
*/

//Inicio da aula:
//Exercício 1:
/* Crie um programa que peça ao usuário para inserir o seu 
nome e sua cor favorita e imprima a mensagem: 
"A cor favorita de FULANO é COR"

let nome
let corFavorita
let mensagemDois

nome = prompt("Qual seu nome?")
corFavorita = prompt("Qual sua cor favorita?")

mensagemUm = `A cor favorita de ${nome} é ${corFavorita}`

alert(mensagemUm)
console.log(mensagemUm)

let nome
let corFavorita
let mensagemDois

nome = prompt("Qual seu nome?")
corFavorita = prompt("Qual sua cor favorita?")

mensagemDois = " A cor favorita de " + nome + " é " + corFavorita 

alert(mensagemDois)
console.log(mensagemDois)
/*
//Exemplo prof:
let nome = prompt("Digite seu nome?")
let cor = prompt("Digite sua cor favorita?")
//Mostra mensagem:
alert("A cor favorita de " + nome + " é " + cor)
alert( `A cor favorita de ${nome} é ${cor}`)
console.log( `A cor favorita de ${nome} é ${cor}`)
*/

//Exercício 2:
/*Peça para o usuário escrever uma frase e imprima no console 
a frase alterada, com:
● Todas as letras maiúsculas;
● Na língua do i (substituindo a vogal "o" por "i");
● O tamanho da frase.


let frase

frase = prompt("Digite uma frase?")

console.log(frase.toUpperCase())
console.log(frase.replaceAll("o","i"))
console.log(frase.length)
*/

/*Exercício 3:
● Crie um array com pelo menos 5 raças de cachorro
● Peça para o usuário inserir um número de 0 a 4
● Imprima no console a raça correspondente à posição 
escolhida pelo usuário

const number = prompt("Digite um número de 0 a 4!")
const raçaDog = ["Pitbull", "Doberman", "Rottweiler", "Dogo Canário", "Dogo Argentino"]
const numberDigit = raçaDog[number]
console.log(numberDigit)*/


/* Exercício 4:

Para este exercício, comece criando um array com os 
valores: 1, 2, 3, 4, 5 e 6.
1. Determine o tamanho do array OK
2. Adicione o número 7 ok 
3. Remova os números 4 e 5
4. Determine o novo tamanho do array*/

let números = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(números.length) 
números.push(7)
números.splice(5,6)
console.log(números.lenght)
console.log(números)




=======

*/
>>>>>>> 0c1d4a25871eda04c749efac3f0bd91d5b7a3a5c
