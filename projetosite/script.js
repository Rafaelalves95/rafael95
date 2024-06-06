//Painel de exibição:
// Variável global:
let doadores = []

//Função que exibi o menu:
function exibirMenu() {
    const menu = "===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====\n" +
                 "1. Cadastrar doador\n" +
                 "2. Listar doadores\n" +
                 "3. Buscar doador por tipo sanguíneo\n" +
                 "4. Buscar doador por data da última doação\n" +
                 "5. Sair\n" +
                 "Escolha uma opção:";
                 "Digite o respectivo número para escolher uma opção!";
    return prompt(menu);
}

// Menu de exeibição pronto! 

//Função que cria a interação com os comandos do usuário:
function painelSistema() {
    let opcao;
    do {
        opcao = exibirMenu();
        switch (parseInt(opcao)) {
            case 1:
                //Chama prompts para salvar infos
                //Ao digitar 1, 2, 3, 4 ou 5, conforme sua respectiva case abre o prompt para receber dados do usuário:
                alert("Cadastrar doador");
                const name = prompt("Qual seu nome?")
                const yearsOld = Number(prompt("Qual sua idade?"))
                const kg = Number(prompt("Qual o seu peso?"))
                const bloodType = prompt("Qual seu tipo sanguíneo?").toUpperCase()
                const lastDonation = prompt("Qual a data (dd/mm/aaaa) da sua última doação?")
                //Faz push dos dados dos doadores
                //Com o comando .push salvamos os dados digitados pelo usuário:
                doadores.push({name,yearsOld,kg,bloodType,lastDonation})
                //Mostra mensagem de cadastro concluído
                //Exibi mensagem de cadastro concluído:
                alert("Cadastro concluído com Sucesso!")
                break;
                //Cadastro de doador pronto! 


            case 2:
                //Exibi mensagem antes de mostrar a lista de doadores:
                alert("Lista de doadores!");
                //Faz uma varredura para saber se há cadastros de doadores no sistema:
                    if (doadores.length === 0) {
                        //Caso não haja cadastros vai exibir essa mensagem:
                        alert("Nenhum doador cadastrado ainda.");
                    } else {
                    // Loop through the array and display each donor
                    // Caso haja cadastros, será exibido organizadamente, conforme a concatenação de string abaixo, todos os usuários cadastrados:
                        for (let i = 0; i < doadores.length; i++) {
                            const currentDoador = doadores[i];
                            //Mensagem que exibi o resultado da Concatenação de string:
                            alert(`Doador ${i+1} de ${doadores.length}\nNome: ${currentDoador.name}\nIdade: ${currentDoador.yearsOld}\nPeso: ${currentDoador.kg}\nTipo Sanguíneo: ${currentDoador.bloodType}\nÚltima Doação: ${currentDoador.lastDonation}`);
                        }
                    }

                break;

            case 3:
                //Chama a função criada para fazer uma busca conforme o tipo sanguíneo:
                searchTypeblood();
                alert("Buscar doador por tipo sanguíneo");
                //Exibi a mensagem ao final da busca:
                alert("Busca concluída!");
                break;
            case 4:
                //Chama a função criada para fazer uma busca conforme a data da última doação:
                searchFordate();
                alert("Buscar doador por data da última doação");
                //Exibi a mensagem ao final da busca:
                alert("Buscar concluída!");
                break;
            case 5:
                //Exibi a mensagem ao sair do sistema:
                alert("Saindo do sistema...");
                break;
            default:
                //Mensagem caso o usuário escolha uma opção não existente:
                alert("Opção inválida. Por favor, tente novamente.");
        }
        //O loop só será interrompido caso seja teclado 5, que é sair do sistema:
    } while (opcao !== '5');
}
//Entra na função de busca por tipo sanguíneo:
function searchTypeblood(){
    //Faz uma varredura para saber se há cadastros de doadores no sistema:
    if (doadores.lenght === 0){
        //Caso não haja cadastros vai exibir essa mensagem:
        alert("Não existe doadores com este tipo sanguíneo!")
    }else{
        //Abre o prompt para o usuário digitar o tipo sanguíneo que deseja buscar, detalhe é que o toUpperCase deixa todas letras maiúsculas:
        const buscaTiposangue = prompt("Digite o tipo sanguíneo!").toUpperCase()

        //Criando uma variável vazia chamada message:
        let message = ``

        //Cria-se uma nova variável doador para puxar os dados da variável global doadores:
        for (let doador of doadores){
            //Através do tipo sanguíneo, esses dados serão exibidos organizadamente conforme a concatenação de string abaixo:
            if (doador.bloodType.includes(buscaTiposangue)){
                //Concatenação de string:
            message += `\n Doador: ${doador.name}\n Nome: ${doador.yearsOld}\n Idade: ${doador.kg}\n Peso: ${doador.bloodType}\n Tipo Sanguíneo: ${doador.lastDonation}\n Última doação: \n`;
            }
        }
//Exibição de dados dos doadores que foram buscados pelo tipo sangíneo:
alert (message);
    }
}
//Entra na função de busca por data da última doação:
function searchFordate(){
    //Faz uma varredura para saber se há cadastros de doadores no sistema:
    if(doadores.length === 0){
        //Caso não haja cadastros vai exibir essa mensagem:
        alert("Não existe doadores nessa data!")
    }else{
        //Abre um prompt para o usuário digitar a data da última doação que deseja buscar: 
        const buscaData = prompt("Digite a data da sua última doação!")
        //Criando uma variável vazia chamada msg: 
        let msg = ``
        //Cria-se uma nova variável doador para puxar os dados da variável global doadores:
        for (let doador of doadores){
            //Através da data da última doação, esses dados serão exibidos organizadamente conforme a concatenação de string abaixo:
            if (doador.lastDonation.includes(buscaData)){
                //Concatenação de string:
                msg += `\n Doador: ${doador.name}\n Nome: ${doador.yearsOld}\n Idade: ${doador.kg}\n Peso: ${doador.bloodType}\n Tipo Sanguíneo: ${doador.lastDonation}\n Última doação: \n`;
            }
        }
//Exibição de dados dos doadores que foram buscados pela data da última doação:
alert(msg)
    }

}


// Iniciando o sistema
// Iniciando o sistem
painelSistema();


// | Developed by Rafael Alves de Souza | Créditos especiais: UM FORTE ABRAÇO PRO GORDINHO DO OUTFIT ! KKKK