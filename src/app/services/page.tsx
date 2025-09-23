import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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
  ZapIcon,
  TargetIcon,
  BookIcon,
  ClockIcon,
} from "../../components/Icons";

export const metadata: Metadata = {
  title: "Legal Services in Lebanon | Professional Law Firm",
  description:
    "Comprehensive legal services in Lebanon including corporate law, real estate law, family law, criminal defense, intellectual property, commercial & business law, market capital law, labor law, arbitration & alternative dispute resolution, legal draftings, and legal & expeditor services. Expert legal counsel by professional lawyers.",
  keywords: [
    "legal services Lebanon",
    "corporate law Lebanon",
    "real estate law Beirut",
    "family law Lebanon",
    "criminal lawyer Lebanon",
    "Lebanese law firm",
    "intellectual property Lebanon",
    "commercial law Lebanon",
    "market capital law Lebanon",
    "labor law Lebanon",
    "arbitration Lebanon",
    "mediation services Lebanon",
    "legal drafting Lebanon",
    "contract drafting Lebanon",
    "expeditor services Lebanon",
    "government permits Lebanon",
  ],
};

export default function ServicesPage() {
  return (
    <div>
      <Header />

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1>Legal Services</h1>
              <p>
                Comprehensive legal solutions for individuals and businesses in
                Lebanon
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className={styles.overview}>
          <div className="container">
            <div className={styles.overviewContent}>
              <h2>Professional Legal Services</h2>
              <p>
                With years of experience in Lebanese law, I provide
                comprehensive legal services across multiple practice areas.
                Whether you&apos;re an individual seeking personal legal
                guidance or a business requiring corporate counsel, I offer
                strategic, results-driven solutions tailored to your specific
                needs.
              </p>
            </div>
          </div>
        </section>

        {/* Corporate Law */}
        <section id="corporate-law" className={styles.serviceSection}>
          <div className="container">
            <div className={styles.serviceContent}>
              <div className={styles.serviceText}>
                <div className={styles.serviceIcon}>
                  <ScaleIcon size={48} color="#DAA520" />
                </div>
                <h2>Corporate Law</h2>
                <p>
                  Comprehensive corporate legal services to help businesses
                  navigate complex regulatory environments and achieve their
                  strategic objectives in Lebanon.
                </p>

                <h3>Services Include:</h3>
                <ul className={styles.serviceList}>
                  <li>Business formation and incorporation</li>
                  <li>Corporate governance and compliance</li>
                  <li>Mergers and acquisitions</li>
                  <li>Contract drafting and negotiation</li>
                  <li>Commercial dispute resolution</li>
                  <li>Regulatory compliance and advisory</li>
                  <li>Joint ventures and partnerships</li>
                  <li>Securities law and capital markets</li>
                </ul>

                <h3>Types of Clients:</h3>
                <p>
                  Startups, SMEs, multinational corporations, entrepreneurs, and
                  investors looking to establish or expand their business
                  presence in Lebanon.
                </p>

                <a
                  href="/contact?service=corporate-law"
                  className="btn btn-primary"
                >
                  Get Corporate Law Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Real Estate Law */}
        <section id="real-estate-law" className={styles.serviceSection}>
          <div className="container">
            <div className={styles.serviceContent}>
              <div className={styles.serviceText}>
                <div className={styles.serviceIcon}>
                  <BuildingIcon size={48} color="#4169E1" />
                </div>
                <h2>Real Estate Law</h2>
                <p>
                  Expert legal guidance for all real estate transactions and
                  property-related matters in Lebanon, ensuring smooth and
                  secure property dealings.
                </p>

                <h3>Services Include:</h3>
                <ul className={styles.serviceList}>
                  <li>Property purchase and sale transactions</li>
                  <li>Due diligence and title verification</li>
                  <li>Lease agreements and rental contracts</li>
                  <li>Property development and zoning</li>
                  <li>Real estate dispute resolution</li>
                  <li>Mortgage and financing agreements</li>
                  <li>Construction contracts and permits</li>
                  <li>Property management legal issues</li>
                </ul>

                <h3>Types of Clients:</h3>
                <p>
                  Property buyers and sellers, real estate developers,
                  investors, landlords, tenants, and construction companies.
                </p>

                <a
                  href="/contact?service=real-estate-law"
                  className="btn btn-primary"
                >
                  Get Real Estate Law Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Family Law */}
        <section id="family-law" className={styles.serviceSection}>
          <div className="container">
            <div className={styles.serviceContent}>
              <div className={styles.serviceText}>
                <div className={styles.serviceIcon}>
                  <FamilyIcon size={48} color="#FF6B6B" />
                </div>
                <h2>Family Law</h2>
                <p>
                  Compassionate and skilled representation in family legal
                  matters, providing support during difficult times with
                  sensitivity and expertise.
                </p>

                <h3>Services Include:</h3>
                <ul className={styles.serviceList}>
                  <li>Divorce proceedings and separation</li>
                  <li>Child custody and visitation rights</li>
                  <li>Child and spousal support</li>
                  <li>Property division and asset distribution</li>
                  <li>Inheritance and succession planning</li>
                  <li>Family dispute mediation</li>
                  <li>Adoption procedures</li>
                  <li>Prenuptial and postnuptial agreements</li>
                </ul>

                <h3>Types of Clients:</h3>
                <p>
                  Families navigating divorce, parents seeking custody
                  arrangements, individuals planning estates, and those involved
                  in inheritance disputes.
                </p>

                <a
                  href="/contact?service=family-law"
                  className="btn btn-primary"
                >
                  Get Family Law Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Criminal Law */}
        <section id="criminal-law" className={styles.serviceSection}>
          <div className="container">
            <div className={styles.serviceContent}>
              <div className={styles.serviceText}>
                <div className={styles.serviceIcon}>
                  <ShieldIcon size={48} color="#32CD32" />
                </div>
                <h2>Criminal Law</h2>
                <p>
                  Aggressive and strategic criminal defense representation,
                  protecting your rights and freedom with experienced advocacy
                  in Lebanese courts.
                </p>

                <h3>Services Include:</h3>
                <ul className={styles.serviceList}>
                  <li>Criminal defense representation</li>
                  <li>Case analysis and strategy development</li>
                  <li>Pre-trial motions and proceedings</li>
                  <li>Plea bargain negotiations</li>
                  <li>Trial advocacy and litigation</li>
                  <li>Appeals and post-conviction relief</li>
                  <li>White-collar crime defense</li>
                  <li>Regulatory investigations</li>
                </ul>

                <h3>Types of Clients:</h3>
                <p>
                  Individuals facing criminal charges, businesses under
                  investigation, and those requiring immediate legal
                  representation in criminal matters.
                </p>

                <a
                  href="/contact?service=criminal-law"
                  className="btn btn-primary"
                >
                  Get Criminal Defense Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Civil Litigation */}
        <section id="civil-litigation" className={styles.serviceSection}>
          <div className="container">
            <div className={styles.serviceContent}>
              <div className={styles.serviceText}>
                <div className={styles.serviceIcon}>
                  <ZapIcon size={48} color="#FF6B35" />
                </div>
                <h2>Civil Litigation</h2>
                <p>
                  Skilled representation in civil disputes and litigation
                  matters, advocating for your interests in Lebanese courts with
                  strategic expertise.
                </p>

                <h3>Services Include:</h3>
                <ul className={styles.serviceList}>
                  <li>Commercial dispute resolution</li>
                  <li>Contract disputes and breaches</li>
                  <li>Personal injury claims</li>
                  <li>Employment law disputes</li>
                  <li>Debt collection and recovery</li>
                  <li>Insurance claim disputes</li>
                  <li>Professional liability cases</li>
                  <li>Alternative dispute resolution</li>
                </ul>

                <h3>Types of Clients:</h3>
                <p>
                  Businesses and individuals involved in civil disputes,
                  insurance companies, employers and employees, and those
                  seeking compensation for damages.
                </p>

                <a
                  href="/contact?service=civil-litigation"
                  className="btn btn-primary"
                >
                  Get Civil Litigation Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Intellectual Property */}
        <section id="intellectual-property" className={styles.serviceSection}>
          <div className="container">
            <div className={styles.serviceContent}>
              <div className={styles.serviceText}>
                <div className={styles.serviceIcon}>
                  <BulbIcon size={48} color="#FFD700" />
                </div>
                <h2>Intellectual Property</h2>
                <p>
                  Comprehensive intellectual property protection services to
                  safeguard your innovations, creative works, and business
                  assets in Lebanon and internationally.
                </p>

                <h3>Services Include:</h3>
                <ul className={styles.serviceList}>
                  <li>Patent applications and prosecution</li>
                  <li>Trademark registration and protection</li>
                  <li>Copyright registration and enforcement</li>
                  <li>Trade secret protection strategies</li>
                  <li>IP licensing and technology transfer</li>
                  <li>IP infringement litigation</li>
                  <li>IP due diligence for transactions</li>
                  <li>Brand protection and enforcement</li>
                </ul>

                <h3>Types of Clients:</h3>
                <p>
                  Inventors, startups, technology companies, creative
                  professionals, manufacturers, and businesses looking to
                  protect their intellectual property assets.
                </p>

                <a
                  href="/contact?service=intellectual-property"
                  className="btn btn-primary"
                >
                  Get IP Law Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial and Business Law */}
        <section id="commercial-business-law" className={styles.serviceSection}>
          <div className="container">
            <div className={styles.serviceContent}>
              <div className={styles.serviceText}>
                <div className={styles.serviceIcon}>
                  <StoreIcon size={48} color="#9932CC" />
                </div>
                <h2>Commercial and Business Law</h2>
                <p>
                  Strategic legal guidance for commercial transactions and
                  business operations, helping companies navigate complex
                  regulatory environments and achieve their business objectives.
                </p>

                <h3>Services Include:</h3>
                <ul className={styles.serviceList}>
                  <li>Commercial contract drafting and review</li>
                  <li>Business transaction structuring</li>
                  <li>Regulatory compliance advisory</li>
                  <li>Commercial dispute resolution</li>
                  <li>Supply chain and distribution agreements</li>
                  <li>Franchise and licensing arrangements</li>
                  <li>Commercial real estate transactions</li>
                  <li>Competition and antitrust matters</li>
                </ul>

                <h3>Types of Clients:</h3>
                <p>
                  Retail businesses, distributors, manufacturers, service
                  providers, franchisors and franchisees, and companies engaged
                  in commercial activities.
                </p>

                <a
                  href="/contact?service=commercial-business-law"
                  className="btn btn-primary"
                >
                  Get Commercial Law Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Market Capital Law */}
        <section id="market-capital-law" className={styles.serviceSection}>
          <div className="container">
            <div className={styles.serviceContent}>
              <div className={styles.serviceText}>
                <div className={styles.serviceIcon}>
                  <ChartIcon size={48} color="#FF4500" />
                </div>
                <h2>Market Capital Law</h2>
                <p>
                  Expert guidance in securities regulations and capital market
                  transactions, helping businesses access capital markets while
                  ensuring full regulatory compliance.
                </p>

                <h3>Services Include:</h3>
                <ul className={styles.serviceList}>
                  <li>Securities offerings and IPO guidance</li>
                  <li>Capital market compliance</li>
                  <li>Investment fund structuring</li>
                  <li>Securities law advisory</li>
                  <li>Regulatory filings and disclosures</li>
                  <li>Corporate governance for public companies</li>
                  <li>Investor relations legal support</li>
                  <li>Capital market dispute resolution</li>
                </ul>

                <h3>Types of Clients:</h3>
                <p>
                  Public companies, investment funds, financial institutions,
                  issuers planning public offerings, and institutional investors
                  in capital market transactions.
                </p>

                <a
                  href="/contact?service=market-capital-law"
                  className="btn btn-primary"
                >
                  Get Capital Markets Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Labor Law */}
        <section id="labor-law" className={styles.serviceSection}>
          <div className="container">
            <div className={styles.serviceContent}>
              <div className={styles.serviceText}>
                <div className={styles.serviceIcon}>
                  <WorkerIcon size={48} color="#FF8C00" />
                </div>
                <h2>Labor Law</h2>
                <p>
                  Comprehensive employment and labor law services protecting
                  both employer and employee rights while ensuring compliance
                  with Lebanese labor regulations.
                </p>

                <h3>Services Include:</h3>
                <ul className={styles.serviceList}>
                  <li>Employment contract drafting and review</li>
                  <li>Workplace policy development</li>
                  <li>Labor dispute resolution and mediation</li>
                  <li>Employment law compliance audits</li>
                  <li>Wrongful termination defense</li>
                  <li>Workplace discrimination cases</li>
                  <li>Collective bargaining agreements</li>
                  <li>Employee benefits and compensation</li>
                </ul>

                <h3>Types of Clients:</h3>
                <p>
                  Employers, HR departments, individual employees, labor unions,
                  and businesses seeking to establish compliant employment
                  practices.
                </p>

                <a
                  href="/contact?service=labor-law"
                  className="btn btn-primary"
                >
                  Get Labor Law Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Arbitration and Alternative Dispute Resolution */}
        <section id="arbitration-adr" className={styles.serviceSection}>
          <div className="container">
            <div className={styles.serviceContent}>
              <div className={styles.serviceText}>
                <div className={styles.serviceIcon}>
                  <HandshakeIcon size={48} color="#20B2AA" />
                </div>
                <h2>Arbitration & Alternative Dispute Resolution</h2>
                <p>
                  Expert mediation, conciliation, and arbitration services
                  providing efficient, cost-effective alternatives to
                  traditional litigation for resolving disputes in Lebanon.
                </p>

                <h3>Services Include:</h3>
                <ul className={styles.serviceList}>
                  <li>Commercial arbitration proceedings</li>
                  <li>Mediation and conciliation services</li>
                  <li>Dispute resolution strategy development</li>
                  <li>Arbitration clause drafting and review</li>
                  <li>International arbitration representation</li>
                  <li>Construction and engineering disputes</li>
                  <li>Family mediation services</li>
                  <li>Employment dispute mediation</li>
                </ul>

                <h3>Types of Clients:</h3>
                <p>
                  Businesses seeking efficient dispute resolution, parties in
                  commercial disagreements, construction companies, families in
                  conflict, and international clients requiring arbitration
                  services.
                </p>

                <a
                  href="/contact?service=arbitration-adr"
                  className="btn btn-primary"
                >
                  Get ADR Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Draftings */}
        <section id="legal-draftings" className={styles.serviceSection}>
          <div className="container">
            <div className={styles.serviceContent}>
              <div className={styles.serviceText}>
                <div className={styles.serviceIcon}>
                  <DocumentIcon size={48} color="#4682B4" />
                </div>
                <h2>Legal Draftings</h2>
                <p>
                  Professional legal document preparation and drafting services
                  ensuring precision, compliance, and legal validity for all
                  your contractual and legal documentation needs.
                </p>

                <h3>Services Include:</h3>
                <ul className={styles.serviceList}>
                  <li>Contract drafting and review</li>
                  <li>Legal agreements and memorandums</li>
                  <li>Corporate documents and bylaws</li>
                  <li>Employment contracts and policies</li>
                  <li>Non-disclosure and confidentiality agreements</li>
                  <li>Partnership and joint venture agreements</li>
                  <li>Licensing and franchise agreements</li>
                  <li>Legal opinions and advisory letters</li>
                </ul>

                <h3>Types of Clients:</h3>
                <p>
                  Businesses requiring contract preparation, individuals needing
                  legal agreements, startups establishing corporate documents,
                  and organizations requiring specialized legal documentation.
                </p>

                <a
                  href="/contact?service=legal-draftings"
                  className="btn btn-primary"
                >
                  Get Legal Drafting Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Legal and Expeditor Services */}
        <section
          id="legal-expeditor-services"
          className={styles.serviceSection}
        >
          <div className="container">
            <div className={styles.serviceContent}>
              <div className={styles.serviceText}>
                <div className={styles.serviceIcon}>
                  <ClipboardIcon size={48} color="#CD853F" />
                </div>
                <h2>Legal and Expeditor Services</h2>
                <p>
                  Comprehensive administrative and expediting services to
                  streamline bureaucratic processes, obtain necessary permits
                  and licenses, and navigate government procedures efficiently
                  in Lebanon.
                </p>

                <h3>Services Include:</h3>
                <ul className={styles.serviceList}>
                  <li>Business license and permit applications</li>
                  <li>Government agency liaison and representation</li>
                  <li>Document authentication and legalization</li>
                  <li>Ministry and municipal procedures</li>
                  <li>Tax registration and compliance filings</li>
                  <li>Work permit and visa applications</li>
                  <li>Construction permit expediting</li>
                  <li>Trade registration and commercial documentation</li>
                </ul>

                <h3>Types of Clients:</h3>
                <p>
                  Businesses requiring administrative support, foreign investors
                  navigating Lebanese bureaucracy, construction companies
                  needing permits, and individuals requiring government
                  documentation.
                </p>

                <a
                  href="/contact?service=legal-expeditor-services"
                  className="btn btn-primary"
                >
                  Get Expeditor Services Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className={styles.whyChoose}>
          <div className="container">
            <div className={styles.whyChooseContent}>
              <h2>Why Choose Our Legal Services</h2>
              <div className={styles.benefitsGrid}>
                <div className={styles.benefit}>
                  <div className={styles.benefitIcon}>
                    <TargetIcon size={28} color="var(--color-accent)" />
                  </div>
                  <h3>Tailored Solutions</h3>
                  <p>
                    Each legal strategy is customized to your specific needs and
                    circumstances.
                  </p>
                </div>

                <div className={styles.benefit}>
                  <div className={styles.benefitIcon}>
                    <BookIcon size={28} color="var(--color-accent)" />
                  </div>
                  <h3>Local Expertise</h3>
                  <p>
                    Deep understanding of Lebanese legal system and regulatory
                    environment.
                  </p>
                </div>

                <div className={styles.benefit}>
                  <div className={styles.benefitIcon}>
                    <ClockIcon size={28} color="var(--color-accent)" />
                  </div>
                  <h3>Responsive Service</h3>
                  <p>
                    Prompt communication and quick response to urgent legal
                    matters.
                  </p>
                </div>

                <div className={styles.benefit}>
                  <div className={styles.benefitIcon}>
                    <HandshakeIcon size={28} color="var(--color-accent)" />
                  </div>
                  <h3>Client Partnership</h3>
                  <p>
                    Building long-term relationships based on trust and
                    successful outcomes.
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
              <h2>Need Legal Assistance?</h2>
              <p>
                Contact us today to discuss your legal needs and discover how we
                can help you achieve your objectives with expert legal guidance.
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
