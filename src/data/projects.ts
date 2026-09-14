export interface Project {
  slug: string;
  name: string;
  category: string;
  location: string;
  imageUrl: string;
  imageAlt?: string;
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
    slug: "bushido-infotech-private-limited",
    name: "BUSHIDO INFOTECH PRIVATE LIMITED",
    category: "IT Park",
    location: "COIMBATORE",
    imageUrl: "/project/it-park/BUSHIDO INFOTECH PRIVATE LIMITED/bushido-1.jpg",
    status: "Completed",
    description: "Construction of BUSHIDO INFOTECH PRIVATE LIMITED in COIMBATORE.",
    details: {
      client: "BUSHIDO INFOTECH PRIVATE LIMITED",
      area: "36000 SFT",
      floors: "4",
      startDate: "NOV’2011",
      completionDate: "DEC’2013",
      consultant: "M/s.M.Dharmalingam Associates"
    },
    gallery: [
      "/project/it-park/BUSHIDO INFOTECH PRIVATE LIMITED/bushido-1.jpg",
      "/project/it-park/BUSHIDO INFOTECH PRIVATE LIMITED/bushido-2.jpg"
    ]
  },  {
    slug: "global-tech-park-pvt-ltd",
    name: "GLOBAL TECH PARK PVT LTD",
    category: "IT Park",
    location: "COIMBATORE",
    imageUrl: "/project/it-park/GLOBAL TECH PARK PVT LTD/DSC02352-800x534.jpg",
    status: "Completed",
    description: "Construction of GLOBAL TECH PARK PVT LTD in COIMBATORE.",
    details: {
      client: "GLOBAL TECH PARK PVT LTD",
      area: "233300 SFT",
      floors: "3",
      startDate: "DEC’ 2018",
      completionDate: "DEC’ 2019",
      consultant: "M/s. Mind Space"
    },
    gallery: [
      "/project/it-park/GLOBAL TECH PARK PVT LTD/DSC02352-800x534.jpg",
      "/project/it-park/GLOBAL TECH PARK PVT LTD/DSC02359-800x534.jpg",
      "/project/it-park/GLOBAL TECH PARK PVT LTD/DSC02388-800x534.jpg",
      "/project/it-park/GLOBAL TECH PARK PVT LTD/GTP-1-800x534.jpg",
      "/project/it-park/GLOBAL TECH PARK PVT LTD/GTP-4-800x534.jpg",
      "/project/it-park/GLOBAL TECH PARK PVT LTD/GTP-5-800x534.jpg",
      "/project/it-park/GLOBAL TECH PARK PVT LTD/GTP-9-800x534.jpg",
      "/project/it-park/GLOBAL TECH PARK PVT LTD/img-1-18.jpg",
      "/project/it-park/GLOBAL TECH PARK PVT LTD/img-10-8-800x600.jpg",
      "/project/it-park/GLOBAL TECH PARK PVT LTD/img-2-18.jpg",
      "/project/it-park/GLOBAL TECH PARK PVT LTD/img-3-17.jpg",
      "/project/it-park/GLOBAL TECH PARK PVT LTD/img-4-15.jpg",
      "/project/it-park/GLOBAL TECH PARK PVT LTD/img-5-15.jpg",
      "/project/it-park/GLOBAL TECH PARK PVT LTD/img-6-14-800x600.jpg",
      "/project/it-park/GLOBAL TECH PARK PVT LTD/img-7-11-800x450.jpg",
      "/project/it-park/GLOBAL TECH PARK PVT LTD/img-8-9-800x450.jpg",
      "/project/it-park/GLOBAL TECH PARK PVT LTD/img-9-8-800x600.jpg"
    ]
  },  {
    slug: "olympia-pinnacle",
    name: "OLYMPIA PINNACLE",
    category: "IT Park",
    location: "CHENNAI",
    imageUrl: "/project/it-park/OLYMPIA PINNACLE/IMG-20221230-WA0001-800x450.jpg",
    status: "Completed",
    description: "Construction of OLYMPIA PINNACLE in CHENNAI.",
    details: {
      client: "ALWARPET PROPERTIES PVT LTD",
      area: "2,16,000 SFT",
      floors: "10",
      startDate: "Aug’ 2021",
      completionDate: "Apr’ 2024",
      consultant: "RSP Design Consultants"
    },
    gallery: [
      "/project/it-park/OLYMPIA PINNACLE/IMG-20221230-WA0001-800x450.jpg",
      "/project/it-park/OLYMPIA PINNACLE/IMG-20221230-WA0002-800x450.jpg",
      "/project/it-park/OLYMPIA PINNACLE/IMG-20221230-WA0003-800x450.jpg",
      "/project/it-park/OLYMPIA PINNACLE/IMG-20221230-WA0006.jpg",
      "/project/it-park/OLYMPIA PINNACLE/IMG-20221230-WA0007-800x450.jpg",
      "/project/it-park/OLYMPIA PINNACLE/Olympia-1.jpeg",
      "/project/it-park/OLYMPIA PINNACLE/Olympia-5.jpeg",
      "/project/it-park/OLYMPIA PINNACLE/WA0004-800x451.jpg"
    ]
  },  {
    slug: "svb-tech-park",
    name: "SVB TECH PARK",
    category: "IT Park",
    location: "COIMBATORE",
    imageUrl: "/project/it-park/SVB TECH PARK/s-1.jpg",
    status: "Ongoing",
    description: "Construction of SVB TECH PARK in COIMBATORE.",
    details: {
      client: "VELMURUGA ENTERPRISES PVT LTD",
      area: "240000 SFT",
      floors: "10",
      startDate: "Nov’ 2019",
      completionDate: "DEC ' 2022",
      consultant: "M/s. Taamaesek Engineering Consortium"
    },
    gallery: [
      "/project/it-park/SVB TECH PARK/s-1.jpg",
      "/project/it-park/SVB TECH PARK/s-2.jpg",
      "/project/it-park/SVB TECH PARK/s-3.jpg",
      "/project/it-park/SVB TECH PARK/s-4 (1).jpg",
      "/project/it-park/SVB TECH PARK/s-4.jpg",
      "/project/it-park/SVB TECH PARK/SVB-1-1-800x600.jpg",
      "/project/it-park/SVB TECH PARK/SVB-1-800x534.jpg",
      "/project/it-park/SVB TECH PARK/SVB-10-800x375.jpeg",
      "/project/it-park/SVB TECH PARK/SVB-2-1-800x600.jpg",
      "/project/it-park/SVB TECH PARK/SVB-3-1-800x600.jpg",
      "/project/it-park/SVB TECH PARK/SVB-4-1-800x375.jpg",
      "/project/it-park/SVB TECH PARK/SVB-5-1-800x600.jpg",
      "/project/it-park/SVB TECH PARK/SVB-5-800x534.jpg",
      "/project/it-park/SVB TECH PARK/SVB-6-800x534.jpg",
      "/project/it-park/SVB TECH PARK/SVB-7-800x534.jpg",
      "/project/it-park/SVB TECH PARK/SVB-800x450.jpeg",
      "/project/it-park/SVB TECH PARK/svb-photo-banner-800x533.jpeg",
      "/project/it-park/SVB TECH PARK/SVB1-800x450.jpeg",
      "/project/it-park/SVB TECH PARK/SVB2-800x450.jpeg",
      "/project/it-park/SVB TECH PARK/WhatsApp-Image-2019-11-09-at-15.27.07-800x569.jpeg"
    ]
  },  {
    slug: "global-tech-park-private-limited-think-campus",
    name: "GLOBAL TECH PARK PRIVATE LIMITED (THINK CAMPUS)",
    category: "IT Park",
    location: "BANGALORE",
    imageUrl: "/project/it-park/GLOBAL TECH PARK PRIVATE LIMITED (THINK CAMPUS)/banner-and-project-details-800x454.jpg",
    status: "Ongoing",
    description: "Construction of GLOBAL TECH PARK PRIVATE LIMITED (THINK CAMPUS) in BANGALORE.",
    details: {
      client: "GLOBAL TECH PARK PVT LTD",
      area: "1013000 SFT",
      floors: "9",
      startDate: "Aug’ 2021",
      completionDate: "JAN' 2026",
      consultant: "M/s. Mind Space"
    },
    gallery: [
      "/project/it-park/GLOBAL TECH PARK PRIVATE LIMITED (THINK CAMPUS)/banner-and-project-details-800x454.jpg",
      "/project/it-park/GLOBAL TECH PARK PRIVATE LIMITED (THINK CAMPUS)/GTP-800x480.jpg",
      "/project/it-park/GLOBAL TECH PARK PRIVATE LIMITED (THINK CAMPUS)/gtp-bangalore-800x359.jpeg",
      "/project/it-park/GLOBAL TECH PARK PRIVATE LIMITED (THINK CAMPUS)/GTP1-800x500.jpg",
      "/project/it-park/GLOBAL TECH PARK PRIVATE LIMITED (THINK CAMPUS)/GTP2-800x494.jpg",
      "/project/it-park/GLOBAL TECH PARK PRIVATE LIMITED (THINK CAMPUS)/GTP3-800x474.jpg",
      "/project/it-park/GLOBAL TECH PARK PRIVATE LIMITED (THINK CAMPUS)/GTP4-800x493.jpg",
      "/project/it-park/GLOBAL TECH PARK PRIVATE LIMITED (THINK CAMPUS)/gtpblr-1-800x360.jpeg",
      "/project/it-park/GLOBAL TECH PARK PRIVATE LIMITED (THINK CAMPUS)/gtpblr-2-800x360.jpeg",
      "/project/it-park/GLOBAL TECH PARK PRIVATE LIMITED (THINK CAMPUS)/gtpblr-3-800x360.jpeg"
    ]
  },  {
    slug: "aravind-eye-hospital-1",
    name: "ARAVIND EYE HOSPITAL",
    category: "Healthcare",
    location: "COIMBATORE",
    imageUrl: "/project/healthcare/ARAVIND EYE HOSPITAL COIMBATORE/AEH-CBE-1-800x368.jpg",
    status: "Completed",
    description: "Construction of ARAVIND EYE HOSPITAL in COIMBATORE.",
    details: {
      client: "M/s. GOVEL Trust – Aravind Eye Hospitals",
      area: "4,49,000 SFT",
      floors: "3&6",
      startDate: "MAR’ 2022",
      completionDate: "JAN’ 2025",
      consultant: "M/s. Design Collaborative Pvt.Ltd"
    },
    gallery: [
      "/project/healthcare/ARAVIND EYE HOSPITAL COIMBATORE/AEH-CBE-1-800x368.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL COIMBATORE/AEH-CBE-10-800x549.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL COIMBATORE/AEH-CBE-4-800x408.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL COIMBATORE/AEH-CBE-5-800x381.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL COIMBATORE/AEH-CBE-6-800x456.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL COIMBATORE/AEH-CBE-7-800x375.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL COIMBATORE/AEH-CBE-800x600.jpeg",
      "/project/healthcare/ARAVIND EYE HOSPITAL COIMBATORE/AEH-CBE-9-800x528.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL COIMBATORE/AEH-Coimbatore-800x484.jpeg",
      "/project/healthcare/ARAVIND EYE HOSPITAL COIMBATORE/Aeh1-800x545.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL COIMBATORE/Aeh2-800x547.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL COIMBATORE/Aeh3-800x548.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL COIMBATORE/Aeh4-800x549.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL COIMBATORE/Aeh6-800x551.jpg"
    ]
  },  {
    slug: "aravind-eye-hospital-2",
    name: "ARAVIND EYE HOSPITAL",
    category: "Healthcare",
    location: "TIRUNELVELI",
    imageUrl: "/project/healthcare/ARAVIND EYE HOSPITAL TIRUNELVELI/1-800x600.jpg",
    status: "Completed",
    description: "Construction of ARAVIND EYE HOSPITAL in TIRUNELVELI.",
    details: {
      client: "M/s. GOVEL Trust – Aravind Eye Hospitals",
      area: "137500 SFT",
      floors: "6",
      startDate: "OCT’ 2020",
      completionDate: "APR’ 2023",
      consultant: "M/s. Design Collaborative Pvt.Ltd"
    },
    gallery: [
      "/project/healthcare/ARAVIND EYE HOSPITAL TIRUNELVELI/1-800x600.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL TIRUNELVELI/2-800x600.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL TIRUNELVELI/AEH-3-800x450.jpeg",
      "/project/healthcare/ARAVIND EYE HOSPITAL TIRUNELVELI/AEH-4-800x450.jpeg",
      "/project/healthcare/ARAVIND EYE HOSPITAL TIRUNELVELI/AEH-6-800x668.jpeg",
      "/project/healthcare/ARAVIND EYE HOSPITAL TIRUNELVELI/AEH-8-800x450.jpeg",
      "/project/healthcare/ARAVIND EYE HOSPITAL TIRUNELVELI/AEHT-1-800x600.jpeg",
      "/project/healthcare/ARAVIND EYE HOSPITAL TIRUNELVELI/AEHT-2.jpeg",
      "/project/healthcare/ARAVIND EYE HOSPITAL TIRUNELVELI/aehtirunelveli-1-800x601.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL TIRUNELVELI/aehtirunelveli-2-800x601.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL TIRUNELVELI/aehtirunelveli-3-800x601.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL TIRUNELVELI/aehtirunelveli-4-800x601.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL TIRUNELVELI/aehtirunelveli-5.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL TIRUNELVELI/aehtirunelveli-6-800x450.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL TIRUNELVELI/aehtirunelveli-7-800x368.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL TIRUNELVELI/Hospital-Ramp-800x360 (1).jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL TIRUNELVELI/Hospital-Ramp-800x360.jpg"
    ]
  },  {
    slug: "aravind-eye-hospital-3",
    name: "ARAVIND EYE HOSPITAL",
    category: "Healthcare",
    location: "MADURAI",
    imageUrl: "/project/healthcare/ARAVIND EYE HOSPITAL MADURAI/AECS-1-800x600.jpg",
    status: "Completed",
    description: "Construction of ARAVIND EYE HOSPITAL in MADURAI.",
    details: {
      client: "M/s. GOVEL Trust – Aravind Eye Hospitals",
      area: "106000 SFT",
      floors: "5",
      startDate: "APR’2008",
      completionDate: "AUG’2009",
      consultant: "M/s. Auroservice Consultants Private Limited"
    },
    gallery: [
      "/project/healthcare/ARAVIND EYE HOSPITAL MADURAI/AECS-1-800x600.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL MADURAI/AEH-MDU-1-800x531.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL MADURAI/AEH-MDU-2-800x600.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL MADURAI/AEH-MDU-3-800x600.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL MADURAI/AEH-MDU-4-800x600.jpg"
    ]
  },  {
    slug: "aravind-eye-hospital-4",
    name: "ARAVIND EYE HOSPITAL",
    category: "Healthcare",
    location: "SALEM",
    imageUrl: "/project/healthcare/ARAVIND EYE HOSPITAL SALEM/1-800x541.jpg",
    status: "Completed",
    description: "Construction of ARAVIND EYE HOSPITAL in SALEM.",
    details: {
      client: "M/s. GOVEL Trust – Aravind Eye Hospitals",
      area: "1,40,700 SFT",
      floors: "8",
      startDate: "FEB’ 2024",
      completionDate: "MAR'2025",
      consultant: "M/s. Design Collaborative Pvt.Ltd,"
    },
    gallery: [
      "/project/healthcare/ARAVIND EYE HOSPITAL SALEM/1-800x541.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL SALEM/1.png",
      "/project/healthcare/ARAVIND EYE HOSPITAL SALEM/2-2-800x633.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL SALEM/2-800x552.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL SALEM/3-2-800x604.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL SALEM/3-800x529.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL SALEM/4-2-800x577.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL SALEM/4-800x554.jpg",
      "/project/healthcare/ARAVIND EYE HOSPITAL SALEM/AEH-SALEM-ELEVATION-IMAGE-800x561.jpeg"
    ]
  },  {
    slug: "bs-surgicare-india-pvt-ltd-5",
    name: "BS SURGICARE INDIA PVT LTD",
    category: "Healthcare",
    location: "OOTY",
    imageUrl: "/project/healthcare/BS SURGICARE INDIA PVT LTD/BSS-2-1-800x371.jpeg",
    status: "Completed",
    description: "Construction of BS SURGICARE INDIA PVT LTD in OOTY.",
    details: {
      client: "BS SURGICARE INDIA PVT LTD",
      area: "31000 SFT",
      floors: "2",
      startDate: "Feb’ 2019",
      completionDate: "Mar’ 2021",
      consultant: "M/s. Cuboid Architecture"
    },
    gallery: [
      "/project/healthcare/BS SURGICARE INDIA PVT LTD/BSS-2-1-800x371.jpeg",
      "/project/healthcare/BS SURGICARE INDIA PVT LTD/BSS-3-1-800x371.jpeg",
      "/project/healthcare/BS SURGICARE INDIA PVT LTD/BSS-4-800x371.jpeg",
      "/project/healthcare/BS SURGICARE INDIA PVT LTD/DSC03416-800x534.jpg",
      "/project/healthcare/BS SURGICARE INDIA PVT LTD/DSC03418-800x534.jpg",
      "/project/healthcare/BS SURGICARE INDIA PVT LTD/DSC03420-800x534.jpg",
      "/project/healthcare/BS SURGICARE INDIA PVT LTD/img-1-28-800x450.jpg",
      "/project/healthcare/BS SURGICARE INDIA PVT LTD/img-2-28-800x450.jpg",
      "/project/healthcare/BS SURGICARE INDIA PVT LTD/IMG-20191116-WA0001-800x450.jpg",
      "/project/healthcare/BS SURGICARE INDIA PVT LTD/IMG-20191116-WA0002-800x450.jpg",
      "/project/healthcare/BS SURGICARE INDIA PVT LTD/img-3-27-800x450.jpg",
      "/project/healthcare/BS SURGICARE INDIA PVT LTD/img-4-24-800x450.jpg",
      "/project/healthcare/BS SURGICARE INDIA PVT LTD/img-6-19-800x450.jpg",
      "/project/healthcare/BS SURGICARE INDIA PVT LTD/img-7-14-800x450.jpg",
      "/project/healthcare/BS SURGICARE INDIA PVT LTD/img-9-11-800x600.jpg"
    ]
  },  {
    slug: "construction-of-c-wing-extension-building-6",
    name: "Construction of \"C\" wing extension Building",
    category: "Healthcare",
    location: "Madurai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of \"C\" wing extension Building in Madurai.",
    details: {
      client: "M/s. Meenakshi Mission Hospital and Research centre",
      area: "75,000.",
      floors: "GROUND + 6 FLOORS",
      startDate: "AUG'2009",
      completionDate: "AUG'2010",
      consultant: "Client Engineer"
    },
    gallery: []
  },  {
    slug: "construction-of-clinic-building-7",
    name: "Construction of Clinic Building",
    category: "Healthcare",
    location: "Chokkikulam, Madurai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Clinic Building in Chokkikulam, Madurai.",
    details: {
      client: "M/s. VADAMALAYAN HOSPITALS PVT LTD",
      area: "20,000.",
      floors: "GROUND + 3 FLOORS",
      startDate: "DEC'2014",
      completionDate: "DEC' 2015",
      consultant: "M/s. Infrabees Management Consultancy services, Ashok Nagar, Chennai."
    },
    gallery: []
  },  {
    slug: "construction-of-hospital-building-and-staff-quarters-8",
    name: "Construction of Hospital building and staff quarters",
    category: "Healthcare",
    location: "Tiruppur, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Hospital building and staff quarters in Tiruppur, Coimbatore.",
    details: {
      client: "M/s. GOVEL Trust – Aravind Eye Hospitals",
      area: "25,000.",
      floors: "GROUND + 2 FLOORS",
      startDate: "JUN '2009",
      completionDate: "MAR '2010",
      consultant: "M/s. Gowtham Architects, 95-A, Vyshnav Complex, Race Course, Coimbatore - 641 018"
    },
    gallery: []
  },  {
    slug: "construction-of-out-patient-block-9",
    name: "Construction of Out patient block",
    category: "Healthcare",
    location: "Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Out patient block in Coimbatore.",
    details: {
      client: "M/s. Kovai Medical Center and Hospital",
      area: "1,60,000.",
      floors: "BF+ GF + 6 Floors",
      startDate: "SEP' 2022",
      completionDate: "JAN' 2026",
      consultant: "M/s. SANKAR & ASSOCIATES 27, Sengupta Street, Ramnagar Coimbatore - 641 009"
    },
    gallery: []
  },  {
    slug: "dr-manoharan-hospital-10",
    name: "DR.MANOHARAN-HOSPITAL",
    category: "Healthcare",
    location: "COIMBATORE",
    imageUrl: "/project/healthcare/DR.MANOHARAN-HOSPITAL/DRM-1-800x600.jpeg",
    status: "Completed",
    description: "Construction of DR.MANOHARAN-HOSPITAL in COIMBATORE.",
    details: {
      client: "DR.MANOHARAN-HOSPITAL , DESIGN FORUM INDIA PVT LTD",
      area: "35000 SFT",
      floors: "3",
      startDate: "Jan’ 2018",
      completionDate: "Nov’ 2021",
      consultant: "M/s. Design Forum India Private Limited,"
    },
    gallery: [
      "/project/healthcare/DR.MANOHARAN-HOSPITAL/DRM-1-800x600.jpeg",
      "/project/healthcare/DR.MANOHARAN-HOSPITAL/DRM-1-800x600.jpg",
      "/project/healthcare/DR.MANOHARAN-HOSPITAL/DRM-12-800x600.jpg",
      "/project/healthcare/DR.MANOHARAN-HOSPITAL/DRM-13-800x600.jpg",
      "/project/healthcare/DR.MANOHARAN-HOSPITAL/DRM-2-800x600.jpg",
      "/project/healthcare/DR.MANOHARAN-HOSPITAL/DRM-5-800x600.jpeg",
      "/project/healthcare/DR.MANOHARAN-HOSPITAL/DRM-7-800x600.jpeg",
      "/project/healthcare/DR.MANOHARAN-HOSPITAL/DRMH-11-800x600.jpeg",
      "/project/healthcare/DR.MANOHARAN-HOSPITAL/DRMH-12-800x600.jpeg",
      "/project/healthcare/DR.MANOHARAN-HOSPITAL/DRMH-13-800x600.jpeg",
      "/project/healthcare/DR.MANOHARAN-HOSPITAL/DRMH-3-800x600.jpeg",
      "/project/healthcare/DR.MANOHARAN-HOSPITAL/DRMH-5-1-800x600.jpeg",
      "/project/healthcare/DR.MANOHARAN-HOSPITAL/DRMH-8-800x1067.jpeg",
      "/project/healthcare/DR.MANOHARAN-HOSPITAL/img-1-15.jpg",
      "/project/healthcare/DR.MANOHARAN-HOSPITAL/img-10-6.jpg",
      "/project/healthcare/DR.MANOHARAN-HOSPITAL/img-3-14.jpg",
      "/project/healthcare/DR.MANOHARAN-HOSPITAL/img-4-12 (1).jpg",
      "/project/healthcare/DR.MANOHARAN-HOSPITAL/img-4-12.jpg",
      "/project/healthcare/DR.MANOHARAN-HOSPITAL/img-5-12 (1).jpg",
      "/project/healthcare/DR.MANOHARAN-HOSPITAL/img-5-12.jpg",
      "/project/healthcare/DR.MANOHARAN-HOSPITAL/img-6-11.jpg"
    ]
  },  {
    slug: "kovai-medical-center-and-hospital-11",
    name: "KOVAI MEDICAL CENTER AND HOSPITAL",
    category: "Healthcare",
    location: "COIMBATORE",
    imageUrl: "/project/healthcare/KOVAI MEDICAL CENTER AND HOSPITAL/IMG-20230106-WA0146-800x602.jpg",
    status: "Completed",
    description: "Construction of KOVAI MEDICAL CENTER AND HOSPITAL in COIMBATORE.",
    details: {
      client: "M/s. Kovai Medical Center and Hospital",
      area: "93,000 SFT",
      floors: "6",
      startDate: "SEP’ 2022",
      completionDate: "2024-07-01",
      consultant: "M/s. SANKAR & ASSOCIATES"
    },
    gallery: [
      "/project/healthcare/KOVAI MEDICAL CENTER AND HOSPITAL/IMG-20230106-WA0146-800x602.jpg",
      "/project/healthcare/KOVAI MEDICAL CENTER AND HOSPITAL/IMG-20230106-WA0147-800x532.jpg",
      "/project/healthcare/KOVAI MEDICAL CENTER AND HOSPITAL/IMG-20230106-WA0148-800x602.jpg",
      "/project/healthcare/KOVAI MEDICAL CENTER AND HOSPITAL/Page-10-Image-13-800x470.jpg"
    ]
  },  {
    slug: "m-s-govel-trust-aravind-eye-hospital-12",
    name: "M/s. GOVEL TRUST, ARAVIND EYE HOSPITAL",
    category: "Healthcare",
    location: "CHENNAI",
    imageUrl: "/project/healthcare/M-s. GOVEL TRUST, ARAVIND EYE HOSPITAL/AEH-1-800x593.jpg",
    status: "Completed",
    description: "Construction of M/s. GOVEL TRUST, ARAVIND EYE HOSPITAL in CHENNAI.",
    details: {
      client: "M/s. GOVEL Trust – Aravind Eye Hospitals",
      area: "195000 SFT",
      floors: "10",
      startDate: "JAN’ 2015",
      completionDate: "MAR’ 2017",
      consultant: "M/s. Design Collaborative Pvt.Ltd,"
    },
    gallery: [
      "/project/healthcare/M-s. GOVEL TRUST, ARAVIND EYE HOSPITAL/AEH-1-800x593.jpg",
      "/project/healthcare/M-s. GOVEL TRUST, ARAVIND EYE HOSPITAL/AEH-10-800x681.jpg",
      "/project/healthcare/M-s. GOVEL TRUST, ARAVIND EYE HOSPITAL/AEH-2-800x450.jpg",
      "/project/healthcare/M-s. GOVEL TRUST, ARAVIND EYE HOSPITAL/AEH-3.jpg",
      "/project/healthcare/M-s. GOVEL TRUST, ARAVIND EYE HOSPITAL/AEH-4-800x450.jpg",
      "/project/healthcare/M-s. GOVEL TRUST, ARAVIND EYE HOSPITAL/AEH-5-800x450.jpg",
      "/project/healthcare/M-s. GOVEL TRUST, ARAVIND EYE HOSPITAL/AEH-6-800x450.jpg",
      "/project/healthcare/M-s. GOVEL TRUST, ARAVIND EYE HOSPITAL/AEH-7-800x450.jpg",
      "/project/healthcare/M-s. GOVEL TRUST, ARAVIND EYE HOSPITAL/AEH-8-800x451.jpg"
    ]
  },  {
    slug: "m-s-govel-trust-dr-g-venkatasamy-research-institute-13",
    name: "M/s. GOVEL TRUST, DR.G.VENKATASAMY RESEARCH INSTITUTE",
    category: "Healthcare",
    location: "MADURAI",
    imageUrl: "/project/healthcare/M-s. GOVEL TRUST, DR.G.VENKATASAMY RESEARCH INSTITUTE MADURAI 1/GVRI-1-800x600.jpg",
    status: "Completed",
    description: "Construction of M/s. GOVEL TRUST, DR.G.VENKATASAMY RESEARCH INSTITUTE in MADURAI.",
    details: {
      client: "M/s. GOVEL Trust – Aravind Eye Hospitals",
      area: "100000 SFT",
      floors: "2",
      startDate: "APR’ 2007",
      completionDate: "APR’ 2009",
      consultant: "M/s. Auroservice Consultants Private Limited"
    },
    gallery: [
      "/project/healthcare/M-s. GOVEL TRUST, DR.G.VENKATASAMY RESEARCH INSTITUTE MADURAI 1/GVRI-1-800x600.jpg",
      "/project/healthcare/M-s. GOVEL TRUST, DR.G.VENKATASAMY RESEARCH INSTITUTE MADURAI 1/GVRI-10.jpg",
      "/project/healthcare/M-s. GOVEL TRUST, DR.G.VENKATASAMY RESEARCH INSTITUTE MADURAI 1/GVRI-11.jpg",
      "/project/healthcare/M-s. GOVEL TRUST, DR.G.VENKATASAMY RESEARCH INSTITUTE MADURAI 1/GVRI-2-800x531.jpg",
      "/project/healthcare/M-s. GOVEL TRUST, DR.G.VENKATASAMY RESEARCH INSTITUTE MADURAI 1/GVRI-3-800x531.jpg",
      "/project/healthcare/M-s. GOVEL TRUST, DR.G.VENKATASAMY RESEARCH INSTITUTE MADURAI 1/GVRI-4.jpg",
      "/project/healthcare/M-s. GOVEL TRUST, DR.G.VENKATASAMY RESEARCH INSTITUTE MADURAI 1/GVRI-5-800x600.jpg",
      "/project/healthcare/M-s. GOVEL TRUST, DR.G.VENKATASAMY RESEARCH INSTITUTE MADURAI 1/GVRI-6-800x600.jpg",
      "/project/healthcare/M-s. GOVEL TRUST, DR.G.VENKATASAMY RESEARCH INSTITUTE MADURAI 1/GVRI-7-800x600.jpg",
      "/project/healthcare/M-s. GOVEL TRUST, DR.G.VENKATASAMY RESEARCH INSTITUTE MADURAI 1/GVRI-8-800x600.jpg",
      "/project/healthcare/M-s. GOVEL TRUST, DR.G.VENKATASAMY RESEARCH INSTITUTE MADURAI 1/GVRI-9-800x600.jpg"
    ]
  },  {
    slug: "m-s-govel-trust-dr-g-venkatasamy-research-institute-14",
    name: "M/s. GOVEL TRUST, DR.G.VENKATASAMY RESEARCH INSTITUTE",
    category: "Healthcare",
    location: "MADURAI",
    imageUrl: "/project/healthcare/M-s. GOVEL TRUST, DR.G.VENKATASAMY RESEARCH INSTITUTE 2/DSC_229.jpg",
    status: "Completed",
    description: "Construction of M/s. GOVEL TRUST, DR.G.VENKATASAMY RESEARCH INSTITUTE in MADURAI.",
    details: {
      client: "M/s. GOVEL Trust – Aravind Eye Hospitals",
      area: "150000 SFT",
      floors: "3",
      startDate: "APR’ 2007",
      completionDate: "APR’ 2009",
      consultant: "M/s. Auroservice Consultants Private Limited"
    },
    gallery: [
      "/project/healthcare/M-s. GOVEL TRUST, DR.G.VENKATASAMY RESEARCH INSTITUTE 2/DSC_229.jpg",
      "/project/healthcare/M-s. GOVEL TRUST, DR.G.VENKATASAMY RESEARCH INSTITUTE 2/DSC_232-scaled.jpg"
    ]
  },  {
    slug: "ortho-one-spine-arthoscopic-joint-replacement-centre-15",
    name: "Ortho One SPINE ARTHOSCOPIC & JOINT REPLACEMENT CENTRE",
    category: "Healthcare",
    location: "COIMBATORE",
    imageUrl: "/project/healthcare/Ortho One SPINE ARTHOSCOPIC & JOINT REPLACEMENT CENTRE 1/1-2-800x513.jpg",
    status: "Completed",
    description: "Construction of Ortho One SPINE ARTHOSCOPIC & JOINT REPLACEMENT CENTRE in COIMBATORE.",
    details: {
      client: "Spine Arthroscopic and Joint Replacement Centre Private Limited",
      area: "40000 SFT",
      floors: "3",
      startDate: "AUG’2008",
      completionDate: "AUG’2009",
      consultant: "M/s. Studio 29"
    },
    gallery: [
      "/project/healthcare/Ortho One SPINE ARTHOSCOPIC & JOINT REPLACEMENT CENTRE 1/1-2-800x513.jpg",
      "/project/healthcare/Ortho One SPINE ARTHOSCOPIC & JOINT REPLACEMENT CENTRE 1/Ortho-1-800x600.jpg",
      "/project/healthcare/Ortho One SPINE ARTHOSCOPIC & JOINT REPLACEMENT CENTRE 1/Ortho-2-800x600.jpg",
      "/project/healthcare/Ortho One SPINE ARTHOSCOPIC & JOINT REPLACEMENT CENTRE 1/Ortho-3-800x531.jpg",
      "/project/healthcare/Ortho One SPINE ARTHOSCOPIC & JOINT REPLACEMENT CENTRE 1/Ortho-4-800x600.jpg",
      "/project/healthcare/Ortho One SPINE ARTHOSCOPIC & JOINT REPLACEMENT CENTRE 1/Ortho-5-800x600.jpg",
      "/project/healthcare/Ortho One SPINE ARTHOSCOPIC & JOINT REPLACEMENT CENTRE 1/Ortho-6-800x600.jpg"
    ]
  },  {
    slug: "ortho-one-spine-arthoscopic-joint-replacement-centre-16",
    name: "Ortho One SPINE ARTHOSCOPIC & JOINT REPLACEMENT CENTRE",
    category: "Healthcare",
    location: "COIMBATORE",
    imageUrl: "/project/healthcare/Ortho One SPINE ARTHOSCOPIC & JOINT REPLACEMENT CENTRE 1/1-2-800x513.jpg",
    status: "Completed",
    description: "Construction of Ortho One SPINE ARTHOSCOPIC & JOINT REPLACEMENT CENTRE in COIMBATORE.",
    details: {
      client: "Spine Arthroscopic and Joint Replacement Centre Private Limited",
      area: "6,700 SFT",
      floors: "4",
      startDate: "DEC’ 2022",
      completionDate: "2024-11-01",
      consultant: "SUNDAR SUNDARAM ARCHTECTS"
    },
    gallery: [
      "/project/healthcare/Ortho One SPINE ARTHOSCOPIC & JOINT REPLACEMENT CENTRE 1/1-2-800x513.jpg",
      "/project/healthcare/Ortho One SPINE ARTHOSCOPIC & JOINT REPLACEMENT CENTRE 1/Ortho-1-800x600.jpg",
      "/project/healthcare/Ortho One SPINE ARTHOSCOPIC & JOINT REPLACEMENT CENTRE 1/Ortho-2-800x600.jpg",
      "/project/healthcare/Ortho One SPINE ARTHOSCOPIC & JOINT REPLACEMENT CENTRE 1/Ortho-3-800x531.jpg",
      "/project/healthcare/Ortho One SPINE ARTHOSCOPIC & JOINT REPLACEMENT CENTRE 1/Ortho-4-800x600.jpg",
      "/project/healthcare/Ortho One SPINE ARTHOSCOPIC & JOINT REPLACEMENT CENTRE 1/Ortho-5-800x600.jpg",
      "/project/healthcare/Ortho One SPINE ARTHOSCOPIC & JOINT REPLACEMENT CENTRE 1/Ortho-6-800x600.jpg"
    ]
  },  {
    slug: "m-s-sri-balaji-vidyapeeth-at-mahatma-gandhi-medical-college-and-research-institute-campus-17",
    name: "M/s. Sri Balaji Vidyapeeth at Mahatma Gandhi Medical College And Research Institute Campus",
    category: "Healthcare",
    location: "PONDICHERRY",
    imageUrl: "/project/healthcare/M-s. Sri Balaji Vidyapeeth at Mahatma Gandhi Medical College And Research Institute Campus/Mahatma-Gandhi-Medical-College-and-Research-Institute-Pondicherry.jpeg",
    status: "Completed",
    description: "Construction of M/s. Sri Balaji Vidyapeeth at Mahatma Gandhi Medical College And Research Institute Campus in PONDICHERRY.",
    details: {
      client: "M/s. Sri Balaji Vidyapeeth",
      area: "2,37,000 SFT",
      floors: "9",
      startDate: "SEP’ 2022",
      completionDate: "2024-08-01",
      consultant: "M/s. SANKAR & ASSOCIATES"
    },
    gallery: [
      "/project/healthcare/M-s. Sri Balaji Vidyapeeth at Mahatma Gandhi Medical College And Research Institute Campus/Mahatma-Gandhi-Medical-College-and-Research-Institute-Pondicherry.jpeg",
      "/project/healthcare/M-s. Sri Balaji Vidyapeeth at Mahatma Gandhi Medical College And Research Institute Campus/MGMC1-800x421.jpg",
      "/project/healthcare/M-s. Sri Balaji Vidyapeeth at Mahatma Gandhi Medical College And Research Institute Campus/MGMC2-800x380.jpg",
      "/project/healthcare/M-s. Sri Balaji Vidyapeeth at Mahatma Gandhi Medical College And Research Institute Campus/MGMC3-800x469.jpg",
      "/project/healthcare/M-s. Sri Balaji Vidyapeeth at Mahatma Gandhi Medical College And Research Institute Campus/MGMP-1-800x358.jpg",
      "/project/healthcare/M-s. Sri Balaji Vidyapeeth at Mahatma Gandhi Medical College And Research Institute Campus/MGMP-2-800x358.jpg",
      "/project/healthcare/M-s. Sri Balaji Vidyapeeth at Mahatma Gandhi Medical College And Research Institute Campus/MGMP-3-800x358.jpg",
      "/project/healthcare/M-s. Sri Balaji Vidyapeeth at Mahatma Gandhi Medical College And Research Institute Campus/MGMP-4-800x358.jpg",
      "/project/healthcare/M-s. Sri Balaji Vidyapeeth at Mahatma Gandhi Medical College And Research Institute Campus/MGMP-6-800x358.jpg",
      "/project/healthcare/M-s. Sri Balaji Vidyapeeth at Mahatma Gandhi Medical College And Research Institute Campus/MGMP-7-800x1023.jpg"
    ]
  },  {
    slug: "m-s-vadamalayan-hospitals-pvt-ltd-18",
    name: "M/s. VADAMALAYAN HOSPITALS PVT LTD",
    category: "Healthcare",
    location: "MADURAI",
    imageUrl: "/project/healthcare/VADAMALAYAN HOSPITAL/img-1-22-800x600.jpg",
    status: "Completed",
    description: "Construction of M/s. VADAMALAYAN HOSPITALS PVT LTD in MADURAI.",
    details: {
      client: "M/s. VADAMALAYAN HOSPITALS PVT LTD",
      area: "65000 & 20000 SFT",
      floors: "3",
      startDate: "SEP’2007 & DEC’ 2014",
      completionDate: "AUG’ 2009 & DEC’ 2015",
      consultant: "M/s. Infrabees Management Consultancy services"
    },
    gallery: [
      "/project/healthcare/VADAMALAYAN HOSPITAL/img-1-22-800x600.jpg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/img-2-22-800x600.jpg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/img-3-21-800x600.jpg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/img-4-19-800x600.jpg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/V-1-800x450.jpeg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/V-2-800x461.jpeg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/Vada-2-800x422.jpeg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/Vada-3-800x439.jpeg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/Vada-5-800x448.jpeg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/Vada-8-800x438.jpeg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/Vada-9-800x450.jpeg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/Vadam-1-800x976.jpeg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/Vadam-2-800x543 (1).jpeg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/Vadam-2-800x543.jpeg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/Vadam-3-800x985.jpeg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/Vadamalayan-1-800x577.jpeg"
    ]
  },  {
    slug: "psg-ims-r-a-block-extension-19",
    name: "PSG IMS&R A-Block Extension",
    category: "Healthcare",
    location: "COIMBATORE",
    imageUrl: "/project/healthcare/PSG IMS&R A-Block Extension/A1-800x492.jpg",
    status: "Completed",
    description: "Construction of PSG IMS&R A-Block Extension in COIMBATORE.",
    details: {
      client: "PSG & SONS’ Charities",
      area: "204,000 SFT",
      floors: "8",
      startDate: "DEC’ 2022",
      completionDate: "DEC’ 2024",
      consultant: "M/s. Mithran Structures (P) Ltd.,"
    },
    gallery: [
      "/project/healthcare/PSG IMS&R A-Block Extension/A1-800x492.jpg",
      "/project/healthcare/PSG IMS&R A-Block Extension/A2-800x496.jpg",
      "/project/healthcare/PSG IMS&R A-Block Extension/A3-800x494.jpg",
      "/project/healthcare/PSG IMS&R A-Block Extension/A4-800x477.jpg",
      "/project/healthcare/PSG IMS&R A-Block Extension/A5-800x501.jpg"
    ]
  },  {
    slug: "psg-imsr-kitchen-building-20",
    name: "PSG IMSR KITCHEN BUILDING",
    category: "Healthcare",
    location: "COIMBATORE",
    imageUrl: "/project/healthcare/PSG IMSR KITCHEN BUILDING/Kitchen-1-800x534.jpg",
    status: "Completed",
    description: "Construction of PSG IMSR KITCHEN BUILDING in COIMBATORE.",
    details: {
      client: "PSG & SONS’ Charities",
      area: "20000 SFT",
      floors: "4",
      startDate: "DEC’ 2019",
      completionDate: "DEC’ 2020",
      consultant: "M/s. Mithran Structures (P) Ltd"
    },
    gallery: [
      "/project/healthcare/PSG IMSR KITCHEN BUILDING/Kitchen-1-800x534.jpg",
      "/project/healthcare/PSG IMSR KITCHEN BUILDING/Kitchen-7-800x598.jpg",
      "/project/healthcare/PSG IMSR KITCHEN BUILDING/KO-2-800x452 (1).jpeg",
      "/project/healthcare/PSG IMSR KITCHEN BUILDING/KO-2-800x452.jpeg",
      "/project/healthcare/PSG IMSR KITCHEN BUILDING/psg-kitchen-1-800x600.jpg",
      "/project/healthcare/PSG IMSR KITCHEN BUILDING/psg-kitchen-3-800x1067.jpg",
      "/project/healthcare/PSG IMSR KITCHEN BUILDING/psg-kitchen-5-800x1067.jpg",
      "/project/healthcare/PSG IMSR KITCHEN BUILDING/psg-kitchen-6-800x600.jpg",
      "/project/healthcare/PSG IMSR KITCHEN BUILDING/psg-kitchen-8-800x1067.jpg",
      "/project/healthcare/PSG IMSR KITCHEN BUILDING/psgk-1-800x518.jpg",
      "/project/healthcare/PSG IMSR KITCHEN BUILDING/psgk-2-800x452.jpg"
    ]
  },  {
    slug: "psg-institute-of-medical-sciences-research-21",
    name: "PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH",
    category: "Healthcare",
    location: "COIMBATORE",
    imageUrl: "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/DSC02730-800x533.jpg",
    status: "Completed",
    description: "Construction of PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH in COIMBATORE.",
    details: {
      client: "PSG & SONS’ Charities",
      area: "845000 SFT",
      floors: "8",
      startDate: "FEB’ 2015",
      completionDate: "SEP’ 2019",
      consultant: "M/s. S.D.Sharma Associates,"
    },
    gallery: [
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/DSC02730-800x533.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/DSC02731-800x533.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/DSC02737-800x533.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/DSC02740-800x533.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/DSC03511-800x534.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/DSC03514-800x534.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/image-22-800x400.jpeg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/image-31-800x400.jpeg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/IMG-0064-800x600.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/IMG-0066-rotated.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/IMG-0068-rotated.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/IMG-0070-rotated.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/img-1-11-800x450.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/img-1-16-800x400.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/img-10-3-800x533.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/img-11-3-800x533.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/img-2-11-800x450.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/img-2-16-800x450.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/img-3-10-800x450.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/img-3-15-800x450.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/img-4-13-800x450.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/img-5-13-800x450.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/img-5-8-800x450.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/img-6-12-800x450 (1).jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/img-6-12-800x450.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/img-6-7-800x450.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/img-7-5-800x450.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/img-8-4-800x533.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/img-9-3-800x533.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/PSG-FAC-12-800x600.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/PSG-FAC-17-800x600.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/PSG-FAC-5.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/PSG-FAC-7-800x600.jpg",
      "/project/healthcare/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/PSG-IMSR-HOSPITAL-800x600.jpg"
    ]
  },  {
    slug: "psg-staff-quarters-22",
    name: "PSG STAFF QUARTERS",
    category: "Healthcare",
    location: "COIMBATORE",
    imageUrl: "/project/healthcare/PSG STAFF QUARTERS/IMG-0071-1.jpg",
    status: "Completed",
    description: "Construction of PSG STAFF QUARTERS in COIMBATORE.",
    details: {
      client: "PSG & SONS’ Charities",
      area: "51000 SFT",
      floors: "8",
      startDate: "FEB’ 2016",
      completionDate: "JUN’ 2017",
      consultant: "M/s. S.D.Sharma Associates,"
    },
    gallery: [
      "/project/healthcare/PSG STAFF QUARTERS/IMG-0071-1.jpg",
      "/project/healthcare/PSG STAFF QUARTERS/IMG-0072-800x600.jpg",
      "/project/healthcare/PSG STAFF QUARTERS/IMG-0073-1.jpg"
    ]
  },  {
    slug: "sankara-eye-hospital-23",
    name: "SANKARA EYE HOSPITAL",
    category: "Healthcare",
    location: "GUNTUR",
    imageUrl: "/project/healthcare/SANKARA EYE HOSPITAL/SEH1-800x452.jpg",
    status: "Completed",
    description: "Construction of SANKARA EYE HOSPITAL in GUNTUR.",
    details: {
      client: "Sri Kanchi Kamakoti Medical Trust",
      area: "1,03,000 SFT",
      floors: "GF+3",
      startDate: "DEC’ 2023",
      completionDate: "MAR'2025",
      consultant: "M/s. SANKAR & ASSOCIATES"
    },
    gallery: [
      "/project/healthcare/SANKARA EYE HOSPITAL/SEH1-800x452.jpg",
      "/project/healthcare/SANKARA EYE HOSPITAL/SEH2-800x499.jpg",
      "/project/healthcare/SANKARA EYE HOSPITAL/SEH3-800x437.jpg",
      "/project/healthcare/SANKARA EYE HOSPITAL/SEH4-800x403.jpg",
      "/project/healthcare/SANKARA EYE HOSPITAL/SEH5-800x434.jpg"
    ]
  },  {
    slug: "sri-ramakrishna-dental-college-24",
    name: "SRI RAMAKRISHNA DENTAL COLLEGE,",
    category: "Healthcare",
    location: "COIMBATORE",
    imageUrl: "/project/healthcare/SRI RAMAKRISHNA DENTAL COLLEGE,/SRDC-1-800x600.jpg",
    status: "Completed",
    description: "Construction of SRI RAMAKRISHNA DENTAL COLLEGE, in COIMBATORE.",
    details: {
      client: "SRI RAMAKRISHNA DENTAL COLLEGE",
      area: "133000 SFT",
      floors: "3",
      startDate: "APR’ 2005",
      completionDate: "APR’ 2006",
      consultant: "M/s. Britto Ilango Associates,"
    },
    gallery: [
      "/project/healthcare/SRI RAMAKRISHNA DENTAL COLLEGE,/SRDC-1-800x600.jpg",
      "/project/healthcare/SRI RAMAKRISHNA DENTAL COLLEGE,/SRDC-2-800x600.jpg",
      "/project/healthcare/SRI RAMAKRISHNA DENTAL COLLEGE,/SRDC-3-800x600.jpg",
      "/project/healthcare/SRI RAMAKRISHNA DENTAL COLLEGE,/SRDC-4-800x600.jpg",
      "/project/healthcare/SRI RAMAKRISHNA DENTAL COLLEGE,/SRDC-5-800x531.jpg",
      "/project/healthcare/SRI RAMAKRISHNA DENTAL COLLEGE,/SRDC-6-800x535.jpg"
    ]
  },  {
    slug: "vadamalayan-hospital-25",
    name: "VADAMALAYAN HOSPITAL",
    category: "Healthcare",
    location: "DINDIGUL",
    imageUrl: "/project/healthcare/VADAMALAYAN HOSPITAL/img-1-22-800x600.jpg",
    status: "Completed",
    description: "Construction of VADAMALAYAN HOSPITAL in DINDIGUL.",
    details: {
      client: "M/s. VADAMALAYAN HOSPITALS PVT LTD",
      area: "118000 SFT",
      floors: "7",
      startDate: "FEB’ 2018",
      completionDate: "AUG’ 2020",
      consultant: "M/s. Dhyan Architects and Consultants"
    },
    gallery: [
      "/project/healthcare/VADAMALAYAN HOSPITAL/img-1-22-800x600.jpg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/img-2-22-800x600.jpg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/img-3-21-800x600.jpg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/img-4-19-800x600.jpg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/V-1-800x450.jpeg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/V-2-800x461.jpeg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/Vada-2-800x422.jpeg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/Vada-3-800x439.jpeg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/Vada-5-800x448.jpeg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/Vada-8-800x438.jpeg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/Vada-9-800x450.jpeg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/Vadam-1-800x976.jpeg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/Vadam-2-800x543 (1).jpeg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/Vadam-2-800x543.jpeg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/Vadam-3-800x985.jpeg",
      "/project/healthcare/VADAMALAYAN HOSPITAL/Vadamalayan-1-800x577.jpeg"
    ]
  },  {
    slug: "vadamalayan-hospitals-pvt-ltd-26",
    name: "VADAMALAYAN HOSPITALS PVT LTD",
    category: "Healthcare",
    location: "MADURAI",
    imageUrl: "/project/healthcare/VADAMALAYAN HOSPITALS PVT LTD/1-800x532.jpg",
    status: "Completed",
    description: "Construction of VADAMALAYAN HOSPITALS PVT LTD in MADURAI.",
    details: {
      client: "M/s. VADAMALAYAN HOSPITALS PVT LTD",
      area: "14,100 SFT",
      floors: "3",
      startDate: "AUG’ 2022",
      completionDate: "JAN’ 2024",
      consultant: "M/s. White edge Architects,"
    },
    gallery: [
      "/project/healthcare/VADAMALAYAN HOSPITALS PVT LTD/1-800x532.jpg",
      "/project/healthcare/VADAMALAYAN HOSPITALS PVT LTD/2-800x751.jpg",
      "/project/healthcare/VADAMALAYAN HOSPITALS PVT LTD/3-800x627.jpg",
      "/project/healthcare/VADAMALAYAN HOSPITALS PVT LTD/4-800x602.jpg"
    ]
  },  {
    slug: "velammal-medical-college-hospital-27",
    name: "VELAMMAL MEDICAL COLLEGE & HOSPITAL",
    category: "Healthcare",
    location: "MADURAI",
    imageUrl: "/project/healthcare/VELAMMAL MEDICAL COLLEGE & HOSPITAL/vmch-1 (1).jpg",
    status: "Completed",
    description: "Construction of VELAMMAL MEDICAL COLLEGE & HOSPITAL in MADURAI.",
    details: {
      client: "VELAMMAL MEDICAL COLLEGE & HOSPITAL",
      area: "714000 SFT",
      floors: "5",
      startDate: "NOV’2011",
      completionDate: "DEC’2013",
      consultant: "M/s. Bhargao Group Buildpro Technologies"
    },
    gallery: [
      "/project/healthcare/VELAMMAL MEDICAL COLLEGE & HOSPITAL/vmch-1 (1).jpg",
      "/project/healthcare/VELAMMAL MEDICAL COLLEGE & HOSPITAL/vmch-1.jpg",
      "/project/healthcare/VELAMMAL MEDICAL COLLEGE & HOSPITAL/vmch-2.jpg",
      "/project/healthcare/VELAMMAL MEDICAL COLLEGE & HOSPITAL/vmch-3.jpg",
      "/project/healthcare/VELAMMAL MEDICAL COLLEGE & HOSPITAL/vmch-4.jpg",
      "/project/healthcare/VELAMMAL MEDICAL COLLEGE & HOSPITAL/vmch-5.jpg",
      "/project/healthcare/VELAMMAL MEDICAL COLLEGE & HOSPITAL/vmch-6.jpg"
    ]
  },  {
    slug: "vikram-hospital-28",
    name: "VIKRAM HOSPITAL",
    category: "Healthcare",
    location: "MADURAI",
    imageUrl: "/project/healthcare/VIKRAM HOSPITAL/VIKRAM-2.jpg",
    status: "Completed",
    description: "Construction of VIKRAM HOSPITAL in MADURAI.",
    details: {
      client: "VIKRAM HOSPITAL",
      area: "90000 SFT",
      floors: "5",
      startDate: "MAR’ 2009",
      completionDate: "MAR’ 2011",
      consultant: "M/s. Cos Consultancy Services"
    },
    gallery: [
      "/project/healthcare/VIKRAM HOSPITAL/VIKRAM-2.jpg"
    ]
  },  {
    slug: "aeh-existing-hospital-renovation-work-29",
    name: "AEH - Existing Hospital Renovation work",
    category: "Healthcare",
    location: "Sitra, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of AEH - Existing Hospital Renovation work in Sitra, Coimbatore.",
    details: {
      client: "M/s. GOVEL Trust – Aravind Eye Hospitals",
      startDate: "NOV'2025",
      completionDate: "SEP'2026",
      consultant: "Design collaborative Consultant, Pondichery"
    },
    gallery: []
  },  {
    slug: "alteration-works-in-the-hospital-building-physiotherapy-30",
    name: "Alteration works in the Hospital Building (Physiotherapy)",
    category: "Healthcare",
    location: "KMCH Main Campus, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Alteration works in the Hospital Building (Physiotherapy) in KMCH Main Campus, Coimbatore.",
    details: {
      client: "M/s. Kovai Medical Center and Hospital",
      area: "7,730 SFT",
      floors: "Ground Floor",
      startDate: "SEP' 2025",
      completionDate: "FEB' 2026",
      consultant: "M/s. SANKAR & ASSOCIATES 27, Sengupta Street, Ramnagar Coimbatore - 641 009"
    },
    gallery: []
  },  {
    slug: "construction-of-compound-wall-31",
    name: "Construction of Compound Wall",
    category: "Healthcare",
    location: "Nagari, Madurai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Construction of Compound Wall in Nagari, Madurai.",
    details: {
      client: "M/s. VADAMALAYAN HOSPITALS PVT LTD",
      area: "910 MTRS",
      floors: "Compound Wall -910 MTRS",
      startDate: "NOV'2025",
      completionDate: "SEP''2026",
      consultant: "Madurai ES consultancy services (P) Ltd"
    },
    gallery: []
  },  {
    slug: "construction-of-eye-hospital-building-for-addition-and-alteration-works-32",
    name: "Construction of Eye Hospital Building for Addition and Alteration works",
    category: "Healthcare",
    location: "Bangalore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Construction of Eye Hospital Building for Addition and Alteration works in Bangalore.",
    details: {
      client: "Sankara Eye Hospital M/s. Sri Kanchi Kamakoti Medical Trust",
      area: "50,600 SFT",
      floors: "BF+GF+ 3FLOORS",
      startDate: "FEB' 2025",
      completionDate: "AUG' 2026",
      consultant: "M/s. SANKAR & ASSOCIATES 27, Sengupta Street, Ramnagar Coimbatore - 641 009"
    },
    gallery: []
  },  {
    slug: "construction-of-toilet-block-33",
    name: "Construction of Toilet Block",
    category: "Healthcare",
    location: "Sitra, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Construction of Toilet Block in Sitra, Coimbatore.",
    details: {
      client: "PSG & SONS’ Charities",
      area: "10200 SFT",
      floors: "Ground Floor+ First floor",
      startDate: "NOV'2025",
      completionDate: "AUG' 2026",
      consultant: "M/s. Mithran Structures (P) Ltd., Dr. L.S Jayagopal. No:1, Jawahar nagar, S.A.H.S (POST) Coimbatore - 641 043"
    },
    gallery: []
  },  {
    slug: "multilevel-car-parking-nalla-drain-power-house-external-road-development-34",
    name: "Multilevel Car Parking, Nalla Drain, Power House, External Road Development",
    category: "Healthcare",
    location: "KMCH Main Campus, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Multilevel Car Parking, Nalla Drain, Power House, External Road Development in KMCH Main Campus, Coimbatore.",
    details: {
      client: "M/s. Kovai Medical Center and Hospital",
      area: "11,700 SFT",
      floors: "Below Ground Level 9.12m Depth",
      startDate: "SEP' 2025",
      completionDate: "NOV' 2026",
      consultant: "M/s. SANKAR & ASSOCIATES 27, Sengupta Street, Ramnagar Coimbatore - 641 009"
    },
    gallery: []
  },  {
    slug: "the-construction-of-proposed-pediatric-hospital-k-block-alteration-additional-work-in-the-existing-hospital-premises-at-coimbatore-for-m-s-kovai-medical-center-and-hospital-coimbatore-35",
    name: "The Construction Of Proposed Pediatric Hospital ‘K’ Block & Alteration, Additional Work In The Existing Hospital Premises At Coimbatore For M/S.Kovai Medical Center And Hospital, Coimbatore",
    category: "Healthcare",
    location: "Sitra, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of The Construction Of Proposed Pediatric Hospital ‘K’ Block & Alteration, Additional Work In The Existing Hospital Premises At Coimbatore For M/S.Kovai Medical Center And Hospital, Coimbatore in Sitra, Coimbatore.",
    details: {
      client: "M/s. Kovai Medical Center and Hospital",
      area: "3,40,000.",
      startDate: "JUN'2026",
      completionDate: "MAY'2028",
      consultant: "M/s.Sankar Associates"
    },
    gallery: []
  },  {
    slug: "adithya-convention-center-marriage-hall-1",
    name: "ADITHYA   CONVENTION CENTER & MARRIAGE HALL",
    category: "Commercial",
    location: "COIMBATORE",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of ADITHYA   CONVENTION CENTER & MARRIAGE HALL in COIMBATORE.",
    details: {
      client: "Mr SUKUMARAN",
      area: "140000   SFT",
      floors: "1",
      startDate: "JAN’   2016",
      completionDate: "JAN’   2018"
    },
    gallery: []
  },  {
    slug: "arputham-pillai-complex-2",
    name: "ARPUTHAM PILLAI COMPLEX",
    category: "Commercial",
    location: "COIMBATORE",
    imageUrl: "/project/commercial/ARPUTHAM PILLAI COMPLEX/arputham-pillai.jpg",
    status: "Completed",
    description: "Construction of ARPUTHAM PILLAI COMPLEX in COIMBATORE.",
    details: {
      client: "M/s ARPUTHAM PILLAI",
      area: "16000 SFT",
      floors: "4",
      startDate: "MAY’ 2013",
      completionDate: "NOV’ 2014"
    },
    gallery: [
      "/project/commercial/ARPUTHAM PILLAI COMPLEX/arputham-pillai.jpg"
    ]
  },  {
    slug: "civil-works-for-c04a-package-sub-structure-of-main-building-superstructure-internal-external-process-drain-and-plumbing-works-internal-external-sanitary-plumbing-works-3",
    name: "Civil works for C04A Package - Sub structure of Main Building, Superstructure, internal & External Process drain and plumbing works, internal & external sanitary & Plumbing works",
    category: "Commercial",
    location: "Gurgaon",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Civil works for C04A Package - Sub structure of Main Building, Superstructure, internal & External Process drain and plumbing works, internal & external sanitary & Plumbing works in Gurgaon.",
    details: {
      client: "M/s. MW High techProjects (India) Pvt Ltd.",
      area: "43,700.",
      floors: "GROUND FLOOR",
      startDate: "FEB'2009",
      completionDate: "SEP'2011"
    },
    gallery: []
  },  {
    slug: "classic-towers-4",
    name: "CLASSIC TOWERS",
    category: "Commercial",
    location: "COIMBATORE",
    imageUrl: "/project/commercial/CLASSIC TOWERS/Classic-1.jpg",
    status: "Completed",
    description: "Construction of CLASSIC TOWERS in COIMBATORE.",
    details: {
      client: "Mr ANWAR",
      area: "38000 SFT",
      floors: "9",
      startDate: "JUN’2006",
      completionDate: "JUN’2008"
    },
    gallery: [
      "/project/commercial/CLASSIC TOWERS/Classic-1.jpg",
      "/project/commercial/CLASSIC TOWERS/Classic-2.jpg",
      "/project/commercial/CLASSIC TOWERS/Classic-3-800x531.jpg",
      "/project/commercial/CLASSIC TOWERS/Classic-4-800x532.jpg"
    ]
  },  {
    slug: "construction-of-canteen-building-5",
    name: "Construction of Canteen Building",
    category: "Commercial",
    location: "Athipalayam, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Canteen Building in Athipalayam, Coimbatore.",
    details: {
      client: "M/s. Sri Ranganathar Institute of Engineering and Technology",
      area: "3,400.",
      floors: "GROUND + 1FLOOR",
      startDate: "AUG' 2023",
      completionDate: "JAN' 2024"
    },
    gallery: []
  },  {
    slug: "construction-of-canteen-building-6",
    name: "Construction of Canteen Building",
    category: "Commercial",
    location: "Kaduvettipalayam post, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Canteen Building in Kaduvettipalayam post, Coimbatore.",
    details: {
      client: "M/s Marks Engineering works",
      area: "6,000.",
      floors: "GF + 1 Floors",
      startDate: "NOV' 2023",
      completionDate: "SEP' 2024"
    },
    gallery: []
  },  {
    slug: "construction-of-commer-cial-cum-lodging-complex-building-rathna-residency-7",
    name: "Construction of Commer-cial cum lodging complex building \"Rathna Residency\"",
    category: "Commercial",
    location: "West Perumal Mastri Street, Madurai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Commer-cial cum lodging complex building \"Rathna Residency\" in West Perumal Mastri Street, Madurai.",
    details: {
      client: "Mr. PLK. Palaniappan",
      area: "42,000.",
      floors: "GROUND + 3FLOORS",
      startDate: "APR'2004",
      completionDate: "APR'2005"
    },
    gallery: []
  },  {
    slug: "construction-of-commercial-building-8",
    name: "Construction of Commercial Building",
    category: "Commercial",
    location: "Construction of Commercial Building",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Commercial Building in Construction of Commercial Building.",
    details: {
      client: "M/s. Sujatha",
      area: "19,500.",
      floors: "GROUND + 3 FLOORS",
      startDate: "SEP' 2019",
      completionDate: "NOV' 2021"
    },
    gallery: []
  },  {
    slug: "construction-of-commercial-building-9",
    name: "Construction of Commercial Building",
    category: "Commercial",
    location: "Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Commercial Building in Coimbatore.",
    details: {
      client: "Mr. K. Muruganandam",
      area: "8,000.",
      floors: "THIRD FLOOR",
      startDate: "MAY' 2022",
      completionDate: "JUN' 2023"
    },
    gallery: []
  },  {
    slug: "construction-of-commercial-complex-10",
    name: "Construction of Commercial Complex",
    category: "Commercial",
    location: "All India Radio, Trichy Road, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Commercial Complex in All India Radio, Trichy Road, Coimbatore.",
    details: {
      client: "Dr. Mr. Rajendran Diabetes Centre",
      area: "29,700.",
      floors: "BASEMENT + GROUND + 3 FLOORS",
      startDate: "APR' 2016",
      completionDate: "FEB' 2018"
    },
    gallery: []
  },  {
    slug: "construction-of-commercial-complex-building-11",
    name: "Construction of Commercial Complex building",
    category: "Commercial",
    location: "Near Aiswarya Fertility Centre, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Commercial Complex building in Near Aiswarya Fertility Centre, Coimbatore.",
    details: {
      client: "M/s. Sun Enterprises",
      area: "42,000.",
      floors: "GROUND + 3 FLOORS",
      startDate: "SEPT'2011",
      completionDate: "MAR'2014"
    },
    gallery: []
  },  {
    slug: "construction-of-commercial-complex-building-aditya-tech-park-12",
    name: "Construction of Commercial complex Building \"Aditya Tech Park\"",
    category: "Commercial",
    location: "Saravanampatti, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Commercial complex Building \"Aditya Tech Park\" in Saravanampatti, Coimbatore.",
    details: {
      client: "Mr. C. Sukumaran",
      area: "2,07,151.",
      floors: "SB + Add GF + FF + New SF + TF",
      startDate: "MAR' 2023",
      completionDate: "APR' 2024"
    },
    gallery: []
  },  {
    slug: "construction-of-commercial-complex-buildings-raja-tower-13",
    name: "Construction of commercial complex buildings \"Raja Tower\"",
    category: "Commercial",
    location: "Tirunelveli",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of commercial complex buildings \"Raja Tower\" in Tirunelveli.",
    details: {
      client: "Dr. S. A. Raja",
      area: "1,20,000.",
      floors: "GROUND + 3 FLOORS",
      startDate: "APR'2005",
      completionDate: "APR'2006"
    },
    gallery: []
  },  {
    slug: "construction-of-faculty-building-external-ramp-power-house-trench-connecting-corridor-14",
    name: "Construction of Faculty Building, External Ramp, Power house, Trench, Connecting corridor",
    category: "Commercial",
    location: "Peelamedu, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Faculty Building, External Ramp, Power house, Trench, Connecting corridor in Peelamedu, Coimbatore.",
    details: {
      client: "PSG & SONS’ Charities",
      area: "1,80,000.",
      floors: "2 BASEMENT + GROUND + 8 FLOORS",
      startDate: "JUNE' 2017",
      completionDate: "NOV' 2019"
    },
    gallery: []
  },  {
    slug: "construction-of-finishing-and-plumbing-work-in-additional-office-commercial-building-at-svb-tech-park-phase-2-15",
    name: "Construction of Finishing and Plumbing work in Additional Office Commercial Building at SVB TECH PARK PHASE 2",
    category: "Commercial",
    location: "Kalapatti, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Finishing and Plumbing work in Additional Office Commercial Building at SVB TECH PARK PHASE 2 in Kalapatti, Coimbatore.",
    details: {
      client: "M/s. Velmuruga Enterprises Private Limited",
      area: "2,61,600.",
      floors: "GF + 11 Floors",
      startDate: "SEP' 2023",
      completionDate: "JAN' 2025"
    },
    gallery: []
  },  {
    slug: "construction-of-hostel-building-and-staff-quarters-16",
    name: "Construction of Hostel building and Staff Quarters",
    category: "Commercial",
    location: "Tuticorin",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Hostel building and Staff Quarters in Tuticorin.",
    details: {
      client: "M/s. Govel Trust, Aravind Eye Hospital",
      area: "25,000.",
      floors: "GROUND + 2 FLOORS",
      startDate: "FEB'2011",
      completionDate: "MAY'2012"
    },
    gallery: []
  },  {
    slug: "construction-of-hotel-cum-lodging-complex-17",
    name: "Construction of hotel cum lodging complex",
    category: "Commercial",
    location: "Oppanakara street, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of hotel cum lodging complex in Oppanakara street, Coimbatore.",
    details: {
      client: "Mr. Palaniappan, M/s. Rathna Regency",
      area: "36,000.",
      floors: "GROUND + 4FLOORS",
      startDate: "SEP'2004",
      completionDate: "SEP'2005"
    },
    gallery: []
  },  {
    slug: "construction-of-institute-of-engineers-18",
    name: "Construction of Institute of Engineers",
    category: "Commercial",
    location: "Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Institute of Engineers in Coimbatore.",
    details: {
      client: "M/s Institute of Engineers India",
      area: "4,200.",
      floors: "GROUND + 2 FLOORS",
      startDate: "JUL' 2015",
      completionDate: "JUL' 2016"
    },
    gallery: []
  },  {
    slug: "construction-of-mens-hostel-19",
    name: "Construction of Mens Hostel",
    category: "Commercial",
    location: "Kurumbapalayam, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Mens Hostel in Kurumbapalayam, Coimbatore.",
    details: {
      client: "M/s. Aditya Institute of Technology",
      area: "26,500.",
      floors: "GROUND + 2FLOORS",
      startDate: "MAR' 2023",
      completionDate: "JAN' 2024"
    },
    gallery: []
  },  {
    slug: "construction-of-multi-pur-pose-commercial-complex-deesena-entertainments-20",
    name: "Construction of multi pur-pose commercial complex \"Deesena entertainments\"",
    category: "Commercial",
    location: "100 Feet Road, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of multi pur-pose commercial complex \"Deesena entertainments\" in 100 Feet Road, Coimbatore.",
    details: {
      client: "M/s. Deesena Entertainments",
      area: "36,000.",
      floors: "GROUND + 3FLOORS",
      startDate: "APR' 2004",
      completionDate: "SEP'2005"
    },
    gallery: []
  },  {
    slug: "construction-of-parish-hall-buidling-21",
    name: "Construction of \"Parish Hall\" Buidling",
    category: "Commercial",
    location: "Race Course Road, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of \"Parish Hall\" Buidling in Race Course Road, Coimbatore.",
    details: {
      client: "M/s. All Souls Church",
      area: "32,000.",
      floors: "GROUND FLOOR",
      startDate: "SEP'2007",
      completionDate: "SEP'2009"
    },
    gallery: []
  },  {
    slug: "construction-of-r-d-block-and-office-block-22",
    name: "Construction of R & D Block and Office block",
    category: "Commercial",
    location: "Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of R & D Block and Office block in Coimbatore.",
    details: {
      client: "M/s. Bull Machines Pvt Ltd",
      area: "15,100.",
      floors: "GROUND +2FLOORS",
      startDate: "JUN' 2023",
      completionDate: "JAN' 2024"
    },
    gallery: []
  },  {
    slug: "construction-of-shop-building-at-kammavar-kalayana-hall-23",
    name: "Construction of shop Building at Kammavar kalayana Hall",
    category: "Commercial",
    location: "Sivakasi",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of shop Building at Kammavar kalayana Hall in Sivakasi.",
    details: {
      client: "M/s. Kammavar Kalyana Mahal",
      area: "15,000.",
      floors: "GROUND + 1FLOOR",
      startDate: "APRIL' 2021",
      completionDate: "JULY' 2022"
    },
    gallery: []
  },  {
    slug: "decathlon-sports-india-pvt-ltd-24",
    name: "DECATHLON SPORTS INDIA PVT LTD",
    category: "Commercial",
    location: "BANGALORE",
    imageUrl: "/project/commercial/DECATHLON SPORTS INDIA PVT LTD/decathlon-1.jpg",
    status: "Completed",
    description: "Construction of DECATHLON SPORTS INDIA PVT LTD in BANGALORE.",
    details: {
      client: "M/s DECATHLON SPORTS INDIA PVT LTD",
      area: "23000 SFT",
      floors: "GF",
      startDate: "APR’2014",
      completionDate: "OCT’ 2014"
    },
    gallery: [
      "/project/commercial/DECATHLON SPORTS INDIA PVT LTD/decathlon-1.jpg"
    ]
  },  {
    slug: "hotel-rajpark-p-ltd-25",
    name: "HOTEL RAJPARK (P) LTD",
    category: "Commercial",
    location: "COIMBATORE",
    imageUrl: "/project/commercial/HOTEL RAJPARK (P) LTD/DSC02279-800x534.jpg",
    status: "Completed",
    description: "Construction of HOTEL RAJPARK (P) LTD in COIMBATORE.",
    details: {
      client: "M/s HOTEL RAJPARK (P) LTD",
      area: "320000 SFT",
      floors: "8",
      startDate: "Mar’ 2019",
      completionDate: "May’ 2023"
    },
    gallery: [
      "/project/commercial/HOTEL RAJPARK (P) LTD/DSC02279-800x534.jpg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/DSC02284-800x534.jpg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/HRP-1-800x450.jpeg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/HRP-1-800x600.jpg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/HRP-2-800x600.jpeg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/HRP-2-800x600.jpg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/HRP-3-800x600.jpeg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/HRP-5-800x600.jpg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/img-1-38-800x600.jpg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/img-3-37-800x600.jpg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/IMG_20210206_091559-800x325.jpg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/IMG_20210212_091852-800x352.jpg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/IMG_20210405_164745-800x377.jpg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/rajp-1-800x600.jpeg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/rajp-11-800x600.jpeg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/rajp-12.jpeg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/rajp-3-800x600.jpeg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/rajp-4-800x600.jpeg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/rajp-5-800x600.jpeg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/rajp-6-800x600.jpeg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/rajp-7-800x600.jpeg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/rajp-9-800x600.jpeg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/Rajpark-3-800x378.jpg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/Rajpark-5-800x378.jpg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/RP-2-800x360.jpg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/RP-3-800x360.jpg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/RP-6-800x378.jpg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/RP-7-800x378.jpg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/RP-8-800x378.jpg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/RPH-2-800x600.jpg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/RPH-3-800x1067.jpg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/RPH-4-800x600.jpg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/RPH-5-800x600.jpg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/RPH-6-800x600.jpg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/RPH-7-800x593.jpg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/RPH-8-800x600.jpg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/RPH-800x600.jpg",
      "/project/commercial/HOTEL RAJPARK (P) LTD/SHEET-1-800x566.jpg"
    ]
  },  {
    slug: "indian-cotton-federation-26",
    name: "INDIAN COTTON FEDERATION",
    category: "Commercial",
    location: "COIMBATORE",
    imageUrl: "/project/commercial/INDIAN COTTON FEDERATION/DSC02705-800x534.jpg",
    status: "Completed",
    description: "Construction of INDIAN COTTON FEDERATION in COIMBATORE.",
    details: {
      client: "M/s THE PRESIDENT INDIAN COTTON FEDERATION",
      area: "25,000 SFT",
      floors: "3",
      startDate: "2017-12-01",
      completionDate: "2020-07-09"
    },
    gallery: [
      "/project/commercial/INDIAN COTTON FEDERATION/DSC02705-800x534.jpg",
      "/project/commercial/INDIAN COTTON FEDERATION/img-1-13.jpg",
      "/project/commercial/INDIAN COTTON FEDERATION/img-2-13.jpg",
      "/project/commercial/INDIAN COTTON FEDERATION/img-3-12.jpg",
      "/project/commercial/INDIAN COTTON FEDERATION/img-4-10.jpg",
      "/project/commercial/INDIAN COTTON FEDERATION/img-5-10-800x600.jpg",
      "/project/commercial/INDIAN COTTON FEDERATION/img-6-9-800x600.jpg",
      "/project/commercial/INDIAN COTTON FEDERATION/img-7-7-800x600.jpg"
    ]
  },  {
    slug: "kpm-commercial-centre-27",
    name: "KPM COMMERCIAL CENTRE",
    category: "Commercial",
    location: "COIMBATORE",
    imageUrl: "/project/commercial/KPM COMMERCIAL CENTRE/04SGSE_KPMtowersPRINT-800x495.jpg",
    status: "Completed",
    description: "Construction of KPM COMMERCIAL CENTRE in COIMBATORE.",
    details: {
      client: "Mr. KP MURUGESAN",
      area: "14200 SFT",
      floors: "3",
      startDate: "FEB’ 2015",
      completionDate: "JUN’ 2016"
    },
    gallery: [
      "/project/commercial/KPM COMMERCIAL CENTRE/04SGSE_KPMtowersPRINT-800x495.jpg",
      "/project/commercial/KPM COMMERCIAL CENTRE/IMG_9891-ok.jpg",
      "/project/commercial/KPM COMMERCIAL CENTRE/kpm.jpg"
    ]
  },  {
    slug: "layout-development-work-at-psg-v-enclave-by-psg-co-op-house-building-society-ltd-28",
    name: "Layout Development work at PSG V Enclave by PSG Co op House Building society Ltd",
    category: "Commercial",
    location: "Sowripalayam, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Layout Development work at PSG V Enclave by PSG Co op House Building society Ltd in Sowripalayam, Coimbatore.",
    details: {
      client: "PSG & SONS’ Charities",
      area: "1,80,000.",
      startDate: "NOV' 2021",
      completionDate: "MAR' 2022"
    },
    gallery: []
  },  {
    slug: "lgb-corporate-office-building-29",
    name: "LGB CORPORATE OFFICE BUILDING,",
    category: "Commercial",
    location: "COIMBATORE",
    imageUrl: "/project/commercial/LGB CORPORATE OFFICE BUILDING/LGBCO1.jpg",
    status: "Completed",
    description: "Construction of LGB CORPORATE OFFICE BUILDING, in COIMBATORE.",
    details: {
      client: "L.G BALAKRISHNAN & BROS LTD CORPORATE",
      area: "78,800 SFT",
      floors: "2",
      startDate: "MAR'2023",
      completionDate: "MAR'2025"
    },
    gallery: [
      "/project/commercial/LGB CORPORATE OFFICE BUILDING/LGBCO1.jpg",
      "/project/commercial/LGB CORPORATE OFFICE BUILDING/LGBCO2.jpg",
      "/project/commercial/LGB CORPORATE OFFICE BUILDING/LGBCO3-800x340.jpg",
      "/project/commercial/LGB CORPORATE OFFICE BUILDING/LGBCO4-800x428.jpg",
      "/project/commercial/LGB CORPORATE OFFICE BUILDING/LGBCO5-800x415.jpg",
      "/project/commercial/LGB CORPORATE OFFICE BUILDING/LGBCO6-800x408.jpg",
      "/project/commercial/LGB CORPORATE OFFICE BUILDING/LGBCO7-800x349.jpg"
    ]
  },  {
    slug: "m-s-codissia-intech-technology-centre-30",
    name: "M/s.CODISSIA INTECH TECHNOLOGY CENTRE",
    category: "Commercial",
    location: "COIMBATORE",
    imageUrl: "/project/commercial/Ms.CODISSIA INTECH TECHNOLOGY CENTRE/Codi-1-800x353.jpg",
    status: "Completed",
    description: "Construction of M/s.CODISSIA INTECH TECHNOLOGY CENTRE in COIMBATORE.",
    details: {
      client: "CODISSIA INTECH TECHNOLOGY CENTRE",
      area: "81000 SFT",
      floors: "GF",
      startDate: "JUN’2007",
      completionDate: "OCT’2008"
    },
    gallery: [
      "/project/commercial/Ms.CODISSIA INTECH TECHNOLOGY CENTRE/Codi-1-800x353.jpg",
      "/project/commercial/Ms.CODISSIA INTECH TECHNOLOGY CENTRE/Codi-10-800x531.jpg",
      "/project/commercial/Ms.CODISSIA INTECH TECHNOLOGY CENTRE/Codi-11-800x531.jpg",
      "/project/commercial/Ms.CODISSIA INTECH TECHNOLOGY CENTRE/Codi-12-800x531.jpg",
      "/project/commercial/Ms.CODISSIA INTECH TECHNOLOGY CENTRE/Codi-2-800x600.jpg",
      "/project/commercial/Ms.CODISSIA INTECH TECHNOLOGY CENTRE/Codi-3-800x600.jpg",
      "/project/commercial/Ms.CODISSIA INTECH TECHNOLOGY CENTRE/Codi-4-800x600.jpg",
      "/project/commercial/Ms.CODISSIA INTECH TECHNOLOGY CENTRE/Codi-5-800x600.jpg",
      "/project/commercial/Ms.CODISSIA INTECH TECHNOLOGY CENTRE/Codi-6-800x600.jpg",
      "/project/commercial/Ms.CODISSIA INTECH TECHNOLOGY CENTRE/Codi-7-800x600.jpg",
      "/project/commercial/Ms.CODISSIA INTECH TECHNOLOGY CENTRE/Codi-8-800x531.jpg",
      "/project/commercial/Ms.CODISSIA INTECH TECHNOLOGY CENTRE/Codi-9-800x531.jpg"
    ]
  },  {
    slug: "m-s-parvathy-agencies-31",
    name: "M/S. PARVATHY AGENCIES",
    category: "Commercial",
    location: "COIMBATORE",
    imageUrl: "/project/commercial/MS. PARVATHY AGENCIES/DSC02478-800x534.jpg",
    status: "Completed",
    description: "Construction of M/S. PARVATHY AGENCIES in COIMBATORE.",
    details: {
      client: "PARVATHY AGENCIES",
      area: "27500 SFT",
      floors: "4",
      startDate: "Nov’ 2018",
      completionDate: "Aug’ 2020"
    },
    gallery: [
      "/project/commercial/MS. PARVATHY AGENCIES/DSC02478-800x534.jpg",
      "/project/commercial/MS. PARVATHY AGENCIES/DSC02481-800x534.jpg",
      "/project/commercial/MS. PARVATHY AGENCIES/IMG-20190528-WA0004-800x379.jpg",
      "/project/commercial/MS. PARVATHY AGENCIES/IMG-20190528-WA0005-800x379.jpg",
      "/project/commercial/MS. PARVATHY AGENCIES/P-1.jpg",
      "/project/commercial/MS. PARVATHY AGENCIES/P-2.jpg",
      "/project/commercial/MS. PARVATHY AGENCIES/P-3.jpg",
      "/project/commercial/MS. PARVATHY AGENCIES/PAR-1-800x600.jpeg",
      "/project/commercial/MS. PARVATHY AGENCIES/PARVATHY-AGENCIES-1-800x600.jpg",
      "/project/commercial/MS. PARVATHY AGENCIES/PARVATHY-AGENCIES-2-800x634.jpg",
      "/project/commercial/MS. PARVATHY AGENCIES/PARVATHY-AGENCIES-3-800x671.jpg",
      "/project/commercial/MS. PARVATHY AGENCIES/Parvathy-1-800x369.jpeg",
      "/project/commercial/MS. PARVATHY AGENCIES/Parvathy-2-800x369.jpeg",
      "/project/commercial/MS. PARVATHY AGENCIES/img-1-26-800x379.jpg",
      "/project/commercial/MS. PARVATHY AGENCIES/img-2-26-800x379.jpg",
      "/project/commercial/MS. PARVATHY AGENCIES/img-3-25-800x379.jpg",
      "/project/commercial/MS. PARVATHY AGENCIES/img-4-22-800x379.jpg",
      "/project/commercial/MS. PARVATHY AGENCIES/img-5-21-800x379.jpg"
    ]
  },  {
    slug: "m-s-pnr-prime-reality-limited-pnr-edifice-32",
    name: "M/s. PNR Prime Reality Limited “PNR EDIFICE”",
    category: "Commercial",
    location: "COIMBATORE",
    imageUrl: "/project/commercial/Ms. PNR Prime Reality Limited “PNR EDIFICE”/PNR-EDIFICE-1-800x601.jpg",
    status: "Completed",
    description: "Construction of M/s. PNR Prime Reality Limited “PNR EDIFICE” in COIMBATORE.",
    details: {
      client: "PNR Prime Reality Limited",
      area: "31,700 SFT",
      floors: "4",
      startDate: "JAN’ 2022",
      completionDate: "2025-01-01"
    },
    gallery: [
      "/project/commercial/Ms. PNR Prime Reality Limited “PNR EDIFICE”/PNR-EDIFICE-1-800x601.jpg",
      "/project/commercial/Ms. PNR Prime Reality Limited “PNR EDIFICE”/PNR-EDIFICE-2-800x490.jpg",
      "/project/commercial/Ms. PNR Prime Reality Limited “PNR EDIFICE”/PNR-EDIFICE-3-800x600.jpg",
      "/project/commercial/Ms. PNR Prime Reality Limited “PNR EDIFICE”/PNR-EDIFICE-4-800x403.jpg"
    ]
  },  {
    slug: "m-s-sap-promoters-ltd-33",
    name: "M/s. SAP PROMOTERS LTD",
    category: "Commercial",
    location: "COIMBATORE",
    imageUrl: "/project/commercial/Ms. SAP PROMOTERS LTD/IMG-20170524-WA0045.jpg",
    status: "Completed",
    description: "Construction of M/s. SAP PROMOTERS LTD in COIMBATORE.",
    details: {
      client: "SAP PROMOTERS LTD",
      area: "12000 SFT",
      floors: "3",
      startDate: "JUN’ 2014",
      completionDate: "AUG’ 2016"
    },
    gallery: [
      "/project/commercial/Ms. SAP PROMOTERS LTD/IMG-20170524-WA0045.jpg",
      "/project/commercial/Ms. SAP PROMOTERS LTD/IMG-20170524-WA0048.jpg",
      "/project/commercial/Ms. SAP PROMOTERS LTD/IMG_9926-ok.jpg"
    ]
  },  {
    slug: "m-s-saroja-velusamy-and-thales-trust-34",
    name: "M/s. SAROJA VELUSAMY AND THALES TRUST",
    category: "Commercial",
    location: "COIMBATORE",
    imageUrl: "/project/commercial/Ms. SAROJA VELUSAMY AND THALES TRUST/thales-1.png",
    status: "Completed",
    description: "Construction of M/s. SAROJA VELUSAMY AND THALES TRUST in COIMBATORE.",
    details: {
      client: "SSAROJA VELUSAMY AND THALES TRUST",
      area: "25000 SFT",
      floors: "3",
      startDate: "JUN’2011",
      completionDate: "DEC’2012"
    },
    gallery: [
      "/project/commercial/Ms. SAROJA VELUSAMY AND THALES TRUST/thales-1.png",
      "/project/commercial/Ms. SAROJA VELUSAMY AND THALES TRUST/thales-2.png",
      "/project/commercial/Ms. SAROJA VELUSAMY AND THALES TRUST/thales-3.png"
    ]
  },  {
    slug: "m-s-toyota-anamallais-agencies-35",
    name: "M/s. TOYOTA ANAMALLAIS AGENCIES",
    category: "Commercial",
    location: "TIRUNELVELI",
    imageUrl: "/project/commercial/Ms. TOYOTA ANAMALLAIS AGENCIES/DSC_0024-800x532.jpg",
    status: "Completed",
    description: "Construction of M/s. TOYOTA ANAMALLAIS AGENCIES in TIRUNELVELI.",
    details: {
      client: "TOYOTA ANAMALLAIS AGENCIES",
      area: "57300 SFT",
      floors: "GF",
      startDate: "JAN’2010",
      completionDate: "DEC’2010"
    },
    gallery: [
      "/project/commercial/Ms. TOYOTA ANAMALLAIS AGENCIES/DSC_0024-800x532.jpg",
      "/project/commercial/Ms. TOYOTA ANAMALLAIS AGENCIES/DSC_0026-800x532.jpg",
      "/project/commercial/Ms. TOYOTA ANAMALLAIS AGENCIES/TN-1-800x533.jpg",
      "/project/commercial/Ms. TOYOTA ANAMALLAIS AGENCIES/TN-10-800x532.jpg",
      "/project/commercial/Ms. TOYOTA ANAMALLAIS AGENCIES/TN-11-800x532.jpg",
      "/project/commercial/Ms. TOYOTA ANAMALLAIS AGENCIES/TN-12-800x532.jpg",
      "/project/commercial/Ms. TOYOTA ANAMALLAIS AGENCIES/TN-13-800x532.jpg",
      "/project/commercial/Ms. TOYOTA ANAMALLAIS AGENCIES/TN-2-800x532.jpg",
      "/project/commercial/Ms. TOYOTA ANAMALLAIS AGENCIES/TN-3-800x532.jpg",
      "/project/commercial/Ms. TOYOTA ANAMALLAIS AGENCIES/TN-4-800x532.jpg",
      "/project/commercial/Ms. TOYOTA ANAMALLAIS AGENCIES/TN-5-800x532.jpg",
      "/project/commercial/Ms. TOYOTA ANAMALLAIS AGENCIES/TN-6-800x532.jpg",
      "/project/commercial/Ms. TOYOTA ANAMALLAIS AGENCIES/TN-7-800x532.jpg",
      "/project/commercial/Ms. TOYOTA ANAMALLAIS AGENCIES/TN-8-800x532.jpg",
      "/project/commercial/Ms. TOYOTA ANAMALLAIS AGENCIES/TN-9-800x532.jpg"
    ]
  },  {
    slug: "m-s-toyota-anamallais-agencies-36",
    name: "M/s. TOYOTA ANAMALLAIS AGENCIES",
    category: "Commercial",
    location: "MADURAI",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of M/s. TOYOTA ANAMALLAIS AGENCIES in MADURAI.",
    details: {
      client: "TOYOTA ANAMALLAIS AGENCIES",
      area: "57300 SFT",
      floors: "GF",
      startDate: "JAN’2010",
      completionDate: "DEC’2010"
    },
    gallery: []
  },  {
    slug: "m-s-velmuruga-enterprises-private-limited-svb-mlcp-37",
    name: "M/s. Velmuruga Enterprises Private Limited “SVB MLCP”",
    category: "Commercial",
    location: "COIMBATORE",
    imageUrl: "/project/commercial/Ms. Velmuruga Enterprises Private Limited “SVB MLCP”/SVB-MLCP-800x600.jpg",
    status: "Completed",
    description: "Construction of M/s. Velmuruga Enterprises Private Limited “SVB MLCP” in COIMBATORE.",
    details: {
      client: "Velmuruga Enterprises Private Limited",
      area: "204,700 SFT",
      floors: "6",
      startDate: "JUL’ 2023",
      completionDate: "2025-01-01"
    },
    gallery: [
      "/project/commercial/Ms. Velmuruga Enterprises Private Limited “SVB MLCP”/SVB-MLCP-800x600.jpg",
      "/project/commercial/Ms. Velmuruga Enterprises Private Limited “SVB MLCP”/SVB-MLCP1-800x600.jpg",
      "/project/commercial/Ms. Velmuruga Enterprises Private Limited “SVB MLCP”/SVB-MLCP2-800x600.jpg",
      "/project/commercial/Ms. Velmuruga Enterprises Private Limited “SVB MLCP”/SVB-MLCP3-800x600.jpg",
      "/project/commercial/Ms. Velmuruga Enterprises Private Limited “SVB MLCP”/SVB-MLCP4-Copy.jpg"
    ]
  },  {
    slug: "muruhanandam-complex-38",
    name: "MURUHANANDAM COMPLEX",
    category: "Commercial",
    location: "COIMBATORE",
    imageUrl: "/project/commercial/MURUHANANDAM COMPLEX/Anand-1-800x600.jpg",
    status: "Completed",
    description: "Construction of MURUHANANDAM COMPLEX in COIMBATORE.",
    details: {
      client: "Mr MURUHANANDAM",
      area: "42800 SFT",
      floors: "3",
      startDate: "OCT’ 2018",
      completionDate: "MAR’ 2020"
    },
    gallery: [
      "/project/commercial/MURUHANANDAM COMPLEX/Anand-1-800x600.jpg",
      "/project/commercial/MURUHANANDAM COMPLEX/Anand-11-800x600.jpg",
      "/project/commercial/MURUHANANDAM COMPLEX/Anand-13-800x600.jpg",
      "/project/commercial/MURUHANANDAM COMPLEX/Anand-15-800x600.jpg",
      "/project/commercial/MURUHANANDAM COMPLEX/Anand-3-800x600.jpg",
      "/project/commercial/MURUHANANDAM COMPLEX/Anand-5-800x600.jpg",
      "/project/commercial/MURUHANANDAM COMPLEX/Anand-7-800x600.jpg",
      "/project/commercial/MURUHANANDAM COMPLEX/DSC02501-1-800x533.jpg",
      "/project/commercial/MURUHANANDAM COMPLEX/DSC02508-800x533.jpg",
      "/project/commercial/MURUHANANDAM COMPLEX/img-1-24-800x600.jpg",
      "/project/commercial/MURUHANANDAM COMPLEX/img-2-24-800x450.jpg",
      "/project/commercial/MURUHANANDAM COMPLEX/img-3-23-800x600.jpg",
      "/project/commercial/MURUHANANDAM COMPLEX/rev-17-800x635.jpg",
      "/project/commercial/MURUHANANDAM COMPLEX/rev-18-800x660.jpg"
    ]
  },  {
    slug: "s-malarvizhi-sri-krishna-institution-coimbatore-39",
    name: "S. Malarvizhi, Sri Krishna Institution, Coimbatore",
    category: "Commercial",
    location: "Cross cut road, Coimbatore",
    imageUrl: "/project/commercial/Ms. Velmuruga Enterprises Private Limited “SVB MLCP”/SVB-MLCP-800x600.jpg",
    status: "Completed",
    description: "Construction of S. Malarvizhi, Sri Krishna Institution, Coimbatore in Cross cut road, Coimbatore.",
    details: {
      client: "Mrs. S. Malarvizhi, Sri Krishna Institution",
      area: "30,000.",
      floors: "GROUND FLOOR + 4 FLOORS",
      startDate: "OCT' 2021",
      completionDate: "APR' 2024"
    },
    gallery: [
      "/project/commercial/Ms. Velmuruga Enterprises Private Limited “SVB MLCP”/SVB-MLCP-800x600.jpg",
      "/project/commercial/Ms. Velmuruga Enterprises Private Limited “SVB MLCP”/SVB-MLCP1-800x600.jpg",
      "/project/commercial/Ms. Velmuruga Enterprises Private Limited “SVB MLCP”/SVB-MLCP2-800x600.jpg",
      "/project/commercial/Ms. Velmuruga Enterprises Private Limited “SVB MLCP”/SVB-MLCP3-800x600.jpg",
      "/project/commercial/Ms. Velmuruga Enterprises Private Limited “SVB MLCP”/SVB-MLCP4-Copy.jpg"
    ]
  },  {
    slug: "saptharishi-prasanna-complex-40",
    name: "SAPTHARISHI PRASANNA COMPLEX",
    category: "Commercial",
    location: "CHENNAI",
    imageUrl: "/project/commercial/SAPTHARISHI PRASANNA COMPLEX/DSC_7597.jpg",
    status: "Completed",
    description: "Construction of SAPTHARISHI PRASANNA COMPLEX in CHENNAI.",
    details: {
      client: "SAPTHARISHI PRASANNA",
      area: "30000 SFT",
      floors: "4",
      startDate: "MAR’ 2013",
      completionDate: "NOV’ 2014"
    },
    gallery: [
      "/project/commercial/SAPTHARISHI PRASANNA COMPLEX/DSC_7597.jpg",
      "/project/commercial/SAPTHARISHI PRASANNA COMPLEX/prasanna.jpg",
      "/project/commercial/SAPTHARISHI PRASANNA COMPLEX/prasanna2.jpg"
    ]
  },  {
    slug: "saradha-greens-41",
    name: "SARADHA GREENS –",
    category: "Commercial",
    location: "COIMBATORE",
    imageUrl: "/project/commercial/SARADHA GREENS/GREENS-34-800x450.jpeg",
    status: "Completed",
    description: "Construction of SARADHA GREENS – in COIMBATORE.",
    details: {
      client: "NIVASAN HOMES PVT LTD",
      area: "7800 SFT",
      floors: "3",
      startDate: "Nov’ 2019",
      completionDate: "Oct’ 2020"
    },
    gallery: [
      "/project/commercial/SARADHA GREENS/GREENS-34-800x450.jpeg",
      "/project/commercial/SARADHA GREENS/NHSG1-800x369.jpg",
      "/project/commercial/SARADHA GREENS/NHSG2-800x419.jpg",
      "/project/commercial/SARADHA GREENS/NHSG4.jpg",
      "/project/commercial/SARADHA GREENS/NHSG5-800x542.jpg",
      "/project/commercial/SARADHA GREENS/NSG-1-800x410.jpg",
      "/project/commercial/SARADHA GREENS/NSG-2-800x600.jpg",
      "/project/commercial/SARADHA GREENS/NSG-3-800x600.jpg",
      "/project/commercial/SARADHA GREENS/NSG-800x450.jpeg",
      "/project/commercial/SARADHA GREENS/SG-1-1-800x600.jpg",
      "/project/commercial/SARADHA GREENS/SG-1.jpeg",
      "/project/commercial/SARADHA GREENS/SG-2-1-800x600.jpg",
      "/project/commercial/SARADHA GREENS/SG-3-1-800x600.jpg",
      "/project/commercial/SARADHA GREENS/SG-4-1-800x600.jpg",
      "/project/commercial/SARADHA GREENS/SG-5-1-800x600.jpg",
      "/project/commercial/SARADHA GREENS/SG-6-1-800x600.jpg",
      "/project/commercial/SARADHA GREENS/SG-7-1-800x600.jpg",
      "/project/commercial/SARADHA GREENS/slide-1-800x395.jpg",
      "/project/commercial/SARADHA GREENS/slide-2-800x395.jpg",
      "/project/commercial/SARADHA GREENS/slide-3-800x395.jpg"
    ]
  },  {
    slug: "shoeline-palmyra-42",
    name: "Shoeline – PALMYRA",
    category: "Commercial",
    location: "CHENNAI",
    imageUrl: "/project/commercial/Shoeline – PALMYRA/pal-1-1-800x600.jpeg",
    status: "Completed",
    description: "Construction of Shoeline – PALMYRA in CHENNAI.",
    details: {
      client: "SHOELINE FOOTWEAR PVT.LTD",
      area: "26000 SFT",
      floors: "4",
      startDate: "Oct’ 2019",
      completionDate: "Aug’ 2020"
    },
    gallery: [
      "/project/commercial/Shoeline – PALMYRA/pal-1-1-800x600.jpeg",
      "/project/commercial/Shoeline – PALMYRA/Pal-1-800x369.jpeg",
      "/project/commercial/Shoeline – PALMYRA/Pal-2-800x484.jpeg",
      "/project/commercial/Shoeline – PALMYRA/Pal-3.jpeg",
      "/project/commercial/Shoeline – PALMYRA/Pal-4-800x374.jpeg",
      "/project/commercial/Shoeline – PALMYRA/Palmyra-10-800x451.jpg",
      "/project/commercial/Shoeline – PALMYRA/Palmyra-2-800x451.jpeg",
      "/project/commercial/Shoeline – PALMYRA/Palmyra-24-800x451.jpg",
      "/project/commercial/Shoeline – PALMYRA/Palmyra-3-800x451.jpeg",
      "/project/commercial/Shoeline – PALMYRA/Palmyra-37-800x451.jpg",
      "/project/commercial/Shoeline – PALMYRA/Palmyra-9-800x451.jpg",
      "/project/commercial/Shoeline – PALMYRA/Palmyra-Mar27-001-800x600.jpg",
      "/project/commercial/Shoeline – PALMYRA/Palmyra-Mar27-002-800x600.jpg",
      "/project/commercial/Shoeline – PALMYRA/Palmyra-May11-001-800x600.jpg",
      "/project/commercial/Shoeline – PALMYRA/Plamy-2-800x601.jpg",
      "/project/commercial/Shoeline – PALMYRA/Plamy-3-800x601.jpg",
      "/project/commercial/Shoeline – PALMYRA/Plamy-4-800x601.jpg",
      "/project/commercial/Shoeline – PALMYRA/Plamy-7-800x601.jpg"
    ]
  },  {
    slug: "snr-auditorium-43",
    name: "SNR AUDITORIUM",
    category: "Commercial",
    location: "COIMBATORE",
    imageUrl: "/project/commercial/SNR AUDITORIUM/3.jpg",
    status: "Completed",
    description: "Construction of SNR AUDITORIUM in COIMBATORE.",
    details: {
      client: "SNR SONS CHARITABLE TRUST",
      area: "116000 SFT",
      floors: "3",
      startDate: "AUG '2003",
      completionDate: "DEC'2005"
    },
    gallery: [
      "/project/commercial/SNR AUDITORIUM/3.jpg"
    ]
  },  {
    slug: "snr-hall-44",
    name: "SNR HALL",
    category: "Commercial",
    location: "COIMBATORE",
    imageUrl: "/project/commercial/SNR HALL/DSC_0086-SNR.jpg",
    status: "Completed",
    description: "Construction of SNR HALL in COIMBATORE.",
    details: {
      client: "SNR SONS CHARITABLE TRUST",
      area: "116000 SFT",
      floors: "3",
      startDate: "AUG '2003",
      completionDate: "DEC'2005"
    },
    gallery: [
      "/project/commercial/SNR HALL/DSC_0086-SNR.jpg"
    ]
  },  {
    slug: "sree-switch-gears-45",
    name: "SREE SWITCH GEARS",
    category: "Commercial",
    location: "COIMBATORE",
    imageUrl: "/project/commercial/SREE SWITCH GEARS/SSG1.jpg",
    status: "Completed",
    description: "Construction of SREE SWITCH GEARS in COIMBATORE.",
    details: {
      client: "Ms LAKSHMI PRIYA",
      area: "27,024 SFT",
      floors: "4",
      startDate: "DEC’ 2022",
      completionDate: "2026-01-01"
    },
    gallery: [
      "/project/commercial/SREE SWITCH GEARS/SSG1.jpg",
      "/project/commercial/SREE SWITCH GEARS/SSG2.jpg",
      "/project/commercial/SREE SWITCH GEARS/SSG3.jpg",
      "/project/commercial/SREE SWITCH GEARS/SSG4.jpg",
      "/project/commercial/SREE SWITCH GEARS/SSG5.jpg",
      "/project/commercial/SREE SWITCH GEARS/SSG6.jpg",
      "/project/commercial/SREE SWITCH GEARS/SSG7.jpg"
    ]
  },  {
    slug: "sri-kumaran-hall-46",
    name: "SRI KUMARAN HALL",
    category: "Commercial",
    location: "COIMBATORE",
    imageUrl: "/project/commercial/SRI KUMARAN HALL/adithya-mahal-800x425.jpg",
    status: "Completed",
    description: "Construction of SRI KUMARAN HALL in COIMBATORE.",
    details: {
      client: "Mr SUKUMARAN",
      area: "30,000 SFT",
      floors: "GF",
      startDate: "2017-06-01",
      completionDate: "Deccember 2018"
    },
    gallery: [
      "/project/commercial/SRI KUMARAN HALL/adithya-mahal-800x425.jpg",
      "/project/commercial/SRI KUMARAN HALL/img-1-8.jpg",
      "/project/commercial/SRI KUMARAN HALL/img-10-1.jpg",
      "/project/commercial/SRI KUMARAN HALL/img-11-1.jpg",
      "/project/commercial/SRI KUMARAN HALL/img-2-8.jpg",
      "/project/commercial/SRI KUMARAN HALL/img-3-7.jpg",
      "/project/commercial/SRI KUMARAN HALL/img-4-6.jpg",
      "/project/commercial/SRI KUMARAN HALL/img-5-6.jpg",
      "/project/commercial/SRI KUMARAN HALL/img-6-5.jpg",
      "/project/commercial/SRI KUMARAN HALL/img-7-3.jpg",
      "/project/commercial/SRI KUMARAN HALL/img-8-2.jpg",
      "/project/commercial/SRI KUMARAN HALL/img-9-1.jpg",
      "/project/commercial/SRI KUMARAN HALL/Kumaran1-800x400.jpg",
      "/project/commercial/SRI KUMARAN HALL/Kumaran2-800x393.jpg"
    ]
  },  {
    slug: "the-echo-point-plaza-47",
    name: "THE ECHO POINT – PLAZA",
    category: "Commercial",
    location: "COIMBATORE",
    imageUrl: "/project/commercial/THE ECHO POINT – PLAZA/ECHO-POINT-FRONT-VIEW-800x554.jpg",
    status: "Completed",
    description: "Construction of THE ECHO POINT – PLAZA in COIMBATORE.",
    details: {
      client: "NIVASAN HOMES PVT LTD",
      area: "89000 SFT",
      floors: "5",
      startDate: "Jan’ 2019",
      completionDate: "Sep ‘2021"
    },
    gallery: [
      "/project/commercial/THE ECHO POINT – PLAZA/ECHO-POINT-FRONT-VIEW-800x554.jpg",
      "/project/commercial/THE ECHO POINT – PLAZA/ECO-1-800x641.jpeg",
      "/project/commercial/THE ECHO POINT – PLAZA/ECO-4-800x1067.jpeg",
      "/project/commercial/THE ECHO POINT – PLAZA/ECO-5-800x600.jpeg",
      "/project/commercial/THE ECHO POINT – PLAZA/FINAL-ECHO-POINT-SIDE-VIEW-800x554.jpg",
      "/project/commercial/THE ECHO POINT – PLAZA/Image-11.jpeg",
      "/project/commercial/THE ECHO POINT – PLAZA/Image-2-800x453.jpeg",
      "/project/commercial/THE ECHO POINT – PLAZA/Image-3.jpeg",
      "/project/commercial/THE ECHO POINT – PLAZA/Image-4.jpeg",
      "/project/commercial/THE ECHO POINT – PLAZA/Image-5-800x600.jpeg",
      "/project/commercial/THE ECHO POINT – PLAZA/Image-7.jpeg",
      "/project/commercial/THE ECHO POINT – PLAZA/img-1.png",
      "/project/commercial/THE ECHO POINT – PLAZA/img-2.png",
      "/project/commercial/THE ECHO POINT – PLAZA/IMG-2505-800x600.jpg",
      "/project/commercial/THE ECHO POINT – PLAZA/IMG-2506-800x600.jpg",
      "/project/commercial/THE ECHO POINT – PLAZA/IMG-2508-800x600.jpg",
      "/project/commercial/THE ECHO POINT – PLAZA/img-3.png",
      "/project/commercial/THE ECHO POINT – PLAZA/img-4.png",
      "/project/commercial/THE ECHO POINT – PLAZA/NHEPP-800x547.jpeg",
      "/project/commercial/THE ECHO POINT – PLAZA/PLAZA1-800x600.jpeg",
      "/project/commercial/THE ECHO POINT – PLAZA/PLAZA2-800x600.jpeg",
      "/project/commercial/THE ECHO POINT – PLAZA/PLAZA3-800x600.jpeg",
      "/project/commercial/THE ECHO POINT – PLAZA/PLAZA4-800x600.jpeg",
      "/project/commercial/THE ECHO POINT – PLAZA/PLAZA5-800x600.jpeg",
      "/project/commercial/THE ECHO POINT – PLAZA/PLAZA6-800x600.jpeg"
    ]
  },  {
    slug: "vasanth-co-48",
    name: "VASANTH & CO",
    category: "Commercial",
    location: "COIMBATORE",
    imageUrl: "/project/commercial/VASANTH & CO/VASANTH-CO.jpg",
    status: "Completed",
    description: "Construction of VASANTH & CO in COIMBATORE.",
    details: {
      client: "VASANTH & CO",
      area: "21000 SFT",
      floors: "3",
      startDate: "JUN’ 2013",
      completionDate: "OCT’ 2014"
    },
    gallery: [
      "/project/commercial/VASANTH & CO/VASANTH-CO.jpg"
    ]
  },  {
    slug: "civil-structural-finishing-works-and-external-development-excl-earthwork-49",
    name: "Civil, Structural & Finishing works and External development (Excl Earthwork)",
    category: "Commercial",
    location: "Saravanampatti, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Civil, Structural & Finishing works and External development (Excl Earthwork) in Saravanampatti, Coimbatore.",
    details: {
      client: "M/s. Tanny Shelters Pvt Limited",
      area: "5,15,000.",
      floors: "3 Basement + GF + 14 Floors",
      startDate: "JAN'2026",
      completionDate: "OCT'2028"
    },
    gallery: []
  },  {
    slug: "civil-structural-architectural-finishing-including-plumbing-works-for-commercial-building-50",
    name: "Civil, Structural, Architectural, Finishing including Plumbing works for Commercial Building",
    category: "Commercial",
    location: "GD Street, Race Course, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Civil, Structural, Architectural, Finishing including Plumbing works for Commercial Building in GD Street, Race Course, Coimbatore.",
    details: {
      client: "M/s. Annamalai Enterprise Pvt Ltd",
      area: "99,500.",
      floors: "BF + GF + 6 Floors + Terrace",
      startDate: "SEP'2025",
      completionDate: "APR'2027"
    },
    gallery: []
  },  {
    slug: "civil-structure-and-finishes-works-for-proposed-hotel-development-brigade-fairfield-51",
    name: "Civil Structure and Finishes Works for Proposed Hotel Development - Brigade Fairfield",
    category: "Commercial",
    location: "Udayagiri Village near Bial Bengaluru",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Civil Structure and Finishes Works for Proposed Hotel Development - Brigade Fairfield in Udayagiri Village near Bial Bengaluru.",
    details: {
      client: "M/s. Brigade Hotel Ventures Limited",
      area: "2,85,000.",
      floors: "B1+B2+GF+13 Floors",
      startDate: "SEP' 2025",
      completionDate: "MAY' 2027"
    },
    gallery: []
  },  {
    slug: "civil-strurctural-finishing-external-and-plumbing-works-construction-of-commercial-building-52",
    name: "Civil, Strurctural, Finishing, External and Plumbing works - Construction of Commercial Building",
    category: "Commercial",
    location: "Saravanampatti Village, Saravanampatti-Thudiyalur Road, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Civil, Strurctural, Finishing, External and Plumbing works - Construction of Commercial Building in Saravanampatti Village, Saravanampatti-Thudiyalur Road, Coimbatore.",
    details: {
      client: "Mr. K. Ramasamy",
      area: "88,000.",
      floors: "BF + GF + 3 Floors + Terrace",
      startDate: "SEP' 2025",
      completionDate: "JAN' 2027"
    },
    gallery: []
  },  {
    slug: "construction-of-commercial-building-53",
    name: "Construction of Commercial Building",
    category: "Commercial",
    location: "R.S Puram, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Construction of Commercial Building in R.S Puram, Coimbatore.",
    details: {
      client: "Mr. & Mrs. Mani R. Kasthuri",
      area: "11,500.",
      floors: "GF + 3 Floors",
      startDate: "MAR' 2024",
      completionDate: "SEPT' 2026"
    },
    gallery: []
  },  {
    slug: "construction-of-commercial-complex-54",
    name: "Construction of Commercial Complex",
    category: "Commercial",
    location: "Koyambedu, Chennai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Construction of Commercial Complex in Koyambedu, Chennai.",
    details: {
      client: "Mr. K. UMAPATHY",
      area: "96,200.",
      floors: "B+ GF + 9 Floors",
      startDate: "SEP' 2023",
      completionDate: "AUG' 2026"
    },
    gallery: []
  },  {
    slug: "construction-of-commercial-complex-svb-sphere-55",
    name: "Construction of Commercial Complex \"SVB SPHERE\"",
    category: "Commercial",
    location: "Annuparpalayam, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Construction of Commercial Complex \"SVB SPHERE\" in Annuparpalayam, Coimbatore.",
    details: {
      client: "M/s. Shiva Cargo Movers Private Limited",
      area: "69,000.",
      floors: "BF + STILT + 4 Floors",
      startDate: "MAR' 2025",
      completionDate: "JAN' 2026"
    },
    gallery: []
  },  {
    slug: "construction-of-it-building-olympia-elite-56",
    name: "Construction of IT building \"OLYMPIA ELITE\"",
    category: "Commercial",
    location: "Perungudi, Chennai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Construction of IT building \"OLYMPIA ELITE\" in Perungudi, Chennai.",
    details: {
      client: "M/s. Alwarpet Properties Pvt Ltd",
      area: "1,44,000.",
      floors: "BF+GF+ 6 Floors",
      startDate: "OCT' 2024",
      completionDate: "SEPT 2026"
    },
    gallery: []
  },  {
    slug: "construction-of-office-building-57",
    name: "Construction of Office Building",
    category: "Commercial",
    location: "Sowripalayam village, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Construction of Office Building in Sowripalayam village, Coimbatore.",
    details: {
      client: "M/s. Focus 4D Career Education Private Limited",
      area: "10,000.",
      floors: "GF+ 3 Floors",
      startDate: "NOV' 2025",
      completionDate: "SEP' 2026"
    },
    gallery: []
  },  {
    slug: "construction-of-precast-building-58",
    name: "Construction of Precast Building",
    category: "Commercial",
    location: "Velliangiri, coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Construction of Precast Building in Velliangiri, coimbatore.",
    details: {
      client: "M/s. Isha Outreach",
      area: "80,000.",
      floors: "2 Floors (2rd and Third - 2 Buildings)",
      startDate: "APR'2026",
      completionDate: "DEC'2026"
    },
    gallery: []
  },  {
    slug: "constructon-of-commercial-building-59",
    name: "Constructon of Commercial Building",
    category: "Commercial",
    location: "Malumichampatty, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Constructon of Commercial Building in Malumichampatty, Coimbatore.",
    details: {
      client: "Veekesy Footcare (India) Pvt Ltd",
      area: "7,000.",
      floors: "GF",
      startDate: "JAN' 2025",
      completionDate: "AUG' 2026"
    },
    gallery: []
  },  {
    slug: "modification-to-the-existing-building-60",
    name: "Modification to the Existing Building",
    category: "Commercial",
    location: "Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Modification to the Existing Building in Coimbatore.",
    details: {
      client: "M/s. Simpson",
      area: "6,918.68",
      floors: "Ground Floor",
      startDate: "NOV'2025",
      completionDate: "FEB'2026"
    },
    gallery: []
  },  {
    slug: "proposed-commercial-for-aditya-office-spaces-at-coimbatore-61",
    name: "Proposed Commercial For Aditya Office Spaces At Coimbatore",
    category: "Commercial",
    location: "Sararanampatti, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Proposed Commercial For Aditya Office Spaces At Coimbatore in Sararanampatti, Coimbatore.",
    details: {
      client: "M/s. Aditya",
      area: "4,81,280.",
      floors: "2 Basement+ Ground +9 Floors",
      startDate: "MAY 2026",
      completionDate: "MAY'2028"
    },
    gallery: []
  },  {
    slug: "proposed-construction-of-it-building-cast-in-situ-precast-building-olympia-vidagara-at-porur-chennai-for-m-s-alwarpet-properties-pvt-ltd-62",
    name: "Proposed Construction Of It Building (Cast In Situ) & Precast Building \"Olympia Vidagara” At Porur, Chennai For M/S. Alwarpet Properties Pvt Ltd",
    category: "Commercial",
    location: "Porur, Chennai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Proposed Construction Of It Building (Cast In Situ) & Precast Building \"Olympia Vidagara” At Porur, Chennai For M/S. Alwarpet Properties Pvt Ltd in Porur, Chennai.",
    details: {
      client: "M/s. Alwarpet Properties Pvt Ltd",
      area: "14,60,000.",
      floors: "3 Basement+ Ground +6 Floors (Basement 3 Cast in Situ)",
      startDate: "JUN'2026",
      completionDate: "JULY'2027"
    },
    gallery: []
  },  {
    slug: "proposed-construction-of-precast-it-building-olympia-at-porur-chennai-for-m-s-alwarpet-properties-pvt-ltd-reg-63",
    name: "Proposed Construction of Precast IT Building “Olympia” at porur, Chennai for M/s. Alwarpet Properties Pvt Ltd – reg.",
    category: "Commercial",
    location: "Porur Chennai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Proposed Construction of Precast IT Building “Olympia” at porur, Chennai for M/s. Alwarpet Properties Pvt Ltd – reg. in Porur Chennai.",
    details: {
      client: "Olympia",
      area: "34,216.8",
      floors: "GROUND+4 FLOORS",
      startDate: "JAN'2026",
      completionDate: "APR'2026"
    },
    gallery: []
  },  {
    slug: "remodeling-of-hall-f-at-coddisia-64",
    name: "Remodeling of Hall F at Coddisia",
    category: "Commercial",
    location: "Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Remodeling of Hall F at Coddisia in Coimbatore.",
    details: {
      client: "Codissia",
      area: "15,500.",
      floors: "GROUND+2 FLOORS",
      startDate: "DEC'2025",
      completionDate: "SEP'2026"
    },
    gallery: []
  },  {
    slug: "adithya-cbse-school-1",
    name: "ADITHYA   CBSE SCHOOL",
    category: "Institutional",
    location: "COIMBATORE",
    imageUrl: "/project/institutional/ADITHYA CBSE SCHOOL/Adithya-Idikarai-800x412.jpg",
    status: "Completed",
    description: "Construction of ADITHYA   CBSE SCHOOL in COIMBATORE.",
    details: {
      client: "ADITYA   EDUCATIONAL TRUST",
      area: "141000   SFT",
      floors: "2",
      startDate: "MAR’2014",
      completionDate: "JAN’   2015"
    },
    gallery: [
      "/project/institutional/ADITHYA CBSE SCHOOL/Adithya-Idikarai-800x412.jpg",
      "/project/institutional/ADITHYA CBSE SCHOOL/DSCN1188-800x600.jpg",
      "/project/institutional/ADITHYA CBSE SCHOOL/adithya-international-school-coimbatore-638916226-800x209.jpg",
      "/project/institutional/ADITHYA CBSE SCHOOL/aditya-1-1.jpg",
      "/project/institutional/ADITHYA CBSE SCHOOL/aditya-2-1.jpg"
    ]
  },  {
    slug: "adithya-institute-of-technology-2",
    name: "ADITHYA INSTITUTE OF TECHNOLOGY",
    category: "Institutional",
    location: "COIMBATORE",
    imageUrl: "/project/institutional/ADITHYA INSTITUTE OF TECHNOLOGY/ADD_00381-800x534.jpg",
    status: "Completed",
    description: "Construction of ADITHYA INSTITUTE OF TECHNOLOGY in COIMBATORE.",
    details: {
      client: "ADITYA EDUCATIONAL TRUST",
      area: "325000 SFT",
      floors: "4",
      startDate: "FEB’ 2008",
      completionDate: "AUG’2009"
    },
    gallery: [
      "/project/institutional/ADITHYA INSTITUTE OF TECHNOLOGY/ADD_00381-800x534.jpg",
      "/project/institutional/ADITHYA INSTITUTE OF TECHNOLOGY/ADD_0191-800x534.jpg",
      "/project/institutional/ADITHYA INSTITUTE OF TECHNOLOGY/ADD_0233-800x534.jpg",
      "/project/institutional/ADITHYA INSTITUTE OF TECHNOLOGY/AIT-1-800x531.jpg",
      "/project/institutional/ADITHYA INSTITUTE OF TECHNOLOGY/AIT-2-800x531.jpg",
      "/project/institutional/ADITHYA INSTITUTE OF TECHNOLOGY/AIT-4-800x531.jpg",
      "/project/institutional/ADITHYA INSTITUTE OF TECHNOLOGY/AIT-5-800x531.jpg",
      "/project/institutional/ADITHYA INSTITUTE OF TECHNOLOGY/AIT-6-800x531.jpg",
      "/project/institutional/ADITHYA INSTITUTE OF TECHNOLOGY/DSC_0210-800x531.jpg",
      "/project/institutional/ADITHYA INSTITUTE OF TECHNOLOGY/DSC_0214-800x531.jpg"
    ]
  },  {
    slug: "adithya-institute-of-technology-academic-building-3",
    name: "ADITHYA INSTITUTE OF TECHNOLOGY- ACADEMIC   BUILDING",
    category: "Institutional",
    location: "COIMBATORE",
    imageUrl: "/project/institutional/ADITHYA INSTITUTE OF TECHNOLOGY/ADD_00381-800x534.jpg",
    status: "Completed",
    description: "Construction of ADITHYA INSTITUTE OF TECHNOLOGY- ACADEMIC   BUILDING in COIMBATORE.",
    details: {
      client: "ADITYA EDUCATIONAL TRUST",
      area: "37900 SFT",
      floors: "2",
      startDate: "JUL’ 2023",
      completionDate: "MAR;2025"
    },
    gallery: [
      "/project/institutional/ADITHYA INSTITUTE OF TECHNOLOGY/ADD_00381-800x534.jpg",
      "/project/institutional/ADITHYA INSTITUTE OF TECHNOLOGY/ADD_0191-800x534.jpg",
      "/project/institutional/ADITHYA INSTITUTE OF TECHNOLOGY/ADD_0233-800x534.jpg",
      "/project/institutional/ADITHYA INSTITUTE OF TECHNOLOGY/AIT-1-800x531.jpg",
      "/project/institutional/ADITHYA INSTITUTE OF TECHNOLOGY/AIT-2-800x531.jpg",
      "/project/institutional/ADITHYA INSTITUTE OF TECHNOLOGY/AIT-4-800x531.jpg",
      "/project/institutional/ADITHYA INSTITUTE OF TECHNOLOGY/AIT-5-800x531.jpg",
      "/project/institutional/ADITHYA INSTITUTE OF TECHNOLOGY/AIT-6-800x531.jpg",
      "/project/institutional/ADITHYA INSTITUTE OF TECHNOLOGY/DSC_0210-800x531.jpg",
      "/project/institutional/ADITHYA INSTITUTE OF TECHNOLOGY/DSC_0214-800x531.jpg"
    ]
  },  {
    slug: "adithya-matriculation-school-4",
    name: "ADITHYA MATRICULATION SCHOOL",
    category: "Institutional",
    location: "COIMBATORE",
    imageUrl: "/project/institutional/ADITHYA MATRICULATION SCHOOL/aditya-1.jpg",
    status: "Completed",
    description: "Construction of ADITHYA MATRICULATION SCHOOL in COIMBATORE.",
    details: {
      client: "ADITYA EDUCATIONAL TRUST",
      area: "100000 SFT",
      floors: "2",
      startDate: "MAR’2014",
      completionDate: "JAN’ 2015"
    },
    gallery: [
      "/project/institutional/ADITHYA MATRICULATION SCHOOL/aditya-1.jpg",
      "/project/institutional/ADITHYA MATRICULATION SCHOOL/aditya-2.jpg",
      "/project/institutional/ADITHYA MATRICULATION SCHOOL/aditya-3.jpg",
      "/project/institutional/ADITHYA MATRICULATION SCHOOL/unnamed.jpg"
    ]
  },  {
    slug: "aditya-school-hostel-building-5",
    name: "ADITYA SCHOOL HOSTEL BUILDING",
    category: "Institutional",
    location: "COIMBATORE",
    imageUrl: "/project/institutional/ADITYA SCHOOL HOSTEL BUILDING/img-1-12.jpg",
    status: "Completed",
    description: "Construction of ADITYA SCHOOL HOSTEL BUILDING in COIMBATORE.",
    details: {
      client: "ADITYA EDUCATIONAL TRUST",
      area: "37000 SFT",
      floors: "2",
      startDate: "NOV’ 2017",
      completionDate: "DEC’ 2018"
    },
    gallery: [
      "/project/institutional/ADITYA SCHOOL HOSTEL BUILDING/img-1-12.jpg",
      "/project/institutional/ADITYA SCHOOL HOSTEL BUILDING/img-10-4-800x600.jpg",
      "/project/institutional/ADITYA SCHOOL HOSTEL BUILDING/img-2-12.jpg",
      "/project/institutional/ADITYA SCHOOL HOSTEL BUILDING/img-3-11.jpg",
      "/project/institutional/ADITYA SCHOOL HOSTEL BUILDING/img-4-9.jpg",
      "/project/institutional/ADITYA SCHOOL HOSTEL BUILDING/img-5-9.jpg",
      "/project/institutional/ADITYA SCHOOL HOSTEL BUILDING/img-6-8.jpg",
      "/project/institutional/ADITYA SCHOOL HOSTEL BUILDING/img-7-6-800x600.jpg",
      "/project/institutional/ADITYA SCHOOL HOSTEL BUILDING/img-8-5-800x600.jpg",
      "/project/institutional/ADITYA SCHOOL HOSTEL BUILDING/img-9-4-800x600.jpg",
      "/project/institutional/ADITYA SCHOOL HOSTEL BUILDING/IMG_20190531_152035-800x600.jpg"
    ]
  },  {
    slug: "aditya-school-hostel-building-phase-ii-6",
    name: "ADITYA SCHOOL HOSTEL BUILDING PHASE II",
    category: "Institutional",
    location: "COIMBATORE",
    imageUrl: "/project/institutional/ADITYA SCHOOL HOSTEL BUILDING PHASE II/AH-1-800x600.jpeg",
    status: "Completed",
    description: "Construction of ADITYA SCHOOL HOSTEL BUILDING PHASE II in COIMBATORE.",
    details: {
      client: "ADITYA EDUCATIONAL TRUST",
      area: "34000 SFT",
      floors: "2",
      startDate: "DEC’ 2019",
      completionDate: "JAN’ 2021"
    },
    gallery: [
      "/project/institutional/ADITYA SCHOOL HOSTEL BUILDING PHASE II/AH-1-800x600.jpeg",
      "/project/institutional/ADITYA SCHOOL HOSTEL BUILDING PHASE II/AH-10-800x600.jpeg",
      "/project/institutional/ADITYA SCHOOL HOSTEL BUILDING PHASE II/AH-11-800x600.jpeg",
      "/project/institutional/ADITYA SCHOOL HOSTEL BUILDING PHASE II/AH-12-800x600.jpeg",
      "/project/institutional/ADITYA SCHOOL HOSTEL BUILDING PHASE II/AH-2-800x360.jpg",
      "/project/institutional/ADITYA SCHOOL HOSTEL BUILDING PHASE II/AH-2-800x600.jpeg",
      "/project/institutional/ADITYA SCHOOL HOSTEL BUILDING PHASE II/AH-3-800x360.jpg",
      "/project/institutional/ADITYA SCHOOL HOSTEL BUILDING PHASE II/AH-3-800x600.jpeg",
      "/project/institutional/ADITYA SCHOOL HOSTEL BUILDING PHASE II/AH-4-800x600.jpeg",
      "/project/institutional/ADITYA SCHOOL HOSTEL BUILDING PHASE II/AH-5-800x600.jpeg",
      "/project/institutional/ADITYA SCHOOL HOSTEL BUILDING PHASE II/AH-6-800x600.jpeg",
      "/project/institutional/ADITYA SCHOOL HOSTEL BUILDING PHASE II/AH-7-800x600.jpeg",
      "/project/institutional/ADITYA SCHOOL HOSTEL BUILDING PHASE II/AH-8-800x600.jpeg",
      "/project/institutional/ADITYA SCHOOL HOSTEL BUILDING PHASE II/AH-9-800x600.jpeg",
      "/project/institutional/ADITYA SCHOOL HOSTEL BUILDING PHASE II/AH-9-800x600.jpg"
    ]
  },  {
    slug: "arjun-college-of-technology-7",
    name: "ARJUN COLLEGE OF TECHNOLOGY",
    category: "Institutional",
    location: "COIMBATORE",
    imageUrl: "/project/institutional/ARJUN COLLEGE OF TECHNOLOGY/Arjun-1-800x384.jpeg",
    status: "Completed",
    description: "Construction of ARJUN COLLEGE OF TECHNOLOGY in COIMBATORE.",
    details: {
      client: "ARJUN EDUCATIONAL TRUST",
      area: "100000 SFT",
      floors: "3",
      startDate: "OCT’2012",
      completionDate: "NOV’ 2014"
    },
    gallery: [
      "/project/institutional/ARJUN COLLEGE OF TECHNOLOGY/Arjun-1-800x384.jpeg",
      "/project/institutional/ARJUN COLLEGE OF TECHNOLOGY/Arjun-10-800x384.jpeg",
      "/project/institutional/ARJUN COLLEGE OF TECHNOLOGY/Arjun-2-1-800x384.jpeg",
      "/project/institutional/ARJUN COLLEGE OF TECHNOLOGY/Arjun-2-800x207.jpeg",
      "/project/institutional/ARJUN COLLEGE OF TECHNOLOGY/Arjun-3-1-800x384.jpeg",
      "/project/institutional/ARJUN COLLEGE OF TECHNOLOGY/Arjun-3-800x533.jpeg",
      "/project/institutional/ARJUN COLLEGE OF TECHNOLOGY/Arjun-4-1-800x384.jpeg",
      "/project/institutional/ARJUN COLLEGE OF TECHNOLOGY/Arjun-4-800x533.jpeg",
      "/project/institutional/ARJUN COLLEGE OF TECHNOLOGY/Arjun-5-800x384.jpeg",
      "/project/institutional/ARJUN COLLEGE OF TECHNOLOGY/Arjun-6-1-800x384.jpeg",
      "/project/institutional/ARJUN COLLEGE OF TECHNOLOGY/Arjun-6-800x533.jpeg",
      "/project/institutional/ARJUN COLLEGE OF TECHNOLOGY/Arjun-7-1-800x384.jpeg",
      "/project/institutional/ARJUN COLLEGE OF TECHNOLOGY/Arjun-7-800x399.jpeg",
      "/project/institutional/ARJUN COLLEGE OF TECHNOLOGY/Arjun-8-1-800x384.jpeg",
      "/project/institutional/ARJUN COLLEGE OF TECHNOLOGY/Arjun-8-800x450.jpeg",
      "/project/institutional/ARJUN COLLEGE OF TECHNOLOGY/Arjun-9-800x426.jpeg",
      "/project/institutional/ARJUN COLLEGE OF TECHNOLOGY/SAPL-Diary-Final-6B-800x315.jpg"
    ]
  },  {
    slug: "civil-and-allied-works-8",
    name: "Civil and allied works",
    category: "Institutional",
    location: "Singadivakkam, Chennai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Civil and allied works in Singadivakkam, Chennai.",
    details: {
      client: "Systematic Conscom Limited No:8, Iyyancherry village, sivasami pradhana salai, Urapakkam, District, Chengalpattu - 603 202",
      area: "8,000.",
      floors: "GF FLOOR",
      startDate: "JUN' 2024",
      completionDate: "MAR' 2025"
    },
    gallery: []
  },  {
    slug: "construction-of-additional-buildings-9",
    name: "Construction of Additional Buildings",
    category: "Institutional",
    location: "Kidaripatti village, Madurai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Additional Buildings in Kidaripatti village, Madurai.",
    details: {
      client: "M/s. Karuppiah Pillai Thevanai Ammal Educational Trust, Latha Mathavan Nagar, Kidaripatti, Alagar Kovil, Melur Taluk, Madurai - 625 301.",
      area: "72,000.",
      floors: "GROUND + 3 FLOORS",
      startDate: "MAR'2009",
      completionDate: "MAR'2011"
    },
    gallery: []
  },  {
    slug: "construction-of-admin-block-extension-miscellaneous-10",
    name: "Construction of Admin Block Extension &miscellaneous",
    category: "Institutional",
    location: "Athipalayam, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Admin Block Extension &miscellaneous in Athipalayam, Coimbatore.",
    details: {
      client: "Sri Ranganathar Trust",
      area: "49,000.",
      floors: "GF + 2 Floors",
      startDate: "SEP' 2023",
      completionDate: "MAR' 2025"
    },
    gallery: []
  },  {
    slug: "construction-of-arjun-college-of-technology-academic-block-b-block-sf-girls-hostel-11",
    name: "Construction of Arjun College of Technology, Academic Block-\"B\" Block SF, Girls Hostel",
    category: "Institutional",
    location: "Chettiyakkapalayam,Tamaraikulam, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Arjun College of Technology, Academic Block-\"B\" Block SF, Girls Hostel in Chettiyakkapalayam,Tamaraikulam, Coimbatore.",
    details: {
      client: "ARJUN EDUCATIONAL TRUST",
      area: "40,000.",
      floors: "GROUND + FIRST FLOOR",
      startDate: "FEB'2015",
      completionDate: "AUG' 2015"
    },
    gallery: []
  },  {
    slug: "construction-of-girls-hostel-12",
    name: "Construction of Girls Hostel",
    category: "Institutional",
    location: "Athipalayam, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Girls Hostel in Athipalayam, Coimbatore.",
    details: {
      client: "Sri Ranganathar Trust",
      area: "30,000.",
      floors: "GF + 2 Floors",
      startDate: "SEP' 2023",
      completionDate: "MAR' 2025"
    },
    gallery: []
  },  {
    slug: "construction-of-girls-hostel-at-arjun-college-of-technology-13",
    name: "Construction of Girls Hostel at Arjun college of Technology",
    category: "Institutional",
    location: "Tamaraikulam Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Girls Hostel at Arjun college of Technology in Tamaraikulam Coimbatore.",
    details: {
      client: "ARJUN EDUCATIONAL TRUST",
      area: "24,000.",
      floors: "GROUND + 1 FLOORS",
      startDate: "JUN' 2021",
      completionDate: "DEC' 2021"
    },
    gallery: []
  },  {
    slug: "construction-of-government-tribal-residential-high-school-14",
    name: "Construction of Government Tribal Residential High School",
    category: "Institutional",
    location: "Mavuthampathi, Palakkad road, Navakkarai (POST) cbe",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Government Tribal Residential High School in Mavuthampathi, Palakkad road, Navakkarai (POST) cbe.",
    details: {
      client: "M/s. GOVEL Trust – Aravind Eye Hospitals",
      area: "4,500.",
      floors: "Ground + FF",
      startDate: "OCT'2023",
      completionDate: "DEC2024"
    },
    gallery: []
  },  {
    slug: "construction-of-mba-mca-block-buliding-at-coimbatore-15",
    name: "Construction of MBA/ MCA Block buliding at Coimbatore",
    category: "Institutional",
    location: "Nava India Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of MBA/ MCA Block buliding at Coimbatore in Nava India Coimbatore.",
    details: {
      client: "M/s. Hindusthan Education and charitable trust, Nava India, Coimbatore",
      area: "90,500.",
      floors: "GROUND + 5 FLOORS",
      startDate: "MAR' 2016",
      completionDate: "MAY' 2018"
    },
    gallery: []
  },  {
    slug: "construction-of-school-building-16",
    name: "Construction of School Building",
    category: "Institutional",
    location: "KK Nagar, Thallakulam, Madurai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of School Building in KK Nagar, Thallakulam, Madurai.",
    details: {
      client: "M/s. Mahatma Gandhi School, KK Nagar, Thallakulam, Madurai - 625 020",
      area: "2,70,000.",
      floors: "GROUND + 3 FLOORS",
      startDate: "APR' 2007",
      completionDate: "APR' 2008"
    },
    gallery: []
  },  {
    slug: "construction-of-siddha-and-yoga-building-17",
    name: "Construction of Siddha and yoga building",
    category: "Institutional",
    location: "Thiruvanmiyur, Chennai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Siddha and yoga building in Thiruvanmiyur, Chennai.",
    details: {
      client: "M/s. The World community service centre, 26, second seward street, Valmiki Nagar, Thiruvanmiyur, Chennai - 600 041",
      area: "4,756.",
      floors: "GF +1 Floors",
      startDate: "JUN' 2023",
      completionDate: "MAR' 2025"
    },
    gallery: []
  },  {
    slug: "construction-of-visiting-staff-quarters-building-and-staff-quarters-commercial-block-18",
    name: "Construction of Visiting Staff Quarters Building and Staff quarters (Commercial Block)",
    category: "Institutional",
    location: "Neelambur,   Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Visiting Staff Quarters Building and Staff quarters (Commercial Block) in Neelambur,   Coimbatore.",
    details: {
      client: "PSG & SONS’   Charities",
      area: "78,500.",
      floors: "GROUND + 5 FLOORS",
      startDate: "FEB'2015",
      completionDate: "MAR' 2018"
    },
    gallery: []
  },  {
    slug: "hindusthan-college-of-arts-science-19",
    name: "HINDUSTHAN COLLEGE OF ARTS & SCIENCE",
    category: "Institutional",
    location: "COIMBATORE",
    imageUrl: "/project/institutional/HINDUSTHAN COLLEGE OF ARTS & SCIENCE/1-1-800x1318.jpg",
    status: "Completed",
    description: "Construction of HINDUSTHAN COLLEGE OF ARTS & SCIENCE in COIMBATORE.",
    details: {
      client: "HINDUSTHAN   EDUCATION AND CHARITABLE TRUST",
      area: "28000 SFT",
      floors: "5",
      startDate: "MAR’ 2016",
      completionDate: "APR’ 2019"
    },
    gallery: [
      "/project/institutional/HINDUSTHAN COLLEGE OF ARTS & SCIENCE/1-1-800x1318.jpg",
      "/project/institutional/HINDUSTHAN COLLEGE OF ARTS & SCIENCE/Hin-1.jpg",
      "/project/institutional/HINDUSTHAN COLLEGE OF ARTS & SCIENCE/Hin-2-800x534.jpg",
      "/project/institutional/HINDUSTHAN COLLEGE OF ARTS & SCIENCE/Hin-3-800x600.jpg",
      "/project/institutional/HINDUSTHAN COLLEGE OF ARTS & SCIENCE/Hin-4-800x600.jpg",
      "/project/institutional/HINDUSTHAN COLLEGE OF ARTS & SCIENCE/Hin-5-800x451.jpg",
      "/project/institutional/HINDUSTHAN COLLEGE OF ARTS & SCIENCE/hindusthan-800x600.jpg"
    ]
  },  {
    slug: "kfi-the-school-20",
    name: "KFI-THE SCHOOL",
    category: "Institutional",
    location: "CHENNAI",
    imageUrl: "/project/institutional/KFI-THE SCHOOL/01-1.jpg",
    status: "Completed",
    description: "Construction of KFI-THE SCHOOL in CHENNAI.",
    details: {
      client: "THE SCHOOL KRISHNAMURTI",
      area: "55500 SFT",
      floors: "2",
      startDate: "JUN’ 2017",
      completionDate: "SEP’ 2018"
    },
    gallery: [
      "/project/institutional/KFI-THE SCHOOL/01-1.jpg",
      "/project/institutional/KFI-THE SCHOOL/01-2.jpg",
      "/project/institutional/KFI-THE SCHOOL/01-800x543.jpg",
      "/project/institutional/KFI-THE SCHOOL/02-800x543.jpg",
      "/project/institutional/KFI-THE SCHOOL/03-1.jpg",
      "/project/institutional/KFI-THE SCHOOL/03-2.jpg",
      "/project/institutional/KFI-THE SCHOOL/03.jpg",
      "/project/institutional/KFI-THE SCHOOL/04.jpg",
      "/project/institutional/KFI-THE SCHOOL/07-1.jpg",
      "/project/institutional/KFI-THE SCHOOL/07.jpg",
      "/project/institutional/KFI-THE SCHOOL/3-800x409.jpg",
      "/project/institutional/KFI-THE SCHOOL/5-800x423.jpg",
      "/project/institutional/KFI-THE SCHOOL/img-1-3.jpg",
      "/project/institutional/KFI-THE SCHOOL/img-2-3.jpg",
      "/project/institutional/KFI-THE SCHOOL/img-3-3.jpg",
      "/project/institutional/KFI-THE SCHOOL/img-4-3.jpg",
      "/project/institutional/KFI-THE SCHOOL/img-5-3.jpg",
      "/project/institutional/KFI-THE SCHOOL/img-6-2.jpg"
    ]
  },  {
    slug: "kumaraguru-college-of-technology-21",
    name: "KUMARAGURU COLLEGE OF TECHNOLOGY",
    category: "Institutional",
    location: "COIMBATORE",
    imageUrl: "/project/institutional/KUMARAGURU COLLEGE OF TECHNOLOGY/KCT-1-800x236.jpg",
    status: "Completed",
    description: "Construction of KUMARAGURU COLLEGE OF TECHNOLOGY in COIMBATORE.",
    details: {
      client: "M/s. Kumaraguru College of Technology",
      area: "97000 SFT",
      floors: "3",
      startDate: "NOV’2011",
      completionDate: "MAR’2013"
    },
    gallery: [
      "/project/institutional/KUMARAGURU COLLEGE OF TECHNOLOGY/KCT-1-800x236.jpg",
      "/project/institutional/KUMARAGURU COLLEGE OF TECHNOLOGY/kct-1.jpg",
      "/project/institutional/KUMARAGURU COLLEGE OF TECHNOLOGY/KCT-10-800x450.jpg",
      "/project/institutional/KUMARAGURU COLLEGE OF TECHNOLOGY/KCT-11-800x450.jpg",
      "/project/institutional/KUMARAGURU COLLEGE OF TECHNOLOGY/KCT-12-800x450.jpg",
      "/project/institutional/KUMARAGURU COLLEGE OF TECHNOLOGY/KCT-13-800x600.jpg",
      "/project/institutional/KUMARAGURU COLLEGE OF TECHNOLOGY/KCT-14-800x600.jpg",
      "/project/institutional/KUMARAGURU COLLEGE OF TECHNOLOGY/KCT-15-800x600.jpg",
      "/project/institutional/KUMARAGURU COLLEGE OF TECHNOLOGY/KCT-16-800x600.jpg",
      "/project/institutional/KUMARAGURU COLLEGE OF TECHNOLOGY/KCT-17-800x600.jpg",
      "/project/institutional/KUMARAGURU COLLEGE OF TECHNOLOGY/KCT-3-800x600.jpg",
      "/project/institutional/KUMARAGURU COLLEGE OF TECHNOLOGY/kct-3.jpg",
      "/project/institutional/KUMARAGURU COLLEGE OF TECHNOLOGY/KCT-4-800x600.jpg",
      "/project/institutional/KUMARAGURU COLLEGE OF TECHNOLOGY/KCT-6-800x600.jpg",
      "/project/institutional/KUMARAGURU COLLEGE OF TECHNOLOGY/KCT-7-800x600.jpg",
      "/project/institutional/KUMARAGURU COLLEGE OF TECHNOLOGY/KCT-8-800x600.jpg",
      "/project/institutional/KUMARAGURU COLLEGE OF TECHNOLOGY/KCT-9-800x450.jpg"
    ]
  },  {
    slug: "m-s-d-j-academy-for-managerial-excellence-22",
    name: "M/s.D.J. ACADEMY FOR MANAGERIAL EXCELLENCE",
    category: "Institutional",
    location: "COIMBATORE",
    imageUrl: "/project/institutional/Ms.D.J. ACADEMY FOR MANAGERIAL EXCELLENCE/DJ-1-800x446.jpeg",
    status: "Completed",
    description: "Construction of M/s.D.J. ACADEMY FOR MANAGERIAL EXCELLENCE in COIMBATORE.",
    details: {
      client: "D.J. ACADEMY FOR MANAGERIAL EXCELLENCE",
      area: "21000 SFT",
      floors: "2 & 3",
      startDate: "MAR’ 2006",
      completionDate: "MAR’2007"
    },
    gallery: [
      "/project/institutional/Ms.D.J. ACADEMY FOR MANAGERIAL EXCELLENCE/DJ-1-800x446.jpeg",
      "/project/institutional/Ms.D.J. ACADEMY FOR MANAGERIAL EXCELLENCE/DJ-1-800x600.jpg",
      "/project/institutional/Ms.D.J. ACADEMY FOR MANAGERIAL EXCELLENCE/DJ-10-800x600.jpg",
      "/project/institutional/Ms.D.J. ACADEMY FOR MANAGERIAL EXCELLENCE/DJ-2-800x600.jpg",
      "/project/institutional/Ms.D.J. ACADEMY FOR MANAGERIAL EXCELLENCE/DJ-3-800x494.jpeg",
      "/project/institutional/Ms.D.J. ACADEMY FOR MANAGERIAL EXCELLENCE/DJ-3-800x600.jpg",
      "/project/institutional/Ms.D.J. ACADEMY FOR MANAGERIAL EXCELLENCE/DJ-4-800x600.jpg",
      "/project/institutional/Ms.D.J. ACADEMY FOR MANAGERIAL EXCELLENCE/DJ-5-800x600.jpg",
      "/project/institutional/Ms.D.J. ACADEMY FOR MANAGERIAL EXCELLENCE/DJ-6-800x600.jpg",
      "/project/institutional/Ms.D.J. ACADEMY FOR MANAGERIAL EXCELLENCE/DJ-7-800x600.jpg",
      "/project/institutional/Ms.D.J. ACADEMY FOR MANAGERIAL EXCELLENCE/DJ-8-800x600.jpg",
      "/project/institutional/Ms.D.J. ACADEMY FOR MANAGERIAL EXCELLENCE/DJ-9-800x600.jpg"
    ]
  },  {
    slug: "m-s-gkd-charity-trust-23",
    name: "M/s. GKD CHARITY TRUST",
    category: "Institutional",
    location: "COIMBATORE",
    imageUrl: "/project/institutional/Ms. GKD CHARITY TRUST/DSCN0073-800x600.jpg",
    status: "Completed",
    description: "Construction of M/s. GKD CHARITY TRUST in COIMBATORE.",
    details: {
      client: "GKD CHARITY TRUST",
      area: "52500 SFT",
      floors: "2",
      startDate: "MAY’ 2004",
      completionDate: "AUG’ 2005"
    },
    gallery: [
      "/project/institutional/Ms. GKD CHARITY TRUST/DSCN0073-800x600.jpg",
      "/project/institutional/Ms. GKD CHARITY TRUST/DSC_0016-800x537.jpg",
      "/project/institutional/Ms. GKD CHARITY TRUST/DSC_0018-800x537.jpg",
      "/project/institutional/Ms. GKD CHARITY TRUST/DSC_0021-800x537.jpg",
      "/project/institutional/Ms. GKD CHARITY TRUST/DSC_0023-800x537.jpg"
    ]
  },  {
    slug: "mahatma-montessori-school-24",
    name: "MAHATMA MONTESSORI SCHOOL",
    category: "Institutional",
    location: "MADURAI",
    imageUrl: "/project/institutional/MAHATMA MONTESSORI SCHOOL/Maha-1-800x534.jpg",
    status: "Completed",
    description: "Construction of MAHATMA MONTESSORI SCHOOL in MADURAI.",
    details: {
      client: "MAHATMA MONTESSORI SCHOOL",
      area: "203000 SFT",
      floors: "3",
      startDate: "2010-08-01",
      completionDate: "2012-07-01"
    },
    gallery: [
      "/project/institutional/MAHATMA MONTESSORI SCHOOL/Maha-1-800x534.jpg",
      "/project/institutional/MAHATMA MONTESSORI SCHOOL/Maha-2-800x531.jpg",
      "/project/institutional/MAHATMA MONTESSORI SCHOOL/Maha-3-800x531.jpg",
      "/project/institutional/MAHATMA MONTESSORI SCHOOL/Maha-4-800x531.jpg",
      "/project/institutional/MAHATMA MONTESSORI SCHOOL/Maha-5-800x531.jpg",
      "/project/institutional/MAHATMA MONTESSORI SCHOOL/Mahatma-Gandhi-School-800x485.jpg"
    ]
  },  {
    slug: "mepco-schlenk-engineering-college-25",
    name: "MEPCO SCHLENK ENGINEERING COLLEGE",
    category: "Institutional",
    location: "SIVAKASI",
    imageUrl: "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/img-1-23-800x450.jpg",
    status: "Completed",
    description: "Construction of MEPCO SCHLENK ENGINEERING COLLEGE in SIVAKASI.",
    details: {
      client: "MEPCO SCHLENK CHARITIES",
      area: "204400 SFT",
      floors: "2",
      startDate: "FEB’ 2018",
      completionDate: "JAN’ 2020"
    },
    gallery: [
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/img-1-23-800x450.jpg",
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/img-10-9-800x450.jpg",
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/img-2-23-800x450.jpg",
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/IMG-20221231-WA0000-800x600.jpg",
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/IMG-20221231-WA0001.jpg",
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/IMG-20221231-WA0002-800x600.jpg",
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/IMG-20221231-WA0003-800x600.jpg",
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/IMG-20221231-WA0004-800x600.jpg",
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/img-3-21-800x600.jpg",
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/img-3-22-800x450.jpg",
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/img-4-20-800x450.jpg",
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/img-5-19-800x450.jpg",
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/img-6-16-800x450.jpg",
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/img-7-12-800x450.jpg",
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/img-8-10-800x450.jpg",
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/img-9-9-800x450.jpg",
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/Mepco-1-800x450.jpeg",
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/Mepco-13-800x450.jpeg",
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/Mepco-14-800x450.jpeg",
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/Mepco-15-800x450.jpeg",
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/Mepco-16-800x450.jpeg",
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/Mepco-17-800x450.jpeg",
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/Mepco-2-800x450.jpeg",
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/Mepco-3-800x450.jpeg",
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/Mepco-4-800x450.jpeg",
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/Mepco-5-800x450.jpeg",
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/Mepco-6-800x450.jpeg",
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/Mepco-7-800x450.jpeg",
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/Mepco-8-800x450.jpeg",
      "/project/institutional/MEPCO SCHLENK ENGINEERING COLLEGE/mepco-800x600.jpeg"
    ]
  },  {
    slug: "proposed-toilet-modification-work-gf-sf-gents-toilet-and-ff-ladies-toilet-26",
    name: "Proposed Toilet Modification work - GF & SF Gents Toilet and FF Ladies Toilet",
    category: "Institutional",
    location: "Kuniyamuthur, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Proposed Toilet Modification work - GF & SF Gents Toilet and FF Ladies Toilet in Kuniyamuthur, Coimbatore.",
    details: {
      client: "M/s. Sri Krishna college of Technology, Coimbatore",
      startDate: "JUL' 2022",
      completionDate: "Dec' 2022"
    },
    gallery: []
  },  {
    slug: "psg-ims-r-oncology-block-27",
    name: "PSG IMS&R ONCOLOGY BLOCK",
    category: "Institutional",
    location: "COIMBATORE",
    imageUrl: "/project/institutional/PSG IMS&R ONCOLOGY BLOCK/22e7ed7a-0812-4a79-9a00-efa2ffa64989.jpeg",
    status: "Completed",
    description: "Construction of PSG IMS&R ONCOLOGY BLOCK in COIMBATORE.",
    details: {
      client: "PSG & SONS’   Charities",
      area: "220000 SFT",
      floors: "8",
      startDate: "AUG’ 2020",
      completionDate: "FEB’ 2024"
    },
    gallery: [
      "/project/institutional/PSG IMS&R ONCOLOGY BLOCK/22e7ed7a-0812-4a79-9a00-efa2ffa64989.jpeg",
      "/project/institutional/PSG IMS&R ONCOLOGY BLOCK/983e34be-b413-4852-a8f7-31182adc27d2-800x600.jpeg",
      "/project/institutional/PSG IMS&R ONCOLOGY BLOCK/onc-7-800x389.jpeg",
      "/project/institutional/PSG IMS&R ONCOLOGY BLOCK/oncb2-800x523.jpg",
      "/project/institutional/PSG IMS&R ONCOLOGY BLOCK/Onco-1-800x534.jpg",
      "/project/institutional/PSG IMS&R ONCOLOGY BLOCK/Oncolo-3-800x361.jpeg",
      "/project/institutional/PSG IMS&R ONCOLOGY BLOCK/oncology-800x450.jpeg",
      "/project/institutional/PSG IMS&R ONCOLOGY BLOCK/Oncology-800x451.jpg",
      "/project/institutional/PSG IMS&R ONCOLOGY BLOCK/Oncology1-800x517.jpg",
      "/project/institutional/PSG IMS&R ONCOLOGY BLOCK/Oncology2-800x511.jpg",
      "/project/institutional/PSG IMS&R ONCOLOGY BLOCK/Oncology3-800x497.jpg",
      "/project/institutional/PSG IMS&R ONCOLOGY BLOCK/Oncology4-800x468.jpg",
      "/project/institutional/PSG IMS&R ONCOLOGY BLOCK/Oncology5-800x510.jpg",
      "/project/institutional/PSG IMS&R ONCOLOGY BLOCK/Oncology6-800x502.jpg",
      "/project/institutional/PSG IMS&R ONCOLOGY BLOCK/Oncology7-800x489.jpg",
      "/project/institutional/PSG IMS&R ONCOLOGY BLOCK/psgo-1-800x452.jpg",
      "/project/institutional/PSG IMS&R ONCOLOGY BLOCK/psgo-2-800x452.jpg",
      "/project/institutional/PSG IMS&R ONCOLOGY BLOCK/psgo-3-800x452.jpg",
      "/project/institutional/PSG IMS&R ONCOLOGY BLOCK/PSGOncology-4-800x452.jpg"
    ]
  },  {
    slug: "psg-institute-of-medical-sciences-research-ladies-and-gents-hostel-28",
    name: "PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH (LADIES AND GENTS HOSTEL)",
    category: "Institutional",
    location: "COIMBATORE",
    imageUrl: "/project/institutional/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH (LADIES AND GENTS HOSTEL)/DSC03503-800x534.jpg",
    status: "Completed",
    description: "Construction of PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH (LADIES AND GENTS HOSTEL) in COIMBATORE.",
    details: {
      client: "PSG & SONS’   Charities",
      area: "285600 SFT",
      floors: "8",
      startDate: "MAR’ 2016",
      completionDate: "NOV’ 2017"
    },
    gallery: [
      "/project/institutional/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH (LADIES AND GENTS HOSTEL)/DSC03503-800x534.jpg",
      "/project/institutional/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH (LADIES AND GENTS HOSTEL)/DSC03506-800x534.jpg",
      "/project/institutional/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH (LADIES AND GENTS HOSTEL)/DSC03511-800x534.jpg",
      "/project/institutional/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH (LADIES AND GENTS HOSTEL)/DSC03514-800x534.jpg",
      "/project/institutional/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH (LADIES AND GENTS HOSTEL)/PICTURE01-800x552.jpg",
      "/project/institutional/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH (LADIES AND GENTS HOSTEL)/PICTURE07-800x454.jpg",
      "/project/institutional/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH (LADIES AND GENTS HOSTEL)/PSG-IMSR-HOSTEL-800x600.jpg"
    ]
  },  {
    slug: "psg-institute-of-technology-applied-research-29",
    name: "PSG INSTITUTE OF TECHNOLOGY & APPLIED RESEARCH",
    category: "Institutional",
    location: "COIMBATORE",
    imageUrl: "/project/institutional/PSG INSTITUTE OF TECHNOLOGY & APPLIED RESEARCH/DSCF9105-800x600.jpg",
    status: "Completed",
    description: "Construction of PSG INSTITUTE OF TECHNOLOGY & APPLIED RESEARCH in COIMBATORE.",
    details: {
      client: "PSG & SONS’   Charities",
      area: "75000 SFT",
      floors: "GROUND FLOOR",
      startDate: "JUN’ 2015",
      completionDate: "JUN’ 2017"
    },
    gallery: [
      "/project/institutional/PSG INSTITUTE OF TECHNOLOGY & APPLIED RESEARCH/DSCF9105-800x600.jpg",
      "/project/institutional/PSG INSTITUTE OF TECHNOLOGY & APPLIED RESEARCH/IMG_20160430_101710-800x450.jpg",
      "/project/institutional/PSG INSTITUTE OF TECHNOLOGY & APPLIED RESEARCH/IMG_9784-ok-800x534.jpg",
      "/project/institutional/PSG INSTITUTE OF TECHNOLOGY & APPLIED RESEARCH/IMG_9791-ko-800x534.jpg",
      "/project/institutional/PSG INSTITUTE OF TECHNOLOGY & APPLIED RESEARCH/psg-itar-1.jpg",
      "/project/institutional/PSG INSTITUTE OF TECHNOLOGY & APPLIED RESEARCH/psg-itar-2.jpg",
      "/project/institutional/PSG INSTITUTE OF TECHNOLOGY & APPLIED RESEARCH/psg-itar-3.jpg",
      "/project/institutional/PSG INSTITUTE OF TECHNOLOGY & APPLIED RESEARCH/psg-itar-4.jpg"
    ]
  },  {
    slug: "ramakrishna-mission-vidyalaya-30",
    name: "RAMAKRISHNA MISSION VIDYALAYA",
    category: "Institutional",
    location: "COIMBATORE",
    imageUrl: "/project/institutional/RAMAKRISHNA MISSION VIDYALAYA/20200808_105443-800x370.jpg",
    status: "Completed",
    description: "Construction of RAMAKRISHNA MISSION VIDYALAYA in COIMBATORE.",
    details: {
      client: "RAMAKRISHNA   MISSION VIDYALAYA",
      area: "10500 SFT",
      floors: "GF",
      startDate: "Jan’ 2020",
      completionDate: "Apr’ 2022"
    },
    gallery: [
      "/project/institutional/RAMAKRISHNA MISSION VIDYALAYA/20200808_105443-800x370.jpg",
      "/project/institutional/RAMAKRISHNA MISSION VIDYALAYA/RMV-1-rotated.jpg",
      "/project/institutional/RAMAKRISHNA MISSION VIDYALAYA/RMV-13-800x370.jpg",
      "/project/institutional/RAMAKRISHNA MISSION VIDYALAYA/RMV-3-rotated.jpg",
      "/project/institutional/RAMAKRISHNA MISSION VIDYALAYA/RMV-7-800x370.jpg",
      "/project/institutional/RAMAKRISHNA MISSION VIDYALAYA/RMV-8-800x370.jpg",
      "/project/institutional/RAMAKRISHNA MISSION VIDYALAYA/SRKV-1-1-800x400.jpg",
      "/project/institutional/RAMAKRISHNA MISSION VIDYALAYA/SRKV-2-1-800x400.jpg",
      "/project/institutional/RAMAKRISHNA MISSION VIDYALAYA/srkv-2-800x361.jpg",
      "/project/institutional/RAMAKRISHNA MISSION VIDYALAYA/SRKV-3-1-800x400.jpg",
      "/project/institutional/RAMAKRISHNA MISSION VIDYALAYA/SRKV-4-1-800x400.jpg",
      "/project/institutional/RAMAKRISHNA MISSION VIDYALAYA/srkv-4-800x400.jpg",
      "/project/institutional/RAMAKRISHNA MISSION VIDYALAYA/srkv-5-800x400.jpg",
      "/project/institutional/RAMAKRISHNA MISSION VIDYALAYA/SRMV-1-800x448.jpg",
      "/project/institutional/RAMAKRISHNA MISSION VIDYALAYA/SRMV-2-800x448.jpg",
      "/project/institutional/RAMAKRISHNA MISSION VIDYALAYA/SRMV-4-800x459.jpg"
    ]
  },  {
    slug: "renovation-work-in-d-block-and-boys-hostel-2-31",
    name: "Renovation work in \"D\" Block and Boys Hostel -2",
    category: "Institutional",
    location: "Saravanampatti, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Renovation work in \"D\" Block and Boys Hostel -2 in Saravanampatti, Coimbatore.",
    details: {
      client: "M/s. Kumaraguru College of Technology",
      area: "22,300.",
      floors: "RENOVATION",
      startDate: "MAY'2013",
      completionDate: "OCT'2013"
    },
    gallery: []
  },  {
    slug: "sri-krishna-college-of-technology-boys-hostel-2-32",
    name: "SRI KRISHNA COLLEGE OF TECHNOLOGY- BOYS HOSTEL 2",
    category: "Institutional",
    location: "COIMBATORE",
    imageUrl: "/project/institutional/SRI KRISHNA COLLEGE OF TECHNOLOGY- BOYS HOSTEL 2/Krishna-1-800x450.jpeg",
    status: "Completed",
    description: "Construction of SRI KRISHNA COLLEGE OF TECHNOLOGY- BOYS HOSTEL 2 in COIMBATORE.",
    details: {
      client: "SRI KRISHNA COLLEGE OF TECHNOLOGY",
      area: "106100 SFT",
      floors: "3",
      startDate: "JAN’ 2022",
      completionDate: "DEC’2022"
    },
    gallery: [
      "/project/institutional/SRI KRISHNA COLLEGE OF TECHNOLOGY- BOYS HOSTEL 2/Krishna-1-800x450.jpeg",
      "/project/institutional/SRI KRISHNA COLLEGE OF TECHNOLOGY- BOYS HOSTEL 2/Krishna-10-800x450.jpeg",
      "/project/institutional/SRI KRISHNA COLLEGE OF TECHNOLOGY- BOYS HOSTEL 2/Krishna-11-800x600.jpeg",
      "/project/institutional/SRI KRISHNA COLLEGE OF TECHNOLOGY- BOYS HOSTEL 2/Krishna-12-800x450.jpeg",
      "/project/institutional/SRI KRISHNA COLLEGE OF TECHNOLOGY- BOYS HOSTEL 2/Krishna-2-800x361.jpeg",
      "/project/institutional/SRI KRISHNA COLLEGE OF TECHNOLOGY- BOYS HOSTEL 2/Krishna-3-800x450.jpeg",
      "/project/institutional/SRI KRISHNA COLLEGE OF TECHNOLOGY- BOYS HOSTEL 2/Krishna-4-800x361.jpeg",
      "/project/institutional/SRI KRISHNA COLLEGE OF TECHNOLOGY- BOYS HOSTEL 2/Krishna-5-800x450.jpeg",
      "/project/institutional/SRI KRISHNA COLLEGE OF TECHNOLOGY- BOYS HOSTEL 2/Krishna-6-800x450.jpeg",
      "/project/institutional/SRI KRISHNA COLLEGE OF TECHNOLOGY- BOYS HOSTEL 2/Krishna-7-800x450.jpeg",
      "/project/institutional/SRI KRISHNA COLLEGE OF TECHNOLOGY- BOYS HOSTEL 2/Krishna-8-800x450.jpeg",
      "/project/institutional/SRI KRISHNA COLLEGE OF TECHNOLOGY- BOYS HOSTEL 2/Krishna-9-800x450.jpeg"
    ]
  },  {
    slug: "sri-ramakrishna-engineering-college-33",
    name: "SRI RAMAKRISHNA ENGINEERING COLLEGE",
    category: "Institutional",
    location: "COIMBATORE",
    imageUrl: "/project/institutional/SRI RAMAKRISHNA ENGINEERING COLLEGE/SREC1.jpg",
    status: "Completed",
    description: "Construction of SRI RAMAKRISHNA ENGINEERING COLLEGE in COIMBATORE.",
    details: {
      client: "SNR SONS CHARITABLE TRUST",
      area: "1,84,000 SFT",
      floors: "2",
      startDate: "1996",
      completionDate: "1998"
    },
    gallery: [
      "/project/institutional/SRI RAMAKRISHNA ENGINEERING COLLEGE/SREC1.jpg",
      "/project/institutional/SRI RAMAKRISHNA ENGINEERING COLLEGE/SREC2.jpg",
      "/project/institutional/SRI RAMAKRISHNA ENGINEERING COLLEGE/SREC3.jpg",
      "/project/institutional/SRI RAMAKRISHNA ENGINEERING COLLEGE/SREC4.jpg",
      "/project/institutional/SRI RAMAKRISHNA ENGINEERING COLLEGE/Sri-Ramakrishna-Engineering-College.jpg"
    ]
  },  {
    slug: "sri-ramakrishna-institute-of-technology-34",
    name: "SRI RAMAKRISHNA INSTITUTE OF TECHNOLOGY",
    category: "Institutional",
    location: "COIMBATORE",
    imageUrl: "/project/institutional/SRI RAMAKRISHNA INSTITUTE OF TECHNOLOGY/Sri-Ramakrishna-Institute-of-Technology-800x600.jpg",
    status: "Completed",
    description: "Construction of SRI RAMAKRISHNA INSTITUTE OF TECHNOLOGY in COIMBATORE.",
    details: {
      client: "SNR SONS CHARITABLE TRUST",
      area: "1,75,000 SFT",
      floors: "3",
      startDate: "2000",
      completionDate: "2002"
    },
    gallery: [
      "/project/institutional/SRI RAMAKRISHNA INSTITUTE OF TECHNOLOGY/Sri-Ramakrishna-Institute-of-Technology-800x600.jpg",
      "/project/institutional/SRI RAMAKRISHNA INSTITUTE OF TECHNOLOGY/SRIT-1-800x600.jpg",
      "/project/institutional/SRI RAMAKRISHNA INSTITUTE OF TECHNOLOGY/SRIT-10-800x600.jpg",
      "/project/institutional/SRI RAMAKRISHNA INSTITUTE OF TECHNOLOGY/SRIT-2-800x600.jpg",
      "/project/institutional/SRI RAMAKRISHNA INSTITUTE OF TECHNOLOGY/SRIT-3-800x600.jpg",
      "/project/institutional/SRI RAMAKRISHNA INSTITUTE OF TECHNOLOGY/SRIT-4-800x600.jpg",
      "/project/institutional/SRI RAMAKRISHNA INSTITUTE OF TECHNOLOGY/SRIT-5-800x600.jpg",
      "/project/institutional/SRI RAMAKRISHNA INSTITUTE OF TECHNOLOGY/SRIT-6-800x600.jpg",
      "/project/institutional/SRI RAMAKRISHNA INSTITUTE OF TECHNOLOGY/SRIT-7-800x600.jpg",
      "/project/institutional/SRI RAMAKRISHNA INSTITUTE OF TECHNOLOGY/SRIT-8-800x600.jpg",
      "/project/institutional/SRI RAMAKRISHNA INSTITUTE OF TECHNOLOGY/SRIT-9-800x600.jpg"
    ]
  },  {
    slug: "sri-ramakrishna-polytechnic-35",
    name: "SRI RAMAKRISHNA POLYTECHNIC",
    category: "Institutional",
    location: "COIMBATORE",
    imageUrl: "/project/institutional/SRI RAMAKRISHNA POLYTECHNIC/Sri-Ramakrishna-Polytechnic-College.jpg",
    status: "Completed",
    description: "Construction of SRI RAMAKRISHNA POLYTECHNIC in COIMBATORE.",
    details: {
      client: "SNR SONS CHARITABLE TRUST",
      area: "70,000 SFT",
      floors: "3",
      startDate: "1996",
      completionDate: "1997"
    },
    gallery: [
      "/project/institutional/SRI RAMAKRISHNA POLYTECHNIC/Sri-Ramakrishna-Polytechnic-College.jpg"
    ]
  },  {
    slug: "srm-institute-of-science-and-technology-36",
    name: "SRM INSTITUTE OF SCIENCE AND TECHNOLOGY",
    category: "Institutional",
    location: "CHENNAI",
    imageUrl: "/project/institutional/SRM INSTITUTE OF SCIENCE AND TECHNOLOGY/SRM-10-800x452.jpeg",
    status: "Completed",
    description: "Construction of SRM INSTITUTE OF SCIENCE AND TECHNOLOGY in CHENNAI.",
    details: {
      client: "SRM INSTITUTE OF SCIENCE AND TECHNOLOGY",
      area: "150,000 SFT",
      floors: "5",
      startDate: "DEC’ 2022",
      completionDate: "MAR’ 2024"
    },
    gallery: [
      "/project/institutional/SRM INSTITUTE OF SCIENCE AND TECHNOLOGY/SRM-10-800x452.jpeg",
      "/project/institutional/SRM INSTITUTE OF SCIENCE AND TECHNOLOGY/SRM-13-800x452.jpeg",
      "/project/institutional/SRM INSTITUTE OF SCIENCE AND TECHNOLOGY/SRM-14-800x452.jpeg",
      "/project/institutional/SRM INSTITUTE OF SCIENCE AND TECHNOLOGY/SRM-4-800x452.jpeg",
      "/project/institutional/SRM INSTITUTE OF SCIENCE AND TECHNOLOGY/SRM-7-800x452.jpeg",
      "/project/institutional/SRM INSTITUTE OF SCIENCE AND TECHNOLOGY/SRM-8-800x452.jpeg",
      "/project/institutional/SRM INSTITUTE OF SCIENCE AND TECHNOLOGY/SRM4.jpg",
      "/project/institutional/SRM INSTITUTE OF SCIENCE AND TECHNOLOGY/WhatsApp-Image-2024-07-03-at-3.15.28-PM-800x452.jpeg"
    ]
  },  {
    slug: "velammal-cbse-matriculation-school-37",
    name: "VELAMMAL CBSE & MATRICULATION SCHOOL",
    category: "Institutional",
    location: "KARUR",
    imageUrl: "/project/institutional/VELAMMAL CBSE & MATRICULATION SCHOOL/velammal-1.jpg",
    status: "Completed",
    description: "Construction of VELAMMAL CBSE & MATRICULATION SCHOOL in KARUR.",
    details: {
      client: "VELAMMAL EDUCATIONAL TRUST",
      area: "203000 SFT",
      floors: "3",
      startDate: "SEP’ 2010",
      completionDate: "JUL’2013"
    },
    gallery: [
      "/project/institutional/VELAMMAL CBSE & MATRICULATION SCHOOL/velammal-1.jpg",
      "/project/institutional/VELAMMAL CBSE & MATRICULATION SCHOOL/velammal-2.jpg",
      "/project/institutional/VELAMMAL CBSE & MATRICULATION SCHOOL/velammal-3.jpg",
      "/project/institutional/VELAMMAL CBSE & MATRICULATION SCHOOL/velammal-4.jpg",
      "/project/institutional/VELAMMAL CBSE & MATRICULATION SCHOOL/velammal-5.jpg"
    ]
  },  {
    slug: "construction-of-allied-health-science-building-38",
    name: "Construction of Allied Health Science Building",
    category: "Institutional",
    location: "Kalapatti, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Construction of Allied Health Science Building in Kalapatti, Coimbatore.",
    details: {
      client: "M/s. DR. NGP Research and Educational Trust, N: 940/1 A & B, Kovai estate, Kalapatti road, Coimbatore - 641 048",
      area: "1,70,000.",
      floors: "BF+ GF + 7 Floors",
      startDate: "AUG' 2024",
      completionDate: "JAN' 2027"
    },
    gallery: []
  },  {
    slug: "construction-of-e8-block-39",
    name: "Construction of E8 Block",
    category: "Institutional",
    location: "Neelambur,   Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Construction of E8 Block in Neelambur,   Coimbatore.",
    details: {
      client: "PSG & SONS’   Charities",
      area: "1,31,800.",
      floors: "GF + 6 Floors",
      startDate: "DEC' 2024",
      completionDate: "SEP '2026"
    },
    gallery: []
  },  {
    slug: "construction-of-school-building-40",
    name: "Construction of school building",
    category: "Institutional",
    location: "Ketti village, Coonoor Taluk",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Construction of school building in Ketti village, Coonoor Taluk.",
    details: {
      client: "M/s.   Sai Saranagathi charitable foundation, old no: 35, New no: 77, Nugambakkam high road, chennai - 600 034",
      area: "51,000.",
      floors: "GF + 1 Floors",
      startDate: "JUNE' 2024",
      completionDate: "NOV' 2026"
    },
    gallery: []
  },  {
    slug: "rak-s-pallikkoodam-41",
    name: "RAK’S Pallikkoodam",
    category: "Institutional",
    location: "COIMBATORE",
    imageUrl: "/project/institutional/RAK’S Pallikkoodam/Raks-1.png",
    status: "Ongoing",
    description: "Construction of RAK’S Pallikkoodam in COIMBATORE.",
    details: {
      client: "RAK’S Pallikkoodam",
      area: "81000 SFT",
      floors: "GF+3",
      startDate: "SEP’ 2024",
      completionDate: "SEP' 2026"
    },
    gallery: [
      "/project/institutional/RAK’S Pallikkoodam/Raks-1.png",
      "/project/institutional/RAK’S Pallikkoodam/Raks-10.png",
      "/project/institutional/RAK’S Pallikkoodam/Raks-2.png",
      "/project/institutional/RAK’S Pallikkoodam/Raks-3.png",
      "/project/institutional/RAK’S Pallikkoodam/Raks-4.png",
      "/project/institutional/RAK’S Pallikkoodam/Raks-5.png",
      "/project/institutional/RAK’S Pallikkoodam/Raks-6.png",
      "/project/institutional/RAK’S Pallikkoodam/Raks-8.png",
      "/project/institutional/RAK’S Pallikkoodam/Raks-9.png",
      "/project/institutional/RAK’S Pallikkoodam/Raks-Phase-02.png"
    ]
  },  {
    slug: "sri-krishna-college-of-technology-girls-hostel-42",
    name: "SRI KRISHNA COLLEGE OF TECHNOLOGY- GIRLS HOSTEL",
    category: "Institutional",
    location: "COIMBATORE",
    imageUrl: "/project/institutional/SRI KRISHNA COLLEGE OF TECHNOLOGY- GIRLS HOSTEL/SKCET-2-800x523.jpg",
    status: "Ongoing",
    description: "Construction of SRI KRISHNA COLLEGE OF TECHNOLOGY- GIRLS HOSTEL in COIMBATORE.",
    details: {
      client: "SRI KRISHNA COLLEGE OF TECHNOLOGY",
      area: "84200 SFT",
      floors: "4",
      startDate: "JAN’ 2023",
      completionDate: "SEP '2025"
    },
    gallery: [
      "/project/institutional/SRI KRISHNA COLLEGE OF TECHNOLOGY- GIRLS HOSTEL/SKCET-2-800x523.jpg",
      "/project/institutional/SRI KRISHNA COLLEGE OF TECHNOLOGY- GIRLS HOSTEL/SKCET-3-800x459.jpg",
      "/project/institutional/SRI KRISHNA COLLEGE OF TECHNOLOGY- GIRLS HOSTEL/SKCET-4-800x555.jpg",
      "/project/institutional/SRI KRISHNA COLLEGE OF TECHNOLOGY- GIRLS HOSTEL/SKCET-5-800x563.jpg",
      "/project/institutional/SRI KRISHNA COLLEGE OF TECHNOLOGY- GIRLS HOSTEL/SKCET-800x552.jpg"
    ]
  },  {
    slug: "the-ngp-school-43",
    name: "The NGP School",
    category: "Institutional",
    location: "COIMBATORE",
    imageUrl: "/project/institutional/The NGP School/Ngp1-800x468.png",
    status: "Ongoing",
    description: "Construction of The NGP School in COIMBATORE.",
    details: {
      client: "NGP SCHOOL KALAPATTI",
      area: "81000 SFT",
      floors: "2",
      startDate: "JUL’ 2023",
      completionDate: "JUL’ 2025"
    },
    gallery: [
      "/project/institutional/The NGP School/Ngp1-800x468.png",
      "/project/institutional/The NGP School/Ngp10-800x423.png",
      "/project/institutional/The NGP School/Ngp11-800x424.png",
      "/project/institutional/The NGP School/Ngp2-800x453.png",
      "/project/institutional/The NGP School/Ngp3-800x447.png",
      "/project/institutional/The NGP School/Ngp4-800x472.png",
      "/project/institutional/The NGP School/Ngp5-800x452.png",
      "/project/institutional/The NGP School/Ngp6-800x449.png",
      "/project/institutional/The NGP School/Ngp7-800x445.png",
      "/project/institutional/The NGP School/Ngp8-800x425.jpg",
      "/project/institutional/The NGP School/Ngp9-800x431.png",
      "/project/institutional/The NGP School/Page-7-Image-11-800x450.jpg"
    ]
  },  {
    slug: "world-community-service-centre-44",
    name: "WORLD COMMUNITY SERVICE CENTRE",
    category: "Institutional",
    location: "CHENNAI",
    imageUrl: "/project/institutional/WORLD COMMUNITY SERVICE CENTRE/WCS-1.jpg",
    status: "Ongoing",
    description: "Construction of WORLD COMMUNITY SERVICE CENTRE in CHENNAI.",
    details: {
      client: "WORLD COMMUNITY SERVICE CENTRE",
      area: "10,400 SFT",
      floors: "3",
      startDate: "JUN’ 2023",
      completionDate: "JUL' 2023"
    },
    gallery: [
      "/project/institutional/WORLD COMMUNITY SERVICE CENTRE/WCS-1.jpg",
      "/project/institutional/WORLD COMMUNITY SERVICE CENTRE/WCS-2-800x600.jpg",
      "/project/institutional/WORLD COMMUNITY SERVICE CENTRE/WCS-3.jpg",
      "/project/institutional/WORLD COMMUNITY SERVICE CENTRE/WCS-4.jpg",
      "/project/institutional/WORLD COMMUNITY SERVICE CENTRE/WCSC1-Copy.jpg",
      "/project/institutional/WORLD COMMUNITY SERVICE CENTRE/WCSC1.jpg",
      "/project/institutional/WORLD COMMUNITY SERVICE CENTRE/WCSC2.jpg",
      "/project/institutional/WORLD COMMUNITY SERVICE CENTRE/WCSC3.jpg",
      "/project/institutional/WORLD COMMUNITY SERVICE CENTRE/WCSC4.jpg",
      "/project/institutional/WORLD COMMUNITY SERVICE CENTRE/WCSC5.jpg",
      "/project/institutional/WORLD COMMUNITY SERVICE CENTRE/WCSC6.jpg"
    ]
  },  {
    slug: "adithya-warehouse-1",
    name: "ADITHYA   WAREHOUSE",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/ADITHYA WAREHOUSE/AWH-1-800x600.jpeg",
    status: "Completed",
    description: "Construction of ADITHYA   WAREHOUSE in COIMBATORE.",
    details: {
      client: "ADITYA   EDUCATIONAL TRUST",
      area: "140000   SFT",
      floors: "GF",
      startDate: "2019-06-01",
      completionDate: "2020-07-01",
      consultant: "M/s.   Jeyam Consultants Private Limited,"
    },
    gallery: [
      "/project/industrial/ADITHYA WAREHOUSE/AWH-1-800x600.jpeg",
      "/project/industrial/ADITHYA WAREHOUSE/AWH-2-800x600.jpeg",
      "/project/industrial/ADITHYA WAREHOUSE/AWH-3-800x600.jpeg",
      "/project/industrial/ADITHYA WAREHOUSE/AWH-4-800x600.jpeg",
      "/project/industrial/ADITHYA WAREHOUSE/DSC03521-800x534.jpg",
      "/project/industrial/ADITHYA WAREHOUSE/DSC03522-800x534.jpg",
      "/project/industrial/ADITHYA WAREHOUSE/DSC03524-800x534.jpg",
      "/project/industrial/ADITHYA WAREHOUSE/DSC03525-800x534.jpg",
      "/project/industrial/ADITHYA WAREHOUSE/DSC03528-800x534.jpg",
      "/project/industrial/ADITHYA WAREHOUSE/DSC03530-800x534.jpg",
      "/project/industrial/ADITHYA WAREHOUSE/DSC03534-800x534.jpg"
    ]
  },  {
    slug: "akg-india-pvt-ltd-2",
    name: "AKG INDIA PVT LTD",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/AKG INDIA PVT LTD/AKG-1-1-800x534.jpg",
    status: "Completed",
    description: "Construction of AKG INDIA PVT LTD in COIMBATORE.",
    details: {
      client: "AKG INDIA PVT LTD",
      area: "61000 SFT",
      floors: "GF",
      startDate: "MAY’2011",
      completionDate: "OCT’2012",
      consultant: "M/s.M.Dharmalingam Associate"
    },
    gallery: [
      "/project/industrial/AKG INDIA PVT LTD/AKG-1-1-800x534.jpg",
      "/project/industrial/AKG INDIA PVT LTD/akg-1.jpg",
      "/project/industrial/AKG INDIA PVT LTD/AKG-2-800x534.jpg",
      "/project/industrial/AKG INDIA PVT LTD/akg-2.jpg",
      "/project/industrial/AKG INDIA PVT LTD/AKG-3-800x534.jpg",
      "/project/industrial/AKG INDIA PVT LTD/akg-3.jpg",
      "/project/industrial/AKG INDIA PVT LTD/AKG-4-800x535.jpg",
      "/project/industrial/AKG INDIA PVT LTD/akg-4.jpg",
      "/project/industrial/AKG INDIA PVT LTD/AKG-5-800x600.jpg",
      "/project/industrial/AKG INDIA PVT LTD/AKG-6-800x600.jpg",
      "/project/industrial/AKG INDIA PVT LTD/AKG-7-800x600.jpg"
    ]
  },  {
    slug: "aqua-flow-3",
    name: "AQUA FLOW",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/AQUA FLOW/2-800x369 (1).jpeg",
    status: "Completed",
    description: "Construction of AQUA FLOW in COIMBATORE.",
    details: {
      client: "CODISSIA INDUSTRIAL PARK LTD",
      area: "53940 SFT",
      floors: "GF",
      startDate: "FEB’ 2021",
      completionDate: "MAR’ 2022",
      consultant: "M/s. Comten Consulting"
    },
    gallery: [
      "/project/industrial/AQUA FLOW/2-800x369 (1).jpeg",
      "/project/industrial/AQUA FLOW/2-800x369.jpeg",
      "/project/industrial/AQUA FLOW/Aqflo-10-800x600.jpeg",
      "/project/industrial/AQUA FLOW/Aqflo-14-800x600.jpeg",
      "/project/industrial/AQUA FLOW/Aqflo-2-800x600.jpeg",
      "/project/industrial/AQUA FLOW/Aqflo-3-800x600.jpeg",
      "/project/industrial/AQUA FLOW/Aqflo-8-800x600.jpeg",
      "/project/industrial/AQUA FLOW/AQUA-FLOW-1-800x600.jpeg",
      "/project/industrial/AQUA FLOW/AQUA-FLOW-10-800x600.jpeg",
      "/project/industrial/AQUA FLOW/AQUA-FLOW-11-800x600.jpeg",
      "/project/industrial/AQUA FLOW/AQUA-FLOW-12-800x600.jpeg",
      "/project/industrial/AQUA FLOW/AQUA-FLOW-13-800x600.jpeg",
      "/project/industrial/AQUA FLOW/AQUA-FLOW-14-800x600.jpeg",
      "/project/industrial/AQUA FLOW/AQUA-FLOW-15-800x600.jpeg",
      "/project/industrial/AQUA FLOW/AQUA-FLOW-2-800x600.jpeg",
      "/project/industrial/AQUA FLOW/AQUA-FLOW-3-800x600.jpeg",
      "/project/industrial/AQUA FLOW/AQUA-FLOW-5-800x600.jpeg",
      "/project/industrial/AQUA FLOW/AQUA-FLOW-6-800x1067.jpeg",
      "/project/industrial/AQUA FLOW/AQUA-FLOW-7-800x600.jpeg",
      "/project/industrial/AQUA FLOW/AQUA-FLOW-8-800x600.jpeg",
      "/project/industrial/AQUA FLOW/AQUA-FLOW-9-800x600.jpeg",
      "/project/industrial/AQUA FLOW/Aquaflow-1-800x600.jpg",
      "/project/industrial/AQUA FLOW/Aquaflow-2-800x600.jpg",
      "/project/industrial/AQUA FLOW/Aquaflow-3-800x600.jpg"
    ]
  },  {
    slug: "bradken-india-private-limited-4",
    name: "BRADKEN INDIA PRIVATE LIMITED",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/BRADKEN INDIA PRIVATE LIMITED/Bradken-800x428.jpg",
    status: "Completed",
    description: "Construction of BRADKEN INDIA PRIVATE LIMITED in COIMBATORE.",
    details: {
      client: "BRADKEN INDIA PRIVATE LIMITED",
      area: "12700 SFT",
      floors: "GF",
      startDate: "Aug’ 2016",
      completionDate: "Sep’ 2016",
      consultant: "M.Dharmalingam Associate,"
    },
    gallery: [
      "/project/industrial/BRADKEN INDIA PRIVATE LIMITED/Bradken-800x428.jpg"
    ]
  },  {
    slug: "bull-machines-private-limited-5",
    name: "BULL MACHINES PRIVATE LIMITED",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/BULL MACHINES PRIVATE LIMITED/IMG-20161107-WA0008-800x600.jpg",
    status: "Completed",
    description: "Construction of BULL MACHINES PRIVATE LIMITED in COIMBATORE.",
    details: {
      client: "BULL MACHINES PRIVATE LIMITED",
      area: "57000 SFT",
      floors: "GF",
      startDate: "JUN’2015",
      completionDate: "DEC’2015",
      consultant: "M/s. S.G.Structural Engineers."
    },
    gallery: [
      "/project/industrial/BULL MACHINES PRIVATE LIMITED/IMG-20161107-WA0008-800x600.jpg",
      "/project/industrial/BULL MACHINES PRIVATE LIMITED/IMG-20161107-WA0010-800x600.jpg",
      "/project/industrial/BULL MACHINES PRIVATE LIMITED/IMG-20171208-WA0013-800x600.jpg",
      "/project/industrial/BULL MACHINES PRIVATE LIMITED/IMG-20171208-WA0014-800x600.jpg",
      "/project/industrial/BULL MACHINES PRIVATE LIMITED/propel-1.jpg",
      "/project/industrial/BULL MACHINES PRIVATE LIMITED/propel-2.jpg"
    ]
  },  {
    slug: "bull-machines-pvt-ltd-suvasam-2-0-6",
    name: "BULL MACHINES PVT LTD-SUVASAM 2.0",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/BULL MACHINES PVT LTD-SUVASAM 2.0/DSC02580.jpg",
    status: "Completed",
    description: "Construction of BULL MACHINES PVT LTD-SUVASAM 2.0 in COIMBATORE.",
    details: {
      client: "BULL MACHINES PRIVATE LIMITED",
      area: "44000 SFT",
      floors: "GF",
      startDate: "MAR’ 2019",
      completionDate: "OCT’ 2019",
      consultant: "M/s. SG Structural Engineers"
    },
    gallery: [
      "/project/industrial/BULL MACHINES PVT LTD-SUVASAM 2.0/DSC02580.jpg",
      "/project/industrial/BULL MACHINES PVT LTD-SUVASAM 2.0/DSC02581.jpg"
    ]
  },  {
    slug: "centralised-bus-parking-7",
    name: "CENTRALISED BUS PARKING",
    category: "Industrial",
    location: "KRISHNAGIRI",
    imageUrl: "/project/industrial/CENTRALISED BUS PARKING/AEH-10-1-800x450.jpeg",
    status: "Completed",
    description: "Construction of CENTRALISED BUS PARKING in KRISHNAGIRI.",
    details: {
      client: "CHEYYAR SEZ DEVELOPERS PVT LTD",
      area: "3,10,000 SFT",
      floors: "GF",
      startDate: "JAN’ 2022",
      completionDate: "APR’ 2023",
      consultant: "M/s. Pithavadian and Partners Architects"
    },
    gallery: [
      "/project/industrial/CENTRALISED BUS PARKING/AEH-10-1-800x450.jpeg",
      "/project/industrial/CENTRALISED BUS PARKING/AEH-11-800x450.jpeg",
      "/project/industrial/CENTRALISED BUS PARKING/Bargur-1.jpeg",
      "/project/industrial/CENTRALISED BUS PARKING/Bargur-10.jpeg",
      "/project/industrial/CENTRALISED BUS PARKING/Bargur-11.jpeg",
      "/project/industrial/CENTRALISED BUS PARKING/Bargur-16.jpeg",
      "/project/industrial/CENTRALISED BUS PARKING/Bargur-37-800x450.jpeg",
      "/project/industrial/CENTRALISED BUS PARKING/Bargur-38-800x450.jpeg",
      "/project/industrial/CENTRALISED BUS PARKING/Bargur-39-800x450.jpeg",
      "/project/industrial/CENTRALISED BUS PARKING/Bargur-53-800x450.jpeg",
      "/project/industrial/CENTRALISED BUS PARKING/Bargur-57-800x1422.jpeg",
      "/project/industrial/CENTRALISED BUS PARKING/Bargur-58-800x450.jpeg",
      "/project/industrial/CENTRALISED BUS PARKING/Burgur-15.jpeg",
      "/project/industrial/CENTRALISED BUS PARKING/Burgur-21.jpeg",
      "/project/industrial/CENTRALISED BUS PARKING/Burgur-28-800x1422.jpeg",
      "/project/industrial/CENTRALISED BUS PARKING/Burgur-42-800x450.jpeg",
      "/project/industrial/CENTRALISED BUS PARKING/Burgur-55-800x1422.jpeg",
      "/project/industrial/CENTRALISED BUS PARKING/Burgur-79-800x600.jpeg",
      "/project/industrial/CENTRALISED BUS PARKING/Burgur-88-800x450.jpeg",
      "/project/industrial/CENTRALISED BUS PARKING/Burgur-90-800x450.jpeg"
    ]
  },  {
    slug: "cheyyar-sipcot-industrial-complex-8",
    name: "CHEYYAR – SIPCOT INDUSTRIAL COMPLEX",
    category: "Industrial",
    location: "CHENNAI",
    imageUrl: "/project/industrial/CHEYYAR – SIPCOT INDUSTRIAL COMPLEX/Cheyyar-1-800x368.jpeg",
    status: "Completed",
    description: "Construction of CHEYYAR – SIPCOT INDUSTRIAL COMPLEX in CHENNAI.",
    details: {
      client: "CHEYYAR SEZ DEVELOPERS PVT LTD",
      area: "2,85,000 SFT",
      floors: "GF",
      startDate: "OCT’ 2021",
      completionDate: "APR’ 2023",
      consultant: "M/s. Cheyyar Sez Developers Pvt Ltd"
    },
    gallery: [
      "/project/industrial/CHEYYAR – SIPCOT INDUSTRIAL COMPLEX/Cheyyar-1-800x368.jpeg",
      "/project/industrial/CHEYYAR – SIPCOT INDUSTRIAL COMPLEX/Cheyyar-12-800x368.jpeg",
      "/project/industrial/CHEYYAR – SIPCOT INDUSTRIAL COMPLEX/Cheyyar-21-800x450.jpeg",
      "/project/industrial/CHEYYAR – SIPCOT INDUSTRIAL COMPLEX/Cheyyar-36-800x450.jpeg",
      "/project/industrial/CHEYYAR – SIPCOT INDUSTRIAL COMPLEX/Cheyyar-49-800x450.jpeg",
      "/project/industrial/CHEYYAR – SIPCOT INDUSTRIAL COMPLEX/Cheyyar-52-800x450.jpeg",
      "/project/industrial/CHEYYAR – SIPCOT INDUSTRIAL COMPLEX/Cheyyar-56-800x450.jpeg",
      "/project/industrial/CHEYYAR – SIPCOT INDUSTRIAL COMPLEX/Cheyyar-6-800x368.jpeg",
      "/project/industrial/CHEYYAR – SIPCOT INDUSTRIAL COMPLEX/Cheyyar-8-800x370.jpeg",
      "/project/industrial/CHEYYAR – SIPCOT INDUSTRIAL COMPLEX/Cheyyar-SEZ-pooja-800x375.jpeg"
    ]
  },  {
    slug: "civil-works-excl-cost-of-cement-and-steel-for-proposed-expansion-of-fruit-processing-unit-9",
    name: "Civil works (Excl Cost of Cement and Steel) for   Proposed Expansion of Fruit Processing Unit",
    category: "Industrial",
    location: "Vellore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Civil works (Excl Cost of Cement and Steel) for   Proposed Expansion of Fruit Processing Unit in Vellore.",
    details: {
      client: "M/s. Aambis Food Products Pvt Ltd., Kunichi   Village & Post, Tiruppattur Taluk, Vellore - 635 601",
      area: "10,000.",
      floors: "GROUND FLOOR",
      startDate: "NOV ' 2016",
      completionDate: "MAR' 2017",
      consultant: "Client Engineer"
    },
    gallery: []
  },  {
    slug: "civil-works-for-cogen-power-plant-and-sugar-modernization-a-c-tneb-10",
    name: "Civil works for COGEN- Power Plant and Sugar   Modernization A/C TNEB",
    category: "Industrial",
    location: "Madurai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Civil works for COGEN- Power Plant and Sugar   Modernization A/C TNEB in Madurai.",
    details: {
      client: "M/s. TVH Energy Resources Pvt Ltd, \"TVH   Triveni\", CV Raman Road, Alwarpet, Chennai - 600 018",
      area: "15 MW",
      floors: "GROUND FLOOR",
      startDate: "JUN' 2010",
      completionDate: "MAY' 2011",
      consultant: "Client Engineer"
    },
    gallery: []
  },  {
    slug: "constrction-of-extenal-development-work-in-factory-building-vcb-tranformer-11",
    name: "Constrction of Extenal Development work in   Factory Building, VCB tranformer",
    category: "Industrial",
    location: "Pillaiappampalayam, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Constrction of Extenal Development work in   Factory Building, VCB tranformer in Pillaiappampalayam, Coimbatore.",
    details: {
      client: "M/s. L.G.Balakrishnan & Bros Limited",
      startDate: "APR' 2023",
      completionDate: "MAR' 2024",
      consultant: "Ms/. Vesta Architects, No: 252, Avinashi road,   Peelamedu, Coimbatore - 641 004"
    },
    gallery: []
  },  {
    slug: "construction-and-alteration-works-in-roof-and-allied-works-12",
    name: "Construction and Alteration works in Roof and   allied works",
    category: "Industrial",
    location: "Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction and Alteration works in Roof and   allied works in Coimbatore.",
    details: {
      client: "M/s. SIMPSON & Co Ltd, 861/862 Annasalai,   Chennai - 600 002",
      area: "9,000.",
      floors: "Completion Certificate Required",
      startDate: "AUG' 2024",
      completionDate: "MAR'2025",
      consultant: "M/s. C.R Narayana Rao (Consultants) Pvt Ltd,   No: 10, Karpagambal Nagar, Mylapore, Chennai - 600 014"
    },
    gallery: []
  },  {
    slug: "construction-of-10mw-biomass-power-plant-13",
    name: "Construction of 10MW biomass power plant",
    category: "Industrial",
    location: "Aranthangi,Pudukottai district",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of 10MW biomass power plant in Aranthangi,Pudukottai district.",
    details: {
      client: "M/s.Empee Distilleries Limited, \"Empee   Tower\", 59,Harris road, Pudupet, Chennai - 600 002",
      area: "10 MW",
      floors: "GROUND FLOOR",
      startDate: "JAN' 2006",
      completionDate: "Dec'2006",
      consultant: "M/s. Swaminathan Associates, 740, Trichy road,   Ramanathapuram, Coimbatore - 641 045"
    },
    gallery: []
  },  {
    slug: "construction-of-box-culvert-and-road-work-14",
    name: "Construction of Box Culvert and Road work",
    category: "Industrial",
    location: "Salem",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Box Culvert and Road work in Salem.",
    details: {
      client: "M/s. GOVEL Trust – Aravind Eye Hospitals",
      floors: "Completion Certificate Required",
      startDate: "NOV' 2023",
      completionDate: "MAY' 2027",
      consultant: "Design Collaborative India Private Limited,   179, III Floor SV complex Eswaran koil street, Puducherry - 605 001"
    },
    gallery: []
  },  {
    slug: "construction-of-bull-dormitory-building-15",
    name: "Construction of Bull Dormitory Building",
    category: "Industrial",
    location: "Kangeyampalayam Sulur",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Bull Dormitory Building in Kangeyampalayam Sulur.",
    details: {
      client: "BULL MACHINES PRIVATE LIMITED",
      floors: "GROUND FLOOR",
      startDate: "AUG' 2016",
      completionDate: "DEC' 2016",
      consultant: "Studio 2 Fortune, Coimbatore"
    },
    gallery: []
  },  {
    slug: "construction-of-canteen-building-16",
    name: "Construction of Canteen Building",
    category: "Industrial",
    location: "Kangeyampalayam, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Canteen Building in Kangeyampalayam, Coimbatore.",
    details: {
      client: "BULL MACHINES PRIVATE LIMITED",
      area: "2,500.",
      floors: "GROUND FLOOR",
      startDate: "DEC' 2017",
      completionDate: "JUL' 2018",
      consultant: "M/s. Dream Home, Simya Bakes first floor, Arjun   complex, Pappampatti Pirivu, Trichy road, Coimbatore - 103"
    },
    gallery: []
  },  {
    slug: "construction-of-disc-filter-17",
    name: "Construction of Disc Filter",
    category: "Industrial",
    location: "Thekkampatty, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Disc Filter in Thekkampatty, Coimbatore.",
    details: {
      client: "M/s. ITC Limited, PSPD Division, Unit I Kovai,   Vivekanandapuram, Thekkampatty Village, Coimbatore - 641 113",
      floors: "GROUND FLOOR",
      startDate: "DEC '2010",
      completionDate: "JUN'2011",
      consultant: "M/s. SPB Projects Consultancy Ltd, Esvin House,   Old No. 144, New No. 13, Tirumala Nagar Annexe, Old Mahabalipuram Road,   Perungudi, Chennai - 600 096"
    },
    gallery: []
  },  {
    slug: "construction-of-etp-work-18",
    name: "Construction of ETP WORK",
    category: "Industrial",
    location: "Krishnagiri",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of ETP WORK in Krishnagiri.",
    details: {
      client: "M/s. Exotic Fruits Pvt Ltd, B-208, Arjun   Centre, BKS Devashi Marg, Govindi, Mumbai - 400 088",
      floors: "GROUND FLOOR",
      startDate: "JAN' 2018",
      completionDate: "FEB' 2018",
      consultant: "M/s.Design Forum India Private Limited,'Swathi   Courts',112,Kattor road,P.N.Palayam,Coimbatore - 641 037"
    },
    gallery: []
  },  {
    slug: "construction-of-expansion-of-assembly-shop-r-d-block-canteen-security-csd-building-33kl-tank-argon-tank-north-compound-wall-fbo-west-side-east-side-compound-wall-19",
    name: "Construction of Expansion of Assembly shop, R   & D Block, Canteen, Security CSD building, 33KL Tank, Argon Tank, North   Compound wall, FBO West side, East side compound wall",
    category: "Industrial",
    location: "Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Expansion of Assembly shop, R   & D Block, Canteen, Security CSD building, 33KL Tank, Argon Tank, North   Compound wall, FBO West side, East side compound wall in Coimbatore.",
    details: {
      client: "BULL MACHINES PRIVATE LIMITED",
      area: "15,000.",
      floors: "GROUND FLOOR",
      startDate: "MAR' 2023",
      completionDate: "JUNE'2024",
      consultant: "M/s. SG structural Engineers, 53 M.A Palanisamy   street, K.K Pudur, Coimbatore - 38"
    },
    gallery: []
  },  {
    slug: "construction-of-external-development-work-20",
    name: "Construction of External Development work",
    category: "Industrial",
    location: "Saravanampatti, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of External Development work in Saravanampatti, Coimbatore.",
    details: {
      client: "M/s.Dell International Services India Pvt Ltd.,   Plot no: 123, EPIP Phase - 2, Industrial area, Bangalore - 66",
      area: "1,00,000.",
      floors: "GROUND FLOOR",
      startDate: "MAY'2012",
      completionDate: "JAN'2014",
      consultant: "M/s.Edifice Consultants Pvt Ltd., No;1,   Saravanan street, off south boag road., T.Nagar, Chennai - 600 017"
    },
    gallery: []
  },  {
    slug: "construction-of-factory-other-ancillary-buildings-for-oe-projects-21",
    name: "Construction of Factory & other ancillary   buildings for OE projects",
    category: "Industrial",
    location: "Gopineneipalem village, Vatsavai mandal, Andhra   pradesh",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Factory & other ancillary   buildings for OE projects in Gopineneipalem village, Vatsavai mandal, Andhra   pradesh.",
    details: {
      client: "M/s. Rajapalayam Mills Ltd., Rajapalayam Mills,   Premises , P.A.C Ramasamy raja salai, PB NO. 1, Rajapalayam - 626 117",
      area: "1,08,300.",
      floors: "GROUND FLOOR",
      startDate: "JUL' 2007",
      completionDate: "MAR' 2008",
      consultant: "M/s. Mukesh & Associates, 5/3, Raghavan   street,Swarnapuri,Salem - 636 004"
    },
    gallery: []
  },  {
    slug: "construction-of-factory-other-ancillary-buildings-for-oe-projects-22",
    name: "Construction of Factory & other ancillary   buildings for OE projects",
    category: "Industrial",
    location: "Gopineneipalem village, Vatsavai mandal, Andhra   pradesh",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Factory & other ancillary   buildings for OE projects in Gopineneipalem village, Vatsavai mandal, Andhra   pradesh.",
    details: {
      client: "M/s. Sandhya Spinning Mills Ltd., No.47,   P.SK.Nagar , Rajapalayam - 626 108",
      area: "1,08,300.",
      floors: "GROUND FLOOR",
      startDate: "JUL' 2007",
      completionDate: "MAR' 2008",
      consultant: "M/s. Mukesh & Associates, 5/3, Raghavan   street,Swarnapuri,Salem - 636 004"
    },
    gallery: []
  },  {
    slug: "construction-of-factory-other-ancillary-buildings-for-oe-projects-23",
    name: "Construction of Factory & other ancillary   buildings for OE projects",
    category: "Industrial",
    location: "Gopineneipalem village, Vatsavai mandal, Andhra   pradesh",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Factory & other ancillary   buildings for OE projects in Gopineneipalem village, Vatsavai mandal, Andhra   pradesh.",
    details: {
      client: "M/s. Sri Vishnu Shankar Mill Ltd., Sri Vishnu   shankar mill Premises, PB no. 109 PAC Ramasamy rajasalai, Rajapalayam - 626   117",
      area: "1,08,300.",
      floors: "GROUND FLOOR",
      startDate: "JUL' 2007",
      completionDate: "MAR' 2008",
      consultant: "M/s. Mukesh & Associates, 5/3, Raghavan   street,Swarnapuri,Salem - 636 004"
    },
    gallery: []
  },  {
    slug: "construction-of-factory-building-24",
    name: "Construction of Factory Building",
    category: "Industrial",
    location: "Mavuthampathy Village, Valayar, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Factory Building in Mavuthampathy Village, Valayar, Coimbatore.",
    details: {
      client: "M/s. Imperial Spirits & Wines Pvt Ltd, No.   1, Sundaram Brothers Layout, Opp. All India Radio, Trichy Road, Coimbatore -   641 045",
      area: "1,82,000.",
      floors: "GROUND FLOOR",
      startDate: "NOV'2009",
      completionDate: "APR' 2011",
      consultant: "M/s. Swaminathan Associates,740,Trichy   road,Ramanathapuram, Coimbatore - 641 005"
    },
    gallery: []
  },  {
    slug: "construction-of-factory-building-25",
    name: "Construction of Factory Building",
    category: "Industrial",
    location: "Panapatti, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Factory Building in Panapatti, Coimbatore.",
    details: {
      client: "M/s.MDL Vishal India Pvt Ltd, Coimbatore",
      area: "30,000.",
      floors: "GROUND FLOOR",
      startDate: "NOV'2012",
      completionDate: "FEB'2014",
      consultant: "Studio 29, No. 6, Old Damu Nagar, Puliakulam,   Coimbatore - 641 045."
    },
    gallery: []
  },  {
    slug: "construction-of-factory-building-26",
    name: "Construction of Factory Building",
    category: "Industrial",
    location: "Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Factory Building in Coimbatore.",
    details: {
      client: "M/s. Fine Product, Coimbatore",
      area: "7,800.",
      floors: "GROUND FLOOR",
      startDate: "MAY'2016",
      completionDate: "AUG'2016",
      consultant: "Client Engineer"
    },
    gallery: []
  },  {
    slug: "construction-of-factory-building-27",
    name: "Construction of Factory Building",
    category: "Industrial",
    location: "Kangeyampalayam, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Factory Building in Kangeyampalayam, Coimbatore.",
    details: {
      client: "M/s. Oriental Plant and Equipment Limited,   Kangeyampalayam, Coimbatore",
      area: "7,900.",
      floors: "GROUND FLOOR",
      startDate: "DEC' 2017",
      completionDate: "JUN' 2019",
      consultant: "M/s.SGS Consultants, Coimbatore"
    },
    gallery: []
  },  {
    slug: "construction-of-factory-building-28",
    name: "Construction of Factory Building",
    category: "Industrial",
    location: "Arasur, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Factory Building in Arasur, Coimbatore.",
    details: {
      client: "M/s. Gem Equipment Limited, Coimbatore",
      area: "12,000.",
      floors: "GROUND FLOOR",
      startDate: "APR' 2021",
      completionDate: "FEB' 2022",
      consultant: "Client Engineer"
    },
    gallery: []
  },  {
    slug: "construction-of-factory-building-29",
    name: "Construction of Factory Building",
    category: "Industrial",
    location: "Vattamalaipalayam, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Factory Building in Vattamalaipalayam, Coimbatore.",
    details: {
      client: "Mr.R.Lakshmi Narayana Moorthy, No: 49,   Rukkammal colony, Thudiyalur, Coimbatore - 641 034",
      area: "22,000.",
      floors: "GROUND FLOOR",
      startDate: "FEB' 2023",
      completionDate: "JAN' 2024",
      consultant: "Client Engineer"
    },
    gallery: []
  },  {
    slug: "construction-of-foundry-building-power-house-utility-storage-md-panel-room-compressor-room-office-canteen-30",
    name: "Construction of Foundry Building, Power house,   Utility storage, MD panel room, Compressor room, Office, Canteen",
    category: "Industrial",
    location: "SF NO: 694, AMMAN KOIL ROAD      M.PAPAM PATTY      VAGARAYAMPALAYAM POST      COIMBATORE - 641 659",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Foundry Building, Power house,   Utility storage, MD panel room, Compressor room, Office, Canteen in SF NO: 694, AMMAN KOIL ROAD      M.PAPAM PATTY      VAGARAYAMPALAYAM POST      COIMBATORE - 641 659.",
    details: {
      client: "M/s. Mark Engineering works, 491/4, 491/1,   492/A2 Karrumathampatti - Annur road, Kaduvettipalayam post, Sulur Taluk,   Coimbatore - 641 659",
      area: "80,000.",
      floors: "GROUND FLOOR",
      startDate: "JUL' 2020",
      completionDate: "FEB' 2022",
      consultant: "M/s. Vesta Architect, Old no: 1514, New no:   252, Avinashi road, Peelamedu Coimbatore - 641 004"
    },
    gallery: []
  },  {
    slug: "construction-of-fruit-processing-unit-and-road-work-31",
    name: "Construction of Fruit Processing Unit and ROAD   WORK",
    category: "Industrial",
    location: "Krishnagiri",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Fruit Processing Unit and ROAD   WORK in Krishnagiri.",
    details: {
      client: "M/s. Exotic Fruits Pvt Ltd, B-208, Arjun   Centre, BKS Devashi Marg, Govindi, Mumbai - 400 088",
      area: "35,000.",
      floors: "GROUND FLOOR",
      startDate: "OCT' 2015",
      completionDate: "MAR' 2017",
      consultant: "M/s.Design Forum India Private Limited,'Swathi   Courts',112,Kattor road,P.N.Palayam,Coimbatore - 641 037"
    },
    gallery: []
  },  {
    slug: "construction-of-industrial-building-32",
    name: "Construction of Industrial Building",
    category: "Industrial",
    location: "Arasur, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Industrial Building in Arasur, Coimbatore.",
    details: {
      client: "M/s. Cosmik Industry, No 514/6, 514/7,   Pothiyampalayam road, Arasur, Coimbatore - 641 407",
      area: "8,100.",
      floors: "GROUND FLOOR",
      startDate: "NOV' 2019",
      completionDate: "OCT' 2020",
      consultant: "M/s. Vesta Architect, 252, Avinashi road,   Peelamedu, Coimbatore - 641 004"
    },
    gallery: []
  },  {
    slug: "construction-of-industrial-building-33",
    name: "Construction of Industrial Building",
    category: "Industrial",
    location: "Perundurai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Industrial Building in Perundurai.",
    details: {
      client: "M/s. MM Gears Pvt Ltd, J -9, SIPCOT Industry   Growth centre SF NO: 141 (PT) ingur village, Perundurai Taluk, Erode district",
      area: "54,500.",
      floors: "GROUND FLOOR",
      startDate: "FEB' 2020",
      completionDate: "FEB' 2022",
      consultant: "M/s. M. Dharmalingam Associates, 6 Syrian   church road, No:1, Coimbatore - 641 001"
    },
    gallery: []
  },  {
    slug: "construction-of-industrial-building-34",
    name: "Construction of Industrial Building",
    category: "Industrial",
    location: "Mylripalayam, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Industrial Building in Mylripalayam, Coimbatore.",
    details: {
      client: "M/s. Flowserve India Controls Pvt Ltd SF   Nos.136 /3 & 137, Myleripalayam (PO), Elur pirivu,       Coimbatore - 641032",
      area: "22,500.",
      startDate: "JUL' 2024",
      completionDate: "SEP' 2025",
      consultant: "M/s. SG Structural Engineers, No. 53, M.A   Palanisamy Street, K.K Pudur (PO). Saibaba colony Coimbatore - 641038"
    },
    gallery: []
  },  {
    slug: "construction-of-industrial-building-and-labour-quarters-35",
    name: "Construction of Industrial Building and Labour   Quarters",
    category: "Industrial",
    location: "Kallapalayam, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Industrial Building and Labour   Quarters in Kallapalayam, Coimbatore.",
    details: {
      client: "M/s. Global Castings, Coimbatore",
      area: "20,000.",
      floors: "GROUND FLOOR",
      startDate: "JAN' 2021",
      completionDate: "NOV ' 2022",
      consultant: "ANUSAMM CONSULTANTS M.SABARIANAND ME.,      No: 5/153/9, Dheivanai, Annur Road, East Arasur, Arasur(POST),      COIMBATORE - 641 407."
    },
    gallery: []
  },  {
    slug: "construction-of-industrial-building-and-office-building-first-floor-36",
    name: "Construction of Industrial Building and Office   Building First floor",
    category: "Industrial",
    location: "Ravathur Pirivu, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Industrial Building and Office   Building First floor in Ravathur Pirivu, Coimbatore.",
    details: {
      client: "M/s. Propel Industries Private Limited, SF   no:663, Ravathur Pirivu, Trichy Main road, Coimbatore - 103",
      area: "18,000.",
      floors: "GROUND FLOOR",
      startDate: "JAN' 2016",
      completionDate: "APR' 2017",
      consultant: "M/s. SG Structural Engineers 53, M.S Palanisamy   street, K.K Pudur, Coimbatore - 68"
    },
    gallery: []
  },  {
    slug: "construction-of-linac-expansion-37",
    name: "Construction of LINAC Expansion",
    category: "Industrial",
    location: "Karegoundampalayam, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of LINAC Expansion in Karegoundampalayam, Coimbatore.",
    details: {
      client: "M/s. Sri Ranganather Valves & Controls (P)   Ltd, Karegoundampalayam village, Coimbatore - 641 697",
      area: "5,000.",
      floors: "Completion Certificate Required",
      startDate: "Jan' 2024",
      completionDate: "MAR'2025",
      consultant: "M/s. M. Dharmalingam Associates, 6 Syrian   church road, No:1, Coimbatore - 641 001"
    },
    gallery: []
  },  {
    slug: "construction-of-machine-shop-and-allied-buildings-38",
    name: "Construction of Machine shop and Allied   buildings",
    category: "Industrial",
    location: "Kappalur, Madurai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Machine shop and Allied   buildings in Kappalur, Madurai.",
    details: {
      client: "M/s. LA paper Manufacturing Unit, No.21,   Lakshmisathyasai Nagar, Madurai - 625 003",
      area: "51,000.",
      floors: "GROUND FLOOR",
      startDate: "JAN '2010",
      completionDate: "APR '2011",
      consultant: "Mr. Lakshmanan, 51/9, M.R.Complex, DB Road,   R.S.Puram, Coimbatore - 641 002"
    },
    gallery: []
  },  {
    slug: "construction-of-machine-shop-and-store-maintenance-buildings-39",
    name: "Construction of Machine shop and Store   Maintenance buildings",
    category: "Industrial",
    location: "Palladam, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Machine shop and Store   Maintenance buildings in Palladam, Coimbatore.",
    details: {
      client: "M/s.GTN Exports Ltd,18,K.R.Puram   road,Ganapathy,Coimbatore - 641 006",
      area: "1,52,000.",
      floors: "GROUND FLOOR",
      startDate: "FEB'2008",
      completionDate: "JAN'2010",
      consultant: "M/s.M.Dharmalingam Associate, Raka   complex,First floor,162-H,East Ponnurangam road,Coimbatore - 641 002"
    },
    gallery: []
  },  {
    slug: "construction-of-machine-shop-building-40",
    name: "Construction of Machine shop Building",
    category: "Industrial",
    location: "Kaduvettipalayam post, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Machine shop Building in Kaduvettipalayam post, Coimbatore.",
    details: {
      client: "Marks Engineering works",
      area: "40,000.",
      floors: "Completion Certificate Required",
      startDate: "MAY' 2024",
      completionDate: "MAR'2025",
      consultant: "Ms/. Vesta Architects, No: 252, Avinashi road,   Peelamedu, Coimbatore - 641 004"
    },
    gallery: []
  },  {
    slug: "construction-of-main-shed-and-canteen-building-41",
    name: "Construction of Main shed and Canteen Building",
    category: "Industrial",
    location: "Bidadi, Bangalore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Main shed and Canteen Building in Bidadi, Bangalore.",
    details: {
      client: "Systematic Conscom Limited",
      area: "38,000.",
      floors: "GROUND FLOOR",
      startDate: "AUG' 2022",
      completionDate: "APR' 2023",
      consultant: "Asian consulting Engineers, New Dehli"
    },
    gallery: []
  },  {
    slug: "construction-of-paper-machine-and-paper-bags-machine-buildings-42",
    name: "Construction of Paper machine and Paper bags   machine buildings",
    category: "Industrial",
    location: "Ambarampalayam, Pollachi",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Paper machine and Paper bags   machine buildings in Ambarampalayam, Pollachi.",
    details: {
      client: "M/s. Karur K.C.P. Packagings Ltd, 662/ 2,   Marichinaikenpalayam road, Ambarampalayam, Pollachi - 642 103",
      area: "1,55,000.",
      floors: "GROUND FLOOR",
      startDate: "SEP'2010",
      completionDate: "JAN'2011",
      consultant: "M/S. Sankar & Associates,27,Senguptha   street,Ramnagar,Coimbatore - 641 009"
    },
    gallery: []
  },  {
    slug: "construction-of-precast-boundry-wall-43",
    name: "Construction of Precast Boundry wall",
    category: "Industrial",
    location: "Oragadam, Chennai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Precast Boundry wall in Oragadam, Chennai.",
    details: {
      client: "Systematic Conscom Limited",
      area: "553 RMT",
      floors: "GROUND FLOOR",
      startDate: "APR' 2023",
      completionDate: "JUN' 2024",
      consultant: "M/s. Possibuild Building Technologies,   Hyderabad"
    },
    gallery: []
  },  {
    slug: "construction-of-precast-compound-wall-44",
    name: "Construction of Precast compound wall",
    category: "Industrial",
    location: "Walajabad road, Kanchipuram district, Chennai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Precast compound wall in Walajabad road, Kanchipuram district, Chennai.",
    details: {
      client: "Systematic Conscom Limited",
      area: "1832 RM",
      floors: "GROUND FLOOR",
      startDate: "AUG' 2021",
      completionDate: "DEC' 2022",
      consultant: "Client Engineer"
    },
    gallery: []
  },  {
    slug: "construction-of-process-house-building-45",
    name: "Construction of Process House building",
    category: "Industrial",
    location: "Tiruchengode, Erode",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Process House building in Tiruchengode, Erode.",
    details: {
      client: "M/s. Summer India Textile Mills (P) Ltd.,   P.B.No.12,176/2A, Kozhikkalnatham road, Tiruchengode - 637 211, Namakkal   District",
      area: "2,40,000.",
      floors: "GROUND FLOOR",
      startDate: "NOV’2005",
      completionDate: "DEC' 2007",
      consultant: "M/s. Mukesh & Associates, 5/3, Raghavan   street, Swarnapuri, Salem - 636 004"
    },
    gallery: []
  },  {
    slug: "construction-of-proposed-garment-manufacturing-unit-46",
    name: "Construction of Proposed Garment manufacturing   unit",
    category: "Industrial",
    location: "Muthulapuram, Sivakasi",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Proposed Garment manufacturing   unit in Muthulapuram, Sivakasi.",
    details: {
      client: "M/s. SFA Technical Creations (P) Limited,   118/2, Velayutham road, Sivakasi - 626 123",
      area: "1,54,000.",
      floors: "GROUND FLOOR",
      startDate: "JAN' 2006",
      completionDate: "JAN' 2007",
      consultant: "M/S. Sankar & Associates, 27, Senguptha   street, Ramnagar, Coimbatore - 641 009"
    },
    gallery: []
  },  {
    slug: "construction-of-road-work-in-phase-iv-temporary-ecrc-flooring-fruit-waste-drying-yard-47",
    name: "Construction of Road work in phase IV temporary   ECRC Flooring, Fruit waste drying yard",
    category: "Industrial",
    location: "Krishnagiri",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Road work in phase IV temporary   ECRC Flooring, Fruit waste drying yard in Krishnagiri.",
    details: {
      client: "M/s. Exotic Fruits Pvt Ltd, B-208, Arjun   Centre, BKS Devashi Marg, Govindi, Mumbai - 400 088",
      floors: "GROUND FLOOR",
      startDate: "JAN' 2018",
      completionDate: "AUG' 2018",
      consultant: "Client Engineer"
    },
    gallery: []
  },  {
    slug: "construction-of-rt-enclosure-office-and-lab-building-48",
    name: "Construction of RT enclosure, Office and Lab   Building",
    category: "Industrial",
    location: "Karegoundampalayam village",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of RT enclosure, Office and Lab   Building in Karegoundampalayam village.",
    details: {
      client: "M/s. Sri Ranganather Valves & Controls (P)   Ltd, Karegoundampalayam village, Coimbatore - 641 697",
      area: "39,200.",
      floors: "GROUND FLOOR",
      startDate: "NOV ' 2020",
      completionDate: "APRIL' 2021",
      consultant: "M/s. M. Dharmalingam Associates, 6 Syrian   church road, No:1, Coimbatore - 641 001"
    },
    gallery: []
  },  {
    slug: "construction-of-rt-enclosure-office-and-lab-building-49",
    name: "Construction of RT enclosure, Office and Lab   Building",
    category: "Industrial",
    location: "Karegoundampalayam village",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of RT enclosure, Office and Lab   Building in Karegoundampalayam village.",
    details: {
      client: "M/s. Sri Ranganather Valves & Controls (P)   Ltd, Karegoundampalayam village, Coimbatore - 641 697",
      area: "9,300.",
      floors: "GROUND FLOOR",
      startDate: "DEC' 2022",
      completionDate: "JUL' 2023",
      consultant: "M/s. M. Dharmalingam Associates, 6 Syrian   church road, No:1, Coimbatore - 641 001"
    },
    gallery: []
  },  {
    slug: "construction-of-shot-blast-machine-shop-at-coimbatore-50",
    name: "Construction of shot blast Machine shop at   Coimbatore",
    category: "Industrial",
    location: "Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of shot blast Machine shop at   Coimbatore in Coimbatore.",
    details: {
      client: "BULL MACHINES PRIVATE LIMITED",
      area: "6,000.",
      floors: "GROUND FLOOR",
      startDate: "OCT' 2021",
      completionDate: "AUG' 2022",
      consultant: "M/s. SG Structural Engineers, 53 M.A Palanisamy   Street, K.K Pudur, Coimbatore - 36"
    },
    gallery: []
  },  {
    slug: "construction-of-spinning-unit-51",
    name: "Construction of spinning unit",
    category: "Industrial",
    location: "Kappalur,Madurai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of spinning unit in Kappalur,Madurai.",
    details: {
      client: "M/s.Kannappan Iron & Steel Company Private   Limited (KISCOL),9/110,Kalidas road,Ramnagar,Coimbatore- 641 009",
      area: "1,00,000.",
      floors: "GROUND FLOOR",
      startDate: "OCT' 2006",
      completionDate: "MAY' 2007",
      consultant: "M/s. G.K.Consultants, Coimbatore"
    },
    gallery: []
  },  {
    slug: "construction-of-texile-building-at-sengathurai-kadampadi-village-sulur-taluk-coimbatore-52",
    name: "Construction of Texile Building at sengathurai   kadampadi village, sulur taluk, Coimbatore",
    category: "Industrial",
    location: "Sengathurai, Sulur Taluk, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Texile Building at sengathurai   kadampadi village, sulur taluk, Coimbatore in Sengathurai, Sulur Taluk, Coimbatore.",
    details: {
      client: "M/s. Skillman Textiles, S.F NO: 99/2A, Door no:   4/207 A, Sengathurai, Kadampadi village, Sulur taluk, Coimbtatore - 641 402",
      area: "21,000.",
      floors: "GROUND FLOOR",
      startDate: "NOV' 2022",
      completionDate: "JUN' 2023",
      consultant: "Client Engineer"
    },
    gallery: []
  },  {
    slug: "construction-of-toilet-block-53",
    name: "Construction of Toilet block",
    category: "Industrial",
    location: "Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Toilet block in Coimbatore.",
    details: {
      client: "BULL MACHINES PRIVATE LIMITED",
      area: "470.",
      floors: "GROUND FLOOR",
      startDate: "JAN' 2023",
      completionDate: "JUL' 2023",
      consultant: "M/s. SG Structural Engineers, 53 M.A Palanisamy   street, K.K Pudur, Coimbatore - 38"
    },
    gallery: []
  },  {
    slug: "construction-of-warehouse-building-54",
    name: "Construction of Warehouse Building",
    category: "Industrial",
    location: "Pappampatti village, coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Warehouse Building in Pappampatti village, coimbatore.",
    details: {
      client: "ADITYA EDUCATIONAL TRUST",
      area: "1,30,000.",
      floors: "GROUND FLOOR",
      startDate: "MAR' 2022",
      completionDate: "NOV' 2022",
      consultant: "NMH Design, Chennai"
    },
    gallery: []
  },  {
    slug: "construction-of-warehouse-building-55",
    name: "Construction of Warehouse Building",
    category: "Industrial",
    location: "Pappampatti village, coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Warehouse Building in Pappampatti village, coimbatore.",
    details: {
      client: "ADITYA EDUCATIONAL TRUST",
      area: "1,47,000.",
      startDate: "JUN' 2024",
      completionDate: "NOV'25",
      consultant: "M/s. Vesta Architect, 252, Avinashi road,   Peelamedu, Coimbatore - 641 004"
    },
    gallery: []
  },  {
    slug: "cosmik-industry-56",
    name: "COSMIK INDUSTRY",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/COSMIK INDUSTRY/COSM-1-1.jpg",
    status: "Completed",
    description: "Construction of COSMIK INDUSTRY in COIMBATORE.",
    details: {
      client: "COSMIK INDUSTRY",
      area: "57000 SFT",
      floors: "GF",
      startDate: "FEB’ 2014",
      completionDate: "MAY’ 2015",
      consultant: "M/s. Sundar Sundaram Architects"
    },
    gallery: [
      "/project/industrial/COSMIK INDUSTRY/COSM-1-1.jpg",
      "/project/industrial/COSMIK INDUSTRY/COSM-2-800x600.jpg",
      "/project/industrial/COSMIK INDUSTRY/COSM-3-800x600.jpg",
      "/project/industrial/COSMIK INDUSTRY/COSM-4-800x600.jpg",
      "/project/industrial/COSMIK INDUSTRY/COSMIK-1-1-800x600.jpg",
      "/project/industrial/COSMIK INDUSTRY/cosmik-1.jpg",
      "/project/industrial/COSMIK INDUSTRY/COSMIK-2-800x600.jpg",
      "/project/industrial/COSMIK INDUSTRY/COSMIK-3-800x600.jpg",
      "/project/industrial/COSMIK INDUSTRY/COSMIK-4-800x600.jpg",
      "/project/industrial/COSMIK INDUSTRY/COSMIK-5-800x600.jpg",
      "/project/industrial/COSMIK INDUSTRY/COSMIK-6-800x600.jpg"
    ]
  },  {
    slug: "cri-pumps-private-limited-57",
    name: "CRI PUMPS PRIVATE LIMITED",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/CRI PUMPS PRIVATE LIMITED/DSC02517-800x534.jpg",
    status: "Completed",
    description: "Construction of CRI PUMPS PRIVATE LIMITED in COIMBATORE.",
    details: {
      client: "CRI PUMPS PRIVATE LIMITED",
      area: "44200 SFT",
      floors: "GF",
      startDate: "DEC’ 2018",
      completionDate: "SEP'2019",
      consultant: "M/s. Mithran Structures (P) Ltd.,"
    },
    gallery: [
      "/project/industrial/CRI PUMPS PRIVATE LIMITED/DSC02517-800x534.jpg",
      "/project/industrial/CRI PUMPS PRIVATE LIMITED/DSC02519-800x534.jpg",
      "/project/industrial/CRI PUMPS PRIVATE LIMITED/DSC02520-800x534.jpg",
      "/project/industrial/CRI PUMPS PRIVATE LIMITED/img-1-35-800x400.jpg",
      "/project/industrial/CRI PUMPS PRIVATE LIMITED/img-2-35-800x400.jpg",
      "/project/industrial/CRI PUMPS PRIVATE LIMITED/img-3-34-800x400.jpg",
      "/project/industrial/CRI PUMPS PRIVATE LIMITED/WhatsApp-Image-2019-01-21-at-15.20.08-800x400.jpeg"
    ]
  },  {
    slug: "cri-pumps-private-limited-58",
    name: "CRI PUMPS PRIVATE LIMITED",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/CRI PUMPS PRIVATE LIMITED 2/CRI-1-800x399.jpg",
    status: "Completed",
    description: "Construction of CRI PUMPS PRIVATE LIMITED in COIMBATORE.",
    details: {
      client: "CRI PUMPS PRIVATE LIMITED",
      area: "34000 SFT",
      floors: "GF",
      startDate: "Apr’ 2017",
      completionDate: "Jun’ 2018",
      consultant: "M/s. Design Tech"
    },
    gallery: [
      "/project/industrial/CRI PUMPS PRIVATE LIMITED 2/CRI-1-800x399.jpg",
      "/project/industrial/CRI PUMPS PRIVATE LIMITED 2/CRI-2-800x600.jpg",
      "/project/industrial/CRI PUMPS PRIVATE LIMITED 2/CRI-3-800x452.jpg",
      "/project/industrial/CRI PUMPS PRIVATE LIMITED 2/CRI-4-800x400.jpg",
      "/project/industrial/CRI PUMPS PRIVATE LIMITED 2/CRI-5-800x400.jpg",
      "/project/industrial/CRI PUMPS PRIVATE LIMITED 2/CRI-800x399.jpg"
    ]
  },  {
    slug: "exotic-fruits-pvt-ltd-59",
    name: "EXOTIC FRUITS PVT LTD",
    category: "Industrial",
    location: "KRISHNAGIRI",
    imageUrl: "/project/industrial/EXOTIC FRUITS PVT LTD/Exotic-1-1-800x600.jpg",
    status: "Completed",
    description: "Construction of EXOTIC FRUITS PVT LTD in KRISHNAGIRI.",
    details: {
      client: "EXOTIC FRUITS PVT LTD",
      area: "203900 SFT + 35000 SFT",
      floors: "GF",
      startDate: "NOV’2010",
      completionDate: "JUN’2014",
      consultant: "M/s.Design Forum India Private Limited"
    },
    gallery: [
      "/project/industrial/EXOTIC FRUITS PVT LTD/Exotic-1-1-800x600.jpg",
      "/project/industrial/EXOTIC FRUITS PVT LTD/exotic-1-800x450.jpg",
      "/project/industrial/EXOTIC FRUITS PVT LTD/Exotic-10-800x600.jpg",
      "/project/industrial/EXOTIC FRUITS PVT LTD/Exotic-11-800x600.jpg",
      "/project/industrial/EXOTIC FRUITS PVT LTD/Exotic-12-800x600.jpg",
      "/project/industrial/EXOTIC FRUITS PVT LTD/Exotic-13-800x600.jpg",
      "/project/industrial/EXOTIC FRUITS PVT LTD/Exotic-14-800x600.jpg",
      "/project/industrial/EXOTIC FRUITS PVT LTD/Exotic-15-800x600.jpg",
      "/project/industrial/EXOTIC FRUITS PVT LTD/Exotic-16-800x600.jpg",
      "/project/industrial/EXOTIC FRUITS PVT LTD/Exotic-17-800x600.jpg",
      "/project/industrial/EXOTIC FRUITS PVT LTD/Exotic-18-800x600.jpg",
      "/project/industrial/EXOTIC FRUITS PVT LTD/Exotic-19-800x450.jpg",
      "/project/industrial/EXOTIC FRUITS PVT LTD/Exotic-2-800x600.jpg",
      "/project/industrial/EXOTIC FRUITS PVT LTD/exotic-2.jpg",
      "/project/industrial/EXOTIC FRUITS PVT LTD/Exotic-20-800x450.jpg",
      "/project/industrial/EXOTIC FRUITS PVT LTD/Exotic-21-800x450.jpg",
      "/project/industrial/EXOTIC FRUITS PVT LTD/Exotic-22-800x450.jpg",
      "/project/industrial/EXOTIC FRUITS PVT LTD/Exotic-23-800x450.jpg",
      "/project/industrial/EXOTIC FRUITS PVT LTD/Exotic-24-800x600.jpg",
      "/project/industrial/EXOTIC FRUITS PVT LTD/Exotic-3-800x600.jpg",
      "/project/industrial/EXOTIC FRUITS PVT LTD/exotic-3.jpg",
      "/project/industrial/EXOTIC FRUITS PVT LTD/Exotic-4-800x600.jpg",
      "/project/industrial/EXOTIC FRUITS PVT LTD/exotic-4.jpg",
      "/project/industrial/EXOTIC FRUITS PVT LTD/Exotic-5-800x600.jpg",
      "/project/industrial/EXOTIC FRUITS PVT LTD/exotic-5.jpg",
      "/project/industrial/EXOTIC FRUITS PVT LTD/Exotic-6-800x600.jpg",
      "/project/industrial/EXOTIC FRUITS PVT LTD/Exotic-7-1.jpg",
      "/project/industrial/EXOTIC FRUITS PVT LTD/Exotic-8-800x600.jpg"
    ]
  },  {
    slug: "extention-of-factory-building-60",
    name: "Extention of Factory Building",
    category: "Industrial",
    location: "Salaiyur pirivu, Vadugapalayam, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Extention of Factory Building in Salaiyur pirivu, Vadugapalayam, Coimbatore.",
    details: {
      client: "M/s. Sakthi Gear Products",
      area: "11,300.",
      floors: "GROUND FLOOR",
      startDate: "OCT' 2022",
      completionDate: "NOV' 2023",
      consultant: "Ms/. Vesta Architects, No: 252, Avinashi road,   Peelamedu, Coimbatore - 641 004"
    },
    gallery: []
  },  {
    slug: "gtn-exports-ltd-61",
    name: "GTN EXPORTS LTD",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/GTN EXPORTS LTD/GTN-1-1-800x529.jpg",
    status: "Completed",
    description: "Construction of GTN EXPORTS LTD in COIMBATORE.",
    details: {
      client: "GTN EXPORTS LTD",
      area: "152000 SFT",
      floors: "GF",
      startDate: "FEB’2009",
      completionDate: "JAN’2010",
      consultant: "M/s. M. Dharmalingam Associates,"
    },
    gallery: [
      "/project/industrial/GTN EXPORTS LTD/GTN-1-1-800x529.jpg",
      "/project/industrial/GTN EXPORTS LTD/gtn-1.jpg",
      "/project/industrial/GTN EXPORTS LTD/GTN-10-800x535.jpg",
      "/project/industrial/GTN EXPORTS LTD/GTN-11-800x535.jpg",
      "/project/industrial/GTN EXPORTS LTD/GTN-12-800x338.jpg",
      "/project/industrial/GTN EXPORTS LTD/gtn-2.jpg",
      "/project/industrial/GTN EXPORTS LTD/GTN-5-800x533.jpg",
      "/project/industrial/GTN EXPORTS LTD/GTN-6-800x535.jpg",
      "/project/industrial/GTN EXPORTS LTD/GTN-7-800x535.jpg",
      "/project/industrial/GTN EXPORTS LTD/GTN-8-800x535.jpg",
      "/project/industrial/GTN EXPORTS LTD/GTN-9-800x535.jpg"
    ]
  },  {
    slug: "integra-automation-pvt-ltd-unit-iv-62",
    name: "INTEGRA AUTOMATION PVT LTD UNIT–IV",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/INTEGRA AUTOMATION PVT LTD UNIT–IV/DSC02320-800x534.jpg",
    status: "Completed",
    description: "Construction of INTEGRA AUTOMATION PVT LTD UNIT–IV in COIMBATORE.",
    details: {
      client: "INTEGRA AUTOMATION PVT LTD UNIT–IV",
      area: "82000 SFT",
      floors: "GF",
      startDate: "2018-12-01",
      completionDate: "2021-03-01",
      consultant: "M/s. Sabarianand M.E"
    },
    gallery: [
      "/project/industrial/INTEGRA AUTOMATION PVT LTD UNIT–IV/DSC02320-800x534.jpg",
      "/project/industrial/INTEGRA AUTOMATION PVT LTD UNIT–IV/DSC02321-800x534.jpg",
      "/project/industrial/INTEGRA AUTOMATION PVT LTD UNIT–IV/DSC02334-800x534.jpg",
      "/project/industrial/INTEGRA AUTOMATION PVT LTD UNIT–IV/DSC03538-800x534.jpg",
      "/project/industrial/INTEGRA AUTOMATION PVT LTD UNIT–IV/DSC03542-800x534.jpg",
      "/project/industrial/INTEGRA AUTOMATION PVT LTD UNIT–IV/DSC03544-800x534.jpg",
      "/project/industrial/INTEGRA AUTOMATION PVT LTD UNIT–IV/DSC03545-800x534.jpg",
      "/project/industrial/INTEGRA AUTOMATION PVT LTD UNIT–IV/DSC03555-800x534.jpg",
      "/project/industrial/INTEGRA AUTOMATION PVT LTD UNIT–IV/DSC03557-800x534.jpg",
      "/project/industrial/INTEGRA AUTOMATION PVT LTD UNIT–IV/DSC03558-800x534.jpg",
      "/project/industrial/INTEGRA AUTOMATION PVT LTD UNIT–IV/DSC03561-800x534.jpg",
      "/project/industrial/INTEGRA AUTOMATION PVT LTD UNIT–IV/DSC03563-800x534.jpg",
      "/project/industrial/INTEGRA AUTOMATION PVT LTD UNIT–IV/DSC03564-800x534.jpg",
      "/project/industrial/INTEGRA AUTOMATION PVT LTD UNIT–IV/DSC03565-800x534.jpg",
      "/project/industrial/INTEGRA AUTOMATION PVT LTD UNIT–IV/DSC03566-800x534.jpg",
      "/project/industrial/INTEGRA AUTOMATION PVT LTD UNIT–IV/DSC03574-800x534.jpg",
      "/project/industrial/INTEGRA AUTOMATION PVT LTD UNIT–IV/img-1-25-800x405.jpg",
      "/project/industrial/INTEGRA AUTOMATION PVT LTD UNIT–IV/img-2-25-800x388.jpg",
      "/project/industrial/INTEGRA AUTOMATION PVT LTD UNIT–IV/IMG-20190603-WA0045-800x450.jpg",
      "/project/industrial/INTEGRA AUTOMATION PVT LTD UNIT–IV/img-3-24-800x388.jpg",
      "/project/industrial/INTEGRA AUTOMATION PVT LTD UNIT–IV/img-4-21-800x388.jpg",
      "/project/industrial/INTEGRA AUTOMATION PVT LTD UNIT–IV/img-5-20-800x388.jpg",
      "/project/industrial/INTEGRA AUTOMATION PVT LTD UNIT–IV/img-6-17-800x388.jpg",
      "/project/industrial/INTEGRA AUTOMATION PVT LTD UNIT–IV/img-7-13-800x388.jpg",
      "/project/industrial/INTEGRA AUTOMATION PVT LTD UNIT–IV/img-8-11-800x388.jpg",
      "/project/industrial/INTEGRA AUTOMATION PVT LTD UNIT–IV/img-9-10-800x388.jpg",
      "/project/industrial/INTEGRA AUTOMATION PVT LTD UNIT–IV/IMG_20210624_153653-800x351.jpg"
    ]
  },  {
    slug: "international-aerospace-manufacturing-63",
    name: "INTERNATIONAL AEROSPACE MANUFACTURING",
    category: "Industrial",
    location: "HOSUR",
    imageUrl: "/project/industrial/INTERNATIONAL AEROSPACE MANUFACTURING/1-1-800x370.jpg",
    status: "Completed",
    description: "Construction of INTERNATIONAL AEROSPACE MANUFACTURING in HOSUR.",
    details: {
      client: "INTERNATIONAL AEROSPACE MANUFACTURING PVT",
      area: "73,000 SFT",
      floors: "GF + MEZZANINE FLOORS",
      startDate: "JUN’ 2023",
      completionDate: "MAY’ 2024",
      consultant: "‘Besten Engineers & Consultants India   Private Limited"
    },
    gallery: [
      "/project/industrial/INTERNATIONAL AEROSPACE MANUFACTURING/1-1-800x370.jpg",
      "/project/industrial/INTERNATIONAL AEROSPACE MANUFACTURING/10-800x445.jpg",
      "/project/industrial/INTERNATIONAL AEROSPACE MANUFACTURING/11-800x453.jpg",
      "/project/industrial/INTERNATIONAL AEROSPACE MANUFACTURING/12-800x486.jpg",
      "/project/industrial/INTERNATIONAL AEROSPACE MANUFACTURING/13-800x412.jpg",
      "/project/industrial/INTERNATIONAL AEROSPACE MANUFACTURING/2-1-800x370.jpg",
      "/project/industrial/INTERNATIONAL AEROSPACE MANUFACTURING/3-1-800x370.jpg",
      "/project/industrial/INTERNATIONAL AEROSPACE MANUFACTURING/4-1-800x370.jpg",
      "/project/industrial/INTERNATIONAL AEROSPACE MANUFACTURING/5-800x370.jpg",
      "/project/industrial/INTERNATIONAL AEROSPACE MANUFACTURING/6-800x370.jpg",
      "/project/industrial/INTERNATIONAL AEROSPACE MANUFACTURING/7-800x370.jpg",
      "/project/industrial/INTERNATIONAL AEROSPACE MANUFACTURING/8-800x370.jpg",
      "/project/industrial/INTERNATIONAL AEROSPACE MANUFACTURING/9-800x446.jpg"
    ]
  },  {
    slug: "kg-denim-limited-64",
    name: "KG DENIM LIMITED",
    category: "Industrial",
    location: "METTUPALAYAM",
    imageUrl: "/project/industrial/KG DENIM LIMITED/Copy-of-17-post-800x484.jpg",
    status: "Completed",
    description: "Construction of KG DENIM LIMITED in METTUPALAYAM.",
    details: {
      client: "K. Govindaswamy Naidu Medical Trust",
      area: "166000 SFT",
      floors: "GF",
      startDate: "JUN’ 2004",
      completionDate: "DEC’ 2005",
      consultant: "M/s.Design Forum India Private Limited"
    },
    gallery: [
      "/project/industrial/KG DENIM LIMITED/Copy-of-17-post-800x484.jpg",
      "/project/industrial/KG DENIM LIMITED/KGD-1-800x537.jpg",
      "/project/industrial/KG DENIM LIMITED/KGD-2-800x537.jpg",
      "/project/industrial/KG DENIM LIMITED/KGD-4-800x537.jpg",
      "/project/industrial/KG DENIM LIMITED/KGD-5-800x537.jpg",
      "/project/industrial/KG DENIM LIMITED/KGD-6-800x537.jpg",
      "/project/industrial/KG DENIM LIMITED/KGD-7-800x537.jpg",
      "/project/industrial/KG DENIM LIMITED/KGD-8-800x537.jpg"
    ]
  },  {
    slug: "kg-fabriks-limited-65",
    name: "KG FABRIKS LIMITED",
    category: "Industrial",
    location: "ERODE",
    imageUrl: "/project/industrial/KG FABRIKS LIMITED/DSC_0041-800x537.jpg",
    status: "Completed",
    description: "Construction of KG FABRIKS LIMITED in ERODE.",
    details: {
      client: "K. Govindaswamy Naidu Medical Trust",
      area: "225000 SFT",
      floors: "GF",
      startDate: "JUL’ 2005",
      completionDate: "MAR’ 2007",
      consultant: "M/s.Design Forum India Private Limited"
    },
    gallery: [
      "/project/industrial/KG FABRIKS LIMITED/DSC_0041-800x537.jpg",
      "/project/industrial/KG FABRIKS LIMITED/KG-Fab.jpg",
      "/project/industrial/KG FABRIKS LIMITED/KGF-1-800x537.jpg",
      "/project/industrial/KG FABRIKS LIMITED/KGF-10-800x537.jpg",
      "/project/industrial/KG FABRIKS LIMITED/KGF-11-800x537.jpg",
      "/project/industrial/KG FABRIKS LIMITED/KGF-12-800x537.jpg",
      "/project/industrial/KG FABRIKS LIMITED/KGF-13-800x537.jpg",
      "/project/industrial/KG FABRIKS LIMITED/KGF-14-800x600.jpg",
      "/project/industrial/KG FABRIKS LIMITED/KGF-15-800x600.jpg",
      "/project/industrial/KG FABRIKS LIMITED/KGF-2-800x537.jpg",
      "/project/industrial/KG FABRIKS LIMITED/KGF-3-800x537.jpg",
      "/project/industrial/KG FABRIKS LIMITED/KGF-4-800x537.jpg",
      "/project/industrial/KG FABRIKS LIMITED/KGF-5-800x537.jpg",
      "/project/industrial/KG FABRIKS LIMITED/KGF-6-800x537.jpg",
      "/project/industrial/KG FABRIKS LIMITED/KGF-7-800x537.jpg",
      "/project/industrial/KG FABRIKS LIMITED/KGF-8-800x537.jpg",
      "/project/industrial/KG FABRIKS LIMITED/KGF-9-800x537.jpg"
    ]
  },  {
    slug: "kpr-mills-limited-66",
    name: "KPR MILLS LIMITED",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/KPR MILLS LIMITED/DSCN0924-2-800x600.jpg",
    status: "Completed",
    description: "Construction of KPR MILLS LIMITED in COIMBATORE.",
    details: {
      client: "KPR MILLS LIMITED",
      area: "691000 SFT",
      floors: "GF",
      startDate: "OCT ‘2010",
      completionDate: "JUN ‘2011",
      consultant: "M/s.Design Forum India Private Limited"
    },
    gallery: [
      "/project/industrial/KPR MILLS LIMITED/DSCN0924-2-800x600.jpg",
      "/project/industrial/KPR MILLS LIMITED/KPR-1-800x600.jpg",
      "/project/industrial/KPR MILLS LIMITED/KPR-2-800x600.jpg",
      "/project/industrial/KPR MILLS LIMITED/KPR-3-800x600.jpg",
      "/project/industrial/KPR MILLS LIMITED/KPR-4-800x600.jpg",
      "/project/industrial/KPR MILLS LIMITED/KPR-5-800x600.jpg",
      "/project/industrial/KPR MILLS LIMITED/KPR-6-800x600.jpg",
      "/project/industrial/KPR MILLS LIMITED/WhatsApp-Image-2019-01-28-at-16.01.48-800x496.jpeg",
      "/project/industrial/KPR MILLS LIMITED/WhatsApp-Image-2019-01-28-at-16.01.49-800x561 (1).jpeg",
      "/project/industrial/KPR MILLS LIMITED/WhatsApp-Image-2019-01-28-at-16.01.49-800x561.jpeg"
    ]
  },  {
    slug: "krishnaveni-carbon-67",
    name: "KRISHNAVENI CARBON",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/KRISHNAVENI CARBON/Krish-11-800x370.jpg",
    status: "Completed",
    description: "Construction of KRISHNAVENI CARBON in COIMBATORE.",
    details: {
      client: "KRISHNAVENI CARBON PRODUCTS PVTLTD",
      area: "95000 SFT",
      floors: "GF",
      startDate: "Jun’ 2019",
      completionDate: "FEB’ 2022",
      consultant: "M/s. M. Dharmalingam Associates"
    },
    gallery: [
      "/project/industrial/KRISHNAVENI CARBON/Krish-11-800x370.jpg",
      "/project/industrial/KRISHNAVENI CARBON/KrishCar-33-800x371.jpg",
      "/project/industrial/KRISHNAVENI CARBON/Krishnaveni-800x450.jpg",
      "/project/industrial/KRISHNAVENI CARBON/KV-1-800x369.jpeg",
      "/project/industrial/KRISHNAVENI CARBON/KV-10-800x369.jpeg",
      "/project/industrial/KRISHNAVENI CARBON/KV-2-800x369.jpeg",
      "/project/industrial/KRISHNAVENI CARBON/KV-3-800x369.jpeg",
      "/project/industrial/KRISHNAVENI CARBON/KV-4-800x369.jpeg",
      "/project/industrial/KRISHNAVENI CARBON/KV-5-800x369.jpeg",
      "/project/industrial/KRISHNAVENI CARBON/KV-6-800x369.jpeg",
      "/project/industrial/KRISHNAVENI CARBON/KV-7-800x400.jpeg",
      "/project/industrial/KRISHNAVENI CARBON/KV-8-800x369.jpeg",
      "/project/industrial/KRISHNAVENI CARBON/KV-9-800x369 (1).jpeg",
      "/project/industrial/KRISHNAVENI CARBON/KV-9-800x369.jpeg"
    ]
  },  {
    slug: "l-g-balakrishnan-bro-s-ltd-68",
    name: "L G BALAKRISHNAN & BRO’s LTD",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/L G BALAKRISHNAN & BRO’s LTD/img-1-2.jpg",
    status: "Completed",
    description: "Construction of L G BALAKRISHNAN & BRO’s LTD in COIMBATORE.",
    details: {
      client: "M/s. L.G.Balakrishnan & Bros Limited",
      area: "97000 SFT",
      floors: "GF",
      startDate: "MAR’ 2018",
      completionDate: "NOV’ 2018",
      consultant: "Client Engineer"
    },
    gallery: [
      "/project/industrial/L G BALAKRISHNAN & BRO’s LTD/img-1-2.jpg",
      "/project/industrial/L G BALAKRISHNAN & BRO’s LTD/img-2-2.jpg",
      "/project/industrial/L G BALAKRISHNAN & BRO’s LTD/img-3-2.jpg",
      "/project/industrial/L G BALAKRISHNAN & BRO’s LTD/img-4-2.jpg",
      "/project/industrial/L G BALAKRISHNAN & BRO’s LTD/img-5-2.jpg",
      "/project/industrial/L G BALAKRISHNAN & BRO’s LTD/img-6-1.jpg",
      "/project/industrial/L G BALAKRISHNAN & BRO’s LTD/img-7.jpg",
      "/project/industrial/L G BALAKRISHNAN & BRO’s LTD/production-vdf-2-800x450.jpg",
      "/project/industrial/L G BALAKRISHNAN & BRO’s LTD/Untitled.jpg",
      "/project/industrial/L G BALAKRISHNAN & BRO’s LTD/WhatsApp-Image-2019-05-28-at-11.51.59-1-800x450.jpeg",
      "/project/industrial/L G BALAKRISHNAN & BRO’s LTD/WhatsApp-Image-2019-05-28-at-12.28.15-1-800x600.jpeg",
      "/project/industrial/L G BALAKRISHNAN & BRO’s LTD/WhatsApp-Image-2019-05-28-at-12.28.15-3-800x600.jpeg"
    ]
  },  {
    slug: "l-g-balakrishnan-bros-limited-69",
    name: "L.G.BALAKRISHNAN & BROS LIMITED",
    category: "Industrial",
    location: "ANNUR",
    imageUrl: "/project/industrial/L.G.BALAKRISHNAN & BROS LIMITED/img-4-29-800x450.jpg",
    status: "Completed",
    description: "Construction of L.G.BALAKRISHNAN & BROS LIMITED in ANNUR.",
    details: {
      client: "M/s. L.G.Balakrishnan & Bros Limited",
      area: "15000 SFT",
      floors: "GF+1 FLOOR",
      startDate: "MAR’ 2018",
      completionDate: "OCT’ 2018",
      consultant: "Ms/. Vesta Architects"
    },
    gallery: [
      "/project/industrial/L.G.BALAKRISHNAN & BROS LIMITED/img-4-29-800x450.jpg",
      "/project/industrial/L.G.BALAKRISHNAN & BROS LIMITED/img-5-27-800x450.jpg",
      "/project/industrial/L.G.BALAKRISHNAN & BROS LIMITED/img-6-22-800x450.jpg",
      "/project/industrial/L.G.BALAKRISHNAN & BROS LIMITED/img-7-17-800x450.jpg",
      "/project/industrial/L.G.BALAKRISHNAN & BROS LIMITED/img-8-15-800x450.jpg",
      "/project/industrial/L.G.BALAKRISHNAN & BROS LIMITED/img-9-14-800x450.jpg"
    ]
  },  {
    slug: "l-g-balakrishnan-bros-limited-70",
    name: "L.G.BALAKRISHNAN & BROS LIMITED",
    category: "Industrial",
    location: "CHENNAI",
    imageUrl: "/project/industrial/L.G.BALAKRISHNAN & BROS LIMITED 2/Che-1-800x534.jpg",
    status: "Completed",
    description: "Construction of L.G.BALAKRISHNAN & BROS LIMITED in CHENNAI.",
    details: {
      client: "M/s. L.G.Balakrishnan & Bros Limited",
      area: "125000 SFT",
      floors: "GF",
      startDate: "FEB’ 2018",
      completionDate: "SEP’ 2019",
      consultant: "M/s. PTK Architects"
    },
    gallery: [
      "/project/industrial/L.G.BALAKRISHNAN & BROS LIMITED 2/Che-1-800x534.jpg",
      "/project/industrial/L.G.BALAKRISHNAN & BROS LIMITED 2/Che-2-800x534.jpg",
      "/project/industrial/L.G.BALAKRISHNAN & BROS LIMITED 2/Che-3-800x450.jpg",
      "/project/industrial/L.G.BALAKRISHNAN & BROS LIMITED 2/Che-4-800x450.jpg",
      "/project/industrial/L.G.BALAKRISHNAN & BROS LIMITED 2/Che-5-800x450.jpg",
      "/project/industrial/L.G.BALAKRISHNAN & BROS LIMITED 2/img-1-34-800x600.jpg",
      "/project/industrial/L.G.BALAKRISHNAN & BROS LIMITED 2/img-2-34-800x600.jpg",
      "/project/industrial/L.G.BALAKRISHNAN & BROS LIMITED 2/img-3-33-800x600.jpg",
      "/project/industrial/L.G.BALAKRISHNAN & BROS LIMITED 2/img-4-30-800x600.jpg",
      "/project/industrial/L.G.BALAKRISHNAN & BROS LIMITED 2/img-5-28-800x600.jpg",
      "/project/industrial/L.G.BALAKRISHNAN & BROS LIMITED 2/img-6-23-800x600.jpg",
      "/project/industrial/L.G.BALAKRISHNAN & BROS LIMITED 2/img-7-18-800x600.jpg",
      "/project/industrial/L.G.BALAKRISHNAN & BROS LIMITED 2/img-8-16-800x600.jpg",
      "/project/industrial/L.G.BALAKRISHNAN & BROS LIMITED 2/img-9-15-800x600.jpg",
      "/project/industrial/L.G.BALAKRISHNAN & BROS LIMITED 2/LGB-CHENNAI-2-800x534.jpg",
      "/project/industrial/L.G.BALAKRISHNAN & BROS LIMITED 2/LGB-CHENNAI-3-800x450.jpg",
      "/project/industrial/L.G.BALAKRISHNAN & BROS LIMITED 2/LGB-CHENNAI-800x534.jpg",
      "/project/industrial/L.G.BALAKRISHNAN & BROS LIMITED 2/WhatsApp-Image-2019-05-28-at-16.38.47-800x600.jpeg",
      "/project/industrial/L.G.BALAKRISHNAN & BROS LIMITED 2/WhatsApp-Image-2019-05-28-at-16.38.58-800x600.jpeg"
    ]
  },  {
    slug: "l-g-balakrishnan-bros-limited-oht-71",
    name: "L.G.Balakrishnan & Bros Limited – OHT",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/L.G.Balakrishnan & Bros Limited – OHT/IMGWA0010-800x1063.jpg",
    status: "Completed",
    description: "Construction of L.G.Balakrishnan & Bros Limited – OHT in COIMBATORE.",
    details: {
      client: "M/s. L.G.Balakrishnan & Bros Limited",
      area: "215000 Ltr",
      floors: "GF",
      startDate: "MAY’ 2022",
      completionDate: "JUL’ 2023",
      consultant: "M/s. Innovative Design"
    },
    gallery: [
      "/project/industrial/L.G.Balakrishnan & Bros Limited – OHT/IMGWA0010-800x1063.jpg"
    ]
  },  {
    slug: "lgb-canteen-block-and-factory-building-3-72",
    name: "LGB CANTEEN BLOCK AND FACTORY BUILDING 3",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/LGB CANTEEN BLOCK AND FACTORY BUILDING 3/LGBCF1-800x471.jpg",
    status: "Completed",
    description: "Construction of LGB CANTEEN BLOCK AND FACTORY BUILDING 3 in COIMBATORE.",
    details: {
      client: "M/s. L.G.Balakrishnan & Bros Limited",
      area: "8000+97000 SFT",
      floors: "2+1 +TERRACE GF",
      startDate: "DEC’ 2023",
      completionDate: "MAR'2025",
      consultant: "Ms/. Vesta Architects"
    },
    gallery: [
      "/project/industrial/LGB CANTEEN BLOCK AND FACTORY BUILDING 3/LGBCF1-800x471.jpg",
      "/project/industrial/LGB CANTEEN BLOCK AND FACTORY BUILDING 3/LGBCF2-800x380.jpg",
      "/project/industrial/LGB CANTEEN BLOCK AND FACTORY BUILDING 3/LGBCF3-800x424.jpg",
      "/project/industrial/LGB CANTEEN BLOCK AND FACTORY BUILDING 3/LGBCF4-800x464.jpg",
      "/project/industrial/LGB CANTEEN BLOCK AND FACTORY BUILDING 3/LGBCF5-800x443.jpg"
    ]
  },  {
    slug: "lgb-factory-building-2-vallam-73",
    name: "LGB FACTORY BUILDING 2      VALLAM",
    category: "Industrial",
    location: "CHENNAI",
    imageUrl: "/project/industrial/LGB FACTORY BUILDING 2 VALLAM/LGBVV1-800x441.jpg",
    status: "Completed",
    description: "Construction of LGB FACTORY BUILDING 2      VALLAM in CHENNAI.",
    details: {
      client: "M/s. L.G.Balakrishnan & Bros Limited",
      area: "103,000 SFT",
      floors: "GF",
      startDate: "APR’ 2024",
      completionDate: "JAN'2026",
      consultant: "Ms/. Vesta Architects"
    },
    gallery: [
      "/project/industrial/LGB FACTORY BUILDING 2 VALLAM/LGBVV1-800x441.jpg",
      "/project/industrial/LGB FACTORY BUILDING 2 VALLAM/LGBVV2.jpg",
      "/project/industrial/LGB FACTORY BUILDING 2 VALLAM/LGBVV3.jpg",
      "/project/industrial/LGB FACTORY BUILDING 2 VALLAM/LGBVV4.jpg",
      "/project/industrial/LGB FACTORY BUILDING 2 VALLAM/LGBVV5-1.jpg"
    ]
  },  {
    slug: "m-s-cs-spinners-pvt-ltd-74",
    name: "M/s. CS SPINNERS PVT LTD",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/Ms. CS SPINNERS PVT LTD/CS-1-800x509.jpg",
    status: "Completed",
    description: "Construction of M/s. CS SPINNERS PVT LTD in COIMBATORE.",
    details: {
      client: "M/s. CS SPINNERS PVT LTD",
      area: "126000 SFT",
      floors: "GF",
      startDate: "NOV’ 2017",
      completionDate: "SEP’ 2019",
      consultant: "M/s. Vesta Architect"
    },
    gallery: [
      "/project/industrial/Ms. CS SPINNERS PVT LTD/CS-1-800x509.jpg",
      "/project/industrial/Ms. CS SPINNERS PVT LTD/CS-10-800x600.jpg",
      "/project/industrial/Ms. CS SPINNERS PVT LTD/CS-2-800x600.jpg",
      "/project/industrial/Ms. CS SPINNERS PVT LTD/CS-3-800x696.jpg",
      "/project/industrial/Ms. CS SPINNERS PVT LTD/CS-4-800x600.jpg",
      "/project/industrial/Ms. CS SPINNERS PVT LTD/CS-5-800x502.jpg",
      "/project/industrial/Ms. CS SPINNERS PVT LTD/CS-6-800x538.jpg",
      "/project/industrial/Ms. CS SPINNERS PVT LTD/CS-7-800x600.jpg",
      "/project/industrial/Ms. CS SPINNERS PVT LTD/CS-8-800x473.jpg",
      "/project/industrial/Ms. CS SPINNERS PVT LTD/DSC02438-800x534.jpg",
      "/project/industrial/Ms. CS SPINNERS PVT LTD/DSC02448-800x534.jpg",
      "/project/industrial/Ms. CS SPINNERS PVT LTD/img-1-9.jpg",
      "/project/industrial/Ms. CS SPINNERS PVT LTD/img-2-9.jpg"
    ]
  },  {
    slug: "m-s-revantha-services-ltd-75",
    name: "M/s. REVANTHA SERVICES LTD",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/Ms. REVANTHA SERVICES LTD/1-800x348.jpg",
    status: "Completed",
    description: "Construction of M/s. REVANTHA SERVICES LTD in COIMBATORE.",
    details: {
      client: "M/s. REVANTHA SERVICES LTD",
      area: "85500 SFT",
      floors: "GF",
      startDate: "AUG’ 2017",
      completionDate: "SEP’ 2018",
      consultant: "M/s. Bharath & Associates"
    },
    gallery: [
      "/project/industrial/Ms. REVANTHA SERVICES LTD/1-800x348.jpg",
      "/project/industrial/Ms. REVANTHA SERVICES LTD/2-800x480.jpg",
      "/project/industrial/Ms. REVANTHA SERVICES LTD/4-800x480.jpg",
      "/project/industrial/Ms. REVANTHA SERVICES LTD/5-800x480.jpg",
      "/project/industrial/Ms. REVANTHA SERVICES LTD/6-800x480.jpg"
    ]
  },  {
    slug: "madras-cements-ltd-76",
    name: "MADRAS CEMENTS LTD",
    category: "Industrial",
    location: "CHENGELPET",
    imageUrl: "/project/industrial/MADRAS CEMENTS LTD/MCL-1-800x600.jpg",
    status: "Completed",
    description: "Construction of MADRAS CEMENTS LTD in CHENGELPET.",
    details: {
      client: "MADRAS CEMENTS LTD",
      area: "0.7 MTPA",
      floors: "GF",
      startDate: "JAN’2007",
      completionDate: "JAN’2010",
      consultant: "M/s. Enexco Technologies (India) Ltd"
    },
    gallery: [
      "/project/industrial/MADRAS CEMENTS LTD/MCL-1-800x600.jpg",
      "/project/industrial/MADRAS CEMENTS LTD/MCL-10-800x600.jpg",
      "/project/industrial/MADRAS CEMENTS LTD/MCL-11-800x600.jpg",
      "/project/industrial/MADRAS CEMENTS LTD/MCL-13-800x533.jpg",
      "/project/industrial/MADRAS CEMENTS LTD/MCL-14-800x600.jpg",
      "/project/industrial/MADRAS CEMENTS LTD/MCL-2-800x600.jpg",
      "/project/industrial/MADRAS CEMENTS LTD/MCL-3.jpg",
      "/project/industrial/MADRAS CEMENTS LTD/MCL-4-800x600.jpg",
      "/project/industrial/MADRAS CEMENTS LTD/MCL-5-800x600.jpg",
      "/project/industrial/MADRAS CEMENTS LTD/MCL-6-800x600.jpg",
      "/project/industrial/MADRAS CEMENTS LTD/MCL-7-800x600.jpg",
      "/project/industrial/MADRAS CEMENTS LTD/MCL-8-800x600.jpg",
      "/project/industrial/MADRAS CEMENTS LTD/MCL-9-800x600.jpg",
      "/project/industrial/MADRAS CEMENTS LTD/MCL-Chennai.jpg"
    ]
  },  {
    slug: "madras-cements-ltd-77",
    name: "MADRAS CEMENTS LTD",
    category: "Industrial",
    location: "SALEM",
    imageUrl: "/project/industrial/MADRAS CEMENTS LTD 2/MCL-1-1-800x600.jpg",
    status: "Completed",
    description: "Construction of MADRAS CEMENTS LTD in SALEM.",
    details: {
      client: "MADRAS CEMENTS LTD",
      area: "5.1 MW",
      floors: "GF",
      startDate: "SEP’2010",
      completionDate: "JAN’2012",
      consultant: "Client Engineer"
    },
    gallery: [
      "/project/industrial/MADRAS CEMENTS LTD 2/MCL-1-1-800x600.jpg",
      "/project/industrial/MADRAS CEMENTS LTD 2/MCL-2-1-800x600.jpg",
      "/project/industrial/MADRAS CEMENTS LTD 2/MCL-3-1-800x600.jpg",
      "/project/industrial/MADRAS CEMENTS LTD 2/MCL-4-1-800x600.jpg",
      "/project/industrial/MADRAS CEMENTS LTD 2/MCL-5-1-800x600.jpg",
      "/project/industrial/MADRAS CEMENTS LTD 2/MCL-800x600.jpg",
      "/project/industrial/MADRAS CEMENTS LTD 2/MCL-Salem.jpg"
    ]
  },  {
    slug: "madras-cements-ltd-78",
    name: "MADRAS CEMENTS LTD",
    category: "Industrial",
    location: "HYDERABAD",
    imageUrl: "/project/industrial/MADRAS CEMENTS LTD 3/MCL-Hyd.jpg",
    status: "Completed",
    description: "Construction of MADRAS CEMENTS LTD in HYDERABAD.",
    details: {
      client: "MADRAS CEMENTS LTD",
      area: "500 MTP",
      floors: "GF",
      startDate: "JAN’2007",
      completionDate: "JAN’2010",
      consultant: "EEL India Limited"
    },
    gallery: [
      "/project/industrial/MADRAS CEMENTS LTD 3/MCL-Hyd.jpg"
    ]
  },  {
    slug: "mark-engineering-works-79",
    name: "MARK ENGINEERING WORKS",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/MARK ENGINEERING WORKS/1WhatsApp-Image-2020-07-08-at-13.25.51.jpeg",
    status: "Completed",
    description: "Construction of MARK ENGINEERING WORKS in COIMBATORE.",
    details: {
      client: "Marks Engineering works",
      area: "161000 SFT",
      floors: "GF",
      startDate: "APR’ 2016",
      completionDate: "JUN’ 2017",
      consultant: "Ms/. Vesta Architects"
    },
    gallery: [
      "/project/industrial/MARK ENGINEERING WORKS/1WhatsApp-Image-2020-07-08-at-13.25.51.jpeg",
      "/project/industrial/MARK ENGINEERING WORKS/2WhatsApp-Image-2020-07-08-at-13.25.52-800x521.jpeg",
      "/project/industrial/MARK ENGINEERING WORKS/img-1.jpg",
      "/project/industrial/MARK ENGINEERING WORKS/img-2.jpg",
      "/project/industrial/MARK ENGINEERING WORKS/img-3.jpg",
      "/project/industrial/MARK ENGINEERING WORKS/img-4.jpg",
      "/project/industrial/MARK ENGINEERING WORKS/img-5.jpg",
      "/project/industrial/MARK ENGINEERING WORKS/MARK-1-800x534.jpg",
      "/project/industrial/MARK ENGINEERING WORKS/MARK-2-800x524.jpg",
      "/project/industrial/MARK ENGINEERING WORKS/MARK-3-800x534.jpg",
      "/project/industrial/MARK ENGINEERING WORKS/MARK-4-800x600.jpg",
      "/project/industrial/MARK ENGINEERING WORKS/MARK-5-800x600.jpg",
      "/project/industrial/MARK ENGINEERING WORKS/WhatsApp-Image-2020-07-08-at-13.25.51.jpeg"
    ]
  },  {
    slug: "mark-engineering-works-80",
    name: "MARK ENGINEERING WORKS",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/MARK ENGINEERING WORKS 2/mar-1-800x389.jpeg",
    status: "Completed",
    description: "Construction of MARK ENGINEERING WORKS in COIMBATORE.",
    details: {
      client: "Marks Engineering works",
      area: "95000 SFT",
      floors: "GF",
      startDate: "AUG’ 2020",
      completionDate: "JUL’ 2021",
      consultant: "Ms/. Vesta Architects"
    },
    gallery: [
      "/project/industrial/MARK ENGINEERING WORKS 2/mar-1-800x389.jpeg",
      "/project/industrial/MARK ENGINEERING WORKS 2/mar-2-800x600.jpeg",
      "/project/industrial/MARK ENGINEERING WORKS 2/mar-3-800x1067.jpeg",
      "/project/industrial/MARK ENGINEERING WORKS 2/mar-4.jpeg",
      "/project/industrial/MARK ENGINEERING WORKS 2/MarksNew-1-800x600.jpeg",
      "/project/industrial/MARK ENGINEERING WORKS 2/MarksNew-2-800x600.jpeg",
      "/project/industrial/MARK ENGINEERING WORKS 2/MarksNew-4-800x600.jpeg",
      "/project/industrial/MARK ENGINEERING WORKS 2/MarksNew-5-800x600.jpeg",
      "/project/industrial/MARK ENGINEERING WORKS 2/MarksNew-6-800x600.jpeg",
      "/project/industrial/MARK ENGINEERING WORKS 2/mrk-1-800x370.jpg",
      "/project/industrial/MARK ENGINEERING WORKS 2/mrk-2-800x370.jpg",
      "/project/industrial/MARK ENGINEERING WORKS 2/mrk-3-1-800x370.jpg",
      "/project/industrial/MARK ENGINEERING WORKS 2/mrk-3-800x600.jpg",
      "/project/industrial/MARK ENGINEERING WORKS 2/mrk-4-1.jpg",
      "/project/industrial/MARK ENGINEERING WORKS 2/mrk-4-2-800x370.jpg",
      "/project/industrial/MARK ENGINEERING WORKS 2/mrk-5-1-800x370.jpg",
      "/project/industrial/MARK ENGINEERING WORKS 2/mrk-5-800x600.jpg",
      "/project/industrial/MARK ENGINEERING WORKS 2/mrk-6-800x370.jpg"
    ]
  },  {
    slug: "marudhamalai-industrial-logistics-park-coimbatore-by-81",
    name: "Marudhamalai Industrial & Logistics Park,   Coimbatore (by)",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/Marudhamalai Industrial & Logistics Park, Coimbatore (by)/ILP-2-800x363.jpeg",
    status: "Completed",
    description: "Construction of Marudhamalai Industrial & Logistics Park,   Coimbatore (by) in COIMBATORE.",
    details: {
      client: "TVS INDUSTRIAL & LOGISTICS PARKS PVT LTD",
      area: "384500 SFT",
      floors: "GF",
      startDate: "Dec’ 2019",
      completionDate: "OCT’ 2021",
      consultant: "M/ s Tata Consulting Engineers Pvt Ltd,"
    },
    gallery: [
      "/project/industrial/Marudhamalai Industrial & Logistics Park, Coimbatore (by)/ILP-2-800x363.jpeg",
      "/project/industrial/Marudhamalai Industrial & Logistics Park, Coimbatore (by)/MAILP-1-4-800x450.jpeg",
      "/project/industrial/Marudhamalai Industrial & Logistics Park, Coimbatore (by)/MAILP-11-800x600.jpg",
      "/project/industrial/Marudhamalai Industrial & Logistics Park, Coimbatore (by)/MAILP-2-3-800x450.jpeg",
      "/project/industrial/Marudhamalai Industrial & Logistics Park, Coimbatore (by)/MAILP-3-3-800x600.jpeg",
      "/project/industrial/Marudhamalai Industrial & Logistics Park, Coimbatore (by)/MAILP-3-800x450.jpeg",
      "/project/industrial/Marudhamalai Industrial & Logistics Park, Coimbatore (by)/MAILP-7-3-800x450.jpeg",
      "/project/industrial/Marudhamalai Industrial & Logistics Park, Coimbatore (by)/MAILP-8-800x450.jpeg",
      "/project/industrial/Marudhamalai Industrial & Logistics Park, Coimbatore (by)/MAILP-8-800x600.jpg",
      "/project/industrial/Marudhamalai Industrial & Logistics Park, Coimbatore (by)/Mailp-10-800x370.jpeg",
      "/project/industrial/Marudhamalai Industrial & Logistics Park, Coimbatore (by)/Mailp-3-1-800x600.jpeg",
      "/project/industrial/Marudhamalai Industrial & Logistics Park, Coimbatore (by)/Mailp-5-1.jpeg",
      "/project/industrial/Marudhamalai Industrial & Logistics Park, Coimbatore (by)/Mailp-9-800x600.jpeg",
      "/project/industrial/Marudhamalai Industrial & Logistics Park, Coimbatore (by)/aerial2-800x450.jpg",
      "/project/industrial/Marudhamalai Industrial & Logistics Park, Coimbatore (by)/arial-800x450.jpg",
      "/project/industrial/Marudhamalai Industrial & Logistics Park, Coimbatore (by)/exit-800x450.jpg",
      "/project/industrial/Marudhamalai Industrial & Logistics Park, Coimbatore (by)/front-aerial-800x450.jpg",
      "/project/industrial/Marudhamalai Industrial & Logistics Park, Coimbatore (by)/main-entry-800x450.jpg",
      "/project/industrial/Marudhamalai Industrial & Logistics Park, Coimbatore (by)/mp-2-800x450.jpeg",
      "/project/industrial/Marudhamalai Industrial & Logistics Park, Coimbatore (by)/north-east-800x448.jpg",
      "/project/industrial/Marudhamalai Industrial & Logistics Park, Coimbatore (by)/north-east-view-800x450.jpg",
      "/project/industrial/Marudhamalai Industrial & Logistics Park, Coimbatore (by)/north-west-800x450.jpg",
      "/project/industrial/Marudhamalai Industrial & Logistics Park, Coimbatore (by)/northwest-800x448.jpg"
    ]
  },  {
    slug: "motherson-group-of-companies-82",
    name: "MOTHERSON GROUP OF COMPANIES",
    category: "Industrial",
    location: "CHENNAI",
    imageUrl: "/project/industrial/MOTHERSON GROUP OF COMPANIES/1.png",
    status: "Completed",
    description: "Construction of MOTHERSON GROUP OF COMPANIES in CHENNAI.",
    details: {
      client: "MOTHERSON GROUPS",
      area: "1,832 Mtr",
      floors: "GF",
      startDate: "AUG’ 2021",
      completionDate: "JUL’ 2022",
      consultant: "Ms/. Vesta Architects"
    },
    gallery: [
      "/project/industrial/MOTHERSON GROUP OF COMPANIES/1.png",
      "/project/industrial/MOTHERSON GROUP OF COMPANIES/2.jpg",
      "/project/industrial/MOTHERSON GROUP OF COMPANIES/3.jpeg"
    ]
  },  {
    slug: "perfect-engineers-83",
    name: "PERFECT ENGINEERS",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/PERFECT ENGINEERS/IMG20180303092922-800x600.jpg",
    status: "Completed",
    description: "Construction of PERFECT ENGINEERS in COIMBATORE.",
    details: {
      client: "PERFECT ENGINEERS",
      area: "103200 SFT",
      floors: "GF",
      startDate: "AUG’2016",
      completionDate: "MAR’2018",
      consultant: "M/s. Taamaesek Engineering"
    },
    gallery: [
      "/project/industrial/PERFECT ENGINEERS/IMG20180303092922-800x600.jpg",
      "/project/industrial/PERFECT ENGINEERS/PERFECT-1-800x449.jpg",
      "/project/industrial/PERFECT ENGINEERS/PERFECT-2-800x600.jpg",
      "/project/industrial/PERFECT ENGINEERS/PERFECT-3-800x450.jpg",
      "/project/industrial/PERFECT ENGINEERS/PERFECT-4-800x450.jpg",
      "/project/industrial/PERFECT ENGINEERS/PERFECT-5-800x450.jpg",
      "/project/industrial/PERFECT ENGINEERS/PERFECT-6-800x450.jpg",
      "/project/industrial/PERFECT ENGINEERS/PERFECT-7-800x450.jpg",
      "/project/industrial/PERFECT ENGINEERS/PERFECT-8-800x450.jpg"
    ]
  },  {
    slug: "perfect-engineers-phase-ii-84",
    name: "PERFECT ENGINEERS PHASE-II",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/PERFECT ENGINEERS PHASE-II/IMG20200702093848-800x400.jpg",
    status: "Completed",
    description: "Construction of PERFECT ENGINEERS PHASE-II in COIMBATORE.",
    details: {
      client: "PERFECT ENGINEERS",
      area: "100000 SFT",
      floors: "GF",
      startDate: "Mar’ 2020",
      completionDate: "DEC’ 2021",
      consultant: "M/s. Perfect Engineers"
    },
    gallery: [
      "/project/industrial/PERFECT ENGINEERS PHASE-II/IMG20200702093848-800x400.jpg",
      "/project/industrial/PERFECT ENGINEERS PHASE-II/IMG20200702093909-800x400.jpg",
      "/project/industrial/PERFECT ENGINEERS PHASE-II/IMG20200702093918.jpg",
      "/project/industrial/PERFECT ENGINEERS PHASE-II/IMG_20210831_161157-rotated-e1630575947386-800x385 (1).jpg",
      "/project/industrial/PERFECT ENGINEERS PHASE-II/IMG_20210831_161157-rotated-e1630575947386-800x385.jpg",
      "/project/industrial/PERFECT ENGINEERS PHASE-II/IMG_20210831_161424-rotated.jpg",
      "/project/industrial/PERFECT ENGINEERS PHASE-II/IMG_20210831_161428-800x391.jpg",
      "/project/industrial/PERFECT ENGINEERS PHASE-II/IMG_20210831_162414-800x362.jpg",
      "/project/industrial/PERFECT ENGINEERS PHASE-II/IMG_20210831_162417-800x362.jpg",
      "/project/industrial/PERFECT ENGINEERS PHASE-II/IMG_20210831_162528-800x362.jpg",
      "/project/industrial/PERFECT ENGINEERS PHASE-II/IMG_20210831_162536-800x362.jpg",
      "/project/industrial/PERFECT ENGINEERS PHASE-II/IMG_20210831_162545-800x362.jpg",
      "/project/industrial/PERFECT ENGINEERS PHASE-II/Perfect-2-800x400.jpg",
      "/project/industrial/PERFECT ENGINEERS PHASE-II/Perfect-3-800x400.jpg",
      "/project/industrial/PERFECT ENGINEERS PHASE-II/pp3-1-800x600.jpeg",
      "/project/industrial/PERFECT ENGINEERS PHASE-II/pp3-2-800x600.jpeg",
      "/project/industrial/PERFECT ENGINEERS PHASE-II/pp3-3-800x600.jpeg"
    ]
  },  {
    slug: "propel-industries-private-limited-85",
    name: "PROPEL INDUSTRIES PRIVATE LIMITED",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/PROPEL INDUSTRIES PRIVATE LIMITED/10_PROPEL-INDUSTRIES-800x600.jpg",
    status: "Completed",
    description: "Construction of PROPEL INDUSTRIES PRIVATE LIMITED in COIMBATORE.",
    details: {
      client: "PROPEL INDUSTRIES PRIVATE LIMITED",
      area: "25800 SFT",
      floors: "GF + 1 FLOOR",
      startDate: "AUG’ 2017",
      completionDate: "SEP’ 2020",
      consultant: "M/s. KSM Architecture"
    },
    gallery: [
      "/project/industrial/PROPEL INDUSTRIES PRIVATE LIMITED/10_PROPEL-INDUSTRIES-800x600.jpg",
      "/project/industrial/PROPEL INDUSTRIES PRIVATE LIMITED/DSC02556-800x533.jpg",
      "/project/industrial/PROPEL INDUSTRIES PRIVATE LIMITED/DSC02566-800x533.jpg",
      "/project/industrial/PROPEL INDUSTRIES PRIVATE LIMITED/DSC02572-800x533.jpg",
      "/project/industrial/PROPEL INDUSTRIES PRIVATE LIMITED/DSC02574-800x533.jpg",
      "/project/industrial/PROPEL INDUSTRIES PRIVATE LIMITED/img-1-32-800x600.jpg",
      "/project/industrial/PROPEL INDUSTRIES PRIVATE LIMITED/img-2-32-800x600.jpg",
      "/project/industrial/PROPEL INDUSTRIES PRIVATE LIMITED/IMG-20171208-WA0009-800x600.jpg",
      "/project/industrial/PROPEL INDUSTRIES PRIVATE LIMITED/IMG-20190524-WA0013-800x450.jpg",
      "/project/industrial/PROPEL INDUSTRIES PRIVATE LIMITED/img-3-31-800x600.jpg",
      "/project/industrial/PROPEL INDUSTRIES PRIVATE LIMITED/img-4-28-800x600.jpg",
      "/project/industrial/PROPEL INDUSTRIES PRIVATE LIMITED/img-5-26-800x600.jpg",
      "/project/industrial/PROPEL INDUSTRIES PRIVATE LIMITED/img-6-21-800x598.jpg",
      "/project/industrial/PROPEL INDUSTRIES PRIVATE LIMITED/img-7-16-800x598.jpg",
      "/project/industrial/PROPEL INDUSTRIES PRIVATE LIMITED/img-9-13-800x598.jpg",
      "/project/industrial/PROPEL INDUSTRIES PRIVATE LIMITED/IMG_20190511_171437-800x600.jpg"
    ]
  },  {
    slug: "propel-industries-pvt-ltd-86",
    name: "PROPEL INDUSTRIES PVT LTD",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/PROPEL INDUSTRIES PVT LTD/DSC02662-800x533.jpg",
    status: "Completed",
    description: "Construction of PROPEL INDUSTRIES PVT LTD in COIMBATORE.",
    details: {
      client: "PROPEL INDUSTRIES PRIVATE LIMITED",
      area: "36400 SFT",
      floors: "GF",
      startDate: "SEP’2017",
      completionDate: "JUL’ 2018",
      consultant: "M/s. S.G.Structural Engineers,"
    },
    gallery: [
      "/project/industrial/PROPEL INDUSTRIES PVT LTD/DSC02662-800x533.jpg",
      "/project/industrial/PROPEL INDUSTRIES PVT LTD/DSC02664-800x533.jpg",
      "/project/industrial/PROPEL INDUSTRIES PVT LTD/DSC02667-800x533.jpg"
    ]
  },  {
    slug: "proposed-expansion-of-power-house-87",
    name: "Proposed Expansion of Power house",
    category: "Industrial",
    location: "Kinathukadavu, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Proposed Expansion of Power house in Kinathukadavu, Coimbatore.",
    details: {
      client: "AKG INDIA PVT LTD",
      area: "1,200.",
      floors: "GROUND FLOOR",
      startDate: "FEB' 2018",
      completionDate: "JUL' 2018",
      consultant: "M/s.M.Dharmalingam Associate, Raka   complex,First floor,162-H,East Ponnurangam road,Coimbatore - 641 002"
    },
    gallery: []
  },  {
    slug: "proposed-extension-of-fcatory-building-88",
    name: "Proposed Extension of Fcatory Building",
    category: "Industrial",
    location: "Vadugapalayam, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Proposed Extension of Fcatory Building in Vadugapalayam, Coimbatore.",
    details: {
      client: "M/s. Sakthi Gear Products",
      area: "11,300.",
      floors: "GROUND FLOOR",
      startDate: "JAN ' 2021",
      completionDate: "OCT '2021",
      consultant: "Client Engineer"
    },
    gallery: []
  },  {
    slug: "sakthi-gear-products-89",
    name: "SAKTHI GEAR PRODUCTS",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/SAKTHI GEAR PRODUCTS/sakthi-1.jpg",
    status: "Completed",
    description: "Construction of SAKTHI GEAR PRODUCTS in COIMBATORE.",
    details: {
      client: "SAKTHI GEAR PRODUCTS",
      area: "34700 SFT",
      floors: "GF",
      startDate: "SEP’2015",
      completionDate: "SEP’ 2016",
      consultant: "Ms/. Vesta Architects"
    },
    gallery: [
      "/project/industrial/SAKTHI GEAR PRODUCTS/sakthi-1.jpg",
      "/project/industrial/SAKTHI GEAR PRODUCTS/sakthi-2.jpg"
    ]
  },  {
    slug: "schuf-speciality-valves-india-pvt-ltd-90",
    name: "SCHUF SPECIALITY VALVES INDIA PVT LTD",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/SCHUF SPECIALITY VALVES INDIA PVT LTD/90-800x600.jpg",
    status: "Completed",
    description: "Construction of SCHUF SPECIALITY VALVES INDIA PVT LTD in COIMBATORE.",
    details: {
      client: "SCHUF SPECIALITY VALVES INDIA PVT LTD",
      area: "37000 SFT",
      floors: "GF",
      startDate: "OCT’2006",
      completionDate: "FEB’2008",
      consultant: "M/S. Sankar & Associates"
    },
    gallery: [
      "/project/industrial/SCHUF SPECIALITY VALVES INDIA PVT LTD/90-800x600.jpg",
      "/project/industrial/SCHUF SPECIALITY VALVES INDIA PVT LTD/Schuf-1-800x600.jpg",
      "/project/industrial/SCHUF SPECIALITY VALVES INDIA PVT LTD/Schuf-2-800x600.jpg",
      "/project/industrial/SCHUF SPECIALITY VALVES INDIA PVT LTD/Schuf-3-800x535.jpg",
      "/project/industrial/SCHUF SPECIALITY VALVES INDIA PVT LTD/Schuf-4-800x600.jpg"
    ]
  },  {
    slug: "secan-engineering-91",
    name: "SECAN ENGINEERING",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/SECAN ENGINEERING/SECAN-800x450.png",
    status: "Completed",
    description: "Construction of SECAN ENGINEERING in COIMBATORE.",
    details: {
      client: "SECAN ENGINEERING TECHNOLOGY LTD",
      area: "44,000 SFT",
      floors: "GF",
      startDate: "NOV’ 2023",
      completionDate: "MAR'2025",
      consultant: "M/s. Anusamm Consultants,"
    },
    gallery: [
      "/project/industrial/SECAN ENGINEERING/SECAN-800x450.png",
      "/project/industrial/SECAN ENGINEERING/SECAN1-800x493.jpg",
      "/project/industrial/SECAN ENGINEERING/SECAN2-800x599.jpg"
    ]
  },  {
    slug: "shanthamani-spinners-92",
    name: "SHANTHAMANI SPINNERS",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/SHANTHAMANI SPINNERS/img-1-1.jpg",
    status: "Completed",
    description: "Construction of SHANTHAMANI SPINNERS in COIMBATORE.",
    details: {
      client: "SHANTHAMANI SPINNERS",
      area: "76400 SFT",
      floors: "GF",
      startDate: "JAN’ 2016",
      completionDate: "DEC’ 2017",
      consultant: "Client Engineer"
    },
    gallery: [
      "/project/industrial/SHANTHAMANI SPINNERS/img-1-1.jpg",
      "/project/industrial/SHANTHAMANI SPINNERS/img-2-1.jpg",
      "/project/industrial/SHANTHAMANI SPINNERS/img-3-1.jpg",
      "/project/industrial/SHANTHAMANI SPINNERS/img-4-1.jpg",
      "/project/industrial/SHANTHAMANI SPINNERS/img-5-1.jpg",
      "/project/industrial/SHANTHAMANI SPINNERS/img-6.jpg"
    ]
  },  {
    slug: "snf-components-private-limited-93",
    name: "SNF COMPONENTS PRIVATE LIMITED",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/SNF COMPONENTS PRIVATE LIMITED/DSC02668-800x534.jpg",
    status: "Completed",
    description: "Construction of SNF COMPONENTS PRIVATE LIMITED in COIMBATORE.",
    details: {
      client: "SNF COMPONENTS PRIVATE LIMITED",
      area: "58000 SFT",
      floors: "GF",
      startDate: "AUG’ 2018",
      completionDate: "OCT’ 2019",
      consultant: "M/s. SG Structural Engineers"
    },
    gallery: [
      "/project/industrial/SNF COMPONENTS PRIVATE LIMITED/DSC02668-800x534.jpg",
      "/project/industrial/SNF COMPONENTS PRIVATE LIMITED/DSC02669-800x534.jpg",
      "/project/industrial/SNF COMPONENTS PRIVATE LIMITED/DSC02671-800x534.jpg",
      "/project/industrial/SNF COMPONENTS PRIVATE LIMITED/DSC02672-800x534.jpg",
      "/project/industrial/SNF COMPONENTS PRIVATE LIMITED/img-1-36-800x389.jpg",
      "/project/industrial/SNF COMPONENTS PRIVATE LIMITED/img-2-36-800x389.jpg",
      "/project/industrial/SNF COMPONENTS PRIVATE LIMITED/img-3-35-800x389.jpg",
      "/project/industrial/SNF COMPONENTS PRIVATE LIMITED/img-4-31-800x389.jpg",
      "/project/industrial/SNF COMPONENTS PRIVATE LIMITED/img-5-29-800x389.jpg",
      "/project/industrial/SNF COMPONENTS PRIVATE LIMITED/WhatsApp-Image-2019-05-30-at-13.06.58-800x389.jpeg",
      "/project/industrial/SNF COMPONENTS PRIVATE LIMITED/WhatsApp-Image-2019-05-30-at-13.07.01-800x389.jpeg",
      "/project/industrial/SNF COMPONENTS PRIVATE LIMITED/WhatsApp-Image-2019-05-30-at-13.08.20-800x389.jpeg",
      "/project/industrial/SNF COMPONENTS PRIVATE LIMITED/WhatsApp-Image-2019-05-30-at-13.26.10-800x389.jpeg"
    ]
  },  {
    slug: "sri-ranganather-valves-controls-p-ltd-unit-ii-94",
    name: "Sri Ranganather Valves & Controls(P)Ltd   Unit II",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/Sri Ranganather Valves & Controls(P)Ltd Unit II/DSC02531-800x534.jpg",
    status: "Completed",
    description: "Construction of Sri Ranganather Valves & Controls(P)Ltd   Unit II in COIMBATORE.",
    details: {
      client: "Sri Ranganathar Trust",
      area: "172700SFT",
      floors: "GF",
      startDate: "Dec’2018",
      completionDate: "Jun’ 2022",
      consultant: "M/s. M. Dharmalingam Associates,"
    },
    gallery: [
      "/project/industrial/Sri Ranganather Valves & Controls(P)Ltd Unit II/DSC02531-800x534.jpg",
      "/project/industrial/Sri Ranganather Valves & Controls(P)Ltd Unit II/DSC02533-800x534.jpg",
      "/project/industrial/Sri Ranganather Valves & Controls(P)Ltd Unit II/DSC02539-800x534.jpg",
      "/project/industrial/Sri Ranganather Valves & Controls(P)Ltd Unit II/DSC02542-800x534.jpg",
      "/project/industrial/Sri Ranganather Valves & Controls(P)Ltd Unit II/RI-1-800x450.jpg",
      "/project/industrial/Sri Ranganather Valves & Controls(P)Ltd Unit II/RI-10-800x450.jpg",
      "/project/industrial/Sri Ranganather Valves & Controls(P)Ltd Unit II/RI-12-800x450.jpg",
      "/project/industrial/Sri Ranganather Valves & Controls(P)Ltd Unit II/RI-13-800x450.jpg",
      "/project/industrial/Sri Ranganather Valves & Controls(P)Ltd Unit II/RI-2-800x450.jpg",
      "/project/industrial/Sri Ranganather Valves & Controls(P)Ltd Unit II/RI-3-800x450.jpg",
      "/project/industrial/Sri Ranganather Valves & Controls(P)Ltd Unit II/RI-4-800x450.jpg",
      "/project/industrial/Sri Ranganather Valves & Controls(P)Ltd Unit II/RI-5-800x450.jpg",
      "/project/industrial/Sri Ranganather Valves & Controls(P)Ltd Unit II/RI-7-800x450.jpg",
      "/project/industrial/Sri Ranganather Valves & Controls(P)Ltd Unit II/RI-8-800x450.jpg",
      "/project/industrial/Sri Ranganather Valves & Controls(P)Ltd Unit II/SRI-1-800x400.jpg",
      "/project/industrial/Sri Ranganather Valves & Controls(P)Ltd Unit II/Sri-1-800x400.jpeg",
      "/project/industrial/Sri Ranganather Valves & Controls(P)Ltd Unit II/Sri-10-800x400.jpeg",
      "/project/industrial/Sri Ranganather Valves & Controls(P)Ltd Unit II/Sri-11-800x400.jpeg",
      "/project/industrial/Sri Ranganather Valves & Controls(P)Ltd Unit II/Sri-12-800x400.jpeg",
      "/project/industrial/Sri Ranganather Valves & Controls(P)Ltd Unit II/Sri-13-800x400.jpeg",
      "/project/industrial/Sri Ranganather Valves & Controls(P)Ltd Unit II/Sri-4-800x400.jpeg",
      "/project/industrial/Sri Ranganather Valves & Controls(P)Ltd Unit II/Sri-5-800x400.jpeg",
      "/project/industrial/Sri Ranganather Valves & Controls(P)Ltd Unit II/Sri-7-800x400.jpeg",
      "/project/industrial/Sri Ranganather Valves & Controls(P)Ltd Unit II/Sri-8-800x400.jpeg",
      "/project/industrial/Sri Ranganather Valves & Controls(P)Ltd Unit II/Sri-9-800x400.jpeg",
      "/project/industrial/Sri Ranganather Valves & Controls(P)Ltd Unit II/img-1-37-800x388.jpg",
      "/project/industrial/Sri Ranganather Valves & Controls(P)Ltd Unit II/img-6-24-800x388.jpg",
      "/project/industrial/Sri Ranganather Valves & Controls(P)Ltd Unit II/img-7-19-800x599.jpg"
    ]
  },  {
    slug: "sri-srinivasa-textiles-95",
    name: "SRI SRINIVASA TEXTILES",
    category: "Industrial",
    location: "TIRPUR",
    imageUrl: "/project/industrial/SRI SRINIVASA TEXTILES/Srinivasa-1-800x375.jpg",
    status: "Completed",
    description: "Construction of SRI SRINIVASA TEXTILES in TIRPUR.",
    details: {
      client: "SRI SRINIVASA TEXTILES",
      area: "24000 SFT",
      floors: "GF",
      startDate: "Aug’ 2019",
      completionDate: "Sep’ 2020",
      consultant: "Ms/. Vesta Architects"
    },
    gallery: [
      "/project/industrial/SRI SRINIVASA TEXTILES/Srinivasa-1-800x375.jpg",
      "/project/industrial/SRI SRINIVASA TEXTILES/Srinivasa-14-800x375.jpg",
      "/project/industrial/SRI SRINIVASA TEXTILES/Srinivasa-6-800x375.jpg",
      "/project/industrial/SRI SRINIVASA TEXTILES/Srinivasa-9-800x375.jpg",
      "/project/industrial/SRI SRINIVASA TEXTILES/SST-1-800x600.jpg",
      "/project/industrial/SRI SRINIVASA TEXTILES/SST-10-800x600.jpg",
      "/project/industrial/SRI SRINIVASA TEXTILES/SST-11-800x600.jpg",
      "/project/industrial/SRI SRINIVASA TEXTILES/SST-12-800x600.jpg",
      "/project/industrial/SRI SRINIVASA TEXTILES/SST-2-800x600.jpg",
      "/project/industrial/SRI SRINIVASA TEXTILES/SST-3-800x369.jpeg",
      "/project/industrial/SRI SRINIVASA TEXTILES/SST-3-800x600.jpg",
      "/project/industrial/SRI SRINIVASA TEXTILES/SST-4-800x369.jpeg",
      "/project/industrial/SRI SRINIVASA TEXTILES/SST-5-800x369.jpeg",
      "/project/industrial/SRI SRINIVASA TEXTILES/SST-5-800x600.jpg",
      "/project/industrial/SRI SRINIVASA TEXTILES/SST-6-800x369.jpeg",
      "/project/industrial/SRI SRINIVASA TEXTILES/SST-7-800x369.jpeg",
      "/project/industrial/SRI SRINIVASA TEXTILES/SST-7-800x600.jpg",
      "/project/industrial/SRI SRINIVASA TEXTILES/SST-8-800x600.jpg",
      "/project/industrial/SRI SRINIVASA TEXTILES/SST-9-800x600.jpg",
      "/project/industrial/SRI SRINIVASA TEXTILES/ST-3-800x369.jpeg"
    ]
  },  {
    slug: "sri-unit-2-knock-out-pattern-storage-and-machine-foundation-96",
    name: "SRI Unit - 2 Knock out, Pattern storage and   Machine foundation",
    category: "Industrial",
    location: "Karegoundampalayam, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of SRI Unit - 2 Knock out, Pattern storage and   Machine foundation in Karegoundampalayam, Coimbatore.",
    details: {
      client: "M/s. Sri Ranganather Valves & Controls (P)   Ltd, Karegoundampalayam village, Coimbatore - 641 697",
      startDate: "JUN' 2024",
      completionDate: "MAR' 2025",
      consultant: "Ms/. Vesta Architects, No: 252, Avinashi road,   Peelamedu, Coimbatore - 641 004"
    },
    gallery: []
  },  {
    slug: "super-spinning-mills-limited-97",
    name: "SUPER SPINNING MILLS LIMITED",
    category: "Industrial",
    location: "HINDUPUR",
    imageUrl: "/project/industrial/SUPER SPINNING MILLS LIMITED/SSM-1-800x532.jpg",
    status: "Completed",
    description: "Construction of SUPER SPINNING MILLS LIMITED in HINDUPUR.",
    details: {
      client: "SUPER SPINNING MILLS LIMITED",
      area: "225000 SFT",
      floors: "GF",
      startDate: "APR’ 2006",
      completionDate: "OCT’ 2007",
      consultant: "M/S. Sankar & Associates,"
    },
    gallery: [
      "/project/industrial/SUPER SPINNING MILLS LIMITED/SSM-1-800x532.jpg",
      "/project/industrial/SUPER SPINNING MILLS LIMITED/SSM-10.jpg",
      "/project/industrial/SUPER SPINNING MILLS LIMITED/SSM-11-800x598.jpg",
      "/project/industrial/SUPER SPINNING MILLS LIMITED/SSM-12-800x598.jpg",
      "/project/industrial/SUPER SPINNING MILLS LIMITED/SSM-13-800x598.jpg",
      "/project/industrial/SUPER SPINNING MILLS LIMITED/SSM-2-800x530.jpg",
      "/project/industrial/SUPER SPINNING MILLS LIMITED/SSM-3-800x530.jpg",
      "/project/industrial/SUPER SPINNING MILLS LIMITED/SSM-4-800x530.jpg",
      "/project/industrial/SUPER SPINNING MILLS LIMITED/SSM-6.jpg",
      "/project/industrial/SUPER SPINNING MILLS LIMITED/SSM-7.jpg",
      "/project/industrial/SUPER SPINNING MILLS LIMITED/SSM-8.jpg",
      "/project/industrial/SUPER SPINNING MILLS LIMITED/SSM-9.jpg"
    ]
  },  {
    slug: "tharun-balaji-spinners-98",
    name: "THARUN BALAJI SPINNERS",
    category: "Industrial",
    location: "COIMBATORE",
    imageUrl: "/project/industrial/THARUN BALAJI SPINNERS/img-1-6.jpg",
    status: "Completed",
    description: "Construction of THARUN BALAJI SPINNERS in COIMBATORE.",
    details: {
      client: "THARUN BALAJI SPINNERS",
      area: "82000 SFT",
      floors: "GF",
      startDate: "OCT’ 2016",
      completionDate: "SEP’ 2017",
      consultant: "Ms/. Vesta Architects"
    },
    gallery: [
      "/project/industrial/THARUN BALAJI SPINNERS/img-1-6.jpg",
      "/project/industrial/THARUN BALAJI SPINNERS/img-2-5.jpg",
      "/project/industrial/THARUN BALAJI SPINNERS/TB-1.jpg",
      "/project/industrial/THARUN BALAJI SPINNERS/TB-2-800x468.jpg",
      "/project/industrial/THARUN BALAJI SPINNERS/TB-3-800x600.jpg",
      "/project/industrial/THARUN BALAJI SPINNERS/TB-4-800x600.jpg"
    ]
  },  {
    slug: "velmurugan-heavy-engineering-industries-99",
    name: "VELMURUGAN HEAVY ENGINEERING INDUSTRIES",
    category: "Industrial",
    location: "THANJAVUR",
    imageUrl: "/project/industrial/VELMURUGAN HEAVY ENGINEERING INDUSTRIES/VHEI-1-800x600.jpeg",
    status: "Completed",
    description: "Construction of VELMURUGAN HEAVY ENGINEERING INDUSTRIES in THANJAVUR.",
    details: {
      client: "VELMURUGAN HEAVY ENGINEERING PVT LTD",
      area: "33,000 SFT",
      floors: "GF",
      startDate: "MAY’ 2023",
      completionDate: "JUN’ 2024",
      consultant: "Client Engineer"
    },
    gallery: [
      "/project/industrial/VELMURUGAN HEAVY ENGINEERING INDUSTRIES/VHEI-1-800x600.jpeg",
      "/project/industrial/VELMURUGAN HEAVY ENGINEERING INDUSTRIES/VHEI-2-800x600.jpeg",
      "/project/industrial/VELMURUGAN HEAVY ENGINEERING INDUSTRIES/VHEI-3-800x600.jpeg",
      "/project/industrial/VELMURUGAN HEAVY ENGINEERING INDUSTRIES/VHEI-4-800x600.jpeg",
      "/project/industrial/VELMURUGAN HEAVY ENGINEERING INDUSTRIES/VHEI-5-800x600.jpeg",
      "/project/industrial/VELMURUGAN HEAVY ENGINEERING INDUSTRIES/VHEI-6-800x600.jpeg",
      "/project/industrial/VELMURUGAN HEAVY ENGINEERING INDUSTRIES/VHEI-7-800x600.jpeg",
      "/project/industrial/VELMURUGAN HEAVY ENGINEERING INDUSTRIES/VHEI-8-800x600.jpeg",
      "/project/industrial/VELMURUGAN HEAVY ENGINEERING INDUSTRIES/VHEI-9-800x600.jpeg"
    ]
  },  {
    slug: "venkatalakshmi-paper-and-boards-100",
    name: "VENKATALAKSHMI PAPER AND BOARDS",
    category: "Industrial",
    location: "UDUMALPET",
    imageUrl: "/project/industrial/VENKATALAKSHMI PAPER AND BOARDS/Ven-1-800x600.jpg",
    status: "Completed",
    description: "Construction of VENKATALAKSHMI PAPER AND BOARDS in UDUMALPET.",
    details: {
      client: "VENKATALAKSHMI PAPER AND BOARDS",
      area: "9000 SFT",
      floors: "GF",
      startDate: "APR’ 2019",
      completionDate: "APR’ 2021",
      consultant: "M/s. M. Dharmalingam Associates"
    },
    gallery: [
      "/project/industrial/VENKATALAKSHMI PAPER AND BOARDS/Ven-1-800x600.jpg",
      "/project/industrial/VENKATALAKSHMI PAPER AND BOARDS/VLM-14-800x600.jpg",
      "/project/industrial/VENKATALAKSHMI PAPER AND BOARDS/VLM-20-800x600.jpg",
      "/project/industrial/VENKATALAKSHMI PAPER AND BOARDS/VLM-32-800x600.jpg",
      "/project/industrial/VENKATALAKSHMI PAPER AND BOARDS/VLM-9-800x600.jpg",
      "/project/industrial/VENKATALAKSHMI PAPER AND BOARDS/VlP-3-1-800x600.jpg",
      "/project/industrial/VENKATALAKSHMI PAPER AND BOARDS/VLP-3-800x600.jpg",
      "/project/industrial/VENKATALAKSHMI PAPER AND BOARDS/VLP-5-800x600.jpg",
      "/project/industrial/VENKATALAKSHMI PAPER AND BOARDS/VLPM-2-800x600.jpg",
      "/project/industrial/VENKATALAKSHMI PAPER AND BOARDS/VLPM-3-800x600.jpg",
      "/project/industrial/VENKATALAKSHMI PAPER AND BOARDS/VLPM-4-800x600.jpg",
      "/project/industrial/VENKATALAKSHMI PAPER AND BOARDS/VLPM-5-800x600.jpg",
      "/project/industrial/VENKATALAKSHMI PAPER AND BOARDS/VLPM-7-800x600.jpg",
      "/project/industrial/VENKATALAKSHMI PAPER AND BOARDS/VLPM-8-800x600.jpg"
    ]
  },  {
    slug: "construction-of-a-factory-building-101",
    name: "Construction of a Factory Building",
    category: "Industrial",
    location: "Kondaiyampalayam, Kovilpalayam, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Construction of a Factory Building in Kondaiyampalayam, Kovilpalayam, Coimbatore.",
    details: {
      client: "M/s. L.G.Balakrishnan & Bros Limited",
      area: "71,300.",
      floors: "GF + MEZZANINE FLOOR",
      startDate: "FEB' 2025",
      completionDate: "SEP' 2026",
      consultant: "Ms/. Vesta Architects, No: 252, Avinashi road,   Peelamedu, Coimbatore - 641 004"
    },
    gallery: []
  },  {
    slug: "construction-of-a-factory-building-102",
    name: "Construction of a Factory Building",
    category: "Industrial",
    location: "SF 440, Athipalayam Rd, Ganapathy Housing Unit,   Coimbatore, Tamil Nadu 641006.",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Construction of a Factory Building in SF 440, Athipalayam Rd, Ganapathy Housing Unit,   Coimbatore, Tamil Nadu 641006..",
    details: {
      client: "AUTO DIECASTING COMPANY SF 440, Athipalayam Rd,   Ganapathy Housing Unit, Coimbatore, Tamil Nadu 641006.",
      area: "52,722.",
      floors: "FACTORY - GF; OFFICE - GF+FF+SF",
      startDate: "MAY 2025",
      completionDate: "OCT' 2026",
      consultant: "THE PIDESIGN 'NO.4A, Sathya Gardens, 3rd   Street,      Shakthi Nagar, West Tambaram, Chennai – 600045.      Tamilnadu, India."
    },
    gallery: []
  },  {
    slug: "construction-of-factory-building-103",
    name: "Construction of Factory Building",
    category: "Industrial",
    location: "Nanjangud, Mysore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Construction of Factory Building in Nanjangud, Mysore.",
    details: {
      client: "M/s.Walkaroo Industries",
      area: "72,000.",
      floors: "GF FLOOR",
      startDate: "AUG' 2024",
      completionDate: "OCT' 2026",
      consultant: "M/s. PTK Project Consultants LLP, 19/1, Haddows   Road, Chennai - 600 006"
    },
    gallery: []
  },  {
    slug: "construction-of-factory-building-104",
    name: "Construction of Factory Building",
    category: "Industrial",
    location: "Kundrathur,      Chennai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Construction of Factory Building in Kundrathur,      Chennai.",
    details: {
      client: "M/S Sri Dhanalakshmi Industries       Plot No K-28, Sipcot Industrial Park, Irungattukottai, Katrambakkam   Village,       Sriperambudur Taluk, Kancheepuram District       Tamil Nadu- 602117",
      area: "30,000.",
      floors: "GROUND+FF",
      startDate: "NOV 2025",
      completionDate: "JAN'2027",
      consultant: "'FIRM TERRA '#7-7/2, 2nd Main Road,   Chandavarkar Layout, Palace Cross Road, Bangalore 560020."
    },
    gallery: []
  },  {
    slug: "construction-of-factory-building-and-allied-buildings-including-land-development-works-105",
    name: "Construction of Factory Building and Allied   Buildings including Land Development works",
    category: "Industrial",
    location: "SIPCOT Industrial Estate, Shoolagiri, Hosur",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Construction of Factory Building and Allied   Buildings including Land Development works in SIPCOT Industrial Estate, Shoolagiri, Hosur.",
    details: {
      client: "M/s. L.G.Balakrishnan & Bros Limited",
      area: "2,73,155.375886",
      floors: "GROUND FLOOR",
      startDate: "SEP'2025",
      completionDate: "MAY'2027",
      consultant: "Ms/. Vesta Architects, No: 252, Avinashi road,   Peelamedu, Coimbatore - 641 004"
    },
    gallery: []
  },  {
    slug: "construction-of-industry-building-106",
    name: "Construction of Industry Building",
    category: "Industrial",
    location: "Ganapathy, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Construction of Industry Building in Ganapathy, Coimbatore.",
    details: {
      client: "M/s. American Auto service Private Limited, SF   No: 265, RKG Industrial Estate, Sanganoor main road, Ganapathy - 641 006",
      area: "27,000.",
      floors: "GF + 1 FLOOR",
      startDate: "DEC' 2024",
      completionDate: "OCT 2026",
      consultant: "M/s. Shri Lakshmi Project Management and   Consultancy service, Flat no: AS4, Royal Exotic Apartment, Sathy Main road,   Ganapathy, Coimbatore - 641 006"
    },
    gallery: []
  },  {
    slug: "construction-of-new-expansion-building-107",
    name: "Construction of New Expansion Building",
    category: "Industrial",
    location: "Kolumam, Andipatti Road, Madathukkulam",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Construction of New Expansion Building in Kolumam, Andipatti Road, Madathukkulam.",
    details: {
      client: "M/s. Venkatalakshmi Paper and Boards Ltd,   Andipatti Road, Kolumam, Madathukkulam",
      area: "1,590.",
      floors: "GROUND FLOOR",
      startDate: "SEP'2025",
      completionDate: "NOV'2026",
      consultant: "M/s.Sabari Anand, Coimbatore"
    },
    gallery: []
  },  {
    slug: "construction-of-proposed-manufacturing-facility-108",
    name: "Construction of Proposed Manufacturing Facility",
    category: "Industrial",
    location: "Selakarichal Village, Sulur, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Construction of Proposed Manufacturing Facility in Selakarichal Village, Sulur, Coimbatore.",
    details: {
      client: "M/s. STYLCOVE MODULARS PVT LIMITED",
      area: "5,50,000.",
      startDate: "JAN' 2026",
      completionDate: "DEC'2026",
      consultant: "M/s. Gleeds Consulting (India) Pvt Ltd,   Bangalore"
    },
    gallery: []
  },  {
    slug: "construction-of-sand-reclamaition-unit-109",
    name: "Construction of Sand Reclamaition Unit",
    category: "Industrial",
    location: "Salaiyur, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Construction of Sand Reclamaition Unit in Salaiyur, Coimbatore.",
    details: {
      client: "M/s. Sri Ranganather Valves & Controls (P)   Ltd, Karegoundampalayam village, Coimbatore - 641 697",
      area: "16,000.",
      floors: "GROUND FLOOR",
      startDate: "JUN 2025",
      completionDate: "OCT''2026",
      consultant: "M/s. M. Dharmalingam Associates, 6 Syrian   church road, No:1, Coimbatore - 641 001"
    },
    gallery: []
  },  {
    slug: "proposed-industriall-building-coimbaotre-110",
    name: "Proposed Industriall Building, Coimbaotre",
    category: "Industrial",
    location: "Luna Nagar, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Proposed Industriall Building, Coimbaotre in Luna Nagar, Coimbatore.",
    details: {
      client: "Sri Ranganathar Trust",
      area: "13,310.",
      floors: "GROUND FLOOR",
      startDate: "NOV'2025",
      completionDate: "MAR'2026",
      consultant: "Ms/. Vesta Architects, No: 252, Avinashi road,   Peelamedu, Coimbatore - 641 004"
    },
    gallery: []
  },  {
    slug: "abode-valley-phase-i-ii-iii-1",
    name: "“ABODE   VALLEY” – PHASE I, II & III",
    category: "Residential",
    location: "CHENNAI",
    imageUrl: "/project/residential/“ABODE VALLEY” – PHASE I, II & III/DSC_0619-800x531.jpg",
    status: "Completed",
    description: "Construction of “ABODE   VALLEY” – PHASE I, II & III in CHENNAI.",
    details: {
      client: "LANCOR   HOLDINGS LTD",
      area: "570000   SFT",
      floors: "4",
      startDate: "APR   ‘2010",
      completionDate: "FEB’2012",
      consultant: "M/s.   Nataraj & Venkat Associates"
    },
    gallery: [
      "/project/residential/“ABODE VALLEY” – PHASE I, II & III/DSC_0619-800x531.jpg",
      "/project/residential/“ABODE VALLEY” – PHASE I, II & III/LA-1-800x531.jpg",
      "/project/residential/“ABODE VALLEY” – PHASE I, II & III/LA-2-800x600.jpg",
      "/project/residential/“ABODE VALLEY” – PHASE I, II & III/LA-3-800x600.jpg",
      "/project/residential/“ABODE VALLEY” – PHASE I, II & III/LA-4-800x600.jpg",
      "/project/residential/“ABODE VALLEY” – PHASE I, II & III/LA-5-800x600.jpg",
      "/project/residential/“ABODE VALLEY” – PHASE I, II & III/LA-6-800x450.jpg",
      "/project/residential/“ABODE VALLEY” – PHASE I, II & III/lancor-1.jpg",
      "/project/residential/“ABODE VALLEY” – PHASE I, II & III/lancor-2.jpg",
      "/project/residential/“ABODE VALLEY” – PHASE I, II & III/lancor-3.jpg"
    ]
  },  {
    slug: "akshaya-36-carat-2",
    name: "AKSHAYA 36 CARAT",
    category: "Residential",
    location: "CHENNAI",
    imageUrl: "/project/residential/AKSHAYA 36 CARAT/36-CARAT-800x600.jpg",
    status: "Completed",
    description: "Construction of AKSHAYA 36 CARAT in CHENNAI.",
    details: {
      client: "AKSHAYA PVT LTD",
      area: "117000 SFT",
      floors: "10 + GROUND",
      startDate: "JAN’2011",
      completionDate: "JUL’2013",
      consultant: "M/s. Passargard,"
    },
    gallery: [
      "/project/residential/AKSHAYA 36 CARAT/36-CARAT-800x600.jpg",
      "/project/residential/AKSHAYA 36 CARAT/36-carat1.jpg",
      "/project/residential/AKSHAYA 36 CARAT/DSC00069-800x600.jpg",
      "/project/residential/AKSHAYA 36 CARAT/DSC00072-800x600.jpg",
      "/project/residential/AKSHAYA 36 CARAT/DSCF0756-800x534.jpg",
      "/project/residential/AKSHAYA 36 CARAT/DSCF0786-800x534.jpg",
      "/project/residential/AKSHAYA 36 CARAT/DSCF0810-800x534.jpg",
      "/project/residential/AKSHAYA 36 CARAT/DSCF0820-800x534.jpg",
      "/project/residential/AKSHAYA 36 CARAT/DSCN0198-800x600.jpg",
      "/project/residential/AKSHAYA 36 CARAT/DSC_0627-800x531.jpg"
    ]
  },  {
    slug: "akshaya-tango-3",
    name: "AKSHAYA TANGO",
    category: "Residential",
    location: "CHENNAI",
    imageUrl: "/project/residential/AKSHAYA TANGO/20190912_174704-800x600.jpg",
    status: "Completed",
    description: "Construction of AKSHAYA TANGO in CHENNAI.",
    details: {
      client: "AKSHAYA PVT LTD",
      area: "552000 SFT",
      floors: "13",
      startDate: "APR’ 2014",
      completionDate: "SEP’ 2020",
      consultant: "M/s. Venkataraman Associates"
    },
    gallery: [
      "/project/residential/AKSHAYA TANGO/20190912_174704-800x600.jpg",
      "/project/residential/AKSHAYA TANGO/DSC_0493-800x531.jpg",
      "/project/residential/AKSHAYA TANGO/Tango-1-800x413.jpg",
      "/project/residential/AKSHAYA TANGO/Tango-1-800x600.jpeg",
      "/project/residential/AKSHAYA TANGO/Tango-1.jpg",
      "/project/residential/AKSHAYA TANGO/Tango-13.jpg",
      "/project/residential/AKSHAYA TANGO/Tango-2-800x600.jpeg",
      "/project/residential/AKSHAYA TANGO/Tango-4-800x480.jpg",
      "/project/residential/AKSHAYA TANGO/Tango-4-800x548.jpeg",
      "/project/residential/AKSHAYA TANGO/Tango-5-800x450.jpg",
      "/project/residential/AKSHAYA TANGO/Tango-5-800x600.jpeg",
      "/project/residential/AKSHAYA TANGO/Tango-6-800x600.jpeg",
      "/project/residential/AKSHAYA TANGO/Tango-800x410.jpg"
    ]
  },  {
    slug: "alaka-palazzo-4",
    name: "ALAKA PALAZZO",
    category: "Residential",
    location: "CHENNAI",
    imageUrl: "/project/residential/ALAKA PALAZZO/Alaka-1-800x600.jpg",
    status: "Completed",
    description: "Construction of ALAKA PALAZZO in CHENNAI.",
    details: {
      client: "SHREE VELU BUILDERS PVT LTD",
      area: "520000 SFT",
      floors: "14",
      startDate: "2010-07-01",
      completionDate: "2013-07-01",
      consultant: "M/s. Foarcons"
    },
    gallery: [
      "/project/residential/ALAKA PALAZZO/Alaka-1-800x600.jpg",
      "/project/residential/ALAKA PALAZZO/Alaka-10.jpg",
      "/project/residential/ALAKA PALAZZO/Alaka-11.jpg",
      "/project/residential/ALAKA PALAZZO/Alaka-12-800x600.jpg",
      "/project/residential/ALAKA PALAZZO/Alaka-2-800x531.jpg",
      "/project/residential/ALAKA PALAZZO/Alaka-3-800x531.jpg",
      "/project/residential/ALAKA PALAZZO/Alaka-4-800x600.jpg",
      "/project/residential/ALAKA PALAZZO/Alaka-5-800x600.jpg",
      "/project/residential/ALAKA PALAZZO/Alaka-6.jpg",
      "/project/residential/ALAKA PALAZZO/Alaka-7.jpg",
      "/project/residential/ALAKA PALAZZO/Alaka-8-800x600.jpg",
      "/project/residential/ALAKA PALAZZO/Alaka-9-800x600.jpg",
      "/project/residential/ALAKA PALAZZO/img-1-5.jpg",
      "/project/residential/ALAKA PALAZZO/img-2-4.jpg",
      "/project/residential/ALAKA PALAZZO/IMG-20191116-WA0021-800x417.jpg",
      "/project/residential/ALAKA PALAZZO/IMG-20191116-WA0022-800x600.jpg"
    ]
  },  {
    slug: "apartment-building-govel-trust-5",
    name: "APARTMENT BUILDING – GOVEL TRUST",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/APARTMENT BUILDING – GOVEL TRUST/img-1-7.jpg",
    status: "Completed",
    description: "Construction of APARTMENT BUILDING – GOVEL TRUST in COIMBATORE.",
    details: {
      client: "M/s. GOVEL Trust – Aravind Eye Hospitals",
      area: "25000 SFT",
      floors: "2 + GROUND",
      startDate: "SEP’2008",
      completionDate: "OCT’2009",
      consultant: "M/s. Gowtham Architects,"
    },
    gallery: [
      "/project/residential/APARTMENT BUILDING – GOVEL TRUST/img-1-7.jpg",
      "/project/residential/APARTMENT BUILDING – GOVEL TRUST/img-2-6.jpg",
      "/project/residential/APARTMENT BUILDING – GOVEL TRUST/img-3-5.jpg",
      "/project/residential/APARTMENT BUILDING – GOVEL TRUST/img-4-4.jpg",
      "/project/residential/APARTMENT BUILDING – GOVEL TRUST/img-5-4.jpg",
      "/project/residential/APARTMENT BUILDING – GOVEL TRUST/img-6-3.jpg",
      "/project/residential/APARTMENT BUILDING – GOVEL TRUST/img-7-1.jpg",
      "/project/residential/APARTMENT BUILDING – GOVEL TRUST/img-8.jpg"
    ]
  },  {
    slug: "blue-haven-phase-ii-6",
    name: "BLUE HAVEN PHASE II",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/BLUE HAVEN PHASE II/BH2-1-800x548.jpg",
    status: "Completed",
    description: "Construction of BLUE HAVEN PHASE II in COIMBATORE.",
    details: {
      client: "NIVASAN HOMES PVT LTD",
      area: "20000 SFT",
      floors: "4 + GROUND",
      startDate: "DEC’ 2012",
      completionDate: "NOV’ 2014",
      consultant: "M/s.Inner Space Architect,"
    },
    gallery: [
      "/project/residential/BLUE HAVEN PHASE II/BH2-1-800x548.jpg",
      "/project/residential/BLUE HAVEN PHASE II/BH2-2-800x600.jpg",
      "/project/residential/BLUE HAVEN PHASE II/BH2-3-800x600.jpg",
      "/project/residential/BLUE HAVEN PHASE II/BH2-4.jpg",
      "/project/residential/BLUE HAVEN PHASE II/BH2-5-800x600.jpg",
      "/project/residential/BLUE HAVEN PHASE II/bluehaven.jpg"
    ]
  },  {
    slug: "civil-and-allied-works-7",
    name: "Civil and allied works",
    category: "Residential",
    location: "Oragadam, Chennai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Civil and allied works in Oragadam, Chennai.",
    details: {
      client: "Systematic Conscom Limited No:8, Iyyancherry   village, sivasami pradhana salai, Urapakkam, District, Chengalpattu - 603 202",
      area: "30,400.",
      startDate: "0.15",
      completionDate: "AUG' 2025"
    },
    gallery: []
  },  {
    slug: "classic-enclave-8",
    name: "CLASSIC ENCLAVE",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/CLASSIC ENCLAVE/DSC_0176-CLASSIC-ENCLAVE-scaled.jpg",
    status: "Completed",
    description: "Construction of CLASSIC ENCLAVE in COIMBATORE.",
    details: {
      client: "Mr ANWAR , CLASSIC TOWERS",
      area: "30000 SFT",
      floors: "4 + GROUND",
      startDate: "APR’ 2006",
      completionDate: "APR’ 2008",
      consultant: "Client Engineer"
    },
    gallery: [
      "/project/residential/CLASSIC ENCLAVE/DSC_0176-CLASSIC-ENCLAVE-scaled.jpg",
      "/project/residential/CLASSIC ENCLAVE/DSC_0179-CLASSIC-ENCLAVE.jpg"
    ]
  },  {
    slug: "construction-of-apartment-building-utopia-9",
    name: "Construction of Apartment Building   \"UTOPIA\"",
    category: "Residential",
    location: "Pallikarani, Chennai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Apartment Building   \"UTOPIA\" in Pallikarani, Chennai.",
    details: {
      client: "M/s.LCS City Makers Pvt Ltd., 17 A, seethamal   road, Alawrpet, Chennai - 600 018",
      area: "1,29,000.",
      floors: "GROUND + 4 FLOORS",
      startDate: "APR' 2013",
      completionDate: "APR'2015",
      consultant: "M/s.C.Subba Rao Associates, B-2, No 1, Ground   floor, B. Kences Enclave Ramakrishna Street, T.Nagar, Chennai - 600 017"
    },
    gallery: []
  },  {
    slug: "construction-of-guest-house-for-mr-g-srinivasan-mr-raja-duraisamy-and-mr-murali-10",
    name: "Construction of Guest House for   Mr.G.Srinivasan, Mr.Raja Duraisamy, and Mr.Murali",
    category: "Residential",
    location: "River Side Dreams, Kotagiri",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Guest House for   Mr.G.Srinivasan, Mr.Raja Duraisamy, and Mr.Murali in River Side Dreams, Kotagiri.",
    details: {
      client: "NIVASAN HOMES PVT LTD",
      area: "21,200.",
      floors: "GROUND + 1 FLOOR",
      startDate: "MAR'2013",
      completionDate: "JUL'2015",
      consultant: "M/s. Senscape Architects, No. 5/1, 1st Floor,   2nd Main Road, N R Colony, Basavanagudi, Bangalore, Karnataka - 560 004"
    },
    gallery: []
  },  {
    slug: "construction-of-guest-house-for-mr-manohar-mr-mohanraj-mr-premnath-mr-venkatesan-11",
    name: "Construction of Guest House for Mr.Manohar, Mr.   Mohanraj, Mr, Premnath, Mr. Venkatesan",
    category: "Residential",
    location: "River Side Dreams, Kotagiri",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Guest House for Mr.Manohar, Mr.   Mohanraj, Mr, Premnath, Mr. Venkatesan in River Side Dreams, Kotagiri.",
    details: {
      client: "NIVASAN HOMES PVT LTD",
      area: "17,388.",
      floors: "GROUND + 1 FLOOR",
      startDate: "MAY'2014",
      completionDate: "JAN' 2016",
      consultant: "M/s. Senscape Architects, No. 5/1, 1st Floor,   2nd Main Road, N R Colony, Basavanagudi, Bangalore, Karnataka - 560 004"
    },
    gallery: []
  },  {
    slug: "construction-of-holiday-home-propel-farm-house-12",
    name: "Construction of Holiday Home (Propel Farm   house),",
    category: "Residential",
    location: "Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Holiday Home (Propel Farm   house), in Coimbatore.",
    details: {
      client: "Mr.Senthil, 38/1B, Trichy Road,   Kangeyampalayam, Sulur, Coimbatore - 641 401",
      area: "7,100.",
      floors: "GROUND + 1 FLOORS",
      startDate: "March' 2018",
      completionDate: "Jun' 2020",
      consultant: "M/s. ICON Design studio, 87 -A, First floor,   Muiappa koil thottam, sathy road, Ganapathy, Coimbatore - 641 006"
    },
    gallery: []
  },  {
    slug: "construction-of-indiviual-luxury-villas-the-address-13",
    name: "Construction of Indiviual Luxury villas   \"THE ADDRESS\"",
    category: "Residential",
    location: "Pudupakkam, Chennai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Indiviual Luxury villas   \"THE ADDRESS\" in Pudupakkam, Chennai.",
    details: {
      client: "M/s. Green Peace Luxury Homes LLP, Managala   Nivas No: 16/7, 80th street, Ashok Nagar, Chennai - 600 083",
      area: "1,96,000.",
      floors: "GROUND + 1 FLOOR",
      startDate: "JAN'2015",
      completionDate: "AUG'2016",
      consultant: "Design Qube Architects, #40, MGR Salai,   Kandachavadi, Perungudi, Chennai – 600 096"
    },
    gallery: []
  },  {
    slug: "construction-of-indra-prastham-residential-apartment-building-14",
    name: "Construction of \"INDRA PRASTHAM\"   Residential Apartment Building",
    category: "Residential",
    location: "Peelamedu, coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of \"INDRA PRASTHAM\"   Residential Apartment Building in Peelamedu, coimbatore.",
    details: {
      client: "M/s. K.P.Murugesan Door no: New no: 97,   Sowbarnika illam, Thirumagal Nagar, Peelamedu, Coimbatore - 641 004",
      area: "10,500.",
      floors: "GROUND + 4 FLOORS",
      startDate: "MAR' 2015",
      completionDate: "JUN' 2016",
      consultant: "M/s. S.G.Structural Engineers. No. 53, M.A   Palanisamy Street, K.K Pudur (PO). Saibabacolony Coimbatore - 641038"
    },
    gallery: []
  },  {
    slug: "construction-of-residence-15",
    name: "Construction of Residence",
    category: "Residential",
    location: "KK Nagar, Madurai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Residence in KK Nagar, Madurai.",
    details: {
      client: "SMT. P. Chandra, 683, West cross 4th steet, K.K   Nagar, Madurai - 625 020",
      area: "7,326.",
      floors: "Ground floor + 2 floor",
      startDate: "AUG' 2022",
      completionDate: "MAY' 2024",
      consultant: "M/s. Jawahar Associates, 11th street, Madurai -   652 002"
    },
    gallery: []
  },  {
    slug: "construction-of-residential-apartment-16",
    name: "Construction of Residential Apartment",
    category: "Residential",
    location: "Vidhya Nagar, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Residential Apartment in Vidhya Nagar, Coimbatore.",
    details: {
      client: "M/s. GOVEL Trust – Aravind Eye Hospitals",
      area: "13,100.",
      floors: "GROUND + 3 FLOORS",
      startDate: "OCT' 2017",
      completionDate: "APR' 2019",
      consultant: "M/s. Vesta Architect, 252, Avinashi road,   Peelamedu, Coimbatore - 641 004"
    },
    gallery: []
  },  {
    slug: "construction-of-residential-apartment-commercial-complex-building-nivasan-ramaas-17",
    name: "Construction of Residential Apartment &   Commercial Complex Building \"Nivasan Ramaas\"",
    category: "Residential",
    location: "Kamarajar Road, Uppilipalayam Village,   Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Residential Apartment &   Commercial Complex Building \"Nivasan Ramaas\" in Kamarajar Road, Uppilipalayam Village,   Coimbatore.",
    details: {
      client: "NIVASAN HOMES PVT LTD",
      area: "59,500.",
      floors: "Res - stilt + 5 Floors, Commercial - B+GF +   4floors",
      startDate: "NOV' 2021",
      completionDate: "MAY 2024",
      consultant: "Ms/. Vesta Architects, No: 252, Avinashi road,   Peelamedu, Coimbatore - 641 004"
    },
    gallery: []
  },  {
    slug: "construction-of-residential-apartments-block-v-18",
    name: "Construction of Residential Apartments Block-V",
    category: "Residential",
    location: "Ponnaiarajapuram, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Residential Apartments Block-V in Ponnaiarajapuram, Coimbatore.",
    details: {
      client: "M/s.Leela Sundaram & Co.,11/11 Asbestos   Road,Mettur, Podanur,Coimbatore - 641 023",
      area: "50,000.",
      floors: "GROUND + 4 FLOORS",
      startDate: "JUN'2005",
      completionDate: "JUN'2007",
      consultant: "M/s.Britto Ilango and Associates, 167, West   Sambandam Road, R.S.Puram, Coimbatore - 641 002"
    },
    gallery: []
  },  {
    slug: "construction-of-residential-apartments-freedom-square-19",
    name: "Construction of Residential Apartments   \"FREEDOM SQUARE\"",
    category: "Residential",
    location: "Sowripalayam, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Residential Apartments   \"FREEDOM SQUARE\" in Sowripalayam, Coimbatore.",
    details: {
      client: "M/s. Sree Rosh Properties (P) Ltd., , Sree   Jevanthi, No 10-A, (New No. 23), Lakshmi Street, Kilpauk, Chennai - 600 010",
      area: "1,55,000.",
      floors: "GROUND + 4 FLOORS",
      startDate: "OCT'2008",
      completionDate: "JAN'2011",
      consultant: "M/s. Anbu & Faizal, No.43, S3, Amar sindur   2nd Floor, Near Children Hospital, Panteon Street, Chennai - 600 008"
    },
    gallery: []
  },  {
    slug: "construction-of-residential-apartments-sree-rosh-meadows-20",
    name: "Construction of Residential Apartments   \"SREE ROSH MEADOWS\"",
    category: "Residential",
    location: "Pammal, Chennai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Residential Apartments   \"SREE ROSH MEADOWS\" in Pammal, Chennai.",
    details: {
      client: "M/s. Sree Rosh Properties (P) Ltd., , Sree   Jevanthi, No 10-A, (New No. 23), Lakshmi Street, Kilpauk, Chennai - 600 010",
      area: "1,26,000.",
      floors: "GROUND + 4 FLOORS",
      startDate: "OCT' 2010",
      completionDate: "MAR' 2012",
      consultant: "M/s. Anbu & Faizal, No.43, S3, Amar sindur   2nd Floor, Near Children Hospital, Panteon Street, Chennai - 600 008"
    },
    gallery: []
  },  {
    slug: "construction-of-residential-building-21",
    name: "Construction of Residential Building",
    category: "Residential",
    location: "Kangeri, Bangalore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Residential Building in Kangeri, Bangalore.",
    details: {
      client: "Mr.Rajendra Prasad Maganti , Banashankari 6 th   stage, Bangalore - 560 050",
      area: "56,900.",
      startDate: "MAR'2009",
      completionDate: "MAR'2010",
      consultant: "M/s. Maya Praxis, 27/1, 2nd Block, 7th Main   Road, 8th Cross, Jaya Nagar, Bangalore - 560 004"
    },
    gallery: []
  },  {
    slug: "construction-of-residential-building-22",
    name: "Construction of Residential Building",
    category: "Residential",
    location: "Adayar, Chennai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Residential Building in Adayar, Chennai.",
    details: {
      client: "M/s.Akshaya Pvt Ltd., G square no:46, Rajiv   Gandhi Salai (OMR, Kandanchavadi, Chennai 600 096",
      area: "19,800.",
      floors: "BASEMENT+GROUND + FIRST FLOOR",
      startDate: "OCT' 2014",
      completionDate: "JUL' 2016",
      consultant: "M/s.Akshaya Pvt Ltd., G square no:46, Rajiv   Gandhi Salai (OMR, Kandanchavadi, Chennai 600 096"
    },
    gallery: []
  },  {
    slug: "construction-of-residential-building-23",
    name: "Construction of Residential Building",
    category: "Residential",
    location: "G.V Residency, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Residential Building in G.V Residency, Coimbatore.",
    details: {
      client: "Mr. Manogar, Coimbatore",
      area: "13,000.",
      floors: "GROUND+4 FLOORS",
      startDate: "FEB' 2022",
      completionDate: "MAR' 2023",
      consultant: "M/s. Arun & Associates Architects &   Planners, 1289, Trichy road, Coimbatore - 641 018"
    },
    gallery: []
  },  {
    slug: "construction-of-residential-building-24",
    name: "Construction of Residential Building",
    category: "Residential",
    location: "T. Nagar, Chennai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Residential Building in T. Nagar, Chennai.",
    details: {
      client: "Mrs. Nanditha Residence, T. Nagar, Chennai",
      area: "14,000.",
      floors: "Stilt + Ground floor + 3 floor",
      startDate: "JUN' 2023",
      completionDate: "JUN'2025",
      consultant: "Benny Kuriakose and Associates      Flat 3F, Springwood Apartments,      No. 6, Ranjith Road,      Kotturpuram, Chennai - 600085"
    },
    gallery: []
  },  {
    slug: "construction-of-residential-building-sindur-lotus-25",
    name: "Construction of Residential Building   \"SINDUR LOTUS\"",
    category: "Residential",
    location: "Kilpauk, Chennai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Residential Building   \"SINDUR LOTUS\" in Kilpauk, Chennai.",
    details: {
      client: "M/s. Great Heights Developers LLP, Sindur   Plaza, 4th floor, 42, Montieth Road, Egmore, Chennai - 600 008.",
      area: "27,000.",
      floors: "STILT + 3 FLOORS",
      startDate: "FEB' 2021",
      completionDate: "MAR'2023",
      consultant: "M/s. Anbu & Faizal, No.43, S3, Amar sindur   2nd Floor, Near Children Hospital, Panteon Street, Chennai - 600 008"
    },
    gallery: []
  },  {
    slug: "construction-of-residential-building-villa-compound-wall-office-building-26",
    name: "Construction of Residential Building (VILLA),   Compound wall, Office Building",
    category: "Residential",
    location: "Neelambur, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Residential Building (VILLA),   Compound wall, Office Building in Neelambur, Coimbatore.",
    details: {
      client: "Mr. Vijayan, Mr. Karhikeyan and Mrs. Anitha,   Neelambur, Coimbatore",
      area: "33,200.",
      floors: "GROUND + 2 FLOORS",
      startDate: "NOV' 2021",
      completionDate: "FEB' 2024",
      consultant: "M/s. SANKAR & ASSOCIATES 27, Sengupta   Street, Ramnagar Coimbatore - 641 009"
    },
    gallery: []
  },  {
    slug: "construction-of-residential-villa-27",
    name: "Construction of Residential Villa",
    category: "Residential",
    location: "Annanagar Chennai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Residential Villa in Annanagar Chennai.",
    details: {
      client: "Mrs. Haripriya Plot no: 381, East Main road,   Anna nagar west extension, Chennai - 600 101",
      area: "4,000.",
      floors: "GROUND + FIRST FLOOR",
      startDate: "OCT' 2020",
      completionDate: "MAR' 2022",
      consultant: "Design Collaborative India Private Limited,   179, III Floor SV complex Eswaran koil street, Puducherry - 605 001"
    },
    gallery: []
  },  {
    slug: "construction-of-workers-hostel-28",
    name: "Construction of Workers Hostel",
    category: "Residential",
    location: "Karegoundampalayam, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Construction of Workers Hostel in Karegoundampalayam, Coimbatore.",
    details: {
      client: "M/s. Sri Ranganather Valves & Controls (P)   Ltd, Karegoundampalayam village, Coimbatore - 641 697",
      area: "27,000.",
      floors: "GF + 2 Floors",
      startDate: "AUG' 2023",
      completionDate: "JAN' 2025",
      consultant: "Ms/. Vesta Architects, No: 252, Avinashi road,   Peelamedu, Coimbatore - 641 004"
    },
    gallery: []
  },  {
    slug: "foundation-one-shree-29",
    name: "FOUNDATION ONE “SHREE”",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/FOUNDATION ONE “SHREE”/F1-1-800x600.jpg",
    status: "Completed",
    description: "Construction of FOUNDATION ONE “SHREE” in COIMBATORE.",
    details: {
      client: "FOUNDATION ONE INFRASTRUCTURES PVT LTD",
      area: "134000 SFT",
      floors: "11 + B + STILT",
      startDate: "APR’ 2014",
      completionDate: "SEP’ 2017",
      consultant: "M/s.RSP Design Consultants (India) Private   Limited"
    },
    gallery: [
      "/project/residential/FOUNDATION ONE “SHREE”/F1-1-800x600.jpg",
      "/project/residential/FOUNDATION ONE “SHREE”/F1-1.jpeg",
      "/project/residential/FOUNDATION ONE “SHREE”/F1-1.png",
      "/project/residential/FOUNDATION ONE “SHREE”/F1-2.jpeg",
      "/project/residential/FOUNDATION ONE “SHREE”/shree-img-1.jpg",
      "/project/residential/FOUNDATION ONE “SHREE”/shree-img-2.jpg",
      "/project/residential/FOUNDATION ONE “SHREE”/shree-img-3.jpg",
      "/project/residential/FOUNDATION ONE “SHREE”/shree-img-4.jpg",
      "/project/residential/FOUNDATION ONE “SHREE”/shree-img-5.jpg",
      "/project/residential/FOUNDATION ONE “SHREE”/shree-img-6.jpg"
    ]
  },  {
    slug: "ganpath-apartments-30",
    name: "GANPATH APARTMENTS",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/GANPATH APARTMENTS/ganpath-1.jpg",
    status: "Completed",
    description: "Construction of GANPATH APARTMENTS in COIMBATORE.",
    details: {
      client: "Mr RAVICHANDRAN",
      area: "15000 SFT",
      floors: "4 + GROUND",
      startDate: "MAY’ 2014",
      completionDate: "AUG’ 2015",
      consultant: "M/s. Gowtham Architects,"
    },
    gallery: [
      "/project/residential/GANPATH APARTMENTS/ganpath-1.jpg"
    ]
  },  {
    slug: "harihar-paradise-31",
    name: "HARIHAR PARADISE",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/HARIHAR PARADISE/harihar.jpg",
    status: "Completed",
    description: "Construction of HARIHAR PARADISE in COIMBATORE.",
    details: {
      client: "HARIHAR DWELLINGS (P) LTD",
      area: "125000 SFT",
      floors: "4",
      startDate: "AUG’2009",
      completionDate: "FEB’2011",
      consultant: "M/s.Britto Ilango and Associates"
    },
    gallery: [
      "/project/residential/HARIHAR PARADISE/harihar.jpg",
      "/project/residential/HARIHAR PARADISE/web1DSCN5667.jpg",
      "/project/residential/HARIHAR PARADISE/web2DSCN5674.jpg",
      "/project/residential/HARIHAR PARADISE/web3SAM_1651.jpg"
    ]
  },  {
    slug: "icon-apartments-32",
    name: "ICON APARTMENTS",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/ICON APARTMENTS/img-1-14.jpg",
    status: "Completed",
    description: "Construction of ICON APARTMENTS in COIMBATORE.",
    details: {
      client: "SYNCHRON DEVELOPERS PVT LTD",
      area: "88000 SFT",
      floors: "9 + B +STILT",
      startDate: "OCT’ 2016",
      completionDate: "MAY’ 2019",
      consultant: "M/s. Aparajithan,"
    },
    gallery: [
      "/project/residential/ICON APARTMENTS/img-1-14.jpg",
      "/project/residential/ICON APARTMENTS/img-10-5.jpg",
      "/project/residential/ICON APARTMENTS/img-2-14.jpg",
      "/project/residential/ICON APARTMENTS/img-3-13.jpg",
      "/project/residential/ICON APARTMENTS/img-4-11.jpg",
      "/project/residential/ICON APARTMENTS/img-5-11.jpg",
      "/project/residential/ICON APARTMENTS/img-6-10.jpg",
      "/project/residential/ICON APARTMENTS/img-7-8.jpg",
      "/project/residential/ICON APARTMENTS/img-8-6.jpg",
      "/project/residential/ICON APARTMENTS/img-9-5.jpg",
      "/project/residential/ICON APARTMENTS/IMG_2916-800x600.jpg",
      "/project/residential/ICON APARTMENTS/picture2-800x875.jpg",
      "/project/residential/ICON APARTMENTS/picture3-800x831.jpg"
    ]
  },  {
    slug: "lakshmi-narayana-amalgamation-33",
    name: "LAKSHMI NARAYANA AMALGAMATION",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/LAKSHMI NARAYANA AMALGAMATION/10-800x1035.jpg",
    status: "Completed",
    description: "Construction of LAKSHMI NARAYANA AMALGAMATION in COIMBATORE.",
    details: {
      client: "AMALGAMATION PVT LTD",
      area: "5200 SFT",
      floors: "1",
      startDate: "MAY’ 2016",
      completionDate: "DEC’ 2017",
      consultant: "C.R. Narayana Rao Consultants Private Limited"
    },
    gallery: [
      "/project/residential/LAKSHMI NARAYANA AMALGAMATION/10-800x1035.jpg"
    ]
  },  {
    slug: "m-s-nivasan-homes-pvt-ltd-nivasan-springs-1-34",
    name: "M/s. NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/Ms. NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/NHSpr-2-800x800.jpg",
    status: "Completed",
    description: "Construction of M/s. NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1” in COIMBATORE.",
    details: {
      client: "NIVASAN HOMES PVT LTD",
      area: "27000 SFT",
      floors: "4 fLOOER & STILT",
      startDate: "Dec’ 2019",
      completionDate: "SEP' 2021",
      consultant: "M/s.. Vesta Architects"
    },
    gallery: [
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/NHSpr-2-800x800.jpg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/NHSpr-3-800x800.jpg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/NHSpr-4-800x600 (1).jpg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/NHSpr-4-800x600.jpg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/NHSpr-5-800x600.jpg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/NHSpr-7-800x600.jpg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/NHSprings-1.jpeg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/NHSprings-2-800x600.jpeg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/NHSprings-3-800x600.jpeg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/NHSprings-4-800x600.jpeg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/NS1-800x547.jpeg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/Spring-1-800x600.jpeg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/Springs-14-800x600.jpg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/Springs-29-800x451.jpg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/Springs-4-800x600.jpg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/Springs-9-800x598.jpg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/nsprings-1-800x544.jpeg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/nsprings-2-800x599.jpeg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/nsprings-4-800x541.jpeg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/nsprings-5-800x599.jpeg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/nsprings-6-800x599.jpeg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/nsprings-7-800x1069.jpeg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/nsprings-8-800x546.jpeg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/springs-800x395.jpg"
    ]
  },  {
    slug: "m-s-nivasan-homes-pvt-ltd-the-echo-point-aavaas-35",
    name: "M/s. NIVASAN HOMES PVT LTD “THE ECHO POINT –   AAVAAS",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/AAWAS1-800x600.jpeg",
    status: "Completed",
    description: "Construction of M/s. NIVASAN HOMES PVT LTD “THE ECHO POINT –   AAVAAS in COIMBATORE.",
    details: {
      client: "NIVASAN HOMES PVT LTD",
      area: "115000 SFT",
      floors: "6",
      startDate: "JUN’ 2018",
      completionDate: "DEC’2020",
      consultant: "M/s.. Vesta Architects"
    },
    gallery: [
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/AAWAS1-800x600.jpeg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/AAWAS10-800x600.jpeg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/AAWAS3-800x600.jpeg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/AAWAS4-800x600.jpeg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/AAWAS5-800x600.jpeg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/AAWAS6-800x600.jpeg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/AAWAS7-800x600.jpeg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/AAWAS8-800x600.jpeg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/AAWAS9-800x600.jpeg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/DSC03451-800x534.jpg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/DSC03463-800x534.jpg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/DSC03470-800x534.jpg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/DSC03475-800x534.jpg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/E-14-800x1067.jpg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/E-17-800x1067.jpg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/E-21-800x1067.jpg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/ECO-7-800x1067.jpeg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/Echo-aa-1-800x600.jpg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/Echo-aa-2-800x600.jpg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/NHEPP-1-800x450.jpg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/NHEPP-2-800x450.jpg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/NHEPP-3-800x450.jpg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/echo-1.jpg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/echo-8.jpg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/echo-9-800x400.jpg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/echo-point-img-4.jpg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/echo-point-img-5.jpg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/img-1-10.jpg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/img-12.png",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/img-2-10.jpg",
      "/project/residential/Ms. NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS/img-3-9-e1591169624253.jpg"
    ]
  },  {
    slug: "m-s-s-p-foundation-pvt-ltd-essense-apartments-36",
    name: "M/s. S&P FOUNDATION PVT LTD “ESSENSE   APARTMENTS”",
    category: "Residential",
    location: "CHENNAI",
    imageUrl: "/project/residential/Ms. S&P FOUNDATION PVT LTD “ESSENSE APARTMENTS”/E-1-800x600.jpg",
    status: "Completed",
    description: "Construction of M/s. S&P FOUNDATION PVT LTD “ESSENSE   APARTMENTS” in CHENNAI.",
    details: {
      client: "S&P FOUNDATION PVT LTD",
      area: "265000 SFT",
      floors: "4 + STILT",
      startDate: "DEC’ 2015",
      completionDate: "FEB’ 2018",
      consultant: "M/s. Semac Consultant Pvt Ltd"
    },
    gallery: [
      "/project/residential/Ms. S&P FOUNDATION PVT LTD “ESSENSE APARTMENTS”/E-1-800x600.jpg",
      "/project/residential/Ms. S&P FOUNDATION PVT LTD “ESSENSE APARTMENTS”/E-11.jpg",
      "/project/residential/Ms. S&P FOUNDATION PVT LTD “ESSENSE APARTMENTS”/E-12.jpg",
      "/project/residential/Ms. S&P FOUNDATION PVT LTD “ESSENSE APARTMENTS”/E-13.jpg",
      "/project/residential/Ms. S&P FOUNDATION PVT LTD “ESSENSE APARTMENTS”/E-14-800x460.jpg",
      "/project/residential/Ms. S&P FOUNDATION PVT LTD “ESSENSE APARTMENTS”/E-2-800x600.jpg",
      "/project/residential/Ms. S&P FOUNDATION PVT LTD “ESSENSE APARTMENTS”/E-3-800x600.jpg",
      "/project/residential/Ms. S&P FOUNDATION PVT LTD “ESSENSE APARTMENTS”/E-4-800x600.jpg",
      "/project/residential/Ms. S&P FOUNDATION PVT LTD “ESSENSE APARTMENTS”/E-5-800x600.jpg",
      "/project/residential/Ms. S&P FOUNDATION PVT LTD “ESSENSE APARTMENTS”/E-7-800x450.jpg",
      "/project/residential/Ms. S&P FOUNDATION PVT LTD “ESSENSE APARTMENTS”/E-8-800x450.jpg",
      "/project/residential/Ms. S&P FOUNDATION PVT LTD “ESSENSE APARTMENTS”/E-9-800x446.jpg"
    ]
  },  {
    slug: "m-s-s-s-foundations-pavilion-37",
    name: "M/s. S & S FOUNDATIONS – PAVILION",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/Ms. S & S FOUNDATIONS – PAVILION/1-7.jpg",
    status: "Completed",
    description: "Construction of M/s. S & S FOUNDATIONS – PAVILION in COIMBATORE.",
    details: {
      client: "S&S FOUNDATION PVT LTD",
      area: "17000 SFT",
      floors: "4 +GROUND",
      startDate: "JUN’ 2015",
      completionDate: "FEB’ 2017",
      consultant: "M/s. Nataraj & Venkat Associates"
    },
    gallery: [
      "/project/residential/Ms. S & S FOUNDATIONS – PAVILION/1-7.jpg",
      "/project/residential/Ms. S & S FOUNDATIONS – PAVILION/ss-pavilion-1-800x584.jpg",
      "/project/residential/Ms. S & S FOUNDATIONS – PAVILION/ss-pavilion-2-800x567.jpg",
      "/project/residential/Ms. S & S FOUNDATIONS – PAVILION/ss.jpg"
    ]
  },  {
    slug: "m-s-s-s-foundations-ishan-apartments-38",
    name: "M/s. S&S FOUNDATIONS - “ISHAN APARTMENTS”",
    category: "Residential",
    location: "CHENNAI",
    imageUrl: "/project/residential/Ms. S&S FOUNDATIONS - “ISHAN APARTMENTS”/DSC_7610.jpg",
    status: "Completed",
    description: "Construction of M/s. S&S FOUNDATIONS - “ISHAN APARTMENTS” in CHENNAI.",
    details: {
      client: "S&S FOUNDATION PVT LTD",
      area: "80,000 SFT",
      floors: "11 + GROUND + B",
      startDate: "MAY’ 2013",
      completionDate: "DEC’ 2014",
      consultant: "M/s. Sanjith & Vivek Architects"
    },
    gallery: [
      "/project/residential/Ms. S&S FOUNDATIONS - “ISHAN APARTMENTS”/DSC_7610.jpg",
      "/project/residential/Ms. S&S FOUNDATIONS - “ISHAN APARTMENTS”/Ishan-1-1.jpg",
      "/project/residential/Ms. S&S FOUNDATIONS - “ISHAN APARTMENTS”/Ishan-1-800x562.jpg",
      "/project/residential/Ms. S&S FOUNDATIONS - “ISHAN APARTMENTS”/Ishan-2-800x597.jpg",
      "/project/residential/Ms. S&S FOUNDATIONS - “ISHAN APARTMENTS”/Ishan-3.jpg",
      "/project/residential/Ms. S&S FOUNDATIONS - “ISHAN APARTMENTS”/Ishan-4.jpg"
    ]
  },  {
    slug: "meadows-apartments-39",
    name: "MEADOWS APARTMENTS",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/MEADOWS APARTMENTS/Meadows-1-800x600.jpg",
    status: "Completed",
    description: "Construction of MEADOWS APARTMENTS in COIMBATORE.",
    details: {
      client: "NIVASAN HOMES PVT LTD",
      area: "116000 SFT",
      floors: "4 + GROUND",
      startDate: "MAR’ 2010",
      completionDate: "JUN’ 2011",
      consultant: "M/s. Jeyakumar Associates"
    },
    gallery: [
      "/project/residential/MEADOWS APARTMENTS/Meadows-1-800x600.jpg",
      "/project/residential/MEADOWS APARTMENTS/Meadows-10-800x600.jpg",
      "/project/residential/MEADOWS APARTMENTS/Meadows-11-800x600.jpg",
      "/project/residential/MEADOWS APARTMENTS/Meadows-12-800x600.jpg",
      "/project/residential/MEADOWS APARTMENTS/Meadows-2-800x600.jpg",
      "/project/residential/MEADOWS APARTMENTS/Meadows-3.jpg",
      "/project/residential/MEADOWS APARTMENTS/Meadows-4-800x600.jpg",
      "/project/residential/MEADOWS APARTMENTS/Meadows-5-800x600.jpg",
      "/project/residential/MEADOWS APARTMENTS/Meadows-6-800x600.jpg",
      "/project/residential/MEADOWS APARTMENTS/Meadows-7-800x600.jpg",
      "/project/residential/MEADOWS APARTMENTS/Meadows-8-800x818.jpg",
      "/project/residential/MEADOWS APARTMENTS/meadows-800x600.jpg",
      "/project/residential/MEADOWS APARTMENTS/Meadows-9-800x405.jpg",
      "/project/residential/MEADOWS APARTMENTS/Medow-800x450.jpeg"
    ]
  },  {
    slug: "new-megala-hostel-at-psg-college-of-arts-and-science-40",
    name: "NEW MEGALA HOSTEL AT      PSG COLLEGE OF ARTS AND SCIENCE",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/NEW MEGALA HOSTEL AT PSG COLLEGE OF ARTS AND SCIENCE/CASH-1.jpg",
    status: "Completed",
    description: "Construction of NEW MEGALA HOSTEL AT      PSG COLLEGE OF ARTS AND SCIENCE in COIMBATORE.",
    details: {
      client: "PSG & SONS’   Charities",
      area: "117000 SFT",
      floors: "4",
      startDate: "SEP’ 2019",
      completionDate: "FEB'2021",
      consultant: "M/s. Mithran Structures (P) Ltd."
    },
    gallery: [
      "/project/residential/NEW MEGALA HOSTEL AT PSG COLLEGE OF ARTS AND SCIENCE/CASH-1.jpg",
      "/project/residential/NEW MEGALA HOSTEL AT PSG COLLEGE OF ARTS AND SCIENCE/CASH-2.jpg",
      "/project/residential/NEW MEGALA HOSTEL AT PSG COLLEGE OF ARTS AND SCIENCE/CASH-3.jpg",
      "/project/residential/NEW MEGALA HOSTEL AT PSG COLLEGE OF ARTS AND SCIENCE/PSGMH-1.jpg",
      "/project/residential/NEW MEGALA HOSTEL AT PSG COLLEGE OF ARTS AND SCIENCE/PSGMH-4.jpg",
      "/project/residential/NEW MEGALA HOSTEL AT PSG COLLEGE OF ARTS AND SCIENCE/PSGMH-6.jpg",
      "/project/residential/NEW MEGALA HOSTEL AT PSG COLLEGE OF ARTS AND SCIENCE/PSGMH-7-800x369.jpg"
    ]
  },  {
    slug: "nivasan-meenakshi-vishranth-41",
    name: "NIVASAN-MEENAKSHI VISHRANTH",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/NIVASAN-MEENAKSHI VISHRANTH/meenakshi-vishranth-1.jpg",
    status: "Completed",
    description: "Construction of NIVASAN-MEENAKSHI VISHRANTH in COIMBATORE.",
    details: {
      client: "NIVASAN   HOMES PVT LTD",
      area: "20720 SFT",
      floors: "4",
      startDate: "MAR’ 2014",
      completionDate: "AUG’ 2016",
      consultant: "M/s. Jeyakumar Associates,"
    },
    gallery: [
      "/project/residential/NIVASAN-MEENAKSHI VISHRANTH/meenakshi-vishranth-1.jpg",
      "/project/residential/NIVASAN-MEENAKSHI VISHRANTH/meenakshi-vishranth-2.jpg"
    ]
  },  {
    slug: "nivasan-nivasana-apartment-42",
    name: "NIVASAN-NIVASANA APARTMENT",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/NIVASAN-NIVASANA APARTMENT/nivasana.jpg",
    status: "Completed",
    description: "Construction of NIVASAN-NIVASANA APARTMENT in COIMBATORE.",
    details: {
      client: "NIVASAN HOMES PVT LTD",
      area: "14000 SFT",
      floors: "4 +GROUND",
      startDate: "FEB’ 2015",
      completionDate: "JUN’ 2016",
      consultant: "M/s. Jeyakumar Associates"
    },
    gallery: [
      "/project/residential/NIVASAN-NIVASANA APARTMENT/nivasana.jpg"
    ]
  },  {
    slug: "nivasan-udhyana-43",
    name: "NIVASAN UDHYANA",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/NIVASAN UDHYANA/1.jpg",
    status: "Completed",
    description: "Construction of NIVASAN UDHYANA in COIMBATORE.",
    details: {
      client: "NIVASAN HOMES PVT LTD",
      area: "331,314 SFT",
      floors: "VB+GF +2 , RHB +GF+1, B+GF,3",
      startDate: "JAN’ 2021",
      completionDate: "JAN' 2025",
      consultant: "M/s.. Senscape Architects Pvt Ltd,"
    },
    gallery: [
      "/project/residential/NIVASAN UDHYANA/1.jpg",
      "/project/residential/NIVASAN UDHYANA/2-800x444.jpg",
      "/project/residential/NIVASAN UDHYANA/5.jpg",
      "/project/residential/NIVASAN UDHYANA/6.jpg",
      "/project/residential/NIVASAN UDHYANA/slide-2-800x395.jpg",
      "/project/residential/NIVASAN UDHYANA/U1.jpg",
      "/project/residential/NIVASAN UDHYANA/U2.jpg",
      "/project/residential/NIVASAN UDHYANA/U3.jpg",
      "/project/residential/NIVASAN UDHYANA/U4.jpg",
      "/project/residential/NIVASAN UDHYANA/U5.jpg",
      "/project/residential/NIVASAN UDHYANA/U6.jpg",
      "/project/residential/NIVASAN UDHYANA/U8.jpg",
      "/project/residential/NIVASAN UDHYANA/U9.jpg",
      "/project/residential/NIVASAN UDHYANA/UDHYANA1-800x474.jpg",
      "/project/residential/NIVASAN UDHYANA/UDHYANA2-800x469.jpg",
      "/project/residential/NIVASAN UDHYANA/UDHYANA3-800x498.jpg"
    ]
  },  {
    slug: "nivasan-viveka-enclave-44",
    name: "NIVASAN-VIVEKA ENCLAVE",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/NIVASAN-VIVEKA ENCLAVE/V-1-800x1067.jpeg",
    status: "Completed",
    description: "Construction of NIVASAN-VIVEKA ENCLAVE in COIMBATORE.",
    details: {
      client: "NIVASAN HOMES PVT LTD",
      area: "117000 SFT",
      floors: "1 + GROUND",
      startDate: "MAR’ 2015",
      completionDate: "MAR’ 2017",
      consultant: "M/s. Sundar Sundaram Architects,"
    },
    gallery: [
      "/project/residential/NIVASAN-VIVEKA ENCLAVE/V-1-800x1067.jpeg",
      "/project/residential/NIVASAN-VIVEKA ENCLAVE/V-2.jpeg",
      "/project/residential/NIVASAN-VIVEKA ENCLAVE/V-3-800x531.jpeg",
      "/project/residential/NIVASAN-VIVEKA ENCLAVE/V-4-800x531.jpeg",
      "/project/residential/NIVASAN-VIVEKA ENCLAVE/V-5.jpeg",
      "/project/residential/NIVASAN-VIVEKA ENCLAVE/Viveka-1-1-800x534.jpg",
      "/project/residential/NIVASAN-VIVEKA ENCLAVE/viveka-1.jpg",
      "/project/residential/NIVASAN-VIVEKA ENCLAVE/Viveka-10-800x531.jpg",
      "/project/residential/NIVASAN-VIVEKA ENCLAVE/Viveka-11-800x531.jpg",
      "/project/residential/NIVASAN-VIVEKA ENCLAVE/Viveka-13-800x534.jpg",
      "/project/residential/NIVASAN-VIVEKA ENCLAVE/Viveka-14-800x529.jpg",
      "/project/residential/NIVASAN-VIVEKA ENCLAVE/Viveka-2-1-800x588.jpg",
      "/project/residential/NIVASAN-VIVEKA ENCLAVE/viveka-2.jpg",
      "/project/residential/NIVASAN-VIVEKA ENCLAVE/Viveka-3-1-800x534.jpg",
      "/project/residential/NIVASAN-VIVEKA ENCLAVE/viveka-3.jpg",
      "/project/residential/NIVASAN-VIVEKA ENCLAVE/viveka-4.jpg",
      "/project/residential/NIVASAN-VIVEKA ENCLAVE/Viveka-5-1-800x534.jpg",
      "/project/residential/NIVASAN-VIVEKA ENCLAVE/viveka-5.jpg",
      "/project/residential/NIVASAN-VIVEKA ENCLAVE/Viveka-6-1-800x436.jpg",
      "/project/residential/NIVASAN-VIVEKA ENCLAVE/viveka-6.jpg",
      "/project/residential/NIVASAN-VIVEKA ENCLAVE/Viveka-9-800x531.jpg"
    ]
  },  {
    slug: "pacifica-aurum-villas-45",
    name: "PACIFICA AURUM VILLAS",
    category: "Residential",
    location: "CHENNAI",
    imageUrl: "/project/residential/PACIFICA AURUM VILLAS/pacifica-1-800x552.jpg",
    status: "Completed",
    description: "Construction of PACIFICA AURUM VILLAS in CHENNAI.",
    details: {
      client: "PACIFICA AURUM VILLAS",
      area: "688000 SFT",
      floors: "2",
      startDate: "MAY’ 2013",
      completionDate: "Nov’ 2014",
      consultant: "M/s.Pacifica Chennai Project Infrastructure CO   pvt Ltd.,"
    },
    gallery: [
      "/project/residential/PACIFICA AURUM VILLAS/pacifica-1-800x552.jpg",
      "/project/residential/PACIFICA AURUM VILLAS/pacifica-2-800x450.jpg",
      "/project/residential/PACIFICA AURUM VILLAS/pacifica-3-800x446.jpg",
      "/project/residential/PACIFICA AURUM VILLAS/pacifica-4.jpg",
      "/project/residential/PACIFICA AURUM VILLAS/pacifica-5-800x600.jpg",
      "/project/residential/PACIFICA AURUM VILLAS/pacifica.jpg"
    ]
  },  {
    slug: "parsn-antara-46",
    name: "PARSN ANTARA",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/PARSN ANTARA/Antra-1-800x600.jpg",
    status: "Completed",
    description: "Construction of PARSN ANTARA in COIMBATORE.",
    details: {
      client: "ANTARA PRASN GROUPS",
      area: "211000 SFT",
      floors: "4 + GF",
      startDate: "OCT’2007",
      completionDate: "OCT’2009",
      consultant: "M/s.Rajeev Shah Associates"
    },
    gallery: [
      "/project/residential/PARSN ANTARA/Antra-1-800x600.jpg",
      "/project/residential/PARSN ANTARA/Antra-2-800x465.jpg",
      "/project/residential/PARSN ANTARA/Antra-3-800x600.jpg",
      "/project/residential/PARSN ANTARA/Antra-4-800x535.jpg",
      "/project/residential/PARSN ANTARA/Antra-5-800x535.jpg",
      "/project/residential/PARSN ANTARA/Antra-6-800x535.jpg",
      "/project/residential/PARSN ANTARA/Antra-7-rotated.jpg",
      "/project/residential/PARSN ANTARA/Antra-8-rotated.jpg",
      "/project/residential/PARSN ANTARA/Antra-9-800x535.jpg",
      "/project/residential/PARSN ANTARA/PARSN-ANTARA-800x402.jpg"
    ]
  },  {
    slug: "parsn-keystone-47",
    name: "PARSN KEYSTONE",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/PARSN KEYSTONE/APRSN-KEYSTONE-800x531.jpg",
    status: "Completed",
    description: "Construction of PARSN KEYSTONE in COIMBATORE.",
    details: {
      client: "ANTARA PRASN GROUPS",
      area: "211000 SFT",
      floors: "4",
      startDate: "OCT’2007",
      completionDate: "OCT’2009",
      consultant: "M/s.Rajeev Shah Associates,"
    },
    gallery: [
      "/project/residential/PARSN KEYSTONE/APRSN-KEYSTONE-800x531.jpg",
      "/project/residential/PARSN KEYSTONE/KEYSTONE-1-800x531.jpg",
      "/project/residential/PARSN KEYSTONE/KEYSTONE-2-800x531.jpg",
      "/project/residential/PARSN KEYSTONE/KEYSTONE-3-800x600.jpg",
      "/project/residential/PARSN KEYSTONE/KEYSTONE-4-800x600.jpg",
      "/project/residential/PARSN KEYSTONE/KEYSTONE-5-800x535.jpg",
      "/project/residential/PARSN KEYSTONE/KEYSTONE-6-800x535.jpg",
      "/project/residential/PARSN KEYSTONE/KEYSTONE-7-800x535.jpg",
      "/project/residential/PARSN KEYSTONE/KEYSTONE-8-800x535.jpg"
    ]
  },  {
    slug: "pricol-holdings-ltd-48",
    name: "PRICOL HOLDINGS LTD",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/PRICOL HOLDINGS LTD/img-1-27.jpg",
    status: "Completed",
    description: "Construction of PRICOL HOLDINGS LTD in COIMBATORE.",
    details: {
      client: "PRICOL HOLDINGS LTD",
      area: "20000 SFT",
      floors: "1",
      startDate: "MAY’ 2018",
      completionDate: "MAR' 2021",
      consultant: "M/s. Mhetras Design,"
    },
    gallery: [
      "/project/residential/PRICOL HOLDINGS LTD/img-1-27.jpg",
      "/project/residential/PRICOL HOLDINGS LTD/img-2-27.jpg",
      "/project/residential/PRICOL HOLDINGS LTD/img-3-25-800x379.jpg",
      "/project/residential/PRICOL HOLDINGS LTD/img-3-26.jpg",
      "/project/residential/PRICOL HOLDINGS LTD/img-4-23-800x1067.jpg",
      "/project/residential/PRICOL HOLDINGS LTD/img-5-22-800x1067.jpg",
      "/project/residential/PRICOL HOLDINGS LTD/img-6-18-800x1067.jpg"
    ]
  },  {
    slug: "prime-enclave-49",
    name: "PRIME ENCLAVE",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/PRIME ENCLAVE/PRIME-1-600x399.jpg",
    status: "Completed",
    description: "Construction of PRIME ENCLAVE in COIMBATORE.",
    details: {
      client: "PRIME DEVELOPERS",
      area: "180000 SFT",
      floors: "8",
      startDate: "MAR’ 2006",
      completionDate: "MAR’ 2008",
      consultant: "M/S. Sankar & Associates,"
    },
    gallery: [
      "/project/residential/PRIME ENCLAVE/PRIME-1-600x399.jpg",
      "/project/residential/PRIME ENCLAVE/PRIME-10-600x399.jpg",
      "/project/residential/PRIME ENCLAVE/PRIME-11-600x399.jpg",
      "/project/residential/PRIME ENCLAVE/PRIME-12-600x800.jpg",
      "/project/residential/PRIME ENCLAVE/PRIME-14-600x450.jpg",
      "/project/residential/PRIME ENCLAVE/PRIME-15-600x800.jpg",
      "/project/residential/PRIME ENCLAVE/PRIME-16-600x800.jpg",
      "/project/residential/PRIME ENCLAVE/PRIME-17-600x800.jpg",
      "/project/residential/PRIME ENCLAVE/PRIME-18-600x800.jpg",
      "/project/residential/PRIME ENCLAVE/PRIME-19-600x450.jpg",
      "/project/residential/PRIME ENCLAVE/PRIME-2-600x399.jpg",
      "/project/residential/PRIME ENCLAVE/PRIME-3-600x399.jpg",
      "/project/residential/PRIME ENCLAVE/PRIME-4-600x399.jpg",
      "/project/residential/PRIME ENCLAVE/PRIME-5-600x399.jpg",
      "/project/residential/PRIME ENCLAVE/PRIME-6-600x399.jpg",
      "/project/residential/PRIME ENCLAVE/PRIME-7-600x399.jpg"
    ]
  },  {
    slug: "proposed-construiction-of-individual-villa-50",
    name: "Proposed Construiction of Individual Villa",
    category: "Residential",
    location: "Neelambur, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Proposed Construiction of Individual Villa in Neelambur, Coimbatore.",
    details: {
      client: "Mr. Myilsamy, Neelambur, Coimbatore",
      area: "4,500.",
      floors: "GROUND + 1 FLOORS",
      startDate: "JUN' 2017",
      completionDate: "MAY' 2019",
      consultant: "M/s. Vesta Architect, 252, Avinashi road,   Peelamedu, Coimbatore - 641 004"
    },
    gallery: []
  },  {
    slug: "proposed-working-women-hostel-51",
    name: "Proposed WORKING WOMEN HOSTEL",
    category: "Residential",
    location: "Peelamedu,   Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Completed",
    description: "Construction of Proposed WORKING WOMEN HOSTEL in Peelamedu,   Coimbatore.",
    details: {
      client: "PSG & SONS’   Charities",
      area: "34,800.",
      floors: "GROUND + 3 floors",
      startDate: "MAY' 2017",
      completionDate: "SEP' 2019",
      consultant: "M/s. Mithran Structures (P) Ltd., Dr. L.S   Jayagopal. No:1, Jawahar nagar, S.A.H.S (POST) Coimbatore - 641 043"
    },
    gallery: []
  },  {
    slug: "saradha-greens-52",
    name: "SARADHA GREENS –",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/SARADHA GREENS –/NHSG1-800x369.jpg",
    status: "Completed",
    description: "Construction of SARADHA GREENS – in COIMBATORE.",
    details: {
      client: "NIVASAN   HOMES PVT LTD",
      area: "39000 SFT",
      floors: "2",
      startDate: "Nov’ 2019",
      completionDate: "Oct’ 2020",
      consultant: "M/s. ARUN & ASSOCIATES,"
    },
    gallery: [
      "/project/residential/SARADHA GREENS –/NHSG1-800x369.jpg",
      "/project/residential/SARADHA GREENS –/NHSG3-800x474.jpg",
      "/project/residential/SARADHA GREENS –/NHSG4.jpg",
      "/project/residential/SARADHA GREENS –/NHSG5-800x542.jpg",
      "/project/residential/SARADHA GREENS –/NHSG6.jpg",
      "/project/residential/SARADHA GREENS –/NHSG7-800x600.jpg",
      "/project/residential/SARADHA GREENS –/NSG-800x450.jpeg",
      "/project/residential/SARADHA GREENS –/SG-10-800x534.jpg",
      "/project/residential/SARADHA GREENS –/SG-2-800x600.jpeg",
      "/project/residential/SARADHA GREENS –/SG-6-800x534.jpg",
      "/project/residential/SARADHA GREENS –/SG-7-800x534.jpg",
      "/project/residential/SARADHA GREENS –/SG-8-800x534.jpg",
      "/project/residential/SARADHA GREENS –/SG-9-800x534.jpg",
      "/project/residential/SARADHA GREENS –/slide-1-800x395.jpg",
      "/project/residential/SARADHA GREENS –/slide-2-800x395.jpg",
      "/project/residential/SARADHA GREENS –/slide-3-800x395.jpg"
    ]
  },  {
    slug: "sindhoor-pushpavanam-53",
    name: "SINDHOOR PUSHPAVANAM",
    category: "Residential",
    location: "CHENNAI",
    imageUrl: "/project/residential/SINDHOOR PUSHPAVANAM/10-1-800x803.jpg",
    status: "Completed",
    description: "Construction of SINDHOOR PUSHPAVANAM in CHENNAI.",
    details: {
      client: "GREAT HEIGHTS DEVELOPERS LLP",
      area: "87500 SFT",
      floors: "9 + STILT",
      startDate: "NOV’ 2017",
      completionDate: "SEP’2019",
      consultant: "M/s. Anbu & Faizal"
    },
    gallery: [
      "/project/residential/SINDHOOR PUSHPAVANAM/10-1-800x803.jpg",
      "/project/residential/SINDHOOR PUSHPAVANAM/img-1-30.jpg",
      "/project/residential/SINDHOOR PUSHPAVANAM/img-2-30.jpg",
      "/project/residential/SINDHOOR PUSHPAVANAM/img-3-29.jpg",
      "/project/residential/SINDHOOR PUSHPAVANAM/img-4-26.jpg"
    ]
  },  {
    slug: "sindur-pristine-54",
    name: "SINDUR PRISTINE",
    category: "Residential",
    location: "CHENNAI",
    imageUrl: "/project/residential/SINDUR PRISTINE/1-800x600.jpg",
    status: "Completed",
    description: "Construction of SINDUR PRISTINE in CHENNAI.",
    details: {
      client: "GREAT HEIGHTS DEVELOPERS LLP",
      area: "55500 SFT",
      floors: "4",
      startDate: "Oct’ 2019",
      completionDate: "Oct’ 2020",
      consultant: "M/s. Anbu & Faizal"
    },
    gallery: [
      "/project/residential/SINDUR PRISTINE/1-800x600.jpg",
      "/project/residential/SINDUR PRISTINE/4-1-800x316.jpg",
      "/project/residential/SINDUR PRISTINE/5-1-800x450.jpg",
      "/project/residential/SINDUR PRISTINE/banner-pristine-800x365.jpg",
      "/project/residential/SINDUR PRISTINE/Pristine-1-800x1067.jpg",
      "/project/residential/SINDUR PRISTINE/Pristine-1-800x600.jpg",
      "/project/residential/SINDUR PRISTINE/Pristine-12-800x1067.jpg",
      "/project/residential/SINDUR PRISTINE/Pristine-14-800x1067.jpg",
      "/project/residential/SINDUR PRISTINE/Pristine-15-800x600.jpg",
      "/project/residential/SINDUR PRISTINE/Pristine-3-800x600.jpg",
      "/project/residential/SINDUR PRISTINE/Pristine-4-800x368.jpg",
      "/project/residential/SINDUR PRISTINE/Pristine-4-800x600.jpg",
      "/project/residential/SINDUR PRISTINE/Pristine-5-1-800x600.jpg",
      "/project/residential/SINDUR PRISTINE/Pristine-6-800x1067.jpg",
      "/project/residential/SINDUR PRISTINE/Pristine-7-800x600.jpg",
      "/project/residential/SINDUR PRISTINE/Pristine-8-800x600 (1).jpg",
      "/project/residential/SINDUR PRISTINE/Pristine-8-800x600.jpg",
      "/project/residential/SINDUR PRISTINE/Pristine2.jpg",
      "/project/residential/SINDUR PRISTINE/sp-1-800x600.jpeg",
      "/project/residential/SINDUR PRISTINE/sp-2-800x1067.jpeg"
    ]
  },  {
    slug: "solitaire-apartments-55",
    name: "SOLITAIRE APARTMENTS",
    category: "Residential",
    location: "CHENNAI",
    imageUrl: "/project/residential/SOLITAIRE APARTMENTS/solitaire.jpg",
    status: "Completed",
    description: "Construction of SOLITAIRE APARTMENTS in CHENNAI.",
    details: {
      client: "S&S FOUNDATION PVT LTD",
      area: "165500 SFT",
      floors: "11 +STILT",
      startDate: "JUN’ 2012",
      completionDate: "DEC’ 2014",
      consultant: "M/s. Chettinad Design"
    },
    gallery: [
      "/project/residential/SOLITAIRE APARTMENTS/solitaire.jpg"
    ]
  },  {
    slug: "soma-apartments-56",
    name: "SOMA APARTMENTS",
    category: "Residential",
    location: "CHENNAI",
    imageUrl: "/project/residential/SOMA APARTMENTS/soma-1.jpg",
    status: "Completed",
    description: "Construction of SOMA APARTMENTS in CHENNAI.",
    details: {
      client: "SOMA ENTERPRISES LTD , SOMA MERIT",
      area: "24000 SFT",
      floors: "4",
      startDate: "2013-06-01",
      completionDate: "2015-08-01",
      consultant: "M/s.C.Subba Rao Associates"
    },
    gallery: [
      "/project/residential/SOMA APARTMENTS/soma-1.jpg"
    ]
  },  {
    slug: "srivari-anikait-57",
    name: "SRIVARI ANIKAIT",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/SRIVARI ANIKAIT/Pic-4.jpg",
    status: "Completed",
    description: "Construction of SRIVARI ANIKAIT in COIMBATORE.",
    details: {
      client: "MR KISHORE G.LUND SRIVARI PROPERTIES &   DEVELOPERS",
      area: "156000 SFT",
      floors: "4",
      startDate: "APR’ 2007",
      completionDate: "JUN’ 2009",
      consultant: "M/s. Edifice"
    },
    gallery: [
      "/project/residential/SRIVARI ANIKAIT/Pic-4.jpg",
      "/project/residential/SRIVARI ANIKAIT/Pic-5.jpg"
    ]
  },  {
    slug: "srivari-pranav-58",
    name: "SRIVARI PRANAV",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/SRIVARI PRANAV/32-800x600.jpg",
    status: "Completed",
    description: "Construction of SRIVARI PRANAV in COIMBATORE.",
    details: {
      client: "Mr KISHORE G.LUND SRIVARI PROPERTIES &   DEVELOPERS",
      area: "156000 SFT",
      floors: "4+GROUND",
      startDate: "APR’ 2007",
      completionDate: "JUN’ 2009",
      consultant: "M/s. Edifice,"
    },
    gallery: [
      "/project/residential/SRIVARI PRANAV/32-800x600.jpg",
      "/project/residential/SRIVARI PRANAV/35-800x600.jpg",
      "/project/residential/SRIVARI PRANAV/DSC_0170-SRIVARI-PRANAV-800x531.jpg",
      "/project/residential/SRIVARI PRANAV/DSC_0171-SRIVARI-PRANAV-800x531.jpg"
    ]
  },  {
    slug: "srivari-prathisht-59",
    name: "SRIVARI PRATHISHT",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/SRIVARI PRATHISHT/1-1-800x532.jpg",
    status: "Completed",
    description: "Construction of SRIVARI PRATHISHT in COIMBATORE.",
    details: {
      client: "Mr KISHORE G.LUND SRIVARI PROPERTIES &   DEVELOPERS",
      area: "156000 SFT",
      floors: "4 +GROUND",
      startDate: "APR’ 2007",
      completionDate: "JUN’ 2009",
      consultant: "M/s. Edifice, Pramod Balakrishnan"
    },
    gallery: [
      "/project/residential/SRIVARI PRATHISHT/1-1-800x532.jpg",
      "/project/residential/SRIVARI PRATHISHT/1-2-800x532.jpg",
      "/project/residential/SRIVARI PRATHISHT/1-3-800x600.jpg",
      "/project/residential/SRIVARI PRATHISHT/1-4-800x600.jpg",
      "/project/residential/SRIVARI PRATHISHT/1-5-800x600.jpg",
      "/project/residential/SRIVARI PRATHISHT/1-6-800x600.jpg",
      "/project/residential/SRIVARI PRATHISHT/21-800x600.jpg",
      "/project/residential/SRIVARI PRATHISHT/36-800x600.jpg",
      "/project/residential/SRIVARI PRATHISHT/37-800x600.jpg",
      "/project/residential/SRIVARI PRATHISHT/DSC_0164-SRIVARI-PRATHISHT-800x531.jpg",
      "/project/residential/SRIVARI PRATHISHT/DSC_0168-SRIVARI-PRATHISHT-800x531.jpg",
      "/project/residential/SRIVARI PRATHISHT/Pic-2-800x531.jpg",
      "/project/residential/SRIVARI PRATHISHT/Pic-3-800x531.jpg"
    ]
  },  {
    slug: "suktha-nakshatra-60",
    name: "SUKTHA NAKSHATRA",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/SUKTHA NAKSHATRA/10-800x236.jpg",
    status: "Completed",
    description: "Construction of SUKTHA NAKSHATRA in COIMBATORE.",
    details: {
      client: "SREE SUKTHA REALESTATES PVT LTD",
      area: "55000 SFT",
      floors: "4 + GROUND",
      startDate: "AUG’ 2009",
      completionDate: "AUG’ 2011",
      consultant: "M/S. Sankar & Associates"
    },
    gallery: [
      "/project/residential/SUKTHA NAKSHATRA/10-800x236.jpg",
      "/project/residential/SUKTHA NAKSHATRA/DSC_1737-800x531.jpg",
      "/project/residential/SUKTHA NAKSHATRA/DSC_1738-800x531.jpg",
      "/project/residential/SUKTHA NAKSHATRA/DSC_1740-2-800x531 (1).jpg",
      "/project/residential/SUKTHA NAKSHATRA/DSC_1740-2-800x531.jpg",
      "/project/residential/SUKTHA NAKSHATRA/DSC_1742-2-800x531.jpg",
      "/project/residential/SUKTHA NAKSHATRA/DSC_1746-rotated.jpg",
      "/project/residential/SUKTHA NAKSHATRA/DSC_1747-2-800x531.jpg",
      "/project/residential/SUKTHA NAKSHATRA/sukthaveda-800x531.jpg"
    ]
  },  {
    slug: "tvh-ekanta-61",
    name: "TVH EKANTA",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/TVH EKANTA/TVH-1-800x436.jpg",
    status: "Completed",
    description: "Construction of TVH EKANTA in COIMBATORE.",
    details: {
      client: "TVH BELICIAA TOWER'S",
      area: "144000 SFT",
      floors: "4 + GROUND",
      startDate: "MAY’2007",
      completionDate: "JUL’2009",
      consultant: "M/s. Keerthi Shah Associates"
    },
    gallery: [
      "/project/residential/TVH EKANTA/TVH-1-800x436.jpg",
      "/project/residential/TVH EKANTA/TVH-2-800x600.jpg",
      "/project/residential/TVH EKANTA/TVH-3-800x531.jpg",
      "/project/residential/TVH EKANTA/TVH-4-800x535.jpg",
      "/project/residential/TVH EKANTA/TVH-5-800x535.jpg",
      "/project/residential/TVH EKANTA/TVH-6-800x535.jpg",
      "/project/residential/TVH EKANTA/TVH-7-800x531.jpg",
      "/project/residential/TVH EKANTA/TVH-EKANTA-800x531.jpg"
    ]
  },  {
    slug: "tvs-emerald-light-house-62",
    name: "TVS EMERALD – LIGHT HOUSE",
    category: "Residential",
    location: "CHENNAI",
    imageUrl: "/project/residential/TVS EMERALD – LIGHT HOUSE/DSC_5597-800x534.jpg",
    status: "Completed",
    description: "Construction of TVS EMERALD – LIGHT HOUSE in CHENNAI.",
    details: {
      client: "M/s. TVS Holdings Ltd.",
      area: "425000 SFT",
      floors: "14",
      startDate: "FEB’ 2018",
      completionDate: "FEB '2022",
      consultant: "R. Chakrapani & Sons"
    },
    gallery: [
      "/project/residential/TVS EMERALD – LIGHT HOUSE/DSC_5597-800x534.jpg",
      "/project/residential/TVS EMERALD – LIGHT HOUSE/DSC_5599-800x534.jpg",
      "/project/residential/TVS EMERALD – LIGHT HOUSE/DSC_5601-800x534.jpg",
      "/project/residential/TVS EMERALD – LIGHT HOUSE/img-1-17.jpg",
      "/project/residential/TVS EMERALD – LIGHT HOUSE/img-4-14.jpg",
      "/project/residential/TVS EMERALD – LIGHT HOUSE/img-5-14.jpg",
      "/project/residential/TVS EMERALD – LIGHT HOUSE/img-6-13.jpg",
      "/project/residential/TVS EMERALD – LIGHT HOUSE/img-8-8-800x389.jpg",
      "/project/residential/TVS EMERALD – LIGHT HOUSE/TVS-1-800x600.jpg",
      "/project/residential/TVS EMERALD – LIGHT HOUSE/TVS-5-800x369.jpeg",
      "/project/residential/TVS EMERALD – LIGHT HOUSE/TVS-7-800x369.jpeg",
      "/project/residential/TVS EMERALD – LIGHT HOUSE/TVS-8-800x369.jpeg",
      "/project/residential/TVS EMERALD – LIGHT HOUSE/tvs-emerald-lighthouse-pallavaram-chennai-tvs-emerald.jpg",
      "/project/residential/TVS EMERALD – LIGHT HOUSE/TVSE-3-800x600.jpeg",
      "/project/residential/TVS EMERALD – LIGHT HOUSE/TVSE-6-800x600.jpeg",
      "/project/residential/TVS EMERALD – LIGHT HOUSE/TVSE-7-800x600.jpeg",
      "/project/residential/TVS EMERALD – LIGHT HOUSE/TVSE-8-800x600.jpeg",
      "/project/residential/TVS EMERALD – LIGHT HOUSE/TVSELH-10-800x452.jpeg",
      "/project/residential/TVS EMERALD – LIGHT HOUSE/TVSELH-2.jpeg",
      "/project/residential/TVS EMERALD – LIGHT HOUSE/TVSELH-3-800x452.jpeg"
    ]
  },  {
    slug: "white-house-sri-hari-63",
    name: "WHITE HOUSE – SRI HARI",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/WHITE HOUSE – SRI HARI/DSC_0229-WHITEHOUSE.jpg",
    status: "Completed",
    description: "Construction of WHITE HOUSE – SRI HARI in COIMBATORE.",
    details: {
      client: "WHITE HOUSE RESIDENCE INDIA PVT LTD",
      area: "45000 SFT",
      floors: "4+ GROUND",
      startDate: "AUG’ 2007",
      completionDate: "AUG’ 2009",
      consultant: "M/S. Sankar & Associates"
    },
    gallery: [
      "/project/residential/WHITE HOUSE – SRI HARI/DSC_0229-WHITEHOUSE.jpg",
      "/project/residential/WHITE HOUSE – SRI HARI/Pic-2-1.jpg"
    ]
  },  {
    slug: "all-civil-works-roads-and-culverts-water-and-sewer-works-including-treatment-tanks-and-structures-landscape-works-and-all-other-auxiliary-works-housing-hostel-block-at-madurai-for-m-s-aravind-eye-hospital-64",
    name: "All Civil Works, Roads And Culverts,Water And   Sewer Works Including Treatment Tanks And Structures, Landscape Works And All   Other Auxiliary Works - Housing & Hostel Block At Madurai For M/S.   Aravind Eye Hospital",
    category: "Residential",
    location: "Karuppayurani, Madurai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of All Civil Works, Roads And Culverts,Water And   Sewer Works Including Treatment Tanks And Structures, Landscape Works And All   Other Auxiliary Works - Housing & Hostel Block At Madurai For M/S.   Aravind Eye Hospital in Karuppayurani, Madurai.",
    details: {
      client: "M/s. GOVEL Trust – Aravind Eye Hospitals",
      area: "3,21,300.",
      floors: "Housing G+10 Floors, Hostel G+12 Floors",
      startDate: "2026-07-01",
      completionDate: "2029-01-01",
      consultant: "M/s. Design Collaborative Private Limited,   Pondicherry"
    },
    gallery: []
  },  {
    slug: "civil-external-development-plumbing-peb-works-for-the-proposed-construction-of-warehouse-at-schneider-electric-india-private-limited-coimbatore-campus-65",
    name: "Civil, External Development ,Plumbing & PEB   Works for the Proposed Construction of Warehouse at Schneider Electric India   Private Limited, Coimbatore Campus -",
    category: "Residential",
    location: "Malumichampatti, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Civil, External Development ,Plumbing & PEB   Works for the Proposed Construction of Warehouse at Schneider Electric India   Private Limited, Coimbatore Campus - in Malumichampatti, Coimbatore.",
    details: {
      client: "M/s. Lauritz Knudsen Electrical and Automation",
      area: "40,000.",
      floors: "Ground + Mezzanine Floor for Warehouse",
      startDate: "JAN' 2026",
      completionDate: "AUG'2026",
      consultant: "M/s. Kailash Consultants, Salem"
    },
    gallery: []
  },  {
    slug: "construction-of-ashram-66",
    name: "Construction of Ashram",
    category: "Residential",
    location: "Vellamadai, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Construction of Ashram in Vellamadai, Coimbatore.",
    details: {
      client: "VEE YES Charities Foundaiton",
      area: "3,826.",
      floors: "GROUND FLOOR",
      startDate: "NOV'2025",
      completionDate: "SEP'2026",
      consultant: "K2LD Architects & Interior Designer,   Singapore"
    },
    gallery: []
  },  {
    slug: "construction-of-compound-wall-67",
    name: "Construction of Compound wall",
    category: "Residential",
    location: "Kalavasal, Madurai",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Construction of Compound wall in Kalavasal, Madurai.",
    details: {
      client: "Mrs. Radhabai, Coimbatore",
      completionDate: "JAN' 2023",
      consultant: "Client Engineer"
    },
    gallery: []
  },  {
    slug: "construction-of-external-development-around-new-boys-hostel-68",
    name: "Construction of External Development around New   Boys Hostel",
    category: "Residential",
    location: "Kuniyamuthur, Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Construction of External Development around New   Boys Hostel in Kuniyamuthur, Coimbatore.",
    details: {
      client: "M/s. Sri Krishna college of Technology,   Coimbatore",
      floors: "GF",
      completionDate: "OCT' 2023",
      consultant: "M/s. PTK Project Consultants LLP, 19/1, Haddows   Road, Chennai - 600 006"
    },
    gallery: []
  },  {
    slug: "construction-of-ganga-hostel-for-m-s-psg-college-of-arts-science-coimbatore-69",
    name: "Construction of Ganga Hostel for M/s. PSG   College of Arts & Science, Coimbatore.",
    category: "Residential",
    location: "Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Construction of Ganga Hostel for M/s. PSG   College of Arts & Science, Coimbatore. in Coimbatore.",
    details: {
      client: "PSG & SONS’   Charities",
      area: "1,92,500.",
      floors: "GF+6 Floors",
      startDate: "2026-04-01",
      completionDate: "2027-07-01",
      consultant: "M/s. Mithran Structures Pvt Ltd, Coimbatore"
    },
    gallery: []
  },  {
    slug: "construction-of-maharaja-bungalow-at-palayamkottai-tirunelveli-for-m-s-tvs-holdings-ltd-70",
    name: "Construction of Maharaja Bungalow at   Palayamkottai, Tirunelveli for M/s. TVS Holdings Ltd",
    category: "Residential",
    location: "Tirunelveli",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Construction of Maharaja Bungalow at   Palayamkottai, Tirunelveli for M/s. TVS Holdings Ltd in Tirunelveli.",
    details: {
      client: "M/s.   TVS Holdings Ltd.",
      area: "4,000.",
      floors: "GF+1",
      startDate: "MAY'25",
      completionDate: "SEP'2026",
      consultant: "Metras Design , 4, 1st Floor, 3rd Avenue,   Harington Road, Chetpet, Chennai 31"
    },
    gallery: []
  },  {
    slug: "construction-of-residential-apartment-revantha-skyden-at-kongu-nagar-kalapatti-for-m-s-revantha-services-private-limited-71",
    name: "Construction of Residential Apartment   \"Revantha Skyden\" at Kongu Nagar, Kalapatti for M/s. Revantha   Services Private Limited",
    category: "Residential",
    location: "Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Construction of Residential Apartment   \"Revantha Skyden\" at Kongu Nagar, Kalapatti for M/s. Revantha   Services Private Limited in Coimbatore.",
    details: {
      client: "M/s. Revantha Services Private Limited",
      area: "37,000.",
      floors: "GF+5 Floors",
      startDate: "2026-04-01",
      completionDate: "FEB-28",
      consultant: "Interface Architecture, Coimbatore"
    },
    gallery: []
  },  {
    slug: "mr-c-s-siddharth-72",
    name: "Mr.C.S.SIDDHARTH",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/Mr.C.S.SIDDHARTH/Siddarth1-800x431.jpg",
    status: "Ongoing",
    description: "Construction of Mr.C.S.SIDDHARTH in COIMBATORE.",
    details: {
      client: "Mr.C.S.SIDDHARTH",
      area: "11,400 SFT",
      floors: "1",
      startDate: "MAR’ 2024",
      completionDate: "JULY' 2027",
      consultant: "Mrs. Bharathi Sengottuvel"
    },
    gallery: [
      "/project/residential/Mr.C.S.SIDDHARTH/Siddarth1-800x431.jpg",
      "/project/residential/Mr.C.S.SIDDHARTH/Siddarth2-800x396.jpg",
      "/project/residential/Mr.C.S.SIDDHARTH/Siddarth3-800x446.jpg",
      "/project/residential/Mr.C.S.SIDDHARTH/Siddarth4-800x397.jpg"
    ]
  },  {
    slug: "mrs-kanagarathinam-73",
    name: "MRS KANAGARATHINAM",
    category: "Residential",
    location: "PALANI",
    imageUrl: "/project/residential/MRS KANAGARATHINAM/Kanagarathinam1-800x398.jpg",
    status: "Ongoing",
    description: "Construction of MRS KANAGARATHINAM in PALANI.",
    details: {
      client: "Mr KANAGARATHINAM",
      area: "9,500 SFT",
      floors: "2",
      startDate: "AUG’ 2024",
      completionDate: "OCT' 2026",
      consultant: "M/s. SANKAR & ASSOCIATES"
    },
    gallery: [
      "/project/residential/MRS KANAGARATHINAM/Kanagarathinam1-800x398.jpg",
      "/project/residential/MRS KANAGARATHINAM/Kanagarathinam2-800x392.jpg"
    ]
  },  {
    slug: "nivasan-bliss-74",
    name: "NIVASAN BLISS",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/NIVASAN BLISS/BLISS2.jpg",
    status: "Ongoing",
    description: "Construction of NIVASAN BLISS in COIMBATORE.",
    details: {
      client: "NIVASAN HOMES PVT LTD",
      area: "33,000 SFT",
      floors: "5",
      startDate: "DEC’ 2022",
      completionDate: "MAY' 2025",
      consultant: "Ms/. Vesta Architects"
    },
    gallery: [
      "/project/residential/NIVASAN BLISS/BLISS2.jpg",
      "/project/residential/NIVASAN BLISS/BLISS3.jpg",
      "/project/residential/NIVASAN BLISS/BLISS5.jpg",
      "/project/residential/NIVASAN BLISS/BLISS6.jpg",
      "/project/residential/NIVASAN BLISS/BLISS7.jpg",
      "/project/residential/NIVASAN BLISS/BLISS8.jpg",
      "/project/residential/NIVASAN BLISS/BLISS9.jpg"
    ]
  },  {
    slug: "nivasan-swarnapuraa-75",
    name: "NIVASAN SWARNAPURAA",
    category: "Residential",
    location: "COIMBATORE",
    imageUrl: "/project/residential/NIVASAN SWARNAPURAA/Swarnapuraa1-800x400.jpg",
    status: "Ongoing",
    description: "Construction of NIVASAN SWARNAPURAA in COIMBATORE.",
    details: {
      client: "NIVASAN HOMES PVT LTD",
      area: "93,500 SFT",
      floors: "1",
      startDate: "MAY’ 2024",
      completionDate: "OCT' 2026",
      consultant: "Ms/. Vesta Architects"
    },
    gallery: [
      "/project/residential/NIVASAN SWARNAPURAA/Swarnapuraa1-800x400.jpg",
      "/project/residential/NIVASAN SWARNAPURAA/Swarnapuraa2-800x389.jpg",
      "/project/residential/NIVASAN SWARNAPURAA/Swarnapuraa3.jpg",
      "/project/residential/NIVASAN SWARNAPURAA/Swarnapuraa4.jpg"
    ]
  },  {
    slug: "residential-apartment-nivasan-vakulam-at-coimbatore-76",
    name: "Residential Apartment \"Nivasan   Vakulam\" at Coimbatore",
    category: "Residential",
    location: "Coimbatore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Residential Apartment \"Nivasan   Vakulam\" at Coimbatore in Coimbatore.",
    details: {
      client: "NIVASAN HOMES PVT LTD",
      area: "53,430.",
      floors: "1 Semi Basement + Stilt+GF+3 Floors",
      startDate: "2026-02-01",
      completionDate: "FEB-27",
      consultant: "M/s.Vesta Architects, Coimbatore"
    },
    gallery: []
  },  {
    slug: "residential-development-mysore-toys-at-kalidasar-road-mysore-77",
    name: "Residential development \" Mysore Toys at   Kalidasar road,Mysore",
    category: "Residential",
    location: "Mysore, Bangalore",
    imageUrl: "MANUAL_MAPPING_REQUIRED",
    status: "Ongoing",
    description: "Construction of Residential development \" Mysore Toys at   Kalidasar road,Mysore in Mysore, Bangalore.",
    details: {
      client: "M/s.Mysore Toys Company",
      area: "1,23,200.",
      floors: "LB+UB+GF+19Floors",
      startDate: "2026-02-01",
      completionDate: "JAN-29",
      consultant: "M/s.Urban Frame Pvt Ltd, No. 27/9,   \"Sankalpa\", CunninghamRoad, Vasanth Nagar, Bangalore - 560 052."
    },
    gallery: []
  },  {
    slug: "shriram-122-78",
    name: "SHRIRAM 122",
    category: "Residential",
    location: "CHENNAI",
    imageUrl: "/project/residential/SHRIRAM 122/Srivision-800x410.jpg",
    status: "Ongoing",
    description: "Construction of SHRIRAM 122 in CHENNAI.",
    details: {
      client: "SHRI VISION ELEVATION PVT LTD",
      area: "13,40,200 SFT",
      floors: "19",
      startDate: "SEP’ 2025",
      completionDate: "JUN '2028",
      consultant: "Ms/. Design Realm,"
    },
    gallery: [
      "/project/residential/SHRIRAM 122/Srivision-800x410.jpg",
      "/project/residential/SHRIRAM 122/Srivision1-800x408.jpg",
      "/project/residential/SHRIRAM 122/Srivision2-800x404.jpg"
    ]
  }

];

export const featuredProjectsList = (() => {
  const selected: typeof projectsList = [];
  const seenCategories = new Set<string>();
  
  for (const p of projectsList) {
    if (p.imageUrl && p.imageUrl !== "MANUAL_MAPPING_REQUIRED" && !seenCategories.has(p.category)) {
      selected.push(p);
      seenCategories.add(p.category);
    }
    if (selected.length === 6) break;
  }
  
  // fallback if somehow there are fewer than 6 categories with valid images
  if (selected.length < 6) {
      for (const p of projectsList) {
          if (p.imageUrl && p.imageUrl !== "MANUAL_MAPPING_REQUIRED" && !selected.some(s => s.slug === p.slug)) {
              selected.push(p);
          }
          if (selected.length === 6) break;
      }
  }
  return selected;
})();
