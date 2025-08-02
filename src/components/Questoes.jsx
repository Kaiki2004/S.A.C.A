import styled from "styled-components";
import play from '../assets/seta_play.png';

export default function Questoes() {
    return (
        <>
            <Q>
                <span>Pergunta 1</span>
                <img src={play} alt="play" />
            </Q>
            <Q>
                <span>Pergunta 2</span>
                <img src={play} alt="play" />
            </Q>
            <Q>
                <span>Pergunta 3</span>
                <img src={play} alt="play" />
            </Q>
            <Q>
                <span>Pergunta 4</span>
                <img src={play} alt="play" />
            </Q>
            <Q>
                <span>Pergunta 5</span>
                <img src={play} alt="play" />
            </Q>
            <Q>
                <span>Pergunta 6</span>
                <img src={play} alt="play" />
            </Q>
        </>
    );
}

const Q = styled.div`
    font-family: 'Recursive', sans-serif;
    font-size: 36px;
    color: black;
    background-color: #FFFFFF;
    width: 500px;
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    border-radius: 5px;
    padding: 0 20px;

    span {
        font-size: 35px;
        font-weight: 700;
    }

    img {
        height: 30px;
        cursor: pointer;
    }
`;
