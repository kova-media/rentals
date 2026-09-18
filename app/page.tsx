const listings = [
  {
    city: "St. Marys, KS",
    price: "$1,250",
    beds: "2",
    baths: "1",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
  },
  {
    city: "Topeka, KS",
    price: "$1,450",
    beds: "3",
    baths: "2",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
  },
  {
    city: "Manhattan, KS",
    price: "$1,100",
    beds: "2",
    baths: "1",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85"
  }
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="/">rentals</a>
          <nav>
            <a href="#listings">Browse Rentals</a>
            <a href="#landlords">List a Property</a>
            <a className="button button-dark" href="#signin">Sign In</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <p className="eyebrow">Simple rental listings</p>
          <h1>Find a place without the clutter.</h1>
          <p className="hero-copy">
            Clean, standardized rental listings from landlords in your area.
          </p>
          <div className="search-bar">
            <input aria-label="Search by city" placeholder="City or ZIP code" />
            <button className="button button-dark">Search</button>
          </div>
        </div>
      </section>

      <section className="listings-section" id="listings">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Available rentals</p>
              <h2>Browse listings</h2>
            </div>
            <p className="results-count">3 listings</p>
          </div>

          <div className="listing-grid">
            {listings.map((listing) => (
              <article className="listing-card" key={listing.city}>
                <div className="listing-image">
                  <img src={listing.image} alt="" />
                </div>
                <div className="listing-content">
                  <div className="listing-topline">
                    <strong>{listing.price}<span>/mo</span></strong>
                    <span>{listing.city}</span>
                  </div>
                  <p>{listing.beds} bed · {listing.baths} bath</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="landlord-section" id="landlords">
        <div className="container landlord-inner">
          <div>
            <p className="eyebrow">For landlords</p>
            <h2>List your rental. We keep it simple.</h2>
          </div>
          <p>
            Every property follows the same clean format, with controlled photo
            counts and concise descriptions.
          </p>
          <a className="button button-dark" href="#signup">List a Property</a>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <span>rentals</span>
          <span>Simple listings. Clear information.</span>
        </div>
      </footer>
    </main>
  );
}
