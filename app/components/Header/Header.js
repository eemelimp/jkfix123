import React from "react";
import styles from "./Header.module.scss";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import { Paragraph } from "../Utils/Texts";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div>
          <img src="/images/Logo.svg"></img>
          <div className={styles.divider}></div>
          <Paragraph>Onhan puhtaus nyt siistiä!</Paragraph>
        </div>
        <div>
          <Paragraph>+358 XX XXX XXXX</Paragraph>
          <ButtonPrimary>OTA YHTEYTTÄ</ButtonPrimary>
        </div>
      </div>
    </header>
  );
}
