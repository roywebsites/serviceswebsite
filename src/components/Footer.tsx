import Link from "next/link";
import styles from "./Footer.module.css";
import { EmailIcon, PhoneIcon, WhatsAppIcon, LocationIcon } from "./Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          {/* Company Info */}
          <div className={styles.footerSection}>
            <div className={styles.logo}>
              <h3>Legal Services</h3>
              <p className={styles.tagline}>Expert Legal Counsel in Lebanon</p>
            </div>
            <p className={styles.description}>
              Providing professional legal services in Lebanon with personalized
              attention, experienced counsel, and results-driven solutions for
              individuals and businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal Services */}
          <div className={styles.footerSection}>
            <h4>Legal Services</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/services#corporate-law">Corporate Law</Link>
              </li>
              <li>
                <Link href="/services#real-estate-law">Real Estate Law</Link>
              </li>
              <li>
                <Link href="/services#family-law">Family Law</Link>
              </li>
              <li>
                <Link href="/services#criminal-law">Criminal Law</Link>
              </li>
              <li>
                <Link href="/services#civil-litigation">Civil Litigation</Link>
              </li>
              <li>
                <Link href="/services#intellectual-property">
                  Intellectual Property
                </Link>
              </li>
              <li>
                <Link href="/services#commercial-business-law">
                  Commercial & Business Law
                </Link>
              </li>
              <li>
                <Link href="/services#market-capital-law">
                  Market Capital Law
                </Link>
              </li>
              <li>
                <Link href="/services#labor-law">Labor Law</Link>
              </li>
              <li>
                <Link href="/services#arbitration-adr">Arbitration & ADR</Link>
              </li>
              <li>
                <Link href="/services#legal-draftings">Legal Draftings</Link>
              </li>
              <li>
                <Link href="/services#legal-expeditor-services">
                  Legal & Expeditor Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.footerSection}>
            <h4>Contact Information</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <EmailIcon size={18} />
                </span>
                <a href="mailto:legalservices.lb@outlook.com">
                  legalservices.lb@outlook.com
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <PhoneIcon size={18} />
                </span>
                <a href="tel:+96170653966">+961 70 653 966</a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <WhatsAppIcon size={18} />
                </span>
                <a
                  href="https://wa.me/96170653966"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappLink}
                >
                  WhatsApp Consultation
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <LocationIcon size={18} />
                </span>
                <span>Beirut, Lebanon</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>
              &copy; {currentYear} Legal Services Lebanon. All rights reserved.
            </p>
          </div>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
