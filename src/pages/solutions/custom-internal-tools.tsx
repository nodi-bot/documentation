import React from 'react';

import SolutionPage from '../../components/SolutionPage';

const SLUG = '/solutions/custom-internal-tools';

export default function CustomInternalToolsSolution(): JSX.Element {
  return (
    <SolutionPage
      slug={SLUG}
      eyebrow="Solution · Custom & internal tools"
      title="Custom & internal tools"
      metaTitle="Travel booking API for internal tools, universities & NGOs | Tictactrip"
      description="Centralise European travel purchasing in your internal portal. One REST API for rail and bus across 250+ carriers."
      metaDescription="Travel booking API for internal tools, procurement portals, universities, NGOs and event organisers. Centralise European rail and bus purchasing with 250+ carriers, CO₂ data and end-to-end ticketing."
      keywords="internal travel tool API, procurement travel API, university travel API, NGO travel API, event travel booking API, custom travel platform API, Tictactrip internal tools"
      heroTitle={
        <>
          Travel API for<br />
          <span style={{color: '#6ee7b7'}}>internal tools, procurement &amp; events</span>
        </>
      }
      heroLead="Centralise European train and bus purchasing inside your internal portal. One REST API, 250+ carriers, audit-friendly booking trail."
      intro={
        <>
          <h2>Procurement, universities, NGOs and event organisers ship custom travel tools</h2>
          <p>
            Not every travel buyer is an OTA or a TMC. <strong>Procurement teams, universities, NGOs and event organisers</strong>{' '}
            often build their own internal portals to centralise travel purchasing — for budget control, audit trails or simply
            because their workflows are too specific for off-the-shelf tools.
          </p>
          <p>
            <strong>Tictactrip</strong> gives those teams the same infrastructure the largest OTAs use: a REST API exposing{' '}
            <strong>250+ European rail and bus carriers</strong>, end-to-end booking and a consistent ticket-delivery pipeline.
          </p>
          <p>
            Your engineering team integrates once. Your finance team gets clean booking records. Your travellers get PDF tickets that
            land where you tell them to land — internal portal, attached to emails or stored in your own document system — without
            the maintenance burden of carrier-by-carrier integrations.
          </p>
        </>
      }
      capabilities={[
        '250+ rail and bus carriers across Europe',
        'Search, reservation and booking through one REST API',
        'PDF ticket delivery, ready to email or archive',
        'CO₂ emissions per passenger for procurement reporting',
        'Refund and exchange workflows handled by Tictactrip',
        'OpenAPI spec and Postman collection for fast in-house integration',
      ]}
      benefits={[
        {
          icon: '🧾',
          title: 'Audit-friendly booking trail',
          description:
            'Each booking returns structured metadata — carrier, fare, passenger, CO₂ — that internal finance, audit and procurement teams can store and report against.',
        },
        {
          icon: '🎓',
          title: 'Built for universities and NGOs',
          description:
            'Centralise student, researcher and field-staff travel inside one portal instead of scattering bookings across dozens of carrier sites.',
        },
        {
          icon: '🎪',
          title: 'Event-grade ticketing',
          description:
            'Bulk-book travel for conference attendees, sports teams, festival staff or political delegations through programmatic flows your team can automate.',
        },
        {
          icon: '🛠️',
          title: 'Maintained by Tictactrip',
          description:
            'Carrier contracts, ticket formats, refund rules and operations are handled by us. Your internal tool focuses on workflow, not on the long tail of European transport operators.',
        },
      ]}
      code={{
        filename: 'internal-tool.sh',
        body: `# Internal portal: book staff travel programmatically
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRpari____@u09tu",
    "destinationGpuid": "c|FRtoul____@spzgb",
    "outboundDate":     "2026-06-22T00:00:00Z",
    "passengers":       [{"age": 41}]
  }'

# → bundles with carrier, fare and CO₂.
#   Pipe the chosen one into the booking flow and
#   store the response in your internal ledger.`,
      }}
      faqs={[
        {
          q: 'Can a small in-house team integrate Tictactrip?',
          a: 'Yes. We provide an OpenAPI specification, a Postman collection and a step-by-step tutorial. Most internal-tool teams ship a working integration in 2 to 6 weeks.',
        },
        {
          q: 'Can we book on behalf of named travellers (students, employees, attendees)?',
          a: 'Yes. The booking endpoint accepts passenger details and returns tickets issued in those names, where the carrier requires it.',
        },
        {
          q: 'Do you provide invoices and a consolidated billing flow?',
          a: 'Yes. Partners receive consolidated billing aligned with their booking volume. Talk to sales@tictactrip.eu about the contract setup that fits your procurement workflow.',
        },
        {
          q: 'Is Tictactrip GDPR-compliant for university and NGO use cases?',
          a: 'Yes. Tictactrip is a French company and the API is operated in compliance with the GDPR. Passenger data is processed strictly for the purpose of issuing the requested transport tickets.',
        },
      ]}
      serviceType="European travel booking API for internal portals, procurement, universities, NGOs and event organisers"
      audienceType="Procurement teams, universities, NGOs and event organisers building custom travel tools"
      related={[
        {title: 'Corporate travel & TMC', slug: '/solutions/corporate-travel-tmc'},
        {title: 'Green-tech & sustainability', slug: '/solutions/green-tech-sustainability'},
        {title: 'Fintech & super-apps', slug: '/solutions/fintech-super-apps'},
      ]}
    />
  );
}
