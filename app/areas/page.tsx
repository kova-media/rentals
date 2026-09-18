import Link from "next/link";

const areas = [
  ["Pottawatomie County","Property management and rental services across the local county market."],
  ["Wamego","Local rental search and property-management services in Wamego, Kansas."],
  ["St. George","Rental and property-management support for owners and renters in St. George."],
  ["St. Marys","Local rental listings, leasing support, and property-management services."],
  ["Westmoreland","Rental management and owner services in Westmoreland and nearby communities."],
  ["Manhattan / Riley County","Rental management support for owners with property in the Manhattan area."],
  ["Topeka / Shawnee County","Leasing and management support for properties in the Topeka market."],
  ["Jackson County","Property-management and rental services for the surrounding Jackson County market."]
];

export default function AreasPage() {
  return (
    <main>
      <header className="site-header"><div className="container header-inner"><Link className="wordmark" href="/">rentals</Link><nav><Link href="/rentals">Rentals</Link><Link href="/property-management">Property management</Link><Link className="button button-dark button-small" href="/contact">Contact</Link></nav></div></header>
      <section className="owner-hero compact-hero"><div className="container"><p className="eyebrow">Areas served</p><h1>Local coverage, built around northeast Kansas.</h1><p className="owner-lede">We are building the service area around Pottawatomie County and nearby markets rather than treating every city page as a generic landing page.</p></div></section>
      <section className="owner-section"><div className="container area-grid">{areas.map(([name,copy])=><Link className="area-card" href={"/areas/"+name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")} key={name}><p className="eyebrow">Service area</p><h2>{name}</h2><p>{copy}</p><span>Explore area →</span></Link>)}</div></section>
      <section className="owner-band"><div className="container owner-band-grid"><div><p className="eyebrow">Own a rental here?</p><h2>Start with a property review.</h2></div><div><p>Tell us about the property and what you want handled.</p><Link className="button button-dark" href="/rental-analysis">Get a rental analysis</Link></div></div></section>
    </main>
  );
}
