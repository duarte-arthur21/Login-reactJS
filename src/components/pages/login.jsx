import React from 'react';
import { Titulo, Text } from '../Text/styles';
import { Form } from '@unform/web';
import { Container } from '../Form/Container.style';
import { Icon } from '../Image/Icon.style';
import { Input } from '../Input';
import { object, string } from 'yup'
import { useRef } from 'react'
import { BtnBlock, BtnDefault, BtnPrimary} from '../Button';

const Login = (props) => {
  const {mudaSecao} = props
  const formRef = useRef(null);

  const handleSubmit = (data) => {
    const submitdata = {email: data.email, password: data.password, }
    console.log(submitdata);

    schema.isValid(submitdata).then((Response) => {console.log(Response)})
  }

  const schema = object().shape({
    email: string().email(),
    password: string().min(4, 'error'),
  })

return (
        <section>
                <Titulo>Olá,</Titulo>
                <Text>Entre com sua conta</Text>

                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Container>
                      <Icon src="/Mail.svg" alt="Email logo"/>
                      <Input placeholder='Email' type="email" name='email'/>
                    </Container>

                    <Container>
                        <Icon src="/Lock.svg" alt="Senha logo"/>
                        <Input placeholder='Senha' type='password' name='password'/>
                    </Container>

                      <BtnPrimary 
                        title='Entrar'
                        type='submit' />
                </Form>

                <BtnDefault 
                  title="Cadastrar"
                  onClick={() => mudaSecao('cadastro')}/>

                <BtnBlock title="Esqueci minha Senha" />
        </section>
  )
}

export {Login}
