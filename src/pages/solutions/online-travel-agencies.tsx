import React from 'react';

import SolutionPage from '../../components/SolutionPage';

const SLUG = '/solutions/online-travel-agencies';

export default function OtaSolution(): JSX.Element {
  return (
    <SolutionPage
      slug={SLUG}
      eyebrow="Solution · OTAs"
      title="Online Travel Agencies"
      metaTitle="Train & bus API for Online Travel Agencies (OTAs) — Tictactrip"
      description="Add European rail and intercity bus inventory to your OTA in weeks. One REST API to search, compare and book 250+ carriers."
      metaDescription="European train and bus API for Online Travel Agencies. Add SNCF, Trenitalia, FlixBus, Renfe and 250+ carriers to your OTA through one REST integration with end-to-end booking, ticketing and CO₂ data."
      keywords="OTA train API, OTA bus API, online travel agency rail API, European travel inventory, OTA multimodal API, OTA ticketing API, Tictactrip OTA"
      heroTitle={
        <>
          European train &amp; bus inventory<br />
          for <span style={{color: '#6ee7b7'}}>Online Travel Agencies</span>
        </>
      }
      heroLead="Plug 250+ rail and intercity bus carriers into your OTA stack. One REST API replaces dozens of carrier contracts, GDS workarounds and ticketing pipelines."
      intro={
        <>
          <h2>Sell European ground transport without becoming a transport company</h2>
          <p>
            Online Travel Agencies already sell flights and hotels. Adding <strong>European trains and intercity buses </strong>
            is the next high-margin layer — but each carrier has its own contract, distribution system, fare rules and ticket format.
          </p>
          <p>
            <strong>Tictactrip</strong> consolidates this fragmented landscape into a single REST API. You integrate once and
            sell <strong>SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo</strong> and hundreds more — including multi-leg
            itineraries our routing engine assembles automatically when no direct journey exists.
          </p>
          <p>
            The API returns price, duration, fare classes and CO₂ emissions per passenger, so your search results match the
            quality of your air and hotel inventory.
          </p>
        </>
      }
      capabilities={[
        '250+ carriers — SNCF, Trenitalia, FlixBus, Renfe and more',
        'Multi-leg itineraries assembled automatically',
        'Real-time pricing and seat availability',
        'PDF ticket delivery, ready to email or embed in your product',
        'CO₂ emissions per passenger for green filters',
        'Refund and exchange workflows handled by Tictactrip',
      ]}
      benefits={[
        {
          icon: '🌍',
          title: 'One integration, hundreds of carriers',
          description:
            'Skip the long tail of carrier integrations, GDS gaps and ticket-printer specifications. Tictactrip handles distribution agreements and operates the booking pipeline.',
        },
        {
          icon: '🔁',
          title: 'Multi-operator combinations',
          description:
            'Our routing engine combines train + bus legs from different operators into a single itinerary when there is no direct connection — a product feature your competitors cannot ship alone.',
        },
        {
          icon: '🎫',
          title: 'End-to-end ticketing',
          description:
            'Search, reserve, pay and deliver tickets through one API. Tickets come back as PDFs ready to email or embed inside your OTA app.',
        },
        {
          icon: '💸',
          title: 'Margin you control',
          description:
            'Apply your own markup, bundling or cross-sell logic on top of net fares. Tictactrip is invisible to your end users — your brand remains the point of sale.',
        },
      ]}
      code={{
        filename: 'ota-search.sh',
        body: `# OTA search: Paris → Rome, multimodal
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRpari____@u09tu",
    "destinationGpuid": "c|ITrome____@sr2yk",
    "outboundDate":     "2026-06-12T00:00:00Z",
    "passengers":       [{"age": 32}, {"age": 30}]
  }'

# → itinerary bundles with carrier, price, duration,
#   fare class and CO₂ — combining train + bus legs
#   when no direct option exists.`,
      }}
      faqs={[
        {
          q: 'Which carriers can I sell through the OTA integration?',
          a: 'The Tictactrip API exposes 250+ European rail and intercity bus operators including SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo and many regional carriers across France, Italy, Spain, Germany and the Benelux.',
        },
        {
          q: 'How long does an OTA integration take?',
          a: 'Most OTAs go live in 2 to 6 weeks. We provide an OpenAPI specification, a Postman collection and a step-by-step tutorial so your engineering team can prototype on day one.',
        },
        {
          q: 'Do you handle ticket delivery and after-sales operations?',
          a: 'Yes. Tickets are issued as PDFs, ready to email to travellers or embed inside your OTA app. Refunds and exchanges are processed through the same API.',
        },
        {
          q: 'How is pricing structured for OTAs?',
          a: 'Pricing depends on volume and carrier mix. Contact sales@tictactrip.eu to discuss your traffic profile and receive a commercial proposal.',
        },
      ]}
      serviceType="European rail and bus distribution API for Online Travel Agencies"
      audienceType="Online Travel Agencies (OTAs)"
      related={[
        {title: 'Corporate travel & TMC', slug: '/solutions/corporate-travel-tmc'},
        {title: 'Fintech & super-apps', slug: '/solutions/fintech-super-apps'},
        {title: 'Mobility & MaaS platforms', slug: '/solutions/mobility-maas'},
      ]}
    />
  );
}
