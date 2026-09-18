import Link from "next/link";

export default function PropertyManagementPage() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="wordmark" href="/">rentals</Link>
          <nav>
            <Link href="/rentals">Rentals</Link>
            <Link href="/rental-analysis">Rental analysis</Link>
            <Link className="button button-dark button-small" href="/contact">Talk with us</Link>
          </nav>
        </div>
      </header>

      <section className="owner-hero">
        <div className="container owner-hero-grid">
          <div>
            <p className="eyebrow">Property management</p>
            <h1>Own the property. We handle the work.</h1>
            <p className="owner-lede">Local property management for owners who want a reliable leasing, maintenance, rent collection, and reporting process without managing every detail themselves.</p>
            <div className="hero-actions">
              <Link className="button button-dark" href="/rental-analysis">Get a rental analysis</Link>
              <Link className="button button-outline" href="/contact">Request a consultation</Link>
            </div>
          </div>
          <div className="owner-hero-card">
            <span>Built for local owners</span>
            <strong>One process from vacancy to ongoing management.</strong>
            <p>We coordinate the work between property owners, renters, vendors, and the systems that keep a rental operating.</p>
          </div>
        </div>
      </section>

      <section className="owner-section">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">What we manage</p><h2>A single point of coordination.</h2></div></div>
          <div className="service-grid">
            {[
              ["Leasing & placement","Market the property, manage inquiries, coordinate showings, and move qualified applicants through the leasing process."],
              ["Maintenance coordination","Route maintenance requests, coordinate vendors, and keep owners informed about work that needs attention."],
              ["Rent collection","Keep rent collection organized and separate the operational work from the owner's day-to-day."],
              ["Owner communication","Clear updates when decisions, repairs, vacancies, or tenant issues require owner attention."],
              ["Reporting","Provide organized property information and financial reporting through the operating systems used to manage the property."],
              ["Renewals & move-outs","Coordinate the recurring steps around renewals, turnover, and preparing a property for its next tenant."]
            ].map(([title, copy]) => (
              <article className="service-card" key={title}><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="owner-band">
        <div className="container owner-band-grid">
          <div><p className="eyebrow">Start with the property</p><h2>Find out what your rental could support.</h2></div>
          <div><p>Tell us about the property and we'll use the information you provide to start the rental-analysis conversation.</p><Link className="text-link" href="/rental-analysis">Start rental analysis</Link></div>
        </div>
      </section>

      <section className="owner-section">
        <div className="container process-grid">
          <div><p className="eyebrow">The process</p><h2>From first conversation to active management.</h2></div>
          <ol className="process-list">
            <li><span>01</span><div><strong>Property review</strong><p>We learn about the property, current situation, and owner's goals.</p></div></li>
            <li><span>02</span><div><strong>Proposal</strong><p>We outline the management approach and pricing for the property.</p></div></li>
            <li><span>03</span><div><strong>Onboarding</strong><p>Property information, documents, access, and operating details are organized.</p></div></li>
            <li><span>04</span><div><strong>Management</strong><p>The property moves into the recurring leasing and management workflow.</p></div></li>
          </ol>
        </div>
      </section>
    </main>
  );
}
