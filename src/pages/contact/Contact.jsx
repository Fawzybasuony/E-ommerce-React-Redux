import React, { useState } from "react";
import Swal from "sweetalert2";
import "./contact.css";

/* ------------------------------------------------------------------ */
/* details — the only block you need to edit                           */
/* ------------------------------------------------------------------ */

const DETAILS = {
  addressLines: ["3 Tahrir Street", "Giza, Egypt"],
  /* replace both with your real numbers before launch */
  phones: ["+20 2 0000 0000", "+20 100 000 0000"],
  email: "contact@violetstore.com",
  site: "www.violetstore.com",
  hours: "Sunday – Thursday, 9:00 – 17:00",
};

/* the map follows the address above — no separate coordinates to drift */
const MAP_QUERY = encodeURIComponent(DETAILS.addressLines.join(", "));
const MAP_SRC = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const EMPTY = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

/* ------------------------------------------------------------------ */
/* page                                                                */
/* ------------------------------------------------------------------ */

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});

  const update = (field) => (e) => {
    const { value } = e.target;
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.firstName.trim()) next.firstName = "We need a first name.";
    if (!EMAIL_RE.test(form.email))
      next.email = "That email address is missing something.";
    if (!form.subject.trim()) next.subject = "Add a short subject line.";
    if (form.message.trim().length < 10)
      next.message = "Tell us a little more — ten characters at least.";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Message sent",
      text: "We reply within one working day.",
      toast: true,
      showConfirmButton: false,
      timer: 2200,
      timerProgressBar: true,
    });

    setForm(EMPTY);
  };

  return (
    <div className="sb-contact-page">
      {/* ------------------------------------------------------------ */}
      {/* masthead                                                      */}
      {/* ------------------------------------------------------------ */}
      <section className="sb-shop-section sb-contact-head">
        <div className="sb-shop-container">
          <p className="sb-features-eyebrow">Contact</p>

          <h1 className="sb-contact-title">
            Talk to the <em>workshop</em>
          </h1>

          <p className="sb-contact-lead">
            Sizing, materials, repairs, or an order that needs looking at — a
            person reads every message and replies within one working day.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* form + details                                                */}
      {/* ------------------------------------------------------------ */}
      <section className="sb-shop-section sb-contact-body">
        <div className="sb-shop-container sb-contact-grid">
          <form className="sb-form" onSubmit={handleSubmit} noValidate>
            <div className="sb-field-row">
              <div className="sb-field">
                <label htmlFor="sb-first">First name</label>
                <input
                  id="sb-first"
                  type="text"
                  value={form.firstName}
                  onChange={update("firstName")}
                  autoComplete="given-name"
                  aria-invalid={!!errors.firstName}
                  aria-describedby={
                    errors.firstName ? "sb-first-error" : undefined
                  }
                />
                {errors.firstName && (
                  <p className="sb-field-error" id="sb-first-error">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div className="sb-field">
                <label htmlFor="sb-last">
                  Last name <span className="sb-optional">optional</span>
                </label>
                <input
                  id="sb-last"
                  type="text"
                  value={form.lastName}
                  onChange={update("lastName")}
                  autoComplete="family-name"
                />
              </div>
            </div>

            <div className="sb-field">
              <label htmlFor="sb-email">Email address</label>
              <input
                id="sb-email"
                type="email"
                value={form.email}
                onChange={update("email")}
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={
                  errors.email ? "sb-email-error" : "sb-email-help"
                }
              />
              {errors.email ? (
                <p className="sb-field-error" id="sb-email-error">
                  {errors.email}
                </p>
              ) : (
                <p className="sb-field-help" id="sb-email-help">
                  Used only to reply to you.
                </p>
              )}
            </div>

            <div className="sb-field">
              <label htmlFor="sb-subject">Subject</label>
              <input
                id="sb-subject"
                type="text"
                value={form.subject}
                onChange={update("subject")}
                placeholder="Order #, product name, or a few words"
                aria-invalid={!!errors.subject}
                aria-describedby={
                  errors.subject ? "sb-subject-error" : undefined
                }
              />
              {errors.subject && (
                <p className="sb-field-error" id="sb-subject-error">
                  {errors.subject}
                </p>
              )}
            </div>

            <div className="sb-field">
              <label htmlFor="sb-message">Message</label>
              <textarea
                id="sb-message"
                rows={6}
                value={form.message}
                onChange={update("message")}
                placeholder="What would you like to know?"
                aria-invalid={!!errors.message}
                aria-describedby={
                  errors.message ? "sb-message-error" : undefined
                }
              />
              {errors.message && (
                <p className="sb-field-error" id="sb-message-error">
                  {errors.message}
                </p>
              )}
            </div>

            <button type="submit" className="sb-btn sb-btn-solid sb-form-send">
              Send message
            </button>
          </form>

          {/* ---------------- details ---------------- */}
          <aside className="sb-details">
            <div className="sb-detail">
              <h2 className="sb-detail-label">Workshop</h2>
              <address className="sb-detail-body">
                {DETAILS.addressLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
            </div>

            <div className="sb-detail">
              <h2 className="sb-detail-label">Phone</h2>
              <div className="sb-detail-body">
                {DETAILS.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/[^\d+]/g, "")}`}>
                    {p}
                  </a>
                ))}
              </div>
            </div>

            <div className="sb-detail">
              <h2 className="sb-detail-label">Email</h2>
              <div className="sb-detail-body">
                <a href={`mailto:${DETAILS.email}`}>{DETAILS.email}</a>
              </div>
            </div>

            <div className="sb-detail">
              <h2 className="sb-detail-label">Online</h2>
              <div className="sb-detail-body">
                <a
                  href={`https://${DETAILS.site}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {DETAILS.site}
                </a>
              </div>
            </div>

            <div className="sb-detail">
              <h2 className="sb-detail-label">Open</h2>
              <p className="sb-detail-body">{DETAILS.hours}</p>
            </div>
          </aside>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* map                                                           */}
      {/* ------------------------------------------------------------ */}
      <section className="sb-shop-section sb-map-section">
        <div className="sb-shop-container">
          <div className="sb-map">
            <iframe
              title={`Map showing ${DETAILS.addressLines.join(", ")}`}
              src={MAP_SRC}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}