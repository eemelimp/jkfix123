"use client";
import React from "react";
import styles from "./Contact.module.scss";
import ContactForm from "../ContactForm/ContactForm";
import { Heading2, Paragraph } from "../Utils/Texts";
import HighlightedText from "../HighlightedText/HighlightedText";
import { BiPhone, BiMailSend } from "react-icons/bi";
import Map from "../Map/Map";

export default function Contact({ tiedot }) {
  return (
    <section className={styles.contactSection} id="ota-yhteytta">
      <div className="container">
        <div className={styles.contactGrid}>
          <div>
            <div className={styles.info}>
              <Paragraph>
                <HighlightedText type={2}>OTA YHTEYTTÄ</HighlightedText>
              </Paragraph>
              <Heading2>
                Sinä pyydät, me{" "}
                <HighlightedText type={3}>teemme</HighlightedText>
              </Heading2>
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
                  <h3>MA-PE</h3>
                  <Paragraph>{tiedot.maPeAukioloajat}</Paragraph>
                </div>
                <div>
                  <h3>LA</h3>
                  <Paragraph>{tiedot.laAukioloajat}</Paragraph>
                </div>
                <div>
                  <h3>SU</h3>
                  <Paragraph>{tiedot.suAukioloajat}</Paragraph>
                </div>
              </div>
              <Map />
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
