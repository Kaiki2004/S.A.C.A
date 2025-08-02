import styled from 'styled-components';
import raio from '../assets/logo.png'
export default function Titulo() {
    return (
        <>
            <Topo><Imagem src={raio} alt="logo" />Zap Recall</Topo>
        </>
    )
}

const Topo = styled.h1`
    font-family: 'Righteous';
    font-size: 36px;
    color: #FFFFFF;
    weight: 400;
    width: 500px;
    height: 91px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    margin-top: 30px;
`
const Imagem = styled.img`
    width: 82px;
    height: 99px;
`
