/* ==========================================================================
   M.O.N.O. - BANCO DE DADOS // HISTÓRICO DE LOGS DECIFRADOS
   ========================================================================== */

// Lista que armazena os IDs dos diários que o jogador conseguiu quebrar o firewall
let logsDesbloqueados = [];

/**
 * Adiciona um diário à lista de conquistas decifradas se ele já não estiver lá
 * @param {number} dia 
 */
function registrarLogDesbloqueado(dia) {
    if (!logsDesbloqueados.includes(dia)) {
        logsDesbloqueados.push(dia);
    }
}

/**
 * Renderiza e exibe a tela/overlay com o índice de diários recuperados
 */
function abrirMenuLogsOcultos() {
    // Procura por um container específico de índice de logs ou usa o log principal
    const logJogo = document.getElementById("log-jogo");
    if (!logJogo) return;

    // Salva o conteúdo atual do terminal para podermos restaurar depois
    window.conteudoTerminalAnterior = logJogo.innerHTML;

    let htmlMenu = `
        <div class="menu-logs-container">
            <h2 style="color: #ffaa00; letter-spacing: 2px;">⚡ [ARQUIVO_CENTRAL] SECURE_DECRYPTED_INDEX</h2>
            <p>Selecione um bloco de memória recuperado para ler as coordenadas e pistas da Dra. Elena:</p>
            <div class="grade-botoes-logs">
    `;

    // Cria botões dinâmicos para cada um dos 10 diários existentes
    for (let i = 1; i <= 10; i++) {
        if (logsDesbloqueados.includes(i)) {
            htmlMenu += `<button class="btn-log-recuperado" onclick="renderizarTextoDiarioMapeado(${i})">🔓 RESTRITO_LOG_0${i}</button>`;
        } else {
            htmlMenu += `<button class="btn-log-bloqueado" disabled>🔒 CORROMPIDO_0${i}</button>`;
        }
    }

    htmlMenu += `
            </div>
            <div class="linha-decorativa" style="margin-top:20px;"></div>
            <button class="btn-opcao-interativa" style="border-color:#ff3366 !important; color:#ff3366 !important;" onclick="fecharMenuLogsOcultos()">
                > RETORNAR_AO_MONITOR_PRINCIPAL()
            </button>
        </div>
    `;

    logJogo.innerHTML = htmlMenu;
    logJogo.scrollTop = 0;
}

/**
 * Exibe o diário selecionado usando a interface holográfica existente
 * @param {number} dia 
 */
function renderizarTextoDiarioMapeado(dia) {
    if (typeof abrirTelaDocumento === "function" && diariosElena[dia]) {
        abrirTelaDocumento(diariosElena[dia]);
    }
}

/**
 * Restaura a tela de gameplay para o estado em que estava antes de abrir os arquivos
 */
function fecharMenuLogsOcultos() {
    const logJogo = document.getElementById("log-jogo");
    if (logJogo && window.conteudoTerminalAnterior) {
        logJogo.innerHTML = window.conteudoTerminalAnterior;
        logJogo.scrollTop = logJogo.scrollHeight;
    }
}
