import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import CodingGameIcon from '../components/Icon/CodingGameIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import LeetcodeIcon from '../components/Icon/LeetcodeIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
/*import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';*/
import profilepic from '../images/german_vacay.jpg';
import porfolioImage3 from "../images/portfolio/book-3.jpg";
import porfolioImage4 from '../images/portfolio/datacamp-4.png';
import porfolioImage7 from '../images/portfolio/datawhispers-7.png';
import porfolioImage6 from '../images/portfolio/money-6.jpg';
import porfolioImage5 from '../images/portfolio/pi-5.jpg';
import porfolioImage1 from '../images/portfolio/python-course-1.jpg';
import porfolioImage2 from '../images/portfolio/stock-2.jpg';
import heroImage from '../images/schloss.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "German Paul's Website",
  description: "Personal Website of German Paul",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm German Paul.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a dual-student in <strong className="text-stone-100">Business Informatics Data Science</strong>, at <strong className="text-stone-100">Duale Hochschule Baden-Württemberg and Stadt Mannheim</strong>. 
        I also engage in student innitiatives like <strong className="text-stone-100">Google Student Developer Club Mannheim and Student's Association for Data Analytics and Statistics</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me playing racket sports like <strong className="text-stone-100">Padel, Table Tennis and Pickleball</strong>,
        <strong className="text-stone-100"> travelling, playing chess or coding</strong>.{' '}
      </p>
    </>
  ),
  actions: [
    {
      href: '../assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Absolutely passionate about Data Science and Python 3 programming. Over 3 years of experience in programming. Planning to do my masters in Data Science after my bachelor.`,
  aboutItems: [
    {label: 'Location', text: 'Mannheim, Germany', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'German', Icon: FlagIcon},
    {label: 'Interests', text: 'Racket Sports, Travelling, Reading and Chess', Icon: SparklesIcon},
    {label: 'Study', text: 'Duale Hochschule Baden-Württemberg', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Stadt Mannheim', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'German',
        level: 10,
      },
      {
        name: 'Russian',
        level: 6,
      },
    ],
  },
  {
    name: 'Data Analysis',
    skills: [
      {
        name: 'EDA',
        level: 9,
      },
      {
        name: 'Data Visualization',
        level: 8,
      },
      {
        name: 'SQL',
        level: 8,
      },
    ],
  },
  {
    name: 'Programming languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Node.js',
        level: 6,
      },
      {
        name: 'Swift',
        level: 5,
      },
    ],
  },
  {
    name: 'Data Science',
    skills: [
      {
        name: 'Machine Learning',
        level: 7,
      },
      {
        name: 'Soft Skills',
        level: 8,
      },
      {
        name: 'Math',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'STADS Python Course',
    description: 'Web App for the 8-week python course where i was the lecturer.',
    url: 'https://python-kurs.streamlit.app/',
    image: porfolioImage1,
  },
  {
    title: 'Web App for the books that I read',
    description: 'All the books that I recently read in a firebase database in a streamlit UI and an admin panel where i can add, update and delete books.',
    url: 'https://my-books.streamlit.app/',
    image: porfolioImage3,
  },
  {
    title: 'Stock Price Prediction',
    description: 'DHBW Uni Project to predict the dow jones through web scraping the indian times and using ML.',
    url: 'https://github.com/GermanPaul12/DataWhispers-Stock-Price-Prediction-Projekt-DHBW',
    image: porfolioImage2,
  },
  {
    title: 'Professional Data Scientist DataCamp Certification',
    description: 'My slides and code for the final presentation of the Pro Data Science Track at DataCamp. I did EDA and examined 5 models.',
    url: 'https://github.com/GermanPaul12/Predicting-High-Traffic-Recipes-DataCamp',
    image: porfolioImage4,
  },
  {
    title: 'Raspberry Automation Project',
    description: 'Get notified via mail if it will rain and get the latest and most popular hacker news in the morning.',
    url: 'https://github.com/GermanPaul12/Automating-Hacker-News-and-Weather-Mails',
    image: porfolioImage5,
  },
  {
    title: 'Monthly Expense Planner',
    description: 'I had a long background in the finance world so I designed this little web app to have an overview of my finances',
    url: 'https://finance-planner.streamlit.app/',
    image: porfolioImage6,
  },
  {
    title: 'DataWhispers own python module',
    description: 'We had to write an open-book exam so we designed this web-app to help our fellow students to solve some of the tasks which were likely to occur in the exam.',
    url: 'https://datawhispers.streamlit.app/',
    image: porfolioImage7,
  },
  /* 
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
  */
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'October 2022 - present',
    location: 'Duale Hochschule Baden-Württemberg Mannheim',
    title: 'Bachelors in Business Informatics Data Science',
    content: <p>Mix of Business and Informatics with a major focus on Data Science.</p>,
  },
  {
    date: 'September 2020 - August 2022',
    location: 'Willy Helpach Business School',
    title: 'Apprenticeship as financial assistant',
    content: <p>Learning about financial markets, loans, economics and a variety of business related stuff.</p>,
  },
  {
    date: 'September 2017 - July 2022',
    location: 'Johann Philipp Bronner School',
    title: 'Economical high school',
    content: <p>Highest school degree in Germany with a focus on economics.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'September 2022 - Present',
    location: 'Stadt Mannehim',
    title: 'Internship as Data Scientist and Python Developer',
    content: (
      <p>
        Examining the practical use cases of Machine Learning for the city of Mannheim.
        Developing automation tools in Python.
      </p>
    ),
  },
  {
    date: 'September 2020 - August 2022',
    location: 'Sparkasse Heidelberg',
    title: 'Apprenticeship as financial assistant',
    content: (
      <p>
        Being part of the startup center team which is responsible for giving loans to startups.
      </p>
    ),
  },
];

