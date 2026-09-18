import Link from "next/link";

export default function RenterPage() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="wordmark" href="/">rentals</Link>
          <nav>
            <Link href="/rentals">Browse rentals</Link>
            <Link className="button button-dark button-small" href="/signin">Sign in</Link>
          </nav>
        </div>
      </header>
      <section className="browse-section">
        <div className="container renter-dashboard">
          <p className="eyebrow">Renter account</p>
          <h1 className="page-title">My applications</h1>
          <p className="renter-intro">Track applications you have submitted and see when a landlord has made a decision.</p>
          <div className="renter-empty">
            <strong>No applications yet.</strong>
            <p>Browse available rentals and apply when you find the right property.</p>
            <Link className="button button-dark" href="/rentals">Browse rentals</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
