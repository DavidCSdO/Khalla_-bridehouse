"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          Kallah
        </Link>

        {/* Right side group */}
        <div className={styles.rightGroup}>
          {/* Desktop links */}
          <ul className={styles.links}>
            <li>
              <Link href="/dresses" className={styles.link}>
                Dresses
              </Link>
            </li>
            <li>
              <Link href="/collection" className={styles.link}>
                Collection
              </Link>
            </li>
            <li>
              <Link href="/accessories" className={styles.link}>
                Accessories
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.link}>
                About
              </Link>
            </li>
          </ul>

          {/* Right side actions */}
          <div className={styles.actions}>
            {/* Cart icon */}
            <button className={styles.cart} aria-label="Shopping cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </button>

            {/* Contact CTA */}
            <Link href="/contact" className={styles.cta}>
              Contact
            </Link>

            {/* Mobile hamburger */}
            <button
              className={styles.hamburger}
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.hamburgerLineOpen : ""}`} />
              <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.hamburgerLineOpen : ""}`} />
              <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.hamburgerLineOpen : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div className={`${styles.mobile} ${mobileOpen ? styles.mobileOpen : ""}`}>
        <ul className={styles.mobileLinks}>
          <li>
            <Link href="/dresses" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
              Dresses
            </Link>
          </li>
          <li>
            <Link href="/collection" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
              Collection
            </Link>
          </li>
          <li>
            <Link href="/accessories" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
              Accessories
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`${styles.mobileLink} ${styles.mobileLinkCta}`} onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
