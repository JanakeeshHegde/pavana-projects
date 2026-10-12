/**
 * PAVANA PROJECTS — Project Management Consultancy (PMC)
 * Verified Company & Capability Data extracted directly from the official Company Profile PDF.
 * Reference Project Profile: 15,00,000 Sq. Ft. IT Software Park Proposed PMC Framework.
 */

export const companyProfile = {
  name: "Pavana Projects",
  tagline: "CREATING LANDMARKS, SHAPING FUTURES.",
  category: "Project Management Consultancy (PMC)",
  subCategory: "Commercial, IT/ITES, and Infrastructure Developments",
  missionStatement: "Bringing clarity, control, and accountability to complex projects from project initiation through commissioning and handover.",
  
  contact: {
    address: "#543, 14th ‘A’ Main, HMT Layout, Gokula 1st Stage, 1st Phase, Mathikere, Bangalore – 560054",
    city: "Bangalore",
    state: "Karnataka",
    pinCode: "560054",
    country: "India",
    email: "contact@pavanaprojects.com", // verified placeholder for inquiries
    phone: "+91 80 2337 5400", // easily editable
    workingHours: "Monday – Saturday: 9:00 AM – 6:30 PM IST",
    mapQuery: "543, 14th A Main Rd, HMT Layout, Gokula 1st Stage, Mathikere, Bengaluru, Karnataka 560054"
  },

  foundation: {
    vision: "To be a trusted project management partner for high-quality commercial, IT/ITES and infrastructure developments, creating measurable value through disciplined project delivery.",
    mission: "To plan, coordinate, monitor and manage projects with professional systems that align design intent, construction execution, cost, schedule, quality, safety and stakeholder expectations.",
    values: [
      {
        name: "Integrity",
        meaning: "Transparent communication, documented decisions and professional accountability.",
        icon: "ShieldCheck"
      },
      {
        name: "Planning",
        meaning: "A structured plan before execution, with clear milestones and ownership.",
        icon: "Compass"
      },
      {
        name: "Coordination",
        meaning: "One integrated view across design, procurement, construction and commissioning.",
        icon: "Network"
      },
      {
        name: "Control",
        meaning: "Timely information, dashboards, reporting and escalation to support decisions.",
        icon: "Sliders"
      },
      {
        name: "Quality",
        meaning: "Right-first-time execution supported by inspections, testing and documentation.",
        icon: "CheckCircle2"
      },
      {
        name: "Delivery",
        meaning: "A practical focus on milestones, readiness, handover and operational outcomes.",
        icon: "Building2"
      }
    ]
  },

  priorities: [
    {
      title: "Time",
      tagline: "Structured programme management",
      description: "Critical-path monitoring, schedule baseline adherence, and milestone recovery planning to protect delivery dates.",
      color: "#C69A36",
      metric: "Schedule Integrity"
    },
    {
      title: "Cost",
      tagline: "Budget visibility & control",
      description: "Comprehensive budget tracking, procurement commitments, variation control, and disciplined commercial forecasting.",
      color: "#064A32",
      metric: "Commercial Discipline"
    },
    {
      title: "Quality",
      tagline: "Right-first-time execution",
      description: "Proactive inspection planning, material approval systems, testing protocols, and compliance-oriented execution.",
      color: "#14251E",
      metric: "Zero-Defect Standards"
    },
    {
      title: "Safety & Risk",
      tagline: "Proactive mitigation",
      description: "Early hazard identification, site HSE enforcement, risk register governance, and structured escalation protocols.",
      color: "#C69A36",
      metric: "Zero-Incident Culture"
    }
  ],

  services: [
    {
      id: "planning-scheduling",
      title: "Project Planning & Scheduling",
      shortDesc: "Master programmes, WBS, milestones, look-ahead schedules, and critical-path monitoring.",
      fullDesc: "Pavana Projects structures the entire project journey before mobilization. We formulate the project brief, develop comprehensive Work Breakdown Structures (WBS), construct baseline master programmes, establish milestone hierarchies, and enforce weekly look-ahead planning with rigorous critical-path analytics.",
      deliverables: ["Project Brief Definition", "Master Baseline Programme", "Work Breakdown Structure (WBS)", "Critical Path Analysis", "Weekly Look-Ahead Schedules", "Slippage & Recovery Plans"],
      icon: "CalendarDays"
    },
    {
      id: "design-management",
      title: "Design Management",
      shortDesc: "Deliverable tracking, multidisciplinary coordination, constructability reviews, and interface management.",
      fullDesc: "Bridging the gap between conceptual architecture and site constructability. We track design deliverables across architectural, structural, and MEP consultants, resolve spatial clashes, conduct constructability reviews, and manage the complete RFI and drawing submittal register.",
      deliverables: ["Design Deliverable Tracking", "Multidisciplinary Clash Resolution", "Constructability Reviews", "RFI & Technical Query Tracking", "Shop Drawing Review Workflows", "Tenant Interface Guidelines"],
      icon: "DraftingCompass"
    },
    {
      id: "tender-procurement",
      title: "Tender & Procurement Management",
      shortDesc: "Package strategy, tender coordination, technical-commercial comparison, and vendor tracking.",
      fullDesc: "Strategic procurement directly preserves project budgets and timelines. We structure packaging strategies, prepare comprehensive tender documentation, coordinate bidder clarification meetings, conduct rigorous technical-commercial evaluations, and track vendor procurement milestones.",
      deliverables: ["Packaging Strategy Definition", "Tender Documentation Support", "Bidder Query Clarifications", "Technical & Commercial Comparisons", "Long-Lead Equipment Tracking", "Recommendation for Award"],
      icon: "FileSpreadsheet"
    },
    {
      id: "construction-management",
      title: "Construction Management",
      shortDesc: "Site coordination, work-front readiness, contractor interfaces, and execution monitoring.",
      fullDesc: "Deploying professional site presence to direct, synchronize, and monitor multiple concurrent work fronts. We manage site logistics, contractor sequencing, handover of work fronts, daily execution progress, and inter-agency handoffs.",
      deliverables: ["Work-Front Readiness Checks", "Site Logistics & Sequencing Plans", "Multi-Contractor Interface Coordination", "Daily Site Progress Monitoring", "Inter-Trade Handoff Management", "Site Coordination Meetings"],
      icon: "HardHat"
    },
    {
      id: "cost-commercial",
      title: "Cost & Commercial Monitoring",
      shortDesc: "Budget tracking, commitments, variations, certification support, and cost-to-complete visibility.",
      fullDesc: "Transparent financial governance throughout construction. We track budgets against commitments, audit variation requests with contractual discipline, assist in interim payment verification, and provide clients with accurate cost-to-complete visibility.",
      deliverables: ["Project Budget Tracking", "Contract Commitment Records", "Variation & Change Control Register", "Interim Payment Certification Support", "Cost-to-Complete Forecasts", "Cash Flow Visibility"],
      icon: "Coins"
    },
    {
      id: "mep-coordination",
      title: "MEP & Specialist Coordination",
      shortDesc: "Electrical, HVAC, plumbing, fire protection, ELV, BMS, and specialist systems integration.",
      fullDesc: "High-density commercial and IT developments demand seamless building services integration. We coordinate electrical infrastructure, central HVAC, public health engineering, firefighting systems, low-voltage communications, and BMS building automation systems.",
      deliverables: ["Combined Services Drawings (CSD) Review", "Plant Room Spatial Coordination", "Riser & Shaft Interface Management", "Equipment Delivery & Rigging Plans", "Service Shaft Handoffs", "BMS Integration Architecture"],
      icon: "Cpu"
    },
    {
      id: "qa-qc-management",
      title: "QA/QC Management",
      shortDesc: "Inspection & Test Plans, material approvals, quality records, NCR tracking, and closure monitoring.",
      fullDesc: "Quality is embedded systematically at every phase. We enforce Inspection and Test Plans (ITPs), establish strict material and mock-up approval benchmarks, maintain digital quality logs, and operate a formal Non-Conformance Report (NCR) tracking mechanism until root-cause closure.",
      deliverables: ["Inspection & Test Plans (ITPs)", "Material / Sample Approval Registers", "Method Statement Implementation Reviews", "Non-Conformance Report (NCR) Tracking", "Benchmark & Mock-up Approvals", "Quality Audit Documentation"],
      icon: "ClipboardCheck"
    },
    {
      id: "hse-coordination",
      title: "HSE Coordination",
      shortDesc: "Safety planning, site observations, compliance tracking, risk identification, and corrective actions.",
      fullDesc: "Safety without compromise. We establish site-wide HSE protocols, oversee high-risk activities including deep excavations and work-at-height, conduct safety walks, monitor contractor compliance, and maintain comprehensive incident and near-miss registers.",
      deliverables: ["Project HSE Execution Plan", "High-Risk Activity Permits & Controls", "Toolbox Talks & Induction Protocols", "Site Safety Observation Logs", "Incident & Near-Miss Investigation", "Emergency Preparedness Coordination"],
      icon: "ShieldAlert"
    },
    {
      id: "testing-commissioning",
      title: "Testing, Commissioning & Handover",
      shortDesc: "Pre-commissioning readiness, system testing, snag closure, as-built records, and handover coordination.",
      fullDesc: "A structured transition from construction to facility occupancy. We supervise individual system commissioning, execute integrated services testing, manage punch-list snag closure, consolidate as-built drawings and O&M manuals, and oversee statutory handover documentation.",
      deliverables: ["Pre-Commissioning Checklist Audits", "Integrated MEP Testing Schedules", "Snag / Punch-List Digital Tracking", "As-Built Drawing Verification", "O&M Manual Consolidation", "Statutory Handover Records"],
      icon: "CheckSquare"
    }
  ],

  // 15,00,000 Sq. Ft. IT Software Park Reference Project Profile
  referenceProject: {
    title: "15,00,000 Sq. Ft. IT Software Park",
    badge: "Reference Project Profile & Proposed PMC Framework",
    disclaimer: "The project information below is presented as a professional project profile and proposed PMC framework based on the stated 15,00,000 Sq. Ft. requirement. Detailed building configuration, site particulars, timelines, and consultant/contractor packages can be incorporated once formally defined.",
    scale: "15,00,000 Sq. Ft.",
    category: "IT / Software Park / Commercial Development",
    role: "Comprehensive Project Management Consultancy (PMC)",
    primaryInterface: "Client / Developer, Consultants, Contractors, Vendors & Authorities",
    deliveryModel: "Design Coordination → Procurement → Construction → Testing → Handover",
    successMeasures: "Programme adherence, cost visibility, quality compliance, safe execution, and readiness for occupancy",
    overview: "This project profile demonstrates Pavana Projects' intended PMC framework for a world-class IT / Software Park campus spanning 1.5 million square feet of built-up area. The PMC framework integrates design management, multi-package procurement, disciplined construction coordination, MEP services integration, quality assurance, and systematic commissioning under a unified control tower.",
    
    packages: [
      {
        id: "civil-structural",
        title: "Civil & Structural",
        scope: "Foundations, RCC/structural works, masonry, façade interfaces, waterproofing and associated civil packages.",
        detail: "Supervision of substructure deep basement works, high-grade concrete pouring, post-tensioned slabs, structural steel elements, podium waterproofing, and exterior envelope civil interfaces.",
        status: "Proposed Package Framework"
      },
      {
        id: "arch-interiors",
        title: "Architecture & Interiors",
        scope: "Architectural coordination, finishes, common areas, tenant interfaces and design implementation.",
        detail: "Coordination of architectural floor layouts, grand entrance lobbies, lift lobbies, public circulation, high-performance exterior curtain walls, acoustic ceilings, and core-and-shell tenant interfaces.",
        status: "Proposed Package Framework"
      },
      {
        id: "electrical",
        title: "Electrical Infrastructure",
        scope: "HT/LT distribution, transformers, DG interface, panels, cabling, lighting, earthing and power-quality interfaces.",
        detail: "Management of primary substation high-tension incomers, step-down transformers, synchronized diesel generators, main LT switchgear, busduct risers, lightning protection, and harmonic mitigation.",
        status: "Proposed Package Framework"
      },
      {
        id: "hvac",
        title: "HVAC (Heating, Ventilation & AC)",
        scope: "Central / distributed HVAC systems, ventilation, controls, testing and balancing coordination.",
        detail: "Chilled-water central chiller plant coordination, cooling towers, primary/secondary pumping networks, air handling units (AHUs), variable air volume (VAV) systems, basement jet-fan ventilation, and air balancing.",
        status: "Proposed Package Framework"
      },
      {
        id: "plumbing-fire",
        title: "Plumbing & Fire Protection",
        scope: "Water supply, drainage, firefighting systems, pumps, tanks, hydrant/sprinkler interfaces and statutory coordination.",
        detail: "Underground water reservoirs, domestic and flushing booster pump systems, rainwater harvesting, sewage treatment plant (STP) interfaces, dedicated fire pumps, wet riser/sprinkler networks, and fire NOC compliance.",
        status: "Proposed Package Framework"
      },
      {
        id: "elv-ict",
        title: "ELV & ICT Infrastructure",
        scope: "Structured cabling, data/voice infrastructure, CCTV, access control, public address and low-voltage systems.",
        detail: "High-speed optical backbone, data center server room interfaces, IP video surveillance, biometric turnstile access control, campus public address and emergency voice evacuation.",
        status: "Proposed Package Framework"
      },
      {
        id: "bms-controls",
        title: "BMS & Automation Controls",
        scope: "Building automation, monitoring, integration and interface management across MEP systems.",
        detail: "Campus-wide smart Building Management System interfacing chillers, energy meters, lighting automation, fire alarms, and lift monitoring for energy optimization and proactive facility operations.",
        status: "Proposed Package Framework"
      },
      {
        id: "external-dev",
        title: "External Development",
        scope: "Roads, drainage, utilities, landscaping, site services and external infrastructure interfaces.",
        detail: "Heavy-duty vehicular pavements, storm water drainage network, external site lighting, campus perimeter security, hard/soft landscaping, water bodies, and municipal utility connections.",
        status: "Proposed Package Framework"
      },
      {
        id: "testing-commissioning-pkg",
        title: "Testing & Commissioning",
        scope: "System-wise readiness, integrated testing, commissioning documentation and handover support.",
        detail: "Integrated systems commissioning across power, HVAC, fire alarm, life safety, and BMS; punch-list closeout, as-built sign-offs, and final statutory occupancy handover.",
        status: "Proposed Package Framework"
      }
    ]
  },

  // 8-Stage Delivery Methodology from Page 7
  lifecycleStages: [
    {
      step: "01",
      name: "INITIATE",
      focus: "Objectives, Scope & Governance",
      description: "Define project objectives, stakeholder expectations, project charter, governance framework, and establish foundational project controls.",
      deliverables: ["Project Charter & Execution Plan", "Stakeholder Matrix", "Governance & Authority Framework", "Initial Risk Profile"],
      icon: "Flag"
    },
    {
      step: "02",
      name: "PLAN",
      focus: "WBS, Programme & Strategy",
      description: "Develop the detailed Work Breakdown Structure (WBS), master baseline schedule, procurement packaging strategy, risk registers, and reporting systems.",
      deliverables: ["Master Project Schedule (MPS)", "WBS Dictionary", "Procurement Strategy Document", "Project Control Systems Setup"],
      icon: "Calendar"
    },
    {
      step: "03",
      name: "DESIGN",
      focus: "Coordination & Constructability",
      description: "Coordinate multidisciplinary design deliverables, interface resolution, constructability reviews, value engineering, and statutory approval tracking.",
      deliverables: ["Design Deliverable Matrix", "Constructability Review Reports", "Clash Detection Logs", "RFI Register"],
      icon: "Layers"
    },
    {
      step: "04",
      name: "TENDER",
      focus: "Packaging, Evaluation & Award",
      description: "Support package definition, preparation of tender documents, bidder queries, technical-commercial evaluations, and contractor award readiness.",
      deliverables: ["Tender Document Coordination", "Pre-Bid Query Resolutions", "Comparative Bid Analyses", "Award Recommendations"],
      icon: "FileCheck"
    },
    {
      step: "05",
      name: "PROCURE",
      focus: "Long-Lead & Logistics",
      description: "Track long-lead equipment items, vendor material approvals, manufacturing progress, factory inspection milestones, logistics, and site readiness.",
      deliverables: ["Long-Lead Item Tracker", "Material Approval Records", "Factory Acceptance Test (FAT) Schedule", "Site Storage & Delivery Plan"],
      icon: "Truck"
    },
    {
      step: "06",
      name: "EXECUTE",
      focus: "Work Fronts, Quality & Safety",
      description: "Drive site coordination across contractors, monitor physical work-front readiness, sequence trades, enforce quality ITPs, and manage site HSE.",
      deliverables: ["Daily & Weekly Site Logs", "Look-Ahead Work-Front Plans", "QA/QC Inspection Requests (IRs)", "HSE Audit Records"],
      icon: "Hammer"
    },
    {
      step: "07",
      name: "COMMISSION",
      focus: "Integrated Testing & Snags",
      description: "Supervise pre-commissioning checks, individual system run-up, integrated services testing, BMS validation, and punch-list / snag rectification.",
      deliverables: ["Integrated Testing Protocols", "Pre-Commissioning Checklists", "Digital Snag Register", "System Balancing Reports"],
      icon: "Activity"
    },
    {
      step: "08",
      name: "HANDOVER",
      focus: "As-Builts, O&M & Operations",
      description: "Coordinate compilation of as-built drawings, O&M manuals, warranty certificates, staff operations training, statutory records, and formal handover.",
      deliverables: ["As-Built Drawing Dossier", "Consolidated O&M Manuals", "Statutory Compliance Records", "Final Handover Sign-Off"],
      icon: "CheckCircle"
    }
  ],

  // Control Tower & Reporting Matrix from Page 8
  controlAreas: [
    {
      area: "Programme Control",
      outputs: "Master schedule, look-ahead, critical path, slippage & recovery plan",
      frequency: "Weekly / Monthly",
      icon: "Clock",
      summary: "Guarantees time predictability by analyzing planned vs. actual progress and developing proactive recovery plans."
    },
    {
      area: "Cost Control",
      outputs: "Budget, commitments, variations, certification support, forecast",
      frequency: "Monthly / As required",
      icon: "DollarSign",
      summary: "Maintains budget visibility through strict commitment logging, variation reviews, and cost-to-complete forecasts."
    },
    {
      area: "Procurement Control",
      outputs: "Procurement schedule, approvals, long-lead tracker, delivery status",
      frequency: "Weekly",
      icon: "PackageCheck",
      summary: "Tracks equipment manufacturing and material deliveries to align with on-site work-front readiness."
    },
    {
      area: "Design Control",
      outputs: "Drawing / submittal register, RFIs, approvals, design interfaces",
      frequency: "Weekly",
      icon: "FileCode",
      summary: "Tracks design deliverables, technical queries, and constructability reviews across architectural and engineering consultants."
    },
    {
      area: "Quality Control",
      outputs: "ITPs, inspections, test records, NCR tracker, closure status",
      frequency: "Daily / Weekly",
      icon: "Award",
      summary: "Enforces Inspection & Test Plans, mock-up benchmarks, and systematically resolves Non-Conformance Reports (NCRs)."
    },
    {
      area: "HSE Control",
      outputs: "Observations, incidents, corrective actions, compliance status",
      frequency: "Daily / Weekly",
      icon: "ShieldAlert",
      summary: "Ensures site safety with daily toolbox talks, permit-to-work enforcement for high-risk jobs, and incident tracking."
    },
    {
      area: "Risk Control",
      outputs: "Risk register, mitigation actions, escalation and ownership",
      frequency: "Weekly / Monthly",
      icon: "AlertTriangle",
      summary: "Identifies schedule, cost, and statutory risks early, assigning mitigation owners and escalation pathways."
    },
    {
      area: "Management Reporting",
      outputs: "Executive dashboard, decisions required, key risks and milestones",
      frequency: "Monthly",
      icon: "BarChart3",
      summary: "Distills site complexity into high-impact executive dashboards highlighting critical decisions for developer leadership."
    }
  ],

  // Stakeholder Coordination Ecosystem from Page 9
  stakeholders: [
    {
      stakeholder: "Client / Developer",
      interfaceRole: "Project objectives, decisions, approvals, executive reporting and milestone escalation",
      type: "Primary Owner"
    },
    {
      stakeholder: "Architect / Design Consultants",
      interfaceRole: "Design deliverables, spatial coordination, RFIs, revisions and constructability reviews",
      type: "Design Team"
    },
    {
      stakeholder: "Structural / MEP Consultants",
      interfaceRole: "Engineering interfaces, calculations, drawing approvals, technical clarifications and site support",
      type: "Engineering"
    },
    {
      stakeholder: "Main Contractors",
      interfaceRole: "Programme execution, work fronts, civil quality, site safety, labour resources and progress",
      type: "Execution"
    },
    {
      stakeholder: "Specialist Contractors",
      interfaceRole: "Package interfaces, technical submittals, façade/HVAC/ELV installation and commissioning",
      type: "Specialist Packages"
    },
    {
      stakeholder: "Vendors / Suppliers",
      interfaceRole: "Submittals, sample approvals, factory manufacturing, logistics and on-site delivery tracking",
      type: "Supply Chain"
    },
    {
      stakeholder: "Authorities / Statutory Agencies",
      interfaceRole: "Statutory documentation, inspection readiness, environmental/fire clearance coordination",
      type: "Regulatory"
    },
    {
      stakeholder: "Facility / Operations Team",
      interfaceRole: "Maintainability reviews, commissioning witnessing, operational training, O&M documentation and handover",
      type: "Handover"
    }
  ],

  governancePrinciples: [
    "Clear ownership across all packages and trades",
    "Documented decisions with unambiguous audit trails",
    "Defined escalation matrices for critical bottlenecks",
    "Measurable milestones tied to contractual verification",
    "Transparent reporting giving real project clarity"
  ],

  // Quality & Safety Matrix from Page 10
  qualitySafetyMatrix: {
    quality: [
      { item: "Inspection & Test Plans (ITPs)", desc: "Tailored inspection protocols established before starting each trade package." },
      { item: "Material / Equipment Approval Tracking", desc: "Rigorous submittal and lab test verification prior to site delivery." },
      { item: "Method Statement Review & Implementation", desc: "Constructability and sequencing validation with executing contractors." },
      { item: "Inspection Requests & Test Records", desc: "Digital inspection sign-offs before pouring, closing, or concealing works." },
      { item: "NCR Identification, Tracking & Closure", desc: "Formal Non-Conformance reporting with mandatory root cause analysis." },
      { item: "Mock-ups / Samples / Benchmark Approvals", desc: "Physical on-site benchmarks set for finishes, facades, and MEP works." },
      { item: "Testing, Commissioning & Documentation", desc: "Comprehensive functional testing prior to facility handover." }
    ],
    safety: [
      { item: "Project HSE Plan & Site Safety Systems", desc: "Site-wide health, safety, and environmental execution protocols." },
      { item: "Work-at-Height & High-Risk Activity Controls", desc: "Permit-to-work systems for scaffolding, crane operations, and hot works." },
      { item: "Toolbox Talks & Safety Observations", desc: "Daily morning briefings and continuous hazard identification walks." },
      { item: "Incident / Near-Miss Reporting & Actions", desc: "Proactive tracking of near misses to prevent major site incidents." },
      { item: "Emergency Preparedness & Response", desc: "Drills, medical station coordination, and evacuation protocols." },
      { item: "Contractor Safety Performance Monitoring", desc: "KPI scoring of contractor compliance with financial/contractual teeth." },
      { item: "Compliance Records & Management Reporting", desc: "Auditable statutory safety registers and executive HSE summaries." }
    ]
  },

  // Commercial & Procurement from Page 11
  procurementStages: [
    { stage: "Package Strategy", focus: "Define scopes, interfaces, deliverables and procurement priorities." },
    { stage: "Tender Coordination", focus: "Coordinate tender documents, bidder queries, technical clarifications and comparisons." },
    { stage: "Technical Evaluation", focus: "Track compliance, deviations, approvals and technical recommendations." },
    { stage: "Commercial Interface", focus: "Support commercial comparisons, commitments, variations and certification workflows." },
    { stage: "Long-Lead Management", focus: "Identify critical equipment, approval dates, manufacturing and delivery milestones." },
    { stage: "Logistics & Site Readiness", focus: "Align delivery schedules with work-front availability, storage and installation sequence." },
    { stage: "Change Management", focus: "Document scope changes, impact assessment, approval and implementation status." }
  ],

  // Organisation Structure from Page 12
  organisationRoles: [
    { role: "Project Director / PMC Head", responsibility: "Client leadership, governance, strategic decisions and major escalations." },
    { role: "Project Manager", responsibility: "Overall project coordination, programme, interfaces and delivery management." },
    { role: "Planning / Project Controls", responsibility: "Master schedule, progress measurement, dashboards and recovery planning." },
    { role: "Civil / Architectural Team", responsibility: "Civil, structural, architectural and finishing coordination." },
    { role: "MEP Management Team", responsibility: "Electrical, HVAC, plumbing, fire protection and ELV coordination." },
    { role: "QA/QC Team", responsibility: "Quality plans, inspections, testing, NCRs and documentation." },
    { role: "HSE Team", responsibility: "Safety planning, observations, compliance and corrective actions." },
    { role: "Contracts / Commercial Team", responsibility: "Package administration, commercial tracking and change management." },
    { role: "Procurement / Coordination Team", responsibility: "Vendor follow-up, approvals, logistics and long-lead tracking." }
  ],

  // 14 Key PMC Deliverables from Page 13
  deliverablesList: [
    "Project Execution Plan / PMC procedures",
    "Master Project Schedule and baseline programme",
    "Detailed work breakdown structure and milestone plan",
    "Design / drawing / submittal registers",
    "Tender and procurement trackers",
    "Long-lead item and material approval tracker",
    "Weekly progress reports and look-ahead schedules",
    "Monthly management dashboard",
    "Cost, commitment and variation tracking",
    "Risk and issue registers with mitigation actions",
    "QA/QC inspection and NCR tracking",
    "HSE observations and compliance reporting",
    "Testing & commissioning readiness tracker",
    "Snag / punch-list management",
    "As-built, O&M and handover documentation tracker"
  ],

  // Value Proposition from Page 14
  valueProps: [
    {
      title: "Integrated Management",
      approach: "A single coordination framework connecting design, procurement, construction and commissioning under one roof."
    },
    {
      title: "Client-Focused Governance",
      approach: "Clear reporting, escalation and decision support aligned to client priorities and investment milestones."
    },
    {
      title: "Project Controls",
      approach: "Programme, cost, procurement, risk and quality information structured for timely action before issues compound."
    },
    {
      title: "Multidisciplinary Coordination",
      approach: "Deep technical interfaces across civil, architecture, MEP, ELV, specialist systems and external works."
    },
    {
      title: "Execution Discipline",
      approach: "A relentless focus on work-front readiness, accountability, documentation, and right-first-time closure."
    },
    {
      title: "Handover Readiness",
      approach: "Commissioning, snag closure, as-built records and O&M documentation tracked systematically to final occupancy."
    }
  ]
};
