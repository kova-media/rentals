import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <header className="site-header"><div className="container header-inner"><Link className="wordmark" href="/">rentals</Link><nav><Link href="/rentals">Rentals</Link><Link href="/property-management">Property management</Link><Link className="button button-dark button-small" href="/contact">Contact</Link></nav></div></header>
      <section className="owner-hero compact-hero"><div className="container"><p className="eyebrow">About</p><h1>Local rental management with a simple operating model.</h1><p className="owner-lede">The public website is the front door. The goal is to make rental search straightforward for renters and make property management easier to understand for owners.</p></div></section>
      <section className="owner-section"><div className="container about-grid"><div><p className="eyebrow">For renters</p><h2>Clear listings. One point of contact.</h2></div><p>Rental listings are standardized so renters can see the important information quickly. Public listings do not expose landlord phone numbers or email addresses. Interest, showing requests, and application handoffs stay inside the managed process.</p><div><p className="eyebrow">For owners</p><h2>A repeatable management process.</h2></div><p>Owners get a path from initial inquiry through property onboarding and ongoing management, with the operating systems handling the detailed property and lease work behind the scenes.</p></div></section>
      <section className="owner-band"><div className="container owner-band-grid"><div><p className="eyebrow">Local focus</p><h2>Pottawatomie County and northeast Kansas.</h2></div><div><p>Initial service areas include Wamego, St. George, St. Marys, Westmoreland, Manhattan, Topeka, and surrounding communities.</p><Link className="text-link" href="/areas">View areas served</Link></div></div></section>
    </main>
  );
}
