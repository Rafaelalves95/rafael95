//Painel de exibição:
// Variável global:
let abrigos = []

//Função que exibi o menu:
function exibirMenu() {
    const menu = "===== Abrigos temporários =====\n" +
                 "1. Cadastrar Abrigos\n" +
                 "2. Listar Abrigos\n" +
                 "3. Procurar Abrigo\n" +
                 "4. Sair do Sistema\n" +
                 "Digite o respectivo número para escolher uma opção!";
                return prompt(menu);
}
//Função que cria a interação com os comandos do usuário:
function painelSistema() {
    let opcao;
    do {
        opcao = exibirMenu();
        switch (parseInt(opcao)) {
            case 1:
                //Chama prompts para salvar informações
                //Recebe as informações de cadastro, conforme sua respectiva case abre o prompt para receber dados do usuário:
                alert("Cadastrar Abrigo");
                const name = prompt("Digite o nome do Abrigo!")
                const adress = prompt("Digite o endereço do Abrigo!")
                const telephone = prompt("Digite o telefone para contato do Abrigo!")
                const ability = prompt("Digite a capacidade do seu Abrigo!")
                const city = prompt("Digite a Cidade do Seu abrigo!").toLowerCase()
                //Faz push dos dados dos Abrigos
                //Com o comando .push salvamos os dados digitados pelo usuário:
                abrigos.push({name,adress,telephone,ability,city})
                //Exibi mensagem de cadastro concluído:
                alert("Cadastro concluído com Sucesso!")
                
                break;


            case 2:
                //Exibi mensagem antes de mostrar a lista de Abrigos:
                alert("Lista de Abrigos!");
                //Faz uma varredura para saber se há cadastros de Abrigos no sistema:
                    if (abrigos.length === 0) {
                        //Caso não haja cadastros vai exibir essa mensagem:
                        alert("Nenhum Abrigo cadastrado ainda.");
                        } else {
                        // Caso haja cadastros, será exibido organizadamente, conforme a concatenação de string abaixo, todos os usuários cadastrados:
                            for (let i = 0; i < abrigos.length; i++) {
                                const currentAbrigo = abrigos[i];
                                //Mensagem que exibi o resultado da Concatenação de string:
                                alert(`Abrigo ${i+1} de ${abrigos.length}\nNome do Abrigo: ${currentAbrigo.name}\nEndereço: ${currentAbrigo.adress}\nTelefone para contato: ${currentAbrigo.telephone}\nCapacidade do Abrigo: ${currentAbrigo.ability} Pessoas\nCidade do Abrigo: ${currentAbrigo.city}`);
                            }
                        }
    
                break;
                    
                    
            case 3:
                //Chama a função criada para buscar um Abrigo na sua cidade:
                searchCity();
                    alert("Volte ao menu!");
                    //Exibi a mensagem ao final da busca:
                    alert("Busca concluída!");
                break;

            case 4:
                //Exibi a mensagem ao sair do sistema:
                alert("Saindo do sistema...");
                break;
            default:
                //Mensagem caso o usuário escolha uma opção não existente:
                alert("Opção inválida. Por favor, tente novamente.");
        }
                    //O loop só será interrompido caso seja teclado 5, que é sair do sistema:
    } while (opcao !== '4');
}

function searchCity(){
        //Faz uma varredura para saber se há cadastros de Abrigos no sistema:
        if (abrigos.lenght === 0){
            //Caso não haja cadastros vai exibir essa mensagem:
            alert("Não Abrigos nessa cidade!")
            }else{
            //Abre o prompt para o usuário digitar a cidade que deseja buscar abrigo, detalhe é que o toLowerCase deixa todas letras minúsculas:
            const searchforCity = prompt("Digite a cidade que deseja buscar Abrigo!").toLowerCase()
    
            //Criando uma variável vazia chamada message:
            let message = ``
    
            //Cria-se uma nova variável abrigo para puxar os dados da variável global abrigos:
                for (let abrigo of abrigos){
                //Através da cidade cadastrada, esses dados serão exibidos organizadamente conforme a concatenação de string abaixo:
                    if (abrigo.city.includes(searchforCity)){
                    //Concatenação de string:
                    message += `\n Abrigo: ${abrigo.name}\n Nome do Abrigo: ${abrigo.adress}\n Endereço do Abrigo: ${abrigo.telephone}\n Telefone para contato: ${abrigo.ability}\n Capacidade do Abrigo: ${abrigo.city}\n Cidade do Abrigo: \n`;
                }
            }
    //Exibição de dados dos doadores que foram buscados pelo tipo sangíneo:
    alert (message);
    }
}
// Iniciando o sistem
painelSistema();

// | Developed by Rafael Alves de Souza | Créditos especiais: UM FORTE ABRAÇO PRO GORDINHO DO OUTFIT ! KKKk
