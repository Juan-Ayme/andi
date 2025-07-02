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
    // ESTILO: Fondo suave, más padding y tipografía mejorada para el título.
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Historias que Inspiran
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Descubre las experiencias de quienes ya disfrutan del alma de nuestras artesanías.
          </p>
        </div>
      
        <div className="relative max-w-4xl mx-auto">
          {/* Contenedor del Slider */}
          <div className="relative h-[28rem] sm:h-[26rem] overflow-hidden rounded-2xl">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={cn(
                  "absolute inset-0 transition-opacity duration-700 ease-in-out",
                  currentIndex === index ? "opacity-100" : "opacity-0"
                )}
              >
                {/* ESTILO: Tarjeta con layout mejorado, más padding y elemento decorativo */}
                <div className="relative w-full h-full bg-white shadow-xl rounded-2xl flex flex-col md:flex-row overflow-hidden">
                  
                  {/* Elemento decorativo de comillas */}
                  <Quote className="absolute top-6 right-6 h-20 w-20 text-slate-100/80 transform -rotate-12" />

                  {/* Contenido del testimonio */}
                  <div className="relative flex flex-col justify-between p-8 md:p-10 order-2 md:order-1 md:w-2/3">
                    <div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={cn(
                              "h-5 w-5", 
                              i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-slate-300"
                            )}
                          />
                        ))}
                      </div>
                      
                      <blockquote className="font-playfair text-xl sm:text-2xl text-slate-800 leading-snug italic">
                        {testimonial.content}
                      </blockquote>
                    </div>
                    
                    <div className="flex items-center mt-6">
                      <div className="h-12 w-12 rounded-full overflow-hidden relative mr-4 border-2 border-white shadow-sm">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{testimonial.author}</div>
                        <div className="text-sm text-slate-500">{testimonial.location}</div>
                      </div>
                    </div>
                  </div>

                  {/* Imagen del autor (visible en desktop) */}
                  <div className="hidden md:block md:w-1/3 relative order-1 md:order-2">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      sizes="(max-width: 768px) 0, 33vw"
                      className="object-cover h-full w-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* RESPONSIVIDAD Y ESTILO: Controles de navegación rediseñados y fuera del contenido */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    currentIndex === index ? "w-6 bg-emerald-600" : "w-2 bg-slate-300 hover:bg-slate-400"
                  )}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 rounded-full text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}