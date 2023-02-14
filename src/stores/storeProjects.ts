import type { Project } from "@/models/project";

/* export interface Project {
  type: string,
  name: string,
  description: string,
  photo: string[],  
  year: string
} */

export function storeProjects() {
  const projects: Project[] = [
    {
      type: "BRANDING",
      workFunction: "Identidad",
      name: "Arnau & Cutanda",
      description:
        "Arnau & Cutanda es un estudio de fotografía ubicado en Benicarló, Castellón. Tienen prinicpal enfoque en la fotogría para bodas y bebes. Captar momentos especiales, la esencia de las personas, lo artístico, la naturaleza y las composiciones atrevidas es lo que define su trabajo. Cuentan historias de amor y amistad a través de una imagen, siempre dándole su toque personal, natural, divertido y sincero.",
      photo: [
        "A&C/A&C.jpg",
        "A&C/A&C2.jpg",
        "A&C/A&C3.jpg",
        "A&C/A&C4.jpg",
        "A&C/A&C5.jpg",
      ],
      year: "2022",
    },

    {
      type: "CARTELERÍA",
      workFunction: "Campaña contra el acoso",
      name: "Fallas 2019",
      photo: ["falles/Cartel_Fallas.jpg"],
      year: "2019",
    },

    {
      type: "BRANDING",
      workFunction: "Identidad",
      name: "Bon Hogar",
      photo: [
        "bonHogar/Logo_BonHogar4.jpg",
        "bonHogar/Logo_BonHogar.jpg",
        "bonHogar/Logo_BonHogar1.jpg",
        "bonHogar/Logo_BonHogar2.jpg",
        "bonHogar/Logo_BonHogar3.jpg",
      ],
      year: "2021",
    },
    {
      type: "BRANDING",
      workFunction: "Identidad",
      name: "Peuets",
      photo: [
        "peuets/Logo_Peuets.jpg",
        "peuets/Logo_Peuets2.jpg",
        "peuets/Logo_Peuets3.jpg",
        "peuets/Logo_Peuets4.jpg",
      ],
      year: "2022",
    },
    {
      type: "BRANDING + DISEÑO WEB",
      workFunction: "Identidad + diseño web",
      name: "Rustic Fruits",
      photo: [
        "rusticFruits/Logo_RF.jpg",
        "rusticFruits/Mockup.jpg",
        "rusticFruits/Rustic_Fruits-web.jpg",
      ],
      year: "2020",
    },
    {
      type: "BRANDING + DISEÑO WEB",
      workFunction: "Identidad + diseño web",
      name: "BloMedic",
      photo: [
        "bloMedic/Logo_BM.jpg",
        "bloMedic/Logo RGB.png",
        "bloMedic/web.jpg",
      ],
      year: "2019",
    },
    {
      type: "CARTELERÍA",
      workFunction: "Campaña",
      name: "Volta a peu per la Igualtat",
      photo: ["volta/banner_web.jpg", "volta/volta.jpg"],
      year: "2021",
    },
    {
      type: "BRANDING + VÍDEO",
      workFunction: "Identidad + edición de vídeo",
      name: "Samuel Hus - Asesor Financiero",
      photo: ["samuel/samuel5.jpg", "samuel/samuel.jpg", "samuel/samuel4.jpg"],
      year: "2021",
    },
    {
      type: "DIRECCION DE ARTE + MAQUETACIÓN",
      workFunction: "Dirección y maquetación editorial",
      name: "Suculenta Magazine",
      photo: [
        "suculenta/DSC_6393.jpg",
        "suculenta/DSC_6420.jpg",
        "suculenta/DSC_6286.jpg",
      ],
      year: "2017",
    },
    {
      type: "DIRECCION DE ARTE + MAQUETACIÓN",
      workFunction: "Dirección y maquetación editorial",
      name: "Apple Faces",
      photo: [
        "appleFaces/Apple_Faces_Mar_Senen.jpg",
        "appleFaces/apple_faces_partes.jpg",
        "appleFaces/apple_faces_partes2.jpg",
        "appleFaces/apple_faces_partes3.jpg",
      ],
      year: "2020",
    },
    {
      type: "DESARROLLO CON VUE + NODE",
      workFunction: "Desarollo Full Stack",
      name: "Fixtoc",
      photo: [""],
      year: "2022",
    },
    {
      type: "DISEÑO UI/UX",
      workFunction: "Diseño de App",
      name: "PrintShare",
      photo: [
        "printShare/marca_Printershare.jpg",
        "printShare/pantallas.jpg",
        "printShare/pantallas2.jpg",
      ],
      video: "printShare/video_promo.mov",
      year: "2022",
    },
  ];
  return projects;
}
