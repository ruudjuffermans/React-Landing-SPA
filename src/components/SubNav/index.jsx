import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./style.module.css"

const SubNav
 = () => {
  return (
    <div className={styles.subnav__wrapper}>
        <NavLink className={styles.subnav__item} to={"/diensten/loodgieter"}>Loodgieter</NavLink>
        <NavLink className={styles.subnav__item} to={"/diensten/dakdekker"}>Dakdekker</NavLink>
        <NavLink className={styles.subnav__item} to={"/diensten/loodwerk"}>Loddwerk</NavLink>
        <NavLink className={styles.subnav__item} to={"/diensten/zinkwerk"}>Zinkwerk</NavLink>
    </div>
  )
}

export default SubNav
