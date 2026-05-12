import React from 'react';

import SolutionPage from '../../components/SolutionPage';
import {useTranslation} from '../../i18n/useTranslation';
import {mobilityMaas} from '../../i18n/content/solutions/mobility-maas';
import {pageTitles, buildRelated} from '../../i18n/content/pageTitles';

const SLUG = '/solutions/mobility-maas';

export default function MobilityMaasSolution(): JSX.Element {
  const t = useTranslation(mobilityMaas);
  const titles = useTranslation(pageTitles);
  return (
    <SolutionPage
      {...t}
      slug={SLUG}
      related={buildRelated(
        ['solutions/fintech-super-apps', 'solutions/green-tech-sustainability', 'solutions/online-travel-agencies'],
        titles,
      )}
    />
  );
}
