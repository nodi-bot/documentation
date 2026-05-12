import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const SALES_EMAIL = 'sales@tictactrip.eu';
const DEV_EMAIL = 'dev@tictactrip.eu';

type Feature = {
  title: string;
  description: string;
  icon: string;
};

const FEATURES: Feature[] = [
  {
    icon: '🚆',
    title: 'Multimodal coverage',
    description:
      'A single API to search, compare and book trains, buses, coaches and their combinations across Europe — SNCF, Trenitalia, FlixBus, BlaBlaCar Bus, Renfe and more.',
  },
  {
    icon: '🌍',
    title: 'Eco-responsible by design',
    description:
      'Every itinerary returns its CO₂ footprint so your users can pick the lowest-emission option. Built for sustainable travel platforms and corporate ESG reporting.',
  },
  {
    icon: '⚡',
    title: 'Real-time availability',
    description:
      'Live pricing, seat availability and fare classes refreshed in real time. No stale inventory, no failed bookings.',
  },
  {
    icon: '🔁',
    title: 'Smart combinations',
    description:
      'Our routing engine assembles train + bus + coach legs into a single itinerary when a direct journey is not available — the unique Tictactrip value.',
  },
  {
    icon: '🎫',
    title: 'End-to-end booking',
    description:
      'Search, reserve, pay and issue tickets through one REST API. Tickets are delivered as PDF or mobile-ready barcodes.',
  },
  {
    icon: '🛠️',
    title: 'Developer-first',
    description:
      'Clean REST endpoints, OpenAPI specification, Postman collection and step-by-step tutorials. Ship your integration in days, not months.',
  },
];

type UseCase = {
  title: string;
  description: string;
};

const USE_CASES: UseCase[] = [
  {
    title: 'Online Travel Agencies (OTA)',
    description:
      'Add ground transport inventory to your air-and-hotel offering. Sell European rail and coach without negotiating with every carrier.',
  },
  {
    title: 'Corporate travel & TMC',
    description:
      'Power your business-travel platform with multimodal itineraries and CO₂ reporting that fit your sustainability mandate.',
  },
  {
    title: 'Fintech & super-apps',
    description:
      'Embed travel booking inside neobanks, loyalty apps and mobility wallets with a single integration.',
  },
  {
    title: 'Mobility & MaaS platforms',
    description:
      'Complement urban mobility (scooters, car-share, transit) with long-distance trains and buses to offer true door-to-door journeys.',
  },
  {
    title: 'Green-tech & sustainability',
    description:
      'Build climate-aware travel tools, employee commuting platforms or carbon-budget products on top of verified CO₂ data.',
  },
  {
    title: 'Custom & internal tools',
    description:
      'Procurement teams, universities, NGOs and event organisers use our API to centralise travel purchasing.',
  },
];

type FaqItem = {
  q: string;
  a: string;
};

