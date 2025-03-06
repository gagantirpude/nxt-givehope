import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Header({ title = "GIVEHOPE" }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title} | GIVEHOPE</title>
        <meta
          name="description"
          content="Charity website for donations and support."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <nav>
          <div className="logo">GIVEHOPE</div>
          <ul>
            <li className={router.pathname === "/" ? "active" : ""}>
              <Link href="/">Home</Link>
            </li>
            <li className={router.pathname === "/how-it-works" ? "active" : ""}>
              <Link href="/howitworks">How It Works</Link>
            </li>
            <li className={router.pathname === "/donate" ? "active" : ""}>
              <Link href="/donate">Donate</Link>
            </li>
            <li className={router.pathname === "/gallery" ? "active" : ""}>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className={router.pathname === "/blog" ? "active" : ""}>
              <Link href="/blog">Blog</Link>
            </li>
            <li className={router.pathname === "/about" ? "active" : ""}>
              <Link href="/about">About</Link>
            </li>
            <li className={router.pathname === "/contact" ? "active" : ""}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
