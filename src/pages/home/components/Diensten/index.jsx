import React from 'react'
import Section from '../../../../components/Section'
import Container from '../../../../components/Container'
import styles from "./style.module.css"
import PageTitle from '../../../../components/PageTitle'

import zinkElement from "../../../../assets/svg/zink-element.svg"
import leadElement from "../../../../assets/svg/lead-element.svg"

import dienstImage1 from "../../../../assets/images/home1.jpeg"
import dienstImage2 from "../../../../assets/images/hero2.jpeg"

const Diensten = () => {
    return (
        <Section>
            <Container>
                <div className={styles.page__divider}>
                    <div className={styles.divider__left}>

                    <div className={styles.page__subtitle}>loodgietersbedrijf juffermans</div>
                    <PageTitle>Enkele van de diensten<br />die ik lever</PageTitle>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, deserunt reprehenderit minus at veniam modi corrupti pariatur atque et quod libero velit dicta voluptatum tempora provident ab non mollitia harum.</p>
                    <div className={styles.dienst__cardrow}>
                        <div className={styles.dienst__card}>
                            <img className={styles.card__icon} src={zinkElement} alt="" />
                            <div className={styles.card__title}>zinkwerk</div>
                            <div className={styles.card__content}>Onze tarieven zijn glashelder en worden ook altijd van tevoren besproken. Zo kom je niet voor verrassingen te staan.</div>
                        </div>
                        <div className={styles.dienst__card}>
                            <img className={styles.card__icon} src={leadElement} alt="" />
                            <div className={styles.card__title}>loodwerk</div>
                            <div className={styles.card__content}>Onze tarieven zijn glashelder en worden ook altijd van tevoren besproken. Zo kom je niet voor verrassingen te staan.</div>
                        </div>
                    </div>
                    
                    </div>
                    <div className={styles.divider__right}>
                        <div className={styles.dienst__imgwrapper1}>
                      <img className={styles.dienst__img2} src={dienstImage2} alt="" />
                        </div>
                        <div className={styles.dienst__imgwrapper2}>
                      <img className={styles.dienst__img1} src={dienstImage1} alt="" />
                        </div>

                        </div>
                </div>
            </Container>

        </Section>
    )
}

export default Diensten