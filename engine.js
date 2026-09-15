/* ==========================================================================
   M.O.N.O. - PROTOCOLO BIOSFERA // CORE ENGINE & CORE KERNEL LIFECYCLE
   ========================================================================== */

// --- ESTADO GLOBAL DA BIOSFERA ARES-IV ---
let estado = { 
    dia: 1, 
    saudeArvore: 100, 
    agua: 50, 
    energia: 100, 
    temperaturaEstufa: 22, 
    eficienciaPaineis: 100 
};

let estadoAnterior = { 
    saudeArvore: 100, 
    agua: 50, 
    energia: 100 
};

let upgradesAtivos = { 
    perdaEnergiaReduzida: false, 
    perdaAguaReduzida: false 
};

let conquistas = { 
    maximaEficiencia: true, 
    investigadorQuantico: 0, 
    friezaLogistica: false 
};

// --- FLAGS E VARIÁVEIS DE SISTEMAS PARALELOS ---
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

// --- SISTEMA DE INICIALIZAÇÃO E TRANSIÇÃO ---
function despertarIA() {
    const telaInicial = document.getElementById("tela-inicial");
    const telaPrologo = document.getElementById("tela-prologo");
    const statusTag = document.getElementById("sys-status-tag");

    if (telaInicial && telaPrologo && statusTag) {
        telaInicial.classList.add("escondido");
        telaPrologo.classList.remove("escondido");
        statusTag.innerText = "SYS_STATUS: DECRYPTING";
        avançarPrologo();
    } else {
        console.error("[ERRO_CRÍTICO]: Elementos de interface não mapeados no DOM.");
    }
}

function avançarPrologo() {
    const caixaTexto = document.getElementById("texto-prologo");
    const btn = document.getElementById("btn-prologo");

    if (!caixaTexto || !btn) return;

    if (indicePrologo < falasPrologo.length) {
        if (indicePrologo === falasPrologo.length - 1) {
            btn.innerHTML = "ASSUMIR_CONTROLE_DO_NÚCLEO // INICIAR CONTAGEM";
        }
        caixaTexto.innerHTML += `<p class="linha-log">> ${falasPrologo[indicePrologo]}</p>`;
        caixaTexto.scrollTop = caixaTexto.scrollHeight;
        indicePrologo++;
    } else {
        document.getElementById("tela-prologo").classList.add("escondido");
        document.getElementById("tela-jogo").classList.remove("escondido");
        document.getElementById("sys-status-tag").innerText = "SYS_STATUS: ACTIVE";
        
        const terminalInput = document.getElementById("terminal-input");
        if (terminalInput) terminalInput.focus();
        
        começarDia();
    }
}

// --- CONSTRUTORES GRÁFICOS DE INTERFACE EM MODO TEXTO ---
function construirBarra(valor, maximo) {
    const blocosTotais = 10;
    const preenchidos = Math.max(0, Math.min(blocosTotais, Math.round((valor / maximo) * blocosTotais)));
    const vazios = Math.max(0, blocosTotais - preenchidos);
    return "█".repeat(preenchidos) + "░".repeat(vazios) + ` (${valor}%)`;
}

function atualizarElementoTendencia(idElemento, valorAtual, valorAntigo) {
    const el = document.getElementById(idElemento);
    if (!el) return;
    
    if (valorAtual > valorAntigo) { 
        el.innerText = "▲ Sobe"; 
        el.className = "piscar tend-sobe"; 
    } else if (valorAtual < valorAntigo) { 
        el.innerText = "▼ Desce"; 
        el.className = "piscar tend-desce"; 
    } else { 
        el.innerText = "• Estável"; 
        el.className = "piscar"; 
    }
}

function atualizarPainelVisual() {
    const valDia = document.getElementById("val-dia");
    const barSaude = document.getElementById("bar-saude");
    const barAgua = document.getElementById("bar-agua");
    const barEnergia = document.getElementById("bar-energia");
    
    if (valDia) valDia.innerText = `CICLO: ${estado.dia.toString().padStart(2, '0')}/15`;
    
    if (barSaude) {
        barSaude.innerText = construirBarra(estado.saudeArvore, 100);
        barSaude.style.color = estado.saudeArvore < 30 ? "#ff3366" : "#00ffcc";
    }
    if (barAgua) barAgua.innerText = construirBarra(estado.agua, 100);
    if (barEnergia) barEnergia.innerText = construirBarra(estado.energia, 100);

    atualizarElementoTendencia("tend-saude", estado.saudeArvore, estadoAnterior.saudeArvore);
    atualizarElementoTendencia("tend-agua", estado.agua, estadoAnterior.agua);
    atualizarElementoTendencia("tend-energia", estado.energia, estadoAnterior.energia);
}

