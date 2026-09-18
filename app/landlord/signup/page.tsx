export default function LandlordSignupPage() {
  return (
    <main>
      <header className="site-header"><div className="container header-inner"><a className="wordmark" href="/">rentals</a><nav><a href="/rentals">Browse rentals</a><a className="button button-dark button-small" href="/signin">Sign In</a></nav></div></header>
      <section className="browse-section"><div className="container form-shell"><p className="eyebrow">For landlords</p><h1 className="page-title">List a property</h1><p className="form-intro">Create an account to add and manage your rental listings.</p><form className="account-form"><label>Full name<input name="name" required /></label><label>Email<input name="email" type="email" required /></label><label>Password<input name="password" type="password" minLength={8} required /></label><button className="button button-dark" type="submit">Create landlord account</button></form></div></section>
    </main>
  );
}
