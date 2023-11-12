import React from "react";
import styles from "./NavigationComponent.module.scss";

export default function NavigationComponent({ children }) {
  return (
    <div className={styles.navigationComponent}>
      {children}
      <img src="/images/playIcon2.svg"></img>
    </div>
  );
}
