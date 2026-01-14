'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const benefits = [
  { id: 1, title: 'Artesanía Auténtica', description: 'Cada pieza certificada y elaborada por artesanos ayacuchanos.' },
  { id: 2, title: 'Personalización Única', description: 'Diseña tu propia pieza artesanal adaptada a tus gustos y necesidades.' },
  { id: 3, title: 'Impacto Social Directo', description: 'Tu compra apoya directamente a las familias artesanas y sus comunidades.' },
  { id: 4, title: 'Preservación Cultural', description: 'Ayudas a mantener vivas tradiciones ancestrales en riesgo de desaparecer.' }
];

export default function AboutSection() {
  return (
    <section className="bg-white dark:bg-black py-20 sm:py-28 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">

          {/* --- Columna Izquierda: Imagen con Estilo Dinámico --- */}
          <div className="relative h-[500px] transform -rotate-1 hover:rotate-0 transition-transform duration-700 ease-out">
            <div className="absolute inset-0 rounded-[2rem] shadow-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900">
              <Image
                src="https://www.mexicodesconocido.com.mx/wp-content/uploads/2021/10/MD_ArtesaniaBarro__%C2%A9Camacho_001-900x597.jpg"
                alt="Artesano trabajando en taller tradicional"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Tarjeta de testimonio 'Glassmorphism' */}
            <div className="absolute -bottom-8 -left-8 w-80 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/20 dark:border-neutral-700">
              <p className="text-sm text-neutral-800 dark:text-neutral-200 font-medium italic leading-relaxed">
                "Cada pieza que creamos lleva nuestra historia, tradición y el alma de la comunidad."
              </p>
              <div className="mt-4 flex items-center">
                <div className="h-10 w-10 rounded-full overflow-hidden relative mr-3 border-2 border-white dark:border-neutral-800 ring-2 ring-primary-100 dark:ring-primary-900/50">
                  <Image
                    src="https://www.mexicodesconocido.com.mx/wp-content/uploads/2021/10/MD_ArtesaniaBarro__%C2%A9Camacho_001-900x597.jpg"
                    alt="Retrato de artesano"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wide">Manuel Huamán</span>
              </div>
            </div>
          </div>

          {/* --- Columna Derecha: Contenido y Beneficios --- */}
          <div className="lg:pl-8">
            <h3 className="text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-3">Nuestra Misión</h3>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-neutral-900 dark:text-white tracking-tight leading-tight">
              Conectando Tradición e Innovación
            </h2>
            <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
              Nuestra plataforma nace para preservar el patrimonio cultural ayacuchano, creando oportunidades económicas sostenibles para los artesanos. Combinamos técnicas ancestrales con tecnología para llevar piezas únicas y personalizadas a hogares de todo el mundo.
            </p>

            {/* Bloques de Beneficios individuales */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="bg-neutral-50 dark:bg-neutral-900 p-5 rounded-2xl border border-neutral-100 dark:border-neutral-800 transition-colors duration-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-1">{benefit.title}</h4>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-snug">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/nosotros"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary-600 hover:bg-primary-700 rounded-full shadow-lg shadow-primary-600/20 hover:shadow-xl hover:shadow-primary-600/30 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Conoce nuestra historia
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}