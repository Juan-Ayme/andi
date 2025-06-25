'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Heart, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Interfaz y datos de ejemplo
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  artisan: string;
}

const featuredProducts = [
  {
    id: 1,
    name: 'Retablo Ayacuchano Tradicional',
    description: 'Retablo hecho a mano con escenas tradicionales ayacuchanas',
    price: 250,
    image: 'https://ayacuchoemprende.com/wp-content/uploads/2023/12/EFRAIN-SANCHEZ-RETABLO-TRADICIONAL-COSECHA-DE-TUNA-ayacucho-artesania.jpg',
    category: 'Retablos',
    artisan: 'Manuel Huamán'
  },
  {
    id: 2,
    name: 'Tapiz de Lana Natural',
    description: 'Tapiz tejido a mano con tintes naturales y diseños ancestrales',
    price: 180,
    image: 'https://lareallana.com/wp-content/uploads/2023/05/Tapiz-ALBA_IMG_1325-.jpg',
    category: 'Textiles',
    artisan: 'María Quispe'
  },
  {
    id: 3,
    name: 'Escultura en Piedra de Huamanga',
    description: 'Delicada escultura tallada en piedra de Huamanga con motivos andinos',
    price: 320,
    image: 'https://d20f60vzbd93dl.cloudfront.net/uploads/tienda_009057/tienda_009057_524ceac3bdf9cc08b6098f3090e79bb480de271d_producto_large_90.jpg?not-from-cache-please',
    category: 'Tallados',
    artisan: 'José Cárdenas'
  },
  {
    id: 4,
    name: 'Cerámica Decorativa Tradicional',
    description: 'Pieza de cerámica decorativa con diseños precolombinos',
    price: 150,
    image: 'https://img.kwcdn.com/product/fancy/c8ca8325-c167-403d-bbc1-2d57742608ff.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp',
    category: 'Cerámica',
    artisan: 'Luisa Mendoza'
  }
];

export default function FeaturedProducts() {
  const [likedProducts, setLikedProducts] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLikedProducts(prev => 
      prev.includes(id) ? prev.filter(prodId => prodId !== id) : [...prev, id]
    );
  };

  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Productos Destacados</h2>
            <p className="mt-2 text-lg text-slate-600">Una selección curada de nuestras piezas más excepcionales.</p>
          </div>
          <Link 
            href="/productos" 
            className="hidden md:inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-colors group"
          >
            <span>Ver toda la colección</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg bg-neutral-800 transition-shadow duration-300 hover:shadow-2xl"
            >
              {/* Capa 1: Imagen del Producto */}
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              
              {/* Capa 2: Gradiente que aparece en hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>

              {/* Capa 3: Contenido que aparece en hover */}
              <div className="absolute inset-0 flex flex-col justify-between p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                
                {/* -- Contenido Superior (Acciones rápidas) -- */}
                <div className="flex justify-between items-start">
                  <Link href={`/productos?category=${product.category}`} className="text-xs font-bold bg-white/20 backdrop-blur-sm text-emerald-600 px-3 py-1 rounded-full hover:bg-white/30 transition-colors">
                    {product.category}
                  </Link>
                  <div className="flex flex-col gap-2 transform translate-x-4 group-hover:translate-x-0 transition-transform duration-300" style={{ transitionDelay: `${200 + index * 50}ms` }}>
                     <button
                        onClick={() => toggleLike(product.id)}
                        aria-label="Añadir a favoritos"
                        className={cn(
                          "p-2 rounded-full bg-black/30 backdrop-blur-sm transition-colors duration-300",
                          likedProducts.includes(product.id) ? "text-red-500" : "text-white hover:text-red-400"
                        )}
                      >
                        <Heart className={cn("h-5 w-5", likedProducts.includes(product.id) && "fill-current")} />
                      </button>
                  </div>
                </div>

                {/* -- Contenido Inferior (Información y CTA) -- */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" style={{ transitionDelay: `${100 + index * 50}ms` }}>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-snug" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>{product.name}</h3>
                    <p className="text-white text-sm font-medium text-neutral-300">Por {product.artisan}</p>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                     <p className="text-xl font-semibold text-emerald-400" style={{ textShadow: '0 1px 5px rgba(0,0,0,0.7)' }}>S/ {product.price.toFixed(2)}</p>
                     <Link href={`/productos/item/${product.id}`} className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-emerald-500 transition-colors duration-300" aria-label="Ver producto">
                       <ShoppingCart className="h-5 w-5" />
                     </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link 
            href="/productos" 
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-colors group"
          >
            <span>Ver toda la colección</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
