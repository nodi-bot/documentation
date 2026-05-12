import React from 'react';

import SolutionPage from '../../components/SolutionPage';

const SLUG = '/solutions/corporate-travel-tmc';

export default function CorporateTmcSolution(): JSX.Element {
  return (
    <SolutionPage
      slug={SLUG}
      eyebrow="Solution · Corporate & TMC"
      title="Corporate travel & TMC"
      metaTitle="Corporate travel API for TMCs — Multimodal European trains & buses | Tictactrip"
      description="Power your TMC platform with European train and bus inventory, multimodal itineraries and CO₂ reporting through one REST API."
      metaDescription="Corporate travel API for Travel Management Companies. Add 250+ European rail and bus carriers to your TMC platform with real-time inventory, multimodal itineraries, CO₂ reporting and policy-aware booking."
      keywords="corporate travel API, TMC API, business travel API, corporate rail booking, travel management company API, CO2 corporate travel, sustainable business travel API, Tictactrip TMC"
      heroTitle={
        <>
          Multimodal travel API for<br />
          <span style={{color: '#6ee7b7'}}>Travel Management Companies</span>
        </>
      }
      heroLead="Bring European rail and bus inventory into your TMC stack with CO₂ data, policy controls and end-to-end ticketing — through a single REST API."
      intro={
        <>
          <h2>The corporate travel stack now has to be multimodal</h2>
          <p>
            Sustainability mandates, falling business-class flight budgets and the rise of high-speed rail are pushing
            <strong> corporate travel</strong> toward the ground. Travel Management Companies that can offer trains and intercity
            buses alongside flights win renewals — and offer credible CO₂ reporting.
          </p>
          <p>
            <strong>Tictactrip</strong> exposes <strong>250+ European rail and bus carriers</strong> through one REST API. Your TMC
            platform sees a normalized inventory layer, per-passenger emissions data and a unified booking workflow — no fragmented
            carrier portals, no separate ticketing pipelines.
          </p>
          <p>
            Apply travel-policy rules on top: cabin class, fare type, supplier preference, advance-purchase windows. Tictactrip
            returns the raw inventory; your platform stays in control of policy.
          </p>
        </>
      }
      capabilities={[
        '250+ rail and bus carriers across Europe',
        'CO₂ emissions per passenger per leg for ESG reporting',
        'Policy-friendly metadata: fare class, refundability, advance purchase',
        'Multimodal itineraries to replace short-haul flights',
        'End-to-end booking with PDF ticket delivery',
        'Refund and exchange workflows handled by Tictactrip',
      ]}
      benefits={[
        {
          icon: '📊',
          title: 'ESG reporting on autopilot',
          description:
            'Every itinerary returns CO₂ emissions per passenger. Aggregate them across your bookings to feed corporate sustainability dashboards and Scope 3 reporting.',
        },
        {
          icon: '🛤️',
          title: 'Substitute short-haul flights with rail',
          description:
            'Tictactrip surfaces high-speed rail alternatives to short-haul flights with comparable durations and lower emissions — exactly what corporate sustainability policies push for.',
        },
        {
          icon: '🧭',
          title: 'Policy-aware booking',
          description:
            'Fare class, refundability and advance-purchase metadata let your TMC apply company travel rules before showing options to a traveller.',
        },
        {
          icon: '🎟️',
          title: 'One ticket workflow',
          description:
            'PDF tickets delivered through the same API. No separate carrier portals, no manual e-ticket reissues.',
        },
      ]}
      code={{
        filename: 'tmc-search.sh',
        body: `# TMC search: Paris → Brussels, business trip
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRpari____@u09tu",
    "destinationGpuid": "c|BEbrus____@u15iy",
    "outboundDate":     "2026-06-12T00:00:00Z",
    "passengers":       [{"age": 35}]
  }'

# → itinerary bundles with carrier, price, fare class,
#   refundability and CO₂ — ready to score against
#   your corporate travel policy.`,
      }}
      faqs={[
        {
          q: 'Can the API replace flights with rail when emissions are lower?',
          a: 'Yes. The search endpoint returns trains and buses on the same route alongside their CO₂ emissions, so your TMC can prioritise rail alternatives when policy or sustainability rules demand it.',
        },
        {
          q: 'Do you expose the data needed for Scope 3 / GHG reporting?',
          a: 'Each itinerary returns estimated CO₂ emissions per passenger per leg. Booking events can be aggregated into corporate ESG dashboards and audited against published methodologies.',
        },
        {
          q: 'How are corporate-specific fares and discounts handled?',
          a: 'Some carriers expose dedicated corporate fares. We work with each TMC partner to enable the relevant negotiated rates on top of public inventory.',
        },
        {
          q: 'Is Tictactrip GDPR-compliant?',
          a: 'Yes. Tictactrip is a French company and the API is operated in compliance with the GDPR. Traveller data is processed strictly for the purpose of issuing the requested transport tickets.',
        },
      ]}
      serviceType="Corporate travel API for Travel Management Companies (TMCs)"
      audienceType="Corporate travel platforms and Travel Management Companies"
      related={[
        {title: 'Online Travel Agencies (OTA)', slug: '/solutions/online-travel-agencies'},
        {title: 'Green-tech & sustainability', slug: '/solutions/green-tech-sustainability'},
        {title: 'Custom & internal tools', slug: '/solutions/custom-internal-tools'},
      ]}
    />
  );
}
