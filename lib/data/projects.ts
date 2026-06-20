export type Project = {
  slug: string;
  client: string;
  title: string;
  subtitle: string;
  detailTitle: string;
  description: string;
  overview: string[];
  business: string[];
  techStack: string[];
  tags: string[];
  heroImage: string;
  bannerVideo?: string;
  /** External video URL (YouTube, Vimeo) or direct MP4 path */
  demoVideo?: string;
  mockupImages: string[];
  metadata: {
    client: string;
    services: string;
    technologies: string;
    website: string;
    date: string;
  };
  about: {
    paragraphs: string[];
    bullets: string[];
  };
  goal: string;
  execution: {
    paragraphs: string[];
    bullets: string[];
  };
  results: {
    text: string;
    galleryImages: string[];
  };
  featuredCaption: string;
};

export const projects: Project[] = [
  {
    slug: "crypto-website-development-for-defi-x",
    client: "DeFi X",
    title: "Crypto Website",
    subtitle: "Development for DeFi X",
    detailTitle: "Crypto Website Development for DeFi\u00a0X",
    description:
      "A modern DeFi platform designed to democratize investment for crypto holders. Built with cutting-edge web technologies and a focus on user experience.",
    overview: [
      "Comprehensive web platform serving as the primary touchpoint for crypto investment products.",
      "Interactive dashboards with real-time data visualization and market insights.",
      "Seamless onboarding flows designed for new crypto investors.",
      "Fully responsive dark-themed interface conveying trust and innovation.",
    ],
    business: [
      "Crypto investing felt intimidating and fragmented for everyday users.",
      "Lower the barrier to entry without sacrificing a premium, trustworthy brand.",
      "Serve both novice investors and experienced crypto holders from a single platform.",
    ],
    techStack: [
      "React & TypeScript for type-safe, component-driven UI",
      "Next.js for server-side rendering and optimized performance",
      "Web3.js for wallet connection and blockchain integration",
      "GraphQL for efficient real-time data fetching",
      "Tailwind CSS for consistent design system styling",
    ],
    tags: ["React JS", "Web Development"],
    heroImage:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=800&fit=crop",
    demoVideo: "https://www.youtube.com/watch?v=wwIt5ZvROrs",
    mockupImages: [
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop",
    ],
    metadata: {
      client: "DeFi X",
      services: "Web Development",
      technologies: "React JS",
      website: "https://defix.example.com",
      date: "2023",
    },
    about: {
      paragraphs: [
        "DeFi X needed a comprehensive web platform that would serve as the primary touchpoint for their crypto investment products. The project required a sophisticated dark-themed interface that conveys trust and innovation.",
        "We developed a fully responsive website with interactive dashboards, real-time data visualization, and seamless onboarding flows for new crypto investors.",
      ],
      bullets: [
        "Responsive design across all device sizes",
        "Interactive 3D visual elements and animations",
        "Real-time crypto price integration",
        "Secure wallet connection interface",
      ],
    },
    goal: "The primary goal was to create an accessible DeFi platform that lowers the barrier to entry for crypto investment while maintaining a premium, trustworthy brand presence that appeals to both novice and experienced investors.",
    execution: {
      paragraphs: [
        "We followed an agile development approach, starting with extensive user research and competitive analysis in the DeFi space.",
        "The design phase involved creating high-fidelity prototypes in Figma, followed by iterative development sprints with continuous client feedback.",
      ],
      bullets: [
        "Discovery and user research phase",
        "UI/UX design and prototyping",
        "Frontend development with React",
        "Performance optimization and testing",
      ],
    },
    results: {
      text: "The final product exceeded client expectations, resulting in a 40% increase in user sign-ups within the first month of launch. The platform now serves over 10,000 active users daily.",
      galleryImages: [
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1642543492484-28e4d13f4d98?w=600&h=400&fit=crop",
      ],
    },
    featuredCaption: "DeFi X - Primary Dashboard mockup - Figma design",
  },
  {
    slug: "agency-website-development-for-dev-x",
    client: "Dev X",
    title: "Agency Website",
    subtitle: "Development for Dev X",
    detailTitle: "Agency Website Development for Dev\u00a0X",
    description:
      "A sleek agency website showcasing creative services with bold typography and immersive project galleries.",
    overview: [
      "Creative agency website showcasing portfolio, services, and team culture.",
      "Bold typography and immersive project galleries throughout the site.",
      "Smooth page transitions and animations reflecting an innovative brand.",
      "Custom CMS for easy portfolio and content management.",
    ],
    business: [
      "The agency lacked a web presence matching the quality of their client work.",
      "Position Dev X as a leader in digital creativity and innovation.",
      "Convert visitors into qualified leads through an intuitive browsing experience.",
    ],
    techStack: [
      "React & Next.js for performant, SEO-friendly pages",
      "TypeScript for maintainable codebase at scale",
      "GSAP for scroll-driven animations and micro-interactions",
      "Sanity CMS for flexible content management",
      "Tailwind CSS for rapid, consistent UI development",
    ],
    tags: ["React JS", "Web Development"],
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    mockupImages: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    ],
    metadata: {
      client: "Dev X",
      services: "Web Development",
      technologies: "React JS",
      website: "https://devx.example.com",
      date: "2023",
    },
    about: {
      paragraphs: [
        "Dev X is a creative digital agency that needed a website to match their innovative brand identity and showcase their portfolio of work.",
      ],
      bullets: [
        "Custom CMS for portfolio management",
        "Smooth page transitions and animations",
        "SEO-optimized architecture",
        "Contact and lead generation forms",
      ],
    },
    goal: "Create a stunning agency website that positions Dev X as a leader in digital creativity while providing an intuitive way to browse their work and contact the team.",
    execution: {
      paragraphs: [
        "We collaborated closely with Dev X's design team to translate their brand guidelines into a cohesive web experience.",
      ],
      bullets: [
        "Brand audit and strategy",
        "Wireframing and visual design",
        "React development with Next.js",
        "Launch and post-launch support",
      ],
    },
    results: {
      text: "The new website increased inbound leads by 65% and won a Webby Award nomination for best agency website design.",
      galleryImages: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop",
      ],
    },
    featuredCaption: "Dev X - Agency Website - Homepage design",
  },
  {
    slug: "trading-website-development-for-dark-x",
    client: "Dark X",
    title: "Trading Website",
    subtitle: "Development for Dark X",
    detailTitle: "Trading Website Development for Dark\u00a0X",
    description:
      "Next-gen investing app for modern investors with real-time charts and portfolio tracking.",
    overview: [
      "Trading platform combining powerful analytics with an intuitive interface.",
      "Real-time charts and portfolio performance tracking.",
      "Mobile-responsive experience for investors at every skill level.",
      "Advanced charting tools with clean, dark-themed UI.",
    ],
    business: [
      "Retail investors struggled with clunky tools built for professionals.",
      "Make sophisticated financial analytics accessible to everyday users.",
      "Retain the depth and precision that serious traders require.",
    ],
    techStack: [
      "Webflow for rapid visual development and CMS",
      "JavaScript for custom interactions and data handling",
      "Chart.js for real-time market data visualization",
      "REST APIs for live price feeds and portfolio sync",
      "Custom CSS for brand-specific trading interface styling",
    ],
    tags: ["Webflow", "Web Development"],
    heroImage:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=800&fit=crop",
    mockupImages: [
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1642543492484-28e4d13f4d98?w=800&h=600&fit=crop",
    ],
    metadata: {
      client: "Dark X",
      services: "Web Development",
      technologies: "Webflow",
      website: "https://darkx.example.com",
      date: "2022",
    },
    about: {
      paragraphs: [
        "Dark X wanted a trading platform that combines powerful analytics with an intuitive user interface for both beginners and professional traders.",
      ],
      bullets: [
        "Real-time market data integration",
        "Advanced charting tools",
        "Portfolio performance tracking",
        "Mobile-responsive trading interface",
      ],
    },
    goal: "Build a trading platform that makes sophisticated financial tools accessible to everyday investors while maintaining the depth required by professional traders.",
    execution: {
      paragraphs: [
        "Development focused on performance-critical features like real-time data streaming and chart rendering optimization.",
      ],
      bullets: [
        "Market research and competitor analysis",
        "UX design for complex data visualization",
        "Webflow development and custom code",
        "API integration and testing",
      ],
    },
    results: {
      text: "Dark X launched successfully with 5,000 users in the first week and maintains a 4.8-star rating on app stores.",
      galleryImages: [
        "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop",
      ],
    },
    featuredCaption: "Dark X - Trading Dashboard - Webflow design",
  },
  {
    slug: "banking-website-development-for-fintech-x",
    client: "Fintech X",
    title: "Banking Website",
    subtitle: "Development for Fintech X",
    detailTitle: "Banking Website Development for Fintech\u00a0X",
    description:
      "A modern banking platform with secure transactions, account management, and financial planning tools.",
    overview: [
      "Digital banking platform with secure transactions and account management.",
      "Financial planning tools integrated into a unified dashboard.",
      "Bank-grade security with accessible, user-friendly design.",
      "Multi-language support and WCAG 2.1 AA compliant interface.",
    ],
    business: [
      "Traditional banks offered clunky digital experiences that eroded trust.",
      "Simplify complex financial operations for everyday customers.",
      "Meet strict regulatory and security requirements without compromising UX.",
    ],
    techStack: [
      "Semantic HTML5 for accessible, SEO-friendly markup",
      "CSS3 with custom design system and responsive layouts",
      "JavaScript for interactive dashboard components",
      "Node.js backend for secure transaction processing",
      "PostgreSQL for reliable financial data storage",
    ],
    tags: ["HTML/CSS", "Web Development"],
    heroImage:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop",
    mockupImages: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=600&fit=crop",
    ],
    metadata: {
      client: "Fintech X",
      services: "Web Development",
      technologies: "HTML/CSS",
      website: "https://fintechx.example.com",
      date: "2022",
    },
    about: {
      paragraphs: [
        "Fintech X required a banking website that balances security, compliance, and user-friendly design for their digital banking services.",
      ],
      bullets: [
        "Bank-grade security implementation",
        "Accessible design (WCAG 2.1 AA)",
        "Multi-language support",
        "Account dashboard and transaction history",
      ],
    },
    goal: "Deliver a trustworthy banking web experience that simplifies complex financial operations while meeting strict regulatory and security requirements.",
    execution: {
      paragraphs: [
        "Security and compliance were prioritized throughout the development lifecycle with regular audits and penetration testing.",
      ],
      bullets: [
        "Compliance and security planning",
        "Information architecture design",
        "Frontend development",
        "Security audit and launch",
      ],
    },
    results: {
      text: "The platform onboarded 20,000 customers in its first quarter and reduced support tickets by 30% through improved UX.",
      galleryImages: [
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop",
      ],
    },
    featuredCaption: "Fintech X - Banking Platform - Dashboard design",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
