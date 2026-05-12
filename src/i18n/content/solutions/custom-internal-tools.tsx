import React from 'react';
import type {Translations} from '../../useTranslation';
import type {SolutionPageProps} from '../../../components/SolutionPage';

type SolutionPageContent = Omit<SolutionPageProps, 'slug' | 'related'>;

const codeBody = `# Internal portal: book staff travel programmatically
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRpari____@u09tu",
    "destinationGpuid": "c|FRtoul____@spzgb",
    "outboundDate":     "2026-06-22T00:00:00Z",
    "passengers":       [{"age": 41}]
  }'`;

export const customInternal: Translations<SolutionPageContent> = {
  en: {
    eyebrow: 'Solution · Custom & internal tools',
    title: 'Custom & internal tools',
    metaTitle: 'Travel booking API for internal tools, universities & NGOs | Tictactrip',
    description: 'Centralise European travel purchasing in your internal portal. One REST API for rail and bus across 250+ carriers.',
    metaDescription: 'Travel booking API for internal tools, procurement portals, universities, NGOs and event organisers. Centralise European rail and bus purchasing with 250+ carriers, CO₂ data and end-to-end ticketing.',
    keywords: 'internal travel tool API, procurement travel API, university travel API, NGO travel API, event travel booking API, custom travel platform API, Tictactrip internal tools',
    heroTitle: <>Travel API for<br /><span style={{color: '#6ee7b7'}}>internal tools, procurement &amp; events</span></>,
    heroLead: 'Centralise European train and bus purchasing inside your internal portal. One REST API, 250+ carriers, audit-friendly booking trail.',
    intro: (
      <>
        <h2>Procurement, universities, NGOs and event organisers ship custom travel tools</h2>
        <p>Not every travel buyer is an OTA or a TMC. <strong>Procurement teams, universities, NGOs and event organisers</strong> often build their own internal portals to centralise travel purchasing — for budget control, audit trails or simply because their workflows are too specific for off-the-shelf tools.</p>
        <p><strong>Tictactrip</strong> gives those teams the same infrastructure the largest OTAs use: a REST API exposing <strong>250+ European rail and bus carriers</strong>, end-to-end booking and a consistent ticket-delivery pipeline.</p>
      </>
    ),
    capabilities: [
      '250+ rail and bus carriers across Europe',
      'Search, reservation and booking through one REST API',
      'PDF ticket delivery, ready to email or archive',
      'CO₂ emissions per passenger for procurement reporting',
      'Refund and exchange workflows handled by Tictactrip',
      'OpenAPI spec and Postman collection for fast in-house integration',
    ],
    benefits: [
      {icon: '🧾', title: 'Audit-friendly booking trail', description: 'Each booking returns structured metadata — carrier, fare, passenger, CO₂ — that internal finance, audit and procurement teams can store and report against.'},
      {icon: '🎓', title: 'Built for universities and NGOs', description: 'Centralise student, researcher and field-staff travel inside one portal instead of scattering bookings across dozens of carrier sites.'},
      {icon: '🎪', title: 'Event-grade ticketing', description: 'Bulk-book travel for conference attendees, sports teams, festival staff or political delegations through programmatic flows your team can automate.'},
      {icon: '🛠️', title: 'Maintained by Tictactrip', description: 'Carrier contracts, ticket formats, refund rules and operations are handled by us. Your internal tool focuses on workflow, not on the long tail of European transport operators.'},
    ],
    code: {filename: 'internal-tool.sh', body: codeBody},
    faqs: [
      {q: 'Can a small in-house team integrate Tictactrip?', a: 'Yes. We provide an OpenAPI specification, a Postman collection and a step-by-step tutorial. Most internal-tool teams ship a working integration in 2 to 6 weeks.'},
      {q: 'Can we book on behalf of named travellers (students, employees, attendees)?', a: 'Yes. The booking endpoint accepts passenger details and returns tickets issued in those names, where the carrier requires it.'},
      {q: 'Do you provide invoices and a consolidated billing flow?', a: 'Yes. Partners receive consolidated billing aligned with their booking volume. Talk to sales@tictactrip.eu about the contract setup that fits your procurement workflow.'},
      {q: 'Is Tictactrip GDPR-compliant for university and NGO use cases?', a: 'Yes. Tictactrip is a French company and the API is operated in compliance with the GDPR. Passenger data is processed strictly for the purpose of issuing the requested transport tickets.'},
    ],
    serviceType: 'European travel booking API for internal portals, procurement, universities, NGOs and event organisers',
    audienceType: 'Procurement teams, universities, NGOs and event organisers building custom travel tools',
  },
  fr: {
    eyebrow: 'Solution · Outils internes & sur mesure',
    title: 'Outils internes & sur mesure',
    metaTitle: 'API de réservation voyage pour outils internes, universités & ONG | Tictactrip',
    description: "Centralisez l'achat de voyage européen dans votre portail interne. Une API REST pour le rail et le bus sur 250+ transporteurs.",
    metaDescription: "API de réservation voyage pour outils internes, portails d'achats, universités, ONG et organisateurs d'événements. Centralisez l'achat de rail et de bus européens avec 250+ transporteurs, données CO₂ et billetterie de bout en bout.",
    keywords: "API outil voyage interne, API voyage achats, API voyage université, API voyage ONG, API réservation voyage événement, API plateforme voyage sur mesure, Tictactrip outils internes",
    heroTitle: <>API de voyage pour<br /><span style={{color: '#6ee7b7'}}>outils internes, achats &amp; événements</span></>,
    heroLead: "Centralisez l'achat de trains et bus européens dans votre portail interne. Une API REST, 250+ transporteurs, trace de réservation auditable.",
    intro: (
      <>
        <h2>Achats, universités, ONG et organisateurs d'événements livrent des outils de voyage sur mesure</h2>
        <p>Tous les acheteurs de voyage ne sont pas des OTA ou des TMC. <strong>Les équipes achats, universités, ONG et organisateurs d'événements</strong> construisent souvent leurs propres portails internes pour centraliser l'achat de voyage — pour le contrôle budgétaire, les traces d'audit ou simplement parce que leurs flux sont trop spécifiques pour des outils sur étagère.</p>
        <p><strong>Tictactrip</strong> donne à ces équipes la même infrastructure que les plus grands OTAs : une API REST exposant <strong>250+ transporteurs ferroviaires et de bus européens</strong>, réservation de bout en bout et un pipeline cohérent de livraison de billet.</p>
      </>
    ),
    capabilities: [
      "250+ transporteurs ferroviaires et de bus à travers l'Europe",
      "Recherche, réservation et émission via une seule API REST",
      "Livraison de billet PDF, prête à être envoyée ou archivée",
      "Émissions de CO₂ par passager pour reporting achats",
      "Flux de remboursement et d'échange gérés par Tictactrip",
      "Spec OpenAPI et collection Postman pour une intégration in-house rapide",
    ],
    benefits: [
      {icon: '🧾', title: 'Trace de réservation auditable', description: "Chaque réservation renvoie des métadonnées structurées — transporteur, tarif, passager, CO₂ — que les équipes finance interne, audit et achats peuvent stocker et exploiter pour leurs rapports."},
      {icon: '🎓', title: 'Conçue pour universités et ONG', description: "Centralisez les voyages des étudiants, chercheurs et personnels de terrain dans un seul portail au lieu d'éparpiller les réservations sur des dizaines de sites transporteurs."},
      {icon: '🎪', title: 'Billetterie pour événements', description: "Réservez en masse les déplacements pour participants de conférence, équipes sportives, personnels de festival ou délégations politiques via des flux programmatiques que votre équipe peut automatiser."},
      {icon: '🛠️', title: 'Maintenue par Tictactrip', description: "Contrats transporteurs, formats de billet, règles de remboursement et opérations sont gérés par nous. Votre outil interne se concentre sur le flux, pas sur la longue traîne des opérateurs de transport européens."},
    ],
    code: {filename: 'internal-tool.sh', body: codeBody},
    faqs: [
      {q: 'Une petite équipe in-house peut-elle intégrer Tictactrip ?', a: "Oui. Nous fournissons une spécification OpenAPI, une collection Postman et un tutoriel pas à pas. La plupart des équipes d'outils internes livrent une intégration fonctionnelle en 2 à 6 semaines."},
      {q: "Pouvons-nous réserver au nom de voyageurs nommés (étudiants, employés, participants) ?", a: "Oui. L'endpoint de réservation accepte les détails passager et renvoie des billets émis à ces noms, quand le transporteur l'exige."},
      {q: 'Fournissez-vous factures et un flux de facturation consolidé ?', a: "Oui. Les partenaires reçoivent une facturation consolidée alignée à leur volume de réservation. Parlez à sales@tictactrip.eu pour la configuration contractuelle adaptée à votre flux d'achats."},
      {q: "Tictactrip est-il conforme RGPD pour les cas d'usage universités et ONG ?", a: "Oui. Tictactrip est une société française et l'API est exploitée en conformité avec le RGPD. Les données passager sont traitées strictement pour émettre les billets de transport demandés."},
    ],
    serviceType: "API européenne de réservation voyage pour portails internes, achats, universités, ONG et organisateurs d'événements",
    audienceType: "Équipes achats, universités, ONG et organisateurs d'événements construisant des outils de voyage sur mesure",
  },
  de: {
    eyebrow: 'Lösung · Maßgeschneiderte & interne Tools',
    title: 'Maßgeschneiderte & interne Tools',
    metaTitle: 'Reisebuchungs-API für interne Tools, Universitäten & NGOs | Tictactrip',
    description: 'Zentralisieren Sie europäische Reisekäufe in Ihrem internen Portal. Eine REST-API für Bahn und Bus über 250+ Transporteure.',
    metaDescription: 'Reisebuchungs-API für interne Tools, Beschaffungs-Portale, Universitäten, NGOs und Veranstalter. Zentralisieren Sie europäische Bahn- und Bus-Käufe mit 250+ Transporteuren, CO₂-Daten und End-to-End-Ticketierung.',
    keywords: 'interne Reise-Tool-API, Beschaffungs-Reise-API, Universitäts-Reise-API, NGO-Reise-API, Event-Reisebuchungs-API, maßgeschneiderte Reise-Plattform-API, Tictactrip interne Tools',
    heroTitle: <>Reise-API für<br /><span style={{color: '#6ee7b7'}}>interne Tools, Beschaffung &amp; Events</span></>,
    heroLead: 'Zentralisieren Sie europäische Zug- und Bus-Käufe in Ihrem internen Portal. Eine REST-API, 250+ Transporteure, audit-fähige Buchungs-Spur.',
    intro: (
      <>
        <h2>Beschaffung, Universitäten, NGOs und Veranstalter liefern maßgeschneiderte Reise-Tools</h2>
        <p>Nicht jeder Reisekäufer ist eine OTA oder TMC. <strong>Beschaffungsteams, Universitäten, NGOs und Veranstalter</strong> bauen häufig eigene interne Portale, um Reisekäufe zu zentralisieren — für Budgetkontrolle, Audit-Spuren oder schlicht weil ihre Workflows zu spezifisch für Standard-Tools sind.</p>
        <p><strong>Tictactrip</strong> gibt diesen Teams dieselbe Infrastruktur, die die größten OTAs nutzen: eine REST-API, die <strong>250+ europäische Bahn- und Bus-Transporteure</strong> bereitstellt, End-to-End-Buchung und eine konsistente Ticket-Auslieferungs-Pipeline.</p>
      </>
    ),
    capabilities: [
      '250+ Bahn- und Bus-Transporteure in ganz Europa',
      'Suche, Reservierung und Buchung über eine REST-API',
      'PDF-Ticket-Lieferung, bereit zum Senden oder Archivieren',
      'CO₂-Emissionen pro Passagier für Beschaffungsberichte',
      'Erstattungs- und Umtausch-Workflows von Tictactrip übernommen',
      'OpenAPI-Spec und Postman-Sammlung für schnelle In-House-Integration',
    ],
    benefits: [
      {icon: '🧾', title: 'Audit-fähige Buchungs-Spur', description: 'Jede Buchung liefert strukturierte Metadaten — Transporteur, Tarif, Passagier, CO₂ — die interne Finanz-, Audit- und Beschaffungsteams speichern und reporting-mäßig auswerten können.'},
      {icon: '🎓', title: 'Gebaut für Universitäten und NGOs', description: 'Zentralisieren Sie Studenten-, Forscher- und Außendienst-Reisen in einem Portal, statt Buchungen auf Dutzende Transporteur-Sites zu zerstreuen.'},
      {icon: '🎪', title: 'Event-taugliche Ticketierung', description: 'Buchen Sie Reisen für Konferenzteilnehmer, Sportteams, Festivalpersonal oder politische Delegationen massenweise über programmgesteuerte Abläufe, die Ihr Team automatisieren kann.'},
      {icon: '🛠️', title: 'Von Tictactrip betrieben', description: 'Transporteur-Verträge, Ticketformate, Erstattungsregeln und der Betrieb werden von uns übernommen. Ihr internes Tool konzentriert sich auf den Workflow, nicht auf den Long-Tail europäischer Transport-Operatoren.'},
    ],
    code: {filename: 'internal-tool.sh', body: codeBody},
    faqs: [
      {q: 'Kann ein kleines In-House-Team Tictactrip integrieren?', a: 'Ja. Wir liefern eine OpenAPI-Spezifikation, eine Postman-Sammlung und ein Schritt-für-Schritt-Tutorial. Die meisten In-House-Tool-Teams liefern eine funktionierende Integration in 2 bis 6 Wochen.'},
      {q: 'Können wir im Namen benannter Reisender (Studenten, Mitarbeiter, Teilnehmer) buchen?', a: 'Ja. Der Buchungsendpunkt akzeptiert Passagierdetails und liefert Tickets, die auf diese Namen ausgestellt sind, wenn der Transporteur das verlangt.'},
      {q: 'Liefern Sie Rechnungen und einen konsolidierten Abrechnungsablauf?', a: 'Ja. Partner erhalten konsolidierte Abrechnung passend zu ihrem Buchungsvolumen. Sprechen Sie mit sales@tictactrip.eu über das Vertrags-Setup, das zu Ihrem Beschaffungs-Workflow passt.'},
      {q: 'Ist Tictactrip DSGVO-konform für Universitäts- und NGO-Use-Cases?', a: 'Ja. Tictactrip ist ein französisches Unternehmen und die API wird DSGVO-konform betrieben. Passagierdaten werden ausschließlich zur Ausstellung der angefragten Transporttickets verarbeitet.'},
    ],
    serviceType: 'Europäische Reisebuchungs-API für interne Portale, Beschaffung, Universitäten, NGOs und Veranstalter',
    audienceType: 'Beschaffungsteams, Universitäten, NGOs und Veranstalter, die maßgeschneiderte Reise-Tools bauen',
  },
  es: {
    eyebrow: 'Solución · Herramientas internas y a medida',
    title: 'Herramientas internas y a medida',
    metaTitle: 'API de reserva de viaje para herramientas internas, universidades y ONGs | Tictactrip',
    description: 'Centraliza la compra de viajes europeos en tu portal interno. Una API REST para tren y autobús en 250+ operadores.',
    metaDescription: 'API de reserva de viaje para herramientas internas, portales de compras, universidades, ONGs y organizadores de eventos. Centraliza la compra europea de tren y autobús con 250+ operadores, datos de CO₂ y billetería extremo a extremo.',
    keywords: 'API herramienta viaje interna, API viaje compras, API viaje universidad, API viaje ONG, API reserva viaje evento, API plataforma viaje a medida, Tictactrip herramientas internas',
    heroTitle: <>API de viaje para<br /><span style={{color: '#6ee7b7'}}>herramientas internas, compras y eventos</span></>,
    heroLead: 'Centraliza la compra de tren y autobús europeos dentro de tu portal interno. Una API REST, 250+ operadores, registro de reserva auditable.',
    intro: (
      <>
        <h2>Compras, universidades, ONGs y organizadores de eventos lanzan herramientas de viaje a medida</h2>
        <p>No todo comprador de viaje es una OTA o una TMC. <strong>Los equipos de compras, universidades, ONGs y organizadores de eventos</strong> a menudo construyen sus propios portales internos para centralizar la compra de viajes — por control de presupuesto, registros de auditoría o simplemente porque sus flujos son demasiado específicos para herramientas estándar.</p>
        <p><strong>Tictactrip</strong> da a esos equipos la misma infraestructura que usan las mayores OTAs: una API REST que expone <strong>250+ operadores ferroviarios y de autobús europeos</strong>, reserva extremo a extremo y un pipeline consistente de entrega de billete.</p>
      </>
    ),
    capabilities: [
      '250+ operadores ferroviarios y de autobús por toda Europa',
      'Búsqueda, reserva y emisión a través de una API REST',
      'Entrega de billete PDF, listo para enviar o archivar',
      'Emisiones de CO₂ por pasajero para reporting de compras',
      'Flujos de reembolso y cambio gestionados por Tictactrip',
      'Especificación OpenAPI y colección Postman para integración interna rápida',
    ],
    benefits: [
      {icon: '🧾', title: 'Registro de reserva auditable', description: 'Cada reserva devuelve metadatos estructurados — operador, tarifa, pasajero, CO₂ — que los equipos internos de finanzas, auditoría y compras pueden almacenar y explotar para reporting.'},
      {icon: '🎓', title: 'Pensada para universidades y ONGs', description: 'Centraliza los viajes de estudiantes, investigadores y personal de campo dentro de un portal en lugar de dispersar las reservas en docenas de sitios de operador.'},
      {icon: '🎪', title: 'Billetería para eventos', description: 'Reserva masivamente viajes para asistentes a conferencias, equipos deportivos, personal de festival o delegaciones políticas mediante flujos programáticos que tu equipo puede automatizar.'},
      {icon: '🛠️', title: 'Mantenida por Tictactrip', description: 'Contratos de operador, formatos de billete, reglas de reembolso y operaciones los gestionamos nosotros. Tu herramienta interna se centra en el flujo, no en la cola larga de operadores de transporte europeos.'},
    ],
    code: {filename: 'internal-tool.sh', body: codeBody},
    faqs: [
      {q: '¿Puede un equipo interno pequeño integrar Tictactrip?', a: 'Sí. Proporcionamos una especificación OpenAPI, una colección Postman y un tutorial paso a paso. La mayoría de equipos de herramientas internas entrega una integración funcional en 2 a 6 semanas.'},
      {q: '¿Podemos reservar en nombre de viajeros designados (estudiantes, empleados, asistentes)?', a: 'Sí. El endpoint de reserva acepta detalles del pasajero y devuelve billetes emitidos a esos nombres, cuando el operador lo requiere.'},
      {q: '¿Proporcionáis facturas y un flujo de facturación consolidado?', a: 'Sí. Los socios reciben facturación consolidada alineada con su volumen de reserva. Habla con sales@tictactrip.eu sobre la configuración contractual que encaje con tu flujo de compras.'},
      {q: '¿Tictactrip cumple el RGPD para casos de universidades y ONGs?', a: 'Sí. Tictactrip es una empresa francesa y la API opera en cumplimiento del RGPD. Los datos del pasajero se procesan estrictamente para emitir los billetes de transporte solicitados.'},
    ],
    serviceType: 'API europea de reserva de viaje para portales internos, compras, universidades, ONGs y organizadores de eventos',
    audienceType: 'Equipos de compras, universidades, ONGs y organizadores de eventos que construyen herramientas de viaje a medida',
  },
  it: {
    eyebrow: 'Soluzione · Strumenti interni e su misura',
    title: 'Strumenti interni e su misura',
    metaTitle: 'API di prenotazione viaggio per strumenti interni, università e ONG | Tictactrip',
    description: "Centralizza l'acquisto di viaggi europei nel tuo portale interno. Un'API REST per treno e autobus su 250+ vettori.",
    metaDescription: "API di prenotazione viaggio per strumenti interni, portali di acquisto, università, ONG e organizzatori di eventi. Centralizza l'acquisto europeo di treno e autobus con 250+ vettori, dati CO₂ e biglietteria end-to-end.",
    keywords: 'API strumento viaggio interno, API viaggio acquisti, API viaggio università, API viaggio ONG, API prenotazione viaggio evento, API piattaforma viaggio su misura, Tictactrip strumenti interni',
    heroTitle: <>API di viaggio per<br /><span style={{color: '#6ee7b7'}}>strumenti interni, acquisti &amp; eventi</span></>,
    heroLead: "Centralizza l'acquisto di treni e autobus europei dentro il tuo portale interno. Un'API REST, 250+ vettori, traccia di prenotazione auditabile.",
    intro: (
      <>
        <h2>Acquisti, università, ONG e organizzatori di eventi spediscono strumenti di viaggio su misura</h2>
        <p>Non tutti gli acquirenti di viaggio sono OTA o TMC. <strong>Team acquisti, università, ONG e organizzatori di eventi</strong> spesso costruiscono i propri portali interni per centralizzare l'acquisto di viaggio — per controllo di budget, tracce di audit o semplicemente perché i loro flussi sono troppo specifici per strumenti pronti all'uso.</p>
        <p><strong>Tictactrip</strong> dà a quei team la stessa infrastruttura usata dalle più grandi OTA: un'API REST che espone <strong>250+ vettori europei di treni e autobus</strong>, prenotazione end-to-end e una pipeline coerente di consegna del biglietto.</p>
      </>
    ),
    capabilities: [
      '250+ vettori ferroviari e di autobus in tutta Europa',
      "Ricerca, prenotazione ed emissione tramite un'API REST",
      'Consegna biglietto PDF, pronto per essere inviato o archiviato',
      'Emissioni CO₂ per passeggero per reporting acquisti',
      'Flussi di rimborso e cambio gestiti da Tictactrip',
      "Specifica OpenAPI e raccolta Postman per integrazione in-house rapida",
    ],
    benefits: [
      {icon: '🧾', title: 'Traccia di prenotazione auditabile', description: "Ogni prenotazione restituisce metadati strutturati — vettore, tariffa, passeggero, CO₂ — che i team finanza interna, audit e acquisti possono archiviare e usare per reporting."},
      {icon: '🎓', title: 'Costruita per università e ONG', description: "Centralizza i viaggi di studenti, ricercatori e personale sul campo dentro un portale invece di disperdere le prenotazioni su decine di siti vettore."},
      {icon: '🎪', title: 'Biglietteria per eventi', description: "Prenota in massa viaggi per partecipanti a conferenze, squadre sportive, personale di festival o delegazioni politiche tramite flussi programmatici che il tuo team può automatizzare."},
      {icon: '🛠️', title: 'Mantenuta da Tictactrip', description: "Contratti vettore, formati di biglietto, regole di rimborso e operazioni sono gestiti da noi. Il tuo strumento interno si concentra sul flusso, non sulla coda lunga degli operatori di trasporto europei."},
    ],
    code: {filename: 'internal-tool.sh', body: codeBody},
    faqs: [
      {q: 'Un piccolo team interno può integrare Tictactrip?', a: 'Sì. Forniamo una specifica OpenAPI, una raccolta Postman e un tutorial passo passo. La maggior parte dei team di strumenti interni spedisce una integrazione funzionante in 2-6 settimane.'},
      {q: 'Possiamo prenotare per conto di viaggiatori nominati (studenti, dipendenti, partecipanti)?', a: "Sì. L'endpoint di prenotazione accetta dettagli del passeggero e restituisce biglietti emessi a quei nomi, quando il vettore lo richiede."},
      {q: 'Fornite fatture e un flusso di fatturazione consolidato?', a: 'Sì. I partner ricevono fatturazione consolidata allineata al loro volume di prenotazione. Parla con sales@tictactrip.eu della configurazione contrattuale che si adatta al tuo flusso di acquisti.'},
      {q: "Tictactrip è conforme al GDPR per i casi d'uso università e ONG?", a: "Sì. Tictactrip è un'azienda francese e l'API è operata in conformità al GDPR. I dati del passeggero sono trattati esclusivamente per emettere i biglietti di trasporto richiesti."},
    ],
    serviceType: 'API europea di prenotazione viaggio per portali interni, acquisti, università, ONG e organizzatori di eventi',
    audienceType: 'Team acquisti, università, ONG e organizzatori di eventi che costruiscono strumenti di viaggio su misura',
  },
  pt: {
    eyebrow: 'Solução · Ferramentas internas e à medida',
    title: 'Ferramentas internas e à medida',
    metaTitle: 'API de reserva de viagem para ferramentas internas, universidades & ONGs | Tictactrip',
    description: 'Centralize a compra de viagens europeias no seu portal interno. Uma API REST para comboio e autocarro em 250+ transportadoras.',
    metaDescription: 'API de reserva de viagem para ferramentas internas, portais de compras, universidades, ONGs e organizadores de eventos. Centralize a compra europeia de comboio e autocarro com 250+ transportadoras, dados de CO₂ e bilhética ponto a ponto.',
    keywords: 'API ferramenta viagem interna, API viagem compras, API viagem universidade, API viagem ONG, API reserva viagem evento, API plataforma viagem à medida, Tictactrip ferramentas internas',
    heroTitle: <>API de viagem para<br /><span style={{color: '#6ee7b7'}}>ferramentas internas, compras &amp; eventos</span></>,
    heroLead: 'Centralize a compra de comboio e autocarro europeus dentro do seu portal interno. Uma API REST, 250+ transportadoras, trilho de reserva auditável.',
    intro: (
      <>
        <h2>Compras, universidades, ONGs e organizadores de eventos entregam ferramentas de viagem à medida</h2>
        <p>Nem todos os compradores de viagem são OTAs ou TMCs. As <strong>equipas de compras, universidades, ONGs e organizadores de eventos</strong> constroem frequentemente os seus próprios portais internos para centralizar a compra de viagens — por controlo orçamental, trilhos de auditoria ou simplesmente porque os seus fluxos são demasiado específicos para ferramentas prontas a usar.</p>
        <p>A <strong>Tictactrip</strong> dá a essas equipas a mesma infraestrutura que as maiores OTAs usam: uma API REST que expõe <strong>250+ transportadoras europeias de comboio e autocarro</strong>, reserva ponto a ponto e um pipeline consistente de entrega de bilhete.</p>
      </>
    ),
    capabilities: [
      '250+ transportadoras ferroviárias e de autocarro em toda a Europa',
      'Pesquisa, reserva e emissão através de uma API REST',
      'Entrega de bilhete PDF, pronto a enviar ou arquivar',
      'Emissões de CO₂ por passageiro para relatórios de compras',
      'Fluxos de reembolso e troca tratados pela Tictactrip',
      'Especificação OpenAPI e coleção Postman para integração interna rápida',
    ],
    benefits: [
      {icon: '🧾', title: 'Trilho de reserva auditável', description: 'Cada reserva devolve metadados estruturados — transportadora, tarifa, passageiro, CO₂ — que as equipas internas de finanças, auditoria e compras podem armazenar e usar para relatórios.'},
      {icon: '🎓', title: 'Construída para universidades e ONGs', description: 'Centralize as viagens de estudantes, investigadores e pessoal de terreno dentro de um portal em vez de dispersar as reservas por dezenas de sites de transportadora.'},
      {icon: '🎪', title: 'Bilhética para eventos', description: 'Reserve em massa viagens para participantes em conferências, equipas desportivas, pessoal de festival ou delegações políticas através de fluxos programáticos que a sua equipa pode automatizar.'},
      {icon: '🛠️', title: 'Mantida pela Tictactrip', description: 'Contratos com transportadoras, formatos de bilhete, regras de reembolso e operações são tratados por nós. A sua ferramenta interna foca-se no fluxo, não na cauda longa dos operadores europeus de transporte.'},
    ],
    code: {filename: 'internal-tool.sh', body: codeBody},
    faqs: [
      {q: 'Uma pequena equipa interna pode integrar a Tictactrip?', a: 'Sim. Fornecemos uma especificação OpenAPI, uma coleção Postman e um tutorial passo a passo. A maioria das equipas de ferramentas internas entrega uma integração funcional em 2 a 6 semanas.'},
      {q: 'Podemos reservar em nome de viajantes nomeados (estudantes, colaboradores, participantes)?', a: 'Sim. O endpoint de reserva aceita detalhes do passageiro e devolve bilhetes emitidos nesses nomes, quando a transportadora exige.'},
      {q: 'Fornecem faturas e um fluxo de faturação consolidado?', a: 'Sim. Os parceiros recebem faturação consolidada alinhada com o seu volume de reserva. Fale com sales@tictactrip.eu sobre a configuração contratual que se adequa ao seu fluxo de compras.'},
      {q: 'A Tictactrip está em conformidade com o RGPD para casos de uso de universidades e ONGs?', a: 'Sim. A Tictactrip é uma empresa francesa e a API é operada em conformidade com o RGPD. Os dados do passageiro são processados estritamente para emitir os bilhetes de transporte solicitados.'},
    ],
    serviceType: 'API europeia de reserva de viagem para portais internos, compras, universidades, ONGs e organizadores de eventos',
    audienceType: 'Equipas de compras, universidades, ONGs e organizadores de eventos que constroem ferramentas de viagem à medida',
  },
  ru: {
    eyebrow: 'Решение · Внутренние и кастомные инструменты',
    title: 'Внутренние и кастомные инструменты',
    metaTitle: 'API бронирования путешествий для внутренних инструментов, университетов и НКО | Tictactrip',
    description: 'Централизуйте закупку европейских поездок в вашем внутреннем портале. Один REST API для поезда и автобуса по 250+ перевозчикам.',
    metaDescription: 'API бронирования путешествий для внутренних инструментов, порталов закупок, университетов, НКО и организаторов мероприятий. Централизуйте европейские закупки поездов и автобусов с 250+ перевозчиками, данными CO₂ и сквозной выдачей билетов.',
    keywords: 'API внутреннего инструмента путешествий, API путешествий закупок, API путешествий университета, API путешествий НКО, API бронирования путешествий для событий, API кастомной платформы путешествий, Tictactrip внутренние инструменты',
    heroTitle: <>API путешествий для<br /><span style={{color: '#6ee7b7'}}>внутренних инструментов, закупок и мероприятий</span></>,
    heroLead: 'Централизуйте закупку европейских поездов и автобусов внутри вашего внутреннего портала. Один REST API, 250+ перевозчиков, аудит-готовый след бронирования.',
    intro: (
      <>
        <h2>Закупки, университеты, НКО и организаторы мероприятий выпускают кастомные инструменты путешествий</h2>
        <p>Не каждый покупатель путешествий — это OTA или TMC. <strong>Отделы закупок, университеты, НКО и организаторы мероприятий</strong> часто создают собственные внутренние порталы для централизации закупки поездок — ради контроля бюджета, аудит-следов или просто потому что их процессы слишком специфичны для готовых инструментов.</p>
        <p><strong>Tictactrip</strong> даёт этим командам ту же инфраструктуру, что и крупнейшим OTA: REST API, открывающий <strong>250+ европейских железнодорожных и автобусных перевозчиков</strong>, сквозное бронирование и согласованный конвейер выдачи билетов.</p>
      </>
    ),
    capabilities: [
      '250+ железнодорожных и автобусных перевозчиков по всей Европе',
      'Поиск, резервирование и оформление через один REST API',
      'Доставка PDF-билета, готового к отправке или архивации',
      'Выбросы CO₂ на пассажира для отчётности закупок',
      'Процессы возврата и обмена обрабатываются Tictactrip',
      'Спецификация OpenAPI и коллекция Postman для быстрой внутренней интеграции',
    ],
    benefits: [
      {icon: '🧾', title: 'Аудит-готовый след бронирования', description: 'Каждое бронирование возвращает структурированные метаданные — перевозчик, тариф, пассажир, CO₂ — которые внутренние команды финансов, аудита и закупок могут сохранять и использовать в отчётах.'},
      {icon: '🎓', title: 'Создано для университетов и НКО', description: 'Централизуйте поездки студентов, исследователей и полевых сотрудников внутри одного портала вместо распыления бронирований на десятки сайтов перевозчиков.'},
      {icon: '🎪', title: 'Билеты для мероприятий', description: 'Массово бронируйте поездки для участников конференций, спортивных команд, персонала фестивалей или политических делегаций через программные потоки, которые ваша команда может автоматизировать.'},
      {icon: '🛠️', title: 'Поддержка от Tictactrip', description: 'Договоры с перевозчиками, форматы билетов, правила возврата и операции — на нас. Ваш внутренний инструмент сосредоточен на процессе, а не на длинном хвосте европейских транспортных операторов.'},
    ],
    code: {filename: 'internal-tool.sh', body: codeBody},
    faqs: [
      {q: 'Может ли небольшая внутренняя команда интегрировать Tictactrip?', a: 'Да. Мы предоставляем спецификацию OpenAPI, коллекцию Postman и пошаговое руководство. Большинство команд внутренних инструментов выпускает работающую интеграцию за 2–6 недель.'},
      {q: 'Можем ли мы бронировать от имени поимённых путешественников (студентов, сотрудников, участников)?', a: 'Да. Эндпоинт бронирования принимает данные пассажира и возвращает билеты, оформленные на эти имена, там, где это требует перевозчик.'},
      {q: 'Предоставляете ли вы счета и консолидированный поток выставления счетов?', a: 'Да. Партнёры получают консолидированный счёт, согласованный с их объёмом бронирования. Свяжитесь с sales@tictactrip.eu, чтобы обсудить контрактную настройку под ваш закупочный процесс.'},
      {q: 'Соответствует ли Tictactrip GDPR для университетов и НКО?', a: 'Да. Tictactrip — французская компания, и API работает в соответствии с GDPR. Данные путешественников обрабатываются исключительно для выпуска запрошенных транспортных билетов.'},
    ],
    serviceType: 'Европейский API бронирования путешествий для внутренних порталов, закупок, университетов, НКО и организаторов мероприятий',
    audienceType: 'Отделы закупок, университеты, НКО и организаторы мероприятий, создающие кастомные инструменты путешествий',
  },
};
