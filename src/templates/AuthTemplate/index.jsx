import React from 'react';
import { useState } from 'react'
import styled from "styled-components";

import { Login } from '../../components/pages/login'; 
import { Cadastro } from '../../components/pages/register'; 
import { LeftSide } from './LeftSide';
import { RightSide } from './RightSide';

function AuthTemplate() {
  const [secaoAtual, setSecaoAtual] = useState('login');

  const render = () => {
    if (secaoAtual === 'login')
      return <Login mudaSecao={setSecaoAtual} />

    if (secaoAtual === 'cadastro')
      return <Cadastro mudaSecao={setSecaoAtual} />
  };

  return (
    <Wrapper>
      <LeftSide/>

      <RightSide>
            {render()}
      </RightSide>
    </Wrapper>
  )
}

export {AuthTemplate}

const Wrapper = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
`