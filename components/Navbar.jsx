import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {

  return (
    <div className={styles.container}>
        <div>
            <ul className={styles.pagesList}>
                <li>
                  <Link href={{pathname:"/", query:{ start: 'true'}}}>
                    HOME
                  </Link>
                </li>
                <li>
                  <Link href="/info">
                    INFO
                  </Link>
                </li>
                <li>
                  <Link href="/project">
                    PROGETTI
                  </Link>
                </li>
            </ul>
        </div>
        <Link href={{pathname:"/", query:{ scroll: 'true'}}}>
          <div className={styles.contactBtn}>
              CONTATTAMI
          </div>
        </Link>
    </div>
  )
}

export default Navbar