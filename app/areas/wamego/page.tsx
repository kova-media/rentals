import Link from "next/link";

export default function WamegoAreaPage() {
  return (
    <main>
      <header className="site-header"><div className="container header-inner"><Link className="wordmark" href="/">rentals</Link><nav><Link href="/rentals">Rentals</Link><Link href="/areas">Areas served</Link><Link className="button button-dark button-small" href="/contact">Contact</Link></nav></div></header>
      <section className="owner-hero compact-hero"><div className="container"><p className="eyebrow">Wamego, Kansas</p><h1>Property management and rental services in Wamego.</h1><p className="owner-lede">A local page for owners and renters looking for rental-property services in Wamego and the surrounding area.</p><div className="hero-actions"><Link className="button button-dark" href="/rental-analysis">Own a property in Wamego?</Link><Link className="button button-outline" href="/rentals?location=Wamego">View Wamego rentals</Link></div></div></section>
      <section className="owner-section"><div className="container area-content"><div><p className="eyebrow">For owners</p><h2>Leasing, management, and vacancy support.</h2><p>Use the rental-analysis process to start a property conversation, or contact us if you already know the service you need.</p><Link className="text-link" href="/property-management">See property management</Link></div><div><p className="eyebrow">For renters</p><h2>Search available rentals.</h2><p>Browse standardized listings and use the property interest process to get into the next step without publishing a landlord's direct contact information.</p><Link className="text-link" href="/rentals?location=Wamego">Browse rentals</Link></div></div></section>
    </main>
  );
}
