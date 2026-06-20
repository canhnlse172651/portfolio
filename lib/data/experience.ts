export type WorkTimelineItem = {
  company: string;
  logo: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  technologies: string[];
  contributions: string[];
};

export const workTimeline: WorkTimelineItem[] = [
  {
    company: "Venture",
    logo: "V",
    role: "Head of Engineering",
    period: "2021 — Present",
    isCurrent: true,
    technologies: ["Next.js", "TypeScript", "AWS", "GraphQL", "Kubernetes"],
    contributions: [
      "Led a team of 12 engineers and defined the technical roadmap for core product initiatives.",
      "Architected a micro-frontend platform that reduced deployment time by 40%.",
      "Established CI/CD pipelines and code review standards across engineering squads.",
      "Shipped a real-time analytics dashboard used by 50k+ monthly active users.",
    ],
  },
  {
    company: "Pixel",
    logo: "P",
    role: "Lead Front-end Developer",
    period: "2018 — 2021",
    technologies: ["React", "Redux", "Node.js", "PostgreSQL", "Tailwind CSS"],
    contributions: [
      "Built and maintained client-facing SaaS applications for enterprise customers.",
      "Introduced component-driven development with Storybook across 3 product teams.",
      "Optimized Core Web Vitals, improving LCP from 4.2s to 1.8s on key landing pages.",
      "Mentored junior developers and led weekly front-end guild sessions.",
    ],
  },
  {
    company: "Studio X",
    logo: "S",
    role: "Senior Web Developer",
    period: "2015 — 2018",
    technologies: ["Vue.js", "JavaScript", "Sass", "WordPress", "PHP"],
    contributions: [
      "Delivered 30+ responsive websites for agencies and startup clients.",
      "Created reusable WordPress theme framework adopted by 5 agency partners.",
      "Integrated third-party APIs including Stripe, Mailchimp, and Google Maps.",
      "Improved average project delivery time by 25% through internal tooling.",
    ],
  },
  {
    company: "WebFlow Agency",
    logo: "W",
    role: "Web Developer",
    period: "2012 — 2015",
    technologies: ["HTML5", "CSS3", "jQuery", "WordPress", "PHP"],
    contributions: [
      "Developed custom WordPress themes and plugins for small business clients.",
      "Translated Figma and PSD designs into pixel-perfect, cross-browser layouts.",
      "Implemented SEO best practices and analytics tracking for client sites.",
      "Collaborated with designers to refine UX flows before development handoff.",
    ],
  },
];

export const workHistory = workTimeline.map((item) => ({
  company: item.company,
  logo: item.logo,
  title: item.role,
  period: item.period.replace(" — ", " - "),
  description: item.contributions[0],
}));

export type EducationItem = {
  title: string;
  institution: string;
  year: string;
  description: string;
  type: "education" | "certificate";
  link?: string;
};

export const educationItems: EducationItem[] = [
  {
    title: "Computer Science Degree",
    institution: "Tech University",
    year: "2026",
    description:
      "Bachelor's degree in Computer Science with focus on web technologies and software engineering.",
    type: "education",
  },
  {
    title: "AWS Certified Developer",
    institution: "Amazon Web Services",
    year: "2019",
    description:
      "Professional certification demonstrating expertise in developing and maintaining AWS applications.",
    type: "certificate",
    link: "https://aws.amazon.com/certification/certified-developer-associate/",
  },
  {
    title: "AWS Certified Developer",
    institution: "Amazon Web Services",
    year: "2019",
    description:
      "Professional certification demonstrating expertise in developing and maintaining AWS applications.",
    type: "certificate",
    link: "https://aws.amazon.com/certification/certified-developer-associate/",
  },
  {
    title: "AWS Certified Developer",
    institution: "Amazon Web Services",
    year: "2019",
    description:
      "Professional certification demonstrating expertise in developing and maintaining AWS applications.",
    type: "certificate",
    link: "https://aws.amazon.com/certification/certified-developer-associate/",
  },
  {
    title: "Google UX Design Certificate",
    institution: "Google",
    year: "2021",
    description:
      "Professional certificate covering the full UX design process from empathize to test.",
    type: "certificate",
    link: "https://grow.google/certificates/ux-design/",
  },
];

/** @deprecated Use educationItems filtered by type instead */
export const education = educationItems;

export const collaborations = [
  "Intercom",
  "InVision",
  "Adobe",
  "Spotify",
  "Stripe",
  "Notion",
  "Figma",
  "Slack",
  "Airbnb",
  "Uber",
  "Netflix",
  "Shopify",
];
