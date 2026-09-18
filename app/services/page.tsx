import Link from "next/link";

const services = [
  ["Leasing & tenant placement","Get a vacant property marketed, shown, and moved through the application process."],
  ["Full-service management","Hand off the recurring work of managing a rental while staying informed about the property."],
  ["Vacancy assistance","Need help with one vacancy rather than ongoing management? Start with the property and the problem."],
  ["Rental analysis","Understand the rental position of a property before deciding what to do next."],
  ["Maintenance coordination","Keep maintenance requests and vendor coordination organized."],
  ["Renewals & turnover","Coordinate the recurring work around renewals, move-outs, and preparing for the next tenant."]
];

export default function ServicesPage() {
  return (
    <main>
      <header className="site-header"><div className="container header-inner"><Link className="wordmark" href="/">rentals</Link><nav><Link href="/rentals">Rentals</Link><Link href="/property-management">Property management</Link><Link className="button button-dark button-small" href="/contact">Contact</Link></nav></div></header>
      <section className="owner-hero compact-hero"><div className="container"><p className="eyebrow">Services</p><h1>Property management built around the work owners actually need handled.</h1><p className="owner-lede">Use one service or build a longer-term management relationship. The starting point is the property, not a generic package.</p></div></section>
      <section className="owner-section"><div className="container"><div className="service-grid service-grid-wide">{services.map(([title,copy])=><article className="service-card service-card-large" key={title}><h2>{title}</h2><p>{copy}</p><Link className="text-link" href="/contact">Talk about this service</Link></article>)}</div></div></section>
      <section className="owner-band"><div className="container owner-band-grid"><div><p className="eyebrow">Not sure what you need?</p><h2>Start with a rental analysis.</h2></div><div><p>Give us the property details and we'll start the conversation from there.</p><Link className="button button-dark" href="/rental-analysis">Get a rental analysis</Link></div></div></section>
    </main>
  );
}
