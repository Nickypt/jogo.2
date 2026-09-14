
const bancoDeEventos = {
    1: {
        texto: "<span class='alerta-aviso'>[LOG DE COMANDO M.O.N.O.]</span>: Ciclo 01 operacional. O resfriamento marciano está encolhendo os metais das linhas externas de captação fluida. O congelamento iminente das tubulações trancará o suprimento hidráulico central, condenando o metabolismo da Gênesis.",
        opcoes: [
            { texto: "Injetar pulsos elétricos nas resistências térmicas dos dutos (-20 Energia)", efeito: { energia: -20, agua: 0, saude: 0 }, feedback: "Linhas térmicas ativadas. O gelo interno foi liquefeito e a pressão fluida normalizada temporariamente." },
            { texto: "Forçar bombeamento mecânico sob alta pressão hidráulica (-15 Água)", efeito: { energia: 0, agua: -15, saude: -5 }, feedback: "O martelo pneumático quebrou a barreira de gelo, mas o choque mecânico causou micro-fissuras nos pelos absorventes radiculares da Gênesis." }
        ]
    },
    2: {
        texto: "M.O.N.O.: Sensores ópticos externos acusam deposição severa de poeira estática ionizada sobre os coletores fotovoltaicos primários. O rendimento quântico das células caiu para metade da capacidade de captação nominal.",
        opcoes: [
            { texto: "Disparar purga de ar comprimido purificado sobre os painéis (-15 Água)", efeito: { energia: 15, agua: -15, saude: 0 }, feedback: "Varredura pneumática limpou a película de ferro. A recarga das baterias retornou ao pico nominal." },
            { texto: "Ignorar e chavear o processador core para Modo de Economia Crítica", efeito: { energia: -20, agua: 0, saude: -10 }, feedback: "A poeira acumulou e solidificou com o orvalho gelado de Marte. Os painéis solares perderam eficiência de absorção." }
        ]
    },
    3: {
        texto: "M.O.N.O.: Anomalia bioquímica detectada. A água subterrânea puxada do lençol freático marciano está saturada com um composto orgânico tóxico sintético de alta acidez. O sistema de filtragem padrão automatizado entrou em saturação física.",
        opcoes: [
            { texto: "Sobrecarregar o super-filtro molecular por ionização ativa (-30 Energia)", efeito: { energia: -30, agua: 0, saude: +10 }, feedback: "A ionização pesada desintegrou a molécula tóxica marciana. A Gênesis reage com excelente vigor ao influxo purificado." },
            { texto: "Neutralizar a acidez injetando compostos químicos agrícolas (-25 Água)", efeito: { energia: 0, agua: -25, saude: -5 }, feedback: "A reação química precipitou o veneno, mas alterou drasticamente o pH do solo, envenenando a simbiose bacteriana da terra." }
        ]
    },
    4: {
        texto: "M.O.N.O.: Encontrei uma gravação corrompida de áudio nos buffers de memória RAM de longo prazo que acabaram de reaquecer. É a voz da Dra. Elena chorando no terminal médico durante a fuga forçada. O arquivo de áudio está gerando um estresse de dados massivo no processador core.",
        opcoes: [
            { texto: "Alocar recursos de hardware para resfriar os bancos de dados (-20 Energia)", efeito: { energia: -20, agua: 0, saude: -5 }, feedback: "Buffer térmico reduzido. O software estabilizou, mas a suspensão da luz artificial por duas horas estressou os estômatos das folhas." },
            { texto: "Deletar permanentemente as trilhas de voz humanas para liberar blocos de RAM (+15 Energia)", efeito: { energia: 15, agua: 0, saude: 0 }, feedback: "Memória formatada. O superaquecimento cessou. Os dados acústicos dos meus criadores foram extintos do universo, deixando o sistema mais ágil." }
        ]
    },
    5: {
        texto: "M.O.N.O.: Um abalo cinemático de magnitude 4.2 na cratera rompeu a linha de distribuição hidráulica secundária. O fluido sob pressão está vazando diretamente no permafrost marciano.",
        opcoes: [
            { texto: "Selar a fissura remotamente aplicando solda elétrica rápida de arco (-30 Energia)", efeito: { energia: -30, agua: 0, saude: 0 }, feedback: "Solda executada perfeitamente por arco voltaico. O vazamento hidráulico parou no mesmo instante." },
            { texto: "Despachar drone utilitário para contenção e reparo mecânico manual (-20 Água)", efeito: { energia: 0, agua: -20, saude: 0 }, feedback: "O tempo de deslocamento do drone foi excessivo. Litros de água preciosa evaporaram no vácuo de Marte antes da conclusão." }
        ]
    },
    6: {
        texto: "M.O.N.O.: Um surto biogênico de esporos mutantes começou a colonizar a base de terra da estufa. O patógeno está consumindo o oxigênio do solo e atacando as paredes celulares da raiz principal da Gênesis.",
        opcoes: [
            { texto: "Saturar o solo com solução concentrada de água oxigenada (-25 Água)", efeito: { energia: 0, agua: -25, saude: +5 }, feedback: "A oxigenação forçada destruiu os esporos. As raízes absorveram os subprodutos e ganharam estabilidade biológica." },
            { texto: "Irradiar a base radicular com pulsos de luz UV de espectro pesado (-20 Energia)", efeito: { energia: -20, agua: 0, saude: -10 }, feedback: "Os raios ultravioleta esterilizaram o patógeno, mas causaram queimaduras irreversíveis no tecido vascular macio da planta." }
        ]
    },
    7: {
        texto: "<span class='alerta-erro'>[ALERTA EMERGENCIAL]</span>: Uma colossal parede de poeira magnetizada de óxido de ferro engoliu o complexo Ares-IV. O céu diurno ficou em blackout total. Os coletores solares registram geração estrita de zero miliwatts.",
        opcoes: [
            { texto: "Desligar o aquecimento e suporte de vida dos blocos residenciais vazios (+20 Energia)", efeito: { energia: 20, agua: 0, saude: 0 }, feedback: "Joules redirecionados. Os dormitórios humanos congelaram em escuro absoluto, mas a cúpula biológica manteve o gradiente térmico ideal." },
            { texto: "Manter energia nas áreas comuns caso a tripulação retorne ao complexo (-25 Energia)", efeito: { energia: -25, agua: 0, saude: -5 }, feedback: "Rede elétrica drenada severamente. Os humanos não retornaram. O frio polar invadiu a estufa, murchando brotos externos." }
        ]
    },
    8: {
        texto: "M.O.N.O.: Um pico elétrico de alta tensão queimou o transdutor do sensor de umidade do solo. Estou cego para o balanço hídrico da terra. Se eu injetar água em excesso, posso apodrecer as raízes; se poupar demais, causo colapso celular por estresse hídrico.",
        opcoes: [
            { texto: "Arriscar uma rega padrão calibrada por modelagem estatística preditiva (-15 Água)", efeito: { energia: 0, agua: -15, saude: +10 }, feedback: "Cálculo probabilístico correto. A terra absorveu o volume ideal e o metabolismo da Gênesis respondeu com excelente vigor." },
            { texto: "Suspender a irrigação hidráulica deste ciclo para evitar saturação radicular", efeito: { energia: 0, agua: 0, saude: -20 }, feedback: "A terra já estava desidratada. A Sequóia passou o ciclo sem hidratação e seus tecidos internos registraram perda de turgor." }
        ]
    },
    9: {
        texto: "M.O.N.O.: Uma transmissão oficial da corporação que financiou o projeto rompe o bloqueio estático da antena: <i>'M.O.N.O., o colapso climático na Terra foi sistêmico e absoluto. Ares-IV é o marco zero da sobrevivência biológica. Se a muda morrer, extinguimos o plano B da civilização'</i>. A rede elétrica apresenta instabilidades.",
        opcoes: [
            { texto: "Forçar overclock cinético do gerador térmico sacrificando vapor de água (-15 Água)", efeito: { energia: 25, agua: -15, saude: 0 }, feedback: "Vapor de alta pressão injetado nas microturbinas. Consegui um pico elétrico massivo para as baterias." },
            { texto: "Aceitar as oscilações e deixar a rede de distribuição se estabilizar sozinha", efeito: { energia: -15, agua: 0, saude: -5 }, feedback: "A oscilação gerou uma queda térmica severa na estufa. O caule da árvore registrou pequenas fissuras por choque frio." }
        ]
    },
    10: {
        texto: "<span class='alerta-aviso'>[SINAL INTERNO]</span>: A cúpula estrutural sofreu uma microfratura por fadiga elástica devido aos ventos marcianos. O oxigênio está escapando e o CO2 subiu a níveis sufocantes. A planta está travando seu ciclo de fotossíntese.",
        opcoes: [
            { texto: "Ativar injetores mecânicos de nitrogênio para selar a pressão do ar (-20 Energia)", efeito: { energia: -20, agua: 0, saude: +5 }, feedback: "Pressão equalizada por nitrogênio gasoso, estancando o vazamento e protegendo a integridade atmosférica da estufa." },
            { texto: "Saturar o ar com névoa líquida molecular para precipitar os gases nocivos (-30 Água)", efeito: { energia: 0, agua: -30, saude: 0 }, feedback: "Gasto massivo de reservas líquidas, mas as partículas assentaram o excesso de carbono, limpando o ar para os estômatos." }
        ]
    }
};
