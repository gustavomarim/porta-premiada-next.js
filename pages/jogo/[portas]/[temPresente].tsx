import { useRouter } from "next/router";
import styles from "../../../styles/Jogo.module.css";
import { useEffect, useState } from "react";
import Porta from "../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import Link from "next/link";

export default function jogo() {

    const router = useRouter();

    const [valido, setValido] = useState(false);
    const [portas, setPortas] = useState([]);

    // Validação de Formulário
    useEffect(() => {
        const portas = +router.query.portas;
        const temPresente = +router.query.temPresente;

        const qtdePortasValidas = portas >= 3 && portas <= 100;
        const temPresenteValido = temPresente >= 1 && temPresente <= portas;

        setValido(qtdePortasValidas && temPresenteValido);
    }, [portas]);

    // Evento p/ criação de portas através do navegador
    useEffect(() => {
        const portas = +router.query.portas;
        const temPresente = +router.query.temPresente;
        setPortas(criarPortas(portas, temPresente));
    }, [router?.query]);

    function renderizarPortas() {
        return portas.map(porta => {
            return <Porta key={porta.numero} value={porta}
                onChange={novaPorta => {
                    setPortas(atualizarPortas(portas, novaPorta));
                }} />
        });
    };

    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
                {valido ?
                    renderizarPortas() :
                    <h1 className={styles.erro}>AVISO <br />Valores Inválidos!!</h1>}
            </div>

            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    );
};