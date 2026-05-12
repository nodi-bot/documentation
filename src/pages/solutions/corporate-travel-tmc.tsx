import React from 'react';

import SolutionPage from '../../components/SolutionPage';
import {useTranslation} from '../../i18n/useTranslation';
import {corporateTmc} from '../../i18n/content/solutions/corporate-travel-tmc';
import {pageTitles, buildRelated} from '../../i18n/content/pageTitles';

const SLUG = '/solutions/corporate-travel-tmc';

export default function CorporateTmcSolution(): JSX.Element {
  const t = useTranslation(corporateTmc);
  const titles = useTranslation(pageTitles);
  return (
    <SolutionPage
      {...t}
      slug={SLUG}
      related={buildRelated(
        ['solutions/online-travel-agencies', 'solutions/green-tech-sustainability', 'solutions/custom-internal-tools'],
        titles,
      )}
    />
  );
}
