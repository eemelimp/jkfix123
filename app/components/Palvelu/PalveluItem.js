import React from "react";

import styles from "./PalveluItem.module.scss";
import { Heading1, Paragraph } from "../Utils/Texts";

export default function PalveluItem({ imageSrc, title, description }) {
  return (
    <div className={styles.palveluItem}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.accent}></div> <Heading1>{title}</Heading1>
        </div>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur. Cursus eget potenti ut laoreet
          vulputate augue tincidunt mattis.
        </Paragraph>
      </div>
      <div
        className={styles.background}
        style={{ backgroundImage: imageSrc }}
      ></div>
    </div>
  );
}
