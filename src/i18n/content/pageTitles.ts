import type {Translations} from '../useTranslation';

export type PageTitleKey =
  | 'features/multimodal-coverage'
  | 'features/eco-responsible'
  | 'features/real-time-availability'
  | 'features/smart-combinations'
  | 'features/end-to-end-booking'
  | 'features/developer-first'
  | 'solutions/online-travel-agencies'
  | 'solutions/corporate-travel-tmc'
  | 'solutions/fintech-super-apps'
  | 'solutions/mobility-maas'
  | 'solutions/green-tech-sustainability'
  | 'solutions/custom-internal-tools';

export type PageTitleMap = Record<PageTitleKey, string>;

export const pageTitles: Translations<PageTitleMap> = {
  en: {
    'features/multimodal-coverage': 'Multimodal coverage',
    'features/eco-responsible': 'Eco-responsible by design',
    'features/real-time-availability': 'Real-time availability',
    'features/smart-combinations': 'Smart combinations',
    'features/end-to-end-booking': 'End-to-end booking',
    'features/developer-first': 'Developer-first',
    'solutions/online-travel-agencies': 'Online Travel Agencies (OTA)',
    'solutions/corporate-travel-tmc': 'Corporate travel & TMC',
    'solutions/fintech-super-apps': 'Fintech & super-apps',
    'solutions/mobility-maas': 'Mobility & MaaS platforms',
    'solutions/green-tech-sustainability': 'Green-tech & sustainability',
    'solutions/custom-internal-tools': 'Custom & internal tools',
  },
  fr: {
    'features/multimodal-coverage': 'Couverture multimodale',
    'features/eco-responsible': 'Éco-responsable par conception',
    'features/real-time-availability': 'Disponibilité en temps réel',
    'features/smart-combinations': 'Combinaisons intelligentes',
    'features/end-to-end-booking': 'Réservation de bout en bout',
    'features/developer-first': "D'abord pour les développeurs",
    'solutions/online-travel-agencies': 'Agences de voyage en ligne (OTA)',
    'solutions/corporate-travel-tmc': "Voyage d'affaires & TMC",
    'solutions/fintech-super-apps': 'Fintech & super-apps',
    'solutions/mobility-maas': 'Mobilité & plateformes MaaS',
    'solutions/green-tech-sustainability': 'Green-tech & durabilité',
    'solutions/custom-internal-tools': 'Outils internes & sur mesure',
  },
  de: {
    'features/multimodal-coverage': 'Multimodale Abdeckung',
    'features/eco-responsible': 'Ökologisch von Grund auf',
    'features/real-time-availability': 'Echtzeit-Verfügbarkeit',
    'features/smart-combinations': 'Intelligente Kombinationen',
    'features/end-to-end-booking': 'End-to-End-Buchung',
    'features/developer-first': 'Entwickler-zentriert',
    'solutions/online-travel-agencies': 'Online-Reisebüros (OTA)',
    'solutions/corporate-travel-tmc': 'Geschäftsreisen & TMC',
    'solutions/fintech-super-apps': 'Fintech & Super-Apps',
    'solutions/mobility-maas': 'Mobilität & MaaS-Plattformen',
    'solutions/green-tech-sustainability': 'Green-Tech & Nachhaltigkeit',
    'solutions/custom-internal-tools': 'Maßgeschneiderte & interne Tools',
  },
  es: {
    'features/multimodal-coverage': 'Cobertura multimodal',
    'features/eco-responsible': 'Eco-responsable por diseño',
    'features/real-time-availability': 'Disponibilidad en tiempo real',
    'features/smart-combinations': 'Combinaciones inteligentes',
    'features/end-to-end-booking': 'Reserva extremo a extremo',
    'features/developer-first': 'Pensado para desarrolladores',
    'solutions/online-travel-agencies': 'Agencias de viajes online (OTA)',
    'solutions/corporate-travel-tmc': 'Viajes corporativos & TMC',
    'solutions/fintech-super-apps': 'Fintech & super-apps',
    'solutions/mobility-maas': 'Plataformas de movilidad y MaaS',
    'solutions/green-tech-sustainability': 'Green-tech & sostenibilidad',
    'solutions/custom-internal-tools': 'Herramientas internas y a medida',
  },
  it: {
    'features/multimodal-coverage': 'Copertura multimodale',
    'features/eco-responsible': 'Eco-responsabile fin dal design',
    'features/real-time-availability': 'Disponibilità in tempo reale',
    'features/smart-combinations': 'Combinazioni intelligenti',
    'features/end-to-end-booking': 'Prenotazione end-to-end',
    'features/developer-first': 'Prima di tutto per gli sviluppatori',
    'solutions/online-travel-agencies': 'Agenzie di viaggio online (OTA)',
    'solutions/corporate-travel-tmc': 'Viaggi aziendali & TMC',
    'solutions/fintech-super-apps': 'Fintech & super-app',
    'solutions/mobility-maas': 'Mobilità & piattaforme MaaS',
    'solutions/green-tech-sustainability': 'Green-tech & sostenibilità',
    'solutions/custom-internal-tools': 'Strumenti interni e su misura',
  },
  pt: {
    'features/multimodal-coverage': 'Cobertura multimodal',
    'features/eco-responsible': 'Eco-responsável por design',
    'features/real-time-availability': 'Disponibilidade em tempo real',
    'features/smart-combinations': 'Combinações inteligentes',
    'features/end-to-end-booking': 'Reserva ponto a ponto',
    'features/developer-first': 'Pensado para programadores',
    'solutions/online-travel-agencies': 'Agências de viagens online (OTA)',
    'solutions/corporate-travel-tmc': 'Viagens corporativas & TMC',
    'solutions/fintech-super-apps': 'Fintech & super-apps',
    'solutions/mobility-maas': 'Plataformas de mobilidade & MaaS',
    'solutions/green-tech-sustainability': 'Green-tech & sustentabilidade',
    'solutions/custom-internal-tools': 'Ferramentas internas e à medida',
  },
  ru: {
    'features/multimodal-coverage': 'Мультимодальное покрытие',
    'features/eco-responsible': 'Эко-ответственный по дизайну',
    'features/real-time-availability': 'Доступность в реальном времени',
    'features/smart-combinations': 'Умные комбинации',
    'features/end-to-end-booking': 'Сквозное бронирование',
    'features/developer-first': 'Прежде всего для разработчиков',
    'solutions/online-travel-agencies': 'Онлайн-турагентства (OTA)',
    'solutions/corporate-travel-tmc': 'Корпоративные поездки и TMC',
    'solutions/fintech-super-apps': 'Финтех и супер-приложения',
    'solutions/mobility-maas': 'Мобильность и MaaS-платформы',
    'solutions/green-tech-sustainability': 'Грин-тех и устойчивое развитие',
    'solutions/custom-internal-tools': 'Внутренние и кастомные инструменты',
  },
};

export function buildRelated(
  keys: PageTitleKey[],
  titles: PageTitleMap,
): Array<{title: string; slug: string}> {
  return keys.map((key) => ({title: titles[key], slug: `/${key}`}));
}
