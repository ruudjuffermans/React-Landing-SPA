import styles from "./reviewcard.module.css"
import star from "../../../../assets/svg/star.svg"
import avatar from "../../../../assets/svg/avatar.svg"

const ReviewCard = () => {
  return (
    <div className={styles.review__card}>
    <div className={styles.review__content}>

    <div className={styles.review__rating}>
      <img className={styles.review__star} src={star} alt="" />
      <img className={styles.review__star} src={star} alt="" />
      <img className={styles.review__star} src={star} alt="" />
      <img className={styles.review__star} src={star} alt="" />
      <img className={styles.review__star} src={star} alt="" />
    </div>
    <div className={styles.review__text}>
      Snel gedaan, alleen achteraf was een witte pijp mooier geweest.
    </div>
    </div>
    <div className={styles.review__footer}>

      <img className={styles.review__avatar} src={avatar} alt="" />
  
    <div className={styles.review__name}>
      Natalie Sweden
    </div>
    </div>
    
  </div>
  )
}

export default ReviewCard