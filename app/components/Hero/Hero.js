"use client";
import React from "react";
import styles from "./Hero.module.scss";
import { Heading1, Paragraph } from "../Utils/Texts";
import HighlightedText from "../HighlightedText/HighlightedText";
import Image from "next/image";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import NavigationComponent from "../NavigationComponent/NavigationComponent";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.sectionHero}>
      <motion.div
        className={`container ${styles.heroContainer}`}
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className={styles.leftSide}>
          <Heading1>
            <HighlightedText type={2}>
              Pidä huolta itsestäsi, me pidämme{" "}
            </HighlightedText>
            <HighlightedText type={1}>autostasi</HighlightedText>
          </Heading1>
          <Paragraph>
            Tarjoamme räätälöityjä ja asiakaskeskeisiä pesu, teippaus ja
            pinnoitus palveluita <strong>kokemuksella</strong> ja{" "}
            <strong>ammattitaidolla</strong>. <br></br>
            <br></br>Meillä on intohimo autonhoitoon, ja se näkyy tuloksissamme.
            Huolehdimme autosi puhtaudesta, suojasta ja kiillosta, jotta sinä
            voit vain{" "}
            <HighlightedText type={1}>nauttia lopputuloksesta.</HighlightedText>
          </Paragraph>
          <div className={styles.heroInfo}>
            <img
              src="/images/Jape Karhapää JKFIX Kitee.png"
              alt="Jape Karhapään allekirjoitus"
              className={styles.heroSign}
            ></img>
            <div></div>
            <Link href="/#ota-yhteytta">
              <ButtonPrimary>OTA YHTEYTTÄ</ButtonPrimary>
            </Link>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.heroNavigation}>
            <NavigationComponent>Pesu</NavigationComponent>
            <NavigationComponent>Pinnoitus</NavigationComponent>
            <NavigationComponent>Teippaukset</NavigationComponent>
            <NavigationComponent>Muut palvelut</NavigationComponent>
          </div>
        </div>
      </motion.div>
      <div className={styles.heroBackground}>
        <video loop autoPlay muted className={styles.heroVideo}>
          <source src="/videos/JKFIX KITEE.mp4" type="video/mp4"></source>
        </video>
      </div>
    </section>
  );
}
