import React, { useState } from "react";
import Swal from "sweetalert2";
import "./Abute.css";

/* ------------------------------------------------------------------ */
/* content — edit these, they are the only copy that changes per brand */
/* ------------------------------------------------------------------ */

const STORY_IMAGE = "/logos/person_1.jpg";

const MILESTONES = [
  {
    year: "2014",
    title: "Ten jackets, one table",
    body: "The first run was cut and sewn in a single rented room.",
  },
  {
    year: "2017",
    title: "The workshop",
    body: "We moved into a permanent space and took on four full-time makers.",
  },
  {
    year: "2021",
    title: "Beyond clothing",
    body: "Jewellery and small electronics joined the catalogue.",
  },
  {
    year: "2024",
    title: "Every piece traced",
    body: "Each item now ships with the name of the person who made it.",
  },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/* ------------------------------------------------------------------ */
/* page                                                                */
/* ------------------------------------------------------------------ */

export default function AbuteUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    subscribe: true,
  });
  const [errors, setErrors] = useState({});

  const update = (field) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Add a name so we know who to reply to.";
    if (!EMAIL_RE.test(form.email))
      next.email = "That email address is missing something.";
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

    setForm({ name: "", email: "", message: "", subscribe: true });
  };

  return (
    <div className="sb-about">
      {/* ------------------------------------------------------------ */}
      {/* masthead                                                      */}
      {/* ------------------------------------------------------------ */}
      <section className="sb-shop-section sb-about-head">
        <div className="sb-shop-container">
          <p className="sb-features-eyebrow">About</p>

          <h1 className="sb-about-title">
            Ten years of <em>small runs</em>
          </h1>

          <p className="sb-about-lead">
            We started with one idea: clothing and objects worth keeping, made
            in quantities small enough that we know where every piece came
            from.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* story                                                         */}
      {/* ------------------------------------------------------------ */}
      <section className="sb-shop-section sb-story">
        <div className="sb-shop-container sb-story-layout">
          <figure className="sb-story-figure">
            <img src={STORY_IMAGE} alt="Inside the workshop" loading="lazy" />
            <figcaption>The workshop floor, early morning</figcaption>
          </figure>

          <div className="sb-story-body">
            <p>
              A decade in, the brief has not changed much. We look for pieces
              that hold up — good leather, honest wool, electronics built to be
              opened and repaired — and we buy them in runs short enough to
              keep track of.
            </p>
            <p>
              That means the catalogue is smaller than most. It also means
              nothing sits in a warehouse for a year. When a run sells out we
              either make it again or we do not, and we say which.
            </p>
            <p>
              Everything ships from the workshop within two days, with thirty
              days to send it back if it is not right. No restocking fee, no
              questions we would not want to be asked ourselves.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* milestones                                                    */}
      {/* ------------------------------------------------------------ */}
      <section className="sb-shop-section sb-timeline">
        <div className="sb-shop-container">
          <h2 className="sb-section-title">How we got here</h2>

          <ol className="sb-timeline-grid">
            {MILESTONES.map((m) => (
              <li key={m.year} className="sb-milestone">
                <span className="sb-milestone-year">{m.year}</span>
                <h3 className="sb-milestone-title">{m.title}</h3>
                <p className="sb-milestone-body">{m.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* contact                                                       */}
      {/* ------------------------------------------------------------ */}
      <section className="sb-shop-section sb-contact">
        <div className="sb-shop-container sb-contact-layout">
          <div className="sb-contact-intro">
            <p className="sb-features-eyebrow">Get in touch</p>
            <h2 className="sb-section-title">Ask us anything</h2>
            <p className="sb-contact-note">
              Sizing, materials, repairs, or where a piece was made — we answer
              every message within one working day.
            </p>
          </div>

          <form className="sb-form" onSubmit={handleSubmit} noValidate>
            <div className="sb-field">
              <label htmlFor="sb-name">Name</label>
              <input
                id="sb-name"
                type="text"
                value={form.name}
                onChange={update("name")}
                autoComplete="name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "sb-name-error" : undefined}
              />
              {errors.name && (
                <p className="sb-field-error" id="sb-name-error">
                  {errors.name}
                </p>
              )}
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
              <label htmlFor="sb-message">Message</label>
              <textarea
                id="sb-message"
                rows={5}
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

            <label className="sb-check" htmlFor="sb-subscribe">
              <input
                id="sb-subscribe"
                type="checkbox"
                checked={form.subscribe}
                onChange={update("subscribe")}
              />
              <span>Email me when a new run lands. Roughly once a month.</span>
            </label>

            <button type="submit" className="sb-btn sb-btn-solid sb-form-send">
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}