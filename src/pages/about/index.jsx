import PageTitle from "../../components/PageTitle"
import styles from "./style.module.css"

import useData from "../../hooks/useData";
import Section from "../../components/Section";
import Container from "../../components/Container";

const About = () => {
  const {data, loading} = useData("about");

  // console.log(loading)

  if (loading) return null

    return (
    <>

      <Container>
      <PageTitle>Over mij</PageTitle>
      </Container>
      <div>
      Graag zou ik mijzelf even willen voorstellen, mijn naam is Ron Juffermans. Ik ben allround loodgieter en 55 jaar jong. Ik ben als loodgieter werkzaam vanaf mijn 25 ste,en dus al 30 jaar in het vakinmiddels run ik sinds jaren mijn eigen loodgietersbedrijf,voorheen als werknemer van een loodgietersbedrijf dat het onderhoud bij V&D en La Place verzorgde, zowel dak-,zink- &loodwerk, watervoorziening, sanitair & riool. Ook heb ik veel in opdracht gewerkt voor dakdekkersbedrijf Wildschut. Momenteel werk ik samen met een allround timmerman, om uw wens in vervulling te brengen.
      </div>
  


    </>
  );
};

export default About