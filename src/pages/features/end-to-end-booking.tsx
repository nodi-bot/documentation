import React from 'react';

import SolutionPage from '../../components/SolutionPage';

const SLUG = '/features/end-to-end-booking';

export default function EndToEndBookingFeature(): JSX.Element {
  return (
    <SolutionPage
      slug={SLUG}
      breadcrumbCategory="Features"
      breadcrumbCategoryHref="/#features"
      benefitsHeading="Why one API for the entire booking flow"
      relatedHeading="Other Tictactrip features"
      eyebrow="Feature · End-to-end booking"
      title="End-to-end booking"
      metaTitle="End-to-end travel booking API — Search, reserve, pay and ticket through one REST API | Tictactrip"
      description="Search, reserve, pay and issue tickets through a single REST API. Tickets are delivered as PDF, ready to email or embed in your product."
      metaDescription="End-to-end European travel booking API. Search, reserve, pay and issue tickets through one REST integration. Tickets delivered as PDF. Refund and exchange workflows included, across 250+ European rail and bus carriers."
      keywords="end-to-end travel booking API, train ticketing API, bus ticketing API, PDF ticket API, travel booking workflow API, refund and exchange API, European booking API, Tictactrip booking"
      heroTitle={
        <>
          Search, reserve, pay, ticket —<br />
          <span style={{color: '#6ee7b7'}}>through one REST API</span>
        </>
      }
      heroLead="Tictactrip handles the entire booking pipeline. Tickets come back as PDFs, ready to email to travellers or render inside your own product. Refunds and exchanges run through the same surface."
      intro={
        <>
          <h2>The booking pipeline is the part nobody wants to rebuild</h2>
          <p>
            Search is the easy 20% of a travel integration. The other 80% is <strong>reservation locks, payment
            authorization, carrier-specific ticket issuance, retries, refunds, exchanges and after-sales operations</strong> —
            the unglamorous infrastructure that decides whether your product works in production.
          </p>
          <p>
            <strong>Tictactrip</strong> owns that pipeline end-to-end. You hit one REST API; we run the booking sequence
            against each carrier, validate payment, issue the ticket and return it as a <strong>PDF</strong> you can
            email to travellers or embed inside your own app.
          </p>
          <p>
            Refunds and exchanges run through the same API. No carrier portals, no manual reissues, no parallel ticketing
            stacks.
          </p>
        </>
      }
      capabilities={[
        'Search → reserve → pay → ticket through one REST API',
        'PDF ticket delivery, ready to email or embed',
        'Refund workflows through the same API surface',
        'Exchange and modification workflows supported',
        'Carrier-side reconciliation handled by Tictactrip',
        'Consistent booking record format across operators',
      ]}
      benefits={[
        {
          icon: '🎫',
          title: 'No parallel ticketing stack',
          description:
            'You integrate one booking flow instead of carrier-by-carrier ticket-issuance logic. The maintenance burden of ticket formats lives on our side.',
        },
        {
          icon: '💳',
          title: 'Payment-clean workflow',
          description:
            'Reservation, payment and ticket issuance happen in a structured sequence with clear error codes — easy to wrap in your own retry and observability stack.',
        },
        {
          icon: '↩️',
          title: 'Refunds and exchanges included',
          description:
            'Cancellation and modification workflows run through the same API. No need to point your support agents at five different carrier portals.',
        },
        {
          icon: '📄',
          title: 'PDF tickets, ready to send',
          description:
            'Tickets are delivered as PDFs your platform can email, attach to confirmations, store in a document system or render inside your own product.',
        },
      ]}
      code={{
        filename: 'booking-flow.sh',
        body: `# Step 1 — search for itineraries
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRpari____@u09tu",
    "destinationGpuid": "c|FRlyon____@u05kq",
    "outboundDate":     "2026-06-12T00:00:00Z",
    "passengers":       [{"age": 30}]
  }'

# Step 2 — reserve, pay and issue tickets
#          using the booking endpoints in /docs/intro
# → ticket returned as a PDF, ready to email
#   or embed in your product.`,
      }}
      faqs={[
        {
          q: 'In which format are tickets delivered?',
          a: 'Tickets are issued as PDFs. You can email them to travellers, attach them to confirmation emails, archive them in a document system or render them directly inside your own product.',
        },
        {
          q: 'How are refunds handled?',
          a: 'Refund workflows run through the same API. Eligibility, partial vs full refund and timing follow the original carrier fare rules — surfaced through structured API fields, not free-form text.',
        },
        {
          q: 'Are exchanges supported?',
          a: 'Yes, where the carrier supports them. The exchange endpoint runs through the same API surface as the original booking — your platform handles the user-facing flow, Tictactrip handles the carrier-side mechanics.',
        },
        {
          q: 'What happens if a payment fails mid-booking?',
          a: 'The booking endpoint returns structured error codes so your platform can decide whether to retry, fall back to another itinerary or surface the failure to the user. No silent partial bookings.',
        },
      ]}
      serviceType="End-to-end European travel booking and ticketing API"
      audienceType="Travel platforms requiring a complete booking pipeline (search, reserve, pay, ticket, refund, exchange)"
      related={[
        {title: 'Real-time availability', slug: '/features/real-time-availability'},
        {title: 'Multimodal coverage', slug: '/features/multimodal-coverage'},
        {title: 'Developer-first', slug: '/features/developer-first'},
      ]}
    />
  );
}
