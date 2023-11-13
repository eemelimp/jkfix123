import React from "react";
import styles from "./Texts.module.scss";

export function Paragraph({ children }) {
  return <p className={styles.paragraph}>{children}</p>;
}

export function Heading1({ children }) {
  return <h1 className={styles.heading1}>{children}</h1>;
}
export function Heading2({ children }) {
  return <h2 className={styles.heading2}>{children}</h2>;
}
export function Heading3({ children }) {
  return <h3 className={styles.heading3}>{children}</h3>;
}
