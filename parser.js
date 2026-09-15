/* ==========================================================================
   M.O.N.O. - PROTOCOLO BIOSFERA // INTERPRETADOR DE DIRETRIZES E COMANDOS
   ========================================================================== */

// Evento disparado assim que a janela carrega para capturar a tecla Enter no terminal
window.onload = function() {
    const input = document.getElementById("terminal-input");
    if (input) {
        input.addEventListener("keypress", function(evento) {
            if (evento.key === "Enter") {
                // Captura o comando, remove espaços extras e padroniza para minúsculas
                processarComandoTerminal(this.value.trim().toLowerCase());
                this.value = ""; // Limpa a linha de digitação do terminal
            }
        });
    }
};

/**
 * Filtra e redireciona os comandos digitados com base no estado atual do Kernel
 * @param {string} comando 
 */
function processarComandoTerminal(comando) {
    const log = document.getElementById("log-jogo");
    if (!log) return;

    // Se estiver no minijogo de hacking por pulso numérico
    if (modoMinijogo) { 
        executarTurnoMinijogo(comando); 
        return; 
    }

    // Se estiver na fase noturna de upgrade/otimização
    if (modoUpgrade) { 
        processarComandoUpgrade(comando); 
        return; 
    }

    // Comando universal para restaurar backup salvo via LocalStorage
    if (comando === "/retomar") {
        if (typeof carregarProgresso === "function") {
            const carregou = carregarProgresso();
            if (!carregou) {
                log.innerHTML += "<p class='alerta-erro'>> ERRO: Nenhuma partição válida localizada na memória flash.</p>";
                log.scrollTop = log.scrollHeight;
            }
        }
        return;
    }

    // Avançar de etapa após tomar uma decisão ou decifrar logs
    if (comando === "/proximo") { 
        verificarFaseDeTransição(); 
        return; 
    }

    // Inicialização do Bypass Quântico para descriptografar arquivos ocultos
    if (comando === "/descriptografar") {
        if (typeof diariosElena !== 'undefined' && diariesElena[estado.dia]) { // Mantendo 'diariesElena' para refletir a engine
            if (estado.energia >= 25) { 
                iniciarMinijogoHack(); 
            } else { 
                log.innerHTML += "<p class='alerta-erro'>> ERRO: Carga elétrica insuficiente para o Cracking Bypass (Requer 25 Energia).</p>"; 
            }
        } else { 
            log.innerHTML += "<p class='alerta-erro'>> ERRO: Nenhuma assinatura criptográfica fantasma detectada neste ciclo.</p>"; 
        }
        log.scrollTop = log.scrollHeight;
        return;
    }

    // Tratamento de tomada de decisões críticas baseadas nos eventos diários
    if (comando === "/opcao1" || comando === "/opcao2") {
        const eventoAtual = bancoDeEventos[estado.dia];
        if (!eventoAtual) return;

        const indice = comando === "/opcao1" ? 0 : 1;
        const escolha = eventoAtual.opcoes[indice];

        // Gatilhos de consequências exclusivas narrativas por ciclo
        if (estado.dia === 1 && comando === "/opcao1") { 
            estado.temperaturaEstufa += 10; 
        }
        if (estado.dia === 4 && comando === "/opcao2") { 
            conquistas.friezaLogistica = true; 
        }

        // Aplicação de somatório matemático com travas de segurança [0 - 100]
        estado.energia = Math.max(0, Math.min(100, estado.energia + escolha.efeito.energia));
        estado.agua = Math.max(0, Math.min(100, estado.agua + escolha.efeito.agua));
        estado.saudeArvore = Math.max(0, Math.min(100, estado.saudeArvore + escolha.efeito.saude));

        log.innerHTML = `
            <p class="alerta-sucesso">> DIRETRIZ EXECUTADA COM SUCESSO. ATUALIZANDO KERNEL...</p>
            <p>${escolha.feedback}</p>
            <p class="alerta-aviso">----------------------------------------</p>
        `;

        // Avisos imediatos de falhas mecânicas no ecossistema
        if (estado.temperaturaEstufa <= 12) {
            log.innerHTML += `<p class='alerta-erro'>> [WARN]: Sensores térmicos registram resfriamento severo da estufa (${estado.temperaturaEstufa}°C). Perigo de trincas.</p>`;
        }

        // Verifica se há lore extra oculta disponível no dia atual
        if (typeof diariesElena !== 'undefined' && diariesElena[estado.dia]) {
            log.innerHTML += `<p class="alerta-aviso">> ALERTA: Buffer fantasma detectado nos blocos de memória secundária. Digite <b style='color:#ffcc00'>/descriptografar</b> para tentar acessá-lo.</p>`;
        }

        log.innerHTML += `<p>Digite <b style='color:#fff'>/proximo</b> para encerrar o ciclo diurno e processar dados.</p>`;
        atualizarPainelVisual();
        log.scrollTop = log.scrollHeight;
        return;
    }

    // Fallback de segurança para comandos inválidos ou falhas de digitação
    log.innerHTML += `<p class='alerta-erro'>> ERRO: Comando '${comando}' não reconhecido pelo interpretador ARES-IV. Digite uma diretriz funcional.</p>`;
    log.scrollTop = log.scrollHeight;
}

