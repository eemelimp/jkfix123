" use client";
import React from "react";

import styles from "./PalveluItem.module.scss";
import { Heading1, Paragraph } from "../Utils/Texts";
import { motion } from "framer-motion";

export default function PalveluItem({ imageSrc, title, description, index }) {
  const fadeInVariants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        delay: index * 0.2,
      },
    }),
  };

  return (
    <motion.div
      className={styles.palveluItem}
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      margin={200}
      custom={index}
    >
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.accent}></div> <Heading1>{title}</Heading1>
        </div>
        <Paragraph>{description}</Paragraph>
      </div>
      <div
        className={styles.background}
        style={{ backgroundImage: imageSrc }}
      ></div>
    </motion.div>
  );
}
