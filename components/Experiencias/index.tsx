import { SectionTitle } from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

export function Experiencias() {
  return (
    <Container>
      <SectionTitle title="#05 Anos" description="de experiência" />

      <section>
        <ExperienciaItem
          year="2021"
          title="dev front- and"
          description="lorem ipsom aasdasdas 123456 798"
        />
        <ExperienciaItem
          year="2021"
          title="dev front- and"
          description="lorem ipsom aasdasdas 123456 798"
        />
        <ExperienciaItem
          year="2021"
          title="dev front- and"
          description="lorem ipsom aasdasdas 123456 798"
        />
        <ExperienciaItem
          year="2021"
          title="dev front- and"
          description="lorem ipsom aasdasdas 123456 798"
        />
      </section>
    </Container>
  );
}
