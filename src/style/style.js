import styled from "styled-components";

// Container geral permanece
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 300px;
`;

// PERGUNTA FECHADA (Q)
export const Q = styled.div`
    font-family: 'Recursive', sans-serif;
    font-size: 16px; 
    background-color: #FFFFFF;
    width: 90%;
    max-width: 500px;
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    border-radius: 5px;
    padding: 0 20px;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.1);

    span {
        font-size: 16px;
        font-weight: 700;
        text-decoration: ${({ status }) => (status ? 'line-through' : 'none')};
        color: ${({ status }) =>
        status === 'nao' ? '#FF3030' :
            status === 'quase' ? '#FF922E' :
                status === 'zap' ? '#2FBE34' :
                    'black'};
    }

    img {
        height: 24px;
        cursor: pointer;

        @media (min-width: 600px) {
            height: 30px;
        }
    }
`;

//Botao adicionar 
export const Add = styled.button`
    font-family: 'Recursive', sans-serif;
    font-size: 16px; 
    background-color: rgba(255, 255, 255, 0.75);
    width: 90%;
    max-width: 500px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    border-radius: 5px;
    padding: 0 20px;
    cursor: pointer;

    img {
        height: 24px;
        cursor: pointer;
        align-items: center;
        margin-left: 5px;

        @media (min-width: 600px) {
            height: 30px;
        }
    }
`

// CARD ABERTO
export const CardPergunta = styled.div`
    font-size: 16px;
    font-weight: 400;
    background-color: #FFFFD4;
    font-family: 'Recursive', sans-serif;
    color: black;
    width: 90%;
    max-width: 500px;
    padding: 10px 20px;
    border-radius: 5px;
    margin: 20px 0;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.1);

    p {
        word-wrap: break-word;
    }

    div {
        display: flex;
        justify-content: flex-end;

        img {
            height: 20px;
            cursor: pointer;
            margin-top: 10px;
        }
    }

    @media (min-width: 600px) {
        font-size: 18px;
    }
`;

// CONTAINER DE BOTÕES
export const ButtonContainer = styled.span`
    display: flex;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    @media (min-width: 600px) {
        gap: 50px;
    }
`;

// BOTÕES DE RESPOSTA
const baseButton = `
    width: 90px;
    height: 52px;
    border-radius: 5px;
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    color: #ffffff;
    cursor: pointer;
    border: none;
    padding: 10px;

    @media (max-width: 400px) {
        width: 80px;
        font-size: 12px;
    }
`;

export const ButtonNaoLembrei = styled.button`
    ${baseButton}
    background-color: #FF3030;
`;

export const QuaseNaoLembrei = styled.button`
    ${baseButton}
    background-color: #FF922E;
`;

export const Zap = styled.button`
    ${baseButton}
    background-color: #2FBE34;
`;

// CONTADOR FINAL
export const Num_questoes = styled.div`
    font-family: 'Recursive', sans-serif;
    font-size: 18px;
    color: black;
    background-color: #FFFFFF;
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    border-radius: 5px;
    padding: 0 20px;

    @media (min-width: 600px) {
        font-size: 24px;
    }
`;


export const PerguntaConteiner = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    img{
        height: 20px;
        cursor: pointer;
        
    }
    
`;