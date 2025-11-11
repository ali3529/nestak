export interface Feature {
  icon: string;
  title: string;
  text: string;
  _id: string;
}

export interface FAQ {
  question: string;
  answer: string;
  _id: string;
}

export interface LandingData {
  _id: string;
  mainTitle: string;
  mainSubTitle: string;
  featureTitle: string;
  featureSubTitle: string;
  screenshots: string[];
  myket: string;
  bazzar: string;
  sibapp: string;
  sibche: string;
  googlePlay: string;
  directApkLink: string;
  contactUs: string;
  privacyPolicy: string;
  email: string;
  phone: string;
  address: string;
  instagram: string;
  telegram: string;
  whatsapp: string;
  aparat: string;
  youtube: string;
  footer: string;
  enamad: string;
  feature: Feature[];
  comments: any[];
  faq: FAQ[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
