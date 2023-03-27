import styled from "styled-components"
import { BtnInfo } from "../../../components/Button"

const LeftSide = () => {
    return(
    <Wrapper>
        <Titulo>HealthCare</Titulo>
        <Subtitulo>Consultas marcadas com agilidade e Segurança!</Subtitulo>

        <BtnInfo type='button' title='Saiba Mais!'/>
    </Wrapper>
    )
}

export {LeftSide}

const Titulo = styled.h1`
  width: 286px;
  height: 70px;
  font-family: 'Lato';
  font-weight: 700;
  font-size: 56px;
  display: flex;
  align-items: center;
  letter-spacing: 0.4px;
  color: #EBF0FF;
`

const Subtitulo = styled.h2 `
    width: 554px;
    height: 34px;
    font-family: 'Lato';
    font-size: 26px;
    display: flex;
    align-items: center;
    letter-spacing: 0.2px;
    color: #EBF0FF;
`

const Wrapper = styled.div`
    width: 60%;
    height: ${window.innerHeight}px;
    background: #2f46b7;
    display: flex ;
    justify-content: center;
    flex-direction: column;
    align-items: center;

`