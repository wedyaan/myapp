import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'Indorse',
      companyUrl: 'https://indorse.com.sa/',
      role: 'App programmer',
      started: 'August  2024',
      upto: 'Present',
      tasks: [
        ' Experience in designing and executing thorough API tests.',
        'API Development and Integration.',
        ' Ability to understand client requirements and propose effective API solutions.',
        'Skilled in using Postman for efficient API testing and automation.',
        'Skills in troubleshooting API errors and understanding HTTP status codes.',
        'Knowledgeable in Swagger for clear API documentation and testing.'
      ],
    },
    {
      company: 'Sababa Foundation',
      companyUrl: 'https://sbabah.com/',
      role: 'Web Developer',
      started: 'November 2022',
      upto: 'March 2023',
      tasks: [
        'Optimized the website front-end for efficiency, scalability, and performance',
        'Optimized website performance for speed, and accessibility.',
        'Regularly updated and patched software to maintain website security.',
        'Conducted regular site maintenance, including backups and content updates.'

      ],
    },
    {
      company: 'Freelancer',
      companyUrl: 'Online',
      role: 'Programmer',
      started: 'june 2022',
      upto: 'Present',
      tasks: [
        'Built static frontend UI from the ground up using Next.js and Figma handover designs.',
        'Explained technical concepts in a way that clients can understand.',
        'Identified and resolved any technical issues that arise during development.',
        'Develop responsive user interfaces for websites and applications.',
      ],
    },
  ],
};
