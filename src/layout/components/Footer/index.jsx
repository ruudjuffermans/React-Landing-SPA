import Container from "../../../components/Container";
import styles from "./style.module.css";
import logo from "../../../assets/images/logo-white.png"
import mail from "../../../assets/svg/mail.svg"
import phone from "../../../assets/svg/phone.svg"
import name from "../../../assets/svg/user.svg"
import chevron from "../../../assets/svg/chevron-right.svg"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__shadowcomp}>    </div>
      <Container>
        <div className={styles.footer__grid}>
          <div className={styles.grid__logocontainer}>
            <div className={styles.footer__logo}>
              <img src={logo} alt="" />
            </div>
            <div>
              <div className={styles.footer__sitetitle}>Loodgietersbedrijf Juffermans</div>
              <div className={styles.footer__sitesubtitle}>waterdicht de beste</div>
            </div>
          </div>
          <div className={styles.grid__container}>
            <h3 className={styles.footer__title}>Contactgegevens</h3>
            <ul>
            <li className={styles.footer__li}>
            <img className={styles.inl__img} src={name} alt="" />
            <div className={styles.footer__listtitle}>Loodgietersbedrijf Juffermans</div>
            </li>
            <li className={styles.footer__li}>
          <a href="mailto:ronjut@gmail.com">
            <img className={styles.inl__img} src={mail} alt="" />
            <span className={styles.inl__text}>

            ronjut@gmial.com
            </span>
          </a>
        </li>
        <li className={styles.footer__li}>
          <a href="tel:0643595090">
          <img className={styles.inl__img} src={phone} alt="" />
          <span>
            +31 6 34 59 50 90
          </span>
          </a>
        </li>
      </ul>
          </div>
          <div className={styles.grid__container}>

            <h3 className={styles.footer__title}>
              Diensten
              </h3>
              <ul>
                <li className={styles.footer__li}>
                  <img className={styles.inl__img} src={chevron} alt="" />
                  Dakdekker
                  </li>
                <li className={styles.footer__li}>
                  <img className={styles.inl__img} src={chevron} alt="" />
                  Lekkage
                  </li>
                <li className={styles.footer__li}>
                  <img className={styles.inl__img} src={chevron} alt="" />
                  Lekkage
                  </li>
                <li className={styles.footer__li}>
                  <img className={styles.inl__img} src={chevron} alt="" />
                  Lekkage
                  </li>
                <li className={styles.footer__li}>
                  <img className={styles.inl__img} src={chevron} alt="" />
                  Verstopping
                  </li>
              </ul>
   
          </div>
          <div className={styles.grid__container}>
            <h3 className={styles.footer__title}>
              Regio's
              </h3>
              <ul>
                <li className={styles.footer__li}>
                  <img className={styles.inl__img} src={chevron} alt="" />
                  Bennebroek
                  </li>
                <li className={styles.footer__li}>
                  <img className={styles.inl__img} src={chevron} alt="" />
                  Lisse
                  </li>
                <li className={styles.footer__li}>
                  <img className={styles.inl__img} src={chevron} alt="" />
                  Overveen
                  </li>
                <li className={styles.footer__li}>
                  <img className={styles.inl__img} src={chevron} alt="" />
                  Haarlem
                  </li>
                <li className={styles.footer__li}>
                  <img className={styles.inl__img} src={chevron} alt="" />
                  De
                   Zilk</li>
              </ul>
       
          </div>
        </div>
      </Container>

    </footer>
  )
}

export default Footer