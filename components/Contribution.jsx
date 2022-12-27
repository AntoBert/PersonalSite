import { useState } from "react";
import styles from "../styles/Contribution.module.css";

const Contribution = (props) => {

    const [text, setText] = useState("Contribuzione");

    return (
        <div className={styles.container} onMouseOver={()=>{setText("");setTimeout(()=> {setText(props.textContrib)},300)}} onMouseLeave={()=>{setText("");setTimeout(()=> {setText("Contribuzione")},300)}}>
            {text === "Contribuzione" ? text : 
            <a target='_blank' rel="noreferrer" href={props.link}>
                {text}
            </a>}
        </div>
    )
}

export default Contribution