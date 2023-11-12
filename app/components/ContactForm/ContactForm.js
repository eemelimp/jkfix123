"use client";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
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
    <div>
      <form>
        <input type="text" placeholder="email"></input>
        <input type="text" placeholder="Viesti"></input>
      </form>
      <button onClick={() => sendMail()}>Lähetä viesti</button>
    </div>
  );
}
