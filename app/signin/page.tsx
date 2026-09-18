export default function SignInPage() {
  return (
    <main>
      <header className="site-header"><div className="container header-inner"><a className="wordmark" href="/">rentals</a><nav><a href="/rentals">Browse rentals</a><a href="/landlord/signup">List a property</a></nav></div></header>
      <section className="browse-section"><div className="container form-shell"><p className="eyebrow">Landlord account</p><h1 className="page-title">Sign in</h1><form className="account-form"><label>Email<input name="email" type="email" required /></label><label>Password<input name="password" type="password" required /></label><button className="button button-dark" type="submit">Sign in</button></form></div></section>
    </main>
  );
}
