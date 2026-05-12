import React from 'react';
import type {Translations} from '../../useTranslation';
import type {SolutionPageProps} from '../../../components/SolutionPage';

type SolutionPageContent = Omit<SolutionPageProps, 'slug' | 'related'>;

const codeBody = `# In-app search: Paris → Barcelona, 2 passengers
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRpari____@u09tu",
    "destinationGpuid": "c|ESbarc____@sp3d2",
    "outboundDate":     "2026-07-14T00:00:00Z",
    "passengers":       [{"age": 30}, {"age": 30}]
  }'`;

export const fintechSuperApps: Translations<SolutionPageContent> = {
  en: {
    eyebrow: 'Solution · Fintech & super-apps',
    title: 'Fintech & super-apps',
    metaTitle: 'Embedded travel API for fintech apps and super-apps — Tictactrip',
    description: 'Add train and bus booking inside your neobank, loyalty or wallet app. One REST integration, 250+ European carriers.',
    metaDescription: 'Embed European train and bus booking inside neobanks, super-apps, loyalty wallets and mobility cards. One REST API connects you to 250+ carriers with real-time pricing, ticket delivery and CO₂ data.',
    keywords: 'fintech travel API, super-app travel API, neobank travel booking, loyalty wallet travel, embedded travel, mobility wallet API, fintech rail API, fintech bus API, Tictactrip fintech',
    heroTitle: <>Embedded travel booking for<br /><span style={{color: '#6ee7b7'}}>fintechs, neobanks &amp; super-apps</span></>,
    heroLead: 'Add European train and bus booking inside your app without becoming a travel company. One REST API, 250+ carriers, ticket delivery built in.',
    intro: (
      <>
        <h2>Travel is the next embedded vertical for fintech</h2>
        <p>Neobanks, loyalty programs and super-apps already hold the user, the wallet and the payment surface. The next high-margin move is <strong>embedded travel</strong> — booking trains and intercity buses inside your existing app without sending users to a third-party site.</p>
        <p><strong>Tictactrip</strong> is the infrastructure that makes that practical. One REST integration unlocks <strong>250+ European rail and bus carriers</strong>, real-time pricing and end-to-end ticket delivery. Your engineering team integrates a single API; your users see your brand.</p>
      </>
    ),
    capabilities: [
      '250+ European train and bus carriers',
      'REST API tuned for in-app embedding and webviews',
      'Real-time prices and seat availability',
      'PDF tickets, ready to email or render inside your app',
      'CO₂ emissions per passenger for sustainable-spend products',
      'Refund and exchange workflows via the same API',
    ],
    benefits: [
      {icon: '📱', title: 'Native in-app experience', description: 'Drop the search and booking flow directly inside your native app — your brand, your design system, your retention metrics. Tictactrip stays invisible to the end user.'},
      {icon: '🪙', title: 'Loyalty and cashback ready', description: 'Layer points redemption, cashback and rewards on top of net fares. The booking workflow exposes the price components your loyalty engine needs.'},
      {icon: '🌱', title: 'Carbon-aware spend', description: 'CO₂ emissions per passenger ship with every itinerary, so you can power green spend categorization, carbon budgets and offset programs without third-party data.'},
      {icon: '⚡', title: 'Ship in weeks, not quarters', description: 'OpenAPI spec, Postman collection, step-by-step tutorial. Prototype on day one and go live in 2 to 6 weeks instead of negotiating with carriers individually.'},
    ],
    code: {filename: 'app-search.sh', body: codeBody},
    faqs: [
      {q: 'Can I embed Tictactrip inside a native mobile app?', a: 'Yes. The API is REST-based and consumed from your backend or directly from your mobile client. Most fintech partners proxy calls through their own backend to keep the auth token server-side.'},
      {q: 'In which format are tickets delivered?', a: 'Tictactrip currently returns tickets as PDFs. You can email them to users, attach them to confirmations or render them directly inside your app.'},
      {q: 'Can I add cashback or loyalty points on top?', a: 'Yes. The booking response exposes the price components you need to apply your own markup, cashback rules or points redemption logic — Tictactrip handles the underlying carrier settlement.'},
      {q: 'How is the payment flow handled?', a: 'Most fintech partners route payment through their existing PSP and call Tictactrip with the net fare. We also support direct booking flows where Tictactrip handles payment end-to-end — your sales contact will walk you through both options.'},
    ],
    serviceType: 'Embedded travel booking API for fintech apps and super-apps',
    audienceType: 'Fintech apps, neobanks, super-apps, loyalty platforms',
  },
  fr: {
    eyebrow: 'Solution · Fintech & super-apps',
    title: 'Fintech & super-apps',
    metaTitle: 'API de voyage embarquée pour applications fintech et super-apps — Tictactrip',
    description: 'Ajoutez la réservation train et bus dans votre néobanque, votre app de fidélité ou votre wallet. Une intégration REST, 250+ transporteurs européens.',
    metaDescription: 'Intégrez la réservation de trains et bus européens dans des néobanques, super-apps, wallets de fidélité et cartes de mobilité. Une API REST vous connecte à 250+ transporteurs avec tarification temps réel, livraison de billet et données CO₂.',
    keywords: 'API voyage fintech, API voyage super-app, réservation voyage néobanque, voyage wallet fidélité, voyage intégré, API wallet mobilité, API rail fintech, API bus fintech, Tictactrip fintech',
    heroTitle: <>Réservation voyage embarquée pour<br /><span style={{color: '#6ee7b7'}}>fintechs, néobanques &amp; super-apps</span></>,
    heroLead: "Ajoutez la réservation de trains et bus européens dans votre app sans devenir une société de voyage. Une API REST, 250+ transporteurs, livraison de billet intégrée.",
    intro: (
      <>
        <h2>Le voyage est la prochaine verticale embarquée pour la fintech</h2>
        <p>Les néobanques, programmes de fidélité et super-apps possèdent déjà l'utilisateur, le wallet et la surface de paiement. Le prochain mouvement à forte marge est le <strong>voyage embarqué</strong> — réserver trains et bus interurbains dans votre application existante sans envoyer les utilisateurs sur un site tiers.</p>
        <p><strong>Tictactrip</strong> est l'infrastructure qui rend cela pratique. Une intégration REST débloque <strong>250+ transporteurs ferroviaires et de bus européens</strong>, tarification temps réel et livraison de billet de bout en bout. Votre équipe d'ingénierie intègre une seule API ; vos utilisateurs voient votre marque.</p>
      </>
    ),
    capabilities: [
      "250+ transporteurs européens train et bus",
      "API REST adaptée à l'embarquement in-app et aux webviews",
      "Prix et disponibilité de sièges en temps réel",
      "Billets PDF, prêts à être envoyés ou affichés dans votre app",
      "Émissions de CO₂ par passager pour des produits de dépense durable",
      "Flux de remboursement et d'échange via la même API",
    ],
    benefits: [
      {icon: '📱', title: 'Expérience native in-app', description: "Insérez le flux de recherche et de réservation directement dans votre app native — votre marque, votre design system, vos métriques de rétention. Tictactrip reste invisible pour l'utilisateur final."},
      {icon: '🪙', title: 'Prêt pour la fidélité et le cashback', description: "Empilez utilisation de points, cashback et récompenses sur les tarifs nets. Le flux de réservation expose les composantes tarifaires dont votre moteur de fidélité a besoin."},
      {icon: '🌱', title: 'Dépense consciente du carbone', description: "Les émissions de CO₂ par passager sont incluses dans chaque itinéraire, donc vous pouvez alimenter catégorisation de dépenses vertes, budgets carbone et programmes de compensation sans données tierces."},
      {icon: '⚡', title: 'Livrer en semaines, pas en trimestres', description: "Spécification OpenAPI, collection Postman, tutoriel pas à pas. Prototypez dès le premier jour et passez en production en 2 à 6 semaines au lieu de négocier avec les transporteurs individuellement."},
    ],
    code: {filename: 'app-search.sh', body: codeBody},
    faqs: [
      {q: "Puis-je intégrer Tictactrip dans une app mobile native ?", a: "Oui. L'API est REST et consommée depuis votre backend ou directement depuis votre client mobile. La plupart des partenaires fintech proxient les appels via leur backend pour garder le token d'authentification côté serveur."},
      {q: 'Dans quel format les billets sont-ils livrés ?', a: "Tictactrip livre actuellement les billets en PDF. Vous pouvez les envoyer par e-mail aux utilisateurs, les joindre aux confirmations ou les afficher directement dans votre app."},
      {q: "Puis-je ajouter du cashback ou des points de fidélité par-dessus ?", a: "Oui. La réponse de réservation expose les composantes tarifaires dont vous avez besoin pour appliquer votre markup, vos règles de cashback ou votre logique de points — Tictactrip gère le règlement sous-jacent avec le transporteur."},
      {q: 'Comment le flux de paiement est-il géré ?', a: "La plupart des partenaires fintech routent le paiement via leur PSP existant et appellent Tictactrip avec le tarif net. Nous supportons aussi des flux de réservation directs où Tictactrip gère le paiement de bout en bout — votre contact commercial vous expliquera les deux options."},
    ],
    serviceType: "API de réservation voyage embarquée pour applications fintech et super-apps",
    audienceType: "Applications fintech, néobanques, super-apps, plateformes de fidélité",
  },
  de: {
    eyebrow: 'Lösung · Fintech & Super-Apps',
    title: 'Fintech & Super-Apps',
    metaTitle: 'Eingebettete Reise-API für Fintech-Apps und Super-Apps — Tictactrip',
    description: 'Fügen Sie Zug- und Bus-Buchungen in Ihre Neobank-, Loyalty- oder Wallet-App ein. Eine REST-Integration, 250+ europäische Transporteure.',
    metaDescription: 'Betten Sie europäische Zug- und Bus-Buchungen in Neobanken, Super-Apps, Loyalty-Wallets und Mobility-Karten ein. Eine REST-API verbindet Sie mit 250+ Transporteuren mit Echtzeit-Preisen, Ticketauslieferung und CO₂-Daten.',
    keywords: 'Fintech-Reise-API, Super-App-Reise-API, Neobank-Reisebuchung, Loyalty-Wallet-Reise, eingebettete Reise, Mobility-Wallet-API, Fintech-Bahn-API, Fintech-Bus-API, Tictactrip Fintech',
    heroTitle: <>Eingebettete Reisebuchung für<br /><span style={{color: '#6ee7b7'}}>Fintechs, Neobanken &amp; Super-Apps</span></>,
    heroLead: 'Fügen Sie europäische Zug- und Bus-Buchungen in Ihre App ein, ohne ein Reise-Unternehmen zu werden. Eine REST-API, 250+ Transporteure, Ticketauslieferung eingebaut.',
    intro: (
      <>
        <h2>Reisen ist die nächste eingebettete Vertikale für Fintech</h2>
        <p>Neobanken, Loyalty-Programme und Super-Apps besitzen bereits den Nutzer, das Wallet und die Zahlungs-Oberfläche. Der nächste margenstarke Schritt ist <strong>eingebettete Reisen</strong> — Zug- und Fernbus-Buchungen innerhalb Ihrer bestehenden App, ohne Nutzer zu einer Drittseite zu schicken.</p>
        <p><strong>Tictactrip</strong> ist die Infrastruktur, die das praktisch macht. Eine REST-Integration schaltet <strong>250+ europäische Bahn- und Bus-Transporteure</strong>, Echtzeit-Preise und End-to-End-Ticketauslieferung frei. Ihr Engineering-Team integriert eine API; Ihre Nutzer sehen Ihre Marke.</p>
      </>
    ),
    capabilities: [
      '250+ europäische Zug- und Bus-Transporteure',
      'REST-API auf In-App-Embedding und Webviews abgestimmt',
      'Echtzeit-Preise und Sitzplatzverfügbarkeit',
      'PDF-Tickets, bereit zum Versand oder zur Anzeige in Ihrer App',
      'CO₂-Emissionen pro Passagier für nachhaltige Spend-Produkte',
      'Erstattungs- und Umtausch-Workflows über dieselbe API',
    ],
    benefits: [
      {icon: '📱', title: 'Native In-App-Erfahrung', description: 'Setzen Sie den Such- und Buchungsablauf direkt in Ihre native App — Ihre Marke, Ihr Design-System, Ihre Retention-Metriken. Tictactrip bleibt für den Endnutzer unsichtbar.'},
      {icon: '🪙', title: 'Loyalty- und Cashback-bereit', description: 'Legen Sie Punkteeinlösung, Cashback und Belohnungen über Netto-Tarife. Der Buchungs-Workflow stellt die Preiskomponenten bereit, die Ihre Loyalty-Engine braucht.'},
      {icon: '🌱', title: 'Klimabewusster Spend', description: 'CO₂-Emissionen pro Passagier kommen mit jeder Verbindung, sodass Sie grüne Spend-Kategorisierung, Carbon-Budgets und Offset-Programme ohne Drittdaten antreiben können.'},
      {icon: '⚡', title: 'In Wochen, nicht Quartalen ausliefern', description: 'OpenAPI-Spec, Postman-Sammlung, Schritt-für-Schritt-Tutorial. Prototypisieren Sie ab Tag eins und gehen Sie in 2 bis 6 Wochen live, statt einzeln mit Transporteuren zu verhandeln.'},
    ],
    code: {filename: 'app-search.sh', body: codeBody},
    faqs: [
      {q: 'Kann ich Tictactrip in eine native Mobile-App einbetten?', a: 'Ja. Die API ist REST-basiert und wird von Ihrem Backend oder direkt von Ihrem Mobile-Client konsumiert. Die meisten Fintech-Partner proxyen Aufrufe über ihr eigenes Backend, um das Auth-Token serverseitig zu halten.'},
      {q: 'In welchem Format werden Tickets geliefert?', a: 'Tictactrip liefert Tickets derzeit als PDFs. Sie können sie per E-Mail an Nutzer senden, an Bestätigungen anhängen oder direkt in Ihrer App anzeigen.'},
      {q: 'Kann ich Cashback oder Loyalty-Punkte darüberlegen?', a: 'Ja. Die Buchungsantwort stellt die Preiskomponenten bereit, die Sie für Ihren eigenen Aufschlag, Cashback-Regeln oder Punkte-Einlösungslogik brauchen — Tictactrip übernimmt die zugrundeliegende Abrechnung mit dem Transporteur.'},
      {q: 'Wie wird der Zahlungsablauf abgewickelt?', a: 'Die meisten Fintech-Partner routen Zahlungen über ihren bestehenden PSP und rufen Tictactrip mit dem Netto-Tarif auf. Wir unterstützen auch direkte Buchungsabläufe, bei denen Tictactrip die Zahlung End-to-End übernimmt — Ihr Sales-Kontakt führt Sie durch beide Optionen.'},
    ],
    serviceType: 'Eingebettete Reisebuchungs-API für Fintech-Apps und Super-Apps',
    audienceType: 'Fintech-Apps, Neobanken, Super-Apps, Loyalty-Plattformen',
  },
  es: {
    eyebrow: 'Solución · Fintech & super-apps',
    title: 'Fintech & super-apps',
    metaTitle: 'API de viaje embebida para apps fintech y super-apps — Tictactrip',
    description: 'Añade reserva de tren y autobús dentro de tu neobanco, app de fidelización o wallet. Una integración REST, 250+ operadores europeos.',
    metaDescription: 'Embeve la reserva de trenes y autobuses europeos dentro de neobancos, super-apps, wallets de fidelización y tarjetas de movilidad. Una API REST te conecta a 250+ operadores con precios en tiempo real, entrega de billete y datos de CO₂.',
    keywords: 'API viaje fintech, API viaje super-app, reserva viaje neobanco, viaje wallet fidelización, viaje embebido, API wallet movilidad, API tren fintech, API autobús fintech, Tictactrip fintech',
    heroTitle: <>Reserva de viaje embebida para<br /><span style={{color: '#6ee7b7'}}>fintechs, neobancos &amp; super-apps</span></>,
    heroLead: 'Añade reserva de tren y autobús europeos dentro de tu app sin convertirte en una empresa de viajes. Una API REST, 250+ operadores, entrega de billete integrada.',
    intro: (
      <>
        <h2>El viaje es la siguiente vertical embebida para fintech</h2>
        <p>Los neobancos, programas de fidelización y super-apps ya tienen al usuario, el wallet y la superficie de pago. El siguiente movimiento de alto margen es el <strong>viaje embebido</strong> — reservar trenes y autobuses interurbanos dentro de tu app existente sin enviar a los usuarios a un sitio de terceros.</p>
        <p><strong>Tictactrip</strong> es la infraestructura que lo hace práctico. Una integración REST desbloquea <strong>250+ operadores ferroviarios y de autobús europeos</strong>, precios en tiempo real y entrega de billete extremo a extremo. Tu equipo de ingeniería integra una sola API; tus usuarios ven tu marca.</p>
      </>
    ),
    capabilities: [
      '250+ operadores europeos de tren y autobús',
      'API REST afinada para embedido in-app y webviews',
      'Precios y disponibilidad de plazas en tiempo real',
      'Billetes PDF, listos para enviar o renderizar dentro de tu app',
      'Emisiones de CO₂ por pasajero para productos de gasto sostenible',
      'Flujos de reembolso y cambio mediante la misma API',
    ],
    benefits: [
      {icon: '📱', title: 'Experiencia nativa in-app', description: 'Coloca el flujo de búsqueda y reserva directamente dentro de tu app nativa — tu marca, tu design system, tus métricas de retención. Tictactrip se mantiene invisible para el usuario final.'},
      {icon: '🪙', title: 'Listo para fidelización y cashback', description: 'Apila canje de puntos, cashback y recompensas sobre tarifas netas. El flujo de reserva expone los componentes de precio que tu motor de fidelización necesita.'},
      {icon: '🌱', title: 'Gasto consciente del carbono', description: 'Las emisiones de CO₂ por pasajero acompañan cada itinerario, así puedes alimentar categorización de gasto verde, presupuestos de carbono y programas de compensación sin datos de terceros.'},
      {icon: '⚡', title: 'Entregar en semanas, no en trimestres', description: 'Especificación OpenAPI, colección Postman, tutorial paso a paso. Prototipa el primer día y entra en producción en 2 a 6 semanas en lugar de negociar individualmente con operadores.'},
    ],
    code: {filename: 'app-search.sh', body: codeBody},
    faqs: [
      {q: '¿Puedo embeber Tictactrip dentro de una app móvil nativa?', a: 'Sí. La API es REST y se consume desde tu backend o directamente desde tu cliente móvil. La mayoría de socios fintech proxean las llamadas a través de su propio backend para mantener el token de autenticación del lado del servidor.'},
      {q: '¿En qué formato se entregan los billetes?', a: 'Tictactrip entrega actualmente los billetes en PDF. Puedes enviarlos a usuarios por correo, adjuntarlos a confirmaciones o renderizarlos directamente dentro de tu app.'},
      {q: '¿Puedo añadir cashback o puntos de fidelización por encima?', a: 'Sí. La respuesta de reserva expone los componentes de precio que necesitas para aplicar tu markup, reglas de cashback o lógica de canje de puntos — Tictactrip gestiona la liquidación subyacente con el operador.'},
      {q: '¿Cómo se gestiona el flujo de pago?', a: 'La mayoría de socios fintech routean el pago a través de su PSP existente y llaman a Tictactrip con la tarifa neta. También soportamos flujos de reserva directos donde Tictactrip gestiona el pago extremo a extremo — tu contacto comercial te recorrerá ambas opciones.'},
    ],
    serviceType: 'API de reserva de viaje embebida para apps fintech y super-apps',
    audienceType: 'Apps fintech, neobancos, super-apps, plataformas de fidelización',
  },
  it: {
    eyebrow: 'Soluzione · Fintech & super-app',
    title: 'Fintech & super-app',
    metaTitle: 'API di viaggio integrata per app fintech e super-app — Tictactrip',
    description: 'Aggiungi prenotazione treno e autobus dentro la tua neobanca, app fedeltà o wallet. Una integrazione REST, 250+ vettori europei.',
    metaDescription: 'Integra la prenotazione di treni e autobus europei dentro neobanche, super-app, wallet di fedeltà e carte di mobilità. Una API REST ti connette a 250+ vettori con prezzi in tempo reale, consegna biglietto e dati CO₂.',
    keywords: 'API viaggio fintech, API viaggio super-app, prenotazione viaggio neobanca, viaggio wallet fedeltà, viaggio integrato, API wallet mobilità, API ferroviario fintech, API autobus fintech, Tictactrip fintech',
    heroTitle: <>Prenotazione viaggio integrata per<br /><span style={{color: '#6ee7b7'}}>fintech, neobanche &amp; super-app</span></>,
    heroLead: 'Aggiungi la prenotazione di treni e autobus europei dentro la tua app senza diventare una compagnia di viaggio. Una API REST, 250+ vettori, consegna biglietto integrata.',
    intro: (
      <>
        <h2>Il viaggio è la prossima verticale integrata per il fintech</h2>
        <p>Le neobanche, i programmi fedeltà e le super-app possiedono già l'utente, il wallet e la superficie di pagamento. La prossima mossa ad alto margine è il <strong>viaggio integrato</strong> — prenotare treni e autobus interurbani dentro la tua app esistente senza mandare gli utenti a un sito di terze parti.</p>
        <p><strong>Tictactrip</strong> è l'infrastruttura che rende tutto questo pratico. Una integrazione REST sblocca <strong>250+ vettori ferroviari e di autobus europei</strong>, prezzi in tempo reale e consegna biglietto end-to-end. Il tuo team di ingegneria integra una singola API; i tuoi utenti vedono il tuo brand.</p>
      </>
    ),
    capabilities: [
      '250+ vettori europei treno e autobus',
      'API REST calibrata su embedding in-app e webview',
      'Prezzi e disponibilità di posti in tempo reale',
      'Biglietti PDF, pronti per essere inviati o renderizzati dentro la tua app',
      'Emissioni CO₂ per passeggero per prodotti di spesa sostenibile',
      'Flussi di rimborso e cambio tramite la stessa API',
    ],
    benefits: [
      {icon: '📱', title: 'Esperienza nativa in-app', description: "Inserisci il flusso di ricerca e prenotazione direttamente dentro la tua app nativa — il tuo brand, il tuo design system, le tue metriche di retention. Tictactrip resta invisibile all'utente finale."},
      {icon: '🪙', title: 'Pronto per fedeltà e cashback', description: "Sovrapponi utilizzo punti, cashback e premi alle tariffe nette. Il flusso di prenotazione espone le componenti di prezzo di cui il tuo motore di fedeltà ha bisogno."},
      {icon: '🌱', title: 'Spesa consapevole del carbonio', description: "Le emissioni di CO₂ per passeggero arrivano con ogni itinerario, così puoi alimentare categorizzazione di spesa verde, budget carbonio e programmi di compensazione senza dati di terze parti."},
      {icon: '⚡', title: 'Spedire in settimane, non in trimestri', description: "Specifica OpenAPI, raccolta Postman, tutorial passo passo. Prototipa il primo giorno e vai in produzione in 2-6 settimane invece di negoziare individualmente con i vettori."},
    ],
    code: {filename: 'app-search.sh', body: codeBody},
    faqs: [
      {q: 'Posso integrare Tictactrip dentro una app mobile nativa?', a: "Sì. L'API è REST e viene consumata dal tuo backend o direttamente dal tuo client mobile. La maggior parte dei partner fintech fa proxy delle chiamate tramite il proprio backend per tenere il token di autenticazione lato server."},
      {q: 'In quale formato vengono consegnati i biglietti?', a: "Tictactrip al momento consegna i biglietti in PDF. Puoi inviarli agli utenti via email, allegarli alle conferme o renderizzarli direttamente dentro la tua app."},
      {q: 'Posso aggiungere cashback o punti fedeltà sopra?', a: "Sì. La risposta di prenotazione espone le componenti di prezzo di cui hai bisogno per applicare il tuo markup, le tue regole di cashback o la logica di utilizzo punti — Tictactrip gestisce il regolamento sottostante con il vettore."},
      {q: 'Come viene gestito il flusso di pagamento?', a: "La maggior parte dei partner fintech instrada il pagamento tramite il proprio PSP esistente e chiama Tictactrip con la tariffa netta. Supportiamo anche flussi di prenotazione diretti dove Tictactrip gestisce il pagamento end-to-end — il tuo contatto commerciale ti illustrerà entrambe le opzioni."},
    ],
    serviceType: 'API di prenotazione viaggio integrata per app fintech e super-app',
    audienceType: 'App fintech, neobanche, super-app, piattaforme di fedeltà',
  },
  pt: {
    eyebrow: 'Solução · Fintech & super-apps',
    title: 'Fintech & super-apps',
    metaTitle: 'API de viagem integrada para apps fintech e super-apps — Tictactrip',
    description: 'Adicione reserva de comboio e autocarro dentro do seu neobanco, app de fidelização ou wallet. Uma integração REST, 250+ transportadoras europeias.',
    metaDescription: 'Integre a reserva de comboios e autocarros europeus dentro de neobancos, super-apps, wallets de fidelização e cartões de mobilidade. Uma API REST liga-o a 250+ transportadoras com preços em tempo real, entrega de bilhete e dados de CO₂.',
    keywords: 'API viagem fintech, API viagem super-app, reserva viagem neobanco, viagem wallet fidelização, viagem integrada, API wallet mobilidade, API ferroviária fintech, API autocarro fintech, Tictactrip fintech',
    heroTitle: <>Reserva de viagem integrada para<br /><span style={{color: '#6ee7b7'}}>fintechs, neobancos &amp; super-apps</span></>,
    heroLead: 'Adicione reserva de comboio e autocarro europeus dentro da sua app sem se tornar uma empresa de viagens. Uma API REST, 250+ transportadoras, entrega de bilhete integrada.',
    intro: (
      <>
        <h2>A viagem é a próxima vertical integrada para fintech</h2>
        <p>Os neobancos, programas de fidelização e super-apps já possuem o utilizador, a wallet e a superfície de pagamento. O próximo movimento de alta margem é a <strong>viagem integrada</strong> — reservar comboios e autocarros interurbanos dentro da sua app existente sem mandar os utilizadores para um site de terceiros.</p>
        <p>A <strong>Tictactrip</strong> é a infraestrutura que torna isso prático. Uma integração REST desbloqueia <strong>250+ transportadoras europeias de comboio e autocarro</strong>, preços em tempo real e entrega de bilhete ponto a ponto. A sua equipa de engenharia integra uma única API; os seus utilizadores veem a sua marca.</p>
      </>
    ),
    capabilities: [
      '250+ transportadoras europeias de comboio e autocarro',
      'API REST afinada para integração in-app e webviews',
      'Preços e disponibilidade de lugares em tempo real',
      'Bilhetes PDF, prontos a enviar ou apresentar dentro da sua app',
      'Emissões de CO₂ por passageiro para produtos de gasto sustentável',
      'Fluxos de reembolso e troca através da mesma API',
    ],
    benefits: [
      {icon: '📱', title: 'Experiência nativa in-app', description: 'Coloque o fluxo de pesquisa e reserva diretamente dentro da sua app nativa — a sua marca, o seu design system, as suas métricas de retenção. A Tictactrip mantém-se invisível para o utilizador final.'},
      {icon: '🪙', title: 'Pronto para fidelização e cashback', description: 'Empilhe utilização de pontos, cashback e recompensas sobre tarifas líquidas. O fluxo de reserva expõe as componentes de preço de que o seu motor de fidelização precisa.'},
      {icon: '🌱', title: 'Gasto consciente do carbono', description: 'As emissões de CO₂ por passageiro acompanham cada itinerário, para que possa alimentar categorização de gasto verde, orçamentos de carbono e programas de compensação sem dados de terceiros.'},
      {icon: '⚡', title: 'Entregar em semanas, não em trimestres', description: 'Especificação OpenAPI, coleção Postman, tutorial passo a passo. Faça protótipo no primeiro dia e entre em produção em 2 a 6 semanas em vez de negociar individualmente com as transportadoras.'},
    ],
    code: {filename: 'app-search.sh', body: codeBody},
    faqs: [
      {q: 'Posso integrar a Tictactrip dentro de uma app móvel nativa?', a: 'Sim. A API é REST e é consumida do seu backend ou diretamente do seu cliente móvel. A maioria dos parceiros fintech faz proxy das chamadas através do seu próprio backend para manter o token de autenticação no servidor.'},
      {q: 'Em que formato são entregues os bilhetes?', a: 'A Tictactrip entrega atualmente os bilhetes em PDF. Pode enviá-los aos utilizadores por email, anexá-los a confirmações ou apresentá-los diretamente dentro da sua app.'},
      {q: 'Posso adicionar cashback ou pontos de fidelização por cima?', a: 'Sim. A resposta de reserva expõe as componentes de preço de que precisa para aplicar o seu markup, regras de cashback ou lógica de utilização de pontos — a Tictactrip trata da liquidação subjacente com a transportadora.'},
      {q: 'Como é tratado o fluxo de pagamento?', a: 'A maioria dos parceiros fintech encaminha o pagamento pelo seu PSP existente e chama a Tictactrip com a tarifa líquida. Também suportamos fluxos de reserva diretos em que a Tictactrip trata do pagamento ponto a ponto — o seu contacto comercial explicará ambas as opções.'},
    ],
    serviceType: 'API de reserva de viagem integrada para apps fintech e super-apps',
    audienceType: 'Apps fintech, neobancos, super-apps, plataformas de fidelização',
  },
  ru: {
    eyebrow: 'Решение · Финтех и супер-приложения',
    title: 'Финтех и супер-приложения',
    metaTitle: 'Встраиваемый API путешествий для финтех-приложений и супер-приложений — Tictactrip',
    description: 'Добавьте бронирование поездов и автобусов внутрь вашего необанка, приложения лояльности или кошелька. Одна REST-интеграция, 250+ европейских перевозчиков.',
    metaDescription: 'Встройте бронирование европейских поездов и автобусов внутрь необанков, супер-приложений, кошельков лояльности и карт мобильности. Один REST API соединяет вас с 250+ перевозчиками с ценами в реальном времени, доставкой билетов и данными CO₂.',
    keywords: 'API путешествий финтех, API путешествий супер-приложение, бронирование путешествий в необанке, путешествия в кошельке лояльности, встраиваемые путешествия, API кошельков мобильности, API поездов финтех, API автобусов финтех, Tictactrip финтех',
    heroTitle: <>Встроенное бронирование путешествий для<br /><span style={{color: '#6ee7b7'}}>финтехов, необанков и супер-приложений</span></>,
    heroLead: 'Добавьте бронирование европейских поездов и автобусов внутрь вашего приложения, не становясь компанией-турагентом. Один REST API, 250+ перевозчиков, доставка билетов встроена.',
    intro: (
      <>
        <h2>Путешествия — это следующая встраиваемая вертикаль для финтеха</h2>
        <p>Необанки, программы лояльности и супер-приложения уже владеют пользователем, кошельком и платёжной поверхностью. Следующий высокомаржинальный шаг — это <strong>встроенные путешествия</strong>: бронирование поездов и междугородних автобусов прямо внутри существующего приложения, без отправки пользователей на сторонний сайт.</p>
        <p><strong>Tictactrip</strong> — инфраструктура, которая делает это практичным. Одна REST-интеграция открывает <strong>250+ европейских железнодорожных и автобусных перевозчиков</strong>, цены в реальном времени и сквозную выдачу билетов. Ваша инженерная команда интегрирует один API; ваши пользователи видят ваш бренд.</p>
      </>
    ),
    capabilities: [
      '250+ европейских перевозчиков поездов и автобусов',
      'REST API, настроенный на встраивание в приложение и веб-вью',
      'Цены и доступность мест в реальном времени',
      'PDF-билеты, готовые к отправке или отображению в вашем приложении',
      'Выбросы CO₂ на пассажира для продуктов устойчивых расходов',
      'Процессы возврата и обмена через тот же API',
    ],
    benefits: [
      {icon: '📱', title: 'Нативный опыт в приложении', description: 'Встройте поток поиска и бронирования прямо внутрь нативного приложения — ваш бренд, ваша дизайн-система, ваши метрики удержания. Tictactrip остаётся невидимым для конечного пользователя.'},
      {icon: '🪙', title: 'Готовность к лояльности и кешбэку', description: 'Накладывайте использование баллов, кешбэк и награды поверх нетто-тарифов. Процесс бронирования предоставляет ценовые компоненты, нужные вашему движку лояльности.'},
      {icon: '🌱', title: 'Углерод-осознанные расходы', description: 'Выбросы CO₂ на пассажира идут с каждым маршрутом, поэтому вы можете питать категоризацию «зелёных» трат, углеродные бюджеты и компенсационные программы без сторонних данных.'},
      {icon: '⚡', title: 'Выпускать за недели, а не за кварталы', description: 'Спецификация OpenAPI, коллекция Postman, пошаговое руководство. Прототип на первый день и продакшен за 2–6 недель вместо индивидуальных переговоров с перевозчиками.'},
    ],
    code: {filename: 'app-search.sh', body: codeBody},
    faqs: [
      {q: 'Могу ли я встроить Tictactrip внутрь нативного мобильного приложения?', a: 'Да. API основан на REST и потребляется из вашего бэкенда или прямо из мобильного клиента. Большинство финтех-партнёров проксируют вызовы через свой бэкенд, чтобы держать токен аутентификации на серверной стороне.'},
      {q: 'В каком формате доставляются билеты?', a: 'Tictactrip в настоящее время доставляет билеты в формате PDF. Вы можете отправлять их пользователям по email, прикреплять к подтверждениям или отображать прямо внутри приложения.'},
      {q: 'Могу ли я добавить кешбэк или баллы лояльности сверху?', a: 'Да. Ответ бронирования предоставляет ценовые компоненты, нужные вам, чтобы применить собственную наценку, правила кешбэка или логику использования баллов — Tictactrip обрабатывает базовый расчёт с перевозчиком.'},
      {q: 'Как обрабатывается платёжный поток?', a: 'Большинство финтех-партнёров направляют оплату через свой существующий PSP и вызывают Tictactrip с нетто-тарифом. Также мы поддерживаем прямые потоки бронирования, где Tictactrip обрабатывает платёж сквозным образом — ваш менеджер по продажам разъяснит оба варианта.'},
    ],
    serviceType: 'Встраиваемый API бронирования путешествий для финтех-приложений и супер-приложений',
    audienceType: 'Финтех-приложения, необанки, супер-приложения, платформы лояльности',
  },
};
