import { Container, Links } from "./styles"

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";


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
        <Button title="Voltar"/>
      </Container>
  );
}


