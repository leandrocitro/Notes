import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { FiPlus, FiSearch } from 'react-icons/fi';

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Notes</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText title="Todos" isActive/></li>
                <li><ButtonText title="React" /></li>
                <li><ButtonText title="Node" /></li>
                <li><ButtonText title="Java" /></li>
                <li><ButtonText title="Phyton" /></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={{
                        title: 'React',
                        tags: [
                            { id: '1', name: 'react' },
                            { id: '2', name: 'rocketseat' }
                        ]
                    }}
                    />                    

                </Section>

            </Content>

            <NewNote>

                <FiPlus />
                Criar Nota

            </NewNote>

        </Container>

    );
}