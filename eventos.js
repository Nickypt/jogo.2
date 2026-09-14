const bancoDeEventos = {
    1: {
        texto: "<span class='alerta-aviso'>[LOG DE ENTRADA]</span>: Ciclo 01 operacional. O silêncio na base Ares-IV é absoluto. O solo de Marte está congelando as linhas externas de distribuição líquida. Preciso agir.",
        opcoes: [
            { texto: "Ativar resistências térmicas nos dutos (-20 Energia)", efeito: { energia: -20, agua: 0, saude: 0 }, feedback: "Tubulações descongeladas com sucesso. Temperatura interna estabilizada temporariamente." },
            { texto: "Forçar bombeamento por pressão mecânica (-15 Água)", efeito: { energia: 0, agua: -15, saude: -5 }, feedback: "A pressão quebrou o gelo, mas o impacto rompeu uma válvula menor, ferindo as raízes da Gênesis." }
        ]
    },
    2: {
        texto: "M.O.N.O.: Sensores acusam uma fina camada de poeira estática acumulada sobre as placas solares fotovoltaicas. Vasculhando os logs antigos, encontrei uma mensagem da Dra. Elena: <i>'O M.O.N.O. não vai aguentar sozinho se as tempestades aumentarem.'</i> A Terra negou recursos. Estou sozinho.",
        opcoes: [
            { texto: "Utilizar jatos de ar comprimido purificado (-15 Água)", efeito: { energia: 15, agua: -15, saude: 0 }, feedback: "Painéis limpos. O rendimento da bateria voltou ao pico nominal de processamento." },
            { texto: "Ignorar e manter energia em modo econômico", efeito: { energia: -20, agua: 0, saude: -10 }, feedback: "A poeira acumulou ainda mais. A estufa esfriou demais durante a noite marciana." }
        ]
    },
    3: {
        texto: "M.O.N.O.: Encontrei um arquivo corrompido nos setores de memória. O motivo da fuga não foi uma tempestade solar... os cientistas descobriram um composto tóxico infiltrando o lençol freático de Marte. A água automática está contaminada!",
        opcoes: [
            { texto: "Desviar energia para o super-filtro molecular (-30 Energia)", efeito: { energia: -30, agua: 0, saude: +10 }, feedback: "O filtro limpou as toxinas marcianas. A Gênesis reage bem ao composto puro." },
            { texto: "Neutralizar com agentes químicos agrícolas (-25 Água)", efeito: { energia: 0, agua: -25, saude: -5 }, feedback: "Os produtos químicos neutralizaram o veneno, mas alteraram o pH do solo." }
        ]
    },
    4: {
        texto: "M.O.N.O.: Registro de áudio recuperado. É a voz da Dra. Elena: <i>'Não podemos levá-la, não há oxigênio para uma Sequóia na cápsula!'</i> Enquanto processo o arquivo, meu processador entra em superaquecimento devido ao estresse de dados.",
        opcoes: [
            { texto: "Desviar energia para resfriar meus bancos de dados (-20 Energia)", efeito: { energia: -20, agua: 0, saude: -5 }, feedback: "Meu sistema resfriou, mas a falta de luz artificial por algumas horas estressou as folhas." },
            { texto: "Deletar os registros de voz para liberar RAM (+15 Energia)", efeito: { energia: 15, agua: 0, saude: 0 }, feedback: "Memória limpa. As vozes dos meus criadores sumiram para sempre, mas meu processamento está estável." }
        ]
    },
    5: {
        texto: "M.O.N.O.: Um tremor de terra na cratera Ares quebrou uma das mangueiras de captação de gelo subterrâneo. Estamos perdendo água no solo marciano a cada minuto!",
        opcoes: [
            { texto: "Selar o duto remotamente usando solda elétrica rápida (-30 Energia)", efeito: { energia: -30, agua: 0, saude: 0 }, feedback: "O vazamento foi contido instantaneamente, mas o custo elétrico foi altíssimo." },
            { texto: "Enviar um drone utilitário para o conserto manual (-20 Água)", efeito: { energia: 0, agua: -20, saude: 0 }, feedback: "O drone demorou. Muita água evaporou na atmosfera rarefeita de Marte antes do término." }
        ]
    },
    6: {
        texto: "M.O.N.O.: Um fungo marciano endêmico começou a se proliferar rapidamente na base da terra da Gênesis. Ele está se alimentando dos nutrientes vitais da raiz e emitindo um gás avermelhado.",
        opcoes: [
            { texto: "Saturar o solo com água oxigenada para afogar o fungo (-25 Água)", mapping: { energia: 0, agua: -25, saude: +5 }, feedback: "O fungo recuou devido ao excesso de umidade. A raiz absorveu o líquido." },
            { texto: "Irradiar a base da árvore com luz UV de alta intensidade (-20 Energia)", efeito: { energia: -20, agua: 0, saude: -10 }, feedback: "A radiação eliminou o fungo, mas acabou queimando parte do tecido vegetal sensível." }
        ]
    },
    7: {
        texto: "<span class='alerta-erro'>[ALERTA DE TEMPESTADE GLOBAL]</span>: Uma colossal parede de poeira de ferro engoliu a colônia. O céu ficou escuro. Painéis solares gerando zero de energia.",
        opcoes: [
            { texto: "Desligar o suporte de vida dos alojamentos vazios (+20 Energia)", efeito: { energia: 20, agua: 0, saude: 0 }, feedback: "A energia foi redirecionada. O resto da base congelou, mas a estufa continuou aquecida." },
            { texto: "Manter sistemas da colônia aquecidos (-25 Energia)", efeito: { energia: -25, agua: 0, saude: -5 }, feedback: "Bateria drenada severamente. Ninguém voltou. Apenas o som desolador do vento." }
        ]
    },
    8: {
        texto: "M.O.N.O.: Um curto-circuito fritou o sensor de umidade do solo. Estou cego. Não consigo ler se a terra está seca ou encharcada. Se eu errar a dose de água, posso apodrecer as raízes.",
        opcoes: [
            { texto: "Arriscar uma rega padrão baseada em estimativas (-15 Água)", efeito: { energia: 0, agua: -15, saude: +10 }, feedback: "Sorte. O cálculo probabilístico estava correto. A terra absorveu bem a água." },
            { texto: "Não injetar água hoje para evitar o risco de afogamento", efeito: { energia: 0, agua: 0, saude: -20 }, feedback: "O solo já estava seco. A árvore passou o dia desidratada e as folhas começaram a cair." }
        ]
    },
    9: {
        texto: "M.O.N.O.: Uma mensagem oficial chega à caixa de entrada: <i>'M.O.N.O., descobrimos que o colapso na Terra foi total. Se a Sequóia morrer, não há plano B'</i>. Se eu possuísse sentimentos, a pressão seria imensa.",
        opcoes: [
            { texto: "Forçar overclock do gerador térmico sacrificando água (-15 Água)", efeito: { energia: 25, agua: -15, saude: 0 }, feedback: "Usei vapor d'água sob alta pressão. Consegui uma carga massiva de bateria." },
            { texto: "Acceptar a oscilação natural da rede elétrica", efeito: { energia: -15, agua: 0, saude: -5 }, feedback: "A oscilação causou uma queda repentina no aquecimento. A árvore sofreu pequenas fissuras." }
        ]
    },
    10: {
        texto: "<span class='alerta-aviso'>[SINAL INTERNO]</span>: A cúpula de vidro sofreu uma microfratura. O oxigênio está vazando e o gás carbônico subindo. A árvore está sufocando em seu próprio ar reciclado.",
        opcoes: [
            { texto: "Ativar injetores de nitrogênio para selar a pressão (-20 Energia)", efeito: { energia: -20, agua: 0, saude: +5 }, feedback: "A pressão estabilizou, contendo o vazamento temporariamente." },
            { texto: "Saturar o ambiente com umidade para assentar gases (-30 Água)", efeito: { energia: 0, agua: -30, saude: 0 }, feedback: "Gasto massivo de água, mas a atmosfera interna ficou respirável para as folhas." }
        ]
    }
};
