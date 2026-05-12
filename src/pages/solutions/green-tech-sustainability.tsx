import React from 'react';

import SolutionPage from '../../components/SolutionPage';

const SLUG = '/solutions/green-tech-sustainability';

export default function GreenTechSolution(): JSX.Element {
  return (
    <SolutionPage
      slug={SLUG}
      eyebrow="Solution · Green-tech & sustainability"
      title="Green-tech & sustainability"
      metaTitle="Sustainable travel API with CO₂ data — Green-tech & climate platforms | Tictactrip"
      description="Build climate-aware travel tools on top of European rail and bus inventory with CO₂ emissions per passenger."
      metaDescription="Sustainable travel API for green-tech and climate platforms. Build carbon-aware booking, employee commuting tools and Scope 3 reporting on top of 250+ European rail and bus carriers with CO₂ data per passenger."
      keywords="sustainable travel API, CO2 travel API, green travel API, carbon footprint travel, climate-tech travel, Scope 3 travel API, employee commuting API, low-carbon travel API, Tictactrip sustainability"
      heroTitle={
        <>
          Travel data with<br />
          <span style={{color: '#6ee7b7'}}>verified CO₂ per passenger</span>
        </>
      }
      heroLead="Build climate-aware booking, employee commuting platforms and carbon-budget products on top of European rail and bus inventory."
      intro={
        <>
          <h2>Climate platforms need real inventory, not just emission factors</h2>
          <p>
            Most sustainability tools start with <strong>emission factors</strong> — but a useful product needs to connect those
            numbers to <strong>actual bookable journeys</strong>. That's where Tictactrip fits.
          </p>
          <p>
            We expose <strong>250+ European train and bus carriers</strong> through one REST API. Every itinerary returns CO₂
            emissions per passenger per leg, alongside price, duration and carrier metadata — the raw material green-tech products
            need to compute alternatives, score business trips or run carbon budgets.
          </p>
          <p>
            For climate platforms, employee-commuting tools, NGO mobility programs and Scope 3 reporting startups, Tictactrip turns
            sustainability theory into a product you can ship.
          </p>
        </>
      }
      capabilities={[
        'CO₂ emissions per passenger per leg, on every itinerary',
        '250+ rail and bus carriers across Europe',
        'Multimodal itineraries to surface lower-emission alternatives',
        'Real-time pricing for spend-and-emissions comparisons',
        'End-to-end booking when you want to close the loop',
        'GDPR-compliant — operated under French and EU law',
      ]}
      benefits={[
        {
          icon: '🌍',
          title: 'CO₂ on every itinerary',
          description:
            'Each itinerary carries an estimated CO₂ footprint per passenger per leg — the bedrock of climate-tech products that need to compare modes, routes or carriers.',
        },
        {
          icon: '🛤️',
          title: 'Surface low-carbon alternatives',
          description:
            'Compare a short-haul flight to high-speed rail on the same origin-destination pair. Build product flows that nudge users toward the lower-emission option.',
        },
        {
          icon: '📈',
          title: 'Feed Scope 3 reporting',
          description:
            'Aggregate booking-level emissions into corporate Scope 3 reports, ESG dashboards or carbon-budget products. The data structure is consistent and audit-ready.',
        },
        {
          icon: '🇪🇺',
          title: 'EU-based and GDPR-compliant',
          description:
            'Tictactrip is a French company operating in compliance with the GDPR. A natural fit for European sustainability and government-adjacent climate programs.',
        },
      ]}
      code={{
        filename: 'climate-search.sh',
        body: `# Compare alternatives for a business trip
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRpari____@u09tu",
    "destinationGpuid": "c|FRmars____@spey8",
    "outboundDate":     "2026-06-12T00:00:00Z",
    "passengers":       [{"age": 30}]
  }'

# → each bundle returns CO₂ per passenger,
#   so your product can score and rank options
#   by carbon impact, not just price or duration.`,
      }}
      faqs={[
        {
          q: 'How are CO₂ emissions calculated?',
          a: 'Emissions are estimated per passenger per leg based on the mode (train or bus), the carrier-specific operational profile and the leg distance. The methodology is consistent across operators so values are directly comparable.',
        },
        {
          q: 'Can I use the emissions data without booking through Tictactrip?',
          a: 'Yes. Many climate-tech partners use the search endpoint to surface emissions for decision-support flows even when the actual booking is handled by another channel.',
        },
        {
          q: 'Do you support employee-commuting use cases?',
          a: 'Yes. Several green-tech partners build employee-commuting platforms on top of Tictactrip — combining home-to-office routing with the CO₂ data the API returns.',
        },
        {
          q: 'Is the API suitable for Scope 3 / GHG accounting?',
          a: 'The emissions returned per booking are designed to feed into Scope 3 (category 6 business travel and category 7 employee commuting) workflows. Our team can walk through methodology details on request.',
        },
      ]}
      serviceType="Sustainable travel API with CO₂ emissions data"
      audienceType="Green-tech startups, climate platforms, sustainability and ESG tools"
      related={[
        {title: 'Corporate travel & TMC', slug: '/solutions/corporate-travel-tmc'},
        {title: 'Mobility & MaaS platforms', slug: '/solutions/mobility-maas'},
        {title: 'Custom & internal tools', slug: '/solutions/custom-internal-tools'},
      ]}
    />
  );
}
