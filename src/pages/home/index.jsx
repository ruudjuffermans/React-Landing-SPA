import Button from "../../components/Button"
import Container from "../../components/Container"
import Section from "../../components/Section"
import Reviews from "./components/Reviews"
import star from "../../assets/svg/star.svg"
import image1 from "../../assets/images/home2.jpeg"
import image2 from "../../assets/images/home3.jpeg"
import styles from "./style.module.css"
import TextImageLinkBlock from "./components/TextImageLinkBlock"
import Swiper from "../../components/Sliders/Parallax"
import { useEffect, useRef, useState } from "react"
import PageTitle from "../../components/PageTitle"
import Hero from "./components/Hero"
import Diensten from "./components/Diensten"
import Projecten from "./components/Projecten"


const data = [
  {
    text: { title: "Onze missie", content: "Onze missie is om de behoeften en verwachtingen van onze klanten te overtreffen door middel van uitmuntend vakmanschap, betrouwbare service en duurzame oplossingen. Wij streven naar tevredenheid op lange termijn en streven ernaar om een langdurige relatie op te bouwen met elke klant." },
    image: { src: image1, alt: "" },
    link: { to: "/home", text: "go home" }
  }
]

const IMAGES = [
  { url: image1, alt: "Car One" },
  { url: image2, alt: "Car Two" },
]

// function withPresetProps(Component, presetProps) {
//   // Return a new component that wraps the original component
//   // and merges presetProps with any props passed to this component
//   return function WrappedComponent(props) {
//     // Merge any props provided to the wrapped component with the presetProps
//     const combinedProps = { ...presetProps, ...props };
//     // Render the original component with the combined props
//     return <Component {...combinedProps} />;
//   }
// }

// const Slide = ({ name, number, ...props }) => {
//   return (
//     <div className={styles.review__card}>
//       <div className={styles.review__name}>{name}</div>
//       <div className={styles.review__rating}>
//         <img className={styles.review__star} src={star} alt="" />
//         <img className={styles.review__star} src={star} alt="" />
//         <img className={styles.review__star} src={star} alt="" />
//         <img className={styles.review__star} src={star} alt="" />
//         <img className={styles.review__star} src={star} alt="" />
//       </div>
//       <div>{number}</div>
//       <div className={styles.review__text}>
//         Snel gedaan, alleen achteraf was een witte pijp mooier geweest.
//       </div>
//     </div>
//   );
// };


const Home = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    console.log(isIntersecting);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    console.log(ref.current)
    ref.current.children[0].classList.add(styles.child__left);
    ref.current.children[1].classList.add(styles.child__right);
  }, [])

  useEffect(() => {
    if (isIntersecting) {
      ref.current.children[0].classList.add(styles.slide);
      ref.current.children[1].classList.add(styles.slide);
    }
  }, [isIntersecting]);
  return (
    <>
    <Hero/>
      {/* <Section>
        <Container>
          <PageTitle>Projecten</PageTitle>
        </Container>
      </Section> */}
      <Section>

<Diensten />
      </Section>
<Section>

<Projecten />
</Section>
<Section>

      <TextImageLinkBlock text={data[0].text} image={data[0].image} link={data[0].link} />
      <TextImageLinkBlock ref={ref} reverse text={data[0].text} image={data[0].image} link={data[0].link} />
<Reviews />
      </Section>

    </>
  )
}

export default Home
