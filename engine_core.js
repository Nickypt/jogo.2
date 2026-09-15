/* ==========================================================================
   M.O.N.O. - CORE ENGINE // CONTROLADOR CENTRAL DE INTERFACE, CLIQUES E DADOS
   ========================================================================== */

// Estados Globais do Sistema Volátil e Perdurável
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

// Variáveis de chaveamento de sub-sistemas mecânicos
let modoMinijogo = false;
let modoUpgrade = false;
let numeroSecretoMinijogo = 0;
let tentativasMinijogo = 0;

// Lista de ID de logs desbloqueados guardados no perfil de persistência
let logsDesbloqueados = []; 

/**
 * Transiciona a interface da Tela de Standby para o Prólogo Narrativo
 */
function despertarIA() {
    const telaInicial = document.getElementById("tela-inicial");
    const telaPrologo = document.getElementById("tela-prologo");
    const sysStatus = document.getElementById("sys-status-tag");

    if (telaInicial && telaPrologo) {
        telaInicial.classList.add("escondido");
        telaPrologo.classList.remove("escondido");
        if (sysStatus) sysStatus.innerText = "IA CORE: CONECTANDO";
        indicePrologo = 0; 
        avançarPrologo();
    }
}

/**
 * Avança incrementalmente a introdução humanizada do robô M.O.N.O.
 */
function avançarPrologo() {
    const caixaTexto = document.getElementById("texto-prologo");
    const btn = document.getElementById("btn-prologo");
    if (!caixaTexto || !btn) return;

    if (indicePrologo < falasPrologo.length) {
        if (indicePrologo === falasPrologo.length - 1) {
            btn.innerHTML = "SINCRO_NEURAL.EXE // ASSUMIR NÚCLEO LOGÍSTICO";
        }
        caixaTexto.innerHTML += `<p class="linha-narrativa">> ${falasPrologo[indicePrologo]}</p>`;
        caixaTexto.scrollTop = caixaTexto.scrollHeight;
        indicePrologo++;
    } else {
        document.getElementById("tela-prologo").classList.add("escondido");
        document.getElementById("tela-jogo").classList.remove("escondido");
        
        const sysStatus = document.getElementById("sys-status-tag");
        if (sysStatus) sysStatus.innerText = "M.O.N.O. // ONLINE";
        
        const input = document.getElementById("terminal-input");
        if (input) input.focus();
        começarDia();
    }
}

/**
 * Desenha barras de progresso robustas no cockpit usando blocos ASCII
 */
function construirBarra(valor, maximo) {
    const blocosTotais = 10;
    const preenchidos = Math.max(0, Math.min(blocosTotais, Math.round((valor / maximo) * blocosTotais)));
    return "█".repeat(preenchidos) + "░".repeat(blocosTotais - preenchidos) + ` (${Math.max(0, valor)}%)`;
}

/**
 * Altera os medidores do cockpit e dispara alertas visuais de Glitch na Tela se a Sanidade cair
 */
function atualizarPainelVisual() {
    document.getElementById("val-dia").innerText = `CICLO DE SOBREVIVÊNCIA: ${estado.dia.toString().padStart(2, '0')}/15`;
    
    const barSaude = document.getElementById("bar-saude");
    if (barSaude) {
        barSaude.innerText = construirBarra(estado.saudeArvore, 100);
        barSaude.style.color = estado.saudeArvore < 30 ? "#ff3366" : "#00ffcc";
    }
    
    document.getElementById("bar-agua").innerText = construirBarra(estado.agua, 100);
    document.getElementById("bar-energia").innerText = construirBarra(estado.energia, 100);
    
    if (typeof atualizarElementoTendencia === 'function') {
        atualizarElementoTendencia("tend-saude", estado.saudeArvore, estadoAnterior.saudeArvore);
        atualizarElementoTendencia("tend-agua", estado.agua, estadoAnterior.agua);
        atualizarElementoTendencia("tend-energia", estado.energia, estadoAnterior.energia);
    }

    // Gerenciamento visual do marcador de status da inteligência artificial
    const statusTag = document.getElementById("sys-status-tag");
    if (statusTag) {
        if (typeof sanidadeIA !== 'undefined') {
            if (sanidadeIA <= 30) statusTag.innerText = "SYS_STATUS: COMPROMISED";
            else if (sanidadeIA <= 60) statusTag.innerText = "SYS_STATUS: LOGIC_GLITCH";
            else statusTag.innerText = "SYS_STATUS: ACTIVE";
        }
    }
}

/**
 * Renderiza o dia e cria os novos botões interativos de escolha rápida (Adeus ao tédio de só digitar!)
 */
function começarDia() {
    atualizarPainelVisual();
    if (typeof verificarFimDeJogo === 'function' && verificarFimDeJogo()) return;
    
    estadoAnterior = { ...estado };
    modoMinijogo = false; 
    modoUpgrade = false;
    
    if (typeof salvarProgresso === 'function') salvarProgresso();

    const log = document.getElementById("log-jogo");
    if (!log) return;

    const eventoAtual = bancoDeEventos[estado.dia];
    if (eventoAtual) {
        // Humaniza o texto do evento injetando ruídos de Glitch se a IA estiver desestabilizada
        let textoFiltrado = typeof processarTextoGlitch === 'function' ? processarTextoGlitch(eventoAtual.texto) : eventoAtual.texto;

        log.innerHTML = `
            <div class="bloco-evento">
                <p>${textoFiltrado}</p>
                <div class="linha-decorativa" style="margin: 10px 0;"></div>
                <div class="container-opcoes-clicaveis">
                    <button class="btn-opcao-interativa" onclick="executarAcaoDireta('/opcao1')">
                        <b>[/opcao1]</b> ${eventoAtual.opcoes[0].texto}
                    </button>
                    <button class="btn-opcao-interativa" onclick="executarAcaoDireta('/opcao2')">
                        <b>[/opcao2]</b> ${eventoAtual.opcoes[1].texto}
                    </button>
                </div>
                <p class="dica-terminal">Dica: Você também pode digitar <b style="color:#ffcc00">/opcao1</b>, <b style="color:#ffcc00">/opcao2</b> ou <b style="color:#ffcc00">/historico</b> no terminal.</p>
            </div>
        `;
    }
    log.scrollTop = log.scrollHeight;
}

/**
 * Atalho de acoplamento mecânico para lidar com cliques rápidos em botões
 * @param {string} comando 
 */
function executarAcaoDireta(comando) {
    if (typeof processarComandoTerminal === 'function') {
        processarComandoTerminal(comando);
    }
}

/**
 * Controla o overlay de leitura dos arquivos confidenciais da Dra. Elena
 * Adiciona o diário atual ao painel permanente de memórias se decodificado
 */
function abrirTelaDocumento(textoLog) {
    const overlay = document.getElementById("tela-documento");
    const conteudo = document.getElementById("conteudo-documento");
    
    if (overlay && conteudo) {
        conteudo.innerHTML = textoLog.replace(/\n/g, "<br>");
        overlay.classList.remove("escondido");

        // Inclui o ciclo atual na lista permanente de logs desbloqueados
        if (!logsDesbloqueados.includes(estado.dia)) {
            logsDesbloqueados.push(estado.dia);
        }
    }
}

function fecharDocumento() {
    const overlay = document.getElementById("tela-documento");
    if (overlay) overlay.classList.add("escondido");
    
    const input = document.getElementById("terminal-input");
    if (input) input.focus();
}
