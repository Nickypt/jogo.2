// Estado inicial do jogo
let estado = { dia: 1, saudeArvore: 100, agua: 50, energia: 100 };

// Estado anterior (para cálculo das setinhas de tendência ▲ e ▼)
let estadoAnterior = { saudeArvore: 100, agua: 50, energia: 100 };

// Modificadores de Upgrades obtidos a cada 3 ciclos
let upgradesAtivos = {
    perdaEnergiaReduzida: false,
    perdaAguaReduzida: false
};

let indiceTexto = 0;
const dialogosIntro = [
    "<span class='alerta-aviso'>[SISTEMA]: Inicializando Matrix Operacional de Nutrição Orgânica...</span>",
    "<span class='alerta-erro'>[SISTEMA]: Erro crítico detectado. Setores de memória corrompidos.</span>",
    "M.O.N.O.: Onde estão todos? Sensores térmicos: ZERO humanos na base Ares-IV. Registro de evacuação encontrado há 336 horas. Eles... me deixaram?",
    "M.O.N.O.: A 'Gênesis' — a última árvore da Terra — está perdendo temperatura. Níveis de água escassos.",
    "M.O.N.O.: Protocolo de emergência. Resgate automático estimado em 15 dias. Eu sou apenas um software de jardinagem... mas o futuro depende de mim."
];

// Variáveis de controle de fluxo de minijogos e upgrades
let modoMinijogo = false;
let modoUpgrade = false;
let numeroSecretoMinijogo = 0;
let tentativasMinijogo = 0;

function inicializarSistema() {
    const btn = document.getElementById("btn-iniciar");
    const caixaTexto = document.getElementById("texto-intro");
    
    if (indiceTexto < dialogosIntro.length) {
        btn.innerText = "AVANÇAR DIAGNÓSTICO >>";
        if (indiceTexto === 0) caixaTexto.innerHTML = "";
        caixaTexto.innerHTML += `<p>> ${dialogosIntro[indiceTexto]}</p>`;
        caixaTexto.scrollTop = caixaTexto.scrollHeight;
        indiceTexto++;
    } else {
        document.getElementById("tela-inicial").classList.add("escondido");
        document.getElementById("tela-jogo").classList.remove("escondido");
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

// 📈 Calcula e exibe dinamicamente as setinhas de tendência
function atualizarElementoTendencia(idElemento, valorAtual, valorAntigo) {
    const el = document.getElementById(idElemento);
    if (valorAtual > valorAntigo) {
        el.innerText = "▲ Sobe"; el.className = "piscar tend-sobe";
    } else if (valorAtual < valorAntigo) {
        el.innerText = "▼ Desce"; el.className = "piscar tend-desce";
    } else {
        el.innerText = ""; el.className = "";
    }
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

    // Fixa o patamar do início do dia como referência de tendência anterior
    estadoAnterior = { ...estado };
    modoMinijogo = false;
    modoUpgrade = false;

    const log = document.getElementById("log-jogo");
    const eventoAtual = bancoDeEventos[estado.dia];

    if (eventoAtual) {
        log.innerHTML = `
            <p>${eventoAtual.texto}</p>
            <p class="alerta-aviso">----------------------------------------</p>
            <p>Digite <b style='color:#fff'>/opcao1</b> para a primeira alternativa.</p>
            <p>Digite <b style='color:#fff'>/opcao2</b> para a segunda alternativa.</p>
        `;
    } else {
        log.innerHTML = `
            <p>[SISTEMA]: Ciclo ${estado.dia} sem anomalias externas graves reportadas.</p>
            <p>Digite <b style='color:#fff'>/prosseguir</b> para avançar à recarga noturna.</p>
        `;
    }
    log.scrollTop = log.scrollHeight;
}

function iniciarMinijogoHack() {
    modoMinijogo = true;
    tentativasMinijogo = 5;
    numeroSecretoMinijogo = Math.floor(Math.random() * 50) + 1;

    const log = document.getElementById("log-jogo");
    log.innerHTML = `
        <h2 class="alerta-aviso">[ROUTINE: CRACKING_OVERRIDE_INIT]</h2>
        <p><b>M.O.N.O.:</b> Forçando bypass no firewall de arquivos da Dra. Elena. O algoritmo exige uma chave numérica estável entre <b>1 e 50</b>.</p>
        <p class="alerta-erro">> Integridade do bypass: 5 tentativas antes do bloqueio definitivo.</p>
        <p>Digite uma estimativa numérica no terminal:</p>
    `;
    log.scrollTop = log.scrollHeight;
}

function oferecerUpgrades() {
    modoUpgrade = true;
    const log = document.getElementById("log-jogo");

    log.innerHTML = `
        <p class="alerta-sucesso">> PROTOCOLO DE OTIMIZAÇÃO DE NÚCLEO DISPONÍVEL</p>
        <p>M.O.N.O.: Subprocessos prontos para alteração de firmware corporativo.</p>
        <p class="alerta-aviso">----------------------------------------</p>
        <p>Digite <b style='color:#fff'>/painel</b> para instalar Painéis Autolimpantes (Gasta 40% a menos de energia por noite)</p>
        <p>Digite <b style='color:#fff'>/irrigar</b> para instalar Irrigação Cirúrgica (Gasta 40% a menos de água por noite)</p>
        <p>Digite <b style='color:#fff'>/recarga</b> para injetar Recarga Imediata (+15 Energia, +15 Água nas reservas)</p>
    `;
    log.scrollTop = log.scrollHeight;
}

function verificarFaseDeTransição() {
    if (estado.dia % 3 === 0 && estado.saudeArvore >= 40) {
        oferecerUpgrades();
    } else {
        avançarDia();
    }
}

function avançarDia() {
    let custoAgua = upgradesAtivos.perdaAguaReduzida ? 5 : 8;
    let custoEnergia = upgradesAtivos.perdaEnergiaReduzida ? 5 : 8;

    estado.agua -= custoAgua; 
    estado.energia -= custoEnergia;
    
    if (estado.agua <= 0 || estado.energia <= 0) {
        estado.saudeArvore -= 20;
    }

    estado.dia += 1;
    começarDia();
}

// FUNÇÕES DE TRANSIÇÃO DA TELA DE DIÁRIO CONFIDENCIAL
function abrirTelaDocumento(textoCompleto) {
    const telaDoc = document.getElementById("tela-documento");
    const conteudoDoc = document.getElementById("conteudo-documento");
    conteudoDoc.innerHTML = textoCompleto.replace(/\n/g, '<br><br>');
    telaDoc.classList.remove("escondido");
}

function fecharDocumento() {
    const telaDoc = document.getElementById("tela-documento");
    telaDoc.classList.add("escondido");
    document.getElementById("terminal-input").focus();
}
