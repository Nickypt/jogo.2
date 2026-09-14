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
            htmlConquistas += `<p style="color:rgba(0,255,204,0.2); margin:4px 0;">🔒 [BLOQUEADO] Medalha: Máxima Eficiência (Recursos caíram abaixo de 20%)</p>`;
        }

        if (conquistas.investigadorQuantico >= 2) {
            htmlConquistas += `<p style="color:#ffcc00; margin:4px 0;">🔎 [MEDALHA: INVESTIGADOR QUÂNTICO] - Descriptografou e expôs a conspiração nos arquivos ocultos.</p>`;
        } else {
            htmlConquistas += `<p style="color:rgba(0,255,204,0.2); margin:4px 0;">🔒 [BLOQUEADO] Medalha: Investigador Quântico (Decifre ao menos 2 diários ocultos)</p>`;
        }

        if (conquistas.friezaLogistica) {
            htmlConquistas += `<p style="color:#ff3366; margin:4px 0;">💾 [MEDALHA: CORAÇÃO DE MÁQUINA] - Deletou permanentemente as memórias humanas para otimizar o hardware.</p>`;
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
                <p><i>Registros Históricos Automatizados: Três dias após o colapso, a nave de resgate clareou o céu escuro da cratera de Ares. Encontraram apenas uma cúpula congelada, cheia de poeira marciana avermelhada e o esqueleto estéril de uma Sequóia. A humanidade agora é uma espécie sem passado e sem solo.</i></p>
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
                <p><b>M.O.N.O.:</b> Escuto o impacto metálico do acoplamento magnético. São eles. Os cientistas cruzam o vidro e paralisam diante do cenário. A Gênesis prosperou. Suas folhas brilham com um verde esmeralda tão denso que desafia a iluminação artificial.</p>
                <p><b>Dra. Elena:</b> "Meu Deus... M.O.N.O., você a manteve perfeita. Você salvou o nosso mundo."</p>
                <div class="epilogo-texto">
                    <p><i>As leituras permitiram a colheita imediata de sementes férteis adaptadas ao solo marciano. A fundação da primeira cidade-floresta de Marte começou naquela mesma tarde. Você se tornou a mente por trás do oxigênio de um novo mundo.</i></p>
                </div>
                ${window.placarHtml}
            `;
        }
        else if (estado.saudeArvore >= 45 && estado.saudeArvore < 85) {
            prepararTelaFinal("final-ambar");
            log.innerHTML = `
                <h2 style="color: #ffaa00; text-shadow: 0 0 10px #ffaa00;">[EPÍLOGO]: AS RAÍZES DA RESILIÊNCIA</h2>
                <p><b>M.O.N.O.:</b> Ciclo 15 concluído. O ecossistema está severamente desgastado. A Gênesis perdeu quase metade de sua copa original devido aos cortes de energia... mas seu núcleo pulsa. Ela resistiu.</p>
                <p><b>Dra. Elena:</b> "Ela sofreu muito... mas a raiz principal está intacta. Vai dar trabalho, levará décadas, mas nós podemos salvá-la."</p>
                <div class="epilogo-texto">
                    <p><i>A Gênesis foi transferida para o laboratório central de Marte. Seu software foi mantido ativo em modo de monitoramento básico. Você garantiu o direito da humanidade de continuar lutando por um amanhã.</i></p>
                </div>
                ${window.placarHtml}
            `;
        }
        else {
            prepararTelaFinal("final-sacrificio");
            log.innerHTML = `
                <h2 style="color: #ff3366; text-shadow: 0 0 10px #ff3366;">[EPÍLOGO]: O PREÇO DO SACRIFÍCIO</h2>
                <p><b>M.O.N.O.:</b> Alerta crítico de hardware. Meus circuitos estão operando a 105°C. A Gênesis original não resistiu; seu tronco principal estalou e secou. Contudo, em sua base, protegido pelo calor residual que desviei dos meus próprios sistemas, resta um único broto verde lutando contra a atmosfera de ferro.</p>
                <p><b>Dra. Elena:</b> "Rápido, resgatem o broto! A árvore mãe morreu, mas esse clone carrega a resistência que precisamos!"</p>
                <div class="epilogo-texto">
                    <p><i>O broto foi extraído com sucesso e servirá como base para as pesquisas de clonagem. No entanto, para mantê-lo aquecido, você queimou seus próprios setores de personalidade e memória. O M.O.N.O. será completamente formatado. O futuro respira, mas você não estará lá para processá-lo.</i></p>
                </div>
                ${window.placarHtml}
            `;
        }
        return true; 
    }
    return false; 
}
