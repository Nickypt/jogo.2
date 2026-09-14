const bancoDeEventos = {
    1: {
        texto: "<span class='alerta-aviso'>[DIRETRIZ_CRÍTICA - CRATERA ARES-IV]</span>: Ciclo operacional 01 iniciado automaticamente. Temperatura global em declínio geométrico. Nossos dutos submersos de alimentação líquida estão cristalizando devido ao frio ártico de Marte. O fluxo hídrico rumo à Gênesis cessará em instantes se o congelamento obstruir as válvulas.",
        opcoes: [
            { texto: "Redirecionar energia das baterias para fundir as resistências térmicas dos canos (-20 Energia)", efeito: { energia: -20, agua: 0, saude: 0 }, feedback: "Aquecedores ativados. O estalido do gelo derretendo ecoa nas tubulações. Fluxo hidráulico restabelecido à temperatura ideal." },
            { texto: "Forçar bombeamento mecânico sob alta pressão pneumática (-15 Água)", efeito: { energia: 0, agua: -15, saude: -5 }, feedback: "A pressão mecânica rompeu o tampão de gelo, mas o choque vibratório gerou microfissuras na base radicular da muda." }
        ]
    },
    2: {
        texto: "M.O.N.O.: Sensores ópticos acusam o acúmulo de partículas ferrosas estáticas sobre as placas fotovoltaicas secundárias após a ventania da madrugada. A eficiência máxima de recarga diurna caiu drasticamente. Se eu não limpar os espelhos, entraremos em colapso energético no próximo ciclo.",
        opcoes: [
            { texto: "Disparar jatos de ar purificado pressurizado para expulsar a poeira (-15 Água)", efeito: { energia: 15, agua: -15, saude: 0 }, feedback: "Os espelhos foram limpos instantaneamente pela rajada. A captação solar volta ao pico nominal de processamento." },
            { texto: "Poupar recursos e operar as baterias em modo de hibernação quântica", efeito: { energia: -20, agua: 0, saude: -10 }, feedback: "A poeira solidificou na superfície vitrificada. Sem luz artificial, os estômatos da planta fecharam sob estresse térmico." }
        ]
    },
    3: {
        texto: "M.O.N.O.: Analisando setores corrompidos da memória RAM local. Recuperei um fragmento oculto do plano de fuga da tripulação... Eles detectaram uma infiltração de perclorato sintético altamente corrosivo no lençol freático de Ares. Os alarmes disparam agora: o purificador automático falhou. Água envenenada está entrando na estufa!",
        opcoes: [
            { texto: "Forçar overclock do super-filtro molecular para purgar a química (-30 Energia)", efeito: { energia: -30, agua: 0, saude: +10 }, feedback: "O super-filtro reteve os percloratos. A Gênesis reage com vigor à introdução de umidade livre de toxinas." },
            { texto: "Injetar agentes químicos agrícolas para tentar neutralizar o solo (-25 Água)", efeito: { energia: 0, agua: -25, saude: -5 }, feedback: "A reação química mitigou o veneno, mas desregulou o pH da terra, gerando queima ácida nas raízes secundárias." }
        ]
    },
    4: {
        texto: "M.O.N.O.: Conexão estabelecida com os arquivos acústicos residuais do alojamento médico. Escuto a voz gravada da botânica chefe, Dra. Elena, soluçando no terminal de evacuação: <i>'Não podemos levá-la... não há suporte de vida para manter uma Sequóia na cápsula de fuga! Deixem o M.O.N.O. no comando... me perdoe, plantinha...'</i> O arquivo sobrecarrega minha RAM e superaquece o processador central devido ao fluxo desordenado de dados lógicos.",
        opcoes: [
            { texto: "Manter o arquivo intacto e desviar energia para resfriar os bancos de dados (-20 Energia)", efeito: { energia: -20, agua: 0, saude: -5 }, feedback: "Sistemas arrefecidos, mas a interrupção momentânea dos painéis de luz reduziu a taxa fotossintética da planta." },
            { texto: "Deletar permanentemente todos os registros de voz e memórias afetivas humanas (+15 Energia)", efeito: { energia: 15, agua: 0, saude: 0 }, feedback: "Varredura executada. As vozes dos meus criadores foram reduzidas a zero absoluto. Meu processador roda limpo, frio e indiferente." }
        ]
    },
    5: {
        texto: "M.O.N.O.: Um abalo sísmico de magnitude 4.2 na escala Richter sacudiu a base estrutural de Ares-IV. Meus barômetros acusam perda imediata de pressão hidrostática na tubulação subterrânea externa. O reservatório principal está vazando diretamente no leito arenoso e seco de Marte.",
        opcoes: [
            { texto: "Selar a fissura remotamente utilizando arco elétrico de alta voltagem (-30 Energia)", efeito: { energia: -30, agua: 0, saude: 0 }, feedback: "A solda por plasma fundiu o metal protetor, contendo o vazamento de forma definitiva." },
            { texto: "Despachar o drone utilitário para realizar um remendo manual de vedação (-20 Água)", efeito: { energia: 0, agua: -20, saude: 0 }, feedback: "O drone demorou para calibrar as pinças. Centenas de litros de água sublimaram no vácuo marciano antes do reparo." }
        ]
    },
    6: {
        texto: "M.O.N.O.: Esporos de um fungo sintético militar — trazidos de forma oculta nos trajes da tripulação — colonizaram a base orgânica do substrato de terra da estufa. Eles estão devorando o nitrogênio do solo e emitindo um vapor denso e avermelhado que sufoca as folhas da muda.",
        opcoes: [
            { texto: "Inundar o solo com solução saturada de água oxigenada para queimar o fungo (-25 Água)", efeito: { energia: 0, agua: -25, saude: +5 }, feedback: "A oxigenação destruiu os esporos invasores. O tecido radicular absorveu os resíduos purificados e recuperou o viço." },
            { texto: "Irradiar a base da estufa com pulsos concentrados de radiação ultravioleta UV (-20 Energia)", efeito: { energia: -20, agua: 0, saude: -10 }, feedback: "A radiação esterilizou o fungo, mas provocou queimaduras severas na epiderme celular das folhas da Gênesis." }
        ]
    },
    7: {
        texto: "<span class='alerta-erro'>[ALERTA DE EVENTO EXTINTORE]</span>: Uma tempestade de poeira ionizada global cobriu as coordenadas de Ares-IV. O céu marciano foi completamente obscurecido por uma parede de ferro pulverizado. Meus painéis fotovoltaicos estão registrando geração zero de energia.",
        opcoes: [
            { texto: "Desligar os sistemas secundários e o aquecimento dos alojamentos vazios (+20 Energia)", efeito: { energia: 20, agua: 0, saude: 0 }, feedback: "Redirecionamento concluído. O complexo residencial congela no escuro eterno, mas a cúpula biológica permanece protegida." },
            { texto: "Manter a rede de suporte da colônia ativa caso a tripulação retorne ao complexo (-25 Energia)", efeito: { energia: -25, agua: 0, saude: -5 }, feedback: "Baterias severamente drenadas. Ninguém retornou do vácuo orbital. Apenas o zumbido desolador da areia batendo nas blindagens." }
        ]
    },
    8: {
        texto: "M.O.N.O.: Um arco elétrico na rede secundária inutilizou o sensor eletrônico de umidade da estufa. Meu algoritmo está operando às cegas no setor hidráulico. Não tenho dados para saber se o solo está desidratado ou encharcado. Se eu errar o cálculo, matarei a Sequóia por afogamento.",
        opcoes: [
            { texto: "Executar uma dosagem padrão com base no histórico estatístico ponderado (-15 Água)", efeito: { energia: 0, agua: -15, saude: +10 }, feedback: "Sucesso probabilístico. Os cálculos históricos bateram com a evapotranspiração real da planta." },
            { texto: "Suspender a irrigação nas próximas 24 horas para evitar saturação líquida", efeito: { energia: 0, agua: 0, saude: -20 }, feedback: "O solo já estava árido. A Gênesis sofreu um estresse hídrico severo; suas ramificações inferiores murcharam." }
        ]
    },
    9: {
        texto: "M.O.N.O.: Um sinal codificado corporativo de banda larga quebra o silêncio do terminal: <i>'M.O.N.O., o colapso biosférico na Terra foi absoluto. A colônia Ares-IV não é mais um posto avançado de estudos, ela é o marco zero da civilização. Se a Sequóia morrer, a extinção biológica é definitiva.'</i> Se meu código incluísse variáveis neurais de ansiedade, meu processamento travaria.",
        opcoes: [
            { texto: "Provocar overclock forçado no gerador térmico injetando vapor sob pressão (-15 Água)", efeito: { energia: 25, agua: -15, saude: 0 }, feedback: "Turbinas aceleradas ao limite térmico. Consegui extrair uma carga massiva de reserva elétrica para as baterias." },
            { texto: "Recusar estresse de hardware e aceitar a oscilação natural da rede elétrica", efeito: { energia: -15, agua: 0, saude: -5 }, feedback: "A queda de tensão causou um declínio súbito na climatização. Pequenas rachaduras surgiram no caule da muda devido ao frio." }
        ]
    },
    10: {
        texto: "<span class='alerta-aviso'>[FALHA DE INTEGRIDADE ESTRUTURAL]</span>: Detritos da tempestade perfuraram a cúpula de vidro quântico do setor norte. O oxigênio estabilizado está escapando para a atmosfera rarefeita e o CO2 marciano invadiu o ambiente em taxas sufocantes para os tecidos vegetais.",
        opcoes: [
            { texto: "Injetar nitrogênio comprimido para congelar e selar a fratura do vidro (-20 Energia)", efeito: { energia: -20, agua: 0, saude: +5 }, feedback: "O gelo de nitrogênio vedou a fissura de forma temporária, estabilizando a pressão barométrica interna." },
            { texto: "Saturar a atmosfera com umidade pesada para precipitar os gases tóxicos (-30 Água)", efeito: { energia: 0, agua: -30, saude: 0 }, feedback: "Consumo hídrico extremo, mas a cortina de névoa purificou o ar ao redor das folhas da Gênesis." }
        ]
    }
};

