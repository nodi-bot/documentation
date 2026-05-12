import React from 'react';

import SolutionPage from '../../components/SolutionPage';
import {useTranslation} from '../../i18n/useTranslation';
import {greenTech} from '../../i18n/content/solutions/green-tech-sustainability';
import {pageTitles, buildRelated} from '../../i18n/content/pageTitles';

const SLUG = '/solutions/green-tech-sustainability';

export default function GreenTechSolution(): JSX.Element {
  const t = useTranslation(greenTech);
  const titles = useTranslation(pageTitles);
  return (
    <SolutionPage
      {...t}
      slug={SLUG}
      related={buildRelated(
        ['solutions/corporate-travel-tmc', 'solutions/mobility-maas', 'solutions/custom-internal-tools'],
        titles,
      )}
    />
  );
}
