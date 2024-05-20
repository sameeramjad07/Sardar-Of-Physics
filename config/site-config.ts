import { Metadata } from 'next';

const TITLE =
  'Sardar of Physics';
const DESCRIPTION =
  'This is an initiative by Sardar Ali Abbas to personally mentor students in their O/A Levels.';

const ALT_TITLE = 'Conceptuals Academy - Sardar of Physics';
const BASE_URL = 'http://localhost:3000';

export const siteConfig: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: '/favicon.ico',
  },
  applicationName: 'Sardar of Physics',
  creator: 'Sameer',
  twitter: {
    creator: '@sameeramjad',
    title: TITLE,
    description: DESCRIPTION,
    card: 'summary_large_image',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'sardarofphysics',
    url: BASE_URL,
    locale: 'en_US',
    type: 'website',
  },
  category: 'Education',
  alternates: {
    canonical: BASE_URL,
  },
  keywords: [
    'O Levels',
    'A Levels',
    'IGCSC',
    'Sardar of Physics',
    'Conceptuals Academy',
    'AS',
    'A2 Levels',
    'British Council Exams',
    'Physics',
    'Mathematics',
    'Chemistry',
    'Cambridge Exams',
  ],
  metadataBase: new URL(BASE_URL),
};