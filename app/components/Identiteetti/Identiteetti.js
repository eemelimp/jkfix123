"use client";
import React from "react";
import styles from "./Identiteetti.module.scss";
import { Heading1, Paragraph } from "../Utils/Texts";
import HighlightedText from "../HighlightedText/HighlightedText";
import { motion } from "framer-motion";

export default function Identiteetti() {
  return (
    <section className={styles.identiteettiSection}>
      <motion.div
        className={`container ${styles.identiteettiContainer}`}
        style={{ textAlign: "center" }}
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className={styles.identiteettiContent}>
          <Paragraph>
            <HighlightedText type={1}>KEITÄ PALVELEMME</HighlightedText>
          </Paragraph>

          <Heading1>
            KUN LOPPUTULOS <HighlightedText type={3}>MERKITSEE</HighlightedText>
          </Heading1>
          <Paragraph>
            Tarjoamme monipuolisia palveluja sinulle, kenelle lopputuloksella on
            väliä.
          </Paragraph>
        </div>
      </motion.div>
    </section>
  );
}
