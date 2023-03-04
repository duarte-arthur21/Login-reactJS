import './App.css'
import { Login } from './components/Login.style'
import { Group3 } from './components/Group3.style.'
import { Titulo } from './components/Titulo.style'
import { Text } from './components/Text.style'
import { Button } from './components/Button.style'
import { HealthCare } from './components/HealthCare.style'
import { Subtitulo } from './components/Subtitulo.style'
import { Form } from './components/Form.style'
import { InputSenha } from './components/InputSenha.style'
import { InputEmail } from './components/InputEmail.style'
import { RightSide } from './components/RightSide.style'
import { Entrar } from './components/Entrar.style'
import { Cadastrar } from './components/Cadastrar.style'
import {Input} from './components/Input.style'


function App() {

  return (
    <Login>
        <HealthCare>HealthCare</HealthCare>
        <Subtitulo>Consultas marcadas com agilidade e Segurança!</Subtitulo>

            <Button>Saiba mais!</Button>

            <RightSide></RightSide>

            <Group3>
                  <Titulo>Olá,</Titulo>
                  <Text>Entre com sua conta</Text>
            </Group3>

            <Form>
                <InputEmail className='email' type="email" name="name" placeholder='Email' />
                <InputSenha className='senha' type="password" name="name" placeholder='Senha' />

                <Entrar className='Entrar'>Entrar</Entrar>

                <Cadastrar>Cadastrar</Cadastrar>
                <p className="EsqueciSenha">Esqueci a senha</p>
            </Form>
    </Login>
  )
}

export default App
