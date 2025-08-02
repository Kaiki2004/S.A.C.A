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
    font-size: 48px;
    color: #FFFFFF;
    weight: 400;
    width: 500px;
    height: 91px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`
const Imagem = styled.img`
    width: 52px;
    height: 69px;
`
