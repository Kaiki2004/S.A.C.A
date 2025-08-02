import styled from 'styled-components';
import raio from '../assets/logo.png'
export default function Titulo() {
    return (
        <>
            <div><span><img src={raio} alt="logo" /></span><Topo>Zap Recall</Topo></div>
        </>
    )
}

const Topo = styled.h1`
    font-family: 'Righteous';
    font-size: 36px;
    color: #FFFFFF;
    weight: 400;
    size:36px
`

