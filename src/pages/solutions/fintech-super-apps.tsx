import React from 'react';

import SolutionPage from '../../components/SolutionPage';
import {useTranslation} from '../../i18n/useTranslation';
import {fintechSuperApps} from '../../i18n/content/solutions/fintech-super-apps';
import {pageTitles, buildRelated} from '../../i18n/content/pageTitles';

const SLUG = '/solutions/fintech-super-apps';

export default function FintechSolution(): JSX.Element {
  const t = useTranslation(fintechSuperApps);
  const titles = useTranslation(pageTitles);
  return (
    <SolutionPage
      {...t}
      slug={SLUG}
      related={buildRelated(
        ['solutions/mobility-maas', 'solutions/online-travel-agencies', 'solutions/custom-internal-tools'],
        titles,
      )}
    />
  );
}
