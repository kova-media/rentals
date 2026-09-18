const applications = [
  { applicant: "Jordan Miller", property: "2 Bed House", city: "St. Marys, KS", received: "Today", status: "New" },
  { applicant: "Taylor Reed", property: "3 Bed House", city: "Topeka, KS", received: "Yesterday", status: "Review" },
  { applicant: "Morgan Lee", property: "2 Bed Apartment", city: "Manhattan, KS", received: "Sep. 15", status: "Approved" }
];

export default function LandlordDashboard() {
  return (
    <main>
      <header className="dashboard-header"><div className="container dashboard-header-inner"><a className="wordmark" href="/">rentals</a><div className="dashboard-user"><span>Landlord</span><a href="/signin">Sign out</a></div></div></header>
      <section className="dashboard">
        <div className="container">
          <div className="dashboard-title"><div><p className="eyebrow">Landlord dashboard</p><h1 className="page-title">Your rentals</h1></div><a className="button button-dark" href="/landlord/listings/new">Add a property</a></div>

          <div className="dashboard-stats">
            <div><span>Active listings</span><strong>3</strong></div>
            <div><span>New applications</span><strong>1</strong></div>
            <div><span>Applications in review</span><strong>1</strong></div>
          </div>

          <section className="dashboard-section">
            <div className="section-header"><div><p className="eyebrow">Applications</p><h2>Applicant activity</h2></div></div>
            <div className="application-list">
              {applications.map((application) => (
                <a className="application-row" href="/landlord/applications/example" key={application.applicant}>
                  <div className="application-main"><strong>{application.applicant}</strong><span>{application.property} · {application.city}</span></div>
                  <span className="application-date">{application.received}</span>
                  <span className={`status status-${application.status.toLowerCase()}`}>{application.status}</span>
                  <span className="row-arrow">View</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
