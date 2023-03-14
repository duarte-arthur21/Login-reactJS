import React from 'react';
//import { Form } from '../Form/Form.style';
import { Input } from '../Input/styles';
import { Icon } from '../Image/Icon.style';
import { Container } from '../Form/Container.style';
import { Text } from '../Text/styles';
import { ButtonDefault } from '../Button/styles';
import '../../App.css'
import { Button } from '../Button/styles';

import { Form } from '@unform/web';
import { useRef } from 'react';
import { useField } from '@unform/core';


const Cadastro = (props) => {
  const {mudaSecao} = props
  const formRef = useRef(null);

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <section>
      <Text>Crie uma conta para Começa</Text>

      <Form ref={formRef} onSubmit={handleSubmit}>
            <Container>
            <Icon src="/User.svg" alt="User logo"/>
              <Input placeholder='Nome' type="text" name='username'/>
            </Container>

            <Container>
              <Icon src="/Mail.svg" alt="Email logo"/>
              <Input placeholder='Email' type="email" name='email'/>
            </Container>

            <Container>
              <Icon src="/Lock.svg" alt="Senha logo"/>
              <Input placeholder='Senha' type="password" name='password'/>
            </Container>

            <Container>
              <Icon src="/Lock.svg" alt="Senha logo"/>
              <Input placeholder='Repeta a senha' type="password" name='newpassword'/>
            </Container>

            <Button type='submit'>Registrar</Button>
      </Form>
      <ButtonDefault onClick={() => mudaSecao('primeira')}>Voltar para login</ButtonDefault>


    </section>
  )
}

export {Cadastro}