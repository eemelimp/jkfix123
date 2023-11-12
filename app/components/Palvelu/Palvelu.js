import React from "react";
import styles from "./Palvelu.module.scss";
import PalveluItem from "./PalveluItem";
import PalveluOverview from "./PalveluOverview";

export default function Palvelu() {
  return (
    <section className={styles.palveluSection}>
      <div className={styles.palveluGrid}>
        <PalveluOverview />
        <PalveluItem
          title={"Sisäpesu"}
          imageSrc={'url("/images/Kitee auton sisäpesu JKFIX.png")'}
        ></PalveluItem>
        <PalveluItem
          title={"Ulkopesu"}
          imageSrc={'url("/images/Kitee auton ulkopesu JKFIX.png")'}
        ></PalveluItem>
        <PalveluItem
          title={"Vahaus"}
          imageSrc={'url("/images/Kitee auton vahaus JKFIX.png")'}
        ></PalveluItem>
        <PalveluItem
          title={"Teippaus"}
          imageSrc={'url("/images/Kitee auton teippaus JKFIX.png")'}
        ></PalveluItem>
        <PalveluItem
          title={"Lasien tummennus"}
          imageSrc={'url("/images/Kitee auton lasien tummennus JKFIX.png")'}
        ></PalveluItem>
      </div>
    </section>
  );
}
