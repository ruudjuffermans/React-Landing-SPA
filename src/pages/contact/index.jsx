import Button from "../../components/Button";
import Container from "../../components/Container";
import PageTitle from "../../components/PageTitle"
import Section from "../../components/Section";

const Contact = () => {

  return (
<>
      <Container>
      <PageTitle>Contact</PageTitle>
      </Container>
      <div>Neem vandaag nog contact op</div>
      <div>Ik kom kosteloos bij u langs</div>
      <Button>
        Offerte aanvragen
      </Button>
      <ul>
      <li>
          <span>
            loodgietersbedrijf juffermans
          </span>
        </li>
        <li>
          <a href="mailto:ronjut@gmail.com">
            ronjut@gmial.com
          </a>
        </li>
        <li>
          <a href="tel:0643595090">
            +31 6 34 59 50 90
          </a>
        </li>
      </ul>
      <div>
      <ul>
      <li>professionele loodgieter</li>
      <li>kosteloze inspectie</li>
      <li>altijd snel op locatie</li>
      <li>bel direct voor vrijblijvend advies</li>

      </ul>
      <Button>Bel direct</Button>
      </div>
    </>
    );
};

export default Contact