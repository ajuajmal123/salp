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
    "slug": "sindhoor-pushpavanam",
    "name": "SINDHOOR PUSHPAVANAM",
    "category": "RESIDENTIAL",
    "location": "CHENNAI",
    "imageUrl": "/project/SINDHOOR PUSHPAVANAM/10-1-800x803.jpg",
    "status": "Completed",
    "description": "Construction of SINDHOOR PUSHPAVANAM in CHENNAI.",
    "details": {
      "client": "GREAT HEIGHTS DEVELOPERS LLP",
      "area": "87500 SFT",
      "floors": "9 + STILT",
      "startDate": "NOV’ 2017",
      "completionDate": "SEP’2019",
      "consultant": "ANBU & FAIZAL"
    },
    "gallery": ["/project/SINDHOOR PUSHPAVANAM/10-1-800x803.jpg","/project/SINDHOOR PUSHPAVANAM/img-1-30.jpg","/project/SINDHOOR PUSHPAVANAM/img-2-30.jpg","/project/SINDHOOR PUSHPAVANAM/img-3-29.jpg","/project/SINDHOOR PUSHPAVANAM/img-4-26.jpg"]
  },
  {
    "slug": "nivasan-homes-pvt-ltd-nivasan-springs-1",
    "name": "NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "/project/NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/NHSpr-3-800x800.jpg",
    "status": "Completed",
    "description": "Construction of NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1” in COIMBATORE.",
    "details": {
      "client": "NIVASAN HOMES PRIVATE LIMITED",
      "area": "27000 SFT",
      "floors": "4 fLOOER & STILT",
      "startDate": "Dec’ 2019",
      "completionDate": "SEP' 2021",
      "consultant": "VESTA ARCHITECTS"
    },
    "gallery": ["/project/NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/NHSpr-3-800x800.jpg","/project/NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/NHSprings-1.jpeg","/project/NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/NHSprings-2-800x600.jpeg","/project/NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/NHSprings-4-800x600.jpeg","/project/NIVASAN HOMES PVT LTD “NIVASAN SPRINGS 1”/springs-800x395.jpg"]
  },
  {
    "slug": "akshaya-tango",
    "name": "AKSHAYA TANGO",
    "category": "RESIDENTIAL",
    "location": "CHENNAI",
    "imageUrl": "/project/AKSHAYA TANGO/Tango-1-800x413.jpg",
    "status": "Completed",
    "description": "Construction of AKSHAYA TANGO in CHENNAI.",
    "details": {
      "client": "AKSHAYA PRIVATE LIMITED",
      "area": "552000 SFT",
      "floors": "13",
      "startDate": "APR’ 2014",
      "completionDate": "SEP’ 2020",
      "consultant": "VENKATARAMAN ASSOCIATES"
    },
    "gallery": ["/project/AKSHAYA TANGO/Tango-1-800x413.jpg","/project/AKSHAYA TANGO/Tango-4-800x480.jpg","/project/AKSHAYA TANGO/Tango-5-800x450.jpg","/project/AKSHAYA TANGO/Tango-800x410.jpg"]
  },
  {
    "slug": "foundation-one-shree",
    "name": "FOUNDATION ONE “SHREE”",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "/project/FOUNDATION ONE “SHREE”/F1-2.jpeg",
    "status": "Completed",
    "description": "Construction of FOUNDATION ONE “SHREE” in COIMBATORE.",
    "details": {
      "client": "FOUNDATION ONE INFRASTRUCTURES PRIVATE LIMITED",
      "area": "134000 SFT",
      "floors": "11 + B + STILT",
      "startDate": "APR’ 2014",
      "completionDate": "SEP’ 2017",
      "consultant": "RSP DESIGN CONSULTANTS (INDIA) PRIVATE LIMITED"
    },
    "gallery": ["/project/FOUNDATION ONE “SHREE”/F1-2.jpeg","/project/FOUNDATION ONE “SHREE”/shree-img-1.jpg","/project/FOUNDATION ONE “SHREE”/shree-img-2.jpg","/project/FOUNDATION ONE “SHREE”/shree-img-3.jpg","/project/FOUNDATION ONE “SHREE”/shree-img-4.jpg"]
  },
  {
    "slug": "saradha-greens",
    "name": "SARADHA GREENS –",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "/project/SARADHA GREENS/NHSG1-800x369.jpg",
    "status": "Completed",
    "description": "Construction of SARADHA GREENS – in COIMBATORE.",
    "details": {
      "client": "NIVASAN HOMES PRIVATE LIMITED",
      "area": "39000 SFT",
      "floors": "2",
      "startDate": "Nov’ 2019",
      "completionDate": "MAR’ 2022",
      "consultant": "ARUN & ASSOCIATES"
    },
    "gallery": ["/project/SARADHA GREENS/NHSG1-800x369.jpg","/project/SARADHA GREENS/NSG-800x450.jpeg","/project/SARADHA GREENS/slide-1-800x395.jpg","/project/SARADHA GREENS/slide-2-800x395.jpg","/project/SARADHA GREENS/slide-3-800x395.jpg"]
  },
  {
    "slug": "sindur-pristine",
    "name": "SINDUR PRISTINE",
    "category": "RESIDENTIAL",
    "location": "CHENNAI",
    "imageUrl": "/project/SINDUR PRISTINE/1-800x600.jpg",
    "status": "Completed",
    "description": "Construction of SINDUR PRISTINE in CHENNAI.",
    "details": {
      "client": "GREAT HIGHTS DEVELOPERS LLP",
      "area": "55500 SFT",
      "floors": "4",
      "startDate": "Oct’ 2019",
      "completionDate": "FEB’ 2022",
      "consultant": "ANBU & FAIZAL"
    },
    "gallery": ["/project/SINDUR PRISTINE/1-800x600.jpg","/project/SINDUR PRISTINE/4-1-800x316.jpg","/project/SINDUR PRISTINE/banner-pristine-800x365.jpg","/project/SINDUR PRISTINE/Pristine-12-800x1067.jpg","/project/SINDUR PRISTINE/Pristine2.jpg"]
  },
  {
    "slug": "blue-haven-phase-ii",
    "name": "BLUE HAVEN PHASE II",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "/project/BLUE HAVEN PHASE II/BH2-1-800x548.jpg",
    "status": "Completed",
    "description": "Construction of BLUE HAVEN PHASE II in COIMBATORE.",
    "details": {
      "client": "NIVASAN HOMES PRIVATE LIMITED",
      "area": "20000 SFT",
      "floors": "4 + GROUND",
      "startDate": "DEC’ 2012",
      "completionDate": "NOV’ 2014",
      "consultant": "INNER SPACE ARCHITECT"
    },
    "gallery": ["/project/BLUE HAVEN PHASE II/BH2-1-800x548.jpg","/project/BLUE HAVEN PHASE II/BH2-3-800x600.jpg","/project/BLUE HAVEN PHASE II/BH2-5-800x600.jpg","/project/BLUE HAVEN PHASE II/bluehaven (1).jpg","/project/BLUE HAVEN PHASE II/bluehaven.jpg"]
  },
  {
    "slug": "psg-institute-of-medical-sciences-research",
    "name": "PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "/project/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/DSC03503-800x534.jpg",
    "status": "Completed",
    "description": "Construction of PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH in COIMBATORE.",
    "details": {
      "client": "PSG & SONS CHARITIES",
      "area": "285600 SFT",
      "floors": "8 +GROUND",
      "startDate": "MAR’ 2016",
      "completionDate": "NOV’ 2017",
      "consultant": "MITHRAN STRUCTURES (P) LIMITED"
    },
    "gallery": ["/project/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/DSC03503-800x534.jpg","/project/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/DSC03511-800x534.jpg","/project/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/DSC03514-800x534.jpg","/project/PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH/PSG-IMSR-HOSTEL-800x600.jpg"]
  },
  {
    "slug": "parsn-antara",
    "name": "PARSN ANTARA",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "/project/PARSN ANTARA/Antra-2-800x465.jpg",
    "status": "Completed",
    "description": "Construction of PARSN ANTARA in COIMBATORE.",
    "details": {
      "client": "ANTARA PRASN GROUPS",
      "area": "211000 SFT",
      "floors": "4 + GF",
      "startDate": "OCT’2007",
      "completionDate": "OCT’2009",
      "consultant": "RAJEEV SHAH ASSOCIATES"
    },
    "gallery": ["/project/PARSN ANTARA/Antra-2-800x465.jpg","/project/PARSN ANTARA/Antra-3-800x600.jpg","/project/PARSN ANTARA/Antra-4-800x535.jpg","/project/PARSN ANTARA/Antra-9-800x535.jpg","/project/PARSN ANTARA/PARSN-ANTARA-800x402.jpg"]
  },
  {
    "slug": "parsn-keystone",
    "name": "PARSN KEYSTONE",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "/project/PARSN KEYSTONE/APRSN-KEYSTONE-800x531.jpg",
    "status": "Completed",
    "description": "Construction of PARSN KEYSTONE in COIMBATORE.",
    "details": {
      "client": "ANTARA PRASN GROUPS",
      "area": "211000 SFT",
      "floors": "4",
      "startDate": "OCT’2007",
      "completionDate": "OCT’2009",
      "consultant": "RAJEEV SHAH ASSOCIATES"
    },
    "gallery": ["/project/PARSN KEYSTONE/APRSN-KEYSTONE-800x531.jpg","/project/PARSN KEYSTONE/KEYSTONE-1-800x531.jpg","/project/PARSN KEYSTONE/KEYSTONE-3-800x600.jpg","/project/PARSN KEYSTONE/KEYSTONE-4-800x600.jpg","/project/PARSN KEYSTONE/KEYSTONE-7-800x535.jpg"]
  },
  {
    "slug": "apartment-building-govel-trust",
    "name": "APARTMENT BUILDING – GOVEL TRUST",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of APARTMENT BUILDING – GOVEL TRUST in COIMBATORE.",
    "details": {
      "client": "GOVEL TRUST ARAVIND EYE HOSPITAL",
      "area": "25000 SFT",
      "floors": "2 + GROUND",
      "startDate": "SEP’2008",
      "completionDate": "OCT’2009",
      "consultant": "GOWTHAM ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "cri-pumps-private-limited",
    "name": "CRI PUMPS PRIVATE LIMITED",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of CRI PUMPS PRIVATE LIMITED in COIMBATORE.",
    "details": {
      "client": "CRI PUMPS PRIVATE LIMITED",
      "area": "44200 SFT",
      "floors": "GF",
      "startDate": "DEC’ 2018",
      "completionDate": "SEP'2019",
      "consultant": "MITHRAN STRUCTURES (P) LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "sri-srinivasa-textiles",
    "name": "SRI SRINIVASA TEXTILES",
    "category": "INDUSTRIAL",
    "location": "TIRPUR",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SRI SRINIVASA TEXTILES in TIRPUR.",
    "details": {
      "client": "SRI SRINIVASA TEXTILES",
      "area": "24000 SFT",
      "floors": "GF",
      "startDate": "Aug’ 2019",
      "completionDate": "SEP’ 2020",
      "consultant": "VESTA ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "propel-industries-private-limited",
    "name": "PROPEL INDUSTRIES PRIVATE LIMITED",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of PROPEL INDUSTRIES PRIVATE LIMITED in COIMBATORE.",
    "details": {
      "client": "PROPEL INDUSTRIES PRIVATE LIMITED",
      "area": "25800 SFT",
      "floors": "GF + 1 FLOOR",
      "startDate": "AUG’ 2017",
      "completionDate": "SEP’ 2020",
      "consultant": "KSM ARCHITECTURE"
    },
    "gallery": []
  },
  {
    "slug": "l-g-balakrishnan-bros-limited",
    "name": "L.G.BALAKRISHNAN & BROS LIMITED",
    "category": "INDUSTRIAL",
    "location": "CHENNAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of L.G.BALAKRISHNAN & BROS LIMITED in CHENNAI.",
    "details": {
      "client": "L G BALAKRISHNAN & BROS LIMITED",
      "area": "125000 SFT",
      "floors": "GF",
      "startDate": "FEB’ 2018",
      "completionDate": "SEP’ 2019",
      "consultant": "PTK ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "cs-spinners-pvt-ltd",
    "name": "CS SPINNERS PVT LTD",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of CS SPINNERS PVT LTD in COIMBATORE.",
    "details": {
      "client": "CS SPINNERS PRIVATE LIMITED",
      "area": "126000 SFT",
      "floors": "GF",
      "startDate": "NOV’ 2017",
      "completionDate": "SEP’ 2019",
      "consultant": "VESTA ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "revantha-services-ltd",
    "name": "REVANTHA SERVICES LTD",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of REVANTHA SERVICES LTD in COIMBATORE.",
    "details": {
      "client": "REVANTHA SERVICES LIMITED",
      "area": "85500 SFT",
      "floors": "GF",
      "startDate": "AUG’ 2017",
      "completionDate": "SEP’ 2018",
      "consultant": "BHARATH & ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "l-g-balakrishnan-bro-s-ltd",
    "name": "L G BALAKRISHNAN & BRO’s LTD",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of L G BALAKRISHNAN & BRO’s LTD in COIMBATORE.",
    "details": {
      "client": "L G BALAKRISHNAN & BRO’S LIMITED",
      "area": "97000 SFT",
      "floors": "GF",
      "startDate": "MAR’ 2018",
      "completionDate": "NOV’ 2018",
      "consultant": "CLIENT ENGINEER"
    },
    "gallery": []
  },
  {
    "slug": "tharun-balaji-spinners",
    "name": "THARUN BALAJI SPINNERS",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of THARUN BALAJI SPINNERS in COIMBATORE.",
    "details": {
      "client": "THARUN BALAJI SPINNERS",
      "area": "82000 SFT",
      "floors": "GF",
      "startDate": "OCT’ 2016",
      "completionDate": "SEP’ 2017",
      "consultant": "VESTA ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "bradken-india-private-limited",
    "name": "BRADKEN INDIA PRIVATE LIMITED",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of BRADKEN INDIA PRIVATE LIMITED in COIMBATORE.",
    "details": {
      "client": "BRADKEN INDIA PRIVATE LIMITED",
      "area": "12700 SFT",
      "floors": "GF",
      "startDate": "AUG’ 2016",
      "completionDate": "NOV '2017",
      "consultant": "M DHARMALINGAM ASSOCIATE"
    },
    "gallery": []
  },
  {
    "slug": "sakthi-gear-products-factory-building",
    "name": "SAKTHI GEAR PRODUCTS - Factory Building",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SAKTHI GEAR PRODUCTS - Factory Building in COIMBATORE.",
    "details": {
      "client": "SAKTHI GEAR PRODUCTS",
      "area": "34700 SFT",
      "floors": "GF",
      "startDate": "SEP’2015",
      "completionDate": "SEP’ 2016",
      "consultant": "VESTA ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "the-echo-point-plaza",
    "name": "THE ECHO POINT – PLAZA",
    "category": "COMMERCIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of THE ECHO POINT – PLAZA in COIMBATORE.",
    "details": {
      "client": "NIVASAN HOMES PRIVATE LIMITED",
      "area": "89000 SFT",
      "floors": "5",
      "startDate": "JAN’ 2019",
      "completionDate": "MAR' 2022",
      "consultant": "VESTA ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "akg-india-pvt-ltd",
    "name": "AKG INDIA PVT LTD",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of AKG INDIA PVT LTD in COIMBATORE.",
    "details": {
      "client": "AKG INDIA PRIVATE LIMITED",
      "area": "61000 SFT",
      "floors": "GF",
      "startDate": "MAY’2011",
      "completionDate": "OCT’2012",
      "consultant": "M DHARMALINGAM ASSOCIATE"
    },
    "gallery": []
  },
  {
    "slug": "codissia-intech-technology-centre",
    "name": "CODISSIA INTECH TECHNOLOGY CENTRE",
    "category": "COMMERCIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of CODISSIA INTECH TECHNOLOGY CENTRE in COIMBATORE.",
    "details": {
      "client": "CODISSIA INTECH TECHNOLOGY CENTRE",
      "area": "81000 SFT",
      "floors": "GF",
      "startDate": "JUN’2007",
      "completionDate": "OCT’2008",
      "consultant": "GAYATHRI AND NAMITH ARCHITECTS (P) LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "marudhamalai-industrial-logistics-park-coimbatore-by",
    "name": "Marudhamalai Industrial & Logistics Park, Coimbatore (by)",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of Marudhamalai Industrial & Logistics Park, Coimbatore (by) in COIMBATORE.",
    "details": {
      "client": "TVS INDUSTRIAL & LOGISTICS PARKS PRIVATE LIMITED",
      "area": "384500 SFT",
      "floors": "GF",
      "startDate": "DEC’ 2019",
      "completionDate": "OCT’ 2021",
      "consultant": "TATA CONSULTING ENGINEERS PRIVATE LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "bull-machines-pvt-ltd-suvasam-2-0",
    "name": "BULL MACHINES PVT LTD-SUVASAM 2.0",
    "category": "COMMERCIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of BULL MACHINES PVT LTD-SUVASAM 2.0 in COIMBATORE.",
    "details": {
      "client": "NIVASAN HOMES PRIVATE LIMITED",
      "area": "7800 SFT",
      "floors": "3",
      "startDate": "NOV’ 2019",
      "completionDate": "JUL'2022",
      "consultant": "ARUN & ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "snf-components-private-limited",
    "name": "SNF COMPONENTS PRIVATE LIMITED",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SNF COMPONENTS PRIVATE LIMITED in COIMBATORE.",
    "details": {
      "client": "BULL MACHINES PRIVATE LIMITED-SUVASAM 2 0",
      "area": "44000 SFT",
      "floors": "GF",
      "startDate": "MAR’ 2019",
      "completionDate": "JUN '2020",
      "consultant": "SG STRUCTURAL ENGINEERS"
    },
    "gallery": []
  },
  {
    "slug": "decathlon-sports-india-pvt-ltd",
    "name": "DECATHLON SPORTS INDIA PVT LTD",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of DECATHLON SPORTS INDIA PVT LTD in COIMBATORE.",
    "details": {
      "client": "SNF COMPONENTS PRIVATE LIMITED",
      "area": "58000 SFT",
      "floors": "GF",
      "startDate": "AUG’ 2018",
      "completionDate": "OCT’ 2019",
      "consultant": "SG STRUCTURAL ENGINEERS"
    },
    "gallery": []
  },
  {
    "slug": "vasanth-co",
    "name": "VASANTH & CO",
    "category": "INDUSTRIAL",
    "location": "ANNUR",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of VASANTH & CO in ANNUR.",
    "details": {
      "client": "L G BALAKRISHNAN & BROS LIMITED",
      "area": "15000 SFT",
      "floors": "GF+1 FLOOR",
      "startDate": "JUN’ 2018",
      "completionDate": "OCT’ 2018",
      "consultant": "VESTA ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "super-spinning-mills-limited",
    "name": "SUPER SPINNING MILLS LIMITED",
    "category": "COMMERCIAL",
    "location": "BANGALORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SUPER SPINNING MILLS LIMITED in BANGALORE.",
    "details": {
      "client": "DECATHLON SPORTS INDIA PRIVATE LIMITED",
      "area": "23000 SFT",
      "floors": "GF",
      "startDate": "APR’2014",
      "completionDate": "OCT’ 2014",
      "consultant": "DESIGN FORUM INDIA PRIVATE LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "dr-manoharan-hospital",
    "name": "DR.MANOHARAN-HOSPITAL",
    "category": "COMMERCIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of DR.MANOHARAN-HOSPITAL in COIMBATORE.",
    "details": {
      "client": "VASANTH & CO",
      "area": "21000 SFT",
      "floors": "3",
      "startDate": "JUN’ 2013",
      "completionDate": "OCT’ 2014",
      "consultant": "YELLOW ARCHITECT"
    },
    "gallery": []
  },
  {
    "slug": "psg-institute-of-medical-sciences-research-ladies-and-gents-hostel",
    "name": "PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH (LADIES AND GENTS HOSTEL)",
    "category": "INDUSTRIAL",
    "location": "HINDUPUR",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of PSG INSTITUTE OF MEDICAL SCIENCES & RESEARCH (LADIES AND GENTS HOSTEL) in HINDUPUR.",
    "details": {
      "client": "SUPER SPINNING MILLS LIMITED",
      "area": "225000 SFT",
      "floors": "GF",
      "startDate": "APR’ 2006",
      "completionDate": "OCT’ 2007",
      "consultant": "SANKAR & ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "kfi-the-school",
    "name": "KFI-THE SCHOOL",
    "category": "HEALTHCARE",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of KFI-THE SCHOOL in COIMBATORE.",
    "details": {
      "client": "DR MANOHARAN-HOSPITAL DESIGN FORUM INDIA PRIVATE LIMITED",
      "area": "35000 SFT",
      "floors": "3",
      "startDate": "JUN'2018",
      "completionDate": "OCT'2022",
      "consultant": "DESIGN FORUM INDIA PRIVATE LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "saptharishi-prasanna-complex",
    "name": "SAPTHARISHI PRASANNA COMPLEX",
    "category": "INSTITUTIONAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SAPTHARISHI PRASANNA COMPLEX in COIMBATORE.",
    "details": {
      "client": "PSG & SONS CHARITIES",
      "area": "845000 SFT",
      "floors": "8+2B+GF",
      "startDate": "FEB’ 2015",
      "completionDate": "SEP’ 2019",
      "consultant": "S D SHARMA ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "arputham-pillai-complex",
    "name": "ARPUTHAM PILLAI COMPLEX",
    "category": "HEALTHCARE",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of ARPUTHAM PILLAI COMPLEX in COIMBATORE.",
    "details": {
      "client": "PSG & SONS CHARITIES",
      "area": "845000 SFT",
      "floors": "8+2B+GF",
      "startDate": "FEB’ 2015",
      "completionDate": "SEP’ 2019",
      "consultant": "S D SHARMA ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "arjun-college-of-technology",
    "name": "ARJUN COLLEGE OF TECHNOLOGY",
    "category": "INSTITUTIONAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of ARJUN COLLEGE OF TECHNOLOGY in COIMBATORE.",
    "details": {
      "client": "PSG & SONS CHARITIES",
      "area": "285600 SFT",
      "floors": "8",
      "startDate": "MAR’ 2016",
      "completionDate": "NOV’ 2017",
      "consultant": "MITHRAN STRUCTURES (P) LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "pacifica-aurum-villas",
    "name": "PACIFICA AURUM VILLAS",
    "category": "INSTITUTIONAL",
    "location": "CHENNAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of PACIFICA AURUM VILLAS in CHENNAI.",
    "details": {
      "client": "THE SCHOOL KRISHNAMURTI",
      "area": "55500 SFT",
      "floors": "2",
      "startDate": "JUN’ 2017",
      "completionDate": "SEP’ 2018",
      "consultant": "GREEN EVOLUTION"
    },
    "gallery": []
  },
  {
    "slug": "international-aerospace-manufacturing",
    "name": "INTERNATIONAL AEROSPACE MANUFACTURING",
    "category": "COMMERCIAL",
    "location": "CHENNAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of INTERNATIONAL AEROSPACE MANUFACTURING in CHENNAI.",
    "details": {
      "client": "SAPTHARISHI PRASANNA",
      "area": "30000 SFT",
      "floors": "4",
      "startDate": "MAR’ 2013",
      "completionDate": "NOV’ 2014",
      "consultant": "VYBOGAM"
    },
    "gallery": []
  },
  {
    "slug": "hotel-rajpark-p-ltd",
    "name": "HOTEL RAJPARK (P) LTD",
    "category": "COMMERCIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of HOTEL RAJPARK (P) LTD in COIMBATORE.",
    "details": {
      "client": "ARPUTHAM PILLAI",
      "area": "16000 SFT",
      "floors": "4",
      "startDate": "MAY’ 2013",
      "completionDate": "NOV’ 2014",
      "consultant": "PRABU"
    },
    "gallery": []
  },
  {
    "slug": "icon-apartments",
    "name": "ICON APARTMENTS",
    "category": "INSTITUTIONAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of ICON APARTMENTS in COIMBATORE.",
    "details": {
      "client": "ARJUN COLLEGE OF ENGINEERING",
      "area": "100000 SFT",
      "floors": "3",
      "startDate": "OCT’2012",
      "completionDate": "NOV’ 2014",
      "consultant": "CLIENT ENGINEER"
    },
    "gallery": []
  },
  {
    "slug": "cosmik-industry",
    "name": "COSMIK INDUSTRY",
    "category": "RESIDENTIAL",
    "location": "CHENNAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of COSMIK INDUSTRY in CHENNAI.",
    "details": {
      "client": "PACIFICA AURUM VILLAS",
      "area": "688000 SFT",
      "floors": "2",
      "startDate": "MAY’ 2013",
      "completionDate": "Nov’ 2014",
      "consultant": "PACIFICA CHENNAI PROJECT INFRASTRUCTURE CO PRIVATE LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "lgb-corporate-office-building",
    "name": "LGB CORPORATE OFFICE BUILDING,",
    "category": "INDUSTRIAL",
    "location": "HOSUR",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of LGB CORPORATE OFFICE BUILDING, in HOSUR.",
    "details": {
      "client": "INTERNATIONAL AEROSPACE MANUFACTURING PRIVATE",
      "area": "73,000 SFT",
      "floors": "GF + MEZZANINE FLOORS",
      "startDate": "JUN’ 2023",
      "completionDate": "MAY’ 2024",
      "consultant": "‘BESTEN ENGINEERS & CONSULTANTS INDIA PRIVATE LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "sankara-eye-hospital",
    "name": "SANKARA EYE HOSPITAL",
    "category": "COMMERCIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SANKARA EYE HOSPITAL in COIMBATORE.",
    "details": {
      "client": "HOTEL RAJPARK (P) LIMITED",
      "area": "320000 SFT",
      "floors": "8+2B+GF",
      "startDate": "MAY'2019",
      "completionDate": "FEB’ 2023",
      "consultant": "V K THYAGARAJAN & ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "aravind-eye-hospital",
    "name": "ARAVIND EYE HOSPITAL",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of ARAVIND EYE HOSPITAL in COIMBATORE.",
    "details": {
      "client": "SYNCHRON DEVELOPERS PRIVATE LIMITED",
      "area": "88000 SFT",
      "floors": "9 + B +STILT",
      "startDate": "OCT’ 2016",
      "completionDate": "MAY’ 2019",
      "consultant": "APARAJITHAN"
    },
    "gallery": []
  },
  {
    "slug": "secan-engineering",
    "name": "SECAN ENGINEERING",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SECAN ENGINEERING in COIMBATORE.",
    "details": {
      "client": "COSMIK INDUSTRY",
      "area": "57000 SFT",
      "floors": "GF",
      "startDate": "FEB’ 2014",
      "completionDate": "MAY’ 2015",
      "consultant": "SUNDAR SUNDARAM ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "lgb-canteen-block-and-factory-building-3",
    "name": "LGB CANTEEN BLOCK AND FACTORY BUILDING 3",
    "category": "COMMERCIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of LGB CANTEEN BLOCK AND FACTORY BUILDING 3 in COIMBATORE.",
    "details": {
      "client": "L G BALAKRISHNAN & BROS LIMITED CORPORATE",
      "area": "78,800 SFT",
      "floors": "2F +1B+GF",
      "startDate": "MAR'2023",
      "completionDate": "MAR'2025",
      "consultant": "VESTA ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "perfect-engineers",
    "name": "PERFECT ENGINEERS",
    "category": "HEALTHCARE",
    "location": "GUNTUR",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of PERFECT ENGINEERS in GUNTUR.",
    "details": {
      "client": "SRI KANCHI KAMAKOTI MEDICAL TRUST",
      "area": "1,03,000 SFT",
      "floors": "GF+3",
      "startDate": "DEC’ 2023",
      "completionDate": "MAR'2025",
      "consultant": "SANKAR & ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "kumaraguru-college-of-technology",
    "name": "KUMARAGURU COLLEGE OF TECHNOLOGY",
    "category": "HEALTHCARE",
    "location": "SALEM",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of KUMARAGURU COLLEGE OF TECHNOLOGY in SALEM.",
    "details": {
      "client": "GOVEL TRUST ARAVIND EYE HOSPITAL",
      "area": "1,40,700 SFT",
      "floors": "8",
      "startDate": "FEB’ 2024",
      "completionDate": "MAR'2025",
      "consultant": "DESIGN COLLABORATIVE PRIVATE LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "d-j-academy-for-managerial-excellence",
    "name": "D.J. ACADEMY FOR MANAGERIAL EXCELLENCE",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of D.J. ACADEMY FOR MANAGERIAL EXCELLENCE in COIMBATORE.",
    "details": {
      "client": "SECAN ENGINEERING TECHNOLOGY LIMITED",
      "area": "44,000 SFT",
      "floors": "GF + MEZZANINE FLOORS",
      "startDate": "NOV’ 2023",
      "completionDate": "MAR'2025",
      "consultant": "ANUSAMM CONSULTANTS"
    },
    "gallery": []
  },
  {
    "slug": "srm-institute-of-science-and-technology",
    "name": "SRM INSTITUTE OF SCIENCE AND TECHNOLOGY",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of SRM INSTITUTE OF SCIENCE AND TECHNOLOGY in COIMBATORE.",
    "details": {
      "client": "L G BALAKRISHNAN & BROS LIMITED CORPORATE",
      "area": "8000+97000 SFT",
      "floors": "2+1 +TERRACE GF",
      "startDate": "DEC’ 2023",
      "completionDate": "MAR'2025",
      "consultant": "VESTA ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "aqua-flow",
    "name": "AQUA FLOW",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of AQUA FLOW in COIMBATORE.",
    "details": {
      "client": "PERFECT ENGINEERS",
      "area": "103200 SFT",
      "floors": "GF",
      "startDate": "AUG’2016",
      "completionDate": "MAR’2018",
      "consultant": "TAAMAESEK ENGINEERING"
    },
    "gallery": []
  },
  {
    "slug": "bs-surgicare-india-pvt-ltd",
    "name": "BS SURGICARE INDIA PVT LTD",
    "category": "INSTITUTIONAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of BS SURGICARE INDIA PVT LTD in COIMBATORE.",
    "details": {
      "client": "KUMARAGURU COLLEGE OF TECHNOLOGY",
      "area": "97000 SFT",
      "floors": "3",
      "startDate": "NOV’2011",
      "completionDate": "MAR’2013",
      "consultant": "PTK ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "pricol-holdings-ltd",
    "name": "PRICOL HOLDINGS LTD",
    "category": "INSTITUTIONAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of PRICOL HOLDINGS LTD in COIMBATORE.",
    "details": {
      "client": "D J ACADEMY FOR MANAGERIAL EXCELLENCE",
      "area": "21000 SFT",
      "floors": "2 & 3",
      "startDate": "MAR’ 2006",
      "completionDate": "MAR’2007",
      "consultant": "CLIENT ENGINEER"
    },
    "gallery": []
  },
  {
    "slug": "muruhanandam-complex",
    "name": "MURUHANANDAM COMPLEX",
    "category": "INSTITUTIONAL",
    "location": "CHENNAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of MURUHANANDAM COMPLEX in CHENNAI.",
    "details": {
      "client": "SRM INSTITUTE OF SCIENCE AND TECHNOLOGY",
      "area": "150,000 SFT",
      "floors": "5 + TERRACE+GF",
      "startDate": "DEC’ 2022",
      "completionDate": "MAR’ 2024",
      "consultant": "FEEL & BARI"
    },
    "gallery": []
  },
  {
    "slug": "govel-trust-aravind-eye-hospital",
    "name": "GOVEL TRUST, ARAVIND EYE HOSPITAL",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of GOVEL TRUST, ARAVIND EYE HOSPITAL in COIMBATORE.",
    "details": {
      "client": "CODISSIA INDUSTRIAL PARK LIMITED",
      "area": "53940 SFT",
      "floors": "GF",
      "startDate": "FEB’ 2021",
      "completionDate": "MAR’ 2022",
      "consultant": "COMTEN CONSULTING"
    },
    "gallery": []
  },
  {
    "slug": "govel-trust-aravind-eye-hospital-55",
    "name": "GOVEL TRUST, ARAVIND EYE HOSPITAL",
    "category": "HEALTHCARE",
    "location": "OOTY",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of GOVEL TRUST, ARAVIND EYE HOSPITAL in OOTY.",
    "details": {
      "client": "BS SURGICARE INDIA PRIVATE LIMITED",
      "area": "31000 SFT",
      "floors": "2+GF",
      "startDate": "Feb’ 2019",
      "completionDate": "Mar’ 2021",
      "consultant": "CUBOID ARCHITECTURE"
    },
    "gallery": []
  },
  {
    "slug": "nivasan-viveka-enclave",
    "name": "NIVASAN-VIVEKA ENCLAVE",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of NIVASAN-VIVEKA ENCLAVE in COIMBATORE.",
    "details": {
      "client": "PRICOL HOLDINGS LIMITED",
      "area": "20000 SFT",
      "floors": "1",
      "startDate": "MAY’ 2018",
      "completionDate": "MAR' 2021",
      "consultant": "MHETRAS DESIGN"
    },
    "gallery": []
  },
  {
    "slug": "vikram-hospital",
    "name": "VIKRAM HOSPITAL",
    "category": "COMMERCIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of VIKRAM HOSPITAL in COIMBATORE.",
    "details": {
      "client": "MR MURUHANANDAM",
      "area": "42800 SFT",
      "floors": "3",
      "startDate": "OCT’ 2018",
      "completionDate": "MAR’ 2020",
      "consultant": "ARUN & ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "prime-enclave",
    "name": "PRIME ENCLAVE",
    "category": "HEALTHCARE",
    "location": "CHENNAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of PRIME ENCLAVE in CHENNAI.",
    "details": {
      "client": "GOVEL TRUST ARAVIND EYE HOSPITAL",
      "area": "195000 SFT",
      "floors": "8",
      "startDate": "JAN’ 2015",
      "completionDate": "MAR’ 2017",
      "consultant": "DESIGN COLLABORATIVE PRIVATE LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "kg-fabriks-limited",
    "name": "KG FABRIKS LIMITED",
    "category": "HEALTHCARE",
    "location": "CHENNAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of KG FABRIKS LIMITED in CHENNAI.",
    "details": {
      "client": "GOVEL TRUST ARAVIND EYE HOSPITAL",
      "area": "195000 SFT",
      "floors": "10",
      "startDate": "JAN’ 2015",
      "completionDate": "MAR’ 2017",
      "consultant": "DESIGN COLLABORATIVE PRIVATE LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "adithya-institute-of-technology-academic-building",
    "name": "ADITHYA INSTITUTE OF TECHNOLOGY- ACADEMIC BUILDING",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of ADITHYA INSTITUTE OF TECHNOLOGY- ACADEMIC BUILDING in COIMBATORE.",
    "details": {
      "client": "NIVASAN HOMES PRIVATE LIMITED",
      "area": "117000 SFT",
      "floors": "1 + GROUND",
      "startDate": "MAR’ 2015",
      "completionDate": "MAR’ 2017",
      "consultant": "SUNDAR SUNDARAM ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "exotic-fruits-pvt-ltd",
    "name": "EXOTIC FRUITS PVT LTD",
    "category": "HEALTHCARE",
    "location": "MADURAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of EXOTIC FRUITS PVT LTD in MADURAI.",
    "details": {
      "client": "VIKRAM HOSPITAL",
      "area": "90000 SFT",
      "floors": "5+G",
      "startDate": "MAR’ 2009",
      "completionDate": "MAR’ 2011",
      "consultant": "COS CONSULTANCY SERVICES"
    },
    "gallery": []
  },
  {
    "slug": "classic-towers",
    "name": "CLASSIC TOWERS",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of CLASSIC TOWERS in COIMBATORE.",
    "details": {
      "client": "PRIME DEVELOPERS",
      "area": "180000 SFT",
      "floors": "8+G",
      "startDate": "MAR’ 2006",
      "completionDate": "MAR’ 2008",
      "consultant": "SANKAR & ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "velmurugan-heavy-engineering-industries",
    "name": "VELMURUGAN HEAVY ENGINEERING INDUSTRIES",
    "category": "INDUSTRIAL",
    "location": "ERODE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of VELMURUGAN HEAVY ENGINEERING INDUSTRIES in ERODE.",
    "details": {
      "client": "KG FABRIKS LIMITED SRI KANNAPIRAN MILLS LIMITED",
      "area": "225000 SFT",
      "floors": "GF",
      "startDate": "JUL’ 2005",
      "completionDate": "MAR’ 2007",
      "consultant": "DESIGN FORUM INDIA PRIVATE LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "sri-ranganather-valves-controls-p-ltd-unit-ii",
    "name": "Sri Ranganather Valves & Controls(P)Ltd Unit II",
    "category": "INSTITUTIONAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of Sri Ranganather Valves & Controls(P)Ltd Unit II in COIMBATORE.",
    "details": {
      "client": "MR SUKUMARAN & M/S ADITYA EDUCATIONAL TRUST",
      "area": "37900 SFT",
      "floors": "2+GF",
      "startDate": "JUL’ 2023",
      "completionDate": "MAR'2025",
      "consultant": "VESTA ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "psg-staff-quarters",
    "name": "PSG STAFF QUARTERS",
    "category": "INDUSTRIAL",
    "location": "KRISHNAGIRI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of PSG STAFF QUARTERS in KRISHNAGIRI.",
    "details": {
      "client": "EXOTIC FRUITS PRIVATE LIMITED",
      "area": "203900 SFT + 35000 SFT",
      "floors": "GF",
      "startDate": "NOV’2010",
      "completionDate": "JUN’2014",
      "consultant": "DESIGN FORUM INDIA PRIVATE LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "mark-engineering-works",
    "name": "MARK ENGINEERING WORKS",
    "category": "COMMERCIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of MARK ENGINEERING WORKS in COIMBATORE.",
    "details": {
      "client": "MR ANWAR",
      "area": "38000 SFT",
      "floors": "9+GF",
      "startDate": "JUN’2006",
      "completionDate": "JUN’2008",
      "consultant": "BRITTO ILANGO AND ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "psg-institute-of-technology-applied-research",
    "name": "PSG INSTITUTE OF TECHNOLOGY & APPLIED RESEARCH",
    "category": "INDUSTRIAL",
    "location": "THANJAVUR",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of PSG INSTITUTE OF TECHNOLOGY & APPLIED RESEARCH in THANJAVUR.",
    "details": {
      "client": "VELMURUGAN HEAVY ENGINEERING PRIVATE LIMITED",
      "area": "33,000 SFT",
      "floors": "GF",
      "startDate": "MAY’ 2023",
      "completionDate": "JUN’ 2024",
      "consultant": "CLIENT ENGINEER"
    },
    "gallery": []
  },
  {
    "slug": "apartment-building",
    "name": "APARTMENT BUILDING",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of APARTMENT BUILDING in COIMBATORE.",
    "details": {
      "client": "SRI RANGANATH INDUSTRY (P) LIMITED",
      "area": "172700SFT",
      "floors": "GF",
      "startDate": "Dec’2018",
      "completionDate": "Jun’ 2022",
      "consultant": "M DHARMALINGAM ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "kpm-commercial-centre",
    "name": "KPM COMMERCIAL CENTRE",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of KPM COMMERCIAL CENTRE in COIMBATORE.",
    "details": {
      "client": "CRI PUMPS PRIVATE LIMITED",
      "area": "34000 SFT",
      "floors": "GF",
      "startDate": "Apr’ 2017",
      "completionDate": "Jun’ 2018",
      "consultant": "DESIGN TECH"
    },
    "gallery": []
  },
  {
    "slug": "nivasan-nivasana-apartment",
    "name": "NIVASAN-NIVASANA APARTMENT",
    "category": "HEALTHCARE",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of NIVASAN-NIVASANA APARTMENT in COIMBATORE.",
    "details": {
      "client": "PSG & SONS CHARITIES",
      "area": "51000 SFT",
      "floors": "1&2",
      "startDate": "FEB’ 2016",
      "completionDate": "JUN’ 2017",
      "consultant": "S D SHARMA ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "meadows-apartments",
    "name": "MEADOWS APARTMENTS",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of MEADOWS APARTMENTS in COIMBATORE.",
    "details": {
      "client": "MARK ENGINEERING WORKS",
      "area": "161000 SFT",
      "floors": "GF",
      "startDate": "APR’ 2016",
      "completionDate": "JUN’ 2017",
      "consultant": "VESTA ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "srivari-prathisht",
    "name": "SRIVARI PRATHISHT",
    "category": "INSTITUTIONAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SRIVARI PRATHISHT in COIMBATORE.",
    "details": {
      "client": "PSG & SONS CHARITIES",
      "area": "75000 SFT",
      "floors": "GROUND FLOOR",
      "startDate": "JUN’ 2015",
      "completionDate": "JUN’ 2017",
      "consultant": "S D SHARMA ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "srivari-pranav",
    "name": "SRIVARI PRANAV",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SRIVARI PRANAV in COIMBATORE.",
    "details": {
      "client": "PSG & SONS CHARITIES",
      "area": "51000 SFT",
      "floors": "8+ GROUND",
      "startDate": "FEB’ 2016",
      "completionDate": "JUN’ 2017",
      "consultant": "S D SHARMA ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "srivari-anikait",
    "name": "SRIVARI ANIKAIT",
    "category": "COMMERCIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SRIVARI ANIKAIT in COIMBATORE.",
    "details": {
      "client": "KP MURUGESAN",
      "area": "14200 SFT",
      "floors": "3+GF",
      "startDate": "FEB’ 2015",
      "completionDate": "JUN’ 2016",
      "consultant": "S G STRUCTURAL ENGINEERS"
    },
    "gallery": []
  },
  {
    "slug": "kpr-mills-limited",
    "name": "KPR MILLS LIMITED",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of KPR MILLS LIMITED in COIMBATORE.",
    "details": {
      "client": "NIVASAN HOMES PRIVATE LIMITED",
      "area": "14000 SFT",
      "floors": "4 +GROUND",
      "startDate": "FEB’ 2015",
      "completionDate": "JUN’ 2016",
      "consultant": "JEYAKUMAR ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "velammal-cbse-matriculation-school",
    "name": "VELAMMAL CBSE & MATRICULATION SCHOOL",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of VELAMMAL CBSE & MATRICULATION SCHOOL in COIMBATORE.",
    "details": {
      "client": "NIVASAN HOMES PRIVATE LIMITED",
      "area": "116000 SFT",
      "floors": "4 + GROUND",
      "startDate": "MAR’ 2010",
      "completionDate": "JUN’ 2011",
      "consultant": "JEYAKUMAR ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "akshaya-36-carat",
    "name": "AKSHAYA 36 CARAT",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of AKSHAYA 36 CARAT in COIMBATORE.",
    "details": {
      "client": "MR KISHORE G LUND SRIVARI PROPERTIES & DEVELOPERS",
      "area": "156000 SFT",
      "floors": "4 +GROUND",
      "startDate": "APR’ 2007",
      "completionDate": "JUN’ 2009",
      "consultant": "EDIFICE PRAMOD BALAKRISHNAN"
    },
    "gallery": []
  },
  {
    "slug": "tvh-ekanta",
    "name": "TVH EKANTA",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of TVH EKANTA in COIMBATORE.",
    "details": {
      "client": "MR KISHORE G LUND SRIVARI PROPERTIES & DEVELOPERS",
      "area": "156000 SFT",
      "floors": "4+GROUND",
      "startDate": "APR’ 2007",
      "completionDate": "JUN’ 2009",
      "consultant": "EDIFICE"
    },
    "gallery": []
  },
  {
    "slug": "the-ngp-school",
    "name": "The NGP School",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of The NGP School in COIMBATORE.",
    "details": {
      "client": "MR KISHORE G LUND SRIVARI PROPERTIES & DEVELOPERS",
      "area": "156000 SFT",
      "floors": "4",
      "startDate": "APR’ 2007",
      "completionDate": "JUN’ 2009",
      "consultant": "EDIFICE"
    },
    "gallery": []
  },
  {
    "slug": "l-g-balakrishnan-bros-limited-oht",
    "name": "L.G.Balakrishnan & Bros Limited – OHT",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of L.G.Balakrishnan & Bros Limited – OHT in COIMBATORE.",
    "details": {
      "client": "KPR MILLS LIMITED",
      "area": "691000 SFT",
      "floors": "GF",
      "startDate": "OCT ‘2010",
      "completionDate": "JUN ‘2011",
      "consultant": "DESIGN FORUM INDIA PRIVATE LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "motherson-group-of-companies",
    "name": "MOTHERSON GROUP OF COMPANIES",
    "category": "INSTITUTIONAL",
    "location": "KARUR",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of MOTHERSON GROUP OF COMPANIES in KARUR.",
    "details": {
      "client": "VELAMMAL EDUCATIONAL TRUST",
      "area": "203000 SFT",
      "floors": "3+GF",
      "startDate": "SEP’ 2010",
      "completionDate": "JUL’2013",
      "consultant": "CLIENT ENGINEER"
    },
    "gallery": []
  },
  {
    "slug": "propel-industries-pvt-ltd",
    "name": "PROPEL INDUSTRIES PVT LTD",
    "category": "RESIDENTIAL",
    "location": "CHENNAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of PROPEL INDUSTRIES PVT LTD in CHENNAI.",
    "details": {
      "client": "AKSHAYA PRIVATE LIMITED",
      "area": "117000 SFT",
      "floors": "10 + GROUND",
      "startDate": "JAN’2011",
      "completionDate": "JUL’2013",
      "consultant": "PASSARGARD"
    },
    "gallery": []
  },
  {
    "slug": "lgb-factory-building-2vallam",
    "name": "LGB FACTORY BUILDING 2VALLAM",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of LGB FACTORY BUILDING 2VALLAM in COIMBATORE.",
    "details": {
      "client": "TVH BELICIAA TOWER'S",
      "area": "144000 SFT",
      "floors": "4 + GROUND",
      "startDate": "MAY’2007",
      "completionDate": "JUL’2009",
      "consultant": "KEERTHI SHAH ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "madras-cements-ltd",
    "name": "MADRAS CEMENTS LTD",
    "category": "INSTITUTIONAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of MADRAS CEMENTS LTD in COIMBATORE.",
    "details": {
      "client": "DR NGP RESEARCH AND EDUCATIONAL TRUST",
      "area": "81000 SFT",
      "floors": "2+GF",
      "startDate": "JUL’ 2023",
      "completionDate": "JUL’ 2025",
      "consultant": "INGENIO"
    },
    "gallery": []
  },
  {
    "slug": "gtn-exports-ltd",
    "name": "GTN EXPORTS LTD",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of GTN EXPORTS LTD in COIMBATORE.",
    "details": {
      "client": "L G BALAKRISHNAN & BRO LIMITED -OHT",
      "area": "215000 Ltr",
      "floors": "GF",
      "startDate": "MAY’ 2022",
      "completionDate": "JUL’ 2023",
      "consultant": "INNOVATIVE DESIGN"
    },
    "gallery": []
  },
  {
    "slug": "vadamalayan-hospitals-pvt-ltd",
    "name": "VADAMALAYAN HOSPITALS PVT LTD",
    "category": "INDUSTRIAL",
    "location": "CHENNAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of VADAMALAYAN HOSPITALS PVT LTD in CHENNAI.",
    "details": {
      "client": "MOTHERSON GROUPS",
      "area": "1,832 Mtr",
      "floors": "GF",
      "startDate": "AUG’ 2021",
      "completionDate": "JUL’ 2022",
      "consultant": "VESTA ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "aditya-school-hostel-building-phase-ii",
    "name": "ADITYA SCHOOL HOSTEL BUILDING PHASE II",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of ADITYA SCHOOL HOSTEL BUILDING PHASE II in COIMBATORE.",
    "details": {
      "client": "MARK ENGINEERING WORKS",
      "area": "95000 SFT",
      "floors": "GF",
      "startDate": "AUG’ 2020",
      "completionDate": "JUL’ 2021",
      "consultant": "VESTA ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "mepco-schlenk-engineering-college",
    "name": "MEPCO SCHLENK ENGINEERING COLLEGE",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of MEPCO SCHLENK ENGINEERING COLLEGE in COIMBATORE.",
    "details": {
      "client": "PROPEL INDUSTRIES PRIVATE LIMITED",
      "area": "36400 SFT",
      "floors": "GF",
      "startDate": "SEP’2017",
      "completionDate": "JUL’ 2018",
      "consultant": "S G STRUCTURAL ENGINEERS"
    },
    "gallery": []
  },
  {
    "slug": "adithya-convention-center-marriage-hall",
    "name": "ADITHYA CONVENTION CENTER & MARRIAGE HALL",
    "category": "INDUSTRIAL",
    "location": "CHENNAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of ADITHYA CONVENTION CENTER & MARRIAGE HALL in CHENNAI.",
    "details": {
      "client": "L G BALAKRISHNAN & BROS LIMITED CORPORATE",
      "area": "103,000 SFT",
      "floors": "GF",
      "startDate": "APR’ 2024",
      "completionDate": "JAN'2026",
      "consultant": "VESTA ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "adithya-matriculation-school",
    "name": "ADITHYA MATRICULATION SCHOOL",
    "category": "INDUSTRIAL",
    "location": "SALEM",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of ADITHYA MATRICULATION SCHOOL in SALEM.",
    "details": {
      "client": "MADRAS CEMENTS LIMITED",
      "area": "5.1 MW",
      "floors": "GF",
      "startDate": "SEP’2010",
      "completionDate": "JAN’2012",
      "consultant": "CLIENT ENGINEER"
    },
    "gallery": []
  },
  {
    "slug": "adithya-cbse-school",
    "name": "ADITHYA CBSE SCHOOL",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of ADITHYA CBSE SCHOOL in COIMBATORE.",
    "details": {
      "client": "GTN EXPORTS LIMITED",
      "area": "152000 SFT",
      "floors": "GF",
      "startDate": "FEB’2009",
      "completionDate": "JAN’2010",
      "consultant": "M DHARMALINGAM ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "new-megala-hostel-at-psg-college-of-arts-and-science",
    "name": "NEW MEGALA HOSTEL AT PSG COLLEGE OF ARTS AND SCIENCE",
    "category": "INDUSTRIAL",
    "location": "CHENGELPET",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of NEW MEGALA HOSTEL AT PSG COLLEGE OF ARTS AND SCIENCE in CHENGELPET.",
    "details": {
      "client": "MADRAS CEMENTS LIMITED",
      "area": "0.7 MTPA",
      "floors": "GF",
      "startDate": "JAN’2007",
      "completionDate": "JAN’2010",
      "consultant": "ENEXCO TECHNOLOGIES (INDIA) LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "abode-valley-phase-i-ii-iii",
    "name": "“ABODE VALLEY” – PHASE I, II & III",
    "category": "INDUSTRIAL",
    "location": "HYDERABAD",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of “ABODE VALLEY” – PHASE I, II & III in HYDERABAD.",
    "details": {
      "client": "MADRAS CEMENTS LIMITED",
      "area": "500 MTP",
      "floors": "GF",
      "startDate": "JAN’2007",
      "completionDate": "JAN’2010",
      "consultant": "EEL INDIA LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "harihar-paradise",
    "name": "HARIHAR PARADISE",
    "category": "HEALTHCARE",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of HARIHAR PARADISE in COIMBATORE.",
    "details": {
      "client": "GOVEL TRUST ARAVIND EYE HOSPITAL",
      "area": "4,49,000 SFT",
      "floors": "3&6",
      "startDate": "MAR’ 2022",
      "completionDate": "JAN’ 2025",
      "consultant": "DESIGN COLLABORATIVE PRIVATE LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "schuf-speciality-valves-india-pvt-ltd",
    "name": "SCHUF SPECIALITY VALVES INDIA PVT LTD",
    "category": "HEALTHCARE",
    "location": "MADURAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SCHUF SPECIALITY VALVES INDIA PVT LTD in MADURAI.",
    "details": {
      "client": "VADAMALAYAN HOSPITALS PRIVATE LIMITED",
      "area": "14,100 SFT",
      "floors": "3+GF",
      "startDate": "AUG’ 2022",
      "completionDate": "JAN’ 2024",
      "consultant": "WHITE EDGE ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "psg-ims-r-oncology-block",
    "name": "PSG IMS&R ONCOLOGY BLOCK",
    "category": "INSTITUTIONAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of PSG IMS&R ONCOLOGY BLOCK in COIMBATORE.",
    "details": {
      "client": "MR SUKUMARAN & M/S ADITYA EDUCATIONAL TRUST",
      "area": "34000 SFT",
      "floors": "2",
      "startDate": "DEC’ 2019",
      "completionDate": "JAN’ 2021",
      "consultant": "VESTA ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "krishnaveni-carbon",
    "name": "KRISHNAVENI CARBON",
    "category": "INSTITUTIONAL",
    "location": "SIVAKASI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of KRISHNAVENI CARBON in SIVAKASI.",
    "details": {
      "client": "MEPCO SCHLENK CHARITIES",
      "area": "204400 SFT",
      "floors": "2",
      "startDate": "FEB’ 2018",
      "completionDate": "JAN’ 2020",
      "consultant": "TRINITY ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "s-p-foundation-pvt-ltd-essense-apartments",
    "name": "S&P FOUNDATION PVT LTD “ESSENSE APARTMENTS”",
    "category": "COMMERCIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of S&P FOUNDATION PVT LTD “ESSENSE APARTMENTS” in COIMBATORE.",
    "details": {
      "client": "MR SUKUMARAN & M/S ADITYA EDUCATIONAL TRUST",
      "area": "140000 SFT",
      "floors": "1",
      "startDate": "JAN’ 2016",
      "completionDate": "JAN’ 2018",
      "consultant": "SUNDAR SUNDARAM ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "s-s-foundations-pavilion",
    "name": "S & S FOUNDATIONS – PAVILION",
    "category": "INSTITUTIONAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of S & S FOUNDATIONS – PAVILION in COIMBATORE.",
    "details": {
      "client": "MR SUKUMAN & M/S ADITYA EDUCATIONAL TRUST",
      "area": "100000 SFT",
      "floors": "2",
      "startDate": "MAR’2014",
      "completionDate": "JAN’ 2015",
      "consultant": "SUNDAR SUNDARAM ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "tvs-emerald-light-house",
    "name": "TVS EMERALD – LIGHT HOUSE",
    "category": "INSTITUTIONAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of TVS EMERALD – LIGHT HOUSE in COIMBATORE.",
    "details": {
      "client": "MR SUKUMAN & M/S ADITYA EDUCATIONAL TRUST",
      "area": "141000 SFT",
      "floors": "2",
      "startDate": "MAR’2014",
      "completionDate": "JAN’ 2015",
      "consultant": "SUNDAR SUNDARAM ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "sri-kumaran-hall",
    "name": "SRI KUMARAN HALL",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SRI KUMARAN HALL in COIMBATORE.",
    "details": {
      "client": "PSG & SONS CHARITIES",
      "area": "117000 SFT",
      "floors": "4+STILT",
      "startDate": "SEP’ 2019",
      "completionDate": "FEB'2021",
      "consultant": "MITHRAN STRUCTURES (P) LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "sri-krishna-college-of-technology-boys-hostel-2",
    "name": "SRI KRISHNA COLLEGE OF TECHNOLOGY- BOYS HOSTEL 2",
    "category": "RESIDENTIAL",
    "location": "CHENNAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SRI KRISHNA COLLEGE OF TECHNOLOGY- BOYS HOSTEL 2 in CHENNAI.",
    "details": {
      "client": "LANCOR HOLDINGS LIMITED",
      "area": "570000 SFT",
      "floors": "4",
      "startDate": "APR ‘2010",
      "completionDate": "FEB’2012",
      "consultant": "NATARAJ & VENKAT ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "nivasan-homes-pvt-ltd-the-echo-point-aavaas",
    "name": "NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of NIVASAN HOMES PVT LTD “THE ECHO POINT – AAVAAS in COIMBATORE.",
    "details": {
      "client": "HARIHAR DWELLINGS (P) LIMITED",
      "area": "125000 SFT",
      "floors": "4",
      "startDate": "AUG’2009",
      "completionDate": "FEB’2011",
      "consultant": "BRITTO ILANGO AND ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "bull-machines-private-limited",
    "name": "BULL MACHINES PRIVATE LIMITED",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of BULL MACHINES PRIVATE LIMITED in COIMBATORE.",
    "details": {
      "client": "SCHUF SPECIALITY VALVES INDIA PRIVATE LIMITED",
      "area": "37000 SFT",
      "floors": "GF",
      "startDate": "OCT’2006",
      "completionDate": "FEB’2008",
      "consultant": "SANKAR & ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "velammal-medical-college-hospital",
    "name": "VELAMMAL MEDICAL COLLEGE & HOSPITAL",
    "category": "INSTITUTIONAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of VELAMMAL MEDICAL COLLEGE & HOSPITAL in COIMBATORE.",
    "details": {
      "client": "PSG & SONS CHARITIES",
      "area": "220000 SFT",
      "floors": "8",
      "startDate": "AUG’ 2020",
      "completionDate": "FEB’ 2024",
      "consultant": "MITHRAN STRUCTURES (P) LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "bushido-infotech-private-limited",
    "name": "BUSHIDO INFOTECH PRIVATE LIMITED",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of BUSHIDO INFOTECH PRIVATE LIMITED in COIMBATORE.",
    "details": {
      "client": "KRISHNAVENI CARBON PRODUCTS PRIVATE LIMITED",
      "area": "95000 SFT",
      "floors": "GF",
      "startDate": "Jun’ 2019",
      "completionDate": "FEB’ 2022",
      "consultant": "M DHARMALINGAM ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "saroja-velusamy-and-thales-trust",
    "name": "SAROJA VELUSAMY AND THALES TRUST",
    "category": "RESIDENTIAL",
    "location": "CHENNAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SAROJA VELUSAMY AND THALES TRUST in CHENNAI.",
    "details": {
      "client": "S&P FOUNDATION PRIVATE LIMITED",
      "area": "265000 SFT",
      "floors": "4 + STILT",
      "startDate": "DEC’ 2015",
      "completionDate": "FEB’ 2018",
      "consultant": "SEMAC CONSULTANT PRIVATE LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "toyota-anamallais-agencies",
    "name": "TOYOTA ANAMALLAIS AGENCIES",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of TOYOTA ANAMALLAIS AGENCIES in COIMBATORE.",
    "details": {
      "client": "S & S FOUNDATIONS PRIVATE LIMITED",
      "area": "17000 SFT",
      "floors": "4 +GROUND",
      "startDate": "JUN’ 2015",
      "completionDate": "FEB’ 2017",
      "consultant": "NATARAJ & VENKAT ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "snr-auditorium",
    "name": "SNR AUDITORIUM",
    "category": "RESIDENTIAL",
    "location": "CHENNAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SNR AUDITORIUM in CHENNAI.",
    "details": {
      "client": "EMERALD HAVEN REALTY LIMITED",
      "area": "425000 SFT",
      "floors": "14",
      "startDate": "FEB’ 2018",
      "completionDate": "FEB '2022",
      "consultant": "R CHAKRAPANI & SONS"
    },
    "gallery": []
  },
  {
    "slug": "snr-hall",
    "name": "SNR HALL",
    "category": "RESIDENTIAL",
    "location": "CHENNAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SNR HALL in CHENNAI.",
    "details": {
      "client": "EMERALD HAVEN REALTY LIMITED",
      "area": "425000 SFT",
      "floors": "14",
      "startDate": "FEB’ 2018",
      "completionDate": "FEB '2022",
      "consultant": "R CHAKRAPANI & SONS"
    },
    "gallery": []
  },
  {
    "slug": "psg-ims-r-a-block-extension",
    "name": "PSG IMS&R A-Block Extension",
    "category": "COMMERCIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of PSG IMS&R A-Block Extension in COIMBATORE.",
    "details": {
      "client": "MR SUKUMAN & M/S ADITYA EDUCATIONAL TRUST",
      "area": "30,000 SFT",
      "floors": "GF",
      "startDate": "June 2017",
      "completionDate": "Deccember 2018",
      "consultant": "VESTA ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "perfect-engineers-phase-ii",
    "name": "PERFECT ENGINEERS PHASE-II",
    "category": "INSTITUTIONAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of PERFECT ENGINEERS PHASE-II in COIMBATORE.",
    "details": {
      "client": "SRI KRISHNA COLLEGE OF TECHNOLOGY",
      "area": "106100 SFT",
      "floors": "3",
      "startDate": "JAN’ 2022",
      "completionDate": "DEC’2022",
      "consultant": "PTK PROJECT CONSULTANTS"
    },
    "gallery": []
  },
  {
    "slug": "psg-imsr-kitchen-building",
    "name": "PSG IMSR KITCHEN BUILDING",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of PSG IMSR KITCHEN BUILDING in COIMBATORE.",
    "details": {
      "client": "NIVASAN HOMES PRIVATE LIMITED",
      "area": "115000 SFT",
      "floors": "6",
      "startDate": "JUN’ 2018",
      "completionDate": "DEC’2020",
      "consultant": "VESTA ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "global-tech-park-pvt-ltd",
    "name": "GLOBAL TECH PARK PVT LTD",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of GLOBAL TECH PARK PVT LTD in COIMBATORE.",
    "details": {
      "client": "BULL MACHINES PRIVATE LIMITED",
      "area": "57000 SFT",
      "floors": "GF",
      "startDate": "JUN’2015",
      "completionDate": "DEC’2015",
      "consultant": "S G STRUCTURAL ENGINEERS"
    },
    "gallery": []
  },
  {
    "slug": "aditya-school-hostel-building",
    "name": "ADITYA SCHOOL HOSTEL BUILDING",
    "category": "HEALTHCARE",
    "location": "MADURAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of ADITYA SCHOOL HOSTEL BUILDING in MADURAI.",
    "details": {
      "client": "VELAMMAL EDUCATIONAL TRUST",
      "area": "714000 SFT",
      "floors": "5",
      "startDate": "NOV’2011",
      "completionDate": "DEC’2013",
      "consultant": "BHARGAO GROUP BUILDPRO TECHNOLOGIES"
    },
    "gallery": []
  },
  {
    "slug": "shanthamani-spinners",
    "name": "SHANTHAMANI SPINNERS",
    "category": "IT PARK",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SHANTHAMANI SPINNERS in COIMBATORE.",
    "details": {
      "client": "BUSHIDO INFOTECH PRIVATE LIMITED",
      "area": "36000 SFT",
      "floors": "4",
      "startDate": "NOV’2011",
      "completionDate": "DEC’2013",
      "consultant": "M DHARMALINGAM ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "lakshmi-narayana-amalgamation",
    "name": "LAKSHMI NARAYANA AMALGAMATION",
    "category": "COMMERCIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of LAKSHMI NARAYANA AMALGAMATION in COIMBATORE.",
    "details": {
      "client": "SAROJA VELUSAMY AND THALES TRUST",
      "area": "25000 SFT",
      "floors": "3",
      "startDate": "JUN’2011",
      "completionDate": "DEC’2012",
      "consultant": "ARUN & ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "solitaire-apartments",
    "name": "SOLITAIRE APARTMENTS",
    "category": "COMMERCIAL",
    "location": "TIRUNELVELI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SOLITAIRE APARTMENTS in TIRUNELVELI.",
    "details": {
      "client": "TOYOTA ANAMALLAIS AGENCIES",
      "area": "57300 SFT",
      "floors": "GF",
      "startDate": "JAN’2010",
      "completionDate": "DEC’2010",
      "consultant": "MR ARIVUDAI NAMBI"
    },
    "gallery": []
  },
  {
    "slug": "s-s-foundations-pvt-ltd-ishan-apartments",
    "name": "S&S FOUNDATIONS PVT LTD “ISHAN APARTMENTS”",
    "category": "COMMERCIAL",
    "location": "MADURAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of S&S FOUNDATIONS PVT LTD “ISHAN APARTMENTS” in MADURAI.",
    "details": {
      "client": "TOYOTA ANAMALLAIS AGENCIES",
      "area": "57300 SFT",
      "floors": "GF",
      "startDate": "JAN’2010",
      "completionDate": "DEC’2010",
      "consultant": "MR ARIVUDAI NAMBI"
    },
    "gallery": []
  },
  {
    "slug": "kg-denim-limited",
    "name": "KG DENIM LIMITED",
    "category": "COMMERCIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of KG DENIM LIMITED in COIMBATORE.",
    "details": {
      "client": "SNR SONS CHARITABLE TRUST",
      "area": "116000 SFT",
      "floors": "3",
      "startDate": "AUG '2003",
      "completionDate": "DEC'2005",
      "consultant": "CLIENT ENGINEER"
    },
    "gallery": []
  },
  {
    "slug": "spine-arthoscopy-and-joint-replacement-centre",
    "name": "SPINE ARTHOSCOPY AND JOINT REPLACEMENT CENTRE",
    "category": "COMMERCIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SPINE ARTHOSCOPY AND JOINT REPLACEMENT CENTRE in COIMBATORE.",
    "details": {
      "client": "SNR SONS CHARITABLE TRUST",
      "area": "116000 SFT",
      "floors": "3",
      "startDate": "AUG '2003",
      "completionDate": "DEC'2005",
      "consultant": "CLIENT ENGINEER"
    },
    "gallery": []
  },
  {
    "slug": "adithya-institute-of-technology",
    "name": "ADITHYA INSTITUTE OF TECHNOLOGY",
    "category": "HEALTHCARE",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of ADITHYA INSTITUTE OF TECHNOLOGY in COIMBATORE.",
    "details": {
      "client": "PSG & SONS CHARITIES",
      "area": "204,000 SFT",
      "floors": "8",
      "startDate": "DEC’ 2022",
      "completionDate": "DEC’ 2024",
      "consultant": "MITHRAN STRUCTURES (P) LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "shoeline-palmyra",
    "name": "Shoeline – PALMYRA",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of Shoeline – PALMYRA in COIMBATORE.",
    "details": {
      "client": "PERFECT ENGINEERS",
      "area": "100000 SFT",
      "floors": "GF",
      "startDate": "Mar’ 2020",
      "completionDate": "DEC’ 2021",
      "consultant": "PERFECT ENGINEERS"
    },
    "gallery": []
  },
  {
    "slug": "parvathy-agencies",
    "name": "PARVATHY AGENCIES",
    "category": "HEALTHCARE",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of PARVATHY AGENCIES in COIMBATORE.",
    "details": {
      "client": "PSG & SONS CHARITIES",
      "area": "20000 SFT",
      "floors": "4",
      "startDate": "DEC’ 2019",
      "completionDate": "DEC’ 2020",
      "consultant": "MITHRAN STRUCTURES (P) LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "vadamalayan-hospital",
    "name": "VADAMALAYAN HOSPITAL",
    "category": "INSTITUTIONAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of VADAMALAYAN HOSPITAL in COIMBATORE.",
    "details": {
      "client": "PSG & SONS CHARITIES",
      "area": "20000 SFT",
      "floors": "4",
      "startDate": "DEC’ 2019",
      "completionDate": "DEC’ 2020",
      "consultant": "MITHRAN STRUCTURES (P) LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "sap-promoters-ltd",
    "name": "SAP PROMOTERS LTD",
    "category": "IT PARK",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SAP PROMOTERS LTD in COIMBATORE.",
    "details": {
      "client": "GLOBAL TECH PARK PRIVATE LIMITED",
      "area": "233300 SFT",
      "floors": "3",
      "startDate": "DEC’ 2018",
      "completionDate": "DEC’ 2019",
      "consultant": "MIND SPACE"
    },
    "gallery": []
  },
  {
    "slug": "nivasan-meenakshi-vishranth",
    "name": "NIVASAN-MEENAKSHI VISHRANTH",
    "category": "INSTITUTIONAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of NIVASAN-MEENAKSHI VISHRANTH in COIMBATORE.",
    "details": {
      "client": "MR SUKUMAN & M/S ADITYA EDUCATIONAL TRUST",
      "area": "37000 SFT",
      "floors": "2",
      "startDate": "NOV’ 2017",
      "completionDate": "DEC’ 2018",
      "consultant": "VESTA ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "ganpath-apartments",
    "name": "GANPATH APARTMENTS",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of GANPATH APARTMENTS in COIMBATORE.",
    "details": {
      "client": "SHANTHAMANI SPINNERS",
      "area": "76400 SFT",
      "floors": "GF",
      "startDate": "JAN’ 2016",
      "completionDate": "DEC’ 2017",
      "consultant": "CLIENT ENGINEER"
    },
    "gallery": []
  },
  {
    "slug": "suktha-nakshatra",
    "name": "SUKTHA NAKSHATRA",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SUKTHA NAKSHATRA in COIMBATORE.",
    "details": {
      "client": "AMALGAMATION PRIVATE LIMITED",
      "area": "5200 SFT",
      "floors": "1",
      "startDate": "MAY’ 2016",
      "completionDate": "DEC’ 2017",
      "consultant": "C R NARAYANA RAO CONSULTANTS PRIVATE LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "vadamalayan-hospitals-pvt-ltd-130",
    "name": "VADAMALAYAN HOSPITALS PVT LTD",
    "category": "RESIDENTIAL",
    "location": "CHENNAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of VADAMALAYAN HOSPITALS PVT LTD in CHENNAI.",
    "details": {
      "client": "S&S FOUNDATIONS PRIVATE LIMITED",
      "area": "165500 SFT",
      "floors": "11 +STILT",
      "startDate": "JUN’ 2012",
      "completionDate": "DEC’ 2014",
      "consultant": "CHETTINAD DESIGN"
    },
    "gallery": []
  },
  {
    "slug": "white-house-sri-hari",
    "name": "WHITE HOUSE – SRI HARI",
    "category": "RESIDENTIAL",
    "location": "CHENNAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of WHITE HOUSE – SRI HARI in CHENNAI.",
    "details": {
      "client": "S&S FOUNDATIONS PRIVATE LIMITED",
      "area": "80,000 SFT",
      "floors": "11 + GROUND + B",
      "startDate": "MAY’ 2013",
      "completionDate": "DEC’ 2014",
      "consultant": "SANJITH & VIVEK ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "gkd-charity-trust",
    "name": "GKD CHARITY TRUST",
    "category": "INDUSTRIAL",
    "location": "METTUPALAYAM",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of GKD CHARITY TRUST in METTUPALAYAM.",
    "details": {
      "client": "KG DENIM LIMITED",
      "area": "166000 SFT",
      "floors": "GF",
      "startDate": "JUN’ 2004",
      "completionDate": "DEC’ 2005",
      "consultant": "DESIGN FORUM INDIA PRIVATE LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "olympia-pinnacle",
    "name": "OLYMPIA PINNACLE",
    "category": "HEALTHCARE",
    "location": "MADURAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of OLYMPIA PINNACLE in MADURAI.",
    "details": {
      "client": "GOVEL TRUST ARAVIND EYE HOSPITAL",
      "area": "106000 SFT",
      "floors": "5",
      "startDate": "APR’2008",
      "completionDate": "AUG’2009",
      "consultant": "AUROSERVICE CONSULTANTS PRIVATE LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "centralised-bus-parking",
    "name": "CENTRALISED BUS PARKING",
    "category": "HEALTHCARE",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of CENTRALISED BUS PARKING in COIMBATORE.",
    "details": {
      "client": "SPINE ARTHOSCOPY AND JOINT REPLACEMENT CENTRE",
      "area": "40000 SFT",
      "floors": "3",
      "startDate": "AUG’2008",
      "completionDate": "AUG’2009",
      "consultant": "STUDIO 29"
    },
    "gallery": []
  },
  {
    "slug": "cheyyar-sipcot-industrial-complex",
    "name": "CHEYYAR – SIPCOT INDUSTRIAL COMPLEX",
    "category": "INSTITUTIONAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of CHEYYAR – SIPCOT INDUSTRIAL COMPLEX in COIMBATORE.",
    "details": {
      "client": "MR SUKUMAN & M/S ADITYA EDUCATIONAL TRUST",
      "area": "325000 SFT",
      "floors": "4",
      "startDate": "FEB’ 2008",
      "completionDate": "AUG’2009",
      "consultant": "JEYAKUMAR ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "ramakrishna-mission-vidyalaya",
    "name": "RAMAKRISHNA MISSION VIDYALAYA",
    "category": "COMMERCIAL",
    "location": "CHENNAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of RAMAKRISHNA MISSION VIDYALAYA in CHENNAI.",
    "details": {
      "client": "SHOELINE",
      "area": "26000 SFT",
      "floors": "4",
      "startDate": "Oct’ 2019",
      "completionDate": "Aug’ 2020",
      "consultant": "GREEN EVOLUTION"
    },
    "gallery": []
  },
  {
    "slug": "venkatalakshmi-paper-and-boards",
    "name": "VENKATALAKSHMI PAPER AND BOARDS",
    "category": "COMMERCIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of VENKATALAKSHMI PAPER AND BOARDS in COIMBATORE.",
    "details": {
      "client": "PARVATHY AGENCIES",
      "area": "27500 SFT",
      "floors": "4",
      "startDate": "Nov’ 2018",
      "completionDate": "Aug’ 2020",
      "consultant": "VESTA ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "hindusthan-college-of-arts-science",
    "name": "HINDUSTHAN COLLEGE OF ARTS & SCIENCE",
    "category": "HEALTHCARE",
    "location": "DINDIGUL",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of HINDUSTHAN COLLEGE OF ARTS & SCIENCE in DINDIGUL.",
    "details": {
      "client": "VADAMALAYAN HOSPITAL (P) LIMITED",
      "area": "118000 SFT",
      "floors": "7",
      "startDate": "FEB’ 2018",
      "completionDate": "AUG’ 2020",
      "consultant": "DHYAN ARCHITECTS AND CONSULTANTS"
    },
    "gallery": []
  },
  {
    "slug": "govel-trust-dr-g-venkatasamy-research-institute",
    "name": "GOVEL TRUST, DR.G.VENKATASAMY RESEARCH INSTITUTE",
    "category": "COMMERCIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of GOVEL TRUST, DR.G.VENKATASAMY RESEARCH INSTITUTE in COIMBATORE.",
    "details": {
      "client": "SAP PROMOTERS LIMITED",
      "area": "12000 SFT",
      "floors": "3",
      "startDate": "JUN’ 2014",
      "completionDate": "AUG’ 2016",
      "consultant": "GOWTHAM ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "govel-trust-dr-g-venkatasamy-research-institute-140",
    "name": "GOVEL TRUST, DR.G.VENKATASAMY RESEARCH INSTITUTE",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of GOVEL TRUST, DR.G.VENKATASAMY RESEARCH INSTITUTE in COIMBATORE.",
    "details": {
      "client": "NIVASAN HOMES PRIVATE LIMITED",
      "area": "20720 SFT",
      "floors": "4",
      "startDate": "MAR’ 2014",
      "completionDate": "AUG’ 2016",
      "consultant": "JEYAKUMAR ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "classic-enclave",
    "name": "CLASSIC ENCLAVE",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of CLASSIC ENCLAVE in COIMBATORE.",
    "details": {
      "client": "MR RAVICHANDRAN",
      "area": "15000 SFT",
      "floors": "4 + GROUND",
      "startDate": "MAY’ 2014",
      "completionDate": "AUG’ 2015",
      "consultant": "GOWTHAM ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "sri-ramakrishna-dental-college",
    "name": "SRI RAMAKRISHNA DENTAL COLLEGE,",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SRI RAMAKRISHNA DENTAL COLLEGE, in COIMBATORE.",
    "details": {
      "client": "SREE SUKTHA REALESTATES PRIVATE LIMITED",
      "area": "55000 SFT",
      "floors": "4 + GROUND",
      "startDate": "AUG’ 2009",
      "completionDate": "AUG’ 2011",
      "consultant": "SANKAR & ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "sri-ramakrishna-dental-college-143",
    "name": "SRI RAMAKRISHNA DENTAL COLLEGE",
    "category": "HEALTHCARE",
    "location": "MADURAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SRI RAMAKRISHNA DENTAL COLLEGE in MADURAI.",
    "details": {
      "client": "VADAMALAYAN HOSPITALS",
      "area": "65000 & 20000 SFT",
      "floors": "3",
      "startDate": "SEP’2007 & DEC’ 2014",
      "completionDate": "AUG’ 2009 & DEC’ 2015",
      "consultant": "INFRABEES MANAGEMENT CONSULTANCY SERVICES"
    },
    "gallery": []
  },
  {
    "slug": "sree-switch-gears",
    "name": "SREE SWITCH GEARS",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SREE SWITCH GEARS in COIMBATORE.",
    "details": {
      "client": "WHITE HOUSE RESIDENCE INDIA PRIVATE LIMITED",
      "area": "45000 SFT",
      "floors": "4+ GROUND",
      "startDate": "AUG’ 2007",
      "completionDate": "AUG’ 2009",
      "consultant": "SANKAR & ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "velmuruga-enterprises-private-limited-svb-mlcp",
    "name": "Velmuruga Enterprises Private Limited “SVB MLCP”",
    "category": "INSTITUTIONAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of Velmuruga Enterprises Private Limited “SVB MLCP” in COIMBATORE.",
    "details": {
      "client": "GKD CHARITY TRUST",
      "area": "52500 SFT",
      "floors": "2",
      "startDate": "MAY’ 2004",
      "completionDate": "AUG’ 2005",
      "consultant": "ENVIRONMENTAL CREATIONS"
    },
    "gallery": []
  },
  {
    "slug": "pnr-prime-reality-limited-pnr-edifice",
    "name": "PNR Prime Reality Limited “PNR EDIFICE”",
    "category": "IT PARK",
    "location": "CHENNAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of PNR Prime Reality Limited “PNR EDIFICE” in CHENNAI.",
    "details": {
      "client": "ALWARPET PROPERTIES PRIVATE LIMITED",
      "area": "2,16,000 SFT",
      "floors": "10",
      "startDate": "Aug’ 2021",
      "completionDate": "Apr 2024",
      "consultant": "RSP DESIGN CONSULTANTS"
    },
    "gallery": []
  },
  {
    "slug": "ortho-one-spine-arthoscopic-joint-replacement-centre",
    "name": "Ortho One SPINE ARTHOSCOPIC & JOINT REPLACEMENT CENTRE",
    "category": "HEALTHCARE",
    "location": "TIRUNELVELI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of Ortho One SPINE ARTHOSCOPIC & JOINT REPLACEMENT CENTRE in TIRUNELVELI.",
    "details": {
      "client": "GOVEL TRUST ARAVIND EYE HOSPITAL",
      "area": "137500 SFT",
      "floors": "6",
      "startDate": "OCT’ 2020",
      "completionDate": "APR’ 2023",
      "consultant": "DESIGN COLLABORATIVE PRIVATE LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "sri-balaji-vidyapeeth-at-mahatma-gandhi-medical-college-and-research-institute-campus",
    "name": "Sri Balaji Vidyapeeth at Mahatma Gandhi Medical College And Research Institute Campus",
    "category": "INDUSTRIAL",
    "location": "KRISHNAGIRI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of Sri Balaji Vidyapeeth at Mahatma Gandhi Medical College And Research Institute Campus in KRISHNAGIRI.",
    "details": {
      "client": "CHEYYAR SEZ DEVELOPERS PRIVATE LIMITED",
      "area": "3,10,000 SFT",
      "floors": "GF",
      "startDate": "JAN’ 2022",
      "completionDate": "APR’ 2023",
      "consultant": "PITHAVADIAN AND PARTNERS ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "kovai-medical-center-and-hospital",
    "name": "KOVAI MEDICAL CENTER AND HOSPITAL",
    "category": "INDUSTRIAL",
    "location": "CHENNAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of KOVAI MEDICAL CENTER AND HOSPITAL in CHENNAI.",
    "details": {
      "client": "CHEYYAR SEZ DEVELOPERS PRIVATE LIMITED",
      "area": "2,85,000 SFT",
      "floors": "GF",
      "startDate": "OCT’ 2021",
      "completionDate": "APR’ 2023",
      "consultant": "CHEYYAR SEZ DEVELOPERS PRIVATE LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "integra-automation-pvt-ltd-unit-iv",
    "name": "INTEGRA AUTOMATION PVT LTD UNIT–IV",
    "category": "INSTITUTIONAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of INTEGRA AUTOMATION PVT LTD UNIT–IV in COIMBATORE.",
    "details": {
      "client": "RAMAKRISHNA MISSION VIDYALAYA",
      "area": "10500 SFT",
      "floors": "GF",
      "startDate": "Jan’ 2020",
      "completionDate": "Apr 2022",
      "consultant": "VESTA ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "indian-cotton-federation",
    "name": "INDIAN COTTON FEDERATION",
    "category": "INDUSTRIAL",
    "location": "UDUMALPET",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of INDIAN COTTON FEDERATION in UDUMALPET.",
    "details": {
      "client": "VENKATALAKSHMI PAPER AND BOARDS",
      "area": "9000 SFT",
      "floors": "GF",
      "startDate": "APR’ 2019",
      "completionDate": "APR’ 2021",
      "consultant": "M DHARMALINGAM ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "adithya-warehouse",
    "name": "ADITHYA WAREHOUSE",
    "category": "INSTITUTIONAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of ADITHYA WAREHOUSE in COIMBATORE.",
    "details": {
      "client": "HINDUSTHAN EDUCATION AND CHARITABLE TRUST",
      "area": "28000 SFT",
      "floors": "5",
      "startDate": "MAR’ 2016",
      "completionDate": "APR’ 2019",
      "consultant": "SUNDAR SUNDARAM ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "soma-apartments",
    "name": "SOMA APARTMENTS",
    "category": "HEALTHCARE",
    "location": "MADURAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SOMA APARTMENTS in MADURAI.",
    "details": {
      "client": "GOVEL TRUST ARAVIND EYE HOSPITAL",
      "area": "100000 SFT",
      "floors": "2",
      "startDate": "APR’ 2007",
      "completionDate": "APR’ 2009",
      "consultant": "AUROSERVICE CONSULTANTS PRIVATE LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "alaka-palazzo",
    "name": "ALAKA PALAZZO",
    "category": "HEALTHCARE",
    "location": "MADURAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of ALAKA PALAZZO in MADURAI.",
    "details": {
      "client": "GOVEL TRUST ARAVIND EYE HOSPITAL",
      "area": "150000 SFT",
      "floors": "3",
      "startDate": "APR’ 2007",
      "completionDate": "APR’ 2009",
      "consultant": "AUROSERVICE CONSULTANTS PRIVATE LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "nivasan-bliss",
    "name": "NIVASAN BLISS",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of NIVASAN BLISS in COIMBATORE.",
    "details": {
      "client": "MR ANWAR CLASSIC TOWERS",
      "area": "30000 SFT",
      "floors": "4 + GROUND",
      "startDate": "APR’ 2006",
      "completionDate": "APR’ 2008",
      "consultant": "CLIENT ENGINEER"
    },
    "gallery": []
  },
  {
    "slug": "mahatma-montessori-school",
    "name": "MAHATMA MONTESSORI SCHOOL",
    "category": "HEALTHCARE",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of MAHATMA MONTESSORI SCHOOL in COIMBATORE.",
    "details": {
      "client": "SRI RAMAKRISHNA DENTAL COLLEGE",
      "area": "133000 SFT",
      "floors": "3",
      "startDate": "APR’ 2005",
      "completionDate": "APR’ 2006",
      "consultant": "BRITTO ILANGO ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "sri-ramakrishna-institute-of-technology",
    "name": "SRI RAMAKRISHNA INSTITUTE OF TECHNOLOGY",
    "category": "INSTITUTIONAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SRI RAMAKRISHNA INSTITUTE OF TECHNOLOGY in COIMBATORE.",
    "details": {
      "client": "SRI RAMAKRISHNA DENTAL COLLEGE",
      "area": "133000 SFT",
      "floors": "3",
      "startDate": "APR’ 2005",
      "completionDate": "APR’ 2006",
      "consultant": "BRITTO ILANGO ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "sri-ramakrishna-engineering-college",
    "name": "SRI RAMAKRISHNA ENGINEERING COLLEGE",
    "category": "COMMERCIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SRI RAMAKRISHNA ENGINEERING COLLEGE in COIMBATORE.",
    "details": {
      "client": "LAKSHMI PRIYA",
      "area": "27,024 SFT",
      "floors": "4",
      "startDate": "DEC’ 2022",
      "completionDate": "Jan 2026",
      "consultant": "MAHESH ARCHITECT & INTERIOR DESIGNERS"
    },
    "gallery": []
  },
  {
    "slug": "sri-ramakrishna-polytechnic",
    "name": "SRI RAMAKRISHNA POLYTECHNIC",
    "category": "COMMERCIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SRI RAMAKRISHNA POLYTECHNIC in COIMBATORE.",
    "details": {
      "client": "VELMURUGA ENTERPRISES PRIVATE LIMITED",
      "area": "204,700 SFT",
      "floors": "6",
      "startDate": "JUL’ 2023",
      "completionDate": "Jan2025",
      "consultant": "TAAMAESEK ENGINEERING CONSORTIUM (TMA)"
    },
    "gallery": []
  },
  {
    "slug": "world-community-service-centre",
    "name": "WORLD COMMUNITY SERVICE CENTRE",
    "category": "COMMERCIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of WORLD COMMUNITY SERVICE CENTRE in COIMBATORE.",
    "details": {
      "client": "PNR PRIME REALITY LIMITED",
      "area": "31,700 SFT",
      "floors": "4",
      "startDate": "JAN’ 2022",
      "completionDate": "Jan2025",
      "consultant": "INFORM ARCHTECTS"
    },
    "gallery": []
  },
  {
    "slug": "sri-krishna-college-of-technology-girls-hostel",
    "name": "SRI KRISHNA COLLEGE OF TECHNOLOGY- GIRLS HOSTEL",
    "category": "HEALTHCARE",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SRI KRISHNA COLLEGE OF TECHNOLOGY- GIRLS HOSTEL in COIMBATORE.",
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
    "slug": "svb-tech-park",
    "name": "SVB TECH PARK",
    "category": "HEALTHCARE",
    "location": "PONDICHERRY",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of SVB TECH PARK in PONDICHERRY.",
    "details": {
      "client": "SRI BALAJI VIDYAPEETH",
      "area": "2,37,000 SFT",
      "floors": "9",
      "startDate": "SEP’ 2022",
      "completionDate": "Aug 2024",
      "consultant": "SANKAR & ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "global-tech-park-private-limited-think-campus",
    "name": "GLOBAL TECH PARK PRIVATE LIMITED (THINK CAMPUS)",
    "category": "HEALTHCARE",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of GLOBAL TECH PARK PRIVATE LIMITED (THINK CAMPUS) in COIMBATORE.",
    "details": {
      "client": "KOVAI MEDICAL CENTER AND HOSPITAL",
      "area": "93,000 SFT",
      "floors": "6",
      "startDate": "SEP’ 2022",
      "completionDate": "July 2024",
      "consultant": "SANKAR & ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "rak-s-pallikkoodam",
    "name": "RAK’S Pallikkoodam",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of RAK’S Pallikkoodam in COIMBATORE.",
    "details": {
      "client": "INTEGRA AUTOMATION PRIVATE LIMITED UNIT–IV",
      "area": "82000 SFT",
      "floors": "GF",
      "startDate": "Dec 2018",
      "completionDate": "Mar 2021",
      "consultant": "SABARIANAND M E"
    },
    "gallery": []
  },
  {
    "slug": "c-s-siddharth",
    "name": "C.S.SIDDHARTH",
    "category": "COMMERCIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of C.S.SIDDHARTH in COIMBATORE.",
    "details": {
      "client": "THE PRESIDENT INDIAN COTTON FEDERATION",
      "area": "25,000 SFT",
      "floors": "3",
      "startDate": "Dec-2017",
      "completionDate": "July-2020",
      "consultant": "ARUN & ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "mrs-kanagarathinam",
    "name": "MRS KANAGARATHINAM",
    "category": "INDUSTRIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of MRS KANAGARATHINAM in COIMBATORE.",
    "details": {
      "client": "MR SUKUMAN & M/S ADITYA EDUCATIONAL TRUST",
      "area": "140000 SFT",
      "floors": "GF",
      "startDate": "June 2019",
      "completionDate": "July 2020",
      "consultant": "JEYAM CONSULTANTS PRIVATE LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "nivasan-swarnapuraa",
    "name": "NIVASAN SWARNAPURAA",
    "category": "RESIDENTIAL",
    "location": "CHENNAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of NIVASAN SWARNAPURAA in CHENNAI.",
    "details": {
      "client": "SOMA ENTERPRISES LIMITED SOMA MERIT",
      "area": "24000 SFT",
      "floors": "4",
      "startDate": "Jun 2013",
      "completionDate": "Aug 2015",
      "consultant": "C SUBBA RAO ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "shriram-122",
    "name": "SHRIRAM 122",
    "category": "RESIDENTIAL",
    "location": "CHENNAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of SHRIRAM 122 in CHENNAI.",
    "details": {
      "client": "SHREE VELU BUILDERS PRIVATE LIMITED",
      "area": "520000 SFT",
      "floors": "14",
      "startDate": "Jul 2010",
      "completionDate": "Jul 2013",
      "consultant": "FOARCONS"
    },
    "gallery": []
  },
  {
    "slug": "nivasan-udhyana",
    "name": "NIVASAN UDHYANA",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of NIVASAN UDHYANA in COIMBATORE.",
    "details": {
      "client": "NIVASAN HOMES PRIVATE LIMITED",
      "area": "33,000 SFT",
      "floors": "5",
      "startDate": "DEC’ 2022",
      "completionDate": "MAY '2025",
      "consultant": "VESTA ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-factory-building",
    "name": "CONSTRUCTION OF FACTORY BUILDING",
    "category": "INSTITUTIONAL",
    "location": "MADURAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of CONSTRUCTION OF FACTORY BUILDING in MADURAI.",
    "details": {
      "client": "MAHATMA MONTESSORI SCHOOL",
      "area": "203000 SFT",
      "floors": "3",
      "startDate": "Aug-2010",
      "completionDate": "Jul-2012",
      "consultant": "PRASAD N YADAV"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-industry-building",
    "name": "CONSTRUCTION OF INDUSTRY BUILDING",
    "category": "INSTITUTIONAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of CONSTRUCTION OF INDUSTRY BUILDING in COIMBATORE.",
    "details": {
      "client": "SNR SONS CHARITABLE TRUST",
      "area": "1,75,000 SFT",
      "floors": "3",
      "startDate": "2000",
      "completionDate": "2002",
      "consultant": "BRITTO ILANGO ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-a-factory-building",
    "name": "CONSTRUCTION OF A FACTORY BUILDING",
    "category": "INSTITUTIONAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of CONSTRUCTION OF A FACTORY BUILDING in COIMBATORE.",
    "details": {
      "client": "SNR SONS CHARITABLE TRUST",
      "area": "1,84,000 SFT",
      "floors": "2",
      "startDate": "1996",
      "completionDate": "1998",
      "consultant": "SANKAR & ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-sand-reclamation-unit",
    "name": "CONSTRUCTION OF SAND RECLAMATION UNIT",
    "category": "INSTITUTIONAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Completed",
    "description": "Construction of CONSTRUCTION OF SAND RECLAMATION UNIT in COIMBATORE.",
    "details": {
      "client": "SNR SONS CHARITABLE TRUST",
      "area": "70,000 SFT",
      "floors": "3",
      "startDate": "1996",
      "completionDate": "1997",
      "consultant": "CLIENT ENGINEERS"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-new-expansion-building",
    "name": "CONSTRUCTION OF NEW EXPANSION BUILDING",
    "category": "INSTITUTIONAL",
    "location": "CHENNAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of CONSTRUCTION OF NEW EXPANSION BUILDING in CHENNAI.",
    "details": {
      "client": "WORLD COMMUNITY SERVICE CENTRE",
      "area": "10,400 SFT",
      "floors": "3",
      "startDate": "MAR’ 2022",
      "completionDate": "JUL '2023",
      "consultant": "M DHARMALINGAM ASSOCIATE"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-factory-building-and-allied-buildings-including-land-development-works",
    "name": "CONSTRUCTION OF FACTORY BUILDING AND ALLIED BUILDINGS INCLUDING LAND DEVELOPMENT WORKS",
    "category": "INSTITUTIONAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of CONSTRUCTION OF FACTORY BUILDING AND ALLIED BUILDINGS INCLUDING LAND DEVELOPMENT WORKS in COIMBATORE.",
    "details": {
      "client": "SRI KRISHNA COLLEGE OF TECHNOLOGY",
      "area": "84200 SFT",
      "floors": "4 +GF+TERACE",
      "startDate": "JAN’ 2023",
      "completionDate": "SEP'2025",
      "consultant": "PTK PROJECT CONSULTANTS"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-proposed-manufacturing-facility",
    "name": "CONSTRUCTION OF PROPOSED MANUFACTURING FACILITY",
    "category": "IT PARK",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of CONSTRUCTION OF PROPOSED MANUFACTURING FACILITY in COIMBATORE.",
    "details": {
      "client": "VELMURUGA ENTERPRISES PRIVATE LIMITED",
      "area": "240000 SFT",
      "floors": "10",
      "startDate": "Nov’ 2019",
      "completionDate": "Dec 2022",
      "consultant": "TAAMAESEK ENGINEERING CONSORTIUM"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-proposed-hospital-building-annexure-2-connecting-bridge-pump-room-fire-tank-collection-tank",
    "name": "CONSTRUCTION OF PROPOSED HOSPITAL BUILDING ANNEXURE - 2, CONNECTING BRIDGE, PUMP ROOM, FIRE TANK, COLLECTION TANK",
    "category": "IT PARK",
    "location": "BANGALORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of CONSTRUCTION OF PROPOSED HOSPITAL BUILDING ANNEXURE - 2, CONNECTING BRIDGE, PUMP ROOM, FIRE TANK, COLLECTION TANK in BANGALORE.",
    "details": {
      "client": "GLOBAL TECH PARK PRIVATE LIMITED",
      "area": "1013000 SFT",
      "floors": "9 +2B+G",
      "startDate": "OCT’ 2021",
      "completionDate": "Jan 2026",
      "consultant": "MIND SPACE"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-a-block-extension-building",
    "name": "CONSTRUCTION OF A BLOCK EXTENSION BUILDING",
    "category": "INSTITUTIONAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of CONSTRUCTION OF A BLOCK EXTENSION BUILDING in COIMBATORE.",
    "details": {
      "client": "SWETHA KRISHNAMURTHY",
      "area": "81000 SFT",
      "floors": "GF+3",
      "startDate": "SEP’ 2024",
      "completionDate": "SEP' 2026",
      "consultant": "INGENIO"
    },
    "gallery": []
  },
  {
    "slug": "multilevel-car-parking-nullah-drain-power-house-external-road-development",
    "name": "MULTILEVEL CAR PARKING, NULLAH DRAIN, POWER HOUSE, EXTERNAL ROAD DEVELOPMENT",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of MULTILEVEL CAR PARKING, NULLAH DRAIN, POWER HOUSE, EXTERNAL ROAD DEVELOPMENT in COIMBATORE.",
    "details": {
      "client": "MR C S SIDDHARTH",
      "area": "11,400 SFT",
      "floors": "1",
      "startDate": "MAR’ 2024",
      "completionDate": "JUY'2027",
      "consultant": "MRS BHARATHI SENGOTTUVEL"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-toilet-block",
    "name": "CONSTRUCTION OF TOILET BLOCK",
    "category": "RESIDENTIAL",
    "location": "PALANI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of CONSTRUCTION OF TOILET BLOCK in PALANI.",
    "details": {
      "client": "MR KANAGARATHINAM",
      "area": "9,500 SFT",
      "floors": "2",
      "startDate": "AUG’ 2024",
      "completionDate": "OCT' 2026",
      "consultant": "SANKAR & ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "aeh-existing-hospital-renovation-work",
    "name": "AEH - EXISTING HOSPITAL RENOVATION WORK",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of AEH - EXISTING HOSPITAL RENOVATION WORK in COIMBATORE.",
    "details": {
      "client": "NIVASAN HOMES PRIVATE LIMITED",
      "area": "93,500 SFT",
      "floors": "1",
      "startDate": "MAY’ 2024",
      "completionDate": "OCT' 2026",
      "consultant": "VESTA ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-compound-wall",
    "name": "CONSTRUCTION OF COMPOUND WALL",
    "category": "RESIDENTIAL",
    "location": "CHENNAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of CONSTRUCTION OF COMPOUND WALL in CHENNAI.",
    "details": {
      "client": "SHRI VISION ELEVATION PRIVATE LIMITED",
      "area": "13,40,200 SFT",
      "floors": "19",
      "startDate": "JUN ’ 2025",
      "completionDate": "JUN '2028",
      "consultant": "/ DESIGN REALM"
    },
    "gallery": []
  },
  {
    "slug": "the-construction-of-proposed-pediatric-hospital-k-block-alteration-additional-work-in-the-existing-hospital-premises-at-coimbatore-for-m-s-kovai-medical-center-and-hospital-coimbatore",
    "name": "THE CONSTRUCTION OF PROPOSED PEDIATRIC HOSPITAL 'K' BLOCK & ALTERATION, ADDITIONAL WORK IN THE EXISTING HOSPITAL PREMISES AT COIMBATORE FOR M/S. KOVAI MEDICAL CENTER AND HOSPITAL, COIMBATORE",
    "category": "RESIDENTIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of THE CONSTRUCTION OF PROPOSED PEDIATRIC HOSPITAL 'K' BLOCK & ALTERATION, ADDITIONAL WORK IN THE EXISTING HOSPITAL PREMISES AT COIMBATORE FOR M/S. KOVAI MEDICAL CENTER AND HOSPITAL, COIMBATORE in COIMBATORE.",
    "details": {
      "client": "NIVASAN HOMES PRIVATE LIMITED",
      "area": "331,314 SFT",
      "floors": "VB+GF +2 , RHB +GF+1, B+GF,3",
      "startDate": "JAN’ 2021",
      "completionDate": "---",
      "consultant": "SENSCAPE ARCHITECTS PRIVATE LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-school-building",
    "name": "CONSTRUCTION OF SCHOOL BUILDING",
    "category": "INDUSTRIES",
    "location": "MYSORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of CONSTRUCTION OF SCHOOL BUILDING in MYSORE.",
    "details": {
      "client": "WALKAROO INDUSTRIES",
      "area": "72000SFT",
      "floors": "GF",
      "startDate": "AUG' 2024",
      "completionDate": "JUN '2026",
      "consultant": "PTK PROJECT CONSULTANTS LLP"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-allied-health-science-building",
    "name": "CONSTRUCTION OF ALLIED HEALTH SCIENCE BUILDING",
    "category": "INDUSTRIES",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of CONSTRUCTION OF ALLIED HEALTH SCIENCE BUILDING in COIMBATORE.",
    "details": {
      "client": "AMERICAN AUTO SERVICE PRIVATE LIMITED",
      "area": "27000SFT",
      "floors": "GF + 1 FLOOR",
      "startDate": "DEC' 2024",
      "completionDate": "Oct 2026",
      "consultant": "SHRI LAKSHMI PROJECT MANAGEMENT AND CONSULTANCY SERVICE"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-e8-block",
    "name": "CONSTRUCTION OF E8 BLOCK",
    "category": "INDUSTRIES",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of CONSTRUCTION OF E8 BLOCK in COIMBATORE.",
    "details": {
      "client": "L G BALAKRISHNAN & BROS LIMITED CORPORATE",
      "area": "71300SFT",
      "floors": "GF + MEZZANINE FLOOR",
      "startDate": "FEB' 2025",
      "completionDate": "SEP' 2026",
      "consultant": "VESTA ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-commercial-building",
    "name": "CONSTRUCTION OF COMMERCIAL BUILDING",
    "category": "INDUSTRIES",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of CONSTRUCTION OF COMMERCIAL BUILDING in COIMBATORE.",
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
    "slug": "construction-of-it-building-olympia-elite",
    "name": "CONSTRUCTION OF IT BUILDING \"OLYMPIA ELITE\"",
    "category": "INDUSTRIES",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of CONSTRUCTION OF IT BUILDING \"OLYMPIA ELITE\" in COIMBATORE.",
    "details": {
      "client": "SRI RANGANATHER VALVES & CONTROLS (P)LIMITED",
      "area": "16000 SFT",
      "floors": "GROUND FLOOR",
      "startDate": "Jun 2025",
      "completionDate": "OCT''2026",
      "consultant": "M DHARMALINGAM ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-office-building",
    "name": "CONSTRUCTION OF OFFICE BUILDING",
    "category": "INDUSTRIES",
    "location": "MADATHUKKULAM",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of CONSTRUCTION OF OFFICE BUILDING in MADATHUKKULAM.",
    "details": {
      "client": "VENKATALAKSHMI PAPER AND BOARDS LIMITED",
      "area": "1590SFT",
      "floors": "GROUND FLOOR",
      "startDate": "SEP'2025",
      "completionDate": "NOV'2026",
      "consultant": "SABARI ANAND"
    },
    "gallery": []
  },
  {
    "slug": "civil-structure-and-finishes-works-for-proposed-hotel-development-brigade-fairfield",
    "name": "CIVIL STRUCTURE AND FINISHES WORKS FOR PROPOSED HOTEL DEVELOPMENT - BRIGADE FAIRFIELD",
    "category": "INDUSTRIES",
    "location": "HOSUR",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of CIVIL STRUCTURE AND FINISHES WORKS FOR PROPOSED HOTEL DEVELOPMENT - BRIGADE FAIRFIELD in HOSUR.",
    "details": {
      "client": "L G BALAKRISHNAN & BROS LIMITED CORPORATE",
      "area": "273155.38SFT",
      "floors": "GROUND FLOOR",
      "startDate": "SEP'2025",
      "completionDate": "MAY'2027",
      "consultant": "VESTA ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "civil-structural-finishing-external-and-plumbing-works-construction-of-commercial-building",
    "name": "CIVIL, STRUCTURAL, FINISHING, EXTERNAL AND PLUMBING WORKS - CONSTRUCTION OF COMMERCIAL BUILDING",
    "category": "INDUSTRIES",
    "location": "CHENNAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of CIVIL, STRUCTURAL, FINISHING, EXTERNAL AND PLUMBING WORKS - CONSTRUCTION OF COMMERCIAL BUILDING in CHENNAI.",
    "details": {
      "client": "SRI DHANALAKSHMI INDUSTRIES",
      "area": "30000SFT",
      "floors": "GROUND+FF",
      "startDate": "Nov 2025",
      "completionDate": "JAN'2027",
      "consultant": "FIRM TERRA"
    },
    "gallery": []
  },
  {
    "slug": "civil-structural-architectural-finishing-including-plumbing-works-for-commercial-building",
    "name": "CIVIL, STRUCTURAL, ARCHITECTURAL, FINISHING INCLUDING PLUMBING WORKS FOR COMMERCIAL BUILDING",
    "category": "INDUSTRIES",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of CIVIL, STRUCTURAL, ARCHITECTURAL, FINISHING INCLUDING PLUMBING WORKS FOR COMMERCIAL BUILDING in COIMBATORE.",
    "details": {
      "client": "STYLCOVE MODULARS PRIVATE LIMITED",
      "area": "550000SFT",
      "floors": "---",
      "startDate": "JAN' 2026",
      "completionDate": "DEC'2026",
      "consultant": "GLEEDS CONSULTING (INDIA) PRIVATE LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "remodeling-of-hall-f-at-codissia",
    "name": "REMODELING OF HALL F AT CODISSIA",
    "category": "HEALTHCARE",
    "location": "PUDUCHERRY",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of REMODELING OF HALL F AT CODISSIA in PUDUCHERRY.",
    "details": {
      "client": "SRI BALAJI VIDYAPEETH",
      "area": "237000SFT",
      "floors": "GF+ 9 FLOORS",
      "startDate": "SEP' 2022",
      "completionDate": "SEPT' 2026",
      "consultant": "SANKAR & ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "civil-structural-finishing-works-and-external-development-excl-earthwork",
    "name": "CIVIL, STRUCTURAL & FINISHING WORKS AND EXTERNAL DEVELOPMENT (EXCL. EARTHWORK)",
    "category": "HEALTHCARE",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of CIVIL, STRUCTURAL & FINISHING WORKS AND EXTERNAL DEVELOPMENT (EXCL. EARTHWORK) in COIMBATORE.",
    "details": {
      "client": "PSG & SONS CHARITIES",
      "area": "200000SFT",
      "floors": "2nd + 8 floors",
      "startDate": "DEC' 2022",
      "completionDate": "NOV' 2026",
      "consultant": "MITHRAN STRUCTURES (P) LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-precast-building",
    "name": "CONSTRUCTION OF PRECAST BUILDING",
    "category": "HEALTHCARE",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of CONSTRUCTION OF PRECAST BUILDING in COIMBATORE.",
    "details": {
      "client": "KOVAI MEDICAL CENTER AND HOSPITAL",
      "area": "11,700 SFT",
      "floors": "Below Ground Level 9.12m Depth",
      "startDate": "SEP' 2025",
      "completionDate": "NOV' 2026",
      "consultant": "SANKAR & ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "proposed-construction-of-it-building-cast-in-situ-precast-building-olympia-vidagara",
    "name": "PROPOSED CONSTRUCTION OF IT BUILDING (CAST IN SITU) & PRECAST BUILDING \"OLYMPIA VIDAGARA\"",
    "category": "HEALTHCARE",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of PROPOSED CONSTRUCTION OF IT BUILDING (CAST IN SITU) & PRECAST BUILDING \"OLYMPIA VIDAGARA\" in COIMBATORE.",
    "details": {
      "client": "PSG & SONS CHARITIES",
      "area": "10200 SFT",
      "floors": "Ground Floor+ First floor",
      "startDate": "NOV'2025",
      "completionDate": "AUG' 2026",
      "consultant": "MITHRAN STRUCTURES (P) LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "proposed-commercial-for-aditya-office-spaces-at-coimbatore",
    "name": "PROPOSED COMMERCIAL FOR ADITYA OFFICE SPACES AT COIMBATORE",
    "category": "HEALTHCARE",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of PROPOSED COMMERCIAL FOR ADITYA OFFICE SPACES AT COIMBATORE in COIMBATORE.",
    "details": {
      "client": "GOVEL TRUST ARAVIND EYE HOSPITAL",
      "area": "---",
      "floors": "---",
      "startDate": "NOV'2025",
      "completionDate": "SEP'2026",
      "consultant": "DESIGN COLLABORATIVE CONSULTANT"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-a-residential-building",
    "name": "CONSTRUCTION OF A RESIDENTIAL BUILDING",
    "category": "HEALTHCARE",
    "location": "MADURAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of CONSTRUCTION OF A RESIDENTIAL BUILDING in MADURAI.",
    "details": {
      "client": "VADAMALAYAN HOSPITAL",
      "area": "910 MTRS",
      "floors": "Compound Wall -910 MTRS",
      "startDate": "NOV'2025",
      "completionDate": "SEP''2026",
      "consultant": "MADURAI ES CONSULTANCY SERVICES (P) LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-residential-villas-swarnapura",
    "name": "CONSTRUCTION OF RESIDENTIAL VILLAS \"SWARNAPURA\"",
    "category": "HEALTHCARE",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of CONSTRUCTION OF RESIDENTIAL VILLAS \"SWARNAPURA\" in COIMBATORE.",
    "details": {
      "client": "KOVAI MEDICAL CENTER AND HOSPITAL",
      "area": "340,000.FT",
      "floors": "----",
      "startDate": "JUN'2026",
      "completionDate": "MAY'2028",
      "consultant": "SANKAR ASSOCIATES"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-residential-building-at-kalapatti-coimbatore",
    "name": "CONSTRUCTION OF RESIDENTIAL BUILDING AT KALAPATTI, COIMBATORE",
    "category": "INSTITUTIONAL",
    "location": "COONOOR TALUK",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of CONSTRUCTION OF RESIDENTIAL BUILDING AT KALAPATTI, COIMBATORE in COONOOR TALUK.",
    "details": {
      "client": "SAI SARANAGATHI CHARITABLE FOUNDATION",
      "area": "51,000SFT",
      "floors": "GF + 1 Floors",
      "startDate": "JUNE' 2024",
      "completionDate": "NOV' 2026",
      "consultant": "AMACE PROJECTS (P) LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-maharaja-bungalow-at-palayamkottai-tirunelveli-for-m-s-tvs-holdings-ltd",
    "name": "CONSTRUCTION OF MAHARAJA BUNGALOW AT PALAYAMKOTTAI, TIRUNELVELI FOR M/S. TVS HOLDINGS LTD.",
    "category": "INSTITUTIONAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of CONSTRUCTION OF MAHARAJA BUNGALOW AT PALAYAMKOTTAI, TIRUNELVELI FOR M/S. TVS HOLDINGS LTD. in COIMBATORE.",
    "details": {
      "client": "DR NGP RESEARCH AND EDUCATIONAL TRUST",
      "area": "170,000SFT",
      "floors": "BF+ GF + 7 Floors",
      "startDate": "AUG' 2024",
      "completionDate": "JAN' 2027",
      "consultant": "SENTHIL ASSOCIATES CONSULTANTS ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-residential-apartment-shriram-122",
    "name": "CONSTRUCTION OF RESIDENTIAL APARTMENT - SHRIRAM 122",
    "category": "INSTITUTIONAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of CONSTRUCTION OF RESIDENTIAL APARTMENT - SHRIRAM 122 in COIMBATORE.",
    "details": {
      "client": "SWETHAKRISHNAMURTHY",
      "area": "81,000 SFT",
      "floors": "GF + 3 Floors",
      "startDate": "SEP' 2024",
      "completionDate": "SEP' 2026",
      "consultant": "INGENIO"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-ashram",
    "name": "CONSTRUCTION OF ASHRAM",
    "category": "INSTITUTIONAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of CONSTRUCTION OF ASHRAM in COIMBATORE.",
    "details": {
      "client": "PSG & SONS CHARITIES",
      "area": "131,800SFT",
      "floors": "GF + 6 Floors",
      "startDate": "DEC' 2024",
      "completionDate": "SEP '2026",
      "consultant": "MITHRAN STRUCTURES (P) LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "residential-development-mysore-toys-at-kalidasar-road-mysore",
    "name": "RESIDENTIAL DEVELOPMENT \"MYSORE TOYS\" AT KALIDASAR ROAD, MYSORE",
    "category": "COMMERCIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of RESIDENTIAL DEVELOPMENT \"MYSORE TOYS\" AT KALIDASAR ROAD, MYSORE in COIMBATORE.",
    "details": {
      "client": "MR & MRS MANI R KASTHURI",
      "area": "11,500SFT",
      "floors": "GF + 3 Floors",
      "startDate": "MAR' 2024",
      "completionDate": "SEPT' 2026",
      "consultant": "VESTA ARCHITECTS"
    },
    "gallery": []
  },
  {
    "slug": "residential-apartment-nivasan-vakulam-at-coimbatore",
    "name": "RESIDENTIAL APARTMENT \"NIVASAN VAKULAM\" AT COIMBATORE",
    "category": "COMMERCIAL",
    "location": "CHENNAI",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of RESIDENTIAL APARTMENT \"NIVASAN VAKULAM\" AT COIMBATORE in CHENNAI.",
    "details": {
      "client": "ALWARPET PROPERTIES PRIVATE LIMITED",
      "area": "144,000SFT",
      "floors": "BF+GF+ 6 Floors",
      "startDate": "OCT' 2024",
      "completionDate": "SEPT 2026",
      "consultant": "RSP DESIGN CONSULTANTS (INDIA) PRIVATE LIMITED"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-residential-apartment-revantha-skyden-at-kongu-nagar-kalapatti-for-m-s-revantha-services-private-limited",
    "name": "CONSTRUCTION OF RESIDENTIAL APARTMENT \"REVANTHA SKYDEN\" AT KONGU NAGAR, KALAPATTI FOR M/S. REVANTHA SERVICES PRIVATE LIMITED",
    "category": "COMMERCIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of CONSTRUCTION OF RESIDENTIAL APARTMENT \"REVANTHA SKYDEN\" AT KONGU NAGAR, KALAPATTI FOR M/S. REVANTHA SERVICES PRIVATE LIMITED in COIMBATORE.",
    "details": {
      "client": "FOCUS 4D CAREER EDUCATION PRIVATE LIMITED",
      "area": "10,000SFT",
      "floors": "GF+ 3 Floors",
      "startDate": "NOV' 2025",
      "completionDate": "SEP' 2026",
      "consultant": "INTERFACE ARCHTECTURE"
    },
    "gallery": []
  },
  {
    "slug": "construction-of-ganga-hostel-for-m-s-psg-college-of-arts-science-coimbatore",
    "name": "CONSTRUCTION OF GANGA HOSTEL FOR M/S. PSG COLLEGE OF ARTS & SCIENCE, COIMBATORE.",
    "category": "COMMERCIAL",
    "location": "COIMBATORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of CONSTRUCTION OF GANGA HOSTEL FOR M/S. PSG COLLEGE OF ARTS & SCIENCE, COIMBATORE. in COIMBATORE.",
    "details": {
      "client": "VEEKESY FOOTCARE (INDIA) PRIVATE LIMITED",
      "area": "7,000SFT",
      "floors": "GF",
      "startDate": "JAN' 2025",
      "completionDate": "AUG' 2026",
      "consultant": "INNERSPACE"
    },
    "gallery": []
  },
  {
    "slug": "all-civil-works-roads-and-culverts-water-and-sewer-works-including-treatment-tanks-and-structures-landscape-works-and-all-other-auxiliary-works-housing-hostel-block-at-madurai-for-m-s-aravind-eye-hospital",
    "name": "ALL CIVIL WORKS, ROADS AND CULVERTS, WATER AND SEWER WORKS INCLUDING TREATMENT TANKS AND STRUCTURES, LANDSCAPE WORKS AND ALL OTHER AUXILIARY WORKS - HOUSING & HOSTEL BLOCK AT MADURAI FOR M/S. ARAVIND EYE HOSPITAL",
    "category": "COMMERCIAL",
    "location": "BANGALORE",
    "imageUrl": "MANUAL_MAPPING_REQUIRED",
    "status": "Ongoing",
    "description": "Construction of ALL CIVIL WORKS, ROADS AND CULVERTS, WATER AND SEWER WORKS INCLUDING TREATMENT TANKS AND STRUCTURES, LANDSCAPE WORKS AND ALL OTHER AUXILIARY WORKS - HOUSING & HOSTEL BLOCK AT MADURAI FOR M/S. ARAVIND EYE HOSPITAL in BANGALORE.",
    "details": {
      "client": "BRIGADE HOTEL VENTURES LIMITED",
      "area": "285,000 SFT",
      "floors": "B1+B2+GF+13 Floors",
      "startDate": "SEP' 2025",
      "completionDate": "MAY' 2027",
      "consultant": "RAJINDER KUMAR ASSOCIATES"
    },
    "gallery": []
  }
];

export const featuredProjectsList = projectsList.slice(0, 6);
