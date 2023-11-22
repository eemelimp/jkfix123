import "./globals.css";
import Header from "./components/Header/Header";
import { Jura } from "next/font/google";
import LoaderPlaceholder from "./LoaderPlaceholder";
import Script from "next/script";
import { Suspense } from "react";
import GtmComponent from "./components/Analytics/GtmComponent";

export const metadata = {
  title: {
    default: "Autoteipit, autopesu ja pinnoitukset Kitee | JKFIX",
    template: `%s | JKFIX`,
  },
  description:
    "JKFIX:llä tarjoamme sinulle räätälöityjä ja asiakaskeskeisiä pesu, teippaus ja pinnoituspalveluita, jotta sinä voit vain nauttia lopputuloksesta. Meillä on intohimo autonhoitoon — ja se näkyy tuloksissamme!",
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
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KJVCZSNF');
        `}
      </Script>
      {/* <Script id="google-analytics">{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-KH0RH1M52E');`}</Script> */}

      {/* <Script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KJVCZSNF');`}</Script> */}
      {/* <Script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KJVCZSNF');`}</Script> */}
      {/* <Script id="meta-pixel">{`!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '367998918902024');
        fbq('track', 'PageView');`}</Script> */}

      <body>
        {/* <Suspense>
          <GtmComponent />
        </Suspense> */}
        {/* <Script>{`<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KJVCZSNF"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`}</Script> */}
        {/* <Script>{`<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KJVCZSNF"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`}</Script> */}
        <main>
          <LoaderPlaceholder />
        </main>
        {/* <Header />
        <main>
        {children}
        </main> */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KJVCZSNF" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
      </body>
    </html>
  );
}
