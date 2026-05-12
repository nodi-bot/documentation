import React from 'react';

import SolutionPage from '../../components/SolutionPage';

const SLUG = '/features/multimodal-coverage';

export default function MultimodalCoverageFeature(): JSX.Element {
  return (
    <SolutionPage
      slug={SLUG}
      breadcrumbCategory="Features"
      breadcrumbCategoryHref="/#features"
      benefitsHeading="Why multimodal coverage matters"
      relatedHeading="Other Tictactrip features"
      eyebrow="Feature · Multimodal coverage"
      title="Multimodal coverage"
      metaTitle="Multimodal travel API — 250+ train and bus carriers across Europe | Tictactrip"
      description="One API for European trains and buses. SNCF, Trenitalia, FlixBus, Renfe and 250+ carriers in a single normalized data model."
      metaDescription="Multimodal travel API covering 250+ European train and bus carriers — SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo. A single REST API with one normalized data model, real-time inventory and end-to-end booking."
      keywords="multimodal travel API, European train API, European bus API, rail booking API, SNCF API, Trenitalia API, Renfe API, FlixBus API, BlaBlaCar Bus API, multi-carrier travel API, Tictactrip multimodal"
      heroTitle={
        <>
          One API for <span style={{color: '#6ee7b7'}}>250+ European</span><br />
          train and bus carriers
        </>
      }
      heroLead="A single REST endpoint replaces the fragmented landscape of European ground transport — no carrier-by-carrier contracts, no GDS workarounds, no parallel ticketing pipelines."
      intro={
        <>
          <h2>One data model for the entire European ground-transport network</h2>
          <p>
            European long-distance travel is split across <strong>dozens of national rail incumbents, low-cost operators
            and intercity bus networks</strong>. Each has its own distribution system, fare rules, identifier scheme and
            ticket format. Building inventory from scratch is a multi-year project.
          </p>
          <p>
            <strong>Tictactrip</strong> compresses that complexity into a single REST API. Search once and receive results
            from <strong>SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo</strong> and hundreds more — in one
            normalized response with consistent fields for price, duration, fare class, carrier and CO₂.
          </p>
          <p>
            Coverage spans <strong>France, Italy, Spain, Germany, Benelux</strong> and the rest of continental Europe,
            including cross-border services that no single carrier exposes through its own API.
          </p>
        </>
      }
      capabilities={[
        '250+ rail and intercity bus operators',
        'France · Italy · Spain · Germany · Benelux · cross-border Europe',
        'High-speed, intercity and regional rail',
        'Low-cost rail (Ouigo) and high-speed (TGV, AVE, Frecciarossa)',
        'Long-distance bus networks (FlixBus, BlaBlaCar Bus, ALSA)',
        'One normalized response shape across every carrier',
      ]}
      benefits={[
        {
          icon: '🌍',
          title: 'Continent-wide reach on day one',
          description:
            'Hundreds of carriers, one integration. Your engineering team stops triaging carrier-specific edge cases and starts shipping product.',
        },
        {
          icon: '🔌',
          title: 'Normalized data model',
          description:
            'Origin, destination, fare class, segments, carrier and CO₂ follow the same shape across operators. Build once and the next carrier we add ships through the same code path.',
        },
        {
          icon: '🤝',
          title: 'Carrier relationships maintained for you',
          description:
            'We negotiate, certify and operate the distribution side. You see new carriers appear in your API responses rather than as new integration projects.',
        },
        {
          icon: '🛰️',
          title: 'Cross-border itineraries',
          description:
            'Many of the highest-margin European journeys cross borders. Tictactrip surfaces them as native results, not as second-class exception cases.',
        },
      ]}
      code={{
        filename: 'search-multimodal.sh',
        body: `# Multimodal search: Paris → Milan
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRpari____@u09tu",
    "destinationGpuid": "c|ITmila____@u0nd6",
    "outboundDate":     "2026-06-12T00:00:00Z",
    "passengers":       [{"age": 30}]
  }'

# → mix of SNCF, Trenitalia, FlixBus and combined
#   itineraries in one normalized response.`,
      }}
      faqs={[
        {
          q: 'Which European carriers does the API cover?',
          a: 'Tictactrip aggregates 250+ rail and intercity bus operators including SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo, TGV, AVE, Frecciarossa and many regional carriers across France, Italy, Spain, Germany, Benelux and the rest of continental Europe.',
        },
        {
          q: 'How are different carriers normalized in the response?',
          a: 'Every itinerary returned by /v2/results uses the same schema: origin, destination, segments, fare class, carrier, price and CO₂. You build your UI against one model regardless of which operator serves the trip.',
        },
        {
          q: 'Can the API search cross-border journeys?',
          a: 'Yes. Cross-border itineraries are first-class results — Paris ↔ Brussels, Paris ↔ Milan, Madrid ↔ Lisbon, Frankfurt ↔ Amsterdam and many others.',
        },
        {
          q: 'How often is new carrier coverage added?',
          a: 'Tictactrip continuously adds operators. New carriers ship through the existing API surface without breaking changes — your integration picks them up automatically.',
        },
      ]}
      serviceType="Multimodal European train and bus inventory API"
      audienceType="Travel platforms requiring broad multi-carrier European ground-transport coverage"
      related={[
        {title: 'Smart combinations', slug: '/features/smart-combinations'},
        {title: 'Real-time availability', slug: '/features/real-time-availability'},
        {title: 'End-to-end booking', slug: '/features/end-to-end-booking'},
      ]}
    />
  );
}
