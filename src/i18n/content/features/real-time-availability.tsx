import React from 'react';
import type {Translations} from '../../useTranslation';
import type {SolutionPageProps} from '../../../components/SolutionPage';

type FeaturePageContent = Omit<SolutionPageProps, 'slug' | 'related'>;

const codeBody = `# Live search: every call hits carrier inventory
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRpari____@u09tu",
    "destinationGpuid": "c|FRlyon____@u05kq",
    "outboundDate":     "2026-06-12T00:00:00Z",
    "passengers":       [{"age": 30}]
  }'`;

export const realTimeAvailability: Translations<FeaturePageContent> = {
  en: {
    breadcrumbCategory: 'Features',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Why real-time availability matters',
    relatedHeading: 'Other Tictactrip features',
    eyebrow: 'Feature · Real-time availability',
    title: 'Real-time availability',
    metaTitle: 'Real-time train and bus availability API — Live pricing across Europe | Tictactrip',
    description: 'Live pricing, seat availability and fare classes refreshed in real time across 250+ European carriers. No stale inventory, no failed bookings.',
    metaDescription: 'Real-time European train and bus availability API. Live pricing, seat availability and fare classes refreshed on every request across 250+ carriers. No stale inventory, no broken bookings, no manual reconciliation.',
    keywords: 'real-time travel API, live train availability API, live bus availability API, real-time rail pricing, live fare API, live seat availability, real-time European travel API, Tictactrip real-time',
    heroTitle: <>Live pricing &amp; seat availability,<br /><span style={{color: '#6ee7b7'}}>refreshed on every search</span></>,
    heroLead: "Every Tictactrip search hits live carrier inventory. Prices, fare classes and seat availability are current at the moment the user clicks — no caching, no stale data, no failed bookings.",
    intro: (
      <>
        <h2>Stale inventory is the leading cause of broken travel bookings</h2>
        <p>Travel platforms that cache fares end up the same place: showing a price that no longer exists, then dropping the user into an error flow at checkout. The fix is structural — <strong>every request must reach live carrier inventory</strong>.</p>
        <p><strong>Tictactrip</strong> proxies directly to carrier systems on every call. Prices, seat availability and fare classes returned by <code>/v2/results</code> are <strong>the prices your user can actually book</strong> in the next few seconds.</p>
        <p>For partners, this means lower conversion drop-off, fewer support tickets and no manual reconciliation between displayed and charged fares.</p>
      </>
    ),
    capabilities: [
      'Live carrier-side pricing on every request',
      'Real-time seat availability and fare classes',
      'No stale-cache mismatches at checkout',
      'Coverage across 250+ European rail and bus operators',
      'Sub-second responses for the most common routes',
      'Returns the exact bookable fare, not an estimate',
    ],
    benefits: [
      {icon: '⚡', title: 'No stale data', description: 'Every search returns prices and availability that are live with the carrier — what your user sees is what they can actually book.'},
      {icon: '✅', title: 'Higher checkout conversion', description: 'The number-one driver of cart abandonment in travel is "price changed at checkout". Tictactrip eliminates the gap between display and book.'},
      {icon: '🎟️', title: 'Fare-class accuracy', description: 'Refundability, advance-purchase windows and fare-class metadata are returned in the same response, so policy and pricing logic stay in sync.'},
      {icon: '⏱️', title: 'Latency tuned for in-app UX', description: 'Sub-second responses on the most common European routes mean Tictactrip slots into the search-as-you-type and instant-results flows your users expect.'},
    ],
    code: {filename: 'realtime-search.sh', body: codeBody},
    faqs: [
      {q: 'Does Tictactrip cache fare data?', a: 'No. Every call to /v2/results hits live carrier inventory. The fares and availability you see are the ones your user can book immediately.'},
      {q: 'What latency should I expect?', a: 'Most European rail and bus routes return in well under a second. Some long multi-leg multi-operator searches take longer because they hit several carrier systems in parallel.'},
      {q: 'What happens if a fare changes between search and book?', a: 'The booking endpoint re-validates fare and availability with the carrier. If the price has moved, the booking step returns the current fare instead of silently charging a different amount.'},
      {q: 'Can I prefetch or batch searches?', a: 'We work with high-volume partners to optimise traffic patterns. Pre-fetching popular routes is supported on certain plans — contact sales@tictactrip.eu to discuss.'},
    ],
    serviceType: 'Real-time European train and bus availability API',
    audienceType: 'Travel platforms requiring live, non-cached inventory',
  },
  fr: {
    breadcrumbCategory: 'Fonctionnalités',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Pourquoi la disponibilité en temps réel compte',
    relatedHeading: 'Autres fonctionnalités Tictactrip',
    eyebrow: 'Fonctionnalité · Disponibilité en temps réel',
    title: 'Disponibilité en temps réel',
    metaTitle: 'API de disponibilité trains et bus en temps réel — tarifs en direct en Europe | Tictactrip',
    description: "Tarifs en direct, disponibilité des sièges et classes tarifaires rafraîchis en temps réel sur 250+ transporteurs européens. Pas d'inventaire obsolète, pas de réservations qui échouent.",
    metaDescription: "API de disponibilité trains et bus européens en temps réel. Tarifs en direct, disponibilité des sièges et classes tarifaires rafraîchis à chaque requête sur 250+ transporteurs. Pas d'inventaire obsolète, pas de réservation cassée, pas de réconciliation manuelle.",
    keywords: 'API voyage temps réel, API disponibilité trains en direct, API disponibilité bus en direct, tarifs ferroviaires en direct, API tarifs en direct, disponibilité sièges en direct, API voyage Europe temps réel, Tictactrip temps réel',
    heroTitle: <>Tarifs et sièges en direct,<br /><span style={{color: '#6ee7b7'}}>rafraîchis à chaque recherche</span></>,
    heroLead: "Chaque recherche Tictactrip atteint l'inventaire transporteur en direct. Prix, classes tarifaires et disponibilité des sièges sont actuels au moment du clic — pas de cache, pas de données obsolètes, pas de réservation qui échoue.",
    intro: (
      <>
        <h2>L'inventaire obsolète est la première cause de réservations cassées</h2>
        <p>Les plateformes de voyage qui mettent les tarifs en cache finissent toutes au même endroit : afficher un prix qui n'existe plus, puis envoyer l'utilisateur dans un flux d'erreur au paiement. La solution est structurelle — <strong>chaque requête doit atteindre l'inventaire transporteur en direct</strong>.</p>
        <p><strong>Tictactrip</strong> proxie directement vers les systèmes des transporteurs à chaque appel. Les prix, la disponibilité des sièges et les classes tarifaires renvoyés par <code>/v2/results</code> sont <strong>les prix que votre utilisateur peut réellement réserver</strong> dans les secondes qui suivent.</p>
        <p>Pour les partenaires, cela signifie moins d'abandons à la conversion, moins de tickets de support et zéro réconciliation manuelle entre tarif affiché et tarif facturé.</p>
      </>
    ),
    capabilities: [
      "Tarification côté transporteur en direct à chaque requête",
      "Disponibilité des sièges et classes tarifaires en temps réel",
      "Pas de discordances cache obsolète au paiement",
      "Couverture de 250+ opérateurs ferroviaires et de bus européens",
      "Réponses en moins d'une seconde sur les routes les plus communes",
      "Renvoie le tarif réservable exact, pas une estimation",
    ],
    benefits: [
      {icon: '⚡', title: 'Pas de données obsolètes', description: "Chaque recherche renvoie prix et disponibilité en direct avec le transporteur — ce que voit votre utilisateur est ce qu'il peut réellement réserver."},
      {icon: '✅', title: 'Conversion paiement plus haute', description: "Le facteur n°1 d'abandon panier dans le voyage est « le prix a changé au paiement ». Tictactrip élimine l'écart entre affichage et réservation."},
      {icon: '🎟️', title: 'Précision sur les classes tarifaires', description: "Remboursabilité, fenêtres d'achat anticipé et métadonnées de classe tarifaire sont renvoyées dans la même réponse, donc la logique tarifaire et la politique restent alignées."},
      {icon: '⏱️', title: "Latence calibrée pour l'UX en application", description: "Des réponses sous la seconde sur les routes européennes les plus communes signifient que Tictactrip s'intègre aux flux de recherche-à-la-volée et résultats instantanés que vos utilisateurs attendent."},
    ],
    code: {filename: 'realtime-search.sh', body: codeBody},
    faqs: [
      {q: 'Tictactrip met-il en cache les données tarifaires ?', a: "Non. Chaque appel à /v2/results atteint l'inventaire transporteur en direct. Les tarifs et la disponibilité que vous voyez sont ceux que votre utilisateur peut réserver immédiatement."},
      {q: 'Quelle latence attendre ?', a: "La plupart des routes européennes ferroviaires et de bus répondent largement sous la seconde. Certaines recherches longues multi-segments et multi-opérateurs prennent plus de temps car elles interrogent plusieurs systèmes transporteurs en parallèle."},
      {q: "Que se passe-t-il si un tarif change entre la recherche et la réservation ?", a: "L'endpoint de réservation re-valide tarif et disponibilité auprès du transporteur. Si le prix a bougé, l'étape de réservation renvoie le tarif actuel au lieu de débiter silencieusement un autre montant."},
      {q: 'Puis-je préfetcher ou batcher des recherches ?', a: "Nous travaillons avec les partenaires à fort volume pour optimiser les schémas de trafic. Le pré-fetch des routes populaires est supporté sur certains plans — contactez sales@tictactrip.eu pour en discuter."},
    ],
    serviceType: 'API de disponibilité trains et bus européens en temps réel',
    audienceType: 'Plateformes de voyage nécessitant un inventaire en direct, sans cache',
  },
  de: {
    breadcrumbCategory: 'Funktionen',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Warum Echtzeit-Verfügbarkeit zählt',
    relatedHeading: 'Weitere Tictactrip-Funktionen',
    eyebrow: 'Funktion · Echtzeit-Verfügbarkeit',
    title: 'Echtzeit-Verfügbarkeit',
    metaTitle: 'Echtzeit-Zug- und Bus-Verfügbarkeits-API — Live-Preise in Europa | Tictactrip',
    description: 'Live-Preise, Sitzplatzverfügbarkeit und Tarifklassen in Echtzeit aktualisiert über 250+ europäische Transporteure. Kein veraltetes Inventar, keine fehlgeschlagenen Buchungen.',
    metaDescription: 'Echtzeit-API für europäische Zug- und Bus-Verfügbarkeit. Live-Preise, Sitzplatzverfügbarkeit und Tarifklassen werden bei jeder Anfrage über 250+ Transporteure aktualisiert. Kein veraltetes Inventar, keine kaputten Buchungen, kein manueller Abgleich.',
    keywords: 'Echtzeit-Reise-API, Live-Zug-Verfügbarkeits-API, Live-Bus-Verfügbarkeits-API, Echtzeit-Bahn-Preise, Live-Tarif-API, Live-Sitzplatzverfügbarkeit, Echtzeit-Europa-Reise-API, Tictactrip Echtzeit',
    heroTitle: <>Live-Preise &amp; Sitzverfügbarkeit,<br /><span style={{color: '#6ee7b7'}}>bei jeder Suche aktualisiert</span></>,
    heroLead: 'Jede Tictactrip-Suche erreicht das Live-Inventar des Transporteurs. Preise, Tarifklassen und Sitzverfügbarkeit sind aktuell im Moment des Klicks — kein Caching, keine veralteten Daten, keine fehlgeschlagenen Buchungen.',
    intro: (
      <>
        <h2>Veraltetes Inventar ist die Hauptursache kaputter Reisebuchungen</h2>
        <p>Reiseplattformen, die Tarife cachen, landen alle am gleichen Punkt: einen Preis anzeigen, der nicht mehr existiert, und den Nutzer beim Checkout in einen Fehlerablauf werfen. Die Lösung ist strukturell — <strong>jede Anfrage muss das Live-Inventar des Transporteurs erreichen</strong>.</p>
        <p><strong>Tictactrip</strong> proxiert bei jedem Aufruf direkt zu den Transporteur-Systemen. Preise, Sitzverfügbarkeit und Tarifklassen, die <code>/v2/results</code> zurückliefert, sind <strong>die Preise, die Ihr Nutzer in den nächsten Sekunden tatsächlich buchen kann</strong>.</p>
        <p>Für Partner bedeutet das geringere Konvertierungsabbrüche, weniger Support-Tickets und keinen manuellen Abgleich zwischen angezeigtem und berechnetem Tarif.</p>
      </>
    ),
    capabilities: [
      'Live-Preise auf Transporteur-Seite bei jeder Anfrage',
      'Echtzeit-Sitzverfügbarkeit und Tarifklassen',
      'Kein veraltetes Cache-Mismatch beim Checkout',
      'Abdeckung über 250+ europäische Bahn- und Bus-Betreiber',
      'Antworten in unter einer Sekunde für die häufigsten Routen',
      'Liefert den exakten buchbaren Tarif, keine Schätzung',
    ],
    benefits: [
      {icon: '⚡', title: 'Keine veralteten Daten', description: 'Jede Suche liefert Preise und Verfügbarkeit live vom Transporteur — was Ihr Nutzer sieht, kann er auch tatsächlich buchen.'},
      {icon: '✅', title: 'Höhere Checkout-Konvertierung', description: 'Der #1-Treiber von Warenkorbabbrüchen im Reise-Bereich ist „Preis änderte sich beim Checkout". Tictactrip eliminiert die Lücke zwischen Anzeige und Buchung.'},
      {icon: '🎟️', title: 'Genauigkeit der Tarifklasse', description: 'Erstattbarkeit, Vorausbuchungsfenster und Tarifklassen-Metadaten kommen in derselben Antwort, sodass Policy- und Preislogik synchron bleiben.'},
      {icon: '⏱️', title: 'Latenz auf In-App-UX abgestimmt', description: 'Antworten unter einer Sekunde auf den häufigsten europäischen Routen heißt: Tictactrip passt in die Suche-während-Tippen- und Sofortergebnis-Flows, die Ihre Nutzer erwarten.'},
    ],
    code: {filename: 'realtime-search.sh', body: codeBody},
    faqs: [
      {q: 'Cached Tictactrip Tarifdaten?', a: 'Nein. Jeder Aufruf an /v2/results erreicht das Live-Inventar des Transporteurs. Die Tarife und die Verfügbarkeit, die Sie sehen, sind die, die Ihr Nutzer sofort buchen kann.'},
      {q: 'Welche Latenz ist zu erwarten?', a: 'Die meisten europäischen Bahn- und Bus-Routen antworten weit unter einer Sekunde. Einige lange mehrteilige Multi-Operator-Suchen brauchen länger, weil sie mehrere Transporteur-Systeme parallel ansprechen.'},
      {q: 'Was passiert, wenn sich ein Tarif zwischen Suche und Buchung ändert?', a: 'Der Buchungsendpunkt validiert Tarif und Verfügbarkeit erneut beim Transporteur. Wenn der Preis sich verändert hat, gibt der Buchungsschritt den aktuellen Tarif zurück, anstatt einen anderen Betrag stillschweigend zu belasten.'},
      {q: 'Kann ich Suchen vorab abrufen oder bündeln?', a: 'Wir arbeiten mit High-Volume-Partnern, um Traffic-Muster zu optimieren. Pre-Fetching beliebter Routen wird in bestimmten Plänen unterstützt — kontaktieren Sie sales@tictactrip.eu zur Besprechung.'},
    ],
    serviceType: 'Echtzeit-API für europäische Zug- und Bus-Verfügbarkeit',
    audienceType: 'Reiseplattformen, die Live-Inventar ohne Caching benötigen',
  },
  es: {
    breadcrumbCategory: 'Funciones',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Por qué importa la disponibilidad en tiempo real',
    relatedHeading: 'Otras funciones de Tictactrip',
    eyebrow: 'Función · Disponibilidad en tiempo real',
    title: 'Disponibilidad en tiempo real',
    metaTitle: 'API de disponibilidad de trenes y autobuses en tiempo real — Precios en vivo en Europa | Tictactrip',
    description: 'Precios en vivo, disponibilidad de plazas y clases tarifarias actualizadas en tiempo real en 250+ operadores europeos. Sin inventario obsoleto, sin reservas fallidas.',
    metaDescription: 'API de disponibilidad de trenes y autobuses europeos en tiempo real. Precios en vivo, disponibilidad de plazas y clases tarifarias actualizadas en cada solicitud en 250+ operadores. Sin inventario obsoleto, sin reservas rotas, sin reconciliación manual.',
    keywords: 'API viaje tiempo real, API disponibilidad trenes en vivo, API disponibilidad autobuses en vivo, precios ferroviarios en vivo, API tarifas en vivo, disponibilidad plazas en vivo, API viaje Europa tiempo real, Tictactrip tiempo real',
    heroTitle: <>Precios y plazas en vivo,<br /><span style={{color: '#6ee7b7'}}>actualizados en cada búsqueda</span></>,
    heroLead: 'Cada búsqueda Tictactrip llega al inventario en vivo del operador. Precios, clases tarifarias y disponibilidad de plazas están actualizados en el momento del clic — sin caché, sin datos obsoletos, sin reservas fallidas.',
    intro: (
      <>
        <h2>El inventario obsoleto es la primera causa de reservas rotas</h2>
        <p>Las plataformas de viaje que cachean tarifas acaban todas en el mismo sitio: mostrar un precio que ya no existe y enviar al usuario a un flujo de error en el pago. La solución es estructural — <strong>cada solicitud debe llegar al inventario en vivo del operador</strong>.</p>
        <p><strong>Tictactrip</strong> hace proxy directo a los sistemas del operador en cada llamada. Precios, disponibilidad de plazas y clases tarifarias devueltos por <code>/v2/results</code> son <strong>los precios que tu usuario puede reservar realmente</strong> en los próximos segundos.</p>
        <p>Para los socios significa menos abandono en la conversión, menos tickets de soporte y cero reconciliación manual entre tarifa mostrada y tarifa cobrada.</p>
      </>
    ),
    capabilities: [
      'Precios del lado operador en vivo en cada solicitud',
      'Disponibilidad de plazas y clases tarifarias en tiempo real',
      'Sin desajustes de caché obsoleta en el pago',
      'Cobertura en 250+ operadores ferroviarios y de autobús europeos',
      'Respuestas en menos de un segundo en las rutas más comunes',
      'Devuelve la tarifa reservable exacta, no una estimación',
    ],
    benefits: [
      {icon: '⚡', title: 'Sin datos obsoletos', description: 'Cada búsqueda devuelve precios y disponibilidad en vivo con el operador — lo que ve el usuario es lo que puede reservar realmente.'},
      {icon: '✅', title: 'Mayor conversión en el pago', description: 'El factor número uno de abandono de carrito en viajes es "el precio cambió al pagar". Tictactrip elimina la brecha entre mostrar y reservar.'},
      {icon: '🎟️', title: 'Precisión de clase tarifaria', description: 'Reembolsabilidad, ventanas de compra anticipada y metadatos de clase tarifaria llegan en la misma respuesta, así la lógica de política y precio quedan alineadas.'},
      {icon: '⏱️', title: 'Latencia afinada para UX en app', description: 'Respuestas por debajo del segundo en las rutas europeas más comunes significan que Tictactrip encaja con los flujos de búsqueda-mientras-escribes y resultados instantáneos que esperan tus usuarios.'},
    ],
    code: {filename: 'realtime-search.sh', body: codeBody},
    faqs: [
      {q: '¿Tictactrip cachea datos tarifarios?', a: 'No. Cada llamada a /v2/results llega al inventario en vivo del operador. Las tarifas y disponibilidad que ves son las que tu usuario puede reservar inmediatamente.'},
      {q: '¿Qué latencia debo esperar?', a: 'La mayoría de rutas europeas de tren y autobús responden por debajo del segundo. Algunas búsquedas largas multi-tramo y multi-operador tardan más porque consultan varios sistemas de operador en paralelo.'},
      {q: '¿Qué pasa si una tarifa cambia entre búsqueda y reserva?', a: 'El endpoint de reserva revalida tarifa y disponibilidad con el operador. Si el precio ha cambiado, el paso de reserva devuelve la tarifa actual en lugar de cobrar otra cantidad en silencio.'},
      {q: '¿Puedo prefetch o lotear búsquedas?', a: 'Trabajamos con socios de gran volumen para optimizar patrones de tráfico. El pre-fetch de rutas populares está soportado en ciertos planes — contacta con sales@tictactrip.eu para discutirlo.'},
    ],
    serviceType: 'API de disponibilidad de trenes y autobuses europeos en tiempo real',
    audienceType: 'Plataformas de viaje que requieren inventario en vivo, sin caché',
  },
  it: {
    breadcrumbCategory: 'Funzionalità',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Perché la disponibilità in tempo reale conta',
    relatedHeading: 'Altre funzionalità Tictactrip',
    eyebrow: 'Funzionalità · Disponibilità in tempo reale',
    title: 'Disponibilità in tempo reale',
    metaTitle: 'API di disponibilità treni e autobus in tempo reale — Prezzi live in Europa | Tictactrip',
    description: 'Prezzi live, disponibilità di posti e classi tariffarie aggiornati in tempo reale su 250+ vettori europei. Niente inventario obsoleto, niente prenotazioni fallite.',
    metaDescription: "API di disponibilità treni e autobus europei in tempo reale. Prezzi live, disponibilità di posti e classi tariffarie aggiornati a ogni richiesta su 250+ vettori. Niente inventario obsoleto, niente prenotazioni rotte, niente riconciliazione manuale.",
    keywords: 'API viaggio tempo reale, API disponibilità treni live, API disponibilità autobus live, prezzi ferroviari live, API tariffe live, disponibilità posti live, API viaggio Europa tempo reale, Tictactrip tempo reale',
    heroTitle: <>Prezzi e posti live,<br /><span style={{color: '#6ee7b7'}}>aggiornati a ogni ricerca</span></>,
    heroLead: "Ogni ricerca Tictactrip raggiunge l'inventario live del vettore. Prezzi, classi tariffarie e disponibilità di posti sono attuali nel momento del clic — niente cache, niente dati obsoleti, niente prenotazioni fallite.",
    intro: (
      <>
        <h2>L'inventario obsoleto è la causa principale delle prenotazioni rotte</h2>
        <p>Le piattaforme di viaggio che cachettano le tariffe finiscono tutte nello stesso punto: mostrano un prezzo che non esiste più e mandano l'utente in un flusso di errore al checkout. La soluzione è strutturale — <strong>ogni richiesta deve raggiungere l'inventario live del vettore</strong>.</p>
        <p><strong>Tictactrip</strong> fa da proxy diretto verso i sistemi dei vettori a ogni chiamata. Prezzi, disponibilità di posti e classi tariffarie restituiti da <code>/v2/results</code> sono <strong>i prezzi che il tuo utente può effettivamente prenotare</strong> nei prossimi secondi.</p>
        <p>Per i partner significa minor abbandono in conversione, meno ticket di supporto e zero riconciliazione manuale fra tariffa mostrata e tariffa addebitata.</p>
      </>
    ),
    capabilities: [
      'Prezzi lato vettore live a ogni richiesta',
      'Disponibilità posti e classi tariffarie in tempo reale',
      'Niente discrepanze da cache obsoleta al checkout',
      'Copertura su 250+ operatori ferroviari e di autobus europei',
      'Risposte sotto il secondo sulle rotte più comuni',
      'Restituisce la tariffa prenotabile esatta, non una stima',
    ],
    benefits: [
      {icon: '⚡', title: 'Nessun dato obsoleto', description: "Ogni ricerca restituisce prezzi e disponibilità live con il vettore — ciò che vede il tuo utente è ciò che può effettivamente prenotare."},
      {icon: '✅', title: 'Conversione più alta al checkout', description: "Il principale driver di abbandono del carrello nel viaggio è 'il prezzo è cambiato al checkout'. Tictactrip elimina il gap tra visualizzazione e prenotazione."},
      {icon: '🎟️', title: 'Precisione di classe tariffaria', description: "Rimborsabilità, finestre di acquisto anticipato e metadati di classe tariffaria arrivano nella stessa risposta, così la logica di policy e prezzo restano allineate."},
      {icon: '⏱️', title: 'Latenza calibrata per UX in-app', description: "Risposte sotto il secondo sulle rotte europee più comuni significano che Tictactrip si inserisce nei flussi di ricerca-mentre-digiti e risultati istantanei che i tuoi utenti si aspettano."},
    ],
    code: {filename: 'realtime-search.sh', body: codeBody},
    faqs: [
      {q: 'Tictactrip cachetta i dati tariffari?', a: "No. Ogni chiamata a /v2/results raggiunge l'inventario live del vettore. Le tariffe e la disponibilità che vedi sono quelle che il tuo utente può prenotare immediatamente."},
      {q: 'Che latenza aspettarsi?', a: "La maggior parte delle rotte europee ferroviarie e di autobus risponde ben sotto il secondo. Alcune ricerche lunghe multi-tratta multi-operatore impiegano più tempo perché interrogano più sistemi vettore in parallelo."},
      {q: 'Cosa succede se una tariffa cambia fra ricerca e prenotazione?', a: "L'endpoint di prenotazione rivalida tariffa e disponibilità presso il vettore. Se il prezzo è cambiato, lo step di prenotazione restituisce la tariffa attuale invece di addebitare silenziosamente un importo diverso."},
      {q: 'Posso fare prefetch o batch di ricerche?', a: "Lavoriamo con partner ad alto volume per ottimizzare i pattern di traffico. Il pre-fetch di rotte popolari è supportato in alcuni piani — contatta sales@tictactrip.eu per parlarne."},
    ],
    serviceType: 'API di disponibilità treni e autobus europei in tempo reale',
    audienceType: 'Piattaforme di viaggio che richiedono inventario live, non cachato',
  },
  pt: {
    breadcrumbCategory: 'Funcionalidades',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Porque a disponibilidade em tempo real importa',
    relatedHeading: 'Outras funcionalidades Tictactrip',
    eyebrow: 'Funcionalidade · Disponibilidade em tempo real',
    title: 'Disponibilidade em tempo real',
    metaTitle: 'API de disponibilidade de comboios e autocarros em tempo real — Preços ao vivo na Europa | Tictactrip',
    description: 'Preços ao vivo, disponibilidade de lugares e classes tarifárias atualizadas em tempo real em 250+ transportadoras europeias. Sem inventário desatualizado, sem reservas falhadas.',
    metaDescription: 'API de disponibilidade de comboios e autocarros europeus em tempo real. Preços ao vivo, disponibilidade de lugares e classes tarifárias atualizadas em cada pedido em 250+ transportadoras. Sem inventário desatualizado, sem reservas partidas, sem reconciliação manual.',
    keywords: 'API viagem tempo real, API disponibilidade comboios ao vivo, API disponibilidade autocarros ao vivo, preços ferroviários ao vivo, API tarifas ao vivo, disponibilidade lugares ao vivo, API viagem Europa tempo real, Tictactrip tempo real',
    heroTitle: <>Preços e lugares ao vivo,<br /><span style={{color: '#6ee7b7'}}>atualizados em cada pesquisa</span></>,
    heroLead: 'Cada pesquisa Tictactrip atinge o inventário ao vivo da transportadora. Preços, classes tarifárias e disponibilidade de lugares estão atuais no momento do clique — sem cache, sem dados desatualizados, sem reservas falhadas.',
    intro: (
      <>
        <h2>O inventário desatualizado é a principal causa de reservas partidas</h2>
        <p>As plataformas de viagem que fazem cache de tarifas acabam todas no mesmo sítio: a mostrar um preço que já não existe e a despejar o utilizador num fluxo de erro no pagamento. A solução é estrutural — <strong>cada pedido tem de chegar ao inventário ao vivo da transportadora</strong>.</p>
        <p>A <strong>Tictactrip</strong> faz proxy direto para os sistemas das transportadoras em cada chamada. Preços, disponibilidade de lugares e classes tarifárias devolvidos por <code>/v2/results</code> são <strong>os preços que o seu utilizador pode realmente reservar</strong> nos segundos seguintes.</p>
        <p>Para os parceiros significa menos abandono na conversão, menos tickets de suporte e zero reconciliação manual entre tarifa apresentada e tarifa cobrada.</p>
      </>
    ),
    capabilities: [
      'Preços do lado da transportadora ao vivo em cada pedido',
      'Disponibilidade de lugares e classes tarifárias em tempo real',
      'Sem discrepâncias de cache desatualizada no pagamento',
      'Cobertura em 250+ operadores ferroviários e de autocarro europeus',
      'Respostas em menos de um segundo nas rotas mais comuns',
      'Devolve a tarifa reservável exata, não uma estimativa',
    ],
    benefits: [
      {icon: '⚡', title: 'Sem dados desatualizados', description: 'Cada pesquisa devolve preços e disponibilidade ao vivo com a transportadora — o que o utilizador vê é o que pode realmente reservar.'},
      {icon: '✅', title: 'Maior conversão no pagamento', description: 'O principal motivo de abandono de carrinho em viagens é "o preço mudou no pagamento". A Tictactrip elimina o intervalo entre apresentação e reserva.'},
      {icon: '🎟️', title: 'Precisão de classe tarifária', description: 'Reembolsabilidade, janelas de compra antecipada e metadados de classe tarifária chegam na mesma resposta, por isso a lógica de política e preço ficam alinhadas.'},
      {icon: '⏱️', title: 'Latência afinada para UX em app', description: 'Respostas abaixo do segundo nas rotas europeias mais comuns significam que a Tictactrip encaixa nos fluxos de pesquisa-enquanto-escreve e resultados instantâneos que os seus utilizadores esperam.'},
    ],
    code: {filename: 'realtime-search.sh', body: codeBody},
    faqs: [
      {q: 'A Tictactrip faz cache de dados tarifários?', a: 'Não. Cada chamada a /v2/results atinge o inventário ao vivo da transportadora. As tarifas e disponibilidade que vê são as que o utilizador pode reservar imediatamente.'},
      {q: 'Que latência devo esperar?', a: 'A maioria das rotas europeias de comboio e autocarro responde bem abaixo do segundo. Algumas pesquisas longas multi-troço multi-operador demoram mais porque interrogam vários sistemas de transportadora em paralelo.'},
      {q: 'O que acontece se uma tarifa mudar entre a pesquisa e a reserva?', a: 'O endpoint de reserva revalida tarifa e disponibilidade com a transportadora. Se o preço se alterou, o passo de reserva devolve a tarifa atual em vez de cobrar silenciosamente outro valor.'},
      {q: 'Posso fazer prefetch ou batch de pesquisas?', a: 'Trabalhamos com parceiros de alto volume para otimizar padrões de tráfego. O pré-fetch de rotas populares é suportado em certos planos — contacte sales@tictactrip.eu para discutir.'},
    ],
    serviceType: 'API de disponibilidade de comboios e autocarros europeus em tempo real',
    audienceType: 'Plataformas de viagem que requerem inventário ao vivo, sem cache',
  },
  ru: {
    breadcrumbCategory: 'Возможности',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Почему доступность в реальном времени важна',
    relatedHeading: 'Другие возможности Tictactrip',
    eyebrow: 'Возможность · Доступность в реальном времени',
    title: 'Доступность в реальном времени',
    metaTitle: 'API доступности поездов и автобусов в реальном времени — Живые цены по Европе | Tictactrip',
    description: 'Живые цены, доступность мест и тарифные классы, обновляемые в реальном времени для более 250 европейских перевозчиков. Никакого устаревшего инвентаря, никаких неудачных бронирований.',
    metaDescription: 'API доступности европейских поездов и автобусов в реальном времени. Живые цены, доступность мест и тарифные классы обновляются на каждый запрос для 250+ перевозчиков. Никакого устаревшего инвентаря, никаких сломанных бронирований, никакой ручной сверки.',
    keywords: 'API путешествия реальное время, API живой доступности поездов, API живой доступности автобусов, цены железной дороги в реальном времени, API живых тарифов, доступность мест в реальном времени, API путешествий Европа реальное время, Tictactrip реальное время',
    heroTitle: <>Живые цены и места,<br /><span style={{color: '#6ee7b7'}}>обновляемые на каждый поиск</span></>,
    heroLead: 'Каждый поисковый запрос Tictactrip обращается к живому инвентарю перевозчика. Цены, тарифные классы и доступность мест актуальны на момент клика — без кеширования, без устаревших данных, без неудачных бронирований.',
    intro: (
      <>
        <h2>Устаревший инвентарь — главная причина сломанных бронирований</h2>
        <p>Платформы путешествий, которые кешируют тарифы, оказываются в одном и том же месте: показывают цену, которой больше не существует, и сбрасывают пользователя в поток ошибок на оформлении. Решение структурное — <strong>каждый запрос должен обращаться к живому инвентарю перевозчика</strong>.</p>
        <p><strong>Tictactrip</strong> проксирует напрямую к системам перевозчиков на каждый вызов. Цены, доступность мест и тарифные классы, возвращаемые <code>/v2/results</code>, — это <strong>цены, которые ваш пользователь сможет фактически забронировать</strong> в ближайшие секунды.</p>
        <p>Для партнёров это значит меньше оттока на конверсии, меньше тикетов поддержки и нулевая ручная сверка между отображённым и списанным тарифом.</p>
      </>
    ),
    capabilities: [
      'Живая ценовая логика со стороны перевозчика на каждый запрос',
      'Доступность мест и тарифные классы в реальном времени',
      'Никаких рассинхронизаций из-за устаревшего кеша на оформлении',
      'Покрытие более 250 европейских железнодорожных и автобусных операторов',
      'Ответы за доли секунды на самых частых маршрутах',
      'Возвращает точный бронируемый тариф, а не оценку',
    ],
    benefits: [
      {icon: '⚡', title: 'Никаких устаревших данных', description: 'Каждый поиск возвращает цены и доступность в реальном времени с перевозчиком — то, что видит пользователь, он действительно может забронировать.'},
      {icon: '✅', title: 'Выше конверсия на оформлении', description: 'Главная причина отказа от корзины в путешествиях — «цена изменилась на оформлении». Tictactrip устраняет разрыв между отображением и бронированием.'},
      {icon: '🎟️', title: 'Точность тарифного класса', description: 'Возвратность, окна предварительной покупки и метаданные тарифного класса возвращаются в той же выдаче, поэтому логика политики и цены остаются синхронизированными.'},
      {icon: '⏱️', title: 'Латентность под in-app UX', description: 'Ответы менее чем за секунду на самых частых европейских маршрутах означают, что Tictactrip встраивается в потоки «поиск-по-мере-ввода» и мгновенных результатов, которых ожидают ваши пользователи.'},
    ],
    code: {filename: 'realtime-search.sh', body: codeBody},
    faqs: [
      {q: 'Кеширует ли Tictactrip данные о тарифах?', a: 'Нет. Каждый вызов /v2/results обращается к живому инвентарю перевозчика. Тарифы и доступность, которые вы видите, — это те, что пользователь может забронировать немедленно.'},
      {q: 'Какой латентности ожидать?', a: 'Большинство европейских железнодорожных и автобусных маршрутов отвечают значительно меньше чем за секунду. Некоторые длинные многосегментные мульти-операторские поиски длятся дольше, поскольку обращаются к нескольким системам перевозчиков параллельно.'},
      {q: 'Что произойдёт, если тариф изменится между поиском и бронированием?', a: 'Эндпоинт бронирования заново проверяет тариф и доступность у перевозчика. Если цена изменилась, шаг бронирования возвращает текущий тариф вместо незаметного списания другой суммы.'},
      {q: 'Можно ли пред-загружать или объединять поиски в пакеты?', a: 'Мы работаем с партнёрами с высоким трафиком, чтобы оптимизировать паттерны обращений. Пред-загрузка популярных маршрутов поддерживается в определённых тарифах — свяжитесь с sales@tictactrip.eu для обсуждения.'},
    ],
    serviceType: 'API доступности европейских поездов и автобусов в реальном времени',
    audienceType: 'Путешественные платформы, требующие живого инвентаря без кеширования',
  },
};
