/* ==========================================================================
   M.O.N.O. - SISTEMA INTERATIVO DE MINIJOGOS DE COGNIÇÃO E SUPORTE VITAL
   ========================================================================== */

let minijogoAtivo = null; 
let dadosMinijogo = {};

/**
 * MINIJOGO 1: HACK VISUAL (ALINHAMENTO DE FREQUÊNCIA DA ENERGIA)
 * O jogador precisa apertar o comando no momento exato em que a barra oscilante estiver no centro.
 */
function iniciarHackVisual() {
    minijogoAtivo = "HACK_VISUAL";
    modoMinijogo = true;
    dadosMinijogo = { posicao: 0, direcao: 1, alvo: 5, tentativas: 3 };

    const log = document.getElementById("log-jogo");
    log.innerHTML = `<div class='bloco-hack'>
        <h2 class='alerta-aviso'>[SISTEMA] INICIANDO DECRIPTADOR VISUAL MATRIX</h2>
        <p>M.O.N.O.: "Preciso interceptar a frequência móvel quando ela atingir a zona neutra central [X]!"</p>
        <div id='display-onda' style='font-family:monospace; letter-spacing:4px; font-size:1.2rem; background:#000; padding:10px; border-radius:4px; margin:10px 0; color:#ffaa00;'></div>
        <p>Digite <b>/travar</b> e aperte Enter no momento exato!</p>
    </div>`;

    // Loop de animação em texto puro simulando a oscilação da barra
    dadosMinijogo.intervalo = setInterval(() => {
        dadosMinijogo.posicao += dadosMinijogo.direcao;
        if (dadosMinijogo.posicao >= 10 || dadosMinijogo.posicao <= 0) dadosMinijogo.direcao *= -1;
        
        let display = "░".repeat(dadosMinijogo.posicao) + "█" + "░".repeat(10 - dadosMinijogo.posicao);
        // Coloca o marcador de alvo no centro
        display = display.substring(0, 5) + "[X]" + display.substring(6);
        
        const divOnda = document.getElementById("display-onda");
        if (divOnda) divOnda.innerText = display;
    }, 150);
}

/**
 * MINIJOGO 2: INJEÇÃO QUÍMICA (TESTE DE DIGITAÇÃO VELOZ E SOB PRESSÃO)
 * Para neutralizar toxinas ou fungos, o jogador precisa redigitar a sequência antídoto rápido.
 */
function iniciarInjecaoQuímica() {
    minijogoAtivo = "INJECAO_QUIMICA";
    modoMinijogo = true;
    const sequencias = ["ANTIDOTO_ARES_IV", "PURGA_BIO_99", "METABOLIZAR_OXIDO", "GENESIS_REFLEXO"];
    dadosMinijogo = { codigo: sequencias[Math.floor(Math.random() * sequencias.length)] };

    const log = document.getElementById("log-jogo");
    log.innerHTML = `<div class='bloco-hack'>
        <h2 class='alerta-erro'>⚠️ [CRÍTICO] INFEÇÃO RÁPIDA DE ESPOROS DETECTADA</h2>
        <p>M.O.N.O.: "Os canais estão entupindo! Preciso injetar o composto químico de estabilização IMEDIATAMENTE!"</p>
        <p>Redigite a assinatura molecular exata abaixo para abrir as válvulas:</p>
        <p style='background:#111; color:#00ffcc; font-size:1.3rem; padding:10px; font-family:monospace; text-align:center; border: 1px dashed #00ffcc;'>${dadosMinijogo.codigo}</p>
        <p>Digite exatamente o código acima no prompt do terminal:</p>
    </div>`;
}

/**
 * MINIJOGO 3: REMENDO HIDRÁULICO (CALIBRAÇÃO DE PRESSÃO)
 * O jogador precisa chutar uma pressão dentro de uma faixa ideal informada pelo robô.
 */
