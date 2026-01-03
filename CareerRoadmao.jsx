import React from "react";

// Roadmap node structure:
// { id, year, title, subtitle, type: 'education'|'career', details, salary?, position: { row, col } }
const nodes = [
  {
    id: "2026-edu",
    year: "2026",
    title: "BS + MSIS Foundations",
    subtitle: "ITC 2200, ITC 2300, ENG 3105/3106, INFO 5100 + 5101",
    type: "education",
    details:
      "You establish your technical base and enter the MSIS core while stabilizing in Systems Support / IAM-adjacent work.",
    position: { row: 1, col: 1 },
  },
  {
    id: "2026-career",
    year: "2026",
    title: "IT Systems Support / IAM Support",
    subtitle: "Stabilization & Positioning",
    type: "career",
    details:
      "You build credibility in IAM + Ops, document rigorously, and become the reliable problem-solver.",
    salary: "$70K–$95K",
    position: { row: 2, col: 1 },
  },

  {
    id: "2027-edu",
    year: "2027",
    title: "Cloud + Cyber Foundations",
    subtitle: "ITC 3200, ITC 3000, DAMG 7350, PJM 2000, CSYE 6225",
    type: "education",
    details:
      "You deepen cloud, cybersecurity, and project management—building the backbone of your hybrid identity.",
    position: { row: 1, col: 2 },
  },
  {
    id: "2027-career",
    year: "2027",
    title: "IAM / Systems / IT Ops Analyst",
    subtitle: "Hands-on Ownership",
    type: "career",
    details:
      "You own processes, improve workflows, and start mentoring others while aligning tightly with IAM and Ops.",
    salary: "$95K–$125K",
    position: { row: 2, col: 2 },
  },

  {
    id: "2028-edu",
    year: "2028",
    title: "BS + MSIS Completion",
    subtitle: "MGT 2330, INFO 7260, DAMG 7330, INFO 7390",
    type: "education",
    details:
      "You complete your BS in IT (May) and MSIS (Dec), emerging with a leadership-ready hybrid skillset.",
    position: { row: 1, col: 3 },
  },
  {
    id: "2028-career",
    year: "2028",
    title: "Senior IAM / Systems / IT Ops Lead",
    subtitle: "Leadership Emergence",
    type: "career",
    details:
      "You lead initiatives, own IAM or Ops domains, and become the go-to person for complex systems decisions.",
    salary: "$125K–$155K",
    position: { row: 2, col: 3 },
  },

  {
    id: "2029-career",
    year: "2029",
    title: "IT / IAM / Infrastructure Manager",
    subtitle: "Management Entry",
    type: "career",
    details:
      "You manage people, budgets, and service delivery—translating your systems thinking into organizational outcomes.",
    salary: "$150K–$185K",
    position: { row: 2, col: 4 },
  },

  {
    id: "2030-career",
    year: "2030",
    title: "Senior Manager of IT / IAM",
    subtitle: "Strategic Leadership",
    type: "career",
    details:
      "You own multi-team operations, drive cross-functional initiatives, and shape governance and standards.",
    salary: "$170K–$210K",
    position: { row: 2, col: 5 },
  },

  {
    id: "2031-career",
    year: "2031",
    title: "Director of IT / Infrastructure / IAM",
    subtitle: "Director-Level Ownership",
    type: "career",
    details:
      "You own IT strategy, budgets, and transformation programs—operating at the director tier.",
    salary: "$190K–$260K",
    position: { row: 2, col: 6 },
  },

  {
    id: "2032-career",
    year: "2032+",
    title: "Senior Director / VP / Deputy CIO",
    subtitle: "Executive Trajectory",
    type: "career",
    details:
      "You operate at the executive level, shaping enterprise-wide technology strategy and culture.",
    salary: "$225K–$325K+",
    position: { row: 2, col: 7 },
  },
];

export default function CareerRoadmap() {
  return (
    <div className="w-full flex justify-center px-4 py-16 bg-[#020617]">
      <div className="relative w-full max-w-7xl border border-slate-700/60 rounded-xl p-8 bg-[#0f172a]/90 shadow-2xl overflow-hidden">

        {/* Blueprint grid background */}
        <div className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(30,58,138,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,58,138,0.25) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Header */}
        <div className="mb-10 relative z-10">
          <h1 className="text-3xl font-semibold tracking-wider text-slate-100 uppercase">
            Career & Education Blueprint
          </h1>
          <p className="text-slate-400 mt-1">
            A systems-architecture view of Loyd Johnson’s academic journey and IT leadership trajectory.
          </p>
        </div>

        {/* Grid container */}
        <div className="relative grid grid-cols-7 grid-rows-3 gap-6 py-10">

          {/* SVG connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {nodes.map((node, index) => {
              const next = nodes[index + 1];
              if (!next) return null;

              const x1 = node.position.col * 160;
              const y1 = node.position.row * 120;
              const x2 = next.position.col * 160;
              const y2 = next.position.row * 120;

              return (
                <line
                  key={`${node.id}-${next.id}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="rgba(56,189,248,0.7)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {nodes.map((node) => (
            <div
              key={node.id}
              className={`
                relative p-4 rounded-lg border backdrop-blur-sm shadow-xl
                transition-transform duration-200
                ${node.type === "education"
                  ? "border-blue-400/70 bg-blue-900/20"
                  : "border-teal-400/70 bg-teal-900/20"}
                hover:-translate-y-1 hover:shadow-2xl
              `}
              style={{
                gridColumn: node.position.col,
                gridRow: node.position.row,
              }}
            >
              <div className="text-xs uppercase tracking-widest text-slate-400">
                {node.year}
              </div>
              <div className="text-lg font-semibold text-slate-100">
                {node.title}
              </div>
              <div className="text-sm text-blue-300">{node.subtitle}</div>
              <div className="text-sm text-slate-400 mt-2 leading-relaxed">
                {node.details}
              </div>
              {node.salary && (
                <div className="text-sm text-cyan-200 mt-2">
                  Est. Compensation:{" "}
                  <span className="font-semibold text-cyan-100">
                    {node.salary}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex gap-6 mt-6 text-slate-400 text-sm relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-400" />
            Education Milestone
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-teal-400" />
            Career Milestone
          </div>
        </div>
      </div>
    </div>
  );
}