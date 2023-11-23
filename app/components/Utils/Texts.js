import React from "react";
import styles from "./Texts.module.scss";
import { Aldrich } from "next/font/google";
import { Jura } from "next/font/google";

const jura = Jura({ subsets: ["latin"] });

const aldrich = Aldrich({ weight: "400", subsets: ["latin"] });

export function Paragraph({ children }) {
  return <p className={`${styles.paragraph} ${jura.className}`}>{children}</p>;
}

export function Heading1({ children }) {
  return (
    <h1 className={`${styles.heading1} ${aldrich.className}`}>{children}</h1>
  );
}
export function Heading2({ children }) {
  return (
    <h2 className={`${styles.heading2} ${aldrich.className}`}>{children}</h2>
  );
}
export function Heading3({ children }) {
  return <h3 className={styles.heading3}>{children}</h3>;
}
export function Heading4({ children }) {
  return <h4 className={styles.heading4}>{children}</h4>;
}
