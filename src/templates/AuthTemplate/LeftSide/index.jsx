import styled from "styled-components"
import { BtnInfo } from "../../../components/Button"
import { Subtitulo } from "../../../components/Text/styles"


const LeftSide = () => {
    return(
    <Wrapper>
        <h1 id='healthCare'>HealthCare</h1>
        <Subtitulo>Consultas marcadas com agilidade e Segurança!</Subtitulo>

        <BtnInfo type='button' title='Saiba Mais!'/>
    </Wrapper>
    )
}

export {LeftSide}

const Wrapper = styled.div`
    width: 60%;
    height: ${window.innerHeight}px;

    background: #2f46b7;
    display: flex ;
    justify-content: center;
    flex-direction: column;
    align-items: center;

`