const FAQ: FaqItem[] = [
  {
    q: 'What is the Tictactrip API?',
    a: 'The Tictactrip API is a REST interface that lets developers search, compare and book trains, buses and coaches across Europe — including multimodal combinations of several carriers in a single itinerary.',
  },
  {
    q: 'How do I get access to the Tictactrip API?',
    a: `Access to the production API is granted on request. Contact our sales team at ${SALES_EMAIL} to discuss your use case, sign a commercial agreement and receive your authentication token.`,
  },
  {
    q: 'Which carriers and countries are covered?',
    a: 'The API aggregates major European rail and coach operators including SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo and many regional carriers. Coverage extends across France, Italy, Spain, Germany, Benelux and the rest of continental Europe.',
  },
  {
    q: 'How is the API priced?',
    a: `Pricing depends on volume, transaction type and the carriers you need. Contact ${SALES_EMAIL} to receive a tailored commercial proposal.`,
  },
  {
    q: 'Do you provide CO₂ emissions data?',
    a: 'Yes. Every itinerary returned by the search endpoint includes the estimated CO₂ footprint per passenger, which makes it easy to surface the most eco-responsible option in your product.',
  },
  {
    q: 'How long does integration take?',
    a: 'Most partners go live in 2 to 6 weeks. The API exposes a clean REST surface, an OpenAPI specification and a ready-to-use Postman collection so engineering teams can prototype on day one.',
  },
  {
    q: 'In which formats are tickets delivered?',
    a: 'Tickets are issued as PDFs and, where the carrier supports it, as mobile barcodes (PKPASS, QR) that can be added to a wallet or rendered inside your own app.',
  },
  {
    q: 'Is the API GDPR-compliant?',
    a: 'Yes. Tictactrip is a French company and the API is operated in compliance with the GDPR. Passenger data is processed strictly for the purpose of issuing the requested transport tickets.',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroOverlay} />
      <div className={clsx('container', styles.heroContent)}>
        <span className={styles.heroEyebrow}>Tictactrip Developer Platform</span>
        <h1 className={styles.heroTitle}>
          One API for European <span className={styles.heroAccent}>trains, buses</span> and their combinations
        </h1>
        <p className={styles.heroSubtitle}>
          Search, compare and book multimodal long-distance journeys across Europe.
          Real-time inventory, CO₂ footprint included, ticket delivery built in.
        </p>
        <div className={styles.heroButtons}>
          <Link
            className={clsx('button button--lg', styles.btnPrimary)}
            to="/docs/intro">
            Read the API tutorial
          </Link>
          <Link
            className={clsx('button button--lg', styles.btnSecondary)}
            to={`mailto:${SALES_EMAIL}?subject=Tictactrip%20API%20access%20request`}>
            Request API access
          </Link>
        </div>
        <p className={styles.heroNote}>
          API access is granted on request. Contact{' '}
          <a href={`mailto:${SALES_EMAIL}`} className={styles.heroLink}>
            {SALES_EMAIL}
          </a>{' '}
          to get started.
        </p>
        <div className={styles.heroStats}>
          <div className={styles.heroStat}>
            <strong>50+</strong>
            <span>carriers integrated</span>
          </div>
          <div className={styles.heroStat}>
            <strong>20+</strong>
            <span>European countries</span>
          </div>
          <div className={styles.heroStat}>
            <strong>1 API</strong>
            <span>train · bus · coach</span>
          </div>
          <div className={styles.heroStat}>
            <strong>CO₂</strong>
            <span>per itinerary</span>
          </div>
        </div>
      </div>
      <div className={styles.scrollHint} aria-hidden="true">
        <span />
      </div>
    </header>
  );
}

