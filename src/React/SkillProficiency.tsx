import React, { useState } from "react";

interface ToolItem {
  name: string;
  category: "ai" | "data" | "cloud" | "dev";
  categoryLabel: string;
  description: string;
  appliedIn: string;
  badge: string;
}

const toolsData: ToolItem[] = [
  // Generative AI & Machine Learning
  {
    name: "Google Gemini API",
    category: "ai",
    categoryLabel: "AI & ML",
    description: "Generative AI API integration, prompt engineering, and automated reasoning workflows.",
    appliedIn: "AI Leave Management & Backup Audit Systems",
    badge: "Generative AI",
  },
  {
    name: "Predictive Machine Learning",
    category: "ai",
    categoryLabel: "AI & ML",
    description: "Training and evaluating predictive classification models on real-world datasets.",
    appliedIn: "Crop Disease Prediction at Eagle Hitech",
    badge: "Machine Learning",
  },
  {
    name: "Data Preprocessing & Evaluation",
    category: "ai",
    categoryLabel: "AI & ML",
    description: "Feature extraction, dataset balancing, model evaluation metrics, and validation pipelines.",
    appliedIn: "Internship ML Workflows & AI Studio",
    badge: "ML Operations",
  },

  // Programming & Databases
  {
    name: "Python",
    category: "data",
    categoryLabel: "Data & Code",
    description: "Primary language for machine learning, data wrangling, automation scripts, and backend logic.",
    appliedIn: "Core language across all AI and cloud projects",
    badge: "Programming",
  },
  {
    name: "SQL",
    category: "data",
    categoryLabel: "Data & Code",
    description: "Complex relational queries, aggregations, schema design, and query optimization.",
    appliedIn: "SIHMS Hospital System & Database Architecture",
    badge: "Database Querying",
  },
  {
    name: "PostgreSQL",
    category: "data",
    categoryLabel: "Data & Code",
    description: "Relational multi-department database design, foreign keys, and referential data integrity.",
    appliedIn: "SIHMS Multi-Department Hospital Records",
    badge: "Relational DB",
  },
  {
    name: "SQLite & SHA-256 Checksums",
    category: "data",
    categoryLabel: "Data & Code",
    description: "PRAGMA integrity checks, row-count validation, and cryptographic hash verification.",
    appliedIn: "Backup Verification Simulator (IM_INFI)",
    badge: "Data Integrity",
  },

  // Cloud & Enterprise Platforms
  {
    name: "AWS Cloud (EC2 & S3)",
    category: "cloud",
    categoryLabel: "Cloud & Enterprise",
    description: "Cloud compute instances (Amazon EC2), object storage buckets (Amazon S3), and cloud foundations.",
    appliedIn: "Elewayte Cloud Internship & AWS Certification",
    badge: "Cloud Computing",
  },
  {
    name: "SAP Analytics Cloud",
    category: "cloud",
    categoryLabel: "Cloud & Enterprise",
    description: "Enterprise analytics, business intelligence dashboards, and certified data reporting models.",
    appliedIn: "Certified Business Analytics Modeling",
    badge: "Business Analytics",
  },
  {
    name: "SAP BTP",
    category: "cloud",
    categoryLabel: "Cloud & Enterprise",
    description: "Business Technology Platform fundamentals and enterprise cloud architecture.",
    appliedIn: "AWS with SAP Generative AI Fundamentals",
    badge: "Enterprise Platform",
  },
  {
    name: "Power BI",
    category: "cloud",
    categoryLabel: "Cloud & Enterprise",
    description: "Interactive dashboard visualization, data transformations, and business reporting.",
    appliedIn: "PwC Power BI Job Simulation & Data Analytics",
    badge: "Data Visualization",
  },
  {
    name: "Salesforce AgentBlazer",
    category: "cloud",
    categoryLabel: "Cloud & Enterprise",
    description: "Autonomous AI agent workflows, business integrations, and platform foundations.",
    appliedIn: "Salesforce AgentBlazer Champion Certificate",
    badge: "AI Agents",
  },

  // Developer Tools
  {
    name: "Git & GitHub",
    category: "dev",
    categoryLabel: "Dev Tools",
    description: "Version control, branching, repository management, and automated GitHub Issue escalation.",
    appliedIn: "Code repository management & Automated alerts",
    badge: "Version Control",
  },
  {
    name: "Linux / Shell Environment",
    category: "dev",
    categoryLabel: "Dev Tools",
    description: "Command-line environments, shell scripting, environment configuration, and sandbox management.",
    appliedIn: "Sandbox runner & local development setup",
    badge: "CLI & Environment",
  },
];

export const SkillProficiency: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | "ai" | "data" | "cloud" | "dev">("all");

  const categories = [
    { id: "all", label: "All Tools" },
    { id: "ai", label: "AI & Machine Learning" },
    { id: "data", label: "Programming & Databases" },
    { id: "cloud", label: "Cloud & Enterprise" },
    { id: "dev", label: "Developer Tools" },
  ];

  const filteredTools =
    activeCategory === "all"
      ? toolsData
      : toolsData.filter((t) => t.category === activeCategory);

  return (
    <div className="w-full space-y-6">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#ffffff10] pb-4">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition ${
                activeCategory === cat.id
                  ? "bg-[var(--sec)] text-black font-semibold shadow-lg shadow-[#a476ff20]"
                  : "bg-[#181818cc] text-[var(--white-icon)] hover:text-white border border-[#ffffff0a]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <span className="text-xs text-[var(--white-icon)] font-mono">
          Showing {filteredTools.length} of {toolsData.length} tools
        </span>
      </div>

      {/* Clean, Simple Tool Cards Grid (No bars, no percentages) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTools.map((tool, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl bg-[#141414cc] backdrop-blur-md border border-[var(--white-icon-tr)] hover:border-[var(--sec)] transition-all duration-300 flex flex-col justify-between space-y-3 group hover:-translate-y-0.5"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1f1f1f] text-[var(--sec)] border border-[#ffffff0a]">
                  {tool.badge}
                </span>
                <span className="text-[11px] text-[var(--white-icon)]">
                  {tool.categoryLabel}
                </span>
              </div>

              <h4 className="text-base font-semibold text-white group-hover:text-[var(--sec)] transition-colors">
                {tool.name}
              </h4>

              <p className="text-xs text-[var(--white-icon)] leading-relaxed">
                {tool.description}
              </p>
            </div>

            <div className="pt-3 border-t border-[#ffffff0a] flex items-center gap-1.5 text-[11px] text-[var(--white-icon)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--sec)] shrink-0"></span>
              <span className="text-white font-medium truncate">
                {tool.appliedIn}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillProficiency;