export const volunteering: TimelineItem[] = [
  {
    date: 'October 2023 - Present',
    location: 'Google Developer Student Club Mannheim',
    title: 'Technical Lead',
    content: (
      <p>
        Tutoring in Python and organizing Hackathons
      </p>
    ),
  },
  {
    date: 'July 2023 - May 2024',
    location: "Student's Association for Data Analytics and Statistics",
    title: 'Project Lead Datathon',
    content: (
      <p>
        Being one of the main organizers for a programming competition in the field of data science. Event hosted around 100 students and I managed a team of 15 people.
      </p>
    ),
  },
  {
    date: 'September 2023 - February 2024',
    location: "University of Mannheim",
    title: 'Python Tutor',
    content: (
      <p>
        Was the lecturer for a 8-week Python Course for around 140 students. Major focus on Data Analytics.
      </p>
    ),
  },
  {
    date: 'October 2022 - October 2023',
    location: "AStA DHBW",
    title: 'Deputy Chairperson',
    content: (
      <p>
        Overseeing operations across 9 branches, collectively impacting 32,000 students to pave the way for a brighter future for the fellow students.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Data Science Master Student at Uni Mannheim',
      text: 'Thanks for the python refresher it greatly helped to widen my understanding.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/10.jpg',
    },
    {
      name: 'Hackathon Organizer',
      text: 'The team of German provided an interesting solution which was great for the finals and they did great at presenting in front of 3,000 people.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1008.jpg',
    },
    {
      name: 'Teamlead at City Mannheim',
      text: "German's work paves the way for a more digitalized and modern city.",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'german.paul@icloud.com',
      href: 'mailto:german.paul@icloud.com',
    },
    {
      type: ContactType.Location,
      text: 'Mannheim Germany',
      href: 'https://www.google.ca/maps/place/Mannheim',
    },
    {
      type: ContactType.LinkedIn,
      text: '@germanpaul12',
      href: 'https://www.linkedin.com/in/germanpaul12/',
    },
    {
      type: ContactType.Github,
      text: 'GermanPaul12',
      href: 'https://github.com/GermanPaul12',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/GermanPaul12'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/18163498/german1212'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/germanpaul12/'},
  {label: 'Leetcode', Icon: LeetcodeIcon, href: 'https://leetcode.com/GermanPaul12/'},
  {label: 'CodingGame', Icon: CodingGameIcon, href: 'https://www.codingame.com/profile/e545bdaa0b8057537f519b56b55a0b2f6365715'},
];
