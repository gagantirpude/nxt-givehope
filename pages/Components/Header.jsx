import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  return (
    <nav>
      <div className="container">
        {/* Brand Logo */}
        <Link href="/">GiveHope</Link>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        {/* Navigation Links */}
        <div className={menuOpen ? "open" : ""}>
          <ul>
            <li className={router.pathname === "/" ? "active" : ""}>
              <Link href="/">Home</Link>
            </li>
            <li className={router.pathname === "/howitworks" ? "active" : ""}>
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
        </div>
      </div>
    </nav>
  );
}
