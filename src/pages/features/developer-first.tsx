import React from 'react';

import SolutionPage from '../../components/SolutionPage';
import {useTranslation} from '../../i18n/useTranslation';
import {developerFirst} from '../../i18n/content/features/developer-first';
import {pageTitles, buildRelated} from '../../i18n/content/pageTitles';

const SLUG = '/features/developer-first';

export default function DeveloperFirstFeature(): JSX.Element {
  const t = useTranslation(developerFirst);
  const titles = useTranslation(pageTitles);
  return (
    <SolutionPage
      {...t}
      slug={SLUG}
      related={buildRelated(
        ['features/end-to-end-booking', 'features/real-time-availability', 'features/multimodal-coverage'],
        titles,
      )}
    />
  );
}
