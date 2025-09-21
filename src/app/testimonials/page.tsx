import { use } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

interface Testimonial {
  _id: string;
  name: string;
  position: string;
  content: string;
  rating: number;
  published: boolean;
  featured: boolean;
  createdAt: string;
}

async function getTestimonials() {
  const response = await fetch(
    "https://serviceswebsite-2.onrender.com/api/testimonials?published=true",
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
              <h1>Legal Templates & Documents</h1>
              <p>
                Professional legal templates and documents available for
                purchase
              </p>
            </div>
          </div>
        </section>

        {/* Templates Grid */}
        <section className={styles.testimonials}>
          <div className="container">
            <div className={styles.testimonialsGrid}>
              {testimonials.map((template) => (
                <div key={template._id} className={styles.testimonialCard}>
                  <div className={styles.testimonialContent}>
                    <h3>{template.name}</h3>
                    <blockquote>{template.content}</blockquote>
                    <div className={styles.templatePrice}>
                      <span className={styles.price}>Contact for Pricing</span>
                    </div>
                  </div>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorInfo}>
                      <p>
                        <strong>Category:</strong> {template.position}
                      </p>
                      <a
                        href={`https://wa.me/96170653966?text=Hi, I'm interested in purchasing the ${template.name} template. Please provide more details and pricing.`}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Order via WhatsApp
                      </a>
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
              <h2>Need Custom Legal Documents?</h2>
              <p>
                Don't see what you're looking for? Contact us for custom legal
                document preparation and personalized legal templates tailored
                to your specific needs.
              </p>
              <div className={styles.ctaActions}>
                <a
                  href="https://wa.me/96170653966?text=Hi, I need custom legal documents. Please provide more information about your services."
                  className="btn btn-primary btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp for Custom Documents
                </a>
                <a href="/services" className="btn btn-outline btn-lg">
                  Our Legal Services
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
