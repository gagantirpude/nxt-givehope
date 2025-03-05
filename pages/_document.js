import { Html, Head, Main, NextScript } from "next/document";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
