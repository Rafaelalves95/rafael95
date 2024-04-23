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
*/

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










