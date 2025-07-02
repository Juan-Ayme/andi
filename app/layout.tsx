import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Providers } from '@/components/Providers';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter', 
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});

// --- INICIO DE LA CORRECCIÓN ---
export const metadata: Metadata = {
  title: 'ArteAndino.pe | Artesanía de Ayacucho, Perú',
  description: 'Descubre auténtica artesanía ayacuchana personalizada, conectando directamente con artesanos peruanos y preservando el patrimonio cultural andino.',
  
  // AÑADIR ESTO: La configuración del viewport es crucial para la responsividad
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1, // Opcional: previene que los usuarios hagan zoom accidentalmente
  },
};
// --- FIN DE LA CORRECCIÓN ---


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            {/* AJUSTE: He eliminado el "pt-5" de aquí para que el Hero ocupe toda la pantalla sin margen superior */}
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}