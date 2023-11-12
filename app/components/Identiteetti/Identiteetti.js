import React from "react";
import styles from "./Identiteetti.module.scss";
import { Heading1, Paragraph } from "../Utils/Texts";
import HighlightedText from "../HighlightedText/HighlightedText";

export default function Identiteetti() {
  return (
    <section className={styles.identiteettiSection}>
      <div
        className={`container ${styles.identiteettiContainer}`}
        style={{ textAlign: "center" }}
      >
        <div className={styles.identiteettiContent}>
          <Paragraph>
            <HighlightedText type={1}>KEITÄ PALVELEMME</HighlightedText>
          </Paragraph>

          <Heading1>KUN LOPPUTULOS MERKITSEE</Heading1>
          <Paragraph>
            Tarjoamme monipuolisia palveluja sinulle, kenelle lopputuloksella on
            väliä.
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
