import './App.css'
import React, {useState} from 'react';

import { Wrapper } from './components/Wrapper.style'
import { SaibaMais, Cadastrar, Entrar } from './components/Button/styles'
import { Text, Titulo, Subtitulo } from './components/Text/styles';
import { Form } from './components/Form/Form.style'
import { RightSide } from './components/RightSide.style'
import { Input} from './components/Input/styles'
import { LeftSide } from './components/LeftSide.style';
import { schema } from './components/Form/schema';

function App() {

  const LoginForm = () => {    
    if(email == ''){
      alert('Preencha o campo e-mail!')
      return false}

    if (senha == ''){
      alert('Preencha o campo de senha')
      return false
    }
    return true    
  }

 const [email, setEmail] = useState('')
 const [senha, setSenha] = useState('')

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

            <Form >
                <Input placeholder='Email'
                       type="email"
                       name='username'
                       value={email} 
                       onChange={(e)=> {setEmail(e.target.value)}}
                       />

                <Input placeholder='Senha'
                       type='password' 
                       name='password'
                       value={senha} 
                       onChange={(e)=> {setSenha(e.target.value)}}
                       />

                <Entrar onClick={LoginForm}>Entrar</Entrar>

                <Cadastrar>Cadastar</Cadastrar>
                <p className="EsqueciSenha">Esqueci a senha</p>
            </Form>
      </div>


      </RightSide>
    </Wrapper>
  )
}

export default App
