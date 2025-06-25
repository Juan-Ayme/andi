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
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
          
          {/* --- Columna Izquierda: Imagen con Estilo Dinámico --- */}
          <div className="relative h-[500px] transform -rotate-2 hover:rotate-0 transition-transform duration-500 ease-in-out">
            <div className="absolute inset-0 rounded-3xl shadow-2xl overflow-hidden">
              <Image
            src="https://www.mexicodesconocido.com.mx/wp-content/uploads/2021/10/MD_ArtesaniaBarro__%C2%A9Camacho_001-900x597.jpg"                alt="Artesano trabajando en taller tradicional"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent" />
            </div>
            
            {/* Tarjeta de testimonio 'Glassmorphism' */}
            <div className="absolute -bottom-8 -left-8 w-80 bg-white/70 backdrop-blur-lg p-5 rounded-2xl shadow-xl border border-white/50">
              <p className="text-sm text-slate-800 font-medium italic">
                "Cada pieza que creamos lleva nuestra historia, tradición y el alma de la comunidad."
              </p>
              <div className="mt-3 flex items-center">
                <div className="h-10 w-10 rounded-full overflow-hidden relative mr-3 border-2 border-white">
                  <Image
                    src="https://www.mexicodesconocido.com.mx/wp-content/uploads/2021/10/MD_ArtesaniaBarro__%C2%A9Camacho_001-900x597.jpg"                    alt="Retrato de artesano"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xs font-semibold text-slate-900">Manuel Huamán, Maestro Retablista</span>
              </div>
            </div>
          </div>
          
          {/* --- Columna Derecha: Contenido y Beneficios --- */}
          <div className="lg:pl-8">
            <h3 className="text-base font-semibold text-emerald-600 uppercase tracking-wider">Nuestra Misión</h3>
            <h2 className="mt-2 text-4xl font-extrabold text-slate-900 tracking-tight">Conectando Tradición e Innovación</h2>
            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              Nuestra plataforma nace para preservar el patrimonio cultural ayacuchano, creando oportunidades económicas sostenibles para los artesanos. Combinamos técnicas ancestrales con tecnología para llevar piezas únicas y personalizadas a hogares de todo el mundo.
            </p>
            
            {/* Bloques de Beneficios individuales */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                       <CheckCircle2 className="h-6 w-6 text-emerald-700" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-bold text-slate-900">{benefit.title}</h4>
                      <p className="mt-1 text-sm text-slate-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <Link 
                href="/nosotros" 
                className="inline-flex items-center justify-center px-7 py-3 text-base font-semibold text-white bg-emerald-600 rounded-lg shadow-md hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 active:scale-100"
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