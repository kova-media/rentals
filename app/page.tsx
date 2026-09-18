const listings = [
  { city: "St. Marys, KS", price: "$1,250", beds: 2, baths: 1, type: "House", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85" },
  { city: "Topeka, KS", price: "$1,450", beds: 3, baths: 2, type: "House", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85" },
  { city: "Manhattan, KS", price: "$1,100", beds: 2, baths: 1, type: "Apartment", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85" }
];

export default function Home() {
  return (
    <main>
      <header className="site-header"><div className="container header-inner"><a className="wordmark" href="/">rentals</a><nav><a href="#browse">Browse</a><a href="#landlords">For Landlords</a><a className="button button-dark button-small" href="/signin">Sign In</a></nav></div></header>
      <section className="hero"><div className="container hero-inner"><div className="hero-copy"><p className="eyebrow">Rentals, simplified</p><h1>Find a rental.<br />Skip the clutter.</h1><p className="lede">Straightforward listings with the information that actually matters.</p></div><form className="search-panel" action="/rentals"><label htmlFor="location">Where do you want to live?</label><div className="search-row"><input id="location" name="location" placeholder="City or ZIP code" /><button className="button button-dark" type="submit">Search rentals</button></div></form></div></section>
      <section className="browse-section" id="browse"><div className="container"><div className="section-header"><div><p className="eyebrow">Available now</p><h2>Latest rentals</h2></div><a className="text-link" href="/rentals">View all rentals</a></div><div className="listing-grid">{listings.map((listing) => <a className="listing-card" href="/rentals/example" key={listing.city}><div className="listing-image"><img src={listing.image} alt="" /></div><div className="listing-content"><div className="price">{listing.price}<span>/month</span></div><div className="details">{listing.beds} bed <span>·</span> {listing.baths} bath <span>·</span> {listing.type}</div><div className="city">{listing.city}</div></div></a>)}</div></div></section>
      <section className="landlord-section" id="landlords"><div className="container landlord-panel"><div><p className="eyebrow">For landlords</p><h2>List your property without building a listing.</h2><p className="landlord-copy">You provide the details. We keep every rental clean, consistent, and easy to compare.</p></div><a className="button button-dark" href="/landlord/signup">List a property</a></div></section>
      <footer><div className="container footer-inner"><span className="wordmark">rentals</span><span>Simple listings. Clear information.</span></div></footer>
    </main>
  );
}
