import React from 'react';
import type {Translations} from '../../useTranslation';
import type {SolutionPageProps} from '../../../components/SolutionPage';

type SolutionPageContent = Omit<SolutionPageProps, 'slug' | 'related'>;

const codeBody = `# MaaS long-distance leg: Lyon → Geneva
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRlyon____@u05kq",
    "destinationGpuid": "c|CHgeneva__@u0hgq",
    "outboundDate":     "2026-06-22T00:00:00Z",
    "passengers":       [{"age": 28}]
  }'`;

export const mobilityMaas: Translations<SolutionPageContent> = {
  en: {
    eyebrow: 'Solution · Mobility & MaaS',
    title: 'Mobility & MaaS platforms',
    metaTitle: 'MaaS API for mobility platforms — Long-distance rail & bus | Tictactrip',
    description: 'Complete your urban mobility offer with European long-distance trains and buses. Real-time multimodal itineraries through one REST API.',
    metaDescription: 'Mobility-as-a-Service API for MaaS platforms. Add long-distance European trains and intercity buses to your urban mobility stack — 250+ carriers, multimodal itineraries, real-time pricing and CO₂ data.',
    keywords: 'MaaS API, Mobility as a Service API, mobility platform travel API, long-distance rail API, intercity bus API, multimodal mobility, door-to-door travel API, Tictactrip MaaS',
    heroTitle: <>Door-to-door travel for<br /><span style={{color: '#6ee7b7'}}>MaaS &amp; mobility platforms</span></>,
    heroLead: 'Bridge your urban mobility offer to long-distance European rail and bus. One REST API, multimodal itineraries, end-to-end ticketing.',
    intro: (
      <>
        <h2>Urban mobility is the first mile. Tictactrip is the rest of the trip.</h2>
        <p>MaaS platforms already orchestrate <strong>scooters, car-share, ride-hail, transit passes</strong> and other urban modes. What completes the experience is the <strong>long-distance leg</strong> — the train from city to city, the intercity bus across borders.</p>
        <p><strong>Tictactrip</strong> exposes <strong>250+ European rail and bus carriers</strong> through a single REST API so your MaaS platform can plan, price and book the full door-to-door journey — urban mobility plus long-distance — without a second integration project.</p>
      </>
    ),
    capabilities: [
      '250+ rail and bus carriers across Europe',
      'Multi-leg, multi-operator itineraries assembled automatically',
      'Real-time pricing and seat availability',
      'CO₂ emissions per passenger per leg',
      'End-to-end booking with PDF ticket delivery',
      'Designed for MaaS routing engines and trip planners',
    ],
    benefits: [
      {icon: '🛤️', title: 'Long-distance layer for your MaaS', description: 'Plug intercity rail and bus into the same trip planner that already routes scooters, transit and car-share. Users get a single door-to-door itinerary instead of two disconnected apps.'},
      {icon: '🔁', title: 'Multi-operator combinations', description: 'When no direct connection exists, Tictactrip routes train + bus legs across operators into one itinerary — a key MaaS unlock for cross-border European journeys.'},
      {icon: '🌱', title: 'CO₂ per leg, ready for green routing', description: 'Every itinerary returns CO₂ emissions per passenger per leg, so your MaaS platform can offer eco-routing modes alongside fastest and cheapest.'},
      {icon: '🧩', title: 'Built to compose with other APIs', description: 'A clean REST surface, OpenAPI spec and Postman collection slot into your existing routing stack without forcing a redesign.'},
    ],
    code: {filename: 'maas-search.sh', body: codeBody},
    faqs: [
      {q: 'Can the API combine multiple operators in one journey?', a: 'Yes. The Tictactrip routing engine builds multi-leg itineraries that span several carriers when no direct service exists — a key requirement for MaaS use cases.'},
      {q: 'Is the response model compatible with MaaS routing standards?', a: 'The API returns origin, destination, departure, arrival, mode, carrier, fare and emissions per leg — the structure most MaaS routing engines expect. Our engineering team can walk through field-level mapping for your specific stack.'},
      {q: 'Does Tictactrip cover cross-border European journeys?', a: 'Yes. Coverage spans France, Italy, Spain, Germany, Benelux and most of continental Europe, including cross-border services operated by SNCF, Trenitalia, Renfe, FlixBus and many others.'},
      {q: 'How is integration handled for MaaS platforms?', a: 'We provide an OpenAPI specification, Postman collection and step-by-step tutorial. Most MaaS partners run an initial integration in 2 to 6 weeks.'},
    ],
    serviceType: 'Long-distance travel API for Mobility-as-a-Service (MaaS) platforms',
    audienceType: 'Mobility platforms and Mobility-as-a-Service (MaaS) operators',
  },
  fr: {
    eyebrow: 'Solution · Mobilité & MaaS',
    title: 'Mobilité & plateformes MaaS',
    metaTitle: 'API MaaS pour plateformes de mobilité — Rail et bus longue distance | Tictactrip',
    description: "Complétez votre offre de mobilité urbaine avec les trains et bus longue distance européens. Itinéraires multimodaux temps réel via une seule API REST.",
    metaDescription: "API Mobility-as-a-Service pour plateformes MaaS. Ajoutez trains et bus interurbains européens longue distance à votre stack de mobilité urbaine — 250+ transporteurs, itinéraires multimodaux, tarification temps réel et données CO₂.",
    keywords: 'API MaaS, API Mobility as a Service, API voyage plateforme mobilité, API rail longue distance, API bus interurbain, mobilité multimodale, API voyage porte-à-porte, Tictactrip MaaS',
    heroTitle: <>Voyage porte-à-porte pour<br /><span style={{color: '#6ee7b7'}}>plateformes MaaS et de mobilité</span></>,
    heroLead: "Reliez votre offre de mobilité urbaine au rail et au bus longue distance européens. Une API REST, des itinéraires multimodaux, une billetterie de bout en bout.",
    intro: (
      <>
        <h2>La mobilité urbaine est le premier kilomètre. Tictactrip est le reste du voyage.</h2>
        <p>Les plateformes MaaS orchestrent déjà <strong>trottinettes, autopartage, VTC, pass transit</strong> et autres modes urbains. Ce qui complète l'expérience est le <strong>segment longue distance</strong> — le train de ville à ville, le bus interurbain à travers les frontières.</p>
        <p><strong>Tictactrip</strong> expose <strong>250+ transporteurs ferroviaires et de bus européens</strong> via une seule API REST pour que votre plateforme MaaS puisse planifier, tarifer et réserver le trajet complet porte-à-porte — mobilité urbaine plus longue distance — sans un deuxième projet d'intégration.</p>
      </>
    ),
    capabilities: [
      "250+ transporteurs ferroviaires et de bus à travers l'Europe",
      "Itinéraires multi-segments, multi-opérateurs assemblés automatiquement",
      "Tarification et disponibilité de sièges en temps réel",
      "Émissions de CO₂ par passager et par segment",
      "Réservation de bout en bout avec livraison de billet PDF",
      "Conçue pour les moteurs de routage MaaS et planificateurs de trajet",
    ],
    benefits: [
      {icon: '🛤️', title: 'Couche longue distance pour votre MaaS', description: "Branchez rail et bus interurbains au même planificateur de trajet qui route déjà trottinettes, transit et autopartage. Les utilisateurs obtiennent un seul itinéraire porte-à-porte au lieu de deux apps déconnectées."},
      {icon: '🔁', title: 'Combinaisons multi-opérateurs', description: "Quand il n'y a pas de liaison directe, Tictactrip route des segments train + bus entre opérateurs en un seul itinéraire — un déblocage MaaS clé pour les trajets transfrontaliers européens."},
      {icon: '🌱', title: 'CO₂ par segment, prêt pour le routage vert', description: "Chaque itinéraire renvoie des émissions de CO₂ par passager et par segment, donc votre plateforme MaaS peut offrir des modes éco-routage à côté du plus rapide et du moins cher."},
      {icon: '🧩', title: "Conçue pour se composer avec d'autres API", description: "Une surface REST propre, une spec OpenAPI et une collection Postman s'insèrent dans votre stack de routage existant sans imposer de refonte."},
    ],
    code: {filename: 'maas-search.sh', body: codeBody},
    faqs: [
      {q: "L'API peut-elle combiner plusieurs opérateurs en un seul voyage ?", a: "Oui. Le moteur de routage Tictactrip construit des itinéraires multi-segments qui s'étendent sur plusieurs transporteurs quand il n'y a pas de service direct — une exigence clé pour les cas d'usage MaaS."},
      {q: 'Le modèle de réponse est-il compatible avec les standards de routage MaaS ?', a: "L'API renvoie origine, destination, départ, arrivée, mode, transporteur, tarif et émissions par segment — la structure que la plupart des moteurs de routage MaaS attendent. Notre équipe d'ingénierie peut parcourir le mapping champ par champ pour votre stack spécifique."},
      {q: 'Tictactrip couvre-t-il les voyages européens transfrontaliers ?', a: "Oui. La couverture s'étend en France, Italie, Espagne, Allemagne, Benelux et dans la majeure partie de l'Europe continentale, y compris les services transfrontaliers opérés par SNCF, Trenitalia, Renfe, FlixBus et beaucoup d'autres."},
      {q: "Comment l'intégration est-elle gérée pour les plateformes MaaS ?", a: "Nous fournissons une spécification OpenAPI, une collection Postman et un tutoriel pas à pas. La plupart des partenaires MaaS mènent une intégration initiale en 2 à 6 semaines."},
    ],
    serviceType: "API de voyage longue distance pour plateformes Mobility-as-a-Service (MaaS)",
    audienceType: "Plateformes de mobilité et opérateurs Mobility-as-a-Service (MaaS)",
  },
  de: {
    eyebrow: 'Lösung · Mobilität & MaaS',
    title: 'Mobilität & MaaS-Plattformen',
    metaTitle: 'MaaS-API für Mobilitätsplattformen — Bahn- und Bus-Fernverkehr | Tictactrip',
    description: 'Ergänzen Sie Ihr urbanes Mobilitätsangebot um europäische Fernzüge und -busse. Multimodale Echtzeit-Verbindungen über eine REST-API.',
    metaDescription: 'Mobility-as-a-Service-API für MaaS-Plattformen. Ergänzen Sie Ihren urbanen Mobilitäts-Stack um europäische Fernzüge und Fernbusse — 250+ Transporteure, multimodale Verbindungen, Echtzeit-Preise und CO₂-Daten.',
    keywords: 'MaaS-API, Mobility-as-a-Service-API, Mobilitätsplattform-Reise-API, Bahn-Fernverkehr-API, Fernbus-API, multimodale Mobilität, Tür-zu-Tür-Reise-API, Tictactrip MaaS',
    heroTitle: <>Tür-zu-Tür-Reisen für<br /><span style={{color: '#6ee7b7'}}>MaaS- &amp; Mobilitätsplattformen</span></>,
    heroLead: 'Verbinden Sie Ihr urbanes Mobilitätsangebot mit europäischer Fernbahn und Fernbus. Eine REST-API, multimodale Verbindungen, End-to-End-Ticketierung.',
    intro: (
      <>
        <h2>Urbane Mobilität ist die erste Meile. Tictactrip ist der Rest der Reise.</h2>
        <p>MaaS-Plattformen orchestrieren bereits <strong>Scooter, Carsharing, Ride-Hail, ÖPNV-Pässe</strong> und andere urbane Modi. Was die Erfahrung vervollständigt, ist der <strong>Fernverkehrsabschnitt</strong> — der Zug von Stadt zu Stadt, der Fernbus über Grenzen.</p>
        <p><strong>Tictactrip</strong> stellt <strong>250+ europäische Bahn- und Bus-Transporteure</strong> über eine REST-API bereit, sodass Ihre MaaS-Plattform die vollständige Tür-zu-Tür-Reise — urbane Mobilität plus Fernverkehr — planen, bepreisen und buchen kann, ohne ein zweites Integrationsprojekt.</p>
      </>
    ),
    capabilities: [
      '250+ Bahn- und Bus-Transporteure in ganz Europa',
      'Mehrteilige, mehroperatorige Verbindungen automatisch zusammengesetzt',
      'Echtzeit-Preise und Sitzplatzverfügbarkeit',
      'CO₂-Emissionen pro Passagier pro Teilstrecke',
      'End-to-End-Buchung mit PDF-Ticket-Lieferung',
      'Entworfen für MaaS-Routing-Engines und Reiseplaner',
    ],
    benefits: [
      {icon: '🛤️', title: 'Fernverkehrsebene für Ihr MaaS', description: 'Stecken Sie Fernbahn und -bus in denselben Reiseplaner, der bereits Scooter, ÖPNV und Carsharing routet. Nutzer bekommen einen einzigen Tür-zu-Tür-Plan statt zweier getrennter Apps.'},
      {icon: '🔁', title: 'Mehr-Operator-Kombinationen', description: 'Wenn keine direkte Verbindung existiert, routet Tictactrip Zug- und Bus-Teilstrecken über Operatoren in eine Verbindung — ein zentraler MaaS-Unlock für grenzüberschreitende europäische Reisen.'},
      {icon: '🌱', title: 'CO₂ pro Teilstrecke, bereit für grünes Routing', description: 'Jede Verbindung liefert CO₂-Emissionen pro Passagier pro Teilstrecke, sodass Ihre MaaS-Plattform Öko-Routing-Modi neben „schnellster" und „günstigster" anbieten kann.'},
      {icon: '🧩', title: 'Gebaut zur Komposition mit anderen APIs', description: 'Eine saubere REST-Oberfläche, OpenAPI-Spec und Postman-Sammlung fügen sich in Ihren bestehenden Routing-Stack ein, ohne ein Redesign zu erzwingen.'},
    ],
    code: {filename: 'maas-search.sh', body: codeBody},
    faqs: [
      {q: 'Kann die API mehrere Operatoren in einer Reise kombinieren?', a: 'Ja. Die Tictactrip-Routing-Engine baut mehrteilige Verbindungen, die mehrere Transporteure umfassen, wenn keine direkte Verbindung existiert — eine zentrale Anforderung für MaaS-Use-Cases.'},
      {q: 'Ist das Antwortmodell mit MaaS-Routing-Standards kompatibel?', a: 'Die API liefert Start, Ziel, Abfahrt, Ankunft, Modus, Transporteur, Tarif und Emissionen pro Teilstrecke — die Struktur, die die meisten MaaS-Routing-Engines erwarten. Unser Engineering-Team kann das Mapping auf Feldebene für Ihren spezifischen Stack durchgehen.'},
      {q: 'Deckt Tictactrip grenzüberschreitende europäische Reisen ab?', a: 'Ja. Die Abdeckung umfasst Frankreich, Italien, Spanien, Deutschland, Benelux und den Großteil Kontinentaleuropas, einschließlich grenzüberschreitender Dienste, die von SNCF, Trenitalia, Renfe, FlixBus und vielen anderen betrieben werden.'},
      {q: 'Wie wird die Integration für MaaS-Plattformen abgewickelt?', a: 'Wir stellen eine OpenAPI-Spezifikation, Postman-Sammlung und ein Schritt-für-Schritt-Tutorial bereit. Die meisten MaaS-Partner laufen eine initiale Integration in 2 bis 6 Wochen.'},
    ],
    serviceType: 'API für Fernverkehrsreisen für Mobility-as-a-Service-(MaaS-)Plattformen',
    audienceType: 'Mobilitätsplattformen und Mobility-as-a-Service-(MaaS-)Operatoren',
  },
  es: {
    eyebrow: 'Solución · Movilidad & MaaS',
    title: 'Plataformas de movilidad y MaaS',
    metaTitle: 'API MaaS para plataformas de movilidad — Rail y autobús de larga distancia | Tictactrip',
    description: 'Completa tu oferta de movilidad urbana con trenes y autobuses europeos de larga distancia. Itinerarios multimodales en tiempo real a través de una API REST.',
    metaDescription: 'API Mobility-as-a-Service para plataformas MaaS. Añade trenes y autobuses interurbanos europeos de larga distancia a tu stack de movilidad urbana — 250+ operadores, itinerarios multimodales, precios en tiempo real y datos de CO₂.',
    keywords: 'API MaaS, API Mobility as a Service, API viaje plataforma movilidad, API tren larga distancia, API autobús interurbano, movilidad multimodal, API viaje puerta a puerta, Tictactrip MaaS',
    heroTitle: <>Viaje puerta a puerta para<br /><span style={{color: '#6ee7b7'}}>plataformas MaaS y de movilidad</span></>,
    heroLead: 'Conecta tu oferta de movilidad urbana al tren y autobús europeos de larga distancia. Una API REST, itinerarios multimodales, billetería extremo a extremo.',
    intro: (
      <>
        <h2>La movilidad urbana es la primera milla. Tictactrip es el resto del viaje.</h2>
        <p>Las plataformas MaaS ya orquestan <strong>patinetes, carsharing, ride-hail, abonos de transporte</strong> y otros modos urbanos. Lo que completa la experiencia es el <strong>tramo de larga distancia</strong> — el tren de ciudad a ciudad, el autobús interurbano transfronterizo.</p>
        <p><strong>Tictactrip</strong> expone <strong>250+ operadores ferroviarios y de autobús europeos</strong> a través de una API REST para que tu plataforma MaaS pueda planificar, tarifar y reservar el viaje completo puerta a puerta — movilidad urbana más larga distancia — sin un segundo proyecto de integración.</p>
      </>
    ),
    capabilities: [
      '250+ operadores ferroviarios y de autobús por toda Europa',
      'Itinerarios multi-tramo y multi-operador ensamblados automáticamente',
      'Precios y disponibilidad de plazas en tiempo real',
      'Emisiones de CO₂ por pasajero y por tramo',
      'Reserva extremo a extremo con entrega de billete PDF',
      'Diseñada para motores de rutas MaaS y planificadores de trayecto',
    ],
    benefits: [
      {icon: '🛤️', title: 'Capa de larga distancia para tu MaaS', description: 'Conecta tren y autobús interurbano al mismo planificador de trayecto que ya enruta patinetes, transporte público y carsharing. Los usuarios obtienen un único itinerario puerta a puerta en lugar de dos apps desconectadas.'},
      {icon: '🔁', title: 'Combinaciones multi-operador', description: 'Cuando no hay conexión directa, Tictactrip enruta tramos de tren + autobús entre operadores en un solo itinerario — un desbloqueo MaaS clave para viajes europeos transfronterizos.'},
      {icon: '🌱', title: 'CO₂ por tramo, listo para enrutado verde', description: 'Cada itinerario devuelve emisiones de CO₂ por pasajero y por tramo, así que tu plataforma MaaS puede ofrecer modos de eco-enrutado junto al más rápido y al más barato.'},
      {icon: '🧩', title: 'Diseñada para componerse con otras APIs', description: 'Una superficie REST limpia, especificación OpenAPI y colección Postman encajan en tu stack de enrutamiento existente sin forzar un rediseño.'},
    ],
    code: {filename: 'maas-search.sh', body: codeBody},
    faqs: [
      {q: '¿Puede la API combinar varios operadores en un solo viaje?', a: 'Sí. El motor de enrutamiento de Tictactrip construye itinerarios multi-tramo que abarcan varios operadores cuando no hay servicio directo — un requisito clave para los casos de uso MaaS.'},
      {q: '¿El modelo de respuesta es compatible con los estándares de enrutamiento MaaS?', a: 'La API devuelve origen, destino, salida, llegada, modo, operador, tarifa y emisiones por tramo — la estructura que esperan la mayoría de motores MaaS. Nuestro equipo de ingeniería puede repasar el mapeo a nivel de campo para tu stack específico.'},
      {q: '¿Tictactrip cubre viajes europeos transfronterizos?', a: 'Sí. La cobertura abarca Francia, Italia, España, Alemania, Benelux y la mayor parte de la Europa continental, incluidos servicios transfronterizos operados por SNCF, Trenitalia, Renfe, FlixBus y muchos otros.'},
      {q: '¿Cómo se gestiona la integración para plataformas MaaS?', a: 'Proporcionamos una especificación OpenAPI, colección Postman y tutorial paso a paso. La mayoría de socios MaaS realizan una integración inicial en 2 a 6 semanas.'},
    ],
    serviceType: 'API de viaje de larga distancia para plataformas Mobility-as-a-Service (MaaS)',
    audienceType: 'Plataformas de movilidad y operadores Mobility-as-a-Service (MaaS)',
  },
  it: {
    eyebrow: 'Soluzione · Mobilità & MaaS',
    title: 'Piattaforme di mobilità e MaaS',
    metaTitle: 'API MaaS per piattaforme di mobilità — Rail e autobus a lunga distanza | Tictactrip',
    description: "Completa la tua offerta di mobilità urbana con treni e autobus europei a lunga distanza. Itinerari multimodali in tempo reale tramite un'API REST.",
    metaDescription: "API Mobility-as-a-Service per piattaforme MaaS. Aggiungi treni e autobus interurbani europei a lunga distanza al tuo stack di mobilità urbana — 250+ vettori, itinerari multimodali, prezzi in tempo reale e dati CO₂.",
    keywords: 'API MaaS, API Mobility as a Service, API viaggio piattaforma mobilità, API treno lunga distanza, API autobus interurbano, mobilità multimodale, API viaggio porta a porta, Tictactrip MaaS',
    heroTitle: <>Viaggio porta a porta per<br /><span style={{color: '#6ee7b7'}}>piattaforme MaaS e di mobilità</span></>,
    heroLead: "Collega la tua offerta di mobilità urbana al rail e all'autobus europei a lunga distanza. Un'API REST, itinerari multimodali, biglietteria end-to-end.",
    intro: (
      <>
        <h2>La mobilità urbana è il primo miglio. Tictactrip è il resto del viaggio.</h2>
        <p>Le piattaforme MaaS orchestrano già <strong>monopattini, car-sharing, ride-hailing, abbonamenti al trasporto pubblico</strong> e altri modi urbani. Ciò che completa l'esperienza è il <strong>segmento a lunga distanza</strong> — il treno da città a città, l'autobus interurbano transfrontaliero.</p>
        <p><strong>Tictactrip</strong> espone <strong>250+ vettori europei ferroviari e di autobus</strong> tramite un'API REST così la tua piattaforma MaaS può pianificare, tariffare e prenotare l'intero viaggio porta a porta — mobilità urbana più lunga distanza — senza un secondo progetto di integrazione.</p>
      </>
    ),
    capabilities: [
      "250+ vettori ferroviari e di autobus in tutta Europa",
      "Itinerari multi-tratta, multi-operatore assemblati automaticamente",
      "Prezzi e disponibilità di posti in tempo reale",
      "Emissioni di CO₂ per passeggero e per tratta",
      "Prenotazione end-to-end con consegna biglietto PDF",
      "Progettata per motori di routing MaaS e pianificatori di viaggio",
    ],
    benefits: [
      {icon: '🛤️', title: 'Strato a lunga distanza per il tuo MaaS', description: "Collega rail e autobus interurbani allo stesso pianificatore di viaggio che già instrada monopattini, trasporto pubblico e car-sharing. Gli utenti ottengono un singolo itinerario porta a porta invece di due app scollegate."},
      {icon: '🔁', title: 'Combinazioni multi-operatore', description: "Quando non esiste un collegamento diretto, Tictactrip instrada tratte treno + autobus fra operatori in un unico itinerario — uno sblocco MaaS chiave per viaggi europei transfrontalieri."},
      {icon: '🌱', title: 'CO₂ per tratta, pronto per il routing verde', description: "Ogni itinerario restituisce emissioni di CO₂ per passeggero e per tratta, così la tua piattaforma MaaS può offrire modalità di eco-routing accanto al più veloce e al più economico."},
      {icon: '🧩', title: 'Costruita per comporsi con altre API', description: "Una superficie REST pulita, specifica OpenAPI e raccolta Postman si inseriscono nel tuo stack di routing esistente senza forzare un redesign."},
    ],
    code: {filename: 'maas-search.sh', body: codeBody},
    faqs: [
      {q: "L'API può combinare più operatori in un unico viaggio?", a: "Sì. Il motore di routing Tictactrip costruisce itinerari multi-tratta che attraversano più vettori quando non esiste un servizio diretto — un requisito chiave per i casi d'uso MaaS."},
      {q: 'Il modello di risposta è compatibile con gli standard di routing MaaS?', a: "L'API restituisce origine, destinazione, partenza, arrivo, modo, vettore, tariffa ed emissioni per tratta — la struttura che la maggior parte dei motori MaaS si aspetta. Il nostro team di ingegneria può passare in rassegna il mapping a livello di campo per il tuo stack specifico."},
      {q: 'Tictactrip copre viaggi europei transfrontalieri?', a: "Sì. La copertura comprende Francia, Italia, Spagna, Germania, Benelux e la maggior parte dell'Europa continentale, compresi servizi transfrontalieri operati da SNCF, Trenitalia, Renfe, FlixBus e molti altri."},
      {q: "Come viene gestita l'integrazione per le piattaforme MaaS?", a: "Forniamo una specifica OpenAPI, una raccolta Postman e un tutorial passo passo. La maggior parte dei partner MaaS esegue un'integrazione iniziale in 2-6 settimane."},
    ],
    serviceType: 'API di viaggio a lunga distanza per piattaforme Mobility-as-a-Service (MaaS)',
    audienceType: 'Piattaforme di mobilità e operatori Mobility-as-a-Service (MaaS)',
  },
  pt: {
    eyebrow: 'Solução · Mobilidade & MaaS',
    title: 'Plataformas de mobilidade & MaaS',
    metaTitle: 'API MaaS para plataformas de mobilidade — Comboio e autocarro de longa distância | Tictactrip',
    description: 'Complete a sua oferta de mobilidade urbana com comboios e autocarros europeus de longa distância. Itinerários multimodais em tempo real através de uma API REST.',
    metaDescription: 'API Mobility-as-a-Service para plataformas MaaS. Adicione comboios e autocarros interurbanos europeus de longa distância ao seu stack de mobilidade urbana — 250+ transportadoras, itinerários multimodais, preços em tempo real e dados de CO₂.',
    keywords: 'API MaaS, API Mobility as a Service, API viagem plataforma mobilidade, API comboio longa distância, API autocarro interurbano, mobilidade multimodal, API viagem porta a porta, Tictactrip MaaS',
    heroTitle: <>Viagem porta a porta para<br /><span style={{color: '#6ee7b7'}}>plataformas MaaS &amp; de mobilidade</span></>,
    heroLead: 'Ligue a sua oferta de mobilidade urbana ao comboio e autocarro europeus de longa distância. Uma API REST, itinerários multimodais, bilhética ponto a ponto.',
    intro: (
      <>
        <h2>A mobilidade urbana é a primeira milha. A Tictactrip é o resto da viagem.</h2>
        <p>As plataformas MaaS já orquestram <strong>trotinetas, partilha de carro, ride-hail, passes de transportes</strong> e outros modos urbanos. O que completa a experiência é o <strong>segmento de longa distância</strong> — o comboio de cidade para cidade, o autocarro interurbano transfronteiriço.</p>
        <p>A <strong>Tictactrip</strong> expõe <strong>250+ transportadoras europeias de comboio e autocarro</strong> através de uma única API REST para que a sua plataforma MaaS possa planear, tarifar e reservar a viagem completa porta a porta — mobilidade urbana mais longa distância — sem um segundo projeto de integração.</p>
      </>
    ),
    capabilities: [
      '250+ transportadoras ferroviárias e de autocarro em toda a Europa',
      'Itinerários multi-troço, multi-operador montados automaticamente',
      'Preços e disponibilidade de lugares em tempo real',
      'Emissões de CO₂ por passageiro e por troço',
      'Reserva ponto a ponto com entrega de bilhete PDF',
      'Desenhada para motores de roteamento MaaS e planeadores de viagem',
    ],
    benefits: [
      {icon: '🛤️', title: 'Camada de longa distância para o seu MaaS', description: 'Ligue comboio e autocarro interurbano ao mesmo planeador de viagem que já encaminha trotinetas, transportes e partilha de carro. Os utilizadores obtêm um único itinerário porta a porta em vez de duas apps desconectadas.'},
      {icon: '🔁', title: 'Combinações multi-operador', description: 'Quando não existe ligação direta, a Tictactrip encaminha troços de comboio + autocarro entre operadores num único itinerário — um desbloqueio MaaS chave para viagens europeias transfronteiriças.'},
      {icon: '🌱', title: 'CO₂ por troço, pronto para roteamento verde', description: 'Cada itinerário devolve emissões de CO₂ por passageiro e por troço, para que a sua plataforma MaaS possa oferecer modos de eco-roteamento ao lado de mais rápido e mais barato.'},
      {icon: '🧩', title: 'Construída para se compor com outras APIs', description: 'Uma superfície REST limpa, especificação OpenAPI e coleção Postman encaixam no seu stack de roteamento existente sem forçar um redesenho.'},
    ],
    code: {filename: 'maas-search.sh', body: codeBody},
    faqs: [
      {q: 'A API pode combinar vários operadores numa só viagem?', a: 'Sim. O motor de roteamento da Tictactrip constrói itinerários multi-troço que abrangem várias transportadoras quando não existe serviço direto — um requisito-chave para casos de uso MaaS.'},
      {q: 'O modelo de resposta é compatível com os padrões de roteamento MaaS?', a: 'A API devolve origem, destino, partida, chegada, modo, transportadora, tarifa e emissões por troço — a estrutura que a maioria dos motores MaaS espera. A nossa equipa de engenharia pode percorrer o mapeamento ao nível do campo para o seu stack específico.'},
      {q: 'A Tictactrip cobre viagens europeias transfronteiriças?', a: 'Sim. A cobertura abrange França, Itália, Espanha, Alemanha, Benelux e a maior parte da Europa continental, incluindo serviços transfronteiriços operados pela SNCF, Trenitalia, Renfe, FlixBus e muitos outros.'},
      {q: 'Como é tratada a integração para plataformas MaaS?', a: 'Fornecemos uma especificação OpenAPI, coleção Postman e tutorial passo a passo. A maioria dos parceiros MaaS executa uma integração inicial em 2 a 6 semanas.'},
    ],
    serviceType: 'API de viagem de longa distância para plataformas Mobility-as-a-Service (MaaS)',
    audienceType: 'Plataformas de mobilidade e operadores Mobility-as-a-Service (MaaS)',
  },
  ru: {
    eyebrow: 'Решение · Мобильность и MaaS',
    title: 'Платформы мобильности и MaaS',
    metaTitle: 'MaaS API для платформ мобильности — Поезда и автобусы дальнего следования | Tictactrip',
    description: 'Дополните ваше предложение городской мобильности европейскими поездами и автобусами дальнего следования. Мультимодальные маршруты в реальном времени через единый REST API.',
    metaDescription: 'Mobility-as-a-Service API для MaaS-платформ. Добавьте европейские поезда и междугородние автобусы дальнего следования к вашему городскому мобильностному стэку — 250+ перевозчиков, мультимодальные маршруты, цены в реальном времени и данные CO₂.',
    keywords: 'API MaaS, API Mobility as a Service, API путешествий платформа мобильности, API поездов дальнего следования, API междугородних автобусов, мультимодальная мобильность, API путешествий «от двери до двери», Tictactrip MaaS',
    heroTitle: <>Путешествия «от двери до двери» для<br /><span style={{color: '#6ee7b7'}}>MaaS- и мобильностных платформ</span></>,
    heroLead: 'Соедините ваше предложение городской мобильности с европейскими поездами и автобусами дальнего следования. Один REST API, мультимодальные маршруты, сквозная выдача билетов.',
    intro: (
      <>
        <h2>Городская мобильность — это первая миля. Tictactrip — это остальная часть поездки.</h2>
        <p>MaaS-платформы уже оркестрируют <strong>самокаты, каршеринг, такси, проездные на общественный транспорт</strong> и другие городские виды. Завершает опыт <strong>дальний сегмент</strong> — поезд из города в город, междугородний автобус через границы.</p>
        <p><strong>Tictactrip</strong> открывает <strong>250+ европейских железнодорожных и автобусных перевозчиков</strong> через единый REST API, чтобы ваша MaaS-платформа могла планировать, тарифицировать и бронировать полную поездку «от двери до двери» — городская мобильность плюс дальнее следование — без второго интеграционного проекта.</p>
      </>
    ),
    capabilities: [
      '250+ железнодорожных и автобусных перевозчиков по всей Европе',
      'Многосегментные мульти-операторские маршруты, собираемые автоматически',
      'Цены и доступность мест в реальном времени',
      'Выбросы CO₂ на пассажира на сегмент',
      'Сквозное бронирование с PDF-выдачей билета',
      'Создано для маршрутизаторов MaaS и планировщиков поездок',
    ],
    benefits: [
      {icon: '🛤️', title: 'Слой дальнего следования для вашей MaaS', description: 'Подключите дальнюю железную дорогу и автобусы к тому же планировщику поездок, который уже маршрутизирует самокаты, общественный транспорт и каршеринг. Пользователи получают один маршрут «от двери до двери» вместо двух разрозненных приложений.'},
      {icon: '🔁', title: 'Мульти-операторские комбинации', description: 'Когда прямой связи нет, Tictactrip маршрутизирует сегменты поезд + автобус между операторами в единый маршрут — ключевая разблокировка MaaS для трансграничных европейских поездок.'},
      {icon: '🌱', title: 'CO₂ на сегмент, готово к зелёной маршрутизации', description: 'Каждый маршрут возвращает выбросы CO₂ на пассажира на сегмент, так что ваша MaaS-платформа может предлагать режимы эко-маршрутизации наряду с «самым быстрым» и «самым дешёвым».'},
      {icon: '🧩', title: 'Создано, чтобы компоноваться с другими API', description: 'Чистая REST-поверхность, спецификация OpenAPI и коллекция Postman вписываются в ваш существующий маршрутизирующий стэк без принудительного редизайна.'},
    ],
    code: {filename: 'maas-search.sh', body: codeBody},
    faqs: [
      {q: 'Может ли API объединять нескольких операторов в одной поездке?', a: 'Да. Маршрутизатор Tictactrip строит многосегментные маршруты, охватывающие нескольких перевозчиков, когда прямого сервиса нет — ключевое требование для MaaS-сценариев.'},
      {q: 'Совместима ли модель ответа со стандартами MaaS-маршрутизации?', a: 'API возвращает пункт отправления, назначения, отправление, прибытие, вид транспорта, перевозчика, тариф и выбросы по сегментам — структуру, которую ожидают большинство MaaS-маршрутизаторов. Наша инженерная команда может пройтись по сопоставлению полей для вашего конкретного стэка.'},
      {q: 'Покрывает ли Tictactrip трансграничные европейские поездки?', a: 'Да. Покрытие включает Францию, Италию, Испанию, Германию, Бенилюкс и большую часть континентальной Европы, включая трансграничные сервисы, оперируемые SNCF, Trenitalia, Renfe, FlixBus и многими другими.'},
      {q: 'Как организована интеграция для MaaS-платформ?', a: 'Мы предоставляем спецификацию OpenAPI, коллекцию Postman и пошаговое руководство. Большинство MaaS-партнёров выполняют начальную интеграцию за 2–6 недель.'},
    ],
    serviceType: 'API путешествий дальнего следования для платформ Mobility-as-a-Service (MaaS)',
    audienceType: 'Платформы мобильности и операторы Mobility-as-a-Service (MaaS)',
  },
};