function iniciarRemendoHidraulico() {
    minijogoAtivo = "REMENDO_HIDRAULICO";
    modoMinijogo = true;
    const minVal = Math.floor(Math.random() * 20) + 10;
    const maxVal = minVal + Math.floor(Math.random() * 15) + 10;
    dadosMinijogo = { min: minVal, max: maxVal, resposta: Math.floor((minVal + maxVal) / 2) };

    const log = document.getElementById("log-jogo");
    log.innerHTML = `<div class='bloco-hack'>
        <h2 class='alerta-sucesso'>🔧 ESCANER HIDRÁULICO: PRESSÃO DOS DUTOS</h2>
        <p>M.O.N.O.: "A tubulação está instável. Os sensores indicam que a pressão segura de irrigação está algures entre <b>${minVal} PSI</b> e <b>${maxVal} PSI</b>."</p>
        <p>Chute uma taxa de pressão ideal inteira para estabilizar os vasos radiculares:</p>
    </div>`;
}

/**
 * Processador lógico universal das respostas dos minijogos
 */
function checarRespostaMinijogo(comando) {
    const log = document.getElementById("log-jogo");
    clearInterval(dadosMinijogo.intervalo); // Limpa qualquer loop ativo
    modoMinijogo = false;

    if (minijogoAtivo === "HACK_VISUAL") {
        if (comando === "/travar" && dadosMinijogo.posicao >= 4 && dadosMinijogo.posicao <= 6) {
            estado.energia = Math.min(100, estado.energia + 20);
            conquistas.investigadorQuantico++;
            alterarSanidade(15);
            log.innerHTML = `<p class='alerta-sucesso'>> [SUCESSO]: Frequência sincronizada com precisão cirúrgica! +20 Energia. Minha rede neural respira aliviada.</p>`;
            abrirTelaDocumento(diariesElena[estado.dia] || "Log vazio ou corrompido.");
        } else {
            estado.energia = Math.max(0, estado.energia - 15);
            alterarSanidade(-10);
            log.innerHTML = `<p class='alerta-erro'>> [FALHA]: Feixe desalinhado! A descarga elétrica estressou meus barramentos (-15 Energia) e bagunçou meus pensamentos.</p>`;
        }
    } 
    
    else if (minijogoAtivo === "INJECAO_QUIMICA") {
        if (comando.toUpperCase() === dadosMinijogo.codigo) {
            estado.saudeArvore = Math.min(100, estado.saudeArvore + 15);
            log.innerHTML = `<p class='alerta-sucesso'>> [SUCESSO]: Composto sintetizado a tempo! As defesas celulares da Gênesis foram revigoradas (+15 Saúde da Planta).</p>`;
        } else {
            estado.saudeArvore = Math.max(0, estado.saudeArvore - 15);
            alterarSanidade(-15);
            log.innerHTML = `<p class='alerta-erro'>> [FALHA]: Erro de digitação molecular! A solução oxidou incorretamente, causando queima nas folhas (-15 Saúde da Planta).</p>`;
        }
    } 
    
    else if (minijogoAtivo === "REMENDO_HIDRAULICO") {
        const palpite = parseInt(comando);
        if (!isNaN(palpite) && palpite >= dadosMinijogo.min && palpite <= dadosMinijogo.max) {
            estado.agua = Math.min(100, estado.agua + 20);
            log.innerHTML = `<p class='alerta-sucesso'>> [SUCESSO]: Pressão equalizada perfeitamente! Os fluxos de irrigação foram normalizados com desperdício zero (+20 Água).</p>`;
        } else {
            estado.agua = Math.max(0, estado.agua - 15);
            log.innerHTML = `<p class='alerta-erro'>> [FALHA]: Válvulas estouraram devido ao erro de cálculo de pressão. Quilos de gel precioso evaporaram no vácuo marciano (-15 Água).</p>`;
        }
    }

    minijogoAtivo = null;
    log.innerHTML += `<p>Digite <b style='color:#fff'>/proximo</b> para prosseguir para o ciclo noturno.</p>`;
    atualizarPainelVisual();
    log.scrollTop = log.scrollHeight;
}
