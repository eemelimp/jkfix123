import React from "react";
import styles from "./PalveluOverview.module.scss";
import { Heading1, Paragraph } from "../Utils/Texts";
import HighlightedText from "../HighlightedText/HighlightedText";

export default function PalveluOverview() {
  return (
    <div className={styles.palveluOverview}>
      <Heading1>
        <HighlightedText type={1}>Palvelu</HighlightedText>
      </Heading1>
      <Paragraph>
        Auton sisä- ja ulkopesut, vahaukset, teippaukset sekä lasien
        tummennukset — kaikki yhdessä paikassa, jotta voit{" "}
        <strong>nauttia autostasi huolettomasti</strong>.
      </Paragraph>
    </div>
  );
}
