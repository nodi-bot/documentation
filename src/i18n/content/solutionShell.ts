import type {Translations} from '../useTranslation';

export type SolutionShell = {
  benefitsSubtitle: string;
  integrationKicker: string;
  integrationHeading: string;
  integrationCopy: string;
  startTutorialCta: string;
  apiReferenceCta: string;
  faqHeading: string;
  faqSubtitle: string;
  ctaHeading: string;
  ctaLead: string;
  contactSalesCta: string;
  backToHomeCta: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  breadcrumbAriaLabel: string;
};

export const solutionShell: Translations<SolutionShell> = {
  en: {
    benefitsSubtitle: 'The capabilities partners ship on day one.',
    integrationKicker: 'Integration',
    integrationHeading: 'One REST call, multimodal results',
    integrationCopy:
      'The same endpoint powers every Tictactrip integration. Authenticate, send a search payload, and receive itineraries with price, duration, carrier and CO₂ emissions. Then book through /book and deliver tickets to your users.',
    startTutorialCta: 'Start the tutorial',
    apiReferenceCta: 'Browse the API reference',
    faqHeading: 'Frequently asked questions',
    faqSubtitle: 'The points product and engineering teams check before integrating.',
    ctaHeading: 'Ready to integrate Tictactrip?',
    ctaLead:
      "Tell us about your project and we'll come back within one business day with a tailored plan.",
    contactSalesCta: 'Contact sales',
    backToHomeCta: 'Back to homepage',
    heroPrimaryCta: 'Read the API tutorial',
    heroSecondaryCta: 'Request API access',
    breadcrumbAriaLabel: 'Breadcrumb',
  },
  fr: {
    benefitsSubtitle: 'Les capacités que nos partenaires utilisent dès le premier jour.',
    integrationKicker: 'Intégration',
    integrationHeading: 'Un appel REST, des résultats multimodaux',
    integrationCopy:
      "Le même endpoint alimente toutes les intégrations Tictactrip. Authentifiez-vous, envoyez un payload de recherche, et recevez les itinéraires avec prix, durée, transporteur et émissions de CO₂. Réservez ensuite via /book et livrez les billets à vos utilisateurs.",
    startTutorialCta: 'Commencer le tutoriel',
    apiReferenceCta: "Parcourir la référence de l'API",
    faqHeading: 'Questions fréquentes',
    faqSubtitle:
      "Les points que les équipes produit et ingénierie vérifient avant de s'intégrer.",
    ctaHeading: 'Prêt à intégrer Tictactrip ?',
    ctaLead:
      "Parlez-nous de votre projet et nous revenons vers vous sous un jour ouvré avec un plan adapté.",
    contactSalesCta: "Contacter l'équipe commerciale",
    backToHomeCta: "Retour à l'accueil",
    heroPrimaryCta: "Lire le tutoriel de l'API",
    heroSecondaryCta: "Demander un accès à l'API",
    breadcrumbAriaLabel: "Fil d'Ariane",
  },
  de: {
    benefitsSubtitle: 'Die Funktionen, die Partner ab dem ersten Tag nutzen.',
    integrationKicker: 'Integration',
    integrationHeading: 'Ein REST-Aufruf, multimodale Ergebnisse',
    integrationCopy:
      'Derselbe Endpunkt versorgt jede Tictactrip-Integration. Authentifizieren Sie sich, senden Sie ein Such-Payload und erhalten Sie Reiseverbindungen mit Preis, Dauer, Transporteur und CO₂-Emissionen. Buchen Sie anschließend über /book und liefern Sie die Tickets an Ihre Nutzer.',
    startTutorialCta: 'Tutorial starten',
    apiReferenceCta: 'API-Referenz durchsuchen',
    faqHeading: 'Häufig gestellte Fragen',
    faqSubtitle: 'Die Punkte, die Produkt- und Engineering-Teams vor der Integration prüfen.',
    ctaHeading: 'Bereit, Tictactrip zu integrieren?',
    ctaLead:
      'Erzählen Sie uns von Ihrem Projekt — wir melden uns innerhalb eines Werktags mit einem maßgeschneiderten Plan.',
    contactSalesCta: 'Vertrieb kontaktieren',
    backToHomeCta: 'Zurück zur Startseite',
    heroPrimaryCta: 'API-Tutorial lesen',
    heroSecondaryCta: 'API-Zugang anfragen',
    breadcrumbAriaLabel: 'Brotkrumen-Navigation',
  },
  es: {
    benefitsSubtitle: 'Las capacidades que nuestros socios usan desde el primer día.',
    integrationKicker: 'Integración',
    integrationHeading: 'Una llamada REST, resultados multimodales',
    integrationCopy:
      'El mismo endpoint impulsa todas las integraciones de Tictactrip. Autentíquese, envíe un payload de búsqueda y reciba itinerarios con precio, duración, operador y emisiones de CO₂. Después reserve a través de /book y entregue los billetes a sus usuarios.',
    startTutorialCta: 'Comenzar el tutorial',
    apiReferenceCta: 'Explorar la referencia de la API',
    faqHeading: 'Preguntas frecuentes',
    faqSubtitle: 'Los puntos que los equipos de producto e ingeniería revisan antes de integrar.',
    ctaHeading: '¿Listo para integrar Tictactrip?',
    ctaLead:
      'Cuéntenos su proyecto y le responderemos en un día hábil con un plan a medida.',
    contactSalesCta: 'Contactar con ventas',
    backToHomeCta: 'Volver al inicio',
    heroPrimaryCta: 'Leer el tutorial de la API',
    heroSecondaryCta: 'Solicitar acceso a la API',
    breadcrumbAriaLabel: 'Migas de pan',
  },
  it: {
    benefitsSubtitle: 'Le funzionalità che i partner usano dal primo giorno.',
    integrationKicker: 'Integrazione',
    integrationHeading: 'Una chiamata REST, risultati multimodali',
    integrationCopy:
      'Lo stesso endpoint alimenta ogni integrazione Tictactrip. Autenticati, invia un payload di ricerca e ricevi itinerari con prezzo, durata, vettore ed emissioni di CO₂. Poi prenota tramite /book e consegna i biglietti ai tuoi utenti.',
    startTutorialCta: 'Inizia il tutorial',
    apiReferenceCta: "Esplora il riferimento dell'API",
    faqHeading: 'Domande frequenti',
    faqSubtitle: 'I punti che i team prodotto e ingegneria verificano prima di integrare.',
    ctaHeading: 'Pronto a integrare Tictactrip?',
    ctaLead:
      'Raccontaci il tuo progetto e ti risponderemo entro un giorno lavorativo con un piano su misura.',
    contactSalesCta: 'Contatta le vendite',
    backToHomeCta: 'Torna alla home',
    heroPrimaryCta: "Leggi il tutorial dell'API",
    heroSecondaryCta: "Richiedi l'accesso all'API",
    breadcrumbAriaLabel: 'Briciole di pane',
  },
  pt: {
    benefitsSubtitle: 'As capacidades que os parceiros usam desde o primeiro dia.',
    integrationKicker: 'Integração',
    integrationHeading: 'Uma chamada REST, resultados multimodais',
    integrationCopy:
      'O mesmo endpoint alimenta todas as integrações Tictactrip. Autentique-se, envie um payload de pesquisa e receba itinerários com preço, duração, transportadora e emissões de CO₂. Depois reserve através de /book e entregue os bilhetes aos seus utilizadores.',
    startTutorialCta: 'Começar o tutorial',
    apiReferenceCta: 'Explorar a referência da API',
    faqHeading: 'Perguntas frequentes',
    faqSubtitle: 'Os pontos que as equipas de produto e engenharia verificam antes de integrar.',
    ctaHeading: 'Pronto para integrar a Tictactrip?',
    ctaLead:
      'Conte-nos sobre o seu projeto e responderemos num dia útil com um plano à medida.',
    contactSalesCta: 'Contactar vendas',
    backToHomeCta: 'Voltar à página inicial',
    heroPrimaryCta: 'Ler o tutorial da API',
    heroSecondaryCta: 'Pedir acesso à API',
    breadcrumbAriaLabel: 'Caminho de navegação',
  },
  ru: {
    benefitsSubtitle: 'Возможности, которые партнёры используют с первого дня.',
    integrationKicker: 'Интеграция',
    integrationHeading: 'Один REST-вызов, мультимодальные результаты',
    integrationCopy:
      'Один и тот же эндпоинт обслуживает любую интеграцию Tictactrip. Пройдите аутентификацию, отправьте поисковый запрос и получите маршруты с ценой, продолжительностью, перевозчиком и выбросами CO₂. Затем оформите бронирование через /book и выдайте билеты пользователям.',
    startTutorialCta: 'Начать руководство',
    apiReferenceCta: 'Открыть справочник API',
    faqHeading: 'Часто задаваемые вопросы',
    faqSubtitle: 'Вопросы, которые проверяют продуктовые и инженерные команды перед интеграцией.',
    ctaHeading: 'Готовы интегрировать Tictactrip?',
    ctaLead:
      'Расскажите о вашем проекте — мы вернёмся в течение одного рабочего дня с готовым планом.',
    contactSalesCta: 'Связаться с отделом продаж',
    backToHomeCta: 'Вернуться на главную',
    heroPrimaryCta: 'Читать руководство по API',
    heroSecondaryCta: 'Запросить доступ к API',
    breadcrumbAriaLabel: 'Навигационная цепочка',
  },
};
