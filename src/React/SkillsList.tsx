import React, { useState } from "react";

const CategoryIcons: Record<string, React.ReactNode> = {
  "AI & Machine Learning": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sec)]">
      <path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z"/>
      <path d="M18 10a6 6 0 0 1-12 0"/>
      <line x1="12" y1="16" x2="12" y2="22"/>
      <line x1="8" y1="22" x2="16" y2="22"/>
    </svg>
  ),
  "Cloud & Enterprise Platforms": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sec)]">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
    </svg>
  ),
  "Tools, APIs & Databases": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sec)]">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
    </svg>
  ),
  "Programming & Data Analysis": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sec)]">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
};

const skills: Record<string, string[]> = {
  "AI & Machine Learning": [
    "Predictive Machine Learning Models (Crop Disease)",
    "Generative AI & Gemini API Integration",
    "Data Analysis Workflows & Feature Engineering",
    "Model Evaluation & Sandbox Integrity",
  ],
  "Cloud & Enterprise Platforms": [
    "AWS Compute (Amazon EC2) & Storage (Amazon S3)",
    "SAP BTP & SAP Analytics Cloud (Business Analytics)",
    "Salesforce AgentBlazer & Power BI Analytics",
    "Cloud Practitioner & Foundation Workflows",
  ],
  "Tools, APIs & Databases": [
    "PostgreSQL (Relational Multi-department Data)",
    "SQLite (Integrity Checks, SHA-256 & Row Validation)",
    "Git & GitHub (Version Control & Automation)",
    "REST APIs & Environment Configuration",
  ],
  "Programming & Data Analysis": [
    "Python (AI/ML, Data Wrangling, Automation)",
    "SQL (Complex Queries, Schema & Integrity Design)",
    "Data Integrity Verification & Checksum Pipelines",
  ],
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>("AI & Machine Learning");

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left w-full space-y-4">
      <div>
        <h3 className="text-[var(--white)] text-2xl md:text-3xl font-semibold">
          Technical Expertise
        </h3>
        <p className="text-xs md:text-sm text-[var(--white-icon)] mt-1">
          Proficiencies across machine learning, enterprise cloud, and database systems.
        </p>
      </div>
      <ul className="space-y-3 text-base">
        {Object.entries(skills).map(([category, items]) => {
          const isOpen = openItem === category;
          return (
            <li key={category} className="w-full">
              <div
                onClick={() => toggleItem(category)}
                className={`w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border ${
                  isOpen ? "border-[var(--sec)] shadow-lg shadow-[#a476ff10]" : "border-[var(--white-icon-tr)]"
                } cursor-pointer overflow-hidden`}
              >
                <div className="flex items-center gap-3 p-4">
                  {CategoryIcons[category]}
                  <div className="flex items-center gap-2 flex-grow justify-between">
                    <span className="block text-[var(--white)] text-base md:text-lg font-medium">
                      {category}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`text-[var(--white-icon)] transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[var(--sec)]" : ""
                      }`}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 border-t border-[var(--white-icon-tr)] bg-[#10101060]">
                    <ul className="space-y-2 mt-2">
                      {items.map((skill, index) => (
                        <li key={index} className="flex items-center gap-2.5 text-sm text-[var(--white-icon)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--sec)] shrink-0"></span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsList;
