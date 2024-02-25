import styles from "./style.module.css"
import Section from "../../../../components/Section";
import Container from "../../../../components/Container";
import Button from "../../../../components/Button";
import { forwardRef } from "react";

const TextImageLinkBlock = forwardRef(({
  reverse, text, image, link
}, ref) => {
  return (
    <Section>
      <Container>
        <div ref={ref}  className={reverse ? styles.section__reverse : styles.section__divider}>
          {!reverse ? <>
          <div id="right" className={styles.section__right}>
            <div className={styles.section__text}>

            <h2 className={styles.section__title}>
              {text.title}
            </h2>
            <p className={styles.section__content}>{text.content}</p>
            <Button to={link.to}>{link.text}</Button>
            </div>
          </div><div id="left" className={styles.section__left}>
            <img className={styles.section__img} src={image.src} alt={image.alt} />
          </div></>:<>          <div id="left" className={styles.section__left}>
            <img className={styles.section__img} src={image.src} alt={image.alt} />
          </div>
          <div id="right" className={styles.section__right}>
            <div className={styles.section__text}>

            <h2 className={styles.section__title}>
              {text.title}
            </h2>
            <p className={styles.section__content}>{text.content}</p>
            <Button to={link.to}>{link.text}</Button>
            </div>
          </div></>}
        </div>
      </Container>
    </Section>
  )})



export default TextImageLinkBlock;
