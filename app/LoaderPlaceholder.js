import React from "react";
import styles from "./LoaderPlaceholder.module.scss";
import { Heading3, Paragraph } from "./components/Utils/Texts";
import Climber from "./components/Loaders/Climber";
import Divider from "./components/Divider/Divider";
import Image from "next/image";
import HighlightedText from "./components/HighlightedText/HighlightedText";

export default function LoaderPlaceholder() {
  return (
    <div className={styles.loading}>
      <Climber />
      <div style={{ gap: "16px" }} className={styles.pageContent}>
        <Heading3>Sivustoa päivitetään</Heading3>
        <div className={styles.divider}></div>
        <div className={styles.socialLogos}>
          <a href="https://www.tiktok.com/@jkfixjape" target="_blank">
            <Image
              src="/images/JKFIX tiktok.svg"
              width={24}
              height={24}
              alt="JKFIX TikTok linkki"
              className={styles.link}
            ></Image>
          </a>
          <a href="https://www.instagram.com/jkfixi" target="_blank">
            <Image
              src="/images/JKFIX instagram.svg"
              width={24}
              height={24}
              alt="JKFIX Instagram linkki"
              className={styles.link}
            ></Image>
          </a>
        </div>
      </div>
    </div>
  );
}
