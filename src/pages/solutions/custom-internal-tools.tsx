import React from 'react';

import SolutionPage from '../../components/SolutionPage';
import {useTranslation} from '../../i18n/useTranslation';
import {customInternal} from '../../i18n/content/solutions/custom-internal-tools';
import {pageTitles, buildRelated} from '../../i18n/content/pageTitles';

const SLUG = '/solutions/custom-internal-tools';

export default function CustomInternalToolsSolution(): JSX.Element {
  const t = useTranslation(customInternal);
  const titles = useTranslation(pageTitles);
  return (
    <SolutionPage
      {...t}
      slug={SLUG}
      related={buildRelated(
        ['solutions/corporate-travel-tmc', 'solutions/green-tech-sustainability', 'solutions/fintech-super-apps'],
        titles,
      )}
    />
  );
}
