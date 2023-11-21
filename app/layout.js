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
      <Script id="meta-pixel">{`<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '367998918902024');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=367998918902024&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->`}</Script>
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
