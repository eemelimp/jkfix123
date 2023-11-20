import React from "react";
import styles from "./loading.module.scss";

export default function DefaultLoading() {
  return (
    <div className={styles.loading}>
      <img src="/images/Logo.svg"></img>
      <p className="dots">Ladataan</p>
    </div>
  );
}
