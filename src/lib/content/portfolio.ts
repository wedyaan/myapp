// src/data/seoData.ts

export type StringKeyValueType = {
  [key: string]: string;
};

export const socialLinks: StringKeyValueType = {
  twitter: 'https://x.com/wedyan_14',
  github: 'https://github.com/wedyaan',
  linkedin: 'https://www.linkedin.com/in/wedyaan-aloufi/',
};

export const author = {
  name: 'Wedyan Aloufi',
  email: 'wedyaan-aloufi@hotmail.com',
};

export const seoData = {
  title: 'Wedyan Aloufi | Front-End Developer',
  description:
    'Wedyan Aloufi is a front-end developer who specializes in building (and occasionally designing) exceptional visual interfaces.',
  author: author.name,
  image:
    'https://user-images.githubusercontent.com/68834718/217467445-0b0d2d63-f8ad-4702-8474-814eb2cbb3be.png',
  url: 'https://vatsalsinghkv.vercel.app/',
  keywords: [
    'Wedyan',
    'Wedyan Aloufi',
    '@Wedyan Aloufi',
    'WedyanAloufi',
    'Portfolio',
    'Wedyan Portfolio',
    'Wedyan Aloufi Portfolio',
  ],
};