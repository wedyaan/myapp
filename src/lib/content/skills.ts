import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'Front End development',
      lottie: {
        light: '/lotties/F-programmer4.json',
        dark: '/lotties/F-programmer4.json',
      },
      points: [
        "Developing responsive front-end web applications using Next.js with JavaScript, TailwindCSS.",
        'Developing responsive single-page applications using React.js',
      ],
      softwareSkills: [
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'sass', icon: 'vscode-icons:file-type-sass' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'typeScript', icon: 'vscode-icons:file-type-typescript-official' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'angularjs', icon: 'logos:angular-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
      ],
    },
    {
      id: getId(),
      title: 'UI/UX designing',
      lottie: {
        light: '/lotties/UIUX.json',
        dark: '/lotties/UIUX.json',
      },
      points: [
        'Experience in designing user-friendly interfaces with Figma',
        'Experience in developing design systems and style guides',
        'Providing user-friendly design solutions',
      ],
      softwareSkills: [
        { name: 'figma', icon: 'logos:figma' },
        { name: 'adobe illustrator', icon: 'logos:adobe-illustrator' },
        { name: 'adobe photoshop', icon: 'logos:adobe-photoshop' },
      ],
    },
    {
      id: getId(),
      title: 'API Testing',
      lottie: {
        light: '/lotties/API.json',
        dark: '/lotties/API.json',
      },
      points: [
        'Experience in designing and executing API tests',
        'Proficient in using Postman for API testing and automation',
        'Familiar with Swagger for API documentation and testing',
      ],
      softwareSkills: [
        { name: 'Postman', icon: 'logos:postman' }, // Use logos for color
        { name: 'Swagger', icon: 'logos:swagger' }, // Use logos for color
      ],
    },
  ],
};