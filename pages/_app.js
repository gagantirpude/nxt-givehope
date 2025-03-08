import Header from "./Components/Header";
import "../styles/main.scss";
import Footer from "./Components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
