import '../styles/globals.css'
import Script from "next/script";

function MyApp({ Component, pageProps }) {

  return (
    <>
        <Script
          type='text/javascript'
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=e10d156e-226c-44e5-9815-d4c28ddbe458"
          strategy='beforeInteractive'
        />
        <Component {...pageProps} />
    </>
  );
}

export default MyApp
