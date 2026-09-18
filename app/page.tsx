import Link from "next/link";
import { listings } from "../lib/listings";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="wordmark" href="/">rentals</Link>
          <nav>
            <Link href="/rentals">Browse</Link>
            <Link href="/renter">My applications</Link>
            <Link href="/landlord">For landlords</Link>
          </nav>
        </div>
      </header>

      <section className="renter-hero">
        <div className="container">
          <p className="eyebrow">Rental search</p>
          <h1>Find a place without the usual mess.</h1>
          <p className="lede">Simple listings, clear pricing, and one place to apply and track your application.</p>
          <form className="renter-search" action="/rentals">
            <input name="location" placeholder="City or ZIP code" aria-label="City or ZIP code" />
            <select name="beds" defaultValue="">
              <option value="">Any bedrooms</option>
              <option value="1">1+ bedrooms</option>
              <option value="2">2+ bedrooms</option>
              <option value="3">3+ bedrooms</option>
            </select>
            <button className="button button-dark" type="submit">Search rentals</button>
          </form>
        </div>
      </section>

      <section className="browse-section">
        <div className="container">
          <div className="section-header">
            <div><p className="eyebrow">Latest listings</p><h2>Available now</h2></div>
            <Link className="text-link" href="/rentals">See all rentals</Link>
          </div>
          <div className="listing-grid">
            {listings.slice(0, 3).map((listing) => (
              <Link className="listing-card" href={"/rentals/" + listing.id} key={listing.id}>
                <div className="listing-image"><img src={listing.photoUrls[0]} alt={listing.title} /></div>
                <div className="listing-content">
                  <div className="price">{'$' + listing.rent.toLocaleString()}<span>/month</span></div>
                  <div className="details">{listing.bedrooms} bed <span>·</span> {listing.bathrooms} bath <span>·</span> {listing.propertyType}</div>
                  <div className="city">{listing.city}, {listing.state}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="container trust-grid">
          <div><p className="eyebrow">One process</p><h2>Apply without chasing landlords.</h2></div>
          <div><p>Browse a property, start the application, and track what happens next from your renter account. Landlord contact information is kept private.</p><Link className="text-link" href="/rentals">Start browsing</Link></div>
        </div>
      </section>

      <section className="landlord-section">
        <div className="container landlord-panel">
          <div><p className="eyebrow">For landlords</p><h2>List a property and manage applications in one place.</h2></div>
          <Link className="button button-dark" href="/landlord">Landlord dashboard</Link>
        </div>
      </section>
    </main>
  );
}
