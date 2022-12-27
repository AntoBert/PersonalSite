import styles from "../styles/Pointer.module.css";

const Pointer = (props) => {
  return (
    <div className={`${styles.pointerSlider_mobile} ${props.active ? styles.active : ""}`}></div>
  )
}

export default Pointer