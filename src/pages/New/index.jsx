
import { Header } from './../../components/Header';
import { Input } from './../../components/input';
import { Textarea } from './../../components/Textarea';
import { NoteItem } from './../../components/NoteItem';
import { Section } from './../../components/Section';

import { Container, Form } from './styles';



export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <a href="/">voltar</a>
                    </header>

                    <Input placeholder="Título" />
                    <Textarea placeholder="Observações" />

                    <Section title="Links úteis">
                        <NoteItem value="https://Rockeseat.com.br" />
                        <NoteItem isNew={true} placeholder="Novo link" />
                    </Section>

                    <Section title="Marcadores" />
                    <div className="tags">
                        <NoteItem value="React" />
                        <NoteItem value="Node" />
                        <NoteItem value="Java" />
                        <NoteItem isNew={true} placeholder="Nova tag" />
                    </div>
                </Form>
            </main>
        </Container>

    );
}