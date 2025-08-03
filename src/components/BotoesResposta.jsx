import {
    ButtonContainer,
    ButtonNaoLembrei,
    QuaseNaoLembrei,
    Zap
} from "../style/style.js";

export default function BotoesResposta({ onNaoLembrou, onQuaseLembrou, onZap }) {
    return (
        <ButtonContainer>
            <ButtonNaoLembrei onClick={onNaoLembrou}>Não lembrei</ButtonNaoLembrei>
            <QuaseNaoLembrei onClick={onQuaseLembrou}>Quase não lembrei</QuaseNaoLembrei>
            <Zap onClick={onZap}>Zap!</Zap>
        </ButtonContainer>
    );
}
