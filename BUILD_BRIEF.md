# Rental Property Management Platform: Build Brief

## Core business objective

Build a local rental-property website that supports a growing property-management business in Pottawatomie County, Kansas and surrounding northeast Kansas counties.

The rental website is **not the business itself**. Its main purpose is to attract people looking for rentals, give them a useful public-facing experience, and convert them into identifiable leads that enter the CRM.

The core funnel is:

**Rental search → Property interest → Lead capture form → CRM → Follow-up → Showing / application / leasing**

The long-term business is property management. The site should support onboarding and managing hundreds of landlord-owned units over time.

The broader operating architecture is:

**Public website → Landlord/lead CRM → Property-management system → Accounting → Communications → Reporting**

The PMS should remain the operational source of truth. fileciteturn46file0L11-L17

## Two audiences

### Renters

The renter experience should let people:

- Search available rentals
- View standardized listings
- See rent, city, bedrooms, bathrooms, property type and availability
- View property details
- Express interest
- Request a showing
- Start an application
- Receive next-step information

Most importantly, renter activity should create a CRM contact.

Do not expose landlord phone numbers or email addresses on public listings.

The platform should act as the intermediary between renter and landlord.

### Property owners / landlords

The owner side is the higher-value acquisition funnel.

The site should generate leads for:

- Full-service property management
- Leasing and tenant placement
- Rental analysis
- Vacancy assistance
- Ongoing management
- Management consultations

The owner funnel should be:

**Prospective landlord → lead → qualification → consultation → proposal → agreement → property onboarding → active client**

The planning document identifies this landlord pipeline as the growth engine. fileciteturn46file0L101-L121

## Important strategic rule

Do **not** build a Zillow clone.

Do **not** optimize the site primarily for page views or listing volume.

The renter-facing website exists to generate:

**Renter leads**

and to support the larger property-management operation.

The primary business KPIs should eventually include:

- Renter leads generated
- Landlord leads generated
- Consultations booked
- Properties onboarded
- Managed units
- Recurring management revenue

## Renter funnel

Build the renter journey around:

**Search rentals**

↓

**Listing results**

↓

**Property detail**

↓

**Interested / Request showing / Apply**

↓

**Renter lead form**

↓

**CRM**

↓

**Automated follow-up**

↓

**Application / showing / leasing workflow**

The original planning document described the broader renter workflow as search → property page → showing → application → screening → lease. fileciteturn46file0L127-L147

The important additional requirement for this site is that the renter should become a CRM contact before moving into an external application or screening process.

## Renter lead form

Create a simple lead-generation form rather than forcing visitors into a full rental application just to contact the business.

Recommended fields:

- Full name
- Email
- Phone
- Desired city / area
- Desired move-in date
- Desired bedroom count
- Budget range
- Property of interest
- Message / notes
- Preferred contact method

When the form comes from a property page, automatically associate that property with the lead.

CRM attribution should capture:

- Lead type: renter
- Source
- Campaign
- Specific property
- Geographic interest
- Submission date
- Lead status
- Notes
- Follow-up state

Duplicate submissions should update the existing CRM contact where appropriate instead of blindly creating duplicate records.

## Listing system

Listings must be tightly standardized.

Required fields:

- Title
- City
- State
- ZIP
- Monthly rent
- Bedrooms
- Bathrooms
- Property type
- Available date
- Lease term
- Description
- Photos
- Listing status

The system should enforce listing standards both in the interface and server-side.

### Listing constraints

Implement:

- Fixed maximum number of photos
- Required photo types / ordering
- Standard image presentation
- Strict description word limit
- Required core property fields
- Consistent listing-card layout
- Consistent property-detail layout
- No public landlord contact information

The exact numeric limits can be finalized during implementation, but they must be enforced rather than treated as suggestions.

## Property pages

Every rental property should have:

- Primary property image
- Property title
- City / state
- Monthly rent
- Bedrooms
- Bathrooms
- Property type
- Available date
- Lease term
- Short controlled description
- Primary conversion CTA
- Renter lead form or prominent lead-capture CTA
- Showing request CTA
- Application CTA

The main conversion goal is the renter lead.

Do not bury the lead form behind several navigation steps.

## Landlord acquisition funnel

