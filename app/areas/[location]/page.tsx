import Link from "next/link";

const areaData: Record<string, { name: string; description: string }> = {
  "pottawatomie-county": { name: "Pottawatomie County", description: "Property management and rental services across the local county market." },
  "st-george": { name: "St. George", description: "Rental and property-management support for owners and renters in St. George." },
  "st-marys": { name: "St. Marys", description: "Local rental listings, leasing support, and property-management services." },
  "westmoreland": { name: "Westmoreland", description: "Rental management and owner services in Westmoreland and nearby communities." },
  "manhattan-riley-county": { name: "Manhattan / Riley County", description: "Rental management support for owners with property in the Manhattan area." },
  "topeka-shawnee-county": { name: "Topeka / Shawnee County", description: "Leasing and management support for properties in the Topeka market." },
  "jackson-county": { name: "Jackson County", description: "Property-management and rental services for the surrounding Jackson County market." }
};

export default async function AreaPage({ params }: { params: Promise<{ location: string }> }) {
  const { location } = await params;
  const area = areaData[location];

  if (!area) {
    return (
      <main>
        <header className="site-header"><div className="container header-inner"><Link className="wordmark" href="/">rentals</Link><nav><Link href="/areas">Areas served</Link><Link className="button button-dark button-small" href="/contact">Contact</Link></nav></div></header>
        <section className="owner-section"><div className="container success-shell"><p className="eyebrow">Area not found</p><h1 className="page-title">That service area is not available.</h1><Link className="button button-dark" href="/areas">View areas served</Link></div></section>
      </main>
    );
  }

  return (
    <main>
      <header className="site-header"><div className="container header-inner"><Link className="wordmark" href="/">rentals</Link><nav><Link href="/rentals">Rentals</Link><Link href="/areas">Areas served</Link><Link className="button button-dark button-small" href="/contact">Contact</Link></nav></div></header>
      <section className="owner-hero compact-hero"><div className="container"><p className="eyebrow">{area.name}</p><h1>Property management and rental services in {area.name}.</h1><p className="owner-lede">{area.description} Start with the property or rental need and move into the right next step.</p><div className="hero-actions"><Link className="button button-dark" href="/rental-analysis">Get a rental analysis</Link><Link className="button button-outline" href="/rentals">View rentals</Link></div></div></section>
      <section className="owner-section"><div className="container area-content"><div><p className="eyebrow">Property owners</p><h2>Need a property managed?</h2><p>We can discuss leasing, tenant placement, vacancy assistance, or ongoing management based on the property and your goals.</p><Link className="text-link" href="/property-management">Property management services</Link></div><div><p className="eyebrow">Renters</p><h2>Looking for a rental?</h2><p>Browse available properties and use the renter interest process to request a showing or start the application handoff.</p><Link className="text-link" href="/rentals">Browse available rentals</Link></div></div></section>
      <section className="owner-band"><div className="container owner-band-grid"><div><p className="eyebrow">Next step</p><h2>Own a property in {area.name}?</h2></div><div><p>Start with the property's address and basic details.</p><Link className="button button-dark" href="/rental-analysis">Request rental analysis</Link></div></div></section>
    </main>
  );
}
