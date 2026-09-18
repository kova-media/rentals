import Link from "next/link";

export default function PricingPage() {
  return (
    <main>
      <header className="site-header"><div className="container header-inner"><Link className="wordmark" href="/">rentals</Link><nav><Link href="/rentals">Rentals</Link><Link href="/property-management">Property management</Link><Link className="button button-dark button-small" href="/contact">Talk with us</Link></nav></div></header>
      <section className="owner-hero compact-hero"><div className="container"><p className="eyebrow">Pricing</p><h1>Management pricing should be clear before you sign.</h1><p className="owner-lede">Management pricing depends on the property and service scope. We review the property first, then put the actual terms in writing.</p></div></section>
      <section className="owner-section"><div className="container pricing-layout"><div className="pricing-card"><p className="eyebrow">Management</p><h2>Property-specific proposal</h2><p>We don't publish a one-size-fits-all fee as though every property has the same workload. Your proposal should make the recurring management fee, leasing or placement charges, and other applicable costs clear.</p><ul><li>Management scope</li><li>Leasing / placement terms</li><li>Maintenance coordination</li><li>Renewal and turnover terms</li><li>Owner reporting</li></ul><Link className="button button-dark" href="/contact">Request pricing</Link></div><div className="pricing-notes"><div><h3>What happens first?</h3><p>Start with a property review or rental analysis. That gives us the information needed to discuss the right service scope.</p></div><div><h3>Want to compare options?</h3><p>Tell us whether you want full-service management, leasing only, vacancy help, or another arrangement.</p></div></div></div></section>
    </main>
  );
}
