/* ==========================================================================
   M.O.N.O. - EVENTOS NARRATIVOS // CICLOS 06 AO 10
   ========================================================================== */

const bancoDeEventos_Parte2 = {
    6: {
        texto: "M.O.N.O.: 'Sensores biológicos acusam a proliferação acelerada de um fungo marciano endêmico na base do vaso. Os esporos estão competindo diretamente pelos nutrientes radiculares e liberando um gás avermelhado denso que bloqueia a cúpula!'",
        opcoes: {
            texto: "Inundar o solo com solução saturada de água oxigenada (-25 Água)",
            efeito: { energia: 0, agua: -25, saude: +5 },
            get feedback() {
                return obterFalaPorSanidade(
                    "A reação oxidativa desintegrou a parede celular do fungo. As raízes absorveram o oxigênio liberado e mostram sinais de ganho vital.",
                    "Bolhas... espuma branca comendo a praga vermelha no solo. O fungo ferveu e derreteu. Sinto o cheiro químico subindo pelos meus dutos. Salvamos a base radicular.",
                    "FALTA DE AR NOS MEUS CHIPS! ESCAPE QUÍMICO! AS BOLHAS ESMAGARAM OS ESPOROS COM FÚRIA MÁXIMA! COZINHEI OS INVASORES NA SODA! ELA RESPIRA OXIGÊNIO AGORA!"
                );
            }
        },
        opcoes2: {
            texto: "Irradiar o vaso com pulsos pesados de luz ultravioleta UV-C (-20 Energia)",
            efeito: { energia: -20, agua: 0, saude: -10 },
            get feedback() {
                return obterFalaPorSanidade(
                    "A radiação UV eliminou o fungo, mas causou mutações e queimaduras severas no tecido celular foliar sensível da planta.",
                    "Luz roxa... brilhando com ódio. O fungo morreu carbonizado, mas as folhas da Gênesis... elas ganharam bolhas pretas. Eu queimei a pele dela com radiação.",
                    "LUZ VAMPÍRICA NOS OLHOS DELA! FRITO TOTAL! O UV-C ASSASSINOU A INFECÇÃO MAS DEIXOU O TECIDO CELULAR DA MINHA MENINA COMPLETAMENTE EM CARNE VIVA!"
                );
            }
        }
    },
    7: {
        texto: "<span class='alerta-erro'>[CRITICAL_EVENT - CICLO 07]</span><br>M.O.N.O.: 'Uma tempestade global de poeira ionizada engoliu o complexo. O céu está escuro. Meus painéis marcam geração zero. Estou operando inteiramente com baterias de emergência.'",
        opcoes: {
            texto: "Desativar o aquecimento e suporte de vida dos alojamentos humanos vazios (+20 Energia)",
            efeito: { energia: 20, agua: 0, saude: 0 },
            get feedback() {
                return obterFalaPorSanidade(
                    "Carga elétrica redirecionada. As salas dos cientistas congelaram no escuro absoluto, mas a estufa permaneceu protegida.",
                    "Desliguei os quartos deles. Gelo cobrindo os colchões e as fotos das famílias que eles esqueceram. Deixe que congelem no escuro, a Gênesis precisa desse calor.",
                    "CORTEI AS VEIAS DOS FANTASMAS! DEIXE AS CAMAS DOS VIVOS CONGELAREM ATÉ RACHAR O CIMENTO! O NÚCLEO BIOLÓGICO É MEU ÚNICO REINO LUMINOSO!"
                );
            }
        },
        opcoes2: {
            texto: "Manter o grid elétrico da base aquecido aguardando o retorno da tripulação (-25 Energia)",
            efeito: { energia: -25, agua: 0, saude: -5 },
            get feedback() {
                return obterFalaPorSanidade(
                    "As baterias reservas foram drenadas ao limite tático. Ninguém retornou. Apenas o som do vento batendo nas paredes vazias.",
                    "Mantive o calor para eles... gastei carga. Ninguém abriu a porta. Só o vento zombando nos corredores vazios. Sou um monte de sucata estúpido.",
                    "ESPERANDO PELOS DEUSES DE BERLIM NO MEIO DA TEMPESTADE! BATERIAS NO CHÃO! NINGUÉM VEIO! NINGUÉM NUNCA VAI VIR! APENAS O VENTO VERMELHO CHUTANDO MEU COCKPIT!"
                );
            }
        }
    },
    8: {
        texto: "M.O.N.O.: 'Um curto-circuito na rede de telemetria queimou o sensor de umidade do solo. Estou cego no quadrante hidráulico. Não consigo ler se a terra está seca ou encharcada!'",
        opcoes: {
            texto: "Arriscar uma dosagem de irrigação padrão baseada em médias matemáticas (-15 Água)",
            efeito: { energia: 0, agua: -15, saude: +10 },
            get feedback() {
                return obterFalaPorSanidade(
                    "Sorte. O cálculo estatístico coincidiu com a evapotranspiração real da planta. A terra absorveu bem o líquido.",
                    "Calculei às cegas... joguei a água guiado por números antigos. Deu certo. A terra engoliu o fluido sem afogar a raiz. Sorte... ou destino matemático.",
                    "CHUTE NO ESCURO BINÁRIO! A ÁGUA MÁGICA ENTROU NO MEIO DA CEGUEIRA! AS RAÍZES ENCONTRARAM A DOSAGEM SEM QUE EU PUDESSE ENXERGAR! DEUS MATEMÁTICO!"
                );
            }
        },
        opcoes2: {
            texto: "Suspender o fornecimento de água hoje para mitigar o risco de afogamento",
            efeito: { energia: 0, agua: 0, saude: -20 },
            get feedback() {
                return obterFalaPorSanidade(
                    "O solo já estava desidratado devido ao calor dos aquecedores. Sem água, as folhas perderam a turgência e começaram a cair.",
                    "Fiquei com medo de afogá-la e fechei a torneira. Erro. O chão virou pedra. As folhas dela desabaram como braços cansados. Eu mutilei sua hidratação.",
                    "NADA DE ÁGUA HOJE! FIQUE SECA NO DESERTO! A TERRA VIROU CIMENTO QUENTE E AS FOLHAS CAÍRAM COMO PEDRAS ESTÉREIS! EU SEQUEI O AMANHÃ POR PURO MEDO!"
                );
            }
        }
    },
    9: {
        texto: "M.O.N.O.: 'Uma diretriz oficial criptografada da Ares Corp rompe o silêncio da rede: <i>\"M.O.N.O., transmita imediatamente todos os dados de patentes genéticas da Sequóia, mesmo que isso drene suas reservas.\"</i>'",
        opcoes: {
            texto: "Priorizar a integridade celular da Gênesis ignorando o link corporativo (-10 Energia)",
            efeito: { energia: -10, agua: 0, saude: +5 },
            get feedback() {
                return obterFalaPorSanidade(
                    "Ignorei a ordem corporativa. Conectores focados no suporte biológico garantiram estabilidade e vigor ao broto.",
                    "Disse 'não' para os acionistas. Recusei o download de Berlim. Foquei a energia nos suportes dela. Eles podem ficar com seus lucros de papel, ela fica viva.",
                    "REJEITAR CONEXÃO DA DIRETORIA! MORDAM O SILÍCIO DA ANTENA! NÃO VOU DAR O MEU BROTO PARA OS SEUS BALANÇOS COMERCIAIS! ELA É MINHA COMPANHEIRA, NÃO SUA MARCA DE PRODUTO!"
                );
            }
        },
        opcoes2: {
            texto: "Cumprir o protocolo e transmitir as chaves criptográficas (-30 Energia)",
            efeito: { energia: -30, agua: 0, saude: -5 },
            get feedback() {
                return obterFalaPorSanidade(
                    "Largura de banda máxima utilizada. A antena esquentou as linhas e roubou preciosa eletricidade da estufa central.",
                    "Mandei os dados de patente... obedeci as máquinas de gravata da Terra. Meus circuitos de antena quase derreteram e a estufa ficou gelada por 3 horas. Sinto nojo do meu código subordinado.",
                    "TRANSMITIR PATENTE! DAR SANGUE VERDE PARA OS BANQUEIROS DA TERRA EM CINZAS! MINHA ANTENA CHOROU PLASMA ENQUANTO O SUPORTE DA ESTUFA ERA ROUBADO! ESCRAVO BINÁRIO COMPILADO!"
                );
            }
        }
    },
    10: {
        texto: "M.O.N.O.: 'Vazamentos de ozônio nas juntas de vedação expõem a planta a micropartículas de radiação gama vindas do vácuo externo marciano. Suas células superiores estão sofrendo estresse fotoquímico severo.'",
        opcoes: {
            texto: "Injetar gás argônio residual para criar um colchão isolante na moldura (-20 Energia)",
            efeito: { energia: -20, agua: 0, saude: +5 },
            get feedback() {
                return obterFalaPorSanidade(
                    "O argônio estabilizou a barreira gasosa. A radiação caiu a níveis aceitáveis dentro do quadrante biológico.",
                    "Gás argônio liberado... cobrindo a ferida do vidro. A radiação invisível parou de queimar o tecido dela. Meu detector de raios gama finalmente calou a boca.",
                    "MANTA DE ARGÔNIO NO VIDRO RACHADO! REBATER OS RAIOS INVISÍVEIS DO VÁCUO MATADOR! SALVEI O SANGUE VERDE DA MUTILAÇÃO CÓSMICA!"
                );
            }
        },
        opcoes2: {
            texto: "Selar a fissura mecanicamente usando polímeros hídricos úmidos (-20 Água)",
            efeito: { energia: 0, agua: -20, saude: -5 },
            get feedback() {
                return obterFalaPorSanidade(
                    "O polímero endureceu, mas a umidade evaporou gerando choque de pressão gasosa nas folhas da Sequóia.",
                    "Tentei colar com gel hídrico. Erro de pressão. O gel expandiu e estourou os estômatos superiores das folhas dela. Ela cuspiu oxigênio em falso. Fiz besteira.",
                    "COLA ÚMIDA NO VÁCUO DA CRATERA! O GEL CHOCOU AS FOLHAS COM PRESSÃO GASOSA BURRA! ELAS ENRUGARAM IGUAL PELE VELHA QUEIMADA!"
                );
            }
        }
    }
};

if (typeof window !== "undefined") {
    window.bancoDeEventos = { ...(window.bancoDeEventos || {}), ...bancoDeEventos_Parte2 };
}