export interface Project {
  slug: string;
  name: string;
  category: string;
  location: string;
  imageUrl: string;
  status: "Completed" | "Ongoing" | "Upcoming";
  description: string;
  details?: {
    client?: string;
    area?: string;
    floors?: string;
    startDate?: string;
    completionDate?: string;
    consultant?: string;
    challenges?: string;
    highlights?: string[];
  };
  gallery: string[];
}

export const projectsList: Project[] = [
  {
    slug: "psg-ims-r-oncology-block",
    name: "PSG IMS&R Oncology Block",
    category: "Institutional",
    location: "Coimbatore",
    imageUrl: "/completed/p3/images.jpg",
    status: "Completed",
    description: "Advanced specialized oncology therapy unit built to strict medical and nuclear shielding codes, designed for high-density academic and clinical occupancy.",
    details: {
      client: "PSG Institute of Medical Sciences & Research",
      area: "2,20,000 SFT",
      floors: "8",
      startDate: "Aug 2020",
      completionDate: "Feb 2024",
      consultant: "M/s. Mithran Structures (P) Ltd",
      challenges: "Pouring high-density heavy concrete walls (>3.2 g/cm³) for linear accelerator bunker shielding with zero joint defects and strict radiation containment protocols.",
      highlights: [
        "Custom high-density concrete nuclear shielding bunkers",
        "8-story institutional clinical structural layout",
        "Aseptic clean room zoning and laminar flow HVAC systems",
        "Integrated research labs and advanced radiation therapy wards"
      ]
    },
    gallery: [
      "/completed/p3/images.jpg"
    ]
  },
  {
    slug: "lgb-factory-building-2",
    name: "LGB Factory Building 2",
    category: "Industrial",
    location: "Vallam, Chennai",
    imageUrl: "/completed/p1/LGB-CHENNAI-3.jpg",
    status: "Completed",
    description: "Heavy manufacturing plant comprising large-span steel truss setups and high-tonnage concrete floors to support intense automated logistics operations.",
    details: {
      client: "L.G. Balakrishnan & Bros Ltd Corporate",
      area: "1,03,000 SFT",
      floors: "GF (Ground Floor)",
      startDate: "Apr 2024",
      completionDate: "Jan 2026",
      consultant: "M/s. Vesta Architects",
      challenges: "Deploying high-tonnage concrete floors with laser-screed flatness (FM2) and heavy machine foundations designed to withstand severe mechanical vibrations.",
      highlights: [
        "High-span structural steel truss roofing design",
        "FM2 grade laser-screed floor detailing for zero slope tolerance",
        "Rapid structural steel fabrication and erection",
        "Custom high-load loading dock bays and overhead cranes support structures"
      ]
    },
    gallery: [
      "/completed/p1/LGB-CHENNAI-3.jpg"
    ]
  },
  {
    slug: "sankara-eye-hospital",
    name: "Sankara Eye Hospital",
    category: "Healthcare",
    location: "Guntur",
    imageUrl: "/completed/p2/Sankara-Eye-Hospital-Guntur.jpg",
    status: "Completed",
    description: "Large specialized tertiary healthcare hospital featuring standard structural design and advanced eye-care diagnostic setups.",
    details: {
      client: "Sri Kanchi Kamakoti Medical Trust",
      area: "1,03,000 SFT",
      floors: "GF+3 (Ground + 3 Floors)",
      startDate: "Dec 2023",
      completionDate: "Mar 2025",
      consultant: "M/s. SANKAR & ASSOCIATES",
      challenges: "Integrating modular surgical suites, advanced diagnostics departments, and standard healthcare structural requirements across multiple floors.",
      highlights: [
        "Aseptic modular operation theater frameworks",
        "Structured energy-efficient building automation controls",
        "Modern outpatient diagnostics and emergency lobbies",
        "Standard-compliant medical gas distribution grid"
      ]
    },
    gallery: [
      "/completed/p2/Sankara-Eye-Hospital-Guntur.jpg"
    ]
  },
  {
    slug: "global-tech-park",
    name: "Global Tech Park Private Limited (Think Campus)",
    category: "IT Park",
    location: "Bangalore",
    imageUrl: "/completed/p4/GTP-8.jpg",
    status: "Ongoing",
    description: "Massive modern technological office park featuring steel glass frames, post-tensioned flat slabs, and sustainable architectural design.",
    details: {
      client: "Global Tech Park Private Limited",
      area: "10,13,000 SFT",
      floors: "9",
      startDate: "Aug 2021",
      completionDate: "Ongoing",
      consultant: "M/s. Mind Space",
      challenges: "Constructing high-rise double-glazed curtain walls and large-span post-tensioned slabs while managing urban logistics on a massive scale.",
      highlights: [
        "LEED gold standard energy-efficient shell structure",
        "9-story modern steel-glass high-rise corporate blocks",
        "Intricate post-tensioned slab layouts to maximize clear ceiling height",
        "Integrated multi-level basements and massive tech utility grids"
      ]
    },
    gallery: [
      "/completed/p4/GTP-8.jpg"
    ]
  },
  {
    slug: "shriram-122",
    name: "SHRIRAM 122",
    category: "Residential",
    location: "Chennai",
    imageUrl: "/ongoing/p1/Srivision.jpg",
    status: "Ongoing",
    description: "Premium high-density residential towers featuring advanced structural layouts, earthquake-resistant design framing, and landscaping coordinates.",
    details: {
      client: "SHRI VISION ELEVATION PVT LTD",
      area: "13,40,200 SFT",
      floors: "19",
      startDate: "Sep 2025",
      completionDate: "Ongoing",
      consultant: "M/s. Design Realm",
      challenges: "Fast-tracking structural concrete pouring cycles and structural design coordinates across 19 levels using high-efficiency structural shear-wall technology.",
      highlights: [
        "Seismic-zone compliant high-rise structural design",
        "19-story premium residential block framework",
        "High-efficiency structural concrete shear-walls",
        "Modern integrated rainwater systems and green campus layout"
      ]
    },
    gallery: [
      "/ongoing/p1/Srivision.jpg"
    ]
  },
  {
    slug: "aravind-eye-hospital",
    name: "ARAVIND EYE HOSPITAL",
    category: "Healthcare",
    location: "Salem",
    imageUrl: "/completed/p5/Aravind_Coimbatore-copy.jpg",
    status: "Completed",
    description: "Multi-story specialized medical facility with custom infection-control HVAC layouts, clean room surgery rooms, and diagnostic wards.",
    details: {
      client: "GROVEL TRUST ARAVIND EYE HOSPITAL",
      area: "1,40,700 SFT",
      floors: "8",
      startDate: "Feb 2024",
      completionDate: "Mar 2025",
      consultant: "M/s. Design Collaborative Pvt.Ltd",
      challenges: "Integrating standard surgical air sterilization codes, medical pipeline pathways, and electrical backup rooms across an 8-story clinical tower block.",
      highlights: [
        "Aseptic clean room surgical suites and modules",
        "8-story specialized clinical layout framework",
        "Energy-efficient centralized medical systems control",
        "Rigid healthcare-grade safety containment compliance standards"
      ]
    },
    gallery: [
      "/completed/p5/Aravind_Coimbatore-copy.jpg"
    ]
  }
];

