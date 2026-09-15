/* ==========================================================================
   M.O.N.O. - EVENTOS CORE // ESTRUTURA BASE E FILTRO DE SANIDADE
   ========================================================================== */

// Inicializa o objeto global de eventos que será preenchido pelas outras partes
window.bancoDeEventos = {};

/**
 * Filtra e devolve a fala do robô com base no seu estado mental atual
 * @param {string} normal - Fala com sanidade alta
 * @param {string} instavel - Fala com sanidade média (glitch mental)
 * @param {string} surto - Fala com sanidade baixa (psicose sintética)
 * @returns {string} Fala final filtrada
 */
function obterFalaPorSanidade(normal, instavel, surto) {
    const s = typeof sanidadeIA !== 'undefined' ? sanidadeIA : 100;
    
    if (s <= 30) {
        return `<span style="color:#ff3366; font-weight:bold;">[SURTO_LOGÍSTICO]:</span> ${surto.toUpperCase()}`;
    } else if (s <= 60) {
        return `<span style="color:#ffaa00;">[OSCILAÇÃO_DE_CLOCK]:</span> ${instavel}`;
    } else {
        return `<span style="color:#00ffcc;">[SISTEMA_NOMINAL]:</span> ${normal}`;
    }
}

// Expõe a função para os arquivos extensores de eventos
window.obterFalaPorSanidade = obterFalaPorSanidade;
