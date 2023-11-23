import React from "react";
import styles from "./HinnastoItem.module.scss";
import { Heading4, Paragraph } from "../Utils/Texts";
import HighlightedText from "../HighlightedText/HighlightedText";
import { splitHinnasto } from "../Utils/splitHinnasto";

export default function HinnastoItem({ hinta }) {
  const elementit = splitHinnasto(hinta.sisalto);
  console.log(elementit);
  return (
    <div className={styles.item}>
      <div className={styles.top}>
        <div className={styles.titleContainer}>
          <Heading4>
            <HighlightedText type={4}>
              {/* <HighlightedText type={1}>// </HighlightedText> */}
              {hinta.nimi}
            </HighlightedText>
          </Heading4>
        </div>
      </div>
      <div className={styles.mid}>
        {elementit.map((elementti) => (
          <Paragraph>{elementti}</Paragraph>
        ))}
      </div>
      <div className={styles.bot}>
        <Heading4>
          <HighlightedText type={2}>ALK. {hinta.hinta}€</HighlightedText>
        </Heading4>
      </div>
    </div>
  );
}
