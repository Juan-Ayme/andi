'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Star, Award, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const artisans = [
  {
    id: 1,
    name: 'María Quispe',
    specialty: 'Textiles',
    location: 'Quinua, Ayacucho',
    rating: 4.8,
    reviews: 124,
    image: 'https://acgnoticias.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-19-at-9.58.52-AM-3.jpeg',
    bio: 'Especialista en textiles tradicionales ayacuchanos con más de 25 años de experiencia.'
  },
  {
    id: 2,
    name: 'José Cárdenas',
    specialty: 'Tallados en Piedra',
    location: 'Huamanga, Ayacucho',
    rating: 4.9,
    reviews: 98,
    image: 'https://cdn-3.expansion.mx/dims4/default/77e8e39/2147483647/strip/true/crop/1800x1197+0+0/resize/1800x1197!/format/webp/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fc7%2F4e%2F3253ac5b44de81dbc39617b69b1f%2Fsb-8658.JPG',
    bio: 'Maestro tallador de piedra de Huamanga, preservando técnicas ancestrales.'
  },
  {
    id: 3,
    name: 'Manuel Huamán',
    specialty: 'Retablos',
    location: 'San Juan Bautista, Ayacucho',
    rating: 4.7,
    reviews: 156,
    image: 'https://i0.wp.com/criterionoticias.wordpress.com/wp-content/uploads/2018/03/profesionalizacic3b3n-artesanos-foto-portada.jpg?fit=1200%2C800&ssl=1',
    bio: 'Artista reconocido por sus detallados retablos que narran historias andinas.'
  },
  {
    id: 4,
    name: 'Ana López',
    specialty: 'Cerámica',
    location: 'Huanta, Ayacucho',
    rating: 4.6,
    reviews: 89,
    image: 'https://fahho.mx/wp-content/uploads/2021/02/artepopular_FAHHO_SAT.jpg',
    bio: 'Ceramista especializada en técnicas precolombinas y diseños contemporáneos.'
  },
  {
    id: 5,
    name: 'Rosa Mendoza',
    specialty: 'Textiles',
    location: 'Santillana, Ayacucho',
    rating: 4.8,
    reviews: 112,
    image: 'https://cdn.shopify.com/s/files/1/0861/3888/0286/files/Casa_Nochipa_27_480x480.png?v=1718660222',
    bio: 'Tejedora experta en alpaca y lana de oveja con diseños únicos.'
  },
  {
    id: 6,
    name: 'Carlos Flores',
    specialty: 'Retablos',
    location: 'Ayacucho Centro',
    rating: 4.9,
    reviews: 134,
    image: 'https://cdn.shopify.com/s/files/1/0861/3888/0286/files/Casa_Nochipa_26_480x480.png?v=1718660089',
    bio: 'Maestro retablista con reconocimientos nacionales e internacionales.'
  }
];

export default function ArtisanGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {artisans.map((artisan, index) => (
        <div
          key={artisan.id}
          className="group bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="relative h-72 overflow-hidden">
            <Image
              src={artisan.image}
              alt={artisan.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

            {/* Overlay content */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full border border-white/10">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-white">{artisan.rating}</span>
                </div>
                <div className="bg-primary-600/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">{artisan.specialty}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="space-y-1">
                <h3 className="
                        text-2xl font-playfair font-bold text-neutral-900 dark:text-neutral-100
                        group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300
                      ">
                  {artisan.name}
                </h3>
                <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm">
                  <MapPin className="h-3.5 w-3.5 mr-1.5 text-primary-500" />
                  <span>{artisan.location}</span>
                </div>
              </div>
            </div>

            <p className="text-neutral-600 dark:text-neutral-300 mb-6 text-sm leading-relaxed line-clamp-2">
              "{artisan.bio}"
            </p>

            <div className="grid grid-cols-2 gap-3 mt-auto">
              <Button asChild variant="default" className="w-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 hover:dark:bg-neutral-200">
                <Link href={`/productos?artisan=${artisan.id}`}>
                  Ver Productos
                </Link>
              </Button>

              <Button asChild variant="outline" className="w-full border-neutral-200 dark:border-neutral-700 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Link href={`/artesanos/${artisan.id}`}>
                  <Eye className="h-4 w-4 mr-2" />
                  Ver Perfil
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}