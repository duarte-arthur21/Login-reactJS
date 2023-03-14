import React from 'react';
import { Titulo } from '../Text/styles';
import { Text } from '../Text/styles';
import { Form } from '../Form/Form.style';
import { Container } from '../Form/Container.style';
import { Icon } from '../Image/Icon.style';
import { Input } from '../Input/styles';
import { ButtonDefault, Button } from '../Button/styles';
import { schema } from '../Form/schema';
import '../../App.css'

const Login = (props) => {
  const {mudaSecao} = props

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
        <section>
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

                      <Button>Entrar</Button>
                </Form>

                <ButtonDefault onClick={() => mudaSecao('segunda')}>Cadastar</ButtonDefault>
                <p className="EsqueciSenha">Esqueci a senha</p>
        </section>
  )
}

export {Login}
