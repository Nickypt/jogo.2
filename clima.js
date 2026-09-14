// Gerenciador de Virada de Dia e Penalidades Ocultas do Ecossistema
function calcularAvancoClimatico() {
    let custoAgua = upgradesAtivos.perdaAguaReduzida ? 5 : 8;
    let custoEnergia = upgradesAtivos.perdaEnergiaReduzida ? 5 : 8;

    // A cada dia sem aquecimento artificial direto, Marte resfria a estufa
    estado.temperaturaEstufa -= 4;

    // Se os sensores baterem frio severo (<= 10°C), os canos trincam e o consumo de água dobra
    if (estado.temperaturaEstufa <= 10) {
        custoAgua *= 2;
    }

    estado.agua -= custoAgua; 
    estado.energia -= custoEnergia;

    // Queda de eficiência máxima de bateria caso a poeira acumule no ciclo 2
    if (estado.dia === 3 && estadoAnterior.energia < 60) {
        estado.eficienciaPaineis = 75; 
    }

    // Aplica o teto elétrico baseado na poeira
    estado.energia = Math.min(estado.eficienciaPaineis, estado.energia);
    
    // Altera o status se houver quebra de eficiência crítica para a medalha
    if (estado.agua < 20 || estado.energia < 20 || estado.saudeArvore < 20) {
        conquistas.maximaEficiencia = false;
    }

    // Se zerar recursos ou a temperatura bater 0°C, a planta sofre danos severos
    if (estado.agua <= 0 || estado.energia <= 0 || estado.temperaturaEstufa <= 0) {
        estado.saudeArvore -= 20;
    }
}
