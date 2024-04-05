import type { Metadata } from "next";
import "./src/components/styles/main.css";
import BgEffectContainer from "./src/components/layouts/BgEffectContainer";

export const metadata = {
  title: "Zenit- Landing Pages Profesionales para Marcas de Éxito",
  description: "Desarrollamos Landing Pages para Marcas de Alto Valor | SEO y Posicionamiento Web",
  tags: [
      "programador",
      "desarrollador web",
      "WordPress",
      "SEO",
      "posicionamiento",
      "páginas web",
      "landing pages",
      "desarrollo web",
      "diseño web",
      "optimización web",
      "Argentina",
      "Buenos Aires",
      "CABA",
      "WordPress Developer",
      "Desarrollo en WordPress",
      "Personalización de Temas WordPress",
      "Optimización SEO",
      "Posicionamiento Web",
      "SEO Local",
      "Palabras Clave",
      "Backlinks",
      "Diseño Web Responsivo",
      "Experiencia de Usuario",
      "Diseño de Interfaz",
      "Diseño de Sitios Web",
      "Desarrollo Web Personalizado",
      "Programación a Medida",
      "Soluciones Web a la Medida",
      "Marketing Online",
      "Contenido Web",
      "Estrategias de Contenido",
      "Redes Sociales",
      "Landing Pages para Marcas",
      "Landing Pages de Producto",
      "Optimización de Conversiones"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <div className="absolute h-full w-full overflow-hidden">
        <BgEffectContainer/>

        <div className=" aspect-square border top-3/4 -left-1/4 border-no-dark w-[900px] rounded-full absolute "></div>
        <div className=" aspect-square border top-96 -right-20 border-no-dark w-96 rounded-full absolute "></div>
        <div className=" aspect-square border top-1/3 -right-40 border-no-dark w-[600px] rounded-full absolute "></div>
        <div className=" aspect-square border top-1/4 right-1/2 border-no-dark w-32 rounded-full absolute "></div>
        <div className=" aspect-square border top-32 right-1/3 border-no-dark w-28 rounded-full absolute "></div>
        <div className=" aspect-square border top-3/4 right-1/4 border-no-dark w-28 rounded-full absolute "></div>
        <div className=" aspect-square border top-2/4 right-2/3 border-no-dark w-[400px] rounded-full absolute "></div>
        </div>
        {children}
      </body>
    </html>
  );
}
