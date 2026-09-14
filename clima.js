function calcularAvancoClimatico() {
    let custoAgua = upgradesAtivos.perdaAguaReduzida ? 5 : 8;
    let custoEnergia = upgradesAtivos.perdaEnergiaReduzida ? 5 : 8;

    estado.temperaturaEstufa -= 4;

    if (estado.temperaturaEstufa <= 10) {
        custoAgua *= 2;
    }

    estado.agua -= custoAgua; 
    estado.energia -= custoEnergia;

    if (estado.dia === 3 && estadoAnterior.energia < 60) {
        estado.eficienciaPaineis = 75; 
    }

    estado.energia = Math.min(estado.eficienciaPaineis, estado.energia);
    
    if (estado.agua < 20 || estado.energia < 20 || estado.saudeArvore < 20) {
        conquistas.maximaEficiencia = false;
    }

    if (estado.agua <= 0 || estado.energia <= 0 || estado.temperaturaEstufa <= 0) {
        estado.saudeArvore -= 20;
    }
}
