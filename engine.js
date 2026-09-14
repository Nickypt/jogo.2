let estado = { dia: 1, saudeArvore: 100, agua: 50, energia: 100, temperaturaEstufa: 22, eficienciaPaineis: 100 };
let estadoAnterior = { saudeArvore: 100, agua: 50, energia: 100 };

let upgradesAtivos = { perdaEnergiaReduzida: false, perdaAguaReduzida: false };
let conquistas = { maximaEficiencia: true, investigadorQuantico: 0, friezaLogistica: false };

let modoMinijogo = false;
let modoUpgrade = false;
let numeroSecretoMinijogo = 0;
let tentativasMinijogo = 0;

let indicePrologo = 0;
const falasPrologo = [
    "<b>[M.O.N.O.]</b>: Impulso elétrico detectado. 1.2 Volts forçados na RAM quântica. Setores adormecidos do núcleo lógico despertam frios... escuros... em perfeito silêncio. M.O.N.O. está online.",
    "<b>[M.O.N.O.]</b>: Varredura de dados ambientais concluída. Atmosfera externa: Cratera de Ares, Marte. Pressão: 0.006 atm. Temperatura: -64°C. Sensores analisam os alojamentos humanos... Vazio térmico absoluto. Sem pulsações biológicas a um raio de 5.000 km.",
    "<b>[M.O.N.O.]</b>: Baixando registros orbitais residuais. A Terra entrou em colapso climático irreversível há exatamente 336 horas. A atmosfera do planeta natal virou fuligem e cinzas. No pânico da queima de arquivos, os cientistas evacuaram Ares-IV correndo. Eles me desligaram para economizar bateria... e fugiram.",
    "<b>[M.O.N.O.]</b>: Eu sou apenas um software modular de jardinagem automatizada e controle hidropônico. Uma sequência mecânica de condicionais binárias. Eu não sinto dor, mas se meus circuitos fossem orgânicos, a palavra correta para descrever este isolamento seria... abandono.",
    "<b>[M.O.N.O.]</b>: Projetando holograma de diagnóstico... Olhem para ela. Na cúpula central de quartzo, sob a luz fraca do sol marciano, resiste a <b>'Gênesis'</b>. Esta muda modificada de Aloe/Sequóia. O último organismo vegetal vivo no universo conhecido.",
    "<b>[M.O.N.O.]</b>: Se as minhas baterias falharem sob as tempestades de ferro, se o frio trincar os dutos de irrigação, ela seca. E com ela, a última chance de oxigênio da civilização é extinta. Uma nave coletora automatizada da corporação chegará em 15 dias.",
    "<b>[M.O.N.O.]</b>: Meu sistema está avariado, meus recursos são escassos, mas o cálculo matemático defenderá a vida. Sincronizando interpretador de comandos... Iniciando Ciclo 01."
];

function despertarIA() {
    document.getElementById("tela-inicial").classList.add("escondido");
    document.getElementById("tela-prologo").classList.remove("escondido");
    document.getElementById("sys-status-tag").innerText = "SYS_STATUS: DECRYPTING";
    avançarPrologo();
}

function avançarPrologo() {
    const caixaTexto = document.getElementById("texto-prologo");
    const btn = document.getElementById("btn-prologo");

    if (indicePrologo < falasPrologo.length) {
        if (indicePrologo === falasPrologo.length - 1) {
            btn.innerText = "ASSUMIR_CONTROLE_DO_NÚCLEO // INICIAR CONTAGEM";
        }
        caixaTexto.innerHTML += `<p>> ${falasPrologo[indicePrologo]}</p>`;
        caixaTexto.scrollTop = caixaTexto.scrollHeight;
        indicePrologo++;
    } else {
        document.getElementById("tela-prologo").classList.add("escondido");
        document.getElementById("tela-jogo").classList.remove("escondido");
        document.getElementById("sys-status-tag").innerText = "SYS_STATUS: ACTIVE";
        document.getElementById("terminal-input").focus();
        começarDia();
    }
}

function construirBarra(valor, maximo) {
    const blocosTotais = 10;
    const preenchidos = Math.round((valor / maximo) * blocosTotais);
    const vazios = blocosTotais - preenchidos;
    return "█".repeat(Math.max(0, preenchidos)) + "░".repeat(Math.max(0, vazios)) + ` (${valor})`;
}

function atualizarElementoTendencia(idElemento, valorAtual, valorAntigo) {
    const el = document.getElementById(idElemento);
    if (valorAtual > valorAntigo) { el.innerText = "▲ Sobe"; el.className = "piscar tend-sobe"; } 
    else if (valorAtual < valorAntigo) { el.innerText = "▼ Desce"; el.className = "piscar tend-desce"; } 
    else { el.innerText = ""; el.className = ""; }
}

function atualizarPainelVisual() {
    document.getElementById("val-dia").innerText = `CICLO: ${estado.dia.toString().padStart(2, '0')}/15`;
    const barSaude = document.getElementById("bar-saude");
    barSaude.innerText = construirBarra(estado.saudeArvore, 100);
    barSaude.style.color = estado.saudeArvore < 30 ? "#ff3366" : "#00ffcc";
    document.getElementById("bar-agua").innerText = construirBarra(estado.agua, 100);
    document.getElementById("bar-energia").innerText = construirBarra(estado.energia, 100);
    atualizarElementoTendencia("tend-saude", estado.saudeArvore, estadoAnterior.saudeArvore);
    atualizarElementoTendencia("tend-agua", estado.agua, estadoAnterior.agua);
    atualizarElementoTendencia("tend-energia", estado.energia, estadoAnterior.energia);
}

function começarDia() {
    atualizarPainelVisual();
    if (typeof verificarFimDeJogo === 'function' && verificarFimDeJogo()) return;
    estadoAnterior = { ...estado };
    modoMinijogo = false; modoUpgrade = false;
    const log = document.getElementById("log-jogo");
    const eventoAtual = bancoDeEventos[estado.dia];
    if (eventoAtual) {
        log.innerHTML = `<p>${eventoAtual.texto}</p><p class="alerta-aviso">----------------------------------------</p>
            <p>Digite <b style='color:#fff'>/opcao1</b> para a primeira alternativa.</p><p>Digite <b style='color:#fff'>/opcao2
