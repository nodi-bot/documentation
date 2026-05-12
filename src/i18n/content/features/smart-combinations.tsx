import React from 'react';
import type {Translations} from '../../useTranslation';
import type {SolutionPageProps} from '../../../components/SolutionPage';

type FeaturePageContent = Omit<SolutionPageProps, 'slug' | 'related'>;

const codeBody = `# No direct service: routing engine combines legs
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRavignon_@spg6j",
    "destinationGpuid": "c|ITmila____@u0nd6",
    "outboundDate":     "2026-06-12T00:00:00Z",
    "passengers":       [{"age": 30}]
  }'`;

export const smartCombinations: Translations<FeaturePageContent> = {
  en: {
    breadcrumbCategory: 'Features',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Why smart combinations are a unique unlock',
    relatedHeading: 'Other Tictactrip features',
    eyebrow: 'Feature · Smart combinations',
    title: 'Smart combinations',
    metaTitle: 'Multimodal routing API — Train and bus combinations across operators | Tictactrip',
    description: 'When no direct journey exists, our routing engine assembles train and bus legs from different operators into one bookable itinerary.',
    metaDescription: 'Multimodal routing API that combines train and bus legs from multiple carriers into a single bookable itinerary. Reach routes no single operator covers — the unique Tictactrip advantage across 250+ European carriers.',
    keywords: 'multimodal routing API, multi-operator travel API, train and bus combinations, multi-leg booking, European routing engine, multimodal trip planning, intermodal travel API, Tictactrip smart combinations',
    heroTitle: <>When no direct journey exists,<br /><span style={{color: '#6ee7b7'}}>we route across carriers</span></>,
    heroLead: "Tictactrip's routing engine assembles multi-leg itineraries from different operators — train + bus, carrier A + carrier B — when no direct service connects your user's origin and destination.",
    intro: (
      <>
        <h2>The European rail and bus network is patchy. Routing fixes that.</h2>
        <p>Direct services don't exist for most origin-destination pairs in Europe. A traveller going from a mid-sized French town to a regional Italian city typically needs <strong>two or three legs across different operators</strong> — and no single carrier's API will surface that as a bookable journey.</p>
        <p><strong>Tictactrip's routing engine</strong> closes the gap. We combine train and bus legs across carriers, check connection feasibility, validate fares against live inventory, and return the result as <strong>one bookable itinerary</strong> — not three separate ones for your user to assemble manually.</p>
        <p>This is the capability that lets Tictactrip partners ship product features <strong>no competitor running a single-carrier integration can match</strong>.</p>
      </>
    ),
    capabilities: [
      'Routing engine combines train + bus legs across operators',
      'Multi-carrier itineraries returned as one bookable unit',
      'Connection feasibility validated automatically',
      'Cross-border combinations supported',
      'Useful for OTAs, MaaS platforms and corporate travel',
      'Falls back to direct results when they exist',
    ],
    benefits: [
      {icon: '🔁', title: 'A capability competitors cannot replicate alone', description: 'A single-carrier integration cannot return multi-operator combinations. Partners using Tictactrip ship results no DIY integration can match.'},
      {icon: '🧠', title: 'Connection logic handled for you', description: 'Transfer times, station compatibility and operational realities are validated inside the routing engine — your client never has to second-guess feasibility.'},
      {icon: '🛤️', title: 'Unlock long-tail O/D pairs', description: 'Hundreds of city pairs across Europe have no direct service. Smart combinations turn those into bookable journeys instead of "no results".'},
      {icon: '🚆', title: 'Still works as a direct-search API', description: 'When a direct journey exists, you get it. The combination engine kicks in only when needed — the API surface stays the same.'},
    ],
    code: {filename: 'combination-search.sh', body: codeBody},
    faqs: [
      {q: 'Are multi-operator itineraries bookable as one transaction?', a: 'Yes. Tictactrip handles the underlying booking sequence with each carrier and returns the combined itinerary as a single bookable record — including PNR and ticketing.'},
      {q: 'What if a leg in a combination becomes unavailable after search?', a: 'The booking endpoint re-validates each leg with its carrier. If one becomes unavailable, the booking flow returns a structured error so your platform can offer an alternative.'},
      {q: 'Does the routing engine optimise for time or price?', a: 'Each call returns multiple bundles sorted by price, with travel time and CO₂ exposed in the response. Your client decides how to rank or filter — fastest, cheapest, greenest or a custom score.'},
      {q: 'Does this support cross-border European journeys?', a: 'Yes. Cross-border multi-carrier journeys are first-class citizens — for example Paris ↔ Italian regional towns, Madrid ↔ smaller German cities, etc.'},
    ],
    serviceType: 'Multimodal multi-operator routing API',
    audienceType: 'OTAs, MaaS platforms, corporate travel platforms, route-planning products',
  },
  fr: {
    breadcrumbCategory: 'Fonctionnalités',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Pourquoi les combinaisons intelligentes sont un atout unique',
    relatedHeading: 'Autres fonctionnalités Tictactrip',
    eyebrow: 'Fonctionnalité · Combinaisons intelligentes',
    title: 'Combinaisons intelligentes',
    metaTitle: 'API de routage multimodal — Combinaisons train et bus entre opérateurs | Tictactrip',
    description: "Quand il n'y a pas de trajet direct, notre moteur de routage assemble des segments train et bus de différents opérateurs en un seul itinéraire réservable.",
    metaDescription: "API de routage multimodal qui combine des segments train et bus de plusieurs transporteurs en un seul itinéraire réservable. Atteignez des routes qu'aucun opérateur seul ne couvre — l'avantage unique de Tictactrip sur 250+ transporteurs européens.",
    keywords: 'API routage multimodal, API voyage multi-opérateur, combinaisons train et bus, réservation multi-segment, moteur de routage européen, planification voyage multimodal, API voyage intermodal, Tictactrip combinaisons intelligentes',
    heroTitle: <>Quand il n'y a pas de trajet direct,<br /><span style={{color: '#6ee7b7'}}>nous routons entre transporteurs</span></>,
    heroLead: "Le moteur de routage de Tictactrip assemble des itinéraires multi-segments de différents opérateurs — train + bus, transporteur A + transporteur B — quand aucun service direct ne relie origine et destination de votre utilisateur.",
    intro: (
      <>
        <h2>Le réseau européen ferroviaire et bus est lacunaire. Le routage le complète.</h2>
        <p>Les services directs n'existent pas pour la plupart des paires origine-destination en Europe. Un voyageur allant d'une ville moyenne française vers une ville italienne régionale a typiquement besoin de <strong>deux ou trois segments chez différents opérateurs</strong> — et aucune API de transporteur unique ne le présentera comme un trajet réservable.</p>
        <p><strong>Le moteur de routage de Tictactrip</strong> comble cet écart. Nous combinons des segments train et bus entre transporteurs, vérifions la faisabilité des correspondances, validons les tarifs sur l'inventaire en direct, et renvoyons le résultat comme <strong>un seul itinéraire réservable</strong> — pas trois séparés à assembler à la main par votre utilisateur.</p>
        <p>C'est cette capacité qui permet aux partenaires Tictactrip de livrer des fonctionnalités produit <strong>qu'aucun concurrent en intégration mono-transporteur ne peut égaler</strong>.</p>
      </>
    ),
    capabilities: [
      "Moteur de routage combinant segments train + bus entre opérateurs",
      "Itinéraires multi-transporteurs renvoyés comme une seule unité réservable",
      "Faisabilité des correspondances validée automatiquement",
      "Combinaisons transfrontalières prises en charge",
      "Utile pour OTAs, plateformes MaaS et voyage d'affaires",
      "Repli sur résultats directs quand ils existent",
    ],
    benefits: [
      {icon: '🔁', title: 'Une capacité que les concurrents ne peuvent répliquer seuls', description: "Une intégration mono-transporteur ne peut pas renvoyer des combinaisons multi-opérateurs. Les partenaires utilisant Tictactrip livrent des résultats qu'aucune intégration DIY ne peut égaler."},
      {icon: '🧠', title: 'Logique de correspondance gérée pour vous', description: "Les temps de transfert, la compatibilité des gares et les réalités opérationnelles sont validés à l'intérieur du moteur de routage — votre client n'a jamais à deviner la faisabilité."},
      {icon: '🛤️', title: 'Débloquer les paires O/D de longue traîne', description: "Des centaines de paires de villes en Europe n'ont pas de service direct. Les combinaisons intelligentes les transforment en trajets réservables au lieu de « pas de résultats »."},
      {icon: '🚆', title: 'Fonctionne aussi comme une API de recherche directe', description: "Quand un trajet direct existe, vous l'obtenez. Le moteur de combinaison ne s'active que quand nécessaire — la surface API reste la même."},
    ],
    code: {filename: 'combination-search.sh', body: codeBody},
    faqs: [
      {q: 'Les itinéraires multi-opérateurs sont-ils réservables comme une seule transaction ?', a: "Oui. Tictactrip gère la séquence de réservation sous-jacente avec chaque transporteur et renvoie l'itinéraire combiné comme un seul enregistrement réservable — y compris PNR et émission de billet."},
      {q: "Que se passe-t-il si un segment d'une combinaison devient indisponible après la recherche ?", a: "L'endpoint de réservation re-valide chaque segment auprès de son transporteur. Si l'un devient indisponible, le flux de réservation renvoie une erreur structurée pour que votre plateforme puisse proposer une alternative."},
      {q: 'Le moteur de routage optimise-t-il par temps ou prix ?', a: "Chaque appel renvoie plusieurs offres triées par prix, avec durée de voyage et CO₂ exposés dans la réponse. Votre client décide comment classer ou filtrer — le plus rapide, le moins cher, le plus vert ou un score personnalisé."},
      {q: 'Cela supporte-t-il les trajets européens transfrontaliers ?', a: "Oui. Les trajets multi-transporteurs transfrontaliers sont des citoyens de première classe — par exemple Paris ↔ villes régionales italiennes, Madrid ↔ villes allemandes plus petites, etc."},
    ],
    serviceType: 'API de routage multimodal multi-opérateur',
    audienceType: "OTAs, plateformes MaaS, plateformes de voyage d'affaires, produits de planification d'itinéraires",
  },
  de: {
    breadcrumbCategory: 'Funktionen',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Warum intelligente Kombinationen ein einzigartiger Hebel sind',
    relatedHeading: 'Weitere Tictactrip-Funktionen',
    eyebrow: 'Funktion · Intelligente Kombinationen',
    title: 'Intelligente Kombinationen',
    metaTitle: 'Multimodale Routing-API — Zug- und Bus-Kombinationen über Operatoren | Tictactrip',
    description: 'Wenn keine direkte Verbindung existiert, kombiniert unsere Routing-Engine Zug- und Bus-Teilstrecken verschiedener Operatoren zu einer buchbaren Verbindung.',
    metaDescription: 'Multimodale Routing-API, die Zug- und Bus-Teilstrecken mehrerer Transporteure zu einer einzigen buchbaren Verbindung kombiniert. Erreichen Sie Routen, die kein einzelner Operator abdeckt — der einzigartige Tictactrip-Vorteil über 250+ europäische Transporteure.',
    keywords: 'multimodale Routing-API, Mehrtransporteur-Reise-API, Zug- und Bus-Kombinationen, mehrteilige Buchung, europäische Routing-Engine, multimodale Reiseplanung, intermodale Reise-API, Tictactrip Intelligente Kombinationen',
    heroTitle: <>Wenn keine direkte Verbindung existiert,<br /><span style={{color: '#6ee7b7'}}>routen wir über Transporteure</span></>,
    heroLead: 'Die Routing-Engine von Tictactrip baut mehrteilige Verbindungen verschiedener Operatoren zusammen — Zug + Bus, Transporteur A + Transporteur B — wenn kein direkter Service Start und Ziel Ihres Nutzers verbindet.',
    intro: (
      <>
        <h2>Das europäische Bahn- und Bus-Netz ist lückenhaft. Routing schließt diese Lücken.</h2>
        <p>Direkte Verbindungen existieren nicht für die meisten Start-Ziel-Paare in Europa. Eine Reisende, die von einer mittelgroßen französischen Stadt in eine regionale italienische Stadt fährt, braucht typischerweise <strong>zwei oder drei Teilstrecken bei verschiedenen Operatoren</strong> — und keine einzelne Transporteur-API zeigt das als buchbare Reise.</p>
        <p>Die <strong>Routing-Engine von Tictactrip</strong> schließt diese Lücke. Wir kombinieren Zug- und Bus-Teilstrecken über Transporteure hinweg, prüfen die Verbindungs-Machbarkeit, validieren Tarife gegen Live-Inventar und liefern das Ergebnis als <strong>eine buchbare Verbindung</strong> — nicht drei separate, die Ihr Nutzer manuell zusammenbauen muss.</p>
        <p>Das ist die Fähigkeit, mit der Tictactrip-Partner Produkt-Features ausliefern, die <strong>kein Konkurrent mit Einzeltransporteur-Integration erreichen kann</strong>.</p>
      </>
    ),
    capabilities: [
      'Routing-Engine kombiniert Zug- + Bus-Teilstrecken über Operatoren',
      'Mehrtransporteur-Verbindungen werden als eine buchbare Einheit zurückgegeben',
      'Anschlussmöglichkeit automatisch validiert',
      'Grenzüberschreitende Kombinationen unterstützt',
      'Nützlich für OTAs, MaaS-Plattformen und Geschäftsreisen',
      'Fällt auf direkte Ergebnisse zurück, wenn diese existieren',
    ],
    benefits: [
      {icon: '🔁', title: 'Eine Fähigkeit, die Konkurrenten alleine nicht reproduzieren können', description: 'Eine Einzeltransporteur-Integration kann keine Mehrtransporteur-Kombinationen liefern. Partner mit Tictactrip liefern Ergebnisse, die keine DIY-Integration erreichen kann.'},
      {icon: '🧠', title: 'Verbindungslogik für Sie erledigt', description: 'Umstiegszeiten, Bahnhofs-Kompatibilität und operative Realitäten werden innerhalb der Routing-Engine validiert — Ihr Client muss Machbarkeit nie hinterfragen.'},
      {icon: '🛤️', title: 'Long-Tail-Start-Ziel-Paare freischalten', description: 'Hunderte Städtepaare in Europa haben keinen direkten Service. Intelligente Kombinationen verwandeln sie in buchbare Reisen statt „keine Ergebnisse".'},
      {icon: '🚆', title: 'Funktioniert auch als Direkt-Such-API', description: 'Wenn eine direkte Verbindung existiert, bekommen Sie sie. Die Kombinations-Engine springt nur ein, wenn nötig — die API-Oberfläche bleibt dieselbe.'},
    ],
    code: {filename: 'combination-search.sh', body: codeBody},
    faqs: [
      {q: 'Sind Mehrtransporteur-Verbindungen als eine Transaktion buchbar?', a: 'Ja. Tictactrip kümmert sich um die zugrundeliegende Buchungssequenz mit jedem Transporteur und gibt die kombinierte Verbindung als einen buchbaren Datensatz zurück — inklusive PNR und Ticketierung.'},
      {q: 'Was, wenn eine Teilstrecke in einer Kombination nach der Suche nicht mehr verfügbar wird?', a: 'Der Buchungsendpunkt revalidiert jede Teilstrecke beim jeweiligen Transporteur. Wenn eine nicht mehr verfügbar wird, gibt der Buchungsflow einen strukturierten Fehler zurück, sodass Ihre Plattform eine Alternative anbieten kann.'},
      {q: 'Optimiert die Routing-Engine auf Zeit oder Preis?', a: 'Jeder Aufruf gibt mehrere Bundles nach Preis sortiert zurück, mit Reisezeit und CO₂ in der Antwort. Ihr Client entscheidet, wie zu ranken oder zu filtern ist — schnellster, günstigster, grünster oder ein eigener Score.'},
      {q: 'Unterstützt das grenzüberschreitende europäische Reisen?', a: 'Ja. Grenzüberschreitende Mehrtransporteur-Reisen sind erstklassige Bürger — zum Beispiel Paris ↔ italienische Regionalstädte, Madrid ↔ kleinere deutsche Städte etc.'},
    ],
    serviceType: 'Multimodale Mehrtransporteur-Routing-API',
    audienceType: 'OTAs, MaaS-Plattformen, Geschäftsreiseplattformen, Routenplanungs-Produkte',
  },
  es: {
    breadcrumbCategory: 'Funciones',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Por qué las combinaciones inteligentes son una palanca única',
    relatedHeading: 'Otras funciones de Tictactrip',
    eyebrow: 'Función · Combinaciones inteligentes',
    title: 'Combinaciones inteligentes',
    metaTitle: 'API de enrutamiento multimodal — Combinaciones de tren y autobús entre operadores | Tictactrip',
    description: 'Cuando no existe un viaje directo, nuestro motor de enrutamiento ensambla tramos de tren y autobús de distintos operadores en un único itinerario reservable.',
    metaDescription: 'API de enrutamiento multimodal que combina tramos de tren y autobús de varios operadores en un único itinerario reservable. Alcanza rutas que ningún operador cubre solo — la ventaja única de Tictactrip en 250+ operadores europeos.',
    keywords: 'API enrutamiento multimodal, API viaje multi-operador, combinaciones tren y autobús, reserva multi-tramo, motor enrutamiento europeo, planificación viaje multimodal, API viaje intermodal, Tictactrip combinaciones inteligentes',
    heroTitle: <>Cuando no hay viaje directo,<br /><span style={{color: '#6ee7b7'}}>enrutamos entre operadores</span></>,
    heroLead: 'El motor de enrutamiento de Tictactrip ensambla itinerarios multi-tramo de distintos operadores — tren + autobús, operador A + operador B — cuando ningún servicio directo conecta origen y destino del usuario.',
    intro: (
      <>
        <h2>La red europea de tren y autobús está parcheada. El enrutamiento lo arregla.</h2>
        <p>Los servicios directos no existen para la mayoría de pares origen-destino en Europa. Un viajero que va desde una ciudad francesa mediana a una ciudad italiana regional necesita habitualmente <strong>dos o tres tramos en operadores distintos</strong> — y ninguna API de operador único lo presentará como viaje reservable.</p>
        <p>El <strong>motor de enrutamiento de Tictactrip</strong> cubre ese hueco. Combinamos tramos de tren y autobús entre operadores, comprobamos la viabilidad de la conexión, validamos las tarifas contra el inventario en vivo y devolvemos el resultado como <strong>un único itinerario reservable</strong> — no tres separados para que tu usuario los ensamble manualmente.</p>
        <p>Esta es la capacidad que permite a los socios de Tictactrip lanzar funciones de producto que <strong>ningún competidor con integración mono-operador puede igualar</strong>.</p>
      </>
    ),
    capabilities: [
      'Motor de enrutamiento que combina tramos tren + autobús entre operadores',
      'Itinerarios multi-operador devueltos como una sola unidad reservable',
      'Viabilidad de la conexión validada automáticamente',
      'Combinaciones transfronterizas soportadas',
      'Útil para OTAs, plataformas MaaS y viajes corporativos',
      'Cae a resultados directos cuando existen',
    ],
    benefits: [
      {icon: '🔁', title: 'Una capacidad que los competidores no pueden replicar solos', description: 'Una integración mono-operador no puede devolver combinaciones multi-operador. Los socios que usan Tictactrip entregan resultados que ninguna integración DIY puede igualar.'},
      {icon: '🧠', title: 'Lógica de conexión gestionada por nosotros', description: 'Los tiempos de transferencia, la compatibilidad de estaciones y las realidades operativas se validan dentro del motor de enrutamiento — tu cliente nunca tiene que adivinar la viabilidad.'},
      {icon: '🛤️', title: 'Desbloquea pares O/D de cola larga', description: 'Cientos de pares de ciudades en Europa no tienen servicio directo. Las combinaciones inteligentes los convierten en viajes reservables en lugar de "sin resultados".'},
      {icon: '🚆', title: 'Sigue funcionando como API de búsqueda directa', description: 'Cuando existe un viaje directo, lo obtienes. El motor de combinación solo entra cuando hace falta — la superficie API se mantiene igual.'},
    ],
    code: {filename: 'combination-search.sh', body: codeBody},
    faqs: [
      {q: '¿Los itinerarios multi-operador son reservables como una sola transacción?', a: 'Sí. Tictactrip gestiona la secuencia de reserva subyacente con cada operador y devuelve el itinerario combinado como un único registro reservable — incluyendo PNR y emisión.'},
      {q: '¿Qué pasa si un tramo de una combinación pasa a estar no disponible tras la búsqueda?', a: 'El endpoint de reserva revalida cada tramo con su operador. Si uno deja de estar disponible, el flujo de reserva devuelve un error estructurado para que tu plataforma pueda ofrecer una alternativa.'},
      {q: '¿El motor de enrutamiento optimiza por tiempo o precio?', a: 'Cada llamada devuelve múltiples paquetes ordenados por precio, con tiempo de viaje y CO₂ expuestos en la respuesta. Tu cliente decide cómo ordenar o filtrar — más rápido, más barato, más verde o una puntuación personalizada.'},
      {q: '¿Soporta viajes transfronterizos europeos?', a: 'Sí. Los viajes transfronterizos multi-operador son ciudadanos de primera clase — por ejemplo París ↔ ciudades regionales italianas, Madrid ↔ ciudades alemanas más pequeñas, etc.'},
    ],
    serviceType: 'API de enrutamiento multimodal multi-operador',
    audienceType: 'OTAs, plataformas MaaS, plataformas de viaje corporativo, productos de planificación de rutas',
  },
  it: {
    breadcrumbCategory: 'Funzionalità',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Perché le combinazioni intelligenti sono una leva unica',
    relatedHeading: 'Altre funzionalità Tictactrip',
    eyebrow: 'Funzionalità · Combinazioni intelligenti',
    title: 'Combinazioni intelligenti',
    metaTitle: 'API di routing multimodale — Combinazioni treno e autobus tra operatori | Tictactrip',
    description: 'Quando non esiste un viaggio diretto, il nostro motore di routing assembla tratte treno e autobus di operatori diversi in un unico itinerario prenotabile.',
    metaDescription: 'API di routing multimodale che combina tratte treno e autobus di più vettori in un unico itinerario prenotabile. Raggiungi rotte che nessun singolo operatore copre — il vantaggio unico di Tictactrip su 250+ vettori europei.',
    keywords: 'API routing multimodale, API viaggio multi-operatore, combinazioni treno e autobus, prenotazione multi-tratta, motore routing europeo, pianificazione viaggio multimodale, API viaggio intermodale, Tictactrip combinazioni intelligenti',
    heroTitle: <>Quando non esiste un viaggio diretto,<br /><span style={{color: '#6ee7b7'}}>noi instradiamo fra vettori</span></>,
    heroLead: "Il motore di routing di Tictactrip assembla itinerari multi-tratta da operatori diversi — treno + autobus, vettore A + vettore B — quando nessun servizio diretto collega origine e destinazione del tuo utente.",
    intro: (
      <>
        <h2>La rete europea di treni e autobus è frammentaria. Il routing la completa.</h2>
        <p>I servizi diretti non esistono per la maggior parte delle coppie origine-destinazione in Europa. Un viaggiatore che va da una città francese di medie dimensioni a una città italiana regionale tipicamente ha bisogno di <strong>due o tre tratte su operatori diversi</strong> — e nessuna singola API di vettore lo presenta come viaggio prenotabile.</p>
        <p>Il <strong>motore di routing di Tictactrip</strong> chiude il divario. Combiniamo tratte treno e autobus fra vettori, verifichiamo la fattibilità della coincidenza, validiamo le tariffe sull'inventario live e restituiamo il risultato come <strong>un unico itinerario prenotabile</strong> — non tre separati da assemblare a mano dal tuo utente.</p>
        <p>È questa la capacità che permette ai partner Tictactrip di spedire funzionalità prodotto <strong>che nessun concorrente con integrazione mono-vettore può eguagliare</strong>.</p>
      </>
    ),
    capabilities: [
      "Motore di routing che combina tratte treno + autobus fra operatori",
      "Itinerari multi-vettore restituiti come un'unica unità prenotabile",
      "Fattibilità della coincidenza validata automaticamente",
      "Combinazioni transfrontaliere supportate",
      "Utile per OTA, piattaforme MaaS e viaggi aziendali",
      "Ripiega su risultati diretti quando esistono",
    ],
    benefits: [
      {icon: '🔁', title: 'Una capacità che i concorrenti non possono replicare da soli', description: "Un'integrazione mono-vettore non può restituire combinazioni multi-operatore. I partner che usano Tictactrip spediscono risultati che nessuna integrazione DIY può eguagliare."},
      {icon: '🧠', title: 'Logica di coincidenza gestita per te', description: "I tempi di trasferimento, la compatibilità delle stazioni e le realtà operative sono validati all'interno del motore di routing — il tuo client non deve mai indovinare la fattibilità."},
      {icon: '🛤️', title: 'Sblocca le coppie O/D a coda lunga', description: "Centinaia di coppie di città in Europa non hanno un servizio diretto. Le combinazioni intelligenti le trasformano in viaggi prenotabili invece di 'nessun risultato'."},
      {icon: '🚆', title: 'Funziona anche come API di ricerca diretta', description: "Quando un viaggio diretto esiste, lo ottieni. Il motore di combinazione interviene solo quando serve — la superficie API resta la stessa."},
    ],
    code: {filename: 'combination-search.sh', body: codeBody},
    faqs: [
      {q: 'Gli itinerari multi-operatore sono prenotabili come una sola transazione?', a: "Sì. Tictactrip gestisce la sequenza di prenotazione sottostante con ciascun vettore e restituisce l'itinerario combinato come un singolo record prenotabile — compresi PNR e biglietteria."},
      {q: 'Cosa succede se una tratta di una combinazione diventa non disponibile dopo la ricerca?', a: "L'endpoint di prenotazione rivalida ciascuna tratta presso il suo vettore. Se una diventa non disponibile, il flusso di prenotazione restituisce un errore strutturato così la tua piattaforma può offrire un'alternativa."},
      {q: 'Il motore di routing ottimizza per tempo o per prezzo?', a: "Ogni chiamata restituisce più bundle ordinati per prezzo, con durata di viaggio e CO₂ esposti nella risposta. Il tuo client decide come ordinare o filtrare — più veloce, più economico, più verde o un punteggio personalizzato."},
      {q: 'Supporta viaggi europei transfrontalieri?', a: "Sì. I viaggi multi-vettore transfrontalieri sono cittadini di prima classe — per esempio Parigi ↔ città italiane regionali, Madrid ↔ città tedesche più piccole, ecc."},
    ],
    serviceType: 'API di routing multimodale multi-operatore',
    audienceType: 'OTA, piattaforme MaaS, piattaforme di viaggio aziendale, prodotti di pianificazione di percorsi',
  },
  pt: {
    breadcrumbCategory: 'Funcionalidades',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Porque as combinações inteligentes são uma alavanca única',
    relatedHeading: 'Outras funcionalidades Tictactrip',
    eyebrow: 'Funcionalidade · Combinações inteligentes',
    title: 'Combinações inteligentes',
    metaTitle: 'API de roteamento multimodal — Combinações de comboio e autocarro entre operadores | Tictactrip',
    description: 'Quando não existe um percurso direto, o nosso motor de roteamento monta troços de comboio e autocarro de operadores diferentes num único itinerário reservável.',
    metaDescription: 'API de roteamento multimodal que combina troços de comboio e autocarro de várias transportadoras num único itinerário reservável. Alcance rotas que nenhuma transportadora isolada cobre — a vantagem única da Tictactrip em 250+ transportadoras europeias.',
    keywords: 'API roteamento multimodal, API viagem multi-operador, combinações comboio e autocarro, reserva multi-troço, motor roteamento europeu, planeamento viagem multimodal, API viagem intermodal, Tictactrip combinações inteligentes',
    heroTitle: <>Quando não há percurso direto,<br /><span style={{color: '#6ee7b7'}}>encaminhamos entre transportadoras</span></>,
    heroLead: 'O motor de roteamento da Tictactrip monta itinerários multi-troço de operadores diferentes — comboio + autocarro, transportadora A + transportadora B — quando nenhum serviço direto liga origem e destino do utilizador.',
    intro: (
      <>
        <h2>A rede europeia de comboios e autocarros é fragmentada. O roteamento completa-a.</h2>
        <p>Os serviços diretos não existem para a maioria dos pares origem-destino na Europa. Um viajante que vai de uma cidade francesa de média dimensão para uma cidade italiana regional precisa tipicamente de <strong>dois ou três troços em operadores diferentes</strong> — e nenhuma API de transportadora isolada o apresenta como viagem reservável.</p>
        <p>O <strong>motor de roteamento da Tictactrip</strong> preenche essa lacuna. Combinamos troços de comboio e autocarro entre transportadoras, verificamos a viabilidade da ligação, validamos as tarifas contra o inventário ao vivo e devolvemos o resultado como <strong>um único itinerário reservável</strong> — não três separados para o utilizador montar manualmente.</p>
        <p>É esta a capacidade que permite aos parceiros da Tictactrip lançar funcionalidades de produto que <strong>nenhum concorrente com integração mono-transportadora consegue igualar</strong>.</p>
      </>
    ),
    capabilities: [
      'Motor de roteamento que combina troços comboio + autocarro entre operadores',
      'Itinerários multi-transportadora devolvidos como uma única unidade reservável',
      'Viabilidade da ligação validada automaticamente',
      'Combinações transfronteiriças suportadas',
      'Útil para OTAs, plataformas MaaS e viagens corporativas',
      'Recorre a resultados diretos quando existem',
    ],
    benefits: [
      {icon: '🔁', title: 'Uma capacidade que os concorrentes não conseguem replicar sozinhos', description: 'Uma integração mono-transportadora não consegue devolver combinações multi-operador. Os parceiros que usam Tictactrip entregam resultados que nenhuma integração DIY consegue igualar.'},
      {icon: '🧠', title: 'Lógica de ligações tratada por nós', description: 'Os tempos de transferência, a compatibilidade das estações e as realidades operacionais são validados dentro do motor de roteamento — o seu cliente nunca tem de adivinhar a viabilidade.'},
      {icon: '🛤️', title: 'Desbloqueie pares O/D de cauda longa', description: 'Centenas de pares de cidades na Europa não têm serviço direto. As combinações inteligentes transformam-nos em viagens reserváveis em vez de "sem resultados".'},
      {icon: '🚆', title: 'Continua a funcionar como API de pesquisa direta', description: 'Quando existe um percurso direto, recebe-o. O motor de combinação só entra quando é necessário — a superfície API mantém-se igual.'},
    ],
    code: {filename: 'combination-search.sh', body: codeBody},
    faqs: [
      {q: 'Os itinerários multi-operador são reserváveis numa única transação?', a: 'Sim. A Tictactrip trata da sequência de reserva subjacente com cada transportadora e devolve o itinerário combinado como um único registo reservável — incluindo PNR e emissão.'},
      {q: 'O que acontece se um troço de uma combinação ficar indisponível depois da pesquisa?', a: 'O endpoint de reserva revalida cada troço com a sua transportadora. Se um ficar indisponível, o fluxo de reserva devolve um erro estruturado para que a sua plataforma possa oferecer uma alternativa.'},
      {q: 'O motor de roteamento otimiza por tempo ou por preço?', a: 'Cada chamada devolve múltiplos pacotes ordenados por preço, com duração de viagem e CO₂ expostos na resposta. O seu cliente decide como ordenar ou filtrar — mais rápido, mais barato, mais verde ou uma pontuação personalizada.'},
      {q: 'Suporta viagens europeias transfronteiriças?', a: 'Sim. As viagens multi-transportadora transfronteiriças são cidadãos de primeira classe — por exemplo Paris ↔ cidades regionais italianas, Madrid ↔ cidades alemãs mais pequenas, etc.'},
    ],
    serviceType: 'API de roteamento multimodal multi-operador',
    audienceType: 'OTAs, plataformas MaaS, plataformas de viagem corporativa, produtos de planeamento de rotas',
  },
  ru: {
    breadcrumbCategory: 'Возможности',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Почему умные комбинации — это уникальный рычаг',
    relatedHeading: 'Другие возможности Tictactrip',
    eyebrow: 'Возможность · Умные комбинации',
    title: 'Умные комбинации',
    metaTitle: 'API мультимодальной маршрутизации — Комбинации поездов и автобусов разных операторов | Tictactrip',
    description: 'Когда прямого рейса нет, наш маршрутизатор собирает сегменты поезда и автобуса разных операторов в единый бронируемый маршрут.',
    metaDescription: 'API мультимодальной маршрутизации, объединяющий сегменты поезда и автобуса нескольких перевозчиков в единый бронируемый маршрут. Открывайте маршруты, которые не покрывает ни один отдельный оператор — уникальное преимущество Tictactrip среди 250+ европейских перевозчиков.',
    keywords: 'API мультимодальной маршрутизации, API мульти-операторских путешествий, комбинации поезд и автобус, многосегментное бронирование, европейский маршрутизатор, мультимодальное планирование поездки, API интермодальных путешествий, Tictactrip умные комбинации',
    heroTitle: <>Когда прямого маршрута нет,<br /><span style={{color: '#6ee7b7'}}>мы маршрутизируем между перевозчиками</span></>,
    heroLead: 'Маршрутизатор Tictactrip собирает многосегментные маршруты разных операторов — поезд + автобус, перевозчик A + перевозчик B — когда ни один прямой сервис не соединяет точки отправления и назначения вашего пользователя.',
    intro: (
      <>
        <h2>Европейская сеть железных дорог и автобусов фрагментирована. Маршрутизация это исправляет.</h2>
        <p>Прямые рейсы отсутствуют для большинства пар «откуда — куда» в Европе. Путешественник, едущий из французского города средней величины в итальянский региональный город, обычно нуждается в <strong>двух или трёх сегментах у разных операторов</strong> — и ни один API одиночного перевозчика не покажет это как бронируемое путешествие.</p>
        <p><strong>Маршрутизатор Tictactrip</strong> закрывает этот пробел. Мы объединяем сегменты поезда и автобуса между перевозчиками, проверяем осуществимость пересадок, валидируем тарифы по живому инвентарю и возвращаем результат как <strong>один бронируемый маршрут</strong> — а не три отдельных, которые пользователь должен собрать вручную.</p>
        <p>Именно эта возможность позволяет партнёрам Tictactrip выпускать продуктовые функции, <strong>которые ни один конкурент с интеграцией одного перевозчика повторить не может</strong>.</p>
      </>
    ),
    capabilities: [
      'Маршрутизатор объединяет сегменты поезд + автобус между операторами',
      'Мульти-перевозчные маршруты возвращаются как единая бронируемая единица',
      'Осуществимость пересадок проверяется автоматически',
      'Поддерживаются трансграничные комбинации',
      'Полезно для OTA, MaaS-платформ и корпоративных поездок',
      'Откатывается на прямые результаты, когда они существуют',
    ],
    benefits: [
      {icon: '🔁', title: 'Возможность, которую конкуренты не могут воспроизвести в одиночку', description: 'Интеграция одного перевозчика не может вернуть мульти-операторские комбинации. Партнёры, использующие Tictactrip, выпускают результаты, которым не может соответствовать ни одна самодельная интеграция.'},
      {icon: '🧠', title: 'Логика пересадок берёт на себя сервис', description: 'Время пересадки, совместимость станций и эксплуатационные реалии валидируются внутри маршрутизатора — вашему клиенту никогда не нужно сомневаться в осуществимости.'},
      {icon: '🛤️', title: 'Открывайте «длинный хвост» пар О/Н', description: 'Сотни пар городов в Европе не имеют прямого сервиса. Умные комбинации превращают их в бронируемые маршруты вместо «нет результатов».'},
      {icon: '🚆', title: 'Также работает как API прямого поиска', description: 'Когда есть прямой маршрут, вы получаете его. Движок комбинирования включается только когда нужно — поверхность API остаётся прежней.'},
    ],
    code: {filename: 'combination-search.sh', body: codeBody},
    faqs: [
      {q: 'Можно ли забронировать мульти-операторские маршруты одной транзакцией?', a: 'Да. Tictactrip управляет последовательностью бронирования с каждым перевозчиком и возвращает комбинированный маршрут как одну бронируемую запись — включая PNR и оформление билета.'},
      {q: 'Что, если сегмент комбинации станет недоступным после поиска?', a: 'Эндпоинт бронирования заново валидирует каждый сегмент у его перевозчика. Если один становится недоступным, поток бронирования возвращает структурированную ошибку, чтобы ваша платформа могла предложить альтернативу.'},
      {q: 'Маршрутизатор оптимизирует по времени или цене?', a: 'Каждый вызов возвращает несколько пакетов, отсортированных по цене, а время и CO₂ доступны в ответе. Ваш клиент решает, как ранжировать или фильтровать — самый быстрый, самый дешёвый, самый зелёный или индивидуальная оценка.'},
      {q: 'Поддерживает ли это трансграничные европейские маршруты?', a: 'Да. Трансграничные мульти-операторские поездки — это полноценные результаты — например, Париж ↔ итальянские региональные города, Мадрид ↔ небольшие немецкие города и т. п.'},
    ],
    serviceType: 'API мультимодальной мульти-операторской маршрутизации',
    audienceType: 'OTA, MaaS-платформы, платформы корпоративных поездок, продукты планирования маршрутов',
  },
};
