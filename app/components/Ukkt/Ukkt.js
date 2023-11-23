import React from "react";
import Ukk from "./Ukk";
import styles from "./Ukkt.module.scss";

export default function Ukkt({ ukkt }) {
  console.log("vastaanotetut ukkt:", ukkt);
  const ensimmainenUkk = ukkt[0];
  const loputUkkt = ukkt.slice(1);

  return (
    <section className={styles.ukkSection}>
      <div className="container">
        <Ukk ukk={ensimmainenUkk} />
        <div className={styles.grid}>
          <div className={styles.vasen}>
            {loputUkkt.map((ukk) => (
              <Ukk ukk={ukk} />
            ))}
          </div>
          <div className={styles.oikea}>
            <div className={styles.ukkKuva}><img
              src="/images/JKFIX Autopesu Kitee.png"
              alt="Jan Karhapää ja auto"
            ></img></div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
