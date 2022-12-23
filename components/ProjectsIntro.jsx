import Image from "next/image";
import { useState } from "react";
import styles from "../styles/ProjectsIntro.module.css";


const ProjectsIntro = () => {

    const [listActive, setListActive] = useState({
        card1: "active",
        card2: "",
        card3: ""
    })

    function handleClick(card) {
        if (card === "card1") {
            setListActive({ ...listActive, card1: "active", card2: "", card3: "" });
        } 
        else if (card === "card2") {
            setListActive({ ...listActive, card1: "", card2: "active", card3: "" });
        } 
        else if (card === "card3") {
            setListActive({ ...listActive, card1: "", card2: "", card3: "active" });
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>

                <div className={styles.title_container}>
                    <h2 className={styles.title}>ULTIMI PROGETTI</h2>
                    <div className={styles.lineLg}/>
                    <div className={styles.lineSm}/>
                </div>
            

                <div className={styles.cards_container}>
                    <div className={`${styles.card_wrapper} ${listActive.card1 === "active" ? styles.active : ""} ${styles.bg1}`} onClick={()=>handleClick("card1")}>
                        <div className={`${listActive.card1 === "active" ? styles.info : styles.d_none}`}>
                            <h2>LOOPSTUDIOS</h2>
                            <p> - MOBILE ✦ DESKTOP</p>
                        </div>
                    </div>
                    <div className={`${styles.card_wrapper} ${listActive.card2 === "active" ? styles.active : ""} ${styles.bg2}`} onClick={()=>handleClick("card2")}>
                        <div className={`${listActive.card2 === "active" ? styles.info : styles.d_none}`}>
                            <h2>SOCIAL DASHBOARD</h2>
                            <p> - MOBILE ✦ DESKTOP ✦ REACT</p>
                        </div>
                    </div>
                    <div className={`${styles.card_wrapper} ${listActive.card3 === "active" ? styles.active : ""} ${styles.bg3}`} onClick={()=>handleClick("card3")}>
                        <div className={`${listActive.card3 === "active" ? styles.info : styles.d_none}`}>
                            <h2>IOF</h2>
                            <p> - MOBILE ✦ REACT ✦ EXPRESS ✦ MONGO-DB</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsIntro