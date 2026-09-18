const applicant = { name: "Jordan Miller", property: "123 Main Street", city: "St. Marys, KS", submitted: "September 18, 2026", status: "New" };

export default function ApplicationDetail() {
  return (
    <main>
      <header className="dashboard-header"><div className="container dashboard-header-inner"><a className="wordmark" href="/">rentals</a><div className="dashboard-user"><a href="/landlord">Dashboard</a></div></div></header>
      <section className="dashboard">
        <div className="container form-shell-wide">
          <a className="back-link" href="/landlord">← Back to applications</a>
          <div className="application-detail-head"><div><p className="eyebrow">Application</p><h1 className="page-title">{applicant.name}</h1><p>{applicant.property} · {applicant.city}</p></div><span className="status status-new">{applicant.status}</span></div>

          <div className="application-notice"><strong>Application provider</strong><p>Tenant applications and screening are handled through the connected application provider. This dashboard keeps the landlord's workflow and decision status in one place.</p><a className="text-link" href="#">Open application</a></div>

          <div className="decision-panel"><h2>Decision</h2><p>Record what you want to do with this application.</p><div className="decision-actions"><button className="button button-dark">Approve applicant</button><button className="button button-outline">Request more information</button><button className="button button-light-danger">Decline application</button></div></div>
        </div>
      </section>
    </main>
  );
}
