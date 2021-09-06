import PortaModel from "../model/porta";

export function criarPortas(qtde: number, selecionada: number): PortaModel[] {
    // Gerador de portas
    return Array.from({ length: qtde }, (_, idx) => {
        const numero = idx + 1;
        const temPresente = numero === selecionada;
        return new PortaModel(numero, temPresente);
    });
}