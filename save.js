// 💾 MÓDULO DE INTELIGÊNCIA DE PERSISTÊNCIA

function salvarProgresso() {
    const dadosSalvamento = {
        estado: estado,
        estadoAnterior: estadoAnterior,
        upgradesAtivos: upgradesAtivos,
        conquistas: conquistas,
        indicePrologo: indicePrologo
    };
    localStorage.setItem("mono_protocolo_biosfera_save", JSON.stringify(dadosSalvamento));
}

function existeSave() {
    return localStorage.getItem("mono_protocolo_biosfera_save") !== null;
}

function carregarProgresso() {
    const stringSave = localStorage.getItem("mono_protocolo_biosfera_save");
    if (!stringSave) return false;

    try {
        const dados = JSON.parse(stringSave);
        
        estado = dados.estado;
        estadoAnterior = dados.estadoAnterior;
        upgradesAtivos = dados.upgradesAtivos;
        conquistas = dados.conquistas;
        indicePrologo = dados.indicePrologo;

        document.getElementById("tela-inicial").classList.add("escondido");
        document.getElementById("tela-prologo").classList.add("escondido");
        document.getElementById("tela-jogo").classList.remove("escondido");
        document.getElementById("sys-status-tag").innerText = "SYS_STATUS: ACTIVE";
        
        const log = document.getElementById("log-jogo");
        log.innerHTML = `<p class="alerta-sucesso">> LINK NEURAL RESTAURADO COM SUCESSO.</p>
                         <p>M.O.N.O.: Backup recuperado da memória flash. Retomando Ciclo ${estado.dia.toString().padStart(2, '0')}...</p>
                         <p class="alerta-aviso">----------------------------------------</p>`;
        
        document.getElementById("terminal-input").focus();
        começarDia();
        return true;
    } catch (e) {
        console.error("Erro ao descriptografar save corrompido.", e);
        return false;
    }
}
