/*let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)


const frase = prompt("Digite uma frase")

alert(frase)
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)


let nome 
let eMail

nome = prompt("Qual seu nome?")
eMail = prompt("Qual seu e-mail?")

const frase = "O e-mail " +  eMail  +  " foi cadastrado com sucesso."   +  " Seja bem-vinda(o), "  + nome +  "!"

console.log(frase)

const listaComidas = ["Pizza", "Lasanha", "Xis", "batatafrita", "massa"]
const fraseComida = "Essa são minhas comidas favoritas!" 

const perguntaUsuario = prompt("Qual sua comida favorita?")
listaComidas[1] = perguntaUsuario

console.log(fraseComida)
console.log(listaComidas[0] + "\n" + listaComidas[1] + "\n" + listaComidas[2] + "\n" + listaComidas[3] + "\n" + listaComidas[4] )


const listaDetarefas = [] 

perguntaUm = prompt("Digite uma tarefa que você vai fazer hoje?")
perguntaDois = prompt("Diga mais uma tarefa!")
perguntaTres = prompt("Digite sua última tarefa hoje!")

listaDetarefas .push(perguntaUm)
listaDetarefas .push(perguntaDois)
listaDetarefas .push(perguntaTres)

escolhaUmatarefa = prompt("Digite um índiuce de uma tarefa?")
listaDetarefas.splice(escolhaUmatarefa,1)

console.log(listaDetarefas)


//Exercício 1: Condicionais.

let num1
let num2

num1 = prompt("Digite um número!")
num2 = prompt("Digite mais um número!")

//const iguais = num1 === num2
//const diferentes = num1 !== num2
//const maior = num1 > num2
//const menor = num1 < num2

//Iguais:
if (num1 == num2){
    alert("Números iguais!")
    console.log("Sucesso!")
} else {
    console.log("Fracasso!")
}

//Diferente:

if (num1 !== num2){
    alert("Números diferentes!")
    console.log("Diferente")
} else {
    console.log("É igual")
}

//Maior:

if (num1 > num2){
    alert("Maior!")
    console.log("Maior")
} else {
    console.log("Menor")
}

//Menor:

if (num1 < num2){
    alert("Menor!")
    console.log("Menor")
} else {
    console.log("Maior")
}

//Finalizando exercício 1,2,3.

//Exercício 4:


const pokemon = prompt("Escolha dentre Bulbassauro, Charmander ou Squirtle, para saber seu tipo!")

switch (pokemon){
    case 'Bulbassauro':
        console.log("Planta e Veneno")
        break
    case 'Charmander':
        console.log("Fogo")
        break
    case 'Squirtle':
        console.log("Água")
        break
}


//Exercício 5:

alert("Responda Sim ou Não!")
const ensinoMedio = prompt("Você concluiu o ensino médio?")
const maior18 = prompt("Você é maior de 18 anos?")
const cursandoFac = prompt("Você está cursando outra faculdade?")

if((ensinoMedio == "Sim") && (maior18 == "Sim") && (cursandoFac == "Não")) {
console.log("Você está pronto para estudar na nossa faculdade!")
}
else{
    console.log("Lamentamos, mas você não está apto!")
}


//Exercícios de escrita de Código:

1-

let idade

idade = Number(prompt("Qual sua idade?"))

let idadeUsuário
if(idadeUsuário > 18){  
    console.log("Você pode dirigir")

} else {
     console.log("Você não pode dirigir.")
}


//2:

alert("Digite seu turno! M (matutino) ou V (Vespertino) ou N (Noturno)")

const seuTurno = prompt("Digite seu turno!")
if(seuTurno == "M"){
    console.log("Bom Dia!")
} else if(seuTurno == "V"){
    console.log("Boa Tarde!")
} else if(seuTurno == "N"){
    console.log("Boa noite!")
}

alert("Digite seu turno! M (matutino) ou V (Vespertino) ou N (Noturno)")

const seuTurno = prompt("Digite seu turno!")

switch(seuTurno){
    case 'M':
        console.log("Bom dia!")
        break
    case 'V':
        console.log("Bom Tarde!")
        break
    case 'N':
        console.log("Boa noite!")
        break
}

let generoFilme
let preçoIngresso

generoFilme = prompt("Qual gênero do filme?")
preçoIngresso = Number(prompt("Qual o preço do ingresso?"))
generoFilme = generoFilme.toUpperCase()

if((generoFilme == "FANTASIA") && (preçoIngresso < 15)){
    console.log("Bom filme!")
}
else {
    console.log("Escolha outro filme!")
}

//Exercício 1:
// Declarando variáveis:
let numeros = 0
let resultado = 0
//Inicializa:
numeros = Number(prompt("Digite alguns números!"))
//Inicializa loop:
while (numeros !== 0){
    //Soma valores:
    resultado = resultado + numeros
    //Lê valores para somar:
    numeros = Number(prompt("Digite alguns números!"))
}
console.log(resultado)
alert(resultado)

//Exercício 2:

let array = [11, 15, 18, 14, 12, 13]
let maiorValor = 0

for(let i = 0 ; i <= 6 ; i++){
    if (array[i] > maiorValor){
        maiorValor = array[i]
    }

}
alert(maiorValor)
console.log(maiorValor)

//Exerccício 3: Aula laço:

const array = ["Oi", "sumido(a)", "tudo", "bem?", "Saudades"]
let frase = ""
for(let i of  array){
    frase = frase + i + " "
}
console.log(frase)

Exercício 1: Laços.
/*
let quantidade = Number(prompt("Quantos bichinhos de estimação você tem?"))
let nomePet = []

if (quantidade === 0){
    console.log( "Que pena! Você pode adotar um pet!")
} 
else if (quantidade > 0){
    for (let i = 0; i < quantidade; i++){
        let nome = prompt("Digite o nome dos seus pet's!")
        nomePet.push(nome)
        //quantidadeMaior = quantidadeMaior + i +" "
    }
}
for (let i = 0; i < quantidade; i++){
    console.log(nomePet[i])
}


//Exercício 2:


//a) Escreva um programa que imprime cada um dos valores do array original.

/*
let arrayOriginal = [1, 2, 3, 4]
numeroArray = arrayOriginal.length
for(let i = 0; i < numeroArray; i++){
    alert(arrayOriginal[i])
}
let number = 0
for(let i = 0; i < numeroArray; i++){
    number = arrayOriginal[i]/10
    alert(number)
}

let novoArray = []
for(let i = 0; i < numeroArray; i++){
    number = arrayOriginal[i]%2
    if (number == 0){
        alert(arrayOriginal[i])
    }
}


let arrayNovo = [20, 40, 50, 77]
const valores = arrayNovo[4]
console.log(arrayNovo)



b) Escreva um programa que imprime cada um dos valores do array original divididos por 10

c) Escreva um programa que crie um novo array contendo, somente, 
os números pares do array original e imprima esse novo array
const novoArray = []

d) Escreva um programa que crie um novo array contendo strings,
 da seguinte forma: "O elemento do índex i é: numero". Depois, imprima este novo array.
for(let i = numero)
let numero

e) Escreva um programa que imprima no console o maior e o menor números contidos no array original



let arrayNovo = [20, 40, 50, 77]
const valores = arrayNovo[4]
console.log(arrayNovo)
    
    function encontrarMaiorMenor(arrayNovo) {
        if (array.length === 0) {
            return [null, null];
        }
        
        let maior = menor = arrayNovo[0];
        
        for (let i = 1; i < arrayNovo.length; i++) {
            if (array[i] > maior) {
                maior = arrayNovo[i];
            } else if (arrayNovo[i] < menor) {
                menor = arrayNovo[i];
            }
        }
        
        return [maior, menor];
    }

<<<<<<< HEAD
    
    //1) Copie, cole e execute o seguinte código chamado ORDENAÇÃO POR FORÇA BRUTA:

    //Declaração de variáveis em escopo global (Boas Práticas)
    let arrayNumerico = []
    let tamanhoArray = 0
    
    //Função de ordenação por Força Bruta
    function arrayBruteForceSort(){
        let temp = 0
        for(let i = 0; i < tamanhoArray - 1; i++){
            for(let j = 0; j < tamanhoArray - 1; j++){
                if(arrayNumerico[j] > arrayNumerico[j + 1]){
                    temp = arrayNumerico[j]
                    arrayNumerico[j] = arrayNumerico[j + 1]
                    arrayNumerico[j + 1] = temp
                }
            }
        }
    }
    
    //Inicialização de valores
    arrayNumerico = [1,0,3,2,5,4,7,6,9,8,11,10,13,12,15,14,17,16,19,18,21,20,23,22,25,24,27,26,29,28,31,30,33,32,35,34,37,36,39,38,41,40,43,42,45,44,47,46,49,48,51,50]
    tamanhoArray = arrayNumerico.length
    //Compara tempo de execução
    let inicio = performance.now()
    arrayBruteForceSort()
    let fim = performance.now()
    //Escreve array ordenado no console e tempo de execução
    console.log("A ordenação foi executava em: ",(fim-inicio)," ms")
    console.log(arrayNumerico)


    //Declaração de Variáveis (Boas Práticas)
let arrayNumerico = []
let tamanhoArray = 0

//Função de ordenação por Inserção
function arrayInsertionSort(){
    let temp = 0
    for (let i = 1; i < tamanhoArray; i++){
	    temp = arrayNumerico[i]
	    j=i-1
	    //arrayNumerico[0] = temp
	    while (temp < arrayNumerico[j]){
            arrayNumerico[j+1] = arrayNumerico[j]
            j--
        }
        arrayNumerico[j+1] = temp
    }
}

//Inicialização de valores
arrayNumerico = [1,0,3,2,5,4,7,6,9,8,11,10,13,12,15,14,17,16,19,18,21,20,23,22,25,24,27,26,29,28,31,30,33,32,35,34,37,36,39,38,41,40,43,42,45,44,47,46,49,48,51,50]
tamanhoArray = arrayNumerico.length
//Compara tempo de execução
let inicio = performance.now()
arrayInsertionSort()
let fim = performance.now()
//Escreve array ordenado no console e tempo de execução
console.log("A ordenação foi executava em: ",(fim-inicio)," ms")
console.log(arrayNumerico)
*/
=======

