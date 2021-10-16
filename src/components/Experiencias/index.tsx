import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="01 Anos" description="de experiência" />

      <section>
        <ExperienciaItem
          year="2021"
          title="Dev web"
          description="Lorem ipsum dolor sdsadas it amet, consectetur adipiscing elit. Aliquam"
        />
        <ExperienciaItem
          year="2021"
          title="Dev web"
          description="Lorem ipsum sss dolor sit amet, consectetur adipiscing elit. Aliquam"
        />
        <ExperienciaItem
          year="2021"
          title="Dev web"
          description="Lorem idsadas psum dolor sit amet, consectetur adipiscing elit. Aliquam"
        />
        <ExperienciaItem
          year="2020"
          title="Dev web"
          description="Lorem ipsumdsada  dolor sit amet, consectetur adipiscing elit. Aliquam"
        />
      </section>
    </Container>
  );
}

export default Experiencias;