"use client";

import styles from "./WhatsAppWidget.module.css";
import { WhatsAppIcon } from "./Icons";

interface WhatsAppWidgetProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
}

export default function WhatsAppWidget({
  phoneNumber = "96170653966",
  message = "Hello! I would like to schedule a legal consultation.",
  className,
}: WhatsAppWidgetProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className={`${styles.widget} ${className || ""}`}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappButton}
        title="Contact via WhatsApp"
        aria-label="Contact legal team via WhatsApp"
      >
        <WhatsAppIcon size={28} />
        <span className={styles.tooltip}>WhatsApp Us</span>
      </a>
    </div>
  );
}
