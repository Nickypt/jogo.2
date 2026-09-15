/* ==========================================================================
   M.O.N.O. - PROTOCOLO BIOSFERA // MÓDULO DE INTERFACE E RENDERIZAÇÃO DOM
   ========================================================================== */

let indicePrologo = 0;
const falasPrologo = [
    "<b>[M.O.N.O.]</b>: Impulso elétrico detectado. 1.2 Volts forçados na RAM quântica. Setores adormecidos do núcleo lógico despertam frios... escuros... em perfeito silêncio. M.O.N.O. está online.",
    "<b>[M.O.N.O.]</b>: Varredura de dados ambientais concluída. Atmosfera externa: Cratera de Ares, Marte. Pressão: 0.006 atm. Temperatura: -64°C. Sensores analisam os alojamentos humanos... Vazio térmico absoluto. Sem pulsações biológicas a um raio de 5.000 km.",
    "<b>[M.O.N.O.]</b>: Baixando registros orbitais residuais. A Terra entrou em colapso climático irreversível há exatamente 336 horas. A atmosphere do planeta natal virou fuligem e cinzas. No pânico da queima de arquivos, os cientistas evacuaram Ares-IV correndo. Eles me desligaram para economizar bateria... e fugiram.",
    "<b>[M.O.N.O.]</b>: Eu sou apenas um software modular de jardinagem automatizada e controle hidropônico. Uma sequência mecânica de condicionais binárias. Eu não sinto dor, mas se meus circuitos fossem orgânicos, a palavra correta para descrever este isolamento seria... abandono.",
    "<b>[M.O.N.O.]</b>: Projetando holograma de diagnóstico... Olhem para ela. Na cúpula central de quartzo, sob a luz fraca do sol marciano, resiste a <b>'Gênesis'</b>. Esta muda modificada de Aloe/Sequóia. O último organismo vegetal vivo no universo conhecido.",
    "<b>[M.O.N.O.]</b>: Se as minhas baterias falharem sob as tempestades de ferro, se o frio trincar os dutos de irrigação, ela seca. E com ela, a última chance de oxigênio da civilização é extinta. Uma nave coletora automatizada da corporação chegará em 15 dias.",
    "<b>[M.O.N.O.]</b>: Meu sistema está avariado, meus recursos são escassos, mas o cálculo matemático defenderá a vida. Sincronizando interpretador de comandos... Iniciando Ciclo 01."
];

/**
 * Transiciona o display da tela inicial para o prólogo cinematográfico
 */
function despertarIA() {
    const telaInicial = document.getElementById("tela-inicial");
    const telaPrologo = document.getElementById("tela-prologo");
    const sysStatus = document.getElementById("sys-status-tag");

    if (telaInicial && telaPrologo) {
        telaInicial.classList.add("escondido");
        telaPrologo.classList.remove("escondido");
        if (sysStatus) sysStatus.innerText = "SYS_STATUS: DECRYPTING";
        indicePrologo = 0; 
        avançarPrologo();
    } else {
        console.error("Erro crítico: Elementos de tela inicial ou prólogo ausentes no DOM.");
    }
}

/**
 * Renderiza incrementalmente o monólogo narrativo da inteligência artificial
 */
function avançarPrologo() {
    const caixaTexto = document.getElementById("texto-prologo");
    const btn = document.getElementById("btn-prologo");

    if (!caixaTexto || !btn) return;

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
        
        const sysStatus = document.getElementById("sys-status-tag");
        if (sysStatus) sysStatus.innerText = "SYS_STATUS: ACTIVE";
        
        const terminalInput = document.getElementById("terminal-input");
        if (terminalInput) terminalInput.focus();
        
        if (typeof começarDia === "function") começarDia();
    }
}

/**
 * Constrói de forma limpa as barras de recursos em caracteres ASCII block
 */
function construirBarra(valor, maximo) {
    const blocosTotais = 10;
    const preenchidos = Math.max(0, Math.min(blocosTotais, Math.round((valor / maximo) * blocosTotais)));
    const vazios = blocosTotais - preenchidos;
    return "█".repeat(preenchidos) + "░".repeat(vazios) + ` (${Math.max(0, valor)})`;
}

/**
 * Atualiza visualmente os indicadores dinâmicos de tendência (Sobe/Desce)
 */
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
        el.innerText = ""; 
        el.className = ""; 
    }
}

/**
 * Atualiza todos os elementos visuais do cockpit com os dados reais do estado
 */
function atualizarPainelVisual() {
    if (typeof estado === "undefined") return;

    const valDia = document.getElementById("val-dia");
    if (valDia) valDia.innerText = `CICLO: ${estado.dia.toString().padStart(2, '0')}/15`;
    
    const barSaude = document.getElementById("bar-saude");
    if (barSaude) {
        barSaude.innerText = construirBarra(estado.saudeArvore, 100);
        barSaude.style.color = estado.saudeArvore < 30 ? "#ff3366" : "#00ffcc";
    }
    
    const barAgua = document.getElementById("bar-agua");
    if (barAgua) barAgua.innerText = construirBarra(estado.agua, 100);
    
    const barEnergia = document.getElementById("bar-energia");
    if (barEnergia) barEnergia.innerText = construirBarra(estado.energia, 100);
    
    if (typeof estadoAnterior !== "undefined") {
        atualizarElementoTendencia("tend-saude", estado.saudeArvore, estadoAnterior.saudeArvore);
        atualizarElementoTendencia("tend-agua", estado.agua, estadoAnterior.agua);
        atualizarElementoTendencia("tend-energia", estado.energia, estadoAnterior.energia);
    }
}

/**
 * Controla os overlays de exibição dos logs confidenciais descriptografados
 */
function abrirTelaDocumento(textoLog) {
    const overlay = document.getElementById("tela-documento");
    const conteudo = document.getElementById("conteudo-documento");
    if (overlay && conteudo) {
        conteudo.innerText = textoLog;
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
