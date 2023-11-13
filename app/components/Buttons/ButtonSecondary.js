import React from "react";
import styles from "./ButtonSecondary.module.scss";

export default function ButtonSecondary({ children }) {
  return <button className={styles.button}>{children}</button>;
}
