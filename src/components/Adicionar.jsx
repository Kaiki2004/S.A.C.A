// src/components/BotaoAdicionar.jsx
import { ButtonContainer, Add } from "../style/style";
import Mais from "../assets/mais.png";

export default function BotaoAdicionar({ prop }) {
    return (
        <ButtonContainer>
            <Add onClick={prop}>
                Adicionar Pergunta <img src={Mais} alt="mais" />
            </Add>
        </ButtonContainer>
    );
}
