export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Full-Stack' | 'AI / MLOps' | 'Systems & APIs' | 'Featured';
  tags: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  featured: boolean;
  isPlaceholder?: boolean;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  categoryKey: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    tag?: string;
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
  isEditablePlaceholder?: boolean;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  graduationYear: string;
  location: string;
  gradeBadge?: string;
  coreSubjects: string[];
  highlights: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "DHUSHANTH SRINIVASA",
    tagline: "Software Engineer | Full-Stack Developer | AI/ML Enthusiast",
    shortBio: "Undergraduate Computer Science & Design engineer bridging robust backend architectures, distributed data pipelines, and responsive futuristic digital interfaces.",
    location: "Bengaluru, India",
    statusBadge: "Available for Software Engineering & Intern Roles",
    email: "dhushanth.work@example.com", // [EDITABLE PLACEHOLDER: Update with your primary email]
    github: "https://github.com",        // [EDITABLE PLACEHOLDER: Update with your GitHub profile]
    linkedin: "https://linkedin.com/in", // [EDITABLE PLACEHOLDER: Update with your LinkedIn profile]
    resumePath: "/Dhushanth_Srinivasa_Resume.pdf",
    stats: [
      { label: "Graduation", value: "2027" },
      { label: "Current Focus", value: "Full-Stack & MLOps" },
      { label: "Core Technologies", value: "25+" },
      { label: "Status", value: "Intern @ Krosum Labs" },
    ]
  },

  about: {
    heading: "Bridging Architectural Rigor with Intelligent Interfaces",
    paragraphs: [
      "I am a Computer Science and Design undergraduate at Dayananda Sagar Academy of Technology and Management (DSATM), passionate about crafting high-performance, real-world software solutions from concept to deployment.",
      "Currently interning as a Data Science & MLOps Intern at Krosum Labs, I work on production-minded pipelines, machine learning model lifecycles, and backend integrations. My core passion lies at the intersection of full-stack engineering, scalable microservices, and AI-driven automation.",
      "Whether developing high-throughput REST APIs, orchestrating containerized data workflows, or designing reactive interfaces, I focus on building reliable software with clean code and exceptional user experience."
    ],
    pillars: [
      {
        title: "Full-Stack Engineering",
        desc: "Designing resilient backend services with modern frontend architectures that scale seamlessly.",
        icon: "Layers"
      },
      {
        title: "AI / ML & MLOps",
        desc: "Transforming trained models and LLMs into production-grade pipelines with monitoring and automation.",
        icon: "Cpu"
      },
      {
        title: "Design Systems & UX",
        desc: "Translating complex data streams into intuitive, modern, accessible interactive experiences.",
        icon: "Palette"
      },
      {
        title: "Systems & Data Pipelines",
        desc: "Working with relational and NoSQL databases, caching layers, and scheduled batch/streaming workflows.",
        icon: "Database"
      }
    ]
  },

  experience: [
    {
      role: "Data Science & MLOps Intern",
      company: "Krosum Labs",
      location: "Bengaluru, India",
      type: "Internship",
      period: "Present",
      status: "Current",
      summary: "Working on enterprise data science pipelines, model operationalization, and scalable backend workflows.",
      responsibilities: [
        "Developing and testing end-to-end data processing workflows and feature extraction pipelines.",
        "Collaborating on MLOps best practices: model tracking, containerization, and API serving.",
        "Engineering RESTful service endpoints to interface machine learning models with client applications.",
        "Conducting experiments with NLP and structured datasets using modern Python scientific and data engineering tooling."
      ],
      technologies: ["Python", "FastAPI", "Docker", "Pandas", "NumPy", "MLOps", "Git"],
      isEditablePlaceholder: true // [EDITABLE PLACEHOLDER: Update with your exact tasks and accomplishments]
    }
  ] as ExperienceItem[],

  education: {
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Science and Design",
    institution: "Dayananda Sagar Academy of Technology and Management (DSATM)",
    period: "2023 — 2027",
    graduationYear: "2027",
    location: "Bengaluru, Karnataka, India",
    gradeBadge: "Class of 2027",
    coreSubjects: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java/C++)",
      "Database Management Systems (SQL)",
      "Computer Networks",
      "Operating Systems & Architecture",
      "Software Engineering & Design Patterns",
      "Artificial Intelligence & Machine Learning",
      "Human-Computer Interaction & UI/UX Design"
    ],
    highlights: [
      "Specialized curriculum fusing deep computer science fundamentals with modern interactive design principles.",
      "Hands-on laboratory work in algorithm design, scalable databases, and full-stack system implementations."
    ]
  } as EducationItem,

  skills: [
    {
      title: "Programming Languages",
      categoryKey: "languages",
      description: "Core languages used for systems, scripting, and application engineering.",
      iconName: "Code2",
      skills: [
        { name: "Java", tag: "OOP & Systems" },
        { name: "Python", tag: "AI/ML & APIs" },
        { name: "JavaScript", tag: "ESNext / Modern" },
        { name: "TypeScript", tag: "Type-Safe Fullstack" },
        { name: "C", tag: "Systems Programming" },
        { name: "SQL", tag: "Relational Queries" }
      ]
    },
    {
      title: "Frontend Engineering",
      categoryKey: "frontend",
      description: "Modern web and mobile UI frameworks delivering reactive, responsive experiences.",
      iconName: "Layout",
      skills: [
        { name: "React", tag: "SPA & Architecture" },
        { name: "Next.js", tag: "SSR & Full-Stack" },
        { name: "React Native", tag: "Cross-Platform Mobile" },
        { name: "Tailwind CSS", tag: "Utility Design" },
        { name: "HTML5 / CSS3", tag: "Semantic Web" }
      ]
    },
    {
      title: "Backend Frameworks",
      categoryKey: "backend",
      description: "High-performance server runtimes, microservices, and API architectures.",
      iconName: "Server",
      skills: [
        { name: "Node.js", tag: "Runtime Environment" },
        { name: "Express.js", tag: "RESTful Services" },
        { name: "FastAPI", tag: "Async Python APIs" },
        { name: "Flask", tag: "Microservices" },
        { name: "Spring Boot", tag: "Enterprise Backend" }
      ]
    },
    {
      title: "Databases & Caching",
      categoryKey: "databases",
      description: "Relational, document-based, and in-memory data persistence solutions.",
      iconName: "Database",
      skills: [
        { name: "PostgreSQL", tag: "Relational Database" },
        { name: "MySQL", tag: "Relational Database" },
        { name: "MongoDB", tag: "NoSQL Documents" },
        { name: "Supabase", tag: "BaaS & Postgres" },
        { name: "Redis", tag: "In-Memory Cache" }
      ]
    },
    {
      title: "AI / ML & Data Engineering",
      categoryKey: "aiml",
      description: "Machine learning libraries, natural language processing, LLM APIs, and data pipelines.",
      iconName: "BrainCircuit",
      skills: [
        { name: "OpenAI API", tag: "LLMs & Embeddings" },
        { name: "Gemini API", tag: "Multimodal Models" },
        { name: "spaCy", tag: "NLP Processing" },
        { name: "Sentence Transformers", tag: "Vector Embeddings" },
        { name: "Pandas", tag: "Data Analysis" },
        { name: "NumPy", tag: "Numerical Computing" },
        { name: "Matplotlib", tag: "Data Visualization" },
        { name: "PySpark", tag: "Big Data Processing" },
        { name: "Apache Airflow", tag: "Workflow Orchestration" }
      ]
    },
    {
      title: "DevOps & Developer Tools",
      categoryKey: "tools",
      description: "Containerization, telemetry, version control, and API testing tools.",
      iconName: "Terminal",
      skills: [
        { name: "Git & GitHub", tag: "Version Control" },
        { name: "Docker", tag: "Containerization" },
        { name: "Postman", tag: "API Verification" },
        { name: "Grafana", tag: "Monitoring & Metrics" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "project-1",
      title: "Enterprise MLOps Model Pipeline & Serving Engine",
      subtitle: "Automated Data Ingestion, Model Validation & Fast Inference",
      description: "A production-grade pipeline architecture engineered for automated data pre-processing, continuous model validation, containerized deployment, and telemetry tracking.",
      category: "AI / MLOps",
      tags: ["Python", "FastAPI", "Docker", "Apache Airflow", "Grafana", "Redis"],
      githubUrl: "https://github.com", // [EDITABLE PLACEHOLDER: Insert your repository URL]
      liveDemoUrl: "https://github.com", // [EDITABLE PLACEHOLDER: Insert demo URL if live]
      featured: true,
      isPlaceholder: true,
      highlights: [
        "Orchestrated asynchronous DAG schedules with Apache Airflow for continuous data transformations.",
        "Built lightweight FastAPI inference microservices encapsulated in Docker containers.",
        "Configured Grafana monitoring dashboards for latency, request counts, and drift telemetry."
      ]
    },
    {
      id: "project-2",
      title: "Full-Stack Intelligent Workspace & Analytics Hub",
      subtitle: "High-Concurrency Cloud Dashboard with Real-Time Data Sync",
      description: "A modern full-stack web application featuring reactive telemetry charts, role-based authentication, persistent PostgreSQL storage, and real-time event streaming.",
      category: "Full-Stack",
      tags: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
      githubUrl: "https://github.com", // [EDITABLE PLACEHOLDER: Insert your repository URL]
      liveDemoUrl: "https://github.com", // [EDITABLE PLACEHOLDER: Insert demo URL if live]
      featured: true,
      isPlaceholder: true,
      highlights: [
        "Designed responsive interface with modular TypeScript components and Tailwind CSS styling.",
        "Engineered RESTful endpoints with Express and structured relational schemas on PostgreSQL.",
        "Implemented Redis caching layer reducing frequent query latency by over 60%."
      ]
    },
    {
      id: "project-3",
      title: "Semantic Vector Search & Document Intelligence Engine",
      subtitle: "RAG Pipeline with Embedding Transformers & LLM Reasoning",
      description: "An AI-powered knowledge retrieval system utilizing dense vector embeddings and semantic sentence transformers to extract context-rich answers across document repositories.",
      category: "AI / MLOps",
      tags: ["Python", "Sentence Transformers", "spaCy", "OpenAI / Gemini", "Supabase", "Pandas"],
      githubUrl: "https://github.com", // [EDITABLE PLACEHOLDER: Insert your repository URL]
      liveDemoUrl: "https://github.com", // [EDITABLE PLACEHOLDER: Insert demo URL if live]
      featured: true,
      isPlaceholder: true,
      highlights: [
        "Engineered text chunking and metadata extraction using spaCy and modern embedding models.",
        "Leveraged Supabase pgvector for sub-millisecond similarity search queries.",
        "Integrated contextual prompt chains with LLM APIs for precise, factual summaries."
      ]
    },
    {
      id: "project-4",
      title: "Distributed Task Queue & Background Worker Framework",
      subtitle: "High-Throughput Job Execution Engine with Retry Semantics",
      description: "A resilient backend service architecture designed to process long-running jobs, distributed notifications, and scheduled micro-tasks with zero downtime.",
      category: "Systems & APIs",
      tags: ["Java", "Spring Boot", "MySQL", "Redis", "Docker"],
      githubUrl: "https://github.com", // [EDITABLE PLACEHOLDER: Insert your repository URL]
      featured: false,
      isPlaceholder: true,
      highlights: [
        "Implemented reliable worker pools with transactional dead-letter queue recovery.",
        "Built administrative health-check endpoints and performance profiling instrumentation."
      ]
    }
  ] as ProjectItem[]
};
