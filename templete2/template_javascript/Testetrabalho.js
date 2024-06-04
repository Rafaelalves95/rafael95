const doadores = [];

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

function cadastrarDoador() {
    const name = prompt("Qual seu nome?");
    const yearsOld = Number(prompt("Qual sua idade?"));
    const kg = Number(prompt("Qual o seu peso?"));
    const typeBlood = prompt("Qual seu tipo sanguíneo?");
    const lastDonation = prompt("Qual a data (dd/mm/aaaa) da sua última doação?");
    
    const doador = {
        Nome: name,
        Idade: yearsOld,
        Peso: kg,
        TipoSanguineo: typeBlood,
        DataUltimaDoacao: lastDonation
    };

    doadores.push(doador);
    alert("Cadastro concluído com Sucesso!");
}
/*
function listarDoadores() {
    if (doadores.length === 0) {
        alert("Nenhum doador cadastrado.");
    } else {
        let listaDoadores = "Lista de Doadores:\n";
        doadores.forEach((doador, index) => {
            listaDoadores += `${index + 1}. Nome: ${doador.Nome}, Idade: ${doador.Idade}, Peso: ${doador.Peso}, Tipo Sanguíneo: ${doador.TipoSanguineo}, Data da Última Doação: ${doador.DataUltimaDoacao}\n`;
        });
        alert(listaDoadores);
    }
}

function buscarPorTipoSanguineo() {
    const tipo = prompt("Digite o tipo sanguíneo desejado:");
    const filtrados = doadores.filter(doador => doador.TipoSanguineo === tipo);
    
    if (filtrados.length === 0) {
        alert("Nenhum doador encontrado com esse tipo sanguíneo.");
    } else {
        let resultado = "Resultado da Busca por Tipo Sanguíneo:\n";
        filtrados.forEach(doador => {
            resultado += `Nome: ${doador.Nome}, Idade: ${doador.Idade}, Peso: ${doador.Peso}, Tipo Sanguíneo: ${doador.TipoSanguineo}, Data da Última Doação: ${doador.DataUltimaDoacao}\n`;
        });
        alert(resultado);
    }
}

function buscarPorDataUltimaDoacao() {
    const data = prompt("Digite a data desejada (dd/mm/aaaa):");
    const [diaDesejado, mesDesejado, anoDesejado] = data.split('/');
    const dataDesejada = new Date(`${anoDesejado}-${mesDesejado}-${diaDesejado}`);
    
    const filtrados = doadores.filter(doador => {
        const [dia, mes, ano] = doador.DataUltimaDoacao.split('/');
        const dataDoador = new Date(`${ano}-${mes}-${dia}`);
        return dataDoador < dataDesejada;
    });

    if (filtrados.length === 0) {
        alert("Nenhum doador encontrado antes dessa data.");
    } else {
        let resultado = "Resultado da Busca por Data da Última Doação:\n";
        filtrados.forEach(doador => {
            resultado += `Nome: ${doador.Nome}, Idade: ${doador.Idade}, Peso: ${doador.Peso}, Tipo Sanguíneo: ${doador.TipoSanguineo}, Data da Última Doação: ${doador.DataUltimaDoacao}\n`;
        });
        alert(resultado);
    }
}
*/
function painelSistema() {
    let opcao;
    do {
        opcao = exibirMenu();
        switch (parseInt(opcao)) {
            case 1:
                cadastrarDoador();
                break;
            case 2:
                listarDoadores();
                break;
            case 3:
                buscarPorTipoSanguineo();
                break;
            case 4:
                buscarPorDataUltimaDoacao();
                break;
            case 5:
                alert("Saindo do sistema...");
                break;
            default:
                alert("Opção inválida. Por favor, tente novamente.");
        }
    } while (opcao !== '5');
}

// Iniciar o sistema
painelSistema();
