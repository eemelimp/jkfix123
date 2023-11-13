"use client";
import React from "react";
import styles from "./Contact.module.scss";
import ContactForm from "../ContactForm/ContactForm";
import { Heading1, Paragraph } from "../Utils/Texts";
import HighlightedText from "../HighlightedText/HighlightedText";
import { BiPhone, BiMailSend } from "react-icons/bi";

export default function Contact() {
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
                Sinä pyydät,{" "}
                <HighlightedText type={3}>me teemme</HighlightedText>
              </Heading1>
              <Paragraph>
                Mitään ei tapahdu vahingossa. Ota meihin yhteyttä, ja
                suunnitellaan sinulle yhdessä paras ratkaisu.
              </Paragraph>
              <div className={styles.contactInfo}>
                <Paragraph>
                  <strong>Jan Karhapää</strong>
                </Paragraph>
                <Paragraph>
                  <strong>Osoite, Postinumero, Kitee</strong>
                </Paragraph>
                <Paragraph>
                  <BiPhone /> <strong>+358 XX XXX XXXX</strong>
                </Paragraph>
                <Paragraph>
                  <BiMailSend /> <strong>info@jkfix.fi</strong>
                </Paragraph>
              </div>

              <div className={styles.aukiolot}>
                <div>
                  <h2>MA-PE</h2>
                  <Paragraph>08:00-16:30</Paragraph>
                </div>
                <div>
                  <h2>LA</h2>
                  <Paragraph>09:00-15:00</Paragraph>
                </div>
                <div>
                  <h2>SU</h2>
                  <Paragraph>SULJETTU</Paragraph>
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
