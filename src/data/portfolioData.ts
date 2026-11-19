export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: string;
  tags: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  demoVideoUrl?: string;
  featured: boolean;
  highlights?: string[];
  teamTag?: string;
  roleDescription?: string;
}

export interface SkillCategory {
  title: string;
  categoryKey: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    tag?: string;
    badge?: string;
  }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  type: string;
  period: string;
  status: 'Current' | 'Completed';
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export interface SchoolingItem {
  level: string;
  year: string;
  score: string;
  title: string;
  subjects?: string;
  institution: string;
  board: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  graduationYear: string;
  location: string;
  cgpa: string;
  highlights: string[];
  keyCoursework: string[];
  schooling: SchoolingItem[];
  priorEducation?: {
    title: string;
    board: string;
    score: string;
  }[];
  coreSubjects?: string[];
}

export interface CertificateLink {
  title: string;
  url: string;
}

export const ALL_CERTIFICATES_URL = "https://github.com/dhushanth05/Certifications";

export interface AchievementItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  badge?: string;
  footerLabel?: string;
  category?: 'hackathon' | 'certification';
  credentialUrl?: string;
  credentialLinks?: CertificateLink[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "DHUSHANTH SRINIVASA",
    tagline: "AI/ML Engineer & Software Developer | DSATM '27 | Krosum Labs Intern",
    shortBio: "Aspiring AI/ML Engineer with a solid foundation in applied machine learning, RAG systems, and full-stack software development. Currently interning at Krosum Labs and studying at DSATM Bengaluru.",
    location: "Bangalore, Karnataka, India",
    phone: "+91 9964185141",
    email: "sdhushanth123@gmail.com",
    github: "https://github.com/dhushanth05",
    linkedin: "https://linkedin.com/in/dhushanth-srinivasa",
    resumePath: "/Dhushanth_Srinivasa_Resume.pdf",
    profileImage: "/profile.webp",
    statusBadge: "Active Data Science & MLOps Intern @ Krosum Labs",
    stats: [
      { label: "Graduation", value: "2027" },
      { label: "Current CGPA", value: "8.54" },
      { label: "Krosum Labs · AI/ML & MLOps", value: "Intern" },
      { label: "Location", value: "Bengaluru, IN" },
    ]
  },

  about: {
    heading: "Developing Reliable, High-Impact AI Systems",
    paragraphs: [
      "I am a Final-year B.E. student in Computer Science and Design at Dayananda Sagar Academy of Technology and Management (DSATM), Bengaluru, graduating in 2027.",
      "My technical focus spans applied AI/ML, retrieval-augmented generation (RAG), and multi-agent AI systems, alongside end-to-end full-stack software development.",
      "Currently, I am interning at Krosum Labs as a Data Science & MLOps Intern, building and evaluating supervised machine learning models on banking datasets."
    ],
    pillars: [
      {
        title: "AI / ML & GenAI",
        desc: "RAG architectures, LangGraph multi-agent systems, sentence transformers, and LLM integrations (OpenAI & Gemini).",
        icon: "Cpu"
      },
      {
        title: "Full-Stack Development",
        desc: "Containerized services using FastAPI, Next.js, React, Node.js, and JWT-authenticated REST APIs.",
        icon: "Layers"
      },
      {
        title: "Data Science & MLOps",
        desc: "Distributed data pipelines with PySpark, Spark streaming, Apache Airflow scheduling, and Grafana monitoring.",
        icon: "Database"
      },
      {
        title: "Knowledge Graphs & Storage",
        desc: "Multi-hop graph traversal and hybrid retrieval across Neo4j, PostgreSQL, MongoDB, Redis, and SQLite.",
        icon: "BrainCircuit"
      }
    ]
  },

  experience: [
    {
      role: "Data Science & MLOps Intern",
      company: "Krosum Labs",
      location: "Bengaluru, Karnataka, India",
      type: "Industry Internship",
      period: "Aug 2026 – Present",
      status: "Current",
      summary: "Currently training in applied machine learning and working hands-on with banking datasets.",
      responsibilities: [
        "Building and evaluating supervised machine learning models on banking datasets using scikit-learn, covering model training, validation, and performance metrics.",
        "Cleaning, preprocessing, and analysing banking data using Python, NumPy, Pandas, and Matplotlib to prepare high-quality features for modelling.",
        "Learning PySpark and Apache Spark for distributed data processing, including streaming pipelines.",
        "Learning workflow scheduling with Apache Airflow and pipeline monitoring with Grafana dashboards."
      ],
      technologies: ["Python", "scikit-learn", "NumPy", "Pandas", "Matplotlib", "PySpark", "Apache Spark", "Apache Airflow", "Grafana", "MLOps"]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "resumepilot",
      title: "ResumePilot AI",
      subtitle: "Full-Stack AI Resume Analyzer & Match Scoring Platform",
      description: "An end-to-end full-stack AI platform that performs deep semantic matching between resumes and job descriptions with skill extraction and token-efficient caching.",
      category: "Full-Stack",
      tags: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "Docker", "OpenAI", "Sentence Transformers", "spaCy"],
      githubUrl: "https://github.com/dhushanth05/ResumePilot",
      featured: true,
      highlights: [
        "Architected full-stack solution with JWT-authenticated REST APIs, Next.js frontend, and a FastAPI backend containerized with Docker.",
        "Implemented resume-to-job-description semantic matching using OpenAI, Sentence Transformers, and spaCy for skill extraction and scoring.",
        "Added Redis caching of resume-analysis and embedding results to eliminate redundant OpenAI API calls, significantly reducing latency and API expenditure."
      ]
    },
    {
      id: "cynthera",
      title: "CYNTHERA",
      subtitle: "Evidence-Traceable Multi-Agent AI Framework for Drug Repurposing",
      description: "A collaborative multi-agent AI framework for drug repurposing that turns a drug–disease hypothesis into a SUPPORT / OPPOSE / UNCERTAIN assessment using 8+ open biomedical databases.",
      category: "BioAI & Multi-Agent",
      teamTag: "Team Project (4 members)",
      roleDescription: "Backend & FastAPI integration, Investigation Playground, evidence-graph testing & 100-case frozen evaluation.",
      tags: ["Python", "FastAPI", "Streamlit", "REST APIs", "SQLite", "Multi-Agent AI", "Graph Algorithms"],
      githubUrl: "https://github.com/dhushanth05/cynthera",
      featured: true,
      highlights: [
        "Built the multi-hop evidence graph and DFS-based pathfinder for Drug → Target → Pathway → Gene → Disease chains.",
        "Engineered a mechanism validator and evidence polarity classifier.",
        "Developed an interactive Streamlit investigation workspace with FastAPI endpoints for subgraph exploration, source tracing, and what-if analysis.",
        "Validated graph and pathway outputs contributing to a frozen 100-case benchmark (100% traceable conclusions, 90.7% SUPPORT precision, 5% false-promising rate)."
      ]
    },
    {
      id: "plantmind",
      title: "PlantMind",
      subtitle: "AI-Powered Industrial Knowledge Platform (ET AI Hackathon 2.0)",
      description: "An AI-powered industrial knowledge system that converts complex maintenance and inspection PDFs into searchable intelligence through an 8-stage ingestion pipeline.",
      category: "AI / GenAI",
      tags: ["Python", "FastAPI", "React", "MongoDB", "Neo4j", "Redis", "Gemini API", "Docker", "RAG"],
      githubUrl: "https://github.com/dhushanth05/PlantMind",
      featured: true,
      highlights: [
        "Engineered an 8-stage ingestion pipeline covering text extraction, chunking, entity extraction, embeddings, and knowledge-graph construction.",
        "Implemented hybrid retrieval combining vector search with Neo4j graph context and Redis caching.",
        "Integrated a Gemini-powered copilot answering complex queries with citations grounded in retrieved document chunks.",
        "Developed a React & TypeScript workspace with interactive knowledge-graph explorer backed by 15+ FastAPI endpoints."
      ]
    }
  ] as ProjectItem[],

  moreProjects: [
    {
      id: "filmpire",
      title: "Filmpire",
      description: "Movie discovery web app with TMDB-powered search, genre filtering, movie and actor details, favorites and watchlist, dark/light mode, and franchise timeline guides with an interactive movie quiz.",
      category: "Web App",
      tags: ["React", "Redux Toolkit", "Material UI", "TMDB API", "Axios"],
      githubUrl: "https://github.com/dhushanth05/Filmpire",
      featured: false
    },
    {
      id: "ar-skeleton",
      title: "AR Human Skeleton Learning System",
      description: "Interactive augmented-reality anatomical visualization tool built using Python, OpenCV, and ArUco markers to track and overlay 3D skeletal structures in real time.",
      category: "Augmented Reality",
      tags: ["Python", "OpenCV", "ArUco", "Computer Vision"],
      githubUrl: "https://github.com/dhushanth05/HumanSkeletonAR",
      featured: false
    },
    {
      id: "storyspire",
      title: "StorySpire",
      description: "Interactive creative storytelling and narrative generation web application powered by modern generative AI models and reactive frontend components.",
      category: "Generative AI",
      tags: ["React", "Python", "FastAPI", "Generative AI", "TailwindCSS"],
      githubUrl: "https://github.com/dhushanth05/StorySpire",
      featured: false
    },
    {
      id: "library-mgmt",
      title: "Library Management System",
      description: "Full-featured database-driven desktop and web management platform for automated book inventory cataloging, circulation tracking, and member administration.",
      category: "Software Engineering",
      tags: ["Python", "SQL", "Database Design", "CRUD Architecture"],
      githubUrl: "https://github.com/dhushanth05/Library-Management-System",
      featured: false
    }
  ] as ProjectItem[],

  skills: [
    {
      title: "AI / ML & GenAI",
      categoryKey: "aiml",
      description: "Core machine learning frameworks, generative AI models, vector search, and agentic workflows.",
      iconName: "BrainCircuit",
      skills: [
        { name: "scikit-learn", tag: "Supervised & Unsupervised ML" },
        { name: "OpenAI API", tag: "GPT Models & Embeddings" },
        { name: "Gemini API", tag: "Multimodal LLMs" },
        { name: "RAG", tag: "Hybrid Vector + Graph" },
        { name: "LangGraph", tag: "Multi-Agent Workflows" },
        { name: "CNN & Transfer Learning", tag: "Deep Learning" },
        { name: "OpenCV", tag: "Computer Vision" },
        { name: "Sentence Transformers", tag: "Dense Embeddings" },
        { name: "spaCy", tag: "NLP & Entity Extraction" }
      ]
    },
    {
      title: "Data Science & Big Data",
      categoryKey: "datascience",
      description: "Data analysis libraries, distributed processing engines, and workflow schedulers.",
      iconName: "Database",
      skills: [
        { name: "NumPy", tag: "Numerical Arrays" },
        { name: "Pandas", tag: "Data Preprocessing" },
        { name: "Matplotlib", tag: "Visualization & EDA" },
        { name: "PySpark", tag: "Distributed Data", badge: "Learning" },
        { name: "Apache Spark", tag: "Streaming", badge: "Learning" },
        { name: "Apache Airflow", tag: "DAG Pipelines", badge: "Learning" }
      ]
    },
    {
      title: "Programming Languages",
      categoryKey: "languages",
      description: "Foundation languages for system development, data structures, and algorithms.",
      iconName: "Code2",
      skills: [
        { name: "Python", tag: "AI/ML, Data & APIs" },
        { name: "Java", tag: "DSA & OOP Architecture" },
        { name: "C", tag: "Systems Programming" },
        { name: "JavaScript", tag: "Modern ESNext" },
        { name: "TypeScript", tag: "Type-Safe Systems" },
        { name: "SQL", tag: "Complex Queries & Joins" }
      ]
    },
    {
      title: "Full-Stack & Backend Systems",
      categoryKey: "fullstack",
      description: "Reactive web interfaces, high-performance async microservices, and secure REST APIs.",
      iconName: "Server",
      skills: [
        { name: "React.js", tag: "Component Architecture" },
        { name: "FastAPI", tag: "High-Performance Async" },
        { name: "Flask", tag: "Microservices & Web APIs" },
        { name: "Next.js", tag: "App Router & SSR" },
        { name: "React Native", tag: "Cross-Platform Mobile" },
        { name: "Node.js", tag: "Backend Runtime" },
        { name: "REST APIs", tag: "Clean Endpoint Architecture" },
        { name: "Streamlit", tag: "Rapid AI Prototyping" },
        { name: "JWT Auth", tag: "Stateless Security" },
        { name: "HTML5 / CSS3", tag: "Modern Layouts & UI" }
      ]
    },
    {
      title: "Databases & Storage",
      categoryKey: "databases",
      description: "Relational, document, in-memory, and graph databases.",
      iconName: "Database",
      skills: [
        { name: "PostgreSQL", tag: "Relational DB" },
        { name: "MongoDB", tag: "Document Store" },
        { name: "Supabase", tag: "Postgres & Auth BaaS" },
        { name: "Neo4j", tag: "Knowledge Graph" },
        { name: "Redis", tag: "Caching & Queues" },
        { name: "SQLite", tag: "Lightweight Persistence" },
        { name: "MySQL", tag: "Relational Database" }
      ]
    },
    {
      title: "Tools & DevOps",
      categoryKey: "tools",
      description: "Containerization, telemetry, automated testing, and version control.",
      iconName: "Terminal",
      skills: [
        { name: "Git", tag: "Version Control" },
        { name: "GitHub", tag: "CI/CD & Collaboration" },
        { name: "Docker", tag: "Containerization" },
        { name: "Grafana", tag: "Dashboards", badge: "Learning" },
        { name: "pytest", tag: "Automated Unit Tests" },
        { name: "Figma (UI/UX)", tag: "Interface Design & Wireframing" }
      ]
    }
  ] as SkillCategory[],

  education: {
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Science and Design",
    institution: "Dayananda Sagar Academy of Technology and Management (DSATM)",
    period: "2023 — Expected August 2027",
    graduationYear: "2027",
    location: "Bangalore, Karnataka, India",
    cgpa: "8.54",
    highlights: [],
    keyCoursework: [
      "Data Structures & Algorithms",
      "Design & Analysis of Algorithms",
      "Object-Oriented Programming (Java)",
      "Database Management Systems (SQL)",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering & Agile Methodologies",
      "Artificial Intelligence & Machine Learning",
      "Generative AI",
      "Agentic AI",
      "Big Data Analytics",
      "Human-Computer Interaction",
      "Cryptography & Network Security",
      "Computer Graphics & Visualization",
      "Web Technology",
      "Salesforce AI with Data Cloud",
      "Mobile Application Development"
    ],
    schooling: [
      {
        level: "PRE-UNIVERSITY (12TH)",
        year: "Passed 2023",
        score: "92.17%",
        title: "Pre-University Course (PUC), PCMB",
        subjects: "Physics, Chemistry, Mathematics, Biology",
        institution: "Christ Academy PU College, Bengaluru",
        board: "Karnataka State Board"
      },
      {
        level: "SECONDARY SCHOOL (10TH)",
        year: "Passed 2021",
        score: "91.33%",
        title: "Secondary School Examination",
        subjects: "Science, Social Studies, Mathematics, Computer Science",
        institution: "Surana Vidyalaya, Bengaluru",
        board: "CBSE"
      }
    ]
  } as EducationItem,

  achievements: [
    // 1. Hackathons & Recognitions (6 items, newest first)
    {
      title: "Data Science with GenAI & Agentic AI Workshop",
      organization: "Innomatics Research Labs",
      category: "hackathon",
      period: "Nov 2026",
      description: "5-day workshop on Generative AI and Agentic AI in data science.",
      badge: "Participation",
      footerLabel: "PARTICIPATION",
      credentialUrl: "https://drive.google.com/file/d/1JDX2q5aj6b8Q3urAaN12VXliTGkzxaXH/view?usp=sharing"
    },
    {
      title: "SBI Hackathon, Global Fintech Fest 2026 (FinPulse AI)",
      organization: "State Bank of India & GFF",
      category: "hackathon",
      period: "Sep 2026",
      description: "Shortlisted in the Idea Submission Phase for FinPulse AI, an agentic customer-engagement and fintech intelligence platform.",
      badge: "Shortlisted",
      footerLabel: "SHORTLISTED",
      credentialUrl: "https://drive.google.com/file/d/1P2BjY95Dp81bKjHvLc1j1zZ2mhawVCrX/view?usp=drive_link"
    },
    {
      title: "ET AI Hackathon 2.0",
      organization: "The Economic Times",
      category: "hackathon",
      period: "Aug 2026",
      description: "Engineered PlantMind, an AI industrial knowledge platform powered by RAG, LangGraph, FastAPI, and React.",
      badge: "Hackathon Builder",
      footerLabel: "HACKATHON BUILDER",
      credentialUrl: "https://drive.google.com/file/d/1ik1seRqzOLIOFrXHg3MW-MGZyt5ZZ4_T/view?usp=drive_link"
    },
    {
      title: "Salesforce Agentblazer Champion",
      organization: "Salesforce",
      category: "hackathon",
      period: "2025 & 2026",
      description: "Recognized champion in agentic AI capabilities and Salesforce developer ecosystem.",
      badge: "Champion",
      footerLabel: "CHAMPION",
      credentialUrl: "https://www.salesforce.com/trailblazer/ayabgem1on1rz58a4t"
    },
    {
      title: "Artificial Intelligence Fundamentals",
      organization: "IBM SkillsBuild",
      category: "hackathon",
      period: "Feb 2026",
      description: "Foundational AI concepts, machine learning basics, and responsible AI practices.",
      badge: "Certified",
      footerLabel: "CERTIFIED",
      credentialUrl: "https://drive.google.com/file/d/1TPnOmdLzheTpfUQ9XPzyQYlQ99Vq1-Uv/view?usp=sharing"
    },
    {
      title: "Generative AI Workshop & Hackathon",
      organization: "Smayan Foundation & DSATM",
      category: "hackathon",
      period: "Apr – May 2025",
      description: "Scored 99% in the hackathon evaluation of a 3-day Generative AI workshop and hackathon.",
      badge: "Top Score",
      footerLabel: "TOP SCORE",
      credentialUrl: "https://drive.google.com/file/d/1Tf2NJJJGEYDAHVMSLjYpw-wgpY3UqkgT/view?usp=sharing"
    },

    // 2. Certifications & Industry Credentials (3 items, newest first)
    {
      title: "Frontend Developer (React) Certificate",
      organization: "HackerRank",
      category: "certification",
      period: "May 2026",
      description: "Demonstrated verified proficiency in React component lifecycle, state management, and modern hooks.",
      badge: "Certified",
      footerLabel: "CERTIFIED",
      credentialUrl: "https://drive.google.com/file/d/18xJ3bHoli0MuHi6K9ZZpV3Ju1ihhw1w6/view?usp=drive_link"
    },
    {
      title: "Honeywell Future Skills Edge: AI",
      organization: "Honeywell & BharatCares",
      category: "certification",
      period: "Feb – Mar 2026",
      description: "Comprehensive 80-hour intensive program in Artificial Intelligence and Machine Learning applications.",
      badge: "Certified",
      footerLabel: "CERTIFIED",
      credentialUrl: "https://drive.google.com/file/d/1PyNAyfEWqgoVpuz4O6BKtTRyTVqky7uH/view?usp=drive_link"
    },
    {
      title: "Forage Virtual Experience Programs",
      organization: "JPMorgan Chase & Tata Group",
      category: "certification",
      period: "Jan 2026",
      description: "Completed Software Engineering simulation with JPMorgan Chase and GenAI Data Analytics with Tata Group.",
      badge: "Completed",
      footerLabel: "COMPLETED",
      credentialUrl: "https://drive.google.com/file/d/1pj4MXKsESxudvYYLsryROf3GcYXRB-rO/view?usp=drive_link",
      credentialLinks: [
        {
          title: "JPMorgan Chase — Software Engineering",
          url: "https://drive.google.com/file/d/1pj4MXKsESxudvYYLsryROf3GcYXRB-rO/view?usp=drive_link"
        },
        {
          title: "Tata Group — GenAI Data Analytics",
          url: "https://drive.google.com/file/d/1pZQnbzBxKUTCxVCzGuiwtYdf8UL4KQY2/view?usp=drive_link"
        }
      ]
    }
  ] as AchievementItem[]
};
