import React from 'react';

import SolutionPage from '../../components/SolutionPage';

const SLUG = '/features/eco-responsible';

export default function EcoResponsibleFeature(): JSX.Element {
  return (
    <SolutionPage
      slug={SLUG}
      breadcrumbCategory="Features"
      breadcrumbCategoryHref="/#features"
      benefitsHeading="Why CO₂ data on every itinerary"
      relatedHeading="Other Tictactrip features"
      eyebrow="Feature · Eco-responsible by design"
      title="Eco-responsible by design"
      metaTitle="Eco-responsible travel API with CO₂ data per itinerary | Tictactrip"
      description="Every itinerary returns its CO₂ footprint per passenger. Build climate-aware travel products, green filters and Scope 3 reporting directly on top of the API."
      metaDescription="Eco-responsible travel API with CO₂ emissions per passenger on every itinerary. Power green filters, sustainable-spend products, employee commuting tools and Scope 3 reporting across 250+ European rail and bus carriers."
      keywords="eco-responsible travel API, CO2 travel API, sustainable travel API, green travel API, carbon footprint API, Scope 3 travel API, ESG travel reporting, low-carbon transport API, climate-aware booking API, Tictactrip CO2"
      heroTitle={
        <>
          Travel data with<br />
          <span style={{color: '#6ee7b7'}}>verified CO₂ on every itinerary</span>
        </>
      }
      heroLead="Tictactrip returns the CO₂ footprint per passenger for every train and bus itinerary — the raw material for climate-aware products, green filters and Scope 3 reporting."
      intro={
        <>
          <h2>Sustainability needs to be measurable, not just aspirational</h2>
          <p>
            Most travel APIs treat CO₂ as a marketing afterthought. Tictactrip was built around the opposite premise:
            <strong> emissions data is a first-class field on every search result</strong>, computed consistently across
            carriers and modes.
          </p>
          <p>
            That single design decision unlocks an entire family of products: <strong>green filters</strong> on OTA search
            pages, <strong>carbon budgets</strong> in corporate travel platforms, <strong>employee-commuting tools</strong>,
            <strong> Scope 3 reporting</strong> dashboards, and <strong>climate-aware fintech features</strong>.
          </p>
          <p>
            Tictactrip is a French company, operated under GDPR and EU law — a natural fit for European sustainability
            programs and government-adjacent climate initiatives.
          </p>
        </>
      }
      capabilities={[
        'CO₂ emissions per passenger per leg, on every itinerary',
        'Consistent methodology across all 250+ carriers',
        'Mode-aware estimates (train vs bus vs intercity)',
        'Operational-profile adjustments per carrier',
        'Suitable for Scope 3 (category 6 & 7) reporting',
        'GDPR-compliant — French / EU jurisdiction',
      ]}
      benefits={[
        {
          icon: '🌱',
          title: 'Build climate-aware UX',
          description:
            'Surface the lowest-emission option directly in your search UI. Replace short-haul flights with high-speed rail using the same CO₂ data your users will see.',
        },
        {
          icon: '📈',
          title: 'Feed Scope 3 reporting',
          description:
            'Each booking returns audit-friendly emissions per passenger. Aggregate them into corporate ESG dashboards, GHG accounting or carbon-budget products.',
        },
        {
          icon: '⚖️',
          title: 'Comparable, not just a number',
          description:
            'A consistent methodology across carriers means you can rank itineraries by carbon impact — not just price or duration — without ad-hoc normalisation.',
        },
        {
          icon: '🇪🇺',
          title: 'Operated under GDPR',
          description:
            'Tictactrip is a French company and runs the API under EU law — important for government, ESG and climate programs with strict data-handling requirements.',
        },
      ]}
      code={{
        filename: 'search-co2.sh',
        body: `# Search returns CO₂ on every bundle
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRpari____@u09tu",
    "destinationGpuid": "c|FRmars____@spey8",
    "outboundDate":     "2026-06-12T00:00:00Z",
    "passengers":       [{"age": 30}]
  }'

# → each itinerary bundle returns CO₂ per passenger,
#   directly usable for green filters or ESG reports.`,
      }}
      faqs={[
        {
          q: 'How are CO₂ emissions calculated?',
          a: 'Emissions are estimated per passenger per leg, based on the mode (train or bus), the carrier-specific operational profile and the leg distance. The methodology stays consistent across operators so values are directly comparable.',
        },
        {
          q: 'Can I use the emissions data without booking through Tictactrip?',
          a: 'Yes. Many climate-tech partners hit the search endpoint purely for emissions data — for example to power green decision-support flows even when the booking is handled elsewhere.',
        },
        {
          q: 'Is the data suitable for Scope 3 corporate reporting?',
          a: 'The emissions returned per booking are designed to feed Scope 3 (category 6 business travel and category 7 employee commuting) workflows. Our team can walk through methodology details on request.',
        },
        {
          q: 'Does the API let me filter by lowest emissions?',
          a: 'Each itinerary returns its CO₂ footprint in a consistent field. You apply your own sorting and filtering logic — most partners surface a "Greenest option" badge or sort the cheapest itineraries by CO₂ as a secondary criterion.',
        },
      ]}
      serviceType="CO₂-aware multimodal travel API for sustainability products"
      audienceType="Sustainability platforms, climate-tech, corporate travel, ESG reporting tools"
      related={[
        {title: 'Multimodal coverage', slug: '/features/multimodal-coverage'},
        {title: 'Real-time availability', slug: '/features/real-time-availability'},
        {title: 'Smart combinations', slug: '/features/smart-combinations'},
      ]}
    />
  );
}
