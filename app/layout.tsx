import "./globals.css";
import BgStars from "./src/components/layouts/BgStars";
import BgEffectContainer from "./src/components/layouts/BgEffectContainer";
import Planets from "./src/components/layouts/Planets";

export const metadata = {
  title: "Páginas web profesionales para marcas de éxito",
  description:
    "Desarrollamos Páginas web para marcas de alto valor | SEO y Posicionamiento Web",
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
    "Página web",
    "Página Web",
    "Sitio Web",
    "Sitio web",
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
    "Optimización de Conversiones",
    "Página para negocio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="relative">
        <BgStars />
        <div className="absolute h-full w-full overflow-hidden">
          <BgEffectContainer />
          <Planets />
        </div>
        {children}
      </body>
    </html>
  );
}
