import React from 'react';

import SolutionPage from '../../components/SolutionPage';

const SLUG = '/solutions/fintech-super-apps';

export default function FintechSolution(): JSX.Element {
  return (
    <SolutionPage
      slug={SLUG}
      eyebrow="Solution · Fintech & super-apps"
      title="Fintech & super-apps"
      metaTitle="Embedded travel API for fintech apps and super-apps — Tictactrip"
      description="Add train and bus booking inside your neobank, loyalty or wallet app. One REST integration, 250+ European carriers."
      metaDescription="Embed European train and bus booking inside neobanks, super-apps, loyalty wallets and mobility cards. One REST API connects you to 250+ carriers with real-time pricing, ticket delivery and CO₂ data."
      keywords="fintech travel API, super-app travel API, neobank travel booking, loyalty wallet travel, embedded travel, mobility wallet API, fintech rail API, fintech bus API, Tictactrip fintech"
      heroTitle={
        <>
          Embedded travel booking for<br />
          <span style={{color: '#6ee7b7'}}>fintechs, neobanks &amp; super-apps</span>
        </>
      }
      heroLead="Add European train and bus booking inside your app without becoming a travel company. One REST API, 250+ carriers, ticket delivery built in."
      intro={
        <>
          <h2>Travel is the next embedded vertical for fintech</h2>
          <p>
            Neobanks, loyalty programs and super-apps already hold the user, the wallet and the payment surface. The next high-margin
            move is <strong>embedded travel</strong> — booking trains and intercity buses inside your existing app without sending users
            to a third-party site.
          </p>
          <p>
            <strong>Tictactrip</strong> is the infrastructure that makes that practical. One REST integration unlocks{' '}
            <strong>250+ European rail and bus carriers</strong>, real-time pricing and end-to-end ticket delivery. Your engineering
            team integrates a single API; your users see your brand.
          </p>
          <p>
            Build cashback, points redemption, sustainable-spend categorization or carbon-budget features on top — the search response
            includes per-passenger CO₂ emissions, fare class and carrier metadata you can drive UX from.
          </p>
        </>
      }
      capabilities={[
        '250+ European train and bus carriers',
        'REST API tuned for in-app embedding and webviews',
        'Real-time prices and seat availability',
        'PDF tickets, ready to email or render inside your app',
        'CO₂ emissions per passenger for sustainable-spend products',
        'Refund and exchange workflows via the same API',
      ]}
      benefits={[
        {
          icon: '📱',
          title: 'Native in-app experience',
          description:
            'Drop the search and booking flow directly inside your native app — your brand, your design system, your retention metrics. Tictactrip stays invisible to the end user.',
        },
        {
          icon: '🪙',
          title: 'Loyalty and cashback ready',
          description:
            'Layer points redemption, cashback and rewards on top of net fares. The booking workflow exposes the price components your loyalty engine needs.',
        },
        {
          icon: '🌱',
          title: 'Carbon-aware spend',
          description:
            'CO₂ emissions per passenger ship with every itinerary, so you can power green spend categorization, carbon budgets and offset programs without third-party data.',
        },
        {
          icon: '⚡',
          title: 'Ship in weeks, not quarters',
          description:
            'OpenAPI spec, Postman collection, step-by-step tutorial. Prototype on day one and go live in 2 to 6 weeks instead of negotiating with carriers individually.',
        },
      ]}
      code={{
        filename: 'app-search.sh',
        body: `# In-app search: Paris → Barcelona, 2 passengers
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRpari____@u09tu",
    "destinationGpuid": "c|ESbarc____@sp3d2",
    "outboundDate":     "2026-07-14T00:00:00Z",
    "passengers":       [{"age": 30}, {"age": 30}]
  }'

# → bundles ready to render in a native list
#   with price components for points / cashback,
#   carrier branding and CO₂ for green features.`,
      }}
      faqs={[
        {
          q: 'Can I embed Tictactrip inside a native mobile app?',
          a: 'Yes. The API is REST-based and consumed from your backend or directly from your mobile client. Most fintech partners proxy calls through their own backend to keep the auth token server-side.',
        },
        {
          q: 'In which format are tickets delivered?',
          a: 'Tictactrip currently returns tickets as PDFs. You can email them to users, attach them to confirmations or render them directly inside your app.',
        },
        {
          q: 'Can I add cashback or loyalty points on top?',
          a: 'Yes. The booking response exposes the price components you need to apply your own markup, cashback rules or points redemption logic — Tictactrip handles the underlying carrier settlement.',
        },
        {
          q: 'How is the payment flow handled?',
          a: 'Most fintech partners route payment through their existing PSP and call Tictactrip with the net fare. We also support direct booking flows where Tictactrip handles payment end-to-end — your sales contact will walk you through both options.',
        },
      ]}
      serviceType="Embedded travel booking API for fintech apps and super-apps"
      audienceType="Fintech apps, neobanks, super-apps, loyalty platforms"
      related={[
        {title: 'Mobility & MaaS platforms', slug: '/solutions/mobility-maas'},
        {title: 'Online Travel Agencies (OTA)', slug: '/solutions/online-travel-agencies'},
        {title: 'Custom & internal tools', slug: '/solutions/custom-internal-tools'},
      ]}
    />
  );
}
