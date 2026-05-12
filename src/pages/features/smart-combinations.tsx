import React from 'react';

import SolutionPage from '../../components/SolutionPage';
import {useTranslation} from '../../i18n/useTranslation';
import {smartCombinations} from '../../i18n/content/features/smart-combinations';
import {pageTitles, buildRelated} from '../../i18n/content/pageTitles';

const SLUG = '/features/smart-combinations';

export default function SmartCombinationsFeature(): JSX.Element {
  const t = useTranslation(smartCombinations);
  const titles = useTranslation(pageTitles);
  return (
    <SolutionPage
      {...t}
      slug={SLUG}
      related={buildRelated(
        ['features/multimodal-coverage', 'features/real-time-availability', 'features/end-to-end-booking'],
        titles,
      )}
    />
  );
}
