import styles from "./page.module.scss";
import Hero from "./components/Hero/Hero";
import Identiteetti from "./components/Identiteetti/Identiteetti";
import Palvelu from "./components/Palvelu/Palvelu";
import Contact from "./components/Contact/Contact";
import { getPalvelut, getTiedot } from "./components/Utils/hygraph";
import { Suspense } from "react";
import DefaultLoading from "./loading";

export default async function Home() {
  const { palvelut } = await getPalvelut();
  const { tiedot } = await getTiedot();

  return (
    <Suspense fallback={<DefaultLoading />}>
      <Hero />
      <Identiteetti />
      <Palvelu palvelut={palvelut} />
      <Contact tiedot={tiedot[0]} />
    </Suspense>
  );
}
