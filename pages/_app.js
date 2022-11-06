import Head from "next/head";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Christopher Kei</title>
        <meta name="description" content="Hey, welcome to my website!" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/Cocomat_Pro_Medium.otf"
          as="font"
          crossOrigin=""
          type="font/otf"
        />
        <link
          rel="preload"
          href="/Dune_Rise.otf"
          as="font"
          crossOrigin=""
          type="font/otf"
        />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
