import React from 'react';
import type {Translations} from '../../useTranslation';
import type {SolutionPageProps} from '../../../components/SolutionPage';

type FeaturePageContent = Omit<SolutionPageProps, 'slug' | 'related'>;

export const multimodalCoverage: Translations<FeaturePageContent> = {
  en: {
    breadcrumbCategory: 'Features',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Why multimodal coverage matters',
    relatedHeading: 'Other Tictactrip features',
    eyebrow: 'Feature · Multimodal coverage',
    title: 'Multimodal coverage',
    metaTitle: 'Multimodal travel API — 250+ train and bus carriers across Europe | Tictactrip',
    description:
      'One API for European trains and buses. SNCF, Trenitalia, FlixBus, Renfe and 250+ carriers in a single normalized data model.',
    metaDescription:
      'Multimodal travel API covering 250+ European train and bus carriers — SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo. A single REST API with one normalized data model, real-time inventory and end-to-end booking.',
    keywords:
      'multimodal travel API, European train API, European bus API, rail booking API, SNCF API, Trenitalia API, Renfe API, FlixBus API, BlaBlaCar Bus API, multi-carrier travel API, Tictactrip multimodal',
    heroTitle: (
      <>
        One API for <span style={{color: '#6ee7b7'}}>250+ European</span><br />
        train and bus carriers
      </>
    ),
    heroLead:
      'A single REST endpoint replaces the fragmented landscape of European ground transport — no carrier-by-carrier contracts, no GDS workarounds, no parallel ticketing pipelines.',
    intro: (
      <>
        <h2>One data model for the entire European ground-transport network</h2>
        <p>
          European long-distance travel is split across <strong>dozens of national rail incumbents, low-cost operators and intercity bus networks</strong>. Each has its own distribution system, fare rules, identifier scheme and ticket format.
        </p>
        <p>
          <strong>Tictactrip</strong> compresses that complexity into a single REST API. Search once and receive results from <strong>SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo</strong> and hundreds more — in one normalized response with consistent fields for price, duration, fare class, carrier and CO₂.
        </p>
        <p>
          Coverage spans <strong>France, Italy, Spain, Germany, Benelux</strong> and the rest of continental Europe, including cross-border services that no single carrier exposes through its own API.
        </p>
      </>
    ),
    capabilities: [
      '250+ rail and intercity bus operators',
      'France · Italy · Spain · Germany · Benelux · cross-border Europe',
      'High-speed, intercity and regional rail',
      'Low-cost rail (Ouigo) and high-speed (TGV, AVE, Frecciarossa)',
      'Long-distance bus networks (FlixBus, BlaBlaCar Bus, ALSA)',
      'One normalized response shape across every carrier',
    ],
    benefits: [
      {icon: '🌍', title: 'Continent-wide reach on day one', description: 'Hundreds of carriers, one integration. Your engineering team stops triaging carrier-specific edge cases and starts shipping product.'},
      {icon: '🔌', title: 'Normalized data model', description: 'Origin, destination, fare class, segments, carrier and CO₂ follow the same shape across operators. Build once and the next carrier we add ships through the same code path.'},
      {icon: '🤝', title: 'Carrier relationships maintained for you', description: 'We negotiate, certify and operate the distribution side. You see new carriers appear in your API responses rather than as new integration projects.'},
      {icon: '🛰️', title: 'Cross-border itineraries', description: 'Many of the highest-margin European journeys cross borders. Tictactrip surfaces them as native results, not as second-class exception cases.'},
    ],
    code: {
      filename: 'search-multimodal.sh',
      body: `# Multimodal search: Paris → Milan
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRpari____@u09tu",
    "destinationGpuid": "c|ITmila____@u0nd6",
    "outboundDate":     "2026-06-12T00:00:00Z",
    "passengers":       [{"age": 30}]
  }'

# → mix of SNCF, Trenitalia, FlixBus and combined
#   itineraries in one normalized response.`,
    },
    faqs: [
      {q: 'Which European carriers does the API cover?', a: 'Tictactrip aggregates 250+ rail and intercity bus operators including SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo, TGV, AVE, Frecciarossa and many regional carriers across France, Italy, Spain, Germany, Benelux and the rest of continental Europe.'},
      {q: 'How are different carriers normalized in the response?', a: 'Every itinerary returned by /v2/results uses the same schema: origin, destination, segments, fare class, carrier, price and CO₂. You build your UI against one model regardless of which operator serves the trip.'},
      {q: 'Can the API search cross-border journeys?', a: 'Yes. Cross-border itineraries are first-class results — Paris ↔ Brussels, Paris ↔ Milan, Madrid ↔ Lisbon, Frankfurt ↔ Amsterdam and many others.'},
      {q: 'How often is new carrier coverage added?', a: 'Tictactrip continuously adds operators. New carriers ship through the existing API surface without breaking changes — your integration picks them up automatically.'},
    ],
    serviceType: 'Multimodal European train and bus inventory API',
    audienceType: 'Travel platforms requiring broad multi-carrier European ground-transport coverage',
  },
  fr: {
    breadcrumbCategory: 'Fonctionnalités',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: "Pourquoi la couverture multimodale est essentielle",
    relatedHeading: 'Autres fonctionnalités Tictactrip',
    eyebrow: 'Fonctionnalité · Couverture multimodale',
    title: 'Couverture multimodale',
    metaTitle: 'API de voyage multimodale — 250+ transporteurs trains et bus en Europe | Tictactrip',
    description:
      "Une API pour les trains et bus européens. SNCF, Trenitalia, FlixBus, Renfe et 250+ transporteurs dans un modèle de données unifié.",
    metaDescription:
      "API de voyage multimodale couvrant 250+ transporteurs européens de trains et de bus — SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo. Une seule API REST avec un modèle de données unifié, un inventaire en temps réel et la réservation de bout en bout.",
    keywords:
      "API voyage multimodale, API trains Europe, API bus Europe, API réservation ferroviaire, API SNCF, API Trenitalia, API Renfe, API FlixBus, API BlaBlaCar Bus, API voyage multi-transporteur, Tictactrip multimodal",
    heroTitle: (
      <>
        Une API pour <span style={{color: '#6ee7b7'}}>250+ transporteurs</span><br />
        européens, trains et bus
      </>
    ),
    heroLead:
      "Un seul endpoint REST remplace le paysage fragmenté du transport terrestre européen — pas de contrats transporteur par transporteur, pas de contournements GDS, pas de pipelines de billetterie parallèles.",
    intro: (
      <>
        <h2>Un modèle de données pour tout le réseau de transport terrestre européen</h2>
        <p>
          Le voyage longue distance européen est réparti entre <strong>des dizaines d'opérateurs ferroviaires nationaux, low-cost et réseaux d'autocars interurbains</strong>. Chacun a son propre système de distribution, ses règles tarifaires, ses identifiants et son format de billet.
        </p>
        <p>
          <strong>Tictactrip</strong> compresse cette complexité dans une seule API REST. Cherchez une fois et recevez des résultats de <strong>SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo</strong> et de centaines d'autres — dans une réponse unifiée avec des champs cohérents pour prix, durée, classe tarifaire, transporteur et CO₂.
        </p>
        <p>
          La couverture s'étend à <strong>la France, l'Italie, l'Espagne, l'Allemagne, le Benelux</strong> et au reste de l'Europe continentale, y compris des services transfrontaliers qu'aucun transporteur unique n'expose via sa propre API.
        </p>
      </>
    ),
    capabilities: [
      "250+ opérateurs ferroviaires et de bus interurbains",
      "France · Italie · Espagne · Allemagne · Benelux · Europe transfrontalière",
      "Trains à grande vitesse, intercités et régionaux",
      "Ferroviaire low-cost (Ouigo) et grande vitesse (TGV, AVE, Frecciarossa)",
      "Réseaux d'autocars longue distance (FlixBus, BlaBlaCar Bus, ALSA)",
      "Une seule forme de réponse normalisée pour tous les transporteurs",
    ],
    benefits: [
      {icon: '🌍', title: "Portée continentale dès le premier jour", description: "Des centaines de transporteurs, une seule intégration. Votre équipe d'ingénierie cesse de trier les cas limites spécifiques par transporteur et commence à livrer du produit."},
      {icon: '🔌', title: 'Modèle de données normalisé', description: "Origine, destination, classe tarifaire, segments, transporteur et CO₂ suivent la même forme pour tous les opérateurs. Construisez une fois, et le prochain transporteur que nous ajoutons passe par le même chemin de code."},
      {icon: '🤝', title: 'Relations transporteurs maintenues pour vous', description: "Nous négocions, certifions et opérons le côté distribution. Vous voyez de nouveaux transporteurs apparaître dans vos réponses API plutôt que comme de nouveaux projets d'intégration."},
      {icon: '🛰️', title: 'Itinéraires transfrontaliers', description: "Beaucoup des trajets européens les plus margés traversent des frontières. Tictactrip les fait apparaître comme résultats natifs, et non comme cas d'exception de seconde classe."},
    ],
    code: {
      filename: 'search-multimodal.sh',
      body: `# Recherche multimodale : Paris → Milan
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRpari____@u09tu",
    "destinationGpuid": "c|ITmila____@u0nd6",
    "outboundDate":     "2026-06-12T00:00:00Z",
    "passengers":       [{"age": 30}]
  }'

# → mélange SNCF, Trenitalia, FlixBus et
#   itinéraires combinés dans une réponse unifiée.`,
    },
    faqs: [
      {q: "Quels transporteurs européens l'API couvre-t-elle ?", a: "Tictactrip agrège 250+ opérateurs ferroviaires et de bus interurbains dont SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo, TGV, AVE, Frecciarossa et de nombreux transporteurs régionaux en France, Italie, Espagne, Allemagne, Benelux et dans le reste de l'Europe continentale."},
      {q: "Comment les différents transporteurs sont-ils normalisés dans la réponse ?", a: "Chaque itinéraire renvoyé par /v2/results utilise le même schéma : origine, destination, segments, classe tarifaire, transporteur, prix et CO₂. Vous construisez votre interface contre un seul modèle, quel que soit l'opérateur qui assure le trajet."},
      {q: "L'API peut-elle rechercher des trajets transfrontaliers ?", a: "Oui. Les itinéraires transfrontaliers sont des résultats de première classe — Paris ↔ Bruxelles, Paris ↔ Milan, Madrid ↔ Lisbonne, Francfort ↔ Amsterdam et bien d'autres."},
      {q: "À quelle fréquence ajoutez-vous de nouveaux transporteurs ?", a: "Tictactrip ajoute continuellement des opérateurs. Les nouveaux transporteurs sont livrés via la surface API existante sans rupture — votre intégration les récupère automatiquement."},
    ],
    serviceType: "API d'inventaire multimodale trains et bus européens",
    audienceType: "Plateformes de voyage nécessitant une large couverture multi-transporteurs du transport terrestre européen",
  },
  de: {
    breadcrumbCategory: 'Funktionen',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Warum multimodale Abdeckung zählt',
    relatedHeading: 'Weitere Tictactrip-Funktionen',
    eyebrow: 'Funktion · Multimodale Abdeckung',
    title: 'Multimodale Abdeckung',
    metaTitle: 'Multimodale Reise-API — 250+ Zug- und Bus-Transporteure in Europa | Tictactrip',
    description:
      'Eine API für europäische Züge und Busse. SNCF, Trenitalia, FlixBus, Renfe und 250+ Transporteure in einem einheitlichen Datenmodell.',
    metaDescription:
      'Multimodale Reise-API mit 250+ europäischen Zug- und Bus-Transporteuren — SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo. Eine REST-API mit einem normalisierten Datenmodell, Echtzeit-Inventar und durchgängiger Buchung.',
    keywords:
      'multimodale Reise-API, europäische Zug-API, europäische Bus-API, Bahnbuchungs-API, SNCF API, Trenitalia API, Renfe API, FlixBus API, BlaBlaCar Bus API, Mehrtransporteur-Reise-API, Tictactrip Multimodal',
    heroTitle: (
      <>
        Eine API für <span style={{color: '#6ee7b7'}}>250+ europäische</span><br />
        Zug- und Bus-Transporteure
      </>
    ),
    heroLead:
      'Ein einziger REST-Endpunkt ersetzt die fragmentierte Landschaft des europäischen Bodentransports — keine Transporteur-für-Transporteur-Verträge, keine GDS-Umgehungen, keine parallelen Ticketing-Pipelines.',
    intro: (
      <>
        <h2>Ein Datenmodell für das gesamte europäische Bodentransport-Netz</h2>
        <p>
          Europäische Fernreisen verteilen sich auf <strong>Dutzende nationaler Bahnbetreiber, Low-Cost-Operatoren und Fernbus-Netzwerke</strong>. Jeder hat sein eigenes Vertriebssystem, eigene Tarifregeln, Kennungs-Schema und Ticketformat.
        </p>
        <p>
          <strong>Tictactrip</strong> verdichtet diese Komplexität in eine REST-API. Suchen Sie einmal und erhalten Sie Ergebnisse von <strong>SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo</strong> und Hunderten mehr — in einer normalisierten Antwort mit einheitlichen Feldern für Preis, Dauer, Tarifklasse, Transporteur und CO₂.
        </p>
        <p>
          Die Abdeckung umfasst <strong>Frankreich, Italien, Spanien, Deutschland, Benelux</strong> und den Rest Kontinentaleuropas — einschließlich grenzüberschreitender Verbindungen, die kein einzelner Transporteur über seine eigene API anbietet.
        </p>
      </>
    ),
    capabilities: [
      '250+ Bahn- und Fernbus-Betreiber',
      'Frankreich · Italien · Spanien · Deutschland · Benelux · grenzüberschreitendes Europa',
      'Hochgeschwindigkeits-, Intercity- und Regionalzüge',
      'Low-Cost-Bahn (Ouigo) und Hochgeschwindigkeit (TGV, AVE, Frecciarossa)',
      'Fernbus-Netzwerke (FlixBus, BlaBlaCar Bus, ALSA)',
      'Eine normalisierte Antwortform für jeden Transporteur',
    ],
    benefits: [
      {icon: '🌍', title: 'Kontinentweite Reichweite ab Tag eins', description: 'Hunderte Transporteure, eine Integration. Ihr Engineering-Team hört auf, Transporteur-spezifische Edge Cases zu sortieren, und beginnt Produkt zu liefern.'},
      {icon: '🔌', title: 'Normalisiertes Datenmodell', description: 'Start, Ziel, Tarifklasse, Segmente, Transporteur und CO₂ folgen für alle Operatoren der gleichen Form. Einmal bauen, der nächste Transporteur, den wir hinzufügen, läuft denselben Code-Pfad.'},
      {icon: '🤝', title: 'Transporteur-Beziehungen für Sie gepflegt', description: 'Wir verhandeln, zertifizieren und betreiben die Vertriebsseite. Sie sehen neue Transporteure in Ihren API-Antworten erscheinen statt als neue Integrationsprojekte.'},
      {icon: '🛰️', title: 'Grenzüberschreitende Verbindungen', description: 'Viele der margenstärksten europäischen Reisen überqueren Grenzen. Tictactrip liefert sie als native Ergebnisse, nicht als Ausnahmefälle zweiter Klasse.'},
    ],
    code: {
      filename: 'search-multimodal.sh',
      body: `# Multimodale Suche: Paris → Mailand
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRpari____@u09tu",
    "destinationGpuid": "c|ITmila____@u0nd6",
    "outboundDate":     "2026-06-12T00:00:00Z",
    "passengers":       [{"age": 30}]
  }'

# → Mischung aus SNCF, Trenitalia, FlixBus
#   und kombinierten Verbindungen in einer
#   normalisierten Antwort.`,
    },
    faqs: [
      {q: 'Welche europäischen Transporteure deckt die API ab?', a: 'Tictactrip aggregiert 250+ Bahn- und Fernbus-Betreiber, darunter SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo, TGV, AVE, Frecciarossa und viele regionale Anbieter in Frankreich, Italien, Spanien, Deutschland, Benelux und dem Rest Kontinentaleuropas.'},
      {q: 'Wie werden die verschiedenen Transporteure in der Antwort normalisiert?', a: 'Jede von /v2/results zurückgegebene Verbindung verwendet dasselbe Schema: Start, Ziel, Segmente, Tarifklasse, Transporteur, Preis und CO₂. Sie bauen Ihre UI gegen ein Modell — egal welcher Operator die Reise bedient.'},
      {q: 'Kann die API grenzüberschreitende Reisen suchen?', a: 'Ja. Grenzüberschreitende Verbindungen sind erstklassige Ergebnisse — Paris ↔ Brüssel, Paris ↔ Mailand, Madrid ↔ Lissabon, Frankfurt ↔ Amsterdam und viele mehr.'},
      {q: 'Wie oft kommen neue Transporteure hinzu?', a: 'Tictactrip fügt fortlaufend Operatoren hinzu. Neue Transporteure werden über die bestehende API-Oberfläche ausgeliefert — ohne Breaking Changes. Ihre Integration übernimmt sie automatisch.'},
    ],
    serviceType: 'Multimodale europäische Zug- und Bus-Inventar-API',
    audienceType: 'Reiseplattformen, die eine breite Multi-Carrier-Abdeckung des europäischen Bodentransports benötigen',
  },
  es: {
    breadcrumbCategory: 'Funciones',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Por qué la cobertura multimodal importa',
    relatedHeading: 'Otras funciones de Tictactrip',
    eyebrow: 'Función · Cobertura multimodal',
    title: 'Cobertura multimodal',
    metaTitle: 'API de viaje multimodal — 250+ operadores de tren y autobús en Europa | Tictactrip',
    description:
      'Una API para trenes y autobuses europeos. SNCF, Trenitalia, FlixBus, Renfe y 250+ operadores en un modelo de datos unificado.',
    metaDescription:
      'API de viaje multimodal con 250+ operadores europeos de tren y autobús — SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo. Una API REST con un modelo de datos normalizado, inventario en tiempo real y reserva extremo a extremo.',
    keywords:
      'API viaje multimodal, API trenes Europa, API autobuses Europa, API reserva ferroviaria, API SNCF, API Trenitalia, API Renfe, API FlixBus, API BlaBlaCar Bus, API viaje multi-operador, Tictactrip multimodal',
    heroTitle: (
      <>
        Una API para <span style={{color: '#6ee7b7'}}>250+ operadores</span><br />
        europeos de tren y autobús
      </>
    ),
    heroLead:
      'Un único endpoint REST sustituye el paisaje fragmentado del transporte terrestre europeo — sin contratos operador por operador, sin parches de GDS, sin pipelines de emisión de billetes paralelos.',
    intro: (
      <>
        <h2>Un modelo de datos para toda la red de transporte terrestre europeo</h2>
        <p>
          El viaje europeo de larga distancia está repartido entre <strong>decenas de operadores ferroviarios nacionales, low-cost y redes de autobús interurbano</strong>. Cada uno tiene su propio sistema de distribución, reglas tarifarias, identificadores y formato de billete.
        </p>
        <p>
          <strong>Tictactrip</strong> comprime esa complejidad en una sola API REST. Busca una vez y recibe resultados de <strong>SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo</strong> y cientos más — en una respuesta normalizada con campos consistentes de precio, duración, clase tarifaria, operador y CO₂.
        </p>
        <p>
          La cobertura se extiende por <strong>Francia, Italia, España, Alemania, Benelux</strong> y el resto de Europa continental, incluidos servicios transfronterizos que ningún operador único expone por su propia API.
        </p>
      </>
    ),
    capabilities: [
      '250+ operadores ferroviarios y de autobús interurbano',
      'Francia · Italia · España · Alemania · Benelux · Europa transfronteriza',
      'Alta velocidad, intercity y trenes regionales',
      'Tren low-cost (Ouigo) y alta velocidad (TGV, AVE, Frecciarossa)',
      'Redes de autobús de larga distancia (FlixBus, BlaBlaCar Bus, ALSA)',
      'Una forma de respuesta normalizada para cada operador',
    ],
    benefits: [
      {icon: '🌍', title: 'Alcance continental desde el día uno', description: 'Cientos de operadores, una integración. Tu equipo de ingeniería deja de gestionar casos especiales por operador y empieza a entregar producto.'},
      {icon: '🔌', title: 'Modelo de datos normalizado', description: 'Origen, destino, clase tarifaria, segmentos, operador y CO₂ siguen la misma forma para todos los operadores. Construye una vez y el próximo operador que añadamos pasa por el mismo camino.'},
      {icon: '🤝', title: 'Relaciones con operadores mantenidas por nosotros', description: 'Negociamos, certificamos y operamos el lado de la distribución. Verás aparecer nuevos operadores en tus respuestas de API en vez de como proyectos de integración nuevos.'},
      {icon: '🛰️', title: 'Itinerarios transfronterizos', description: 'Muchos de los viajes europeos de mayor margen cruzan fronteras. Tictactrip los presenta como resultados nativos, no como casos de excepción de segunda clase.'},
    ],
    code: {
      filename: 'search-multimodal.sh',
      body: `# Búsqueda multimodal: París → Milán
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRpari____@u09tu",
    "destinationGpuid": "c|ITmila____@u0nd6",
    "outboundDate":     "2026-06-12T00:00:00Z",
    "passengers":       [{"age": 30}]
  }'

# → mezcla de SNCF, Trenitalia, FlixBus e
#   itinerarios combinados en una respuesta
#   normalizada.`,
    },
    faqs: [
      {q: '¿Qué operadores europeos cubre la API?', a: 'Tictactrip agrega 250+ operadores ferroviarios y de autobús interurbano, incluidos SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo, TGV, AVE, Frecciarossa y muchos operadores regionales en Francia, Italia, España, Alemania, Benelux y el resto de Europa continental.'},
      {q: '¿Cómo se normalizan los diferentes operadores en la respuesta?', a: 'Cada itinerario devuelto por /v2/results usa el mismo esquema: origen, destino, segmentos, clase tarifaria, operador, precio y CO₂. Construyes tu UI contra un solo modelo independientemente de qué operador sirva el viaje.'},
      {q: '¿Puede la API buscar viajes transfronterizos?', a: 'Sí. Los itinerarios transfronterizos son resultados de primera clase — París ↔ Bruselas, París ↔ Milán, Madrid ↔ Lisboa, Frankfurt ↔ Ámsterdam y muchos más.'},
      {q: '¿Con qué frecuencia se añade cobertura de nuevos operadores?', a: 'Tictactrip añade operadores continuamente. Los nuevos operadores llegan a través de la superficie API existente sin cambios disruptivos — tu integración los recoge automáticamente.'},
    ],
    serviceType: 'API de inventario multimodal europeo de trenes y autobuses',
    audienceType: 'Plataformas de viaje que requieren amplia cobertura multi-operador del transporte terrestre europeo',
  },
  it: {
    breadcrumbCategory: 'Funzionalità',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Perché la copertura multimodale conta',
    relatedHeading: 'Altre funzionalità Tictactrip',
    eyebrow: 'Funzionalità · Copertura multimodale',
    title: 'Copertura multimodale',
    metaTitle: 'API di viaggio multimodale — 250+ vettori treno e autobus in Europa | Tictactrip',
    description:
      "Un'API per treni e autobus europei. SNCF, Trenitalia, FlixBus, Renfe e 250+ vettori in un modello dati unificato.",
    metaDescription:
      "API di viaggio multimodale che copre 250+ vettori europei di treni e autobus — SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo. Un'unica API REST con un modello dati normalizzato, inventario in tempo reale e prenotazione end-to-end.",
    keywords:
      'API viaggio multimodale, API treni Europa, API autobus Europa, API prenotazione ferroviaria, API SNCF, API Trenitalia, API Renfe, API FlixBus, API BlaBlaCar Bus, API viaggio multi-vettore, Tictactrip multimodale',
    heroTitle: (
      <>
        Un'API per <span style={{color: '#6ee7b7'}}>250+ vettori</span><br />
        europei di treni e autobus
      </>
    ),
    heroLead:
      "Un singolo endpoint REST sostituisce il panorama frammentato del trasporto terrestre europeo — niente contratti vettore per vettore, niente workaround GDS, niente pipeline parallele di biglietteria.",
    intro: (
      <>
        <h2>Un modello dati per l'intera rete di trasporto terrestre europeo</h2>
        <p>
          Il viaggio europeo a lunga distanza è distribuito tra <strong>decine di operatori ferroviari nazionali, low-cost e reti di autobus interurbani</strong>. Ognuno ha il proprio sistema di distribuzione, regole tariffarie, schema di identificatori e formato del biglietto.
        </p>
        <p>
          <strong>Tictactrip</strong> comprime questa complessità in un'unica API REST. Cerca una volta e ricevi risultati da <strong>SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo</strong> e centinaia di altri — in una risposta normalizzata con campi coerenti per prezzo, durata, classe tariffaria, vettore e CO₂.
        </p>
        <p>
          La copertura include <strong>Francia, Italia, Spagna, Germania, Benelux</strong> e il resto dell'Europa continentale, compresi servizi transfrontalieri che nessun singolo vettore espone tramite la propria API.
        </p>
      </>
    ),
    capabilities: [
      '250+ operatori ferroviari e di autobus interurbani',
      'Francia · Italia · Spagna · Germania · Benelux · Europa transfrontaliera',
      'Alta velocità, intercity e treni regionali',
      'Ferrovia low-cost (Ouigo) e alta velocità (TGV, AVE, Frecciarossa)',
      'Reti di autobus a lunga distanza (FlixBus, BlaBlaCar Bus, ALSA)',
      'Una forma di risposta normalizzata per ogni vettore',
    ],
    benefits: [
      {icon: '🌍', title: 'Portata continentale dal primo giorno', description: "Centinaia di vettori, un'unica integrazione. Il tuo team di ingegneria smette di gestire casi limite specifici per vettore e inizia a spedire prodotto."},
      {icon: '🔌', title: 'Modello dati normalizzato', description: "Origine, destinazione, classe tariffaria, segmenti, vettore e CO₂ seguono la stessa forma per tutti gli operatori. Costruisci una volta e il prossimo vettore che aggiungiamo passa per lo stesso percorso di codice."},
      {icon: '🤝', title: 'Relazioni con i vettori mantenute per te', description: "Negoziamo, certifichiamo e gestiamo il lato distribuzione. Vedi nuovi vettori comparire nelle tue risposte API piuttosto che come nuovi progetti di integrazione."},
      {icon: '🛰️', title: 'Itinerari transfrontalieri', description: "Molti dei viaggi europei più redditizi attraversano i confini. Tictactrip li propone come risultati nativi, non come casi di eccezione di seconda classe."},
    ],
    code: {
      filename: 'search-multimodal.sh',
      body: `# Ricerca multimodale: Parigi → Milano
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRpari____@u09tu",
    "destinationGpuid": "c|ITmila____@u0nd6",
    "outboundDate":     "2026-06-12T00:00:00Z",
    "passengers":       [{"age": 30}]
  }'

# → mix di SNCF, Trenitalia, FlixBus e
#   itinerari combinati in una risposta
#   normalizzata.`,
    },
    faqs: [
      {q: "Quali vettori europei copre l'API?", a: "Tictactrip aggrega 250+ operatori ferroviari e di autobus interurbani, fra cui SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo, TGV, AVE, Frecciarossa e molti vettori regionali in Francia, Italia, Spagna, Germania, Benelux e nel resto dell'Europa continentale."},
      {q: 'Come vengono normalizzati i diversi vettori nella risposta?', a: "Ogni itinerario restituito da /v2/results usa lo stesso schema: origine, destinazione, segmenti, classe tariffaria, vettore, prezzo e CO₂. Costruisci la tua UI contro un solo modello indipendentemente da quale operatore serve il viaggio."},
      {q: "L'API può cercare viaggi transfrontalieri?", a: "Sì. Gli itinerari transfrontalieri sono risultati di prima classe — Parigi ↔ Bruxelles, Parigi ↔ Milano, Madrid ↔ Lisbona, Francoforte ↔ Amsterdam e molti altri."},
      {q: 'Con che frequenza si aggiunge copertura di nuovi vettori?', a: "Tictactrip aggiunge continuamente operatori. I nuovi vettori arrivano attraverso la superficie API esistente senza modifiche di rottura — la tua integrazione li raccoglie automaticamente."},
    ],
    serviceType: 'API di inventario multimodale europeo di treni e autobus',
    audienceType: 'Piattaforme di viaggio che richiedono ampia copertura multi-vettore del trasporto terrestre europeo',
  },
  pt: {
    breadcrumbCategory: 'Funcionalidades',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Porque a cobertura multimodal importa',
    relatedHeading: 'Outras funcionalidades Tictactrip',
    eyebrow: 'Funcionalidade · Cobertura multimodal',
    title: 'Cobertura multimodal',
    metaTitle: 'API de viagem multimodal — 250+ transportadoras de comboios e autocarros na Europa | Tictactrip',
    description:
      'Uma API para comboios e autocarros europeus. SNCF, Trenitalia, FlixBus, Renfe e 250+ transportadoras num modelo de dados unificado.',
    metaDescription:
      'API de viagem multimodal cobrindo 250+ transportadoras europeias de comboios e autocarros — SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo. Uma única API REST com um modelo de dados normalizado, inventário em tempo real e reserva ponto a ponto.',
    keywords:
      'API viagem multimodal, API comboios Europa, API autocarros Europa, API reserva ferroviária, API SNCF, API Trenitalia, API Renfe, API FlixBus, API BlaBlaCar Bus, API viagem multi-transportadora, Tictactrip multimodal',
    heroTitle: (
      <>
        Uma API para <span style={{color: '#6ee7b7'}}>250+ transportadoras</span><br />
        europeias de comboio e autocarro
      </>
    ),
    heroLead:
      'Um único endpoint REST substitui o cenário fragmentado do transporte terrestre europeu — sem contratos transportadora a transportadora, sem soluções de contorno GDS, sem pipelines paralelos de bilhética.',
    intro: (
      <>
        <h2>Um modelo de dados para toda a rede europeia de transporte terrestre</h2>
        <p>
          A viagem europeia de longa distância está dividida por <strong>dezenas de operadores ferroviários nacionais, low-cost e redes de autocarros interurbanos</strong>. Cada um tem o seu próprio sistema de distribuição, regras tarifárias, esquema de identificadores e formato de bilhete.
        </p>
        <p>
          A <strong>Tictactrip</strong> condensa essa complexidade numa única API REST. Pesquise uma vez e receba resultados de <strong>SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo</strong> e centenas de outras — numa resposta normalizada com campos consistentes para preço, duração, classe tarifária, transportadora e CO₂.
        </p>
        <p>
          A cobertura estende-se por <strong>França, Itália, Espanha, Alemanha, Benelux</strong> e o resto da Europa continental, incluindo serviços transfronteiriços que nenhuma transportadora isolada expõe através da sua própria API.
        </p>
      </>
    ),
    capabilities: [
      '250+ operadores ferroviários e de autocarros interurbanos',
      'França · Itália · Espanha · Alemanha · Benelux · Europa transfronteiriça',
      'Comboios de alta velocidade, intercidades e regionais',
      'Ferrovia low-cost (Ouigo) e alta velocidade (TGV, AVE, Frecciarossa)',
      'Redes de autocarros de longa distância (FlixBus, BlaBlaCar Bus, ALSA)',
      'Uma forma de resposta normalizada para cada transportadora',
    ],
    benefits: [
      {icon: '🌍', title: 'Alcance continental desde o primeiro dia', description: 'Centenas de transportadoras, uma integração. A sua equipa de engenharia deixa de tratar casos limite por transportadora e começa a entregar produto.'},
      {icon: '🔌', title: 'Modelo de dados normalizado', description: 'Origem, destino, classe tarifária, segmentos, transportadora e CO₂ seguem a mesma forma para todos os operadores. Construa uma vez e a próxima transportadora que adicionarmos passa pelo mesmo caminho de código.'},
      {icon: '🤝', title: 'Relações com transportadoras mantidas por nós', description: 'Nós negociamos, certificamos e operamos o lado da distribuição. Vê novas transportadoras aparecer nas suas respostas de API em vez de como novos projetos de integração.'},
      {icon: '🛰️', title: 'Itinerários transfronteiriços', description: 'Muitas das viagens europeias com maior margem atravessam fronteiras. A Tictactrip apresenta-as como resultados nativos, e não como casos de exceção de segunda classe.'},
    ],
    code: {
      filename: 'search-multimodal.sh',
      body: `# Pesquisa multimodal: Paris → Milão
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRpari____@u09tu",
    "destinationGpuid": "c|ITmila____@u0nd6",
    "outboundDate":     "2026-06-12T00:00:00Z",
    "passengers":       [{"age": 30}]
  }'

# → mistura de SNCF, Trenitalia, FlixBus e
#   itinerários combinados numa resposta
#   normalizada.`,
    },
    faqs: [
      {q: 'Que transportadoras europeias é que a API cobre?', a: 'A Tictactrip agrega 250+ operadores ferroviários e de autocarros interurbanos, incluindo SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo, TGV, AVE, Frecciarossa e muitas transportadoras regionais em França, Itália, Espanha, Alemanha, Benelux e no resto da Europa continental.'},
      {q: 'Como são normalizadas as diferentes transportadoras na resposta?', a: 'Cada itinerário devolvido por /v2/results usa o mesmo esquema: origem, destino, segmentos, classe tarifária, transportadora, preço e CO₂. Constrói a sua UI contra um único modelo, independentemente de qual operador serve a viagem.'},
      {q: 'A API pode procurar viagens transfronteiriças?', a: 'Sim. Os itinerários transfronteiriços são resultados de primeira classe — Paris ↔ Bruxelas, Paris ↔ Milão, Madrid ↔ Lisboa, Frankfurt ↔ Amesterdão e muitos outros.'},
      {q: 'Com que frequência adicionam novas transportadoras?', a: 'A Tictactrip adiciona operadores continuamente. As novas transportadoras chegam através da superfície API existente sem alterações disruptivas — a sua integração apanha-as automaticamente.'},
    ],
    serviceType: 'API de inventário multimodal europeu de comboios e autocarros',
    audienceType: 'Plataformas de viagem que requerem ampla cobertura multi-transportadora do transporte terrestre europeu',
  },
  ru: {
    breadcrumbCategory: 'Возможности',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Почему мультимодальное покрытие важно',
    relatedHeading: 'Другие возможности Tictactrip',
    eyebrow: 'Возможность · Мультимодальное покрытие',
    title: 'Мультимодальное покрытие',
    metaTitle: 'API мультимодальных путешествий — 250+ перевозчиков поездов и автобусов по Европе | Tictactrip',
    description:
      'Один API для европейских поездов и автобусов. SNCF, Trenitalia, FlixBus, Renfe и более 250 перевозчиков в единой модели данных.',
    metaDescription:
      'API мультимодальных путешествий, охватывающий 250+ европейских перевозчиков поездов и автобусов — SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo. Единый REST API с нормализованной моделью данных, инвентарём в реальном времени и сквозным бронированием.',
    keywords:
      'API мультимодальных путешествий, API поездов Европа, API автобусов Европа, API бронирования железной дороги, API SNCF, API Trenitalia, API Renfe, API FlixBus, API BlaBlaCar Bus, мульти-перевозчик API, Tictactrip мультимодальный',
    heroTitle: (
      <>
        Один API для <span style={{color: '#6ee7b7'}}>250+ европейских</span><br />
        перевозчиков поездов и автобусов
      </>
    ),
    heroLead:
      'Один REST-эндпоинт заменяет фрагментированный ландшафт европейского наземного транспорта — никаких индивидуальных контрактов с перевозчиками, никаких обходных решений GDS, никаких параллельных пайплайнов выдачи билетов.',
    intro: (
      <>
        <h2>Единая модель данных для всей европейской сети наземного транспорта</h2>
        <p>
          Дальние европейские путешествия распределены между <strong>десятками национальных железнодорожных операторов, лоукостерами и сетями междугородних автобусов</strong>. У каждого свой собственная система дистрибуции, тарифные правила, схема идентификаторов и формат билета.
        </p>
        <p>
          <strong>Tictactrip</strong> сжимает эту сложность в один REST API. Сделайте один поисковый запрос и получите результаты от <strong>SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo</strong> и сотен других — в одном нормализованном ответе с едиными полями для цены, продолжительности, тарифного класса, перевозчика и CO₂.
        </p>
        <p>
          Покрытие включает <strong>Францию, Италию, Испанию, Германию, страны Бенилюкса</strong> и остальную часть континентальной Европы — включая трансграничные рейсы, которые ни один отдельный перевозчик не предоставляет через собственный API.
        </p>
      </>
    ),
    capabilities: [
      '250+ операторов железных дорог и междугородних автобусов',
      'Франция · Италия · Испания · Германия · Бенилюкс · трансграничная Европа',
      'Высокоскоростные, межгородские и региональные поезда',
      'Лоукост-железная дорога (Ouigo) и высокоскоростные (TGV, AVE, Frecciarossa)',
      'Сети дальних автобусов (FlixBus, BlaBlaCar Bus, ALSA)',
      'Единая нормализованная форма ответа для каждого перевозчика',
    ],
    benefits: [
      {icon: '🌍', title: 'Континентальное покрытие с первого дня', description: 'Сотни перевозчиков, одна интеграция. Ваша команда разработки перестаёт разбирать пограничные случаи по каждому перевозчику и начинает выпускать продукт.'},
      {icon: '🔌', title: 'Нормализованная модель данных', description: 'Пункт отправления, назначения, тарифный класс, сегменты, перевозчик и CO₂ имеют одинаковую форму для всех операторов. Реализуйте один раз — следующий перевозчик, которого мы добавим, пройдёт по тому же пути в коде.'},
      {icon: '🤝', title: 'Отношения с перевозчиками поддерживаем мы', description: 'Мы ведём переговоры, сертифицируем и обслуживаем дистрибутивную сторону. Вы видите новых перевозчиков в ответах API, а не в виде новых проектов интеграции.'},
      {icon: '🛰️', title: 'Трансграничные маршруты', description: 'Многие из самых маржинальных европейских поездок пересекают границы. Tictactrip представляет их как полноценные результаты, а не как второстепенные исключения.'},
    ],
    code: {
      filename: 'search-multimodal.sh',
      body: `# Мультимодальный поиск: Париж → Милан
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRpari____@u09tu",
    "destinationGpuid": "c|ITmila____@u0nd6",
    "outboundDate":     "2026-06-12T00:00:00Z",
    "passengers":       [{"age": 30}]
  }'

# → смесь SNCF, Trenitalia, FlixBus и
#   комбинированных маршрутов в одном
#   нормализованном ответе.`,
    },
    faqs: [
      {q: 'Какие европейские перевозчики охвачены API?', a: 'Tictactrip агрегирует 250+ операторов железных дорог и междугородних автобусов, включая SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo, TGV, AVE, Frecciarossa и многих региональных перевозчиков во Франции, Италии, Испании, Германии, странах Бенилюкса и в остальной континентальной Европе.'},
      {q: 'Как разные перевозчики нормализуются в ответе?', a: 'Каждый маршрут, возвращаемый /v2/results, использует одну и ту же схему: пункт отправления, назначения, сегменты, тарифный класс, перевозчик, цена и CO₂. Вы строите интерфейс против одной модели независимо от того, какой оператор обслуживает поездку.'},
      {q: 'Может ли API искать трансграничные маршруты?', a: 'Да. Трансграничные маршруты — это полноценные результаты: Париж ↔ Брюссель, Париж ↔ Милан, Мадрид ↔ Лиссабон, Франкфурт ↔ Амстердам и многие другие.'},
      {q: 'Как часто добавляются новые перевозчики?', a: 'Tictactrip непрерывно добавляет новых операторов. Новые перевозчики поступают через существующий API без ломающих изменений — ваша интеграция автоматически их подхватывает.'},
    ],
    serviceType: 'Мультимодальный API инвентаря европейских поездов и автобусов',
    audienceType: 'Путешественные платформы, требующие широкого мульти-перевозчного покрытия европейского наземного транспорта',
  },
};
