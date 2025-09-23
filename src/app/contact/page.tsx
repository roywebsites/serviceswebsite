import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import {
  EmailIcon,
  PhoneIcon,
  WhatsAppIcon,
  LocationIcon,
} from "../../components/Icons";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Us - Legal Consultation in Lebanon",
  description:
    "Contact our legal team for professional legal services in Lebanon. Schedule a free consultation for corporate law, real estate law, family law, criminal defense, intellectual property, commercial & business law, market capital law, labor law, arbitration & alternative dispute resolution, legal draftings, and legal & expeditor services.",
  keywords: [
    "contact lawyer Lebanon",
    "legal consultation Beirut",
    "Lebanese lawyer consultation",
    "law firm contact",
    "arbitration consultation Lebanon",
    "mediation services Lebanon",
    "legal drafting consultation Lebanon",
    "expeditor services consultation Lebanon",
  ],
};

export default function ContactPage() {
  return (
    <div>
      <Header />

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1>Contact Us</h1>
              <p>Get in touch for expert legal guidance and consultation</p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className={styles.contactInfo}>
          <div className="container">
            <div className={styles.contactGrid}>
              {/* Contact Details */}
              <div className={styles.contactDetails}>
                <h2>Get in Touch</h2>
                <p>
                  Ready to discuss your legal needs? I&apos;m here to provide
                  expert guidance and support. Contact me today to schedule your
                  consultation.
                </p>

                <div className={styles.contactMethods}>
                  <div className={styles.contactMethod}>
                    <div className={styles.methodIcon}>
                      <EmailIcon />
                    </div>
                    <div className={styles.methodInfo}>
                      <h3>Email</h3>
                      <p>
                        <a href="mailto:mghamesroy@gmail.com">
                          mghamesroy@gmail.com
                        </a>
                      </p>
                      <span>Response within 24 hours</span>
                    </div>
                  </div>

                  <div className={styles.contactMethod}>
                    <div className={styles.methodIcon}>
                      <PhoneIcon />
                    </div>
                    <div className={styles.methodInfo}>
                      <h3>Phone</h3>
                      <p>
                        <a href="tel:+96170653966">+961 70 653 966</a>
                      </p>
                      <span>Monday - Friday, 9:00 AM - 6:00 PM</span>
                    </div>
                  </div>

                  <div className={styles.contactMethod}>
                    <div className={styles.methodIcon}>
                      <WhatsAppIcon />
                    </div>
                    <div className={styles.methodInfo}>
                      <h3>WhatsApp</h3>
                      <p>
                        <a
                          href="https://wa.me/96170653966"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.whatsappLink}
                        >
                          Start WhatsApp Chat
                        </a>
                      </p>
                      <span>Quick consultation and questions</span>
                    </div>
                  </div>

                  <div className={styles.contactMethod}>
                    <div className={styles.methodIcon}>
                      <LocationIcon />
                    </div>
                    <div className={styles.methodInfo}>
                      <h3>Office Location</h3>
                      <p>
                        Beirut, Lebanon
                        <br />
                        <em>(Exact address provided upon appointment)</em>
                      </p>
                      <span>By appointment only</span>
                    </div>
                  </div>
                </div>

                <div className={styles.businessHours}>
                  <h3>Business Hours</h3>
                  <div className={styles.hoursGrid}>
                    <div className={styles.hoursItem}>
                      <span className={styles.day}>Monday - Friday</span>
                      <span className={styles.time}>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className={styles.hoursItem}>
                      <span className={styles.day}>Saturday</span>
                      <span className={styles.time}>10:00 AM - 2:00 PM</span>
                    </div>
                    <div className={styles.hoursItem}>
                      <span className={styles.day}>Sunday</span>
                      <span className={styles.time}>Closed</span>
                    </div>
                    <div className={styles.hoursNote}>
                      <em>Emergency consultations available by appointment</em>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className={styles.formSection}>
                <h2>Send a Message</h2>
                <p>
                  Fill out the form below and I&apos;ll get back to you as soon
                  as possible. All communications are confidential and protected
                  by attorney-client privilege.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faq}>
          <div className="container">
            <h2>Frequently Asked Questions</h2>

            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>How much does a consultation cost?</h3>
                <p>
                  Initial consultations are offered free of charge to discuss
                  your legal needs and determine how I can best assist you.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3>What should I bring to my consultation?</h3>
                <p>
                  Bring any relevant documents, contracts, correspondence, or
                  materials related to your legal matter. A list will be
                  provided when scheduling.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3>Do you handle cases outside of Beirut?</h3>
                <p>
                  Yes, I handle cases throughout Lebanon. Remote consultations
                  are also available for initial discussions and certain legal
                  matters.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3>How quickly can I expect a response?</h3>
                <p>
                  I typically respond to all inquiries within 24 hours during
                  business days. Urgent matters can be addressed sooner via
                  WhatsApp or phone.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3>What languages do you speak?</h3>
                <p>
                  I provide legal services in Arabic, English, and French to
                  better serve Lebanon&apos;s diverse community and
                  international clients.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3>Is my information confidential?</h3>
                <p>
                  Absolutely. All communications are protected by
                  attorney-client privilege and handled with the strictest
                  confidentiality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp Widget */}
        <div className={styles.whatsappWidget}>
          <a
            href="https://wa.me/96170653966"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
            title="Contact via WhatsApp"
          >
            <span className={styles.whatsappIcon}>
              <WhatsAppIcon />
            </span>
            <span className={styles.whatsappText}>WhatsApp</span>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
