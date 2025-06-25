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
                <div className="flex items-center text-white">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                  <span className="text-sm font-medium">{artisan.rating}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
                  <div className="space-y-2">
                    <h3 className="
                        text-xl font-bold text-neutral-100
                        group-hover:text-emerald-400 transition-colors duration-300
                      ">
                      {artisan.name}
                    </h3>
                    <p className="
                        inline-block px-3 py-1 text-xs font-semibold
                        bg-emerald-500/10 text-emerald-500 
                        rounded-full ring-1 ring-inset ring-emerald-500/20
                      ">
                      {artisan.specialty}
                    </p>
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
      /* --- Paleta de Colores Verde Pastel --- */
      bg-emerald-500 text-white 
      hover:bg-emerald-600 
      focus:ring-4 focus:ring-emerald-300

      /* --- Estilos y Transiciones (se mantienen) --- */
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
      /* --- Paleta de Colores Verde Pastel (para fondo oscuro) --- */
      bg-transparent
      border-2 border-emerald-400
      !text-emerald-400
      hover:bg-emerald-200  /* <-- Un fondo traslúcido sutil en hover */
      hover:!text-emerald-500
      hover:border-emerald-200
      focus:ring-4 focus:ring-emerald-00

      /* --- Estilos y Transiciones (se mantienen) --- */
      inline-flex items-center justify-center text-center
      font-semibold rounded-md px-4 py-2
      transition-all duration-300 ease-in-out
    "
  >
    {/* El texto hereda el color de `text-emerald-300` y cambia con `hover:text-white` */}
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