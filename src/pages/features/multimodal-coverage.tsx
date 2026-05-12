import React from 'react';

import SolutionPage from '../../components/SolutionPage';
import {useTranslation} from '../../i18n/useTranslation';
import {multimodalCoverage} from '../../i18n/content/features/multimodal-coverage';
import {pageTitles, buildRelated} from '../../i18n/content/pageTitles';

const SLUG = '/features/multimodal-coverage';

export default function MultimodalCoverageFeature(): JSX.Element {
  const t = useTranslation(multimodalCoverage);
  const titles = useTranslation(pageTitles);
  return (
    <SolutionPage
      {...t}
      slug={SLUG}
      related={buildRelated(
        [
          'features/smart-combinations',
          'features/real-time-availability',
          'features/end-to-end-booking',
        ],
        titles,
      )}
    />
  );
}
