"use client";

import { useState } from "react";
import Link from "next/link";

export default function RentalAnalysisPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <main>
        <header className="site-header"><div className="container header-inner"><Link className="wordmark" href="/">rentals</Link><nav><Link href="/rentals">Rentals</Link><Link href="/property-management">Property management</Link></nav></div></header>
        <section className="owner-section"><div className="container success-shell"><p className="eyebrow">Rental analysis</p><h1 className="page-title">Property details received.</h1><p className="success-copy">Your information has been captured for the rental-analysis conversation. The next step is a property review and follow-up.</p><Link className="button button-dark" href="/">Return home</Link></div></section>
      </main>
    );
  }

  return (
    <main>
      <header className="site-header"><div className="container header-inner"><Link className="wordmark" href="/">rentals</Link><nav><Link href="/rentals">Rentals</Link><Link href="/property-management">Property management</Link><Link className="button button-dark button-small" href="/contact">Contact</Link></nav></div></header>
      <section className="owner-hero compact-hero"><div className="container"><p className="eyebrow">Rental analysis</p><h1>What could your property rent for?</h1><p className="owner-lede">Give us the basics. We'll use the information to start a conversation about the property's rental position and management options.</p></div></section>
      <section className="owner-section"><div className="container form-shell-wide"><form className="owner-form" onSubmit={(e)=>{e.preventDefault();setSubmitted(true)}}><div className="form-section"><h2>Property</h2><div className="form-grid"><label>Property address<input required name="address" /></label><label>City<input required name="city" /></label><label>ZIP code<input required name="zip" inputMode="numeric" /></label><label>Property type<select name="type" defaultValue=""><option value="" disabled>Select one</option><option>House</option><option>Apartment</option><option>Townhouse</option><option>Condo</option><option>Duplex</option><option>Other</option></select></label><label>Bedrooms<input required name="bedrooms" type="number" min="0" /></label><label>Bathrooms<input required name="bathrooms" type="number" min="0" step=".5" /></label></div></div><div className="form-section"><h2>Current situation</h2><div className="form-grid"><label>Current monthly rent<input name="rent" type="number" min="0" /></label><label>Target move-in / availability<input name="available" type="date" /></label><label className="full-span">Anything we should know?<textarea name="notes" rows={5} /></label></div></div><div className="form-section"><h2>Your information</h2><div className="form-grid"><label>Full name<input required name="name" /></label><label>Email<input required name="email" type="email" /></label><label>Phone<input required name="phone" type="tel" /></label></div></div><button className="button button-dark" type="submit">Request rental analysis</button></form></div></section>
    </main>
  );
}