// --- LOOP FLUXO OPERACIONAL DIÁRIO ---
function começarDia() {
    atualizarPainelVisual();
    
    if (typeof verificarFimDeJogo === 'function' && verificarFimDeJogo()) return;
    
    estadoAnterior = { ...estado };
    modoMinijogo = false; 
    modoUpgrade = false;
    
    const log = document.getElementById("log-jogo");
    if (!log) return;

    if (typeof salvarProgresso === 'function') salvarProgresso();

    const eventoAtual = bancoDeEventos[estado.dia];
    if (eventoAtual) {
        log.innerHTML = `
            <p>${eventoAtual.texto}</p>
            <p class="alerta-aviso">--------------------------------------------------</p>
            <p>> Diretriz 1: <span style="color:#00ffcc">${eventoAtual.opcoes[0].texto}</span></p>
            <p>> Diretriz 2: <span style="color:#00ffcc">${eventoAtual.opcoes[1].texto}</span></p>
            <p class="alerta-aviso">--------------------------------------------------</p>
            <p>Insira <b style='color:#fff'>/opcao1</b> ou <b style='color:#fff'>/opcao2</b> para injetar a carga analítica.</p>
        `;
    } else {
        log.innerHTML = `
            <p><span class='alerta-aviso'>[ALERTA DE SISTEMA - CICLO ${estado.dia.toString().padStart(2, '0')}]</span>: Nenhum evento climático massivo detectado em rota orbital de curto prazo. Os sistemas de suporte operam em estabilidade estática.</p>
            <p>Digite <b style='color:#fff'>/prosseguir</b> para abrir o barramento de transição noturna.</p>
        `;
    }
    log.scrollTop = log.scrollHeight;
}

function verificarFaseDeTransição() {
    const log = document.getElementById("log-jogo");
    if (!log) return;

    log.innerHTML = `
        <p class="alerta-aviso">> INICIANDO PROTOCOLO NOTURNO DE CONSERVAÇÃO E RECARGA...</p>
        <p>[SISTEMA]: Rodando algoritmos preditivos e computando custos ambientais marcianos...</p>
    `;

    if (typeof calcularAvancoClimatico === 'function') {
        calcularAvancoClimatico();
    }

    modoUpgrade = true;
    log.innerHTML += `
        <p class="alerta-sucesso">> ANÁLISE DE CICLO CONCLUÍDA. NÚCLEO DISPONÍVEL PARA AJUSTES DE EFICIÊNCIA.</p>
        <p>Selecione uma alocação energética para rodar em segundo plano:</p>
        <p>⚡ <b style="color:#fff">/painel</b> : Otimizar barramento fotovoltaico (Protege a energia no Ciclo 3)</p>
        <p>💧 <b style="color:#fff">/irrigar</b> : Recalibrar bicos hidropônicos (Gasta -3 de Água por turno)</p>
        <p>🔋 <b style="color:#fff">/recarga</b> : Modo estático residual (Recupera +15 de Água e Energia hoje)</p>
        <p class="alerta-aviso">--------------------------------------------------</p>
        <p>Injete o comando da otimização escolhida para avançar o relógio quântico...</p>
    `;
    atualizarPainelVisual();
    log.scrollTop = log.scrollHeight;
}

function avançarDia() {
    estado.dia += 1;
    começarDia();
}

// --- OVERLAY AUXILIAR DE RELATÓRIOS CRIPTOGRAFADOS ---
function abrirTelaDocumento(textoDoc) {
    const overlay = document.getElementById("tela-documento");
    const conteudo = document.getElementById("conteudo-documento");
    if (overlay && conteudo) {
        conteudo.innerText = textoDoc;
        overlay.classList.remove("escondido");
    }
}

function fecharDocumento() {
    const overlay = document.getElementById("tela-documento");
    if (overlay) {
        overlay.classList.add("escondido");
        const terminalInput = document.getElementById("terminal-input");
        if (terminalInput) terminalInput.focus();
    }
}
