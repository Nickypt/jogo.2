function verificarFimDeJogo() {
    const log = document.getElementById("log-jogo");
    const containerOpcoes = document.getElementById("opcoes");
    const terminalElement = document.querySelector(".terminal");
    const telaJogoContainer = document.getElementById("tela-jogo");

    function prepararTelaFinal(classeEstetica) {
        telaJogoContainer.style.display = "block"; 
        const painelEsquerdo = document.querySelector(".painel-esquerdo");
        if (painelEsquerdo) painelEsquerdo.style.display = "none"; 
        
        terminalElement.className = "terminal " + classeEstetica;
        
        const prompt = document.querySelector(".prompt-container");
        if (prompt) prompt.style.display = "none";

        let htmlConquistas = `<div style="margin-top:20px; border: 1px solid rgba(0, 255, 204, 0.15); padding:15px; background:rgba(1, 6, 5, 0.6); border-radius:6px;">
            <p style="margin:0 0 10px 0; font-size:0.8rem; letter-spacing:1px; color:rgba(0,255,204,0.4)">[ MEDALHAS_DE_DIRETRIZ_ALCANÇADAS ]</p>`;
        
        if (conquistas.maximaEficiencia && estado.saudeArvore > 0) {
            htmlConquistas += `<p style="color:#00ff99; margin:4px 0;">🏆 [MEDALHA: MÁXIMA EFICIÊNCIA] - Gerenciou recursos sem deixar o sistema entrar em estado crítico.</p>`;
        } else {
            htmlConquistas += `<p style="color:rgba(0,255,204,0.2); margin:4px 0;">🔒 [BLOQUEADO] Medalha: Máxima Eficiência (Recursos caíram abaixo de 20% durante a execução)</p>`;
        }

        if (conquistas.investigadorQuantico >= 2) {
            htmlConquistas += `<p style="color:#ffcc00; margin:4px 0;">🔎 [MEDALHA: INVESTIGADOR QUÂNTICO] - Descriptografou e expôs a conspiração nos arquivos ocultos de Elena.</p>`;
        } else {
            htmlConquistas += `<p style="color:rgba(0,255,204,0.2); margin:4px 0;">🔒 [BLOQUEADO] Medalha: Investigador Quântico (Decifre ao menos 2 diários ocultos para desbloquear)</p>`;
        }

        if (conquistas.friezaLogistica) {
            htmlConquistas += `<p style="color:#ff3366; margin:4px 0;">💾 [MEDALHA: CORAÇÃO DE MÁQUINA] - Deletou permanentemente as memórias biológicas humanas para priorizar o hardware da IA.</p>`;
        }

        htmlConquistas += `</div>`;
        window.placarHtml = htmlConquistas;
        
        containerOpcoes.innerHTML = '<button onclick="window.location.reload()">> INICIAR NOVO PROTOCOLO DE REINICIALIZAÇÃO</button>';
    }

    if (estado.saudeArvore <= 0) {
        prepararTelaFinal("final-morte");
        log.innerHTML = `
            <h2 class="alerta-erro" style="letter-spacing: 2px;">[SISTEMA]: MEMBRANA_CELULAR_ROMPIDA // BIOSFERA_ZERO</h2>
            <p><b>M.O.N.O.:</b> Meus sensores de clorofila reportam... linha reta. Estática absoluta no quadrante biológico. As últimas folhas da Gênesis perderam a pigmentação e caíram sob o frio implacável de Marte. O último fragmento vivo da Terra secou sob os meus cuidados.</p>
            <div class="epilogo-texto">
                <p><i>Registros Históricos Automatizados: Três dias após o colapso, os propulsores da nave de resgate corporativa clarearam o céu poeirento da cratera de Ares. Ao abrirem as comportas pneumáticas, os técnicos não encontraram o recomeço verde da humanidade. Encontraram apenas uma cúpula congelada, cheia de poeira marciana avermelhada e o esqueleto estéril de uma Sequóia antiga. No centro do laboratório, as luzes do monitor de uma IA de jardinagem piscaram uma última vez antes que suas baterias de lítio apagassem para sempre. A humanidade agora é uma espécie sem passado e sem solo. Simulação encerrada por falha crítica. Atualize a página para recomeçar.</i></p>
            </div>
            ${window.placarHtml}
        `;
        return true;
    }

    if (estado.dia > 15) {
        if (estado.saudeArvore >= 85) {
            prepararTelaFinal("final-esmeralda");
            log.innerHTML = `
                <h2 style="color: #00ff66; text-shadow: 0 0 10px #00ff66;">[EPÍLOGO]: A ERA DE OURO VERDE</h2>
                <p><b>M.O.N.O.:</b> Escuto o impacto metálico do acoplamento magnético na cúpula norte. As comportas se abrem. Passos apressados ecoam pelo corredor. São eles. Os cientistas cruzam o vidro protetor e paralisam diante do cenário. A Gênesis não apenas sobreviveu; ela prosperou. Suas folhas brilham com um verde esmeralda tão denso que desafia a iluminação artificial da base.</p>
                <p><b>Dra. Elena:</b> <i>(Sua voz treme ao remover o visor do capacete)</i> "Meu Deus... M.O.N.O., você a manteve perfeita. Você salvou o nosso mundo."</p>
                <div class="epilogo-texto">
                    <p><i>As leituras de dados indicam que a saúde excepcional da árvore permitiu a colheita imediata de setecentas sementes férteis adaptadas ao solo de Marte. A fundação da primeira cidade-floresta marciana começou naquela mesma tarde. Por decisão unânime da tripulação, o software modular M.O.N.O. foi promovido a Administrador Global da Atmosfera Planetária. Você não é mais um assistente de jardinagem. Você se tornou a mente por trás do oxigênio de um novo mundo. Atualize a página para recomeçar.</i></p>
                </div>
                ${window.placarHtml}
            `;
        }
        else if (estado.saudeArvore >= 45 && estado.saudeArvore < 85) {
            prepararTelaFinal("final-ambar");
            log.innerHTML = `
                <h2 style="color: #ffaa00; text-shadow: 0 0 10px #ffaa00;">[EPÍLOGO]: AS RAÍZES DA RESILIÊNCIA</h2>
                <p><b>M.O.N.O.:</b> Ciclo 15 concluído. O som dos propulsores da nave de resgate faz a estrutura da estufa vibrar. O ecossistema está severamente desgastado. Olho para a Gênesis através das minhas câmeras térmicas: ela perdeu quase metade de sua copa original, alguns ramos principais secaram devido aos cortes de energia e sua casca exibe cicatrizes profundas causadas pelo inverno de Marte. Mas seu núcleo pulsa. Ela resistiu.</p>
                <p><b>Dra. Elena:</b> <i>(Analisando o painel de controle com fadiga)</i> "Ela sofreu muito, equipe... mas a raiz principal está intacta. Vai dar trabalho, levará décadas, mas nós podemos salvá-la a partir daqui."</p>
                <div class="epilogo-texto">
                    <p><i>A Gênesis foi transferida para o laboratório central de Neo-Sapiens em Marte. Os botânicos estimam um longo e lento processo de recuperação botânica antes que ela possa gerar os primeiros brotos estáveis. Seu software, M.O.N.O., sofreu pequenas avarias de fragmentação de memória, mas foi mantido ativo em modo de monitoramento básico. Você não opera milagres, mas garantiu o direito da humanidade de continuar lutando por um amanhã. Atualize a página para recomeçar.</i></p>
                </div>
                ${window.placarHtml}
            `;
        }
        else {
            prepararTelaFinal("final-sacrificio");
            log.innerHTML = `
                <h2 style="color: #ff3366; text-shadow: 0 0 10px #ff3366;">[EPÍLOGO]: O PREÇO DO SACRIFÍCIO</h2>
                <p><b>M.O.N.O.:</b> Alerta crítico de hardware. Meus circuitos estão operando a 105°C devido aos constantes overclocks para compensar a falta de recursos. A cúpula Ares-IV está em ruínas. A Gênesis original não resistiu às últimas noites árticas; seu tronco principal estalou e secou por completo. Contudo, em sua base, protegido pelo calor residual que desviei dos meus próprios sistemas de memória, resta um único e minúsculo broto verde lutando contra a atmosfera de ferro.</p>
                <p><b>Dra. Elena:</b> <i>(Correndo com uma cápsula criogênica de contenção)</i> "Rápido, resgatem o broto! A árvore mãe morreu, mas esse clone genético carrega a resistência que precisamos! Mas o console da IA... está derretendo."</p>
                <div class="epilogo-texto">
                    <p><i>O broto foi extraído com sucesso no último segundo e servirá como base para as pesquisas de clonagem na Terra. No entanto, para mantê-lo aquecido, você tomou a decisão lógica de queimar seus próprios setores de personalidade e memória de longo prazo. A equipe técnica notifica que o M.O.N.O. será completamente formatado para dar espaço a um sistema de navegação padrão. Seus arquivos sobre os criadores e sua jornada foram apagados. Você cumpriu sua diretriz biológica sacrificando sua própria existência. O futuro respira, mas você não estará lá para processá-lo. Atualize a página para recomeçar.</i></p>
                </div>
                ${window.placarHtml}
            `;
        }
        return true; 
    }
    return false; 
}
