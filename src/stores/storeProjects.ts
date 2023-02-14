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
      description:`El logotipo surge del mismo nombre de la tienda dado que es un nombre divertido y que facilita que en la hora de aplicarlo en diferentes apoyos la gente empiezo a verlo y reconozca fácilmente la tienda.
      Además al ser un negocio local, es muy importante el boca a boca y, por lo tanto, el propio nombre tiene que ser un elemento con mucho peso dentro de la identidad para la comunicación del negocio.
      Partiendo de esta idea jugamos con el nombre para darle el aspecto infantil y divertido que caracteriza una tienda para niños.
      El logotipo se puede aplicar de forma que funcione tanto añadiendo los elementos geométricos circulares como sin, para así poderse adaptar fácilmente a diferentes soportes. Por ejemplo, al momento de crear un sello con una sola tinta, se evitaría el uso de los círculos para que sea más claro y limpio, pero a la hora de aplicarlo a la rotulación añadiríamos los elementos circulares para complementar la marca.
      La tipografía se ha modificado eliminando los blancos de las letras para animarlos poniéndole ojos, incrementando así la parte divertida que queremos transmitir.`,
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
      description:"Rustic Fruits es una empresa familiar de agricultores dedicada a la producción agrícola de hortalizas y verduras de la huerta de Benicarló, con una experiencia de más de 70 años dedicados a la agricultura tradicional.",
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
      video: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/wyPqUSDElL8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      year: "2022",
    },
  ];
  return projects;
}
