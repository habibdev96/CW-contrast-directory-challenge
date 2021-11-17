export interface ICompanyLogosData {
  id: number;
  icon: StaticImageData;
  alt: string;
}

export interface IResourcesTabData {
  id: number;
  title: string;
}

export interface IResourcesData {
  id: number;
  logo: StaticImageData;
  title: string;
  description: string;
  link: string;
}

export interface IFooterLinksData {
  id: number;
  title: string;
  links: {
    id: number;
    link: string;
  }[];
}
