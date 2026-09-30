import React, { useState } from "react";

interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  tag: string;
  badge: string;
  accent: string;
  description: string;
  highlights: string[];
  techStack: string[];
  github: string;
  architectureSteps: { step: string; detail: string }[];
  impactPoints: string[];
}

const projectsData: ProjectDetail[] = [
  {
    id: "ai-leave",
    title: "AI Leave Management",
    category: "Machine Learning & Generative AI",
    tag: "Generative AI",
    badge: "AI Studio",
    accent: "from-[#a476ff20] to-[#5e449110]",
    description: "Built and deployed an AI Studio web application using Node.js with Gemini API integration, including local development setup and environment-based configuration.",
    highlights: [
      "Gemini API integration for automated leave justification parsing and workflow routing.",
      "Node.js server-side backend with secure environment variable configuration.",
      "Clean relational database schema for employee records and status tracking.",
    ],
    techStack: ["Gemini API", "Python", "SQL", "AI Studio"],
    github: "https://github.com/Vannilavan05",
    architectureSteps: [
      { step: "1. Intake", detail: "Employee submits leave request & justification via responsive frontend interface." },
      { step: "2. Context Evaluation", detail: "Context-aware prompt checks team overlap and policy constraints." },
      { step: "3. Gemini API Reasoning", detail: "Gemini 2.5 Flash evaluates reason, urgency, and departmental balance." },
      { step: "4. Database Sync", detail: "Status and recommendation saved into PostgreSQL with strict constraints." },
      { step: "5. Notification", detail: "Automated routing to supervisor dashboard with recommendation summary." },
    ],
    impactPoints: [
      "90% reduction in manual approval evaluation time",
      "Consistent policy application without subjective bias",
      "Seamless integration with enterprise attendance tracking",
    ],
  },
  {
    id: "sihms",
    title: "SIHMS | Hospital Management System",
    category: "Enterprise System & Data Integrity",
    tag: "Enterprise",
    badge: "Enterprise System",
    accent: "from-[#4f46e520] to-[#312e8110]",
    description: "Developed a structured hospital management system to manage patient data across multiple departments while maintaining strict data integrity.",
    highlights: [
      "Structured multi-department patient records with PostgreSQL relational constraints.",
      "Implemented automated patient validation pipelines to eliminate data duplication.",
      "Dynamic QR code generation linked to each patient's confidential health record.",
    ],
    techStack: ["AI", "Python", "PostgreSQL", "QR Code Generation", "Data Security"],
    github: "https://github.com/Vannilavan05",
    architectureSteps: [
      { step: "1. Admission", detail: "Patient biometric and demographic intake with uniqueness validation." },
      { step: "2. QR Encoder", detail: "Generates tamper-evident cryptographic QR code for fast triage scanning." },
      { step: "3. Multi-Dept Sync", detail: "Cardiology, Oncology & Emergency routes query unified PostgreSQL schema." },
      { step: "4. Data Integrity", detail: "Foreign keys and cascade rules prevent orphaned records during transfer." },
    ],
    impactPoints: [
      "Instant access to historical records via QR scan during emergencies",
      "Zero record duplication across cross-departmental referrals",
      "HIPAA-conscious data access control and role-based permissions",
    ],
  },
  {
    id: "backup-sim",
    title: "Backup Verification Simulator",
    category: "IM_INFI • Data Reliability & Audit",
    tag: "Data Integrity",
    badge: "Data Reliability",
    accent: "from-[#0ea5e920] to-[#0369a110]",
    description: "Built an automated SQLite backup verification system that restores backups in a sandbox environment and validates integrity using cryptographic and row-count checks.",
    highlights: [
      "Sandbox restoration pipeline validating backups with row-count checks and SHA-256 checksums.",
      "Native SQLite integrity_check diagnostics to flag structural database corruptions.",
      "Automated incident reports with real-time email alerts and GitHub Issue notifications.",
    ],
    techStack: ["Python", "SQLite", "Gemini API", "SHA-256", "GitHub Automation"],
    github: "https://github.com/Vannilavan05",
    architectureSteps: [
      { step: "1. Cron Ingest", detail: "Nightly backup archives fetched from cloud storage." },
      { step: "2. Sandbox Mount", detail: "Restores archive inside an isolated ephemeral SQLite environment." },
      { step: "3. Checksum Match", detail: "Calculates SHA-256 hash across all chunks and compares against metadata." },
      { step: "4. Deep Diagnostic", detail: "Executes native database diagnostics to test B-Tree structures." },
      { step: "5. Automated Alert", detail: "Dispatches email and auto-creates GitHub Issue if anomaly detected." },
    ],
    impactPoints: [
      "Guarantees that database backups are actually restorable and healthy",
      "Early detection of silent storage degradation and bit-rot",
      "Instant automated incident escalation via GitHub Issues",
    ],
  },
];

