import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../src/assets/elzinho.png';

export function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="elzinho" />

      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Elton</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha aprensetação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Elton,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Freitas</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Cargo</span> {'\u007B'}
            <div>
              Função: <span className="blue">Dev Front-end Jr.</span>
            </div>
            <div>
              Empresa: <span className="blue">Procurando XD</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
