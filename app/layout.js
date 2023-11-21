import "./globals.css";
import Header from "./components/Header/Header";
import { Jura } from "next/font/google";
import LoaderPlaceholder from "./LoaderPlaceholder";
import Script from "next/script";

export const metadata = {
  title: {
    default: "Autoteipit, pesut ja pinnoitukset Kitee | JKFIX",
    template: `%s | JKFIX`,
  },
  description:
    "JKFIX:llä tarjoamme sinulle räätälöityjä ja asiakaskeskeisiä pesu, teippaus ja pinnoituspalveluita, jotta voit ajaa ylpeänä ja ilman huolta. Meillä on intohimo autonhoitoon — ja se näkyy tuloksissamme!",
  generator: "Next.JS 14",
  applicationName: "JKFIX",
  openGraph: {
    type: "website",
    locale: "fi_FI",
    url: "https://www.jkfix.fi/",
    siteName: "JKFIX",
  },
};

const jura = Jura({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jura.className}>
      <Script id="google-analytics">{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-KH0RH1M52E');`}</Script>
      <body>
        <main>
          <LoaderPlaceholder />
        </main>
        {/* <Header />
        <main>{children}</main> */}
      </body>
    </html>
  );
}
