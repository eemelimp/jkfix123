import React from "react";
import styles from "./Hinnasto.module.scss";
import { Heading1, Paragraph } from "../Utils/Texts";
import HighlightedText from "../HighlightedText/HighlightedText";
import HinnastoGrid from "./HinnastoGrid";

export default function Hinnasto({ hinnat }) {
  return (
    <section className={styles.hinnastoSection}>
      <div className="container">
        <div className={styles.bannerContainer}>
          <div className={styles.hinnastoBanner}>
            <Heading1>
              <HighlightedText type={4}>Hinnasto</HighlightedText>
            </Heading1>
            <Paragraph>
              Hinnoittelumme perustuu täysin asiakkaan toivomaan kokonaisuuteen
              — ollaan yhteydessä ja suunnitellaan{" "}
              <HighlightedText type={2}>sinun palvelusi</HighlightedText>
            </Paragraph>
          </div>
        </div>
        <div className={styles.hinnastoContainer}>
          <HinnastoGrid hinnat={hinnat} />
        </div>
      </div>
    </section>
  );
}
