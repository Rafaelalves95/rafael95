/*Exercício 2:
Crie duas variáveis que guardem dois números. Imprima na 
tela as seguintes mensagens:
*/

//1. O primeiro número é igual ao segundo? True/False

//Declaração de variáveis:

/*let primeiroNumero
let segundoNumero
let resultado
let diferenteSegundo
let maiorSegundo
let primeiroMenor

//Leituras de dados informados pelo usuário
primeiroNumero = prompt("Digite o primeiro número:")
segundoNumero = prompt("Digite o segundo número:")

//Teste de comparação
resultado = primeiroNumero === segundoNumero
diferenteSegundo = primeiroNumero !== segundoNumero
maiorSegundo = primeiroNumero > segundoNumero
primeiroMenor = primeiroNumero <segundoNumero
//Mostrar resultado na tela
alert(resultado)
alert(diferenteSegundo)
alert(maiorSegundo)
alert(primeiroMenor) 
*/

//Exercício 3
//Declaração de variáveis

/*
let a
let b
let c
let resultado
let resultado2
let resultado3
let resultado4

//Leitura de dados informados pelo usuário

a = true
b = false
c = true

//Realizando operação: a && b
resultado =  a && b
resultado2 = b && c
resultado3 =  a && c
resultado4 = a && b && c


//Executando na web
alert(resultado)
alert(resultado2)
alert(resultado3)
alert(resultado4)
*/

//Exercício 5:

//1=Declaração de variáveis:
let nome
let anoNascimento
let idade
let anoAtual
let maiorIdade
let idade2050


//Recebendo valores:

nome = prompt("Qual seu nome?")
anoAtual = prompt("Digite o ano atual!")
anoNascimento = prompt("Qual o seu ano de nascimento?")



//Calcula valores
idade = anoAtual - anoNascimento
maiorIdade = idade >= 18
idade2050 = 2050 - anoNascimento



//Mostra resultados na web:
alert(nome)
alert(idade)
alert(anoNascimento)
alert(maiorIdade)
alert(idade2050)
