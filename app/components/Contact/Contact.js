"use client";
import React from "react";
import styles from "./Contact.module.scss";
import ContactForm from "../ContactForm/ContactForm";
import { Heading1, Paragraph } from "../Utils/Texts";
import HighlightedText from "../HighlightedText/HighlightedText";
import { BiPhone, BiMailSend } from "react-icons/bi";

export default function Contact({ tiedot }) {
  return (
    <section className={styles.contactSection} id="ota-yhteytta">
      <div className="container">
        <div className={styles.contactGrid}>
          <div>
            <div className={styles.info}>
              <Paragraph>
                <HighlightedText type={1}>OTA YHTEYTTÄ</HighlightedText>
              </Paragraph>
              <Heading1>
                Sinä pyydät, me{" "}
                <HighlightedText type={3}>teemme</HighlightedText>
              </Heading1>
              <Paragraph>
                Mitään ei tapahdu vahingossa. Ota meihin yhteyttä, ja
                suunnitellaan sinulle yhdessä paras ratkaisu.
              </Paragraph>
              <div className={styles.contactInfo}>
                <Paragraph>
                  <strong>{tiedot.kontaktihenkilonNimi}</strong>
                </Paragraph>
                <Paragraph>
                  <strong>{tiedot.osoite}</strong>
                </Paragraph>
                <Paragraph>
                  <BiPhone /> <strong>{tiedot.puhelinnumero}</strong>
                </Paragraph>
                <Paragraph>
                  <BiMailSend /> <strong>{tiedot.sahkopostiosoite}</strong>
                </Paragraph>
              </div>

              <div className={styles.aukiolot}>
                <div>
                  <h2>MA-PE</h2>
                  <Paragraph>{tiedot.maPeAukioloajat}</Paragraph>
                </div>
                <div>
                  <h2>LA</h2>
                  <Paragraph>{tiedot.laAukioloajat}</Paragraph>
                </div>
                <div>
                  <h2>SU</h2>
                  <Paragraph>{tiedot.suAukioloajat}</Paragraph>
                </div>
              </div>
              <img
                src="/images/JKFIX kartta.png"
                className={styles.kartta}
              ></img>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
