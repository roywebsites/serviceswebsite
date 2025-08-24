"use client";

import { useEffect, useState } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./page.module.css";
import {
  ScaleIcon,
  BuildingIcon,
  FamilyIcon,
  ShieldIcon,
  BulbIcon,
  StoreIcon,
  ChartIcon,
  WorkerIcon,
  HandshakeIcon,
  DocumentIcon,
  ClipboardIcon,
  TargetIcon,
  BookIcon,
  TrophyIcon,
  UsersIcon,
} from "../components/Icons";

interface Testimonial {
  _id: string;
  name: string;
  role: string;
  content: string;
  published: boolean;
  createdAt: string;
}

export default function HomePage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/testimonials?published=true"
      );
      const data = await response.json();

      if (data.success) {
        setTestimonials(data.data);
      }
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  return (
    <div>
      <Header />

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Expert Legal Counsel in Lebanon
              </h1>
              <p className={styles.heroSubtitle}>
                Your Trusted Lawyer in Beirut - Providing comprehensive legal
                solutions with personalized attention, experienced counsel, and
                results-driven approach.
              </p>
              <div className={styles.heroActions}>
                <a href="/contact" className="btn btn-primary btn-lg">
                  Book a Free Consultation
                </a>
                <a href="/services" className="btn btn-outline btn-lg">
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className={styles.introduction}>
          <div className="container">
            <div className={styles.introContent}>
              <div className={styles.introText}>
                <h2>Welcome to Our Legal Services</h2>
                <p>
                  With years of experience in Lebanese law, I am committed to
                  providing exceptional legal services to individuals and
                  businesses throughout Lebanon. My practice is built on the
                  foundations of integrity, expertise, and unwavering dedication
                  to my clients&apos; success.
                </p>
                <p>
                  Whether you&apos;re facing a complex corporate matter,
                  navigating real estate transactions, or need assistance with
                  family law issues, I provide personalized legal solutions
                  tailored to your specific needs.
                </p>
                <a href="/about" className="btn btn-secondary">
                  Learn More About Me
                </a>
              </div>
              <div className={styles.introImage}>
                <Image
                  src="/ProfessionalPhoto.jpg"
                  alt="Professional Photo"
                  width={300}
                  height={450}
                  className={styles.imagePlaceholder}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className={styles.services}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>Legal Services</h2>
              <p>
                Comprehensive legal solutions for individuals and businesses in
                Lebanon
              </p>
            </div>

            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <ScaleIcon size={32} color="var(--color-primary)" />
                </div>
                <h3>Corporate Law</h3>
                <p>
                  Business formation, contracts, mergers & acquisitions, and
                  corporate governance matters.
                </p>
                <a
                  href="/services#corporate-law"
                  className={styles.serviceLink}
                >
                  Learn More →
                </a>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <BuildingIcon size={32} color="var(--color-primary)" />
                </div>
                <h3>Real Estate Law</h3>
                <p>
                  Property transactions, due diligence, lease agreements, and
                  real estate dispute resolution.
                </p>
                <a
                  href="/services#real-estate-law"
                  className={styles.serviceLink}
                >
                  Learn More →
                </a>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <FamilyIcon size={32} color="var(--color-primary)" />
                </div>
                <h3>Family Law</h3>
                <p>
                  Divorce proceedings, child custody, inheritance matters, and
                  family dispute mediation.
                </p>
                <a href="/services#family-law" className={styles.serviceLink}>
                  Learn More →
                </a>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <ShieldIcon size={32} color="var(--color-primary)" />
                </div>
                <h3>Criminal Law</h3>
                <p>
                  Criminal defense, legal representation, case analysis, and
                  court proceedings.
                </p>
                <a href="/services#criminal-law" className={styles.serviceLink}>
                  Learn More →
                </a>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <BulbIcon size={32} color="var(--color-primary)" />
                </div>
                <h3>Intellectual Property</h3>
                <p>
                  Patent applications, trademark registration, copyright
                  protection, and IP litigation matters.
                </p>
                <a
                  href="/services#intellectual-property"
                  className={styles.serviceLink}
                >
                  Learn More →
                </a>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <StoreIcon size={32} color="var(--color-primary)" />
                </div>
                <h3>Commercial and Business Law</h3>
                <p>
                  Commercial transactions, business disputes, regulatory
                  compliance, and contract negotiations.
                </p>
                <a
                  href="/services#commercial-business-law"
                  className={styles.serviceLink}
                >
                  Learn More →
                </a>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <ChartIcon size={32} color="var(--color-primary)" />
                </div>
                <h3>Market Capital Law</h3>
                <p>
                  Securities regulations, capital market transactions, IPO
                  guidance, and investment compliance.
                </p>
                <a
                  href="/services#market-capital-law"
                  className={styles.serviceLink}
                >
                  Learn More →
                </a>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <WorkerIcon size={32} color="var(--color-primary)" />
                </div>
                <h3>Labor Law</h3>
                <p>
                  Employment contracts, workplace disputes, labor regulations,
                  and employee rights protection.
                </p>
                <a href="/services#labor-law" className={styles.serviceLink}>
                  Learn More →
                </a>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <HandshakeIcon size={32} color="var(--color-primary)" />
                </div>
                <h3>Arbitration & Alternative Dispute Resolution</h3>
                <p>
                  Mediation, conciliation, and arbitration services for
                  efficient dispute resolution outside traditional courts.
                </p>
                <a
                  href="/services#arbitration-adr"
                  className={styles.serviceLink}
                >
                  Learn More →
                </a>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <DocumentIcon size={32} color="var(--color-primary)" />
                </div>
                <h3>Legal Draftings</h3>
                <p>
                  Professional legal document drafting services for contracts,
                  agreements, and legal instruments.
                </p>
                <a
                  href="/services#legal-draftings"
                  className={styles.serviceLink}
                >
                  Learn More →
                </a>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <ClipboardIcon size={32} color="var(--color-primary)" />
                </div>
                <h3>Legal and Expeditor Services</h3>
                <p>
                  Administrative support and expediting services for permits,
                  licenses, and government procedures.
                </p>
                <a
                  href="/services#legal-expeditor-services"
                  className={styles.serviceLink}
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={styles.whyChoose}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>Why Choose Our Legal Services</h2>
              <p>Dedicated to excellence in legal representation</p>
            </div>

            <div className={styles.benefitsGrid}>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>
                  <TargetIcon size={28} color="var(--color-accent)" />
                </div>
                <h4>Personalized Attention</h4>
                <p>
                  Every client receives individualized care and attention, with
                  legal strategies tailored to your specific situation.
                </p>
              </div>

              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>
                  <BookIcon size={28} color="var(--color-accent)" />
                </div>
                <h4>Experienced Counsel</h4>
                <p>
                  Years of experience in Lebanese law with a deep understanding
                  of local legal frameworks and procedures.
                </p>
              </div>

              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>
                  <TrophyIcon size={28} color="var(--color-accent)" />
                </div>
                <h4>Results-Driven</h4>
                <p>
                  Committed to achieving the best possible outcomes for clients
                  through strategic planning and skilled representation.
                </p>
              </div>

              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>
                  <UsersIcon size={28} color="var(--color-accent)" />
                </div>
                <h4>Trust & Integrity</h4>
                <p>
                  Built on foundations of honesty, transparency, and ethical
                  practice in all legal matters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className={styles.testimonials}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>Client Testimonials</h2>
              <p>What our clients say about our legal services</p>
            </div>

            <div className={styles.testimonialsGrid}>
              {testimonials.map((testimonial) => (
                <div key={testimonial._id} className={styles.testimonial}>
                  <div className={styles.testimonialContent}>
                    <p>&quot;{testimonial.content}&quot;</p>
                  </div>
                  <div className={styles.testimonialAuthor}>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className={styles.contactCta}>
          <div className="container">
            <div className={styles.ctaContent}>
              <h2>Ready to Get Started?</h2>
              <p>
                Schedule a free consultation to discuss your legal needs.
                I&apos;m here to help you navigate your legal challenges with
                confidence.
              </p>
              <div className={styles.ctaActions}>
                <a href="/contact" className="btn btn-primary btn-lg">
                  Schedule Free Consultation
                </a>
                <a
                  href="https://wa.me/96170653966"
                  className="btn btn-secondary btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Consultation
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
