import { use } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

interface Testimonial {
  _id: string;
  name: string;
  role: string;
  content: string;
  published: boolean;
  createdAt: string;
}

async function getTestimonials() {
  const response = await fetch(
    "https://serviceswebsite-1-xi2g.onrender.com/api/testimonials?published=true",
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch testimonials");
  }
  const data = await response.json();
  return data.data;
}

export default function TestimonialsPage() {
  const testimonials = use(getTestimonials());

  return (
    <div>
      <Header />

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1>Client Testimonials</h1>
              <p>What our clients say about our legal services</p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className={styles.testimonials}>
          <div className="container">
            <div className={styles.testimonialsGrid}>
              {testimonials.map((testimonial) => (
                <div key={testimonial._id} className={styles.testimonialCard}>
                  <div className={styles.testimonialContent}>
                    <blockquote>{testimonial.content}</blockquote>
                  </div>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorInfo}>
                      <h3>{testimonial.name}</h3>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.cta}>
          <div className="container">
            <div className={styles.ctaContent}>
              <h2>Need Legal Assistance?</h2>
              <p>
                Contact us today for a consultation and let us help you navigate
                your legal matters with expertise and dedication.
              </p>
              <div className={styles.ctaActions}>
                <a href="/contact" className="btn btn-primary btn-lg">
                  Schedule Consultation
                </a>
                <a href="/services" className="btn btn-outline btn-lg">
                  Our Services
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
