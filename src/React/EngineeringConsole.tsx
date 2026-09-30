import React, { useState } from "react";

type FocusTab = "competencies" | "academic" | "certifications";

export const EngineeringConsole: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FocusTab>("competencies");

  return (
    <div className="w-full flex flex-col rounded-2xl bg-[#141414cc] backdrop-blur-md border border-[var(--white-icon-tr)] overflow-hidden shadow-2xl">
      {/* Top Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 bg-[#111111bb] border-b border-[#ffffff0c]">
        <a
          href="#experience"
          className="p-3 rounded-xl bg-[#181818] border border-[#ffffff0a] hover:border-[var(--sec)] transition text-center group"
        >
          <span className="block text-xl font-bold text-[var(--sec)] group-hover:scale-105 transition-transform">
            8.63
          </span>
          <span className="block text-[11px] text-[var(--white-icon)]">
            CGPA (B.Tech)
          </span>
        </a>

        <a
          href="#experience"
          className="p-3 rounded-xl bg-[#181818] border border-[#ffffff0a] hover:border-[var(--sec)] transition text-center group"
        >
          <span className="block text-xl font-bold text-[var(--white)] group-hover:text-[var(--sec)] group-hover:scale-105 transition-all">
            2
          </span>
          <span className="block text-[11px] text-[var(--white-icon)]">
            Internships
          </span>
        </a>

        <a
          href="#certifications"
          className="p-3 rounded-xl bg-[#181818] border border-[#ffffff0a] hover:border-[var(--sec)] transition text-center group"
        >
          <span className="block text-xl font-bold text-[var(--white)] group-hover:text-[var(--sec)] group-hover:scale-105 transition-all">
            6
          </span>
          <span className="block text-[11px] text-[var(--white-icon)]">
            Certifications
          </span>
        </a>

        <a
          href="#projects"
          className="p-3 rounded-xl bg-[#181818] border border-[#ffffff0a] hover:border-[var(--sec)] transition text-center group"
        >
          <span className="block text-xl font-bold text-[var(--sec)] group-hover:scale-105 transition-transform">
            3+
          </span>
          <span className="block text-[11px] text-[var(--white-icon)]">
            Core Systems
          </span>
        </a>
      </div>

      {/* Tab Header */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-[#161616bb] border-b border-[#ffffff0a] gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--sec)] animate-pulse"></span>
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--white)]">
            Professional Profile & Focus
          </span>
        </div>

        <div className="flex items-center gap-1 bg-[#101010] p-1 rounded-lg border border-[#ffffff08]">
          <button
            onClick={() => setActiveTab("competencies")}
            className={`px-3 py-1 text-xs rounded-md transition font-medium ${
              activeTab === "competencies"
                ? "bg-[var(--sec)] text-black font-semibold shadow-sm"
                : "text-[var(--white-icon)] hover:text-white"
            }`}
          >
            Core Focus
          </button>
          <button
            onClick={() => setActiveTab("academic")}
            className={`px-3 py-1 text-xs rounded-md transition font-medium ${
              activeTab === "academic"
                ? "bg-[var(--sec)] text-black font-semibold shadow-sm"
                : "text-[var(--white-icon)] hover:text-white"
            }`}
          >
            Education & Roles
          </button>
          <button
            onClick={() => setActiveTab("certifications")}
            className={`px-3 py-1 text-xs rounded-md transition font-medium ${
              activeTab === "certifications"
                ? "bg-[var(--sec)] text-black font-semibold shadow-sm"
                : "text-[var(--white-icon)] hover:text-white"
            }`}
          >
            Credentials
          </button>
        </div>
      </div>

      {/* Main Content Area - Clean UI, No Code */}
      <div className="p-5 text-left space-y-4 min-h-[300px] flex flex-col justify-between">
        {activeTab === "competencies" && (
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-[#191919] border border-[#ffffff0a] space-y-1 hover:border-[var(--sec)] transition-colors">
              <div className="flex items-center gap-2 text-[var(--sec)] font-semibold text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z"/>
                  <path d="M18 10a6 6 0 0 1-12 0"/>
                </svg>
                <span>Generative AI & Machine Learning</span>
              </div>
              <p className="text-xs text-[var(--white-icon)] leading-relaxed">
                Building end-to-end intelligent systems with Google Gemini API, predictive crop disease models, and automated data workflows.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#191919] border border-[#ffffff0a] space-y-1 hover:border-[var(--sec)] transition-colors">
              <div className="flex items-center gap-2 text-[#38bdf8] font-semibold text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
                </svg>
                <span>Cloud Platforms & Infrastructure</span>
              </div>
              <p className="text-xs text-[var(--white-icon)] leading-relaxed">
                Practical AWS cloud experience with Amazon EC2 compute, S3 object storage, and enterprise business reporting with SAP Analytics Cloud.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#191919] border border-[#ffffff0a] space-y-1 hover:border-[var(--sec)] transition-colors">
              <div className="flex items-center gap-2 text-[#10b981] font-semibold text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="9" ry="3"/>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                </svg>
                <span>Data Integrity & Systems Architecture</span>
              </div>
              <p className="text-xs text-[var(--white-icon)] leading-relaxed">
                Ensuring data reliability through SQLite sandbox validation, cryptographic SHA-256 checksums, and relational PostgreSQL database design.
              </p>
            </div>
          </div>
        )}

        {activeTab === "academic" && (
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-[#191919] border border-[#ffffff0a] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[var(--sec)] font-semibold">ACADEMIC STANDING</span>
                <span className="text-xs px-2 py-0.5 rounded bg-[#10b98120] text-[#10b981] font-semibold">CGPA: 8.63</span>
              </div>
              <h4 className="text-sm font-semibold text-white">B.Tech in Artificial Intelligence & Data Science</h4>
              <p className="text-xs text-[var(--white-icon)]">
                V.S.B Engineering College, Karur (Affiliated to Anna University) • 2023 – Present
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#191919] border border-[#ffffff0a] space-y-2">
              <span className="text-xs font-mono text-[var(--sec)] font-semibold">CAREER OBJECTIVES</span>
              <p className="text-xs text-[var(--white-icon)] leading-relaxed">
                Seeking high-impact roles in AI Development, Machine Learning Engineering, Cloud Architecture, and Data Science where practical AI workflows and data integrity make real-world differences.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["AI Engineer", "ML Practitioner", "Cloud Practitioner", "Data Analyst"].map((role) => (
                  <span key={role} className="text-xs px-2.5 py-1 rounded-md bg-[#252525] text-white border border-[#ffffff10]">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "certifications" && (
          <div className="space-y-2.5">
            {[
              { title: "SAP Analytics Cloud", field: "Business Analytics" },
              { title: "AWS Cloud Compute", field: "Amazon EC2 & Architecture" },
              { title: "Salesforce AgentBlazer", field: "Autonomous AI Agents" },
              { title: "Power BI Data Analytics", field: "Interactive Business Intelligence" },
              { title: "AWS with SAP", field: "Generative AI Fundamentals" },
              { title: "Data Engineering on AWS", field: "Pipelines & Storage Foundations" },
            ].map((cert, index) => (
              <div key={index} className="flex items-center justify-between p-2.5 rounded-xl bg-[#191919] border border-[#ffffff08]">
                <div>
                  <span className="text-xs font-semibold text-white block">{cert.title}</span>
                  <span className="text-[11px] text-[var(--white-icon)] block">{cert.field}</span>
                </div>
                <span className="text-[10px] text-[#10b981] px-2 py-0.5 rounded bg-[#10b98115] border border-[#10b98125]">
                  Verified
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Action Row */}
        <div className="pt-3 border-t border-[#ffffff0a] flex items-center justify-between">
          <a
            href="#projects"
            className="text-xs text-[var(--sec)] hover:underline flex items-center gap-1 font-medium"
          >
            <span>Explore Featured Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>

          <a
            href="#contact"
            className="px-3.5 py-1.5 rounded-lg bg-[var(--sec)] text-black text-xs font-semibold hover:opacity-90 transition"
          >
            Connect Directly
          </a>
        </div>
      </div>
    </div>
  );
};

export default EngineeringConsole;