/**
 * Processa as tentativas numéricas do minijogo de hacking (Bypass de Firewall)
 * @param {string} comando 
 */
function executarTurnoMinijogo(comando) {
    const palpite = parseInt(comando);
    const log = document.getElementById("log-jogo");
    if (!log) return;

    if (isNaN(palpite)) { 
        log.innerHTML += "<p class='alerta-erro'>> SINTAXE_ERRADA: Frequência inválida. Digite apenas valores numéricos inteiros.</p>"; 
        log.scrollTop = log.scrollHeight;
        return; 
    }
    
    tentativasMinijogo--;

    if (palpite === numeroSecretoMinijogo) {
        modoMinijogo = false;
        estado.energia = Math.max(0, estado.energia - 20); // Custo fixo balanceado pelo sucesso
        atualizarPainelVisual();
        conquistas.investigadorQuantico += 1;
        
        // Abre a interface holográfica laranja restrita com o log descriptografado
        if (typeof abrirTelaDocumento === "function") {
            abrirTelaDocumento(diariesElena[estado.dia]);
        }
        
        log.innerHTML = `
            <h2 class="alerta-sucesso">> CRACKING_COMPLETED. Conexão neural segura restabelecida.</h2>
            <p>Os logs históricos criptografados da Dr. Elena Vaz foram projetados na tela auxiliar.</p>
            <p>Digite <b style='color:#fff'>/proximo</b> para prosseguir com a rotina noturna.</p>
        `;
    } else {
        if (tentativasMinijogo <= 0) {
            modoMinijogo = false;
            log.innerHTML += `
                <p class="alerta-erro">> CRITICAL: Esgotamento de tentativas. O firewall ativou a purga de dados secundários (-10 Energia).</p>
                <p>O arquivo foi permanentemente bloqueado neste ciclo. Digite <b style='color:#fff'>/proximo</b> para continuar.</p>
            `;
            estado.energia = Math.max(0, estado.energia - 10);
            atualizarPainelVisual();
        } else {
            const dica = palpite > numeroSecretoMinijogo ? "ALTA" : "BAIXA";
            log.innerHTML += `<p>> Frequência do pulso modular muito ${dica}. Tentativas restantes: ${tentativasMinijogo}.</p>`;
        }
    }
    log.scrollTop = log.scrollHeight;
}

/**
 * Interpreta e valida as escolhas de melhorias de infraestrutura na fase de upgrades
 * @param {string} comando 
 */
function processarComandoUpgrade(comando) {
    const log = document.getElementById("log-jogo");
    if (!log) return;

    if (comando === "/painel") { 
        upgradesAtivos.perdaEnergiaReduzida = true;
        log.innerHTML = "<p class='alerta-sucesso'>> [OTIMIZAÇÃO]: Mantas isolantes aplicadas nas baterias. Perda de energia mitigada.</p>";
    } 
    else if (comando === "/irrigar") { 
        upgradesAtivos.perdaAguaReduzida = true;
        log.innerHTML = "<p class='alerta-sucesso'>> [OTIMIZAÇÃO]: Microvalvulação hidropônica calibrada. Consumo hídrico otimizado.</p>";
    } 
    else if (comando === "/recarga") {
        estado.energia = Math.min(100, estado.energia + 15);
        estado.agua = Math.min(100, estado.agua + 15);
        log.innerHTML = "<p class='alerta-sucesso'>> [OTIMIZAÇÃO]: Carga rápida acionada. +15 de Água e Energia injetados nos tanques centrais.</p>";
    } 
    else {
        log.innerHTML += "<p class='alerta-erro'>> DIRETRIZ INCOMPATÍVEL: Selecione /painel, /irrigar ou /recarga.</p>";
        log.scrollTop = log.scrollHeight;
        return;
    }

    modoUpgrade = false;
    
    // Pequeno delay dramático antes de avançar o ciclo real de dia
    setTimeout(() => {
        if (typeof avançarDia === "function") avançarDia();
    }, 1500);
}
