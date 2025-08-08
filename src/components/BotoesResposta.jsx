import {
    ButtonContainer,
    ButtonNaoLembrei,
    QuaseNaoLembrei,
    Zap
} from "../style/style.js";

export default function BotoesResposta({ onNaoLembrou, onQuaseLembrou, onZap }) {
    return (
        <ButtonContainer>
            <ButtonNaoLembrei onClick={onNaoLembrou}>Errei</ButtonNaoLembrei>
            <QuaseNaoLembrei onClick={onQuaseLembrou}>Quase </QuaseNaoLembrei>
            <Zap onClick={onZap}>Acertei</Zap>
        </ButtonContainer>
    );
}
