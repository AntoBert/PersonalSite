import Image from "next/image";
import styles from "../styles/Services.module.css";

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>

        <div className={styles.title_container}>
          <h2 className={styles.title}>SERVIZI</h2>
          <div className={styles.lineLg}/>
          <div className={styles.lineSm}/>
        </div>

        <div className={styles.cards_container}>
          <div className={styles.card_wrapper}>
            <Image src="/images/illustration.png" width={40} height={40} alt="icona design" />
            <h2>Design</h2>
            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
          </div>
          <div className={styles.card_wrapper}>
            <Image src="/images/coding.png" width={40} height={40} alt="icona frontend" />
            <h2>Frontend</h2>
            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
          </div>
          <div className={styles.card_wrapper}>
            <Image src="/images/backend.png" width={40} height={40} alt="icona backend" />
            <h2>Backend</h2>
            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Services