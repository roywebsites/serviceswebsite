"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              {/* Cedar tree with scales SVG placeholder */}
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 5L15 12L20 8L25 12L20 5Z"
                  fill="var(--color-primary)"
                />
                <path
                  d="M20 10L12 20L20 15L28 20L20 10Z"
                  fill="var(--color-primary)"
                />
                <path
                  d="M20 17L8 30L20 25L32 30L20 17Z"
                  fill="var(--color-primary)"
                />
                <rect
                  x="18"
                  y="25"
                  width="4"
                  height="10"
                  fill="var(--color-primary)"
                />
                <path
                  d="M10 32L12 35L16 33L20 35L24 33L28 35L30 32L20 30L10 32Z"
                  fill="var(--color-accent)"
                />
              </svg>
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoName}>Legal Services</span>
              <span className={styles.logoTagline}>Lebanon</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
            <Link href="/services" className={styles.navLink}>
              Services
            </Link>
            <Link href="/blog" className={styles.navLink}>
              Blog
            </Link>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
            <Link href="/contact" className="btn btn-primary">
              Free Consultation
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuBtn}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ""}`}>
          <Link href="/" className={styles.mobileNavLink} onClick={toggleMenu}>
            Home
          </Link>
          <Link
            href="/about"
            className={styles.mobileNavLink}
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/services"
            className={styles.mobileNavLink}
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            href="/blog"
            className={styles.mobileNavLink}
            onClick={toggleMenu}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={styles.mobileNavLink}
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="btn btn-primary"
            onClick={toggleMenu}
          >
            Free Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
