const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {Assim

        :"você e preocupa em nunca se casar? ",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "afirmação"
            },
            {
                texto: "Isso não me incomoda!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "A vida adulta te assusta?",
        alternativas: [
            {
                texto: "sim, muito",
                afirmacao: "afirmação"
            },
            {
                texto: "não",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado:"quer casar cedo?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "afirmação"
            },
            {
                texto: "nao",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "voce tem amigos?",
        alternativas: [
            {
                texto: "nao",
                afirmacao: "afirmação"
            },
            {
                texto: "todos falsos",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "tem vontade de trabalhar?",
        alternativas: [
            {
                texto: "quem tem vontae disso?",
                afirmacao: "afirmação"
            },
            {
                texto: "nao, credo",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();