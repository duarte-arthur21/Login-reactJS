import './App.css'
import React from 'react';

import { Wrapper } from './components/Wrapper.style'
import { SaibaMais, Cadastrar, Entrar } from './components/Button/styles'
import { Text, Titulo, Subtitulo } from './components/Text/styles';
import { Form } from './components/Form/Form.style'
import { Container } from './components/Form/Container.style';
import { RightSide } from './components/RightSide.style'
import { Input} from './components/Input/styles'
import { LeftSide } from './components/LeftSide.style';
import { schema } from './components/Form/schema';
import { Icon } from './components/Image/Icon.style';

function App() {

  const LoginForm = () => {
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const submitData = {
      username: e.target.username.value,
      password: e.target.password.value,
    }

    schema.isValid(submitData).then((res) => console.log(res))
    console.log('submitData', submitData)
  }

  return (
    <Wrapper>
      <LeftSide>
        <div className='Left'>
            <h1 id='healthCare'>HealthCare</h1>
            <Subtitulo>Consultas marcadas com agilidade e Segurança!</Subtitulo>

            <SaibaMais>Saiba Mais!</SaibaMais>
        </div>
      </LeftSide>

      <RightSide>
        <div className="Right">
                  <Titulo>Olá,</Titulo>
                  <Text>Entre com sua conta</Text>

            <Form onSubmit={handleSubmit}>
              <Container>
                <Icon src="/Mail.svg" alt="Email logo"/>
                <Input placeholder='Email' type="email" name='username'/>
              </Container>

              <Container>
                  <Icon src="/Lock.svg" alt="Email logo"/>
                  <Input placeholder='Senha' type='password' name='password'/>
              </Container>

                <Entrar>Entrar</Entrar>

                <Cadastrar>Cadastar</Cadastrar>
                <p className="EsqueciSenha">Esqueci a senha</p>
            </Form>
          </div>
      </RightSide>
    </Wrapper>
  )
}

export default App
