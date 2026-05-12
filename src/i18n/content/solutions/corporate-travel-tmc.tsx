import React from 'react';
import type {Translations} from '../../useTranslation';
import type {SolutionPageProps} from '../../../components/SolutionPage';

type SolutionPageContent = Omit<SolutionPageProps, 'slug' | 'related'>;

const codeBody = `# TMC search: Paris → Brussels, business trip
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRpari____@u09tu",
    "destinationGpuid": "c|BEbrus____@u15iy",
    "outboundDate":     "2026-06-12T00:00:00Z",
    "passengers":       [{"age": 35}]
  }'`;

export const corporateTmc: Translations<SolutionPageContent> = {
  en: {
    eyebrow: 'Solution · Corporate & TMC',
    title: 'Corporate travel & TMC',
    metaTitle: 'Corporate travel API for TMCs — Multimodal European trains & buses | Tictactrip',
    description: 'Power your TMC platform with European train and bus inventory, multimodal itineraries and CO₂ reporting through one REST API.',
    metaDescription: 'Corporate travel API for Travel Management Companies. Add 250+ European rail and bus carriers to your TMC platform with real-time inventory, multimodal itineraries, CO₂ reporting and policy-aware booking.',
    keywords: 'corporate travel API, TMC API, business travel API, corporate rail booking, travel management company API, CO2 corporate travel, sustainable business travel API, Tictactrip TMC',
    heroTitle: <>Multimodal travel API for<br /><span style={{color: '#6ee7b7'}}>Travel Management Companies</span></>,
    heroLead: 'Bring European rail and bus inventory into your TMC stack with CO₂ data, policy controls and end-to-end ticketing — through a single REST API.',
    intro: (
      <>
        <h2>The corporate travel stack now has to be multimodal</h2>
        <p>Sustainability mandates, falling business-class flight budgets and the rise of high-speed rail are pushing <strong>corporate travel</strong> toward the ground. Travel Management Companies that can offer trains and intercity buses alongside flights win renewals — and offer credible CO₂ reporting.</p>
        <p><strong>Tictactrip</strong> exposes <strong>250+ European rail and bus carriers</strong> through one REST API. Your TMC platform sees a normalized inventory layer, per-passenger emissions data and a unified booking workflow — no fragmented carrier portals, no separate ticketing pipelines.</p>
      </>
    ),
    capabilities: [
      '250+ rail and bus carriers across Europe',
      'CO₂ emissions per passenger per leg for ESG reporting',
      'Policy-friendly metadata: fare class, refundability, advance purchase',
      'Multimodal itineraries to replace short-haul flights',
      'End-to-end booking with PDF ticket delivery',
      'Refund and exchange workflows handled by Tictactrip',
    ],
    benefits: [
      {icon: '📊', title: 'ESG reporting on autopilot', description: 'Every itinerary returns CO₂ emissions per passenger. Aggregate them across your bookings to feed corporate sustainability dashboards and Scope 3 reporting.'},
      {icon: '🛤️', title: 'Substitute short-haul flights with rail', description: 'Tictactrip surfaces high-speed rail alternatives to short-haul flights with comparable durations and lower emissions — exactly what corporate sustainability policies push for.'},
      {icon: '🧭', title: 'Policy-aware booking', description: 'Fare class, refundability and advance-purchase metadata let your TMC apply company travel rules before showing options to a traveller.'},
      {icon: '🎟️', title: 'One ticket workflow', description: 'PDF tickets delivered through the same API. No separate carrier portals, no manual e-ticket reissues.'},
    ],
    code: {filename: 'tmc-search.sh', body: codeBody},
    faqs: [
      {q: 'Can the API replace flights with rail when emissions are lower?', a: 'Yes. The search endpoint returns trains and buses on the same route alongside their CO₂ emissions, so your TMC can prioritise rail alternatives when policy or sustainability rules demand it.'},
      {q: 'Do you expose the data needed for Scope 3 / GHG reporting?', a: 'Each itinerary returns estimated CO₂ emissions per passenger per leg. Booking events can be aggregated into corporate ESG dashboards and audited against published methodologies.'},
      {q: 'How are corporate-specific fares and discounts handled?', a: 'Some carriers expose dedicated corporate fares. We work with each TMC partner to enable the relevant negotiated rates on top of public inventory.'},
      {q: 'Is Tictactrip GDPR-compliant?', a: 'Yes. Tictactrip is a French company and the API is operated in compliance with the GDPR. Traveller data is processed strictly for the purpose of issuing the requested transport tickets.'},
    ],
    serviceType: 'Corporate travel API for Travel Management Companies (TMCs)',
    audienceType: 'Corporate travel platforms and Travel Management Companies',
  },
  fr: {
    eyebrow: "Solution · Voyage d'affaires & TMC",
    title: "Voyage d'affaires & TMC",
    metaTitle: "API de voyage d'affaires pour TMC — Trains et bus européens multimodaux | Tictactrip",
    description: "Alimentez votre plateforme TMC avec l'inventaire trains et bus européens, des itinéraires multimodaux et un reporting CO₂ via une seule API REST.",
    metaDescription: "API de voyage d'affaires pour Travel Management Companies. Ajoutez 250+ transporteurs ferroviaires et de bus européens à votre plateforme TMC avec inventaire en temps réel, itinéraires multimodaux, reporting CO₂ et réservation conforme à votre politique.",
    keywords: "API voyage d'affaires, API TMC, API business travel, réservation rail entreprise, API travel management company, CO2 voyage d'affaires, API voyage d'affaires durable, Tictactrip TMC",
    heroTitle: <>API de voyage multimodale pour<br /><span style={{color: '#6ee7b7'}}>les Travel Management Companies</span></>,
    heroLead: "Apportez l'inventaire ferroviaire et de bus européens dans votre stack TMC avec données CO₂, contrôles de politique et billetterie de bout en bout — via une seule API REST.",
    intro: (
      <>
        <h2>Le stack du voyage d'affaires doit désormais être multimodal</h2>
        <p>Les mandats de durabilité, la baisse des budgets vols business class et la montée du train à grande vitesse poussent le <strong>voyage d'affaires</strong> vers le sol. Les TMC capables d'offrir trains et bus interurbains à côté des vols remportent les renouvellements — et offrent un reporting CO₂ crédible.</p>
        <p><strong>Tictactrip</strong> expose <strong>250+ transporteurs ferroviaires et de bus européens</strong> via une seule API REST. Votre plateforme TMC voit une couche d'inventaire unifiée, des données d'émissions par passager et un flux de réservation unifié — pas de portails transporteurs fragmentés, pas de pipelines de billetterie séparés.</p>
      </>
    ),
    capabilities: [
      "250+ transporteurs ferroviaires et de bus à travers l'Europe",
      "Émissions de CO₂ par passager et par segment pour le reporting ESG",
      "Métadonnées compatibles politique : classe tarifaire, remboursabilité, achat anticipé",
      "Itinéraires multimodaux pour remplacer les vols court-courriers",
      "Réservation de bout en bout avec livraison de billet PDF",
      "Flux de remboursement et d'échange gérés par Tictactrip",
    ],
    benefits: [
      {icon: '📊', title: 'Reporting ESG en pilote automatique', description: "Chaque itinéraire renvoie les émissions de CO₂ par passager. Agrégez-les sur vos réservations pour alimenter dashboards de durabilité d'entreprise et reporting Scope 3."},
      {icon: '🛤️', title: 'Remplacer les vols court-courriers par le rail', description: "Tictactrip met en avant les alternatives ferroviaires à grande vitesse aux vols court-courriers avec des durées comparables et des émissions plus basses — exactement ce que les politiques de durabilité d'entreprise demandent."},
      {icon: '🧭', title: 'Réservation conforme à la politique', description: "Les métadonnées de classe tarifaire, remboursabilité et achat anticipé permettent à votre TMC d'appliquer les règles de voyage de l'entreprise avant de présenter des options au voyageur."},
      {icon: '🎟️', title: 'Un seul flux de billetterie', description: "Billets PDF livrés via la même API. Pas de portails transporteurs séparés, pas de réémission manuelle d'e-billets."},
    ],
    code: {filename: 'tmc-search.sh', body: codeBody},
    faqs: [
      {q: "L'API peut-elle remplacer les vols par le rail quand les émissions sont plus basses ?", a: "Oui. L'endpoint de recherche renvoie trains et bus sur la même route avec leurs émissions de CO₂, donc votre TMC peut prioriser les alternatives ferroviaires quand la politique ou les règles de durabilité l'exigent."},
      {q: 'Exposez-vous les données nécessaires au reporting Scope 3 / GES ?', a: "Chaque itinéraire renvoie des émissions de CO₂ estimées par passager et par segment. Les événements de réservation peuvent être agrégés en dashboards ESG d'entreprise et audités contre les méthodologies publiées."},
      {q: "Comment les tarifs et remises spécifiques aux entreprises sont-ils gérés ?", a: "Certains transporteurs exposent des tarifs entreprise dédiés. Nous travaillons avec chaque partenaire TMC pour activer les tarifs négociés pertinents en plus de l'inventaire public."},
      {q: "Tictactrip est-il conforme au RGPD ?", a: "Oui. Tictactrip est une société française et l'API est exploitée en conformité avec le RGPD. Les données voyageur sont traitées strictement pour émettre les billets de transport demandés."},
    ],
    serviceType: "API de voyage d'affaires pour Travel Management Companies (TMC)",
    audienceType: "Plateformes de voyage d'affaires et Travel Management Companies",
  },
  de: {
    eyebrow: 'Lösung · Geschäftsreisen & TMC',
    title: 'Geschäftsreisen & TMC',
    metaTitle: 'Geschäftsreise-API für TMCs — Multimodale europäische Züge und Busse | Tictactrip',
    description: 'Versorgen Sie Ihre TMC-Plattform mit europäischem Zug- und Bus-Inventar, multimodalen Verbindungen und CO₂-Reporting über eine REST-API.',
    metaDescription: 'Geschäftsreise-API für Travel Management Companies. Erweitern Sie Ihre TMC-Plattform um 250+ europäische Bahn- und Bus-Transporteure mit Echtzeit-Inventar, multimodalen Verbindungen, CO₂-Reporting und policy-bewusster Buchung.',
    keywords: 'Geschäftsreise-API, TMC-API, Business-Travel-API, Unternehmens-Bahn-Buchung, Travel-Management-Company-API, CO2-Geschäftsreisen, nachhaltige Business-Travel-API, Tictactrip TMC',
    heroTitle: <>Multimodale Reise-API für<br /><span style={{color: '#6ee7b7'}}>Travel Management Companies</span></>,
    heroLead: 'Bringen Sie europäisches Bahn- und Bus-Inventar in Ihren TMC-Stack — mit CO₂-Daten, Policy-Steuerung und End-to-End-Ticketierung über eine REST-API.',
    intro: (
      <>
        <h2>Der Geschäftsreise-Stack muss jetzt multimodal sein</h2>
        <p>Nachhaltigkeits-Mandate, sinkende Business-Class-Flugbudgets und der Aufstieg der Hochgeschwindigkeitsbahn drängen <strong>Geschäftsreisen</strong> auf den Boden. TMCs, die Züge und Fernbusse neben Flügen anbieten können, gewinnen Verlängerungen — und liefern glaubwürdiges CO₂-Reporting.</p>
        <p><strong>Tictactrip</strong> stellt <strong>250+ europäische Bahn- und Bus-Transporteure</strong> über eine REST-API bereit. Ihre TMC-Plattform sieht eine normalisierte Inventar-Schicht, Emissionsdaten pro Passagier und einen einheitlichen Buchungs-Workflow — keine fragmentierten Transporteur-Portale, keine separaten Ticketing-Pipelines.</p>
      </>
    ),
    capabilities: [
      '250+ Bahn- und Bus-Transporteure in ganz Europa',
      'CO₂-Emissionen pro Passagier pro Teilstrecke für ESG-Reporting',
      'Policy-freundliche Metadaten: Tarifklasse, Erstattbarkeit, Vorausbuchung',
      'Multimodale Verbindungen zum Ersetzen von Kurzstreckenflügen',
      'End-to-End-Buchung mit PDF-Ticket-Lieferung',
      'Erstattungs- und Umtausch-Workflows von Tictactrip übernommen',
    ],
    benefits: [
      {icon: '📊', title: 'ESG-Reporting auf Autopilot', description: 'Jede Verbindung liefert CO₂-Emissionen pro Passagier. Aggregieren Sie sie über Ihre Buchungen, um Unternehmens-Nachhaltigkeits-Dashboards und Scope-3-Reporting zu speisen.'},
      {icon: '🛤️', title: 'Kurzstreckenflüge durch Bahn ersetzen', description: 'Tictactrip zeigt Hochgeschwindigkeitsbahn-Alternativen zu Kurzstreckenflügen mit vergleichbarer Dauer und niedrigeren Emissionen — genau das, was Unternehmens-Nachhaltigkeitsrichtlinien fordern.'},
      {icon: '🧭', title: 'Policy-bewusste Buchung', description: 'Tarifklasse-, Erstattbarkeits- und Vorausbuchungs-Metadaten ermöglichen Ihrer TMC, die Reise-Regeln des Unternehmens anzuwenden, bevor Optionen einem Reisenden gezeigt werden.'},
      {icon: '🎟️', title: 'Ein Ticket-Workflow', description: 'PDF-Tickets über dieselbe API geliefert. Keine separaten Transporteur-Portale, keine manuelle E-Ticket-Neuausstellung.'},
    ],
    code: {filename: 'tmc-search.sh', body: codeBody},
    faqs: [
      {q: 'Kann die API Flüge durch Bahn ersetzen, wenn die Emissionen niedriger sind?', a: 'Ja. Der Suchendpunkt liefert Züge und Busse auf derselben Strecke zusammen mit deren CO₂-Emissionen, sodass Ihre TMC Bahn-Alternativen priorisieren kann, wenn Policy- oder Nachhaltigkeitsregeln es verlangen.'},
      {q: 'Stellen Sie die Daten für Scope-3- / GHG-Reporting bereit?', a: 'Jede Verbindung liefert geschätzte CO₂-Emissionen pro Passagier pro Teilstrecke. Buchungs-Events können in Unternehmens-ESG-Dashboards aggregiert und gegen veröffentlichte Methodiken geprüft werden.'},
      {q: 'Wie werden unternehmensspezifische Tarife und Rabatte gehandhabt?', a: 'Einige Transporteure stellen dedizierte Unternehmens-Tarife bereit. Wir arbeiten mit jedem TMC-Partner, um die relevanten verhandelten Sätze zusätzlich zum öffentlichen Inventar zu aktivieren.'},
      {q: 'Ist Tictactrip DSGVO-konform?', a: 'Ja. Tictactrip ist ein französisches Unternehmen und die API wird DSGVO-konform betrieben. Reisendendaten werden ausschließlich zur Ausstellung der angefragten Transporttickets verarbeitet.'},
    ],
    serviceType: 'Geschäftsreise-API für Travel Management Companies (TMCs)',
    audienceType: 'Geschäftsreiseplattformen und Travel Management Companies',
  },
  es: {
    eyebrow: 'Solución · Viajes corporativos & TMC',
    title: 'Viajes corporativos & TMC',
    metaTitle: 'API de viajes corporativos para TMCs — Trenes y autobuses europeos multimodales | Tictactrip',
    description: 'Impulsa tu plataforma TMC con inventario europeo de tren y autobús, itinerarios multimodales y reporting de CO₂ a través de una API REST.',
    metaDescription: 'API de viajes corporativos para Travel Management Companies. Añade 250+ operadores europeos de tren y autobús a tu plataforma TMC con inventario en tiempo real, itinerarios multimodales, reporting de CO₂ y reserva consciente de la política.',
    keywords: 'API viajes corporativos, API TMC, API business travel, reserva tren empresa, API travel management company, CO2 viaje corporativo, API viaje corporativo sostenible, Tictactrip TMC',
    heroTitle: <>API de viaje multimodal para<br /><span style={{color: '#6ee7b7'}}>Travel Management Companies</span></>,
    heroLead: 'Lleva el inventario europeo de tren y autobús a tu stack TMC con datos de CO₂, controles de política y billetería extremo a extremo — a través de una sola API REST.',
    intro: (
      <>
        <h2>El stack de viaje corporativo ahora tiene que ser multimodal</h2>
        <p>Los mandatos de sostenibilidad, la caída de los presupuestos de vuelos business y el auge del tren de alta velocidad están empujando los <strong>viajes corporativos</strong> hacia el suelo. Las TMCs capaces de ofrecer trenes y autobuses interurbanos junto a los vuelos ganan renovaciones — y ofrecen un reporting de CO₂ creíble.</p>
        <p><strong>Tictactrip</strong> expone <strong>250+ operadores europeos de tren y autobús</strong> a través de una API REST. Tu plataforma TMC ve una capa de inventario normalizada, datos de emisiones por pasajero y un flujo de reserva unificado — sin portales de operador fragmentados, sin pipelines de billetería separados.</p>
      </>
    ),
    capabilities: [
      '250+ operadores ferroviarios y de autobús por toda Europa',
      'Emisiones de CO₂ por pasajero y tramo para reporting ESG',
      'Metadatos compatibles con política: clase tarifaria, reembolsabilidad, compra anticipada',
      'Itinerarios multimodales para sustituir vuelos cortos',
      'Reserva extremo a extremo con entrega de billete PDF',
      'Flujos de reembolso y cambio gestionados por Tictactrip',
    ],
    benefits: [
      {icon: '📊', title: 'Reporting ESG en piloto automático', description: 'Cada itinerario devuelve emisiones de CO₂ por pasajero. Agrégalas en tus reservas para alimentar dashboards de sostenibilidad corporativa y reporting Scope 3.'},
      {icon: '🛤️', title: 'Sustituir vuelos cortos por tren', description: 'Tictactrip muestra alternativas ferroviarias de alta velocidad a los vuelos cortos con duraciones comparables y menores emisiones — exactamente lo que empujan las políticas de sostenibilidad corporativa.'},
      {icon: '🧭', title: 'Reserva consciente de la política', description: 'Los metadatos de clase tarifaria, reembolsabilidad y compra anticipada permiten a tu TMC aplicar las reglas de viaje de la empresa antes de mostrar opciones al viajero.'},
      {icon: '🎟️', title: 'Un solo flujo de billetería', description: 'Billetes PDF entregados a través de la misma API. Sin portales de operador separados, sin reemisión manual de e-billetes.'},
    ],
    code: {filename: 'tmc-search.sh', body: codeBody},
    faqs: [
      {q: '¿Puede la API sustituir vuelos por tren cuando las emisiones son menores?', a: 'Sí. El endpoint de búsqueda devuelve trenes y autobuses en la misma ruta junto con sus emisiones de CO₂, así que tu TMC puede priorizar alternativas ferroviarias cuando la política o las reglas de sostenibilidad lo exigen.'},
      {q: '¿Exponéis los datos necesarios para reporting Scope 3 / GEI?', a: 'Cada itinerario devuelve emisiones de CO₂ estimadas por pasajero y por tramo. Los eventos de reserva pueden agregarse en dashboards ESG corporativos y auditarse contra las metodologías publicadas.'},
      {q: '¿Cómo se gestionan las tarifas y descuentos específicos de empresa?', a: 'Algunos operadores exponen tarifas corporativas dedicadas. Trabajamos con cada socio TMC para habilitar las tarifas negociadas relevantes sobre el inventario público.'},
      {q: '¿Tictactrip cumple el RGPD?', a: 'Sí. Tictactrip es una empresa francesa y la API opera en cumplimiento del RGPD. Los datos del viajero se procesan estrictamente para emitir los billetes de transporte solicitados.'},
    ],
    serviceType: 'API de viajes corporativos para Travel Management Companies (TMCs)',
    audienceType: 'Plataformas de viaje corporativo y Travel Management Companies',
  },
  it: {
    eyebrow: 'Soluzione · Viaggi aziendali & TMC',
    title: 'Viaggi aziendali & TMC',
    metaTitle: 'API di viaggio aziendale per TMC — Treni e autobus europei multimodali | Tictactrip',
    description: "Alimenta la tua piattaforma TMC con inventario europeo di treni e autobus, itinerari multimodali e reporting CO₂ tramite un'API REST.",
    metaDescription: "API di viaggio aziendale per Travel Management Companies. Aggiungi 250+ vettori europei di treni e autobus alla tua piattaforma TMC con inventario in tempo reale, itinerari multimodali, reporting CO₂ e prenotazione consapevole della policy.",
    keywords: 'API viaggi aziendali, API TMC, API business travel, prenotazione treno azienda, API travel management company, CO2 viaggio aziendale, API viaggio aziendale sostenibile, Tictactrip TMC',
    heroTitle: <>API di viaggio multimodale per<br /><span style={{color: '#6ee7b7'}}>Travel Management Companies</span></>,
    heroLead: "Porta l'inventario ferroviario e di autobus europei nel tuo stack TMC con dati CO₂, controlli di policy e biglietteria end-to-end — tramite un'unica API REST.",
    intro: (
      <>
        <h2>Lo stack del viaggio aziendale ora deve essere multimodale</h2>
        <p>I mandati di sostenibilità, il calo dei budget per voli business e l'ascesa dell'alta velocità ferroviaria stanno spingendo i <strong>viaggi aziendali</strong> verso terra. Le TMC capaci di offrire treni e autobus interurbani accanto ai voli vincono i rinnovi — e offrono un reporting CO₂ credibile.</p>
        <p><strong>Tictactrip</strong> espone <strong>250+ vettori europei di treni e autobus</strong> tramite un'API REST. La tua piattaforma TMC vede uno strato di inventario normalizzato, dati di emissioni per passeggero e un flusso di prenotazione unificato — niente portali vettore frammentati, niente pipeline di biglietteria separate.</p>
      </>
    ),
    capabilities: [
      "250+ vettori ferroviari e di autobus in tutta Europa",
      "Emissioni CO₂ per passeggero e per tratta per reporting ESG",
      "Metadati compatibili con policy: classe tariffaria, rimborsabilità, acquisto anticipato",
      "Itinerari multimodali per sostituire voli a corto raggio",
      "Prenotazione end-to-end con consegna biglietto PDF",
      "Flussi di rimborso e cambio gestiti da Tictactrip",
    ],
    benefits: [
      {icon: '📊', title: 'Reporting ESG col pilota automatico', description: "Ogni itinerario restituisce emissioni CO₂ per passeggero. Aggregale sulle tue prenotazioni per alimentare dashboard di sostenibilità aziendale e reporting Scope 3."},
      {icon: '🛤️', title: 'Sostituire voli a corto raggio con la ferrovia', description: "Tictactrip mette in evidenza alternative ferroviarie ad alta velocità ai voli a corto raggio con durate comparabili ed emissioni inferiori — esattamente ciò che spingono le politiche di sostenibilità aziendale."},
      {icon: '🧭', title: 'Prenotazione consapevole della policy', description: "I metadati di classe tariffaria, rimborsabilità e acquisto anticipato permettono alla tua TMC di applicare le regole di viaggio aziendali prima di mostrare opzioni al viaggiatore."},
      {icon: '🎟️', title: 'Un unico flusso di biglietteria', description: "Biglietti PDF consegnati tramite la stessa API. Niente portali vettore separati, niente riemissione manuale di e-biglietti."},
    ],
    code: {filename: 'tmc-search.sh', body: codeBody},
    faqs: [
      {q: "L'API può sostituire voli con la ferrovia quando le emissioni sono più basse?", a: "Sì. L'endpoint di ricerca restituisce treni e autobus sulla stessa rotta insieme alle loro emissioni CO₂, così la tua TMC può dare priorità alle alternative ferroviarie quando la policy o le regole di sostenibilità lo richiedono."},
      {q: 'Esponete i dati necessari per il reporting Scope 3 / GHG?', a: "Ogni itinerario restituisce emissioni CO₂ stimate per passeggero e per tratta. Gli eventi di prenotazione possono essere aggregati in dashboard ESG aziendali e auditati contro metodologie pubblicate."},
      {q: "Come vengono gestite tariffe e sconti specifici per aziende?", a: "Alcuni vettori espongono tariffe aziendali dedicate. Lavoriamo con ciascun partner TMC per abilitare le tariffe negoziate rilevanti in aggiunta all'inventario pubblico."},
      {q: 'Tictactrip è conforme al GDPR?', a: "Sì. Tictactrip è un'azienda francese e l'API è operata in conformità al GDPR. I dati del viaggiatore sono trattati esclusivamente per emettere i biglietti di trasporto richiesti."},
    ],
    serviceType: 'API di viaggio aziendale per Travel Management Companies (TMC)',
    audienceType: 'Piattaforme di viaggio aziendale e Travel Management Companies',
  },
  pt: {
    eyebrow: 'Solução · Viagens corporativas & TMC',
    title: 'Viagens corporativas & TMC',
    metaTitle: 'API de viagens corporativas para TMCs — Comboios e autocarros europeus multimodais | Tictactrip',
    description: 'Alimente a sua plataforma TMC com inventário europeu de comboio e autocarro, itinerários multimodais e relatórios de CO₂ através de uma API REST.',
    metaDescription: 'API de viagens corporativas para Travel Management Companies. Adicione 250+ transportadoras europeias de comboio e autocarro à sua plataforma TMC com inventário em tempo real, itinerários multimodais, relatórios de CO₂ e reserva alinhada com a política.',
    keywords: 'API viagens corporativas, API TMC, API business travel, reserva comboio empresarial, API travel management company, CO2 viagem corporativa, API viagem corporativa sustentável, Tictactrip TMC',
    heroTitle: <>API de viagem multimodal para<br /><span style={{color: '#6ee7b7'}}>Travel Management Companies</span></>,
    heroLead: 'Traga o inventário europeu de comboio e autocarro para o stack da sua TMC com dados de CO₂, controlos de política e bilhética ponto a ponto — através de uma única API REST.',
    intro: (
      <>
        <h2>O stack de viagens corporativas tem agora de ser multimodal</h2>
        <p>Os mandatos de sustentabilidade, a queda dos orçamentos para voos em classe executiva e a ascensão da alta velocidade ferroviária estão a empurrar as <strong>viagens corporativas</strong> para o solo. As TMCs capazes de oferecer comboios e autocarros interurbanos a par dos voos ganham renovações — e oferecem um relatório de CO₂ credível.</p>
        <p>A <strong>Tictactrip</strong> expõe <strong>250+ transportadoras europeias de comboio e autocarro</strong> através de uma API REST. A sua plataforma TMC vê uma camada de inventário normalizada, dados de emissões por passageiro e um fluxo de reserva unificado — sem portais de transportadora fragmentados, sem pipelines de bilhética separados.</p>
      </>
    ),
    capabilities: [
      '250+ transportadoras ferroviárias e de autocarro em toda a Europa',
      'Emissões de CO₂ por passageiro e por troço para relatórios ESG',
      'Metadados compatíveis com política: classe tarifária, reembolsabilidade, compra antecipada',
      'Itinerários multimodais para substituir voos curtos',
      'Reserva ponto a ponto com entrega de bilhete PDF',
      'Fluxos de reembolso e troca tratados pela Tictactrip',
    ],
    benefits: [
      {icon: '📊', title: 'Relatórios ESG em piloto automático', description: 'Cada itinerário devolve emissões de CO₂ por passageiro. Agregue-as nas suas reservas para alimentar dashboards de sustentabilidade corporativa e relatórios Scope 3.'},
      {icon: '🛤️', title: 'Substituir voos curtos pelo comboio', description: 'A Tictactrip apresenta alternativas ferroviárias de alta velocidade aos voos curtos com durações comparáveis e menores emissões — exatamente o que as políticas de sustentabilidade corporativa pedem.'},
      {icon: '🧭', title: 'Reserva alinhada com a política', description: 'Os metadados de classe tarifária, reembolsabilidade e compra antecipada permitem à sua TMC aplicar as regras de viagem da empresa antes de mostrar opções ao viajante.'},
      {icon: '🎟️', title: 'Um único fluxo de bilhética', description: 'Bilhetes PDF entregues através da mesma API. Sem portais de transportadora separados, sem reemissão manual de e-bilhetes.'},
    ],
    code: {filename: 'tmc-search.sh', body: codeBody},
    faqs: [
      {q: 'A API pode substituir voos por comboio quando as emissões são mais baixas?', a: 'Sim. O endpoint de pesquisa devolve comboios e autocarros na mesma rota juntamente com as suas emissões de CO₂, para que a sua TMC possa priorizar alternativas ferroviárias quando a política ou as regras de sustentabilidade o exigirem.'},
      {q: 'Expõem os dados necessários para relatórios Scope 3 / GEE?', a: 'Cada itinerário devolve emissões de CO₂ estimadas por passageiro e por troço. Os eventos de reserva podem ser agregados em dashboards ESG corporativos e auditados contra metodologias publicadas.'},
      {q: 'Como são tratadas tarifas e descontos específicos de empresa?', a: 'Algumas transportadoras expõem tarifas corporativas dedicadas. Trabalhamos com cada parceiro TMC para ativar as tarifas negociadas relevantes sobre o inventário público.'},
      {q: 'A Tictactrip está em conformidade com o RGPD?', a: 'Sim. A Tictactrip é uma empresa francesa e a API é operada em conformidade com o RGPD. Os dados do viajante são processados estritamente para emitir os bilhetes de transporte solicitados.'},
    ],
    serviceType: 'API de viagens corporativas para Travel Management Companies (TMCs)',
    audienceType: 'Plataformas de viagens corporativas e Travel Management Companies',
  },
  ru: {
    eyebrow: 'Решение · Корпоративные поездки & TMC',
    title: 'Корпоративные поездки и TMC',
    metaTitle: 'API корпоративных путешествий для TMC — Мультимодальные европейские поезда и автобусы | Tictactrip',
    description: 'Питайте вашу TMC-платформу европейским инвентарём поездов и автобусов, мультимодальными маршрутами и отчётностью CO₂ через единый REST API.',
    metaDescription: 'API корпоративных путешествий для Travel Management Companies. Добавьте 250+ европейских железнодорожных и автобусных перевозчиков к вашей TMC-платформе с инвентарём в реальном времени, мультимодальными маршрутами, отчётностью CO₂ и бронированием с учётом политики.',
    keywords: 'API корпоративных путешествий, API TMC, API деловых поездок, корпоративное бронирование поездов, API travel management company, CO2 корпоративные поездки, устойчивые корпоративные поездки API, Tictactrip TMC',
    heroTitle: <>API мультимодальных путешествий для<br /><span style={{color: '#6ee7b7'}}>Travel Management Companies</span></>,
    heroLead: 'Привнесите европейский инвентарь поездов и автобусов в стэк вашей TMC — с данными CO₂, контролем политик и сквозной выдачей билетов через единый REST API.',
    intro: (
      <>
        <h2>Стэк корпоративных поездок теперь должен быть мультимодальным</h2>
        <p>Мандаты устойчивого развития, снижающиеся бюджеты на бизнес-перелёты и подъём высокоскоростного железнодорожного транспорта толкают <strong>корпоративные поездки</strong> «на землю». TMC, способные предложить поезда и междугородние автобусы наряду с авиабилетами, выигрывают продления — и предоставляют убедительную отчётность по CO₂.</p>
        <p><strong>Tictactrip</strong> открывает <strong>250+ европейских железнодорожных и автобусных перевозчиков</strong> через единый REST API. Ваша TMC-платформа видит нормализованный слой инвентаря, данные о выбросах на пассажира и единый бронирующий поток — никаких фрагментированных порталов перевозчиков, никаких отдельных пайплайнов выдачи билетов.</p>
      </>
    ),
    capabilities: [
      '250+ железнодорожных и автобусных перевозчиков по всей Европе',
      'Выбросы CO₂ на пассажира на сегмент для ESG-отчётности',
      'Метаданные, совместимые с политикой: тарифный класс, возвратность, предварительная покупка',
      'Мультимодальные маршруты для замены коротких авиаперелётов',
      'Сквозное бронирование с PDF-выдачей билета',
      'Возвраты и обмены обрабатываются Tictactrip',
    ],
    benefits: [
      {icon: '📊', title: 'ESG-отчётность на автопилоте', description: 'Каждый маршрут возвращает выбросы CO₂ на пассажира. Агрегируйте их по бронированиям, чтобы питать корпоративные дашборды устойчивости и отчётность Scope 3.'},
      {icon: '🛤️', title: 'Заменяйте короткие авиаперелёты железной дорогой', description: 'Tictactrip показывает высокоскоростные железнодорожные альтернативы коротким перелётам со сравнимой продолжительностью и меньшими выбросами — именно то, к чему стимулируют корпоративные политики устойчивости.'},
      {icon: '🧭', title: 'Бронирование с учётом политики', description: 'Метаданные тарифного класса, возвратности и предварительной покупки позволяют вашей TMC применять корпоративные правила путешествий до показа вариантов путешественнику.'},
      {icon: '🎟️', title: 'Единый поток выдачи билетов', description: 'PDF-билеты доставляются через тот же API. Никаких отдельных порталов перевозчиков, никакой ручной переэмиссии e-билетов.'},
    ],
    code: {filename: 'tmc-search.sh', body: codeBody},
    faqs: [
      {q: 'Может ли API заменять авиаперелёты железной дорогой, когда выбросы ниже?', a: 'Да. Поисковый эндпоинт возвращает поезда и автобусы на том же маршруте вместе с их выбросами CO₂, так что ваша TMC может приоритизировать железнодорожные альтернативы, когда политика или правила устойчивости этого требуют.'},
      {q: 'Предоставляете ли вы данные, необходимые для отчётности Scope 3 / ПГ?', a: 'Каждый маршрут возвращает оценочные выбросы CO₂ на пассажира на сегмент. События бронирования можно агрегировать в корпоративные ESG-дашборды и аудировать по опубликованным методологиям.'},
      {q: 'Как обрабатываются корпоративные тарифы и скидки?', a: 'Некоторые перевозчики предоставляют выделенные корпоративные тарифы. Мы работаем с каждым TMC-партнёром, чтобы активировать соответствующие согласованные ставки поверх публичного инвентаря.'},
      {q: 'Соответствует ли Tictactrip GDPR?', a: 'Да. Tictactrip — французская компания, и API работает в соответствии с GDPR. Данные путешественников обрабатываются исключительно для выпуска запрошенных транспортных билетов.'},
    ],
    serviceType: 'API корпоративных путешествий для Travel Management Companies (TMC)',
    audienceType: 'Платформы корпоративных путешествий и Travel Management Companies',
  },
};
