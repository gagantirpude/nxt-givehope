import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header title={pageProps.title || "GIVEHOPE"} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
