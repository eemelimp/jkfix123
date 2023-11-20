"use client";
import React from "react";
import styles from "./Palvelu.module.scss";
import PalveluItem from "./PalveluItem";
import PalveluOverview from "./PalveluOverview";

export default async function Palvelu({ palvelut }) {
  return (
    <section className={styles.palveluSection}>
      <div className={styles.palveluGrid}>
        <PalveluOverview index={1} />
        {palvelut.map((palvelu) => (
          <PalveluItem
            key={palvelu.id}
            title={palvelu.palvelunNimi}
            description={palvelu.palvelunKuvaus}
            imageSrc={`${`url("${palvelu.palvelunKuva.url}")`}`}
            index={2}
          />
        ))}
        {/* <PalveluItem
          title={"Sisäpesu"}
          imageSrc={'url("/images/Kitee auton sisäpesu JKFIX.png")'}
          index={2}
        ></PalveluItem>
        <PalveluItem
          title={"Ulkopesu"}
          imageSrc={'url("/images/Kitee auton ulkopesu JKFIX.png")'}
          index={3}
        ></PalveluItem>
        <PalveluItem
          title={"Vahaus"}
          imageSrc={'url("/images/Kitee auton vahaus JKFIX.png")'}
          index={4}
        ></PalveluItem>
        <PalveluItem
          title={"Teippaus"}
          imageSrc={'url("/images/Kitee auton teippaus JKFIX.png")'}
          index={5}
        ></PalveluItem>
        <PalveluItem
          title={"Lasien tummennus"}
          imageSrc={'url("/images/Kitee auton lasien tummennus JKFIX.png")'}
          index={6}
        ></PalveluItem> */}
      </div>
    </section>
  );
}