//Exercício 1:

function imprimirOlaMundo(){
    console.log("Olá Mundo!")
}
imprimirOlaMundo()


//Exercício 2:

function imprimeNome (nome){
    console.log(`Olá ${nome}`)
    }
let nomeUser
let nomePai
let nomeMae

nomeUser = prompt("Digite seu nome!")
imprimeNome(nomeUser)

nomePai= prompt("Digite o nome do seu pai!")
imprimeNome(nomePai)

nomeMae = prompt("Digite o nome da sua mãe!")
imprimeNome(nomeMae)


//Exercício 3:



function somaUm(num1, num2){
    let soma = num1 + num2 
    return soma
}
let numero1 = Number(prompt("Digite um número!"))
let numero2 = Number(prompt("Digite outro número!"))

resultado = somaUm(numero1,numero2)
alert(resultado)
console.log(resultado)
>>>>>>> 57c8fffc67804f1306a81ee4b5c321e47719b1d2


//Exercício 4:
function trataArray(input){
    let array = []

    array.push((input[0]/2))
    array.push((input[(input.length-1)]/2))
    return array
}
let array = [2,3,4,5,6,7,8]
let novoArray = []
novoArray = trataArray(array)
alert(novoArray)


function frase(){
    let nome = ("Rafael")
    let idade = ("29")
    let ondeMora = ("São Leopoldo")
    let profissao = ("Estudante")
    console.log(`Eu sou ${nome}, e tenho ${idade} anos, moro em ${ondeMora}, e sou ${profissao}.`)
}
frase()

