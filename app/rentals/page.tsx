const listings = [
  { city: "St. Marys, KS", price: "$1,250", beds: 2, baths: 1, type: "House", available: "Available now", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85" },
  { city: "Topeka, KS", price: "$1,450", beds: 3, baths: 2, type: "House", available: "Available Oct. 1", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85" },
  { city: "Manhattan, KS", price: "$1,100", beds: 2, baths: 1, type: "Apartment", available: "Available now", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85" }
];

export default function RentalsPage() {
  return (
    <main>
      <header className="site-header"><div className="container header-inner"><a className="wordmark" href="/">rentals</a><nav><a href="/">Home</a><a href="/landlord/signup">List a property</a><a className="button button-dark button-small" href="/signin">Sign In</a></nav></div></header>
      <section className="browse-section">
        <div className="container">
          <div className="section-header"><div><p className="eyebrow">Browse</p><h1 className="page-title">Available rentals</h1></div><span className="results-count">{listings.length} listings</span></div>
          <div className="listing-grid">
            {listings.map((listing) => <a className="listing-card" href="/rentals/example" key={listing.city}><div className="listing-image"><img src={listing.image} alt="" /></div><div className="listing-content"><div className="price">{listing.price}<span>/month</span></div><div className="details">{listing.beds} bed <span>·</span> {listing.baths} bath <span>·</span> {listing.type}</div><div className="city">{listing.city}</div><div className="available">{listing.available}</div></div></a>)}
          </div>
        </div>
      </section>
    </main>
  );
}
