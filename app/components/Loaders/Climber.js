"use client";

import React from "react";
import { ClimbingBoxLoader } from "react-spinners";
import styles from "./Climber.module.scss";

export default function Climber() {
  return <ClimbingBoxLoader className={styles.climber} />;
}
