import React from 'react';
import type {Translations} from '../../useTranslation';
import type {SolutionPageProps} from '../../../components/SolutionPage';

type FeaturePageContent = Omit<SolutionPageProps, 'slug' | 'related'>;

const codeBody = `# Search returns CO₂ on every bundle
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRpari____@u09tu",
    "destinationGpuid": "c|FRmars____@spey8",
    "outboundDate":     "2026-06-12T00:00:00Z",
    "passengers":       [{"age": 30}]
  }'`;

export const ecoResponsible: Translations<FeaturePageContent> = {
  en: {
    breadcrumbCategory: 'Features',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Why CO₂ data on every itinerary',
    relatedHeading: 'Other Tictactrip features',
    eyebrow: 'Feature · Eco-responsible by design',
    title: 'Eco-responsible by design',
    metaTitle: 'Eco-responsible travel API with CO₂ data per itinerary | Tictactrip',
    description: 'Every itinerary returns its CO₂ footprint per passenger. Build climate-aware travel products, green filters and Scope 3 reporting directly on top of the API.',
    metaDescription: 'Eco-responsible travel API with CO₂ emissions per passenger on every itinerary. Power green filters, sustainable-spend products, employee commuting tools and Scope 3 reporting across 250+ European rail and bus carriers.',
    keywords: 'eco-responsible travel API, CO2 travel API, sustainable travel API, green travel API, carbon footprint API, Scope 3 travel API, ESG travel reporting, Tictactrip CO2',
    heroTitle: <>Travel data with<br /><span style={{color: '#6ee7b7'}}>verified CO₂ on every itinerary</span></>,
    heroLead: 'Tictactrip returns the CO₂ footprint per passenger for every train and bus itinerary — the raw material for climate-aware products, green filters and Scope 3 reporting.',
    intro: (
      <>
        <h2>Sustainability needs to be measurable, not just aspirational</h2>
        <p>Most travel APIs treat CO₂ as a marketing afterthought. Tictactrip was built around the opposite premise: <strong>emissions data is a first-class field on every search result</strong>, computed consistently across carriers and modes.</p>
        <p>That single design decision unlocks an entire family of products: <strong>green filters</strong> on OTA search pages, <strong>carbon budgets</strong> in corporate travel platforms, <strong>employee-commuting tools</strong>, <strong>Scope 3 reporting</strong> dashboards, and <strong>climate-aware fintech features</strong>.</p>
        <p>Tictactrip is a French company, operated under GDPR and EU law — a natural fit for European sustainability programs and government-adjacent climate initiatives.</p>
      </>
    ),
    capabilities: [
      'CO₂ emissions per passenger per leg, on every itinerary',
      'Consistent methodology across all 250+ carriers',
      'Mode-aware estimates (train vs bus vs intercity)',
      'Operational-profile adjustments per carrier',
      'Suitable for Scope 3 (category 6 & 7) reporting',
      'GDPR-compliant — French / EU jurisdiction',
    ],
    benefits: [
      {icon: '🌱', title: 'Build climate-aware UX', description: 'Surface the lowest-emission option directly in your search UI. Replace short-haul flights with high-speed rail using the same CO₂ data your users will see.'},
      {icon: '📈', title: 'Feed Scope 3 reporting', description: 'Each booking returns audit-friendly emissions per passenger. Aggregate them into corporate ESG dashboards, GHG accounting or carbon-budget products.'},
      {icon: '⚖️', title: 'Comparable, not just a number', description: 'A consistent methodology across carriers means you can rank itineraries by carbon impact — not just price or duration — without ad-hoc normalisation.'},
      {icon: '🇪🇺', title: 'Operated under GDPR', description: 'Tictactrip is a French company and runs the API under EU law — important for government, ESG and climate programs with strict data-handling requirements.'},
    ],
    code: {filename: 'search-co2.sh', body: codeBody},
    faqs: [
      {q: 'How are CO₂ emissions calculated?', a: 'Emissions are estimated per passenger per leg, based on the mode (train or bus), the carrier-specific operational profile and the leg distance. The methodology stays consistent across operators so values are directly comparable.'},
      {q: 'Can I use the emissions data without booking through Tictactrip?', a: 'Yes. Many climate-tech partners hit the search endpoint purely for emissions data — for example to power green decision-support flows even when the booking is handled elsewhere.'},
      {q: 'Is the data suitable for Scope 3 corporate reporting?', a: 'The emissions returned per booking are designed to feed Scope 3 (category 6 business travel and category 7 employee commuting) workflows. Our team can walk through methodology details on request.'},
      {q: 'Does the API let me filter by lowest emissions?', a: 'Each itinerary returns its CO₂ footprint in a consistent field. You apply your own sorting and filtering logic — most partners surface a "Greenest option" badge or sort the cheapest itineraries by CO₂ as a secondary criterion.'},
    ],
    serviceType: 'CO₂-aware multimodal travel API for sustainability products',
    audienceType: 'Sustainability platforms, climate-tech, corporate travel, ESG reporting tools',
  },
  fr: {
    breadcrumbCategory: 'Fonctionnalités',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Pourquoi les données CO₂ sur chaque itinéraire',
    relatedHeading: 'Autres fonctionnalités Tictactrip',
    eyebrow: 'Fonctionnalité · Éco-responsable par conception',
    title: 'Éco-responsable par conception',
    metaTitle: 'API de voyage éco-responsable avec données CO₂ par itinéraire | Tictactrip',
    description: "Chaque itinéraire renvoie son empreinte CO₂ par passager. Construisez des produits de voyage climato-conscients, des filtres verts et un reporting Scope 3 directement sur l'API.",
    metaDescription: "API de voyage éco-responsable avec émissions de CO₂ par passager sur chaque itinéraire. Alimentez filtres verts, produits de dépenses durables, outils de mobilité salariés et reporting Scope 3 sur 250+ transporteurs ferroviaires et de bus européens.",
    keywords: "API voyage éco-responsable, API CO2 voyage, API voyage durable, API voyage vert, API empreinte carbone, API Scope 3 voyage, reporting ESG voyage, Tictactrip CO2",
    heroTitle: <>Des données de voyage avec<br /><span style={{color: '#6ee7b7'}}>du CO₂ vérifié sur chaque itinéraire</span></>,
    heroLead: "Tictactrip renvoie l'empreinte CO₂ par passager pour chaque itinéraire train et bus — la matière première pour des produits climato-conscients, des filtres verts et le reporting Scope 3.",
    intro: (
      <>
        <h2>La durabilité doit être mesurable, pas seulement aspirationnelle</h2>
        <p>La plupart des API de voyage traitent le CO₂ comme une réflexion marketing tardive. Tictactrip a été conçu sur la prémisse inverse : <strong>les données d'émissions sont un champ de première classe sur chaque résultat de recherche</strong>, calculé de manière cohérente entre transporteurs et modes.</p>
        <p>Cette décision de conception unique débloque toute une famille de produits : <strong>filtres verts</strong> sur les pages de recherche OTA, <strong>budgets carbone</strong> dans les plateformes de voyage d'affaires, <strong>outils de mobilité salariés</strong>, dashboards de <strong>reporting Scope 3</strong>, et <strong>fonctionnalités fintech climato-conscientes</strong>.</p>
        <p>Tictactrip est une société française, opérée sous RGPD et droit européen — un ajustement naturel pour les programmes européens de durabilité et les initiatives climatiques liées aux gouvernements.</p>
      </>
    ),
    capabilities: [
      "Émissions de CO₂ par passager et par segment, sur chaque itinéraire",
      "Méthodologie cohérente entre les 250+ transporteurs",
      "Estimations sensibles au mode (train vs bus vs interurbain)",
      "Ajustements de profil opérationnel par transporteur",
      "Adaptée au reporting Scope 3 (catégories 6 et 7)",
      "Conforme au RGPD — juridiction française / UE",
    ],
    benefits: [
      {icon: '🌱', title: "Construire une UX climato-consciente", description: "Mettez en avant l'option la moins émettrice directement dans votre interface de recherche. Remplacez les vols courts par du TGV avec les mêmes données CO₂ que vos utilisateurs verront."},
      {icon: '📈', title: 'Alimenter le reporting Scope 3', description: "Chaque réservation renvoie des émissions par passager prêtes pour l'audit. Agrégez-les en dashboards ESG d'entreprise, comptabilité GES ou produits de budget carbone."},
      {icon: '⚖️', title: "Comparables, pas juste un nombre", description: "Une méthodologie cohérente entre transporteurs permet de classer les itinéraires par impact carbone — pas seulement prix ou durée — sans normalisation ad hoc."},
      {icon: '🇪🇺', title: 'Opérée sous RGPD', description: "Tictactrip est une société française et opère l'API sous droit européen — important pour les programmes gouvernementaux, ESG et climatiques avec des exigences strictes de traitement des données."},
    ],
    code: {filename: 'search-co2.sh', body: codeBody},
    faqs: [
      {q: "Comment les émissions de CO₂ sont-elles calculées ?", a: "Les émissions sont estimées par passager et par segment, en fonction du mode (train ou bus), du profil opérationnel spécifique au transporteur et de la distance du segment. La méthodologie reste cohérente entre opérateurs pour que les valeurs soient directement comparables."},
      {q: "Puis-je utiliser les données d'émissions sans réserver via Tictactrip ?", a: "Oui. De nombreux partenaires climate-tech utilisent l'endpoint de recherche uniquement pour les données d'émissions — par exemple pour alimenter des flux d'aide à la décision verts même quand la réservation passe ailleurs."},
      {q: "Les données conviennent-elles au reporting Scope 3 d'entreprise ?", a: "Les émissions renvoyées par réservation sont conçues pour alimenter les flux Scope 3 (catégorie 6 voyages d'affaires et catégorie 7 trajets salariés). Notre équipe peut détailler la méthodologie sur demande."},
      {q: "L'API permet-elle de filtrer par émissions les plus basses ?", a: "Chaque itinéraire renvoie son empreinte CO₂ dans un champ cohérent. Vous appliquez votre propre logique de tri et de filtrage — la plupart des partenaires affichent un badge « Option la plus verte » ou trient les itinéraires les moins chers par CO₂ en critère secondaire."},
    ],
    serviceType: "API de voyage multimodale sensible au CO₂ pour produits de durabilité",
    audienceType: "Plateformes de durabilité, climate-tech, voyage d'affaires, outils de reporting ESG",
  },
  de: {
    breadcrumbCategory: 'Funktionen',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Warum CO₂-Daten auf jeder Verbindung',
    relatedHeading: 'Weitere Tictactrip-Funktionen',
    eyebrow: 'Funktion · Ökologisch von Grund auf',
    title: 'Ökologisch von Grund auf',
    metaTitle: 'Öko-verantwortliche Reise-API mit CO₂-Daten pro Verbindung | Tictactrip',
    description: 'Jede Verbindung liefert ihren CO₂-Fußabdruck pro Passagier. Bauen Sie klimabewusste Reiseprodukte, grüne Filter und Scope-3-Reporting direkt auf der API.',
    metaDescription: 'Öko-verantwortliche Reise-API mit CO₂-Emissionen pro Passagier auf jeder Verbindung. Powern Sie grüne Filter, Sustainable-Spend-Produkte, Mitarbeiter-Pendel-Tools und Scope-3-Reporting auf 250+ europäischen Bahn- und Bus-Transporteuren.',
    keywords: 'öko-verantwortliche Reise-API, CO2-Reise-API, nachhaltige Reise-API, grüne Reise-API, Carbon-Footprint-API, Scope-3-Reise-API, ESG-Reise-Reporting, Tictactrip CO2',
    heroTitle: <>Reisedaten mit<br /><span style={{color: '#6ee7b7'}}>verifiziertem CO₂ auf jeder Verbindung</span></>,
    heroLead: 'Tictactrip liefert den CO₂-Fußabdruck pro Passagier für jede Zug- und Bus-Verbindung — das Rohmaterial für klimabewusste Produkte, grüne Filter und Scope-3-Reporting.',
    intro: (
      <>
        <h2>Nachhaltigkeit muss messbar sein, nicht nur aspirativ</h2>
        <p>Die meisten Reise-APIs behandeln CO₂ als Marketing-Beigabe. Tictactrip ist auf der entgegengesetzten Prämisse gebaut: <strong>Emissionsdaten sind ein erstklassiges Feld auf jedem Suchergebnis</strong>, einheitlich berechnet über Transporteure und Modi.</p>
        <p>Diese eine Designentscheidung schaltet eine ganze Produktfamilie frei: <strong>grüne Filter</strong> auf OTA-Suchseiten, <strong>Carbon-Budgets</strong> in Geschäftsreiseplattformen, <strong>Mitarbeiter-Pendel-Tools</strong>, <strong>Scope-3-Reporting</strong>-Dashboards und <strong>klimabewusste Fintech-Features</strong>.</p>
        <p>Tictactrip ist ein französisches Unternehmen, betrieben unter DSGVO und EU-Recht — eine natürliche Passung für europäische Nachhaltigkeitsprogramme und staatsnahe Klimainitiativen.</p>
      </>
    ),
    capabilities: [
      'CO₂-Emissionen pro Passagier pro Teilstrecke, auf jeder Verbindung',
      'Einheitliche Methodik über alle 250+ Transporteure',
      'Modus-bewusste Schätzungen (Zug vs Bus vs Intercity)',
      'Operative-Profil-Anpassungen pro Transporteur',
      'Geeignet für Scope-3 (Kategorie 6 & 7) Reporting',
      'DSGVO-konform — französische / EU-Jurisdiktion',
    ],
    benefits: [
      {icon: '🌱', title: 'Klimabewusste UX bauen', description: 'Heben Sie die emissionsärmste Option direkt in Ihrer Such-UI hervor. Ersetzen Sie Kurzstreckenflüge durch Hochgeschwindigkeitsbahn mit denselben CO₂-Daten, die Ihre Nutzer sehen.'},
      {icon: '📈', title: 'Scope-3-Reporting speisen', description: 'Jede Buchung liefert audit-fähige Emissionen pro Passagier. Aggregieren Sie sie in Unternehmens-ESG-Dashboards, GHG-Buchhaltung oder Carbon-Budget-Produkte.'},
      {icon: '⚖️', title: 'Vergleichbar, nicht nur eine Zahl', description: 'Eine einheitliche Methodik über Transporteure hinweg heißt: Sie können Verbindungen nach CO₂-Impact ranken — nicht nur nach Preis oder Dauer — ohne ad-hoc-Normalisierung.'},
      {icon: '🇪🇺', title: 'Betrieben unter DSGVO', description: 'Tictactrip ist ein französisches Unternehmen und betreibt die API unter EU-Recht — wichtig für staatliche, ESG- und Klimaprogramme mit strengen Datenschutzanforderungen.'},
    ],
    code: {filename: 'search-co2.sh', body: codeBody},
    faqs: [
      {q: 'Wie werden CO₂-Emissionen berechnet?', a: 'Emissionen werden pro Passagier und pro Teilstrecke geschätzt — basierend auf dem Modus (Zug oder Bus), dem Transporteur-spezifischen Betriebsprofil und der Teilstreckenlänge. Die Methodik bleibt über Operatoren hinweg konsistent, sodass Werte direkt vergleichbar sind.'},
      {q: 'Kann ich die Emissionsdaten nutzen, ohne über Tictactrip zu buchen?', a: 'Ja. Viele Climate-Tech-Partner nutzen den Suchendpunkt nur für Emissionsdaten — etwa um grüne Entscheidungs-Workflows zu betreiben, auch wenn die Buchung anderswo abläuft.'},
      {q: 'Sind die Daten für unternehmerisches Scope-3-Reporting geeignet?', a: 'Die pro Buchung gelieferten Emissionen sind darauf ausgelegt, Scope-3-Workflows (Kategorie 6 Geschäftsreisen und Kategorie 7 Mitarbeiterpendeln) zu speisen. Unser Team kann methodische Details auf Anfrage durchgehen.'},
      {q: 'Erlaubt die API das Filtern nach den niedrigsten Emissionen?', a: 'Jede Verbindung liefert ihren CO₂-Fußabdruck in einem konsistenten Feld. Sie wenden Ihre eigene Sortier- und Filter-Logik an — die meisten Partner zeigen ein "Grünste Option"-Badge oder sortieren die günstigsten Verbindungen sekundär nach CO₂.'},
    ],
    serviceType: 'CO₂-bewusste multimodale Reise-API für Nachhaltigkeitsprodukte',
    audienceType: 'Nachhaltigkeitsplattformen, Climate-Tech, Geschäftsreisen, ESG-Reporting-Tools',
  },
  es: {
    breadcrumbCategory: 'Funciones',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Por qué CO₂ en cada itinerario',
    relatedHeading: 'Otras funciones de Tictactrip',
    eyebrow: 'Función · Eco-responsable por diseño',
    title: 'Eco-responsable por diseño',
    metaTitle: 'API de viaje eco-responsable con datos de CO₂ por itinerario | Tictactrip',
    description: 'Cada itinerario devuelve su huella de CO₂ por pasajero. Construye productos de viaje conscientes del clima, filtros verdes y reporting Scope 3 directamente sobre la API.',
    metaDescription: 'API de viaje eco-responsable con emisiones de CO₂ por pasajero en cada itinerario. Impulsa filtros verdes, productos de gasto sostenible, herramientas de movilidad para empleados y reporting Scope 3 sobre 250+ operadores europeos de tren y autobús.',
    keywords: 'API viaje eco-responsable, API CO2 viaje, API viaje sostenible, API viaje verde, API huella carbono, API Scope 3 viaje, reporting ESG viaje, Tictactrip CO2',
    heroTitle: <>Datos de viaje con<br /><span style={{color: '#6ee7b7'}}>CO₂ verificado en cada itinerario</span></>,
    heroLead: 'Tictactrip devuelve la huella de CO₂ por pasajero para cada itinerario de tren y autobús — la materia prima para productos conscientes del clima, filtros verdes y reporting Scope 3.',
    intro: (
      <>
        <h2>La sostenibilidad debe ser medible, no solo aspiracional</h2>
        <p>La mayoría de APIs de viaje tratan el CO₂ como un añadido de marketing. Tictactrip se construyó sobre la premisa opuesta: <strong>los datos de emisiones son un campo de primera clase en cada resultado de búsqueda</strong>, calculados de forma consistente entre operadores y modos.</p>
        <p>Esa única decisión de diseño desbloquea toda una familia de productos: <strong>filtros verdes</strong> en páginas de búsqueda OTA, <strong>presupuestos de carbono</strong> en plataformas de viaje corporativo, <strong>herramientas de movilidad para empleados</strong>, dashboards de <strong>reporting Scope 3</strong> y <strong>funciones fintech conscientes del clima</strong>.</p>
        <p>Tictactrip es una empresa francesa, operada bajo RGPD y legislación europea — un ajuste natural para programas europeos de sostenibilidad e iniciativas climáticas próximas a la administración pública.</p>
      </>
    ),
    capabilities: [
      'Emisiones de CO₂ por pasajero y por tramo, en cada itinerario',
      'Metodología consistente entre los 250+ operadores',
      'Estimaciones conscientes del modo (tren vs autobús vs intercity)',
      'Ajustes de perfil operativo por operador',
      'Adecuado para reporting Scope 3 (categorías 6 y 7)',
      'Cumple RGPD — jurisdicción francesa / UE',
    ],
    benefits: [
      {icon: '🌱', title: 'Construye UX consciente del clima', description: 'Destaca la opción de menor emisión directamente en tu interfaz de búsqueda. Sustituye vuelos cortos por tren de alta velocidad usando los mismos datos de CO₂ que verán tus usuarios.'},
      {icon: '📈', title: 'Alimenta el reporting Scope 3', description: 'Cada reserva devuelve emisiones por pasajero listas para auditoría. Agrégalas en dashboards ESG corporativos, contabilidad GEI o productos de presupuesto de carbono.'},
      {icon: '⚖️', title: 'Comparable, no solo un número', description: 'Una metodología consistente entre operadores significa que puedes clasificar itinerarios por impacto de carbono — no solo precio o duración — sin normalización ad hoc.'},
      {icon: '🇪🇺', title: 'Operada bajo RGPD', description: 'Tictactrip es una empresa francesa y opera la API bajo legislación europea — importante para programas gubernamentales, ESG y climáticos con requisitos estrictos de tratamiento de datos.'},
    ],
    code: {filename: 'search-co2.sh', body: codeBody},
    faqs: [
      {q: '¿Cómo se calculan las emisiones de CO₂?', a: 'Las emisiones se estiman por pasajero y por tramo, basadas en el modo (tren o autobús), el perfil operativo específico del operador y la distancia del tramo. La metodología se mantiene consistente entre operadores para que los valores sean directamente comparables.'},
      {q: '¿Puedo usar los datos de emisiones sin reservar a través de Tictactrip?', a: 'Sí. Muchos socios climate-tech usan el endpoint de búsqueda solo para datos de emisiones — por ejemplo para alimentar flujos de apoyo a la decisión verdes incluso cuando la reserva se gestiona en otro lugar.'},
      {q: '¿Los datos son adecuados para reporting Scope 3 corporativo?', a: 'Las emisiones devueltas por reserva están diseñadas para alimentar flujos Scope 3 (categoría 6 viajes de negocios y categoría 7 desplazamientos de empleados). Nuestro equipo puede repasar los detalles de la metodología bajo petición.'},
      {q: '¿La API permite filtrar por las emisiones más bajas?', a: 'Cada itinerario devuelve su huella de CO₂ en un campo consistente. Tú aplicas tu propia lógica de orden y filtrado — la mayoría de socios muestran un distintivo "Opción más verde" u ordenan los itinerarios más baratos por CO₂ como criterio secundario.'},
    ],
    serviceType: 'API de viaje multimodal consciente de CO₂ para productos de sostenibilidad',
    audienceType: 'Plataformas de sostenibilidad, climate-tech, viajes corporativos, herramientas de reporting ESG',
  },
  it: {
    breadcrumbCategory: 'Funzionalità',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Perché i dati di CO₂ su ogni itinerario',
    relatedHeading: 'Altre funzionalità Tictactrip',
    eyebrow: 'Funzionalità · Eco-responsabile fin dal design',
    title: 'Eco-responsabile fin dal design',
    metaTitle: 'API di viaggio eco-responsabile con dati di CO₂ per itinerario | Tictactrip',
    description: "Ogni itinerario restituisce la propria impronta di CO₂ per passeggero. Costruisci prodotti di viaggio attenti al clima, filtri verdi e reporting Scope 3 direttamente sull'API.",
    metaDescription: "API di viaggio eco-responsabile con emissioni di CO₂ per passeggero su ogni itinerario. Alimenta filtri verdi, prodotti di spesa sostenibile, strumenti di mobilità per dipendenti e reporting Scope 3 su 250+ vettori europei di treni e autobus.",
    keywords: 'API viaggio eco-responsabile, API CO2 viaggio, API viaggio sostenibile, API viaggio verde, API impronta carbonica, API Scope 3 viaggio, reporting ESG viaggio, Tictactrip CO2',
    heroTitle: <>Dati di viaggio con<br /><span style={{color: '#6ee7b7'}}>CO₂ verificata su ogni itinerario</span></>,
    heroLead: "Tictactrip restituisce l'impronta di CO₂ per passeggero per ogni itinerario di treno e autobus — la materia prima per prodotti attenti al clima, filtri verdi e reporting Scope 3.",
    intro: (
      <>
        <h2>La sostenibilità deve essere misurabile, non solo aspirazionale</h2>
        <p>La maggior parte delle API di viaggio tratta la CO₂ come un'aggiunta di marketing. Tictactrip è stata costruita sulla premessa opposta: <strong>i dati sulle emissioni sono un campo di prima classe in ogni risultato di ricerca</strong>, calcolati in modo coerente tra vettori e modalità.</p>
        <p>Quella singola decisione di design sblocca un'intera famiglia di prodotti: <strong>filtri verdi</strong> sulle pagine di ricerca OTA, <strong>budget di carbonio</strong> nelle piattaforme di viaggio aziendale, <strong>strumenti di mobilità per dipendenti</strong>, dashboard di <strong>reporting Scope 3</strong> e <strong>funzionalità fintech attente al clima</strong>.</p>
        <p>Tictactrip è un'azienda francese, operata sotto GDPR e diritto UE — un adattamento naturale per i programmi europei di sostenibilità e le iniziative climatiche vicine alla pubblica amministrazione.</p>
      </>
    ),
    capabilities: [
      'Emissioni di CO₂ per passeggero e per tratta, su ogni itinerario',
      'Metodologia coerente fra tutti i 250+ vettori',
      'Stime sensibili al modo (treno vs autobus vs intercity)',
      'Aggiustamenti di profilo operativo per vettore',
      'Adatto al reporting Scope 3 (categorie 6 e 7)',
      'Conforme al GDPR — giurisdizione francese / UE',
    ],
    benefits: [
      {icon: '🌱', title: 'Costruisci UX attente al clima', description: "Metti in evidenza l'opzione con minori emissioni direttamente nella tua UI di ricerca. Sostituisci voli a corto raggio con alta velocità ferroviaria usando gli stessi dati di CO₂ che vedranno i tuoi utenti."},
      {icon: '📈', title: 'Alimenta il reporting Scope 3', description: 'Ogni prenotazione restituisce emissioni per passeggero pronte per audit. Aggregale in dashboard ESG aziendali, contabilità GHG o prodotti di carbon budget.'},
      {icon: '⚖️', title: 'Comparabile, non solo un numero', description: 'Una metodologia coerente tra vettori significa che puoi classificare gli itinerari per impatto di carbonio — non solo per prezzo o durata — senza normalizzazione ad hoc.'},
      {icon: '🇪🇺', title: 'Operata sotto GDPR', description: "Tictactrip è un'azienda francese e gestisce l'API sotto diritto UE — importante per programmi governativi, ESG e climatici con rigorosi requisiti di trattamento dei dati."},
    ],
    code: {filename: 'search-co2.sh', body: codeBody},
    faqs: [
      {q: 'Come vengono calcolate le emissioni di CO₂?', a: 'Le emissioni sono stimate per passeggero e per tratta, basate sul modo (treno o autobus), sul profilo operativo specifico del vettore e sulla distanza della tratta. La metodologia rimane coerente tra operatori così i valori sono direttamente comparabili.'},
      {q: 'Posso usare i dati di emissioni senza prenotare tramite Tictactrip?', a: "Sì. Molti partner climate-tech usano l'endpoint di ricerca solo per i dati di emissioni — per esempio per alimentare flussi di supporto decisionale verdi anche quando la prenotazione è gestita altrove."},
      {q: 'I dati sono adatti al reporting Scope 3 aziendale?', a: 'Le emissioni restituite per prenotazione sono progettate per alimentare flussi Scope 3 (categoria 6 viaggi di lavoro e categoria 7 spostamenti casa-lavoro). Il nostro team può approfondire i dettagli metodologici su richiesta.'},
      {q: "L'API permette di filtrare per minori emissioni?", a: "Ogni itinerario restituisce la propria impronta di CO₂ in un campo coerente. Applichi la tua logica di ordinamento e filtro — la maggior parte dei partner mostra un badge 'Opzione più verde' o ordina gli itinerari più economici per CO₂ come criterio secondario."},
    ],
    serviceType: 'API di viaggio multimodale attenta alla CO₂ per prodotti di sostenibilità',
    audienceType: 'Piattaforme di sostenibilità, climate-tech, viaggi aziendali, strumenti di reporting ESG',
  },
  pt: {
    breadcrumbCategory: 'Funcionalidades',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Porquê dados de CO₂ em cada itinerário',
    relatedHeading: 'Outras funcionalidades Tictactrip',
    eyebrow: 'Funcionalidade · Eco-responsável por design',
    title: 'Eco-responsável por design',
    metaTitle: 'API de viagem eco-responsável com dados de CO₂ por itinerário | Tictactrip',
    description: 'Cada itinerário devolve a sua pegada de CO₂ por passageiro. Construa produtos de viagem conscientes do clima, filtros verdes e relatórios Scope 3 diretamente sobre a API.',
    metaDescription: 'API de viagem eco-responsável com emissões de CO₂ por passageiro em cada itinerário. Alimente filtros verdes, produtos de gasto sustentável, ferramentas de mobilidade para colaboradores e relatórios Scope 3 em 250+ transportadoras europeias de comboio e autocarro.',
    keywords: 'API viagem eco-responsável, API CO2 viagem, API viagem sustentável, API viagem verde, API pegada carbónica, API Scope 3 viagem, relatórios ESG viagem, Tictactrip CO2',
    heroTitle: <>Dados de viagem com<br /><span style={{color: '#6ee7b7'}}>CO₂ verificado em cada itinerário</span></>,
    heroLead: 'A Tictactrip devolve a pegada de CO₂ por passageiro para cada itinerário de comboio e autocarro — a matéria-prima para produtos conscientes do clima, filtros verdes e relatórios Scope 3.',
    intro: (
      <>
        <h2>A sustentabilidade tem de ser mensurável, não apenas aspiracional</h2>
        <p>A maioria das APIs de viagem trata o CO₂ como um acrescento de marketing. A Tictactrip foi construída sobre a premissa oposta: <strong>os dados de emissões são um campo de primeira classe em cada resultado de pesquisa</strong>, calculados de forma consistente entre transportadoras e modos.</p>
        <p>Essa única decisão de design desbloqueia toda uma família de produtos: <strong>filtros verdes</strong> em páginas de pesquisa OTA, <strong>orçamentos de carbono</strong> em plataformas de viagem corporativa, <strong>ferramentas de mobilidade para colaboradores</strong>, dashboards de <strong>relatórios Scope 3</strong> e <strong>funcionalidades fintech conscientes do clima</strong>.</p>
        <p>A Tictactrip é uma empresa francesa, operada sob RGPD e legislação europeia — um encaixe natural para programas europeus de sustentabilidade e iniciativas climáticas próximas da administração pública.</p>
      </>
    ),
    capabilities: [
      'Emissões de CO₂ por passageiro e por troço, em cada itinerário',
      'Metodologia consistente em todas as 250+ transportadoras',
      'Estimativas conscientes do modo (comboio vs autocarro vs intercidades)',
      'Ajustes de perfil operacional por transportadora',
      'Adequado para relatórios Scope 3 (categorias 6 e 7)',
      'Conforme com o RGPD — jurisdição francesa / UE',
    ],
    benefits: [
      {icon: '🌱', title: 'Construa UX consciente do clima', description: 'Destaque a opção com menores emissões diretamente na sua UI de pesquisa. Substitua voos curtos por alta velocidade ferroviária usando os mesmos dados de CO₂ que os seus utilizadores verão.'},
      {icon: '📈', title: 'Alimente os relatórios Scope 3', description: 'Cada reserva devolve emissões por passageiro prontas para auditoria. Agregue-as em dashboards ESG empresariais, contabilidade GEE ou produtos de orçamento de carbono.'},
      {icon: '⚖️', title: 'Comparável, não apenas um número', description: 'Uma metodologia consistente entre transportadoras significa que pode classificar itinerários por impacto de carbono — não apenas por preço ou duração — sem normalização ad hoc.'},
      {icon: '🇪🇺', title: 'Operada sob RGPD', description: 'A Tictactrip é uma empresa francesa e opera a API sob legislação europeia — importante para programas governamentais, ESG e climáticos com requisitos rigorosos de tratamento de dados.'},
    ],
    code: {filename: 'search-co2.sh', body: codeBody},
    faqs: [
      {q: 'Como são calculadas as emissões de CO₂?', a: 'As emissões são estimadas por passageiro e por troço, com base no modo (comboio ou autocarro), no perfil operacional específico da transportadora e na distância do troço. A metodologia mantém-se consistente entre operadores para que os valores sejam diretamente comparáveis.'},
      {q: 'Posso usar os dados de emissões sem reservar através da Tictactrip?', a: 'Sim. Muitos parceiros climate-tech usam o endpoint de pesquisa apenas para dados de emissões — por exemplo, para alimentar fluxos de apoio à decisão verdes mesmo quando a reserva é tratada noutro lado.'},
      {q: 'Os dados são adequados para relatórios Scope 3 empresariais?', a: 'As emissões devolvidas por reserva foram concebidas para alimentar fluxos Scope 3 (categoria 6 viagens de negócios e categoria 7 deslocações casa-trabalho). A nossa equipa pode rever os detalhes da metodologia mediante pedido.'},
      {q: 'A API permite filtrar pelas emissões mais baixas?', a: 'Cada itinerário devolve a sua pegada de CO₂ num campo consistente. Aplica a sua própria lógica de ordenação e filtragem — a maioria dos parceiros mostra um distintivo "Opção mais verde" ou ordena os itinerários mais baratos por CO₂ como critério secundário.'},
    ],
    serviceType: 'API de viagem multimodal consciente do CO₂ para produtos de sustentabilidade',
    audienceType: 'Plataformas de sustentabilidade, climate-tech, viagens corporativas, ferramentas de relatórios ESG',
  },
  ru: {
    breadcrumbCategory: 'Возможности',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Почему данные CO₂ важны на каждом маршруте',
    relatedHeading: 'Другие возможности Tictactrip',
    eyebrow: 'Возможность · Эко-ответственный по дизайну',
    title: 'Эко-ответственный по дизайну',
    metaTitle: 'Эко-ответственный API путешествий с данными CO₂ по каждому маршруту | Tictactrip',
    description: 'Каждый маршрут возвращает свой углеродный след на пассажира. Создавайте климатически осознанные продукты, зелёные фильтры и отчётность Scope 3 прямо на API.',
    metaDescription: 'Эко-ответственный API путешествий с выбросами CO₂ на пассажира в каждом маршруте. Энергируйте зелёные фильтры, продукты устойчивых расходов, инструменты корпоративной мобильности и отчётность Scope 3 для 250+ европейских железнодорожных и автобусных перевозчиков.',
    keywords: 'эко-ответственный API путешествий, API CO2 путешествий, устойчивый API путешествий, зелёный API путешествий, API углеродного следа, API Scope 3 путешествий, ESG-отчёт путешествий, Tictactrip CO2',
    heroTitle: <>Данные о путешествиях с<br /><span style={{color: '#6ee7b7'}}>проверенным CO₂ на каждом маршруте</span></>,
    heroLead: 'Tictactrip возвращает углеродный след на пассажира для каждого маршрута поезда и автобуса — сырьё для климатически осознанных продуктов, зелёных фильтров и отчётности Scope 3.',
    intro: (
      <>
        <h2>Устойчивость должна быть измеримой, а не просто декларативной</h2>
        <p>Большинство API путешествий относится к CO₂ как к маркетинговой добавке. Tictactrip был построен на противоположной предпосылке: <strong>данные о выбросах — это поле первого класса в каждом результате поиска</strong>, рассчитанное единообразно по перевозчикам и видам транспорта.</p>
        <p>Это одно проектное решение открывает целое семейство продуктов: <strong>зелёные фильтры</strong> на страницах поиска OTA, <strong>углеродные бюджеты</strong> в платформах корпоративных поездок, <strong>инструменты корпоративной мобильности</strong>, дашборды <strong>отчётности Scope 3</strong> и <strong>климатически осознанные функции финтеха</strong>.</p>
        <p>Tictactrip — французская компания, работающая в рамках GDPR и права ЕС — естественный выбор для европейских программ устойчивости и климатических инициатив, связанных с правительством.</p>
      </>
    ),
    capabilities: [
      'Выбросы CO₂ на пассажира на сегмент, на каждом маршруте',
      'Единообразная методология по всем 250+ перевозчикам',
      'Оценки с учётом вида транспорта (поезд / автобус / межгород)',
      'Корректировки на эксплуатационный профиль перевозчика',
      'Подходит для отчётности Scope 3 (категории 6 и 7)',
      'Соответствует GDPR — французская / ЕС юрисдикция',
    ],
    benefits: [
      {icon: '🌱', title: 'Создавайте климатически осознанный UX', description: 'Выводите наименее загрязняющий вариант прямо в интерфейсе поиска. Заменяйте короткие авиаперелёты высокоскоростной железной дорогой на тех же данных CO₂, которые увидят пользователи.'},
      {icon: '📈', title: 'Питайте отчётность Scope 3', description: 'Каждое бронирование возвращает аудит-готовые выбросы на пассажира. Агрегируйте их в корпоративные дашборды ESG, бухгалтерию ПГ или продукты углеродного бюджета.'},
      {icon: '⚖️', title: 'Сопоставимый, а не просто число', description: 'Единообразная методология между перевозчиками позволяет ранжировать маршруты по углеродному воздействию — а не только по цене или продолжительности — без специальной нормализации.'},
      {icon: '🇪🇺', title: 'Работает под GDPR', description: 'Tictactrip — французская компания, работающая в рамках права ЕС — важно для государственных, ESG и климатических программ со строгими требованиями к обработке данных.'},
    ],
    code: {filename: 'search-co2.sh', body: codeBody},
    faqs: [
      {q: 'Как рассчитываются выбросы CO₂?', a: 'Выбросы оцениваются на пассажира и на сегмент, исходя из вида транспорта (поезд или автобус), эксплуатационного профиля конкретного перевозчика и длины сегмента. Методология остаётся единообразной между операторами, так что значения непосредственно сопоставимы.'},
      {q: 'Можно ли использовать данные о выбросах, не бронируя через Tictactrip?', a: 'Да. Многие партнёры из климат-теха используют поисковый эндпоинт только для данных о выбросах — например, чтобы поддерживать зелёные сценарии принятия решений, даже когда само бронирование идёт через другой канал.'},
      {q: 'Подходят ли данные для корпоративной отчётности Scope 3?', a: 'Выбросы, возвращаемые на каждое бронирование, спроектированы для подачи в потоки Scope 3 (категория 6 деловые поездки и категория 7 коммутирование сотрудников). Наша команда может разобрать детали методологии по запросу.'},
      {q: 'Позволяет ли API фильтровать по наименьшим выбросам?', a: 'Каждый маршрут возвращает свой углеродный след в едином поле. Вы применяете собственную логику сортировки и фильтрации — большинство партнёров показывают значок «Самый зелёный вариант» или сортируют самые дешёвые маршруты по CO₂ как вторичному критерию.'},
    ],
    serviceType: 'Мультимодальный API путешествий, учитывающий CO₂, для продуктов устойчивого развития',
    audienceType: 'Платформы устойчивого развития, климат-тех, корпоративные поездки, инструменты ESG-отчётности',
  },
};
