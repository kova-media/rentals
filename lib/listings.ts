import type { RentalListing } from "./rental-types";

export const listings: RentalListing[] = [
  {
    id: "rental-001",
    landlordId: "landlord-001",
    title: "Updated 2-bedroom house",
    city: "St. Marys",
    state: "KS",
    zip: "66536",
    rent: 1250,
    bedrooms: 2,
    bathrooms: 1,
    propertyType: "House",
    availableDate: "2026-10-01",
    leaseTerm: "12 months",
    description: "Updated 2-bedroom house with a clean interior, off-street parking, and convenient access to town.",
    photoUrls: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85"],
    status: "active",
    createdAt: "2026-09-18T00:00:00.000Z"
  },
  {
    id: "rental-002",
    landlordId: "landlord-001",
    title: "Spacious 3-bedroom house",
    city: "Topeka",
    state: "KS",
    zip: "66603",
    rent: 1450,
    bedrooms: 3,
    bathrooms: 2,
    propertyType: "House",
    availableDate: "2026-10-01",
    leaseTerm: "12 months",
    description: "Spacious 3-bedroom home with two baths, a private yard, and an easy commute into town.",
    photoUrls: ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85"],
    status: "active",
    createdAt: "2026-09-18T00:00:00.000Z"
  }
];

export function getListingById(id: string) {
  return listings.find((listing) => listing.id === id);
}
