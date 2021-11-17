import companyLogoOne from '../public/assets/logos/google-logo.svg';
import companyLogoTwo from '../public/assets/logos/discord-logo.svg';
import companyLogoThree from '../public/assets/logos/slack-logo.svg';
import companyLogoFour from '../public/assets/logos/twitter-logo.svg';

import resourceFontLogoOne from '../public/assets/fonts/google-fonts.svg';
import resourceFontLogoTwo from '../public/assets/fonts/myfonts-logo.svg';
import resourceFontLogoThree from '../public/assets/fonts/fontsquirrel-logo.svg';
import resourceFontLogoFour from '../public/assets/fonts/adobe-fonts-logo.svg';
import resourceFontLogoFive from '../public/assets/fonts/fontspark-logo.svg';
import resourceFontLogoSix from '../public/assets/fonts/better-web-type-logo.svg';

import resourceMockLogoOne from '../public/assets/mockups/mockupworld-logo.svg';
import resourceMockLogoTwo from '../public/assets/mockups/collabshot-logo.svg';
import resourceMockLogoThree from '../public/assets/mockups/facebook-design-logo.svg';
import resourceMockLogoFour from '../public/assets/mockups/animockup-logo.svg';
import resourceMockLogoFive from '../public/assets/mockups/mockuphone.svg';
import resourceMockLogoSix from '../public/assets/mockups/deviceshots-logo.svg';

import resourceIllusLogoOne from '../public/assets/illustrations/humaaans-logo.svg';
import resourceIllusLogoTwo from '../public/assets/illustrations/drawkit-logo.svg';
import resourceIllusLogoThree from '../public/assets/illustrations/absurd-logo.svg';
import resourceIllusLogoFour from '../public/assets/illustrations/undraw.svg';
import resourceIllusLogoFive from '../public/assets/illustrations/manypixels-logo.svg';
import resourceIllusLogoSix from '../public/assets/illustrations/open-peeps-logo.svg';

import resourceIconLogoOne from '../public/assets/icons/uxwing-logo.svg';
import resourceIconLogoTwo from '../public/assets/icons/shapedfonts-logo.svg';
import resourceIconLogoThree from '../public/assets/icons/feather-logo.svg';
import resourceIconLogoFour from '../public/assets/icons/tabler-icons-logo.svg';
import resourceIconLogoFive from '../public/assets/icons/icons8-logo.svg';
import resourceIconLogoSix from '../public/assets/icons/flaticon-logo.svg';

import {
  ICompanyLogosData,
  IResourcesData,
  IResourcesTabData,
  IFooterLinksData,
} from './interfaces';

export const companyLogosData: ICompanyLogosData[] = [
  { id: 1, icon: companyLogoOne, alt: 'google logo' },
  { id: 2, icon: companyLogoTwo, alt: 'discord logo' },
  { id: 3, icon: companyLogoThree, alt: 'slack logo' },
  { id: 4, icon: companyLogoFour, alt: 'twitter logo' },
];

export const resourcesTabData: IResourcesTabData[] = [
  { id: 1, title: 'Fonts' },
  { id: 2, title: 'Mockups' },
  { id: 3, title: 'Illustrations' },
  { id: 4, title: 'Icons' },
];

