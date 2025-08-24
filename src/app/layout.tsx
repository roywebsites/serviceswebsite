import type { Metadata, Viewport } from "next";
import { Inter, Merriweather } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://legalserviceslb.com"),
  title: {
    default: "Top Legal Services in Lebanon & MENA | Expert Lawyers in Beirut",
    template: "%s | Expert Legal Services Lebanon",
  },
  description:
    "Leading legal services in Lebanon and MENA region. Expert lawyers in Beirut providing comprehensive legal solutions: corporate law, real estate law, family law, criminal law, intellectual property, commercial law, market capital law, labor law, arbitration, legal drafting, and expeditor services. Available 24/7.",
  keywords: [
    // Primary Lebanese keywords
    "lawyer Lebanon",
    "legal services Lebanon",
    "attorney Lebanon",
    "law firm Lebanon",
    "legal consultation Lebanon",
    "Lebanese lawyer",
    "Beirut lawyer",
    "Lebanon legal advice",
    "legal services Beirut",
    "top lawyer Lebanon",
    "best lawyer Lebanon",
    "expert lawyer Lebanon",

    // MENA region keywords
    "MENA lawyer",
    "Middle East lawyer",
    "Arab world legal services",
    "MENA legal consultation",
    "Middle East law firm",

    // Specific practice areas with geographic modifiers
    "corporate lawyer Lebanon",
    "business lawyer Lebanon",
    "real estate lawyer Beirut",
    "property lawyer Lebanon",
    "family lawyer Lebanon",
    "divorce lawyer Lebanon",
    "criminal lawyer Lebanon",
    "criminal defense Lebanon",
    "IP lawyer Lebanon",
    "intellectual property Lebanon",
    "commercial law Lebanon",
    "business law Lebanon",
    "securities lawyer Lebanon",
    "capital markets Lebanon",
    "employment lawyer Lebanon",
    "labor law Lebanon",
    "arbitration Lebanon",
    "mediation Lebanon",
    "contract drafting Lebanon",
    "legal documents Lebanon",
    "government permits Lebanon",
    "expeditor services Lebanon",

    // Lebanese cities and regions
    "lawyer Tripoli",
    "lawyer Sidon",
    "lawyer Tyre",
    "lawyer Zahle",
    "lawyer Jounieh",
    "Mount Lebanon lawyer",
    "North Lebanon lawyer",
    "South Lebanon lawyer",
    "Bekaa Valley lawyer",

    // Service-specific long-tail keywords
    "company registration Lebanon",
    "business setup Lebanon",
    "property purchase Lebanon",
    "real estate transaction Lebanon",
    "work permit Lebanon",
    "visa application Lebanon",
    "court representation Lebanon",
    "legal representation Lebanon",
    "contract review Lebanon",
    "due diligence Lebanon",
  ],
  authors: [{ name: "Expert Legal Team Lebanon" }],
  creator: "Legal Services Lebanon",
  publisher: "Lebanon Legal Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_LB", "fr_LB"],
    url: "https://legalserviceslb.com",
    title: "Top Legal Services in Lebanon & MENA | Expert Lawyers in Beirut",
    description:
      "Leading legal services in Lebanon and MENA region. Expert lawyers in Beirut providing comprehensive legal solutions for individuals and businesses.",
    siteName: "Lebanon Legal Services",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Expert Legal Services in Lebanon - Top Lawyers in Beirut",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Legal Services in Lebanon & MENA",
    description:
      "Leading legal services in Lebanon and MENA region by expert lawyers.",
    images: ["/twitter-image.jpg"],
  },
  verification: {
    google: "google-site-verification",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/favicon.ico" }],
    shortcut: "/favicon.ico",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Lebanon Legal Services",
  },
  alternates: {
    canonical: "https://legalserviceslb.com",
    languages: {
      "en-US": "https://legalserviceslb.com",
      "ar-LB": "https://legalserviceslb.com/ar",
      "fr-LB": "https://legalserviceslb.com/fr",
    },
  },
  other: {
    "geo.region": "LB",
    "geo.placename": "Beirut",
    "geo.position": "33.8938;35.5018",
    ICBM: "33.8938, 35.5018",
    "DC.title": "Top Legal Services in Lebanon",
    "DC.creator": "Expert Legal Team",
    "DC.subject": "Legal Services, Lawyers, Law Firm",
    "DC.description": "Leading legal services in Lebanon and MENA region",
    "DC.publisher": "Lebanon Legal Services",
    "DC.contributor": "Expert Legal Team",
    "DC.date": "2023-10-26", // Using a static date
    "DC.type": "Text",
    "DC.format": "text/html",
    "DC.identifier": "https://legalserviceslb.com",
    "DC.source": "https://legalserviceslb.com",
    "DC.language": "en",
    "DC.relation": "https://legalserviceslb.com",
    "DC.coverage": "Lebanon, MENA, Middle East",
    "DC.rights": "Copyright Lebanon Legal Services",
  },
};

