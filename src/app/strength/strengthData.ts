import { projectsList } from "@/data/projects";

export interface ClientItem {
  id: string;
  name: string;
  category: string;
  categoryId: string;
}

export interface ArchitectItem {
  id: string;
  name: string;
  category: string;
  categoryId: string;
}

// Generate clients dynamically
const clientsMap = new Map<string, ClientItem>();

projectsList.forEach((p, idx) => {
  if (p.details?.client) {
    if (!clientsMap.has(p.details.client)) {
      let catId = "corporate"; // default
      if (p.category === "INDUSTRIAL") catId = "industrial";
      if (p.category === "RESIDENTIAL") catId = "realestate";
      if (p.category === "HEALTHCARE") catId = "healthcare";
      if (p.category === "INSTITUTIONAL") catId = "education";

      clientsMap.set(p.details.client, {
        id: `client-${idx}`,
        name: p.details.client,
        category: p.category || "Corporate, Retail & Hospitality",
        categoryId: catId
      });
    }
  }
});

export const fullClientsList: ClientItem[] = Array.from(clientsMap.values()).sort((a, b) => a.name.localeCompare(b.name));

// Generate architects dynamically
const architectsMap = new Map<string, ArchitectItem>();

projectsList.forEach((p, idx) => {
  if (p.details?.consultant) {
    if (!architectsMap.has(p.details.consultant)) {
      
      // Typical inferences
      let catId = "design";
      let cat = "Architects & Design Studios";

      if (p.details.consultant.includes("ENGINEER") || p.details.consultant.includes("STRUCTURAL")) {
        catId = "engineering";
        cat = "Structural & Engineering Consultants";
      } else if (p.details.consultant.includes("PROJECT MANAGEMENT") || p.details.consultant.includes("CONSULT")) {
        catId = "planning";
        cat = "Project Management & Planning";
      } else if (p.details.consultant.includes("ADVISORY") || p.details.consultant.includes("CONSULTANT")) {
        catId = "advisory";
        cat = "General Consulting & Advisory";
      }

      architectsMap.set(p.details.consultant, {
        id: `arch-${idx}`,
        name: p.details.consultant,
        category: cat,
        categoryId: catId
      });
    }
  }
});

export const fullArchitectsList: ArchitectItem[] = Array.from(architectsMap.values()).sort((a, b) => a.name.localeCompare(b.name));
