import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div>
            <ul className={styles.pagesList}>
                <li>HOME</li>
                <li>INFO</li>
                <li>PROGETTI</li>
            </ul>
        </div>
        <div className={styles.contactBtn}>
            CONTATTAMI
        </div>
    </div>
  )
}

export default Navbar