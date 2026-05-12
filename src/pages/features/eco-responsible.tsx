import React from 'react';

import SolutionPage from '../../components/SolutionPage';
import {useTranslation} from '../../i18n/useTranslation';
import {ecoResponsible} from '../../i18n/content/features/eco-responsible';
import {pageTitles, buildRelated} from '../../i18n/content/pageTitles';

const SLUG = '/features/eco-responsible';

export default function EcoResponsibleFeature(): JSX.Element {
  const t = useTranslation(ecoResponsible);
  const titles = useTranslation(pageTitles);
  return (
    <SolutionPage
      {...t}
      slug={SLUG}
      related={buildRelated(
        ['features/multimodal-coverage', 'features/real-time-availability', 'features/smart-combinations'],
        titles,
      )}
    />
  );
}
