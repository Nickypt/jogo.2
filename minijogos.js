/* ==========================================================================
   M.O.N.O. - SISTEMA INTERATIVO DE MINIJOGOS DE COGNIÇÃO E SUPORTE VITAL
   ========================================================================== */

let minijogoAtivo = null; 
let dadosMinijogo = {};

/**
 * MINIJOGO 1: HACK VISUAL (ALINHAMENTO DE FREQUÊNCIA DA ENERGIA)
 * O jogador precisa digitar /travar no momento exato em que a barra oscilante estiver no alvo central [X].
 */
function iniciarHackVisual() {
    minijogoAtivo = "HACK_VISUAL";
    modoMinijogo = true;
    dadosMinijogo = { posicao: 0, direcao: 1, alvo: 5, tentativas: 3 };

    const log = document.getElementById("log-jogo");
    if (!log) return;

    log.innerHTML = `
        <div class='bloco-hack'>
            <h2 class='alerta-aviso'>[SISTEMA] INICIANDO SINTONIZADOR DE HARDWARE</h2>
            <p>M.O.N.O.: "A onda magnética corporativa está oscilando! Preciso alinhar o feixe laser exatamente no núcleo central estável [X]!"</p>
            <div id='display-onda' style='font-family:monospace; letter-spacing:4px; font-size:1.2rem; background:#000; padding:12px; border-radius:6px; margin:15px 0; text-align:center; color:#ffaa00; border: 1px solid rgba(255,170,0,0.3);'></div>
            <p>Aguarde o indicador atingir o centro, digite <b style="color:#00ffcc">/travar</b> e aperte Enter com agilidade!</p>
        </div>
    `;

    // Loop de renderização em tempo real simulando a flutuação do feixe elétrico
    dadosMinijogo.intervalo = setInterval(() => {
        dadosMinijogo.posicao += dadosMinijogo.direcao;
        if (dadosMinijogo.posicao >= 10 || dadosMinijogo.posicao <= 0) {
            dadosMinijogo.direcao *= -1;
        }
        
        let display = "░".repeat(dadosMinijogo.posicao) + "█" + "░".repeat(10 - dadosMinijogo.posicao);
        // Insere cirurgicamente a marca de colisão perfeita no meio da string
        display = display.substring(0, 5) + "[X]" + display.substring(6);
        
        const divOnda = document.getElementById("display-onda");
        if (divOnda) divOnda.innerText = display;
    }, 120); // Velocidade desafiadora ajustada para engajar o jogador
}

/**
 * MINIJOGO 2: INJEÇÃO QUÍMICA (CORRIDA DE DIGITAÇÃO CRÍTICA)
 * Para purgar patógenos, o jogador precisa redigitar a string molecular com precisão absoluta.
 */
function iniciarInjecaoQuímica() {
    minijogoAtivo = "INJECAO_QUIMICA";
    modoMinijogo = true;
    const sequencias = ["ANTIDOTO_ARES_IV", "PURGA_BIO_CORE_99", "METABOLIZAR_OXIDO", "GENESIS_REFLEX_ALPHA"];
    dadosMinijogo = { codigo: sequencias[Math.floor(Math.random() * sequencias.length)] };

    const log = document.getElementById("log-jogo");
    if (!log) return;

    log.innerHTML = `
        <div class='bloco-hack'>
            <h2 class='alerta-erro'>⚠️ [ALERTA BIOLÓGICO] SURTO AGUDO DE INFEÇÃO ENZIMÁTICA</h2>
            <p>M.O.N.O.: "Os capilares radiculares estão sendo asfixiados! Preciso registrar a chave antídoto no misturador antes que ocorra choque térmico!"</p>
            <p>Copie e digite a assinatura molecular exata exibida abaixo:</p>
            <p style='background:#0a0505; color:#00ffcc; font-size:1.25rem; padding:12px; font-family:monospace; text-align:center; border: 1px dashed #ff3366; border-radius:4px; letter-spacing: 2px;'>${dadosMinijogo.codigo}</p>
            <p>Inote a sequência no prompt e pressione Enter:</p>
        </div>
    `;
}

/**
 * MINIJOGO 3: CALIBRAÇÃO HIDRÁULICA (ESTABILIZAÇÃO DE FLUIDO)
 * O jogador precisa deduzir a pressão inserindo um palpite dentro da margem estipulada.
 */
