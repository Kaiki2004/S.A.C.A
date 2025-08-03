import play from "../assets/seta_play.png";
import virar from "../assets/seta_virar.png";
import errou from "../assets/icone_erro.png";
import acertou from "../assets/icone_certo.png";
import quase from "../assets/icone_quase.png";
import { Container, Q, CardPergunta } from "../style/style.js";
import BotoesResposta from "./BotoesResposta";

export default function PerguntaCard({
    item,
    index,
    aberta,
    respostaVisivel,
    status,
    abrirCard,
    abrirResposta,
    onResponder
}) {
    const imagem =
        status === "nao" ? errou :
        status === "quase" ? quase :
        status === "zap" ? acertou :
        play;

    return (
        <Container>
            {!aberta ? (
                <Q status={status}>
                    <span>Pergunta {index + 1}</span>
                    <img
                        onClick={() => {
                            if (!status) abrirCard(index);
                        }}
                        src={imagem}
                        alt="ícone"
                    />
                </Q>
            ) : (
                <CardPergunta>
                    {!respostaVisivel ? (
                        <>
                            <p>{item.pergunta}</p>
                            <div>
                                <img onClick={() => abrirResposta(index)} src={virar} alt="virar" />
                            </div>
                        </>
                    ) : (
                        <>
                            <p>{item.resposta}</p>
                            <BotoesResposta
                                onNaoLembrou={() => onResponder(index, "nao")}
                                onQuaseLembrou={() => onResponder(index, "quase")}
                                onZap={() => onResponder(index, "zap")}
                            />
                        </>
                    )}
                </CardPergunta>
            )}
        </Container>
    );
}
