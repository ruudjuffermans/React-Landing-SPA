import { useState } from "react";
import Menu from "../../../components/Menu";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/svg/logo.svg"
import menu from "../../../assets/svg/menu.svg"
import routes from "../../../router/routes"
import Container from "../../../components/Container";
import Button from "../../../components/Button";

const Header = () => {
  const [show, setShow] = useState(true);
  return (
    <div className={styles.header__wrap}>

      <header className={styles.header}>
        <Container>
          <div className={styles.header__flex}>

            <a className={styles.header__logo} href="/">
              {/* <img src={logo} alt="" /> */}
              <span className={styles.header__name}>
                Loodgieter Juffermans
              </span>
            </a>

<nav className={styles.header__nav}>


              <ul className={styles.nav__list}>
                {routes.filter((route) => !route.isDynamic)
                  .map(({ name, route, key }) => (
                    <li key={key}>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? `${styles.header__link} ${styles.active}` : styles.header__link
                        }
                        to={route}
                      >
                        {name}
                      </NavLink>
                    </li>
                  )
                  )}

              </ul>
              <Button>
                Vraag Offerte Aan
              </Button>
              </nav>

              <div className={styles.header__menu} >

                <button onClick={() => setShow(!show)}>
                  <img src={menu} alt="" />
                </button>
                <Menu show={show} setShow={setShow} />
              </div>
            </div>
            <div>
          </div>

      


        </Container>
      </header>
    </div>
  );
};

export default Header;
