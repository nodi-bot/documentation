import React from 'react';

import SolutionPage from '../../components/SolutionPage';
import {useTranslation} from '../../i18n/useTranslation';
import {realTimeAvailability} from '../../i18n/content/features/real-time-availability';
import {pageTitles, buildRelated} from '../../i18n/content/pageTitles';

const SLUG = '/features/real-time-availability';

export default function RealTimeAvailabilityFeature(): JSX.Element {
  const t = useTranslation(realTimeAvailability);
  const titles = useTranslation(pageTitles);
  return (
    <SolutionPage
      {...t}
      slug={SLUG}
      related={buildRelated(
        ['features/multimodal-coverage', 'features/end-to-end-booking', 'features/developer-first'],
        titles,
      )}
    />
  );
}
