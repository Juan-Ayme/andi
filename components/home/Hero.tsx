'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Star, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// Slider images
const slides = [
  {
    id: 1,
    image: 'https://blog.viajesmachupicchu.travel/wp-content/uploads/2025/04/artesanias-peruanas-portada-1.jpg',
    title: 'El Alma de los Andes en cada Pieza',
    subtitle: 'Conectando tradiciones milenarias con el diseño contemporáneo.',
    cta: 'Explorar Colección'
  },
  {
    id: 2,
    image: 'https://www.ytuqueplanes.com/imagenes//fotos/novedades/b-Artesan%C3%ADa-de-Ayacucho.webp',
    title: 'Maestría Artesanal de Ayacucho',
    subtitle: 'Cada obra es un testimonio vivo de nuestra herencia cultural.',
    cta: 'Conocer Artesanos'
  },
  {
    id: 3,
    image: 'https://d1ih8jugeo2m5m.cloudfront.net/2021/08/Manualidades-para-vender-thumbnail.jpg',
    title: 'Crea tu Propio Legado',
    subtitle: 'Personaliza piezas únicas junto a nuestros maestros artesanos.',
    cta: 'Personalizar Ahora'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000); // 7 seconds per slide

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-neutral-900">
      {/* Background Slider with Parallax */}
      <div
        className="absolute inset-0 transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }} // Parallax effect
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-all duration-1000 ease-in-out",
              currentSlide === index ? "opacity-100 scale-105" : "opacity-0 scale-100"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-950/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-neutral-950/30 z-10" />
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        {/* Animated dots pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="absolute top-32 left-10 animate-float-subtle">
          <Sparkles className="h-12 w-12 text-secondary-400 opacity-60 blur-sm" />
        </div>
        <div className="absolute bottom-32 right-20 animate-float-subtle" style={{ animationDelay: '2s' }}>
          <Star className="h-8 w-8 text-primary-400 opacity-40" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-full w-full pointer-events-none">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 flex items-center justify-center transition-all duration-1000",
              currentSlide === index
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}
            style={{ transform: `translateY(-${scrollY * 0.2}px)` }} // Slightly move text up faster
          >
            <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <div className="overflow-hidden mb-4">
                  <span className={cn(
                    "inline-block text-secondary-400 font-medium tracking-widest uppercase text-sm mb-2 transform transition-transform duration-700 delay-100 filter drop-shadow-sm",
                    currentSlide === index ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                  )}>
                    Arte Andino Premium
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white leading-[1.1] tracking-tight mb-6 drop-shadow-lg">
                  <span
                    className={cn(
                      "block transition-all duration-700 delay-200 transform",
                      currentSlide === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    )}
                  >
                    {slide.title.split(' ').slice(0, 3).join(' ')}
                  </span>
                  <span
                    className={cn(
                      "block text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400 transition-all duration-700 delay-300 transform",
                      currentSlide === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    )}
                  >
                    {slide.title.split(' ').slice(3).join(' ')}
                  </span>
                </h1>

                <p
                  className={cn(
                    "text-xl md:text-2xl text-neutral-300 max-w-2xl mb-10 font-light leading-relaxed drop-shadow-md transition-all duration-700 delay-500 transform",
                    currentSlide === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  )}
                >
                  {slide.subtitle}
                </p>

                <div
                  className={cn(
                    "flex flex-col sm:flex-row gap-5 transition-all duration-700 delay-700 transform",
                    currentSlide === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  )}
                >
                  <Button
                    size="lg"
                    className="rounded-full px-8 py-7 text-lg bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-900/20 group hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <Link href="/productos">
                      {slide.cta}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 py-7 text-lg border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <Link href="/artesanos" className="flex items-center">
                      <Play className="mr-2 h-4 w-4 fill-current" /> Ver Historia
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Indicators */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 flex flex-col space-y-4 hidden lg:flex">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group flex items-center space-x-4 focus:outline-none"
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className={cn(
              "text-xs font-medium transition-all duration-300",
              currentSlide === index ? "text-white opacity-100 translate-x-0" : "text-neutral-400 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
            )}>
              0{index + 1}
            </span>
            <div className={cn(
              "w-1 h-12 transition-all duration-500 rounded-full",
              currentSlide === index
                ? "h-16 bg-gradient-to-b from-primary-400 to-secondary-500 scale-y-110"
                : "bg-white/20 group-hover:bg-white/40"
            )} />
          </button>
        ))}
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center animate-bounce-slow cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <span className="text-xs uppercase tracking-widest text-neutral-400 mb-2">Descubre Más</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent"></div>
      </div>
    </div>
  );
}