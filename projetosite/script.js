//Painel de exibição:

function exibirMenu() {
    const menu = "===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====\n" +
                 "1. Cadastrar doador\n" +
                 "2. Listar doadores\n" +
                 "3. Buscar doador por tipo sanguíneo\n" +
                 "4. Buscar doador por data da última doação\n" +
                 "5. Sair\n" +
                 "Escolha uma opção:";
    return prompt(menu);
}
// Menu de exeibição pronto! 

function painelSistema() {
    let opcao;
    do {
        opcao = exibirMenu();
        switch (parseInt(opcao)) {
            case 1:
                alert("Cadastrar doador");
                const name = prompt("Qual seu nome?")
                const yearsOld = Number(prompt("Qual sua idade?"))
                const kg = prompt("Qual o seu peso?")
                const typeBlood = prompt("Qual seu tipo sanguíneo?")
                const lastDonation = prompt("Qual a data (dd/mm/aaaa) da sua última doação?")
                const doadores = [name, yearsOld, kg, typeBlood, lastDonation]
                doadores.push()
                alert("Cadastro concluído com Sucesso!")
                
                break;
 //Cadastro de doador pronto! 
            case 2:
                alert("Lista de doadores!")
                /*const doadores = [name, yearsOld, kg, typeBlood, lastDonation]
                    doadores.push()*/
                    const mensagem = "===== Listagem de doadores =====\n" +
                    "Nome:" + name + "|" + "idade:" + yearsOld + "|" + "Peso:" + "|" + kg + "|" + "Tipo Sanguíneo:" + typeBlood + "|" + "Data da Última doação:" + lastDonation
                    console.log(mensagem)
  
                break;
            case 3:
                alert("Buscar doador por tipo sanguíneo");
                break;
            case 4:
                alert("Buscar doador por data da última doação");
                break;
            case 5:
                alert("Saindo do sistema...");
                break;
            default:
                alert("Opção inválida. Por favor, tente novamente.");
        }
    } while (opcao !== '5');
}

// Iniciando o sistema
painelSistema();




















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
*/
