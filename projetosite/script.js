/*===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
1. Cadastrar doador
2. Listar doadores
3. Buscar doador por tipo sanguíneo
4. Buscar doador por data da última doação
5. Sair
Escolha uma opção:
*/

// Recebendo dados:

//cadastroDoador


const name = prompt("Qual seu nome?")
const yearsOld = Number(prompt("Qual sua idade?"))
const kg = prompt("Qual o seu peso?")
const typeBlood = prompt("Qual seu tipo sanguíneo?")
const lastDonation = prompt("Qual a data (dd/mm/aaaa) da sua última doação?")

const dadosDoador = {
    Nome: name,
    Idade: yearsOld,
    Peso: kg,
    TipoSanguíneo: typeBlood,
    lastDoação: lastDonation,
}
console.log(dadosDoador)






/*
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

console.log("------------------------")
console.log("Listagem de Doadores:")
console.log("----------------------------------------------------------------")
console.log("Nome" | "Idade" | "Peso" | "Tipo Sanguineo" + "última Doação" )
console.log("----------------------------------------------------------------")
*/

