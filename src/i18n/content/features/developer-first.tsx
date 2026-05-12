import React from 'react';
import type {Translations} from '../../useTranslation';
import type {SolutionPageProps} from '../../../components/SolutionPage';

type FeaturePageContent = Omit<SolutionPageProps, 'slug' | 'related'>;

const codeBody = `# Your first call: paste, replace the token, run.
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRpari____@u09tu",
    "destinationGpuid": "c|FRlyon____@u05kq",
    "outboundDate":     "2026-06-12T00:00:00Z",
    "passengers":       [{"age": 30}]
  }'`;

export const developerFirst: Translations<FeaturePageContent> = {
  en: {
    breadcrumbCategory: 'Features',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Why a developer-first API matters',
    relatedHeading: 'Other Tictactrip features',
    eyebrow: 'Feature · Developer-first',
    title: 'Developer-first',
    metaTitle: 'Developer-first travel API — REST, OpenAPI, Postman collection | Tictactrip',
    description: 'Clean REST endpoints, OpenAPI specification, ready-to-use Postman collection and step-by-step tutorials. Ship a multimodal travel integration in days, not months.',
    metaDescription: 'Developer-first multimodal travel API. Clean REST endpoints, OpenAPI specification, Postman collection, copy-paste curl examples and step-by-step tutorials. Most partners go live in 2 to 6 weeks across 250+ European carriers.',
    keywords: 'developer-first travel API, REST travel API, OpenAPI travel API, Postman travel API, travel API DX, integration time travel API, travel API tutorial, train and bus API for developers, Tictactrip API',
    heroTitle: <>A multimodal travel API,<br /><span style={{color: '#6ee7b7'}}>built for engineers</span></>,
    heroLead: 'Clean REST endpoints, an OpenAPI specification, a ready-to-use Postman collection and a step-by-step tutorial. Prototype on day one, ship in weeks.',
    intro: (
      <>
        <h2>Most travel APIs treat developers as an afterthought. We don't.</h2>
        <p>European ground-transport distribution is historically dominated by <strong>SOAP integrations, ZIP-file ticket layouts and PDF documentation</strong>. Building on top of it has been a multi-quarter slog for every team that tried.</p>
        <p><strong>Tictactrip</strong> ships the opposite of that. A clean REST API, a complete OpenAPI specification, a Postman collection you can import in one click, curl examples in every tutorial step, and an interactive API reference where every endpoint is documented with request/response schemas.</p>
        <p>Most engineering teams prototype on day one and ship a production integration in <strong>2 to 6 weeks</strong>.</p>
      </>
    ),
    capabilities: [
      'Pure REST API — no SOAP, no proprietary SDK lock-in',
      'OpenAPI 3 specification covering every endpoint',
      'Ready-to-use Postman collection',
      'Curl examples for every step of the booking flow',
      'Interactive API reference (Redocusaurus-powered)',
      'Typical integration time: 2 to 6 weeks',
    ],
    benefits: [
      {icon: '📘', title: 'OpenAPI-first', description: 'Every endpoint is described in OpenAPI 3, with request and response schemas. Generate clients in your language of choice or wire it straight into your existing codegen pipeline.'},
      {icon: '🧪', title: 'Prototype on day one', description: 'Import the Postman collection, paste your authentication token, and you are hitting live search results inside five minutes. No multi-week onboarding before you can write code.'},
      {icon: '🛠️', title: 'Tutorials, not just reference docs', description: 'A step-by-step tutorial walks through search, reservation, payment, ticketing, refunds and exchanges with curl examples — the kind of content that turns a reference doc into a shippable integration.'},
      {icon: '⚡', title: '2 to 6 weeks to production', description: 'Most partners go from "first curl" to "production traffic" in 2 to 6 weeks. We work directly with your engineering team to unblock anything that gets in the way.'},
    ],
    code: {filename: 'first-call.sh', body: codeBody},
    faqs: [
      {q: 'Is the API REST?', a: 'Yes — clean REST endpoints, JSON request and response bodies, standard HTTP status codes. No SOAP, no proprietary SDK requirements.'},
      {q: 'Do you provide an OpenAPI specification?', a: 'Yes. The full OpenAPI 3 specification is published at developers.tictactrip.eu/api and used to render our interactive API reference.'},
      {q: 'Is there a Postman collection?', a: 'Yes. A ready-to-use Postman collection is linked from the tutorial — import it, paste your authentication token and you are running real searches in minutes.'},
      {q: 'How long does a typical integration take?', a: 'Most partners go live in 2 to 6 weeks. The exact timeline depends on the scope of your integration (search-only vs full booking) and the number of carriers you need.'},
    ],
    serviceType: 'Developer-first REST API for European train and bus inventory',
    audienceType: 'Engineering teams integrating European travel inventory',
  },
  fr: {
    breadcrumbCategory: 'Fonctionnalités',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: "Pourquoi une API orientée développeurs compte",
    relatedHeading: 'Autres fonctionnalités Tictactrip',
    eyebrow: "Fonctionnalité · D'abord pour les développeurs",
    title: "D'abord pour les développeurs",
    metaTitle: 'API voyage orientée développeurs — REST, OpenAPI, collection Postman | Tictactrip',
    description: "Endpoints REST propres, spécification OpenAPI, collection Postman prête à l'emploi et tutoriels pas à pas. Livrez une intégration voyage multimodale en jours, pas en mois.",
    metaDescription: "API voyage multimodale orientée développeurs. Endpoints REST propres, spécification OpenAPI, collection Postman, exemples curl à copier-coller et tutoriels pas à pas. La plupart des partenaires sont en production en 2 à 6 semaines sur 250+ transporteurs européens.",
    keywords: 'API voyage développeurs, API voyage REST, API voyage OpenAPI, API voyage Postman, DX API voyage, temps intégration API voyage, tutoriel API voyage, API trains et bus pour développeurs, API Tictactrip',
    heroTitle: <>Une API voyage multimodale,<br /><span style={{color: '#6ee7b7'}}>conçue pour les ingénieurs</span></>,
    heroLead: "Endpoints REST propres, spécification OpenAPI, collection Postman prête à l'emploi et tutoriel pas à pas. Prototypez dès le premier jour, livrez en semaines.",
    intro: (
      <>
        <h2>La plupart des API voyage traitent les développeurs comme une réflexion tardive. Pas nous.</h2>
        <p>La distribution du transport terrestre européen est historiquement dominée par <strong>les intégrations SOAP, les mises en page de billets en fichier ZIP et la documentation PDF</strong>. Construire dessus a été un marathon multi-trimestriel pour chaque équipe qui a essayé.</p>
        <p><strong>Tictactrip</strong> livre l'inverse. Une API REST propre, une spécification OpenAPI complète, une collection Postman importable en un clic, des exemples curl à chaque étape du tutoriel, et une référence API interactive où chaque endpoint est documenté avec ses schémas de requête / réponse.</p>
        <p>La plupart des équipes d'ingénierie prototypent dès le premier jour et livrent une intégration en production en <strong>2 à 6 semaines</strong>.</p>
      </>
    ),
    capabilities: [
      "API REST pure — pas de SOAP, pas de SDK propriétaire imposé",
      "Spécification OpenAPI 3 couvrant chaque endpoint",
      "Collection Postman prête à l'emploi",
      "Exemples curl pour chaque étape du flux de réservation",
      "Référence API interactive (propulsée par Redocusaurus)",
      "Temps d'intégration typique : 2 à 6 semaines",
    ],
    benefits: [
      {icon: '📘', title: "OpenAPI d'abord", description: "Chaque endpoint est décrit en OpenAPI 3, avec schémas de requête et de réponse. Générez des clients dans votre langage favori ou branchez-le directement sur votre pipeline de génération de code existant."},
      {icon: '🧪', title: 'Prototyper dès le premier jour', description: "Importez la collection Postman, collez votre jeton d'authentification, et vous obtenez des résultats de recherche en direct en moins de cinq minutes. Pas de plusieurs semaines d'onboarding avant de pouvoir écrire du code."},
      {icon: '🛠️', title: 'Des tutoriels, pas seulement des docs de référence', description: "Un tutoriel pas à pas parcourt recherche, réservation, paiement, émission, remboursements et échanges avec des exemples curl — le genre de contenu qui transforme une doc de référence en intégration livrable."},
      {icon: '⚡', title: "De 2 à 6 semaines jusqu'en production", description: "La plupart des partenaires passent du « premier curl » au « trafic de production » en 2 à 6 semaines. Nous travaillons directement avec votre équipe d'ingénierie pour débloquer tout ce qui peut faire obstacle."},
    ],
    code: {filename: 'first-call.sh', body: codeBody},
    faqs: [
      {q: "L'API est-elle REST ?", a: "Oui — endpoints REST propres, corps JSON pour requêtes et réponses, codes HTTP standards. Pas de SOAP, pas d'exigence de SDK propriétaire."},
      {q: 'Fournissez-vous une spécification OpenAPI ?', a: "Oui. La spécification OpenAPI 3 complète est publiée sur developers.tictactrip.eu/api et utilisée pour rendre notre référence API interactive."},
      {q: 'Y a-t-il une collection Postman ?', a: "Oui. Une collection Postman prête à l'emploi est liée depuis le tutoriel — importez-la, collez votre jeton d'authentification et vous lancez de vraies recherches en quelques minutes."},
      {q: 'Combien de temps prend une intégration typique ?', a: "La plupart des partenaires sont en production en 2 à 6 semaines. Le calendrier exact dépend du périmètre de votre intégration (recherche seule vs réservation complète) et du nombre de transporteurs dont vous avez besoin."},
    ],
    serviceType: "API REST orientée développeurs pour l'inventaire trains et bus européens",
    audienceType: "Équipes d'ingénierie intégrant l'inventaire voyage européen",
  },
  de: {
    breadcrumbCategory: 'Funktionen',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Warum eine entwickler-zentrierte API zählt',
    relatedHeading: 'Weitere Tictactrip-Funktionen',
    eyebrow: 'Funktion · Entwickler-zentriert',
    title: 'Entwickler-zentriert',
    metaTitle: 'Entwickler-zentrierte Reise-API — REST, OpenAPI, Postman-Sammlung | Tictactrip',
    description: 'Saubere REST-Endpunkte, OpenAPI-Spezifikation, sofort einsetzbare Postman-Sammlung und Schritt-für-Schritt-Tutorials. Liefern Sie eine multimodale Reise-Integration in Tagen, nicht Monaten.',
    metaDescription: 'Entwickler-zentrierte multimodale Reise-API. Saubere REST-Endpunkte, OpenAPI-Spezifikation, Postman-Sammlung, kopierbare curl-Beispiele und Schritt-für-Schritt-Tutorials. Die meisten Partner gehen in 2 bis 6 Wochen über 250+ europäische Transporteure live.',
    keywords: 'entwickler-zentrierte Reise-API, REST-Reise-API, OpenAPI-Reise-API, Postman-Reise-API, Reise-API DX, Integrationszeit Reise-API, Reise-API-Tutorial, Zug- und Bus-API für Entwickler, Tictactrip API',
    heroTitle: <>Eine multimodale Reise-API,<br /><span style={{color: '#6ee7b7'}}>gebaut für Ingenieure</span></>,
    heroLead: 'Saubere REST-Endpunkte, eine OpenAPI-Spezifikation, eine sofort einsetzbare Postman-Sammlung und ein Schritt-für-Schritt-Tutorial. Prototypisieren Sie ab Tag eins, liefern Sie in Wochen.',
    intro: (
      <>
        <h2>Die meisten Reise-APIs behandeln Entwickler als Nebensache. Wir nicht.</h2>
        <p>Der europäische Bodentransport-Vertrieb wird historisch von <strong>SOAP-Integrationen, ZIP-Datei-Ticket-Layouts und PDF-Dokumentation</strong> dominiert. Darauf aufzubauen war für jedes Team ein mehrquartaliger Slog.</p>
        <p><strong>Tictactrip</strong> liefert das Gegenteil. Eine saubere REST-API, eine komplette OpenAPI-Spezifikation, eine Postman-Sammlung, die Sie mit einem Klick importieren, curl-Beispiele in jedem Tutorial-Schritt, und eine interaktive API-Referenz, in der jeder Endpunkt mit Request/Response-Schemas dokumentiert ist.</p>
        <p>Die meisten Engineering-Teams prototypisieren ab Tag eins und liefern eine Produktions-Integration in <strong>2 bis 6 Wochen</strong>.</p>
      </>
    ),
    capabilities: [
      'Reine REST-API — kein SOAP, kein proprietäres SDK-Lock-in',
      'OpenAPI-3-Spezifikation für jeden Endpunkt',
      'Sofort einsetzbare Postman-Sammlung',
      'curl-Beispiele für jeden Schritt des Buchungsablaufs',
      'Interaktive API-Referenz (powered by Redocusaurus)',
      'Typische Integrationszeit: 2 bis 6 Wochen',
    ],
    benefits: [
      {icon: '📘', title: 'OpenAPI-first', description: 'Jeder Endpunkt ist in OpenAPI 3 beschrieben, mit Request- und Response-Schemas. Generieren Sie Clients in Ihrer Sprache oder binden Sie es direkt in Ihre Codegen-Pipeline ein.'},
      {icon: '🧪', title: 'Ab Tag eins prototypisieren', description: 'Importieren Sie die Postman-Sammlung, fügen Sie Ihr Authentifizierungs-Token ein und Sie erhalten in unter fünf Minuten Live-Suchergebnisse. Kein wochenlanges Onboarding, bevor Sie Code schreiben können.'},
      {icon: '🛠️', title: 'Tutorials, nicht nur Referenzdokumente', description: 'Ein Schritt-für-Schritt-Tutorial geht durch Suche, Reservierung, Zahlung, Ticketierung, Erstattungen und Umtausch mit curl-Beispielen — die Art Inhalt, die eine Referenzdoku in eine ausliefer­bare Integration verwandelt.'},
      {icon: '⚡', title: '2 bis 6 Wochen bis zur Produktion', description: 'Die meisten Partner gehen vom „ersten curl" zum „Produktions-Traffic" in 2 bis 6 Wochen. Wir arbeiten direkt mit Ihrem Engineering-Team, um Blocker zu beseitigen.'},
    ],
    code: {filename: 'first-call.sh', body: codeBody},
    faqs: [
      {q: 'Ist die API REST?', a: 'Ja — saubere REST-Endpunkte, JSON-Request- und Response-Bodies, standardmäßige HTTP-Statuscodes. Kein SOAP, keine proprietären SDK-Anforderungen.'},
      {q: 'Liefern Sie eine OpenAPI-Spezifikation?', a: 'Ja. Die vollständige OpenAPI-3-Spezifikation ist unter developers.tictactrip.eu/api veröffentlicht und wird zum Rendern unserer interaktiven API-Referenz verwendet.'},
      {q: 'Gibt es eine Postman-Sammlung?', a: 'Ja. Eine sofort einsetzbare Postman-Sammlung ist im Tutorial verlinkt — importieren, Authentifizierungs-Token einfügen, und Sie führen in Minuten echte Suchen aus.'},
      {q: 'Wie lange dauert eine typische Integration?', a: 'Die meisten Partner gehen in 2 bis 6 Wochen live. Der genaue Zeitrahmen hängt vom Umfang Ihrer Integration ab (nur Suche vs. vollständige Buchung) und der Anzahl der benötigten Transporteure.'},
    ],
    serviceType: 'Entwickler-zentrierte REST-API für europäisches Zug- und Bus-Inventar',
    audienceType: 'Engineering-Teams, die europäisches Reise-Inventar integrieren',
  },
  es: {
    breadcrumbCategory: 'Funciones',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Por qué una API pensada para desarrolladores importa',
    relatedHeading: 'Otras funciones de Tictactrip',
    eyebrow: 'Función · Pensado para desarrolladores',
    title: 'Pensado para desarrolladores',
    metaTitle: 'API de viaje pensada para desarrolladores — REST, OpenAPI, colección Postman | Tictactrip',
    description: 'Endpoints REST limpios, especificación OpenAPI, colección Postman lista para usar y tutoriales paso a paso. Entrega una integración de viaje multimodal en días, no en meses.',
    metaDescription: 'API de viaje multimodal pensada para desarrolladores. Endpoints REST limpios, especificación OpenAPI, colección Postman, ejemplos curl copia-pega y tutoriales paso a paso. La mayoría de socios entran en producción en 2 a 6 semanas en 250+ operadores europeos.',
    keywords: 'API viaje desarrolladores, API viaje REST, API viaje OpenAPI, API viaje Postman, DX API viaje, tiempo integración API viaje, tutorial API viaje, API trenes y autobuses para desarrolladores, API Tictactrip',
    heroTitle: <>Una API de viaje multimodal,<br /><span style={{color: '#6ee7b7'}}>construida para ingenieros</span></>,
    heroLead: 'Endpoints REST limpios, especificación OpenAPI, colección Postman lista para usar y tutorial paso a paso. Prototipa el primer día, entrega en semanas.',
    intro: (
      <>
        <h2>La mayoría de APIs de viaje tratan a los desarrolladores como una idea tardía. Nosotros no.</h2>
        <p>La distribución del transporte terrestre europeo está históricamente dominada por <strong>integraciones SOAP, layouts de billete en ZIP y documentación PDF</strong>. Construir encima ha sido una maratón multi-trimestral para todos los equipos que lo intentaron.</p>
        <p><strong>Tictactrip</strong> entrega lo contrario. Una API REST limpia, una especificación OpenAPI completa, una colección Postman que importas con un clic, ejemplos curl en cada paso del tutorial y una referencia API interactiva donde cada endpoint está documentado con esquemas de petición / respuesta.</p>
        <p>La mayoría de equipos de ingeniería prototipan el primer día y entregan una integración en producción en <strong>2 a 6 semanas</strong>.</p>
      </>
    ),
    capabilities: [
      'API REST pura — sin SOAP, sin SDK propietario obligatorio',
      'Especificación OpenAPI 3 cubriendo cada endpoint',
      'Colección Postman lista para usar',
      'Ejemplos curl para cada paso del flujo de reserva',
      'Referencia API interactiva (impulsada por Redocusaurus)',
      'Tiempo típico de integración: 2 a 6 semanas',
    ],
    benefits: [
      {icon: '📘', title: 'OpenAPI primero', description: 'Cada endpoint se describe en OpenAPI 3, con esquemas de petición y respuesta. Genera clientes en el lenguaje que prefieras o conéctalo directamente a tu pipeline de codegen existente.'},
      {icon: '🧪', title: 'Prototipa el primer día', description: 'Importa la colección Postman, pega tu token de autenticación y en menos de cinco minutos estás recibiendo resultados de búsqueda en vivo. Sin semanas de onboarding antes de escribir código.'},
      {icon: '🛠️', title: 'Tutoriales, no solo documentos de referencia', description: 'Un tutorial paso a paso recorre búsqueda, reserva, pago, emisión, reembolsos y cambios con ejemplos curl — el tipo de contenido que convierte un doc de referencia en una integración entregable.'},
      {icon: '⚡', title: '2 a 6 semanas hasta producción', description: 'La mayoría de socios pasan del "primer curl" al "tráfico de producción" en 2 a 6 semanas. Trabajamos directamente con tu equipo de ingeniería para desbloquear lo que se atraviese.'},
    ],
    code: {filename: 'first-call.sh', body: codeBody},
    faqs: [
      {q: '¿La API es REST?', a: 'Sí — endpoints REST limpios, cuerpos JSON de petición y respuesta, códigos HTTP estándar. Sin SOAP, sin requisitos de SDK propietario.'},
      {q: '¿Proporcionáis una especificación OpenAPI?', a: 'Sí. La especificación OpenAPI 3 completa se publica en developers.tictactrip.eu/api y se usa para renderizar nuestra referencia API interactiva.'},
      {q: '¿Hay una colección Postman?', a: 'Sí. Una colección Postman lista para usar está enlazada desde el tutorial — impórtala, pega tu token de autenticación y en minutos estás ejecutando búsquedas reales.'},
      {q: '¿Cuánto tarda una integración típica?', a: 'La mayoría de socios entran en producción en 2 a 6 semanas. El calendario exacto depende del alcance de tu integración (solo búsqueda vs reserva completa) y del número de operadores que necesites.'},
    ],
    serviceType: 'API REST pensada para desarrolladores para inventario de trenes y autobuses europeos',
    audienceType: 'Equipos de ingeniería que integran inventario de viaje europeo',
  },
  it: {
    breadcrumbCategory: 'Funzionalità',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: "Perché un'API pensata per gli sviluppatori conta",
    relatedHeading: 'Altre funzionalità Tictactrip',
    eyebrow: 'Funzionalità · Prima di tutto per gli sviluppatori',
    title: 'Prima di tutto per gli sviluppatori',
    metaTitle: "API di viaggio pensata per sviluppatori — REST, OpenAPI, raccolta Postman | Tictactrip",
    description: "Endpoint REST puliti, specifica OpenAPI, raccolta Postman pronta all'uso e tutorial passo passo. Consegna un'integrazione di viaggio multimodale in giorni, non in mesi.",
    metaDescription: "API di viaggio multimodale pensata per sviluppatori. Endpoint REST puliti, specifica OpenAPI, raccolta Postman, esempi curl copia-incolla e tutorial passo passo. La maggior parte dei partner va in produzione in 2-6 settimane su 250+ vettori europei.",
    keywords: 'API viaggio sviluppatori, API viaggio REST, API viaggio OpenAPI, API viaggio Postman, DX API viaggio, tempo integrazione API viaggio, tutorial API viaggio, API treni e autobus per sviluppatori, API Tictactrip',
    heroTitle: <>Un'API di viaggio multimodale,<br /><span style={{color: '#6ee7b7'}}>costruita per ingegneri</span></>,
    heroLead: "Endpoint REST puliti, specifica OpenAPI, raccolta Postman pronta all'uso e tutorial passo passo. Prototipa il primo giorno, spedisci in settimane.",
    intro: (
      <>
        <h2>La maggior parte delle API di viaggio tratta gli sviluppatori come un ripensamento. Noi no.</h2>
        <p>La distribuzione del trasporto terrestre europeo è storicamente dominata da <strong>integrazioni SOAP, layout di biglietti in ZIP e documentazione PDF</strong>. Costruirci sopra è stato una maratona multi-trimestrale per ogni team che ci ha provato.</p>
        <p><strong>Tictactrip</strong> spedisce il contrario. Un'API REST pulita, una specifica OpenAPI completa, una raccolta Postman importabile con un clic, esempi curl in ogni passo del tutorial e un riferimento API interattivo in cui ogni endpoint è documentato con schemi di richiesta / risposta.</p>
        <p>La maggior parte dei team di ingegneria prototipa il primo giorno e spedisce un'integrazione in produzione in <strong>2-6 settimane</strong>.</p>
      </>
    ),
    capabilities: [
      'API REST pura — niente SOAP, niente lock-in di SDK proprietari',
      'Specifica OpenAPI 3 che copre ogni endpoint',
      "Raccolta Postman pronta all'uso",
      'Esempi curl per ogni passo del flusso di prenotazione',
      'Riferimento API interattivo (alimentato da Redocusaurus)',
      'Tempo di integrazione tipico: 2-6 settimane',
    ],
    benefits: [
      {icon: '📘', title: 'OpenAPI prima di tutto', description: 'Ogni endpoint è descritto in OpenAPI 3, con schemi di richiesta e risposta. Genera client nel linguaggio che preferisci o collegalo direttamente alla tua pipeline di codegen esistente.'},
      {icon: '🧪', title: 'Prototipa il primo giorno', description: 'Importa la raccolta Postman, incolla il tuo token di autenticazione e in meno di cinque minuti ricevi risultati di ricerca live. Niente settimane di onboarding prima di scrivere codice.'},
      {icon: '🛠️', title: 'Tutorial, non solo documenti di riferimento', description: 'Un tutorial passo passo attraversa ricerca, prenotazione, pagamento, biglietteria, rimborsi e cambi con esempi curl — il tipo di contenuto che trasforma un doc di riferimento in un\'integrazione spedibile.'},
      {icon: '⚡', title: '2-6 settimane fino alla produzione', description: 'La maggior parte dei partner passa dal "primo curl" al "traffico di produzione" in 2-6 settimane. Lavoriamo direttamente con il tuo team di ingegneria per sbloccare qualsiasi ostacolo.'},
    ],
    code: {filename: 'first-call.sh', body: codeBody},
    faqs: [
      {q: "L'API è REST?", a: 'Sì — endpoint REST puliti, corpi di richiesta e risposta in JSON, codici di stato HTTP standard. Niente SOAP, niente requisiti di SDK proprietari.'},
      {q: 'Fornite una specifica OpenAPI?', a: "Sì. La specifica OpenAPI 3 completa è pubblicata su developers.tictactrip.eu/api ed è usata per renderizzare il nostro riferimento API interattivo."},
      {q: 'Esiste una raccolta Postman?', a: "Sì. Una raccolta Postman pronta all'uso è collegata dal tutorial — importala, incolla il tuo token di autenticazione e in minuti stai eseguendo ricerche reali."},
      {q: "Quanto dura un'integrazione tipica?", a: "La maggior parte dei partner va in produzione in 2-6 settimane. La tempistica esatta dipende dallo scopo della tua integrazione (solo ricerca vs prenotazione completa) e dal numero di vettori di cui hai bisogno."},
    ],
    serviceType: 'API REST pensata per sviluppatori per inventario di treni e autobus europei',
    audienceType: 'Team di ingegneria che integrano inventario di viaggio europeo',
  },
  pt: {
    breadcrumbCategory: 'Funcionalidades',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Porque uma API pensada para programadores importa',
    relatedHeading: 'Outras funcionalidades Tictactrip',
    eyebrow: 'Funcionalidade · Pensado para programadores',
    title: 'Pensado para programadores',
    metaTitle: 'API de viagem pensada para programadores — REST, OpenAPI, coleção Postman | Tictactrip',
    description: 'Endpoints REST limpos, especificação OpenAPI, coleção Postman pronta a usar e tutoriais passo a passo. Entregue uma integração de viagem multimodal em dias, não em meses.',
    metaDescription: 'API de viagem multimodal pensada para programadores. Endpoints REST limpos, especificação OpenAPI, coleção Postman, exemplos curl copia-cola e tutoriais passo a passo. A maioria dos parceiros entra em produção em 2 a 6 semanas em 250+ transportadoras europeias.',
    keywords: 'API viagem programadores, API viagem REST, API viagem OpenAPI, API viagem Postman, DX API viagem, tempo integração API viagem, tutorial API viagem, API comboios e autocarros para programadores, API Tictactrip',
    heroTitle: <>Uma API de viagem multimodal,<br /><span style={{color: '#6ee7b7'}}>construída para engenheiros</span></>,
    heroLead: 'Endpoints REST limpos, especificação OpenAPI, coleção Postman pronta a usar e tutorial passo a passo. Faça protótipo no primeiro dia, entregue em semanas.',
    intro: (
      <>
        <h2>A maioria das APIs de viagem trata os programadores como uma ideia tardia. Nós não.</h2>
        <p>A distribuição do transporte terrestre europeu é historicamente dominada por <strong>integrações SOAP, layouts de bilhete em ficheiros ZIP e documentação em PDF</strong>. Construir em cima disso tem sido uma maratona multi-trimestre para todas as equipas que tentaram.</p>
        <p>A <strong>Tictactrip</strong> entrega o oposto. Uma API REST limpa, uma especificação OpenAPI completa, uma coleção Postman que pode importar com um clique, exemplos curl em cada passo do tutorial e uma referência API interativa em que cada endpoint está documentado com esquemas de pedido / resposta.</p>
        <p>A maioria das equipas de engenharia faz protótipo no primeiro dia e entrega uma integração em produção em <strong>2 a 6 semanas</strong>.</p>
      </>
    ),
    capabilities: [
      'API REST pura — sem SOAP, sem lock-in de SDK proprietário',
      'Especificação OpenAPI 3 cobrindo cada endpoint',
      'Coleção Postman pronta a usar',
      'Exemplos curl para cada passo do fluxo de reserva',
      'Referência API interativa (alimentada pelo Redocusaurus)',
      'Tempo típico de integração: 2 a 6 semanas',
    ],
    benefits: [
      {icon: '📘', title: 'OpenAPI primeiro', description: 'Cada endpoint está descrito em OpenAPI 3, com esquemas de pedido e resposta. Gere clientes na linguagem da sua escolha ou ligue-o diretamente ao seu pipeline de codegen existente.'},
      {icon: '🧪', title: 'Faça protótipo no primeiro dia', description: 'Importe a coleção Postman, cole o seu token de autenticação e em menos de cinco minutos está a receber resultados de pesquisa ao vivo. Sem semanas de onboarding antes de poder escrever código.'},
      {icon: '🛠️', title: 'Tutoriais, não apenas documentação de referência', description: 'Um tutorial passo a passo percorre pesquisa, reserva, pagamento, emissão, reembolsos e trocas com exemplos curl — o tipo de conteúdo que transforma um documento de referência numa integração entregável.'},
      {icon: '⚡', title: '2 a 6 semanas até produção', description: 'A maioria dos parceiros passa do "primeiro curl" para o "tráfego de produção" em 2 a 6 semanas. Trabalhamos diretamente com a sua equipa de engenharia para desbloquear o que quer que apareça pelo caminho.'},
    ],
    code: {filename: 'first-call.sh', body: codeBody},
    faqs: [
      {q: 'A API é REST?', a: 'Sim — endpoints REST limpos, corpos JSON de pedido e resposta, códigos HTTP padrão. Sem SOAP, sem requisitos de SDK proprietário.'},
      {q: 'Fornecem uma especificação OpenAPI?', a: 'Sim. A especificação OpenAPI 3 completa é publicada em developers.tictactrip.eu/api e usada para apresentar a nossa referência API interativa.'},
      {q: 'Existe uma coleção Postman?', a: 'Sim. Uma coleção Postman pronta a usar está ligada a partir do tutorial — importe-a, cole o seu token de autenticação e em minutos está a executar pesquisas reais.'},
      {q: 'Quanto tempo demora uma integração típica?', a: 'A maioria dos parceiros entra em produção em 2 a 6 semanas. O cronograma exato depende do âmbito da sua integração (apenas pesquisa vs reserva completa) e do número de transportadoras de que precisa.'},
    ],
    serviceType: 'API REST pensada para programadores para inventário de comboios e autocarros europeus',
    audienceType: 'Equipas de engenharia que integram inventário de viagem europeu',
  },
  ru: {
    breadcrumbCategory: 'Возможности',
    breadcrumbCategoryHref: '/#features',
    benefitsHeading: 'Почему важен API «прежде всего для разработчиков»',
    relatedHeading: 'Другие возможности Tictactrip',
    eyebrow: 'Возможность · Прежде всего для разработчиков',
    title: 'Прежде всего для разработчиков',
    metaTitle: 'API путешествий для разработчиков — REST, OpenAPI, коллекция Postman | Tictactrip',
    description: 'Чистые REST-эндпоинты, спецификация OpenAPI, готовая коллекция Postman и пошаговые руководства. Запустите мультимодальную интеграцию путешествий за дни, а не за месяцы.',
    metaDescription: 'Мультимодальный API путешествий, ориентированный на разработчиков. Чистые REST-эндпоинты, спецификация OpenAPI, коллекция Postman, готовые к копированию примеры curl и пошаговые руководства. Большинство партнёров запускается за 2–6 недель с поддержкой 250+ европейских перевозчиков.',
    keywords: 'API путешествий для разработчиков, REST API путешествий, OpenAPI API путешествий, Postman API путешествий, DX API путешествий, время интеграции API путешествий, руководство по API путешествий, API поездов и автобусов для разработчиков, Tictactrip API',
    heroTitle: <>Мультимодальный API путешествий,<br /><span style={{color: '#6ee7b7'}}>созданный для инженеров</span></>,
    heroLead: 'Чистые REST-эндпоинты, спецификация OpenAPI, готовая к использованию коллекция Postman и пошаговое руководство. Прототип в первый день, выпуск за недели.',
    intro: (
      <>
        <h2>Большинство API путешествий относятся к разработчикам как к второстепенным. Мы — нет.</h2>
        <p>Дистрибуция европейского наземного транспорта исторически доминируется <strong>SOAP-интеграциями, ZIP-архивами с макетами билетов и PDF-документацией</strong>. Построить что-то поверх — это была многоквартальная гонка для каждой команды, которая пробовала.</p>
        <p><strong>Tictactrip</strong> предоставляет обратное. Чистый REST API, полная спецификация OpenAPI, коллекция Postman, которую можно импортировать одним кликом, примеры curl в каждом шаге руководства и интерактивный справочник API, где каждый эндпоинт документирован схемами запроса/ответа.</p>
        <p>Большинство инженерных команд делает прототип в первый же день и запускает производственную интеграцию за <strong>2–6 недель</strong>.</p>
      </>
    ),
    capabilities: [
      'Чистый REST API — без SOAP, без привязки к проприетарному SDK',
      'Спецификация OpenAPI 3, охватывающая каждый эндпоинт',
      'Готовая к использованию коллекция Postman',
      'Примеры curl для каждого шага бронирования',
      'Интерактивный справочник API (на базе Redocusaurus)',
      'Типичное время интеграции: 2–6 недель',
    ],
    benefits: [
      {icon: '📘', title: 'OpenAPI прежде всего', description: 'Каждый эндпоинт описан в OpenAPI 3 со схемами запроса и ответа. Генерируйте клиентов на любом языке или подключайте напрямую к существующему пайплайну code-gen.'},
      {icon: '🧪', title: 'Прототип в первый день', description: 'Импортируйте коллекцию Postman, вставьте свой токен аутентификации — и менее чем за пять минут вы получите живые результаты поиска. Никакого многонедельного онбординга перед тем, как начать писать код.'},
      {icon: '🛠️', title: 'Руководства, а не только справочные документы', description: 'Пошаговое руководство проводит через поиск, бронирование, оплату, выпуск билетов, возвраты и обмены с примерами curl — это контент, который превращает справочник в готовую к выпуску интеграцию.'},
      {icon: '⚡', title: '2–6 недель до продакшена', description: 'Большинство партнёров проходит путь от «первого curl» до «продакшен-трафика» за 2–6 недель. Мы работаем напрямую с вашей инженерной командой, чтобы разблокировать всё, что встанет на пути.'},
    ],
    code: {filename: 'first-call.sh', body: codeBody},
    faqs: [
      {q: 'Это REST API?', a: 'Да — чистые REST-эндпоинты, JSON в телах запросов и ответов, стандартные HTTP-коды. Никакого SOAP, никаких требований проприетарного SDK.'},
      {q: 'Предоставляете ли вы спецификацию OpenAPI?', a: 'Да. Полная спецификация OpenAPI 3 опубликована на developers.tictactrip.eu/api и используется для рендеринга нашего интерактивного справочника API.'},
      {q: 'Есть ли коллекция Postman?', a: 'Да. Готовая к использованию коллекция Postman доступна по ссылке из руководства — импортируйте её, вставьте токен аутентификации и за минуты запускайте реальные поиски.'},
      {q: 'Сколько занимает типичная интеграция?', a: 'Большинство партнёров выходит в продакшн за 2–6 недель. Точный срок зависит от объёма вашей интеграции (только поиск или полное бронирование) и количества нужных перевозчиков.'},
    ],
    serviceType: 'REST API, ориентированный на разработчиков, для европейского инвентаря поездов и автобусов',
    audienceType: 'Инженерные команды, интегрирующие европейский инвентарь путешествий',
  },
};
