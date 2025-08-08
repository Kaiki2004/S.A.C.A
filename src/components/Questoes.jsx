import { useState } from "react";
import { Perguntas as PerguntasBase } from "./Dados";
import PerguntaCard from "./Perguntas.jsx";
import ContadorConcluidos from "./Rodape.jsx";
import BotaoAdicionar  from "./Adicionar.jsx";

export default function Questoes() {
    const [perguntas, setPerguntas] = useState([...PerguntasBase]);
    const [abertas, setAbertas] = useState([]);
    const [respostasVisiveis, setRespostasVisiveis] = useState([]);
    const [naoLembrei, setNaoLembrei] = useState([]);
    const [quaseLembrei, setQuaseLembrei] = useState([]);
    const [zapLembrei, setZapLembrei] = useState([]);

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

    function adicionarNovaPergunta() {
        const novaPergunta = prompt("Digite a pergunta:");
        const novaResposta = prompt("Digite a resposta:");

        if (novaPergunta && novaResposta) {
            const nova = { pergunta: novaPergunta, resposta: novaResposta };
            setPerguntas((prev) => [...prev, nova]); // atualiza o estado
        }
    }

    return (
        <>
            {perguntas.map((item, index) => (
                <PerguntaCard
                    key={index}
                    item={item}
                    index={index}
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
            <BotaoAdicionar prop={adicionarNovaPergunta}></BotaoAdicionar>
            <ContadorConcluidos atual={concluido} total={perguntas.length} />
        </>
    );
}
