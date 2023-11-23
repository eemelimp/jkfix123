import React from "react";
import styles from "./Header.module.scss";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import { Paragraph } from "../Utils/Texts";
import HighlightedText from "../HighlightedText/HighlightedText";
import ButtonSecondary from "../Buttons/ButtonSecondary";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div>
          <img src="/images/Logo.svg"></img>
          <div className={styles.divider}></div>
          <Paragraph>
            Onhan puhtaus nyt{" "}
            <HighlightedText type={3}>siistiä!</HighlightedText>
          </Paragraph>
        </div>
        <div>
          {/* <Paragraph>+358 XX XXX XXXX</Paragraph> */}
          <Link href="/#ota-yhteytta">
            <ButtonPrimary>PYYDÄ TARJOUS</ButtonPrimary>
          </Link>
        </div>
      </div>
    </header>
  );
}