export const InteractiveProjects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<ProjectDetail | null>(null);

  const categories = ["All", "Generative AI", "Enterprise", "Data Integrity"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.tag === selectedCategory);

  return (
    <div className="w-full space-y-8">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition ${
                selectedCategory === cat
                  ? "bg-[var(--sec)] text-black font-semibold shadow-lg shadow-[#a476ff20]"
                  : "bg-[#181818] text-[var(--white-icon)] hover:text-white border border-[#ffffff10]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <span className="text-xs text-[var(--white-icon)] font-mono">
          Showing {filteredProjects.length} of {projectsData.length} projects
        </span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col justify-between rounded-2xl border border-[var(--white-icon-tr)] bg-[#141414cc] backdrop-blur-sm hover:border-[var(--sec)] transition-all duration-300 overflow-hidden hover:-translate-y-1 relative"
          >
            {/* Header Banner */}
            <div className={`p-6 bg-gradient-to-b ${project.accent} border-b border-[#ffffff08] flex items-center justify-between`}>
              <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-[#101010bb] border border-[#ffffff15] text-[var(--sec)]">
                {project.badge}
              </span>
              <a
                target="_blank"
                rel="noreferrer"
                href={project.github}
                aria-label={`View ${project.title} on GitHub`}
                className="size-9 flex items-center justify-center rounded-xl bg-[#101010bb] text-[var(--white-icon)] hover:text-white border border-[#ffffff15] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"/>
                </svg>
              </a>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-xs text-[var(--sec)] font-medium uppercase tracking-wide">
                  {project.category}
                </span>
                <h4 className="text-xl font-semibold text-[var(--white)] leading-snug group-hover:text-[var(--sec)] transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-[var(--white-icon)] leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-1.5 pt-2">
                  {project.highlights.map((point, idx) => (
                    <li key={idx} className="text-xs text-[var(--white-icon)] flex items-start gap-2">
                      <span className="text-[var(--sec)] font-bold mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#ffffff0a] space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-md bg-[#1f1f1f] text-[var(--white)] border border-[#ffffff10]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--sec)] hover:underline"
                  >
                    <span>View System Flow</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="8" x2="12" y2="12"/>
                      <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                  </button>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={project.github}
                    className="text-xs text-[var(--white-icon)] hover:text-white flex items-center gap-1"
                  >
                    <span>GitHub</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive System Flow Modal (Zero Code, Clean Architecture Details) */}
      {activeModalProject && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#141414] border border-[var(--sec)] rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-[#ffffff10] pb-4">
              <div>
                <span className="text-xs font-mono text-[var(--sec)] font-semibold uppercase">
                  {activeModalProject.badge} • ARCHITECTURE SPECIFICATION
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-xl bg-[#202020] hover:bg-[#303030] text-[var(--white-icon)] hover:text-white transition"
              >
                ✕
              </button>
            </div>

            {/* Step-by-Step Architecture Pipeline */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-[var(--sec)] uppercase tracking-wider">
                System Workflow & Execution Stages
              </h4>
              <div className="space-y-2.5">
                {activeModalProject.architectureSteps.map((s, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#191919] border border-[#ffffff0a] flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-[var(--sec)] text-black text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <span className="text-sm font-semibold text-white block">{s.step}</span>
                      <p className="text-xs text-[var(--white-icon)] mt-0.5 leading-relaxed">{s.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Business & Technical Impact */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-semibold text-[var(--sec)] uppercase tracking-wider">
                Key Technical & Business Impact
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {activeModalProject.impactPoints.map((point, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#1a1a1a] border border-[#ffffff08] space-y-1">
                    <span className="text-[#10b981] font-bold text-sm block">✓ Verified</span>
                    <p className="text-xs text-[var(--white-icon)]">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-[#ffffff10]">
              <a
                target="_blank"
                rel="noreferrer"
                href={activeModalProject.github}
                className="px-5 py-2.5 rounded-xl bg-[var(--sec)] text-black font-semibold text-sm hover:opacity-90 transition flex items-center gap-2"
              >
                <span>View Repository on GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>

              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 text-xs text-[var(--white-icon)] hover:text-white"
              >
                Close Spec
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveProjects;
