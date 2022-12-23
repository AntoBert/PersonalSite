import styles from '../styles/IntroSidebar.module.css'

const IntroSidebar = () => {
  return (
    <div className={styles.introContainer}>
        <h1 className={styles.intro_title}>ANTONIO <br/> BERTONI</h1>
        <p className={styles.intro_para}> ✦ FULL STACK DEVELOPER <br/> ✦ DIGITAL DATA ARCHITECT</p>
        <div className={styles.intro_skillCont}>
            <div className={styles.intro_skillTop}>
            <div className={`${styles.intro_skill} ${styles.jsBtn}`}>Javascript</div>
            <div className={`${styles.intro_skill} ${styles.reactBtn}`}>React</div>
            </div>
            <div className={styles.intro_skillBottom}>
            <div className={`${styles.intro_skill} ${styles.nextBtn}`}>Next</div>
            <div className={`${styles.intro_skill} ${styles.mongoBtn}`}>MongoDB</div>
            </div>
        </div>
    </div>
  )
}

export default IntroSidebar