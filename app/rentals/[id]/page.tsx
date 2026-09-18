import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getListingById } from "@/lib/listings";

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
    <main className="site-shell">
      <header className="site-header">
        <Link href="/" className="brand">rentals</Link>
        <nav className="site-nav">
          <Link href="/rentals">Browse rentals</Link>
          <Link href="/renter">My applications</Link>
          <Link href="/landlord">For landlords</Link>
        </nav>
      </header>

      <div className="detail-page">
        <Link href="/rentals" className="back-link">← Back to rentals</Link>
        <div className="rental-detail-grid">
          <div className="detail-photo">
            <Image src={listing.photoUrls[0]} alt={listing.title} fill sizes="(max-width: 900px) 100vw, 60vw" priority />
          </div>
          <section className="detail-copy">
            <p className="detail-location">{listing.city}, {listing.state}</p>
            <h1>{listing.title}</h1>
            <p className="detail-price">${listing.rent.toLocaleString()} / month</p>
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
                <strong>Ready to apply?</strong>
                <p>Apply through the secure application process. The landlord's contact information is not published on the listing.</p>
              </div>
              <Link href={"/apply/" + listing.id} className="button">Apply for this rental</Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
