import Image from "next/image";
import styles from "../styles/ProjectsCardRight.module.css";

const ProjectsCardRight = (props) => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <p>{props.text}</p>
        </div>
        <div className={styles.right}>
            <Image src={props.img} width={450} height={350} priority alt="Immagine intro"/>
            <p>{props.num}</p>
            <div className={styles.bar}/>
            <h2 className={styles.title}>{props.title}</h2>
        </div>
    </div>
  )
}

export default ProjectsCardRight