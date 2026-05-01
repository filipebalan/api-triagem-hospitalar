// 1. Importo a ferramenta 'express' que instalei
const express = require('express'); 

// 2. Crio o aplicativo (API) chamando a função do express
const app = express();

// --- DICIONÁRIO DE SINTOMAS (Baseado no Protocolo de Manchester) ---
const riscoVermelho = ["dor no peito irradiando", "perda de consciência", "falta de ar severa"];
const riscoAmarelo = ["febre acima de 39", "dor abdominal intensa", "fratura exposta"];
const riscoVerde = ["dor de cabeça leve", "coriza", "tosse seca"];

// 3. Ensino a API a entender dados no formato JSON (que será a "ficha do paciente")
app.use(express.json());

// 4. Defino uma "porta" no computador por onde as informações vão entrar e sair
const PORT = 3000;

// Rota de Triagem Inteligente
app.post('/triagem', (req, res) => {
    const fichaDoPaciente = req.body; 
    
    // Começamos assumindo que o paciente é um caso leve
    let corTriagem = "Azul"; 

    // LÓGICA DE NEGÓCIO: Vamos varrer a lista de sintomas que o paciente enviou
    for (let sintoma of fichaDoPaciente.sintomas) {
        
        // Se o sintoma estiver na lista Vermelha, é gravíssimo!
        if (riscoVermelho.includes(sintoma)) {
            corTriagem = "Vermelho";
            break; // O 'break' para a busca. Afinal, se achou sintoma vermelho, já é prioridade máxima.
        } 
        // Se não for vermelho, mas estiver na Amarela, a prioridade sobe para Amarelo
        else if (riscoAmarelo.includes(sintoma)) {
            corTriagem = "Amarelo";
            // Repare que aqui NÃO tem o 'break'. Porque ele pode ter febre (amarelo), 
            // mas o próximo sintoma da lista dele ser "falta de ar" (vermelho), então o sistema precisa continuar checando.
        }
        // Se estiver na lista Verde
        else if (riscoVerde.includes(sintoma) && corTriagem !== "Amarelo") {
            corTriagem = "Verde";
        }
    }

    // Preparamos a ficha atualizada para devolver ao painel do hospital
    const pacienteTriado = {
        nome: fichaDoPaciente.nome,
        idade: fichaDoPaciente.idade,
        sintomasRelatados: fichaDoPaciente.sintomas,
        classificacaoRisco: corTriagem,
        status: "Aguardando Atendimento"
    };

    console.log("Paciente triado com sucesso:", pacienteTriado);

    // Devolvemos a ficha atualizada
    res.status(200).json({
        mensagem: "Triagem concluída com sucesso!",
        paciente: pacienteTriado
    });
});

// 5. Ligo o servidor e peço para ele ficar "escutando" essa porta
app.listen(PORT, () => {
    console.log(`🏥 Sistema de Triagem rodando na porta ${PORT}`);
});