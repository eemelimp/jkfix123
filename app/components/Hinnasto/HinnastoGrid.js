import React from "react";

import styles from "./HinnastoGrid.module.scss";
import HinnastoItem from "./HinnastoItem";

export default function HinnastoGrid({ hinnat }) {
  console.log("gridinvastaanottamahinta", hinnat);
  return (
    <div className={styles.grid}>
      {hinnat.map((hinta) => (
        <HinnastoItem hinta={hinta} key={hinta.id} />
      ))}
    </div>
  );
}
