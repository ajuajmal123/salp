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

export const featuredProjectsList: Project[] = [
  {
    "slug": "psg-ims-r-oncology-block",
    "name": "PSG IMS&R Oncology Block",
    "category": "Institutional",
    "location": "Coimbatore",
    "imageUrl": "/completed/p3/images.jpg",
    "status": "Completed",
    "description": "Advanced specialized oncology therapy unit built to strict medical and nuclear shielding codes, designed for high-density academic and clinical occupancy.",
    "details": {
      "client": "PSG Institute of Medical Sciences & Research",
      "area": "2,20,000 SFT",
      "floors": "8",
      "startDate": "Aug 2020",
      "completionDate": "Feb 2024",
      "consultant": "M/s. Mithran Structures (P) Ltd",
      "challenges": "Pouring high-density heavy concrete walls (>3.2 g/cm³) for linear accelerator bunker shielding with zero joint defects and strict radiation containment protocols.",
      "highlights": [
        "Custom high-density concrete nuclear shielding bunkers",
        "8-story institutional clinical structural layout",
        "Aseptic clean room zoning and laminar flow HVAC systems",
        "Integrated research labs and advanced radiation therapy wards"
      ]
    },
    "gallery": [
      "/completed/p3/images.jpg"
    ]
  },
  {
    "slug": "lgb-factory-building-2",
    "name": "LGB Factory Building 2",
    "category": "Industrial",
    "location": "Vallam, Chennai",
    "imageUrl": "/completed/p1/LGB-CHENNAI-3.jpg",
    "status": "Completed",
    "description": "Heavy manufacturing plant comprising large-span steel truss setups and high-tonnage concrete floors to support intense automated logistics operations.",
    "details": {
      "client": "L.G. Balakrishnan & Bros Ltd Corporate",
      "area": "1,03,000 SFT",
      "floors": "GF (Ground Floor)",
      "startDate": "Apr 2024",
      "completionDate": "Jan 2026",
      "consultant": "M/s. Vesta Architects",
      "challenges": "Deploying high-tonnage concrete floors with laser-screed flatness (FM2) and heavy machine foundations designed to withstand severe mechanical vibrations.",
      "highlights": [
        "High-span structural steel truss roofing design",
        "FM2 grade laser-screed floor detailing for zero slope tolerance",
        "Rapid structural steel fabrication and erection",
        "Custom high-load loading dock bays and overhead cranes support structures"
      ]
    },
    "gallery": [
      "/completed/p1/LGB-CHENNAI-3.jpg"
    ]
  },
  {
    "slug": "sankara-eye-hospital",
    "name": "Sankara Eye Hospital",
    "category": "Healthcare",
    "location": "Guntur",
    "imageUrl": "/completed/p2/Sankara-Eye-Hospital-Guntur.jpg",
    "status": "Completed",
    "description": "Large specialized tertiary healthcare hospital featuring standard structural design and advanced eye-care diagnostic setups.",
    "details": {
      "client": "Sri Kanchi Kamakoti Medical Trust",
      "area": "1,03,000 SFT",
      "floors": "GF+3 (Ground + 3 Floors)",
      "startDate": "Dec 2023",
      "completionDate": "Mar 2025",
      "consultant": "M/s. SANKAR & ASSOCIATES",
      "challenges": "Integrating modular surgical suites, advanced diagnostics departments, and standard healthcare structural requirements across multiple floors.",
      "highlights": [
        "Aseptic modular operation theater frameworks",
        "Structured energy-efficient building automation controls",
        "Modern outpatient diagnostics and emergency lobbies",
        "Standard-compliant medical gas distribution grid"
      ]
    },
    "gallery": [
      "/completed/p2/Sankara-Eye-Hospital-Guntur.jpg"
    ]
  },
  {
    "slug": "global-tech-park",
    "name": "Global Tech Park Private Limited (Think Campus)",
    "category": "IT Park",
    "location": "Bangalore",
    "imageUrl": "/completed/p4/GTP-8.jpg",
    "status": "Ongoing",
    "description": "Massive modern technological office park featuring steel glass frames, post-tensioned flat slabs, and sustainable architectural design.",
    "details": {
      "client": "Global Tech Park Private Limited",
      "area": "10,13,000 SFT",
      "floors": "9",
      "startDate": "Aug 2021",
      "completionDate": "Ongoing",
      "consultant": "M/s. Mind Space",
      "challenges": "Constructing high-rise double-glazed curtain walls and large-span post-tensioned slabs while managing urban logistics on a massive scale.",
      "highlights": [
        "LEED gold standard energy-efficient shell structure",
        "9-story modern steel-glass high-rise corporate blocks",
        "Intricate post-tensioned slab layouts to maximize clear ceiling height",
        "Integrated multi-level basements and massive tech utility grids"
      ]
    },
    "gallery": [
      "/completed/p4/GTP-8.jpg"
    ]
  },
  {
    "slug": "shriram-122",
    "name": "SHRIRAM 122",
    "category": "Residential",
    "location": "Chennai",
    "imageUrl": "/ongoing/p1/Srivision.jpg",
    "status": "Ongoing",
    "description": "Premium high-density residential towers featuring advanced structural layouts, earthquake-resistant design framing, and landscaping coordinates.",
    "details": {
      "client": "SHRI VISION ELEVATION PVT LTD",
      "area": "13,40,200 SFT",
      "floors": "19",
      "startDate": "Sep 2025",
      "completionDate": "Ongoing",
      "consultant": "M/s. Design Realm",
      "challenges": "Fast-tracking structural concrete pouring cycles and structural design coordinates across 19 levels using high-efficiency structural shear-wall technology.",
      "highlights": [
        "Seismic-zone compliant high-rise structural design",
        "19-story premium residential block framework",
        "High-efficiency structural concrete shear-walls",
        "Modern integrated rainwater systems and green campus layout"
      ]
    },
    "gallery": [
      "/ongoing/p1/Srivision.jpg"
    ]
  },
  {
    "slug": "aravind-eye-hospital",
    "name": "ARAVIND EYE HOSPITAL",
    "category": "Healthcare",
    "location": "Salem",
    "imageUrl": "/completed/p5/Aravind_Coimbatore-copy.jpg",
    "status": "Completed",
    "description": "Multi-story specialized medical facility with custom infection-control HVAC layouts, clean room surgery rooms, and diagnostic wards.",
    "details": {
      "client": "GROVEL TRUST ARAVIND EYE HOSPITAL",
      "area": "1,40,700 SFT",
      "floors": "8",
      "startDate": "Feb 2024",
      "completionDate": "Mar 2025",
      "consultant": "M/s. Design Collaborative Pvt.Ltd",
      "challenges": "Integrating standard surgical air sterilization codes, medical pipeline pathways, and electrical backup rooms across an 8-story clinical tower block.",
      "highlights": [
        "Aseptic clean room surgical suites and modules",
        "8-story specialized clinical layout framework",
        "Energy-efficient centralized medical systems control",
        "Rigid healthcare-grade safety containment compliance standards"
      ]
    },
    "gallery": [
      "/completed/p5/Aravind_Coimbatore-copy.jpg"
    ]
  }
];

