export default async function ApplyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <main>
      <header className="site-header"><div className="container header-inner"><a className="wordmark" href="/">rentals</a><nav><a href="/rentals">Back to rentals</a></nav></div></header>
      <section className="browse-section"><div className="container form-shell">
        <p className="eyebrow">Rental application</p>
        <h1 className="page-title">Apply for this rental.</h1>
        <p className="form-intro">Your application will be submitted to the landlord through our application provider. The landlord's direct contact information is not shared on this site.</p>
        <div className="application-provider-card"><strong>Application #{id}</strong><p>Continue to the secure application to provide your information for this property.</p><a className="button button-dark" href="#">Start application</a></div>
      </div></section>
    </main>
  );
}
