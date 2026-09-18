export type ListingStatus = "draft" | "pending" | "active" | "paused" | "rented";
export type ApplicationStatus = "new" | "review" | "more_info" | "approved" | "declined";

export type RentalListing = {
  id: string;
  landlordId: string;
  title: string;
  city: string;
  state: string;
  zip: string;
  rent: number;
  bedrooms: number;
  bathrooms: number;
  propertyType: string;
  availableDate: string;
  leaseTerm: string;
  description: string;
  photoUrls: string[];
  status: ListingStatus;
  createdAt: string;
};

export type RentalApplication = {
  id: string;
  listingId: string;
  applicantName: string;
  applicantEmail: string;
  submittedAt: string;
  provider: "rentspree" | "placeholder";
  providerApplicationId?: string;
  status: ApplicationStatus;
};
