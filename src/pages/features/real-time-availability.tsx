import React from 'react';

import SolutionPage from '../../components/SolutionPage';

const SLUG = '/features/real-time-availability';

export default function RealTimeAvailabilityFeature(): JSX.Element {
  return (
    <SolutionPage
      slug={SLUG}
      breadcrumbCategory="Features"
      breadcrumbCategoryHref="/#features"
      benefitsHeading="Why real-time availability matters"
      relatedHeading="Other Tictactrip features"
      eyebrow="Feature · Real-time availability"
      title="Real-time availability"
      metaTitle="Real-time train and bus availability API — Live pricing across Europe | Tictactrip"
      description="Live pricing, seat availability and fare classes refreshed in real time across 250+ European carriers. No stale inventory, no failed bookings."
      metaDescription="Real-time European train and bus availability API. Live pricing, seat availability and fare classes refreshed on every request across 250+ carriers. No stale inventory, no broken bookings, no manual reconciliation."
      keywords="real-time travel API, live train availability API, live bus availability API, real-time rail pricing, live fare API, live seat availability, real-time European travel API, Tictactrip real-time"
      heroTitle={
        <>
          Live pricing &amp; seat availability,<br />
          <span style={{color: '#6ee7b7'}}>refreshed on every search</span>
        </>
      }
      heroLead="Every Tictactrip search hits live carrier inventory. Prices, fare classes and seat availability are current at the moment the user clicks — no caching, no stale data, no failed bookings."
      intro={
        <>
          <h2>Stale inventory is the leading cause of broken travel bookings</h2>
          <p>
            Travel platforms that cache fares end up the same place: showing a price that no longer exists, then dropping
            the user into an error flow at checkout. The fix is structural — <strong>every request must reach live
            carrier inventory</strong>.
          </p>
          <p>
            <strong>Tictactrip</strong> proxies directly to carrier systems on every call. Prices, seat availability and
            fare classes returned by <code>/v2/results</code> are <strong>the prices your user can actually book</strong> in
            the next few seconds.
          </p>
          <p>
            For partners, this means lower conversion drop-off, fewer support tickets and no manual reconciliation between
            displayed and charged fares.
          </p>
        </>
      }
      capabilities={[
        'Live carrier-side pricing on every request',
        'Real-time seat availability and fare classes',
        'No stale-cache mismatches at checkout',
        'Coverage across 250+ European rail and bus operators',
        'Sub-second responses for the most common routes',
        'Returns the exact bookable fare, not an estimate',
      ]}
      benefits={[
        {
          icon: '⚡',
          title: 'No stale data',
          description:
            'Every search returns prices and availability that are live with the carrier — what your user sees is what they can actually book.',
        },
        {
          icon: '✅',
          title: 'Higher checkout conversion',
          description:
            'The number-one driver of cart abandonment in travel is "price changed at checkout". Tictactrip eliminates the gap between display and book.',
        },
        {
          icon: '🎟️',
          title: 'Fare-class accuracy',
          description:
            'Refundability, advance-purchase windows and fare-class metadata are returned in the same response, so policy and pricing logic stay in sync.',
        },
        {
          icon: '⏱️',
          title: 'Latency tuned for in-app UX',
          description:
            'Sub-second responses on the most common European routes mean Tictactrip slots into the search-as-you-type and instant-results flows your users expect.',
        },
      ]}
      code={{
        filename: 'realtime-search.sh',
        body: `# Live search: every call hits carrier inventory
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRpari____@u09tu",
    "destinationGpuid": "c|FRlyon____@u05kq",
    "outboundDate":     "2026-06-12T00:00:00Z",
    "passengers":       [{"age": 30}]
  }'

# → price + seat availability returned reflect
#   live carrier inventory at the moment of call.`,
      }}
      faqs={[
        {
          q: 'Does Tictactrip cache fare data?',
          a: 'No. Every call to /v2/results hits live carrier inventory. The fares and availability you see are the ones your user can book immediately.',
        },
        {
          q: 'What latency should I expect?',
          a: 'Most European rail and bus routes return in well under a second. Some long multi-leg multi-operator searches take longer because they hit several carrier systems in parallel.',
        },
        {
          q: 'What happens if a fare changes between search and book?',
          a: 'The booking endpoint re-validates fare and availability with the carrier. If the price has moved, the booking step returns the current fare instead of silently charging a different amount.',
        },
        {
          q: 'Can I prefetch or batch searches?',
          a: 'We work with high-volume partners to optimise traffic patterns. Pre-fetching popular routes is supported on certain plans — contact sales@tictactrip.eu to discuss.',
        },
      ]}
      serviceType="Real-time European train and bus availability API"
      audienceType="Travel platforms requiring live, non-cached inventory"
      related={[
        {title: 'Multimodal coverage', slug: '/features/multimodal-coverage'},
        {title: 'End-to-end booking', slug: '/features/end-to-end-booking'},
        {title: 'Developer-first', slug: '/features/developer-first'},
      ]}
    />
  );
}
