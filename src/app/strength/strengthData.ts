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
      const pCat = p.category ? p.category.toLowerCase().trim() : "";
      if (pCat === "industrial") catId = "industrial";
      if (pCat === "residential") catId = "realestate";
      if (pCat === "healthcare") catId = "healthcare";
      if (pCat === "institutional") catId = "education";

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

      const cons = p.details.consultant.toLowerCase();
      if (cons.includes("engineer") || cons.includes("structural")) {
        catId = "engineering";
        cat = "Structural & Engineering Consultants";
      } else if (cons.includes("project management") || cons.includes("consult")) {
        catId = "planning";
        cat = "Project Management & Planning";
      } else if (cons.includes("advisory") || cons.includes("consultant")) {
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