function iniciarRemendoHidraulico() {
    minijogoAtivo = "REMENDO_HIDRAULICO";
    modoMinijogo = true;
    const minVal = Math.floor(Math.random() * 20) + 15; // Range inicial dinâmico
    const maxVal = minVal + Math.floor(Math.random() * 15) + 15;
    dadosMinijogo = { min: minVal, max: maxVal };

    const log = document.getElementById("log-jogo");
    if (!log) return;

    log.innerHTML = `
        <div class='bloco-hack'>
            <h2 class='alerta-sucesso'>🔧 MONITOR DE PRESSÃO: RECONSTRUTOR DE FLUXO</h2>
            <p>M.O.N.O.: "Os dutos trincados estão oscilando. Pelos meus cálculos estruturais, a pressão segura de bombeamento hídrico está na faixa de <b>${minVal} PSI</b> a <b>${maxVal} PSI</b>."</p>
            <p>Digite um valor inteiro que se enquadre perfeitamente nesse espectro térmico protetor:</p>
        </div>
    `;
}

/**
 * Validador e processador de resultados para as respostas enviadas ao prompt
 * @param {string} comando 
 */
function checarRespostaMinijogo(comando) {
    const log = document.getElementById("log-jogo");
    if (!log) return;

    // Garante a interrupção completa e segura de loops de tela ativos
    clearInterval(dadosMinijogo.intervalo); 
    modoMinijogo = false;

    // Resolução: Teste de Reflexo (Hack Visual)
    if (minijogoAtivo === "HACK_VISUAL") {
        if (comando === "/travar" && dadosMinijogo.posicao >= 4 && dadosMinijogo.posicao <= 6) {
            estado.energia = Math.min(100, estado.energia + 20);
            conquistas.investigadorQuantico++;
            if (typeof alterarSanidade === "function") alterarSanidade(15);
            
            log.innerHTML = `<p class='alerta-sucesso'>> [BYPASS COMPLETO]: Sincronização estabelecida a 0.003ms de atraso! +20 Energia. Consegui quebrar os datablocks.</p>`;
            
            // Abre o relatório da Elena correspondente ao ciclo atual
            if (typeof abrirTelaDocumento === "function" && typeof diariosElena !== "undefined") {
                abrirTelaDocumento(diariosElena[estado.dia] || "Arquivo vazio ou corrompido.");
            }
        } else {
            estado.energia = Math.max(0, estado.energia - 15);
            if (typeof alterarSanidade === "function") alterarSanidade(-12);
            log.innerHTML = `<p class='alerta-erro'>> [CONEXÃO CORROMPIDA]: Feixe disparado em falso! O choque de retorno elétrico fritou buffers secundários do meu painel (-15 Energia).</p>`;
        }
    } 
    
    // Resolução: Teste de Digitação (Injeção Química)
    else if (minijogoAtivo === "INJECAO_QUIMICA") {
        if (comando.toUpperCase() === dadosMinijogo.codigo) {
            estado.saudeArvore = Math.min(100, estado.saudeArvore + 15);
            log.innerHTML = `<p class='alerta-sucesso'>> [SÍNTESE NOMINAL]: Composto injetado com sucesso! A proliferação celular hostil foi estancada instantaneamente (+15 Saúde da Planta).</p>`;
        } else {
            estado.saudeArvore = Math.max(0, estado.saudeArvore - 15);
            if (typeof alterarSanidade === "function") alterarSanidade(-15);
            log.innerHTML = `<p class='alerta-erro'>> [MISTURA TÓXICA]: Erro de sintaxe na linha molecular! A solução oxidou incorretamente, corroendo membranas das folhas da Sequóia (-15 Saúde da Planta).</p>`;
        }
    } 
    
    // Resolução: Teste Numérico (Remendo Hidráulico)
    else if (minijogoAtivo === "REMENDO_HIDRAULICO") {
        const palpite = parseInt(comando);
        if (!isNaN(palpite) && palpite >= dadosMinijogo.min && palpite <= dadosMinijogo.max) {
            estado.agua = Math.min(100, estado.agua + 20);
            log.innerHTML = `<p class='alerta-sucesso'>> [EQUALIZAÇÃO CONCLUÍDA]: Taxa de PSI calibrada perfeitamente! Os fluxos radiculares voltaram à constância normal de absorção hídrica (+20 Água).</p>`;
        } else {
            estado.agua = Math.max(0, estado.agua - 15);
            log.innerHTML = `<p class='alerta-erro'>> [RUPTURA DE VÁLVULA]: Pressão inadequada! O pico pneumático rompeu conexões hidráulicas externas, liberando gel no vácuo de Marte (-15 Água).</p>`;
        }
    }

    minijogoAtivo = null;
    log.innerHTML += `<p style="margin-top:10px;">Digite <b style='color:#fff'>/proximo</b> para condensar dados e avançar para o ciclo noturno.</p>`;
    
    if (typeof atualizarPainelVisual === "function") atualizarPainelVisual();
    log.scrollTop = log.scrollHeight;
}
