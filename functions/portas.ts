import PortaModel from "../model/porta";

export function criarPortas(qtde: number, portaComPresente: number): PortaModel[] {
    // Gerador de portas
    return Array.from({ length: qtde }, (_, idx) => {
        const numero = idx + 1;
        const temPresente = numero === portaComPresente;
        return new PortaModel(numero, temPresente);
    });
};

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {
    return portas.map(portaAtual => {
        const igualAModificada = portaAtual.numero === portaModificada.numero;

        if (igualAModificada) { return portaModificada }
        else {
            return portaModificada.aberta ? portaAtual : portaAtual.desselecionar();
        };
    });
};