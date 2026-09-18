"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function RentalInterestPage() {
  const params = useParams<{ id: string }>();
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <main>
        <header className="site-header"><div className="container header-inner"><Link className="wordmark" href="/">rentals</Link><nav><Link href="/rentals">Browse rentals</Link><Link href="/renter">My applications</Link></nav></div></header>
        <section className="owner-section"><div className="container success-shell"><p className="eyebrow">Rental interest</p><h1 className="page-title">Interest received.</h1><p className="success-copy">Your inquiry for property {params.id} has been captured. The next step is follow-up about the rental and showing or application process.</p><div className="success-actions"><Link className="button button-dark" href="/rentals">Browse more rentals</Link><Link className="button button-outline" href="/renter">My applications</Link></div></div></section>
      </main>
    );
  }

  return (
    <main>
      <header className="site-header"><div className="container header-inner"><Link className="wordmark" href="/">rentals</Link><nav><Link href="/rentals">Back to rentals</Link><Link href="/renter">My applications</Link></nav></div></header>
      <section className="owner-section"><div className="container form-shell-wide"><p className="eyebrow">Rental interest</p><h1 className="page-title">Tell us you're interested.</h1><p className="form-intro">This is a quick lead form, not a rental application. Your information is associated with the property so the next step can happen without publishing the landlord's direct contact information.</p>
      <form className="owner-form" onSubmit={(e)=>{e.preventDefault();setSubmitted(true)}}>
        <div className="form-section"><h2>About you</h2><div className="form-grid"><label>Full name<input required name="name" /></label><label>Email<input required name="email" type="email" /></label><label>Phone<input required name="phone" type="tel" /></label><label>Preferred contact<select name="contact" defaultValue="email"><option value="email">Email</option><option value="phone">Phone</option><option value="text">Text</option></select></label></div></div>
        <div className="form-section"><h2>What you're looking for</h2><div className="form-grid"><label>Desired move-in date<input name="moveIn" type="date" /></label><label>Bedrooms<input name="bedrooms" type="number" min="0" /></label><label>Budget<input name="budget" type="number" min="0" placeholder="Monthly budget" /></label><label>Area<input name="area" placeholder="City or area" /></label><label className="full-span">Message / notes<textarea name="message" rows={6} /></label></div></div>
        <div className="form-section"><h2>Property</h2><p>Property of interest: <strong>{params.id}</strong></p></div>
        <button className="button button-dark" type="submit">Submit rental interest</button>
      </form></div></section>
    </main>
  );
}
