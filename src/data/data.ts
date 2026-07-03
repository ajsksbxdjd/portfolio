// Single source of truth for all editable site content.
// Update this file to change names, copy, projects, or links —
// no need to touch component code.

export const profile = {
  name: "Siew Wei En",
  role: "AI / ML Engineer",
  tagline:
    "AI engineer who ships end-to-end systems — from model training to production deployment.",
  location: "Kuala Lumpur, Malaysia",
  email: "weiensiew@gmail.com",
  github: "https://github.com/YOUR_GITHUB_USERNAME",
  linkedin: "https://linkedin.com/in/YOUR_LINKEDIN_HANDLE",
  resumeUrl: "/resume.pdf",
};

export const about = {
  paragraphs: [
    "I'm a final-year Bachelor of Computer Science (Artificial Intelligence) student at Universiti Malaya, graduating with a CGPA of 3.75. I care about the unglamorous parts of AI as much as the modeling — data pipelines, evaluation, latency, and the deployment surface that turns a notebook result into something people can actually use.",
    "Most recently I interned as a GenAI Engineer at Maxis, working on applied generative AI use cases in a production environment. Outside of that, I've spent the past year building full-stack AI products end to end: training and evaluating models, wiring up backends, and shipping usable interfaces around them.",
    "I'm most interested in applied AI, GenAI, and agentic systems — LLM-powered products that reason over real data and take useful actions. I learn fast, and I'd rather ship a working v1 and iterate than stay stuck in planning.",
  ],
  facts: [
    { label: "Education", value: "BCS (Artificial Intelligence), Universiti Malaya" },
    { label: "CGPA", value: "3.75" },
    { label: "Experience", value: "GenAI Engineer Intern, Maxis" },
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
    links: [{ label: "GitHub", url: "https://github.com/YOUR_GITHUB_USERNAME" }],
    featured: true,
  },
  {
    title: "Findamental",
    description:
      "Natural-language query tool for Bursa Malaysia financial filings. Answers questions with exact figures and annotated source-page crops, combining OCR, layout parsing, and fuzzy matching to trace every answer back to its origin in the filing.",
    tech: ["Python", "PyMuPDF", "Docling"],
    links: [{ label: "GitHub", url: "https://github.com/YOUR_GITHUB_USERNAME" }],
    featured: true,
  },
  {
    title: "BumpToBaby",
    description:
      "AI pregnancy companion app generating AI-curated diet, health, and family-planning plans, with medical document translation and a moderated community feed backed by a Google Maps clinic finder.",
    tech: ["Flutter", "Firebase", "Gemini", "Perspective API", "Google Maps"],
    links: [{ label: "GitHub", url: "https://github.com/YOUR_GITHUB_USERNAME" }],
  },
  {
    title: "JobSwAIpe",
    description:
      "LLM-powered job-search app with intelligent candidate-role matching, Firebase authentication, and Firestore-backed listings for a fast, swipeable search experience.",
    tech: ["Flutter", "Firebase", "Alibaba Cloud Model Studio", "Qwen"],
    links: [{ label: "GitHub", url: "https://github.com/YOUR_GITHUB_USERNAME" }],
  },
  {
    title: "StudyLah",
    description:
      "Android marketplace for students to find tutors and trade textbooks. Built the full CRUD backend and database schema powering listings, bookings, and messaging.",
    tech: ["Android", "SQL", "CRUD Backend"],
    links: [{ label: "GitHub", url: "https://github.com/YOUR_GITHUB_USERNAME" }],
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
