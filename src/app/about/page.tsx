import type { Metadata } from "next";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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
                  Roy Mghames is a detail-oriented legal associate and
                  consultant, holding a Master’s 2 degree in Private Law with a
                  specialization in Business Law, in addition to a Bachelor’s
                  and Master’s 1 degree in Law from Notre Dame University.
                </p>

                <p>
                  He offers a broad range of legal expertise, with a focus on
                  civil, business, commercial, corporate, estate, intellectual
                  property, arbitration, dispute resolution, mergers and
                  acquisitions, and capital markets law. His practice also
                  extends to criminal, labor, and administrative matters,
                  providing clients with comprehensive legal support across
                  sectors.
                </p>

                <p>
                  Roy is committed to delivering high-quality legal services
                  across Lebanon, with a strong focus on civil and business law.
                  His trusted approach to criminal cases has also helped foster
                  long-term relationships with clients built on confidence and
                  results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Experience */}
        <section className={styles.experience}>
          <div className="container">
            <div className={styles.experienceGrid}>
              <div className={styles.experienceCard}>
                <div className={styles.cardIcon}>🎓</div>
                <h3>Education</h3>
                <div className={styles.cardContent}>
                  <div className={styles.credential}>
                    <h4>Law Degree (LL.B)</h4>
                    <p>Lebanese University Faculty of Law</p>
                    <span>Graduated with Honors</span>
                  </div>
                  <div className={styles.credential}>
                    <h4>Master of Laws (LL.M)</h4>
                    <p>Specialized in Commercial Law</p>
                    <span>Advanced Legal Studies</span>
                  </div>
                </div>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.cardIcon}>⚖️</div>
                <h3>Professional Experience</h3>
                <div className={styles.cardContent}>
                  <div className={styles.credential}>
                    <h4>Lebanese Bar Association</h4>
                    <p>Licensed Attorney at Law</p>
                    <span>Member in Good Standing</span>
                  </div>
                  <div className={styles.credential}>
                    <h4>Years of Practice</h4>
                    <p>Extensive Legal Experience</p>
                    <span>Serving Lebanon&apos;s Legal Community</span>
                  </div>
                </div>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.cardIcon}>🏆</div>
                <h3>Specializations</h3>
                <div className={styles.cardContent}>
                  <div className={styles.credential}>
                    <h4>Corporate Law</h4>
                    <p>Business Formation & Governance</p>
                  </div>
                  <div className={styles.credential}>
                    <h4>Real Estate Law</h4>
                    <p>Property Transactions & Disputes</p>
                  </div>
                  <div className={styles.credential}>
                    <h4>Family & Criminal Law</h4>
                    <p>Personal Legal Matters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                    <div className={styles.valueIcon}>🔒</div>
                    <div>
                      <h4>Integrity</h4>
                      <p>
                        Upholding the highest ethical standards in all legal
                        matters
                      </p>
                    </div>
                  </div>

                  <div className={styles.value}>
                    <div className={styles.valueIcon}>👥</div>
                    <div>
                      <h4>Client-Centered</h4>
                      <p>
                        Putting client needs and interests at the forefront of
                        every decision
                      </p>
                    </div>
                  </div>

                  <div className={styles.value}>
                    <div className={styles.valueIcon}>📈</div>
                    <div>
                      <h4>Excellence</h4>
                      <p>
                        Striving for the highest quality in legal research,
                        analysis, and representation
                      </p>
                    </div>
                  </div>

                  <div className={styles.value}>
                    <div className={styles.valueIcon}>💬</div>
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
