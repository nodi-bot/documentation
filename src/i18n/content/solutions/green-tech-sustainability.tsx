import React from 'react';
import type {Translations} from '../../useTranslation';
import type {SolutionPageProps} from '../../../components/SolutionPage';

type SolutionPageContent = Omit<SolutionPageProps, 'slug' | 'related'>;

const codeBody = `# Compare alternatives for a business trip
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRpari____@u09tu",
    "destinationGpuid": "c|FRmars____@spey8",
    "outboundDate":     "2026-06-12T00:00:00Z",
    "passengers":       [{"age": 30}]
  }'`;

export const greenTech: Translations<SolutionPageContent> = {
  en: {
    eyebrow: 'Solution · Green-tech & sustainability',
    title: 'Green-tech & sustainability',
    metaTitle: 'Sustainable travel API with CO₂ data — Green-tech & climate platforms | Tictactrip',
    description: 'Build climate-aware travel tools on top of European rail and bus inventory with CO₂ emissions per passenger.',
    metaDescription: 'Sustainable travel API for green-tech and climate platforms. Build carbon-aware booking, employee commuting tools and Scope 3 reporting on top of 250+ European rail and bus carriers with CO₂ data per passenger.',
    keywords: 'sustainable travel API, CO2 travel API, green travel API, carbon footprint travel, climate-tech travel, Scope 3 travel API, employee commuting API, low-carbon travel API, Tictactrip sustainability',
    heroTitle: <>Travel data with<br /><span style={{color: '#6ee7b7'}}>verified CO₂ per passenger</span></>,
    heroLead: 'Build climate-aware booking, employee commuting platforms and carbon-budget products on top of European rail and bus inventory.',
    intro: (
      <>
        <h2>Climate platforms need real inventory, not just emission factors</h2>
        <p>Most sustainability tools start with <strong>emission factors</strong> — but a useful product needs to connect those numbers to <strong>actual bookable journeys</strong>. That's where Tictactrip fits.</p>
        <p>We expose <strong>250+ European train and bus carriers</strong> through one REST API. Every itinerary returns CO₂ emissions per passenger per leg, alongside price, duration and carrier metadata — the raw material green-tech products need to compute alternatives, score business trips or run carbon budgets.</p>
      </>
    ),
    capabilities: [
      'CO₂ emissions per passenger per leg, on every itinerary',
      '250+ rail and bus carriers across Europe',
      'Multimodal itineraries to surface lower-emission alternatives',
      'Real-time pricing for spend-and-emissions comparisons',
      'End-to-end booking when you want to close the loop',
      'GDPR-compliant — operated under French and EU law',
    ],
    benefits: [
      {icon: '🌍', title: 'CO₂ on every itinerary', description: 'Each itinerary carries an estimated CO₂ footprint per passenger per leg — the bedrock of climate-tech products that need to compare modes, routes or carriers.'},
      {icon: '🛤️', title: 'Surface low-carbon alternatives', description: 'Compare a short-haul flight to high-speed rail on the same origin-destination pair. Build product flows that nudge users toward the lower-emission option.'},
      {icon: '📈', title: 'Feed Scope 3 reporting', description: 'Aggregate booking-level emissions into corporate Scope 3 reports, ESG dashboards or carbon-budget products. The data structure is consistent and audit-ready.'},
      {icon: '🇪🇺', title: 'EU-based and GDPR-compliant', description: 'Tictactrip is a French company operating in compliance with the GDPR. A natural fit for European sustainability and government-adjacent climate programs.'},
    ],
    code: {filename: 'climate-search.sh', body: codeBody},
    faqs: [
      {q: 'How are CO₂ emissions calculated?', a: 'Emissions are estimated per passenger per leg based on the mode (train or bus), the carrier-specific operational profile and the leg distance. The methodology is consistent across operators so values are directly comparable.'},
      {q: 'Can I use the emissions data without booking through Tictactrip?', a: 'Yes. Many climate-tech partners use the search endpoint to surface emissions for decision-support flows even when the actual booking is handled by another channel.'},
      {q: 'Do you support employee-commuting use cases?', a: 'Yes. Several green-tech partners build employee-commuting platforms on top of Tictactrip — combining home-to-office routing with the CO₂ data the API returns.'},
      {q: 'Is the API suitable for Scope 3 / GHG accounting?', a: 'The emissions returned per booking are designed to feed into Scope 3 (category 6 business travel and category 7 employee commuting) workflows. Our team can walk through methodology details on request.'},
    ],
    serviceType: 'Sustainable travel API with CO₂ emissions data',
    audienceType: 'Green-tech startups, climate platforms, sustainability and ESG tools',
  },
  fr: {
    eyebrow: 'Solution · Green-tech & durabilité',
    title: 'Green-tech & durabilité',
    metaTitle: 'API de voyage durable avec données CO₂ — plateformes green-tech et climat | Tictactrip',
    description: "Construisez des outils de voyage climato-conscients sur l'inventaire ferroviaire et de bus européen avec les émissions de CO₂ par passager.",
    metaDescription: "API de voyage durable pour plateformes green-tech et climat. Construisez de la réservation climato-consciente, des outils de mobilité salariés et du reporting Scope 3 sur 250+ transporteurs ferroviaires et de bus européens avec données CO₂ par passager.",
    keywords: 'API voyage durable, API CO2 voyage, API voyage vert, empreinte carbone voyage, voyage climate-tech, API Scope 3 voyage, API mobilité salariés, API voyage bas carbone, Tictactrip durabilité',
    heroTitle: <>Données voyage avec<br /><span style={{color: '#6ee7b7'}}>CO₂ vérifié par passager</span></>,
    heroLead: "Construisez réservation climato-consciente, plateformes de mobilité salariés et produits de budget carbone sur l'inventaire ferroviaire et de bus européen.",
    intro: (
      <>
        <h2>Les plateformes climat ont besoin d'inventaire réel, pas seulement de facteurs d'émission</h2>
        <p>La plupart des outils de durabilité commencent par des <strong>facteurs d'émission</strong> — mais un produit utile doit connecter ces chiffres à des <strong>trajets réellement réservables</strong>. C'est là que Tictactrip s'inscrit.</p>
        <p>Nous exposons <strong>250+ transporteurs européens train et bus</strong> via une seule API REST. Chaque itinéraire renvoie des émissions de CO₂ par passager et par segment, à côté du prix, de la durée et des métadonnées du transporteur — la matière première dont les produits green-tech ont besoin pour calculer des alternatives, scorer des voyages d'affaires ou exécuter des budgets carbone.</p>
      </>
    ),
    capabilities: [
      "Émissions de CO₂ par passager et par segment, sur chaque itinéraire",
      "250+ transporteurs ferroviaires et de bus à travers l'Europe",
      "Itinéraires multimodaux pour mettre en avant des alternatives moins émettrices",
      "Tarification temps réel pour comparer dépense et émissions",
      "Réservation de bout en bout quand vous voulez boucler la boucle",
      "Conforme au RGPD — opérée sous droit français et européen",
    ],
    benefits: [
      {icon: '🌍', title: 'CO₂ sur chaque itinéraire', description: "Chaque itinéraire porte une empreinte CO₂ estimée par passager et par segment — la base des produits climate-tech qui doivent comparer modes, routes ou transporteurs."},
      {icon: '🛤️', title: 'Mettre en avant des alternatives bas carbone', description: "Comparez un vol court-courrier au TGV sur la même paire origine-destination. Construisez des flux produit qui poussent les utilisateurs vers l'option la moins émettrice."},
      {icon: '📈', title: 'Alimenter le reporting Scope 3', description: "Agrégez les émissions au niveau réservation en rapports Scope 3 d'entreprise, dashboards ESG ou produits de budget carbone. La structure de données est cohérente et prête à l'audit."},
      {icon: '🇪🇺', title: 'Basée dans l\'UE et conforme RGPD', description: "Tictactrip est une société française opérant en conformité avec le RGPD. Un ajustement naturel pour les programmes européens de durabilité et les initiatives climatiques proches des gouvernements."},
    ],
    code: {filename: 'climate-search.sh', body: codeBody},
    faqs: [
      {q: "Comment les émissions de CO₂ sont-elles calculées ?", a: "Les émissions sont estimées par passager et par segment en fonction du mode (train ou bus), du profil opérationnel spécifique au transporteur et de la distance du segment. La méthodologie est cohérente entre opérateurs pour que les valeurs soient directement comparables."},
      {q: "Puis-je utiliser les données d'émissions sans réserver via Tictactrip ?", a: "Oui. De nombreux partenaires climate-tech utilisent l'endpoint de recherche pour exposer les émissions dans des flux d'aide à la décision même quand la réservation passe par un autre canal."},
      {q: "Soutenez-vous des cas d'usage de mobilité salariés ?", a: "Oui. Plusieurs partenaires green-tech construisent des plateformes de mobilité salariés sur Tictactrip — combinant routage maison-bureau avec les données CO₂ que l'API renvoie."},
      {q: "L'API convient-elle au reporting Scope 3 / GES ?", a: "Les émissions renvoyées par réservation sont conçues pour alimenter les flux Scope 3 (catégorie 6 voyages d'affaires et catégorie 7 trajets salariés). Notre équipe peut détailler la méthodologie sur demande."},
    ],
    serviceType: "API de voyage durable avec données d'émissions de CO₂",
    audienceType: "Startups green-tech, plateformes climat, outils de durabilité et ESG",
  },
  de: {
    eyebrow: 'Lösung · Green-Tech & Nachhaltigkeit',
    title: 'Green-Tech & Nachhaltigkeit',
    metaTitle: 'Nachhaltige Reise-API mit CO₂-Daten — Green-Tech- und Klima-Plattformen | Tictactrip',
    description: 'Bauen Sie klimabewusste Reisetools auf europäischem Bahn- und Bus-Inventar mit CO₂-Emissionen pro Passagier.',
    metaDescription: 'Nachhaltige Reise-API für Green-Tech- und Klima-Plattformen. Bauen Sie CO₂-bewusste Buchungen, Mitarbeiter-Pendelplattformen und Scope-3-Reporting auf 250+ europäischen Bahn- und Bus-Transporteuren mit CO₂-Daten pro Passagier.',
    keywords: 'nachhaltige Reise-API, CO2-Reise-API, grüne Reise-API, Reise-Carbon-Footprint, Climate-Tech-Reisen, Scope-3-Reise-API, Mitarbeiter-Pendel-API, kohlenstoffarme Reise-API, Tictactrip Nachhaltigkeit',
    heroTitle: <>Reisedaten mit<br /><span style={{color: '#6ee7b7'}}>verifiziertem CO₂ pro Passagier</span></>,
    heroLead: 'Bauen Sie klimabewusste Buchungen, Mitarbeiter-Pendelplattformen und Carbon-Budget-Produkte auf europäischem Bahn- und Bus-Inventar.',
    intro: (
      <>
        <h2>Klima-Plattformen brauchen echtes Inventar, nicht nur Emissionsfaktoren</h2>
        <p>Die meisten Nachhaltigkeitstools beginnen mit <strong>Emissionsfaktoren</strong> — aber ein nützliches Produkt muss diese Zahlen mit <strong>tatsächlich buchbaren Reisen</strong> verbinden. Genau dort passt Tictactrip rein.</p>
        <p>Wir stellen <strong>250+ europäische Zug- und Bus-Transporteure</strong> über eine REST-API bereit. Jede Verbindung liefert CO₂-Emissionen pro Passagier pro Teilstrecke, zusammen mit Preis, Dauer und Transporteur-Metadaten — das Rohmaterial, das Green-Tech-Produkte brauchen, um Alternativen zu berechnen, Geschäftsreisen zu scoren oder Carbon-Budgets zu fahren.</p>
      </>
    ),
    capabilities: [
      'CO₂-Emissionen pro Passagier pro Teilstrecke, auf jeder Verbindung',
      '250+ Bahn- und Bus-Transporteure in ganz Europa',
      'Multimodale Verbindungen, um emissionsärmere Alternativen aufzuzeigen',
      'Echtzeit-Preise für Spend-und-Emissions-Vergleiche',
      'End-to-End-Buchung, wenn Sie den Kreislauf schließen wollen',
      'DSGVO-konform — betrieben unter französischem und EU-Recht',
    ],
    benefits: [
      {icon: '🌍', title: 'CO₂ auf jeder Verbindung', description: 'Jede Verbindung trägt einen geschätzten CO₂-Fußabdruck pro Passagier pro Teilstrecke — die Basis von Climate-Tech-Produkten, die Modi, Routen oder Transporteure vergleichen müssen.'},
      {icon: '🛤️', title: 'Kohlenstoffarme Alternativen aufzeigen', description: 'Vergleichen Sie einen Kurzstreckenflug mit Hochgeschwindigkeitsbahn auf demselben Start-Ziel-Paar. Bauen Sie Produktabläufe, die Nutzer zur emissionsärmeren Option drängen.'},
      {icon: '📈', title: 'Scope-3-Reporting speisen', description: 'Aggregieren Sie Buchungs-Emissionen in Unternehmens-Scope-3-Reports, ESG-Dashboards oder Carbon-Budget-Produkte. Die Datenstruktur ist konsistent und audit-fähig.'},
      {icon: '🇪🇺', title: 'EU-basiert und DSGVO-konform', description: 'Tictactrip ist ein französisches Unternehmen, das DSGVO-konform arbeitet. Eine natürliche Passung für europäische Nachhaltigkeitsprogramme und staatsnahe Klimainitiativen.'},
    ],
    code: {filename: 'climate-search.sh', body: codeBody},
    faqs: [
      {q: 'Wie werden CO₂-Emissionen berechnet?', a: 'Emissionen werden pro Passagier pro Teilstrecke geschätzt, basierend auf dem Modus (Zug oder Bus), dem Transporteur-spezifischen Betriebsprofil und der Teilstreckenlänge. Die Methodik ist über Operatoren hinweg konsistent, sodass Werte direkt vergleichbar sind.'},
      {q: 'Kann ich die Emissionsdaten nutzen, ohne über Tictactrip zu buchen?', a: 'Ja. Viele Climate-Tech-Partner nutzen den Suchendpunkt, um Emissionen für Entscheidungs-Workflows aufzuzeigen, auch wenn die eigentliche Buchung über einen anderen Kanal abgewickelt wird.'},
      {q: 'Unterstützen Sie Mitarbeiter-Pendel-Use-Cases?', a: 'Ja. Mehrere Green-Tech-Partner bauen Mitarbeiter-Pendel-Plattformen auf Tictactrip auf — Sie kombinieren Heim-zu-Büro-Routing mit den CO₂-Daten, die die API liefert.'},
      {q: 'Eignet sich die API für Scope-3- / GHG-Buchhaltung?', a: 'Die pro Buchung gelieferten Emissionen sind dafür ausgelegt, Scope-3-Workflows (Kategorie 6 Geschäftsreisen und Kategorie 7 Mitarbeiterpendeln) zu speisen. Unser Team kann methodische Details auf Anfrage durchgehen.'},
    ],
    serviceType: 'Nachhaltige Reise-API mit CO₂-Emissionsdaten',
    audienceType: 'Green-Tech-Startups, Klima-Plattformen, Nachhaltigkeits- und ESG-Tools',
  },
  es: {
    eyebrow: 'Solución · Green-tech & sostenibilidad',
    title: 'Green-tech & sostenibilidad',
    metaTitle: 'API de viaje sostenible con datos de CO₂ — Plataformas green-tech y climáticas | Tictactrip',
    description: 'Construye herramientas de viaje conscientes del clima sobre inventario europeo de tren y autobús con emisiones de CO₂ por pasajero.',
    metaDescription: 'API de viaje sostenible para plataformas green-tech y climáticas. Construye reserva consciente del carbono, herramientas de movilidad para empleados y reporting Scope 3 sobre 250+ operadores europeos de tren y autobús con datos de CO₂ por pasajero.',
    keywords: 'API viaje sostenible, API CO2 viaje, API viaje verde, huella carbono viaje, viaje climate-tech, API Scope 3 viaje, API movilidad empleados, API viaje bajo carbono, Tictactrip sostenibilidad',
    heroTitle: <>Datos de viaje con<br /><span style={{color: '#6ee7b7'}}>CO₂ verificado por pasajero</span></>,
    heroLead: 'Construye reserva consciente del clima, plataformas de movilidad para empleados y productos de presupuesto de carbono sobre inventario europeo de tren y autobús.',
    intro: (
      <>
        <h2>Las plataformas climáticas necesitan inventario real, no solo factores de emisión</h2>
        <p>La mayoría de herramientas de sostenibilidad empiezan con <strong>factores de emisión</strong> — pero un producto útil necesita conectar esos números a <strong>viajes realmente reservables</strong>. Ahí encaja Tictactrip.</p>
        <p>Exponemos <strong>250+ operadores europeos de tren y autobús</strong> a través de una API REST. Cada itinerario devuelve emisiones de CO₂ por pasajero y por tramo, junto al precio, duración y metadatos del operador — la materia prima que los productos green-tech necesitan para calcular alternativas, puntuar viajes corporativos o ejecutar presupuestos de carbono.</p>
      </>
    ),
    capabilities: [
      'Emisiones de CO₂ por pasajero y por tramo, en cada itinerario',
      '250+ operadores ferroviarios y de autobús por toda Europa',
      'Itinerarios multimodales para mostrar alternativas de menores emisiones',
      'Precios en tiempo real para comparaciones gasto-emisiones',
      'Reserva extremo a extremo cuando quieras cerrar el ciclo',
      'Cumple RGPD — operada bajo legislación francesa y europea',
    ],
    benefits: [
      {icon: '🌍', title: 'CO₂ en cada itinerario', description: 'Cada itinerario lleva una huella de CO₂ estimada por pasajero y por tramo — la base de los productos climate-tech que necesitan comparar modos, rutas u operadores.'},
      {icon: '🛤️', title: 'Mostrar alternativas bajas en carbono', description: 'Compara un vuelo corto con tren de alta velocidad en el mismo par origen-destino. Construye flujos de producto que empujen a los usuarios hacia la opción de menores emisiones.'},
      {icon: '📈', title: 'Alimentar el reporting Scope 3', description: 'Agrega las emisiones a nivel de reserva en informes Scope 3 corporativos, dashboards ESG o productos de presupuesto de carbono. La estructura de datos es consistente y lista para auditoría.'},
      {icon: '🇪🇺', title: 'Con base en la UE y cumple RGPD', description: 'Tictactrip es una empresa francesa que opera cumpliendo el RGPD. Un ajuste natural para programas europeos de sostenibilidad e iniciativas climáticas próximas a la administración pública.'},
    ],
    code: {filename: 'climate-search.sh', body: codeBody},
    faqs: [
      {q: '¿Cómo se calculan las emisiones de CO₂?', a: 'Las emisiones se estiman por pasajero y por tramo basadas en el modo (tren o autobús), el perfil operativo específico del operador y la distancia del tramo. La metodología se mantiene consistente entre operadores para que los valores sean directamente comparables.'},
      {q: '¿Puedo usar los datos de emisiones sin reservar a través de Tictactrip?', a: 'Sí. Muchos socios climate-tech usan el endpoint de búsqueda para exponer emisiones en flujos de apoyo a la decisión incluso cuando la reserva real se gestiona por otro canal.'},
      {q: '¿Soportáis casos de uso de movilidad para empleados?', a: 'Sí. Varios socios green-tech construyen plataformas de movilidad para empleados sobre Tictactrip — combinando enrutamiento casa-oficina con los datos de CO₂ que la API devuelve.'},
      {q: '¿La API es adecuada para contabilidad Scope 3 / GEI?', a: 'Las emisiones devueltas por reserva están diseñadas para alimentar flujos Scope 3 (categoría 6 viajes de negocios y categoría 7 desplazamientos de empleados). Nuestro equipo puede repasar los detalles de la metodología bajo petición.'},
    ],
    serviceType: 'API de viaje sostenible con datos de emisiones de CO₂',
    audienceType: 'Startups green-tech, plataformas climáticas, herramientas de sostenibilidad y ESG',
  },
  it: {
    eyebrow: 'Soluzione · Green-tech & sostenibilità',
    title: 'Green-tech & sostenibilità',
    metaTitle: 'API di viaggio sostenibile con dati CO₂ — Piattaforme green-tech e climatiche | Tictactrip',
    description: "Costruisci strumenti di viaggio attenti al clima sull'inventario europeo di treni e autobus con emissioni di CO₂ per passeggero.",
    metaDescription: "API di viaggio sostenibile per piattaforme green-tech e climatiche. Costruisci prenotazioni attente al carbonio, strumenti di mobilità per dipendenti e reporting Scope 3 su 250+ vettori europei di treni e autobus con dati CO₂ per passeggero.",
    keywords: 'API viaggio sostenibile, API CO2 viaggio, API viaggio verde, impronta carbonica viaggio, viaggio climate-tech, API Scope 3 viaggio, API mobilità dipendenti, API viaggio basso carbonio, Tictactrip sostenibilità',
    heroTitle: <>Dati di viaggio con<br /><span style={{color: '#6ee7b7'}}>CO₂ verificata per passeggero</span></>,
    heroLead: "Costruisci prenotazioni attente al clima, piattaforme di mobilità per dipendenti e prodotti di budget di carbonio sull'inventario europeo di treni e autobus.",
    intro: (
      <>
        <h2>Le piattaforme climatiche hanno bisogno di inventario reale, non solo di fattori di emissione</h2>
        <p>La maggior parte degli strumenti di sostenibilità parte dai <strong>fattori di emissione</strong> — ma un prodotto utile deve collegare quei numeri a <strong>viaggi realmente prenotabili</strong>. È qui che Tictactrip si inserisce.</p>
        <p>Esponiamo <strong>250+ vettori europei di treni e autobus</strong> tramite un'unica API REST. Ogni itinerario restituisce emissioni di CO₂ per passeggero e per tratta, accanto a prezzo, durata e metadati del vettore — la materia prima di cui i prodotti green-tech hanno bisogno per calcolare alternative, valutare viaggi di lavoro o eseguire budget di carbonio.</p>
      </>
    ),
    capabilities: [
      'Emissioni di CO₂ per passeggero e per tratta, su ogni itinerario',
      '250+ vettori ferroviari e di autobus in tutta Europa',
      'Itinerari multimodali per mettere in evidenza alternative a minori emissioni',
      'Prezzi in tempo reale per confronti spesa-emissioni',
      'Prenotazione end-to-end quando vuoi chiudere il cerchio',
      'Conforme al GDPR — operata sotto diritto francese e UE',
    ],
    benefits: [
      {icon: '🌍', title: 'CO₂ su ogni itinerario', description: "Ogni itinerario porta un'impronta CO₂ stimata per passeggero e per tratta — la base dei prodotti climate-tech che devono confrontare modi, rotte o vettori."},
      {icon: '🛤️', title: 'Mettere in evidenza alternative a basso carbonio', description: "Confronta un volo a corto raggio con l'alta velocità sulla stessa coppia origine-destinazione. Costruisci flussi di prodotto che spingono gli utenti verso l'opzione a minori emissioni."},
      {icon: '📈', title: 'Alimentare il reporting Scope 3', description: "Aggrega le emissioni a livello di prenotazione in report Scope 3 aziendali, dashboard ESG o prodotti di budget di carbonio. La struttura dati è coerente e pronta per audit."},
      {icon: '🇪🇺', title: 'Con base nell\'UE e conforme al GDPR', description: "Tictactrip è un'azienda francese operante in conformità al GDPR. Un adattamento naturale per i programmi europei di sostenibilità e le iniziative climatiche vicine alla pubblica amministrazione."},
    ],
    code: {filename: 'climate-search.sh', body: codeBody},
    faqs: [
      {q: 'Come vengono calcolate le emissioni di CO₂?', a: "Le emissioni sono stimate per passeggero e per tratta in base al modo (treno o autobus), al profilo operativo specifico del vettore e alla distanza della tratta. La metodologia è coerente fra operatori così i valori sono direttamente comparabili."},
      {q: 'Posso usare i dati di emissioni senza prenotare tramite Tictactrip?', a: "Sì. Molti partner climate-tech usano l'endpoint di ricerca per esporre le emissioni in flussi di supporto decisionale anche quando la prenotazione effettiva è gestita da un altro canale."},
      {q: "Supportate casi d'uso di mobilità per dipendenti?", a: "Sì. Diversi partner green-tech costruiscono piattaforme di mobilità per dipendenti su Tictactrip — combinando routing casa-ufficio con i dati CO₂ restituiti dall'API."},
      {q: "L'API è adatta alla contabilità Scope 3 / GHG?", a: "Le emissioni restituite per prenotazione sono progettate per alimentare flussi Scope 3 (categoria 6 viaggi di lavoro e categoria 7 spostamenti casa-lavoro). Il nostro team può approfondire i dettagli metodologici su richiesta."},
    ],
    serviceType: 'API di viaggio sostenibile con dati di emissioni di CO₂',
    audienceType: 'Startup green-tech, piattaforme climatiche, strumenti di sostenibilità e ESG',
  },
  pt: {
    eyebrow: 'Solução · Green-tech & sustentabilidade',
    title: 'Green-tech & sustentabilidade',
    metaTitle: 'API de viagem sustentável com dados de CO₂ — Plataformas green-tech e climáticas | Tictactrip',
    description: 'Construa ferramentas de viagem conscientes do clima sobre o inventário europeu de comboio e autocarro com emissões de CO₂ por passageiro.',
    metaDescription: 'API de viagem sustentável para plataformas green-tech e climáticas. Construa reservas conscientes do carbono, ferramentas de mobilidade para colaboradores e relatórios Scope 3 sobre 250+ transportadoras europeias de comboio e autocarro com dados de CO₂ por passageiro.',
    keywords: 'API viagem sustentável, API CO2 viagem, API viagem verde, pegada carbónica viagem, viagem climate-tech, API Scope 3 viagem, API mobilidade colaboradores, API viagem baixo carbono, Tictactrip sustentabilidade',
    heroTitle: <>Dados de viagem com<br /><span style={{color: '#6ee7b7'}}>CO₂ verificado por passageiro</span></>,
    heroLead: 'Construa reservas conscientes do clima, plataformas de mobilidade para colaboradores e produtos de orçamento de carbono sobre o inventário europeu de comboio e autocarro.',
    intro: (
      <>
        <h2>As plataformas climáticas precisam de inventário real, não apenas de fatores de emissão</h2>
        <p>A maioria das ferramentas de sustentabilidade começa com <strong>fatores de emissão</strong> — mas um produto útil precisa de ligar esses números a <strong>viagens realmente reserváveis</strong>. É onde a Tictactrip encaixa.</p>
        <p>Expomos <strong>250+ transportadoras europeias de comboio e autocarro</strong> através de uma API REST. Cada itinerário devolve emissões de CO₂ por passageiro e por troço, junto com preço, duração e metadados da transportadora — a matéria-prima de que os produtos green-tech precisam para calcular alternativas, pontuar viagens de negócios ou executar orçamentos de carbono.</p>
      </>
    ),
    capabilities: [
      'Emissões de CO₂ por passageiro e por troço, em cada itinerário',
      '250+ transportadoras ferroviárias e de autocarro em toda a Europa',
      'Itinerários multimodais para apresentar alternativas com menores emissões',
      'Preços em tempo real para comparações gasto-emissões',
      'Reserva ponto a ponto quando quiser fechar o ciclo',
      'Conforme com o RGPD — operada sob legislação francesa e europeia',
    ],
    benefits: [
      {icon: '🌍', title: 'CO₂ em cada itinerário', description: 'Cada itinerário leva uma pegada de CO₂ estimada por passageiro e por troço — a base dos produtos climate-tech que precisam de comparar modos, rotas ou transportadoras.'},
      {icon: '🛤️', title: 'Apresentar alternativas de baixo carbono', description: 'Compare um voo curto com o comboio de alta velocidade no mesmo par origem-destino. Construa fluxos de produto que empurram os utilizadores para a opção com menores emissões.'},
      {icon: '📈', title: 'Alimentar os relatórios Scope 3', description: 'Agregue emissões ao nível de reserva em relatórios Scope 3 empresariais, dashboards ESG ou produtos de orçamento de carbono. A estrutura de dados é consistente e pronta para auditoria.'},
      {icon: '🇪🇺', title: 'Sediada na UE e conforme RGPD', description: 'A Tictactrip é uma empresa francesa operando em conformidade com o RGPD. Um encaixe natural para programas europeus de sustentabilidade e iniciativas climáticas próximas da administração pública.'},
    ],
    code: {filename: 'climate-search.sh', body: codeBody},
    faqs: [
      {q: 'Como são calculadas as emissões de CO₂?', a: 'As emissões são estimadas por passageiro e por troço com base no modo (comboio ou autocarro), no perfil operacional específico da transportadora e na distância do troço. A metodologia mantém-se consistente entre operadores para que os valores sejam diretamente comparáveis.'},
      {q: 'Posso usar os dados de emissões sem reservar através da Tictactrip?', a: 'Sim. Muitos parceiros climate-tech usam o endpoint de pesquisa para apresentar emissões em fluxos de apoio à decisão mesmo quando a reserva é tratada por outro canal.'},
      {q: 'Suportam casos de uso de mobilidade para colaboradores?', a: 'Sim. Vários parceiros green-tech constroem plataformas de mobilidade para colaboradores sobre a Tictactrip — combinando roteamento casa-escritório com os dados de CO₂ que a API devolve.'},
      {q: 'A API é adequada para contabilidade Scope 3 / GEE?', a: 'As emissões devolvidas por reserva foram concebidas para alimentar fluxos Scope 3 (categoria 6 viagens de negócios e categoria 7 deslocações casa-trabalho). A nossa equipa pode rever os detalhes da metodologia mediante pedido.'},
    ],
    serviceType: 'API de viagem sustentável com dados de emissões de CO₂',
    audienceType: 'Startups green-tech, plataformas climáticas, ferramentas de sustentabilidade e ESG',
  },
  ru: {
    eyebrow: 'Решение · Грин-тех и устойчивое развитие',
    title: 'Грин-тех и устойчивое развитие',
    metaTitle: 'API устойчивых путешествий с данными CO₂ — Грин-тех и климатические платформы | Tictactrip',
    description: 'Создавайте климатически осознанные инструменты путешествий поверх европейского инвентаря поездов и автобусов с выбросами CO₂ на пассажира.',
    metaDescription: 'API устойчивых путешествий для грин-тех и климатических платформ. Создавайте бронирование, осознанное по углероду, инструменты корпоративной мобильности и отчётность Scope 3 поверх 250+ европейских железнодорожных и автобусных перевозчиков с данными CO₂ на пассажира.',
    keywords: 'API устойчивых путешествий, API CO2 путешествий, API зелёных путешествий, углеродный след путешествий, путешествия climate-tech, API Scope 3 путешествий, API коммутирования сотрудников, API низкоуглеродных путешествий, Tictactrip устойчивость',
    heroTitle: <>Данные о путешествиях с<br /><span style={{color: '#6ee7b7'}}>проверенным CO₂ на пассажира</span></>,
    heroLead: 'Создавайте бронирование, осознанное по климату, платформы корпоративной мобильности и продукты углеродного бюджета поверх европейского инвентаря поездов и автобусов.',
    intro: (
      <>
        <h2>Климатическим платформам нужен реальный инвентарь, а не только коэффициенты выбросов</h2>
        <p>Большинство инструментов устойчивого развития начинают с <strong>коэффициентов выбросов</strong> — но полезный продукт должен связать эти числа с <strong>реальными бронируемыми поездками</strong>. Именно туда вписывается Tictactrip.</p>
        <p>Мы открываем <strong>250+ европейских железнодорожных и автобусных перевозчиков</strong> через один REST API. Каждый маршрут возвращает выбросы CO₂ на пассажира на сегмент, вместе с ценой, продолжительностью и метаданными перевозчика — сырьё, нужное грин-тех продуктам для расчёта альтернатив, оценки командировок или ведения углеродных бюджетов.</p>
      </>
    ),
    capabilities: [
      'Выбросы CO₂ на пассажира на сегмент, на каждом маршруте',
      '250+ железнодорожных и автобусных перевозчиков по всей Европе',
      'Мультимодальные маршруты для показа альтернатив с меньшими выбросами',
      'Цены в реальном времени для сравнений расход-выбросы',
      'Сквозное бронирование, когда вы хотите замкнуть цикл',
      'Соответствует GDPR — работает под французским и европейским правом',
    ],
    benefits: [
      {icon: '🌍', title: 'CO₂ на каждом маршруте', description: 'Каждый маршрут несёт оценочный углеродный след на пассажира на сегмент — основа продуктов climate-tech, которым нужно сравнивать виды транспорта, маршруты или перевозчиков.'},
      {icon: '🛤️', title: 'Выводите низкоуглеродные альтернативы', description: 'Сравнивайте короткий перелёт с высокоскоростной железной дорогой на одной паре «откуда-куда». Создавайте продуктовые потоки, направляющие пользователей к варианту с меньшими выбросами.'},
      {icon: '📈', title: 'Питайте отчётность Scope 3', description: 'Агрегируйте выбросы на уровне бронирования в корпоративные отчёты Scope 3, ESG-дашборды или продукты углеродного бюджета. Структура данных согласована и готова к аудиту.'},
      {icon: '🇪🇺', title: 'Базируется в ЕС и соответствует GDPR', description: 'Tictactrip — французская компания, работающая в соответствии с GDPR. Естественный выбор для европейских программ устойчивого развития и климатических инициатив, связанных с правительством.'},
    ],
    code: {filename: 'climate-search.sh', body: codeBody},
    faqs: [
      {q: 'Как рассчитываются выбросы CO₂?', a: 'Выбросы оцениваются на пассажира на сегмент исходя из вида транспорта (поезд или автобус), эксплуатационного профиля конкретного перевозчика и длины сегмента. Методология согласована между операторами, поэтому значения непосредственно сопоставимы.'},
      {q: 'Можно ли использовать данные о выбросах, не бронируя через Tictactrip?', a: 'Да. Многие партнёры climate-tech используют поисковый эндпоинт, чтобы выводить выбросы в потоках поддержки принятия решений, даже когда сама бронь обрабатывается через другой канал.'},
      {q: 'Поддерживаете ли вы кейсы корпоративной мобильности сотрудников?', a: 'Да. Несколько грин-тех партнёров создают платформы корпоративной мобильности поверх Tictactrip — объединяют маршрутизацию дом-офис с данными CO₂, которые возвращает API.'},
      {q: 'Подходит ли API для учёта Scope 3 / ПГ?', a: 'Выбросы, возвращаемые на каждое бронирование, спроектированы для подачи в потоки Scope 3 (категория 6 деловые поездки и категория 7 коммутирование сотрудников). Наша команда может разобрать детали методологии по запросу.'},
    ],
    serviceType: 'API устойчивых путешествий с данными о выбросах CO₂',
    audienceType: 'Грин-тех стартапы, климатические платформы, инструменты устойчивого развития и ESG',
  },
};
