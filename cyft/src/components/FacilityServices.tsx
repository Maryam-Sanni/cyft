import { useState } from "react";
import {
  ClipboardCheck,
  FileSearch,
  ShieldCheck,
  Boxes,
  BatteryCharging,
  BadgeCheck,
  FileText,
  Building2,
  BriefcaseBusiness,
  TriangleAlert,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const SERVICES = [
  {
    id: 1,
    title: "FM Strategy & Policy Development",
    icon: ClipboardCheck,
    description:
      "Governance frameworks, SOPs, operational standards, and strategic FM policies.",

    panel: {
      purpose:
        "Defines structured governance and operational direction for facility management systems.",

      application:
        "Used when establishing, restructuring, or standardising FM operations.",

      output:
        "Policies, SOPs, governance frameworks, and operational guidelines.",
    },
  },

  {
    id: 2,
    title: "Facility Condition Assessment",
    icon: FileSearch,
    description:
      "Structured inspections and infrastructure readiness scoring.",

    panel: {
      purpose:
        "Assesses the physical condition and operational state of facilities.",

      application:
        "Applied during audits, acquisitions, and asset performance reviews.",

      output:
        "Condition reports, inspection findings, and facility scoring documentation.",
    },
  },

  {
    id: 3,
    title: "FM Audit & Performance Review",
    icon: ShieldCheck,
    description:
      "Independent operational review, compliance, efficiency, and service quality.",

    panel: {
      purpose:
        "Evaluates FM operations against defined standards and compliance requirements.",

      application:
        "Used for operational reviews, compliance checks, and service improvement initiatives.",

      output:
        "Audit reports, compliance assessments, and performance review summaries.",
    },
  },

  {
    id: 4,
    title: "Asset Register & Lifecycle Planning",
    icon: Boxes,
    description:
      "Full asset intelligence with lifecycle forecasting and replacement planning.",

    panel: {
      purpose:
        "Creates structured visibility of assets and their lifecycle stages.",

      application:
        "Used for asset tracking, capital planning, and replacement scheduling.",

      output:
        "Asset registers, lifecycle plans, and maintenance forecasting documents.",
    },
  },

  {
    id: 5,
    title: "Energy Audit & Optimisation",
    icon: BatteryCharging,
    description:
      "Energy efficiency systems and cost reduction strategies.",

    panel: {
      purpose:
        "Identifies energy usage patterns and improvement opportunities.",

      application:
        "Applied in buildings requiring energy efficiency or sustainability reviews.",

      output:
        "Energy audit reports and optimisation recommendations.",
    },
  },

  {
    id: 6,
    title: "Compliance & Regulatory Advisory",
    icon: BadgeCheck,
    description:
      "Fire safety, regulatory alignment, environmental compliance.",

    panel: {
      purpose:
        "Ensures facilities align with relevant regulatory and safety standards.",

      application:
        "Used for compliance checks, certifications, and regulatory preparation.",

      output:
        "Compliance reports, gap analyses, and advisory documentation.",
    },
  },

  {
    id: 7,
    title: "FM Procurement & Vendor Advisory",
    icon: FileText,
    description:
      "Tendering, vendor selection, and contract optimization.",

    panel: {
      purpose:
        "Supports structured procurement and vendor management processes.",

      application:
        "Used during tendering, vendor selection, and contract negotiations.",

      output:
        "Tender documents, evaluation frameworks, and procurement strategies.",
    },
  },

  {
    id: 8,
    title: "Post-Occupancy Evaluation",
    icon: Building2,
    description:
      "Performance review after occupancy to identify operational gaps.",

    panel: {
      purpose:
        "Evaluates building performance after occupation.",

      application:
        "Used after project completion or facility handover.",

      output:
        "Evaluation reports and improvement recommendations.",
    },
  },

  {
    id: 9,
    title: "FM Outsourcing Advisory",
    icon: BriefcaseBusiness,
    description:
      "Outsourcing strategy and transition planning.",

    panel: {
      purpose:
        "Supports decision-making around outsourcing FM services.",

      application:
        "Used during service transitions or vendor restructuring.",

      output:
        "Outsourcing frameworks and transition plans.",
    },
  },

  {
    id: 10,
    title: "Business Continuity & Risk Planning",
    icon: TriangleAlert,
    description:
      "Risk frameworks, emergency planning, resilience systems.",

    panel: {
      purpose:
        "Prepares facilities for operational disruptions and risk scenarios.",

      application:
        "Used for emergency planning and operational risk management.",

      output:
        "Business continuity plans and risk mitigation frameworks.",
    },
  },
];

export default function FMConsultancyServices() {
  const [active, setActive] = useState(1);
  const activeService = SERVICES.find(s => s.id === active);
    const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-[#0B0B10] text-white overflow-hidden px-6 py-28">

      {/* Animated glow field */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute w-[500px] h-[500px] bg-orange-500/20 blur-[140px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[140px] bottom-[-120px] right-[-120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-16">
          <p className="text-orange-400 tracking-[0.35em] text-xs uppercase">
            Facility Intelligence Layer
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold mt-4 leading-tight">
            Strategic FM Advisory<br />
            That Feels Like a System
          </h1>

          <p className="text-white/60 mt-6 max-w-2xl">
            We don’t just consult — we redesign how facilities think, operate, and evolve.
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left interactive stack */}
          <div className="space-y-3">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              const isActive = active === service.id;

              return (
                <div
                  key={service.id}
                  onClick={() => setActive(service.id)}
                  className={`
                    group cursor-pointer relative rounded-2xl p-5 transition-all duration-500
                    border
                    ${isActive
                      ? "bg-white/10 border-orange-400/40 scale-[1.02]"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                    }
                  `}
                >

                  <div className="flex items-center gap-4">

                    <div className={`
                      w-11 h-11 rounded-xl flex items-center justify-center
                      transition-all duration-500
                      ${isActive ? "bg-orange-500" : "bg-white/10 group-hover:bg-white/20"}
                    `}>
                      <Icon size={18} />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-medium">
                        {service.title}
                      </h3>

                      <p className="text-xs text-white/50 mt-1 line-clamp-1">
                        {service.description}
                      </p>
                    </div>

                   
                  </div>

                  {/* glow line */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-2xl border border-orange-400/30 shadow-[0_0_40px_rgba(249,115,22,0.15)] pointer-events-none" />
                  )}

                </div>
              );
            })}

          <button 
          onClick={() => {navigate("/contact")}}
          className="bg-[#DE6328] hover:bg-orange-500 text-white px-8 py-3 rounded-full font-medium transition mt-5">
            Book an Appointment
          </button>
         
          </div>

          {/* Right detail panel */}
<div className="sticky top-24">
  <div className="rounded-3xl p-10 bg-white/5 border border-white/10 backdrop-blur-xl min-h-[360px] relative overflow-hidden">

    <div className="absolute w-[260px] h-[260px] bg-orange-500/20 blur-[120px] top-[-100px] right-[-100px]" />

    <div className="relative z-10">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center">
          {activeService?.icon && <activeService.icon size={18} />}
        </div>

        <h2 className="text-xl font-semibold">
          {activeService?.title}
        </h2>
      </div>

      {/* Main description */}
      <p className="text-white/70 text-sm leading-relaxed">
        {activeService?.description}
      </p>

      <div className="h-px bg-white/10 my-6" />

      {/* Adaptive content */}
      <div className="space-y-5 text-sm">

        <div>
          <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
            Purpose
          </p>
          <p className="text-white/70">
            {activeService?.panel?.purpose}
          </p>
        </div>

        <div>
          <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
            Application
          </p>
          <p className="text-white/70">
            {activeService?.panel?.application}
          </p>
        </div>

        <div>
          <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
            Output
          </p>
          <p className="text-white/70">
            {activeService?.panel?.output}
          </p>
        </div>

      </div>

    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}