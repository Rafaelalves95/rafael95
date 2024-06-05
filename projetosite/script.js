//Painel de exibição:
let doadores = []

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
                //Chama prompts para salvar infos
                alert("Cadastrar doador");
                const name = prompt("Qual seu nome?")
                const yearsOld = Number(prompt("Qual sua idade?"))
                const kg = Number(prompt("Qual o seu peso?"))
                const bloodType = prompt("Qual seu tipo sanguíneo?").toUpperCase()
                const lastDonation = prompt("Qual a data (dd/mm/aaaa) da sua última doação?")
                //Faz push dos dados dos doadores
                doadores.push({name,yearsOld,kg,bloodType,lastDonation})
                //Mostra mensagem de cadastro concluído
                alert("Cadastro concluído com Sucesso!")
                break;
                //Cadastro de doador pronto! 
            
            case 2:
                alert("Lista de doadores!");
                    if (doadores.length === 0) {
                        alert("Nenhum doador cadastrado ainda.");
                    } else {
                    // Loop through the array and display each donor
                        for (let i = 0; i < doadores.length; i++) {
                            const currentDoador = doadores[i];
                            alert(`Doador ${i+1} de ${doadores.length}\nNome: ${currentDoador.name}\nIdade: ${currentDoador.yearsOld}\nPeso: ${currentDoador.kg}\nTipo Sanguíneo: ${currentDoador.bloodType}\nÚltima Doação: ${currentDoador.lastDonation}`);
                        }
                    }
                
                break;
  
            case 3:
                searchTypeblood();
                alert("Buscar doador por tipo sanguíneo");
                break;
            case 4:
                searchFordate();
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
function searchTypeblood(){
    if (doadores.lenght === 0){
        alert("Não existe doadores com este tipo sanguíneo!")
    }else{
        const buscaTiposangue = prompt("Digite o tipo sanguíneo!").toUpperCase()
        
        let message = ``
    
        for (let doador of doadores){
            if (doador.bloodType.includes(buscaTiposangue)){
            message += `\n Doador: ${doador.name}\n Nome: ${doador.yearsOld}\n Idade: ${doador.kg}\n Peso: ${doador.bloodType}\n Tipo Sanguíneo: ${doador.lastDonation}\n Última doação: \n`;
            }
        }
alert (message);
    }
}
function searchFordate(){
    if(doadores.length === 0){
        alert("Não existe doadores nessa data!")
    }

}


// Iniciando o sistema
painelSistema();


















