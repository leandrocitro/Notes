import { Container, Links, Content } from "./styles"

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";


export function Details() {

  return (

    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir Nota" />

          <h1>
            Introdução ao React
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse dolorem ducimus molestiae non ad consequuntur a quas odit,
            numquam iure nostrum porro corporis, nulla est, sint harum sequi minus sit!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem debitis veritatis quidem non expedita. Quidem mollitia inventore
            minima quisquam ab ratione quod omnis voluptatum magnam molestiae consectetur, sequi nobis reprehenderit!
          </p>

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
          <Button title="Voltar" />

        </Content>
      </main>

    </Container>
  );
}


