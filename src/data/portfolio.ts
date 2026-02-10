export type Social = { label: string; href: string; note?: string };
export type CTA = { label: string; href: string; note?: string };

export type ExperienceItem = {
  title: string;
  org: string;
  period: string;
  bullets: string[];
  tags?: string[];
};

export type ProjectItem = {
  title: string;
  desc: string;
  link: string; // use "#" for private
  year?: string;
  stack?: string[];
  tags?: string[];
  extraLinks?: { label: string; href: string }[];
  note?: string;
};

export type AchievementItem = {
  title: string;
  issuer: string;
  year: string;
  link?: string;
  note?: string;
};

export const portfolio = {
  meta: {
    title: "Labib Hakam Fauzi — Portfolio",
    description:
      "Creative-professional portfolio of Labib Hakam Fauzi: AI/ML, data analytics, automation, projects, and achievements.",
  },

  profile: {
    name: "Labib Hakam Fauzi",
    location: "Depok, Jawa Barat, Indonesia",
    phone: "+62 878-3154-8658",
    email: "labibhakam.fauzi@gmail.com",
    linkedin: "https://www.linkedin.com/in/labib-hakam-fauzi/",
    headline: "Informatics Fresh Graduate — AI/ML • Data Analytics • Business Analysist",
    summary:
      "Informatics fresh graduate from Telkom University with experience in AI/ML, data analytics, and automation, bridging business use case analysis with structured solution design. Completed ISO 27001-based Information System Audit bootcamp (Cisometric) and delivered hands-on ML projects (NLP, CV, clustering, data pipelines) using Python, TensorFlow, and Git, with internship exposure at PT Infomedia Nusantara producing stakeholder-ready AI use case recommendations.",
    photo: "/images/profile-placeholder.svg",
    socials: [
      { label: "Email", href: "mailto:labibhakam.fauzi@gmail.com" },
      { label: "WhatsApp", href: "https://wa.me/6287831548658" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/labib-hakam-fauzi/" },
      { label: "Certificates", href: "https://tinyurl.com/ykmfxdkm" }
    ] as Social[],
    ctas: {
      primary: { label: "Lihat Project", href: "#projects" } as CTA,
      secondary: { label: "Download CV", href: "/CV_Labib-Hakam-Fauzi.pdf", note: "Replace with your CV file in /public" } as CTA,
    },
    stack: ["Python", "TensorFlow", "Git", "Data pipeline", "Machine learning", "NLP", "Computer Vision"],
    highlights: [
      { label: "Focus", value: "AI/ML + Analytics, Business Analysis, and Information System Audit (ISO 27001)" },
      { label: "Tools", value: "Python • TensorFlow • Git " },
      { label: "Based in", value: "Depok, ID" }
    ],
  },

  education: [
    {
      school: "Telkom University",
      degree: "Bachelor of Informatics",
      period: "Sep 2022 – Jan 2026",
      detail: "GPA 3.82/4.00",
      logo: "/images/telkom-university-logo.svg"
    }
  ],

  workExperience: [
    // {
    //   title: "Awardee",
    //   org: "BSI Scholarship Talenta 2025",
    //   period: "Nov 2025 – Present",
    //   bullets: [
    //     "Selected as a scholarship awardee and completed structured career preparation training for the BSI ODP program selection.",
    //     "Completed soft-skill modules and final scholarship assignments, demonstrating discipline and professional readiness through consistent deliverable completion."
    //   ],
    //   tags: ["Scholarship", "Career Prep", "Soft Skills"]
    // },
    {
      title: "Intern — CoE (Business), Div3A (AI, Automation, and Analytics)",
      org: "PT Infomedia Nusantara",
      period: "Jul 2025 – Dec 2025",
      bullets: [
        "Analyzed end-to-end AI use cases to support internal solution planning within the CoE Business team.",
        "Designed structured solution concepts for AI, automation, and analytics use cases, contributing to stakeholder-ready recommendations for 3–5 initiatives."
      ],
      tags: ["AI Use Case", "Automation", "Analytics", "Solution Design"]
    }
  ] as ExperienceItem[],

  orgAndCampusExperience: [
    {
      title: "Coding Camp 2025 Participant (Machine Learning Engineer Path)",
      org: "Cohort Coding Camp by DBS Foundation 2025",
      period: "Feb 2025 – Jul 2025",
      bullets: [
        "Completed intensive training in supervised/unsupervised ML, NLP, Computer Vision, and Recommendation Systems through hands-on exercises.",
        "Built applied projects in Python (clustering/classification, sentiment analysis, image classification, data pipeline automation)."
      ],
      tags: ["ML", "NLP", "Computer Vision", "Python"]
    },
    {
      title: "Participant",
      org: "Information System Audit Bootcamp by Cisometric",
      period: "Feb 2025 – Jul 2025",
      bullets: [
        "Learned Information System Auditing (IS Audit) based on ISO 27001 with Cisometric.",
        "Hands-on practice with case studies and final assignments related to ISO 27001-based audits."
      ],
      tags: ["ISO 27001", "IS Audit"]
    },
    {
      title: "Lab Internship",
      org: "Informatics Lab — Telkom University",
      period: "Sep 2024 – Jul 2025",
      bullets: [
        "Assisted lab assistants in preparing practical sessions (materials, readiness checks, coordination), ensuring sessions were fully set up before class.",
        "Ensured practicum sessions ran smoothly by handling on-site operational support and first-line troubleshooting during execution."
      ],
      tags: ["Operations", "Coordination", "Troubleshooting"]
    },
    {
      title: "Practicum Assistant (Alpro 1, Alpro 2, and OOP)",
      org: "Informatics Lab — Telkom University",
      period: "Sep 2024 – Jul 2025",
      bullets: [
        "Supported students during weekly lab sessions by troubleshooting programming issues and guiding completion of practical assignments across 3 classes.",
        "Assessed preliminary assignments and weekly journals using course rubrics, providing structured feedback to improve progress and submission quality."
      ],
      tags: ["Teaching", "OOP", "Algorithms"]
    },
    {
      title: "Head of Open Competition",
      org: "INTERFEST — HIMA IF Telkom University",
      period: "Jul 2024 – Dec 2024",
      bullets: [
        "Coordinated with Computing Lab and Foresty Lab stakeholders to plan and deliver competitive programming and Capture The Flag (CTF) competitions.",
        "Owned end-to-end execution (planning, operations, issue resolution), contributing to the overall success of the event for 100+ teams."
      ],
      tags: ["Event Ops", "CTF", "Competitive Programming"]
    },
    {
      title: "Teaching Assistant — Programming Algorithms",
      org: "Telkom University",
      period: "Jan 2024 – Jul 2024",
      bullets: [
        "Supervised programming-algorithms exams for 20 students per class.",
        "Conducted 2 response/remedial sessions for a 38-student cohort using worked examples and Q&A."
      ],
      tags: ["Teaching", "Algorithms"]
    },
    {
      title: "Training Participant & Public Relations Chair",
      org: "Microsoft U-Crew — Telkom University",
      period: "Nov 2023 – Dec 2023",
      bullets: [
        "Learned Microsoft services available under Telkom University’s license.",
        "Led promotion and execution for a student webinar, coordinating communication and event flow to deliver the session to 100+ attendees."
      ],
      tags: ["PR", "Event", "Microsoft"]
    },
    {
      title: "Organization Roles",
      org: "Himpunan Mahasiswa Informatika (HIMA IF Telkom University)",
      period: "Various",
      bullets: [
        "Junior Staff (RDK): maintained and updated the organization website using WordPress, ensuring content accuracy and timely updates.",
        "Expert Staff (ARK): designed and executed division work programs, coordinating stakeholders and timelines to deliver planned initiatives.",
        "Person-in-charge for Open Competition program: managed end-to-end planning and execution for IT competitions (competitive programming, CTF, Web Design) with 100+ teams and 3 partners."
      ],
      tags: ["WordPress", "Leadership", "Program Management"]
    }
  ] as ExperienceItem[],

  skills: [
    {
      group: "Core",
      items: ["Problem solving", "Analytical skills", "Business & use case analysis", "Research & solution development", "Information system audit"]
    },
    {
      group: "Data & ML",
      items: ["Data analysis & visualization", "Machine learning", "TensorFlow", "Data pipeline", "NLP", "Computer Vision"]
    },
    {
      group: "Tools",
      items: ["Python", "Git", "TensorFlow", "Jupyter Notebook", "Google Colab", "Streamlit", "ISO 27001"]
    }
  ],

  projects: [
    {
      title: "Final Project — IS Audit Class Batch 2",
      desc: "Cisometric (Information System Audit) final project based on ISO 27001.",
      link: "https://tinyurl.com/4uj6zayw",
      year: "2025",
      stack: ["ISO 27001", "IS Audit"],
      tags: ["Audit", "Security"],
      thumbnail: "/images/cisometric.svg"
    },
    {
      title: "Data Analyst Project — Coding Camp 2025",
      desc: "Coding Camp project with Streamlit deployment.",
      link: "https://tinyurl.com/5n95kskk",
      year: "2025",
      stack: ["Python", "Data Analysis"],
      tags: ["Dashboard"],
      extraLinks: [{ label: "Streamlit", href: "https://dataanalyst-coding-camp.streamlit.app/" }],
      thumbnail: "/images/dbs.svg"
    },
    {
      title: "Clustering & Classification Project - Coding Camp 2025",
      desc: "Applied ML project focusing on clustering and classification.",
      link: "https://tinyurl.com/5csxfr6p",
      year: "2025",
      stack: ["Python", "Machine Learning"],
      tags: ["Clustering", "Classification"],
      thumbnail: "/images/dbs.svg"
    },
    {
      title: "Sentiment Analysis Project - Coding Camp 2025",
      desc: "NLP project for sentiment analysis.",
      link: "https://tinyurl.com/5h2sjhdx",
      year: "2025",
      stack: ["Python", "NLP"],
      tags: ["Sentiment"],
      thumbnail: "/images/dbs.svg"
    },
    {
      title: "Image Classification Project - Coding Camp 2025",
      desc: "Computer vision project for image classification.",
      link: "https://tinyurl.com/yc2dpmua",
      year: "2025",
      stack: ["Python", "TensorFlow", "Computer Vision"],
      tags: ["CV"],
      thumbnail: "/images/dbs.svg"
    },
    {
      title: "Data Pipeline - Coding Camp 2025",
      desc: "Data pipeline automation project.",
      link: "https://tinyurl.com/2k2w5zex",
      year: "2025",
      stack: ["Python", "Data Pipeline"],
      tags: ["Automation"],
      thumbnail: "/images/dbs.svg"
    },
    {
      title: "Infomedia Nusantara — AI Use Case Work (Private)",
      desc: "AI maturity assessment, AI innovation (Agentic QC AI), and end-to-end framework for AI use case solutioning. Includes involvement in use cases: SSI, Telkom Metra, GCT Telkom, etc.",
      link: "#",
      year: "2025",
      stack: ["AI", "Automation", "Analytics"],
      tags: ["Enterprise", "Private"],
      note: "No public link available",
      thumbnail: "/images/infomedia.svg"
    }
  ] as ProjectItem[],

  achievements: [
    {
      title: "GPA 3.82/4.00 — Bachelor of Informatics",
      issuer: "Telkom University",
      year: "2026",
      link: "#",
      note: ""
    },
    {
      title: "BSI Scholarship Talenta 2025 Awardee",
      issuer: "BSI Scholarship Talenta 2025",
      year: "2025–Present",
      link: "#",
      note: "Selected as a scholarship awardee for BSI ODP program preparation."
    }
  ] as AchievementItem[]
};
