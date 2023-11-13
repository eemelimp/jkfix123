import React from "react";
import styles from "./HighlightedText.module.scss";

export default function HighlightedText({ children, type }) {
  return (
    <span
      className={` ${type === 1 && styles.style1} ${
        type === 2 && styles.style2
      } ${type === 3 && styles.style3}`}
    >
      {children}
    </span>
  );
}
