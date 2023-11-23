import React from "react";
import styles from "./Alatunniste.module.scss";
import { Paragraph } from "../Utils/Texts";
import HighlightedText from "../HighlightedText/HighlightedText";
import Image from "next/image";
import Link from "next/link";

export default function Alatunniste({ tiedot }) {
  console.log(tiedot);
  return (
    <footer className={styles.alatunniste}>
      <div className="container">
        <div className={styles.footerRows}>
          <div className={styles.footerSplit}>
            <div className={styles.vasen}>
              <div className={styles.lista}>
                <Paragraph className={styles.korostettu}>
                  <HighlightedText type={4}>© 2023 JKFIX</HighlightedText>
                </Paragraph>
                <div className={styles.himmennetty}>
                  <Paragraph>{tiedot.kontaktihenkilonNimi}</Paragraph>
                  <Paragraph>
                    {tiedot.osoite}, {tiedot.paikkakunta}
                  </Paragraph>
                  <Paragraph>{tiedot.puhelinnumero}</Paragraph>
                  <Paragraph>{tiedot.sahkopostiosoite}</Paragraph>
                </div>
              </div>
              <div className={styles.lista}>
                <Paragraph className={styles.korostettu}>
                  <HighlightedText type={4}>PALVELUT</HighlightedText>
                </Paragraph>
                <div className={styles.himmennetty}>
                  <Paragraph>Autopesu</Paragraph>
                  <Paragraph>Mainosteippaus</Paragraph>
                  <Paragraph>Yliteippaus</Paragraph>
                  <Paragraph>Suojateippaus</Paragraph>
                </div>
              </div>
              <div className={styles.lista}>
                <div className={styles.himmennetty}>
                  <Paragraph>Valojen kalvoitus</Paragraph>
                  <Paragraph>Kiillotus</Paragraph>
                  <Paragraph>Lasien tummennus</Paragraph>
                  <Paragraph>Sisäpesu</Paragraph>
                  <Paragraph>Ulkopesu</Paragraph>
                </div>
              </div>
            </div>
            <div className={styles.oikea}>
              <div className={styles.lista}>
                <Paragraph className={styles.korostettu}>
                  <HighlightedText type={4}>SEURAA SOMESSA</HighlightedText>
                </Paragraph>
                <div className={styles.someLogot}>
                  <a href="https://instagram.com/jkfixi" target="_blank">
                    <Image
                      src="/images/JKFIX instagram 2.svg"
                      width={25}
                      height={25}
                    ></Image>
                  </a>
                  <Image
                    src="/images/JKFIX facebook.svg"
                    width={25}
                    height={25}
                  ></Image>
                  <a href="https://tiktok.com/@jkfixjape" target="_blank">
                    <Image
                      src="/images/JKFIX tiktok 2.svg"
                      width={30}
                      height={30}
                    ></Image>
                  </a>
                </div>
                <div className={styles.himmennetty}>
                  <Link href="/tietosuojaseloste">
                    <Paragraph>Tietosuojaseloste</Paragraph>
                  </Link>
                  <Paragraph>{tiedot.yTunnus}</Paragraph>
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/images/JKFIX rakkaudesta lajiin.png"
            alt="Jan Karhapään allekirjoitus"
            width={315}
            height={90}
            className={styles.kuittaus}
          ></Image>
        </div>
      </div>
    </footer>
  );
}