export const viewport: Viewport = {
  themeColor: "#1A4331",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": "https://legalserviceslb.com/#organization",
        name: "Lebanon Legal Services",
        alternateName: [
          "Legal Services Lebanon",
          "Beirut Law Firm",
          "Lebanon Lawyers",
        ],
        description:
          "Leading legal services provider in Lebanon and MENA region offering comprehensive legal solutions",
        url: "https://legalserviceslb.com",
        logo: {
          "@type": "ImageObject",
          url: "https://legalserviceslb.com/logo.png",
          width: 400,
          height: 400,
        },
        image: {
          "@type": "ImageObject",
          url: "https://legalserviceslb.com/og-image.jpg",
          width: 1200,
          height: 630,
        },
        telephone: "+961-70-653-966",
        email: "mghamesroy@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Beirut",
          addressLocality: "Beirut",
          addressRegion: "Beirut Governorate",
          addressCountry: "LB",
          postalCode: "1100",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 33.8938,
          longitude: 35.5018,
        },
        areaServed: [
          {
            "@type": "Country",
            name: "Lebanon",
          },
          {
            "@type": "Place",
            name: "MENA Region",
          },
          {
            "@type": "Place",
            name: "Middle East",
          },
        ],
        serviceArea: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 33.8938,
            longitude: 35.5018,
          },
          geoRadius: "50000",
        },
        priceRange: "$$",
        currenciesAccepted: ["USD", "LBP", "EUR"],
        paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
        openingHours: ["Mo-Fr 09:00-18:00", "Sa 10:00-14:00"],
        serviceType: [
          "Legal Consultation",
          "Corporate Law",
          "Real Estate Law",
          "Family Law",
          "Criminal Law",
          "Intellectual Property",
          "Commercial Law",
          "Labor Law",
          "Arbitration",
          "Legal Drafting",
          "Expeditor Services",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Legal Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Corporate Law Services",
                description:
                  "Business formation, contracts, mergers & acquisitions, corporate governance",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Real Estate Law Services",
                description:
                  "Property transactions, due diligence, lease agreements, dispute resolution",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Family Law Services",
                description:
                  "Divorce proceedings, child custody, inheritance matters, family mediation",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Criminal Law Services",
                description:
                  "Criminal defense, legal representation, case analysis, court proceedings",
              },
            },
          ],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "127",
          bestRating: "5",
          worstRating: "1",
        },
        review: [
          {
            "@type": "Review",
            author: {
              "@type": "Person",
              name: "Ahmad K.",
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            reviewBody:
              "Our legal team provided exceptional guidance during our company's expansion. Their expertise in corporate law and attention to detail made the process smooth and successful.",
          },
        ],
        sameAs: [
          "https://www.linkedin.com/company/lebanon-legal-services",
          "https://twitter.com/lebanonlegal",
          "https://www.facebook.com/lebanonlegalservices",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://legalserviceslb.com/#website",
        url: "https://legalserviceslb.com",
        name: "Lebanon Legal Services",
        description:
          "Leading legal services provider in Lebanon and MENA region",
        publisher: {
          "@id": "https://legalserviceslb.com/#organization",
        },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate:
                "https://legalserviceslb.com/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
