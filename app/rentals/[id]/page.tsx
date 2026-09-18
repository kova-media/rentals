import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getListingById } from "../../../lib/listings";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function RentalDetailPage({ params }: Props) {
  const { id } = await params;
  const listing = getListingById(id);

  if (!listing) {
    notFound();
  }

  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="wordmark" href="/">rentals</Link>
          <nav>
            <Link href="/rentals">Browse</Link>
            <Link href="/renter">My applications</Link>
            <Link className="button button-dark button-small" href="/property-management">For owners</Link>
          </nav>
        </div>
      </header>

      <section className="browse-section">
        <div className="container detail-page">
          <Link href="/rentals" className="back-link">← Back to rentals</Link>
          <div className="rental-detail-grid">
            <div className="detail-photo">
              <Image
                src={listing.photoUrls[0]}
                alt={listing.title}
                fill
                sizes="(max-width: 900px) 100vw, 60vw"
                priority
              />
            </div>
            <section className="detail-copy">
              <p className="detail-location">{listing.city}, {listing.state}</p>
              <h1>{listing.title}</h1>
              <p className="detail-price">{'$' + listing.rent.toLocaleString()} / month</p>
              <div className="detail-specs">
                <span>{listing.bedrooms} bedrooms</span>
                <span>{listing.bathrooms} bathroom{listing.bathrooms === 1 ? "" : "s"}</span>
                <span>{listing.propertyType}</span>
                <span>Available {listing.availableDate}</span>
              </div>
              <div className="detail-description">
                <h2>About this rental</h2>
                <p>{listing.description}</p>
              </div>
              <div className="application-cta">
                <div>
                  <strong>Interested in this property?</strong>
                  <p>Send a quick inquiry before starting a full application. Your interest is associated with this property so the next step can be handled through the managed process.</p>
                </div>
                <div className="detail-actions">
                  <Link href={"/rentals/" + listing.id + "/interest"} className="button button-dark">I'm interested</Link>
                  <Link href={"/apply/" + listing.id} className="button button-outline">Start application</Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}