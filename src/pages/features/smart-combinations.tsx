import React from 'react';

import SolutionPage from '../../components/SolutionPage';

const SLUG = '/features/smart-combinations';

export default function SmartCombinationsFeature(): JSX.Element {
  return (
    <SolutionPage
      slug={SLUG}
      breadcrumbCategory="Features"
      breadcrumbCategoryHref="/#features"
      benefitsHeading="Why smart combinations are a unique unlock"
      relatedHeading="Other Tictactrip features"
      eyebrow="Feature · Smart combinations"
      title="Smart combinations"
      metaTitle="Multimodal routing API — Train and bus combinations across operators | Tictactrip"
      description="When no direct journey exists, our routing engine assembles train and bus legs from different operators into one bookable itinerary."
      metaDescription="Multimodal routing API that combines train and bus legs from multiple carriers into a single bookable itinerary. Reach routes no single operator covers — the unique Tictactrip advantage across 250+ European carriers."
      keywords="multimodal routing API, multi-operator travel API, train and bus combinations, multi-leg booking, European routing engine, multimodal trip planning, intermodal travel API, Tictactrip smart combinations"
      heroTitle={
        <>
          When no direct journey exists,<br />
          <span style={{color: '#6ee7b7'}}>we route across carriers</span>
        </>
      }
      heroLead="Tictactrip's routing engine assembles multi-leg itineraries from different operators — train + bus, carrier A + carrier B — when no direct service connects your user's origin and destination."
      intro={
        <>
          <h2>The European rail and bus network is patchy. Routing fixes that.</h2>
          <p>
            Direct services don't exist for most origin-destination pairs in Europe. A traveller going from a mid-sized
            French town to a regional Italian city typically needs <strong>two or three legs across different operators</strong> —
            and no single carrier's API will surface that as a bookable journey.
          </p>
          <p>
            <strong>Tictactrip's routing engine</strong> closes the gap. We combine train and bus legs across carriers,
            check connection feasibility, validate fares against live inventory, and return the result as <strong>one
            bookable itinerary</strong> — not three separate ones for your user to assemble manually.
          </p>
          <p>
            This is the capability that lets Tictactrip partners ship product features <strong>no competitor running a
            single-carrier integration can match</strong>.
          </p>
        </>
      }
      capabilities={[
        'Routing engine combines train + bus legs across operators',
        'Multi-carrier itineraries returned as one bookable unit',
        'Connection feasibility validated automatically',
        'Cross-border combinations supported',
        'Useful for OTAs, MaaS platforms and corporate travel',
        'Falls back to direct results when they exist',
      ]}
      benefits={[
        {
          icon: '🔁',
          title: 'A capability competitors cannot replicate alone',
          description:
            'A single-carrier integration cannot return multi-operator combinations. Partners using Tictactrip ship results no DIY integration can match.',
        },
        {
          icon: '🧠',
          title: 'Connection logic handled for you',
          description:
            'Transfer times, station compatibility and operational realities are validated inside the routing engine — your client never has to second-guess feasibility.',
        },
        {
          icon: '🛤️',
          title: 'Unlock long-tail O/D pairs',
          description:
            'Hundreds of city pairs across Europe have no direct service. Smart combinations turn those into bookable journeys instead of "no results".',
        },
        {
          icon: '🚆',
          title: 'Still works as a direct-search API',
          description:
            'When a direct journey exists, you get it. The combination engine kicks in only when needed — the API surface stays the same.',
        },
      ]}
      code={{
        filename: 'combination-search.sh',
        body: `# No direct service: routing engine combines legs
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRavignon_@spg6j",
    "destinationGpuid": "c|ITmila____@u0nd6",
    "outboundDate":     "2026-06-12T00:00:00Z",
    "passengers":       [{"age": 30}]
  }'

# → itinerary bundles may include legs from
#   different operators, returned as one
#   bookable unit when no direct option exists.`,
      }}
      faqs={[
        {
          q: 'Are multi-operator itineraries bookable as one transaction?',
          a: 'Yes. Tictactrip handles the underlying booking sequence with each carrier and returns the combined itinerary as a single bookable record — including PNR and ticketing.',
        },
        {
          q: 'What if a leg in a combination becomes unavailable after search?',
          a: 'The booking endpoint re-validates each leg with its carrier. If one becomes unavailable, the booking flow returns a structured error so your platform can offer an alternative.',
        },
        {
          q: 'Does the routing engine optimise for time or price?',
          a: 'Each call returns multiple bundles sorted by price, with travel time and CO₂ exposed in the response. Your client decides how to rank or filter — fastest, cheapest, greenest or a custom score.',
        },
        {
          q: 'Does this support cross-border combinations?',
          a: 'Yes. Cross-border multi-carrier journeys are first-class citizens — for example Paris ↔ Italian regional towns, Madrid ↔ smaller German cities, etc.',
        },
      ]}
      serviceType="Multimodal multi-operator routing API"
      audienceType="OTAs, MaaS platforms, corporate travel platforms, route-planning products"
      related={[
        {title: 'Multimodal coverage', slug: '/features/multimodal-coverage'},
        {title: 'Real-time availability', slug: '/features/real-time-availability'},
        {title: 'End-to-end booking', slug: '/features/end-to-end-booking'},
      ]}
    />
  );
}
