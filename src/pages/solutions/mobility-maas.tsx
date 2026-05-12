import React from 'react';

import SolutionPage from '../../components/SolutionPage';

const SLUG = '/solutions/mobility-maas';

export default function MobilityMaasSolution(): JSX.Element {
  return (
    <SolutionPage
      slug={SLUG}
      eyebrow="Solution · Mobility & MaaS"
      title="Mobility & MaaS platforms"
      metaTitle="MaaS API for mobility platforms — Long-distance rail & bus | Tictactrip"
      description="Complete your urban mobility offer with European long-distance trains and buses. Real-time multimodal itineraries through one REST API."
      metaDescription="Mobility-as-a-Service API for MaaS platforms. Add long-distance European trains and intercity buses to your urban mobility stack — 250+ carriers, multimodal itineraries, real-time pricing and CO₂ data."
      keywords="MaaS API, Mobility as a Service API, mobility platform travel API, long-distance rail API, intercity bus API, multimodal mobility, door-to-door travel API, Tictactrip MaaS"
      heroTitle={
        <>
          Door-to-door travel for<br />
          <span style={{color: '#6ee7b7'}}>MaaS &amp; mobility platforms</span>
        </>
      }
      heroLead="Bridge your urban mobility offer to long-distance European rail and bus. One REST API, multimodal itineraries, end-to-end ticketing."
      intro={
        <>
          <h2>Urban mobility is the first mile. Tictactrip is the rest of the trip.</h2>
          <p>
            MaaS platforms already orchestrate <strong>scooters, car-share, ride-hail, transit passes</strong> and other urban modes.
            What completes the experience is the <strong>long-distance leg</strong> — the train from city to city, the intercity bus
            across borders.
          </p>
          <p>
            <strong>Tictactrip</strong> exposes <strong>250+ European rail and bus carriers</strong> through a single REST API so your
            MaaS platform can plan, price and book the full door-to-door journey — urban mobility plus long-distance — without a second
            integration project.
          </p>
          <p>
            Real-time availability, CO₂ emissions per leg and multi-operator combinations make Tictactrip a natural fit for platforms
            that already think in terms of <strong>multimodality</strong>.
          </p>
        </>
      }
      capabilities={[
        '250+ rail and bus carriers across Europe',
        'Multi-leg, multi-operator itineraries assembled automatically',
        'Real-time pricing and seat availability',
        'CO₂ emissions per passenger per leg',
        'End-to-end booking with PDF ticket delivery',
        'Designed for MaaS routing engines and trip planners',
      ]}
      benefits={[
        {
          icon: '🛤️',
          title: 'Long-distance layer for your MaaS',
          description:
            'Plug intercity rail and bus into the same trip planner that already routes scooters, transit and car-share. Users get a single door-to-door itinerary instead of two disconnected apps.',
        },
        {
          icon: '🔁',
          title: 'Multi-operator combinations',
          description:
            'When no direct connection exists, Tictactrip routes train + bus legs across operators into one itinerary — a key MaaS unlock for cross-border European journeys.',
        },
        {
          icon: '🌱',
          title: 'CO₂ per leg, ready for green routing',
          description:
            'Every itinerary returns CO₂ emissions per passenger per leg, so your MaaS platform can offer eco-routing modes alongside fastest and cheapest.',
        },
        {
          icon: '🧩',
          title: 'Built to compose with other APIs',
          description:
            'A clean REST surface, OpenAPI spec and Postman collection slot into your existing routing stack without forcing a redesign.',
        },
      ]}
      code={{
        filename: 'maas-search.sh',
        body: `# MaaS long-distance leg: Lyon → Geneva
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRlyon____@u05kq",
    "destinationGpuid": "c|CHgeneva__@u0hgq",
    "outboundDate":     "2026-06-22T00:00:00Z",
    "passengers":       [{"age": 28}]
  }'

# → multimodal bundles with carrier, price,
#   transfer time and CO₂ — feed straight into
#   your existing MaaS trip planner.`,
      }}
      faqs={[
        {
          q: 'Can the API combine multiple operators in one journey?',
          a: 'Yes. The Tictactrip routing engine builds multi-leg itineraries that span several carriers when no direct service exists — a key requirement for MaaS use cases.',
        },
        {
          q: 'Is the response model compatible with MaaS routing standards?',
          a: 'The API returns origin, destination, departure, arrival, mode, carrier, fare and emissions per leg — the structure most MaaS routing engines expect. Our engineering team can walk through field-level mapping for your specific stack.',
        },
        {
          q: 'Does Tictactrip cover cross-border European journeys?',
          a: 'Yes. Coverage spans France, Italy, Spain, Germany, Benelux and most of continental Europe, including cross-border services operated by SNCF, Trenitalia, Renfe, FlixBus and many others.',
        },
        {
          q: 'How is integration handled for MaaS platforms?',
          a: 'We provide an OpenAPI specification, Postman collection and step-by-step tutorial. Most MaaS partners run an initial integration in 2 to 6 weeks.',
        },
      ]}
      serviceType="Long-distance travel API for Mobility-as-a-Service (MaaS) platforms"
      audienceType="Mobility platforms and Mobility-as-a-Service (MaaS) operators"
      related={[
        {title: 'Fintech & super-apps', slug: '/solutions/fintech-super-apps'},
        {title: 'Green-tech & sustainability', slug: '/solutions/green-tech-sustainability'},
        {title: 'Online Travel Agencies (OTA)', slug: '/solutions/online-travel-agencies'},
      ]}
    />
  );
}
