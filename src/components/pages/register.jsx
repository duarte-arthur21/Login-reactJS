import React from 'react';
import { Input } from '../Input';
import { Icon } from '../Image/Icon.style';
import { Container } from '../Form/Container.style';
import { Text } from '../Text/styles';
import { Form } from '@unform/web';
import { useRef } from 'react'
import * as Yup from 'yup'
import {BtnDefault, BtnPrimary} from '../Button';


const Cadastro = (props) => {
  const {mudaSecao} = props
  const formRef = useRef(null);

  function handleSubmit(data) {
    const submitdata = {username: data.username, email: data.email, password: data.password, repeat: data.repeatpassword}
    console.log(submitdata);

    schema.isValid(submitdata).then((Response) => {console.log(Response)})
  }

  const schema = Yup.object({
    email: Yup.string().email(),
    username: Yup.string().min(10, 'error'),
    password: Yup.string().min(4, 'error'),
    repeatpassword: Yup.string().oneOf([Yup.ref('password'), null], 'error'),
})

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
              <Input placeholder='Repeta a senha' type="password" name='repeatpassword'/>
            </Container>

            <BtnPrimary 
              title='Registrar'
              type='submit'/>
      </Form>
      <BtnDefault 
        title='Voltar para login'
        onClick={() => mudaSecao('login')}/>


    </section>
  )
}

export {Cadastro}