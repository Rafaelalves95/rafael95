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
*/

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
