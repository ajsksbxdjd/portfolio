// Single source of truth for all editable site content.
// Update this file to change names, copy, projects, or links.
// No need to touch component code.

export const profile = {
  name: "Siew Wei En",
  role: "AI / ML Engineer",
  tagline:
    "AI engineer who ships end-to-end systems, from model training to production deployment.",
  location: "Kuala Lumpur, Malaysia",
  email: "weiensiew@gmail.com",
  github: "https://github.com/ajsksbxdjd",
  linkedin: "https://www.linkedin.com/in/weiensiew/",
  resumeUrl: "/resume.pdf",
};

export const about = {
  paragraphs: [
    "I'm a final-year Computer Science (AI) student at Universiti Malaya (CGPA 3.75), one semester from graduating. I care about the parts of AI that make a model actually usable, like data pipelines, evaluation, and deployment, not just the modeling. I've built these into my own projects and want to get properly good at them at production scale.",
    "I recently interned at Maxis as a Gen AI Business Automation Intern, working on applied generative AI in a production enterprise environment. That included a GenAI proof-of-concept I proposed and built end to end. Alongside that, I've spent the past year building full-stack AI products, including my AI final-year project: training and evaluating models, wiring up backends, and shipping usable interfaces around them.",
    "I'm most interested in applied AI, GenAI, and agentic systems: LLM-powered products that reason over real data and take useful actions. I'm a fast learner who'd rather ship a working v1 and iterate than get stuck planning, and I want to do that alongside people who build AI at real scale.",
  ],
  facts: [
    { label: "Education", value: "BCS (Artificial Intelligence), Universiti Malaya" },
    { label: "Current CGPA", value: "3.75 (one semester remaining)" },
    { label: "Experience", value: "Gen AI Business Automation Intern, Maxis" },
    { label: "Focus", value: "Applied AI · GenAI · Agentic Systems" },
  ],
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  links: { label: string; url: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Hookworm Ova Detection (FYP)",
    description:
      "End-to-end AI diagnostic tool that detects parasite eggs in microscopy images and computes infection intensity. Trained a YOLOv8 model to 98% mAP@0.5 and shipped a full-stack dashboard with async inference so results return without blocking the UI.",
    tech: ["Python", "YOLOv8", "FastAPI", "Next.js"],
    links: [{ label: "GitHub", url: "https://github.com/ajsksbxdjd/hookworm" }],
    featured: true,
  },
  {
    title: "Findamental",
    description:
      "Natural-language query tool for Bursa Malaysia financial filings. Answers questions with exact figures and annotated source-page crops, combining OCR, layout parsing, and fuzzy matching to trace every answer back to its origin in the filing.",
    tech: ["Python", "PyMuPDF", "Docling"],
    links: [{ label: "GitHub", url: "https://github.com/sayyidsyamil/findamental" }],
    featured: true,
  },
  {
    title: "BumpToBaby",
    description:
      "AI pregnancy companion app generating AI-curated diet, health, and family-planning plans, with medical document translation and a moderated community feed backed by a Google Maps clinic finder.",
    tech: ["Flutter", "Firebase", "Gemini", "Perspective API", "Google Maps"],
    links: [{ label: "GitHub", url: "https://github.com/ajsksbxdjd/BumpToBaby" }],
  },
  {
    title: "JobSwAIpe",
    description:
      "LLM-powered job-search app with intelligent candidate-role matching, Firebase authentication, and Firestore-backed listings for a fast, swipeable search experience.",
    tech: ["Flutter", "Firebase", "Alibaba Cloud Model Studio", "Qwen"],
    links: [{ label: "GitHub", url: "https://github.com/ajsksbxdjd/JobSwAIpe" }],
  },
  {
    title: "StudyLah",
    description:
      "Android marketplace for students to find tutors and trade textbooks. Built the full CRUD backend and database schema powering listings, bookings, and messaging.",
    tech: ["Java", "Android Studio", "MySQL"],
    links: [{ label: "GitHub", url: "https://github.com/ajsksbxdjd/StudyLah-Occ-1-Group-8" }],
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "Dart"],
  },
  {
    category: "Frameworks",
    items: ["Next.js", "React", "Node.js", "FastAPI", "Flutter"],
  },
  {
    category: "AI / ML",
    items: [
      "TensorFlow",
      "PyTorch",
      "Keras",
      "RAG",
      "Agentic AI",
      "LLM Integration",
      "Prompt Engineering",
    ],
  },
  {
    category: "Cloud",
    items: ["AWS Bedrock", "GCP Vertex AI"],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
