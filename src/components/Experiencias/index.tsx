import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="01 Ano" description="de experiência" />
      <section>
        <ExperienciaItem
          year="2021"
          title="Desenvolvedor web"
          description="Desenvolvendo com Java e Javascript"
        />
        <ExperienciaItem
          year="None"
          title="Desenvolvedor web"
          description="Desenvolvendo com Java e Javascript"
        />
        <ExperienciaItem
          year="None"
          title="Desenvolvedor web"
          description="Desenvolvendo com Java e Javascript"
        />
        <ExperienciaItem
          year="None"
          title="Desenvolvedor web"
          description="Desenvolvendo com Java e Javascript"
        />
      </section>
    </Container>
  );
}

export default Experiencias;