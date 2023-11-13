"use client";
import styles from "./ContactForm.module.scss";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosContact } from "react-icons/io";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import { useRef, useEffect } from "react";
import { Heading2, Paragraph } from "../Utils/Texts";
import HighlightedText from "../HighlightedText/HighlightedText";

export default function ContactForm() {
  const viestiRef = useRef(null);

  useEffect(() => {
    function autoResize() {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    }

    viestiRef.current.addEventListener("input", autoResize, false);
    return () => {
      viestiRef.current !== null &&
        viestiRef.current.removeEventListener("input", autoResize, false);
    };
  }, []);

  const data = {
    firstName: "Eemeli",
    phoneNumber: "+358 044 533 8232",
    email: "eemeli.haakana@gmail.com",
    date: new Date().toLocaleDateString("fi-FI"),
    time: new Date().toLocaleTimeString("fi-FI"),
    category: "Teippaus",
    content: "Tämä on testiviesti",
  };

  async function sendMail() {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch("/api/send-message", options);
    const res = await response.json();
    console.log(res);
  }

  return (
    <div className={styles.contactForm}>
      <Heading2>Kysy kysymys tai pyydä hinta-arvio</Heading2>
      <Paragraph>Vastaamme yleisesti tunnin sisällä</Paragraph>
      <form>
        <div className={styles.textInput}>
          <IoIosContact />

          <input type="text" placeholder="Etunimi*"></input>
        </div>
        <div className={styles.textInput}>
          <IoIosContact />

          <input type="text" placeholder="Sukunimi*"></input>
        </div>
        <div className={styles.row}>
          <div className={styles.textInput}>
            <HiOutlineMail />
            <input type="text" placeholder="Sähköpostiosoite*"></input>
          </div>
          <div className={styles.textInput}>
            <HiOutlineMail />
            <input type="text" placeholder="Puhelinnumero*"></input>
          </div>
        </div>

        <div className={styles.textInput}>
          <textarea
            placeholder="Viesti*"
            className={styles.textarea}
            ref={viestiRef}
          ></textarea>
        </div>
      </form>
      <ButtonPrimary onClick={() => sendMail()}>LÄHETÄ VIESTI</ButtonPrimary>
    </div>
  );
}
