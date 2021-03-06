// Classe que representa dados de uma porta

export default class PortaModel {
    // atributos privados
    #numero: number;
    #temPresente: boolean;
    #selecionada: boolean;
    #aberta: boolean;

    // Método construtor (POO)
    constructor(numero: number, temPresente = false, selecionada = false, aberta = false) {
        this.#numero = numero;
        this.#temPresente = temPresente;
        this.#selecionada = selecionada;
        this.#aberta = aberta;
    }

    // Acessando valores privados
    get numero() {
        return this.#numero;
    }

    get temPresente() {
        return this.#temPresente;
    }

    get selecionada() {
        return this.#selecionada;
    }

    get aberta() {
        return this.#aberta;
    }

    get fechada() {
        return !this.aberta;
    }

    // Tornando o modelo da classe Rico => forma funcional
    // Gera uma cópia do objeto, tornando os valores imutáveis

    desselecionar() {
        const selecionada = false;
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta);
    }

    alterarSelecao() {
        const selecionada = !this.selecionada;
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta);
    }

    abrir() {
        const aberta = true;
        return new PortaModel(this.numero, this.temPresente, this.selecionada, aberta);
    }
}