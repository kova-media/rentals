import Link from "next/link";

export default function RenterApplicationPage() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="wordmark" href="/">rentals</Link>
          <nav>
            <Link href="/renter">My applications</Link>
            <Link href="/rentals">Browse rentals</Link>
          </nav>
        </div>
      </header>
      <section className="browse-section">
        <div className="container form-shell-wide">
          <Link className="back-link" href="/renter">← Back to applications</Link>
          <div className="application-detail-head">
            <div>
              <p className="eyebrow">Application</p>
              <h1 className="page-title">Updated 2-bedroom house</h1>
              <p>St. Marys, KS · Application submitted</p>
            </div>
            <span className="status status-review">Under review</span>
          </div>
          <div className="application-timeline">
            <div className="timeline-step is-complete"><span className="timeline-dot" /><div><strong>Application submitted</strong><p>Your application was received.</p></div></div>
            <div className="timeline-step is-active"><span className="timeline-dot" /><div><strong>Landlord review</strong><p>The landlord is reviewing your application.</p></div></div>
            <div className="timeline-step"><span className="timeline-dot" /><div><strong>Decision</strong><p>We will show the decision here when it is made.</p></div></div>
          </div>
          <div className="application-notice">
            <strong>Application details stay private.</strong>
            <p>Sensitive application and screening information is handled through the application provider. This account only shows status and next steps.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
