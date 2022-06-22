import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, imgSource }) => {
  return (
    <div className={styles.meal}>
      <img src={imgSource} alt={title} />
      <span>{title}</span>
    </div>
  )
}

export default Card;