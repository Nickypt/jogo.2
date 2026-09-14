// Configura o escutador de eventos de teclado quando o navegador carrega a página
window.onload = function() {
    const input = document.getElementById("terminal-input");
    if (input) {
        input.addEventListener("keypress", function(evento) {
            if (evento.key === "Enter") {
                processarComandoTerminal(this.value.trim().toLowerCase());
                this.value = ""; // Limpa a barra de entrada de comandos
            }
        });
    }
};

// 🕹️ INTERPRETADOR DE COMANDOS (Input Parser)
function processarComandoTerminal(comando) {
    const log = document.getElementById("log-jogo");

    // Fluxo A: Se o jogador estiver dentro do minijogo de hacking
    if (modoMinijogo) {
        executarTurnoMinijogo(comando);
        return;
    }

    // Fluxo B: Se o jogador estiver na tela de seleção de upgrades
    if (modoUpgrade) {
        processarComandoUpgrade(comando);
        return;
    }

    // Fluxo C: Comando para avançar de ciclo de forma síncrona
    if (comando === "/proximo") {
        verificarFaseDeTransição();
        return;
    }

    // Fluxo D: Comando para iniciar descriptografia
    if (comando === "/descriptografar") {
        if (typeof diariosElena !== 'undefined' && diariosElena[estado.dia]) {
            if (estado.energia >= 25) {
                iniciarMinijogoHack();
            } else {
                log.innerHTML += "<p class='alerta-erro'>> ERRO: Energia insuficiente para quebrar chave criptográfica (Mínimo: 25%).</p>";
            }
        } else {
            log.innerHTML += "<p class='alerta-erro'>> ERRO: Nenhuma assinatura oculta detectada neste ciclo.</p>";
        }
        log.scrollTop = log.scrollHeight;
        return;
    }

    // Fluxo E: Resoluções das opções textuais padrões do dia (/opcao1 ou /opcao2)
    if (comando === "/opcao1" || comando === "/opcao2") {
        const eventoAtual = bancoDeEventos[estado.dia];
        if (!eventoAtual) return;

        const indice = comando === "/opcao1" ? 0 : 1;
        const escolha = eventoAtual.opcoes[indice];

        estado.energia = Math.max(0, Math.min(100, estado.energia + escolha.efeito.energia));
        estado.agua = Math.max(0, Math.min(100, estado.agua + escolha.efeito.agua));
        estado.saudeArvore = Math.max(0, Math.min(100, estado.saudeArvore + escolha.efeito.saude));

        log.innerHTML = `
            <p class="alerta-sucesso">> COMANDO EXECUTADO COM SUCESSO.</p>
            <p>${escolha.feedback}</p>
            <p class="alerta-aviso">----------------------------------------</p>
        `;

        if (typeof diariosElena !== 'undefined' && diariosElena[estado.dia]) {
            log.innerHTML += `<p class="alerta-aviso">> ALERTA: Arquivo de log oculto detectado. Digite <b style='color:#ffcc00'>/descriptografar</b> para tentar acessá-lo.</p>`;
        }

        log.innerHTML += `<p>Digite <b style='color:#fff'>/proximo</b> para iniciar o ciclo noturno.</p>`;
        atualizarPainelVisual();
        log.scrollTop = log.scrollHeight;
    } else if (comando === "/prosseguir" && !bancoDeEventos[estado.dia]) {
        verificarFaseDeTransição();
    }
}

// Lógica de turnos internos para o minijogo de adivinhação estável
function ejecutarTurnoMinijogo(comando) {
    const palpite = parseInt(comando);
    const log = document.getElementById("log-jogo");

    if (isNaN(palpite)) {
        log.innerHTML += "<p class='alerta-erro'>> FORMATO_INVÁLIDO. Digite apenas números decimais.</p>";
        return;
    }

    tentativasMinijogo--;

    if (palpite === numeroSecretoMinijogo) {
        modoMinijogo = false;
        estado.energia = Math.max(0, estado.energia - 20);
        atualizarPainelVisual();
        
        log.innerHTML = `
            <h2 class="alerta-sucesso">> CONEXÃO ESTABELECIDA. DECRIPTAÇÃO CONCLUÍDA.</h2>
            <p style="color: #ffeebb; font-style: italic; background-color: #120a02; padding: 15px; border: 1px dashed #ffaa00; line-height:1.6;">
                ${diariosElena[estado.dia].replace(/\n/g, '<br><br>')}
            </p>
            <p>Digite <b style='color:#fff'>/proximo</b> para dar andamento ao ciclo noturno.</p>
        `;
    } else {
        if (tentativasMinijogo <= 0) {
            modoMinijogo = false;
            log.innerHTML += `
                <p class="alerta-erro">> CRITICAL: Firewall bloqueado. Sobrecarga elétrica evitada de última hora (-10 Energia).</p>
                <p>O arquivo foi corrompido. Digite <b style='color:#fff'>/proximo</b> para prosseguir.</p>
            `;
            estado.energia = Math.max(0, estado.energia - 10);
            atualizarPainelVisual();
        } else {
            const dica = palpite > numeroSecretoMinijogo ? "ALTA" : "BAIXA";
            log.innerHTML += `<p>> Frequência do pulso muito ${dica}. Tentativas restantes: ${tentativasMinijogo}.</p>`;
        }
    }
    log.scrollTop = log.scrollHeight;
}

// Processador textual do fluxo de upgrades
function processarComandoUpgrade(comando) {
    const log = document.getElementById("log-jogo");

    if (comando === "/painel") {
        upgradesAtivos.perdaEnergiaReduzida = true;
    } else if (comando === "/irrigar") {
        upgradesAtivos.perdaAguaReduzida = true;
    } else if (comando === "/recarga") {
        estado.energia = Math.min(100, estado.energia + 15);
        estado.agua = Math.min(100, estado.agua + 15);
    } else {
        log.innerHTML += "<p class='alerta-erro'>> Diretriz incorreta. Selecione uma otimização válida.</p>";
        return;
    }

    modoUpgrade = false;
    avançarDia();
}
