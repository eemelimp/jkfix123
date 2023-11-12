import React from "react";
import styles from "./Texts.module.scss";

export function Paragraph({ children }) {
  return <p className={styles.paragraph}>{children}</p>;
}

export function Heading1({ children }) {
  return <h1 className={styles.heading1}>{children}</h1>;
}
