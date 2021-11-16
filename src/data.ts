import companyLogoOne from '../public/assets/logos/google-logo.svg';
import companyLogoTwo from '../public/assets/logos/discord-logo.svg';
import companyLogoThree from '../public/assets/logos/slack-logo.svg';
import companyLogoFour from '../public/assets/logos/twitter-logo.svg';
import { ICompanyLogos } from './interfaces';

export const companyLogos: ICompanyLogos[] = [
  { id: 1, icon: companyLogoOne, alt: 'google logo' },
  { id: 2, icon: companyLogoTwo, alt: 'discord logo' },
  { id: 3, icon: companyLogoThree, alt: 'slack logo' },
  { id: 4, icon: companyLogoFour, alt: 'twitter logo' },
];
