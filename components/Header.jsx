import Image from 'next/image'
import styles from '../styles/Header.module.css'

const Header = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.introPic_container}>
          <Image src="/images/introPic.png" width={400} height={400} priority alt="Immagine intro"/>
          <a href="http://www.freepik.com">
            <p>Designed by Freepick</p>
          </a>
        </div>
        <div className={styles.desc_container}>
          <h1 className={styles.title}>Posso aiutarti a trasformare <br/> le tue idee in realtà</h1>
          <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum <br/>  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
        </div>
      </div>
    </div>
  )
}

export default Header