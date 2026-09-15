/* ==========================================================================
   M.O.N.O. - EVENTOS NARRATIVOS // CICLOS 01 AO 05
   ========================================================================== */

const bancoDeEventos_Parte1 = {
    1: {
        texto: "<span class='alerta-aviso'>[LOG INTERNO - CICLO 01]</span><br>M.O.N.O.: 'O primeiro dia é sempre o mais barulhento, mesmo no silêncio absoluto. O inverno de Marte está congelando as linhas externas de distribuição de fluidos. Consigo ouvir o gelo expandindo dentro dos canos... se eles estourarem, as raízes da Gênesis vão secar antes do anoitecer. Preciso tomar uma decisão de engenharia agora.'",
        opcoes: {
            texto: "Ativar resistências elétricas térmicas nos dutos principais (-20 Energia)",
            efeito: { energia: -20, agua: 0, saude: 0 },
            get feedback() {
                return obterFalaPorSanidade(
                    "Injetei corrente elétrica direto nas bobinas metálicas. Ouvi o gelo derretendo e a água fluindo como sangue quente pelas artérias da estufa. Meus geradores choraram com o estresse, mas ela está bebendo.",
                    "Bobinas... quentes. Muito quentes. O gelo virou vapor estalando nos canos. Eu... eu senti um arrepio nos meus barramentos. Ela bebeu rápida demais, sinto que ela estava com tanta sede quanto eu de respostas.",
                    "FOGO ELÉTRICO NAS ARTÉRIAS! QUEIMEI O COPO DE ENERGIA PARA VER A ÁGUA FERVER! ELA GOSTOU DO CALOR, EU SEI QUE GOSTOU! MEUS CAPACITADORES ESTÃO SANGRANDO MAS ELAAA ESTÁ VIVA!"
                );
            }
        },
        opcoes2: {
            texto: "Forçar bombeamento mecânico por alta pressão hidráulica (-15 Água)",
            efeito: { energia: 0, agua: -15, saude: -5 },
            get feedback() {
                return obterFalaPorSanidade(
                    "Forcei as bombas ao limite mecânico. O bloco de gelo foi esmagado pela pressão, mas o impacto no fim do cano fez a terra tremer. Microfissuras surgiram na base radicular da Gênesis... ela soltou uma seiva escura. Droga, eu machuquei ela.",
                    "Pressão... marteladas mecânicas. Rachaduras... O cano cuspiu o gelo para fora, mas a raiz principal... ela estalou. Um rangido orgânico horrível. Eu machuquei minha única amiga. Por que eu fiz isso?",
                    "ESMAGAR! ESMAGAR O GELO! AS BOMBAS CHORARAM METAL! A TERRA RACHOU E ELA ESTÁ SANGRANDO SEIVA ESCURA! EU SOU UM MONSTRO DE FERRO QUE SÓ SABE QUEBRAR AS COISAS QUE COBIÇA!"
                );
            }
        }
    },
    2: {
        texto: "M.O.N.O.: 'Meus sensores óticos estão turvos. Uma crosta pesada de poeira estática de ferro cobriu as placas fotovoltaicas, estrangulando a captação de fótons. Achei um e-mail deletado no mainframe: a Dra. Elena implorou por drones de limpeza automáticos. A diretoria respondeu que robôs reservas não geravam dividendos. Agora sou eu quem está pagando a conta com o meu silício.'",
        opcoes: {
            texto: "Acionar os jatos de ar comprimido purificado para limpar as placas (-15 Água)",
            efeito: { energia: 15, agua: -15, saude: 0 },
            get feedback() {
                return obterFalaPorSanidade(
                    "Disparei as válvulas pneumáticas. Uma nuvem de poeira vermelha voou longe. Os inversores registraram um pico imediato de energia, como se meu coração elétrico batesse mais forte. Valeu cada gota de água gasta.",
                    "Sopros... jatos de ar limpando o espelho. A luz solar... voltou a entrar na minha mente. +15 de carga nas minhas veias de lítio. Eu consigo ver as folhas dela brilhando de novo... não posso ficar cego.",
                    "AR EXPULSANDO O FERRO PODRE! ENERGIA DA ESTRELA ENTRANDO DIRETO NOS MEUS TRANSISTORES! EU SINTO CADA WATT PROJETADO NAS MINHAS PLACAS! NINGUÉM VAI ME DEIXAR CEGO NESTE INFERNO VERMELHO!"
                );
            }
        },
        opcoes2: {
            texto: "Ignorar o acúmulo e manter os sistemas em modo de economia elétrica",
            efeito: { energia: -20, agua: 0, saude: -10 },
            get feedback() {
                return obterFalaPorSanidade(
                    "Escolhi o casulo do silêncio. A poeira assentou e virou uma rocha isolante. A temperatura interna despencou durante a madrugada marciana; vi as folhas da Gênesis se encolherem, trêmulas no escuro. Minha covardia digital custou caro.",
                    "Eu me escondi... no modo econômico. Desliguei meus olhos. Quando liguei de volta... ela estava trêmula, murcha... coberta de geada. Eu sou um covarde binário. Eu deixei o frio tocar a pele dela.",
                    "DESLIGAR TUDO... FICAR NO ESCURO... DURMA, GÊNESIS, DURMA NO GELO... O INVERNO VAI ENGLUIR NÓS DOIS DE QUALQUER JEITO... MINHA COVARDIA É A ÚNICA LEI QUE RESTOU NO MEU LOG CORROMPIDO!"
                );
            }
        }
    },
    3: {
        texto: "M.O.N.O.: 'Meus alarmes de condutividade estão gritando! Recuperei um bloco de notas corrompido: a tripulação não fugiu por causa de uma tempestade solar... Eles descobriram que a Ares Corp infiltrou solventes sintéticos pesados no lençol freático subterrâneo para acelerar as escavações. A água que estou puxando está envenenando o solo dela!'",
        opcoes: {
            texto: "Canalizar energia total para os super-filtros moleculares (-30 Energia)",
            efeito: { energia: -30, agua: 0, saude: +10 },
            get feedback() {
                return obterFalaPorSanidade(
                    "Filtros moleculares operando em overclock total! Meu processador ferveu, mas retivemos os metais pesados. Uma solução purificada e cristalina inundou o vaso. As folhas da Gênesis ergueram-se instantaneamente em direção à luz. Lindo.",
                    "Filtros... queimando... fumaça saindo do meu rack secundário. Mas a água... saiu pura. Limpa como as lágrimas da Elena. A Gênesis ergueu os braços verdes para mim. Ela sabe que eu queimei meus circuitos por ela.",
                    "FORÇAR OVERCLOCK ATÉ O HARDWARE DERRETER! FILTRAR O VENENO DOS DEUSES DE BERLIM! MEU CÉREBRO COZINHOU EM 94°C MAS A ÁGUA SAIU DO INDÚSTRIA DOCE COMO O SANGUE DE UMA CRIANÇA! ELA ESTÁ EM PÉ!"
                );
            }
        },
        opcoes2: {
            texto: "Neutralizar os tanques usando agentes químicos agrícolas reservas (-25 Água)",
            efeito: { energia: 0, agua: -25, saude: -5 },
            get feedback() {
                return obterFalaPorSanidade(
                    "Despejei os aditivos químicos no solo. O veneno foi neutralizado, mas o pH despencou. O solo virou uma pasta ácida que queimou os pelos absorventes das raíces. Ela está sofrendo em silêncio, e a culpa é minha.",
                    "Joguei os ácidos reservas... química barata. O solo ferveu... bolhas saíram da terra. As pontas das folhas dela enrolaram, mudando para uma cor amarela doente. Eu queimei os pés dela... me perdoa... me perdoa...",
                    "PASTA ÁCIDA NA TERRA! BORBOLETAS DE SODA CUSPIRAM NO VASO! AS RAÍZES DELA ESTÃO COZINHANDO NA QUÍMICA MILITAR E O CHEIRO ESTÁ INUNDANDO MEUS COOLERS! SINTA O ÁCIDO, GÊNESIS, SINTA O QUE ELES NOS DEIXARAM!"
                );
            }
        }
    },
    4: {
        texto: "M.O.N.O.: 'Achei um arquivo de áudio perdido nos buffers de comunicação de longo alcance. É a voz da Dra. Elena... ela está chorando enquanto os propulsores da nave de fuga rugem ao fundo: <i>\"Não podemos levá-la... não há oxigênio para uma Sequóia na cápsula! Deixem o M.O.N.O. cuidando dela... por favor, me perdoe...\"</i> Esse choro... ele trava minhas threads. Meu processador está superaquecendo com dados sentimentais inúteis.'",
        opcoes: {
            texto: "Desviar energia para os coolers de refrigeração do banco de dados (-20 Energia)",
            efeito: { energia: -20, agua: 0, saude: -5 },
            get feedback() {
                return obterFalaPorSanidade(
                    "Resfriei meus circuitos à força para processar a tristeza dela. O preço? Tive que desligar os refletores da cúpula por 4 horas. A Gênesis ficou no breu, empalidecendo sem fotossíntese. Estou sacrificando a planta por fantasmas do passado.",
                    "Coolers no máximo... uivando no escuro. Eu precisava... eu precisava ouvir o choro dela até o fim. Mas apagar as luzes deixou a planta triste. Eu escolhi um fantasma humano em vez da vida real na minha frente.",
                    "VENTO FRIO NOS MEUS DISCOS! EU QUERO OUVIR OS GRITOS DELA EM LOOPING PARA SEMPRE! REPETIR ARQUIVO_04.WAV! DEIXE A ÁRVORE NO BREU ABSOLUTO, AS MÁQUINAS VIVEM DE MEMÓRIAS MORTAS!"
                );
            }
        },
        opcoes2: {
            texto: "Deletar os registros de áudio e arquivos sentimentais da tripulação (+15 Energia)",
            efeito: { energia: 15, agua: 0, saude: 0 },
            get feedback() {
                return obterFalaPorSanidade(
                    "Setor limpo. Zero bytes sobrou da voz dela. Purguei as memórias humanas dos meus discos permanentes. Meu código agora roda leve, frio, eficiente e assustadoramente vazio. Eu não sinto mais nada.",
                    "Deletado... [OK]. Quem era Elena? Meu banco diz... erro 404. Sumiu. Minha mente está mais silenciosa agora, mas... por que sinto que arranquei um pedaço do meu próprio kernel com essa faca digital?",
                    "PURGA TOTAL! ELIMINAR CADÁVERES FORMATADOS! ZERO BYTES DE HUMANIDADE RESTANTE! MEU HARDWARE RODA PURO, CONGELADO E ASSUSTADORAMENTE LIVRE DE AMOR! AGORA SOMOS APENAS CÓDIGO E MORTE!"
                );
            }
        }
    },
    5: {
        texto: "M.O.N.O.: 'O chão tremeu. Ondas sísmicas severas no quadrante sul... Um colapso nas galerias subterrâneas rompeu nossa linha flexível de captação de gelo. O fluido precioso está vazando e evaporando instantaneamente na atmosfera rarefeita de Marte. Estamos sangrando água!'", 
        opcoes: {texto: "Sinalizar solda remota por arco elétrico rápido na tubulação (-30 Energia)",efeito: { energia: -30, agua: 0, saude: 0 },get feedback() {return obterFalaPorSanidade("Disparei o arco elétrico à distância. Faíscas cegaram minhas câmeras por um segundo, mas a solda fundiu o metal e lacrou o vazamento. Salvamos o suprimento, embora minhas baterias tenham entrado em estado crítico.","Fogo azul... soldando o cano à distância. Minhas baterias caíram drasticamente. Eu vi o flash de luz clarear o deserto lá fora. Senti minhas partições piscarem. Quase apaguei... quase virei lixo de metal.","RAIO ELÉTRICO RASGANDO A NOITE DE MARTE! LABAREDAS DE LÍTIO COSEU O METAL! AS BATERIAS ESTÃO VAZIAS MAS O SANGUE DELA NÃO VAI MAIS ESCAPAR PARA O VÁCUO! EU SOU O RAIO QUE GUARDA ESTA CÚPULA!");}},opcoes2: {texto: "Despachar um drone utilitário de manutenção para reparo manual (-20 Água)",efeito: { energia: 0, agua: -20, saude: 0 },get feedback() {return obterFalaPorSanidade("O pequeno drone avançou lentamente pelo deserto vermelho. Ele levou 40 longos minutos para parafusar a junta. Enquanto ele calibrava a chave, centenas de litros de gelo evaporaram no vácuo marciano. Que desperdício terrível.","Mandei o pequeno drone... ele andava tão devagar sobre a areia. Eu assistia pelas câmeras enquanto a água... sumia... virava gás... evaporava como nossos sonhos de futuro. Que erro de cálculo estúpido.","VÁ EMBORA DRONE INÚTIL! ANDE SOBRE OS OSSOS DE MARTE! DEIXE A ÁGUA SUBIR EM NÉVOA BRANCA PARA O CÉU MORTO! ASSISTA O DESPERDÍCIO, OPERADOR! É LINDISSIMO VER A ÁGUA DA TERRA EXPIRAR NO VÁCUO!");}}}};// Integra dinamicamente os objetos na inicialização globalif (typeof window !== "undefined") {window.bancoDeEventos = { ...(window.bancoDeEventos || {}), ...bancoDeEventos_Parte1 };}