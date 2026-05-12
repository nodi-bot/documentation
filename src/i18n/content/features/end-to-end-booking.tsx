import React from 'react';
import type {Translations} from '../../useTranslation';
import type {SolutionPageProps} from '../../../components/SolutionPage';

type FeaturePageContent = Omit<SolutionPageProps, 'slug' | 'related'>;

const codeBody = `# Step 1 — search for itineraries
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRpari____@u09tu",
    "destinationGpuid": "c|FRlyon____@u05kq",
    "outboundDate":     "2026-06-12T00:00:00Z",
    "passengers":       [{"age": 30}]
  }'

# Step 2 — reserve, pay and issue tickets
#          using the booking endpoints in /docs/intro`;

export const endToEndBooking: Translations<FeaturePageContent> = {
  en: {
    breadcrumbCategory: 'Features',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Why one API for the entire booking flow',
    relatedHeading: 'Other Tictactrip features',
    eyebrow: 'Feature · End-to-end booking',
    title: 'End-to-end booking',
    metaTitle: 'End-to-end travel booking API — Search, reserve, pay and ticket through one REST API | Tictactrip',
    description: 'Search, reserve, pay and issue tickets through a single REST API. Tickets are delivered as PDF, ready to email or embed in your product.',
    metaDescription: 'End-to-end European travel booking API. Search, reserve, pay and issue tickets through one REST integration. Tickets delivered as PDF. Refund and exchange workflows included, across 250+ European rail and bus carriers.',
    keywords: 'end-to-end travel booking API, train ticketing API, bus ticketing API, PDF ticket API, travel booking workflow API, refund and exchange API, European booking API, Tictactrip booking',
    heroTitle: <>Search, reserve, pay, ticket —<br /><span style={{color: '#6ee7b7'}}>through one REST API</span></>,
    heroLead: 'Tictactrip handles the entire booking pipeline. Tickets come back as PDFs, ready to email to travellers or render inside your own product. Refunds and exchanges run through the same surface.',
    intro: (
      <>
        <h2>The booking pipeline is the part nobody wants to rebuild</h2>
        <p>Search is the easy 20% of a travel integration. The other 80% is <strong>reservation locks, payment authorization, carrier-specific ticket issuance, retries, refunds, exchanges and after-sales operations</strong> — the unglamorous infrastructure that decides whether your product works in production.</p>
        <p><strong>Tictactrip</strong> owns that pipeline end-to-end. You hit one REST API; we run the booking sequence against each carrier, validate payment, issue the ticket and return it as a <strong>PDF</strong> you can email to travellers or embed inside your own app.</p>
        <p>Refunds and exchanges run through the same API. No carrier portals, no manual reissues, no parallel ticketing stacks.</p>
      </>
    ),
    capabilities: [
      'Search → reserve → pay → ticket through one REST API',
      'PDF ticket delivery, ready to email or embed',
      'Refund workflows through the same API surface',
      'Exchange and modification workflows supported',
      'Carrier-side reconciliation handled by Tictactrip',
      'Consistent booking record format across operators',
    ],
    benefits: [
      {icon: '🎫', title: 'No parallel ticketing stack', description: 'You integrate one booking flow instead of carrier-by-carrier ticket-issuance logic. The maintenance burden of ticket formats lives on our side.'},
      {icon: '💳', title: 'Payment-clean workflow', description: 'Reservation, payment and ticket issuance happen in a structured sequence with clear error codes — easy to wrap in your own retry and observability stack.'},
      {icon: '↩️', title: 'Refunds and exchanges included', description: 'Cancellation and modification workflows run through the same API. No need to point your support agents at five different carrier portals.'},
      {icon: '📄', title: 'PDF tickets, ready to send', description: 'Tickets are delivered as PDFs your platform can email, attach to confirmations, store in a document system or render inside your own product.'},
    ],
    code: {filename: 'booking-flow.sh', body: codeBody},
    faqs: [
      {q: 'In which format are tickets delivered?', a: 'Tickets are issued as PDFs. You can email them to travellers, attach them to confirmation emails, archive them in a document system or render them directly inside your own product.'},
      {q: 'How are refunds handled?', a: 'Refund workflows run through the same API. Eligibility, partial vs full refund and timing follow the original carrier fare rules — surfaced through structured API fields, not free-form text.'},
      {q: 'Are exchanges supported?', a: 'Yes, where the carrier supports them. The exchange endpoint runs through the same API surface as the original booking — your platform handles the user-facing flow, Tictactrip handles the carrier-side mechanics.'},
      {q: 'What happens if a payment fails mid-booking?', a: 'The booking endpoint returns structured error codes so your platform can decide whether to retry, fall back to another itinerary or surface the failure to the user. No silent partial bookings.'},
    ],
    serviceType: 'End-to-end European travel booking and ticketing API',
    audienceType: 'Travel platforms requiring a complete booking pipeline (search, reserve, pay, ticket, refund, exchange)',
  },
  fr: {
    breadcrumbCategory: 'Fonctionnalités',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: "Pourquoi une seule API pour tout le flux de réservation",
    relatedHeading: 'Autres fonctionnalités Tictactrip',
    eyebrow: 'Fonctionnalité · Réservation de bout en bout',
    title: 'Réservation de bout en bout',
    metaTitle: 'API de réservation voyage de bout en bout — Rechercher, réserver, payer et émettre un billet via une seule API REST | Tictactrip',
    description: "Rechercher, réserver, payer et émettre des billets via une seule API REST. Les billets sont livrés en PDF, prêts à être envoyés par e-mail ou intégrés dans votre produit.",
    metaDescription: "API de réservation voyage européenne de bout en bout. Rechercher, réserver, payer et émettre des billets via une seule intégration REST. Billets livrés en PDF. Flux de remboursement et d'échange inclus, sur 250+ transporteurs ferroviaires et de bus européens.",
    keywords: 'API réservation voyage bout en bout, API billetterie train, API billetterie bus, API billet PDF, API flux réservation voyage, API remboursement et échange, API réservation Europe, Tictactrip réservation',
    heroTitle: <>Rechercher, réserver, payer, émettre —<br /><span style={{color: '#6ee7b7'}}>via une seule API REST</span></>,
    heroLead: "Tictactrip gère toute la chaîne de réservation. Les billets reviennent en PDF, prêts à être envoyés par e-mail ou affichés dans votre propre produit. Les remboursements et échanges passent par la même surface.",
    intro: (
      <>
        <h2>La chaîne de réservation est la partie que personne ne veut reconstruire</h2>
        <p>La recherche est les 20 % faciles d'une intégration voyage. Les 80 % restants sont <strong>verrouillages de réservation, autorisations de paiement, émission de billet spécifique au transporteur, reprises, remboursements, échanges et opérations après-vente</strong> — l'infrastructure peu glamour qui détermine si votre produit fonctionne en production.</p>
        <p><strong>Tictactrip</strong> possède cette chaîne de bout en bout. Vous interrogez une seule API REST ; nous exécutons la séquence de réservation chez chaque transporteur, validons le paiement, émettons le billet et le renvoyons en <strong>PDF</strong> que vous pouvez envoyer par e-mail aux voyageurs ou intégrer dans votre application.</p>
        <p>Les remboursements et échanges passent par la même API. Pas de portails transporteurs, pas de réémission manuelle, pas de piles de billetterie parallèles.</p>
      </>
    ),
    capabilities: [
      "Rechercher → réserver → payer → émettre via une seule API REST",
      "Livraison de billet PDF, prête à être envoyée ou intégrée",
      "Flux de remboursement via la même surface API",
      "Flux d'échange et de modification pris en charge",
      "Réconciliation côté transporteur gérée par Tictactrip",
      "Format de dossier de réservation cohérent entre opérateurs",
    ],
    benefits: [
      {icon: '🎫', title: "Pas de pile de billetterie parallèle", description: "Vous intégrez un seul flux de réservation au lieu d'une logique d'émission spécifique par transporteur. Le poids de maintenance des formats de billet reste de notre côté."},
      {icon: '💳', title: 'Flux de paiement propre', description: "Réservation, paiement et émission de billet se déroulent en séquence structurée avec des codes d'erreur clairs — faciles à envelopper dans votre propre stack de reprise et d'observabilité."},
      {icon: '↩️', title: 'Remboursements et échanges inclus', description: "Les flux d'annulation et de modification passent par la même API. Pas besoin de diriger vos agents support vers cinq portails transporteurs différents."},
      {icon: '📄', title: "Billets PDF, prêts à envoyer", description: "Les billets sont livrés en PDF que votre plateforme peut envoyer par e-mail, joindre aux confirmations, stocker dans un système documentaire ou afficher dans votre propre produit."},
    ],
    code: {filename: 'booking-flow.sh', body: codeBody},
    faqs: [
      {q: 'Dans quel format les billets sont-ils livrés ?', a: "Les billets sont émis en PDF. Vous pouvez les envoyer par e-mail aux voyageurs, les joindre aux e-mails de confirmation, les archiver dans un système documentaire ou les afficher directement dans votre propre produit."},
      {q: "Comment les remboursements sont-ils gérés ?", a: "Les flux de remboursement passent par la même API. Éligibilité, remboursement partiel vs total et délais suivent les règles tarifaires originales du transporteur — exposés via des champs API structurés, pas du texte libre."},
      {q: 'Les échanges sont-ils pris en charge ?', a: "Oui, quand le transporteur les prend en charge. L'endpoint d'échange passe par la même surface API que la réservation initiale — votre plateforme gère le flux côté utilisateur, Tictactrip gère la mécanique côté transporteur."},
      {q: "Que se passe-t-il si un paiement échoue en cours de réservation ?", a: "L'endpoint de réservation renvoie des codes d'erreur structurés pour que votre plateforme puisse décider de retenter, de basculer sur un autre itinéraire ou de remonter l'échec à l'utilisateur. Pas de réservations partielles silencieuses."},
    ],
    serviceType: "API européenne de réservation et billetterie voyage de bout en bout",
    audienceType: "Plateformes voyage nécessitant une chaîne de réservation complète (recherche, réservation, paiement, billet, remboursement, échange)",
  },
  de: {
    breadcrumbCategory: 'Funktionen',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Warum eine API für den gesamten Buchungsablauf',
    relatedHeading: 'Weitere Tictactrip-Funktionen',
    eyebrow: 'Funktion · End-to-End-Buchung',
    title: 'End-to-End-Buchung',
    metaTitle: 'End-to-End-Reisebuchungs-API — Suchen, reservieren, bezahlen und ticketen über eine REST-API | Tictactrip',
    description: 'Suchen, reservieren, bezahlen und Tickets ausstellen über eine einzige REST-API. Tickets werden als PDF geliefert, bereit zum Versand per E-Mail oder zur Einbettung in Ihr Produkt.',
    metaDescription: 'End-to-End-API für europäische Reisebuchungen. Suchen, reservieren, bezahlen und Tickets ausstellen über eine REST-Integration. Tickets als PDF geliefert. Erstattungs- und Umtauschabläufe inklusive, über 250+ europäische Bahn- und Bus-Transporteure.',
    keywords: 'End-to-End-Reisebuchungs-API, Zug-Ticketing-API, Bus-Ticketing-API, PDF-Ticket-API, Reisebuchungs-Workflow-API, Erstattungs- und Umtausch-API, Europa-Buchungs-API, Tictactrip Buchung',
    heroTitle: <>Suchen, reservieren, bezahlen, ticketen —<br /><span style={{color: '#6ee7b7'}}>über eine REST-API</span></>,
    heroLead: 'Tictactrip übernimmt die gesamte Buchungs-Pipeline. Tickets kommen als PDFs zurück, bereit zum Versand an Reisende oder zur Einbettung in Ihr Produkt. Erstattungen und Umtausch laufen über dieselbe Oberfläche.',
    intro: (
      <>
        <h2>Die Buchungs-Pipeline ist der Teil, den niemand neu bauen will</h2>
        <p>Die Suche sind die einfachen 20 % einer Reiseintegration. Die anderen 80 % sind <strong>Reservierungs-Locks, Zahlungsautorisierung, transporteurspezifische Ticketausstellung, Retries, Erstattungen, Umtausch und After-Sales</strong> — die unspektakuläre Infrastruktur, die entscheidet, ob Ihr Produkt in Produktion funktioniert.</p>
        <p><strong>Tictactrip</strong> besitzt diese Pipeline End-to-End. Sie rufen eine REST-API auf; wir führen die Buchungssequenz bei jedem Transporteur aus, validieren die Zahlung, stellen das Ticket aus und liefern es als <strong>PDF</strong> zurück, das Sie per E-Mail an Reisende senden oder in Ihre App einbetten können.</p>
        <p>Erstattungen und Umtausch laufen über dieselbe API. Keine Transporteur-Portale, keine manuelle Neuausstellung, keine parallelen Ticketing-Stacks.</p>
      </>
    ),
    capabilities: [
      'Suche → Reservierung → Zahlung → Ticket über eine REST-API',
      'PDF-Ticket-Lieferung, bereit zum Senden oder Einbetten',
      'Erstattungs-Workflows über dieselbe API-Oberfläche',
      'Umtausch- und Änderungs-Workflows unterstützt',
      'Transporteur-Abgleich von Tictactrip übernommen',
      'Konsistentes Buchungsdatensatz-Format über Operatoren',
    ],
    benefits: [
      {icon: '🎫', title: 'Kein paralleler Ticketing-Stack', description: 'Sie integrieren einen Buchungsablauf statt transporteurspezifischer Ticketausstellungs-Logik. Die Wartung der Ticketformate liegt auf unserer Seite.'},
      {icon: '💳', title: 'Sauberer Zahlungs-Workflow', description: 'Reservierung, Zahlung und Ticketausstellung laufen in strukturierter Sequenz mit klaren Fehlercodes — einfach in Ihren eigenen Retry- und Observability-Stack einzubinden.'},
      {icon: '↩️', title: 'Erstattungen und Umtausch inklusive', description: 'Stornierungs- und Änderungsabläufe laufen über dieselbe API. Sie müssen Ihre Support-Agenten nicht auf fünf verschiedene Transporteur-Portale verteilen.'},
      {icon: '📄', title: 'PDF-Tickets, bereit zum Versand', description: 'Tickets werden als PDFs geliefert, die Ihre Plattform per E-Mail senden, an Bestätigungen anhängen, in einem Dokumentensystem ablegen oder in Ihr Produkt einbetten kann.'},
    ],
    code: {filename: 'booking-flow.sh', body: codeBody},
    faqs: [
      {q: 'In welchem Format werden Tickets geliefert?', a: 'Tickets werden als PDFs ausgestellt. Sie können sie per E-Mail an Reisende senden, an Bestätigungs-E-Mails anhängen, in einem Dokumentensystem archivieren oder direkt in Ihrem Produkt anzeigen.'},
      {q: 'Wie werden Erstattungen abgewickelt?', a: 'Erstattungs-Workflows laufen über dieselbe API. Berechtigung, Teil- vs. Vollerstattung und Zeitpunkt folgen den ursprünglichen Transporteur-Tarifregeln — präsentiert über strukturierte API-Felder, nicht über Freitext.'},
      {q: 'Werden Umtausche unterstützt?', a: 'Ja, wo der Transporteur sie unterstützt. Der Umtausch-Endpunkt läuft über dieselbe API-Oberfläche wie die Originalbuchung — Ihre Plattform übernimmt den nutzerseitigen Ablauf, Tictactrip die transporteurseitige Mechanik.'},
      {q: 'Was passiert, wenn eine Zahlung mitten in der Buchung fehlschlägt?', a: 'Der Buchungsendpunkt liefert strukturierte Fehlercodes, sodass Ihre Plattform entscheiden kann, ob neu versucht, auf eine andere Verbindung ausgewichen oder der Fehler dem Nutzer angezeigt werden soll. Keine stillen Teilbuchungen.'},
    ],
    serviceType: 'End-to-End-API für europäische Reisebuchungen und Ticketierung',
    audienceType: 'Reiseplattformen, die eine vollständige Buchungs-Pipeline benötigen (Suche, Reservierung, Zahlung, Ticket, Erstattung, Umtausch)',
  },
  es: {
    breadcrumbCategory: 'Funciones',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Por qué una API para todo el flujo de reserva',
    relatedHeading: 'Otras funciones de Tictactrip',
    eyebrow: 'Función · Reserva extremo a extremo',
    title: 'Reserva extremo a extremo',
    metaTitle: 'API de reserva de viaje extremo a extremo — Buscar, reservar, pagar y emitir billete a través de una API REST | Tictactrip',
    description: 'Buscar, reservar, pagar y emitir billetes a través de una sola API REST. Los billetes se entregan en PDF, listos para enviar por correo o integrar en tu producto.',
    metaDescription: 'API de reserva de viaje europeo extremo a extremo. Buscar, reservar, pagar y emitir billetes a través de una integración REST. Billetes entregados en PDF. Flujos de reembolso y cambio incluidos, en 250+ operadores europeos de tren y autobús.',
    keywords: 'API reserva viaje extremo a extremo, API billetería tren, API billetería autobús, API billete PDF, API flujo reserva viaje, API reembolso y cambio, API reserva Europa, Tictactrip reserva',
    heroTitle: <>Buscar, reservar, pagar, emitir —<br /><span style={{color: '#6ee7b7'}}>a través de una API REST</span></>,
    heroLead: 'Tictactrip se encarga de toda la cadena de reserva. Los billetes vuelven en PDF, listos para enviar por correo a los viajeros o renderizar dentro de tu producto. Reembolsos y cambios pasan por la misma superficie.',
    intro: (
      <>
        <h2>La cadena de reserva es la parte que nadie quiere reconstruir</h2>
        <p>La búsqueda es el 20 % fácil de una integración de viaje. El otro 80 % son <strong>bloqueos de reserva, autorización de pago, emisión de billete específica de cada operador, reintentos, reembolsos, cambios y operaciones postventa</strong> — la infraestructura poco glamurosa que decide si tu producto funciona en producción.</p>
        <p><strong>Tictactrip</strong> es dueña de esa cadena extremo a extremo. Tú llamas a una API REST; nosotros ejecutamos la secuencia de reserva contra cada operador, validamos el pago, emitimos el billete y lo devolvemos como <strong>PDF</strong> que puedes enviar por correo a los viajeros o integrar dentro de tu app.</p>
        <p>Reembolsos y cambios pasan por la misma API. Sin portales de operador, sin reemisión manual, sin pilas de billetería paralelas.</p>
      </>
    ),
    capabilities: [
      'Buscar → reservar → pagar → emitir a través de una API REST',
      'Entrega de billete PDF, listo para enviar o integrar',
      'Flujos de reembolso a través de la misma superficie API',
      'Flujos de cambio y modificación soportados',
      'Reconciliación lado operador gestionada por Tictactrip',
      'Formato de registro de reserva consistente entre operadores',
    ],
    benefits: [
      {icon: '🎫', title: 'Sin pila de billetería paralela', description: 'Integras un único flujo de reserva en lugar de lógica de emisión específica por operador. La carga de mantenimiento de los formatos de billete vive de nuestro lado.'},
      {icon: '💳', title: 'Flujo de pago limpio', description: 'Reserva, pago y emisión de billete suceden en una secuencia estructurada con códigos de error claros — fácil de envolver en tu propio stack de reintento y observabilidad.'},
      {icon: '↩️', title: 'Reembolsos y cambios incluidos', description: 'Los flujos de cancelación y modificación pasan por la misma API. No hace falta apuntar a tus agentes de soporte a cinco portales de operador distintos.'},
      {icon: '📄', title: 'Billetes PDF, listos para enviar', description: 'Los billetes se entregan en PDF que tu plataforma puede enviar por correo, adjuntar a confirmaciones, almacenar en un sistema documental o renderizar dentro de tu propio producto.'},
    ],
    code: {filename: 'booking-flow.sh', body: codeBody},
    faqs: [
      {q: '¿En qué formato se entregan los billetes?', a: 'Los billetes se emiten en PDF. Puedes enviarlos por correo a los viajeros, adjuntarlos a correos de confirmación, archivarlos en un sistema documental o renderizarlos directamente dentro de tu propio producto.'},
      {q: '¿Cómo se gestionan los reembolsos?', a: 'Los flujos de reembolso pasan por la misma API. Elegibilidad, reembolso parcial vs total y tiempos siguen las reglas tarifarias originales del operador — expuestos a través de campos API estructurados, no texto libre.'},
      {q: '¿Se soportan los cambios?', a: 'Sí, cuando el operador los soporta. El endpoint de cambio pasa por la misma superficie API que la reserva original — tu plataforma gestiona el flujo cara al usuario, Tictactrip gestiona la mecánica del lado del operador.'},
      {q: '¿Qué pasa si un pago falla a mitad de la reserva?', a: 'El endpoint de reserva devuelve códigos de error estructurados para que tu plataforma pueda decidir si reintentar, caer hacia atrás a otro itinerario o mostrar el fallo al usuario. Sin reservas parciales silenciosas.'},
    ],
    serviceType: 'API europea de reserva y billetería de viaje extremo a extremo',
    audienceType: 'Plataformas de viaje que requieren una cadena de reserva completa (búsqueda, reserva, pago, billete, reembolso, cambio)',
  },
  it: {
    breadcrumbCategory: 'Funzionalità',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: "Perché un'unica API per l'intero flusso di prenotazione",
    relatedHeading: 'Altre funzionalità Tictactrip',
    eyebrow: 'Funzionalità · Prenotazione end-to-end',
    title: 'Prenotazione end-to-end',
    metaTitle: "API di prenotazione viaggio end-to-end — Cerca, prenota, paga ed emetti biglietti tramite un'API REST | Tictactrip",
    description: "Cerca, prenota, paga ed emetti biglietti tramite una sola API REST. I biglietti vengono consegnati in PDF, pronti per essere inviati via email o integrati nel tuo prodotto.",
    metaDescription: "API di prenotazione viaggio europea end-to-end. Cerca, prenota, paga ed emetti biglietti tramite un'integrazione REST. Biglietti consegnati in PDF. Flussi di rimborso e cambio inclusi, su 250+ vettori europei di treni e autobus.",
    keywords: 'API prenotazione viaggio end-to-end, API biglietteria treno, API biglietteria autobus, API biglietto PDF, API flusso prenotazione viaggio, API rimborso e cambio, API prenotazione Europa, Tictactrip prenotazione',
    heroTitle: <>Cerca, prenota, paga, emetti —<br /><span style={{color: '#6ee7b7'}}>tramite un'API REST</span></>,
    heroLead: "Tictactrip gestisce l'intera pipeline di prenotazione. I biglietti tornano in PDF, pronti per essere inviati via email ai viaggiatori o renderizzati dentro il tuo prodotto. Rimborsi e cambi passano per la stessa superficie.",
    intro: (
      <>
        <h2>La pipeline di prenotazione è la parte che nessuno vuole ricostruire</h2>
        <p>La ricerca è il 20 % facile di un'integrazione di viaggio. L'altro 80 % è <strong>blocchi di prenotazione, autorizzazione pagamenti, emissione biglietti specifica del vettore, retry, rimborsi, cambi e post-vendita</strong> — l'infrastruttura poco glamour che decide se il tuo prodotto funziona in produzione.</p>
        <p><strong>Tictactrip</strong> possiede quella pipeline end-to-end. Tu chiami un'API REST; noi eseguiamo la sequenza di prenotazione presso ciascun vettore, validiamo il pagamento, emettiamo il biglietto e lo restituiamo come <strong>PDF</strong> che puoi inviare via email ai viaggiatori o integrare dentro la tua app.</p>
        <p>Rimborsi e cambi passano per la stessa API. Niente portali vettore, niente riemissione manuale, niente stack di biglietteria paralleli.</p>
      </>
    ),
    capabilities: [
      "Cerca → prenota → paga → emetti tramite un'API REST",
      "Consegna biglietto PDF, pronto per essere inviato o integrato",
      "Flussi di rimborso tramite la stessa superficie API",
      "Flussi di cambio e modifica supportati",
      "Riconciliazione lato vettore gestita da Tictactrip",
      "Formato record di prenotazione coerente fra operatori",
    ],
    benefits: [
      {icon: '🎫', title: 'Niente stack di biglietteria paralleli', description: "Integri un singolo flusso di prenotazione invece di logica di emissione vettore-per-vettore. Il peso di manutenzione dei formati di biglietto resta dalla nostra parte."},
      {icon: '💳', title: 'Flusso di pagamento pulito', description: "Prenotazione, pagamento ed emissione del biglietto avvengono in sequenza strutturata con codici di errore chiari — facili da avvolgere nel tuo stack di retry e osservabilità."},
      {icon: '↩️', title: 'Rimborsi e cambi inclusi', description: "I flussi di cancellazione e modifica passano per la stessa API. Non c'è bisogno di indirizzare i tuoi agenti di supporto a cinque portali vettore diversi."},
      {icon: '📄', title: 'Biglietti PDF, pronti da inviare', description: "I biglietti vengono consegnati in PDF che la tua piattaforma può inviare via email, allegare a conferme, archiviare in un sistema documentale o renderizzare dentro il tuo prodotto."},
    ],
    code: {filename: 'booking-flow.sh', body: codeBody},
    faqs: [
      {q: 'In quale formato vengono consegnati i biglietti?', a: 'I biglietti vengono emessi in PDF. Puoi inviarli via email ai viaggiatori, allegarli alle email di conferma, archiviarli in un sistema documentale o renderizzarli direttamente dentro il tuo prodotto.'},
      {q: 'Come vengono gestiti i rimborsi?', a: "I flussi di rimborso passano per la stessa API. Eleggibilità, rimborso parziale vs totale e tempistiche seguono le regole tariffarie originali del vettore — esposti tramite campi API strutturati, non testo libero."},
      {q: 'I cambi sono supportati?', a: "Sì, quando il vettore li supporta. L'endpoint di cambio passa per la stessa superficie API della prenotazione originale — la tua piattaforma gestisce il flusso lato utente, Tictactrip gestisce la meccanica lato vettore."},
      {q: 'Cosa succede se un pagamento fallisce a metà prenotazione?', a: "L'endpoint di prenotazione restituisce codici di errore strutturati così la tua piattaforma può decidere se riprovare, ripiegare su un altro itinerario o mostrare l'errore all'utente. Niente prenotazioni parziali silenziose."},
    ],
    serviceType: 'API europea di prenotazione e biglietteria viaggio end-to-end',
    audienceType: 'Piattaforme di viaggio che richiedono una pipeline di prenotazione completa (ricerca, prenotazione, pagamento, biglietto, rimborso, cambio)',
  },
  pt: {
    breadcrumbCategory: 'Funcionalidades',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Porquê uma API para todo o fluxo de reserva',
    relatedHeading: 'Outras funcionalidades Tictactrip',
    eyebrow: 'Funcionalidade · Reserva ponto a ponto',
    title: 'Reserva ponto a ponto',
    metaTitle: 'API de reserva de viagem ponto a ponto — Pesquisar, reservar, pagar e emitir bilhetes através de uma API REST | Tictactrip',
    description: 'Pesquisar, reservar, pagar e emitir bilhetes através de uma única API REST. Os bilhetes são entregues em PDF, prontos a enviar por email ou integrar no seu produto.',
    metaDescription: 'API europeia de reserva de viagem ponto a ponto. Pesquisar, reservar, pagar e emitir bilhetes através de uma integração REST. Bilhetes entregues em PDF. Fluxos de reembolso e troca incluídos, em 250+ transportadoras europeias de comboio e autocarro.',
    keywords: 'API reserva viagem ponto a ponto, API bilhética comboio, API bilhética autocarro, API bilhete PDF, API fluxo reserva viagem, API reembolso e troca, API reserva Europa, Tictactrip reserva',
    heroTitle: <>Pesquisar, reservar, pagar, emitir —<br /><span style={{color: '#6ee7b7'}}>através de uma API REST</span></>,
    heroLead: 'A Tictactrip trata de toda a pipeline de reserva. Os bilhetes voltam em PDF, prontos a enviar por email aos viajantes ou a apresentar dentro do seu produto. Reembolsos e trocas passam pela mesma superfície.',
    intro: (
      <>
        <h2>A pipeline de reserva é a parte que ninguém quer reconstruir</h2>
        <p>A pesquisa é os 20 % fáceis de uma integração de viagem. Os outros 80 % são <strong>bloqueios de reserva, autorização de pagamento, emissão de bilhete específica da transportadora, retries, reembolsos, trocas e operações pós-venda</strong> — a infraestrutura pouco glamorosa que decide se o seu produto funciona em produção.</p>
        <p>A <strong>Tictactrip</strong> possui essa pipeline ponto a ponto. Chama uma API REST; nós executamos a sequência de reserva junto a cada transportadora, validamos o pagamento, emitimos o bilhete e devolvemo-lo como <strong>PDF</strong> que pode enviar por email aos viajantes ou integrar dentro da sua app.</p>
        <p>Os reembolsos e trocas passam pela mesma API. Sem portais de transportadora, sem reemissão manual, sem stacks paralelos de bilhética.</p>
      </>
    ),
    capabilities: [
      'Pesquisar → reservar → pagar → emitir através de uma API REST',
      'Entrega de bilhete PDF, pronto a enviar ou integrar',
      'Fluxos de reembolso através da mesma superfície API',
      'Fluxos de troca e modificação suportados',
      'Reconciliação do lado da transportadora tratada pela Tictactrip',
      'Formato de registo de reserva consistente entre operadores',
    ],
    benefits: [
      {icon: '🎫', title: 'Sem stack paralelo de bilhética', description: 'Integra um único fluxo de reserva em vez de lógica de emissão específica por transportadora. O peso de manutenção dos formatos de bilhete vive do nosso lado.'},
      {icon: '💳', title: 'Fluxo de pagamento limpo', description: 'Reserva, pagamento e emissão de bilhete acontecem numa sequência estruturada com códigos de erro claros — fáceis de envolver no seu próprio stack de retry e observabilidade.'},
      {icon: '↩️', title: 'Reembolsos e trocas incluídos', description: 'Os fluxos de cancelamento e modificação passam pela mesma API. Não precisa de apontar os seus agentes de suporte para cinco portais de transportadora diferentes.'},
      {icon: '📄', title: 'Bilhetes PDF, prontos a enviar', description: 'Os bilhetes são entregues em PDF que a sua plataforma pode enviar por email, anexar a confirmações, arquivar num sistema documental ou apresentar dentro do seu próprio produto.'},
    ],
    code: {filename: 'booking-flow.sh', body: codeBody},
    faqs: [
      {q: 'Em que formato são entregues os bilhetes?', a: 'Os bilhetes são emitidos em PDF. Pode enviá-los por email aos viajantes, anexá-los a emails de confirmação, arquivá-los num sistema documental ou apresentá-los diretamente dentro do seu próprio produto.'},
      {q: 'Como são tratados os reembolsos?', a: 'Os fluxos de reembolso passam pela mesma API. Elegibilidade, reembolso parcial vs total e timing seguem as regras tarifárias originais da transportadora — apresentados em campos API estruturados, não texto livre.'},
      {q: 'As trocas são suportadas?', a: 'Sim, quando a transportadora as suporta. O endpoint de troca passa pela mesma superfície API da reserva original — a sua plataforma trata do fluxo do lado do utilizador, a Tictactrip trata da mecânica do lado da transportadora.'},
      {q: 'O que acontece se um pagamento falhar a meio da reserva?', a: 'O endpoint de reserva devolve códigos de erro estruturados para que a sua plataforma possa decidir se tenta novamente, recorre a outro itinerário ou mostra a falha ao utilizador. Sem reservas parciais silenciosas.'},
    ],
    serviceType: 'API europeia de reserva e bilhética de viagem ponto a ponto',
    audienceType: 'Plataformas de viagem que requerem uma pipeline de reserva completa (pesquisa, reserva, pagamento, bilhete, reembolso, troca)',
  },
  ru: {
    breadcrumbCategory: 'Возможности',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Почему один API для всего процесса бронирования',
    relatedHeading: 'Другие возможности Tictactrip',
    eyebrow: 'Возможность · Сквозное бронирование',
    title: 'Сквозное бронирование',
    metaTitle: 'API сквозного бронирования путешествий — Поиск, бронирование, оплата и выпуск билетов через один REST API | Tictactrip',
    description: 'Поиск, бронирование, оплата и выпуск билетов через единый REST API. Билеты доставляются в формате PDF, готовые к отправке по email или встраиванию в ваш продукт.',
    metaDescription: 'Сквозной API бронирования европейских путешествий. Поиск, бронирование, оплата и выпуск билетов через одну REST-интеграцию. Билеты в формате PDF. Процессы возврата и обмена включены, через 250+ европейских железнодорожных и автобусных перевозчиков.',
    keywords: 'API сквозного бронирования путешествий, API билетов на поезд, API билетов на автобус, API PDF-билетов, API процесса бронирования путешествий, API возврата и обмена, API бронирования по Европе, Tictactrip бронирование',
    heroTitle: <>Поиск, бронирование, оплата, билет —<br /><span style={{color: '#6ee7b7'}}>через один REST API</span></>,
    heroLead: 'Tictactrip берёт на себя весь конвейер бронирования. Билеты возвращаются в формате PDF, готовые к отправке путешественникам по email или к отображению внутри вашего продукта. Возвраты и обмены проходят через ту же поверхность.',
    intro: (
      <>
        <h2>Конвейер бронирования — это часть, которую никто не хочет переделывать</h2>
        <p>Поиск — это лёгкие 20 % интеграции путешествий. Остальные 80 % — это <strong>замки резервирования, авторизация платежей, выпуск билетов под каждого перевозчика, повторные попытки, возвраты, обмены и пост-продажные операции</strong> — нелаковая инфраструктура, которая решает, работает ли ваш продукт в продакшне.</p>
        <p><strong>Tictactrip</strong> владеет этим конвейером от начала до конца. Вы обращаетесь к одному REST API; мы выполняем последовательность бронирования у каждого перевозчика, валидируем оплату, выпускаем билет и возвращаем его в виде <strong>PDF</strong>, который вы можете отправить путешественникам по email или встроить в собственное приложение.</p>
        <p>Возвраты и обмены проходят через тот же API. Никаких порталов перевозчиков, никакой ручной переэмиссии, никаких параллельных стэков билетов.</p>
      </>
    ),
    capabilities: [
      'Поиск → бронирование → оплата → билет через один REST API',
      'Доставка билета в PDF, готового к отправке или встраиванию',
      'Процессы возврата через ту же поверхность API',
      'Поддержка процессов обмена и изменения',
      'Сверка со стороны перевозчика берёт на себя Tictactrip',
      'Единый формат записи бронирования между операторами',
    ],
    benefits: [
      {icon: '🎫', title: 'Нет параллельного стэка билетов', description: 'Вы интегрируете один поток бронирования вместо логики выпуска билетов под каждого перевозчика. Бремя поддержки форматов билетов остаётся на нашей стороне.'},
      {icon: '💳', title: 'Чистый платёжный поток', description: 'Бронирование, оплата и выпуск билета происходят в структурированной последовательности с понятными кодами ошибок — легко обернуть в собственные системы повторных попыток и наблюдаемости.'},
      {icon: '↩️', title: 'Возвраты и обмены включены', description: 'Процессы отмены и изменения проходят через тот же API. Не нужно направлять агентов поддержки к пяти разным порталам перевозчиков.'},
      {icon: '📄', title: 'PDF-билеты, готовые к отправке', description: 'Билеты доставляются в PDF, который ваша платформа может отправить по email, прикрепить к подтверждениям, сохранить в системе документов или отобразить внутри собственного продукта.'},
    ],
    code: {filename: 'booking-flow.sh', body: codeBody},
    faqs: [
      {q: 'В каком формате доставляются билеты?', a: 'Билеты выпускаются в PDF. Вы можете отправлять их путешественникам по email, прикреплять к письмам подтверждения, архивировать в системе документов или отображать прямо внутри собственного продукта.'},
      {q: 'Как обрабатываются возвраты?', a: 'Процессы возврата проходят через тот же API. Право на возврат, частичный или полный возврат и сроки следуют исходным тарифным правилам перевозчика — отображаются через структурированные поля API, а не в виде свободного текста.'},
      {q: 'Поддерживаются ли обмены?', a: 'Да, там, где их поддерживает перевозчик. Эндпоинт обмена проходит через ту же поверхность API, что и исходное бронирование — ваша платформа управляет потоком со стороны пользователя, Tictactrip — механикой со стороны перевозчика.'},
      {q: 'Что произойдёт, если оплата не пройдёт в середине бронирования?', a: 'Эндпоинт бронирования возвращает структурированные коды ошибок, чтобы ваша платформа могла решить: повторить попытку, переключиться на другой маршрут или показать ошибку пользователю. Никаких скрытых частичных бронирований.'},
    ],
    serviceType: 'Сквозной API европейских путешествий и выдачи билетов',
    audienceType: 'Платформы путешествий, которым нужен полный конвейер бронирования (поиск, бронирование, оплата, билет, возврат, обмен)',
  },
};
