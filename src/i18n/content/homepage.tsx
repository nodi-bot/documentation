import React from 'react';
import type {Translations} from '../useTranslation';

export type HomepageFeature = {
  icon: string;
  title: string;
  description: string;
};

export type HomepageUseCase = {
  title: string;
  description: string;
};

export type HomepageFaq = {q: string; a: string};

export type HomepageStat = {value: string; label: string};

export type HomepageContent = {
  meta: {
    title: string;
    description: string;
    keywords: string;
    ogTitle: string;
    ogDescription: string;
  };
  hero: {
    eyebrow: string;
    titlePre: string;
    titleAccent: string;
    titlePost: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    notePre: string;
    notePost: string;
    stats: HomepageStat[];
  };
  intro: {
    h2: string;
    intro: React.ReactNode;
    bullets: Array<{label: string; description: string}>;
  };
  features: {
    h2: string;
    subtitle: string;
    learnMore: string;
    cards: HomepageFeature[];
  };
  quickStart: {
    kicker: string;
    h2: string;
    lead: React.ReactNode;
    steps: React.ReactNode[];
    primaryCta: string;
    secondaryCta: string;
  };
  useCases: {
    h2: string;
    subtitle: string;
    learnMore: string;
    cards: HomepageUseCase[];
  };
  access: {
    kicker: string;
    h2: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    finePrint: React.ReactNode;
  };
  faq: {
    h2: string;
    subtitle: string;
    items: HomepageFaq[];
  };
  finalCta: {
    h2: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

const SALES_EMAIL = 'sales@tictactrip.eu';

export const homepage: Translations<HomepageContent> = {
  // ============================================================================
  // English (default)
  // ============================================================================
  en: {
    meta: {
      title: 'Tictactrip API — Train & bus booking API for Europe',
      description:
        'One REST API to search, compare and book European trains, buses and their combinations. 250+ carriers, multimodal itineraries, real-time inventory, CO₂ emissions and end-to-end ticketing. Contact sales@tictactrip.eu to get access.',
      keywords:
        'train API, bus API, European travel API, multimodal travel API, rail booking API, SNCF API, FlixBus API, Trenitalia API, Renfe API, CO2 travel API, sustainable travel API, Tictactrip API',
      ogTitle: 'Tictactrip Documentation — Train & bus booking API for Europe',
      ogDescription:
        'One REST API for European trains, buses and their combinations. 250+ carriers, real-time inventory, CO₂ data, end-to-end ticketing. Request API access at sales@tictactrip.eu.',
    },
    hero: {
      eyebrow: 'Tictactrip Developer Platform',
      titlePre: 'One API for European ',
      titleAccent: 'trains, buses',
      titlePost: ' and their combinations',
      subtitle:
        'Search, compare and book multimodal long-distance journeys across Europe. Real-time inventory, CO₂ footprint included, ticket delivery built in.',
      primaryCta: 'Read the API tutorial',
      secondaryCta: 'Request API access',
      notePre: 'API access is granted on request. Contact ',
      notePost: ' to get started.',
      stats: [
        {value: '250+', label: 'carriers integrated'},
        {value: '20+', label: 'European countries'},
        {value: '1 API', label: 'train · bus'},
      ],
    },
    intro: {
      h2: 'What is the Tictactrip API?',
      intro: (
        <>
          <p>
            <strong>Tictactrip</strong> is a European distribution platform for long-distance ground transport. Our API gives you
            programmatic access to <strong>train and bus inventory</strong> from hundreds of carriers, plus a proprietary routing
            engine that <strong>combines several operators into a single itinerary</strong> when no direct option exists.
          </p>
          <p>
            You integrate once. We handle carrier contracts, ticketing, payments, CO₂ computation and after-sales operations.
          </p>
        </>
      ),
      bullets: [
        {label: 'Trains', description: 'high-speed, intercity and regional rail'},
        {label: 'Buses', description: 'long-distance carriers across Europe'},
        {label: 'Combinations', description: 'multi-leg, multi-operator itineraries'},
        {label: 'CO₂ data', description: 'emissions per passenger, per leg'},
        {label: 'End-to-end booking', description: 'search, reserve, pay, ticket'},
      ],
    },
    features: {
      h2: 'Everything you need to ship travel features',
      subtitle:
        'A production-grade REST API used by travel agencies, fintechs and sustainability platforms.',
      learnMore: 'Learn more →',
      cards: [
        {
          icon: '🚆',
          title: 'Multimodal coverage',
          description:
            'A single API to search, compare and book trains, buses and their combinations across Europe — SNCF, Trenitalia, FlixBus, BlaBlaCar Bus, Renfe and more.',
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
            'Our routing engine assembles train and bus legs into a single itinerary when a direct journey is not available — the unique Tictactrip value.',
        },
        {
          icon: '🎫',
          title: 'End-to-end booking',
          description:
            'Search, reserve, pay and issue tickets through one REST API. Tickets are delivered as PDF, ready to email, print or embed in your own product.',
        },
        {
          icon: '🛠️',
          title: 'Developer-first',
          description:
            'Clean REST endpoints, OpenAPI specification, Postman collection and step-by-step tutorials. Ship your integration in days, not months.',
        },
      ],
    },
    quickStart: {
      kicker: 'Quick start',
      h2: 'From zero to first booking in 4 calls',
      lead: (
        <>
          Authenticate, resolve origin and destination, search itineraries, then book. Our step-by-step tutorial walks through every
          endpoint with curl examples and a ready-to-use Postman collection.
        </>
      ),
      steps: [
        <>Request your <strong>authentication token</strong> from {SALES_EMAIL}</>,
        <>Resolve city IDs via <code>GET /v2/stopClusters</code></>,
        <>Search itineraries via <code>POST /v2/results</code></>,
        <>Book and issue tickets via <code>POST /book</code></>,
      ],
      primaryCta: 'Start the tutorial',
      secondaryCta: 'Browse the API reference',
    },
    useCases: {
      h2: 'Built for the teams reinventing travel',
      subtitle:
        'Whether you sell trips, manage corporate travel or build climate-tech, the API fits in.',
      learnMore: 'Learn more →',
      cards: [
        {
          title: 'Online Travel Agencies (OTA)',
          description:
            'Add ground transport inventory to your air-and-hotel offering. Sell European rail and bus without negotiating with every carrier.',
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
      ],
    },
    access: {
      kicker: 'Get API access',
      h2: 'Talk to our team to unlock the Tictactrip API',
      lead:
        "API access is granted after a short commercial discussion to match the right plan, carriers and SLA to your project. Send us a note about your use case and we'll come back to you within one business day.",
      primaryCta: 'Email sales@tictactrip.eu',
      secondaryCta: 'Technical question?',
      finePrint: (
        <>
          Already a partner? Use your existing token to authenticate against <code>https://api.tictactrip.eu</code>.
        </>
      ),
    },
    faq: {
      h2: 'Frequently asked questions',
      subtitle: 'Everything developers and product teams ask before integrating.',
      items: [
        {
          q: 'What is the Tictactrip API?',
          a: 'The Tictactrip API is a REST interface that lets developers search, compare and book trains and buses across Europe — including multimodal combinations of several carriers in a single itinerary.',
        },
        {
          q: 'How do I get access to the Tictactrip API?',
          a: `Access to the production API is granted on request. Contact our sales team at ${SALES_EMAIL} to discuss your use case, sign a commercial agreement and receive your authentication token.`,
        },
        {
          q: 'Which carriers and countries are covered?',
          a: 'The API aggregates major European rail and bus operators including SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo and many regional carriers. Coverage extends across France, Italy, Spain, Germany, Benelux and the rest of continental Europe.',
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
          a: 'Tickets are issued as PDFs that you can email to travellers, print, or render inside your own product.',
        },
        {
          q: 'Is the API GDPR-compliant?',
          a: 'Yes. Tictactrip is a French company and the API is operated in compliance with the GDPR. Passenger data is processed strictly for the purpose of issuing the requested transport tickets.',
        },
      ],
    },
    finalCta: {
      h2: 'Ready to ship multimodal travel?',
      lead: 'Read the tutorial, browse the reference, or talk to sales — your call.',
      primaryCta: 'Read the docs',
      secondaryCta: 'Contact sales',
    },
  },

  // ============================================================================
  // Français
  // ============================================================================
  fr: {
    meta: {
      title: "API Tictactrip — API de réservation de trains et bus pour l'Europe",
      description:
        "Une API REST pour rechercher, comparer et réserver les trains et bus européens et leurs combinaisons. 250+ transporteurs, itinéraires multimodaux, inventaire en temps réel, émissions de CO₂ et billetterie de bout en bout. Contactez sales@tictactrip.eu pour obtenir un accès.",
      keywords:
        "API trains, API bus, API voyage Europe, API multimodale, API de réservation ferroviaire, API SNCF, API FlixBus, API Trenitalia, API Renfe, API CO2 voyage, API voyage durable, API Tictactrip",
      ogTitle: "Documentation Tictactrip — API de réservation de trains et bus pour l'Europe",
      ogDescription:
        "Une API REST pour les trains et bus européens et leurs combinaisons. 250+ transporteurs, inventaire en temps réel, données CO₂, billetterie de bout en bout. Demandez un accès à l'API : sales@tictactrip.eu.",
    },
    hero: {
      eyebrow: 'Plateforme Développeur Tictactrip',
      titlePre: 'Une API pour les ',
      titleAccent: 'trains et bus',
      titlePost: ' européens et leurs combinaisons',
      subtitle:
        "Recherchez, comparez et réservez des trajets multimodaux longue distance à travers l'Europe. Inventaire en temps réel, empreinte CO₂ incluse, livraison du billet intégrée.",
      primaryCta: "Lire le tutoriel de l'API",
      secondaryCta: "Demander un accès à l'API",
      notePre: "L'accès à l'API est accordé sur demande. Contactez ",
      notePost: ' pour commencer.',
      stats: [
        {value: '250+', label: 'transporteurs intégrés'},
        {value: '20+', label: 'pays européens'},
        {value: '1 API', label: 'train · bus'},
      ],
    },
    intro: {
      h2: "Qu'est-ce que l'API Tictactrip ?",
      intro: (
        <>
          <p>
            <strong>Tictactrip</strong> est une plateforme européenne de distribution du transport terrestre longue distance. Notre
            API vous donne un accès programmatique à <strong>l'inventaire des trains et des bus</strong> de centaines de
            transporteurs, ainsi qu'un moteur de routage propriétaire qui <strong>combine plusieurs opérateurs en un seul
            itinéraire</strong> lorsqu'aucune option directe n'existe.
          </p>
          <p>
            Vous intégrez une seule fois. Nous gérons les contrats avec les transporteurs, la billetterie, les paiements, le calcul
            du CO₂ et les opérations après-vente.
          </p>
        </>
      ),
      bullets: [
        {label: 'Trains', description: 'à grande vitesse, intercités et régionaux'},
        {label: 'Bus', description: "transporteurs longue distance à travers l'Europe"},
        {label: 'Combinaisons', description: 'itinéraires multi-segments et multi-opérateurs'},
        {label: 'Données CO₂', description: 'émissions par passager, par segment'},
        {label: 'Réservation de bout en bout', description: 'recherche, réservation, paiement, billet'},
      ],
    },
    features: {
      h2: 'Tout ce dont vous avez besoin pour livrer des fonctionnalités voyage',
      subtitle:
        "Une API REST de production utilisée par des agences de voyage, fintechs et plateformes de durabilité.",
      learnMore: 'En savoir plus →',
      cards: [
        {
          icon: '🚆',
          title: 'Couverture multimodale',
          description:
            "Une seule API pour rechercher, comparer et réserver trains, bus et leurs combinaisons à travers l'Europe — SNCF, Trenitalia, FlixBus, BlaBlaCar Bus, Renfe et plus.",
        },
        {
          icon: '🌍',
          title: 'Éco-responsable par conception',
          description:
            "Chaque itinéraire renvoie son empreinte CO₂ afin que vos utilisateurs puissent choisir l'option la moins émettrice. Conçu pour les plateformes de voyage durable et le reporting ESG d'entreprise.",
        },
        {
          icon: '⚡',
          title: 'Disponibilité en temps réel',
          description:
            "Tarifs en direct, disponibilité des sièges et classes tarifaires rafraîchis en temps réel. Pas d'inventaire obsolète, pas de réservation qui échoue.",
        },
        {
          icon: '🔁',
          title: 'Combinaisons intelligentes',
          description:
            "Notre moteur de routage assemble des segments train et bus en un seul itinéraire quand un trajet direct n'existe pas — la valeur unique de Tictactrip.",
        },
        {
          icon: '🎫',
          title: 'Réservation de bout en bout',
          description:
            "Rechercher, réserver, payer et émettre des billets via une seule API REST. Les billets sont livrés en PDF, prêts à être envoyés par e-mail, imprimés ou intégrés dans votre propre produit.",
        },
        {
          icon: '🛠️',
          title: "D'abord pour les développeurs",
          description:
            "Endpoints REST propres, spécification OpenAPI, collection Postman et tutoriels pas à pas. Livrez votre intégration en jours, pas en mois.",
        },
      ],
    },
    quickStart: {
      kicker: 'Démarrage rapide',
      h2: 'De zéro à la première réservation en 4 appels',
      lead: (
        <>
          Authentifiez-vous, résolvez les origines et destinations, recherchez des itinéraires, puis réservez. Notre tutoriel pas à pas
          parcourt chaque endpoint avec des exemples curl et une collection Postman prête à l'emploi.
        </>
      ),
      steps: [
        <>Demandez votre <strong>jeton d'authentification</strong> à {SALES_EMAIL}</>,
        <>Résolvez les identifiants de ville via <code>GET /v2/stopClusters</code></>,
        <>Cherchez des itinéraires via <code>POST /v2/results</code></>,
        <>Réservez et émettez les billets via <code>POST /book</code></>,
      ],
      primaryCta: 'Commencer le tutoriel',
      secondaryCta: "Parcourir la référence de l'API",
    },
    useCases: {
      h2: 'Conçu pour les équipes qui réinventent le voyage',
      subtitle:
        "Que vous vendiez des voyages, gériez le voyage d'affaires ou construisiez de la climate-tech, l'API s'intègre.",
      learnMore: 'En savoir plus →',
      cards: [
        {
          title: 'Agences de voyage en ligne (OTA)',
          description:
            "Ajoutez l'inventaire du transport terrestre à votre offre avion+hôtel. Vendez le rail et le bus européens sans négocier avec chaque transporteur.",
        },
        {
          title: "Voyage d'affaires & TMC",
          description:
            "Alimentez votre plateforme de voyage d'affaires avec des itinéraires multimodaux et un reporting CO₂ adaptés à votre mandat de durabilité.",
        },
        {
          title: 'Fintech & super-apps',
          description:
            "Intégrez la réservation de voyage dans des néobanques, applications de fidélité et portefeuilles mobilité via une seule intégration.",
        },
        {
          title: 'Mobilité & plateformes MaaS',
          description:
            "Complétez la mobilité urbaine (trottinettes, autopartage, transit) avec des trains et bus longue distance pour offrir de vrais trajets porte-à-porte.",
        },
        {
          title: 'Green-tech & durabilité',
          description:
            "Construisez des outils de voyage climato-conscients, plateformes de mobilité salariés ou produits de budget carbone à partir de données CO₂ vérifiées.",
        },
        {
          title: 'Outils internes & sur mesure',
          description:
            "Équipes achats, universités, ONG et organisateurs d'événements utilisent notre API pour centraliser leurs achats de voyage.",
        },
      ],
    },
    access: {
      kicker: "Obtenir l'accès à l'API",
      h2: "Parlez à notre équipe pour débloquer l'API Tictactrip",
      lead:
        "L'accès à l'API est accordé après une courte discussion commerciale pour aligner le bon plan, les transporteurs et le SLA à votre projet. Envoyez-nous un mot sur votre cas d'usage et nous reviendrons vers vous sous un jour ouvré.",
      primaryCta: 'Écrire à sales@tictactrip.eu',
      secondaryCta: 'Question technique ?',
      finePrint: (
        <>
          Déjà partenaire ? Utilisez votre jeton existant pour vous authentifier auprès de <code>https://api.tictactrip.eu</code>.
        </>
      ),
    },
    faq: {
      h2: 'Questions fréquentes',
      subtitle: "Tout ce que les développeurs et équipes produit demandent avant d'intégrer.",
      items: [
        {
          q: "Qu'est-ce que l'API Tictactrip ?",
          a: "L'API Tictactrip est une interface REST qui permet aux développeurs de rechercher, comparer et réserver des trains et bus à travers l'Europe — y compris des combinaisons multimodales de plusieurs transporteurs en un seul itinéraire.",
        },
        {
          q: "Comment obtenir l'accès à l'API Tictactrip ?",
          a: `L'accès à l'API en production est accordé sur demande. Contactez notre équipe commerciale à ${SALES_EMAIL} pour discuter de votre cas d'usage, signer un accord commercial et recevoir votre jeton d'authentification.`,
        },
        {
          q: 'Quels transporteurs et pays sont couverts ?',
          a: "L'API agrège les principaux opérateurs ferroviaires et de bus européens dont SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo et de nombreux transporteurs régionaux. La couverture s'étend en France, Italie, Espagne, Allemagne, Benelux et dans le reste de l'Europe continentale.",
        },
        {
          q: "Comment l'API est-elle tarifée ?",
          a: `Le tarif dépend du volume, du type de transaction et des transporteurs dont vous avez besoin. Contactez ${SALES_EMAIL} pour recevoir une proposition commerciale sur mesure.`,
        },
        {
          q: "Fournissez-vous des données d'émissions de CO₂ ?",
          a: "Oui. Chaque itinéraire renvoyé par l'endpoint de recherche inclut l'empreinte CO₂ estimée par passager, ce qui facilite la mise en avant de l'option la plus éco-responsable dans votre produit.",
        },
        {
          q: "Combien de temps prend l'intégration ?",
          a: "La plupart des partenaires sont en production en 2 à 6 semaines. L'API expose une surface REST propre, une spécification OpenAPI et une collection Postman prête à l'emploi pour que les équipes d'ingénierie puissent prototyper dès le premier jour.",
        },
        {
          q: 'Dans quels formats les billets sont-ils livrés ?',
          a: "Les billets sont émis en PDF que vous pouvez envoyer par e-mail aux voyageurs, imprimer ou afficher dans votre propre produit.",
        },
        {
          q: "L'API est-elle conforme au RGPD ?",
          a: "Oui. Tictactrip est une société française et l'API est exploitée en conformité avec le RGPD. Les données des voyageurs sont traitées strictement pour émettre les billets de transport demandés.",
        },
      ],
    },
    finalCta: {
      h2: 'Prêt à livrer du voyage multimodal ?',
      lead: 'Lisez le tutoriel, parcourez la référence, ou parlez à un commercial — à vous de voir.',
      primaryCta: 'Lire la documentation',
      secondaryCta: "Contacter l'équipe commerciale",
    },
  },

  // ============================================================================
  // Deutsch
  // ============================================================================
  de: {
    meta: {
      title: 'Tictactrip API — Buchungs-API für Züge und Busse in Europa',
      description:
        'Eine REST-API für die Suche, den Vergleich und die Buchung europäischer Züge, Busse und ihrer Kombinationen. 250+ Transporteure, multimodale Verbindungen, Echtzeit-Inventar, CO₂-Emissionen und durchgängige Ticketierung. Kontaktieren Sie sales@tictactrip.eu für den Zugang.',
      keywords:
        'Zug-API, Bus-API, europäische Reise-API, multimodale Reise-API, Bahnbuchungs-API, SNCF API, FlixBus API, Trenitalia API, Renfe API, CO2-Reise-API, nachhaltige Reise-API, Tictactrip API',
      ogTitle: 'Tictactrip Dokumentation — Buchungs-API für Züge und Busse in Europa',
      ogDescription:
        'Eine REST-API für europäische Züge, Busse und ihre Kombinationen. 250+ Transporteure, Echtzeit-Inventar, CO₂-Daten, durchgängige Ticketierung. API-Zugang anfragen unter sales@tictactrip.eu.',
    },
    hero: {
      eyebrow: 'Tictactrip Entwicklerplattform',
      titlePre: 'Eine API für europäische ',
      titleAccent: 'Züge und Busse',
      titlePost: ' und ihre Kombinationen',
      subtitle:
        'Suchen, vergleichen und buchen Sie multimodale Fernreisen quer durch Europa. Echtzeit-Inventar, CO₂-Fußabdruck inklusive, Ticketauslieferung eingebaut.',
      primaryCta: 'API-Tutorial lesen',
      secondaryCta: 'API-Zugang anfragen',
      notePre: 'Der API-Zugang wird auf Anfrage gewährt. Kontaktieren Sie ',
      notePost: ', um zu starten.',
      stats: [
        {value: '250+', label: 'integrierte Transporteure'},
        {value: '20+', label: 'europäische Länder'},
        {value: '1 API', label: 'Zug · Bus'},
      ],
    },
    intro: {
      h2: 'Was ist die Tictactrip API?',
      intro: (
        <>
          <p>
            <strong>Tictactrip</strong> ist eine europäische Vertriebsplattform für Fern-Bodentransport. Unsere API bietet
            programmatischen Zugriff auf <strong>Zug- und Bus-Inventar</strong> von Hunderten von Transporteuren — plus eine
            eigene Routing-Engine, die <strong>mehrere Betreiber zu einer einzigen Verbindung kombiniert</strong>, wenn keine
            direkte Option existiert.
          </p>
          <p>
            Sie integrieren einmal. Wir kümmern uns um Transporteur-Verträge, Ticketing, Zahlungen, CO₂-Berechnung und
            After-Sales-Vorgänge.
          </p>
        </>
      ),
      bullets: [
        {label: 'Züge', description: 'Hochgeschwindigkeit, Intercity und Regionalverkehr'},
        {label: 'Busse', description: 'Fernverkehrs-Transporteure in ganz Europa'},
        {label: 'Kombinationen', description: 'mehrteilige Verbindungen mit mehreren Betreibern'},
        {label: 'CO₂-Daten', description: 'Emissionen pro Passagier, pro Teilstrecke'},
        {label: 'End-to-End-Buchung', description: 'Suche, Reservierung, Zahlung, Ticket'},
      ],
    },
    features: {
      h2: 'Alles, was Sie brauchen, um Reise-Features auszuliefern',
      subtitle:
        'Eine produktionsreife REST-API, genutzt von Reisebüros, Fintechs und Nachhaltigkeits-Plattformen.',
      learnMore: 'Mehr erfahren →',
      cards: [
        {
          icon: '🚆',
          title: 'Multimodale Abdeckung',
          description:
            'Eine API, um Züge, Busse und ihre Kombinationen quer durch Europa zu suchen, vergleichen und buchen — SNCF, Trenitalia, FlixBus, BlaBlaCar Bus, Renfe und mehr.',
        },
        {
          icon: '🌍',
          title: 'Ökologisch von Grund auf',
          description:
            'Jede Verbindung liefert ihren CO₂-Fußabdruck, damit Ihre Nutzer die emissionsärmste Option wählen können. Gebaut für nachhaltige Reiseplattformen und Unternehmens-ESG-Reporting.',
        },
        {
          icon: '⚡',
          title: 'Echtzeit-Verfügbarkeit',
          description:
            'Live-Preise, Sitzplatzverfügbarkeit und Tarifklassen werden in Echtzeit aktualisiert. Kein veraltetes Inventar, keine fehlgeschlagenen Buchungen.',
        },
        {
          icon: '🔁',
          title: 'Intelligente Kombinationen',
          description:
            'Unsere Routing-Engine fügt Zug- und Bus-Teilstrecken zu einer einzigen Verbindung zusammen, wenn keine direkte Verbindung existiert — der einzigartige Tictactrip-Vorteil.',
        },
        {
          icon: '🎫',
          title: 'End-to-End-Buchung',
          description:
            'Suchen, reservieren, zahlen und Tickets ausstellen über eine REST-API. Tickets werden als PDF geliefert, bereit zum Versand per E-Mail, zum Drucken oder zur Einbettung in Ihr eigenes Produkt.',
        },
        {
          icon: '🛠️',
          title: 'Entwickler-zentriert',
          description:
            'Saubere REST-Endpunkte, OpenAPI-Spezifikation, Postman-Sammlung und Schritt-für-Schritt-Tutorials. Liefern Sie Ihre Integration in Tagen, nicht in Monaten.',
        },
      ],
    },
    quickStart: {
      kicker: 'Schnellstart',
      h2: 'Von Null zur ersten Buchung in 4 Aufrufen',
      lead: (
        <>
          Authentifizieren, Start- und Ziel-IDs auflösen, Verbindungen suchen, dann buchen. Unser Schritt-für-Schritt-Tutorial geht
          jeden Endpunkt mit curl-Beispielen und einer gebrauchsfertigen Postman-Sammlung durch.
        </>
      ),
      steps: [
        <>Fragen Sie Ihr <strong>Authentifizierungs-Token</strong> bei {SALES_EMAIL} an</>,
        <>Stadt-IDs auflösen via <code>GET /v2/stopClusters</code></>,
        <>Verbindungen suchen via <code>POST /v2/results</code></>,
        <>Buchen und Tickets ausstellen via <code>POST /book</code></>,
      ],
      primaryCta: 'Tutorial starten',
      secondaryCta: 'API-Referenz durchsuchen',
    },
    useCases: {
      h2: 'Gebaut für die Teams, die das Reisen neu erfinden',
      subtitle:
        'Ob Sie Reisen verkaufen, Geschäftsreisen managen oder Climate-Tech bauen — die API passt.',
      learnMore: 'Mehr erfahren →',
      cards: [
        {
          title: 'Online-Reisebüros (OTA)',
          description:
            'Erweitern Sie Ihr Flug-und-Hotel-Angebot um Bodentransport. Verkaufen Sie europäische Bahn und Bus, ohne mit jedem Transporteur einzeln zu verhandeln.',
        },
        {
          title: 'Geschäftsreisen & TMC',
          description:
            'Versorgen Sie Ihre Business-Travel-Plattform mit multimodalen Verbindungen und CO₂-Reporting, das zu Ihrem Nachhaltigkeitsmandat passt.',
        },
        {
          title: 'Fintech & Super-Apps',
          description:
            'Integrieren Sie Reisebuchungen in Neobanken, Loyalty-Apps und Mobility-Wallets — über eine einzige Anbindung.',
        },
        {
          title: 'Mobilität & MaaS-Plattformen',
          description:
            'Ergänzen Sie urbane Mobilität (Scooter, Carsharing, ÖPNV) um Fernzüge und -busse für echte Tür-zu-Tür-Reisen.',
        },
        {
          title: 'Green-Tech & Nachhaltigkeit',
          description:
            'Bauen Sie klimabewusste Reisetools, Mitarbeiter-Pendelplattformen oder Carbon-Budget-Produkte auf verifizierten CO₂-Daten auf.',
        },
        {
          title: 'Maßgeschneiderte & interne Tools',
          description:
            'Einkaufsteams, Universitäten, NGOs und Veranstalter nutzen unsere API, um Reisekäufe zu zentralisieren.',
        },
      ],
    },
    access: {
      kicker: 'API-Zugang erhalten',
      h2: 'Sprechen Sie mit unserem Team, um die Tictactrip API freizuschalten',
      lead:
        'Der API-Zugang wird nach einem kurzen kaufmännischen Gespräch gewährt, um den passenden Plan, die richtigen Transporteure und das SLA für Ihr Projekt auszuwählen. Schreiben Sie uns kurz zu Ihrem Use Case — wir melden uns innerhalb eines Werktags.',
      primaryCta: 'E-Mail an sales@tictactrip.eu',
      secondaryCta: 'Technische Frage?',
      finePrint: (
        <>
          Bereits Partner? Verwenden Sie Ihr bestehendes Token zur Authentifizierung bei <code>https://api.tictactrip.eu</code>.
        </>
      ),
    },
    faq: {
      h2: 'Häufig gestellte Fragen',
      subtitle: 'Alles, was Entwickler- und Produktteams vor der Integration fragen.',
      items: [
        {
          q: 'Was ist die Tictactrip API?',
          a: 'Die Tictactrip API ist eine REST-Schnittstelle, mit der Entwickler Züge und Busse in ganz Europa suchen, vergleichen und buchen können — einschließlich multimodaler Kombinationen mehrerer Transporteure in einer einzigen Verbindung.',
        },
        {
          q: 'Wie erhalte ich Zugang zur Tictactrip API?',
          a: `Der Zugang zur Produktions-API wird auf Anfrage gewährt. Kontaktieren Sie unser Sales-Team unter ${SALES_EMAIL}, um Ihren Use Case zu besprechen, einen kaufmännischen Vertrag zu unterzeichnen und Ihr Authentifizierungs-Token zu erhalten.`,
        },
        {
          q: 'Welche Transporteure und Länder sind abgedeckt?',
          a: 'Die API aggregiert die wichtigsten europäischen Bahn- und Busbetreiber, darunter SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo und viele regionale Anbieter. Die Abdeckung erstreckt sich über Frankreich, Italien, Spanien, Deutschland, Benelux und den Rest Kontinentaleuropas.',
        },
        {
          q: 'Wie ist die API bepreist?',
          a: `Der Preis hängt vom Volumen, Transaktionstyp und den benötigten Transporteuren ab. Kontaktieren Sie ${SALES_EMAIL} für ein maßgeschneidertes kaufmännisches Angebot.`,
        },
        {
          q: 'Liefern Sie CO₂-Emissionsdaten?',
          a: 'Ja. Jede Verbindung, die der Suchendpunkt zurückliefert, enthält den geschätzten CO₂-Fußabdruck pro Passagier — so können Sie die umweltverträglichste Option leicht hervorheben.',
        },
        {
          q: 'Wie lange dauert die Integration?',
          a: 'Die meisten Partner gehen in 2 bis 6 Wochen live. Die API stellt eine saubere REST-Oberfläche, eine OpenAPI-Spezifikation und eine sofort einsetzbare Postman-Sammlung bereit, sodass Engineering-Teams ab Tag eins prototypisieren können.',
        },
        {
          q: 'In welchen Formaten werden Tickets geliefert?',
          a: 'Tickets werden als PDFs ausgestellt, die Sie per E-Mail an Reisende senden, drucken oder direkt in Ihrem Produkt anzeigen können.',
        },
        {
          q: 'Ist die API DSGVO-konform?',
          a: 'Ja. Tictactrip ist ein französisches Unternehmen, und die API wird DSGVO-konform betrieben. Passagierdaten werden ausschließlich zur Ausstellung der angefragten Transporttickets verarbeitet.',
        },
      ],
    },
    finalCta: {
      h2: 'Bereit, multimodale Reisen auszuliefern?',
      lead: 'Lesen Sie das Tutorial, durchstöbern Sie die Referenz oder sprechen Sie mit Sales — Ihre Wahl.',
      primaryCta: 'Dokumentation lesen',
      secondaryCta: 'Vertrieb kontaktieren',
    },
  },

  // ============================================================================
  // Español
  // ============================================================================
  es: {
    meta: {
      title: 'API Tictactrip — API de reserva de trenes y autobuses para Europa',
      description:
        'Una API REST para buscar, comparar y reservar trenes, autobuses europeos y sus combinaciones. 250+ operadores, itinerarios multimodales, inventario en tiempo real, emisiones de CO₂ y emisión de billetes de extremo a extremo. Contacta con sales@tictactrip.eu para obtener acceso.',
      keywords:
        'API de trenes, API de autobuses, API de viajes Europa, API multimodal, API de reserva ferroviaria, API SNCF, API FlixBus, API Trenitalia, API Renfe, API CO2 viajes, API viaje sostenible, API Tictactrip',
      ogTitle: 'Documentación Tictactrip — API de reserva de trenes y autobuses para Europa',
      ogDescription:
        'Una API REST para trenes, autobuses europeos y sus combinaciones. 250+ operadores, inventario en tiempo real, datos de CO₂, emisión de billetes extremo a extremo. Solicite acceso en sales@tictactrip.eu.',
    },
    hero: {
      eyebrow: 'Plataforma para desarrolladores Tictactrip',
      titlePre: 'Una API para los ',
      titleAccent: 'trenes y autobuses',
      titlePost: ' europeos y sus combinaciones',
      subtitle:
        'Busca, compara y reserva viajes multimodales de larga distancia por toda Europa. Inventario en tiempo real, huella de CO₂ incluida, entrega de billete integrada.',
      primaryCta: 'Leer el tutorial de la API',
      secondaryCta: 'Solicitar acceso a la API',
      notePre: 'El acceso a la API se concede bajo solicitud. Contacta con ',
      notePost: ' para empezar.',
      stats: [
        {value: '250+', label: 'operadores integrados'},
        {value: '20+', label: 'países europeos'},
        {value: '1 API', label: 'tren · autobús'},
      ],
    },
    intro: {
      h2: '¿Qué es la API Tictactrip?',
      intro: (
        <>
          <p>
            <strong>Tictactrip</strong> es una plataforma europea de distribución de transporte terrestre de larga distancia. Nuestra
            API te da acceso programático al <strong>inventario de trenes y autobuses</strong> de cientos de operadores, además de un
            motor de rutas propio que <strong>combina varios operadores en un único itinerario</strong> cuando no existe opción
            directa.
          </p>
          <p>
            Te integras una sola vez. Nosotros gestionamos los contratos con los operadores, la emisión de billetes, los pagos, el
            cálculo de CO₂ y la postventa.
          </p>
        </>
      ),
      bullets: [
        {label: 'Trenes', description: 'alta velocidad, intercity y regionales'},
        {label: 'Autobuses', description: 'operadores de larga distancia por toda Europa'},
        {label: 'Combinaciones', description: 'itinerarios multi-tramo y multi-operador'},
        {label: 'Datos de CO₂', description: 'emisiones por pasajero y por tramo'},
        {label: 'Reserva extremo a extremo', description: 'búsqueda, reserva, pago, billete'},
      ],
    },
    features: {
      h2: 'Todo lo necesario para lanzar funciones de viaje',
      subtitle:
        'Una API REST de producción usada por agencias de viaje, fintech y plataformas de sostenibilidad.',
      learnMore: 'Más información →',
      cards: [
        {
          icon: '🚆',
          title: 'Cobertura multimodal',
          description:
            'Una sola API para buscar, comparar y reservar trenes, autobuses y sus combinaciones por toda Europa — SNCF, Trenitalia, FlixBus, BlaBlaCar Bus, Renfe y más.',
        },
        {
          icon: '🌍',
          title: 'Eco-responsable por diseño',
          description:
            'Cada itinerario devuelve su huella de CO₂ para que tus usuarios elijan la opción con menos emisiones. Pensado para plataformas de viaje sostenible y reporting ESG corporativo.',
        },
        {
          icon: '⚡',
          title: 'Disponibilidad en tiempo real',
          description:
            'Precios en vivo, disponibilidad de plazas y clases tarifarias actualizadas en tiempo real. Sin inventario obsoleto, sin reservas fallidas.',
        },
        {
          icon: '🔁',
          title: 'Combinaciones inteligentes',
          description:
            'Nuestro motor de rutas ensambla tramos de tren y autobús en un único itinerario cuando no hay un trayecto directo — el valor único de Tictactrip.',
        },
        {
          icon: '🎫',
          title: 'Reserva extremo a extremo',
          description:
            'Buscar, reservar, pagar y emitir billetes a través de una sola API REST. Los billetes se entregan en PDF, listos para enviar por correo, imprimir o integrar en tu producto.',
        },
        {
          icon: '🛠️',
          title: 'Pensado para desarrolladores',
          description:
            'Endpoints REST limpios, especificación OpenAPI, colección Postman y tutoriales paso a paso. Lanza tu integración en días, no en meses.',
        },
      ],
    },
    quickStart: {
      kicker: 'Inicio rápido',
      h2: 'De cero a primera reserva en 4 llamadas',
      lead: (
        <>
          Autentícate, resuelve origen y destino, busca itinerarios y reserva. Nuestro tutorial paso a paso recorre cada endpoint con
          ejemplos curl y una colección Postman lista para usar.
        </>
      ),
      steps: [
        <>Solicita tu <strong>token de autenticación</strong> a {SALES_EMAIL}</>,
        <>Resuelve los IDs de ciudad con <code>GET /v2/stopClusters</code></>,
        <>Busca itinerarios con <code>POST /v2/results</code></>,
        <>Reserva y emite billetes con <code>POST /book</code></>,
      ],
      primaryCta: 'Empezar el tutorial',
      secondaryCta: 'Explorar la referencia de la API',
    },
    useCases: {
      h2: 'Pensada para los equipos que reinventan el viaje',
      subtitle:
        'Tanto si vendes viajes, gestionas viajes corporativos o construyes climate-tech, la API encaja.',
      learnMore: 'Más información →',
      cards: [
        {
          title: 'Agencias de viajes online (OTA)',
          description:
            'Añade el inventario de transporte terrestre a tu oferta de avión + hotel. Vende ferrocarril y autobús europeo sin negociar con cada operador.',
        },
        {
          title: 'Viajes corporativos & TMC',
          description:
            'Potencia tu plataforma de viajes de negocios con itinerarios multimodales y reporting de CO₂ ajustados a tu mandato de sostenibilidad.',
        },
        {
          title: 'Fintech & super-apps',
          description:
            'Integra reserva de viajes dentro de neobancos, apps de fidelidad y monederos de movilidad — con una sola integración.',
        },
        {
          title: 'Plataformas de movilidad y MaaS',
          description:
            'Complementa la movilidad urbana (patinetes, carsharing, transporte público) con trenes y autobuses de larga distancia para ofrecer viajes puerta a puerta reales.',
        },
        {
          title: 'Green-tech & sostenibilidad',
          description:
            'Construye herramientas de viaje conscientes del clima, plataformas de movilidad para empleados o productos de presupuesto de carbono sobre datos de CO₂ verificados.',
        },
        {
          title: 'Herramientas internas y a medida',
          description:
            'Equipos de compras, universidades, ONG y organizadores de eventos usan nuestra API para centralizar la compra de viajes.',
        },
      ],
    },
    access: {
      kicker: 'Obtener acceso a la API',
      h2: 'Habla con nuestro equipo para desbloquear la API Tictactrip',
      lead:
        'El acceso a la API se concede tras una breve conversación comercial para ajustar el plan, los operadores y el SLA a tu proyecto. Cuéntanos tu caso de uso y te respondemos en un día hábil.',
      primaryCta: 'Escribir a sales@tictactrip.eu',
      secondaryCta: '¿Pregunta técnica?',
      finePrint: (
        <>
          ¿Ya eres socio? Usa tu token existente para autenticarte contra <code>https://api.tictactrip.eu</code>.
        </>
      ),
    },
    faq: {
      h2: 'Preguntas frecuentes',
      subtitle: 'Todo lo que los equipos de desarrollo y producto preguntan antes de integrar.',
      items: [
        {
          q: '¿Qué es la API Tictactrip?',
          a: 'La API Tictactrip es una interfaz REST que permite a los desarrolladores buscar, comparar y reservar trenes y autobuses por toda Europa — incluyendo combinaciones multimodales de varios operadores en un único itinerario.',
        },
        {
          q: '¿Cómo se obtiene acceso a la API Tictactrip?',
          a: `El acceso a la API en producción se concede bajo solicitud. Contacta con nuestro equipo comercial en ${SALES_EMAIL} para discutir tu caso de uso, firmar un acuerdo comercial y recibir tu token de autenticación.`,
        },
        {
          q: '¿Qué operadores y países están cubiertos?',
          a: 'La API agrega los principales operadores ferroviarios y de autobuses europeos, incluidos SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo y muchos operadores regionales. La cobertura se extiende por Francia, Italia, España, Alemania, Benelux y el resto de Europa continental.',
        },
        {
          q: '¿Cómo se factura la API?',
          a: `El precio depende del volumen, el tipo de transacción y los operadores que necesites. Contacta con ${SALES_EMAIL} para recibir una propuesta comercial a medida.`,
        },
        {
          q: '¿Proporcionáis datos de emisiones de CO₂?',
          a: 'Sí. Cada itinerario devuelto por el endpoint de búsqueda incluye la huella de CO₂ estimada por pasajero, lo que facilita destacar la opción más eco-responsable en tu producto.',
        },
        {
          q: '¿Cuánto tarda la integración?',
          a: 'La mayoría de socios entra en producción en 2 a 6 semanas. La API expone una superficie REST limpia, una especificación OpenAPI y una colección Postman lista para usar, de modo que los equipos de ingeniería pueden prototipar el primer día.',
        },
        {
          q: '¿En qué formatos se entregan los billetes?',
          a: 'Los billetes se emiten en PDF que puedes enviar por correo a los viajeros, imprimir o renderizar dentro de tu producto.',
        },
        {
          q: '¿La API cumple el RGPD?',
          a: 'Sí. Tictactrip es una empresa francesa y la API opera en cumplimiento del RGPD. Los datos del pasajero se procesan estrictamente para emitir los billetes de transporte solicitados.',
        },
      ],
    },
    finalCta: {
      h2: '¿Listo para lanzar viaje multimodal?',
      lead: 'Lee el tutorial, explora la referencia o habla con ventas — tú decides.',
      primaryCta: 'Leer la documentación',
      secondaryCta: 'Contactar con ventas',
    },
  },

  // ============================================================================
  // Italiano
  // ============================================================================
  it: {
    meta: {
      title: "API Tictactrip — API di prenotazione treni e autobus per l'Europa",
      description:
        "Un'API REST per cercare, confrontare e prenotare treni, autobus europei e le loro combinazioni. 250+ vettori, itinerari multimodali, inventario in tempo reale, emissioni di CO₂ e biglietteria end-to-end. Contatta sales@tictactrip.eu per ottenere l'accesso.",
      keywords:
        'API treni, API autobus, API viaggi Europa, API multimodale, API prenotazione ferroviaria, API SNCF, API FlixBus, API Trenitalia, API Renfe, API CO2 viaggi, API viaggio sostenibile, API Tictactrip',
      ogTitle: "Documentazione Tictactrip — API di prenotazione treni e autobus per l'Europa",
      ogDescription:
        "Un'API REST per treni, autobus europei e le loro combinazioni. 250+ vettori, inventario in tempo reale, dati CO₂, biglietteria end-to-end. Richiedi l'accesso all'API a sales@tictactrip.eu.",
    },
    hero: {
      eyebrow: 'Piattaforma per sviluppatori Tictactrip',
      titlePre: "Un'API per i ",
      titleAccent: 'treni e gli autobus',
      titlePost: ' europei e le loro combinazioni',
      subtitle:
        "Cerca, confronta e prenota viaggi multimodali a lunga distanza in tutta Europa. Inventario in tempo reale, impronta di CO₂ inclusa, consegna del biglietto integrata.",
      primaryCta: "Leggi il tutorial dell'API",
      secondaryCta: "Richiedi l'accesso all'API",
      notePre: "L'accesso all'API è concesso su richiesta. Contatta ",
      notePost: ' per iniziare.',
      stats: [
        {value: '250+', label: 'vettori integrati'},
        {value: '20+', label: 'paesi europei'},
        {value: '1 API', label: 'treno · autobus'},
      ],
    },
    intro: {
      h2: "Cos'è l'API Tictactrip?",
      intro: (
        <>
          <p>
            <strong>Tictactrip</strong> è una piattaforma europea di distribuzione del trasporto terrestre a lunga distanza. La
            nostra API ti dà accesso programmatico all'<strong>inventario di treni e autobus</strong> di centinaia di vettori, oltre
            a un motore di routing proprietario che <strong>combina più operatori in un unico itinerario</strong> quando non esiste
            un'opzione diretta.
          </p>
          <p>
            Integri una volta sola. Noi gestiamo i contratti con i vettori, la biglietteria, i pagamenti, il calcolo della CO₂ e il
            post-vendita.
          </p>
        </>
      ),
      bullets: [
        {label: 'Treni', description: 'alta velocità, intercity e regionali'},
        {label: 'Autobus', description: 'vettori a lunga distanza in tutta Europa'},
        {label: 'Combinazioni', description: 'itinerari multi-tratta e multi-operatore'},
        {label: 'Dati CO₂', description: 'emissioni per passeggero e per tratta'},
        {label: 'Prenotazione end-to-end', description: 'ricerca, prenotazione, pagamento, biglietto'},
      ],
    },
    features: {
      h2: 'Tutto ciò che serve per lanciare funzioni di viaggio',
      subtitle:
        "Un'API REST production-grade usata da agenzie di viaggio, fintech e piattaforme di sostenibilità.",
      learnMore: 'Scopri di più →',
      cards: [
        {
          icon: '🚆',
          title: 'Copertura multimodale',
          description:
            "Una sola API per cercare, confrontare e prenotare treni, autobus e le loro combinazioni in tutta Europa — SNCF, Trenitalia, FlixBus, BlaBlaCar Bus, Renfe e altri.",
        },
        {
          icon: '🌍',
          title: 'Eco-responsabile fin dal design',
          description:
            "Ogni itinerario restituisce la propria impronta di CO₂, così i tuoi utenti possono scegliere l'opzione meno inquinante. Pensato per piattaforme di viaggio sostenibile e reporting ESG aziendale.",
        },
        {
          icon: '⚡',
          title: 'Disponibilità in tempo reale',
          description:
            "Prezzi live, disponibilità di posti e classi tariffarie aggiornati in tempo reale. Niente inventario obsoleto, niente prenotazioni fallite.",
        },
        {
          icon: '🔁',
          title: 'Combinazioni intelligenti',
          description:
            "Il nostro motore di routing assembla tratte di treno e autobus in un unico itinerario quando un viaggio diretto non esiste — il valore unico di Tictactrip.",
        },
        {
          icon: '🎫',
          title: 'Prenotazione end-to-end',
          description:
            "Cerca, prenota, paga ed emetti biglietti tramite una sola API REST. I biglietti vengono consegnati in PDF, pronti per essere inviati via email, stampati o integrati nel tuo prodotto.",
        },
        {
          icon: '🛠️',
          title: 'Prima di tutto per gli sviluppatori',
          description:
            "Endpoint REST puliti, specifica OpenAPI, raccolta Postman e tutorial passo passo. Rilascia la tua integrazione in giorni, non in mesi.",
        },
      ],
    },
    quickStart: {
      kicker: 'Avvio rapido',
      h2: 'Da zero alla prima prenotazione in 4 chiamate',
      lead: (
        <>
          Autenticati, risolvi origine e destinazione, cerca itinerari, poi prenota. Il nostro tutorial passo passo accompagna ogni
          endpoint con esempi curl e una raccolta Postman pronta all'uso.
        </>
      ),
      steps: [
        <>Richiedi il tuo <strong>token di autenticazione</strong> a {SALES_EMAIL}</>,
        <>Risolvi gli ID città con <code>GET /v2/stopClusters</code></>,
        <>Cerca itinerari con <code>POST /v2/results</code></>,
        <>Prenota ed emetti i biglietti con <code>POST /book</code></>,
      ],
      primaryCta: 'Inizia il tutorial',
      secondaryCta: "Esplora il riferimento dell'API",
    },
    useCases: {
      h2: 'Costruita per i team che reinventano il viaggio',
      subtitle:
        "Che tu venda viaggi, gestisca trasferte aziendali o costruisca climate-tech, l'API si integra.",
      learnMore: 'Scopri di più →',
      cards: [
        {
          title: 'Agenzie di viaggio online (OTA)',
          description:
            "Aggiungi l'inventario del trasporto terrestre alla tua offerta volo + hotel. Vendi ferrovia e autobus europei senza negoziare con ogni vettore.",
        },
        {
          title: 'Viaggi aziendali & TMC',
          description:
            "Alimenta la tua piattaforma di business travel con itinerari multimodali e reporting di CO₂ allineati al tuo mandato di sostenibilità.",
        },
        {
          title: 'Fintech & super-app',
          description:
            "Integra la prenotazione di viaggi dentro neobanche, app di fidelizzazione e wallet di mobilità — con una sola integrazione.",
        },
        {
          title: 'Mobilità & piattaforme MaaS',
          description:
            "Completa la mobilità urbana (monopattini, car-sharing, trasporto pubblico) con treni e autobus a lunga distanza per offrire veri viaggi porta a porta.",
        },
        {
          title: 'Green-tech & sostenibilità',
          description:
            "Costruisci strumenti di viaggio attenti al clima, piattaforme di mobilità per dipendenti o prodotti di carbon budget su dati di CO₂ verificati.",
        },
        {
          title: 'Strumenti interni e su misura',
          description:
            "Team acquisti, università, ONG e organizzatori di eventi usano la nostra API per centralizzare gli acquisti di viaggio.",
        },
      ],
    },
    access: {
      kicker: "Ottieni l'accesso all'API",
      h2: "Parla con il nostro team per sbloccare l'API Tictactrip",
      lead:
        "L'accesso all'API viene concesso dopo una breve conversazione commerciale per allineare il piano, i vettori e l'SLA giusti al tuo progetto. Raccontaci il tuo caso d'uso e ti risponderemo entro un giorno lavorativo.",
      primaryCta: 'Scrivi a sales@tictactrip.eu',
      secondaryCta: 'Domanda tecnica?',
      finePrint: (
        <>
          Sei già partner? Usa il tuo token esistente per autenticarti su <code>https://api.tictactrip.eu</code>.
        </>
      ),
    },
    faq: {
      h2: 'Domande frequenti',
      subtitle: 'Tutto ciò che i team di sviluppo e prodotto chiedono prima di integrare.',
      items: [
        {
          q: "Cos'è l'API Tictactrip?",
          a: "L'API Tictactrip è un'interfaccia REST che permette agli sviluppatori di cercare, confrontare e prenotare treni e autobus in tutta Europa — comprese combinazioni multimodali di più vettori in un unico itinerario.",
        },
        {
          q: "Come si ottiene l'accesso all'API Tictactrip?",
          a: `L'accesso all'API in produzione è concesso su richiesta. Contatta il nostro team commerciale a ${SALES_EMAIL} per discutere il tuo caso d'uso, firmare un accordo commerciale e ricevere il tuo token di autenticazione.`,
        },
        {
          q: 'Quali vettori e paesi sono coperti?',
          a: "L'API aggrega i principali operatori ferroviari e di autobus europei, fra cui SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo e molti vettori regionali. La copertura si estende a Francia, Italia, Spagna, Germania, Benelux e al resto dell'Europa continentale.",
        },
        {
          q: "Come è tariffata l'API?",
          a: `Il prezzo dipende dal volume, dal tipo di transazione e dai vettori di cui hai bisogno. Contatta ${SALES_EMAIL} per ricevere una proposta commerciale su misura.`,
        },
        {
          q: 'Fornite dati di emissioni di CO₂?',
          a: "Sì. Ogni itinerario restituito dall'endpoint di ricerca include l'impronta di CO₂ stimata per passeggero, semplificando l'evidenziazione dell'opzione più eco-responsabile nel tuo prodotto.",
        },
        {
          q: "Quanto tempo richiede l'integrazione?",
          a: "La maggior parte dei partner va in produzione in 2-6 settimane. L'API espone una superficie REST pulita, una specifica OpenAPI e una raccolta Postman pronta all'uso, così i team di ingegneria possono prototipare già dal primo giorno.",
        },
        {
          q: 'In quali formati vengono consegnati i biglietti?',
          a: 'I biglietti vengono emessi in PDF che puoi inviare via email ai viaggiatori, stampare o renderizzare dentro il tuo prodotto.',
        },
        {
          q: "L'API è conforme al GDPR?",
          a: "Sì. Tictactrip è un'azienda francese e l'API è operata in conformità al GDPR. I dati dei passeggeri sono trattati esclusivamente per emettere i biglietti di trasporto richiesti.",
        },
      ],
    },
    finalCta: {
      h2: 'Pronto a lanciare viaggi multimodali?',
      lead: 'Leggi il tutorial, esplora il riferimento o parla con il commerciale — scegli tu.',
      primaryCta: 'Leggi la documentazione',
      secondaryCta: 'Contatta le vendite',
    },
  },

  // ============================================================================
  // Português
  // ============================================================================
  pt: {
    meta: {
      title: 'API Tictactrip — API de reserva de comboios e autocarros para a Europa',
      description:
        'Uma API REST para procurar, comparar e reservar comboios, autocarros europeus e as suas combinações. 250+ transportadoras, itinerários multimodais, inventário em tempo real, emissões de CO₂ e emissão de bilhetes ponto a ponto. Contacte sales@tictactrip.eu para obter acesso.',
      keywords:
        'API comboios, API autocarros, API viagens Europa, API multimodal, API reserva ferroviária, API SNCF, API FlixBus, API Trenitalia, API Renfe, API CO2 viagens, API viagem sustentável, API Tictactrip',
      ogTitle: 'Documentação Tictactrip — API de reserva de comboios e autocarros para a Europa',
      ogDescription:
        'Uma API REST para comboios, autocarros europeus e as suas combinações. 250+ transportadoras, inventário em tempo real, dados de CO₂, emissão de bilhetes ponto a ponto. Peça acesso à API em sales@tictactrip.eu.',
    },
    hero: {
      eyebrow: 'Plataforma para programadores Tictactrip',
      titlePre: 'Uma API para os ',
      titleAccent: 'comboios e autocarros',
      titlePost: ' europeus e as suas combinações',
      subtitle:
        'Procure, compare e reserve viagens multimodais de longa distância pela Europa. Inventário em tempo real, pegada de CO₂ incluída, entrega de bilhete integrada.',
      primaryCta: 'Ler o tutorial da API',
      secondaryCta: 'Pedir acesso à API',
      notePre: 'O acesso à API é concedido mediante pedido. Contacte ',
      notePost: ' para começar.',
      stats: [
        {value: '250+', label: 'transportadoras integradas'},
        {value: '20+', label: 'países europeus'},
        {value: '1 API', label: 'comboio · autocarro'},
      ],
    },
    intro: {
      h2: 'O que é a API Tictactrip?',
      intro: (
        <>
          <p>
            <strong>Tictactrip</strong> é uma plataforma europeia de distribuição de transporte terrestre de longa distância. A nossa
            API dá-lhe acesso programático ao <strong>inventário de comboios e autocarros</strong> de centenas de transportadoras,
            além de um motor de rotas proprietário que <strong>combina vários operadores num único itinerário</strong> quando não
            existe uma opção direta.
          </p>
          <p>
            Integra uma única vez. Nós tratamos dos contratos com as transportadoras, da emissão de bilhetes, dos pagamentos, do
            cálculo de CO₂ e do pós-venda.
          </p>
        </>
      ),
      bullets: [
        {label: 'Comboios', description: 'alta velocidade, intercidades e regionais'},
        {label: 'Autocarros', description: 'transportadoras de longa distância em toda a Europa'},
        {label: 'Combinações', description: 'itinerários multi-troço e multi-operador'},
        {label: 'Dados de CO₂', description: 'emissões por passageiro e por troço'},
        {label: 'Reserva ponto a ponto', description: 'pesquisa, reserva, pagamento, bilhete'},
      ],
    },
    features: {
      h2: 'Tudo o que precisa para lançar funcionalidades de viagem',
      subtitle:
        'Uma API REST de produção usada por agências de viagens, fintechs e plataformas de sustentabilidade.',
      learnMore: 'Saiba mais →',
      cards: [
        {
          icon: '🚆',
          title: 'Cobertura multimodal',
          description:
            'Uma única API para procurar, comparar e reservar comboios, autocarros e as suas combinações em toda a Europa — SNCF, Trenitalia, FlixBus, BlaBlaCar Bus, Renfe e mais.',
        },
        {
          icon: '🌍',
          title: 'Eco-responsável por design',
          description:
            'Cada itinerário devolve a sua pegada de CO₂ para que os seus utilizadores possam escolher a opção menos poluente. Construído para plataformas de viagem sustentável e relatórios ESG empresariais.',
        },
        {
          icon: '⚡',
          title: 'Disponibilidade em tempo real',
          description:
            'Preços ao vivo, disponibilidade de lugares e classes tarifárias atualizados em tempo real. Sem inventário desatualizado, sem reservas falhadas.',
        },
        {
          icon: '🔁',
          title: 'Combinações inteligentes',
          description:
            'O nosso motor de rotas combina troços de comboio e autocarro num único itinerário quando não existe um percurso direto — o valor único da Tictactrip.',
        },
        {
          icon: '🎫',
          title: 'Reserva ponto a ponto',
          description:
            'Procure, reserve, pague e emita bilhetes através de uma única API REST. Os bilhetes são entregues em PDF, prontos a enviar por email, imprimir ou integrar no seu próprio produto.',
        },
        {
          icon: '🛠️',
          title: 'Pensado para programadores',
          description:
            'Endpoints REST limpos, especificação OpenAPI, coleção Postman e tutoriais passo a passo. Lance a sua integração em dias, não em meses.',
        },
      ],
    },
    quickStart: {
      kicker: 'Início rápido',
      h2: 'Do zero à primeira reserva em 4 chamadas',
      lead: (
        <>
          Autentique-se, resolva origem e destino, procure itinerários, depois reserve. O nosso tutorial passo a passo percorre cada
          endpoint com exemplos curl e uma coleção Postman pronta a usar.
        </>
      ),
      steps: [
        <>Peça o seu <strong>token de autenticação</strong> a {SALES_EMAIL}</>,
        <>Resolva os IDs de cidade com <code>GET /v2/stopClusters</code></>,
        <>Procure itinerários com <code>POST /v2/results</code></>,
        <>Reserve e emita bilhetes com <code>POST /book</code></>,
      ],
      primaryCta: 'Começar o tutorial',
      secondaryCta: 'Explorar a referência da API',
    },
    useCases: {
      h2: 'Construída para as equipas que reinventam as viagens',
      subtitle:
        'Quer venda viagens, gira viagens corporativas ou construa climate-tech, a API encaixa.',
      learnMore: 'Saiba mais →',
      cards: [
        {
          title: 'Agências de viagens online (OTA)',
          description:
            'Adicione o inventário de transporte terrestre à sua oferta de avião + hotel. Venda comboio e autocarro europeus sem negociar com cada transportadora.',
        },
        {
          title: 'Viagens corporativas & TMC',
          description:
            'Alimente a sua plataforma de viagens de negócios com itinerários multimodais e relatórios de CO₂ alinhados com o seu mandato de sustentabilidade.',
        },
        {
          title: 'Fintech & super-apps',
          description:
            'Integre reserva de viagens dentro de neobancos, apps de fidelização e carteiras de mobilidade — com uma única integração.',
        },
        {
          title: 'Plataformas de mobilidade & MaaS',
          description:
            'Complete a mobilidade urbana (trotinetas, partilha de carro, transportes) com comboios e autocarros de longa distância para oferecer verdadeiras viagens porta a porta.',
        },
        {
          title: 'Green-tech & sustentabilidade',
          description:
            'Construa ferramentas de viagem conscientes do clima, plataformas de mobilidade para colaboradores ou produtos de orçamento de carbono sobre dados de CO₂ verificados.',
        },
        {
          title: 'Ferramentas internas e à medida',
          description:
            'Equipas de compras, universidades, ONGs e organizadores de eventos usam a nossa API para centralizar as compras de viagens.',
        },
      ],
    },
    access: {
      kicker: 'Obter acesso à API',
      h2: 'Fale com a nossa equipa para desbloquear a API Tictactrip',
      lead:
        'O acesso à API é concedido após uma breve conversa comercial para ajustar o plano, as transportadoras e o SLA ao seu projeto. Conte-nos o seu caso de uso e respondemos num dia útil.',
      primaryCta: 'Escrever para sales@tictactrip.eu',
      secondaryCta: 'Questão técnica?',
      finePrint: (
        <>
          Já é parceiro? Use o seu token existente para se autenticar em <code>https://api.tictactrip.eu</code>.
        </>
      ),
    },
    faq: {
      h2: 'Perguntas frequentes',
      subtitle: 'Tudo o que as equipas de desenvolvimento e produto perguntam antes de integrar.',
      items: [
        {
          q: 'O que é a API Tictactrip?',
          a: 'A API Tictactrip é uma interface REST que permite aos programadores procurar, comparar e reservar comboios e autocarros em toda a Europa — incluindo combinações multimodais de várias transportadoras num único itinerário.',
        },
        {
          q: 'Como se obtém acesso à API Tictactrip?',
          a: `O acesso à API em produção é concedido mediante pedido. Contacte a nossa equipa comercial em ${SALES_EMAIL} para discutir o seu caso de uso, assinar um acordo comercial e receber o seu token de autenticação.`,
        },
        {
          q: 'Que transportadoras e países são cobertos?',
          a: 'A API agrega os principais operadores ferroviários e de autocarro europeus, incluindo SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo e muitas transportadoras regionais. A cobertura estende-se por França, Itália, Espanha, Alemanha, Benelux e pelo resto da Europa continental.',
        },
        {
          q: 'Como é cobrada a API?',
          a: `O preço depende do volume, do tipo de transação e das transportadoras de que necessita. Contacte ${SALES_EMAIL} para receber uma proposta comercial à medida.`,
        },
        {
          q: 'Fornecem dados de emissões de CO₂?',
          a: 'Sim. Cada itinerário devolvido pelo endpoint de pesquisa inclui a pegada de CO₂ estimada por passageiro, facilitando o destaque da opção mais eco-responsável no seu produto.',
        },
        {
          q: 'Quanto tempo demora a integração?',
          a: 'A maioria dos parceiros entra em produção em 2 a 6 semanas. A API expõe uma superfície REST limpa, uma especificação OpenAPI e uma coleção Postman pronta a usar, para que as equipas de engenharia possam fazer protótipo no primeiro dia.',
        },
        {
          q: 'Em que formatos são entregues os bilhetes?',
          a: 'Os bilhetes são emitidos em PDF que pode enviar por email aos viajantes, imprimir ou apresentar dentro do seu próprio produto.',
        },
        {
          q: 'A API está em conformidade com o RGPD?',
          a: 'Sim. A Tictactrip é uma empresa francesa e a API é operada em conformidade com o RGPD. Os dados dos passageiros são processados estritamente para emitir os bilhetes de transporte solicitados.',
        },
      ],
    },
    finalCta: {
      h2: 'Pronto para lançar viagens multimodais?',
      lead: 'Leia o tutorial, explore a referência ou fale com vendas — a escolha é sua.',
      primaryCta: 'Ler a documentação',
      secondaryCta: 'Contactar vendas',
    },
  },

  // ============================================================================
  // Русский
  // ============================================================================
  ru: {
    meta: {
      title: 'API Tictactrip — API бронирования поездов и автобусов по Европе',
      description:
        'Единый REST API для поиска, сравнения и бронирования европейских поездов, автобусов и их комбинаций. Более 250 перевозчиков, мультимодальные маршруты, инвентарь в реальном времени, выбросы CO₂ и сквозная выдача билетов. Свяжитесь с sales@tictactrip.eu для получения доступа.',
      keywords:
        'API поезда, API автобусы, API путешествия по Европе, мультимодальное API, API бронирования поездов, API SNCF, API FlixBus, API Trenitalia, API Renfe, API CO2 путешествия, устойчивые путешествия API, API Tictactrip',
      ogTitle: 'Документация Tictactrip — API бронирования поездов и автобусов по Европе',
      ogDescription:
        'Единый REST API для европейских поездов, автобусов и их комбинаций. 250+ перевозчиков, инвентарь в реальном времени, данные CO₂, сквозная выдача билетов. Запросите доступ к API на sales@tictactrip.eu.',
    },
    hero: {
      eyebrow: 'Платформа разработчика Tictactrip',
      titlePre: 'Единый API для европейских ',
      titleAccent: 'поездов и автобусов',
      titlePost: ' и их комбинаций',
      subtitle:
        'Ищите, сравнивайте и бронируйте мультимодальные дальние поездки по всей Европе. Инвентарь в реальном времени, расчёт CO₂ включён, выдача билетов встроена.',
      primaryCta: 'Читать руководство по API',
      secondaryCta: 'Запросить доступ к API',
      notePre: 'Доступ к API предоставляется по запросу. Свяжитесь с ',
      notePost: ', чтобы начать.',
      stats: [
        {value: '250+', label: 'интегрированных перевозчиков'},
        {value: '20+', label: 'европейских стран'},
        {value: '1 API', label: 'поезд · автобус'},
      ],
    },
    intro: {
      h2: 'Что такое API Tictactrip?',
      intro: (
        <>
          <p>
            <strong>Tictactrip</strong> — европейская платформа дистрибуции дальнего наземного транспорта. Наш API даёт
            программный доступ к <strong>инвентарю поездов и автобусов</strong> сотен перевозчиков, плюс собственный
            маршрутизатор, который <strong>объединяет нескольких операторов в единый маршрут</strong>, когда прямого варианта
            нет.
          </p>
          <p>
            Вы интегрируетесь один раз. Мы берём на себя договоры с перевозчиками, оформление билетов, платежи, расчёт CO₂ и
            пост-продажные операции.
          </p>
        </>
      ),
      bullets: [
        {label: 'Поезда', description: 'высокоскоростные, межгородские и региональные'},
        {label: 'Автобусы', description: 'дальние перевозчики по всей Европе'},
        {label: 'Комбинации', description: 'многосегментные маршруты с несколькими операторами'},
        {label: 'Данные CO₂', description: 'выбросы на пассажира и на сегмент'},
        {label: 'Сквозное бронирование', description: 'поиск, бронирование, оплата, билет'},
      ],
    },
    features: {
      h2: 'Всё, что нужно, чтобы выпустить функции для путешествий',
      subtitle:
        'Промышленный REST API, который используют турагентства, финтехи и платформы устойчивого развития.',
      learnMore: 'Подробнее →',
      cards: [
        {
          icon: '🚆',
          title: 'Мультимодальное покрытие',
          description:
            'Единый API для поиска, сравнения и бронирования поездов, автобусов и их комбинаций по всей Европе — SNCF, Trenitalia, FlixBus, BlaBlaCar Bus, Renfe и не только.',
        },
        {
          icon: '🌍',
          title: 'Эко-ответственный по дизайну',
          description:
            'Каждый маршрут возвращает свой углеродный след, чтобы ваши пользователи могли выбрать вариант с наименьшими выбросами. Создан для платформ устойчивых путешествий и корпоративной ESG-отчётности.',
        },
        {
          icon: '⚡',
          title: 'Доступность в реальном времени',
          description:
            'Живые цены, наличие мест и тарифные классы обновляются в реальном времени. Никакого устаревшего инвентаря, никаких неудачных бронирований.',
        },
        {
          icon: '🔁',
          title: 'Умные комбинации',
          description:
            'Наш маршрутизатор объединяет сегменты поезда и автобуса в единый маршрут, когда прямой поездки нет — уникальная ценность Tictactrip.',
        },
        {
          icon: '🎫',
          title: 'Сквозное бронирование',
          description:
            'Поиск, бронирование, оплата и выпуск билетов через единый REST API. Билеты доставляются в PDF и готовы к отправке по email, печати или встраиванию в ваш собственный продукт.',
        },
        {
          icon: '🛠️',
          title: 'Прежде всего для разработчиков',
          description:
            'Аккуратные REST-эндпоинты, спецификация OpenAPI, коллекция Postman и пошаговые руководства. Запускайте интеграцию за дни, а не за месяцы.',
        },
      ],
    },
    quickStart: {
      kicker: 'Быстрый старт',
      h2: 'От нуля до первого бронирования за 4 вызова',
      lead: (
        <>
          Авторизуйтесь, определите идентификаторы пункта отправления и назначения, найдите маршруты и забронируйте. Наше пошаговое
          руководство проходит каждый эндпоинт с примерами curl и готовой к использованию коллекцией Postman.
        </>
      ),
      steps: [
        <>Запросите свой <strong>токен аутентификации</strong> у {SALES_EMAIL}</>,
        <>Получите идентификаторы городов через <code>GET /v2/stopClusters</code></>,
        <>Найдите маршруты через <code>POST /v2/results</code></>,
        <>Забронируйте и выпустите билеты через <code>POST /book</code></>,
      ],
      primaryCta: 'Начать руководство',
      secondaryCta: 'Открыть справочник API',
    },
    useCases: {
      h2: 'Создано для команд, переосмысляющих путешествия',
      subtitle:
        'Продаёте ли вы поездки, управляете корпоративными командировками или строите климат-тех — API подходит.',
      learnMore: 'Подробнее →',
      cards: [
        {
          title: 'Онлайн-турагентства (OTA)',
          description:
            'Добавьте наземный транспорт к предложению авиа + отель. Продавайте европейские поезда и автобусы без переговоров с каждым перевозчиком.',
        },
        {
          title: 'Корпоративные поездки и TMC',
          description:
            'Питайте свою бизнес-тревел-платформу мультимодальными маршрутами и отчётами CO₂, соответствующими вашему мандату устойчивости.',
        },
        {
          title: 'Финтех и супер-приложения',
          description:
            'Встройте бронирование поездок в необанки, лояльности и кошельки мобильности — через одну интеграцию.',
        },
        {
          title: 'Мобильность и MaaS-платформы',
          description:
            'Дополните городскую мобильность (самокаты, каршеринг, общественный транспорт) дальними поездами и автобусами, чтобы предлагать настоящие поездки «от двери до двери».',
        },
        {
          title: 'Грин-тех и устойчивое развитие',
          description:
            'Создавайте инструменты для климатически осознанных путешествий, платформы корпоративных коммуникаций или продукты углеродного бюджета на основе верифицированных данных CO₂.',
        },
        {
          title: 'Внутренние и кастомные инструменты',
          description:
            'Отделы закупок, университеты, НКО и организаторы мероприятий используют наш API для централизации закупок поездок.',
        },
      ],
    },
    access: {
      kicker: 'Получить доступ к API',
      h2: 'Свяжитесь с нашей командой, чтобы открыть доступ к API Tictactrip',
      lead:
        'Доступ к API предоставляется после короткой коммерческой беседы, чтобы подобрать правильный план, перевозчиков и SLA под ваш проект. Расскажите о вашем кейсе — мы вернёмся к вам в течение одного рабочего дня.',
      primaryCta: 'Написать на sales@tictactrip.eu',
      secondaryCta: 'Технический вопрос?',
      finePrint: (
        <>
          Уже партнёр? Используйте существующий токен для аутентификации на <code>https://api.tictactrip.eu</code>.
        </>
      ),
    },
    faq: {
      h2: 'Часто задаваемые вопросы',
      subtitle: 'Всё, о чём команды разработки и продукта спрашивают перед интеграцией.',
      items: [
        {
          q: 'Что такое API Tictactrip?',
          a: 'API Tictactrip — это REST-интерфейс, позволяющий разработчикам искать, сравнивать и бронировать поезда и автобусы по всей Европе — включая мультимодальные комбинации нескольких перевозчиков в едином маршруте.',
        },
        {
          q: 'Как получить доступ к API Tictactrip?',
          a: `Доступ к продуктивному API предоставляется по запросу. Свяжитесь с нашей коммерческой командой по адресу ${SALES_EMAIL}, чтобы обсудить ваш кейс, подписать коммерческое соглашение и получить токен аутентификации.`,
        },
        {
          q: 'Какие перевозчики и страны охвачены?',
          a: 'API агрегирует крупнейших европейских железнодорожных и автобусных операторов, включая SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo и многих региональных перевозчиков. Покрытие включает Францию, Италию, Испанию, Германию, страны Бенилюкса и остальную континентальную Европу.',
        },
        {
          q: 'Как тарифицируется API?',
          a: `Стоимость зависит от объёма, типа транзакций и набора перевозчиков. Свяжитесь с ${SALES_EMAIL} для получения индивидуального коммерческого предложения.`,
        },
        {
          q: 'Предоставляете ли вы данные о выбросах CO₂?',
          a: 'Да. Каждый маршрут, возвращаемый поисковым эндпоинтом, включает оценочный углеродный след на пассажира — это упрощает выделение наиболее эко-ответственного варианта в вашем продукте.',
        },
        {
          q: 'Сколько времени занимает интеграция?',
          a: 'Большинство партнёров запускаются в продакшн за 2–6 недель. API предоставляет чистую REST-поверхность, спецификацию OpenAPI и готовую к использованию коллекцию Postman, чтобы инженерные команды могли прототипировать с первого дня.',
        },
        {
          q: 'В каких форматах доставляются билеты?',
          a: 'Билеты выпускаются в PDF — вы можете отправить их пассажирам по email, распечатать или отобразить внутри собственного продукта.',
        },
        {
          q: 'Соответствует ли API требованиям GDPR?',
          a: 'Да. Tictactrip — французская компания, и API работает в соответствии с GDPR. Данные пассажиров обрабатываются строго в целях выпуска запрошенных транспортных билетов.',
        },
      ],
    },
    finalCta: {
      h2: 'Готовы выпустить мультимодальные путешествия?',
      lead: 'Читайте руководство, открывайте справочник или поговорите с отделом продаж — выбор за вами.',
      primaryCta: 'Читать документацию',
      secondaryCta: 'Связаться с отделом продаж',
    },
  },
};
