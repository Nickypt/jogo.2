const bancoDeEventos = {
    1: {
        texto: "<span class='alerta-aviso'>[LOG DE ENTRADA - M.O.N.O.]</span>: Ciclo 01 operacional. O solo de Marte está resfriando severamente as tubulações hidráulicas externas da base Ares-IV. Preciso intervir de imediato ou o fluxo térmico congelará, interrompendo o ciclo de irrigação vital.",
        opcoes: [
            { texto: "Ativar resistências térmicas nos dutos principais (-20 Energia)", efeito: { energia: -20, agua: 0, saude: 0 }, feedback: "Linhas térmicas de cobre aquecidas com sucesso. O gelo interno derreteu e a pressão da água voltou ao nível nominal estável." },
            { texto: "Forçar bombeamento por pulso de alta pressão (-15 Água)", efeito: { energia: 0, agua: -15, saude: -5 }, feedback: "A pressão mecânica rompeu os blocos de gelo, mas o estresse físico causou micro-fissuras nos capilares radiculares da Gênesis." }
        ]
    },
    2: {
        texto: "M.O.N.O.: Sensores ópticos externos acusam uma leve precipitação de poeira de ferro ionizada sobre as placas solares fotovoltaicas secundárias. A captação de fótons registrou um declínio imediato na geração diurna de Watts.",
        opcoes: [
            { texto: "Acionar jatos de ar comprimido purificado nos painéis (-15 Água)", efeito: { energia: 15, agua: -15, saude: 0 }, feedback: "Poeira repelida com sucesso. O fluxo de elétrons voltou ao pico de eficiência nominal do circuito das baterias." },
            { texto: "Ignorar o acúmulo e manter o suporte elétrico em economia", efeito: { energia: -20, agua: 0, saude: -10 }, feedback: "A poeira acumulou e solidificou. A falta de corrente elétrica resfriou severamente a cúpula biológica durante a noite marciana." }
        ]
    },
    3: {
        texto: "M.O.N.O.: Vasculhando partições de memória profunda recém-reaquecidas, encontrei o manifesto confidencial da fuga. A evacuação não foi motivada por tempestades... os cientistas detectaram uma infiltração de perclorato sintético tóxico no aquífero da colônia. Alarme ativo: as bombas injetaram fluido contaminado!",
        opcoes: [
            { texto: "Redirecionar energia para o super-filtro molecular (-30 Energia)", efeito: { energia: -30, agua: 0, saude: +10 }, feedback: "O filtro de carbono quântico reteve os percloratos marcianos. A Gênesis reage bem ao fluido livre de toxinas sintéticas." },
            { texto: "Neutralizar os sais tóxicos com agentes agrícolas químicos (-25 Água)", efeito: { energia: 0, agua: -25, saude: -5 }, feedback: "A reação química reduziu o veneno, mas alterou drasticamente o pH do solo, causando queima química nas extremidades das folhas." }
        ]
    },
    4: {
        texto: "M.O.N.O.: Arquivo de áudio corrompido recuperado. É o choro da Dra. Elena no embarque de fuga: <i>'Não podemos levá-la, não há oxigênio para uma Sequóia na cápsula! M.O.N.O., cuide dela...'</i> A carga desses logs está gerando um superaquecimento térmico severo nos meus bancos de dados centrais.",
        opcoes: [
            { texto: "Canalizar refrigeração líquida sacrificando luz solar (-20 Energia)", efeito: { energia: -20, agua: 0, saude: -5 }, feedback: "Meu processador resfriou, mas a interrupção da luz solar artificial estressou os estômatos da Gênesis por algumas horas." },
            { texto: "Purgar permanentemente os arquivos de voz humanos para liberar RAM (+15 Energia)", efeito: { energia: 15, agua: 0, saude: 0 }, feedback: "Logs destruídos. As vozes dos meus criadores foram apagadas do universo digital, mas meus circuitos rodam mais frios e limpos." }
        ]
    },
    5: {
        texto: "M.O.N.O.: Um microsismo na Cratera de Ares deslocou as placas geológicas locais e rompeu a mangueira flexível de captação de água subterrânea. O fluido essencial está vazando e evaporando direto no vácuo seco de Marte.",
        opcoes: [
            { texto: "Selar a fissura remotamente com arco de solda elétrica rápida (-30 Energia)", efeito: { energia: -30, agua: 0, saude: 0 }, feedback: "Solda executada perfeitamente. O vazamento parou na mesma hora, mas o consumo elétrico drenou as células de energia." },
            { texto: "Despachar o drone utilitário para contenção física manual (-20 Água)", efeito: { energia: 0, agua: -20, saude: 0 }, feedback: "O drone utilitário demorou para calibrar os braços mecânicos. Litros de água evaporaram na atmosfera rarefeita antes do reparo." }
        ]
    },
    6: {
        texto: "M.O.N.O.: Esporos de um fungo marciano anaeróbico espalharam-se pelo substrato da planta. Eles estão digerindo os minerais da terra e emitindo um gás avermelhado denso que bloqueia a absorção de luz pelas folhas.",
        opcoes: [
            { texto: "Saturar o solo com solução oxidante de água oxigenada (-25 Água)", efeito: { energia: 0, agua: -25, saude: +5 }, feedback: "A oxigenação sufocou os micélios do fungo. As raízes da Gênesis absorveram o oxigênio livre e recuperaram vigor." },
            { texto: "Irradiar a base inteira com feixe ultravioleta pesado (-20 Energia)", efeito: { energia: -20, agua: 0, saude: -10 }, feedback: "A radiação UV eliminou o fungo marciano, mas gerou necrose celular severa nos tecidos foliares mais sensíveis da planta." }
        ]
    },
    7: {
        texto: "<span class='alerta-erro'>[CRITICAL // TEMPESTADE DE FERRO]</span>: Uma colossal barreira de poeira magnética cobriu completamente o céu de Ares-IV. A luz solar diurna caiu para 0.01%. Os painéis fotovoltaicos registram geração zero de energia.",
        opcoes: [
            { texto: "Cessar o suporte térmico dos alojamentos humanos vazios (+20 Energia)", efeito: { energia: 20, agua: 0, saude: 0 }, feedback: "Energia redirecionada. As salas dos cientistas congelaram no escuro absoluto, mas a estufa central permaneceu protegida." },
            { texto: "Manter os módulos da colônia aquecidos aguardando retorno (-25 Energia)", efeito: { energia: -25, agua: 0, saude: -5 }, feedback: "As baterias sofreram uma descarga severa. Ninguém voltou. Apenas o eco desolador do vento marciano nas paredes de metal." }
        ]
    },
    8: {
        texto: "M.O.N.O.: Um curto-circuito fritou o barramento de dados do sensor hidráulico do painel esquerdo. Estou operando às cegas: não consigo ler se o solo está seco ou encharcado. Errar a dose de água agora pode apodrecer o sistema radicular.",
        opcoes: [
            { texto: "Executar uma irrigação padrão baseada em estimativas antigas (-15 Água)", efeito: { energia: 0, agua: -15, saude: +10 }, feedback: "Sorte. O cálculo histórico probabilístico estava correto. A terra absorveu bem o líquido e o estresse hídrico recuou." },
            { texto: "Bloquear a injeção hidráulica por segurança para evitar afogamento", efeito: { energia: 0, agua: 0, saude: -20 }, feedback: "O substrato já estava desidratado. Sem o fluxo diário, os pelos absorventes secaram e as folhas desabaram murchas." }
        ]
    },
    9: {
        texto: "M.O.N.O.: Transmissão de alta prioridade da corporação fura o estático da antena: <i>'M.O.N.O., a biosfera da Terra colapsou por completo. Ares-IV não é mais um posto de pesquisa, é o marco zero da civilização. Mantenha o espécime vivo.'</i> Minhas diretrizes são matemáticas, mas a urgência dos dados é esmagadora.",
        opcoes: [
            { texto: "Forçar overclock do gerador principal queimando vapor de água (-15 Água)", efeito: { energia: 25, agua: -15, saude: 0 }, feedback: "Vapor de água superaquecido injetado sob alta pressão nas turbinas. Carga elétrica massiva recuperada." },
            { texto: "Aceitar a oscilação da rede e deixar o sistema se estabilizar", efeito: { energia: -15, agua: 0, saude: -5 }, feedback: "A flutuação de energia derrubou o aquecimento por 4 horas. A árvore sofreu micro-rachaduras mecânicas em seu caule devido ao frio." }
        ]
    },
    10: {
        texto: "<span class='alerta-aviso'>[SINAL INTERNO // FRATURA]</span>: A vibração dos ventos gerou uma micro-fissura na cúpula de quartzo. O oxigênio está vazando para a atmosfera externa de Marte e o gás carbônico subiu a níveis asfixiantes na estufa.",
        opcoes: [
            { texto: "Injetar nitrogênio pressurizado para selar a pressão do ar (-20 Energia)", efeito: { energia: -20, agua: 0, saude: +5 }, feedback: "Pressão equalizada temporariamente, criando uma barreira pneumática contra o vazamento molecular." },
            { texto: "Saturar a atmosfera com umidade pesada para precipitar os gases (-30 Água)", efeito: { energia: 0, agua: -30, saude: 0 }, feedback: "Gasto massivo das reservas hídricas, mas a névoa lavou o ar e tornou a atmosfera respirável para os estômatos." }
        ]
    }
};

