import React from 'react';

import SolutionPage from '../../components/SolutionPage';

const SLUG = '/features/developer-first';

export default function DeveloperFirstFeature(): JSX.Element {
  return (
    <SolutionPage
      slug={SLUG}
      breadcrumbCategory="Features"
      breadcrumbCategoryHref="/#features"
      benefitsHeading="Why a developer-first API matters"
      relatedHeading="Other Tictactrip features"
      eyebrow="Feature · Developer-first"
      title="Developer-first"
      metaTitle="Developer-first travel API — REST, OpenAPI, Postman collection | Tictactrip"
      description="Clean REST endpoints, OpenAPI specification, ready-to-use Postman collection and step-by-step tutorials. Ship a multimodal travel integration in days, not months."
      metaDescription="Developer-first multimodal travel API. Clean REST endpoints, OpenAPI specification, Postman collection, copy-paste curl examples and step-by-step tutorials. Most partners go live in 2 to 6 weeks across 250+ European carriers."
      keywords="developer-first travel API, REST travel API, OpenAPI travel API, Postman travel API, travel API DX, integration time travel API, travel API tutorial, train and bus API for developers, Tictactrip API"
      heroTitle={
        <>
          A multimodal travel API,<br />
          <span style={{color: '#6ee7b7'}}>built for engineers</span>
        </>
      }
      heroLead="Clean REST endpoints, an OpenAPI specification, a ready-to-use Postman collection and a step-by-step tutorial. Prototype on day one, ship in weeks."
      intro={
        <>
          <h2>Most travel APIs treat developers as an afterthought. We don't.</h2>
          <p>
            European ground-transport distribution is historically dominated by <strong>SOAP integrations, ZIP-file
            ticket layouts and PDF documentation</strong>. Building on top of it has been a multi-quarter slog for every
            team that tried.
          </p>
          <p>
            <strong>Tictactrip</strong> ships the opposite of that. A clean REST API, a complete OpenAPI specification,
            a Postman collection you can import in one click, curl examples in every tutorial step, and an interactive
            API reference where every endpoint is documented with request/response schemas.
          </p>
          <p>
            Most engineering teams prototype on day one and ship a production integration in <strong>2 to 6 weeks</strong>.
          </p>
        </>
      }
      capabilities={[
        'Pure REST API — no SOAP, no proprietary SDK lock-in',
        'OpenAPI 3 specification covering every endpoint',
        'Ready-to-use Postman collection',
        'Curl examples for every step of the booking flow',
        'Interactive API reference (Redocusaurus-powered)',
        'Typical integration time: 2 to 6 weeks',
      ]}
      benefits={[
        {
          icon: '📘',
          title: 'OpenAPI-first',
          description:
            'Every endpoint is described in OpenAPI 3, with request and response schemas. Generate clients in your language of choice or wire it straight into your existing codegen pipeline.',
        },
        {
          icon: '🧪',
          title: 'Prototype on day one',
          description:
            'Import the Postman collection, paste your authentication token, and you are hitting live search results inside five minutes. No multi-week onboarding before you can write code.',
        },
        {
          icon: '🛠️',
          title: 'Tutorials, not just reference docs',
          description:
            'A step-by-step tutorial walks through search, reservation, payment, ticketing, refunds and exchanges with curl examples — the kind of content that turns a reference doc into a shippable integration.',
        },
        {
          icon: '⚡',
          title: '2 to 6 weeks to production',
          description:
            'Most partners go from "first curl" to "production traffic" in 2 to 6 weeks. We work directly with your engineering team to unblock anything that gets in the way.',
        },
      ]}
      code={{
        filename: 'first-call.sh',
        body: `# Your first call: paste, replace the token, run.
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRpari____@u09tu",
    "destinationGpuid": "c|FRlyon____@u05kq",
    "outboundDate":     "2026-06-12T00:00:00Z",
    "passengers":       [{"age": 30}]
  }'

# → real itineraries returned in JSON.
#   You are five minutes from a working prototype.`,
      }}
      faqs={[
        {
          q: 'Is the API REST?',
          a: 'Yes — clean REST endpoints, JSON request and response bodies, standard HTTP status codes. No SOAP, no proprietary SDK requirements.',
        },
        {
          q: 'Do you provide an OpenAPI specification?',
          a: 'Yes. The full OpenAPI 3 specification is published at developers.tictactrip.eu/api and used to render our interactive API reference.',
        },
        {
          q: 'Is there a Postman collection?',
          a: 'Yes. A ready-to-use Postman collection is linked from the tutorial — import it, paste your authentication token and you are running real searches in minutes.',
        },
        {
          q: 'How long does a typical integration take?',
          a: 'Most partners go live in 2 to 6 weeks. The exact timeline depends on the scope of your integration (search-only vs full booking) and the number of carriers you need.',
        },
      ]}
      serviceType="Developer-first REST API for European train and bus inventory"
      audienceType="Engineering teams integrating European travel inventory"
      related={[
        {title: 'End-to-end booking', slug: '/features/end-to-end-booking'},
        {title: 'Real-time availability', slug: '/features/real-time-availability'},
        {title: 'Multimodal coverage', slug: '/features/multimodal-coverage'},
      ]}
    />
  );
}
