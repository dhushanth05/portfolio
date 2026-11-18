export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'AI / GenAI' | 'Full-Stack' | 'BioAI & Multi-Agent';
  tags: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  featured: boolean;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  categoryKey: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
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
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  graduationYear: string;
  location: string;
  cgpa: string;
  priorEducation: {
    title: string;
    board: string;
    score: string;
  }[];
  coreSubjects: string[];
  highlights: string[];
}

export interface AchievementItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  badge?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "DHUSHANTH SRINIVASA",
    tagline: "AI/ML Engineer | Full-Stack Developer | Data Science Intern",
    shortBio: "Aspiring AI/ML Engineer with a strong foundation in Python, Java, SQL, Data Structures and Algorithms, and Full-Stack Development. Experienced in building LLM-powered applications, RAG-based industrial knowledge systems, and multi-agent AI frameworks.",
    location: "Bangalore, Karnataka, India",
    phone: "+91 9964185141",
    email: "sdhushanth123@gmail.com",
    github: "https://github.com/dhushanth05",
    linkedin: "https://linkedin.com/in/dhushanth-srinivasa",
    resumePath: "/Dhushanth_Srinivasa_Resume.pdf",
    profileImage: "/profile.jpg",
    statusBadge: "Active Data Science & MLOps Intern @ Krosum Labs",
    stats: [
      { label: "Graduation", value: "2027" },
      { label: "Current CGPA", value: "8.54" },
      { label: "Core Focus", value: "AI/ML & MLOps" },
      { label: "Location", value: "Bengaluru, IN" },
    ]
  },

  about: {
    heading: "Developing Scalable, Reliable & Intelligent AI Systems",
    paragraphs: [
      "I am an aspiring AI/ML Engineer and undergraduate in Computer Science and Design at Dayananda Sagar Academy of Technology and Management (DSATM), Bangalore, graduating in 2027 with a strong academic foundation (CGPA: 8.54).",
      "Currently interning at Krosum Labs as a Data Science & MLOps Intern, I build and evaluate supervised machine learning models on banking datasets using scikit-learn, engineer feature extraction workflows, and work with distributed data pipelines via PySpark, Apache Spark, Airflow, and Grafana.",
      "Beyond production models, I have engineered end-to-end intelligent systems: from an 8-stage RAG industrial knowledge platform (PlantMind) that won accolades at ET AI Hackathon 2.0, to CYNTHERA, a multi-agent biomedical evidence graph framework for drug repurposing with a 90.7% precision benchmark."
    ],
    pillars: [
      {
        title: "AI / ML & GenAI",
        desc: "RAG architectures, LangGraph multi-agent systems, sentence transformers, and LLM integrations (OpenAI & Gemini).",
        icon: "Cpu"
      },
      {
        title: "Full-Stack Development",
        desc: "Containerized full-stack services using FastAPI, Next.js, React, Node.js, and JWT-authenticated REST APIs.",
        icon: "Layers"
      },
      {
        title: "Data Science & MLOps",
        desc: "Distributed processing with PySpark, Spark streaming, Apache Airflow workflow scheduling, and Grafana telemetry.",
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
      summary: "Undergoing rigorous industry training and working on production banking datasets, predictive modeling, and data pipelines.",
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
        "Developed a React & TypeScript workspace with interactive knowledge-graph explorer and 5 analytics dashboards backed by 15+ FastAPI endpoints and a 5-service Docker Compose stack."
      ]
    },
    {
      id: "cynthera",
      title: "CYNTHERA",
      subtitle: "Evidence-Traceable Multi-Agent AI Framework for Drug Repurposing",
      description: "A collaborative multi-agent AI framework for drug repurposing that turns a drug–disease hypothesis into a SUPPORT / OPPOSE / UNCERTAIN assessment using 8+ open biomedical databases.",
      category: "BioAI & Multi-Agent",
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
      id: "resumepilot",
      title: "ResumePilot AI",
      subtitle: "Full-Stack AI Resume Analyzer & Match Scoring Platform",
      description: "A production-grade full-stack AI platform that performs deep semantic matching between resumes and job descriptions with skill extraction and token-efficient caching.",
      category: "Full-Stack",
      tags: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "Docker", "OpenAI", "Sentence Transformers", "spaCy"],
      githubUrl: "https://github.com/dhushanth05/ResumePilot",
      featured: true,
      highlights: [
        "Architected full-stack solution with JWT-authenticated REST APIs, Next.js frontend, and a FastAPI backend containerized with Docker.",
        "Implemented resume-to-job-description semantic matching using OpenAI, Sentence Transformers, and spaCy for skill extraction and scoring.",
        "Added Redis caching of resume-analysis and embedding results to eliminate redundant OpenAI API calls, significantly reducing latency and API expenditure."
      ]
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
        { name: "PySpark", tag: "Distributed Python" },
        { name: "Apache Spark", tag: "Streaming & Pipelines" },
        { name: "Apache Airflow", tag: "DAG Orchestration" }
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
      title: "Backend & APIs",
      categoryKey: "backend",
      description: "Asynchronous microservices, secure authentication, and RESTful APIs.",
      iconName: "Server",
      skills: [
        { name: "FastAPI", tag: "High-Performance Async" },
        { name: "REST APIs", tag: "Clean Endpoint Architecture" },
        { name: "JWT Auth", tag: "Stateless Security" },
        { name: "Node.js", tag: "Backend Runtime" }
      ]
    },
    {
      title: "Web & Frontend",
      categoryKey: "frontend",
      description: "Interactive reactive user interfaces, data visualization dashboards, and mobile UI.",
      iconName: "Layout",
      skills: [
        { name: "React.js", tag: "Component Architecture" },
        { name: "Next.js", tag: "App Router & SSR" },
        { name: "Streamlit", tag: "Rapid AI Prototyping" },
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
        { name: "Grafana", tag: "Telemetry & Dashboards" },
        { name: "pytest", tag: "Automated Unit Tests" }
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
    priorEducation: [
      {
        title: "Pre-University Course (PUC - PCMB)",
        board: "Karnataka State Board",
        score: "92.17%"
      },
      {
        title: "Secondary School Examination (10th)",
        board: "CBSE Board",
        score: "91.33%"
      }
    ],
    coreSubjects: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java / Python)",
      "Database Management Systems (SQL)",
      "Operating Systems & Computer Networks",
      "Artificial Intelligence & Machine Learning",
      "Human-Computer Interaction & Design Systems",
      "Software Engineering & Architecture",
      "Graph Theory & Computational Logic"
    ],
    highlights: [
      "Current Cumulative Grade Point Average (CGPA): 8.54 / 10.",
      "Hands-on project work in LLM architectures, Graph Neural Networks, and containerized microservices.",
      "Consistently demonstrated academic excellence with 92.17% in PUC and 91.33% in 10th CBSE."
    ]
  } as EducationItem,

  achievements: [
    {
      title: "SBI Hackathon, Global Fintech Fest 2026",
      organization: "State Bank of India & GFF",
      period: "Sep 2026",
      description: "Shortlisted in the Idea Submission Phase for innovating AI-driven fintech solutions.",
      badge: "Shortlisted"
    },
    {
      title: "ET AI Hackathon 2.0",
      organization: "The Economic Times",
      period: "Aug 2026",
      description: "Engineered PlantMind, an AI industrial knowledge platform powered by RAG, LangGraph, FastAPI, and React.",
      badge: "Hackathon Builder"
    },
    {
      title: "Honeywell Future Skills Edge: AI (80 hrs)",
      organization: "Honeywell & BharatCares",
      period: "Feb – Mar 2026",
      description: "Comprehensive 80-hour intensive program in Artificial Intelligence and Machine Learning applications.",
      badge: "Certified"
    },
    {
      title: "Frontend Developer (React) Certificate",
      organization: "HackerRank",
      period: "May 2026",
      description: "Demonstrated verified proficiency in React component lifecycle, state management, and modern hooks.",
      badge: "Certified"
    },
    {
      title: "Forage Virtual Experience Programs",
      organization: "JPMorgan Chase & Tata Group",
      period: "Jan 2026",
      description: "Completed Software Engineering simulation with JPMorgan Chase and GenAI Data Analytics with Tata Group.",
      badge: "Completed"
    },
    {
      title: "Salesforce Agentblazer Champion",
      organization: "Salesforce",
      period: "2025 & 2026",
      description: "Recognized champion in agentic AI capabilities and Salesforce developer ecosystem.",
      badge: "Champion"
    }
  ] as AchievementItem[]
};
