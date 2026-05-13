# 🏥 API de Triagem Hospitalar Inteligente

> Um sistema de backend projetado para otimizar filas de pronto-socorro utilizando lógica de priorização baseada em sintomas.

## 💡 Sobre o Projeto
Este é um projeto prático desenvolvido para aplicar fundamentos de desenvolvimento backend e regras de negócio focadas no setor de **HealthTech**. 

A inspiração veio de um problema real: a longa e angustiante espera em urgências médicas. Este sistema visa agilizar a pré-triagem de pacientes simulando uma versão simplificada do **Protocolo de Manchester**. Em vez de tentar "diagnosticar" o paciente (evitando o efeito "Dr. Google"), a API faz uma leitura analítica e segura da gravidade dos sintomas relatados, classificando o risco do paciente para priorizar o atendimento humano de forma justa e eficiente.

## 🚀 Tecnologias Utilizadas
* **Lógica de Programação e Arquitetura**
* **JavaScript** 
* **Node.js** (Ambiente de execução backend)
* **Express** (Framework para construção das rotas e requisições HTTP)

## ⚙️ Funcionalidades e Regras de Negócio
- **Sistema Baseado em Regras (Rule-Based System):** A API cruza os sintomas enviados pelo paciente com um dicionário interno de gravidade médica.
- **Classificação Dinâmica:** O algoritmo analisa o grau máximo de risco. Se o paciente possui sintomas leves e graves, o laço de repetição é interrompido imediatamente (`break`) ao encontrar o sintoma mais crítico, poupando processamento e categorizando o paciente com a prioridade correta.
- **Níveis de Risco Implementados:**
  - 🔴 **Vermelho (Emergência):** Sintomas críticos (ex: perda de consciência, falta de ar severa).
  - 🟡 **Amarelo (Urgência):** Sintomas de alerta (ex: febre acima de 39°, dor abdominal intensa).
  - 🟢 **Verde (Pouco Urgente):** Sintomas leves (ex: coriza, tosse seca).

## 📡 Documentação da Rota (Endpoint)

### Rota de Entrada de Pacientes
- **Método:** `POST`
- **Caminho:** `/triagem`

**Exemplo de Requisição (JSON enviado pelo paciente/recepção):**
```json
{
  "nome": "João Silva",

```
## Exemplo de Resposta (A API processa a prioridade e devolve o status 200 OK):
```
{
  "mensagem": "Triagem concluída com sucesso!",
  "paciente": {
    "nome": "João Silva",
    "idade": 45,
    "sintomasRelatados": ["tosse seca", "falta de ar severa"],
    "classificacaoRisco": "Vermelho",
    "status": "Aguardando Atendimento"
  }
}

```
## 💻 Como rodar este projeto na sua máquina

1 - Clone este repositório:
```
  "idade": 45,
  "sintomas": ["tosse seca", "falta de ar severa"]
}
```
2- Acesse a pasta do projeto:
```
cd api-triagem-hospitalar

```
3- Instale as dependências:
```
npm install
```

4- Inicie o servidor:
```
node index.js

```
O servidor estará rodando em http://localhost:3000. Use ferramentas como Insomnia ou Postman para enviar as requisições para a rota /triagem.

Desenvolvido com dedicação por Filipe Balan - Estudante de Análise e Desenvolvimento de Sistemas focado em desenvolvimento Backend.
