"use client";
import styles from "./ContactForm.module.scss";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosContact } from "react-icons/io";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import { useRef, useEffect } from "react";
import { Heading3, Paragraph } from "../Utils/Texts";
import HighlightedText from "../HighlightedText/HighlightedText";
import { signUpSchema } from "../Utils/contactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { appendErrors, useForm } from "react-hook-form";
import Error from "./Error";

export default function ContactForm() {
  const viestiRef = useRef(null);

  useEffect(() => {
    function autoResize() {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    }

    viestiRef.current?.addEventListener("input", autoResize, false);
    return () => {
      viestiRef.current !== null &&
        viestiRef.current.removeEventListener("input", autoResize, false);
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
      isSubmitted,
      isValid,
      isSubmitSuccessful,
    },
    reset,
  } = useForm({ resolver: zodResolver(signUpSchema) });
  // const data = {
  //   firstName: "Eemeli",
  //   phoneNumber: "+358 044 533 8232",
  //   email: "eemeli.haakana@gmail.com",
  //   date: new Date().toLocaleDateString("fi-FI"),
  //   time: new Date().toLocaleTimeString("fi-FI"),
  //   category: "Teippaus",
  //   content: "Tämä on testiviesti",
  // };

  const onSubmit = async function (data) {
    console.log("testi");
    const lahtevaData = {
      ...data,
      date: new Date().toLocaleDateString("fi-FI"),
      time: new Date().toLocaleTimeString("fi-FI"),
    };

    try {
      const response = await fetch(`/api/send-message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(lahtevaData),
      });
      const resParsed = await response.json();

      if (resParsed.error) {
      }
      console.log("onnistunut vastaus JKFIX-apilta:", resParsed);
    } catch (error) {
      console.log("Error-vastaus JKFIX-apilta:", error);
    }
  };

  return (
    <div className={styles.contactForm}>
      {!isSubmitting && !isSubmitSuccessful && (
        <>
          <Heading3>Kysy kysymys tai pyydä hinta-arvio</Heading3>
          <Paragraph>Vastaamme yleisesti tunnin sisällä</Paragraph>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.textInput}>
              <IoIosContact />

              <input
                type="text"
                placeholder="Etunimi*"
                {...register("firstName")}
              ></input>
            </div>
            {errors.firstName && <Error message={errors.firstName.message} />}

            <div className={styles.textInput}>
              <IoIosContact />

              <input
                type="text"
                placeholder="Sukunimi*"
                {...register("lastName")}
              ></input>
            </div>
            {errors.lastName && <Error message={errors.lastName.message} />}

            <div className={styles.row}>
              <div className={styles.textInput}>
                <HiOutlineMail />
                <input
                  type="text"
                  placeholder="Sähköpostiosoite*"
                  {...register("email")}
                ></input>
              </div>
              <div className={styles.textInput}>
                <HiOutlineMail />
                <input
                  type="text"
                  placeholder="Puhelinnumero*"
                  {...register("phoneNumber")}
                ></input>
              </div>
            </div>
            {errors.email && <Error message={errors.email.message} />}
            {errors.phoneNumber && (
              <Error message={errors.phoneNumber.message} />
            )}
            <div className={styles.textInput} style={{ marginBottom: "20px" }}>
              <textarea
                placeholder="Viesti*"
                className={styles.textarea}
                ref={viestiRef}
                {...register("content")}
              ></textarea>
            </div>
            {errors.content && <Error message={errors.content.message} />}
            {/* <div className={styles.row} style={{ marginBlock: "8px" }}>
              <input
                type="checkbox"
                {...register("terms")}
                className={styles.checkbox}
              />
              <label>
                Hyväksyn{" "}
                <a rel="nofollow" target="_blank" href={`/tietosuojaseloste`}>
                  tietosuoja&shy;selosteen
                </a>
              </label>
            </div>

            {errors.terms && <Error message={errors.terms.message} />} */}

            <div className={styles.row} style={{ justifyContent: "center" }}>
              <button type="submit" className="buttonPrimary">
                LÄHETÄ VIESTI
              </button>
            </div>
          </form>
        </>
      )}
      {isSubmitting && !isSubmitSuccessful && (
        <div className="container textCenter">
          <Paragraph>
            Vestiäsi lähetetään <span className="dots"></span>
          </Paragraph>
        </div>
      )}
      {isSubmitSuccessful && (
        <div className="container textCenter">
          <Paragraph>
            Viestisi on lähetetty, olemme sinuun pikimmiten yhteydessä.<br></br>
            <br></br> Onko asiasi kiireinen? Voit ohittaa jonon ja soittaa
            meille numeroon +358 XX XXX XXXX
          </Paragraph>
        </div>
      )}
    </div>
  );
}
