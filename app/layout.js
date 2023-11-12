import "./globals.css";
import Header from "./components/Header/Header";

export const metadata = {
  title: "Autoteipit, pesut ja pinnoitukset Kitee | JKFIX ",
  description: "-",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
