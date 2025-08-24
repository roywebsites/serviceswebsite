"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Create WhatsApp message with form data
      const whatsappMessage = `
Hello! I would like to schedule a legal consultation.

*Contact Details:*
Name: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}` : ""}

*Legal Service:* ${formData.service || "Not specified"}
*Subject:* ${formData.subject}

*Message:*
${formData.message}

Thank you for your time. I look forward to hearing from you.
      `.trim();

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/96170653966?text=${encodedMessage}`;

      // Open WhatsApp with pre-filled message
      window.open(whatsappUrl, "_blank");

      setSubmitStatus("success");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formHeader}>
          <h2 className={styles.formTitle}>Get Legal Consultation</h2>
          <p className={styles.formSubtitle}>
            Fill out the form below and we&apos;ll connect you directly via
            WhatsApp for immediate assistance. All consultations are
            confidential and protected by attorney-client privilege.
          </p>
        </div>

        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Full Name <span className={styles.required}>*</span>
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="Enter your full name"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email Address <span className={styles.required}>*</span>
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className={styles.formGroup + " " + styles.fullWidth}>
            <label htmlFor="phone" className={styles.label}>
              Phone Number
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
                placeholder="+961 XX XXX XXX"
              />
            </div>
          </div>

          <div className={styles.formGroup + " " + styles.fullWidth}>
            <label htmlFor="service" className={styles.label}>
              Legal Service
            </label>
            <div className={styles.inputWrapper}>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="">Select a service</option>
                <option value="corporate-law">Corporate Law</option>
                <option value="real-estate-law">Real Estate Law</option>
                <option value="family-law">Family Law</option>
                <option value="criminal-law">Criminal Law</option>
                <option value="civil-litigation">Civil Litigation</option>
                <option value="intellectual-property">
                  Intellectual Property
                </option>
                <option value="commercial-business-law">
                  Commercial & Business Law
                </option>
                <option value="market-capital-law">Market Capital Law</option>
                <option value="labor-law">Labor Law</option>
                <option value="arbitration-adr">Arbitration & ADR</option>
                <option value="legal-draftings">Legal Draftings</option>
                <option value="legal-expeditor-services">
                  Legal & Expeditor Services
                </option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className={styles.formGroup + " " + styles.fullWidth}>
            <label htmlFor="subject" className={styles.label}>
              Subject <span className={styles.required}>*</span>
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="Brief description of your legal matter"
              />
            </div>
          </div>

          <div className={styles.formGroup + " " + styles.fullWidth}>
            <label htmlFor="message" className={styles.label}>
              Message <span className={styles.required}>*</span>
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className={styles.textarea}
                placeholder="Please provide detailed information about your legal needs, timeline, and any specific questions you have..."
              />
            </div>
          </div>
        </div>

        {submitStatus === "success" && (
          <div className={styles.successMessage}>
            <p>
              Your message has been prepared for WhatsApp! A new tab should have
              opened. If not, please check your popup blocker settings.
            </p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className={styles.errorMessage}>
            <p>
              There was an error preparing your message. Please try again or
              contact us directly via WhatsApp.
            </p>
          </div>
        )}

        <div className={styles.formActions}>
          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.submitButton}
          >
            {isSubmitting ? "Preparing..." : "Send via WhatsApp"}
          </button>
        </div>

        <div className={styles.formNote}>
          <p>
            <strong>Confidential & Secure:</strong> Your information is
            protected by attorney-client privilege. By submitting this form,
            you&apos;ll be redirected to WhatsApp where you can send your
            message directly to our legal team.
          </p>
        </div>
      </form>
    </div>
  );
}
