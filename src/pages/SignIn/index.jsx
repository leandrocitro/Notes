import { FiMail, FiLock } from 'react-icons/fi'
import { Input } from '../../components/input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

import { Container, Form, Background } from './styles';



export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Faça seu Login</h2>

                <Input id="name"
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input id="password"
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Entrar" />
                
                <Link to="/SignUp">
                    Criar Conta
                </Link>
                

            </Form>
            <Background />

        </Container>
    );
}