function IntroSection() {
  return (
    <section className={clsx(styles.section, styles.sectionLight)}>
      <div className="container">
        <div className={styles.introGrid}>
          <div>
            <h2 className={styles.sectionTitle}>
              What is the Tictactrip API?
            </h2>
            <p className={styles.lead}>
              <strong>Tictactrip</strong> is a European distribution platform for long-distance
              ground transport. Our API gives you programmatic access to{' '}
              <strong>train, bus and coach inventory</strong> from dozens of carriers, plus a
              proprietary routing engine that <strong>combines several operators into a single
              itinerary</strong> when no direct option exists.
            </p>
            <p className={styles.lead}>
              You integrate once. We handle carrier contracts, ticketing, payments,
              CO₂ computation and after-sales operations.
            </p>
          </div>
          <ul className={styles.bulletList}>
            <li><strong>Trains</strong> — high-speed, intercity and regional rail</li>
            <li><strong>Buses & coaches</strong> — long-distance carriers across Europe</li>
            <li><strong>Combinations</strong> — multi-leg, multi-operator itineraries</li>
            <li><strong>CO₂ data</strong> — emissions per passenger, per leg</li>
            <li><strong>End-to-end booking</strong> — search, reserve, pay, ticket</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Everything you need to ship travel features</h2>
        <p className={styles.sectionSubtitle}>
          A production-grade REST API used by travel agencies, fintechs and sustainability platforms.
        </p>
        <div className={styles.featureGrid}>
          {FEATURES.map((f, i) => (
            <article
              key={f.title}
              className={styles.featureCard}
              style={{animationDelay: `${i * 80}ms`}}>
              <div className={styles.featureIcon} aria-hidden="true">{f.icon}</div>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDescription}>{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickStartSection() {
  return (
    <section className={clsx(styles.section, styles.sectionLight)}>
      <div className="container">
        <div className={styles.quickStartGrid}>
          <div>
            <span className={styles.kicker}>Quick start</span>
            <h2 className={styles.sectionTitle}>From zero to first booking in 4 calls</h2>
            <p className={styles.lead}>
              Authenticate, resolve origin and destination, search itineraries, then book.
              Our <Link to="/docs/intro">step-by-step tutorial</Link> walks through every
              endpoint with curl examples and a ready-to-use{' '}
              <a href="/Tictactrip.postman_collection.json">Postman collection</a>.
            </p>
            <ol className={styles.numberedList}>
              <li>
                Request your <strong>authentication token</strong> from {' '}
                <a href={`mailto:${SALES_EMAIL}`}>{SALES_EMAIL}</a>
              </li>
              <li>
                Resolve city IDs via <code>GET /v2/stopClusters</code>
              </li>
              <li>
                Search itineraries via <code>POST /v3/search</code>
              </li>
              <li>
                Book and issue tickets via <code>POST /book</code>
              </li>
            </ol>
            <div className={styles.quickStartCtas}>
              <Link className={clsx('button button--lg', styles.btnPrimary)} to="/docs/intro">
                Start the tutorial
              </Link>
              <Link className={clsx('button button--lg', styles.btnGhost)} to="/api">
                Browse the API reference
              </Link>
            </div>
          </div>
          <div className={styles.codeBlock} aria-label="Example API request">
            <div className={styles.codeHeader}>
              <span className={styles.codeDot} />
              <span className={styles.codeDot} />
              <span className={styles.codeDot} />
              <span className={styles.codeFile}>search.sh</span>
            </div>
            <pre className={styles.codePre}>
{`# Search Paris → Lyon, tomorrow
curl -X POST 'https://api.tictactrip.eu/v3/search' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "origin":      "c|FRpari____@u09tu",
    "destination": "c|FRlyon____@u05kq",
    "date":        "2026-05-13",
    "passengers":  [{"age": 30}]
  }'

# → returns itineraries with price, duration
#   and CO₂ emissions per passenger`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Built for the teams reinventing travel</h2>
        <p className={styles.sectionSubtitle}>
          Whether you sell trips, manage corporate travel or build climate-tech, the API fits in.
        </p>
        <div className={styles.useCaseGrid}>
          {USE_CASES.map((u) => (
            <div key={u.title} className={styles.useCaseCard}>
              <h3 className={styles.useCaseTitle}>{u.title}</h3>
              <p className={styles.useCaseDescription}>{u.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AccessSection() {
  return (
    <section className={clsx(styles.section, styles.sectionAccess)}>
      <div className="container">
        <div className={styles.accessCard}>
          <span className={styles.kicker}>Get API access</span>
          <h2 className={styles.accessTitle}>
            Talk to our team to unlock the Tictactrip API
          </h2>
          <p className={styles.accessLead}>
            API access is granted after a short commercial discussion to match the right
            plan, carriers and SLA to your project. Send us a note about your use case and
            we'll come back to you within one business day.
          </p>
          <div className={styles.accessActions}>
            <a
              className={clsx('button button--lg', styles.btnPrimary)}
              href={`mailto:${SALES_EMAIL}?subject=Tictactrip%20API%20access%20request`}>
              Email sales@tictactrip.eu
            </a>
            <a
              className={clsx('button button--lg', styles.btnGhost)}
              href={`mailto:${DEV_EMAIL}?subject=Tictactrip%20API%20technical%20question`}>
              Technical question? {DEV_EMAIL}
            </a>
          </div>
          <p className={styles.accessFinePrint}>
            Already a partner? Use your existing token to authenticate against{' '}
            <code>https://api.tictactrip.eu</code>.
          </p>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className={clsx(styles.section, styles.sectionLight)} id="faq">
      <div className="container">
        <h2 className={styles.sectionTitle}>Frequently asked questions</h2>
        <p className={styles.sectionSubtitle}>
          Everything developers and product teams ask before integrating.
        </p>
        <div className={styles.faqList}>
          {FAQ.map((item) => (
            <details key={item.q} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>{item.q}</summary>
              <p className={styles.faqAnswer}>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className={clsx(styles.section, styles.sectionFinalCta)}>
      <div className="container">
        <h2 className={styles.finalCtaTitle}>
          Ready to ship multimodal travel?
        </h2>
        <p className={styles.finalCtaLead}>
          Read the tutorial, browse the reference, or talk to sales — your call.
        </p>
        <div className={styles.heroButtons}>
          <Link className={clsx('button button--lg', styles.btnPrimary)} to="/docs/intro">
            Read the docs
          </Link>
          <a
            className={clsx('button button--lg', styles.btnSecondary)}
            href={`mailto:${SALES_EMAIL}?subject=Tictactrip%20API%20access%20request`}>
            Contact sales
          </a>
        </div>
      </div>
    </section>
  );
}

function StructuredData() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tictactrip',
    url: 'https://www.tictactrip.eu/',
    logo: 'https://api.tictactrip.eu/img/logoTextBlack.svg',
    sameAs: [
      'https://www.tictactrip.eu/',
      'https://github.com/tictactrip',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: SALES_EMAIL,
        contactType: 'sales',
        areaServed: 'EU',
        availableLanguage: ['English', 'French'],
      },
      {
        '@type': 'ContactPoint',
        email: DEV_EMAIL,
        contactType: 'technical support',
        areaServed: 'EU',
        availableLanguage: ['English', 'French'],
      },
    ],
  };

  const product = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Tictactrip API',
    description:
      'REST API to search, compare and book trains, buses and coaches across Europe, including multimodal combinations and CO₂ emissions per itinerary.',
    brand: {'@type': 'Brand', name: 'Tictactrip'},
    category: 'Travel API / Transport API',
    audience: {
      '@type': 'BusinessAudience',
      audienceType:
        'Online travel agencies, corporate travel platforms, fintech apps, mobility and MaaS platforms, sustainability tools',
    },
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <Head>
      <meta
        name="description"
        content="Tictactrip API — One REST API to search, compare and book European trains, buses and their combinations. Multimodal itineraries, real-time inventory, CO₂ emissions and end-to-end ticketing. Contact sales@tictactrip.eu to get access."
      />
      <meta
        name="keywords"
        content="train API, bus API, coach API, European travel API, multimodal travel API, rail booking API, SNCF API, FlixBus API, Trenitalia API, Renfe API, CO2 travel API, sustainable travel API, Tictactrip API"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Tictactrip Documentation — Train, bus & coach booking API for Europe" />
      <meta
        property="og:description"
        content="One REST API for European trains, buses and their combinations. Real-time inventory, CO₂ data, end-to-end ticketing. Request API access at sales@tictactrip.eu."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{JSON.stringify(organization)}</script>
      <script type="application/ld+json">{JSON.stringify(product)}</script>
      <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
    </Head>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Tictactrip API — Train, bus & coach booking API for Europe"
      description="One REST API to search, compare and book European trains, buses and their combinations. Multimodal itineraries, real-time inventory, CO₂ emissions and end-to-end ticketing. Contact sales@tictactrip.eu to get access.">
      <StructuredData />
      <main className={styles.main}>
        <HomepageHeader />
        <IntroSection />
        <FeaturesSection />
        <QuickStartSection />
        <UseCasesSection />
        <AccessSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
    </Layout>
  );
}
