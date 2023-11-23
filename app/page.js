import styles from "./page.module.scss";
import Hero from "./components/Hero/Hero";
import Identiteetti from "./components/Identiteetti/Identiteetti";
import Palvelu from "./components/Palvelu/Palvelu";
import Contact from "./components/Contact/Contact";
import { getData } from "./components/Utils/hygraph";
import { Suspense } from "react";
import DefaultLoading from "./loading";
import Hinnasto from "./components/Hinnasto/Hinnasto";
import Ukkt from "./components/Ukkt/Ukkt";
import Alatunniste from "./components/Alatunniste/Alatunniste";

export const revalidate = 1;

export default async function Home() {
  // const { palvelut } = await getPalvelut();
  // const { tiedot } = await getTiedot();
  // const { hinnastot } = await getHinnat();
  // const { ukkt } = await getUkkt();

  // console.log(hinnastot);

  const { palvelut, tiedot, hinnastot, ukkt } = await getData();

  return (
    <Suspense fallback={<DefaultLoading />}>
      <Hero />
      <Identiteetti />
      <Palvelu palvelut={palvelut} />
      <Contact tiedot={tiedot[0]} />
      <Hinnasto hinnat={hinnastot} />
      <Ukkt ukkt={ukkt}></Ukkt>
      <Alatunniste tiedot={tiedot[0]} />
    </Suspense>
  );
}
