import Link from 'next/link';
import { Container } from './styles';
import { SectionTitle } from '../SectionTitle';
import ProjetoItem from './ProjetoItem';

export default function Projetos() {
  return (
    <Container>
      <SectionTitle title="#Ultimos Projetos" />

      <section>
        <ProjetoItem
          img="https://user-images.githubusercontent.com/76684471/167331490-1b66a8e3-02cc-42f1-b414-00af5f2fa653.png"
          title="Projeto 01"
          type="Teamsoft"
          slug="https://github.com/eltonfreitasx/Teamsoft-Desafio"
        />
        <ProjetoItem
          img="https://user-images.githubusercontent.com/76684471/167331490-1b66a8e3-02cc-42f1-b414-00af5f2fa653.png"
          title="Projeto 02"
          type="Teamsoft"
          slug="teste"
        />
        <ProjetoItem
          img="https://user-images.githubusercontent.com/76684471/167331490-1b66a8e3-02cc-42f1-b414-00af5f2fa653.png"
          title="Projeto 03"
          type="Teamsoft"
          slug="teste"
        />
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
