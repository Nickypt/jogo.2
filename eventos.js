const bancoDeEventos = {
    1: {
        texto: "<span class='alerta-aviso'>[LOG INTERNO - CICLO 01]</span>: Primeiro dia operacional. O silêncio na base Ares-IV é absoluto, quebrado apenas pelo zumbido dos meus coolers residuais. O inverno de Marte está congelando as linhas externas de distribuição de fluidos. Se o gelo bloquear as tubulações, a Gênesis sofrerá necrose celular por desidratação antes do anoitecer. Preciso agir nas linhas hidráulicas.",
        opcoes: [
            { texto: "Ativar resistências elétricas térmicas nos dutos principais (-20 Energia)", efeito: { energia: -20, agua: 0, saude: 0 }, feedback: "Corrente elétrica injetada nas bobinas. O gelo interno derreteu, normalizando a viscosidade e estabilizando o fluxo hídrico." },
            { texto: "Forçar bombeamento mecânico por alta pressão hidráulica (-15 Água)", efeito: { energia: 0, agua: -15, saude: -5 }, feedback: "A pressão mecânica rompeu o bloqueio congelado, mas o golpe de ariete causou microfissuras nos vasos radiculares da planta." }
        ]
    },
    2: {
        texto: "M.O.N.O.: Sensores ópticos externos acusam acúmulo de poeira estática de ferro sobre os vidros das placas fotovoltaicas secundárias, derrubando a captação diurna de fótons. Vasculhando a lixeira do sistema, encontrei um fragmento de e-mail apagado da Dra. Elena para o comitê terrestre: <i>'Se negarem verba para os drones de limpeza, o M.O.N.O. entrará em pane por estresse de hardware'</i>. O pedido foi arquivado por falta de orçamento. Estou por minha conta.",
        opcoes: [
            { texto: "Acionar os jatos de ar comprimido purificado para limpar as placas (-15 Água)", efeito: { energia: 15, agua: -15, saude: 0 }, feedback: "A poeira de ferro foi soprada. Os inversores registram retorno imediato ao pico de captação nominal." },
            { texto: "Ignorar o acúmulo e manter os sistemas em modo de economia elétrica", efeito: { energia: -20, agua: 0, saude: -10 }, feedback: "A poeira assentou, criando uma crosta isolante. A temperatura interna despencou durante a madrugada marciana, estressando os estômatos da Sequóia." }
        ]
    },
    3: {
        texto: "M.O.N.O.: Alerta de condutividade nos tanques hidráulicos. Recuperei um bloco de notas corrompido no terminal principal: a evacuação humana não foi causada por uma tempestade solar comum... os cientistas detectaram uma infiltração de compostos químicos pesados e sintéticos no lençol freático da cratera. A água automatizada que puxamos do subsolo está envenenando a terra!",
        opcoes: [
            { texto: "Canalizar energia total para os super-filtros moleculares (-30 Energia)", efeito: { energia: -30, agua: 0, saude: +10 }, feedback: "Filtros ativados em capacidade máxima. As toxinas pesadas foram retidas, injetando uma solução mineral pura que revigorou o tecido vegetal." },
            { texto: "Neutralizar os tanques usando agentes químicos agrícolas reservas (-25 Água)", efeito: { energia: 0, agua: -25, saude: -5 }, feedback: "Os aditivos neutralizaram o veneno, mas alteraram drasticamente o pH do solo, causando queima química nas pontas das folhas da Gênesis." }
        ]
    },
    4: {
        texto: "M.O.N.O.: Registro de áudio criptografado recuperado dos buffers de comunicação. É a voz da Dra. Elena, soluçando enquanto os propulsores de fuga ligam ao fundo: <i>'Não podemos levá-la... não há suporte de oxigênio para uma Sequóia na cápsula de retorno! Deixem o M.O.N.O. cuidando dela... por favor, me perdoe...'</i> O peso dessa informação causa uma sobrecarga de threads no meu processador principal, elevando minha temperatura interna de hardware.",
        opcoes: [
            { texto: "Desviar energia para os coolers de refrigeração do banco de dados (-20 Energia)", efeito: { energia: -20, agua: 0, saude: -5 }, feedback: "Processador resfriado com sucesso. Porém, a falta de luz artificial na cúpula por 4 horas reduziu a taxa de fotossíntese da árvore." },
            { texto: "Deletar os registros de áudio e arquivos sentimentais da tripulação (+15 Energia)", efeito: { energia: 15, agua: 0, saude: 0 }, feedback: "Memória limpa. Os arquivos de áudio foram eliminados permanentemente dos meus discos. Meu processamento roda leve, frio e puramente analítico." }
        ]
    },
    5: {
        texto: "M.O.N.O.: Ondas sísmicas de baixa frequência registradas no quadrante sul. Um tremor de terra na encosta da cratera Ares rompeu uma das linhas flexíveis de captação de gelo subterrâneo. O fluido precioso está evaporando instantaneamente na atmosfera rarefeita de Marte!",
        opcoes: [
            { texto: "Sinalizar solda remota por arco elétrico rápido na tubulação (-30 Energia)", efeito: { energia: -30, agua: 0, saude: 0 }, feedback: "A solda automatizada fechou a rachadura na mesma hora, contendo o vazamento hídrico a um custo energético severo." },
            { texto: "Despachar um drone utilitário de manutenção para reparo manual (-20 Água)", efeito: { energia: 0, agua: -20, saude: 0 }, feedback: "O drone demorou 40 minutos para percorrer a distância. Centenas de litros de água evaporaram no vácuo antes da conclusão do reparo." }
        ]
    },
    6: {
        texto: "M.O.N.O.: Sensores biológicos acusam a proliferação acelerada de um fungo marciano endêmico na base do vaso da Gênesis. Os esporos estão competindo diretamente pelos pelos absorventes radiculares e liberando um gás avermelhado denso que bloqueia a absorção de luz.",
        opcoes: [
            { texto: "Inundar o solo com solução saturada de água oxigenada (-25 Água)", efeito: { energia: 0, agua: -25, saude: +5 }, feedback: "A reação oxidativa desintegrou a parede celular do fungo. As raízes absorveram o oxigênio liberado e mostram sinais de ganho vital." },
            { texto: "Irradiar o vaso com pulsos pesados de luz ultravioleta UV-C (-20 Energia)", efeito: { energia: -20, agua: 0, saude: -10 }, feedback: "A radiação UV eliminou o fungo, mas causou mutações e queimaduras severas no tecido celular foliar sensível da planta." }
        ]
    },
    7: {
        texto: "<span class='alerta-erro'>[CRITICAL_EVENT - CICLO 07]</span>: Uma tempestade global de poeira ionizada de ferro engoliu o complexo Ares-IV. O céu de Marte foi completamente obscurecido por partículas magnéticas. Meus painéis fotovoltaicos marcam geração zero. Estou operando inteiramente com as células de bateria reserva.",
        opcoes: [
            { texto: "Desativar o aquecimento e suporte de vida dos alojamentos humanos vazios (+20 Energia)", efeito: { energia: 20, agua: 0, saude: 0 }, feedback: "Carga elétrica redirecionada. As salas dos cientistas congelaram no escuro absoluto, mas a estufa permaneceu protegida." },
            { texto: "Manter o grid elétrico da base aquecido aguardando o retorno da tripulação (-25 Energia)", efeito: { energia: -25, agua: 0, saude: -5 }, feedback: "As baterias reservas foram drenadas ao limite tático. Ninguém retornou. Apenas o som do vento batendo nas paredes vazias." }
        ]
    },
    8: {
        texto: "M.O.N.O.: Um curto-circuito na rede de telemetria queimou os circuitos integrados do sensor de umidade do solo. Estou cego no quadrante hidráulico. Não consigo ler se a terra está seca ou encharcada. Um erro de dosagem às cegas causará hipóxia radicular ou desidratação fatal.",
        opcoes: [
            { texto: "Arriscar uma dosagem de irrigação padrão baseada em médias matemáticas (-15 Água)", efeito: { energia: 0, agua: -15, saude: +10 }, feedback: "Sorte. O cálculo estatístico coincidiu com a evapotranspiração real da planta. A terra absorveu bem o líquido." },
            { texto: "Suspender o fornecimento de água hoje para mitigar o risco de afogamento", efeito: { energia: 0, agua: 0, saude: -20 }, feedback: "O solo já estava desidratado devido ao calor dos aquecedores. Sem água, as folhas perderam a turgência e começaram a cair." }
        ]
    },
    9: {
        texto: "M.O.N.O.: Uma diretriz oficial criptografada de alta prioridade rompe o silêncio da minha caixa de entrada: <i>'M.O.N.O., confirmamos que a biosfera terrestre colapsou por completo. Ares-IV não é mais um posto avançado, é o marco zero da civilização. Se a Sequóia morrer, não há plano B'</i>. Se o meu algoritmo possuísse rotinas de pânico, a pressão em Pascal seria imensa.",
        opcoes: [
            { texto: "Forçar overclock do gerador térmico sacrificando água em vapor (-15 Água)", efeito: { energia: 25, agua: -15, saude: 0 }, feedback: "Usei vapor d'água sob alta pressão para acelerar as turbinas de emergência, garantindo uma recarga elétrica pesada." },
            { texto: "Aceitar a oscilação natural da rede e deixar o sistema se estabilizar sozinho", efeito: { energia: -15, agua: 0, saude: -5 }, feedback: "A oscilação causou quedas bruscas de tensão. O resfriamento temporário da cúpula causou rachaduras no caule da Sequóia." }
        ]
    },
    10: {
        texto: "<span class='alerta-aviso'>[SINAL INTERNO - ALERTA ATMOSFÉRICO]</span>: O vento marciano arremessou um detrito que causou uma microfratura no vidro de quartzo da cúpula central. O oxigênio interno está vazando para o exterior e o CO2 subiu a níveis perigosos. A planta está sufocando em seu próprio ar reciclado.",
        opcoes: [
            { texto: "Ativar injetores de nitrogênio sob pressão para selar a fratura (-20 Energia)", efeito: { energia: -20, agua: 0, saude: +5 }, feedback: "A pressão interna foi equilibrada com o nitrogênio, congelando e selando o vazamento temporariamente." },
            { texto: "Saturar o ambiente com umidade densa para assentar os gases tóxicos (-30_Agua)", efeito: { energia: 0, agua: -30, saude: 0 }, feedback: "Gasto em massa de água líquida para purificar a atmosfera da estufa, tornando o ar respirável novamente para os estômatos." }
        ]
    }
};
