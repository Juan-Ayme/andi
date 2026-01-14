// CORRECCIÓN: Se quitó el guion de 'use-client'. Debe ser 'use client'.
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

  const currentArtisan = artisans[currentIndex];

  return (
    <section className="bg-white dark:bg-neutral-950 py-24 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-100 rounded-full blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3 block">Guardianes de la Tradición</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight leading-tight">
            Manos que Cuentan Historias
          </h2>
          <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
            Detrás de cada obra maestra hay una vida de dedicación. Explora el legado vivo de nuestros maestros artesanos.
          </p>
        </div>

        <div className="relative">
          {/* Card Container */}
          {/* Card Container */}
          <div className="bg-neutral-50 dark:bg-neutral-900 rounded-[2rem] shadow-2xl overflow-hidden border border-neutral-100 dark:border-neutral-800 relative min-h-[600px] md:min-h-[500px]">
            {artisans.map((artisan, index) => (
              <div
                key={artisan.id}
                className={cn(
                  "absolute inset-0 grid grid-cols-1 lg:grid-cols-2 transition-all duration-1000 ease-in-out",
                  currentIndex === index ? "opacity-100 z-10 translate-x-0" : "opacity-0 z-0 translate-x-8 pointer-events-none"
                )}
              >
                {/* Image Side */}
                <div className="relative h-64 lg:h-full overflow-hidden group">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-neutral-900/10"></div>
                  <Image
                    src={artisan.image}
                    alt={artisan.name}
                    fill
                    className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                    priority={index === 0}
                  />
                  {/* Mobile Badge Overlay */}
                  <div className="absolute bottom-4 left-4 z-20 lg:hidden">
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary-500 text-white text-xs font-bold uppercase tracking-wider shadow-md">
                      {artisan.specialty}
                    </span>
                  </div>
                </div>

                {/* Text Side */}
                <div className="relative p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white dark:bg-neutral-900">
                  <div className={cn(
                    "transition-all duration-1000 delay-300",
                    currentIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}>
                    <Quote className="h-10 w-10 md:h-12 md:w-12 text-primary-200 mb-4 md:mb-6" />

                    <div className="hidden lg:block mb-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-secondary-100 dark:bg-secondary-900/30 text-secondary-800 dark:text-secondary-300 text-xs font-bold uppercase tracking-wider">
                        {artisan.specialty}
                      </span>
                    </div>

                    <h3 className="font-playfair text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-2">
                      {artisan.name}
                    </h3>

                    <div className="flex items-center text-neutral-500 mb-6 md:mb-8 text-sm md:text-base">
                      <MapPin className="h-4 w-4 mr-2 text-primary-500" />
                      {artisan.location}
                    </div>

                    <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8 italic">
                      "{artisan.story}"
                    </p>

                    <Button asChild size="lg" className="w-full md:w-auto rounded-full bg-neutral-900 text-white hover:bg-primary-600 dark:bg-white dark:text-neutral-900 dark:hover:bg-primary-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                      <Link href={`/artesanos/${artisan.id}`}>
                        Explorar perfil <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Controls - Absolute on top */}
            <div className="absolute bottom-6 right-6 lg:bottom-12 lg:right-12 z-30 flex items-center gap-3">
              <button
                onClick={goToPrevious}
                className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-neutral-200/20 text-neutral-800 dark:text-white hover:bg-primary-500 hover:border-primary-500 hover:text-white transition-all shadow-lg"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={goToNext}
                className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-neutral-200/20 text-neutral-800 dark:text-white hover:bg-primary-500 hover:border-primary-500 hover:text-white transition-all shadow-lg"
                aria-label="Siguiente"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12 z-30 flex gap-2">
              {artisans.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-500 shadow-sm",
                    currentIndex === idx ? "w-8 bg-primary-500" : "w-2 bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400"
                  )}
                  aria-label={`Ir a historia ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}