import { useState, useEffect } from "react";
import { Perguntas as PerguntasBase } from "./Dados";
import PerguntaCard from "./Perguntas.jsx";
import ContadorConcluidos from "./Rodape.jsx";
import BotaoAdicionar from "./Adicionar.jsx";
import { ButtonContainerReset, Add } from "../style/style.js";

export default function Questoes() {
    const [perguntas, setPerguntas] = useState(() => {
        const salvas = localStorage.getItem("perguntas");
        return salvas ? JSON.parse(salvas) : [...PerguntasBase];
    });

    const [abertas, setAbertas] = useState([]);
    const [respostasVisiveis, setRespostasVisiveis] = useState([]);
    const [naoLembrei, setNaoLembrei] = useState([]);
    const [quaseLembrei, setQuaseLembrei] = useState([]);
    const [zapLembrei, setZapLembrei] = useState([]);

    useEffect(() => {
        localStorage.setItem("perguntas", JSON.stringify(perguntas));
    }, [perguntas]);

    function deletarPergunta(index) {
        setPerguntas(prev => prev.filter((_, i) => i !== index));
    }

    function adicionarNovaPergunta() {
        const novaPergunta = prompt("Digite a pergunta:");
        const novaResposta = prompt("Digite a resposta:");

        if (novaPergunta && novaResposta) {
            const nova = { pergunta: novaPergunta, resposta: novaResposta };
            setPerguntas(prev => [...prev, nova]);
        }
    }

    const abrirCard = (index) => {
        if (!abertas.includes(index)) setAbertas([...abertas, index]);
    };

    const abrirResposta = (index) => {
        if (!respostasVisiveis.includes(index)) setRespostasVisiveis([...respostasVisiveis, index]);
    };

    const fecharCard = (index) => {
        setAbertas((prev) => prev.filter((i) => i !== index));
        setRespostasVisiveis((prev) => prev.filter((i) => i !== index));
    };

    const resposta = (index, tipo) => {
        if (tipo === "nao") setNaoLembrei([...naoLembrei, index]);
        else if (tipo === "quase") setQuaseLembrei([...quaseLembrei, index]);
        else if (tipo === "zap") setZapLembrei([...zapLembrei, index]);
        fecharCard(index);
    };

    const concluido = naoLembrei.length + quaseLembrei.length + zapLembrei.length;

    return (
        <>
            {perguntas.map((item, index) => (
                <PerguntaCard
                    key={index}
                    item={item}
                    index={index}
                    deletarPergunta={deletarPergunta}
                    aberta={abertas.includes(index)}
                    respostaVisivel={respostasVisiveis.includes(index)}
                    status={
                        naoLembrei.includes(index)
                            ? "nao"
                            : quaseLembrei.includes(index)
                                ? "quase"
                                : zapLembrei.includes(index)
                                    ? "zap"
                                    : ""
                    }
                    abrirCard={abrirCard}
                    abrirResposta={abrirResposta}
                    onResponder={resposta}
                />
            ))}
            <BotaoAdicionar prop={adicionarNovaPergunta} />
            <ButtonContainerReset >
                <Add onClick={() => setPerguntas(PerguntasBase)} >Reiniciar</Add>
            </ButtonContainerReset>
            <ContadorConcluidos atual={concluido} total={perguntas.length} />
        </>
    );
}
