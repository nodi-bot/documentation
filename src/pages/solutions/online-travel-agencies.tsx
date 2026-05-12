import React from 'react';

import SolutionPage from '../../components/SolutionPage';
import {useTranslation} from '../../i18n/useTranslation';
import {ota} from '../../i18n/content/solutions/online-travel-agencies';
import {pageTitles, buildRelated} from '../../i18n/content/pageTitles';

const SLUG = '/solutions/online-travel-agencies';

export default function OtaSolution(): JSX.Element {
  const t = useTranslation(ota);
  const titles = useTranslation(pageTitles);
  return (
    <SolutionPage
      {...t}
      slug={SLUG}
      related={buildRelated(
        ['solutions/corporate-travel-tmc', 'solutions/fintech-super-apps', 'solutions/mobility-maas'],
        titles,
      )}
    />
  );
}
