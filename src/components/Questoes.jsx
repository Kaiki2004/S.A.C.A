import { useState } from "react";
import { Perguntas } from "./Dados";
import PerguntaCard from "./Perguntas.jsx";
import ContadorConcluidos from "./Rodape.jsx";

export default function Questoes() {
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

    return (
        <>
            {Perguntas.map((item, index) => (
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
            <ContadorConcluidos atual={concluido} total={Perguntas.length} />
        </>
    );
}
