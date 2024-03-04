import { Container, Links } from "./styles"

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";


export function Details() {

  return (
    
      <Container>
        <Header />
        <Section title="Links Úteis">
          <Links>
            <li><a href="https://www.linkedin.com/feed/">https://www.linkedin.com/feed/</a></li>
            <li><a href="https://www.globo.com/">https://www.globo.com/</a></li>
            <li><a href="https://www.instagram.com/">https://www.instagram.com/</a></li>
          </Links>
        </Section>

        <Section title="Marcadores">
          <Tag title="Express" />
          <Tag title="Node" />
          <Tag title="React" />

        </Section>
        <Button title="Voltar"/>
      </Container>
  );
}