Create a completely separate owner acquisition experience.

Core pages:

### Property Management

Explain:

- What is managed
- What owners receive
- Leasing / tenant placement
- Maintenance coordination
- Rent collection
- Owner communication
- Reporting
- Renewals and move-outs

### Pricing

Clearly explain the management pricing model and what is included.

### Rental Analysis

Create a high-conversion page around:

**What could my property rent for?**

This should be one of the main lead magnets.

### Consultation

Create a clear path to:

- Request a consultation
- Submit property information
- Enter the CRM
- Schedule a meeting

### Areas Served

Build local SEO landing pages for the initial market, including:

- Pottawatomie County
- Wamego
- St. George
- St. Marys
- Westmoreland
- Manhattan / Riley County
- Topeka / Shawnee County
- Jackson County

The planning document specifically proposed location-specific market pages as part of the growth strategy. fileciteturn46file0L179-L211

## Landlord acquisition CRM

The CRM should be built primarily around the owner-sales pipeline:

**New Lead → Contacted → Qualified → Appointment → Proposal Sent → Agreement Sent → Signed → Property Onboarding → Active Client**

Track:

- Lead source
- Contact history
- Next follow-up
- Appointment
- Properties represented
- Estimated units
- Projected management revenue
- Conversion rate
- Lost reason
- Referral source

This is separate from renter lifecycle data.

## CRM is not the property database

Treat these systems differently:

**CRM = prospect / lead relationship source**

**PMS = property / tenant / lease / maintenance / operational source**

**Accounting = financial source of truth**

**Website = acquisition and presentation layer**

Do not turn the website into a second PMS.

Do not require staff to re-enter the same landlord, property, tenant and lease information in multiple systems.

The planning document explicitly warns against disconnected software that creates duplicate manual work. fileciteturn46file0L11-L17

## Application and screening

Do not build sensitive tenant screening from scratch.

The website should handle:

- Lead capture
- Property selection
- Interest
- Showing requests
- Application handoff
- Status communication

Sensitive screening and application data should stay with a dedicated provider such as RentSpree or the eventual PMS where practical.

RentSpree is the current software in use, but the larger plan recommends evaluating a more substantial PMS before scaling to hundreds of third-party landlord accounts. fileciteturn46file0L21-L47

Do not permanently couple the website to one provider.

Create a replaceable integration boundary.

## Software direction

The original evaluation included:

- RentSpree
- DoorLoop
- Buildium
- AppFolio
- Rent Manager

The planning document identified Buildium and DoorLoop as the main platforms worth evaluating for the current growth stage, with AppFolio positioned more as a future-state option once scale justifies it. fileciteturn46file0L49-L85

The website should support a PMS abstraction layer so the underlying PMS can change without rebuilding the public experience.

## Website structure

At minimum:

- /
- /rentals
- /rentals/[id]
- /rentals/[id]/interest
- /apply/[id]
- /renter
- /property-management
- /services
- /pricing
- /rental-analysis
- /areas
- /areas/[location]
- /about
- /contact

The website should have clear navigation separating renter needs from owner needs.

## Landlord operational workflow

The intended owner process is:

**Website inquiry**

↓

**CRM**

↓

**Automated email/text response**

↓

**Consultation**

↓

**Management proposal**

↓

**Electronic management agreement**

↓

**Owner onboarding**

↓

**PMS**

↓

**Accounting setup**

↓

**Listing**

↓

**Tenant placement**

↓

**Monthly management**

This is the broader operating workflow described in the planning document. fileciteturn46file0L213-L265

## Renter operational workflow

The intended renter process is:

**Website/listing**

↓

**Showing request**

↓

**Lead captured in CRM**

↓

**Application**

↓

**Screening**

↓

**Approval**

↓

**Lease / e-signature**

↓

**Deposit + rent**

↓

**Resident portal**

↓

**Maintenance**

↓

**Renewal / move-out**

## Technical architecture

Preferred direction:

- Next.js
- TypeScript
- Structured relational database when persistence is introduced
- Server-side route handlers / APIs
- Secure authentication
- CRM API integration
- PMS API integration
- Email / SMS integration
- Webhooks
- Analytics
- Image storage
- Structured listing data
- SEO-friendly rendering

