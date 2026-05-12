import React from 'react';
import type {Translations} from '../../useTranslation';
import type {SolutionPageProps} from '../../../components/SolutionPage';

type SolutionPageContent = Omit<SolutionPageProps, 'slug' | 'related'>;

const codeBody = `# OTA search: Paris → Rome, multimodal
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRpari____@u09tu",
    "destinationGpuid": "c|ITrome____@sr2yk",
    "outboundDate":     "2026-06-12T00:00:00Z",
    "passengers":       [{"age": 32}, {"age": 30}]
  }'`;

export const ota: Translations<SolutionPageContent> = {
  en: {
    eyebrow: 'Solution · OTAs',
    title: 'Online Travel Agencies',
    metaTitle: 'Train & bus API for Online Travel Agencies (OTAs) — Tictactrip',
    description: 'Add European rail and intercity bus inventory to your OTA in weeks. One REST API to search, compare and book 250+ carriers.',
    metaDescription: 'European train and bus API for Online Travel Agencies. Add SNCF, Trenitalia, FlixBus, Renfe and 250+ carriers to your OTA through one REST integration with end-to-end booking, ticketing and CO₂ data.',
    keywords: 'OTA train API, OTA bus API, online travel agency rail API, European travel inventory, OTA multimodal API, OTA ticketing API, Tictactrip OTA',
    heroTitle: <>European train &amp; bus inventory<br />for <span style={{color: '#6ee7b7'}}>Online Travel Agencies</span></>,
    heroLead: 'Plug 250+ rail and intercity bus carriers into your OTA stack. One REST API replaces dozens of carrier contracts, GDS workarounds and ticketing pipelines.',
    intro: (
      <>
        <h2>Sell European ground transport without becoming a transport company</h2>
        <p>Online Travel Agencies already sell flights and hotels. Adding <strong>European trains and intercity buses</strong> is the next high-margin layer — but each carrier has its own contract, distribution system, fare rules and ticket format.</p>
        <p><strong>Tictactrip</strong> consolidates this fragmented landscape into a single REST API. You integrate once and sell <strong>SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo</strong> and hundreds more — including multi-leg itineraries our routing engine assembles automatically when no direct journey exists.</p>
      </>
    ),
    capabilities: [
      '250+ carriers — SNCF, Trenitalia, FlixBus, Renfe and more',
      'Multi-leg itineraries assembled automatically',
      'Real-time pricing and seat availability',
      'PDF ticket delivery, ready to email or embed in your product',
      'CO₂ emissions per passenger for green filters',
      'Refund and exchange workflows handled by Tictactrip',
    ],
    benefits: [
      {icon: '🌍', title: 'One integration, hundreds of carriers', description: 'Skip the long tail of carrier integrations, GDS gaps and ticket-printer specifications. Tictactrip handles distribution agreements and operates the booking pipeline.'},
      {icon: '🔁', title: 'Multi-operator combinations', description: 'Our routing engine combines train + bus legs from different operators into a single itinerary when there is no direct connection — a product feature your competitors cannot ship alone.'},
      {icon: '🎫', title: 'End-to-end ticketing', description: 'Search, reserve, pay and deliver tickets through one API. Tickets come back as PDFs ready to email or embed inside your OTA app.'},
      {icon: '💸', title: 'Margin you control', description: 'Apply your own markup, bundling or cross-sell logic on top of net fares. Tictactrip is invisible to your end users — your brand remains the point of sale.'},
    ],
    code: {filename: 'ota-search.sh', body: codeBody},
    faqs: [
      {q: 'Which carriers can I sell through the OTA integration?', a: 'The Tictactrip API exposes 250+ European rail and intercity bus operators including SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo and many regional carriers across France, Italy, Spain, Germany and the Benelux.'},
      {q: 'How long does an OTA integration take?', a: 'Most OTAs go live in 2 to 6 weeks. We provide an OpenAPI specification, a Postman collection and a step-by-step tutorial so your engineering team can prototype on day one.'},
      {q: 'Do you handle ticket delivery and after-sales operations?', a: 'Yes. Tickets are issued as PDFs, ready to email to travellers or embed inside your OTA app. Refunds and exchanges are processed through the same API.'},
      {q: 'How is pricing structured for OTAs?', a: 'Pricing depends on volume and carrier mix. Contact sales@tictactrip.eu to discuss your traffic profile and receive a commercial proposal.'},
    ],
    serviceType: 'European rail and bus distribution API for Online Travel Agencies',
    audienceType: 'Online Travel Agencies (OTAs)',
  },
  fr: {
    eyebrow: 'Solution · OTAs',
    title: 'Agences de voyage en ligne',
    metaTitle: 'API trains & bus pour Agences de voyage en ligne (OTA) — Tictactrip',
    description: "Ajoutez l'inventaire ferroviaire et de bus interurbain européen à votre OTA en semaines. Une API REST pour rechercher, comparer et réserver 250+ transporteurs.",
    metaDescription: "API trains et bus européens pour Agences de voyage en ligne. Ajoutez SNCF, Trenitalia, FlixBus, Renfe et 250+ transporteurs à votre OTA via une seule intégration REST avec réservation de bout en bout, billetterie et données CO₂.",
    keywords: 'API train OTA, API bus OTA, API rail agence voyage en ligne, inventaire voyage Europe, API multimodale OTA, API billetterie OTA, Tictactrip OTA',
    heroTitle: <>Inventaire trains &amp; bus européens<br />pour les <span style={{color: '#6ee7b7'}}>Agences de voyage en ligne</span></>,
    heroLead: "Connectez 250+ transporteurs ferroviaires et de bus interurbains à votre stack OTA. Une seule API REST remplace des dizaines de contrats transporteurs, contournements GDS et pipelines de billetterie.",
    intro: (
      <>
        <h2>Vendez le transport terrestre européen sans devenir une société de transport</h2>
        <p>Les agences de voyage en ligne vendent déjà des vols et des hôtels. Ajouter <strong>les trains et bus interurbains européens</strong> est la prochaine couche à forte marge — mais chaque transporteur a son propre contrat, son système de distribution, ses règles tarifaires et son format de billet.</p>
        <p><strong>Tictactrip</strong> consolide ce paysage fragmenté en une seule API REST. Vous intégrez une fois et vendez <strong>SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo</strong> et des centaines d'autres — y compris des itinéraires multi-segments assemblés automatiquement par notre moteur quand aucun trajet direct n'existe.</p>
      </>
    ),
    capabilities: [
      '250+ transporteurs — SNCF, Trenitalia, FlixBus, Renfe et plus',
      "Itinéraires multi-segments assemblés automatiquement",
      "Tarification et disponibilité des sièges en temps réel",
      "Livraison de billet PDF, prête à être envoyée ou intégrée dans votre produit",
      "Émissions de CO₂ par passager pour des filtres verts",
      "Flux de remboursement et d'échange gérés par Tictactrip",
    ],
    benefits: [
      {icon: '🌍', title: 'Une intégration, des centaines de transporteurs', description: "Évitez la longue traîne des intégrations transporteur, les lacunes GDS et les spécifications d'imprimantes de billets. Tictactrip gère les accords de distribution et opère la chaîne de réservation."},
      {icon: '🔁', title: 'Combinaisons multi-opérateurs', description: "Notre moteur de routage combine des segments train + bus de différents opérateurs en un seul itinéraire quand il n'y a pas de liaison directe — une fonctionnalité produit que vos concurrents ne peuvent pas livrer seuls."},
      {icon: '🎫', title: 'Billetterie de bout en bout', description: "Rechercher, réserver, payer et livrer les billets via une seule API. Les billets reviennent en PDF, prêts à être envoyés par e-mail ou intégrés dans votre application OTA."},
      {icon: '💸', title: 'Marge que vous contrôlez', description: "Appliquez votre propre markup, bundling ou logique de cross-sell sur les tarifs net. Tictactrip est invisible pour vos utilisateurs finaux — votre marque reste le point de vente."},
    ],
    code: {filename: 'ota-search.sh', body: codeBody},
    faqs: [
      {q: "Quels transporteurs puis-je vendre via l'intégration OTA ?", a: "L'API Tictactrip expose 250+ opérateurs ferroviaires et de bus interurbains européens dont SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo et de nombreux transporteurs régionaux en France, Italie, Espagne, Allemagne et Benelux."},
      {q: "Combien de temps prend une intégration OTA ?", a: "La plupart des OTAs sont en production en 2 à 6 semaines. Nous fournissons une spécification OpenAPI, une collection Postman et un tutoriel pas à pas pour que votre équipe d'ingénierie puisse prototyper dès le premier jour."},
      {q: "Gérez-vous la livraison de billets et les opérations après-vente ?", a: "Oui. Les billets sont émis en PDF, prêts à être envoyés aux voyageurs par e-mail ou intégrés dans votre application OTA. Les remboursements et échanges sont traités via la même API."},
      {q: "Comment la tarification est-elle structurée pour les OTAs ?", a: "Le tarif dépend du volume et du mix transporteurs. Contactez sales@tictactrip.eu pour discuter de votre profil de trafic et recevoir une proposition commerciale."},
    ],
    serviceType: "API de distribution rail et bus européens pour Agences de voyage en ligne",
    audienceType: "Agences de voyage en ligne (OTAs)",
  },
  de: {
    eyebrow: 'Lösung · OTAs',
    title: 'Online-Reisebüros',
    metaTitle: 'Zug- und Bus-API für Online-Reisebüros (OTAs) — Tictactrip',
    description: 'Erweitern Sie Ihr OTA in Wochen um europäisches Bahn- und Fernbus-Inventar. Eine REST-API zum Suchen, Vergleichen und Buchen von 250+ Transporteuren.',
    metaDescription: 'Europäische Zug- und Bus-API für Online-Reisebüros. Ergänzen Sie Ihr OTA über eine REST-Integration um SNCF, Trenitalia, FlixBus, Renfe und 250+ Transporteure — mit End-to-End-Buchung, Ticketierung und CO₂-Daten.',
    keywords: 'OTA-Zug-API, OTA-Bus-API, Online-Reisebüro-Bahn-API, europäisches Reise-Inventar, OTA-Multimodal-API, OTA-Ticketing-API, Tictactrip OTA',
    heroTitle: <>Europäisches Zug- &amp; Bus-Inventar<br />für <span style={{color: '#6ee7b7'}}>Online-Reisebüros</span></>,
    heroLead: 'Stecken Sie 250+ Bahn- und Fernbus-Transporteure in Ihren OTA-Stack. Eine REST-API ersetzt Dutzende Transporteur-Verträge, GDS-Umgehungen und Ticketing-Pipelines.',
    intro: (
      <>
        <h2>Verkaufen Sie europäischen Bodentransport, ohne ein Transport-Unternehmen zu werden</h2>
        <p>Online-Reisebüros verkaufen bereits Flüge und Hotels. <strong>Europäische Züge und Fernbusse</strong> hinzuzufügen, ist die nächste margenstarke Schicht — aber jeder Transporteur hat seinen eigenen Vertrag, sein eigenes Vertriebssystem, seine eigenen Tarifregeln und sein eigenes Ticketformat.</p>
        <p><strong>Tictactrip</strong> verdichtet diese fragmentierte Landschaft in eine REST-API. Sie integrieren einmal und verkaufen <strong>SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo</strong> und Hunderte mehr — einschließlich mehrteiliger Verbindungen, die unsere Routing-Engine automatisch zusammensetzt, wenn keine direkte Reise existiert.</p>
      </>
    ),
    capabilities: [
      '250+ Transporteure — SNCF, Trenitalia, FlixBus, Renfe und mehr',
      'Mehrteilige Verbindungen automatisch zusammengebaut',
      'Echtzeit-Preise und Sitzplatzverfügbarkeit',
      'PDF-Ticket-Lieferung, bereit zum Senden oder Einbetten',
      'CO₂-Emissionen pro Passagier für grüne Filter',
      'Erstattungs- und Umtausch-Workflows von Tictactrip übernommen',
    ],
    benefits: [
      {icon: '🌍', title: 'Eine Integration, Hunderte Transporteure', description: 'Sparen Sie sich den Long-Tail aus Transporteur-Integrationen, GDS-Lücken und Ticketdrucker-Spezifikationen. Tictactrip übernimmt Vertriebsvereinbarungen und betreibt die Buchungs-Pipeline.'},
      {icon: '🔁', title: 'Mehr-Operator-Kombinationen', description: 'Unsere Routing-Engine kombiniert Zug- und Bus-Teilstrecken verschiedener Operatoren zu einer einzigen Verbindung, wenn es keine direkte gibt — ein Produkt-Feature, das Ihre Konkurrenten alleine nicht liefern können.'},
      {icon: '🎫', title: 'End-to-End-Ticketierung', description: 'Suchen, reservieren, bezahlen und Tickets ausliefern über eine API. Tickets kommen als PDFs zurück, bereit zum Versand per E-Mail oder zur Einbettung in Ihre OTA-App.'},
      {icon: '💸', title: 'Marge, die Sie kontrollieren', description: 'Wenden Sie Ihren eigenen Aufschlag, Bundling oder Cross-Sell auf Netto-Tarife an. Tictactrip ist für Ihre Endnutzer unsichtbar — Ihre Marke bleibt der Verkaufspunkt.'},
    ],
    code: {filename: 'ota-search.sh', body: codeBody},
    faqs: [
      {q: 'Welche Transporteure kann ich über die OTA-Integration verkaufen?', a: 'Die Tictactrip API stellt 250+ europäische Bahn- und Fernbus-Betreiber bereit, darunter SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo und viele regionale Anbieter in Frankreich, Italien, Spanien, Deutschland und Benelux.'},
      {q: 'Wie lange dauert eine OTA-Integration?', a: 'Die meisten OTAs gehen in 2 bis 6 Wochen live. Wir liefern eine OpenAPI-Spezifikation, eine Postman-Sammlung und ein Schritt-für-Schritt-Tutorial, damit Ihr Engineering-Team ab Tag eins prototypisieren kann.'},
      {q: 'Übernehmen Sie Ticketauslieferung und After-Sales?', a: 'Ja. Tickets werden als PDFs ausgestellt, bereit für den Versand an Reisende per E-Mail oder zur Einbettung in Ihre OTA-App. Erstattungen und Umtausch werden über dieselbe API abgewickelt.'},
      {q: 'Wie wird die Bepreisung für OTAs strukturiert?', a: 'Der Preis hängt vom Volumen und dem Transporteur-Mix ab. Kontaktieren Sie sales@tictactrip.eu, um Ihr Traffic-Profil zu besprechen und ein kaufmännisches Angebot zu erhalten.'},
    ],
    serviceType: 'API für europäische Bahn- und Bus-Distribution für Online-Reisebüros',
    audienceType: 'Online-Reisebüros (OTAs)',
  },
  es: {
    eyebrow: 'Solución · OTAs',
    title: 'Agencias de viajes online',
    metaTitle: 'API de tren y autobús para Agencias de viajes online (OTAs) — Tictactrip',
    description: 'Añade inventario europeo de tren y autobús interurbano a tu OTA en semanas. Una API REST para buscar, comparar y reservar 250+ operadores.',
    metaDescription: 'API europea de tren y autobús para Agencias de viajes online. Añade SNCF, Trenitalia, FlixBus, Renfe y 250+ operadores a tu OTA mediante una integración REST con reserva extremo a extremo, billetería y datos de CO₂.',
    keywords: 'API tren OTA, API autobús OTA, API ferroviaria agencia viajes online, inventario viaje Europa, API multimodal OTA, API billetería OTA, Tictactrip OTA',
    heroTitle: <>Inventario europeo de tren &amp; autobús<br />para <span style={{color: '#6ee7b7'}}>Agencias de viajes online</span></>,
    heroLead: 'Conecta 250+ operadores de tren y autobús interurbano a tu stack OTA. Una API REST sustituye decenas de contratos de operador, parches de GDS y pipelines de billetería.',
    intro: (
      <>
        <h2>Vende transporte terrestre europeo sin convertirte en una empresa de transporte</h2>
        <p>Las agencias de viajes online ya venden vuelos y hoteles. Añadir <strong>trenes y autobuses interurbanos europeos</strong> es la siguiente capa de alto margen — pero cada operador tiene su propio contrato, sistema de distribución, reglas tarifarias y formato de billete.</p>
        <p><strong>Tictactrip</strong> consolida ese paisaje fragmentado en una sola API REST. Te integras una vez y vendes <strong>SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo</strong> y cientos más — incluyendo itinerarios multi-tramo que nuestro motor de enrutamiento ensambla automáticamente cuando no existe viaje directo.</p>
      </>
    ),
    capabilities: [
      '250+ operadores — SNCF, Trenitalia, FlixBus, Renfe y más',
      'Itinerarios multi-tramo ensamblados automáticamente',
      'Precios y disponibilidad de plazas en tiempo real',
      'Entrega de billete PDF, listo para enviar o integrar en tu producto',
      'Emisiones de CO₂ por pasajero para filtros verdes',
      'Flujos de reembolso y cambio gestionados por Tictactrip',
    ],
    benefits: [
      {icon: '🌍', title: 'Una integración, cientos de operadores', description: 'Sáltate la cola larga de integraciones operador a operador, las brechas de GDS y las especificaciones de impresora de billetes. Tictactrip gestiona los acuerdos de distribución y opera la cadena de reserva.'},
      {icon: '🔁', title: 'Combinaciones multi-operador', description: 'Nuestro motor de enrutamiento combina tramos de tren + autobús de distintos operadores en un único itinerario cuando no hay conexión directa — una función de producto que tus competidores no pueden entregar solos.'},
      {icon: '🎫', title: 'Billetería extremo a extremo', description: 'Buscar, reservar, pagar y entregar billetes a través de una API. Los billetes vuelven en PDF listos para enviar por correo o integrar dentro de tu app OTA.'},
      {icon: '💸', title: 'Margen que tú controlas', description: 'Aplica tu propio markup, bundling o lógica de cross-sell sobre las tarifas netas. Tictactrip es invisible para tus usuarios — tu marca sigue siendo el punto de venta.'},
    ],
    code: {filename: 'ota-search.sh', body: codeBody},
    faqs: [
      {q: '¿Qué operadores puedo vender mediante la integración OTA?', a: 'La API Tictactrip expone 250+ operadores ferroviarios y de autobús interurbano europeos, incluidos SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo y muchos operadores regionales en Francia, Italia, España, Alemania y Benelux.'},
      {q: '¿Cuánto tarda una integración OTA?', a: 'La mayoría de OTAs entra en producción en 2 a 6 semanas. Proporcionamos una especificación OpenAPI, una colección Postman y un tutorial paso a paso para que tu equipo de ingeniería pueda prototipar el primer día.'},
      {q: '¿Gestionáis entrega de billetes y postventa?', a: 'Sí. Los billetes se emiten en PDF, listos para enviar por correo a los viajeros o integrar dentro de tu app OTA. Los reembolsos y cambios se procesan a través de la misma API.'},
      {q: '¿Cómo se estructura el precio para OTAs?', a: 'El precio depende del volumen y del mix de operadores. Contacta con sales@tictactrip.eu para discutir tu perfil de tráfico y recibir una propuesta comercial.'},
    ],
    serviceType: 'API de distribución ferroviaria y de autobús europeos para Agencias de viajes online',
    audienceType: 'Agencias de viajes online (OTAs)',
  },
  it: {
    eyebrow: 'Soluzione · OTA',
    title: 'Agenzie di viaggio online',
    metaTitle: 'API treno e autobus per Agenzie di viaggio online (OTA) — Tictactrip',
    description: "Aggiungi inventario europeo di treni e autobus interurbani al tuo OTA in settimane. Un'API REST per cercare, confrontare e prenotare 250+ vettori.",
    metaDescription: "API europea di treni e autobus per Agenzie di viaggio online. Aggiungi SNCF, Trenitalia, FlixBus, Renfe e 250+ vettori al tuo OTA tramite un'integrazione REST con prenotazione end-to-end, biglietteria e dati CO₂.",
    keywords: 'API treno OTA, API autobus OTA, API ferroviaria agenzia viaggio online, inventario viaggio Europa, API multimodale OTA, API biglietteria OTA, Tictactrip OTA',
    heroTitle: <>Inventario europeo treno &amp; autobus<br />per le <span style={{color: '#6ee7b7'}}>Agenzie di viaggio online</span></>,
    heroLead: "Collega 250+ vettori ferroviari e di autobus interurbani al tuo stack OTA. Un'API REST sostituisce decine di contratti vettore, workaround GDS e pipeline di biglietteria.",
    intro: (
      <>
        <h2>Vendi trasporto terrestre europeo senza diventare una compagnia di trasporti</h2>
        <p>Le agenzie di viaggio online vendono già voli e hotel. Aggiungere <strong>treni e autobus interurbani europei</strong> è il prossimo strato ad alto margine — ma ogni vettore ha il suo contratto, sistema di distribuzione, regole tariffarie e formato del biglietto.</p>
        <p><strong>Tictactrip</strong> consolida questo panorama frammentato in una singola API REST. Ti integri una volta sola e vendi <strong>SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo</strong> e centinaia di altri — compresi itinerari multi-tratta che il nostro motore di routing assembla automaticamente quando non esiste un viaggio diretto.</p>
      </>
    ),
    capabilities: [
      '250+ vettori — SNCF, Trenitalia, FlixBus, Renfe e altri',
      'Itinerari multi-tratta assemblati automaticamente',
      'Prezzi e disponibilità di posti in tempo reale',
      'Consegna biglietto PDF, pronto per essere inviato o integrato nel tuo prodotto',
      'Emissioni di CO₂ per passeggero per filtri verdi',
      'Flussi di rimborso e cambio gestiti da Tictactrip',
    ],
    benefits: [
      {icon: '🌍', title: "Un'integrazione, centinaia di vettori", description: "Salta la coda lunga di integrazioni vettore, gap GDS e specifiche di stampanti di biglietti. Tictactrip gestisce gli accordi di distribuzione e opera la pipeline di prenotazione."},
      {icon: '🔁', title: 'Combinazioni multi-operatore', description: "Il nostro motore di routing combina tratte treno + autobus di operatori diversi in un unico itinerario quando non c'è una connessione diretta — una funzionalità di prodotto che i tuoi concorrenti non possono spedire da soli."},
      {icon: '🎫', title: 'Biglietteria end-to-end', description: "Cerca, prenota, paga e consegna biglietti tramite una sola API. I biglietti tornano in PDF pronti per essere inviati via email o integrati nella tua app OTA."},
      {icon: '💸', title: 'Margine che controlli tu', description: "Applica il tuo markup, bundling o logica di cross-sell sulle tariffe nette. Tictactrip è invisibile ai tuoi utenti finali — il tuo brand resta il punto vendita."},
    ],
    code: {filename: 'ota-search.sh', body: codeBody},
    faqs: [
      {q: "Quali vettori posso vendere tramite l'integrazione OTA?", a: "L'API Tictactrip espone 250+ operatori ferroviari e di autobus interurbani europei fra cui SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo e molti vettori regionali in Francia, Italia, Spagna, Germania e Benelux."},
      {q: "Quanto dura un'integrazione OTA?", a: "La maggior parte degli OTA va in produzione in 2-6 settimane. Forniamo una specifica OpenAPI, una raccolta Postman e un tutorial passo passo così il tuo team di ingegneria può prototipare già dal primo giorno."},
      {q: 'Gestite consegna dei biglietti e post-vendita?', a: "Sì. I biglietti sono emessi in PDF, pronti per essere inviati ai viaggiatori via email o integrati nella tua app OTA. Rimborsi e cambi sono gestiti tramite la stessa API."},
      {q: "Com'è strutturata la tariffazione per gli OTA?", a: "Il prezzo dipende dal volume e dal mix di vettori. Contatta sales@tictactrip.eu per discutere il tuo profilo di traffico e ricevere una proposta commerciale."},
    ],
    serviceType: 'API di distribuzione rail e bus europei per Agenzie di viaggio online',
    audienceType: 'Agenzie di viaggio online (OTA)',
  },
  pt: {
    eyebrow: 'Solução · OTAs',
    title: 'Agências de viagens online',
    metaTitle: 'API de comboio e autocarro para Agências de viagens online (OTAs) — Tictactrip',
    description: 'Adicione inventário europeu de comboio e autocarro interurbano à sua OTA em semanas. Uma API REST para procurar, comparar e reservar 250+ transportadoras.',
    metaDescription: 'API europeia de comboio e autocarro para Agências de viagens online. Adicione SNCF, Trenitalia, FlixBus, Renfe e 250+ transportadoras à sua OTA através de uma integração REST com reserva ponto a ponto, bilhética e dados de CO₂.',
    keywords: 'API comboio OTA, API autocarro OTA, API ferroviária agência viagens online, inventário viagem Europa, API multimodal OTA, API bilhética OTA, Tictactrip OTA',
    heroTitle: <>Inventário europeu de comboio &amp; autocarro<br />para <span style={{color: '#6ee7b7'}}>Agências de viagens online</span></>,
    heroLead: 'Ligue 250+ transportadoras de comboio e autocarro interurbano ao stack da sua OTA. Uma API REST substitui dezenas de contratos com transportadoras, soluções de contorno GDS e pipelines de bilhética.',
    intro: (
      <>
        <h2>Venda transporte terrestre europeu sem se tornar uma empresa de transportes</h2>
        <p>As agências de viagens online já vendem voos e hotéis. Adicionar <strong>comboios e autocarros interurbanos europeus</strong> é a próxima camada de alta margem — mas cada transportadora tem o seu contrato, sistema de distribuição, regras tarifárias e formato de bilhete.</p>
        <p>A <strong>Tictactrip</strong> consolida esse cenário fragmentado numa única API REST. Integra-se uma vez e vende <strong>SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo</strong> e centenas de outras — incluindo itinerários multi-troço que o nosso motor de roteamento monta automaticamente quando não existe um percurso direto.</p>
      </>
    ),
    capabilities: [
      '250+ transportadoras — SNCF, Trenitalia, FlixBus, Renfe e mais',
      'Itinerários multi-troço montados automaticamente',
      'Preços e disponibilidade de lugares em tempo real',
      'Entrega de bilhete PDF, pronto a enviar ou integrar no seu produto',
      'Emissões de CO₂ por passageiro para filtros verdes',
      'Fluxos de reembolso e troca tratados pela Tictactrip',
    ],
    benefits: [
      {icon: '🌍', title: 'Uma integração, centenas de transportadoras', description: 'Salte a longa cauda de integrações por transportadora, lacunas GDS e especificações de impressoras de bilhete. A Tictactrip trata dos acordos de distribuição e opera a pipeline de reserva.'},
      {icon: '🔁', title: 'Combinações multi-operador', description: 'O nosso motor de roteamento combina troços comboio + autocarro de operadores diferentes num único itinerário quando não há ligação direta — uma funcionalidade de produto que os seus concorrentes não conseguem entregar sozinhos.'},
      {icon: '🎫', title: 'Bilhética ponto a ponto', description: 'Pesquise, reserve, pague e entregue bilhetes através de uma API. Os bilhetes voltam em PDF prontos a enviar por email ou a integrar dentro da sua app OTA.'},
      {icon: '💸', title: 'Margem que controla', description: 'Aplique o seu próprio markup, bundling ou lógica de cross-sell sobre as tarifas líquidas. A Tictactrip é invisível para os seus utilizadores finais — a sua marca continua a ser o ponto de venda.'},
    ],
    code: {filename: 'ota-search.sh', body: codeBody},
    faqs: [
      {q: 'Que transportadoras posso vender através da integração OTA?', a: 'A API Tictactrip expõe 250+ operadores ferroviários e de autocarro interurbano europeus, incluindo SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo e muitas transportadoras regionais em França, Itália, Espanha, Alemanha e Benelux.'},
      {q: 'Quanto tempo demora uma integração OTA?', a: 'A maioria das OTAs entra em produção em 2 a 6 semanas. Fornecemos uma especificação OpenAPI, uma coleção Postman e um tutorial passo a passo para que a sua equipa de engenharia possa fazer protótipo no primeiro dia.'},
      {q: 'Tratam da entrega de bilhetes e do pós-venda?', a: 'Sim. Os bilhetes são emitidos em PDF, prontos para enviar por email aos viajantes ou integrar dentro da sua app OTA. Reembolsos e trocas são processados através da mesma API.'},
      {q: 'Como é estruturada a tarifação para OTAs?', a: 'O preço depende do volume e da mistura de transportadoras. Contacte sales@tictactrip.eu para discutir o seu perfil de tráfego e receber uma proposta comercial.'},
    ],
    serviceType: 'API de distribuição ferroviária e de autocarro europeia para Agências de viagens online',
    audienceType: 'Agências de viagens online (OTAs)',
  },
  ru: {
    eyebrow: 'Решение · OTA',
    title: 'Онлайн-турагентства',
    metaTitle: 'API поездов и автобусов для онлайн-турагентств (OTA) — Tictactrip',
    description: 'Добавьте европейский железнодорожный и междугородный автобусный инвентарь в вашу OTA за недели. Единый REST API для поиска, сравнения и бронирования 250+ перевозчиков.',
    metaDescription: 'Европейский API поездов и автобусов для онлайн-турагентств. Подключите SNCF, Trenitalia, FlixBus, Renfe и 250+ перевозчиков к вашей OTA через единую REST-интеграцию со сквозным бронированием, билетами и данными CO₂.',
    keywords: 'API поездов OTA, API автобусов OTA, API железной дороги онлайн-турагентств, инвентарь путешествий Европы, мультимодальный API OTA, API билетов OTA, Tictactrip OTA',
    heroTitle: <>Европейский инвентарь поездов и автобусов<br />для <span style={{color: '#6ee7b7'}}>онлайн-турагентств</span></>,
    heroLead: 'Подключите 250+ железнодорожных и междугородных автобусных перевозчиков к стэку вашей OTA. Один REST API заменяет десятки контрактов с перевозчиками, обходных решений GDS и пайплайнов выдачи билетов.',
    intro: (
      <>
        <h2>Продавайте европейский наземный транспорт, не становясь транспортной компанией</h2>
        <p>Онлайн-турагентства уже продают авиабилеты и отели. Добавление <strong>европейских поездов и междугородных автобусов</strong> — это следующий высокомаржинальный слой, но у каждого перевозчика свой контракт, дистрибутивная система, тарифные правила и формат билета.</p>
        <p><strong>Tictactrip</strong> сжимает этот фрагментированный ландшафт в единый REST API. Вы интегрируетесь один раз и продаёте <strong>SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo</strong> и сотни других — включая многосегментные маршруты, которые наш маршрутизатор собирает автоматически, когда прямого рейса нет.</p>
      </>
    ),
    capabilities: [
      '250+ перевозчиков — SNCF, Trenitalia, FlixBus, Renfe и другие',
      'Многосегментные маршруты, собранные автоматически',
      'Цены и доступность мест в реальном времени',
      'Доставка PDF-билета, готового к отправке или встраиванию',
      'Выбросы CO₂ на пассажира для зелёных фильтров',
      'Возвраты и обмены обрабатываются Tictactrip',
    ],
    benefits: [
      {icon: '🌍', title: 'Одна интеграция, сотни перевозчиков', description: 'Пропустите длинный хвост интеграций по каждому перевозчику, пробелы GDS и спецификации принтеров билетов. Tictactrip ведёт договорённости по дистрибуции и эксплуатирует конвейер бронирования.'},
      {icon: '🔁', title: 'Мульти-операторские комбинации', description: 'Наш маршрутизатор объединяет сегменты поезда и автобуса разных операторов в единый маршрут, когда прямого соединения нет — продуктовая возможность, которую ваши конкуренты не могут реализовать в одиночку.'},
      {icon: '🎫', title: 'Сквозная выдача билетов', description: 'Поиск, бронирование, оплата и выдача билетов через один API. Билеты возвращаются в PDF, готовые к отправке по email или встраиванию внутри вашего OTA-приложения.'},
      {icon: '💸', title: 'Маржа, которой управляете вы', description: 'Применяйте собственную наценку, бандлинг или логику кросс-продаж поверх нетто-тарифов. Tictactrip невидим для ваших конечных пользователей — точка продажи остаётся вашим брендом.'},
    ],
    code: {filename: 'ota-search.sh', body: codeBody},
    faqs: [
      {q: 'Каких перевозчиков я могу продавать через интеграцию OTA?', a: 'API Tictactrip предоставляет более 250 европейских железнодорожных и междугородных автобусных операторов, включая SNCF, Trenitalia, Renfe, FlixBus, BlaBlaCar Bus, ALSA, Ouigo и многих региональных перевозчиков во Франции, Италии, Испании, Германии и странах Бенилюкса.'},
      {q: 'Сколько времени занимает интеграция OTA?', a: 'Большинство OTA выходит в продакшен за 2–6 недель. Мы предоставляем спецификацию OpenAPI, коллекцию Postman и пошаговое руководство, чтобы ваша инженерная команда могла прототипировать с первого дня.'},
      {q: 'Берёте ли вы на себя выдачу билетов и после-продажные операции?', a: 'Да. Билеты выпускаются в PDF, готовые к отправке путешественникам по email или встраиванию в ваше OTA-приложение. Возвраты и обмены обрабатываются через тот же API.'},
      {q: 'Как формируется цена для OTA?', a: 'Цена зависит от объёма и набора перевозчиков. Свяжитесь с sales@tictactrip.eu, чтобы обсудить ваш трафик и получить коммерческое предложение.'},
    ],
    serviceType: 'API дистрибуции европейских поездов и автобусов для онлайн-турагентств',
    audienceType: 'Онлайн-турагентства (OTA)',
  },
};
