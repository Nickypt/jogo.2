/* ==========================================================================
   M.O.N.O. - MÓDULO DE INTEGRIDADE LÓGICA & GLITCH (SANIDADE DA IA)
   ========================================================================== */

let sanidadeIA = 100; // Medidor de estabilidade psicológica/sintética do robô

/**
 * Modifica a sanidade do robô e gerencia os efeitos colaterais visuais na tela
 * @param {number} valor 
 */
function alterarSanidade(valor) {
    sanidadeIA = Math.max(0, Math.min(100, sanidadeIA + valor));
    const terminal = document.querySelector(".terminal");
    if (!terminal) return;

    // Remove classes anteriores para reavaliar o estado de ruído de hardware
    terminal.classList.remove("glitch-agressivo");

    // Se a sanidade cair para níveis drásticos, injeta tremores físicos agressivos via CSS
    if (sanidadeIA <= 30) {
        terminal.classList.add("glitch-agressivo");
    } else if (sanidadeIA <= 60) {
        terminal.style.animation = "textAmbientFlicker 0.4s infinite linear";
        terminal.style.filter = "sepia(0.3) brightness(1.1) contrast(1.2)";
    } else {
        // Estado estável saudável padrão
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
    
    // Quanto menor a sanidade, maior a infiltração de caracteres quebrados
    const chanceGlitch = (100 - sanidadeIA) / 100; 
    const caracteresGlitch = ["@", "#", "$", "%", "&", "█", "░", "Ø", "Æ", "×", "0", "1"];
    
    return textoOriginal.split(" ").map(palavra => {
        if (Math.random() < chanceGlitch * 0.35 && palavra.length > 2) {
            return palavra.split("").map(letra => 
                Math.random() < 0.45 ? caracteresGlitch[Math.floor(Math.random() * caracteresGlitch.length)] : letra
            ).join("");
        }
        return palavra;
    }).join(" ");
}
