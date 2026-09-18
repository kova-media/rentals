export default function NewListingPage() {
  return (
    <main>
      <header className="dashboard-header"><div className="container dashboard-header-inner"><a className="wordmark" href="/">rentals</a><div className="dashboard-user"><a href="/landlord">Dashboard</a></div></div></header>
      <section className="dashboard">
        <div className="container form-shell-wide">
          <p className="eyebrow">New listing</p>
          <h1 className="page-title">Add a property</h1>
          <p className="form-intro">Every listing uses the same format so renters can compare properties quickly.</p>

          <form className="listing-form">
            <div className="form-section"><h2>Property</h2><div className="form-grid"><label>Property address<input required /></label><label>City<input required /></label><label>State<input required /></label><label>ZIP code<input required /></label><label>Monthly rent<input type="number" min="0" required /></label><label>Property type<select defaultValue=""><option value="" disabled>Select</option><option>House</option><option>Apartment</option><option>Townhouse</option><option>Condo</option><option>Duplex</option></select></label><label>Bedrooms<input type="number" min="0" required /></label><label>Bathrooms<input type="number" min="0" step=".5" required /></label></div></div>

            <div className="form-section"><h2>Photos</h2><p>Upload 3 to 5 photos. The first photo becomes the listing thumbnail.</p><div className="upload-box">Drop photos here or choose files</div></div>

            <div className="form-section"><h2>Description</h2><p>Maximum 100 words.</p><textarea rows={7} maxLength={700} placeholder="Tell renters what they need to know about the property." /></div>

            <div className="form-section"><h2>Availability</h2><div className="form-grid"><label>Available date<input type="date" required /></label><label>Lease term<select defaultValue=""><option value="" disabled>Select</option><option>Month to month</option><option>6 months</option><option>12 months</option><option>18 months</option></select></label></div></div>

            <button className="button button-dark" type="submit">Save listing</button>
          </form>
        </div>
      </section>
    </main>
  );
}
