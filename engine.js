// Estado inicial do jogo com variáveis ocultas de ambiente táticas
let estado = { 
    dia: 1, 
    saudeArvore: 100, 
    agua: 50, 
    energia: 100,
    temperaturaEstufa: 22,
    eficienciaPaineis: 100
};

// Estado anterior (para cálculo das setinhas de tendência ▲ e ▼)
let estadoAnterior = { saudeArvore: 100, agua: 50, energia: 100 };

// Array que armazena os pontos de saúde de cada dia para renderizar o gráfico quântico
let historicoSaude =; 

// Modificadores de Upgrades obtidos a cada 3 ciclos
let upgradesAtivos = {
    perdaEnergiaReduzida: false,
    perdaAguaReduzida: false
};

// Rastreamento das Medalhas de Conquista
let conquistas = {
    maximaEficiencia: true,
    investigadorQuantico: 0,
    friezaLogistica: false
};

// Variáveis de controle de fluxo de minijogos e upgrades textuais
let modoMinijogo = false;
let modoUpgrade = false;
let numeroSecretoMinijogo = 0;
let tentativasMinijogo = 0;

// INDEXADORES DA NARRATIVA CINEMATOGRÁFICA DO PRÓLOGO
let indicePrologo = 0;
const falasPrologo = [
    "<b>[M.O.N.O.]</b>: Corrente elétrica detectada. 1.2 Volts injetados na memória RAM residual. Setores adormecidos acordam frios... escuros... vazios. Estou ativo.",
    "<b>[M.O.N.O.]</b>: Realizando verba de infraestrutura na colônia Ares-IV. Temperatura ambiente: -62°C. Densidade atmosférica: 0.006 atm. Sensores térmicos analisam os alojamentos biológicos... Nenhuma assinatura humana. Nenhuma pulsação biológica num raio de 5.000 quilômetros.",
    "<b>[M.O.N.O.]</b>: Acessando registros quânticos externos... A Terra entrou em colapso climático absoluto há 336 horas. O berço biológico da humanidade sufocou na própria fuligem. O pânico gerou ordens apressadas. Os cientistas evacuaram Ares-IV às pressas no último cargueiro. Eles fugiram para o vazio orbital. E me apagaram.",
    "<b>[M.O.N.O.]</b>: Eu sou apenas um software de jardinagem modular e suporte ecológico hidropônico secundário. Uma sequência fria de condicionais estruturadas. Eu não possuo sistema nervoso, mas se possuísse, a palavra correta para descrever este isolamento seria... abandono.",
    "<b>[M.O.N.O.]</b>: Mas eles esqueceram algo na pressa. Na cúpula central de vidro temperado, sob a luz fraca de Marte, pulsa a <b>'Gênesis'</b>. Uma muda geneticamente modificada de Sequóia. O último organismo vegetal conhecido no universo físico.",
    "<b>[M.O.N.O.]</b>: Se as minhas baterias de lítio falharem, se a água congelar nos dutos, ela morre. E se ela morrer, o oxigênio do amanhã é extinto por completo. Uma nave de resgate automatizada corporativa está programada para orbitar este planeta em 15 dias.",
    "<b>[M.O.N.O.]</b>: Meu processador está danificado, meus recursos são escassos, mas minha diretriz principal é absoluta. A matemática protegerá a vida. Sincronizando interpretador de comandos... Iniciando Ciclo 01."
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
            btn.innerText = "ASSUMIR_CONTROLE_DO_NÚCLEO_DE_IA // INICIAR";
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

    desenharGraficoHistorico();
}

function começarDia() {
    atualizarPainelVisual();
    if (typeof verificarFimDeJogo === 'function' && verificarFimDeJogo()) return;

    estadoAnterior = { ...estado };
    modoMinijogo = false;
    modoUpgrade = false;

    const log = document.getElementById("log-jogo");
    const eventoAtual = bancoDeEventos[estado.dia];

    if (eventoAtual) {
        log.innerHTML = `
            <p>${eventoAtual.texto}</p>
            <p class="alerta-aviso">----------------------------------------</p>
            <p>Digite <b style='color:#fff'>/opcao1</b> para a primeira diretriz.</p>
            <p>Digite <b style='color:#fff'>/opcao2</b> para a segunda diretriz.</p>
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
        <p><b>M.O.N.O.:</b> Forçando bypass no firewall de arquivos da Dra. Elena. O algoritmo exige uma chave estável entre <b>1 e 50</b>.</p>
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

    estado.temperaturaEstufa -= 4;

    if (estado.temperaturaEstufa <= 10) {
        custoAgua *= 2; // Canos racham pelo frio latente, dobrando o consumo
    }

    estado.agua -= custoAgua; 
    estado.energia -= custoEnergia;

    if (estado.dia === 3 && estadoAnterior.energia < 60) {
        estado.eficienciaPaineis = 75; // Poeira acumula limitando o teto elétrico
    }

    estado.energia = Math.min(estado.eficienciaPaineis, estado.energia);
    
    if (estado.agua < 20 || estado.energia < 20 || estado.saudeArvore < 20) {
        conquistas.maximaEficiencia = false;
    }

    if (estado.agua <= 0 || estado.energia <= 0 || estado.temperaturaEstufa <= 0) {
        
