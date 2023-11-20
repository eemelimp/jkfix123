import "./globals.css";
import Header from "./components/Header/Header";
import { Jura } from "next/font/google";

export const metadata = {
  title: "Autoteipit, pesut ja pinnoitukset Kitee | JKFIX ",
  description: "-",
};

const jura = Jura({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jura.className}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
