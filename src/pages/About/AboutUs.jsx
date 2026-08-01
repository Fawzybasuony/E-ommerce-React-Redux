import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  LuArrowUpRight, 
  LuChevronDown, 
  LuShieldCheck, 
  LuClock, 
  LuBoxes, 
  LuUsers 
} from "react-icons/lu";
import "./AboutUs.css";
import SEO from "../../helpers/SEO";

const SHOP_ROUTE = "/Shop";
const CONTACT_ROUTE = "/Contact";

const FIGURES = [
  { value: "10+", unit: "Years", label: "Crafting Excellence", icon: LuClock },
  { value: "09", unit: "Pieces", label: "Curated Catalogue", icon: LuBoxes },
  { value: "04", unit: "Makers", label: "Master Artisans", icon: LuUsers },
  { value: "48h", unit: "Dispatch", label: "Express Shipping", icon: LuShieldCheck },
];

const MATERIALS = [
  {
    color: "#3a2a20",
    name: "Full-grain leather",
    note: "Vegetable tanned & unsanded. Develops a rich, personal patina over time.",
    tag: "Premium",
  },
  {
    color: "#c9b79a",
    name: "Merino wool",
    note: "Mid-weight, long-spun fibers engineered to retain natural shape at stress points.",
    tag: "Organic",
  },
  {
    color: "#8e9199",
    name: "Anodised aluminium",
    note: "Selected for extreme durability and effortless precision re-assembly.",
    tag: "Durable",
  },
  {
    color: "#c9a227",
    name: "Solid brass",
    note: "Solid-core hardware and clasps built to outlast generations.",
    tag: "Essential",
  },
];

const MILESTONES = [
  {
    year: "2014",
    title: "Ten jackets, one table",
    body: "The journey began in a tiny rented studio with a single cutting table and a clear vision.",
  },
  {
    year: "2017",
    title: "The Workshop",
    body: "Expanded into our dedicated workshop space and welcomed our first four full-time artisans.",
  },
  {
    year: "2021",
    title: "Beyond Clothing",
    body: "Introduced handcrafted jewelry and repairable micro-electronics to the collection.",
  },
  {
    year: "2024",
    title: "Full Traceability",
    body: "Every single piece now ships signed by the artisan who hand-crafted it.",
  },
];

const FAQS = [
  {
    q: "Why is the catalogue so small?",
    a: "We only list what is physically crafted and ready in our workshop. A focused catalogue guarantees uncompromised quality.",
  },
  {
    q: "What happens when a run sells out?",
    a: "We either re-craft the edition or archive it. Real-time status updates are always clear on the product page.",
  },
  {
    q: "How do returns work?",
    a: "30-day hassle-free returns with complimentary shipping labels. No hidden restocking fees ever.",
  },
  {
    q: "Can a piece be repaired?",
    a: "Yes! Send it back for artisan repair. Any manufacturing defect is fixed completely free of charge.",
  },
];

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <>
    <SEO 
        title="About Us" 
        description="A decade of small runs and honest craft. Learn about our materials and philosophy."
      />
    <div className="au-wrapper">
      {/* Background Subtle Gradient Glows */}
      <div className="au-glow au-glow-1" />
      <div className="au-glow au-glow-2" />

      {/* Hero / Header Section */}
      <section className="au-hero-section mt-5">
        <div className="au-container text-center">
         

          <h1 className="au-hero-title">
            A Decade of <span className="au-highlight">Small Runs</span> & Honest Craft
          </h1>

          <p className="au-hero-lead">
            We build timeless objects worth keeping. Made in small, intentional quantities 
            so every single piece carries a story of quality and precision.
          </p>
        </div>
      </section>

      {/* Figures / Stats Grid */}
      <section className="au-section au-stats-section">
        <div className="au-container">
          <div className="au-stats-grid">
            {FIGURES.map((f) => {
              const Icon = f.icon;
              return (
                <div className="au-stat-card" key={f.label}>
                  <div className="au-stat-header">
                    <span className="au-stat-value">{f.value}</span>
                    <Icon size={20} className="au-stat-icon" />
                  </div>
                  <div className="au-stat-footer">
                    <span className="au-stat-unit">{f.unit}</span>
                    <p className="au-stat-label">{f.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story & Quote Section */}
      <section className="au-section">
        <div className="au-container">
          <div className="au-story-grid">
            <div className="au-quote-card">
              <blockquote className="au-quote-text">
                "Make less, know where it came from, and answer every question with pride."
              </blockquote>
              <cite className="au-quote-author">— The Founding Brief (2014)</cite>
            </div>

            <div className="au-story-content">
              <h2 className="au-section-heading">Built to endure, tailored for life.</h2>
              <p>
                A decade later, our principles remain unchanged. We search for materials that grow better with age—honest leather, resilient wool, and open-architecture electronics designed for lifelong repairability.
              </p>
              <p>
                By keeping our production runs limited, we eliminate warehouse waste and focus entirely on master-level craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="au-section">
        <div className="au-container">
          <div className="au-section-header text-center">
            <span className="au-eyebrow">Craftsmanship</span>
            <h2 className="au-section-heading">Materials We Trust</h2>
            <p className="au-section-sub">
              Selected for how exceptionally they perform years after daily use.
            </p>
          </div>

          <div className="au-materials-grid">
            {MATERIALS.map((m) => (
              <div className="au-material-card" key={m.name}>
                <div className="au-material-top">
                  <span 
                    className="au-material-swatch" 
                    style={{ backgroundColor: m.color }} 
                  />
                  <span className="au-material-tag">{m.tag}</span>
                </div>
                <h3 className="au-material-title">{m.name}</h3>
                <p className="au-material-note">{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="au-section">
        <div className="au-container">
          <div className="au-section-header text-center">
            <span className="au-eyebrow">Evolution</span>
            <h2 className="au-section-heading">How We Reached Here</h2>
          </div>

          <div className="au-timeline-grid">
            {MILESTONES.map((m) => (
              <div className="au-timeline-card" key={m.year}>
                <span className="au-timeline-year">{m.year}</span>
                <h3 className="au-timeline-title">{m.title}</h3>
                <p className="au-timeline-body">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="au-section">
        <div className="au-container">
          <div className="au-faq-layout">
            <div className="au-faq-info">
              <span className="au-eyebrow">Got Questions?</span>
              <h2 className="au-section-heading">Frequently Asked</h2>
              <p className="au-section-sub">
                Can't find what you're looking for? Reach out to our human support team anytime.
              </p>
            </div>

            <div className="au-faq-list">
              {FAQS.map((f) => (
                <details className="au-faq-item" key={f.q}>
                  <summary className="au-faq-summary">
                    <span>{f.q}</span>
                    <LuChevronDown size={18} className="au-faq-chevron" />
                  </summary>
                  <p className="au-faq-answer">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="au-section au-cta-section">
        <div className="au-container">
          <div className="au-cta-card">
            <h2 className="au-cta-title">
              Ready to explore our latest release?
            </h2>
            <p className="au-cta-sub">
              Our catalogue updates weekly. Experience handcrafted perfection today.
            </p>
            <div className="au-cta-actions">
              <button 
                type="button" 
                className="au-btn au-btn-primary"
                onClick={() => navigate(SHOP_ROUTE)}
              >
                <span>Browse Catalogue</span>
                <LuArrowUpRight size={18} />
              </button>
              <button 
                type="button" 
                className="au-btn au-btn-secondary"
                onClick={() => navigate(CONTACT_ROUTE)}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </div></>
  );
}