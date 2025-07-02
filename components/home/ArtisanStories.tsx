// CORRECCIÓN: Se quitó el guion de 'use-client'. Debe ser 'use client'.
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const artisans = [
  {
    id: 1,
    name: 'María Quispe',
    specialty: 'Textiles de Alta Costura',
    image: 'https://images.pexels.com/photos/4498177/pexels-photo-4498177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    story: 'Desde niña, María aprendió de su abuela a tejer historias en tela. Hoy, sus diseños combinan símbolos ancestrales con una estética contemporánea, creando piezas únicas que narran la cosmovisión andina.',
    location: 'Quinua, Ayacucho',
  },
  {
    id: 2,
    name: 'José Cárdenas',
    specialty: 'Escultura en Piedra de Huamanga',
    image: 'https://images.pexels.com/photos/8102319/pexels-photo-8102319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    story: 'Como maestro de quinta generación, José libera figuras de la Piedra de Huamanga con una precisión legendaria. Su trabajo, que ha llegado a galerías internacionales, es un puente entre el pasado y el presente.',
    location: 'Huamanga, Ayacucho',
  },
  {
    id: 3,
    name: 'Manuel Huamán',
    specialty: 'Maestro de Retablos',
    image: 'https://images.pexels.com/photos/8101520/pexels-photo-8101520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    story: 'Los retablos de Manuel son universos en miniatura, llenos de color y vida. Plasman con detalle y cariño las festividades y la vida cotidiana de los Andes, combinando técnicas tradicionales con su innovadora visión.',
    location: 'San Juan Bautista, Ayacucho',
  }
];

export default function ArtisanStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === artisans.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => setCurrentIndex((prev) => (prev === 0 ? artisans.length - 1 : prev - 1));
  const goToNext = () => setCurrentIndex((prev) => (prev === artisans.length - 1 ? 0 : prev + 1));

  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Manos que Cuentan Historias
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Detrás de cada obra maestra hay una vida de dedicación. Conoce a los guardianes de nuestra tradición.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {artisans.map((artisan) => (
                <div key={artisan.id} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
                    <div className="p-8 sm:p-10 lg:p-12 flex flex-col">
                      <div>
                        <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">{artisan.specialty}</p>
                        <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-slate-900 mt-2">{artisan.name}</h3>
                        <div className="flex items-center text-sm text-slate-500 mt-2">
                          <MapPin className="h-4 w-4 mr-1.5" />
                          {artisan.location}
                        </div>
                        <p className="mt-6 text-slate-600 leading-relaxed text-base">
                          {artisan.story}
                        </p>
                      </div>
                      <div className="mt-8">
                        <Link 
                          href={`/artesanos/${artisan.id}`}
                          className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-emerald-600 rounded-lg shadow-md hover:bg-emerald-700 transition-transform transform hover:scale-105"
                        >
                          Explorar sus obras
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                    <div className="relative h-80 md:h-full min-h-[300px]">
                       <Image
                        src={artisan.image}
                        alt={artisan.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={goToPrevious} className="p-2 rounded-full text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors" aria-label="Artesano anterior">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex gap-2">
              {artisans.map((_, index) => (
                <button key={index} onClick={() => setCurrentIndex(index)} className={cn("h-2 rounded-full transition-all", currentIndex === index ? "w-6 bg-emerald-600" : "w-2 bg-slate-300 hover:bg-slate-400")} aria-label={`Ir a la historia ${index + 1}`} />
              ))}
            </div>
            <button onClick={goToNext} className="p-2 rounded-full text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors" aria-label="Siguiente artesano">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}