Build for scalability but avoid overengineering before the lead-generation funnel is proven.

## CRM integration requirements

Forms should send data directly to the CRM.

Do not use email notifications as the primary lead-management mechanism.

Every lead should create or update a CRM contact and associate:

- Lead type
- Source
- Campaign
- Property of interest
- Geographic interest
- Submission date
- Status
- Notes
- Follow-up state

The system should be designed around API and webhook integrations.

## Automation

### Renter

A basic automation sequence could be:

1. Lead submits property interest
2. Immediate confirmation
3. Property-specific follow-up
4. Showing scheduling prompt
5. Application instructions
6. Follow-up if no application
7. Status communication

### Landlord

A basic sequence could be:

1. Rental analysis / consultation request
2. Immediate confirmation
3. Qualification follow-up
4. Consultation scheduling
5. Proposal follow-up
6. Agreement follow-up
7. Onboarding reminders

The CRM should control these workflows as much as practical.

## Analytics

### Renter metrics

Track:

- Rental page views
- Search usage
- Property views
- Interest form submissions
- Showing requests
- Application starts
- Applications completed
- Lead-to-application rate
- Source attribution

### Landlord metrics

Track:

- Property-management page views
- Rental-analysis page views
- Form starts
- Form completions
- Consultation bookings
- Proposals
- Signed agreements
- Properties onboarded
- Revenue by source

The goal is to know which marketing channels produce actual managed properties.

## SEO

This is a local business.

Build pages around geographic search intent, such as:

- Property management Wamego KS
- Property manager Pottawatomie County KS
- Rental management Manhattan KS
- Property management St. Marys KS
- Rental property manager Topeka KS
- Rental management Westmoreland KS
- Rent a house in Wamego KS

Do not create thin duplicate city pages.

Each area page should contain genuinely useful local information and a strong owner conversion CTA.

## Design direction

The public site should feel like a professional local property-management company, not a generic SaaS product.

Use:

- Clean layouts
- Strong typography
- Good real-estate photography
- Generous spacing
- Restrained colors
- Clear CTAs
- Consistent listing cards
- Consistent forms
- Local credibility
- Professional but approachable copy

The renter side should feel simple.

The landlord side should feel trustworthy and competent.

## Scalability requirement

Design for hundreds of units.

The important operational goal is not simply "manage several hundred listings."

The better requirement is:

**Be able to onboard 10+ new properties in a week without disrupting existing operations.**

The planning document explicitly frames this as the stronger design requirement. fileciteturn46file0L481-L493

Every property should follow the same repeatable onboarding process.

## What this site is NOT

Do not build:

- A Zillow clone
- A landlord contact directory
- An unrestricted classifieds site
- A public tenant database
- A sensitive screening database
- A system dependent on manually emailing leads
- A frontend permanently tied to one PMS vendor

## Build order

### Phase 1: Conversion-focused public website

- Home page
- Rental search
- Listing cards
- Property pages
- Renter lead forms
- Property-specific lead capture
- Property-management pages
- Rental analysis form
- Consultation/contact form
- SEO structure

### Phase 2: CRM integration

- Contact creation/update
- Lead attribution
- Lead type
- Property association
- Automation triggers
- Consultation scheduling
- Lead status

### Phase 3: PMS integration

- Listing synchronization
- Application handoff
- Tenant/lease status hooks
- Maintenance hooks
- Owner hooks

### Phase 4: Owner portal

- Owner dashboard
- Property status
- Statements
- Maintenance
- Documents
- Communications
- Reporting

### Phase 5: Growth

- More area pages
- SEO content
- Referral programs
- Advanced automation
- Better attribution
- Staff workflows
- Bulk onboarding tools

## Build philosophy

Do not spend months building infrastructure before proving the acquisition funnel.

Launch quickly, but preserve clean integration boundaries so the CRM and PMS can evolve.

The target is:

**Fast launch + strong lead capture + clean data + replaceable integrations + scalable operations.**

The final system should function as:

**Website = front door**

**CRM = growth engine**

**PMS = operational engine**

**Accounting = financial source of truth**

The critical business outcome is turning local rental demand and local property-owner demand into managed relationships and recurring property-management revenue.
