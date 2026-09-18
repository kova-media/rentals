"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      <header className="site-header"><div className="container header-inner"><Link className="wordmark" href="/">rentals</Link><nav><Link href="/rentals">Rentals</Link><Link href="/property-management">Property management</Link></nav></div></header>
      <section className="owner-hero compact-hero"><div className="container"><p className="eyebrow">Contact</p><h1>{submitted ? "We'll follow up with you." : "Tell us what you need."}</h1><p className="owner-lede">{submitted ? "Your inquiry has been captured. The next step is a follow-up about the property or rental you're asking about." : "Use this form for property management, leasing, rental analysis, vacancy help, or questions about an available rental."}</p></div></section>
      <section className="owner-section"><div className="container form-shell-wide">{submitted ? <div className="success-shell"><p className="success-copy">Thanks. Your inquiry is ready for follow-up.</p><Link className="button button-dark" href="/">Return home</Link></div> : <form className="owner-form" onSubmit={(e)=>{e.preventDefault();setSubmitted(true)}}><div className="form-grid"><label>I'm contacting you about<select name="reason" defaultValue="property-management"><option value="property-management">Property management</option><option value="rental-analysis">Rental analysis</option><option value="leasing">Leasing / tenant placement</option><option value="available-rental">An available rental</option><option value="other">Something else</option></select></label><label>Full name<input required name="name" /></label><label>Email<input required name="email" type="email" /></label><label>Phone<input name="phone" type="tel" /></label><label className="full-span">Message<textarea required name="message" rows={7} /></label></div><button className="button button-dark" type="submit">Send inquiry</button></form>}</div></section>
    </main>
  );
}
