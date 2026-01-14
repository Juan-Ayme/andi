'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

// Datos de ejemplo (sin cambios)
const testimonials = [
  {
    id: 1,
    content: "Los textiles que compré son absolutamente hermosos y de una calidad excepcional. El proceso de personalización fue simple y el resultado superó mis expectativas. Además, me encantó poder conocer la historia de María, la artesana que elaboró mi manta.",
    author: "Carolina Martínez",
    location: "Lima, Perú",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    content: "Compré un retablo personalizado como regalo de aniversario y fue todo un éxito. El nivel de detalle es impresionante y el hecho de que pudiera incluir elementos significativos para nosotros lo hizo aún más especial. Definitivamente volveré a comprar.",
    author: "Miguel Sánchez",
    location: "Madrid, España",
    rating: 5,
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    content: "La experiencia de compra fue fluida y la atención al cliente excepcional. Me mantuvieron informado durante todo el proceso de elaboración de mi pieza y el envío fue más rápido de lo esperado. La calidad del tallado en piedra de Huamanga es extraordinaria.",
    author: "Ana Gómez",
    location: "Bogotá, Colombia",
    rating: 4,
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 8000); // Cambia cada 8 segundos
    return () => clearInterval(timer);
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-neutral-50 dark:bg-neutral-950 py-20 sm:py-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-600 dark:text-primary-400 font-bold tracking-widest uppercase text-xs mb-3 block">
            Testimonios
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight">
            Historias que Inspiran
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Descubre las experiencias de quienes ya disfrutan del alma de nuestras artesanías.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Slider Container */}
          <div className="relative h-[28rem] sm:h-[26rem] overflow-visible">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute inset-0 transition-all duration-700 ease-out transform",
                  currentIndex === index ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-95 pointer-events-none"
                )}
              >
                <div className="relative w-full h-full bg-white dark:bg-neutral-800 shadow-2xl rounded-3xl flex flex-col md:flex-row overflow-hidden border border-neutral-100 dark:border-neutral-700">

                  {/* Decorative Quote */}
                  <Quote className="absolute top-6 right-6 h-20 w-20 text-neutral-100 dark:text-neutral-700 transform -rotate-12" />

                  {/* Content */}
                  <div className="relative flex flex-col justify-between p-8 md:p-12 order-2 md:order-1 md:w-2/3 z-10">
                    <div>
                      <div className="flex mb-6 space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-4 w-4",
                              i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-neutral-300 dark:text-neutral-600"
                            )}
                          />
                        ))}
                      </div>

                      <blockquote className="font-playfair text-xl sm:text-2xl text-neutral-800 dark:text-neutral-100 leading-relaxed italic">
                        "{testimonial.content}"
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-700">
                      <div className="h-12 w-12 rounded-full overflow-hidden relative mr-4 ring-2 ring-primary-100 dark:ring-primary-900">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-neutral-900 dark:text-white text-lg">{testimonial.author}</div>
                        <div className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">{testimonial.location}</div>
                      </div>
                    </div>
                  </div>

                  {/* Image (Desktop) */}
                  <div className="hidden md:block md:w-1/3 relative order-1 md:order-2">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      sizes="(max-width: 768px) 0, 33vw"
                      className="object-cover h-full w-full opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={goToPrevious}
              className="p-3 rounded-full bg-white dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700 shadow-md transition-all hover:scale-110"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    currentIndex === index ? "w-8 bg-primary-600" : "w-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400"
                  )}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-3 rounded-full bg-white dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700 shadow-md transition-all hover:scale-110"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}