import styles from "./page.module.scss";
import Hero from "./components/Hero/Hero";
import Identiteetti from "./components/Identiteetti/Identiteetti";
import Palvelu from "./components/Palvelu/Palvelu";

export default function Home() {
  return (
    <>
      <Hero />
      <Identiteetti />
      <Palvelu />
    </>
  );
}
