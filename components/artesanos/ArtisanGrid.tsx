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
    image: 'https://images.pexels.com/photos/4498177/pexels-photo-4498177.jpeg',
    bio: 'Especialista en textiles tradicionales ayacuchanos con más de 25 años de experiencia.'
  },
  {
    id: 2,
    name: 'José Cárdenas',
    specialty: 'Tallados en Piedra',
    location: 'Huamanga, Ayacucho',
    rating: 4.9,
    reviews: 98,
    image: 'https://images.pexels.com/photos/8102319/pexels-photo-8102319.jpeg',
    bio: 'Maestro tallador de piedra de Huamanga, preservando técnicas ancestrales.'
  },
  {
    id: 3,
    name: 'Manuel Huamán',
    specialty: 'Retablos',
    location: 'San Juan Bautista, Ayacucho',
    rating: 4.7,
    reviews: 156,
    image: 'https://images.pexels.com/photos/8101520/pexels-photo-8101520.jpeg',
    bio: 'Artista reconocido por sus detallados retablos que narran historias andinas.'
  },
  {
    id: 4,
    name: 'Ana López',
    specialty: 'Cerámica',
    location: 'Huanta, Ayacucho',
    rating: 4.6,
    reviews: 89,
    image: 'https://images.pexels.com/photos/4498177/pexels-photo-4498177.jpeg',
    bio: 'Ceramista especializada en técnicas precolombinas y diseños contemporáneos.'
  },
  {
    id: 5,
    name: 'Rosa Mendoza',
    specialty: 'Textiles',
    location: 'Santillana, Ayacucho',
    rating: 4.8,
    reviews: 112,
    image: 'https://images.pexels.com/photos/8102319/pexels-photo-8102319.jpeg',
    bio: 'Tejedora experta en alpaca y lana de oveja con diseños únicos.'
  },
  {
    id: 6,
    name: 'Carlos Flores',
    specialty: 'Retablos',
    location: 'Ayacucho Centro',
    rating: 4.9,
    reviews: 134,
    image: 'https://images.pexels.com/photos/8101520/pexels-photo-8101520.jpeg',
    bio: 'Maestro retablista con reconocimientos nacionales e internacionales.'
  }
];

export default function ArtisanGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {artisans.map((artisan) => (
        <div key={artisan.id} className="group card-dark overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
          <div className="relative h-64 overflow-hidden">
            <Image
              src={artisan.image}
              alt={artisan.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            {/* Overlay content */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-full">
                  {artisan.specialty}
                </span>
                <div className="flex items-center text-white">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                  <span className="text-sm font-medium">{artisan.rating}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-neutral-100 group-hover:text-primary-400 transition-colors">{artisan.name}</h3>
                <p className="text-neutral-300">{artisan.specialty}</p>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-secondary-400 mr-1" />
                <span className="text-sm text-neutral-400">({artisan.reviews})</span>
              </div>
            </div>
            
            <div className="flex items-center text-neutral-400 mb-4">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-sm">{artisan.location}</span>
            </div>
            
            <p className="text-neutral-300 mb-6 text-sm leading-relaxed">{artisan.bio}</p>
            
            <div className="flex gap-3">
{/* === Botón Primario: Inspirado en tintes naturales y terracota === */}
<Button asChild className="flex-1">
  <Link 
    href={`/productos?artisan=${artisan.id}`}
    className="
      bg-red-700 text-white 
      hover:bg-red-800 
      focus:ring-4 focus:ring-red-300
      inline-flex items-center justify-center text-center
      font-semibold rounded-md px-4 py-2 
      transition-all duration-300 ease-in-out
      shadow-md hover:shadow-lg transform hover:-translate-y-0.5
    "
  >
    Ver Productos
  </Link>
</Button>

{/* === Botón Secundario para FONDO OSCURO (Corregido) === */}
<Button asChild className="flex-1">
  <Link 
    href={`/artesanos/${artisan.id}`}
    className="
      bg-transparent
      border-2 border-red-400
      text-red-300                  /* <-- ESTA CLASE CONTROLA EL COLOR DE TODO LO DE ADENTRO */
      hover:bg-red-900/50
      hover:text-white              /* Opcional: El texto se hace blanco en hover para más contraste */
      hover:border-red-300
      focus:ring-4 focus:ring-red-400
      inline-flex items-center justify-center text-center
      font-semibold rounded-md px-4 py-2
      transition-all duration-300 ease-in-out
    "
  >
    {/* Ahora, tanto el ícono como el texto heredarán el color de la clase `text-red-300`
      y se volverán blancos (`text-white`) al pasar el cursor por encima.
    */}
    <p className="text-red-300">
    Ver Perfil
    </p>
  </Link>
</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}