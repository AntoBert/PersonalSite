import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Services.module.css";
import Contribution from "./Contribution";
import Pointer from "./Pointer";

const Services = () => {

  const textContribution = "Web development icons created by Freepik - Flaticon";
  const link = "https://www.flaticon.com/free-icons/web-development";
  const [active1, setActive1] = useState("active");
  const [active2, setActive2] = useState("");
  const [active3, setActive3] = useState("");

  const scrollHandler = (e) => {
    /* console.log("scrollLeft",e.target.scrollLeft);
    console.log("scrollVW",(e.target.scrollLeft/document.documentElement.clientWidth)*100); */

    var sliderPositionVw = (e.target.scrollLeft/document.documentElement.clientWidth)*100;
    setTimeout(function(){
        if(sliderPositionVw >= 0 && sliderPositionVw <= 80){
          setActive1("active");
          setActive2("");
          setActive3("");
        }
        else if(sliderPositionVw >= 85 && sliderPositionVw <= 100){
          setActive2("active");
          setActive1("");
          setActive3("");
        }
        else if(sliderPositionVw >= 120 && sliderPositionVw <= 190){
          setActive3("active");
          setActive1("");
          setActive2("");
        }
    },150)
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>

        <div className={styles.title_container}>
          <h2 className={styles.title}>SERVIZI</h2>
          <div className={styles.lineLg}/>
          <div className={styles.lineSm}/>
        </div>

        <div className={styles.cards_container} onScroll={scrollHandler}>
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
        <div className={styles.pointerSlider_container}>
          <Pointer active={active1} />
          <Pointer active={active2} />
          <Pointer active={active3} />
        </div>
        <Contribution textContrib={textContribution} link={link} />
      </div>
    </div>
  )
}

export default Services