export const projectsList: Project[] = [
  {
    "slug": "sindhoor-pushpavanam",
    "name": "SINDHOOR PUSHPAVANAM",
    "category": "Residential",
    "location": "CHENNAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "GREAT HEIGHTS DEVELOPERS LLP",
      "area": "87500 SFT",
      "floors": "9 + STILT",
      "startDate": "NOV’ 2017",
      "completionDate": "SEP’2019",
      "consultant": "M/s. Anbu & Faizal"
    },
    "gallery": []
  },
  {
    "slug": "ms-nivasan-homes-pvt-ltd-nivasan-springs-1",
    "name": "M/s. NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "NIVASAN HOMES PVT LTD",
      "area": "27000 SFT",
      "floors": "4 fLOOER & STILT",
      "startDate": "Dec’ 2019",
      "completionDate": "SEP' 2021",
      "consultant": "M/s.. Vesta Architects"
    },
    "gallery": []
  },
  {
    "slug": "akshaya-tango",
    "name": "AKSHAYA TANGO",
    "category": "Residential",
    "location": "CHENNAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "AKSHAYA PVT LTD",
      "area": "552000 SFT",
      "floors": "13",
      "startDate": "APR’ 2014",
      "completionDate": "SEP’ 2020",
      "consultant": "M/s. Venkataraman Associates"
    },
    "gallery": []
  },
  {
    "slug": "foundation-one-shree",
    "name": "FOUNDATION ONE “SHREE”",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "FOUNDATION ONE INFRASTRUCTURES PVT LTD",
      "area": "134000 SFT",
      "floors": "11 + B + STILT",
      "startDate": "APR’ 2014",
      "completionDate": "SEP’ 2017",
      "consultant": "M/s.RSP Design Consultants (India) Private Limited"
    },
    "gallery": []
  },
  {
    "slug": "saradha-greens",
    "name": "SARADHA GREENS –",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "NIVASAN HOMES PVT LTD",
      "area": "39000 SFT",
      "floors": "2",
      "startDate": "Nov’ 2019",
      "completionDate": "MAR’ 2022",
      "consultant": "M/s. ARUN & ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "sindur-pristine",
    "name": "SINDUR PRISTINE",
    "category": "Residential",
    "location": "CHENNAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "GREAT HIGHTS DEVELOPERS LLP",
      "area": "55500 SFT",
      "floors": "4",
      "startDate": "Oct’ 2019",
      "completionDate": "FEB’ 2022",
      "consultant": "M/s. Anbu & Faizal"
    },
    "gallery": []
  },
  {
    "slug": "blue-haven-phase-ii",
    "name": "BLUE HAVEN PHASE II",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "NIVASAN HOMES PVT LTD",
      "area": "20000 SFT",
      "floors": "4 + GROUND",
      "startDate": "DEC’ 2012",
      "completionDate": "NOV’ 2014",
      "consultant": "M/s.Inner Space Architect"
    },
    "gallery": []
  },
  {
    "slug": "psg-institute-of-medical-sciences-research",
    "name": "PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH",
      "area": "285600 SFT",
      "floors": "8 +GROUND",
      "startDate": "MAR’ 2016",
      "completionDate": "NOV’ 2017",
      "consultant": "M/s. Mithran Structures (P) Ltd."
    },
    "gallery": []
  },
  {
    "slug": "parsn-antara",
    "name": "PARSN ANTARA",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "ANTARA PRASN GROUPS",
      "area": "211000 SFT",
      "floors": "4 + GF",
      "startDate": "OCT’2007",
      "completionDate": "OCT’2009",
      "consultant": "M/s.Rajeev Shah Associates"
    },
    "gallery": []
  },
  {
    "slug": "parsn-keystone",
    "name": "PARSN KEYSTONE",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "ANTARA PRASN GROUPS",
      "area": "211000 SFT",
      "floors": "4",
      "startDate": "OCT’2007",
      "completionDate": "OCT’2009",
      "consultant": "M/s.Rajeev Shah Associates"
    },
    "gallery": []
  },
  {
    "slug": "apartment-building-govel-trust",
    "name": "APARTMENT BUILDING – GOVEL TRUST",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "GOVEL TRUST",
      "area": "25000 SFT",
      "floors": "2 + GROUND",
      "startDate": "SEP’2008",
      "completionDate": "OCT’2009",
      "consultant": "M/s. Gowtham Architects"
    },
    "gallery": []
  },
  {
    "slug": "cri-pumps-private-limited",
    "name": "CRI PUMPS PRIVATE LIMITED",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "CRI PUMPS PRIVATE LIMITED",
      "area": "44200 SFT",
      "floors": "GF",
      "startDate": "DEC’ 2018",
      "completionDate": "SEP'2019",
      "consultant": "M/s. Mithran Structures (P) Ltd."
    },
    "gallery": []
  },
  {
    "slug": "sri-srinivasa-textiles",
    "name": "SRI SRINIVASA TEXTILES",
    "category": "Industrial",
    "location": "TIRPUR",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "SRI SRINIVASA TEXTILES",
      "area": "24000 SFT",
      "floors": "GF",
      "startDate": "Aug’ 2019",
      "completionDate": "SEP’ 2020",
      "consultant": "Ms/. Vesta Architects"
    },
    "gallery": []
  },
  {
    "slug": "propel-industries-private-limited",
    "name": "PROPEL INDUSTRIES PRIVATE LIMITED",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "PROPEL INDUSTRIES PRIVATE LIMITED",
      "area": "25800 SFT",
      "floors": "GF + 1 FLOOR",
      "startDate": "AUG’ 2017",
      "completionDate": "SEP’ 2020",
      "consultant": "M/s. KSM Architecture"
    },
    "gallery": []
  },
  {
    "slug": "lgbalakrishnan-bros-limited",
    "name": "L.G.BALAKRISHNAN & BROS LIMITED",
    "category": "Industrial",
    "location": "CHENNAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "L.G.BALAKRISHNAN & BROS LIMITED",
      "area": "125000 SFT",
      "floors": "GF",
      "startDate": "FEB’ 2018",
      "completionDate": "SEP’ 2019",
      "consultant": "M/s. PTK Architects"
    },
    "gallery": []
  },
  {
    "slug": "ms-cs-spinners-pvt-ltd",
    "name": "M/s. CS SPINNERS PVT LTD",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "M/s. CS SPINNERS PVT LTD",
      "area": "126000 SFT",
      "floors": "GF",
      "startDate": "NOV’ 2017",
      "completionDate": "SEP’ 2019",
      "consultant": "M/s. Vesta Architect"
    },
    "gallery": []
  },
  {
    "slug": "ms-revantha-services-ltd",
    "name": "M/s. REVANTHA SERVICES LTD",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "M/s. REVANTHA SERVICES LTD",
      "area": "85500 SFT",
      "floors": "GF",
      "startDate": "AUG’ 2017",
      "completionDate": "SEP’ 2018",
      "consultant": "M/s. Bharath & Associates"
    },
    "gallery": []
  },
  {
    "slug": "l-g-balakrishnan-bros-ltd",
    "name": "L G BALAKRISHNAN & BRO’s LTD",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "L G BALAKRISHNAN & BRO’s LTD",
      "area": "97000 SFT",
      "floors": "GF",
      "startDate": "MAR’ 2018",
      "completionDate": "NOV’ 2018",
      "consultant": "Client Engineer"
    },
    "gallery": []
  },
  {
    "slug": "tharun-balaji-spinners",
    "name": "THARUN BALAJI SPINNERS",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "THARUN BALAJI SPINNERS",
      "area": "82000 SFT",
      "floors": "GF",
      "startDate": "OCT’ 2016",
      "completionDate": "SEP’ 2017",
      "consultant": "Ms/. Vesta Architects"
    },
    "gallery": []
  },
  {
    "slug": "bradken-india-private-limited",
    "name": "BRADKEN INDIA PRIVATE LIMITED",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "BRADKEN INDIA PRIVATE LIMITED",
      "area": "12700 SFT",
      "floors": "GF",
      "startDate": "AUG’ 2016",
      "completionDate": "NOV '2017",
      "consultant": "M.Dharmalingam Associate"
    },
    "gallery": []
  },
  {
    "slug": "sakthi-gear-products",
    "name": "SAKTHI GEAR PRODUCTS",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "SAKTHI GEAR PRODUCTS",
      "area": "34700 SFT",
      "floors": "GF",
      "startDate": "SEP’2015",
      "completionDate": "SEP’ 2016",
      "consultant": "Ms/. Vesta Architects"
    },
    "gallery": []
  },
  {
    "slug": "the-echo-point-plaza",
    "name": "THE ECHO POINT – PLAZA",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "NIVASAN HOMES PVT LTD",
      "area": "89000 SFT",
      "floors": "5",
      "startDate": "JAN’ 2019",
      "completionDate": "MAR' 2022",
      "consultant": "Ms/. Vesta Architects"
    },
    "gallery": []
  },
  {
    "slug": "akg-india-pvt-ltd",
    "name": "AKG INDIA PVT LTD",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "AKG INDIA PVT LTD",
      "area": "61000 SFT",
      "floors": "GF",
      "startDate": "MAY’2011",
      "completionDate": "OCT’2012",
      "consultant": "M/s.M.Dharmalingam Associate"
    },
    "gallery": []
  },
  {
    "slug": "mscodissia-intech-technology-centre",
    "name": "M/s.CODISSIA INTECH TECHNOLOGY CENTRE",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "CODISSIA INTECH TECHNOLOGY CENTRE",
      "area": "81000 SFT",
      "floors": "GF",
      "startDate": "JUN’2007",
      "completionDate": "OCT’2008",
      "consultant": "M/s. Gayathri and Namith Architects (P) Ltd"
    },
    "gallery": []
  },
  {
    "slug": "marudhamalai-industrial-logistics-park-coimbatore-by",
    "name": "Marudhamalai Industrial & Logistics Park, Coimbatore (by)",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "TVS INDUSTRIAL & LOGISTICS PARKS PVT LTD",
      "area": "384500 SFT",
      "floors": "GF",
      "startDate": "DEC’ 2019",
      "completionDate": "OCT’ 2021",
      "consultant": "M/ s Tata Consulting Engineers Pvt Ltd"
    },
    "gallery": []
  },
  {
    "slug": "saradha-greens-2",
    "name": "SARADHA GREENS –",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "NIVASAN HOMES PVT LTD",
      "area": "7800 SFT",
      "floors": "3",
      "startDate": "NOV’ 2019",
      "completionDate": "JUL'2022",
      "consultant": "M/s. ARUN & ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "bull-machines-pvt-ltd-suvasam-20",
    "name": "BULL MACHINES PVT LTD-SUVASAM 2.0",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "BULL MACHINES PVT LTD-SUVASAM 2.0",
      "area": "44000 SFT",
      "floors": "GF",
      "startDate": "MAR’ 2019",
      "completionDate": "JUN '2020",
      "consultant": "M/s. SG Structural Engineers"
    },
    "gallery": []
  },
  {
    "slug": "snf-components-private-limited",
    "name": "SNF COMPONENTS PRIVATE LIMITED",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "SNF COMPONENTS PRIVATE LIMITED",
      "area": "58000 SFT",
      "floors": "GF",
      "startDate": "AUG’ 2018",
      "completionDate": "OCT’ 2019",
      "consultant": "M/s. SG Structural Engineers"
    },
    "gallery": []
  },
  {
    "slug": "lgbalakrishnan-bros-limited-2",
    "name": "L.G.BALAKRISHNAN & BROS LIMITED",
    "category": "Industrial",
    "location": "ANNUR",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "L.G.BALAKRISHNAN & BROS LIMITED",
      "area": "15000 SFT",
      "floors": "GF+1 FLOOR",
      "startDate": "JUN’ 2018",
      "completionDate": "OCT’ 2018",
      "consultant": "Ms/. Vesta Architects"
    },
    "gallery": []
  },
  {
    "slug": "decathlon-sports-india-pvt-ltd",
    "name": "DECATHLON SPORTS INDIA PVT LTD",
    "category": "Commercial",
    "location": "BANGALORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "DECATHLON SPORTS INDIA PVT LTD",
      "area": "23000 SFT",
      "floors": "GF",
      "startDate": "APR’2014",
      "completionDate": "OCT’ 2014",
      "consultant": "M/s. Design Forum India Pvt Ltd."
    },
    "gallery": []
  },
  {
    "slug": "vasanth-co",
    "name": "VASANTH & CO",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "VASANTH & CO",
      "area": "21000 SFT",
      "floors": "3",
      "startDate": "JUN’ 2013",
      "completionDate": "OCT’ 2014",
      "consultant": "M/s. Yellow Architect"
    },
    "gallery": []
  },
  {
    "slug": "super-spinning-mills-limited",
    "name": "SUPER SPINNING MILLS LIMITED",
    "category": "Industrial",
    "location": "HINDUPUR",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "SUPER SPINNING MILLS LIMITED",
      "area": "225000 SFT",
      "floors": "GF",
      "startDate": "APR’ 2006",
      "completionDate": "OCT’ 2007",
      "consultant": "M/S. Sankar & Associates"
    },
    "gallery": []
  },
  {
    "slug": "drmanoharan-hospital",
    "name": "DR.MANOHARAN-HOSPITAL",
    "category": "Healthcare",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "DR.MANOHARAN-HOSPITAL , DESIGN FORUM INDIA PVT LTD",
      "area": "35000 SFT",
      "floors": "3",
      "startDate": "JUN'2018",
      "completionDate": "OCT'2022",
      "consultant": "M/s. Design Forum India Private Limited"
    },
    "gallery": []
  },
  {
    "slug": "psg-institute-of-medical-sciences-research-2",
    "name": "PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH",
    "category": "Institutional",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH",
      "area": "845000 SFT",
      "floors": "8+2B+GF",
      "startDate": "FEB’ 2015",
      "completionDate": "SEP’ 2019",
      "consultant": "M/s. S.D.Sharma Associates"
    },
    "gallery": []
  },
  {
    "slug": "psg-institute-of-medical-sciences-research-3",
    "name": "PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH",
    "category": "Healthcare",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH",
      "area": "845000 SFT",
      "floors": "8+2B+GF",
      "startDate": "FEB’ 2015",
      "completionDate": "SEP’ 2019",
      "consultant": "M/s. S.D.Sharma Associates"
    },
    "gallery": []
  },
  {
    "slug": "psg-institute-of-medical-sciences-research-ladies-and-gents-hostel",
    "name": "PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH (LADIES AND GENTS HOSTEL)",
    "category": "Institutional",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH",
      "area": "285600 SFT",
      "floors": "8",
      "startDate": "MAR’ 2016",
      "completionDate": "NOV’ 2017",
      "consultant": "M/s. Mithran Structures (P) Ltd."
    },
    "gallery": []
  },
  {
    "slug": "kfi-the-school",
    "name": "KFI-THE SCHOOL",
    "category": "Institutional",
    "location": "CHENNAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "THE SCHOOL KRISHNAMURTI",
      "area": "55500 SFT",
      "floors": "2",
      "startDate": "JUN’ 2017",
      "completionDate": "SEP’ 2018",
      "consultant": "M/s. Green Evolution"
    },
    "gallery": []
  },
  {
    "slug": "saptharishi-prasanna-complex",
    "name": "SAPTHARISHI PRASANNA COMPLEX",
    "category": "Commercial",
    "location": "CHENNAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "SAPTHARISHI PRASANNA",
      "area": "30000 SFT",
      "floors": "4",
      "startDate": "MAR’ 2013",
      "completionDate": "NOV’ 2014",
      "consultant": "M/s.Vybogam"
    },
    "gallery": []
  },
  {
    "slug": "arputham-pillai-complex",
    "name": "ARPUTHAM PILLAI COMPLEX",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "ARPUTHAM PILLAI",
      "area": "16000 SFT",
      "floors": "4",
      "startDate": "MAY’ 2013",
      "completionDate": "NOV’ 2014",
      "consultant": "M/s. Prabu"
    },
    "gallery": []
  },
  {
    "slug": "arjun-college-of-technology",
    "name": "ARJUN COLLEGE OF TECHNOLOGY",
    "category": "Institutional",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "ARJUN COLLEGE OF ENGINEERING",
      "area": "100000 SFT",
      "floors": "3",
      "startDate": "OCT’2012",
      "completionDate": "NOV’ 2014",
      "consultant": "Client Engineer"
    },
    "gallery": []
  },
  {
    "slug": "pacifica-aurum-villas",
    "name": "PACIFICA AURUM VILLAS",
    "category": "Residential",
    "location": "CHENNAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "PACIFICA AURUM VILLAS",
      "area": "688000 SFT",
      "floors": "2",
      "startDate": "MAY’ 2013",
      "completionDate": "Nov’ 2014",
      "consultant": "M/s.Pacifica Chennai Project Infrastructure CO pvt Ltd."
    },
    "gallery": []
  },
  {
    "slug": "international-aerospace-manufacturing",
    "name": "INTERNATIONAL AEROSPACE MANUFACTURING",
    "category": "Industrial",
    "location": "HOSUR",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "INTERNATIONAL AEROSPACE MANUFACTURING PVT",
      "area": "73,000 SFT",
      "floors": "GF + MEZZANINE FLOORS",
      "startDate": "JUN’ 2023",
      "completionDate": "MAY’ 2024",
      "consultant": "‘Besten Engineers & Consultants India Private Limited"
    },
    "gallery": []
  },
  {
    "slug": "hotel-rajpark-p-ltd",
    "name": "HOTEL RAJPARK (P) LTD",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "HOTEL RAJPARK (P) LTD",
      "area": "320000 SFT",
      "floors": "8+2B+GF",
      "startDate": "MAY'2019",
      "completionDate": "FEB’ 2023",
      "consultant": "M/s. V.K Thyagarajan & Associates"
    },
    "gallery": []
  },
  {
    "slug": "icon-apartments",
    "name": "ICON APARTMENTS",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "SYNCHRON DEVELOPERS PVT LTD",
      "area": "88000 SFT",
      "floors": "9 + B +STILT",
      "startDate": "OCT’ 2016",
      "completionDate": "MAY’ 2019",
      "consultant": "M/s. Aparajithan"
    },
    "gallery": []
  },
  {
    "slug": "cosmik-industry",
    "name": "COSMIK INDUSTRY",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "COSMIK INDUSTRY",
      "area": "57000 SFT",
      "floors": "GF",
      "startDate": "FEB’ 2014",
      "completionDate": "MAY’ 2015",
      "consultant": "M/s. Sundar Sundaram Architects"
    },
    "gallery": []
  },
  {
    "slug": "lgb-corporate-office-building",
    "name": "LGB CORPORATE OFFICE BUILDING,",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "L.G BALAKRISHNAN & BROS LTD CORPORATE",
      "area": "78,800 SFT",
      "floors": "2F +1B+GF",
      "startDate": "MAR'2023",
      "completionDate": "MAR'2025",
      "consultant": "Ms/. Vesta Architects"
    },
    "gallery": []
  },
  {
    "slug": "secan-engineering",
    "name": "SECAN ENGINEERING",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "SECAN ENGINEERING TECHNOLOGY LTD",
      "area": "44,000 SFT",
      "floors": "GF + MEZZANINE FLOORS",
      "startDate": "NOV’ 2023",
      "completionDate": "MAR'2025",
      "consultant": "M/s. Anusamm Consultants"
    },
    "gallery": []
  },
  {
    "slug": "lgb-canteen-block-and-factory-building-3",
    "name": "LGB CANTEEN BLOCK AND FACTORY BUILDING 3",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "L.G BALAKRISHNAN & BROS LTD CORPORATE",
      "area": "8000+97000 SFT",
      "floors": "2+1 +TERRACE GF",
      "startDate": "DEC’ 2023",
      "completionDate": "MAR'2025",
      "consultant": "Ms/. Vesta Architects"
    },
    "gallery": []
  },
  {
    "slug": "perfect-engineers",
    "name": "PERFECT ENGINEERS",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "PERFECT ENGINEERS",
      "area": "103200 SFT",
      "floors": "GF",
      "startDate": "AUG’2016",
      "completionDate": "MAR’2018",
      "consultant": "M/s. Taamaesek Engineering"
    },
    "gallery": []
  },
  {
    "slug": "kumaraguru-college-of-technology",
    "name": "KUMARAGURU COLLEGE OF TECHNOLOGY",
    "category": "Institutional",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "KUMARAGURU COLLEGE OF TECHNOLOGY",
      "area": "97000 SFT",
      "floors": "3",
      "startDate": "NOV’2011",
      "completionDate": "MAR’2013",
      "consultant": "M/s. PTK Architects"
    },
    "gallery": []
  },
  {
    "slug": "msdj-academy-for-managerial-excellence",
    "name": "M/s.D.J. ACADEMY FOR MANAGERIAL EXCELLENCE",
    "category": "Institutional",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "D.J. ACADEMY FOR MANAGERIAL EXCELLENCE",
      "area": "21000 SFT",
      "floors": "2 & 3",
      "startDate": "MAR’ 2006",
      "completionDate": "MAR’2007",
      "consultant": "Client Engineer"
    },
    "gallery": []
  },
  {
    "slug": "srm-institute-of-science-and-technology",
    "name": "SRM INSTITUTE OF SCIENCE AND TECHNOLOGY",
    "category": "Institutional",
    "location": "CHENNAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "SRM INSTITUTE OF SCIENCE AND TECHNOLOGY",
      "area": "150,000 SFT",
      "floors": "5 + TERRACE+GF",
      "startDate": "DEC’ 2022",
      "completionDate": "MAR’ 2024",
      "consultant": "M/S. FEEL & BARI"
    },
    "gallery": []
  },
  {
    "slug": "aqua-flow",
    "name": "AQUA FLOW",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "CODISSIA INDUSTRIAL PARK LTD",
      "area": "53940 SFT",
      "floors": "GF",
      "startDate": "FEB’ 2021",
      "completionDate": "MAR’ 2022",
      "consultant": "M/s. Comten Consulting"
    },
    "gallery": []
  },
  {
    "slug": "bs-surgicare-india-pvt-ltd",
    "name": "BS SURGICARE INDIA PVT LTD",
    "category": "Healthcare",
    "location": "OOTY",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "BS SURGICARE INDIA PVT LTD",
      "area": "31000 SFT",
      "floors": "2+GF",
      "startDate": "Feb’ 2019",
      "completionDate": "Mar’ 2021",
      "consultant": "M/s. Cuboid Architecture"
    },
    "gallery": []
  },
  {
    "slug": "pricol-holdings-ltd",
    "name": "PRICOL HOLDINGS LTD",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "PRICOL HOLDINGS LTD",
      "area": "20000 SFT",
      "floors": "1",
      "startDate": "MAY’ 2018",
      "completionDate": "MAR' 2021",
      "consultant": "M/s. Mhetras Design"
    },
    "gallery": []
  },
  {
    "slug": "muruhanandam-complex",
    "name": "MURUHANANDAM COMPLEX",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "Mr MURUHANANDAM",
      "area": "42800 SFT",
      "floors": "3",
      "startDate": "OCT’ 2018",
      "completionDate": "MAR’ 2020",
      "consultant": "M/s. Arun & Associates"
    },
    "gallery": []
  },
  {
    "slug": "ms-govel-trust-aravind-eye-hospital",
    "name": "M/s. GOVEL TRUST, ARAVIND EYE HOSPITAL",
    "category": "Healthcare",
    "location": "CHENNAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "GROVEL TRUST ARAVIND EYE HOSPITAL",
      "area": "195000 SFT",
      "floors": "8",
      "startDate": "JAN’ 2015",
      "completionDate": "MAR’ 2017",
      "consultant": "M/s. Design Collaborative Pvt.Ltd."
    },
    "gallery": []
  },
  {
    "slug": "ms-govel-trust-aravind-eye-hospital-2",
    "name": "M/s. GOVEL TRUST, ARAVIND EYE HOSPITAL",
    "category": "Healthcare",
    "location": "CHENNAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "GROVEL TRUST ARAVIND EYE HOSPITAL",
      "area": "195000 SFT",
      "floors": "10",
      "startDate": "JAN’ 2015",
      "completionDate": "MAR’ 2017",
      "consultant": "M/s. Design Collaborative Pvt.Ltd."
    },
    "gallery": []
  },
  {
    "slug": "nivasan-viveka-enclave",
    "name": "NIVASAN-VIVEKA ENCLAVE",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "NIVASAN HOMES PVT LTD",
      "area": "117000 SFT",
      "floors": "1 + GROUND",
      "startDate": "MAR’ 2015",
      "completionDate": "MAR’ 2017",
      "consultant": "M/s. Sundar Sundaram Architects"
    },
    "gallery": []
  },
  {
    "slug": "vikram-hospital",
    "name": "VIKRAM HOSPITAL",
    "category": "Healthcare",
    "location": "MADURAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "VIKRAM HOSPITAL",
      "area": "90000 SFT",
      "floors": "5+G",
      "startDate": "MAR’ 2009",
      "completionDate": "MAR’ 2011",
      "consultant": "M/s. Cos Consultancy Services"
    },
    "gallery": []
  },
  {
    "slug": "prime-enclave",
    "name": "PRIME ENCLAVE",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "PRIME DEVELOPERS",
      "area": "180000 SFT",
      "floors": "8+G",
      "startDate": "MAR’ 2006",
      "completionDate": "MAR’ 2008",
      "consultant": "M/S. Sankar & Associates"
    },
    "gallery": []
  },
  {
    "slug": "kg-fabriks-limited",
    "name": "KG FABRIKS LIMITED",
    "category": "Industrial",
    "location": "ERODE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "KG FABRIKS LIMITED , SRI KANNAPIRAN MILLS LTD",
      "area": "225000 SFT",
      "floors": "GF",
      "startDate": "JUL’ 2005",
      "completionDate": "MAR’ 2007",
      "consultant": "M/s.Design Forum India Private Limited"
    },
    "gallery": []
  },
  {
    "slug": "adithya-institute-of-technology-academic-building",
    "name": "ADITHYA INSTITUTE OF TECHNOLOGY- ACADEMIC BUILDING",
    "category": "Institutional",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "ADITHYA INSTITUTE OF TECHNOLOGY",
      "area": "37900 SFT",
      "floors": "2+GF",
      "startDate": "JUL’ 2023",
      "completionDate": "MAR'2025",
      "consultant": "Ms/. Vesta Architects"
    },
    "gallery": []
  },
  {
    "slug": "exotic-fruits-pvt-ltd",
    "name": "EXOTIC FRUITS PVT LTD",
    "category": "Industrial",
    "location": "KRISHNAGIRI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "EXOTIC FRUITS PVT LTD",
      "area": "203900 SFT + 35000 SFT",
      "floors": "GF",
      "startDate": "NOV’2010",
      "completionDate": "JUN’2014",
      "consultant": "M/s.Design Forum India Private Limited"
    },
    "gallery": []
  },
  {
    "slug": "classic-towers",
    "name": "CLASSIC TOWERS",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "Mr ANWAR",
      "area": "38000 SFT",
      "floors": "9+GF",
      "startDate": "JUN’2006",
      "completionDate": "JUN’2008",
      "consultant": "M/s.Britto Ilango and Associates"
    },
    "gallery": []
  },
  {
    "slug": "velmurugan-heavy-engineering-industries",
    "name": "VELMURUGAN HEAVY ENGINEERING INDUSTRIES",
    "category": "Industrial",
    "location": "THANJAVUR",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "VELMURUGAN HEAVY ENGINEERING PVT LTD",
      "area": "33,000 SFT",
      "floors": "GF",
      "startDate": "MAY’ 2023",
      "completionDate": "JUN’ 2024",
      "consultant": "Client Engineer"
    },
    "gallery": []
  },
  {
    "slug": "sri-ranganather-valves-controlspltd-unit-ii",
    "name": "Sri Ranganather Valves & Controls(P)Ltd Unit II",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "SRI RANGANATH INDUSTRY (P) LTD",
      "area": "172700SFT",
      "floors": "GF",
      "startDate": "Dec’2018",
      "completionDate": "Jun’ 2022",
      "consultant": "M/s. M. Dharmalingam Associates"
    },
    "gallery": []
  },
  {
    "slug": "cri-pumps-private-limited-2",
    "name": "CRI PUMPS PRIVATE LIMITED",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "CRI PUMPS PRIVATE LIMITED",
      "area": "34000 SFT",
      "floors": "GF",
      "startDate": "Apr’ 2017",
      "completionDate": "Jun’ 2018",
      "consultant": "M/s. Design Tech"
    },
    "gallery": []
  },
  {
    "slug": "psg-staff-quarters",
    "name": "PSG STAFF QUARTERS",
    "category": "Healthcare",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH",
      "area": "51000 SFT",
      "floors": "1&2",
      "startDate": "FEB’ 2016",
      "completionDate": "JUN’ 2017",
      "consultant": "M/s. S.D.Sharma Associates"
    },
    "gallery": []
  },
  {
    "slug": "mark-engineering-works",
    "name": "MARK ENGINEERING WORKS",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "MARK ENGINEERING WORKS",
      "area": "161000 SFT",
      "floors": "GF",
      "startDate": "APR’ 2016",
      "completionDate": "JUN’ 2017",
      "consultant": "Ms/. Vesta Architects"
    },
    "gallery": []
  },
  {
    "slug": "psg-institute-of-technology-applied-research",
    "name": "PSG INSTITUTE OF TECHNOLOGY & APPLIED RESEARCH",
    "category": "Institutional",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "PSG & SONS CHARITIES",
      "area": "75000 SFT",
      "floors": "GROUND FLOOR",
      "startDate": "JUN’ 2015",
      "completionDate": "JUN’ 2017",
      "consultant": "M/s. S.D.Sharma Associates"
    },
    "gallery": []
  },
  {
    "slug": "apartment-building",
    "name": "APARTMENT BUILDING",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH",
      "area": "51000 SFT",
      "floors": "8+ GROUND",
      "startDate": "FEB’ 2016",
      "completionDate": "JUN’ 2017",
      "consultant": "M/s. S.D.Sharma Associates"
    },
    "gallery": []
  },
  {
    "slug": "kpm-commercial-centre",
    "name": "KPM COMMERCIAL CENTRE",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "KP MURUGESAN",
      "area": "14200 SFT",
      "floors": "3+GF",
      "startDate": "FEB’ 2015",
      "completionDate": "JUN’ 2016",
      "consultant": "M/s. S.G.Structural Engineers"
    },
    "gallery": []
  },
  {
    "slug": "nivasan-nivasana-apartment",
    "name": "NIVASAN-NIVASANA APARTMENT",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "NIVASAN HOMES PVT LTD",
      "area": "14000 SFT",
      "floors": "4 +GROUND",
      "startDate": "FEB’ 2015",
      "completionDate": "JUN’ 2016",
      "consultant": "M/s. Jeyakumar Associates"
    },
    "gallery": []
  },
  {
    "slug": "meadows-apartments",
    "name": "MEADOWS APARTMENTS",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "NIVASAN HOMES PVT LTD",
      "area": "116000 SFT",
      "floors": "4 + GROUND",
      "startDate": "MAR’ 2010",
      "completionDate": "JUN’ 2011",
      "consultant": "M/s. Jeyakumar Associates"
    },
    "gallery": []
  },
  {
    "slug": "srivari-prathisht",
    "name": "SRIVARI PRATHISHT",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "Mr KISHORE G.LUND SRIVARI PROPERTIES & DEVELOPERS",
      "area": "156000 SFT",
      "floors": "4 +GROUND",
      "startDate": "APR’ 2007",
      "completionDate": "JUN’ 2009",
      "consultant": "M/s. Edifice, Pramod Balakrishnan"
    },
    "gallery": []
  },
  {
    "slug": "srivari-pranav",
    "name": "SRIVARI PRANAV",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "Mr KISHORE G.LUND SRIVARI PROPERTIES & DEVELOPERS",
      "area": "156000 SFT",
      "floors": "4+GROUND",
      "startDate": "APR’ 2007",
      "completionDate": "JUN’ 2009",
      "consultant": "M/s. Edifice"
    },
    "gallery": []
  },
  {
    "slug": "srivari-anikait",
    "name": "SRIVARI ANIKAIT",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "MR KISHORE G.LUND SRIVARI PROPERTIES & DEVELOPERS",
      "area": "156000 SFT",
      "floors": "4",
      "startDate": "APR’ 2007",
      "completionDate": "JUN’ 2009",
      "consultant": "M/s. Edifice"
    },
    "gallery": []
  },
  {
    "slug": "kpr-mills-limited",
    "name": "KPR MILLS LIMITED",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "KPR MILLS LIMITED",
      "area": "691000 SFT",
      "floors": "GF",
      "startDate": "OCT ‘2010",
      "completionDate": "JUN ‘2011",
      "consultant": "M/s.Design Forum India Private Limited"
    },
    "gallery": []
  },
  {
    "slug": "velammal-cbse-matriculation-school",
    "name": "VELAMMAL CBSE & MATRICULATION SCHOOL",
    "category": "Institutional",
    "location": "KARUR",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "VELAMMAL EDUCATIONAL TRUST",
      "area": "203000 SFT",
      "floors": "3+GF",
      "startDate": "SEP’ 2010",
      "completionDate": "JUL’2013",
      "consultant": "Client Engineer"
    },
    "gallery": []
  },
  {
    "slug": "akshaya-36-carat",
    "name": "AKSHAYA 36 CARAT",
    "category": "Residential",
    "location": "CHENNAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "AKSHAYA PVT LTD",
      "area": "117000 SFT",
      "floors": "10 + GROUND",
      "startDate": "JAN’2011",
      "completionDate": "JUL’2013",
      "consultant": "M/s. Passargard"
    },
    "gallery": []
  },
  {
    "slug": "tvh-ekanta",
    "name": "TVH EKANTA",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "TVH BELICIAA TOWER'S",
      "area": "144000 SFT",
      "floors": "4 + GROUND",
      "startDate": "MAY’2007",
      "completionDate": "JUL’2009",
      "consultant": "M/s. Keerthi Shah Associates"
    },
    "gallery": []
  },
  {
    "slug": "the-ngp-school",
    "name": "The NGP School",
    "category": "Institutional",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "NGP SCHOOL KALAPATTI",
      "area": "81000 SFT",
      "floors": "2+GF",
      "startDate": "JUL’ 2023",
      "completionDate": "JUL’ 2025",
      "consultant": "M/s.INGENIO"
    },
    "gallery": []
  },
  {
    "slug": "lgbalakrishnan-bros-limited-oht",
    "name": "L.G.Balakrishnan & Bros Limited – OHT",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "L.G. BALAKRISHNAN & BRO LIMITED -OHT",
      "area": "215000 Ltr",
      "floors": "GF",
      "startDate": "MAY’ 2022",
      "completionDate": "JUL’ 2023",
      "consultant": "M/s. Innovative Design"
    },
    "gallery": []
  },
  {
    "slug": "motherson-group-of-companies",
    "name": "MOTHERSON GROUP OF COMPANIES",
    "category": "Industrial",
    "location": "CHENNAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "MOTHERSON GROUPS",
      "area": "1,832 Mtr",
      "floors": "GF",
      "startDate": "AUG’ 2021",
      "completionDate": "JUL’ 2022",
      "consultant": "Ms/. Vesta Architects"
    },
    "gallery": []
  },
  {
    "slug": "mark-engineering-works-2",
    "name": "MARK ENGINEERING WORKS",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "MARK ENGINEERING WORKS",
      "area": "95000 SFT",
      "floors": "GF",
      "startDate": "AUG’ 2020",
      "completionDate": "JUL’ 2021",
      "consultant": "Ms/. Vesta Architects"
    },
    "gallery": []
  },
  {
    "slug": "propel-industries-pvt-ltd",
    "name": "PROPEL INDUSTRIES PVT LTD",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "PROPEL INDUSTRIES PVT LTD",
      "area": "36400 SFT",
      "floors": "GF",
      "startDate": "SEP’2017",
      "completionDate": "JUL’ 2018",
      "consultant": "M/s. S.G.Structural Engineers"
    },
    "gallery": []
  },
  {
    "slug": "madras-cements-ltd",
    "name": "MADRAS CEMENTS LTD",
    "category": "Industrial",
    "location": "SALEM",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "MADRAS CEMENTS LTD",
      "area": "5.1 MW",
      "floors": "GF",
      "startDate": "SEP’2010",
      "completionDate": "JAN’2012",
      "consultant": "Client Engineer"
    },
    "gallery": []
  },
  {
    "slug": "gtn-exports-ltd",
    "name": "GTN EXPORTS LTD",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "GTN EXPORTS LTD",
      "area": "152000 SFT",
      "floors": "GF",
      "startDate": "FEB’2009",
      "completionDate": "JAN’2010",
      "consultant": "M/s. M. Dharmalingam Associates"
    },
    "gallery": []
  },
  {
    "slug": "madras-cements-ltd-2",
    "name": "MADRAS CEMENTS LTD",
    "category": "Industrial",
    "location": "CHENGELPET",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "MADRAS CEMENTS LTD",
      "area": "0.7 MTPA",
      "floors": "GF",
      "startDate": "JAN’2007",
      "completionDate": "JAN’2010",
      "consultant": "M/s. Enexco Technologies (India) Ltd"
    },
    "gallery": []
  },
  {
    "slug": "madras-cements-ltd-3",
    "name": "MADRAS CEMENTS LTD",
    "category": "Industrial",
    "location": "HYDERABAD",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "MADRAS CEMENTS LTD",
      "area": "500 MTP",
      "floors": "GF",
      "startDate": "JAN’2007",
      "completionDate": "JAN’2010",
      "consultant": "EEL India Limited"
    },
    "gallery": []
  },
  {
    "slug": "aravind-eye-hospital-2",
    "name": "ARAVIND EYE HOSPITAL",
    "category": "Healthcare",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "GROVEL TRUST ARAVIND EYE HOSPITAL",
      "area": "4,49,000 SFT",
      "floors": "3&6",
      "startDate": "MAR’ 2022",
      "completionDate": "JAN’ 2025",
      "consultant": "M/s. Design Collaborative充分.Ltd"
    },
    "gallery": []
  },
  {
    "slug": "vadamalayan-hospitals-pvt-ltd",
    "name": "VADAMALAYAN HOSPITALS PVT LTD",
    "category": "Healthcare",
    "location": "MADURAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "VADAMALAYAN HOSPITALS PVT LTD",
      "area": "14,100 SFT",
      "floors": "3+GF",
      "startDate": "AUG’ 2022",
      "completionDate": "JAN’ 2024",
      "consultant": "M/s. White edge Architects"
    },
    "gallery": []
  },
  {
    "slug": "aditya-school-hostel-building-phase-ii",
    "name": "ADITYA SCHOOL HOSTEL BUILDING PHASE II",
    "category": "Institutional",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "ADITYA INTERNATIONAL SCHOOL",
      "area": "34000 SFT",
      "floors": "2",
      "startDate": "DEC’ 2019",
      "completionDate": "JAN’ 2021",
      "consultant": "Ms/. Vesta Architects"
    },
    "gallery": []
  },
  {
    "slug": "mepco-schlenk-engineering-college",
    "name": "MEPCO SCHLENK ENGINEERING COLLEGE",
    "category": "Institutional",
    "location": "SIVAKASI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "MEPCO SCHLENK CHARITIES",
      "area": "204400 SFT",
      "floors": "2",
      "startDate": "FEB’ 2018",
      "completionDate": "JAN’ 2020",
      "consultant": "M/s. Trinity Associates"
    },
    "gallery": []
  },
  {
    "slug": "adithya-convention-center-marriage-hall",
    "name": "ADITHYA CONVENTION CENTER & MARRIAGE HALL",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "Mr SUKUMARAN",
      "area": "140000 SFT",
      "floors": "1",
      "startDate": "JAN’ 2016",
      "completionDate": "JAN’ 2018",
      "consultant": "M/s.Sundar Sundaram Architects"
    },
    "gallery": []
  },
  {
    "slug": "adithya-matriculation-school",
    "name": "ADITHYA MATRICULATION SCHOOL",
    "category": "Institutional",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "ADITYA EDUCATIONAL TRUST",
      "area": "100000 SFT",
      "floors": "2",
      "startDate": "MAR’2014",
      "completionDate": "JAN’ 2015",
      "consultant": "M/s.Sundar Sundaram Architects"
    },
    "gallery": []
  },
  {
    "slug": "adithya-cbse-school",
    "name": "ADITHYA CBSE SCHOOL",
    "category": "Institutional",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "ADITYA EDUCATIONAL TRUST",
      "area": "141000 SFT",
      "floors": "2",
      "startDate": "MAR’2014",
      "completionDate": "JAN’ 2015",
      "consultant": "M/s.Sundar Sundaram Architects"
    },
    "gallery": []
  },
  {
    "slug": "new-megala-hostel-at-psg-college-of-arts-and-science",
    "name": "NEW MEGALA HOSTEL AT PSG COLLEGE OF ARTS AND SCIENCE",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "PSG COLLEGE OF ARTS AND SCIENCE HOSTEL'S",
      "area": "117000 SFT",
      "floors": "4+STILT",
      "startDate": "SEP’ 2019",
      "completionDate": "FEB'2021",
      "consultant": "M/s. Mithran Structures (P) Ltd."
    },
    "gallery": []
  },
  {
    "slug": "abode-valley-phase-i-ii-iii",
    "name": "“ABODE VALLEY” – PHASE I, II & III",
    "category": "Residential",
    "location": "CHENNAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "LANCOR HOLDINGS LTD",
      "area": "570000 SFT",
      "floors": "4",
      "startDate": "APR ‘2010",
      "completionDate": "FEB’2012",
      "consultant": "M/s. Nataraj & Venkat Associates"
    },
    "gallery": []
  },
  {
    "slug": "harihar-paradise",
    "name": "HARIHAR PARADISE",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "HARIHAR DWELLINGS (P) LTD",
      "area": "125000 SFT",
      "floors": "4",
      "startDate": "AUG’2009",
      "completionDate": "FEB’2011",
      "consultant": "M/s.Britto Ilango and Associates"
    },
    "gallery": []
  },
  {
    "slug": "schuf-speciality-valves-india-pvt-ltd",
    "name": "SCHUF SPECIALITY VALVES INDIA PVT LTD",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "SCHUF SPECIALITY VALVES INDIA PVT LTD",
      "area": "37000 SFT",
      "floors": "GF",
      "startDate": "OCT’2006",
      "completionDate": "FEB’2008",
      "consultant": "M/S. Sankar & Associates"
    },
    "gallery": []
  },
  {
    "slug": "krishnaveni-carbon",
    "name": "KRISHNAVENI CARBON",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "KRISHNAVENI CARBON PRODUCTS PVTLTD",
      "area": "95000 SFT",
      "floors": "GF",
      "startDate": "Jun’ 2019",
      "completionDate": "FEB’ 2022",
      "consultant": "M/s. M. Dharmalingam Associates"
    },
    "gallery": []
  },
  {
    "slug": "ms-sp-foundation-pvt-ltd-essense-apartments",
    "name": "M/s. S&P FOUNDATION PVT LTD “ESSENSE APARTMENTS”",
    "category": "Residential",
    "location": "CHENNAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "S&P FOUNDATION PVT LTD",
      "area": "265000 SFT",
      "floors": "4 + STILT",
      "startDate": "DEC’ 2015",
      "completionDate": "FEB’ 2018",
      "consultant": "M/s. Semac Consultant Pvt Ltd"
    },
    "gallery": []
  },
  {
    "slug": "ms-s-s-foundations-pavilion",
    "name": "M/s. S & S FOUNDATIONS – PAVILION",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "S & S FOUNDATIONS PVT LTD",
      "area": "17000 SFT",
      "floors": "4 +GROUND",
      "startDate": "JUN’ 2015",
      "completionDate": "FEB’ 2017",
      "consultant": "M/s. Nataraj & Venkat Associates"
    },
    "gallery": []
  },
  {
    "slug": "tvs-emerald-light-house",
    "name": "TVS EMERALD – LIGHT HOUSE",
    "category": "Residential",
    "location": "CHENNAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "EMERALD HAVEN REALTY LTD",
      "area": "425000 SFT",
      "floors": "14",
      "startDate": "FEB’ 2018",
      "completionDate": "FEB '2022",
      "consultant": "R. Chakrapani & Sons"
    },
    "gallery": []
  },
  {
    "slug": "sri-kumaran-hall",
    "name": "SRI KUMARAN HALL",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "Mr SUKUMARAN",
      "area": "30,000 SFT",
      "floors": "GF",
      "startDate": "June 2017",
      "completionDate": "Deccember 2018",
      "consultant": "Ms/. Vesta Architects"
    },
    "gallery": []
  },
  {
    "slug": "sri-krishna-college-of-technology-boys-hostel-2",
    "name": "SRI KRISHNA COLLEGE OF TECHNOLOGY- BOYS HOSTEL 2",
    "category": "Institutional",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "SRI KRISHNA COLLEGE OF TECHNOLOGY",
      "area": "106100 SFT",
      "floors": "3",
      "startDate": "JAN’ 2022",
      "completionDate": "DEC’2022",
      "consultant": "M/s. PTK Project Consultants"
    },
    "gallery": []
  },
  {
    "slug": "ms-nivasan-homes-pvt-ltd-the-echo-point-aavaas",
    "name": "M/s. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "NIVASAN HOMES PVT LTD",
      "area": "115000 SFT",
      "floors": "6",
      "startDate": "JUN’ 2018",
      "completionDate": "DEC’2020",
      "consultant": "M/s.. Vesta Architects"
    },
    "gallery": []
  },
  {
    "slug": "bull-machines-private-limited",
    "name": "BULL MACHINES PRIVATE LIMITED",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "BULL MACHINES PRIVATE LIMITED",
      "area": "57000 SFT",
      "floors": "GF",
      "startDate": "JUN’2015",
      "completionDate": "DEC’2015",
      "consultant": "M/s. S.G.Structural Engineers."
    },
    "gallery": []
  },
  {
    "slug": "velammal-medical-college-hospital",
    "name": "VELAMMAL MEDICAL COLLEGE & HOSPITAL",
    "category": "Healthcare",
    "location": "MADURAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "VELAMMAL MEDICAL COLLEGE & HOSPITAL",
      "area": "714000 SFT",
      "floors": "5",
      "startDate": "NOV’2011",
      "completionDate": "DEC’2013",
      "consultant": "M/s. Bhargao Group Buildpro Technologies"
    },
    "gallery": []
  },
  {
    "slug": "bushido-infotech-private-limited",
    "name": "BUSHIDO INFOTECH PRIVATE LIMITED",
    "category": "IT Park",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "BUSHIDO INFOTECH PRIVATE LIMITED",
      "area": "36000 SFT",
      "floors": "4",
      "startDate": "NOV’2011",
      "completionDate": "DEC’2013",
      "consultant": "M/s.M.Dharmalingam Associates"
    },
    "gallery": []
  },
  {
    "slug": "ms-saroja-velusamy-and-thales-trust",
    "name": "M/s. SAROJA VELUSAMY AND THALES TRUST",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "SSAROJA VELUSAMY AND THALES TRUST",
      "area": "25000 SFT",
      "floors": "3",
      "startDate": "JUN’2011",
      "completionDate": "DEC’2012",
      "consultant": "M/s. Arun & Associates"
    },
    "gallery": []
  },
  {
    "slug": "ms-toyota-anamallais-agencies",
    "name": "M/s. TOYOTA ANAMALLAIS AGENCIES",
    "category": "Commercial",
    "location": "TIRUNELVELI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "TOYOTA ANAMALLAIS AGENCIES",
      "area": "57300 SFT",
      "floors": "GF",
      "startDate": "JAN’2010",
      "completionDate": "DEC’2010",
      "consultant": "Mr. Arivudai Nambi"
    },
    "gallery": []
  },
  {
    "slug": "ms-toyota-anamallais-agencies-2",
    "name": "M/s. TOYOTA ANAMALLAIS AGENCIES",
    "category": "Commercial",
    "location": "MADURAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "TOYOTA ANAMALLAIS AGENCIES",
      "area": "57300 SFT",
      "floors": "GF",
      "startDate": "JAN’2010",
      "completionDate": "DEC’2010",
      "consultant": "Mr. Arivudai Nambi"
    },
    "gallery": []
  },
  {
    "slug": "snr-auditorium",
    "name": "SNR AUDITORIUM",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "SNR SONS CHARITABLE TRUST",
      "area": "116000 SFT",
      "floors": "3",
      "startDate": "AUG '2003",
      "completionDate": "DEC'2005",
      "consultant": "Client Engineer"
    },
    "gallery": []
  },
  {
    "slug": "snr-hall",
    "name": "SNR HALL",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "SNR SONS CHARITABLE TRUST",
      "area": "116000 SFT",
      "floors": "3",
      "startDate": "AUG '2003",
      "completionDate": "DEC'2005",
      "consultant": "Client Engineer"
    },
    "gallery": []
  },
  {
    "slug": "psg-imsr-a-block-extension",
    "name": "PSG IMS&R A-Block Extension",
    "category": "Healthcare",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "PSG INSTITUTE OF MEDICAL SCIENCE AND RESEARCH",
      "area": "204,000 SFT",
      "floors": "8",
      "startDate": "DEC’ 2022",
      "completionDate": "DEC’ 2024",
      "consultant": "M/s. Mithran Structures (P) Ltd."
    },
    "gallery": []
  },
  {
    "slug": "perfect-engineers-phase-ii",
    "name": "PERFECT ENGINEERS PHASE-II",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "PERFECT ENGINEERS",
      "area": "100000 SFT",
      "floors": "GF",
      "startDate": "Mar’ 2020",
      "completionDate": "DEC’ 2021",
      "consultant": "M/s. Perfect Engineers"
    },
    "gallery": []
  },
  {
    "slug": "psg-imsr-kitchen-building",
    "name": "PSG IMSR KITCHEN BUILDING",
    "category": "Healthcare",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH",
      "area": "20000 SFT",
      "floors": "4",
      "startDate": "DEC’ 2019",
      "completionDate": "DEC’ 2020",
      "consultant": "M/s. Mithran Structures (P) Ltd"
    },
    "gallery": []
  },
  {
    "slug": "psg-imsr-kitchen-building-2",
    "name": "PSG IMSR KITCHEN BUILDING",
    "category": "Institutional",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH",
      "area": "20000 SFT",
      "floors": "4",
      "startDate": "DEC’ 2019",
      "completionDate": "DEC’ 2020",
      "consultant": "M/s. Mithran Structures (P) Ltd."
    },
    "gallery": []
  },
  {
    "slug": "global-tech-park-pvt-ltd",
    "name": "GLOBAL TECH PARK PVT LTD",
    "category": "IT Park",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "GLOBAL TECH PARK PVT LTD",
      "area": "233300 SFT",
      "floors": "3",
      "startDate": "DEC’ 2018",
      "completionDate": "DEC’ 2019",
      "consultant": "M/s. Mind Space"
    },
    "gallery": []
  },
  {
    "slug": "aditya-school-hostel-building",
    "name": "ADITYA SCHOOL HOSTEL BUILDING",
    "category": "Institutional",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "Mr ADITYA",
      "area": "37000 SFT",
      "floors": "2",
      "startDate": "NOV’ 2017",
      "completionDate": "DEC’ 2018",
      "consultant": "Ms/. Vesta Architects"
    },
    "gallery": []
  },
  {
    "slug": "shanthamani-spinners",
    "name": "SHANTHAMANI SPINNERS",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "SHANTHAMANI SPINNERS",
      "area": "76400 SFT",
      "floors": "GF",
      "startDate": "JAN’ 2016",
      "completionDate": "DEC’ 2017",
      "consultant": "Client Engineer"
    },
    "gallery": []
  },
  {
    "slug": "lakshmi-narayana-amalgamation",
    "name": "LAKSHMI NARAYANA AMALGAMATION",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "AMALGAMATION PVT LTD",
      "area": "5200 SFT",
      "floors": "1",
      "startDate": "MAY’ 2016",
      "completionDate": "DEC’ 2017",
      "consultant": "C.R. Narayana Rao Consultants Private Limited"
    },
    "gallery": []
  },
  {
    "slug": "solitaire-apartments",
    "name": "SOLITAIRE APARTMENTS",
    "category": "Residential",
    "location": "CHENNAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "S&S FOUNDATION PVT LTD",
      "area": "165500 SFT",
      "floors": "11 +STILT",
      "startDate": "JUN’ 2012",
      "completionDate": "DEC’ 2014",
      "consultant": "M/s. Chettinad Design"
    },
    "gallery": []
  },
  {
    "slug": "ms-ss-foundations-pvt-ltd-ishan-apartments",
    "name": "M/s. S&S FOUNDATIONS PVT LTD “ISHAN APARTMENTS”",
    "category": "Residential",
    "location": "CHENNAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "S&S FOUNDATIONS PVT LTD",
      "area": "80,000 SFT",
      "floors": "11 + GROUND + B",
      "startDate": "MAY’ 2013",
      "completionDate": "DEC’ 2014",
      "consultant": "M/s. Sanjith & Vivek Architects"
    },
    "gallery": []
  },
  {
    "slug": "kg-denim-limited",
    "name": "KG DENIM LIMITED",
    "category": "Industrial",
    "location": "METTUPALAYAM",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "KG DENIM LIMITED",
      "area": "166000 SFT",
      "floors": "GF",
      "startDate": "JUN’ 2004",
      "completionDate": "DEC’ 2005",
      "consultant": "M/s.Design Forum India Private Limited"
    },
    "gallery": []
  },
  {
    "slug": "aravind-eye-hospital-3",
    "name": "ARAVIND EYE HOSPITAL",
    "category": "Healthcare",
    "location": "MADURAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "GROVEL TRUST ARAVIND EYE HOSPITAL",
      "area": "106000 SFT",
      "floors": "5",
      "startDate": "APR’2008",
      "completionDate": "AUG’2009",
      "consultant": "M/s. Auroservice Consultants Private Limited"
    },
    "gallery": []
  },
  {
    "slug": "ms-spine-arthoscopy-and-joint-replacement-centre",
    "name": "M/s. SPINE ARTHOSCOPY AND JOINT REPLACEMENT CENTRE",
    "category": "Healthcare",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "SPINE ARTHOSCOPY AND JOINT REPLACEMENT CENTRE",
      "area": "40000 SFT",
      "floors": "3",
      "startDate": "AUG’2008",
      "completionDate": "AUG’2009",
      "consultant": "M/s. Studio 29"
    },
    "gallery": []
  },
  {
    "slug": "adithya-institute-of-technology",
    "name": "ADITHYA INSTITUTE OF TECHNOLOGY",
    "category": "Institutional",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "ADITYA EDUCATIONAL TRUST",
      "area": "325000 SFT",
      "floors": "4",
      "startDate": "FEB’ 2008",
      "completionDate": "AUG’2009",
      "consultant": "M/s. Jeyakumar Associates"
    },
    "gallery": []
  },
  {
    "slug": "shoeline-palmyra",
    "name": "Shoeline – PALMYRA",
    "category": "Commercial",
    "location": "CHENNAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "Shoeline",
      "area": "26000 SFT",
      "floors": "4",
      "startDate": "Oct’ 2019",
      "completionDate": "Aug’ 2020",
      "consultant": "M/s. Green Evolution"
    },
    "gallery": []
  },
  {
    "slug": "ms-parvathy-agencies",
    "name": "M/S. PARVATHY AGENCIES",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "PARVATHY AGENCIES",
      "area": "27500 SFT",
      "floors": "4",
      "startDate": "Nov’ 2018",
      "completionDate": "Aug’ 2020",
      "consultant": "Ms/. Vesta Architects"
    },
    "gallery": []
  },
  {
    "slug": "vadamalayan-hospital",
    "name": "VADAMALAYAN HOSPITAL",
    "category": "Healthcare",
    "location": "DINDIGUL",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "VADAMALAYAN HOSPITAL (p) LTD.",
      "area": "118000 SFT",
      "floors": "7",
      "startDate": "FEB’ 2018",
      "completionDate": "AUG’ 2020",
      "consultant": "M/s. Dhyan Architects and Consultants"
    },
    "gallery": []
  },
  {
    "slug": "ms-sap-promoters-ltd",
    "name": "M/s. SAP PROMOTERS LTD",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "SAP PROMOTERS LTD",
      "area": "12000 SFT",
      "floors": "3",
      "startDate": "JUN’ 2014",
      "completionDate": "AUG’ 2016",
      "consultant": "M/s. Gowtham Architects"
    },
    "gallery": []
  },
  {
    "slug": "nivasan-meenakshi-vishranth",
    "name": "NIVASAN-MEENAKSHI VISHRANTH",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "NIVASAN HOMES PVT LTD",
      "area": "20720 SFT",
      "floors": "4",
      "startDate": "MAR’ 2014",
      "completionDate": "AUG’ 2016",
      "consultant": "M/s. Jeyakumar Associates"
    },
    "gallery": []
  },
  {
    "slug": "ganpath-apartments",
    "name": "GANPATH APARTMENTS",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "Mr RAVICHANDRAN",
      "area": "15000 SFT",
      "floors": "4 + GROUND",
      "startDate": "MAY’ 2014",
      "completionDate": "AUG’ 2015",
      "consultant": "M/s. Gowtham Architects"
    },
    "gallery": []
  },
  {
    "slug": "suktha-nakshatra",
    "name": "SUKTHA NAKSHATRA",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "SREE SUKTHA REALESTATES PVT LTD",
      "area": "55000 SFT",
      "floors": "4 + GROUND",
      "startDate": "AUG’ 2009",
      "completionDate": "AUG’ 2011",
      "consultant": "M/S. Sankar & Associates"
    },
    "gallery": []
  },
  {
    "slug": "ms-vadamalayan-hospitals-pvt-ltd",
    "name": "M/s. VADAMALAYAN HOSPITALS PVT LTD",
    "category": "Healthcare",
    "location": "MADURAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "VADAMALAYAN HOSPITALS",
      "area": "65000 & 20000 SFT",
      "floors": "3",
      "startDate": "SEP’2007 & DEC’ 2014",
      "completionDate": "AUG’ 2009 & DEC’ 2015",
      "consultant": "M/s. Infrabees Management Consultancy services"
    },
    "gallery": []
  },
  {
    "slug": "white-house-sri-hari",
    "name": "WHITE HOUSE – SRI HARI",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "WHITE HOUSE RESIDENCE INDIA PVT LTD",
      "area": "45000 SFT",
      "floors": "4+ GROUND",
      "startDate": "AUG’ 2007",
      "completionDate": "AUG’ 2009",
      "consultant": "M/S. Sankar & Associates"
    },
    "gallery": []
  },
  {
    "slug": "ms-gkd-charity-trust",
    "name": "M/s. GKD CHARITY TRUST",
    "category": "Institutional",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "GKD CHARITY TRUST",
      "area": "52500 SFT",
      "floors": "2",
      "startDate": "MAY’ 2004",
      "completionDate": "AUG’ 2005",
      "consultant": "M/s. Environmental Creations"
    },
    "gallery": []
  },
  {
    "slug": "olympia-pinnacle",
    "name": "OLYMPIA PINNACLE",
    "category": "IT Park",
    "location": "CHENNAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "ALWARPET PROPERTIES PVT LTD",
      "area": "2,16,000 SFT",
      "floors": "10",
      "startDate": "Aug’ 2021",
      "completionDate": "Apr 2024",
      "consultant": "RSP Design Consultants"
    },
    "gallery": []
  },
  {
    "slug": "aravind-eye-hospital-4",
    "name": "ARAVIND EYE HOSPITAL",
    "category": "Healthcare",
    "location": "TIRUNELVELI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "GROVEL TRUST ARAVIND EYE HOSPITAL",
      "area": "137500 SFT",
      "floors": "6",
      "startDate": "OCT’ 2020",
      "completionDate": "APR’ 2023",
      "consultant": "M/s. Design Collaborative Pvt.Ltd"
    },
    "gallery": []
  },
  {
    "slug": "centralised-bus-parking",
    "name": "CENTRALISED BUS PARKING",
    "category": "Industrial",
    "location": "KRISHNAGIRI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "CHEYYAR SEZ DEVELOPERS PVT LTD",
      "area": "3,10,000 SFT",
      "floors": "GF",
      "startDate": "JAN’ 2022",
      "completionDate": "APR’ 2023",
      "consultant": "M/s. Pithavadian and Partners Architects"
    },
    "gallery": []
  },
  {
    "slug": "cheyyar-sipcot-industrial-complex",
    "name": "CHEYYAR – SIPCOT INDUSTRIAL COMPLEX",
    "category": "Industrial",
    "location": "CHENNAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "CHEYYAR SEZ DEVELOPERS PVT LTD",
      "area": "2,85,000 SFT",
      "floors": "GF",
      "startDate": "OCT’ 2021",
      "completionDate": "APR’ 2023",
      "consultant": "M/s. Cheyyar Sez Developers Pvt Ltd"
    },
    "gallery": []
  },
  {
    "slug": "ramakrishna-mission-vidyalaya",
    "name": "RAMAKRISHNA MISSION VIDYALAYA",
    "category": "Institutional",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "RAMAKRISHNA MISSION VIDYALAYA",
      "area": "10500 SFT",
      "floors": "GF",
      "startDate": "Jan’ 2020",
      "completionDate": "Apr 2022",
      "consultant": "Ms/. Vesta Architects"
    },
    "gallery": []
  },
  {
    "slug": "venkatalakshmi-paper-and-boards",
    "name": "VENKATALAKSHMI PAPER AND BOARDS",
    "category": "Industrial",
    "location": "UDUMALPET",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "VENKATALAKSHMI PAPER AND BOARDS",
      "area": "9000 SFT",
      "floors": "GF",
      "startDate": "APR’ 2019",
      "completionDate": "APR’ 2021",
      "consultant": "M/s. M. Dharmalingam Associates"
    },
    "gallery": []
  },
  {
    "slug": "hindusthan-college-of-arts-science",
    "name": "HINDUSTHAN COLLEGE OF ARTS & SCIENCE",
    "category": "Institutional",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "HINDUSTHAN EDUCATION AND CHARITABLE TRUST",
      "area": "28000 SFT",
      "floors": "5",
      "startDate": "MAR’ 2016",
      "completionDate": "APR’ 2019",
      "consultant": "M/s.Sundar Sundaram Architects"
    },
    "gallery": []
  },
  {
    "slug": "ms-govel-trust-drgvenkatasamy-research-institute",
    "name": "M/s. GOVEL TRUST, DR.G.VENKATASAMY RESEARCH INSTITUTE",
    "category": "Healthcare",
    "location": "MADURAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "GROVEL TRUST ARAVIND EYE HOSPITAL",
      "area": "100000 SFT",
      "floors": "2",
      "startDate": "APR’ 2007",
      "completionDate": "APR’ 2009",
      "consultant": "M/s. Auroservice Consultants Private Limited"
    },
    "gallery": []
  },
  {
    "slug": "ms-govel-trust-drgvenkatasamy-research-institute-2",
    "name": "M/s. GOVEL TRUST, DR.G.VENKATASAMY RESEARCH INSTITUTE",
    "category": "Healthcare",
    "location": "MADURAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "GROVEL TRUST ARAVIND EYE HOSPITAL",
      "area": "150000 SFT",
      "floors": "3",
      "startDate": "APR’ 2007",
      "completionDate": "APR’ 2009",
      "consultant": "M/s. Auroservice Consultants Private Limited"
    },
    "gallery": []
  },
  {
    "slug": "classic-enclave",
    "name": "CLASSIC ENCLAVE",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "Mr ANWAR, CLASSIC TOWERS",
      "area": "30000 SFT",
      "floors": "4 + GROUND",
      "startDate": "APR’ 2006",
      "completionDate": "APR’ 2008",
      "consultant": "Client Engineer"
    },
    "gallery": []
  },
  {
    "slug": "sri-ramakrishna-dental-college",
    "name": "SRI RAMAKRISHNA DENTAL COLLEGE,",
    "category": "Healthcare",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "SRI RAMAKRISHNA DENTAL COLLEGE,",
      "area": "133000 SFT",
      "floors": "3",
      "startDate": "APR’ 2005",
      "completionDate": "APR’ 2006",
      "consultant": "M/s. Britto Ilango Associates"
    },
    "gallery": []
  },
  {
    "slug": "sri-ramakrishna-dental-college-2",
    "name": "SRI RAMAKRISHNA DENTAL COLLEGE",
    "category": "Institutional",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "SRI RAMAKRISHNA DENTAL COLLEGE",
      "area": "133000 SFT",
      "floors": "3",
      "startDate": "APR’ 2005",
      "completionDate": "APR’ 2006",
      "consultant": "M/s. Britto Ilango Associates"
    },
    "gallery": []
  },
  {
    "slug": "sree-switch-gears",
    "name": "SREE SWITCH GEARS",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "Ms LAKSHMI PRIYA",
      "area": "27,024 SFT",
      "floors": "4",
      "startDate": "DEC’ 2022",
      "completionDate": "Jan 2026",
      "consultant": "Mahesh Architect & Interior Designers"
    },
    "gallery": []
  },
  {
    "slug": "ms-velmuruga-enterprises-private-limited-svb-mlcp",
    "name": "M/s. Velmuruga Enterprises Private Limited “SVB MLCP”",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "Velmuruga Enterprises Private Limited",
      "area": "204,700 SFT",
      "floors": "6",
      "startDate": "JUL’ 2023",
      "completionDate": "Jan2025",
      "consultant": "M/s. Taamaesek Engineering Consortium (TMA)"
    },
    "gallery": []
  },
  {
    "slug": "ms-pnr-prime-reality-limited-pnr-edifice",
    "name": "M/s. PNR Prime Reality Limited “PNR EDIFICE”",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "PNR Prime Reality Limited",
      "area": "31,700 SFT",
      "floors": "4",
      "startDate": "JAN’ 2022",
      "completionDate": "Jan2025",
      "consultant": "M/s. Inform Archtects"
    },
    "gallery": []
  },
  {
    "slug": "ortho-one-spine-arthoscopic-joint-replacement-centre",
    "name": "Ortho One SPINE ARTHOSCOPIC & JOINT REPLACEMENT CENTRE",
    "category": "Healthcare",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "SPINE ARTHOSCOPIC & JOINT REPLACEMENT CENTRE",
      "area": "6,700 SFT",
      "floors": "4",
      "startDate": "DEC’ 2022",
      "completionDate": "Nov 2024",
      "consultant": "SUNDAR SUNDARAM ARCHTECTS"
    },
    "gallery": []
  },
  {
    "slug": "ms-sri-balaji-vidyapeeth-at-mahatma-gandhi-medical-college-and-research-institute-campus",
    "name": "M/s. Sri Balaji Vidyapeeth at Mahatma Gandhi Medical College And Research Institute Campus",
    "category": "Healthcare",
    "location": "PONDICHERRY",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "M/s. Sri Balaji Vidyapeeth",
      "area": "2,37,000 SFT",
      "floors": "9",
      "startDate": "SEP’ 2022",
      "completionDate": "Aug 2024",
      "consultant": "M/s. SANKAR & ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "kovai-medical-center-and-hospital",
    "name": "KOVAI MEDICAL CENTER AND HOSPITAL",
    "category": "Healthcare",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "KOVAI MEDICAL CENTER AND HOSPITAL",
      "area": "93,000 SFT",
      "floors": "6",
      "startDate": "SEP’ 2022",
      "completionDate": "July 2024",
      "consultant": "M/s. SANKAR & ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "integra-automation-pvt-ltd-unitiv",
    "name": "INTEGRA AUTOMATION PVT LTD UNIT–IV",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "INTEGRA AUTOMATION PVT LTD UNIT–IV",
      "area": "82000 SFT",
      "floors": "GF",
      "startDate": "Dec 2018",
      "completionDate": "Mar 2021",
      "consultant": "M/s. Sabarianand M.E"
    },
    "gallery": []
  },
  {
    "slug": "indian-cotton-federation",
    "name": "INDIAN COTTON FEDERATION",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "THE PRESIDENT INDIAN COTTON FEDERATION",
      "area": "25,000 SFT",
      "floors": "3",
      "startDate": "Dec-2017",
      "completionDate": "July-2020",
      "consultant": "M/s. ARUN & ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "adithya-warehouse",
    "name": "ADITHYA WAREHOUSE",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "Mr SUKUMARAN",
      "area": "140000 SFT",
      "floors": "GF",
      "startDate": "June 2019",
      "completionDate": "July 2020",
      "consultant": "M/s. Jeyam Consultants Private Limited"
    },
    "gallery": []
  },
  {
    "slug": "soma-apartments",
    "name": "SOMA APARTMENTS",
    "category": "Residential",
    "location": "CHENNAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "SOMA ENTERPRISES LTD, SOMA MERIT",
      "area": "24000 SFT",
      "floors": "4",
      "startDate": "Jun 2013",
      "completionDate": "Aug 2015",
      "consultant": "M/s.C.Subba Rao Associates"
    },
    "gallery": []
  },
  {
    "slug": "alaka-palazzo",
    "name": "ALAKA PALAZZO",
    "category": "Residential",
    "location": "CHENNAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "SHREE VELU BUILDERS PVT LTD",
      "area": "520000 SFT",
      "floors": "14",
      "startDate": "Jul 2010",
      "completionDate": "Jul 2013",
      "consultant": "M/s. Foarcons"
    },
    "gallery": []
  },
  {
    "slug": "nivasan-bliss",
    "name": "NIVASAN BLISS",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "NIVASAN HOMES PVT LTD",
      "area": "33,000 SFT",
      "floors": "5",
      "startDate": "DEC’ 2022",
      "completionDate": "MAY '2025",
      "consultant": "Ms/. Vesta Architects"
    },
    "gallery": []
  },
  {
    "slug": "mahatma-montessori-school",
    "name": "MAHATMA MONTESSORI SCHOOL",
    "category": "Institutional",
    "location": "MADURAI",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "MAHATMA MONTESSORI SCHOOL",
      "area": "203000 SFT",
      "floors": "3",
      "startDate": "Aug-2010",
      "completionDate": "Jul-2012",
      "consultant": "M/s. Prasad N Yadav"
    },
    "gallery": []
  },
  {
    "slug": "sri-ramakrishna-institute-of-technology",
    "name": "SRI RAMAKRISHNA INSTITUTE OF TECHNOLOGY",
    "category": "Institutional",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "SNR SONS CHARITABLE TRUST",
      "area": "1,75,000 SFT",
      "floors": "3",
      "startDate": "2000",
      "completionDate": "2002",
      "consultant": "M/s.Britto Ilango Associates"
    },
    "gallery": []
  },
  {
    "slug": "sri-ramakrishna-engineering-college",
    "name": "SRI RAMAKRISHNA ENGINEERING COLLEGE",
    "category": "Institutional",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "SNR SONS CHARITABLE TRUST",
      "area": "1,84,000 SFT",
      "floors": "2",
      "startDate": "1996",
      "completionDate": "1998",
      "consultant": "M/s.Sankar & Associates"
    },
    "gallery": []
  },
  {
    "slug": "sri-ramakrishna-polytechnic",
    "name": "SRI RAMAKRISHNA POLYTECHNIC",
    "category": "Institutional",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Completed",
    "description": "",
    "details": {
      "client": "SNR SONS CHARITABLE TRUST",
      "area": "70,000 SFT",
      "floors": "3",
      "startDate": "1996",
      "completionDate": "1997",
      "consultant": "Client Engineers"
    },
    "gallery": []
  },
  {
    "slug": "world-community-service-centre",
    "name": "WORLD COMMUNITY SERVICE CENTRE",
    "category": "Institutional",
    "location": "CHENNAI",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "WORLD COMMUNITY SERVICE CENTRE",
      "area": "10,400 SFT",
      "floors": "3",
      "startDate": "MAR’ 2022",
      "completionDate": "JUL '2023",
      "consultant": "M/s. M. Dharmalingam Associate"
    },
    "gallery": []
  },
  {
    "slug": "sri-krishna-college-of-technology-girls-hostel",
    "name": "SRI KRISHNA COLLEGE OF TECHNOLOGY- GIRLS HOSTEL",
    "category": "Institutional",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "SRI KRISHNA COLLEGE OF TECHNOLOGY",
      "area": "84200 SFT",
      "floors": "4 +GF+TERACE",
      "startDate": "JAN’ 2023",
      "completionDate": "SEP'2025",
      "consultant": "M/s. PTK Project Consultants"
    },
    "gallery": []
  },
  {
    "slug": "svb-tech-park",
    "name": "SVB TECH PARK",
    "category": "IT Park",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "VELMURUGA ENTERPRISES PVT LTD",
      "area": "240000 SFT",
      "floors": "10",
      "startDate": "Nov’ 2019",
      "completionDate": "Dec 2022",
      "consultant": "M/s. Taamaesek Engineering Consortium"
    },
    "gallery": []
  },
  {
    "slug": "raks-pallikkoodam",
    "name": "RAK’S Pallikkoodam",
    "category": "Institutional",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "RAK’S Pallikkoodam",
      "area": "81000 SFT",
      "floors": "GF+3",
      "startDate": "SEP’ 2024",
      "completionDate": "SEP' 2026",
      "consultant": "M/s.INGENIO"
    },
    "gallery": []
  },
  {
    "slug": "mrcssiddharth",
    "name": "Mr.C.S.SIDDHARTH",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "Mr.C.S.SIDDHARTH",
      "area": "11,400 SFT",
      "floors": "1",
      "startDate": "MAR’ 2024",
      "completionDate": "JUY'2027",
      "consultant": "Mrs. Bharathi Sengottuvel"
    },
    "gallery": []
  },
  {
    "slug": "mrs-kanagarathinam",
    "name": "MRS KANAGARATHINAM",
    "category": "Residential",
    "location": "PALANI",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "Mr KANAGARATHINAM",
      "area": "9,500 SFT",
      "floors": "2",
      "startDate": "AUG’ 2024",
      "completionDate": "OCT' 2026",
      "consultant": "M/s. SANKAR & ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "nivasan-swarnapuraa",
    "name": "NIVASAN SWARNAPURAA",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "NIVASAN HOMES PVT LTD",
      "area": "93,500 SFT",
      "floors": "1",
      "startDate": "MAY’ 2024",
      "completionDate": "OCT' 2026",
      "consultant": "Ms/. Vesta Architects"
    },
    "gallery": []
  },
  {
    "slug": "nivasan-udhyana",
    "name": "NIVASAN UDHYANA",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "NIVASAN HOMES PVT LTD",
      "area": "331,314 SFT",
      "floors": "VB+GF +2 , RHB +GF+1, B+GF,3",
      "startDate": "JAN’ 2021",
      "consultant": "M/s.. Senscape Architects Pvt Ltd"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-factory-building",
    "name": "CONSTRUCTION OF FACTORY BUILDING",
    "category": "Industrial",
    "location": "MYSORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "M/S. WALKAROO INDUSTRIES",
      "area": "72000SFT",
      "floors": "GF",
      "startDate": "AUG' 2024",
      "completionDate": "JUN '2026",
      "consultant": "M/s. PTK Project Consultants LLP"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-industry-building",
    "name": "CONSTRUCTION OF INDUSTRY BUILDING",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "M/S. AMERICAN AUTO SERVICE PRIVATE LIMITED",
      "area": "27000SFT",
      "floors": "GF + 1 FLOOR",
      "startDate": "DEC' 2024",
      "completionDate": "Oct 2026",
      "consultant": "M/s. Shri Lakshmi Project Management and Consultancy service"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-a-factory-building",
    "name": "CONSTRUCTION OF A FACTORY BUILDING",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "L.G. BALAKRISHNAN & BROS LIMITED CORPORATE",
      "area": "71300SFT",
      "floors": "GF + MEZZANINE FLOOR",
      "startDate": "FEB' 2025",
      "completionDate": "SEP' 2026",
      "consultant": "Ms/. Vesta Architects"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-factory-building-2",
    "name": "CONSTRUCTION OF FACTORY BUILDING",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "AUTO DIECASTING COMPANY",
      "area": "52722SFT",
      "floors": "FACTORY - GF; OFFICE - GF+FF+SF",
      "startDate": "May 2025",
      "completionDate": "OCT' 2026",
      "consultant": "THE PIDESIGN"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-sand-reclamation-unit",
    "name": "CONSTRUCTION OF SAND RECLAMATION UNIT",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "M/s . SRI RANGANATHER VALVES & CONTROLS (P)LTD",
      "area": "16000 SFT",
      "floors": "GROUND FLOOR",
      "startDate": "Jun 2025",
      "completionDate": "OCT''2026",
      "consultant": "M/s. M. Dharmalingam Associates"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-new-expansion-building",
    "name": "CONSTRUCTION OF NEW EXPANSION BUILDING",
    "category": "Industrial",
    "location": "MADATHUKKULAM",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "M/S. VENKATALAKSHMI PAPER AND BOARDS LTD.",
      "area": "1590SFT",
      "floors": "GROUND FLOOR",
      "startDate": "SEP'2025",
      "completionDate": "NOV'2026",
      "consultant": "M/s.Sabari Anand"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-factory-building-and-allied-buildings-including-land-development-works",
    "name": "CONSTRUCTION OF FACTORY BUILDING AND ALLIED BUILDINGS INCLUDING LAND DEVELOPMENT WORKS",
    "category": "Industrial",
    "location": "HOSUR",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "L.G. BALAKRISHNAN & BROS LIMITED CORPORATE",
      "area": "273155.38SFT",
      "floors": "GROUND FLOOR",
      "startDate": "SEP'2025",
      "completionDate": "MAY'2027",
      "consultant": "Ms/. Vesta Architects"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-factory-building-3",
    "name": "CONSTRUCTION OF FACTORY BUILDING",
    "category": "Industrial",
    "location": "CHENNAI",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "M/S. SRI DHANALAKSHMI INDUSTRIES",
      "area": "30000SFT",
      "floors": "GROUND+FF",
      "startDate": "Nov 2025",
      "completionDate": "JAN'2027",
      "consultant": "FIRM TERRA"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-proposed-manufacturing-facility",
    "name": "CONSTRUCTION OF PROPOSED MANUFACTURING FACILITY",
    "category": "Industrial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "M/S. STYLCOVE MODULARS PVT. LIMITED",
      "area": "550000SFT",
      "startDate": "JAN' 2026",
      "completionDate": "DEC'2026",
      "consultant": "M/s. Gleeds Consulting (India) Pvt Ltd"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-proposed-hospital-building-annexure-2-connecting-bridge-pump-room-fire-tank-collection-tank",
    "name": "CONSTRUCTION OF PROPOSED HOSPITAL BUILDING ANNEXURE - 2, CONNECTING BRIDGE, PUMP ROOM, FIRE TANK, COLLECTION TANK",
    "category": "Healthcare",
    "location": "PUDUCHERRY",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "M/S. SRI BALAJI VIDYAPEETH",
      "area": "237000SFT",
      "floors": "GF+ 9 FLOORS",
      "startDate": "SEP' 2022",
      "completionDate": "SEPT' 2026",
      "consultant": "M/s. SANKAR & ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-a-block-extension-building",
    "name": "CONSTRUCTION OF A BLOCK EXTENSION BUILDING",
    "category": "Healthcare",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "PSG INSTITUTE OF MEDICAL SCIENCE & RESEARCH",
      "area": "200000SFT",
      "floors": "2nd + 8 floors",
      "startDate": "DEC' 2022",
      "completionDate": "NOV' 2026",
      "consultant": "M/s. Mithran Structures (P) Ltd."
    },
    "gallery": []
  },
  {
    "slug": "multilevel-car-parking-nullah-drain-power-house-external-road-development",
    "name": "MULTILEVEL CAR PARKING, NULLAH DRAIN, POWER HOUSE, EXTERNAL ROAD DEVELOPMENT",
    "category": "Healthcare",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "M/S. KOVAI MEDICAL CENTER AND HOSPITAL",
      "area": "11,700 SFT",
      "floors": "Below Ground Level 9.12m Depth",
      "startDate": "SEP' 2025",
      "completionDate": "NOV' 2026",
      "consultant": "M/s. SANKAR & ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-toilet-block",
    "name": "CONSTRUCTION OF TOILET BLOCK",
    "category": "Healthcare",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "PSG COLLEGE OF ARTS AND SCIENCE",
      "area": "10200 SFT",
      "floors": "Ground Floor+ First floor",
      "startDate": "NOV'2025",
      "completionDate": "AUG' 2026",
      "consultant": "M/s. Mithran Structures (P) Ltd."
    },
    "gallery": []
  },
  {
    "slug": "aeh-existing-hospital-renovation-work",
    "name": "AEH - EXISTING HOSPITAL RENOVATION WORK",
    "category": "Healthcare",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "AEH",
      "startDate": "NOV'2025",
      "completionDate": "SEP'2026",
      "consultant": "Design collaborative Consultant"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-compound-wall",
    "name": "CONSTRUCTION OF COMPOUND WALL",
    "category": "Healthcare",
    "location": "MADURAI",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "VADAMALAYAN HOSPITAL",
      "area": "910 MTRS",
      "floors": "Compound Wall -910 MTRS",
      "startDate": "NOV'2025",
      "completionDate": "SEP''2026",
      "consultant": "Madurai ES consultancy services (P) Ltd"
    },
    "gallery": []
  },
  {
    "slug": "the-construction-of-proposed-pediatric-hospital-k-block-alteration-additional-work-in-the-existing-hospital-premises-at-coimbatore-for-ms-kovai-medical-center-and-hospital-coimbatore",
    "name": "THE CONSTRUCTION OF PROPOSED PEDIATRIC HOSPITAL 'K' BLOCK & ALTERATION, ADDITIONAL WORK IN THE EXISTING HOSPITAL PREMISES AT COIMBATORE FOR M/S. KOVAI MEDICAL CENTER AND HOSPITAL, COIMBATORE",
    "category": "Healthcare",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "KOVAI MEDICAL CENTER AND HOSPITAL",
      "area": "340,000.FT",
      "floors": "----",
      "startDate": "JUN'2026",
      "completionDate": "MAY2028",
      "consultant": "M/s.Sankar Associates"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-school-building",
    "name": "CONSTRUCTION OF SCHOOL BUILDING",
    "category": "Institutional",
    "location": "COONOOR TALUK",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "M/S. SAI SARANAGATHI CHARITABLE FOUNDATION",
      "area": "51,000SFT",
      "floors": "GF + 1 Floors",
      "startDate": "JUNE' 2024",
      "completionDate": "NOV' 2026",
      "consultant": "M/s. Amace Projects (P) Ltd"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-allied-health-science-building",
    "name": "CONSTRUCTION OF ALLIED HEALTH SCIENCE BUILDING",
    "category": "Institutional",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "M/S. DR. NGP RESEARCH AND EDUCATIONAL TRUST",
      "area": "170,000SFT",
      "floors": "BF+ GF + 7 Floors",
      "startDate": "AUG' 2024",
      "completionDate": "JAN' 2027",
      "consultant": "M/s. Senthil Associates, Consultants Architects"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-school-building-2",
    "name": "CONSTRUCTION OF SCHOOL BUILDING",
    "category": "Institutional",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "M/S. RAKS PALLIKKOODAM",
      "area": "81,000 SFT",
      "floors": "GF + 3 Floors",
      "startDate": "SEP' 2024",
      "completionDate": "SEP' 2026",
      "consultant": "M/s.INGENIO"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-e8-block",
    "name": "CONSTRUCTION OF E8 BLOCK",
    "category": "Institutional",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "PSG INSTITUTE OF TECHNOLOGY AND APPLIED RESEARCH CENTRE",
      "area": "131,800SFT",
      "floors": "GF + 6 Floors",
      "startDate": "DEC' 2024",
      "completionDate": "SEP '2026",
      "consultant": "M/s. Mithran Structures (P) Ltd."
    },
    "gallery": []
  },
  {
    "slug": "construction-of-commercial-building",
    "name": "CONSTRUCTION OF COMMERCIAL BUILDING",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "MR. & MRS. MANI R. KASTHURI",
      "area": "11,500SFT",
      "floors": "GF + 3 Floors",
      "startDate": "MAR' 2024",
      "completionDate": "SEPT' 2026",
      "consultant": "Ms/. Vesta Architects"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-it-building-olympia-elite",
    "name": "CONSTRUCTION OF IT BUILDING \"OLYMPIA ELITE\"",
    "category": "Commercial",
    "location": "CHENNAI",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "M/S. ALWARPET PROPERTIES PVT. LTD.",
      "area": "144,000SFT",
      "floors": "BF+GF+ 6 Floors",
      "startDate": "OCT' 2024",
      "completionDate": "SEPT 2026",
      "consultant": "M/s.RSP design consultants (India) Private ltd"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-office-building",
    "name": "CONSTRUCTION OF OFFICE BUILDING",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "M/S. FOCUS 4D CAREER EDUCATION PRIVATE LIMITED",
      "area": "10,000SFT",
      "floors": "GF+ 3 Floors",
      "startDate": "NOV' 2025",
      "completionDate": "SEP' 2026",
      "consultant": "M/s. Interface Archtecture"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-commercial-building-2",
    "name": "CONSTRUCTION OF COMMERCIAL BUILDING",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "VEEKESY FOOTCARE (INDIA) PVT. LTD.",
      "area": "7,000SFT",
      "floors": "GF",
      "startDate": "JAN' 2025",
      "completionDate": "AUG' 2026",
      "consultant": "M/s. Innerspace"
    },
    "gallery": []
  },
  {
    "slug": "civil-structure-and-finishes-works-for-proposed-hotel-development-brigade-fairfield",
    "name": "CIVIL STRUCTURE AND FINISHES WORKS FOR PROPOSED HOTEL DEVELOPMENT - BRIGADE FAIRFIELD",
    "category": "Commercial",
    "location": "BANGALORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "M/S. BRIGADE HOTEL VENTURES LIMITED",
      "area": "285,000 SFT",
      "floors": "B1+B2+GF+13 Floors",
      "startDate": "SEP' 2025",
      "completionDate": "MAY 2027",
      "consultant": "M/s Rajinder Kumar Associates"
    },
    "gallery": []
  },
  {
    "slug": "civil-structural-finishing-external-and-plumbing-works-construction-of-commercial-building",
    "name": "CIVIL, STRUCTURAL, FINISHING, EXTERNAL AND PLUMBING WORKS - CONSTRUCTION OF COMMERCIAL BUILDING",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "MR. K. RAMASAMYSF",
      "area": "88,000SFT",
      "floors": "BF + GF + 3 Floors + Terrace",
      "startDate": "SEP' 2025",
      "completionDate": "JAN' 2027",
      "consultant": "M/s Shri Lakshmi Project Management & Consultancy Services"
    },
    "gallery": []
  },
  {
    "slug": "civil-structural-architectural-finishing-including-plumbing-works-for-commercial-building",
    "name": "CIVIL, STRUCTURAL, ARCHITECTURAL, FINISHING INCLUDING PLUMBING WORKS FOR COMMERCIAL BUILDING",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "M/S. ANNAMALAI ENTERPRISE PVT. LTD.",
      "area": "99,500SFT",
      "floors": "BF + GF + 6 Floors + Terrace",
      "startDate": "SEP'2025",
      "completionDate": "APR'2027",
      "consultant": "M/s Shri Lakshmi Project Management & Consultancy Services"
    },
    "gallery": []
  },
  {
    "slug": "remodeling-of-hall-f-at-codissia",
    "name": "REMODELING OF HALL F AT CODISSIA",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "CODISSIA",
      "area": "15,500SFT",
      "floors": "GROUND+2 FLOORS",
      "startDate": "DEC'2025",
      "completionDate": "SEP'2026",
      "consultant": "Design Tech"
    },
    "gallery": []
  },
  {
    "slug": "civil-structural-finishing-works-and-external-development-excl-earthwork",
    "name": "CIVIL, STRUCTURAL & FINISHING WORKS AND EXTERNAL DEVELOPMENT (EXCL. EARTHWORK)",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "M/S. TANNY SHELTERS PVT. LIMITED",
      "area": "515,000SFT",
      "floors": "3 Basement + GF + 14 Floors",
      "startDate": "JAN'2026",
      "completionDate": "OCT'2028",
      "consultant": "Infinus Tech Engineering & Architecture"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-precast-building",
    "name": "CONSTRUCTION OF PRECAST BUILDING",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "M/S. ISHA OUTREACH",
      "area": "80,000 SFT",
      "floors": "2 Floors (2rd and Third - 2 Buildings)",
      "startDate": "APR'2026",
      "completionDate": "DEC'2026",
      "consultant": "Isha engineering"
    },
    "gallery": []
  },
  {
    "slug": "proposed-construction-of-it-building-cast-in-situ-precast-building-olympia-vidagara",
    "name": "PROPOSED CONSTRUCTION OF IT BUILDING (CAST IN SITU) & PRECAST BUILDING \"OLYMPIA VIDAGARA\"",
    "category": "Commercial",
    "location": "CHENNAI",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "M/S. ALWARPET PROPERTIES PVT. LTD.",
      "area": "1,460,000 SFT",
      "floors": "3 Basement+ Ground +6 Floors (Basement 3 Cast in Situ)",
      "startDate": "JUN'2026",
      "completionDate": "JULY'2027",
      "consultant": "M/s.RSB Design Consultants (India) Private Limited"
    },
    "gallery": []
  },
  {
    "slug": "proposed-commercial-for-aditya-office-spaces-at-coimbatore",
    "name": "PROPOSED COMMERCIAL FOR ADITYA OFFICE SPACES AT COIMBATORE",
    "category": "Commercial",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "M/S. ADITYA",
      "area": "481,280SFT",
      "floors": "2 Basement+ Ground +9 Floors",
      "startDate": "May 2026",
      "completionDate": "MAY'2028",
      "consultant": "M/s.pragathi consultats"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-a-residential-building",
    "name": "CONSTRUCTION OF A RESIDENTIAL BUILDING",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "MR. C. S. SIDDHARTH",
      "area": "11,400SFT",
      "floors": "GF + 1 Floors",
      "startDate": "MAR' 2024",
      "completionDate": "JULY' 2027",
      "consultant": "Mrs. Bharathi Sengottuvel"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-residential-villas-swarnapura",
    "name": "CONSTRUCTION OF RESIDENTIAL VILLAS \"SWARNAPURA\"",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "M/S. NIVASAN HOMES PVT. LTD.",
      "area": "93,500 SFT",
      "floors": "GF + 1 Floors",
      "startDate": "MAY' 2024",
      "completionDate": "OCT' 2026",
      "consultant": "Ms/. Vesta Architects"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-residential-building-at-kalapatti-coimbatore",
    "name": "CONSTRUCTION OF RESIDENTIAL BUILDING AT KALAPATTI, COIMBATORE",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "MRS. KANAGARATHINAM",
      "area": "9,500SFT",
      "floors": "GF + 2 Floors",
      "startDate": "AUG' 2024",
      "completionDate": "OCT' 2026",
      "consultant": "M/s. SANKAR & ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-residential-villas-swarnapura-2",
    "name": "CONSTRUCTION OF RESIDENTIAL VILLAS \"SWARNAPURA\"",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "M/S. NIVASAN HOMES PV. LTD.",
      "area": "93,500 SFT",
      "floors": "GF + 1 Floors",
      "startDate": "MAY' 2024",
      "completionDate": "OCT' 2026",
      "consultant": "Ms/. Vesta Architects"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-maharaja-bungalow-at-palayamkottai-tirunelveli-for-ms-tvs-holdings-ltd",
    "name": "CONSTRUCTION OF MAHARAJA BUNGALOW AT PALAYAMKOTTAI, TIRUNELVELI FOR M/S. TVS HOLDINGS LTD.",
    "category": "Residential",
    "location": "TIRUNELVELI",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "M/S. TVS HOLDINGS LTD.",
      "area": "4,000.SFT",
      "floors": "GF+1",
      "startDate": "MAY'25",
      "completionDate": "SEP'2026",
      "consultant": "Metras Design"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-ashram",
    "name": "CONSTRUCTION OF ASHRAM",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "VEE YES CHARITIES FOUNDATION",
      "area": "3,826.SFT",
      "floors": "GROUND FLOOR",
      "startDate": "NOV'2025",
      "completionDate": "SEP'2026",
      "consultant": "K2LD Architects & Interior Designer"
    },
    "gallery": []
  },
  {
    "slug": "residential-development-mysore-toys-at-kalidasar-road-mysore",
    "name": "RESIDENTIAL DEVELOPMENT \"MYSORE TOYS\" AT KALIDASAR ROAD, MYSORE",
    "category": "Residential",
    "location": "BANGALORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "M/S. MYSORE TOYS COMPANY",
      "area": "123,200. SFT",
      "floors": "LB+UB+GF+19Floors",
      "startDate": "FEB'2026",
      "completionDate": "JAN'2027",
      "consultant": "M/s.Urban Frame Pvt Ltd"
    },
    "gallery": []
  },
  {
    "slug": "residential-apartment-nivasan-vakulam-at-coimbatore",
    "name": "RESIDENTIAL APARTMENT \"NIVASAN VAKULAM\" AT COIMBATORE",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "M/S. NIVASAN HOMES PRIVATE LIMITED",
      "area": "53,430 SFT",
      "floors": "1 Semi Basement + Stilt+GF+3 Floors",
      "startDate": "FEB'2026",
      "completionDate": "FEB'2027",
      "consultant": "M/s.Vesta Architects"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-residential-apartment-revantha-skyden-at-kongu-nagar-kalapatti-for-ms-revantha-services-private-limited",
    "name": "CONSTRUCTION OF RESIDENTIAL APARTMENT \"REVANTHA SKYDEN\" AT KONGU NAGAR, KALAPATTI FOR M/S. REVANTHA SERVICES PRIVATE LIMITED",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "M/S. REVANTHA SERVICES PRIVATE LIMITED",
      "area": "37,000SFT",
      "floors": "GF+5 Floors",
      "startDate": "APR'2026",
      "completionDate": "FEB2028",
      "consultant": "Interface Architecture"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-ganga-hostel-for-ms-psg-college-of-arts-science-coimbatore",
    "name": "CONSTRUCTION OF GANGA HOSTEL FOR M/S. PSG COLLEGE OF ARTS & SCIENCE, COIMBATORE.",
    "category": "Residential",
    "location": "COIMBATORE",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "M/S. PSG COLLEGE OF ARTS & SCIENCE",
      "area": "192,500SFT",
      "floors": "GF+6 Floors",
      "startDate": "APR'2026",
      "completionDate": "JUL'2027",
      "consultant": "M/s. Mithran Structures Pvt Ltd"
    },
    "gallery": []
  },
  {
    "slug": "all-civil-works-roads-and-culverts-water-and-sewer-works-including-treatment-tanks-and-structures-landscape-works-and-all-other-auxiliary-works-housing-hostel-block-at-madurai-for-ms-aravind-eye-hospital",
    "name": "ALL CIVIL WORKS, ROADS AND CULVERTS, WATER AND SEWER WORKS INCLUDING TREATMENT TANKS AND STRUCTURES, LANDSCAPE WORKS AND ALL OTHER AUXILIARY WORKS - HOUSING & HOSTEL BLOCK AT MADURAI FOR M/S. ARAVIND EYE HOSPITAL",
    "category": "Residential",
    "location": "MADURAI",
    "imageUrl": "",
    "status": "Ongoing",
    "description": "",
    "details": {
      "client": "M/S. AEH",
      "area": "321,300 SFT",
      "floors": "Housing G+10 Floors, Hostel G+12 Floors",
      "startDate": "JULY'2026",
      "completionDate": "JAN'2029",
      "consultant": "M/s. Design Collaborative Private Limited"
    },
    "gallery": []
  }
];
