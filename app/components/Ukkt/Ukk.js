"use client";
import React, { useState } from "react";
import styles from "./Ukk.module.scss";
import { Heading3, Paragraph } from "../Utils/Texts";
import HighlightedText from "../HighlightedText/HighlightedText";
import { motion, AnimatePresence } from "framer-motion";

export default function Ukk({ ukk }) {
  const ukkAvattu = ukk.avattu;
  const [isOpen, setIsOpen] = useState(ukkAvattu);

  //   async function handleChange(state) {
  //     setTimeout(() => {
  //       setIsOpen(!state);
  //     }, 300);
  //   }

  return (
    <motion.div
      className={styles.kysymys}
      initial={isOpen}
      onClick={() => setIsOpen(!isOpen)}
      whileTap={{ scale: 0.9 }}
    >
      <div className={styles.top}>
        <Heading3>
          <HighlightedText type={4}>{ukk.kysymys} </HighlightedText>
        </Heading3>
        <Heading3>
          <motion.button style={{ color: "white" }}>
            <HighlightedText type={2}> {isOpen ? "—" : "+"}</HighlightedText>
          </motion.button>
        </Heading3>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.p
            intial="collapsed"
            animate="open"
            exit="collapsed"
            transition={{ duration: 0.8 }}
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
          >
            {ukk.vastaus}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