function recebendoValores(nome,idade,ondeMora,profissao){
    return frase ="Eu sou" + nome + " e tenho " + idade + "anos, e moro em" + ondeMora + ", e sou" + profissao + "."
   
 }
 let nome = prompt("Digite seu nome!")
 let idade = prompt("Digite sua idade!")
 let ondeMora = prompt("Onde você mora?")
 let profissao = prompt("Qual sua profissao")
 const mensagem = recebendoValores(nome,idade,ondeMora,profissao)
 console.log(mensagem)


function numbers(num1,num2){
    return soma = num1 + num2

}
let resultado = numbers(1,1)
console.log(resultado)
numbers()

function twoNumbers(numberOne,numberTwo){
    if(numberOne >= numberTwo){
        return true
    }else {
        return false

    }
    
}
const result= twoNumbers(1,1)
console.log(result)

function twoNumbers(numberOne){
    if(numberOne%2==0){
        return true

    }else {
        return false

    }
    
}
const result= twoNumbers(10)
console.log(result)

function trocaArray(mensagem){
    let tamArray = mensagem.length
    let novoArray = mensagem.toUpperCase()
    alert(`${tamArray}   ${novoArray}`)
}
let mensagem = prompt("Digite uma mensagem!")
trocaArray(mensagem)

*/
/*
const professor = {
    nome: "Vitor",
    idade: 27,
    email: 'vitor@gmail.com'
   }
   console.log(professor["nome"]) 

const filme = {
    diretores: "Chris Columbus, Alfonso Cuarón, Mike Newell e David Yates",
    nome: "HarryPotter",
    anoLançamento: 2009,
    listaElenco: "Daniel Radcliffe como Harry Potter, Rupert Grint como Ron Weasley, Emma Watson como Hermione Granger, Robbie Coltrane como Rúbeo Hagrid, Alan Rickman como Severo Snape, Maggie Smith como Minerva McGonagall, Tom Felton como Draco Malfoy, Helena Bonham Carter como Bellatrix Lestrange, Ralph Fiennes como Lord Voldemort",
    visto: "Sim!",
   }
filme.diretores = "Chris Columbus",
filme.nome = "HarryPotter",
filme.anoLançamento = 2009,
filme.listaElenco = "Daniel Radcliffe como Harry Potter"
filme.visto = "Sim!"
filme.nomePersonagens = "Harry Potter, Hermione Granger, Ronald Weasley"

filme.Listaelenco[0] = "Xuxa"

let mensagem = ""
for(let i = 0; i <=2; i++){
    mensagem = mensagem + filme.Listaelenco[i] + "-" + filme.nomePersonagens[i] + "\n"

}
console.log(mensagem)


console.log(filme.diretores)
console.log(filme.nome)
console.log(filme.anoLançamento)
console.log(filme["listaElenco"])
console.log(filme["visto"])






const pessoa = {
    nome: "Vitor",
    idade: 27,
    generoMusical: "Rock",
   }

   frase = "O nome da pessoa é " + pessoa.nome +  " ela tem " + pessoa.idade + " anos e gosta muito de " + pessoa.generoMusical
   console.log(frase) 

*/