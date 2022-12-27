import Image from "next/image";
import styles from "../styles/ProjectsCardLeft.module.css";

const ProjectsCardLeft = (props) => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <Image src={props.img} width={450} height={300} priority alt="Immagine intro"/>
            <p>{props.num}</p>
            <div className={styles.bar}/>
            <h2 className={styles.title}>{props.title}</h2>
        </div>
        <div className={styles.right}>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default ProjectsCardLeft