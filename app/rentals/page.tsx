import Link from "next/link";
import { listings } from "../../lib/listings";

export default function RentalsPage() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="wordmark" href="/">rentals</Link>
          <nav>
            <Link href="/rentals">Browse</Link>
            <Link href="/renter">My applications</Link>
            <Link className="button button-dark button-small" href="/landlord">Landlords</Link>
          </nav>
        </div>
      </header>
      <section className="browse-section">
        <div className="container">
          <div className="section-header">
            <div><p className="eyebrow">Find a place</p><h1 className="page-title">Available rentals</h1></div>
            <span className="results-count">{listings.length} listings</span>
          </div>
          <form className="renter-filters" action="/rentals">
            <input name="location" placeholder="City or ZIP code" aria-label="City or ZIP code" />
            <select name="propertyType" defaultValue="">
              <option value="">Property type</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Townhouse</option>
              <option>Condo</option>
            </select>
            <select name="beds" defaultValue="">
              <option value="">Bedrooms</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
            </select>
            <button className="button button-dark" type="submit">Filter</button>
          </form>
          <div className="listing-grid">
            {listings.map((listing) => (
              <Link className="listing-card" href={'/rentals/' + listing.id} key={listing.id}>
                <div className="listing-image"><img src={listing.photoUrls[0]} alt={listing.title} /></div>
                <div className="listing-content">
                  <div className="price">{'$' + listing.rent.toLocaleString()}<span>/month</span></div>
                  <div className="details">{listing.bedrooms} bed <span>·</span> {listing.bathrooms} bath <span>·</span> {listing.propertyType}</div>
                  <div className="city">{listing.city}, {listing.state}</div>
                  <div className="available">Available {listing.availableDate}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
