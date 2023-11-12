"use client";
import React from "react";
import styles from "./Identiteetti.module.scss";
import { Heading1, Paragraph } from "../Utils/Texts";
import HighlightedText from "../HighlightedText/HighlightedText";
import { motion } from "framer-motion";

export default function Identiteetti() {
  return (
    <motion.section
      className={styles.identiteettiSection}
      initial={{ opacity: 0 }}
      duration={1}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
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
    </motion.section>
  );
}
