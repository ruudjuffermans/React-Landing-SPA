import PageTitle from "../../components/PageTitle"
import styles from "./style.module.css"
import Section from "../../components/Section";
import Container from "../../components/Container";
import { Link, useParams } from "react-router-dom";
import SubNav from "../../components/SubNav";
import PageContent from "../../components/PageContent";

const Dienst = () => {
  const { dienst } = useParams();

  console.log(dienst)

    return (
    <PageContent>
    
      <Container>
      <PageTitle>Dienst: {dienst}</PageTitle>
      </Container>
    
      <Section>
      <div class="navbar">
  <Link to="/diensten/zinkwerk">Zinkwerk</Link>
  <Link to="/diensten/dakdekker">Dakdekker</Link>
  <Link to="/diensten/verstopping">Verstopping</Link>
  <Link to="/diensten/lekkage">Lekkage</Link>
</div>
        <h2>
      Waarom ons zinkwerk de beste keuze is voor uw dak
        </h2>
      <div>
      Ontdek de vele voordelen van hoogwaardig zinkwerk voor uw dak. Bij ons dakdekkersbedrijf bieden we duurzame dakoplossingen met vakmanschap en expertise.
      </div>
      <button>Neem contact op</button>
      </Section>
      <SubNav />
      <Section>
      <h2>
Vakmanschap en expertise in zinkwerk</h2>
      <div>
      Ontdek de vele voordelen van hoogwaardig zinkwerk voor uw dak. Bij ons dakdekkersbedrijf bieden we duurzame dakoplossingen met vakmanschap en expertise.
      </div>
      <button>Neem contact op</button>
      </Section>   
    </PageContent>
  );
};

export default Dienst