import React from "react";
import styles from "./ButtonPrimary.module.scss";

export default function ButtonPrimary({ children }) {
  return (
    <button className={styles.buttonPrimary}>
      {children}
      <img src="/images/playIcon.svg"></img>
    </button>
  );
}
