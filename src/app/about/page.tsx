import type { Metadata } from "next";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  ShieldIcon,
  UsersIcon,
  TrophyIcon,
  WhatsAppIcon,
} from "../../components/Icons";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Roy Mghames - Professional Legal Services in Lebanon",
  description:
    "Learn about Roy Mghames, an experienced lawyer in Lebanon providing professional legal services. Discover his background, education, values, and commitment to client success.",
  keywords: [
    "Roy Mghames",
    "lawyer biography",
    "Lebanese lawyer experience",
    "legal services Lebanon",
    "attorney Beirut",
  ],
};

export default function AboutPage() {
  return (
    <div>
      <Header />

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1>About Roy Mghames</h1>
              <p>Dedicated Legal Counsel with a Passion for Justice</p>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className={styles.biography}>
          <div className="container">
            <div className={styles.bioContent}>
              <div className={styles.bioImage}>
                <Image
                  src="/roymainimage.jpg"
                  alt="Roy Mghames - Legal Services"
                  width={400}
                  height={600}
                  quality={95}
                  priority
                  className={styles.imagePlaceholder}
                />
              </div>

              <div className={styles.bioText}>
                <h2>Professional Biography</h2>
                <p>
                  <strong>Roy Mghames</strong> holds a{" "}
                  <strong>Law Degree (LLB and M1)</strong> from
                  <strong>Notre Dame University (NDU)</strong> in{" "}
                  <strong>International and Lebanese Laws</strong>, and a
                  <strong>Master’s Degree (M2)</strong> from{" "}
                  <strong>Sagesse University (ULS)</strong>, specializing in
                  <strong>Private Laws</strong> with a focus on{" "}
                  <strong>Business, Commercial, and Corporate</strong> matters.
                </p>

                <p>
                  His practice centers on <strong>Corporate Law</strong> for
                  companies and establishments, <strong>Business Law</strong>,{" "}
                  <strong>Commercial Law</strong> including trade agreements,
                  sales, and trademarks, <strong>Real Estate</strong>,{" "}
                  <strong>Intellectual Property</strong> with emphasis on
                  trademarks and patents registration, and{" "}
                  <strong>Civil Law</strong> covering contracts and drafting. He
                  also offers comprehensive{" "}
                  <strong>legal services, consultancy, and expediture</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Associate Biography */}
        <section className={styles.biography}>
          <div className="container">
            <div className={styles.bioContent}>
              <div className={styles.bioImage}>
                <Image
                  src="/JasonKrim.jpg"
                  alt="Jason Krim - Attorney at Law"
                  width={400}
                  height={600}
                  quality={95}
                  className={styles.imagePlaceholder}
                />
              </div>

              <div className={styles.bioText}>
                <h2>Associate – Jason Krim</h2>
                <p>
                  <strong>Jason Krim</strong> is an{" "}
                  <strong>Attorney at Law</strong> and a{" "}
                  <strong>Member of the Beirut Bar Association</strong>.
                </p>
                <p>
                  He holds a <strong>BA and M1 in Law</strong> from the{" "}
                  <strong>Lebanese University</strong>, and an
                  <strong>M2</strong> from{" "}
                  <strong>Sagesse University (ULS)</strong> in{" "}
                  <strong>Private Law</strong>, specializing in
                  <strong>Oil and Gas Law</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Removed credential cards; details emphasized in biography paragraphs above */}

        {/* Mission & Values */}
        <section className={styles.mission}>
          <div className="container">
            <div className={styles.missionContent}>
              <div className={styles.missionText}>
                <h2>My Mission</h2>
                <p>
                  My mission is to provide exceptional legal services that
                  empower my clients to navigate complex legal challenges with
                  confidence. I am committed to delivering personalized,
                  strategic, and results-driven legal solutions that protect my
                  clients&apos; interests and help them achieve their goals.
                </p>

                <p>
                  I believe that access to quality legal representation should
                  not be a privilege but a right. That&apos;s why I strive to
                  make my services accessible and understandable, ensuring that
                  every client feels heard, respected, and well-represented
                  throughout their legal journey.
                </p>
              </div>

              <div className={styles.values}>
                <h3>Core Values</h3>
                <div className={styles.valuesList}>
                  <div className={styles.value}>
                    <div className={styles.valueIcon}>
                      <ShieldIcon size={24} color="var(--color-accent)" />
                    </div>
                    <div>
                      <h4>Integrity</h4>
                      <p>
                        Upholding the highest ethical standards in all legal
                        matters
                      </p>
                    </div>
                  </div>

                  <div className={styles.value}>
                    <div className={styles.valueIcon}>
                      <UsersIcon size={24} color="var(--color-accent)" />
                    </div>
                    <div>
                      <h4>Client-Centered</h4>
                      <p>
                        Putting client needs and interests at the forefront of
                        every decision
                      </p>
                    </div>
                  </div>

                  <div className={styles.value}>
                    <div className={styles.valueIcon}>
                      <TrophyIcon size={24} color="var(--color-accent)" />
                    </div>
                    <div>
                      <h4>Excellence</h4>
                      <p>
                        Striving for the highest quality in legal research,
                        analysis, and representation
                      </p>
                    </div>
                  </div>

                  <div className={styles.value}>
                    <div className={styles.valueIcon}>
                      <WhatsAppIcon size={24} color="var(--color-accent)" />
                    </div>
                    <div>
                      <h4>Communication</h4>
                      <p>
                        Maintaining clear, honest, and timely communication with
                        all clients
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Approach */}
        <section className={styles.approach}>
          <div className="container">
            <div className={styles.approachContent}>
              <h2>My Professional Approach</h2>
              <div className={styles.approachGrid}>
                <div className={styles.approachItem}>
                  <h3>1. Listen & Understand</h3>
                  <p>
                    Every client relationship begins with careful listening. I
                    take the time to understand your unique situation, concerns,
                    and objectives before developing a legal strategy.
                  </p>
                </div>

                <div className={styles.approachItem}>
                  <h3>2. Analyze & Plan</h3>
                  <p>
                    Through thorough legal analysis and research, I develop
                    comprehensive strategies that address both immediate needs
                    and long-term goals.
                  </p>
                </div>

                <div className={styles.approachItem}>
                  <h3>3. Execute & Deliver</h3>
                  <p>
                    With meticulous attention to detail and aggressive advocacy
                    when necessary, I work tirelessly to achieve the best
                    possible outcomes for my clients.
                  </p>
                </div>

                <div className={styles.approachItem}>
                  <h3>4. Support & Follow-up</h3>
                  <p>
                    My commitment to clients extends beyond case resolution. I
                    provide ongoing support and guidance to ensure long-term
                    success and peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className={styles.contactCta}>
          <div className="container">
            <div className={styles.ctaContent}>
              <h2>Ready to Work Together?</h2>
              <p>
                I&apos;m here to help you navigate your legal challenges with
                expertise, integrity, and dedication. Let&apos;s discuss how I
                can assist you.
              </p>
              <div className={styles.ctaActions}>
                <a href="/contact" className="btn btn-primary btn-lg">
                  Schedule a Consultation
                </a>
                <a
                  href="https://wa.me/96170653966"
                  className="btn btn-secondary btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Me
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
