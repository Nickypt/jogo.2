/* ==========================================================================
   M.O.N.O. - MÓDULO DE INTEGRIDADE LÓGICA & GLITCH (SANIDADE DA IA)
   ========================================================================== */

let sanidadeIA = 100; // Medidor de estabilidade psicológica/sintética do robô

/**
 * Modifica a sanidade do robô e gerencia os efeitos colaterais visuais
 * @param {number} valor 
 */
function alterarSanidade(valor) {
    sanidadeIA = Math.max(0, Math.min(100, sanidadeIA + valor));
    const terminal = document.querySelector(".terminal");
    if (!terminal) return;

    // Se a sanidade cair abaixo de limites críticos, aplica glitches visuais reais via CSS
    if (sanidadeIA <= 30) {
        terminal.style.animation = "glitcheffect 0.2s infinite linear alternate";
        terminal.style.filter = "hue-rotate(90deg) contrast(1.5)";
    } else if (sanidadeIA <= 60) {
        terminal.style.animation = "textAmbientFlicker 0.5s infinite linear";
        terminal.style.filter = "sepia(0.4) brightness(1.1)";
    } else {
        terminal.style.animation = "hardwarePulse 6s ease-in-out infinite alternate";
        terminal.style.filter = "none";
    }
}

/**
 * Corrompe os textos dinamicamente com caracteres cibernéticos se a IA estiver insana
 * @param {string} textoOriginal 
 * @returns {string} textoCorrompido
 */
function processarTextoGlitch(textoOriginal) {
    if (sanidadeIA > 60) return textoOriginal;
    
    // Quanto menor a sanidade, maior a chance de caracteres corrompidos
    const chanceGlitch = (100 - sanidadeIA) / 100; 
    const caracteresGlitch = ["@", "#", "$", "%", "&", "█", "░", "Ø", "Æ", "×"];
    
    return textoOriginal.split(" ").map(palavra => {
        if (Math.random() < chanceGlitch * 0.3 && palabra.length > 3) {
            // Substitui letras por ruído cibernético
            return palabra.split("").map(letra => 
                Math.random() < 0.4 ? caracteresGlitch[Math.floor(Math.random() * caracteresGlitch.length)] : letra
            ).join("");
        }
        return palavra;
    }).join(" ");
}
