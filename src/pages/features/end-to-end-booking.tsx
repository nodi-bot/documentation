import React from 'react';

import SolutionPage from '../../components/SolutionPage';
import {useTranslation} from '../../i18n/useTranslation';
import {endToEndBooking} from '../../i18n/content/features/end-to-end-booking';
import {pageTitles, buildRelated} from '../../i18n/content/pageTitles';

const SLUG = '/features/end-to-end-booking';

export default function EndToEndBookingFeature(): JSX.Element {
  const t = useTranslation(endToEndBooking);
  const titles = useTranslation(pageTitles);
  return (
    <SolutionPage
      {...t}
      slug={SLUG}
      related={buildRelated(
        ['features/real-time-availability', 'features/multimodal-coverage', 'features/developer-first'],
        titles,
      )}
    />
  );
}
