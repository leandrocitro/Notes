import { useState } from "react";
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Input } from '../../components/input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

import { Container, Form, Background } from './styles';


export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignUp(){
        console.log("Test Button");
    }

    return (
        <Container>
            <Background />
            <Form>
                <h1>Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Crie sua conta</h2>

                <Input id="name"
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />

                <Input id="email"
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input id="password"
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Cadastrar" onClick={ handleSignUp } />
                    
                <Link to="/SignIn" >
                    Voltar para o login
                </Link>
                

            </Form>
            

        </Container>
    );
}