export const resourcesData: IResourcesData[][] = [
  // fonts
  [
    {
      id: 1,
      logo: resourceFontLogoOne,
      title: 'Google Fonts',
      description:
        'Making the web more beautiful, fast, and open through great typography.',
      link: 'https://freetypography.com/',
    },
    {
      id: 2,
      logo: resourceFontLogoTwo,
      title: 'MyFonts',
      description:
        'The #1 place to download great @font-face webfonts and desktop fonts.',
      link: 'https://freetypography.com/',
    },
    {
      id: 3,
      logo: resourceFontLogoThree,
      title: 'Font Squirrel',
      description:
        'Font Squirrel scours the internet for high quality and legitimately free fonts.',
      link: 'https://usemodify.com/',
    },
    {
      id: 4,
      logo: resourceFontLogoFour,
      title: 'Adobe Fonts',
      description:
        'Thousands of beautiful fonts to designers every day by leading foundries.',
      link: 'https://www.fontget.com/',
    },
    {
      id: 5,
      logo: resourceFontLogoFive,
      title: 'FontSpark',
      description:
        'Helping designers discover the perfect font for their next design project.',
      link: 'https://devfonts.gafi.dev/',
    },
    {
      id: 6,
      logo: resourceFontLogoSix,
      title: 'BetterWebType',
      description:
        'A web typography course for web designers and web developers by Matej Latin.',
      link: 'https://www.fontget.com/',
    },
  ],

  // mockups
  [
    {
      id: 7,
      logo: resourceMockLogoOne,
      title: 'Mockup World',
      description: 'The biggest source of free photo-realistic Mockups online.',
      link: 'https://www.mockupworld.co/',
    },
    {
      id: 8,
      logo: resourceMockLogoTwo,
      title: 'Collab Shot',
      description: 'Real-time screen grabs and image sharing.',
      link: 'https://www.collabshot.com/',
    },
    {
      id: 9,
      logo: resourceMockLogoThree,
      title: 'Facebook Devices',
      description: 'Images and Sketch files of popular devices.',
      link: 'https://facebook.design/devices',
    },
    {
      id: 10,
      logo: resourceMockLogoFour,
      title: 'Animockup',
      description: 'Create animated mockups in the browser 🔥.',
      link: 'https://animockup.com/',
    },
    {
      id: 11,
      logo: resourceMockLogoFive,
      title: 'Mockuphone',
      description:
        '100% free mockups for all devices including IOS, Android, Windows Phone, Laptop & Desktop and TV"',
      link: 'https://mockuphone.com/',
    },
    {
      id: 12,
      logo: resourceMockLogoSix,
      title: 'Device Shots',
      description:
        'Create high-resolution device mockups for social media, for free',
      link: 'https://deviceshots.com/',
    },
  ],

  // illustrations
  [
    {
      id: 13,
      logo: resourceIllusLogoOne,
      title: 'Humaaans',
      description:
        'Cool illustrations of people with the ability to mix and match.',
      link: 'https://www.humaaans.com/',
    },
    {
      id: 14,
      logo: resourceIllusLogoTwo,
      title: 'DrawKit',
      description: 'Illustrations for designers and startups.',
      link: 'https://www.drawkit.io/',
    },
    {
      id: 15,
      logo: resourceIllusLogoThree,
      title: 'Absurd Design',
      description:
        'Free surrealist illustrations for designers and developers.',
      link: 'https://absurd.design/',
    },
    {
      id: 16,
      logo: resourceIllusLogoFour,
      title: 'unDraw',
      description:
        'Open-source illustrations for any idea you can imagine and create.',
      link: 'https://undraw.co/',
    },
    {
      id: 17,
      logo: resourceIllusLogoFive,
      title: 'ManyPixels',
      description: 'Monochromatic, Isometric high-quality illustrations.',
      link: 'https://www.manypixels.co/gallery/',
    },
    {
      id: 18,
      logo: resourceIllusLogoSix,
      title: 'Open Peeps',
      description: 'Hand drawn illustration library.',
      link: 'https://www.openpeeps.com/',
    },
  ],

  // icons
  [
    {
      id: 19,
      logo: resourceIconLogoOne,
      title: 'UXWing',
      description: 'Well Optimized, Free icons for commercial use.',
      link: 'https://uxwing.com/',
    },
    {
      id: 20,
      logo: resourceIconLogoTwo,
      title: 'Shapedfonts Iconclub',
      description: '8000+ free icons for everyone to use.',
      link: 'https://shapedfonts.com/iconclub/',
    },
    {
      id: 21,
      logo: resourceIconLogoThree,
      title: 'Feather Icons',
      description: 'Beautiful, customizable open source icons.',
      link: 'https://feathericons.com/',
    },
    {
      id: 22,
      logo: resourceIconLogoFour,
      title: 'Tabler Icons',
      description: '470+ highly customizable open source SVG icons.',
      link: 'https://tablericons.com/',
    },
    {
      id: 23,
      logo: resourceIconLogoFive,
      title: 'Icons8',
      description: 'Free icons, photos, vectors and tools.',
      link: 'https://icons8.com/',
    },
    {
      id: 24,
      logo: resourceIconLogoSix,
      title: 'Flat Icon',
      description:
        'The largest database of free icons in PNG, SVG, EPS, PSD and BASE 64 formats.',
      link: 'https://www.flaticon.com/',
    },
  ],
];

export const footerLinksData: IFooterLinksData[] = [
  {
    id: 1,
    title: 'Resources',
    links: [
      { id: 1.1, link: 'Fonts' },
      { id: 1.2, link: 'Illustrations' },
      { id: 1.3, link: 'Mockups' },
      { id: 1.4, link: 'Icons' },
      { id: 1.5, link: 'Books' },
    ],
  },
  {
    id: 2,
    title: 'Company',
    links: [
      { id: 2.1, link: 'About' },
      { id: 2.2, link: 'Blog' },
    ],
  },
  {
    id: 3,
    title: 'Support',
    links: [
      { id: 3.1, link: 'FAQ' },
      { id: 3.2, link: 'Contact' },
    ],
  },
  {
    id: 4,
    title: 'Sponser',
    links: [{ id: 4.1, link: 'Sponser Resources' }],
  },
];
